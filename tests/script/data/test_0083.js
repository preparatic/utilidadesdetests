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

//  Id pregunta: 10115 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[0]= new Array();
 choices[0][0] = "El Tratado de Lisboa";
 choices[0][1] = "El Tratado de Amsterdam";
 choices[0][2] = "El Tratado de Niza";
 choices[0][3] = "El Acta &Uacute;nica Europea";
 answers[0] = choices[0][1];
 units[0] = "15";
 comments[0] = "Id Pregunta: 10115. ";


//  Id pregunta: 10240 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[1]= new Array();
 choices[1][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[1][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[1][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[1][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10240. CONSTITUCION1978";


//  Id pregunta: 10354 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[2]= new Array();
 choices[2][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[2][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[2][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[2][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10354. UNION EUROPEA";


//  Id pregunta: 10248 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[3]= new Array();
 choices[3][0] = "61";
 choices[3][1] = "53";
 choices[3][2] = "65";
 choices[3][3] = "67";
 answers[3] = choices[3][1];
 units[3] = "1";
 comments[3] = "Id Pregunta: 10248. CONSTITUCION1978";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[4]= new Array();
 choices[4][0] = "apud acta";
 choices[4][1] = "presencialmente";
 choices[4][2] = "electr&oacute;nicamente";
 choices[4][3] = "todas son correctas";
 answers[4] = choices[4][3];
 units[4] = "7";
 comments[4] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10646 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[5]= new Array();
 choices[5][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[5][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[5][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[5][3] = "Todas las respuestas son correctas.";
 answers[5] = choices[5][0];
 units[5] = "101";
 comments[5] = "Id Pregunta: 10646. Junta de Extremadura A1 2015";


//  Id pregunta: 10008 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[6]= new Array();
 choices[6][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[6][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[6][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[6][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[6] = choices[6][2];
 units[6] = "26";
 comments[6] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10196 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[7]= new Array();
 choices[7][0] = "Al Presidente del Gobierno.";
 choices[7][1] = "A las Cortes Generales";
 choices[7][2] = "A los electores.";
 choices[7][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[7] = choices[7][3];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10196. CONSTITUCION1978";


//  Id pregunta: 10074 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[8]= new Array();
 choices[8][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[8][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[8][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[8][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[8] = choices[8][3];
 units[8] = "106";
 comments[8] = "Id Pregunta: 10074. AGE A1 2015";


//  Id pregunta: 10616 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[9]= new Array();
 choices[9][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[9][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[9][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[9][3] = "Todas las respuestas son correctas.";
 answers[9] = choices[9][2];
 units[9] = "42";
 comments[9] = "Id Pregunta: 10616. Junta de Extremadura A1 2015";


//  Id pregunta: 10655 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[10]= new Array();
 choices[10][0] = "Yarn";
 choices[10][1] = "Flume";
 choices[10][2] = "Hive";
 choices[10][3] = "BizAgi";
 answers[10] = choices[10][3];
 units[10] = "73";
 comments[10] = "Id Pregunta: 10655. ";


//  Id pregunta: 10400 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[11]= new Array();
 choices[11][0] = "A la persona demandante.";
 choices[11][1] = "A la persona demandada.";
 choices[11][2] = "Al &oacute;rgano judicial.";
 choices[11][3] = "Al &oacute;rgano administrativo.";
 answers[11] = choices[11][1];
 units[11] = "14";
 comments[11] = "Id Pregunta: 10400. POLITICAS DE IGUALDAD";


//  Id pregunta: 10431 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[12]= new Array();
 choices[12][0] = "El Instituto de la Mujer.";
 choices[12][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[12][2] = "Ambas son correctas.";
 choices[12][3] = "A y B son incorrectas.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 10431. POLITICAS DE IGUALDAD";


//  Id pregunta: 10034 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[13]= new Array();
 choices[13][0] = "Memcached";
 choices[13][1] = "OpCache";
 choices[13][2] = "WinCache Extension for PHP";
 choices[13][3] = "Alternative PHP Cache";
 answers[13] = choices[13][0];
 units[13] = "65";
 comments[13] = "Id Pregunta: 10034. AGE A1 2015";


//  Id pregunta: 10665 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[14]= new Array();
 choices[14][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, , la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[14][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[14][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[14][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[14] = choices[14][2];
 units[14] = "7";
 comments[14] = "Id Pregunta: 10665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10083 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[15]= new Array();
 choices[15][0] = "Perceptible";
 choices[15][1] = "Operable";
 choices[15][2] = "Comprensible";
 choices[15][3] = "Robusto";
 answers[15] = choices[15][2];
 units[15] = "42";
 comments[15] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10313 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[16]= new Array();
 choices[16][0] = "El Consejo Europeo.";
 choices[16][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[16][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[16][3] = "El Parlamento Europeo.";
 answers[16] = choices[16][0];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10313. UNION EUROPEA";


//  Id pregunta: 10080 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[17]= new Array();
 choices[17][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[17][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[17][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[17][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[17] = choices[17][3];
 units[17] = "46";
 comments[17] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10463 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[18]= new Array();
 choices[18][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[18][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[18][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[18][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[18] = choices[18][3];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10463. PRESUPUESTOS GENERALES";


//  Id pregunta: 10000 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[19]= new Array();
 choices[19][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[19][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[19][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[19][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[19] = choices[19][0];
 units[19] = "26";
 comments[19] = "Id Pregunta: 10000. AGE A1 2015";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[20]= new Array();
 choices[20][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[20][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[20][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[20][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[20] = choices[20][2];
 units[20] = "53";
 comments[20] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10434 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[21]= new Array();
 choices[21][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[21][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[21][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[21][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[21] = choices[21][0];
 units[21] = "43";
 comments[21] = "Id Pregunta: 10434. SERVICIOS COMUNES";


//  Id pregunta: 10552 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[22]= new Array();
 choices[22][0] = "Establecer redes de telecomunicaciones continentales";
 choices[22][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[22][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[22][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[22] = choices[22][0];
 units[22] = "17";
 comments[22] = "Id Pregunta: 10552. Mercado &Uacute;nico Digital";


//  Id pregunta: 10613 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[23]= new Array();
 choices[23][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[23][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[23][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[23][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[23] = choices[23][1];
 units[23] = "48";
 comments[23] = "Id Pregunta: 10613. Junta de Extremadura A1 2015";


//  Id pregunta: 10102 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[24]= new Array();
 choices[24][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[24][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[24][2] = "Se basan en sistemas distribuidos";
 choices[24][3] = "Se basan en el modelo de datos relacional";
 answers[24] = choices[24][2];
 units[24] = "73";
 comments[24] = "Id Pregunta: 10102. ";


//  Id pregunta: 10136 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[25]= new Array();
 choices[25][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[25][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[25][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[25][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[25] = choices[25][2];
 units[25] = "12";
 comments[25] = "Id Pregunta: 10136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10022 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[26]= new Array();
 choices[26][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[26][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[26][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[26][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[26] = choices[26][1];
 units[26] = "26";
 comments[26] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10101 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[27]= new Array();
 choices[27][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[27][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[27][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[27][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[27] = choices[27][1];
 units[27] = "73";
 comments[27] = "Id Pregunta: 10101. ";


//  Id pregunta: 10597 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[28][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[28][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[28][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[28] = choices[28][0];
 units[28] = "45";
 comments[28] = "Id Pregunta: 10597. Junta de Extremadura A1 2015";


//  Id pregunta: 10273 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[29]= new Array();
 choices[29][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[29][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[29][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[29][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[29] = choices[29][1];
 units[29] = "92";
 comments[29] = "Id Pregunta: 10273. INTEGRACION CONTINUA";


//  Id pregunta: 10060 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[30]= new Array();
 choices[30][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[30][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[30][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[30][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[30] = choices[30][2];
 units[30] = "101";
 comments[30] = "Id Pregunta: 10060. AGE A1 2015";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[31]= new Array();
 choices[31][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[31][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[31][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[31][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[31] = choices[31][3];
 units[31] = "26";
 comments[31] = "Id Pregunta: 10550. Gobernanza TIC";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[32]= new Array();
 choices[32][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[32][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[32][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[32][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10670 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[33][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[33][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[33][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[33] = choices[33][1];
 units[33] = "7";
 comments[33] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10533 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[34]= new Array();
 choices[34][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10359 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Los Reglamentos no se caracterizan por:";
 choices[35]= new Array();
 choices[35][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[35][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[35][2] = "Ser obligatorios.";
 choices[35][3] = "No poseer alcance general.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10359. UNION EUROPEA";


//  Id pregunta: 10205 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[36]= new Array();
 choices[36][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[36][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[36][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[36][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[36] = choices[36][1];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10205. CONSTITUCION1978";


//  Id pregunta: 10610 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[37]= new Array();
 choices[37][0] = "GROUP BY.";
 choices[37][1] = "COUNT.";
 choices[37][2] = "WHERE.";
 choices[37][3] = "DISTINCT.";
 answers[37] = choices[37][0];
 units[37] = "60";
 comments[37] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[38]= new Array();
 choices[38][0] = "En 1988.";
 choices[38][1] = "En 1981.";
 choices[38][2] = "En 1982.";
 choices[38][3] = "En 1986.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 10371. UNION EUROPEA";


//  Id pregunta: 10012 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[39]= new Array();
 choices[39][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[39][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[39][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[39][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[39] = choices[39][0];
 units[39] = "62";
 comments[39] = "Id Pregunta: 10012. AGE A1 2015";


//  Id pregunta: 10587 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[40]= new Array();
 choices[40][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[40][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[40][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[40][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[40] = choices[40][0];
 units[40] = "19";
 comments[40] = "Id Pregunta: 10587. Estrategia TIC";


//  Id pregunta: 10183 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[41]= new Array();
 choices[41][0] = "al menos por 50 Diputados.";
 choices[41][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[41][2] = "por la Mesa del Congreso de los Diputados.";
 choices[41][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[41] = choices[41][1];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10183. CONSTITUCION1978";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[42][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[42][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[42][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[42] = choices[42][2];
 units[42] = "48";
 comments[42] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10457 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[43]= new Array();
 choices[43][0] = "A nivel de secci&oacute;n de programa.";
 choices[43][1] = "A nivel de grupo de programa.";
 choices[43][2] = "Ninguna de las respuestas es correcta.";
 choices[43][3] = "A nivel de programa.";
 answers[43] = choices[43][3];
 units[43] = "10";
 comments[43] = "Id Pregunta: 10457. PRESUPUESTOS GENERALES";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[44][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[44][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[44][3] = "Todas las anteriores son ciertas";
 answers[44] = choices[44][3];
 units[44] = "8";
 comments[44] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10286 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[45]= new Array();
 choices[45][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[45][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[45][2] = "Iniciativa europea de libre flujo de datos.";
 choices[45][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[45] = choices[45][2];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10286. UNION EUROPEA";


//  Id pregunta: 10020 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[46]= new Array();
 choices[46][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[46][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[46][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[46][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[46] = choices[46][2];
 units[46] = "27";
 comments[46] = "Id Pregunta: 10020. AGE A1 2015";


//  Id pregunta: 10571 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[47]= new Array();
 choices[47][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[47][1] = "Entrada en la Uni&oacute;n Europea";
 choices[47][2] = "Pactos de la Moncloa";
 choices[47][3] = "Ingreso en la ONU";
 answers[47] = choices[47][3];
 units[47] = "12";
 comments[47] = "Id Pregunta: 10571. Modelo econ&oacute;mico";


//  Id pregunta: 10365 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[48]= new Array();
 choices[48][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[48][1] = "Unanimidad.";
 choices[48][2] = "Mayor&iacute;a cualificada.";
 choices[48][3] = "Mayor&iacute;a simple.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 10365. UNION EUROPEA";


//  Id pregunta: 10500 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[49]= new Array();
 choices[49][0] = "El presidente de las Cortes Generales.";
 choices[49][1] = "El Presidente del Gobierno.";
 choices[49][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[49][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[49] = choices[49][3];
 units[49] = "10";
 comments[49] = "Id Pregunta: 10500. PRESUPUESTOS GENERALES";


//  Id pregunta: 10408 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[50]= new Array();
 choices[50][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[50][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[50][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[50][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 10408. POLITICAS DE IGUALDAD";


//  Id pregunta: 10200 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[51]= new Array();
 choices[51][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[51][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[51][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[51][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[51] = choices[51][3];
 units[51] = "1";
 comments[51] = "Id Pregunta: 10200. CONSTITUCION1978";


//  Id pregunta: 10006 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[52]= new Array();
 choices[52][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[52][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[52][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[52][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[52] = choices[52][0];
 units[52] = "91";
 comments[52] = "Id Pregunta: 10006. AGE A1 2015";


//  Id pregunta: 10222 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[53]= new Array();
 choices[53][0] = "Dos Cap&iacute;tulos.";
 choices[53][1] = "Tres Cap&iacute;tulos.";
 choices[53][2] = "Un Cap&iacute;tulo.";
 choices[53][3] = "Cuatro Cap&iacute;tulos.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10222. CONSTITUCION1978";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[54]= new Array();
 choices[54][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[54][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[54][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[54][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[54] = choices[54][3];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10236. CONSTITUCION1978";


//  Id pregunta: 10049 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; facilita un ORM?";
 choices[55]= new Array();
 choices[55][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[55][1] = "Conversi&oacute;n de objetos a documentos";
 choices[55][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[55][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[55] = choices[55][0];
 units[55] = "62";
 comments[55] = "Id Pregunta: 10049. AGE A1 2015";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[56]= new Array();
 choices[56][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[56][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[56][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[56][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[56] = choices[56][0];
 units[56] = "45";
 comments[56] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10347 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[57]= new Array();
 choices[57][0] = "18 miembros.";
 choices[57][1] = "Ninguna es correcta.";
 choices[57][2] = "22 miembros.";
 choices[57][3] = "21 miembros.";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10588 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "14";
 choices[58][1] = "11";
 choices[58][2] = "12";
 choices[58][3] = "15";
 answers[58] = choices[58][0];
 units[58] = "19";
 comments[58] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10267 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[59]= new Array();
 choices[59][0] = "Los Derechos y Deberes fundamentales.";
 choices[59][1] = "La Corona.";
 choices[59][2] = "El Poder Judicial.";
 choices[59][3] = "Las Cortes Generales.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 10267. CONSTITUCION1978";


//  Id pregunta: 10335 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[60]= new Array();
 choices[60][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[60][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[60][2] = "Son incompatibles ambas actas de diputado.";
 choices[60][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10335. UNION EUROPEA";


//  Id pregunta: 10538 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[61]= new Array();
 choices[61][0] = "los registros mercantiles";
 choices[61][1] = "los registros de la propiedad";
 choices[61][2] = "los protocolos notariales";
 choices[61][3] = "todas son correctas";
 answers[61] = choices[61][3];
 units[61] = "7";
 comments[61] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10644 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[62]= new Array();
 choices[62][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[62][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[62][2] = "Funcionarios e interinos.";
 choices[62][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[62] = choices[62][3];
 units[62] = "20";
 comments[62] = "Id Pregunta: 10644. Junta de Extremadura A1 2015";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  En qu&eacute; consiste el principio BASE:";
 choices[63]= new Array();
 choices[63][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[63][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[63][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[63][3] = "Todas las anteriores son falsas";
 answers[63] = choices[63][3];
 units[63] = "73";
 comments[63] = "Id Pregunta: 10103. ";


//  Id pregunta: 10326 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[64]= new Array();
 choices[64][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[64][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[64][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[64][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10326. UNION EUROPEA";


//  Id pregunta: 10141 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  El recurso de alzada puede interponerse:";
 choices[65]= new Array();
 choices[65][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[65][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[65][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[65][3] = "Ante el Defensor del Pueblo";
 answers[65] = choices[65][1];
 units[65] = "8";
 comments[65] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10328 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[66]= new Array();
 choices[66][0] = "El Presidente del Consejo Europeo.";
 choices[66][1] = "La Comisi&oacute;n.";
 choices[66][2] = "El Consejo.";
 choices[66][3] = "El Parlamento Europeo.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10510 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[67]= new Array();
 choices[67][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[67][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[67][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[67][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[67] = choices[67][2];
 units[67] = "7";
 comments[67] = "Id Pregunta: 10510. LEY 39/2015";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[68]= new Array();
 choices[68][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[68][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[68][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[68][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[68] = choices[68][1];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10441. SERVICIOS COMUNES";


//  Id pregunta: 10489 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[69]= new Array();
 choices[69][0] = "Dos.";
 choices[69][1] = "Cuatro.";
 choices[69][2] = "Cinco.";
 choices[69][3] = "Tres.";
 answers[69] = choices[69][1];
 units[69] = "10";
 comments[69] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10523 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  Se consideran interesados en el procedimiento administrativo:";
 choices[70]= new Array();
 choices[70][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[70][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[70][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[70][3] = "todas son correctas";
 answers[70] = choices[70][0];
 units[70] = "7";
 comments[70] = "Id Pregunta: 10523. LEY 39/2015";


//  Id pregunta: 10661 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[71]= new Array();
 choices[71][0] = "Varios namenodes y varios datanodes por cluster";
 choices[71][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[71][2] = "1 namenode y varios datanodes por cluster";
 choices[71][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[71] = choices[71][2];
 units[71] = "73";
 comments[71] = "Id Pregunta: 10661. ";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[72]= new Array();
 choices[72][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[72][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[72][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[72][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[72] = choices[72][3];
 units[72] = "22";
 comments[72] = "Id Pregunta: 10126. ";


//  Id pregunta: 10308 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  El Tribunal de Justicia se cre&oacute; en:";
 choices[73]= new Array();
 choices[73][0] = "El Tratado de la CECA.";
 choices[73][1] = "El Tratado de Niza.";
 choices[73][2] = "El Tratado de &Aacute;msterdam.";
 choices[73][3] = "El Tratado de Lisboa.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10308. UNION EUROPEA";


//  Id pregunta: 10221 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[74]= new Array();
 choices[74][0] = "De los derechos y deberes fundamentales.";
 choices[74][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[74][2] = "Derechos y libertades.";
 choices[74][3] = "De la Corona.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10221. CONSTITUCION1978";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[75]= new Array();
 choices[75][0] = "En 2015";
 choices[75][1] = "En 2013";
 choices[75][2] = "En 2016";
 choices[75][3] = "En 2007";
 answers[75] = choices[75][1];
 units[75] = "19";
 comments[75] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10637 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  En el sistema operativo Unix/Linux, el comando id:";
 choices[76]= new Array();
 choices[76][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[76][1] = "El comando id no existe.";
 choices[76][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[76][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[76] = choices[76][0];
 units[76] = "57";
 comments[76] = "Id Pregunta: 10637. Junta de Extremadura A1 2015";


//  Id pregunta: 10296 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[77]= new Array();
 choices[77][0] = "Al Consejo Europeo.";
 choices[77][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[77][2] = "A la Comisi&oacute;n Europea.";
 choices[77][3] = "Al Parlamento Europeo.";
 answers[77] = choices[77][2];
 units[77] = "5";
 comments[77] = "Id Pregunta: 10296. UNION EUROPEA";


//  Id pregunta: 10187 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[78]= new Array();
 choices[78][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[78][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[78][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[78][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[78] = choices[78][0];
 units[78] = "1";
 comments[78] = "Id Pregunta: 10187. CONSTITUCION1978";


//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[79]= new Array();
 choices[79][0] = "PostgreSQL";
 choices[79][1] = "Datawarehouse";
 choices[79][2] = "Snowflake";
 choices[79][3] = "CouchDB";
 answers[79] = choices[79][0];
 units[79] = "61";
 comments[79] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10067 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[80]= new Array();
 choices[80][0] = "IANA";
 choices[80][1] = "ISOC";
 choices[80][2] = "IETF";
 choices[80][3] = "IAB";
 answers[80] = choices[80][0];
 units[80] = "103";
 comments[80] = "Id Pregunta: 10067. AGE A1 2015";


//  Id pregunta: 10545 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[81]= new Array();
 choices[81][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[81][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[81][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[81][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[81] = choices[81][1];
 units[81] = "26";
 comments[81] = "Id Pregunta: 10545. Gobernanza TIC";


//  Id pregunta: 10470 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[82]= new Array();
 choices[82][0] = "El Ministro de Econom&iacute;a.";
 choices[82][1] = "El Gobierno.";
 choices[82][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[82][3] = "El Presidente del Gobierno.";
 answers[82] = choices[82][1];
 units[82] = "10";
 comments[82] = "Id Pregunta: 10470. PRESUPUESTOS GENERALES";


//  Id pregunta: 10338 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[83]= new Array();
 choices[83][0] = "CO.PER.";
 choices[83][1] = "COMPER.";
 choices[83][2] = "CO.RE.PER.";
 choices[83][3] = "CO.PE.RRE.";
 answers[83] = choices[83][2];
 units[83] = "5";
 comments[83] = "Id Pregunta: 10338. UNION EUROPEA";


//  Id pregunta: 10217 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[84]= new Array();
 choices[84][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[84][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[84][2] = "Son refrendados por el Rey.";
 choices[84][3] = "Son convocados por el Presidente del Gobierno.";
 answers[84] = choices[84][0];
 units[84] = "1";
 comments[84] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10502 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[85]= new Array();
 choices[85][0] = "Principio de transparencia.";
 choices[85][1] = "Principio de cooperaci&oacute;n.";
 choices[85][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[85][3] = "Principio de lealtad institucional.";
 answers[85] = choices[85][1];
 units[85] = "10";
 comments[85] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10143 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[86]= new Array();
 choices[86][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[86][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[86][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[86][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[86] = choices[86][2];
 units[86] = "8";
 comments[86] = "Id Pregunta: 10143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10609 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[87]= new Array();
 choices[87][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[87][1] = "Clasificaci&oacute;n por cuenta.";
 choices[87][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[87][3] = "Clasificaci&oacute;n por intercambio.";
 answers[87] = choices[87][3];
 units[87] = "56";
 comments[87] = "Id Pregunta: 10609. Junta de Extremadura A1 2015";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[88]= new Array();
 choices[88][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[88][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[88][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[88][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[88] = choices[88][1];
 units[88] = "5";
 comments[88] = "Id Pregunta: 10292. UNION EUROPEA";


//  Id pregunta: 10393 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[89]= new Array();
 choices[89][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[89][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[89][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[89][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[89] = choices[89][0];
 units[89] = "14";
 comments[89] = "Id Pregunta: 10393. POLITICAS DE IGUALDAD";


//  Id pregunta: 10295 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[90]= new Array();
 choices[90][0] = "Estrasburgo.";
 choices[90][1] = "Bruselas.";
 choices[90][2] = "Luxemburgo.";
 choices[90][3] = "Holanda.";
 answers[90] = choices[90][2];
 units[90] = "5";
 comments[90] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10394 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[91]= new Array();
 choices[91][0] = "Discriminaci&oacute;n indirecta.";
 choices[91][1] = "Discriminaci&oacute;n directa.";
 choices[91][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[91][3] = "Discriminaci&oacute;n abusiva.";
 answers[91] = choices[91][0];
 units[91] = "14";
 comments[91] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10362 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[92]= new Array();
 choices[92][0] = "Son actos normativos.";
 choices[92][1] = "Poseen alcance general.";
 choices[92][2] = "No son obligatorias.";
 choices[92][3] = "Son actos individuales no normativos.";
 answers[92] = choices[92][3];
 units[92] = "5";
 comments[92] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10666 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el cumplimiento de tr&aacute;mites por defecto es de:";
 choices[93]= new Array();
 choices[93][0] = "10 d&iacute;as.";
 choices[93][1] = "15 d&iacute;as.";
 choices[93][2] = "1 mes.";
 choices[93][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[93] = choices[93][0];
 units[93] = "7";
 comments[93] = "Id Pregunta: 10666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 10170 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[94]= new Array();
 choices[94][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[94][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[94][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[94][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[94] = choices[94][2];
 units[94] = "19";
 comments[94] = "Id Pregunta: 10170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 10139 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[95]= new Array();
 choices[95][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[95][1] = "Static &amp; Active process for REsolution Bank.";
 choices[95][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[95][3] = "Super Active REsponse for Banks";
 answers[95] = choices[95][0];
 units[95] = "12";
 comments[95] = "Id Pregunta: 10139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10137 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[96]= new Array();
 choices[96][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[96][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[96][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[96][3] = "Todos las anteriores son ciertas.";
 answers[96] = choices[96][3];
 units[96] = "12";
 comments[96] = "Id Pregunta: 10137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[97]= new Array();
 choices[97][0] = "La Seguridad Social";
 choices[97][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[97][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[97][3] = "El Banco de Espa&ntilde;a";
 answers[97] = choices[97][3];
 units[97] = "15";
 comments[97] = "Id Pregunta: 10113. ";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[98]= new Array();
 choices[98][0] = "Son vinculantes solamente.";
 choices[98][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[98][2] = "Son preceptivos y vinculantes.";
 choices[98][3] = "Son preceptivos y no vinculantes.";
 answers[98] = choices[98][1];
 units[98] = "5";
 comments[98] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10285 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[99]= new Array();
 choices[99][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[99][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[99][2] = "la falta de interoperabilidad.";
 choices[99][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[99] = choices[99][1];
 units[99] = "5";
 comments[99] = "Id Pregunta: 10285. UNION EUROPEA";


