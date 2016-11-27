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

//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[0]= new Array();
 choices[0][0] = "Anualmente por el Consejo de Ministros";
 choices[0][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[0][2] = "Al final de cada legislatura por el Gobierno";
 choices[0][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[0] = choices[0][0];
 units[0] = "14";
 comments[0] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[1]= new Array();
 choices[1][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[1][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[1][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[1][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[2]= "3)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[2]= new Array();
 choices[2][0] = "Con el a&ntilde;o anterior.";
 choices[2][1] = "Con los tres a&ntilde;os anteriores.";
 choices[2][2] = "Con el a&ntilde;o natural.";
 choices[2][3] = "Con los dos a&ntilde;os anteriores.";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[3]= "4)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[3]= new Array();
 choices[3][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[3][1] = "Tratarse de un acto no susceptible de recurso";
 choices[3][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[3][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[3] = choices[3][2];
 units[3] = "8";
 comments[3] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[4]= "5)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[4]= new Array();
 choices[4][0] = "El Segundo.";
 choices[4][1] = "El Primero.";
 choices[4][2] = "El Preliminar.";
 choices[4][3] = "El Tercero.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[5]= new Array();
 choices[5][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[5][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[5][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[5][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[5] = choices[5][0];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la respuesta correcta:";
 choices[6]= new Array();
 choices[6][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[6][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[6][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[6][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[6] = choices[6][1];
 units[6] = "98";
 comments[6] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[7]= "8)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[7]= new Array();
 choices[7][0] = "CO.PER.";
 choices[7][1] = "COMPER.";
 choices[7][2] = "CO.RE.PER.";
 choices[7][3] = "CO.PE.RRE.";
 answers[7] = choices[7][2];
 units[7] = "5";
 comments[7] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[8]= "9)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[8]= new Array();
 choices[8][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[8][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[8][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[8][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[8] = choices[8][3];
 units[8] = "41";
 comments[8] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[9]= "10)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[9]= new Array();
 choices[9][0] = "Los ocupados y los parados activos";
 choices[9][1] = "S&oacute;lo los ocupados";
 choices[9][2] = "Los ocupados y los inactivos";
 choices[9][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[9] = choices[9][0];
 units[9] = "12";
 comments[9] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[10]= "11)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[10]= new Array();
 choices[10][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[10][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[10][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[10][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[10] = choices[10][2];
 units[10] = "101";
 comments[10] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[11]= new Array();
 choices[11][0] = "Cinco.";
 choices[11][1] = "Dos.";
 choices[11][2] = "Cuatro.";
 choices[11][3] = "Siete.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[12]= new Array();
 choices[12][0] = "Crecimiento inteligente.";
 choices[12][1] = "Crecimiento inclusivo.";
 choices[12][2] = "Crecimiento sostenible.";
 choices[12][3] = "Crecimiento integrador.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[13]= new Array();
 choices[13][0] = "El Consejo Europeo.";
 choices[13][1] = "El Parlamento Europeo.";
 choices[13][2] = "El Consejo.";
 choices[13][3] = "La Comisi&oacute;n.";
 answers[13] = choices[13][3];
 units[13] = "5";
 comments[13] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[14]= new Array();
 choices[14][0] = "Veinticinco.";
 choices[14][1] = "Veintisiete.";
 choices[14][2] = "Veintinueve.";
 choices[14][3] = "Cuarenta y uno.";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[15]= "16)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[15]= new Array();
 choices[15][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[15][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[15][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[15][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[15] = choices[15][2];
 units[15] = "5";
 comments[15] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[16]= new Array();
 choices[16][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[16][1] = "Autorizar indultos generales.";
 choices[16][2] = "Sancionar las leyes.";
 choices[16][3] = "Promulgar las leyes.";
 answers[16] = choices[16][1];
 units[16] = "1";
 comments[16] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[17]= "18)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[17]= new Array();
 choices[17][0] = "Los cr&eacute;ditos";
 choices[17][1] = "Las partidas presupuestarias";
 choices[17][2] = "Los derechos";
 choices[17][3] = "Las obligaciones";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[18]= "19)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[18]= new Array();
 choices[18][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[18][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[18][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[18][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[18] = choices[18][1];
 units[18] = "19";
 comments[18] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[19]= new Array();
 choices[19][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[19][1] = "Anteriormente se denominaba Sonar.";
 choices[19][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[19][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[19] = choices[19][2];
 units[19] = "92";
 comments[19] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[20]= new Array();
 choices[20][0] = "Drupal";
 choices[20][1] = "Cassandra";
 choices[20][2] = "Wordpress";
 choices[20][3] = "OpenCMS";
 answers[20] = choices[20][1];
 units[20] = "99";
 comments[20] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[21]= "22)  Un wireframe es:";
 choices[21]= new Array();
 choices[21][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[21][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[21][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[21][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[21] = choices[21][3];
 units[21] = "62";
 comments[21] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[22]= "23)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[22]= new Array();
 choices[22][0] = "formular solicitudes";
 choices[22][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[22][2] = "presentar declaraciones responsables o comunicaciones";
 choices[22][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[22] = choices[22][1];
 units[22] = "7";
 comments[22] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[23]= "24)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[23]= new Array();
 choices[23][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[23][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[23][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[23][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[23] = choices[23][2];
 units[23] = "47";
 comments[23] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[24]= new Array();
 choices[24][0] = "SPARQL";
 choices[24][1] = "UnQL";
 choices[24][2] = "XQUERY";
 choices[24][3] = "RQL";
 answers[24] = choices[24][0];
 units[24] = "74";
 comments[24] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[25]= new Array();
 choices[25][0] = "El 5 de Octubre de 2015";
 choices[25][1] = "El 15 de Octubre de 2015";
 choices[25][2] = "El 15 de Septiembre de 2015";
 choices[25][3] = "El 2 de Octubre de 2015";
 answers[25] = choices[25][2];
 units[25] = "19";
 comments[25] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[26]= new Array();
 choices[26][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[26][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[26][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[26][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[26] = choices[26][3];
 units[26] = "10";
 comments[26] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[27]= new Array();
 choices[27][0] = "Cuatro.";
 choices[27][1] = "Ninguno.";
 choices[27][2] = "Dos.";
 choices[27][3] = "Seis.";
 answers[27] = choices[27][2];
 units[27] = "1";
 comments[27] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[28]= new Array();
 choices[28][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[28][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[28][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[28][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[29]= new Array();
 choices[29][0] = "Entre 1973 y 1978";
 choices[29][1] = "Entre 1992 y 1996";
 choices[29][2] = "Entre 1978 y 1985";
 choices[29][3] = "Entre 2008 y 2013";
 answers[29] = choices[29][2];
 units[29] = "12";
 comments[29] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[30]= new Array();
 choices[30][0] = "Es un framework de software libre.";
 choices[30][1] = "Es una base de datos NoSQL.";
 choices[30][2] = "Est&aacute; basado en MapReduce.";
 choices[30][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[30] = choices[30][1];
 units[30] = "73";
 comments[30] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[31]= new Array();
 choices[31][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[31][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[31][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[31][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[32]= new Array();
 choices[32][0] = "Dos Cap&iacute;tulos.";
 choices[32][1] = "Tres Cap&iacute;tulos.";
 choices[32][2] = "Un Cap&iacute;tulo.";
 choices[32][3] = "Cuatro Cap&iacute;tulos.";
 answers[32] = choices[32][1];
 units[32] = "1";
 comments[32] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[33]= "34)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[33]= new Array();
 choices[33][0] = "Cinco a&ntilde;os.";
 choices[33][1] = "Cuatro a&ntilde;os.";
 choices[33][2] = "Tres a&ntilde;os.";
 choices[33][3] = "Seis meses.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[34]= "35)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[34]= new Array();
 choices[34][0] = "Acoso sexual.";
 choices[34][1] = "Acoso por raz&oacute;n de sexo.";
 choices[34][2] = "Acoso laboral.";
 choices[34][3] = "Acoso mental.";
 answers[34] = choices[34][1];
 units[34] = "14";
 comments[34] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[35]= "36)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[35]= new Array();
 choices[35][0] = "Los cr&eacute;ditos";
 choices[35][1] = "Las partidas presupuestarias";
 choices[35][2] = "Los derechos";
 choices[35][3] = "Las obligaciones";
 answers[35] = choices[35][3];
 units[35] = "10";
 comments[35] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[36]= new Array();
 choices[36][0] = "NoSQL";
 choices[36][1] = "Sistemas de baja latencia";
 choices[36][2] = "MapReduce";
 choices[36][3] = "Business Intelligence";
 answers[36] = choices[36][1];
 units[36] = "73";
 comments[36] = "Id Pregunta: 658. ";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[37]= "38)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[37]= new Array();
 choices[37][0] = "Presencia equilibrada.";
 choices[37][1] = "Presencia paritaria.";
 choices[37][2] = "Presencia consensuada.";
 choices[37][3] = "presencia horizontal.";
 answers[37] = choices[37][0];
 units[37] = "14";
 comments[37] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[38]= "39)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[38]= new Array();
 choices[38][0] = "En sentencias switch para alterar el control de flujo.";
 choices[38][1] = "Para manejar excepciones.";
 choices[38][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[38][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[38] = choices[38][1];
 units[38] = "64";
 comments[38] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[39]= new Array();
 choices[39][0] = "Art&iacute;culo 70.";
 choices[39][1] = "Art&iacute;culo 54.";
 choices[39][2] = "Articulo 62.";
 choices[39][3] = "Articulo 55. 5.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[40]= new Array();
 choices[40][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[40][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[40][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[40][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[41]= "42)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[41]= new Array();
 choices[41][0] = "Acuerdos cualificados.";
 choices[41][1] = "Acuerdos ponderados.";
 choices[41][2] = "Valoraci&oacute;n de los votos.";
 choices[41][3] = "Ponderaci&oacute;n de los votos.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[42]= "43)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[42]= new Array();
 choices[42][0] = "Discriminaci&oacute;n indirecta.";
 choices[42][1] = "Discriminaci&oacute;n directa.";
 choices[42][2] = "Discriminaci&oacute;n por maternidad.";
 choices[42][3] = "Discriminaci&oacute;n abusiva.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[43]= "44)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[43]= new Array();
 choices[43][0] = "El Parlamento Europeo.";
 choices[43][1] = "Todas las respuestas son correctas.";
 choices[43][2] = "La Comisi&oacute;n Europea.";
 choices[43][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[44]= "45)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[44][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[44][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[44][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[45]= new Array();
 choices[45][0] = "Nivel 7 - MPLS.";
 choices[45][1] = "Nivel 3 - RARP.";
 choices[45][2] = "Nivel 2 - HDLC.";
 choices[45][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[45] = choices[45][2];
 units[45] = "105";
 comments[45] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[46]= new Array();
 choices[46][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[46][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[46][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[46][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[47]= "48)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Incremental, diferencial, completa";
 choices[47][1] = "Completa, incremental, diferencial";
 choices[47][2] = "Completa, diferencial, incremental";
 choices[47][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[47] = choices[47][0];
 units[47] = "53";
 comments[47] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[48]= new Array();
 choices[48][0] = "El Ministro de Econom&iacute;a.";
 choices[48][1] = "El Gobierno.";
 choices[48][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[48][3] = "El Presidente del Gobierno.";
 answers[48] = choices[48][1];
 units[48] = "10";
 comments[48] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[49]= new Array();
 choices[49][0] = "Bienalmente";
 choices[49][1] = "Anualmente";
 choices[49][2] = "Semestralmente";
 choices[49][3] = "Cada cuatro a&ntilde;os";
 answers[49] = choices[49][1];
 units[49] = "19";
 comments[49] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[50]= new Array();
 choices[50][0] = "Data Mining (miner&iacute;a de datos)";
 choices[50][1] = "Business Intelligence (inteligencia de negocio)";
 choices[50][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[50][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[50] = choices[50][1];
 units[50] = "72";
 comments[50] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[51]= "52)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[51]= new Array();
 choices[51][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[51][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[51][2] = "Un programa de igualdad.";
 choices[51][3] = "Un estatuto de igualdad.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[52]= new Array();
 choices[52][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[52][1] = "Excesiva estabilidad de empleo";
 choices[52][2] = "An&eacute;mico crecimiento de la productividad";
 choices[52][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[52] = choices[52][1];
 units[52] = "12";
 comments[52] = "Id Pregunta: 563. Modelo econ&oacute;mico";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[53]= new Array();
 choices[53][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[53][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[53][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[53][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[54]= "55)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[54]= new Array();
 choices[54][0] = "Al Presidente del Gobierno.";
 choices[54][1] = "A las Cortes Generales";
 choices[54][2] = "A los electores.";
 choices[54][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[54] = choices[54][3];
 units[54] = "1";
 comments[54] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[55]= "56)  La Administraci&oacute;n General del Estado se organiza:";
 choices[55]= new Array();
 choices[55][0] = "en Ministerios";
 choices[55][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[55][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[55][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[55] = choices[55][1];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[56][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[56][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[56][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[56] = choices[56][1];
 units[56] = "60";
 comments[56] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[57]= new Array();
 choices[57][0] = "El Consejo Nacional de la Mujer.";
 choices[57][1] = "El Consejo de la Mujer.";
 choices[57][2] = "El Instituto de la Mujer.";
 choices[57][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[57] = choices[57][3];
 units[57] = "14";
 comments[57] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[58]= new Array();
 choices[58][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[58][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[58][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[58][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[58] = choices[58][1];
 units[58] = "22";
 comments[58] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[59]= new Array();
 choices[59][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[59][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[59][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[59][3] = "Todas son correctas.";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[60]= new Array();
 choices[60][0] = "PostgreSQL";
 choices[60][1] = "Datawarehouse";
 choices[60][2] = "Snowflake";
 choices[60][3] = "CouchDB";
 answers[60] = choices[60][0];
 units[60] = "61";
 comments[60] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[61]= "62)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[61]= new Array();
 choices[61][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[61][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[61][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[61][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[61] = choices[61][1];
 units[61] = "106";
 comments[61] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[62]= new Array();
 choices[62][0] = "Las Cortes Generales.";
 choices[62][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[62][2] = "El Gobierno.";
 choices[62][3] = "El Congreso de los Diputados.";
 answers[62] = choices[62][0];
 units[62] = "10";
 comments[62] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[63]= "64)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[63]= new Array();
 choices[63][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[63][1] = "los Subdelegados del Gobierno en las provincias";
 choices[63][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[63][3] = "a y b son correctas";
 answers[63] = choices[63][3];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[64]= new Array();
 choices[64][0] = "El Presidente del Gobierno.";
 choices[64][1] = "El Consejo de Ministros.";
 choices[64][2] = "40 Diputados.";
 choices[64][3] = "El Ministerio Fiscal.";
 answers[64] = choices[64][0];
 units[64] = "1";
 comments[64] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[65]= new Array();
 choices[65][0] = "Por Real Decreto.";
 choices[65][1] = "Por Orden del Ministerio del Interior.";
 choices[65][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[65][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[66]= "67)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[66]= new Array();
 choices[66][0] = "Clustering";
 choices[66][1] = "Deduplicaci&oacute;n";
 choices[66][2] = "Virtualizaci&oacute;n";
 choices[66][3] = "Contenerizaci&oacute;n";
 answers[66] = choices[66][2];
 units[66] = "124";
 comments[66] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[67]= "68)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[67]= new Array();
 choices[67][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[67][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[67][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[67][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[68][1] = "Auditor&iacute;a operativa.";
 choices[68][2] = "Auditor&iacute;a de cumplimiento.";
 choices[68][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[69]= "70)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[69]= new Array();
 choices[69][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[69][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[69][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[69][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[69] = choices[69][3];
 units[69] = "43";
 comments[69] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[70]= "71)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[70]= new Array();
 choices[70][0] = "la capital del pa&iacute;s";
 choices[70][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[70][2] = "cada una de las provincias";
 choices[70][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[70] = choices[70][1];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[71]= "72)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[71]= new Array();
 choices[71][0] = "Sean dirigidas por mujeres";
 choices[71][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[71][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[71][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[71] = choices[71][2];
 units[71] = "14";
 comments[71] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[72]= "73)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[72]= new Array();
 choices[72][0] = "P&uacute;blica.";
 choices[72][1] = "Privada.";
 choices[72][2] = "A y B son correctas.";
 choices[72][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[73]= new Array();
 choices[73][0] = "Principio de solo una vez";
 choices[73][1] = "Apertura y transparencia";
 choices[73][2] = "Confianza y seguridad";
 choices[73][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[73] = choices[73][3];
 units[73] = "19";
 comments[73] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[74]= new Array();
 choices[74][0] = "las personas jur&iacute;dicas ";
 choices[74][1] = "las entidades con personalidad jur&iacute;dica";
 choices[74][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[74][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[74] = choices[74][1];
 units[74] = "7";
 comments[74] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


