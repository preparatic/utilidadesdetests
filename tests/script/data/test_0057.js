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

//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[0]= new Array();
 choices[0][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[0][1] = "Entrada en la Uni&oacute;n Europea";
 choices[0][2] = "Pactos de la Moncloa";
 choices[0][3] = "Ingreso en la ONU";
 answers[0] = choices[0][3];
 units[0] = "12";
 comments[0] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[1]= new Array();
 choices[1][0] = "Cifrada";
 choices[1][1] = "Conjunta";
 choices[1][2] = "Sistem&aacute;tica";
 choices[1][3] = "Todas son correctas";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[2]= "3)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[2]= new Array();
 choices[2][0] = "3 a&ntilde;os.";
 choices[2][1] = "5 a&ntilde;os.";
 choices[2][2] = "4 a&ntilde;os.";
 choices[2][3] = "6 a&ntilde;os.";
 answers[2] = choices[2][1];
 units[2] = "1";
 comments[2] = "Id Pregunta: 193. CONSTITUCION1978";


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


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[4]= new Array();
 choices[4][0] = "Neo4J ";
 choices[4][1] = "OrientDB ";
 choices[4][2] = "InfoGrid ";
 choices[4][3] = "SimpleDB";
 answers[4] = choices[4][3];
 units[4] = "73";
 comments[4] = "Id Pregunta: 653. ";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[5]= "6)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[5]= new Array();
 choices[5][0] = "Siempre en formato electr&oacute;nico.";
 choices[5][1] = "Siempre en formato papel.";
 choices[5][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[5][3] = "La ley no regula el formato del expediente.";
 answers[5] = choices[5][0];
 units[5] = "7";
 comments[5] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[6]= "7)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[6]= new Array();
 choices[6][0] = "Ejecutivo";
 choices[6][1] = "Limitativo";
 choices[6][2] = "Estimativo";
 choices[6][3] = "Progresivo";
 answers[6] = choices[6][2];
 units[6] = "10";
 comments[6] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[7]= new Array();
 choices[7][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[7][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[7][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[7][3] = "El Instituto de la Mujer de Extremadura.";
 answers[7] = choices[7][3];
 units[7] = "14";
 comments[7] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[8]= "9)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Unidad de igualdad.";
 choices[8][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[8][2] = "Ninguna de las anteriores.";
 choices[8][3] = "A y B son correctas.";
 answers[8] = choices[8][1];
 units[8] = "14";
 comments[8] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[9]= new Array();
 choices[9][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[9][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[9][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[9][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[9] = choices[9][2];
 units[9] = "17";
 comments[9] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[10]= "11)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[10]= new Array();
 choices[10][0] = "El presidente de las Cortes Generales.";
 choices[10][1] = "El Presidente del Gobierno.";
 choices[10][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[10][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[11]= "12)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[11]= new Array();
 choices[11][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[11][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[11][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[11][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[12]= "13)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[12]= new Array();
 choices[12][0] = "Relaciones base y vistas.";
 choices[12][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[12][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[12][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[12] = choices[12][3];
 units[12] = "60";
 comments[12] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[13]= "14)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[13]= new Array();
 choices[13][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[13][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[13][2] = "Se basan en sistemas distribuidos";
 choices[13][3] = "Se basan en el modelo de datos relacional";
 answers[13] = choices[13][2];
 units[13] = "73";
 comments[13] = "Id Pregunta: 102. ";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[14]= "15)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[14]= new Array();
 choices[14][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[14][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[14][2] = "Las Inspecciones Generales de los Servicios";
 choices[14][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[14] = choices[14][1];
 units[14] = "75";
 comments[14] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[15]= "16)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[15]= new Array();
 choices[15][0] = "En qu&eacute; nos gastamos el dinero";
 choices[15][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[15][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[15][3] = "Qui&eacute;n se gasta el dinero.";
 answers[15] = choices[15][0];
 units[15] = "10";
 comments[15] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


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


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[17]= "18)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[17]= new Array();
 choices[17][0] = "CO.PER.";
 choices[17][1] = "COMPER.";
 choices[17][2] = "CO.RE.PER.";
 choices[17][3] = "CO.PE.RRE.";
 answers[17] = choices[17][2];
 units[17] = "5";
 comments[17] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[18]= "19)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[18]= new Array();
 choices[18][0] = "Discriminaci&oacute;n indirecta.";
 choices[18][1] = "Discriminaci&oacute;n directa.";
 choices[18][2] = "Discriminaci&oacute;n por maternidad.";
 choices[18][3] = "Discriminaci&oacute;n abusiva.";
 answers[18] = choices[18][1];
 units[18] = "14";
 comments[18] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[19]= "20)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[19]= new Array();
 choices[19][0] = "tienen capacidad de obrar limitada";
 choices[19][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[19][2] = "no tienen capacidad de obrar";
 choices[19][3] = "ninguna es correcta";
 answers[19] = choices[19][2];
 units[19] = "7";
 comments[19] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[20]= "21)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "Medidas de igualdad.";
 choices[20][1] = "Objetivos de igualdad.";
 choices[20][2] = "Ambas son correctas.";
 choices[20][3] = "A y B son incorrectas.";
 answers[20] = choices[20][2];
 units[20] = "14";
 comments[20] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[21]= "22)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[21]= new Array();
 choices[21][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[21][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[21][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[21][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[21] = choices[21][3];
 units[21] = "62";
 comments[21] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[22]= new Array();
 choices[22][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[22][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[22][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[22][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[22] = choices[22][3];
 units[22] = "10";
 comments[22] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[23]= "24)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[23][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[23][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[23][3] = "Todas las anteriores son ciertas";
 answers[23] = choices[23][3];
 units[23] = "8";
 comments[23] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[24]= new Array();
 choices[24][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[24][1] = "Anteriormente se denominaba Sonar.";
 choices[24][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[24][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[24] = choices[24][2];
 units[24] = "92";
 comments[24] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[25]= "26)  En el lenguaje de modelado UML :";
 choices[25]= new Array();
 choices[25][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[25][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[25][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[25][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[25] = choices[25][2];
 units[25] = "89";
 comments[25] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[26]= new Array();
 choices[26][0] = "El 5 de Octubre de 2015";
 choices[26][1] = "El 15 de Octubre de 2015";
 choices[26][2] = "El 15 de Septiembre de 2015";
 choices[26][3] = "El 2 de Octubre de 2015";
 answers[26] = choices[26][2];
 units[26] = "19";
 comments[26] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[27]= new Array();
 choices[27][0] = "Jenkins";
 choices[27][1] = "Hudson";
 choices[27][2] = "SonarQube";
 choices[27][3] = "Todas lo son";
 answers[27] = choices[27][3];
 units[27] = "92";
 comments[27] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[28]= new Array();
 choices[28][0] = "El BCE";
 choices[28][1] = "El Parlamento";
 choices[28][2] = "El Consejo";
 choices[28][3] = "La Comisi&oacute;n";
 answers[28] = choices[28][3];
 units[28] = "17";
 comments[28] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[29]= "30)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[29]= new Array();
 choices[29][0] = "Consejos y Servicios.";
 choices[29][1] = "Servicios permanentes y no permanentes.";
 choices[29][2] = "Direcciones Generales.";
 choices[29][3] = "Direcciones ministeriales.";
 answers[29] = choices[29][2];
 units[29] = "5";
 comments[29] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[30]= "31)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[30]= new Array();
 choices[30][0] = "Mercurial, Git y Apache Subversion.";
 choices[30][1] = "Gimp, Mercurial y Git.";
 choices[30][2] = "RedMine, Planner y OpenProj.";
 choices[30][3] = "Cassandra, Git y REDIS.";
 answers[30] = choices[30][0];
 units[30] = "92";
 comments[30] = "Id Pregunta: 574. Tema 92. TAI 2016.";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[31]= new Array();
 choices[31][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[31][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[31][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[31][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[31] = choices[31][0];
 units[31] = "75";
 comments[31] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[32]= "33)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[32]= new Array();
 choices[32][0] = "18 miembros.";
 choices[32][1] = "Ninguna es correcta.";
 choices[32][2] = "22 miembros.";
 choices[32][3] = "21 miembros.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[33]= "34)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[33]= new Array();
 choices[33][0] = "Interchange of Data between Administrations (IDA)";
 choices[33][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[33][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[33][3] = "Interoperability Electronic European Solution (IEES)";
 answers[33] = choices[33][1];
 units[33] = "43";
 comments[33] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[34]= new Array();
 choices[34][0] = "Por reembolso de pr&eacute;stamos.";
 choices[34][1] = "Por la venta de bienes.";
 choices[34][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[34][3] = "Por prestaci&oacute;n de servicios.";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[35]= "36)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[35]= new Array();
 choices[35][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[35][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[35][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[35][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[36]= "37)  Sobre el recurso de reposici&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[36][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[36][2] = "Ha desaparecido en la Ley 39/2015";
 choices[36][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[36] = choices[36][0];
 units[36] = "8";
 comments[36] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[37]= "38)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[37]= new Array();
 choices[37][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[37][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[37][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[37][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[37] = choices[37][3];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[38]= "39)  ITIL v3, define:";
 choices[38]= new Array();
 choices[38][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[38][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[38][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[38][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[38] = choices[38][0];
 units[38] = "101";
 comments[38] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[39]= "40)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[39]= new Array();
 choices[39][0] = "Rey.";
 choices[39][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[39][2] = "Constituci&oacute;n.";
 choices[39][3] = "Pueblo.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[40]= "41)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[40][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[40][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[40][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[40] = choices[40][2];
 units[40] = "83";
 comments[40] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[41]= new Array();
 choices[41][0] = "A la CETIC";
 choices[41][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[41][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[41][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[41] = choices[41][3];
 units[41] = "19";
 comments[41] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[42]= new Array();
 choices[42][0] = "Selenium";
 choices[42][1] = "JUnit";
 choices[42][2] = "Jenkins";
 choices[42][3] = "JMeter";
 answers[42] = choices[42][2];
 units[42] = "92";
 comments[42] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "14";
 choices[43][1] = "11";
 choices[43][2] = "12";
 choices[43][3] = "15";
 answers[43] = choices[43][0];
 units[43] = "19";
 comments[43] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[44]= "45)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[44]= new Array();
 choices[44][0] = "Entradas (entities).";
 choices[44][1] = "Atributos (attribs).";
 choices[44][2] = "M&oacute;dulos (modules).";
 choices[44][3] = "Objetos (objects).";
 answers[44] = choices[44][0];
 units[44] = "74";
 comments[44] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[45]= new Array();
 choices[45][0] = "Las Cortes Generales.";
 choices[45][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[45][2] = "El Gobierno.";
 choices[45][3] = "El Congreso de los Diputados.";
 answers[45] = choices[45][0];
 units[45] = "10";
 comments[45] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[46]= "47)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[46]= new Array();
 choices[46][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[46][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[46][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[46][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[47]= new Array();
 choices[47][0] = "Maximizar el valor para los clientes";
 choices[47][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[47][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[47][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[47] = choices[47][3];
 units[47] = "34";
 comments[47] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[48]= new Array();
 choices[48][0] = "NoSQL";
 choices[48][1] = "Sistemas de baja latencia";
 choices[48][2] = "MapReduce";
 choices[48][3] = "Business Intelligence";
 answers[48] = choices[48][1];
 units[48] = "73";
 comments[48] = "Id Pregunta: 658. ";


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[49]= "50)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[49]= new Array();
 choices[49][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[49][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[49][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[49][3] = "ninguna es correcta";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 807. Ley 40/2015";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[50]= new Array();
 choices[50][0] = "Las sociedades mercantiles estatales.";
 choices[50][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[50][2] = "Las respuestas a) y b) son correctas.";
 choices[50][3] = "Las respuestas a) y b) no son correctas.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[51]= "52)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[51]= new Array();
 choices[51][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[51][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[51][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[51][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[51] = choices[51][0];
 units[51] = "8";
 comments[51] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[52]= "53)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[52]= new Array();
 choices[52][0] = "La Ley General Tributaria.";
 choices[52][1] = "La Ley Presupuestaria.";
 choices[52][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[52][3] = "Ninguna de las respuestas es correcta.";
 answers[52] = choices[52][0];
 units[52] = "10";
 comments[52] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[53]= "54)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[53]= new Array();
 choices[53][0] = "Subsecretario";
 choices[53][1] = "Subdirector general";
 choices[53][2] = "Secretario de Estado";
 choices[53][3] = "ninguna es correcta";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[54]= "55)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[54]= new Array();
 choices[54][0] = "Cinco a&ntilde;os.";
 choices[54][1] = "Seis a&ntilde;os.";
 choices[54][2] = "Cuatro a&ntilde;os.";
 choices[54][3] = "Tres a&ntilde;os.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[55]= "56)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[55]= new Array();
 choices[55][0] = "Estrasburgo.";
 choices[55][1] = "Bruselas.";
 choices[55][2] = "Luxemburgo.";
 choices[55][3] = "Holanda.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[56]= new Array();
 choices[56][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[56][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[56][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[56][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[57]= "58)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[57]= new Array();
 choices[57][0] = "Integrar la estrategia TIC con la de negocio";
 choices[57][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[57][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[57][3] = "Todas las anteriores";
 answers[57] = choices[57][3];
 units[57] = "26";
 comments[57] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[58]= "59)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[58]= new Array();
 choices[58][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[58][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[58][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[58][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[58] = choices[58][2];
 units[58] = "10";
 comments[58] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[59]= "60)  El pacto fiscal europeo de 2012 incluye:";
 choices[59]= new Array();
 choices[59][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[59][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[59][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[59][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[59] = choices[59][0];
 units[59] = "5";
 comments[59] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[60]= new Array();
 choices[60][0] = "Versi&oacute;n digital prioritaria.";
 choices[60][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[60][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[60][3] = "Apertura y transparencia.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[61]= new Array();
 choices[61][0] = "Nueve.";
 choices[61][1] = "Diez.";
 choices[61][2] = "Siete.";
 choices[61][3] = "Ocho.";
 answers[61] = choices[61][3];
 units[61] = "5";
 comments[61] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[62]= "63)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[62]= new Array();
 choices[62][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[62][1] = "garantizar la conservaci&oacute;n del documento";
 choices[62][2] = "garantizar la autenticidad del documento";
 choices[62][3] = "garantizar la integridad del documento";
 answers[62] = choices[62][0];
 units[62] = "7";
 comments[62] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[63]= new Array();
 choices[63][0] = "Car&aacute;cter sustitutivo";
 choices[63][1] = "Car&aacute;cter obligatorio";
 choices[63][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][3];
 units[63] = "19";
 comments[63] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[64]= "65)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[64]= new Array();
 choices[64][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[64][1] = "Ninguna de las respuestas es correcta.";
 choices[64][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[64][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[65]= "66)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[65]= new Array();
 choices[65][0] = "El Tratado de Maastrich.";
 choices[65][1] = "El Tratado de Amsterdam.";
 choices[65][2] = "El Tratado de Par&iacute;s.";
 choices[65][3] = "El Tratado de Roma.";
 answers[65] = choices[65][3];
 units[65] = "5";
 comments[65] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[66]= new Array();
 choices[66][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[66][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[66][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[66][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[66] = choices[66][0];
 units[66] = "14";
 comments[66] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[67][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "La A y B son incorrectas.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[68]= new Array();
 choices[68][0] = "10 d&iacute;as.";
 choices[68][1] = "15 d&iacute;as.";
 choices[68][2] = "1 mes.";
 choices[68][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[68] = choices[68][0];
 units[68] = "7";
 comments[68] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[69]= "70)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[69]= new Array();
 choices[69][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[69][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[69][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[69][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[69] = choices[69][3];
 units[69] = "10";
 comments[69] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[70]= "71)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[70][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[70][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[70][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[70] = choices[70][0];
 units[70] = "19";
 comments[70] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[71]= new Array();
 choices[71][0] = "Quince miembros.";
 choices[71][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[71][2] = "Los miembros que determine el Consejo.";
 choices[71][3] = "Un Presidente y quince miembros.";
 answers[71] = choices[71][1];
 units[71] = "14";
 comments[71] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[72]= new Array();
 choices[72][0] = "El Consejo Nacional de la Mujer";
 choices[72][1] = "El Consejo de la Mujer";
 choices[72][2] = "El Instituto de la Mujer";
 choices[72][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[72] = choices[72][3];
 units[72] = "14";
 comments[72] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[73]= "74)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[73]= new Array();
 choices[73][0] = "la capital del pa&iacute;s";
 choices[73][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[73][2] = "cada una de las provincias";
 choices[73][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[73] = choices[73][1];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[74]= new Array();
 choices[74][0] = "Los principios rectores";
 choices[74][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[74][2] = "Los hitos para su desarrollo gradual";
 choices[74][3] = "Todos los anteriores";
 answers[74] = choices[74][3];
 units[74] = "19";
 comments[74] = "Id Pregunta: 583. Estrategia TIC";


