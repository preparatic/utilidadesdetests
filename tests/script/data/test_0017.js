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

//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[0]= "1)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[0][1] = "Las inversiones reales y financieras.";
 choices[0][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[0][3] = "Las transferencias de capital y las inversiones reales.";
 answers[0] = choices[0][3];
 units[0] = "10";
 comments[0] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";
 preguntaids[0] = 471


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[1]= "2)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[1]= new Array();
 choices[1][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[1][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[1][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[1][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[1] = choices[1][2];
 units[1] = "57";
 comments[1] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[1] = 638


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[2]= new Array();
 choices[2][0] = "Por reembolso de pr&eacute;stamos.";
 choices[2][1] = "Por la venta de bienes.";
 choices[2][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[2][3] = "Por prestaci&oacute;n de servicios.";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";
 preguntaids[2] = 496


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[3]= "4)  La iniciativa legislativa corresponde:";
 choices[3]= new Array();
 choices[3][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[3][1] = "Al rey y al Gobierno.";
 choices[3][2] = "Al Congreso, al Senado y al Rey.";
 choices[3][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[3] = choices[3][3];
 units[3] = "1";
 comments[3] = "Id Pregunta: 259. CONSTITUCION1978";
 preguntaids[3] = 259


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[4]= new Array();
 choices[4][0] = "absoluta de las Cortes Generales.";
 choices[4][1] = "absoluta del Congreso de los Diputados.";
 choices[4][2] = "simple de las Cortes Generales.";
 choices[4][3] = "simple del Congreso de los Diputados.";
 answers[4] = choices[4][3];
 units[4] = "1";
 comments[4] = "Id Pregunta: 173. CONSTITUCION1978";
 preguntaids[4] = 173


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[5]= new Array();
 choices[5][0] = "Ley 50/1997, del Gobierno.";
 choices[5][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[5][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[5][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[5] = choices[5][1];
 units[5] = "10";
 comments[5] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[5] = 475


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[6]= "7)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[6]= new Array();
 choices[6][0] = "Subgrupo A1";
 choices[6][1] = "Subgrupo A2";
 choices[6][2] = "Subgrupo B";
 choices[6][3] = "Subgrupo C1";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[6] = 806


//  Id pregunta: 861 Año de creación de pregunta: 2016
 questions[7]= "8)  Para la generaci&oacute;n de contenidos de un sitio web p&uacute;blico se necesitan diversos perfiles. Indique cu&aacute;l NO es uno de ellos.";
 choices[7]= new Array();
 choices[7][0] = "Generador de contenidos";
 choices[7][1] = "Publicador de contenidos";
 choices[7][2] = "Administrador de contenidos";
 choices[7][3] = "Aprobador de contenidos";
 answers[7] = choices[7][3];
 units[7] = "125";
 comments[7] = "Id Pregunta: 861. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[7] = 861


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[8]= "9)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[8]= new Array();
 choices[8][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[8][1] = "Uno de sus miembros.";
 choices[8][2] = "La Comisi&oacute;n.";
 choices[8][3] = "Todas las respuestas son correctas.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 350. UNION EUROPEA";
 preguntaids[8] = 350


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[9]= "10)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[9]= new Array();
 choices[9][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[9][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[9][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[9][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[9] = choices[9][0];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[9] = 786


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[10]= "11)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[10]= new Array();
 choices[10][0] = "IANA";
 choices[10][1] = "ISOC";
 choices[10][2] = "IETF";
 choices[10][3] = "IAB";
 answers[10] = choices[10][0];
 units[10] = "103";
 comments[10] = "Id Pregunta: 67. AGE A1 2015";
 preguntaids[10] = 67


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[11]= "12)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[11]= new Array();
 choices[11][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[11][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[11][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[11][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[11] = choices[11][3];
 units[11] = "14";
 comments[11] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";
 preguntaids[11] = 380


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[12]= new Array();
 choices[12][0] = "Art&iacute;culo 14 CE.";
 choices[12][1] = "Art&iacute;culo 9.2 CE.";
 choices[12][2] = "Art&iacute;culo 9.1 CE.";
 choices[12][3] = "Art&iacute;culo 13 CE.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[12] = 407


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[13]= "14)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[13]= new Array();
 choices[13][0] = "los &oacute;rganos administrativos";
 choices[13][1] = "las entidades dependientes";
 choices[13][2] = "las unidades administrativas";
 choices[13][3] = "los servicios comunes";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[13] = 799


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


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[15]= "16)  La Administraci&oacute;n General del Estado se organiza:";
 choices[15]= new Array();
 choices[15][0] = "en Ministerios";
 choices[15][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[15][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[15][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[15] = choices[15][1];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[15] = 802


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[16]= "17)  El sector p&uacute;blico institucional se integra por:";
 choices[16]= new Array();
 choices[16][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[16][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[16][2] = "las Universidades p&uacute;blicas";
 choices[16][3] = "todas son correctas";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[16] = 766


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[17]= new Array();
 choices[17][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[17][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[17][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[17][3] = "Todos los anteriores";
 answers[17] = choices[17][3];
 units[17] = "19";
 comments[17] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[17] = 592


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[18]= new Array();
 choices[18][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[18][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[18][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[18][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[18] = choices[18][0];
 units[18] = "62";
 comments[18] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[18] = 12


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[19]= "20)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[19][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[19][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[19][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[19] = choices[19][2];
 units[19] = "26";
 comments[19] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[19] = 99


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[20]= new Array();
 choices[20][0] = "Maximizar el valor para los clientes";
 choices[20][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[20][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[20][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[20] = choices[20][3];
 units[20] = "34";
 comments[20] = "Id Pregunta: 718. Metodologias Lean";
 preguntaids[20] = 718


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[21]= new Array();
 choices[21][0] = "DoS";
 choices[21][1] = "Phishing";
 choices[21][2] = "Sniffing";
 choices[21][3] = "Spoofing";
 answers[21] = choices[21][3];
 units[21] = "119";
 comments[21] = "Id Pregunta: 54. AGE A1 2015";
 preguntaids[21] = 54


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[22]= new Array();
 choices[22][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[22][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[22][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[22][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";
 preguntaids[22] = 757


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[23]= new Array();
 choices[23][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[23][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[23][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[23][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";
 preguntaids[23] = 158


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[24]= "25)  Los Secretarios generales t&eacute;cnicos:";
 choices[24]= new Array();
 choices[24][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[24][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[24][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[24] = 804


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[25]= new Array();
 choices[25][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[25][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[25][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[25][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[25] = choices[25][0];
 units[25] = "19";
 comments[25] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[25] = 589


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[26]= "27)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[26]= new Array();
 choices[26][0] = "623";
 choices[26][1] = "649";
 choices[26][2] = "626";
 choices[26][3] = "565";
 answers[26] = choices[26][2];
 units[26] = "5";
 comments[26] = "Id Pregunta: 341. UNION EUROPEA";
 preguntaids[26] = 341


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[27]= "28)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[27]= new Array();
 choices[27][0] = "De ocho a&ntilde;os.";
 choices[27][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[27][2] = "Ambas son correctas.";
 choices[27][3] = "No existe un l&iacute;mite.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[27] = 432


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[28]= "29)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[28]= new Array();
 choices[28][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[28][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[28][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[28][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[28] = 240


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[29]= "30)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[29]= new Array();
 choices[29][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[29][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[29][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[29][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[29] = choices[29][2];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[29] = 770


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[30]= "31)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[30]= new Array();
 choices[30][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[30][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[30][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[30][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[30] = 177


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[31][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[31][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[31][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[31] = choices[31][2];
 units[31] = "22";
 comments[31] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[31] = 275


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[32]= "33)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[32]= new Array();
 choices[32][0] = "El 23 de julio de 1952.";
 choices[32][1] = "El 18 de abril de 1951.";
 choices[32][2] = "El 16 de abril de 1948.";
 choices[32][3] = "d)Ninguna de las respuestas son correctas.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[32] = 349


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[33]= new Array();
 choices[33][0] = "Constitucional.";
 choices[33][1] = "Penal.";
 choices[33][2] = "Militar.";
 choices[33][3] = "Tribunales consuetudinarios.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 262. CONSTITUCION1978";
 preguntaids[33] = 262


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[34]= "35)  El sector p&uacute;blico institucional se integra por:";
 choices[34]= new Array();
 choices[34][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[34][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[34][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[34][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[34] = 523


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[35]= "36)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[35][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[35][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[35][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[35] = choices[35][2];
 units[35] = "83";
 comments[35] = "Id Pregunta: 56. AGE A1 2015";
 preguntaids[35] = 56


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[36]= new Array();
 choices[36][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[36][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[36][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[36][3] = "La tasa de desempleo ronda el 20%";
 answers[36] = choices[36][2];
 units[36] = "12";
 comments[36] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[36] = 572


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[37]= new Array();
 choices[37][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[37][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[37][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[37][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[37] = choices[37][0];
 units[37] = "77";
 comments[37] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[37] = 685


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[38]= "39)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[38]= new Array();
 choices[38][0] = "X.";
 choices[38][1] = "XIX.";
 choices[38][2] = "XV.";
 choices[38][3] = "XIII.";
 answers[38] = choices[38][1];
 units[38] = "5";
 comments[38] = "Id Pregunta: 327. UNION EUROPEA";
 preguntaids[38] = 327


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta falsa";
 choices[39]= new Array();
 choices[39][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[39][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[39][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[39][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[39] = choices[39][3];
 units[39] = "22";
 comments[39] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[39] = 276


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[40]= "41)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[40][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[40][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[40][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[40] = choices[40][3];
 units[40] = "41";
 comments[40] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[40] = 82


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[41]= new Array();
 choices[41][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[41][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[41][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[41][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 178. CONSTITUCION1978";
 preguntaids[41] = 178


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[42]= new Array();
 choices[42][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[42][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[42][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[42][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[42] = choices[42][0];
 units[42] = "46";
 comments[42] = "Id Pregunta: 629. Junta de Extremadura A1 2015";
 preguntaids[42] = 629


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[43]= new Array();
 choices[43][0] = "Estimaci&oacute;n del riesgo";
 choices[43][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[43][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[43][3] = "Mapa de riesgos";
 answers[43] = choices[43][3];
 units[43] = "45";
 comments[43] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[43] = 85


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[44]= "45)  Los criptosistemas pueden clasificarse en:";
 choices[44]= new Array();
 choices[44][0] = "Concretos, Estables e Inestables.";
 choices[44][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[44][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[44][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[44] = choices[44][3];
 units[44] = "76";
 comments[44] = "Id Pregunta: 603. Junta de Extremadura A1 2015";
 preguntaids[44] = 603


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[45]= new Array();
 choices[45][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[45][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[45][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[45][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[45] = choices[45][0];
 units[45] = "7";
 comments[45] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";
 preguntaids[45] = 157


//  Id pregunta: 859 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;ntos fasc&iacute;culos tiene la gu&iacute;a de comunicaci&oacute;n digital para la Administraci&oacute;n General del Estado?";
 choices[46]= new Array();
 choices[46][0] = "12";
 choices[46][1] = "11";
 choices[46][2] = "13";
 choices[46][3] = "10";
 answers[46] = choices[46][0];
 units[46] = "125";
 comments[46] = "Id Pregunta: 859. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[46] = 859


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[47]= new Array();
 choices[47][0] = "Art&iacute;culo 16.2.";
 choices[47][1] = "Art&iacute;culo 17.1.";
 choices[47][2] = "Art&iacute;culo 18.1.";
 choices[47][3] = "Art&iacute;culo 18.2.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 224. CONSTITUCION1978";
 preguntaids[47] = 224


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[48]= new Array();
 choices[48][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[48][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[48][2] = "Apertura al exterior";
 choices[48][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[48] = choices[48][0];
 units[48] = "17";
 comments[48] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[48] = 762


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[49]= new Array();
 choices[49][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[49][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[49][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[49][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[49] = choices[49][3];
 units[49] = "57";
 comments[49] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[49] = 640


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[50]= "51)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[50]= new Array();
 choices[50][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[50][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[50][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[50][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[50] = 391


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[51]= "52)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[51]= new Array();
 choices[51][0] = "Rey.";
 choices[51][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[51][2] = "Constituci&oacute;n.";
 choices[51][3] = "Pueblo.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 251. CONSTITUCION1978";
 preguntaids[51] = 251


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[52]= "53)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[52]= new Array();
 choices[52][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[52][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[52][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[52][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[52] = choices[52][2];
 units[52] = "22";
 comments[52] = "Id Pregunta: 128. ";
 preguntaids[52] = 128


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[53]= "54)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[53]= new Array();
 choices[53][0] = "La Comisi&oacute;n.";
 choices[53][1] = "El Consejo de Europa.";
 choices[53][2] = "El Consejo Europeo.";
 choices[53][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[53] = choices[53][3];
 units[53] = "5";
 comments[53] = "Id Pregunta: 300. UNION EUROPEA";
 preguntaids[53] = 300


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[54]= new Array();
 choices[54][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[54][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[54][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[54][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[54] = choices[54][2];
 units[54] = "77";
 comments[54] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";
 preguntaids[54] = 693


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[55]= "56)  Tienen la condici&oacute;n de alto cargo:";
 choices[55]= new Array();
 choices[55][0] = "los &oacute;rganos superiores";
 choices[55][1] = "los &oacute;rganos superiores y directivos";
 choices[55][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[55][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[55] = 794


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[56]= "57)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[56]= new Array();
 choices[56][0] = "20 parlamentarios.";
 choices[56][1] = "29 parlamentarios.";
 choices[56][2] = "18 parlamentarios.";
 choices[56][3] = "23 parlamentarios.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 366. UNION EUROPEA";
 preguntaids[56] = 366


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[57]= "58)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[57]= new Array();
 choices[57][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[57][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[57][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[57][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[57] = choices[57][1];
 units[57] = "58";
 comments[57] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[57] = 643


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[58]= new Array();
 choices[58][0] = "Agenda digital para Europa";
 choices[58][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[58][2] = "Juventud en movimiento";
 choices[58][3] = "Agenda Web 2.0";
 answers[58] = choices[58][3];
 units[58] = "19";
 comments[58] = "Id Pregunta: 760. Europa 2020";
 preguntaids[58] = 760


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[59]= "60)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[59]= new Array();
 choices[59][0] = "SMB3";
 choices[59][1] = "AFP";
 choices[59][2] = "NFS";
 choices[59][3] = "FTP";
 answers[59] = choices[59][0];
 units[59] = "59";
 comments[59] = "Id Pregunta: 30. AGE A1 2015";
 preguntaids[59] = 30


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[60]= "61)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[60]= new Array();
 choices[60][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[60][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[60][2] = "La protecci&oacute;n del medio ambiente.";
 choices[60][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[60] = choices[60][0];
 units[60] = "22";
 comments[60] = "Id Pregunta: 125. ";
 preguntaids[60] = 125


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[61]= new Array();
 choices[61][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[61][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[61][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][1];
 units[61] = "34, 84";
 comments[61] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[61] = 723


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[62]= "63)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[62]= new Array();
 choices[62][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[62][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[62][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[62][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[62] = choices[62][0];
 units[62] = "31";
 comments[62] = "Id Pregunta: 2. AGE A1 2015";
 preguntaids[62] = 2


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[63]= "64)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[63][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[63][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[63][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[63] = 764


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[64]= "65)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[64]= new Array();
 choices[64][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[64][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[64][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[64][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[64] = 439


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[65]= "66)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[65]= new Array();
 choices[65][0] = "Interoperabilidad";
 choices[65][1] = "Integridad";
 choices[65][2] = "Capital humano";
 choices[65][3] = "Trazabilidad";
 answers[65] = choices[65][2];
 units[65] = "19";
 comments[65] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[65] = 166


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[66]= "67)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[66]= new Array();
 choices[66][0] = "Relaciones base y vistas.";
 choices[66][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[66][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[66][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[66] = choices[66][3];
 units[66] = "60";
 comments[66] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[66] = 637


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[67]= new Array();
 choices[67][0] = "El Consejo Nacional de la Mujer";
 choices[67][1] = "El Consejo de la Mujer";
 choices[67][2] = "El Instituto de la Mujer";
 choices[67][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[67] = choices[67][3];
 units[67] = "14";
 comments[67] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[67] = 383


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[68]= new Array();
 choices[68][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[68][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[68][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[68][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[68] = choices[68][1];
 units[68] = "19";
 comments[68] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[68] = 581


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[69]= new Array();
 choices[69][0] = "Al Consejo Europeo.";
 choices[69][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[69][2] = "A la Comisi&oacute;n Europea.";
 choices[69][3] = "Al Parlamento Europeo.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 320. UNION EUROPEA";
 preguntaids[69] = 320


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[70]= "71)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[70]= new Array();
 choices[70][0] = "A la persona demandante.";
 choices[70][1] = "A la persona demandada.";
 choices[70][2] = "Al &oacute;rgano judicial.";
 choices[70][3] = "Al &oacute;rgano administrativo.";
 answers[70] = choices[70][1];
 units[70] = "14";
 comments[70] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[70] = 400


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[71]= "72)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[71]= new Array();
 choices[71][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[71][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[71][2] = "Son incompatibles ambas actas de diputado.";
 choices[71][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 335. UNION EUROPEA";
 preguntaids[71] = 335


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[72]= new Array();
 choices[72][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[72][1] = "Autorizar indultos generales.";
 choices[72][2] = "Sancionar las leyes.";
 choices[72][3] = "Promulgar las leyes.";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[72] = 185


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la respuesta correcta:";
 choices[73]= new Array();
 choices[73][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[73][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[73][2] = "Las respuestas A y B son correctas.";
 choices[73][3] = "Las respuestas A y B son falsas.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 279. UNION EUROPEA";
 preguntaids[73] = 279


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[74]= new Array();
 choices[74][0] = "El Consejo Nacional de la Mujer.";
 choices[74][1] = "El Consejo de la Mujer.";
 choices[74][2] = "El Instituto de la Mujer.";
 choices[74][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[74] = choices[74][3];
 units[74] = "14";
 comments[74] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[74] = 390


