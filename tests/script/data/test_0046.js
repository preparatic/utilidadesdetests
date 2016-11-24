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

//  Id pregunta: 10620 Año de creación de pregunta: 2016
 questions[0]= "1)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[0]= new Array();
 choices[0][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[0][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[0][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[0][3] = "Todas las respuestas son correctas.";
 answers[0] = choices[0][3];
 units[0] = "50";
 comments[0] = "Id Pregunta: 10620. Junta de Extremadura A1 2015";


//  Id pregunta: 10393 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[1]= new Array();
 choices[1][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[1][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[1][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[1][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 10393. POLITICAS DE IGUALDAD";


//  Id pregunta: 10492 Año de creación de pregunta: 2016
 questions[2]= "3)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[2]= new Array();
 choices[2][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[2][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[2][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[2][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[3]= new Array();
 choices[3][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[3][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[3][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[3][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[3] = choices[3][3];
 units[3] = "46";
 comments[3] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10255 Año de creación de pregunta: 2016
 questions[4]= "5)  La soberan&iacute;a nacional reside en:";
 choices[4]= new Array();
 choices[4][0] = "el Parlamento nacional.";
 choices[4][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[4][2] = "el pueblo espa&ntilde;ol.";
 choices[4][3] = "el Congreso y el Senado.";
 answers[4] = choices[4][3];
 units[4] = "1";
 comments[4] = "Id Pregunta: 10255. CONSTITUCION1978";


//  Id pregunta: 10295 Año de creación de pregunta: 2016
 questions[5]= "6)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[5]= new Array();
 choices[5][0] = "Estrasburgo.";
 choices[5][1] = "Bruselas.";
 choices[5][2] = "Luxemburgo.";
 choices[5][3] = "Holanda.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10606 Año de creación de pregunta: 2016
 questions[6]= "7)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[6]= new Array();
 choices[6][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[6][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[6][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[6][3] = "Todas las respuestas son correctas.";
 answers[6] = choices[6][1];
 units[6] = "101";
 comments[6] = "Id Pregunta: 10606. Junta de Extremadura A1 2015";


//  Id pregunta: 10071 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[7]= new Array();
 choices[7][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[7][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[7][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[7][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[7] = choices[7][0];
 units[7] = "86";
 comments[7] = "Id Pregunta: 10071. AGE A1 2015";


//  Id pregunta: 10363 Año de creación de pregunta: 2016
 questions[8]= "9)  Los Reglamentos no se caracterizan por:";
 choices[8]= new Array();
 choices[8][0] = "No poseer alcance general.";
 choices[8][1] = "Ser obligatorios.";
 choices[8][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[8][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[8] = choices[8][0];
 units[8] = "5";
 comments[8] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10115 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[9]= new Array();
 choices[9][0] = "El Tratado de Lisboa";
 choices[9][1] = "El Tratado de Amsterdam";
 choices[9][2] = "El Tratado de Niza";
 choices[9][3] = "El Acta &Uacute;nica Europea";
 answers[9] = choices[9][1];
 units[9] = "15";
 comments[9] = "Id Pregunta: 10115. ";


//  Id pregunta: 10105 Año de creación de pregunta: 2016
 questions[10]= "11)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[10]= new Array();
 choices[10][0] = "Gran volumen de informaci&oacute;n";
 choices[10][1] = "Gran variedad de datos";
 choices[10][2] = "Se analizan datos a gran velocidad";
 choices[10][3] = "Todas las anteriores son verdaderas";
 answers[10] = choices[10][3];
 units[10] = "73";
 comments[10] = "Id Pregunta: 10105. ";


//  Id pregunta: 10502 Año de creación de pregunta: 2016
 questions[11]= "12)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[11]= new Array();
 choices[11][0] = "Principio de transparencia.";
 choices[11][1] = "Principio de cooperaci&oacute;n.";
 choices[11][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[11][3] = "Principio de lealtad institucional.";
 answers[11] = choices[11][1];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[12]= "13)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[12]= new Array();
 choices[12][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[12][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[12][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[12][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10014 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale la respuesta correcta:";
 choices[13]= new Array();
 choices[13][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[13][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[13][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[13][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[13] = choices[13][1];
 units[13] = "98";
 comments[13] = "Id Pregunta: 10014. AGE A1 2015";


//  Id pregunta: 10538 Año de creación de pregunta: 2016
 questions[14]= "15)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[14]= new Array();
 choices[14][0] = "los registros mercantiles";
 choices[14][1] = "los registros de la propiedad";
 choices[14][2] = "los protocolos notariales";
 choices[14][3] = "todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "7";
 comments[14] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10008 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[15]= new Array();
 choices[15][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[15][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[15][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[15][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[15] = choices[15][2];
 units[15] = "26";
 comments[15] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10238 Año de creación de pregunta: 2016
 questions[16]= "17)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[16]= new Array();
 choices[16][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[16][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[16][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[16][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[16] = choices[16][1];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10238. CONSTITUCION1978";


//  Id pregunta: 10618 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[17]= new Array();
 choices[17][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[17][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[17][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[17][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[17] = choices[17][2];
 units[17] = "85";
 comments[17] = "Id Pregunta: 10618. Junta de Extremadura A1 2015";


//  Id pregunta: 10414 Año de creación de pregunta: 2016
 questions[18]= "19)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Un informe de impacto de g&eacute;nero.";
 choices[18][1] = "Un programa de igualdad de oportunidades.";
 choices[18][2] = "Un plan de Igualdad de Oportunidades.";
 choices[18][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[18] = choices[18][0];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10373 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[19]= new Array();
 choices[19][0] = "Nueve.";
 choices[19][1] = "Diez.";
 choices[19][2] = "Siete.";
 choices[19][3] = "Ocho.";
 answers[19] = choices[19][3];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10028 Año de creación de pregunta: 2016
 questions[20]= "21)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[20]= new Array();
 choices[20][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[20][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[20][2] = "Crea una copia del proceso que hace la llamada.";
 choices[20][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[20] = choices[20][2];
 units[20] = "57";
 comments[20] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10498 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[21]= new Array();
 choices[21][0] = "En t&iacute;tulos-valores.";
 choices[21][1] = "Las respuestas a) y b) son correctas.";
 choices[21][2] = "Las respuestas a) y b) no son correctas.";
 choices[21][3] = "En cuenta.";
 answers[21] = choices[21][1];
 units[21] = "10";
 comments[21] = "Id Pregunta: 10498. PRESUPUESTOS GENERALES";


//  Id pregunta: 10496 Año de creación de pregunta: 2016
 questions[22]= "23)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[22]= new Array();
 choices[22][0] = "Las respuestas a) y b) son correctas.";
 choices[22][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[22][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[22][3] = "Las respuestas a) y b) no son correctas.";
 answers[22] = choices[22][0];
 units[22] = "10";
 comments[22] = "Id Pregunta: 10496. PRESUPUESTOS GENERALES";


//  Id pregunta: 10154 Año de creación de pregunta: 2016
 questions[23]= "24)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[23]= new Array();
 choices[23][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[23][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[23][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[23][3] = "todas son correctas";
 answers[23] = choices[23][3];
 units[23] = "7";
 comments[23] = "Id Pregunta: 10154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10232 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[24]= new Array();
 choices[24][0] = "El Presidente del Senado.";
 choices[24][1] = "El Defensor del Pueblo.";
 choices[24][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[24][3] = "El Presidente del Gobierno.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 10232. CONSTITUCION1978";


//  Id pregunta: 10185 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[25]= new Array();
 choices[25][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[25][1] = "Autorizar indultos generales.";
 choices[25][2] = "Sancionar las leyes.";
 choices[25][3] = "Promulgar las leyes.";
 answers[25] = choices[25][1];
 units[25] = "1";
 comments[25] = "Id Pregunta: 10185. CONSTITUCION1978";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[26]= "27)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[26]= new Array();
 choices[26][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[26][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[26][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[26][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[26] = choices[26][0];
 units[26] = "65";
 comments[26] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10061 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Lollipop";
 choices[27][1] = "Jelly Bean";
 choices[27][2] = "Marshmallow";
 choices[27][3] = "KitKat";
 answers[27] = choices[27][2];
 units[27] = "59";
 comments[27] = "Id Pregunta: 10061. AGE A1 2015";


//  Id pregunta: 10354 Año de creación de pregunta: 2016
 questions[28]= "29)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[28]= new Array();
 choices[28][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[28][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[28][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[28][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[28] = choices[28][2];
 units[28] = "5";
 comments[28] = "Id Pregunta: 10354. UNION EUROPEA";


//  Id pregunta: 10051 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[29]= new Array();
 choices[29][0] = "Cifrado de las comunicaciones";
 choices[29][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[29][2] = "Registro de los accesos";
 choices[29][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[29] = choices[29][1];
 units[29] = "35";
 comments[29] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10332 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[30]= new Array();
 choices[30][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[30][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[30][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[30][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[30] = choices[30][3];
 units[30] = "5";
 comments[30] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10076 Año de creación de pregunta: 2016
 questions[31]= "32)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[31]= new Array();
 choices[31][0] = "Estrat&eacute;gico";
 choices[31][1] = "Operativo";
 choices[31][2] = "T&aacute;ctico";
 choices[31][3] = "Tecnol&oacute;gico";
 answers[31] = choices[31][0];
 units[31] = "36";
 comments[31] = "Id Pregunta: 10076. AGE A1 2015";


//  Id pregunta: 10444 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[32]= new Array();
 choices[32][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[32][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[32][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[32][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10409 Año de creación de pregunta: 2016
 questions[33]= "34)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[33]= new Array();
 choices[33][0] = "Prevenir las conductas discriminatorias.";
 choices[33][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[33][2] = "Todas son correctas.";
 choices[33][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 10409. POLITICAS DE IGUALDAD";


//  Id pregunta: 10305 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[34]= new Array();
 choices[34][0] = "Estrasburgo.";
 choices[34][1] = "Bruselas.";
 choices[34][2] = "Luxemburgo.";
 choices[34][3] = "Par&iacute;s.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10635 Año de creación de pregunta: 2016
 questions[35]= "36)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[35]= new Array();
 choices[35][0] = "Relaciones base y vistas.";
 choices[35][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[35][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[35][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[35] = choices[35][3];
 units[35] = "60";
 comments[35] = "Id Pregunta: 10635. Junta de Extremadura A1 2015";


//  Id pregunta: 10112 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[36]= new Array();
 choices[36][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[36][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[36][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[36][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[36] = choices[36][1];
 units[36] = "15";
 comments[36] = "Id Pregunta: 10112. ";


//  Id pregunta: 10304 Año de creación de pregunta: 2016
 questions[37]= "38)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[37]= new Array();
 choices[37][0] = "Cinco a&ntilde;os.";
 choices[37][1] = "Seis a&ntilde;os.";
 choices[37][2] = "Cuatro a&ntilde;os.";
 choices[37][3] = "Tres a&ntilde;os.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 10304. UNION EUROPEA";


//  Id pregunta: 10666 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el cumplimiento de tr&aacute;mites por defecto es de:";
 choices[38]= new Array();
 choices[38][0] = "10 d&iacute;as.";
 choices[38][1] = "15 d&iacute;as.";
 choices[38][2] = "1 mes.";
 choices[38][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[38] = choices[38][0];
 units[38] = "7";
 comments[38] = "Id Pregunta: 10666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 10403 Año de creación de pregunta: 2016
 questions[39]= "40)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[39]= new Array();
 choices[39][0] = "Medidas de igualdad.";
 choices[39][1] = "Objetivos de igualdad.";
 choices[39][2] = "Ambas son correctas.";
 choices[39][3] = "A y B son incorrectas.";
 answers[39] = choices[39][2];
 units[39] = "14";
 comments[39] = "Id Pregunta: 10403. POLITICAS DE IGUALDAD";


//  Id pregunta: 10657 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; es el machine learning?";
 choices[40]= new Array();
 choices[40][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[40][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[40][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[40][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[40] = choices[40][0];
 units[40] = "73";
 comments[40] = "Id Pregunta: 10657. ";


//  Id pregunta: 10334 Año de creación de pregunta: 2016
 questions[41]= "42)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[41]= new Array();
 choices[41][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[41][1] = "Ninguna de las respuestas es correcta.";
 choices[41][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[41][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10334. UNION EUROPEA";


//  Id pregunta: 10164 Año de creación de pregunta: 2016
 questions[42]= "43)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[42]= new Array();
 choices[42][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[42][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[42][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[42][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[42] = choices[42][1];
 units[42] = "19";
 comments[42] = "Id Pregunta: 10164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 10664 Año de creación de pregunta: 2016
 questions[43]= "44)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[43]= new Array();
 choices[43][0] = "Siempre en formato electr&oacute;nico.";
 choices[43][1] = "Siempre en formato papel.";
 choices[43][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[43][3] = "La ley no regula el formato del expediente.";
 answers[43] = choices[43][0];
 units[43] = "7";
 comments[43] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10493 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[44]= new Array();
 choices[44][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[44][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[44][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[44][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 10493. PRESUPUESTOS GENERALES";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[45]= "46)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[45]= new Array();
 choices[45][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[45][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[45][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[45][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[45] = choices[45][2];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10133 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[46]= new Array();
 choices[46][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[46][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[46][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[46][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[46] = choices[46][1];
 units[46] = "12";
 comments[46] = "Id Pregunta: 10133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10648 Año de creación de pregunta: 2016
 questions[47]= "48)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[47]= new Array();
 choices[47][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[47][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[47][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[47][3] = "Estos sistemas es imposible clasificarlos.";
 answers[47] = choices[47][1];
 units[47] = "119";
 comments[47] = "Id Pregunta: 10648. Junta de Extremadura A1 2015";


//  Id pregunta: 10662 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[48]= new Array();
 choices[48][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[48][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[48][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[48][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que haya sido elaborado por &eacute;ste.";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 10662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 10554 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[49]= new Array();
 choices[49][0] = "El BCE";
 choices[49][1] = "El Parlamento";
 choices[49][2] = "El Consejo";
 choices[49][3] = "La Comisi&oacute;n";
 answers[49] = choices[49][3];
 units[49] = "17";
 comments[49] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10462 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[50]= new Array();
 choices[50][0] = "Transferencias de cr&eacute;dito.";
 choices[50][1] = "Incorporaciones de cr&eacute;dito.";
 choices[50][2] = "Imputaciones de cr&eacute;dito.";
 choices[50][3] = "Ampliaciones de cr&eacute;dito.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 10462. PRESUPUESTOS GENERALES";


//  Id pregunta: 10466 Año de creación de pregunta: 2016
 questions[51]= "52)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[51]= new Array();
 choices[51][0] = "Con el a&ntilde;o anterior.";
 choices[51][1] = "Con los tres a&ntilde;os anteriores.";
 choices[51][2] = "Con el a&ntilde;o natural.";
 choices[51][3] = "Con los dos a&ntilde;os anteriores.";
 answers[51] = choices[51][2];
 units[51] = "10";
 comments[51] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[52]= "53)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[52]= new Array();
 choices[52][0] = "Pas&oacute; de 518 a 626.";
 choices[52][1] = "Pas&oacute; de 434 a 518.";
 choices[52][2] = "Pas&oacute; de 345 a 512.";
 choices[52][3] = "Pas&oacute; de 435 a 610.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10123 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[53]= new Array();
 choices[53][0] = "Un representante de la Administraci&oacute;n local.";
 choices[53][1] = "Un representante del Tribunal de Cuentas.";
 choices[53][2] = "Un representante del Defensor del Pueblo.";
 choices[53][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[53] = choices[53][0];
 units[53] = "22";
 comments[53] = "Id Pregunta: 10123. ";


//  Id pregunta: 10551 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[54]= new Array();
 choices[54][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[54][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[54][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[54][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[54] = choices[54][2];
 units[54] = "26";
 comments[54] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10588 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "14";
 choices[55][1] = "11";
 choices[55][2] = "12";
 choices[55][3] = "15";
 answers[55] = choices[55][0];
 units[55] = "19";
 comments[55] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10335 Año de creación de pregunta: 2016
 questions[56]= "57)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[56]= new Array();
 choices[56][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[56][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[56][2] = "Son incompatibles ambas actas de diputado.";
 choices[56][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10335. UNION EUROPEA";


//  Id pregunta: 10045 Año de creación de pregunta: 2016
 questions[57]= "58)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[57]= new Array();
 choices[57][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[57][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[57][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[57][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[57] = choices[57][1];
 units[57] = "74";
 comments[57] = "Id Pregunta: 10045. AGE A1 2015";


//  Id pregunta: 10643 Año de creación de pregunta: 2016
 questions[58]= "59)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[58]= new Array();
 choices[58][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[58][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[58][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[58][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[58] = choices[58][2];
 units[58] = "85";
 comments[58] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10153 Año de creación de pregunta: 2016
 questions[59]= "60)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[59]= new Array();
 choices[59][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[59][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[59][2] = "a y b son correctas";
 choices[59][3] = "a y b son incorrectas";
 answers[59] = choices[59][0];
 units[59] = "7";
 comments[59] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10518 Año de creación de pregunta: 2016
 questions[60]= "61)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[60]= new Array();
 choices[60][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[60][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[60][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[60][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[60] = choices[60][0];
 units[60] = "7";
 comments[60] = "Id Pregunta: 10518. LEY 39/2015";


//  Id pregunta: 10408 Año de creación de pregunta: 2016
 questions[61]= "62)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[61]= new Array();
 choices[61][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[61][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[61][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[61][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 10408. POLITICAS DE IGUALDAD";


//  Id pregunta: 10065 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[62]= new Array();
 choices[62][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[62][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[62][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[62][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[62] = choices[62][2];
 units[62] = "53";
 comments[62] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10487 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[63]= new Array();
 choices[63][0] = "Las Cortes Generales.";
 choices[63][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[63][2] = "El Gobierno.";
 choices[63][3] = "El Congreso de los Diputados.";
 answers[63] = choices[63][0];
 units[63] = "10";
 comments[63] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10377 Año de creación de pregunta: 2016
 questions[64]= "65)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[64]= new Array();
 choices[64][0] = "Tener una estructura institucional.";
 choices[64][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[64][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[64][3] = "Todas las respuestas son correctas.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[65]= "66)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[65]= new Array();
 choices[65][0] = "Diciembre de 1987.";
 choices[65][1] = "Septiembre de 1989.";
 choices[65][2] = "Octubre de 1990.";
 choices[65][3] = "Noviembre de 1980.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10443 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[66]= new Array();
 choices[66][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[66][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[66][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[66][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[66] = choices[66][1];
 units[66] = "43";
 comments[66] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10347 Año de creación de pregunta: 2016
 questions[67]= "68)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[67]= new Array();
 choices[67][0] = "18 miembros.";
 choices[67][1] = "Ninguna es correcta.";
 choices[67][2] = "22 miembros.";
 choices[67][3] = "21 miembros.";
 answers[67] = choices[67][1];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10485 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[68]= new Array();
 choices[68][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[68][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[68][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[68][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[68] = choices[68][3];
 units[68] = "10";
 comments[68] = "Id Pregunta: 10485. PRESUPUESTOS GENERALES";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[69]= "70)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[69]= new Array();
 choices[69][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[69][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[69][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[69][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[69] = choices[69][1];
 units[69] = "58";
 comments[69] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10446 Año de creación de pregunta: 2016
 questions[70]= "71)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[70]= new Array();
 choices[70][0] = "Ejecutivo";
 choices[70][1] = "Limitativo";
 choices[70][2] = "Estimativo";
 choices[70][3] = "Progresivo";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[71]= new Array();
 choices[71][0] = "Yarn";
 choices[71][1] = "Flume";
 choices[71][2] = "Hive";
 choices[71][3] = "BizAgi";
 answers[71] = choices[71][3];
 units[71] = "73";
 comments[71] = "Id Pregunta: 10655. ";


//  Id pregunta: 10099 Año de creación de pregunta: 2016
 questions[72]= "73)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[72]= new Array();
 choices[72][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[72][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[72][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[72][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[72] = choices[72][2];
 units[72] = "26";
 comments[72] = "Id Pregunta: 10099. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10360 Año de creación de pregunta: 2016
 questions[73]= "74)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[73]= new Array();
 choices[73][0] = "786 Diputados como m&aacute;ximo.";
 choices[73][1] = "600 Diputados como m&aacute;ximo.";
 choices[73][2] = "650 Diputados como m&aacute;ximo.";
 choices[73][3] = "732 Diputados como m&aacute;ximo.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10360. UNION EUROPEA";


//  Id pregunta: 10289 Año de creación de pregunta: 2016
 questions[74]= "75)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[74]= new Array();
 choices[74][0] = "Tres a&ntilde;os.";
 choices[74][1] = "Dos a&ntilde;os y medio.";
 choices[74][2] = "Cinco a&ntilde;os.";
 choices[74][3] = "Seis a&ntilde;os.";
 answers[74] = choices[74][2];
 units[74] = "5";
 comments[74] = "Id Pregunta: 10289. UNION EUROPEA";


