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

//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[0]= "1)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[0]= new Array();
 choices[0][0] = "Tres a&ntilde;os.";
 choices[0][1] = "Dos a&ntilde;os y medio.";
 choices[0][2] = "Cinco a&ntilde;os.";
 choices[0][3] = "Seis a&ntilde;os.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 291. UNION EUROPEA";
 preguntaids[0] = 291


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[1]= "2)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Medidas de igualdad.";
 choices[1][1] = "Objetivos de igualdad.";
 choices[1][2] = "Ambas son correctas.";
 choices[1][3] = "A y B son incorrectas.";
 answers[1] = choices[1][2];
 units[1] = "14";
 comments[1] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";
 preguntaids[1] = 403


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[2]= "3)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Un informe de impacto de g&eacute;nero.";
 choices[2][1] = "Un programa de igualdad de oportunidades.";
 choices[2][2] = "Un plan de Igualdad de Oportunidades.";
 choices[2][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[2] = choices[2][0];
 units[2] = "14";
 comments[2] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[2] = 414


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
 preguntaids[3] = 168


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[4]= new Array();
 choices[4][0] = "Programa de Educaci&oacute;n Digital";
 choices[4][1] = "Programa de Salud y Bienestar Social";
 choices[4][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[4][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[4] = choices[4][3];
 units[4] = "19";
 comments[4] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";
 preguntaids[4] = 756


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[5]= new Array();
 choices[5][0] = "Yarn";
 choices[5][1] = "Flume";
 choices[5][2] = "Hive";
 choices[5][3] = "BizAgi";
 answers[5] = choices[5][3];
 units[5] = "73";
 comments[5] = "Id Pregunta: 657. ";
 preguntaids[5] = 657


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[6]= "7)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[6]= new Array();
 choices[6][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[6][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[6][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[6][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[6] = 236


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[7]= new Array();
 choices[7][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[7][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[7][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[7][3] = "Todas lo son";
 answers[7] = choices[7][0];
 units[7] = "17";
 comments[7] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";
 preguntaids[7] = 555


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[8]= new Array();
 choices[8][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[8][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[8][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[8][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[8] = choices[8][2];
 units[8] = "26";
 comments[8] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[8] = 8


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[9]= "10)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[9]= new Array();
 choices[9][0] = "El presidente de las Cortes Generales.";
 choices[9][1] = "El Presidente del Gobierno.";
 choices[9][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[9][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[9] = choices[9][3];
 units[9] = "10";
 comments[9] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[9] = 502


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[10]= new Array();
 choices[10][0] = "absoluta de las Cortes Generales.";
 choices[10][1] = "absoluta del Congreso de los Diputados.";
 choices[10][2] = "simple de las Cortes Generales.";
 choices[10][3] = "simple del Congreso de los Diputados.";
 answers[10] = choices[10][3];
 units[10] = "1";
 comments[10] = "Id Pregunta: 173. CONSTITUCION1978";
 preguntaids[10] = 173


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[11]= new Array();
 choices[11][0] = "Agenda digital para Europa";
 choices[11][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[11][2] = "Juventud en movimiento";
 choices[11][3] = "Agenda Web 2.0";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 760. Europa 2020";
 preguntaids[11] = 760


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[12]= "13)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[12]= new Array();
 choices[12][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[12][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[12][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[12][3] = "Todas son correctas.";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 842. Ley 40/2015";
 preguntaids[12] = 842


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[13]= "14)  En qu&eacute; consiste el principio BASE:";
 choices[13]= new Array();
 choices[13][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[13][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[13][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[13][3] = "Todas las anteriores son falsas";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 103. ";
 preguntaids[13] = 103


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[14]= "15)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[14]= new Array();
 choices[14][0] = "Entradas (entities).";
 choices[14][1] = "Atributos (attribs).";
 choices[14][2] = "M&oacute;dulos (modules).";
 choices[14][3] = "Objetos (objects).";
 answers[14] = choices[14][0];
 units[14] = "74";
 comments[14] = "Id Pregunta: 624. Junta de Extremadura A1 2015";
 preguntaids[14] = 624


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[15]= new Array();
 choices[15][0] = "Avro";
 choices[15][1] = "Sqoop";
 choices[15][2] = "UIMA";
 choices[15][3] = "Jaql";
 answers[15] = choices[15][1];
 units[15] = "73";
 comments[15] = "Id Pregunta: 662. ";
 preguntaids[15] = 662


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[16]= "17)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[16]= new Array();
 choices[16][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[16][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[16][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[16][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[16] = choices[16][2];
 units[16] = "7";
 comments[16] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[16] = 529


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[17]= "18)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[17]= new Array();
 choices[17][0] = "De las disposiciones favorables.";
 choices[17][1] = "De las disposiciones sancionadoras no favorables.";
 choices[17][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[17][3] = "Las respuestas b) y c) son correctas.";
 answers[17] = choices[17][3];
 units[17] = "1";
 comments[17] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[17] = 252


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[18]= new Array();
 choices[18][0] = "La CETIC";
 choices[18][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[18][2] = "La DTIC";
 choices[18][3] = "Ninguno de los anteriores";
 answers[18] = choices[18][1];
 units[18] = "19";
 comments[18] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[18] = 587


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[19]= new Array();
 choices[19][0] = "Un diputado y un senador, cada una de ellas";
 choices[19][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[19][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[19][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 192. CONSTITUCION1978";
 preguntaids[19] = 192


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[20]= "21)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[20]= new Array();
 choices[20][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[20][1] = "el Consejo de Estado";
 choices[20][2] = "el Congreso";
 choices[20][3] = "las Cortes Generales";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[20] = 785


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[21]= "22)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[21]= new Array();
 choices[21][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[21][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[21][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[21][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[21] = choices[21][3];
 units[21] = "14";
 comments[21] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";
 preguntaids[21] = 380


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[22]= "23)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[22][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[22][2] = "b) y d) son verdaderas";
 choices[22][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[22] = choices[22][1];
 units[22] = "23";
 comments[22] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[22] = 753


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[23]= new Array();
 choices[23][0] = "Art. 25 LO, 3/2007.";
 choices[23][1] = "Art. 23 LO, 3/2007.";
 choices[23][2] = "Art. 14 LO, 3/2007.";
 choices[23][3] = "Ninguna es correcta, es el art. 13.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[23] = 416


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[24]= "25)  Son bases de datos NoSQL orientadas a objetos:";
 choices[24]= new Array();
 choices[24][0] = "GemStone";
 choices[24][1] = "Zope Object DB";
 choices[24][2] = "Las dos anteriores";
 choices[24][3] = "Solo B)";
 answers[24] = choices[24][2];
 units[24] = "73";
 comments[24] = "Id Pregunta: 107. ";
 preguntaids[24] = 107


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[25]= "26)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[25]= new Array();
 choices[25][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[25][1] = "La CETIC";
 choices[25][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[25][3] = "El MHFP";
 answers[25] = choices[25][0];
 units[25] = "19";
 comments[25] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[25] = 595


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[26]= "27)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[26]= new Array();
 choices[26][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[26][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[26][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[26][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[26] = choices[26][2];
 units[26] = "43";
 comments[26] = "Id Pregunta: 435. SERVICIOS COMUNES";
 preguntaids[26] = 435


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[27]= new Array();
 choices[27][0] = "al menos por 50 Diputados.";
 choices[27][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[27][2] = "por la Mesa del Congreso de los Diputados.";
 choices[27][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[27] = 183


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; es SonarQube?";
 choices[28]= new Array();
 choices[28][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[28][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[28][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[28][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[28] = choices[28][2];
 units[28] = "92";
 comments[28] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[28] = 700


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[29]= "30)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[29]= new Array();
 choices[29][0] = "Subsecretario";
 choices[29][1] = "Subdirector general";
 choices[29][2] = "Secretario de Estado";
 choices[29][3] = "ninguna es correcta";
 answers[29] = choices[29][1];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 792. Ley 40/2015";
 preguntaids[29] = 792


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[30]= new Array();
 choices[30][0] = "Entre 1973 y 1978";
 choices[30][1] = "Entre 1992 y 1996";
 choices[30][2] = "Entre 1978 y 1985";
 choices[30][3] = "Entre 2008 y 2013";
 answers[30] = choices[30][2];
 units[30] = "12";
 comments[30] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[30] = 564


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[31]= new Array();
 choices[31][0] = "La Comisi&oacute;n Permanente.";
 choices[31][1] = "El Presidente.";
 choices[31][2] = "El Pleno.";
 choices[31][3] = "El Vicepresidente.";
 answers[31] = choices[31][3];
 units[31] = "1";
 comments[31] = "Id Pregunta: 261. CONSTITUCION1978";
 preguntaids[31] = 261


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[32]= "33)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[32]= new Array();
 choices[32][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[32][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[32][2] = "el Ministerio del Interior";
 choices[32][3] = "la Administraci&oacute;n General del Estado";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[32] = 814


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[33]= "34)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[33]= new Array();
 choices[33][0] = "Las respuestas a) y b) son correctas.";
 choices[33][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[33][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[33][3] = "Las respuestas a) y b) no son correctas.";
 answers[33] = choices[33][0];
 units[33] = "10";
 comments[33] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";
 preguntaids[33] = 498


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[34]= new Array();
 choices[34][0] = "Selenium";
 choices[34][1] = "JUnit";
 choices[34][2] = "Jenkins";
 choices[34][3] = "JMeter";
 answers[34] = choices[34][2];
 units[34] = "92";
 comments[34] = "Id Pregunta: 703. INTEGRACION CONTINUA";
 preguntaids[34] = 703


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[35]= new Array();
 choices[35][0] = "Crecimiento sostenible";
 choices[35][1] = "Crecimiento inteligente";
 choices[35][2] = "Crecimiento digital";
 choices[35][3] = "Crecimiento integrador";
 answers[35] = choices[35][2];
 units[35] = "19";
 comments[35] = "Id Pregunta: 759. Europa 2020";
 preguntaids[35] = 759


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[36]= new Array();
 choices[36][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[36][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[36][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[36][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[36] = choices[36][2];
 units[36] = "22";
 comments[36] = "Id Pregunta: 706. Ley de transparencia";
 preguntaids[36] = 706


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[37]= new Array();
 choices[37][0] = "Backlog refinement";
 choices[37][1] = "Backlog grooming";
 choices[37][2] = "a y b son correctas";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][2];
 units[37] = "34, 84";
 comments[37] = "Id Pregunta: 729. Metodologias &aacute;giles";
 preguntaids[37] = 729


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Europeo.";
 choices[38][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[38][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[38][3] = "El Parlamento Europeo.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[38] = 313


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[39]= "40)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[39]= new Array();
 choices[39][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[39][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[39][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[39][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[39] = choices[39][2];
 units[39] = "12";
 comments[39] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[39] = 136


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[40]= "41)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[40]= new Array();
 choices[40][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[40][1] = "Unanimidad.";
 choices[40][2] = "Mayor&iacute;a cualificada.";
 choices[40][3] = "Mayor&iacute;a simple.";
 answers[40] = choices[40][3];
 units[40] = "5";
 comments[40] = "Id Pregunta: 365. UNION EUROPEA";
 preguntaids[40] = 365


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[41]= "42)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[41]= new Array();
 choices[41][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[41][1] = "Uno de sus miembros.";
 choices[41][2] = "La Comisi&oacute;n.";
 choices[41][3] = "Todas las respuestas son correctas.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 350. UNION EUROPEA";
 preguntaids[41] = 350


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[42]= "43)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[42]= new Array();
 choices[42][0] = "Reducir el gasto p&uacute;blico.";
 choices[42][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[42][2] = "Reducir el endeudamiento neto.";
 choices[42][3] = "Al Fondo de Contingencia.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";
 preguntaids[42] = 509


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[43]= new Array();
 choices[43][0] = "El Presidente del Senado.";
 choices[43][1] = "El Defensor del Pueblo.";
 choices[43][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[43][3] = "El Presidente del Gobierno.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 232. CONSTITUCION1978";
 preguntaids[43] = 232


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[44]= "45)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[44]= new Array();
 choices[44][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[44][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[44][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[44][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[44] = choices[44][0];
 units[44] = "43";
 comments[44] = "Id Pregunta: 437. SERVICIOS COMUNES";
 preguntaids[44] = 437


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[45]= new Array();
 choices[45][0] = "DoS";
 choices[45][1] = "Phishing";
 choices[45][2] = "Sniffing";
 choices[45][3] = "Spoofing";
 answers[45] = choices[45][3];
 units[45] = "119";
 comments[45] = "Id Pregunta: 54. AGE A1 2015";
 preguntaids[45] = 54


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[46]= "47)  Los Reglamentos no se caracterizan por:";
 choices[46]= new Array();
 choices[46][0] = "No poseer alcance general.";
 choices[46][1] = "Ser obligatorios.";
 choices[46][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[46][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 363. UNION EUROPEA";
 preguntaids[46] = 363


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[47]= "48)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[47]= new Array();
 choices[47][0] = "Prevenir las conductas discriminatorias.";
 choices[47][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[47][2] = "Todas son correctas.";
 choices[47][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[47] = choices[47][2];
 units[47] = "14";
 comments[47] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";
 preguntaids[47] = 409


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[48]= "49)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[48]= new Array();
 choices[48][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[48][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[48][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[48][3] = "Todas las anteriores son correctas.";
 answers[48] = choices[48][3];
 units[48] = "47";
 comments[48] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[48] = 676


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[49]= "50)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[49]= new Array();
 choices[49][0] = "Tener una estructura institucional.";
 choices[49][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[49][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[49][3] = "Todas las respuestas son correctas.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 377. UNION EUROPEA";
 preguntaids[49] = 377


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[50]= new Array();
 choices[50][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[50][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[50][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[50][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[50] = choices[50][2];
 units[50] = "77";
 comments[50] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";
 preguntaids[50] = 693


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[51]= new Array();
 choices[51][0] = "Orientaci&oacute;n a objetos";
 choices[51][1] = "MapReduce";
 choices[51][2] = "Pipeline filtering";
 choices[51][3] = "Programaci&oacute;n funcional";
 answers[51] = choices[51][1];
 units[51] = "73";
 comments[51] = "Id Pregunta: 661. ";
 preguntaids[51] = 661


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[52]= new Array();
 choices[52][0] = "Ley 3/2015";
 choices[52][1] = "Ley 6/2007";
 choices[52][2] = "Ley 5/1984";
 choices[52][3] = "Ley 5/2006";
 answers[52] = choices[52][0];
 units[52] = "22";
 comments[52] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[52] = 711


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[53]= "54)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[53]= new Array();
 choices[53][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[53][1] = "El Congreso de los Diputados.";
 choices[53][2] = "Las Cortes Generales.";
 choices[53][3] = "El Consejo de Ministros";
 answers[53] = choices[53][3];
 units[53] = "1";
 comments[53] = "Id Pregunta: 209. CONSTITUCION1978";
 preguntaids[53] = 209


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[54]= new Array();
 choices[54][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[54][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[54][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[54][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 319. UNION EUROPEA";
 preguntaids[54] = 319


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[55]= new Array();
 choices[55][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[55][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[55][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[55][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[55] = choices[55][1];
 units[55] = "125";
 comments[55] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[55] = 858


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[56]= new Array();
 choices[56][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[56][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[56][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[56][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[56] = choices[56][3];
 units[56] = "120";
 comments[56] = "Id Pregunta: 653. Junta de Extremadura A1 2015";
 preguntaids[56] = 653


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[57]= "58)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[57]= new Array();
 choices[57][0] = "P&uacute;blica.";
 choices[57][1] = "Privada.";
 choices[57][2] = "Ambas son correctas.";
 choices[57][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[57] = choices[57][0];
 units[57] = "14";
 comments[57] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";
 preguntaids[57] = 419


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[58]= new Array();
 choices[58][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[58][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[58][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[58][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 292. UNION EUROPEA";
 preguntaids[58] = 292


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[59]= new Array();
 choices[59][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[59][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[59][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[59][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[59] = 311


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[60]= "61)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[60]= new Array();
 choices[60][0] = "Discriminaci&oacute;n indirecta.";
 choices[60][1] = "Discriminaci&oacute;n directa.";
 choices[60][2] = "Discriminaci&oacute;n por maternidad.";
 choices[60][3] = "Discriminaci&oacute;n abusiva.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[60] = 395


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[61]= new Array();
 choices[61][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[61][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[61][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[61][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[61] = choices[61][2];
 units[61] = "7";
 comments[61] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[61] = 150


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[62]= "63)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[62]= new Array();
 choices[62][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[62][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[62][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[62][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[62] = choices[62][0];
 units[62] = "7";
 comments[62] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[62] = 673


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[63]= new Array();
 choices[63][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[63][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[63][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[63][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[63] = choices[63][1];
 units[63] = "14";
 comments[63] = "Id Pregunta: 680. Dependencia";
 preguntaids[63] = 680


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[64]= "65)  Componen la Comisi&oacute;n Europea:";
 choices[64]= new Array();
 choices[64][0] = "Un Comisario por cada Estado miembro.";
 choices[64][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[64][2] = "Dos Comisarios por cada Estado miembro.";
 choices[64][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 306. UNION EUROPEA";
 preguntaids[64] = 306


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[65]= new Array();
 choices[65][0] = "Nivel 7 - MPLS.";
 choices[65][1] = "Nivel 3 - RARP.";
 choices[65][2] = "Nivel 2 - HDLC.";
 choices[65][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[65] = choices[65][2];
 units[65] = "105";
 comments[65] = "Id Pregunta: 7. AGE A1 2015";
 preguntaids[65] = 7


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[66]= "67)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[66]= new Array();
 choices[66][0] = "Municipios, provincias y CCAA.";
 choices[66][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[66][2] = "En CCAA, 50 provincias y municipios.";
 choices[66][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[66] = choices[66][2];
 units[66] = "1";
 comments[66] = "Id Pregunta: 258. CONSTITUCION1978";
 preguntaids[66] = 258


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[67]= "68)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[67]= new Array();
 choices[67][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[67][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[67][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[67][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 678. Dependencia";
 preguntaids[67] = 678


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[68]= "69)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[68]= new Array();
 choices[68][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[68][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[68][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[68][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[68] = 670


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[69]= new Array();
 choices[69][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[69][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[69][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[69][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[69] = choices[69][2];
 units[69] = "71";
 comments[69] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[69] = 39


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[70]= "71)  Los criptosistemas pueden clasificarse en:";
 choices[70]= new Array();
 choices[70][0] = "Concretos, Estables e Inestables.";
 choices[70][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[70][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[70][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[70] = choices[70][3];
 units[70] = "76";
 comments[70] = "Id Pregunta: 603. Junta de Extremadura A1 2015";
 preguntaids[70] = 603


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[71]= new Array();
 choices[71][0] = "SPARQL";
 choices[71][1] = "UnQL";
 choices[71][2] = "XQUERY";
 choices[71][3] = "RQL";
 answers[71] = choices[71][0];
 units[71] = "74";
 comments[71] = "Id Pregunta: 23. AGE A1 2015";
 preguntaids[71] = 23


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[72]= "73)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[72]= new Array();
 choices[72][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[72][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[72][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[72][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[72] = choices[72][0];
 units[72] = "28";
 comments[72] = "Id Pregunta: 741. Estrategia TIC";
 preguntaids[72] = 741


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[73]= "74)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[73]= new Array();
 choices[73][0] = "Seguridad Social y AEAT";
 choices[73][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[73][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[73][3] = "Todos los anteriores";
 answers[73] = choices[73][3];
 units[73] = "19";
 comments[73] = "Id Pregunta: 596. Estrategia TIC";
 preguntaids[73] = 596


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[74]= "75)  En el lenguaje de modelado UML :";
 choices[74]= new Array();
 choices[74][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[74][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[74][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[74][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[74] = choices[74][2];
 units[74] = "89";
 comments[74] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[74] = 3


