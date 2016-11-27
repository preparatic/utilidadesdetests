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

//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[0][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[0][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[0][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[0] = choices[0][2];
 units[0] = "53";
 comments[0] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[1]= new Array();
 choices[1][0] = "Quince miembros.";
 choices[1][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[1][2] = "Los miembros que determine el Consejo.";
 choices[1][3] = "Un Presidente y quince miembros.";
 answers[1] = choices[1][1];
 units[1] = "14";
 comments[1] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[2]= "3)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[2]= new Array();
 choices[2][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[2][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[2][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[2][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[3]= "4)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[3]= new Array();
 choices[3][0] = "Gran volumen de informaci&oacute;n";
 choices[3][1] = "Gran variedad de datos";
 choices[3][2] = "Se analizan datos a gran velocidad";
 choices[3][3] = "Todas las anteriores son verdaderas";
 answers[3] = choices[3][3];
 units[3] = "73";
 comments[3] = "Id Pregunta: 105. ";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[4]= "5)  Son bases de datos NoSQL:";
 choices[4]= new Array();
 choices[4][0] = "MongoDB y Maria DB";
 choices[4][1] = "HBase y Dynamo";
 choices[4][2] = "MariaDB, Cassandra y BigTable";
 choices[4][3] = "La A) y la C)";
 answers[4] = choices[4][1];
 units[4] = "73";
 comments[4] = "Id Pregunta: 104. ";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[5]= "6)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[5]= new Array();
 choices[5][0] = "Los Derechos y Deberes fundamentales.";
 choices[5][1] = "La Corona.";
 choices[5][2] = "El Poder Judicial.";
 choices[5][3] = "Las Cortes Generales.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[6]= "7)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Discriminaci&oacute;n indirecta.";
 choices[6][1] = "Discriminaci&oacute;n directa.";
 choices[6][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[6][3] = "Discriminaci&oacute;n abusiva.";
 answers[6] = choices[6][0];
 units[6] = "14";
 comments[6] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[7]= "8)  ITIL v3, define:";
 choices[7]= new Array();
 choices[7][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[7][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[7][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[7][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[7] = choices[7][0];
 units[7] = "101";
 comments[7] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[8]= new Array();
 choices[8][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[8][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[8][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = choices[8][2];
 units[8] = "18, 20";
 comments[8] = "Id Pregunta: 742. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[9]= new Array();
 choices[9][0] = "Al Consejo Europeo.";
 choices[9][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[9][2] = "A la Comisi&oacute;n Europea.";
 choices[9][3] = "Al Parlamento Europeo.";
 answers[9] = choices[9][2];
 units[9] = "5";
 comments[9] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[10]= "11)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[10]= new Array();
 choices[10][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[10][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[10][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[10][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[10] = choices[10][1];
 units[10] = "106";
 comments[10] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[11]= new Array();
 choices[11][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[11][1] = "Todas las respuestas son correctas.";
 choices[11][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[11][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[11] = choices[11][1];
 units[11] = "10";
 comments[11] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[12]= "13)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[12]= new Array();
 choices[12][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[12][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[12][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[12][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[12] = choices[12][0];
 units[12] = "28";
 comments[12] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[13]= "14)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[13]= new Array();
 choices[13][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[13][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[13][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[13][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[13] = choices[13][0];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[14]= new Array();
 choices[14][0] = "Al Consejo Europeo.";
 choices[14][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[14][2] = "A la Comisi&oacute;n Europea.";
 choices[14][3] = "Al Parlamento Europeo.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[15]= new Array();
 choices[15][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[15][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[15][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[15][3] = "Todos los anteriores";
 answers[15] = choices[15][3];
 units[15] = "19";
 comments[15] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[16]= "17)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[16]= new Array();
 choices[16][0] = "Almacenamiento orientado a columnas";
 choices[16][1] = "Framework MapReduce";
 choices[16][2] = "OLTP";
 choices[16][3] = "Bases de datos clave-valor";
 answers[16] = choices[16][2];
 units[16] = "73";
 comments[16] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[17]= new Array();
 choices[17][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[17][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[17][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[17][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[17] = choices[17][1];
 units[17] = "7";
 comments[17] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[18]= "19)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[18]= new Array();
 choices[18][0] = "En sentencias switch para alterar el control de flujo.";
 choices[18][1] = "Para manejar excepciones.";
 choices[18][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[18][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[18] = choices[18][1];
 units[18] = "64";
 comments[18] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[19]= new Array();
 choices[19][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[19][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[19][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[19][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[19] = choices[19][2];
 units[19] = "7";
 comments[19] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[20]= "21)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[20]= new Array();
 choices[20][0] = "Tres a&ntilde;os.";
 choices[20][1] = "Dos a&ntilde;os y medio.";
 choices[20][2] = "Cinco a&ntilde;os.";
 choices[20][3] = "Seis a&ntilde;os.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ala la correcta:";
 choices[21]= new Array();
 choices[21][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[21][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[21][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[21][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[22]= "23)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[22]= new Array();
 choices[22][0] = "IANA";
 choices[22][1] = "ISOC";
 choices[22][2] = "IETF";
 choices[22][3] = "IAB";
 answers[22] = choices[22][0];
 units[22] = "103";
 comments[22] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[23]= new Array();
 choices[23][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[23][1] = "Calidad de los servicios p&uacute;blicos";
 choices[23][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[23][3] = "Servicio efectivo a los ciudadanos";
 answers[23] = choices[23][1];
 units[23] = "18, 20";
 comments[23] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[24]= new Array();
 choices[24][0] = "Maximizar el valor para los clientes";
 choices[24][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[24][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[24][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[24] = choices[24][3];
 units[24] = "34";
 comments[24] = "Id Pregunta: 716. Metodologias Lean";


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


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[26]= "27)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[26]= new Array();
 choices[26][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[26][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[26][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[26][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[26] = choices[26][2];
 units[26] = "5";
 comments[26] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[27]= "28)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[27]= new Array();
 choices[27][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[27][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[27][2] = "Ninguna es correcta.";
 choices[27][3] = "A y B son correctas.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[28]= "29)  El Presupuesto por programas sirve para saber...";
 choices[28]= new Array();
 choices[28][0] = "En qu&eacute; nos gastamos el dinero";
 choices[28][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[28][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[28][3] = "Qui&eacute;n se gasta el dinero";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[29]= "30)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[29]= new Array();
 choices[29][0] = "Dise&ntilde;o del servicio.";
 choices[29][1] = "Transici&oacute;n del servicio.";
 choices[29][2] = "Estrategia del servicio.";
 choices[29][3] = "Operaci&oacute;n del servicio.";
 answers[29] = choices[29][2];
 units[29] = "101";
 comments[29] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[30]= new Array();
 choices[30][0] = "Eric Ries";
 choices[30][1] = "Steve Blank";
 choices[30][2] = "Tom Poppendieck";
 choices[30][3] = "Alexander Osterwalder";
 answers[30] = choices[30][2];
 units[30] = "34";
 comments[30] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[31]= "32)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[31]= new Array();
 choices[31][0] = "Los ocupados y los parados activos";
 choices[31][1] = "S&oacute;lo los ocupados";
 choices[31][2] = "Los ocupados y los inactivos";
 choices[31][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[31] = choices[31][0];
 units[31] = "12";
 comments[31] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[32]= "33)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[32]= new Array();
 choices[32][0] = "Medidas de igualdad.";
 choices[32][1] = "Objetivos de igualdad.";
 choices[32][2] = "Ambas son correctas.";
 choices[32][3] = "A y B son incorrectas.";
 answers[32] = choices[32][2];
 units[32] = "14";
 comments[32] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[33]= "34)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[33]= new Array();
 choices[33][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[33][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[33][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[33][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[33] = choices[33][3];
 units[33] = "5";
 comments[33] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[34]= "35)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[34]= new Array();
 choices[34][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[34][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[34][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[34][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[35]= "36)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[35]= new Array();
 choices[35][0] = "3 a&ntilde;os.";
 choices[35][1] = "5 a&ntilde;os.";
 choices[35][2] = "4 a&ntilde;os.";
 choices[35][3] = "6 a&ntilde;os.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[36]= new Array();
 choices[36][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[36][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[36][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[36][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[36] = choices[36][1];
 units[36] = "92";
 comments[36] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[37]= "38)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[37]= new Array();
 choices[37][0] = "Unidad de igualdad.";
 choices[37][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[37][2] = "Ninguna de las anteriores.";
 choices[37][3] = "A y B son correctas.";
 answers[37] = choices[37][1];
 units[37] = "14";
 comments[37] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[38]= "39)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[38]= new Array();
 choices[38][0] = "un &oacute;rgano superior";
 choices[38][1] = "un &oacute;rgano directivo";
 choices[38][2] = "un &oacute;rgano superior o directivo";
 choices[38][3] = "ninguna es correcta";
 answers[38] = choices[38][2];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[39]= "40)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[39]= new Array();
 choices[39][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[39][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[39][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[39][3] = "Todas las respuestas son correctas.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[40]= "41)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[40]= new Array();
 choices[40][0] = "Rey.";
 choices[40][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[40][2] = "Constituci&oacute;n.";
 choices[40][3] = "Pueblo.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[41]= "42)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[41]= new Array();
 choices[41][0] = "la poblaci&oacute;n del territorio";
 choices[41][1] = "el volumen de gesti&oacute;n";
 choices[41][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][3];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[42]= new Array();
 choices[42][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[42][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[42][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[42][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[42] = choices[42][0];
 units[42] = "22";
 comments[42] = "Id Pregunta: 124. ";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[43]= "44)  Los Reglamentos no se caracterizan por:";
 choices[43]= new Array();
 choices[43][0] = "No poseer alcance general.";
 choices[43][1] = "Ser obligatorios.";
 choices[43][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[43][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[43] = choices[43][0];
 units[43] = "5";
 comments[43] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[44]= new Array();
 choices[44][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[44][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[44][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[44][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[45]= "46)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[45]= new Array();
 choices[45][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[45][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[45][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[45][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[45] = choices[45][2];
 units[45] = "22";
 comments[45] = "Id Pregunta: 128. ";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[46]= "47)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[46]= new Array();
 choices[46][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[46][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[46][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[46][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[47]= "48)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[47]= new Array();
 choices[47][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[47][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[47][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[47][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[47] = choices[47][2];
 units[47] = "27";
 comments[47] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[48]= new Array();
 choices[48][0] = "Indirecta.";
 choices[48][1] = "Directa.";
 choices[48][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[48][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[49]= "50)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[49]= new Array();
 choices[49][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[49][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[49][2] = "Son incompatibles ambas actas de diputado.";
 choices[49][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[50]= "51)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[50]= new Array();
 choices[50][0] = "los registros mercantiles";
 choices[50][1] = "los registros de la propiedad";
 choices[50][2] = "los protocolos notariales";
 choices[50][3] = "todas son correctas";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[51]= "52)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[51]= new Array();
 choices[51][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[51][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[51][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[51][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[52]= "53)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[52]= new Array();
 choices[52][0] = "Alrededor de un 26% del PIB";
 choices[52][1] = "Alrededor de un 11% del PIB";
 choices[52][2] = "Alrededor de un 34% del PIB";
 choices[52][3] = "Alrededor de un 7% del PIB";
 answers[52] = choices[52][1];
 units[52] = "12";
 comments[52] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[53]= new Array();
 choices[53][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[53][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[53][2] = "A) y B) son verdaderas";
 choices[53][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[53] = choices[53][2];
 units[53] = "73";
 comments[53] = "Id Pregunta: 106. ";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[54]= "55)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[54]= new Array();
 choices[54][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[54][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[54][2] = "a y b son correctas";
 choices[54][3] = "a y b son incorrectas";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[55]= "56)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[55]= new Array();
 choices[55][0] = "La Ley General Tributaria.";
 choices[55][1] = "La Ley Presupuestaria.";
 choices[55][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[55][3] = "Ninguna de las respuestas es correcta.";
 answers[55] = choices[55][0];
 units[55] = "10";
 comments[55] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[56]= "57)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[56]= new Array();
 choices[56][0] = "Son vinculantes solamente.";
 choices[56][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[56][2] = "Son preceptivos y vinculantes.";
 choices[56][3] = "Son preceptivos y no vinculantes.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[57]= "58)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[57]= new Array();
 choices[57][0] = "Entradas (entities).";
 choices[57][1] = "Atributos (attribs).";
 choices[57][2] = "M&oacute;dulos (modules).";
 choices[57][3] = "Objetos (objects).";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[58]= new Array();
 choices[58][0] = "Al Consejo Europeo.";
 choices[58][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[58][2] = "A la Comisi&oacute;n Europea.";
 choices[58][3] = "Al Parlamento Europeo.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[59]= "60)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[59][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[59][2] = "Ambas son correctas.";
 choices[59][3] = "Ambas son incorrectas.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[60]= new Array();
 choices[60][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[60][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[60][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[60][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[60] = choices[60][1];
 units[60] = "15";
 comments[60] = "Id Pregunta: 112. ";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[61]= "62)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[61]= new Array();
 choices[61][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[61][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[61][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[61][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[61] = choices[61][2];
 units[61] = "89";
 comments[61] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[62]= "63)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[62]= new Array();
 choices[62][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[62][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[62][2] = "A partir del 1 de enero de 2015";
 choices[62][3] = "A partir del 1 de julio de 2016";
 answers[62] = choices[62][1];
 units[62] = "77";
 comments[62] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[63]= "64)  LA estructura de la Estrategia TIC:";
 choices[63]= new Array();
 choices[63][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[63][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[63][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[63][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[63] = choices[63][2];
 units[63] = "28";
 comments[63] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[64][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[64][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[64][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[64] = choices[64][3];
 units[64] = "19";
 comments[64] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[65]= "66)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[65]= new Array();
 choices[65][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[65][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[65][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[65][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[65] = choices[65][3];
 units[65] = "5";
 comments[65] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[66]= new Array();
 choices[66][0] = "las Cortes generales.";
 choices[66][1] = "los partidos pol&iacute;ticos.";
 choices[66][2] = "los sindicatos.";
 choices[66][3] = "las Comunidades Aut&oacute;nomas.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[67]= new Array();
 choices[67][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[67][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[67][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[67][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[67] = choices[67][2];
 units[67] = "10";
 comments[67] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[68]= "69)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[68]= new Array();
 choices[68][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[68][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[68][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[68][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[69]= "70)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[69]= new Array();
 choices[69][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[69][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[69][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[69][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[69] = choices[69][3];
 units[69] = "7";
 comments[69] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[70]= "71)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[70]= new Array();
 choices[70][0] = "la capital del pa&iacute;s";
 choices[70][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[70][2] = "cada una de las provincias";
 choices[70][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[70] = choices[70][1];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[71]= "72)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[71]= new Array();
 choices[71][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[71][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[71][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[71][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[71] = choices[71][3];
 units[71] = "10";
 comments[71] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[72]= new Array();
 choices[72][0] = "Backlog refinement";
 choices[72][1] = "Backlog refinement";
 choices[72][2] = "A y b son correctas";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][2];
 units[72] = "34, 84";
 comments[72] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[73]= "74)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[73]= new Array();
 choices[73][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[73][1] = "la Organizaci&oacute;n Territorial";
 choices[73][2] = "la Organizaci&oacute;n sectorial";
 choices[73][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[74]= new Array();
 choices[74][0] = "Las respuestas a) y b) son correctas.";
 choices[74][1] = "Las respuestas a) y b) no son correctas.";
 choices[74][2] = "Contenido coherente con los planes sectoriales.";
 choices[74][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[74] = choices[74][0];
 units[74] = "10";
 comments[74] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


