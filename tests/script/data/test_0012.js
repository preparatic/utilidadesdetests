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

//  Id pregunta: 10020 Año de creación de pregunta: 2016
 questions[0]= "1)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[0]= new Array();
 choices[0][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[0][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[0][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[0][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[0] = choices[0][2];
 units[0] = "27";
 comments[0] = "Id Pregunta: 10020. AGE A1 2015";


//  Id pregunta: 10098 Año de creación de pregunta: 2016
 questions[1]= "2)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Clustering";
 choices[1][1] = "Deduplicaci&oacute;n";
 choices[1][2] = "Virtualizaci&oacute;n";
 choices[1][3] = "Contenerizaci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "124";
 comments[1] = "Id Pregunta: 10098. AGE A1 2015";


//  Id pregunta: 10551 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[2]= new Array();
 choices[2][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[2][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[2][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[2][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[2] = choices[2][2];
 units[2] = "26";
 comments[2] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10068 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[3]= new Array();
 choices[3][0] = "Data Mining (miner&iacute;a de datos)";
 choices[3][1] = "Business Intelligence (inteligencia de negocio)";
 choices[3][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[3][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[3] = choices[3][1];
 units[3] = "72";
 comments[3] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10566 Año de creación de pregunta: 2016
 questions[4]= "5)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[4]= new Array();
 choices[4][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[4][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[4][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[4][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[4] = choices[4][0];
 units[4] = "12";
 comments[4] = "Id Pregunta: 10566. Modelo econ&oacute;mico";


//  Id pregunta: 10109 Año de creación de pregunta: 2016
 questions[5]= "6)  Big Data:";
 choices[5]= new Array();
 choices[5][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[5][1] = "No puede emplearse para tratar datos no estructurados";
 choices[5][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][3];
 units[5] = "73";
 comments[5] = "Id Pregunta: 10109. ";


//  Id pregunta: 10096 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "VMware ESX";
 choices[6][1] = "XenServer";
 choices[6][2] = "Alfresco";
 choices[6][3] = "Microsoft Hyper-V";
 answers[6] = choices[6][2];
 units[6] = "54";
 comments[6] = "Id Pregunta: 10096. AGE A1 2015";


//  Id pregunta: 10188 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[7]= new Array();
 choices[7][0] = "No, en ning&uacute;n caso.";
 choices[7][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[7][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[7][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[7] = choices[7][3];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10575 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[8]= new Array();
 choices[8][0] = "MySQL";
 choices[8][1] = "SQLite";
 choices[8][2] = "Zope";
 choices[8][3] = "MariaDB";
 answers[8] = choices[8][2];
 units[8] = "61";
 comments[8] = "Id Pregunta: 10575. Tema 61. TAI 2016.";


//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[9]= "10)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[9]= new Array();
 choices[9][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[9][1] = "Personas con nacionalidad europea.";
 choices[9][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[9][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[9] = choices[9][3];
 units[9] = "5";
 comments[9] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10460 Año de creación de pregunta: 2016
 questions[10]= "11)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[10]= new Array();
 choices[10][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[10][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[10][2] = "La normativa reguladora de cada derecho.";
 choices[10][3] = "Ley 50/1997, del Gobierno.";
 answers[10] = choices[10][2];
 units[10] = "10";
 comments[10] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10482 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[11]= new Array();
 choices[11][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[11] = choices[11][0];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10482. PRESUPUESTOS GENERALES";


//  Id pregunta: 10073 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[12]= new Array();
 choices[12][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[12][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[12][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[12][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[12] = choices[12][1];
 units[12] = "44";
 comments[12] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[13]= "14)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[13]= new Array();
 choices[13][0] = "Diciembre de 1987.";
 choices[13][1] = "Septiembre de 1989.";
 choices[13][2] = "Octubre de 1990.";
 choices[13][3] = "Noviembre de 1980.";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10584 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[14]= new Array();
 choices[14][0] = "Bienalmente";
 choices[14][1] = "Anualmente";
 choices[14][2] = "Semestralmente";
 choices[14][3] = "Cada cuatro a&ntilde;os";
 answers[14] = choices[14][1];
 units[14] = "19";
 comments[14] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10076 Año de creación de pregunta: 2016
 questions[15]= "16)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[15]= new Array();
 choices[15][0] = "Estrat&eacute;gico";
 choices[15][1] = "Operativo";
 choices[15][2] = "T&aacute;ctico";
 choices[15][3] = "Tecnol&oacute;gico";
 answers[15] = choices[15][0];
 units[15] = "36";
 comments[15] = "Id Pregunta: 10076. AGE A1 2015";


//  Id pregunta: 10409 Año de creación de pregunta: 2016
 questions[16]= "17)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[16]= new Array();
 choices[16][0] = "Prevenir las conductas discriminatorias.";
 choices[16][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[16][2] = "Todas son correctas.";
 choices[16][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 10409. POLITICAS DE IGUALDAD";


//  Id pregunta: 10290 Año de creación de pregunta: 2016
 questions[17]= "18)  El Parlamento Europeo celebrar&aacute;:";
 choices[17]= new Array();
 choices[17][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[17][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[17][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[17][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 10290. UNION EUROPEA";


//  Id pregunta: 10039 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[18]= new Array();
 choices[18][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[18][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[18][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[18][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[18] = choices[18][2];
 units[18] = "71";
 comments[18] = "Id Pregunta: 10039. AGE A1 2015";


//  Id pregunta: 10193 Año de creación de pregunta: 2016
 questions[19]= "20)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[19]= new Array();
 choices[19][0] = "3 a&ntilde;os.";
 choices[19][1] = "5 a&ntilde;os.";
 choices[19][2] = "4 a&ntilde;os.";
 choices[19][3] = "6 a&ntilde;os.";
 answers[19] = choices[19][1];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10193. CONSTITUCION1978";


//  Id pregunta: 10083 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[20]= new Array();
 choices[20][0] = "Perceptible";
 choices[20][1] = "Operable";
 choices[20][2] = "Comprensible";
 choices[20][3] = "Robusto";
 answers[20] = choices[20][2];
 units[20] = "42";
 comments[20] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[21]= "22)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Discriminaci&oacute;n indirecta.";
 choices[21][1] = "Discriminaci&oacute;n directa.";
 choices[21][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[21][3] = "Discriminaci&oacute;n abusiva.";
 answers[21] = choices[21][0];
 units[21] = "14";
 comments[21] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10022 Año de creación de pregunta: 2016
 questions[22]= "23)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[22]= new Array();
 choices[22][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[22][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[22][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[22][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[22] = choices[22][1];
 units[22] = "26";
 comments[22] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10651 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[23]= new Array();
 choices[23][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[23][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[23][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[23][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[23] = choices[23][3];
 units[23] = "120";
 comments[23] = "Id Pregunta: 10651. Junta de Extremadura A1 2015";


//  Id pregunta: 10002 Año de creación de pregunta: 2016
 questions[24]= "25)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[24]= new Array();
 choices[24][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[24][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[24][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[24][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[24] = choices[24][0];
 units[24] = "31";
 comments[24] = "Id Pregunta: 10002. AGE A1 2015";


//  Id pregunta: 10462 Año de creación de pregunta: 2016
 questions[25]= "26)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[25]= new Array();
 choices[25][0] = "Transferencias de cr&eacute;dito.";
 choices[25][1] = "Incorporaciones de cr&eacute;dito.";
 choices[25][2] = "Imputaciones de cr&eacute;dito.";
 choices[25][3] = "Ampliaciones de cr&eacute;dito.";
 answers[25] = choices[25][2];
 units[25] = "10";
 comments[25] = "Id Pregunta: 10462. PRESUPUESTOS GENERALES";


//  Id pregunta: 10591 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[26]= new Array();
 choices[26][0] = "La CETIC";
 choices[26][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[26][2] = "La DTIC";
 choices[26][3] = "El MHFP";
 answers[26] = choices[26][0];
 units[26] = "19";
 comments[26] = "Id Pregunta: 10591. Estrategia TIC";


//  Id pregunta: 10478 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[27]= new Array();
 choices[27][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[27][1] = "Intervenci&oacute;n formal y material.";
 choices[27][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[27][3] = "Intervenci&oacute;n formal y general.";
 answers[27] = choices[27][1];
 units[27] = "10";
 comments[27] = "Id Pregunta: 10478. PRESUPUESTOS GENERALES";


//  Id pregunta: 10305 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[28]= new Array();
 choices[28][0] = "Estrasburgo.";
 choices[28][1] = "Bruselas.";
 choices[28][2] = "Luxemburgo.";
 choices[28][3] = "Par&iacute;s.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10385 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[29]= new Array();
 choices[29][0] = "Anualmente por el Consejo de Ministros";
 choices[29][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[29][2] = "Al final de cada legislatura por el Gobierno";
 choices[29][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10385. POLITICAS DE IGUALDAD";


//  Id pregunta: 10399 Año de creación de pregunta: 2016
 questions[30]= "31)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[30]= new Array();
 choices[30][0] = "Acciones de discriminaci&oacute;n.";
 choices[30][1] = "Acciones positivas.";
 choices[30][2] = "Acciones negativas.";
 choices[30][3] = "Acciones neutras.";
 answers[30] = choices[30][1];
 units[30] = "14";
 comments[30] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10072 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[31][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[31][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[31][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[31] = choices[31][1];
 units[31] = "86";
 comments[31] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[32]= new Array();
 choices[32][0] = "El Parlamento y el Consejo.";
 choices[32][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[32][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[32][3] = "La Comisi&oacute;n y el Consejo.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10032 Año de creación de pregunta: 2016
 questions[33]= "34)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[33]= new Array();
 choices[33][0] = "ASF-AL (Apache License 2.0)";
 choices[33][1] = "EUPL (European Union Public License)";
 choices[33][2] = "LGPL (Lesser General Public License)";
 choices[33][3] = "MIT(MIT License)";
 answers[33] = choices[33][1];
 units[33] = "43";
 comments[33] = "Id Pregunta: 10032. AGE A1 2015";


//  Id pregunta: 10246 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[34]= new Array();
 choices[34][0] = "Dos Cap&iacute;tulos.";
 choices[34][1] = "Tres Cap&iacute;tulos.";
 choices[34][2] = "Un Cap&iacute;tulo.";
 choices[34][3] = "Cuatro Cap&iacute;tulos.";
 answers[34] = choices[34][1];
 units[34] = "1";
 comments[34] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10469 Año de creación de pregunta: 2016
 questions[35]= "36)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[35][1] = "Las inversiones reales y financieras.";
 choices[35][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[35][3] = "Las transferencias de capital y las inversiones reales.";
 answers[35] = choices[35][3];
 units[35] = "10";
 comments[35] = "Id Pregunta: 10469. PRESUPUESTOS GENERALES";


//  Id pregunta: 10479 Año de creación de pregunta: 2016
 questions[36]= "37)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[36]= new Array();
 choices[36][0] = "A nivel de art&iacute;culo.";
 choices[36][1] = "A nivel de cap&iacute;tulo.";
 choices[36][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[36][3] = "A nivel de concepto.";
 answers[36] = choices[36][2];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10479. PRESUPUESTOS GENERALES";


//  Id pregunta: 10596 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[37]= new Array();
 choices[37][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[37][1] = "Las CMADs";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "Ninguna es correcta";
 answers[37] = choices[37][2];
 units[37] = "19";
 comments[37] = "Id Pregunta: 10596. Estrategia TIC";


//  Id pregunta: 10669 Año de creación de pregunta: 2016
 questions[38]= "39)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[38]= new Array();
 choices[38][0] = "Resoluci&oacute;n.";
 choices[38][1] = "Desistimiento o renuncia.";
 choices[38][2] = "Caducidad.";
 choices[38][3] = "Todas las anteriores.";
 answers[38] = choices[38][3];
 units[38] = "7";
 comments[38] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10329 Año de creación de pregunta: 2016
 questions[39]= "40)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[39]= new Array();
 choices[39][0] = "Acuerdos cualificados.";
 choices[39][1] = "Acuerdos ponderados.";
 choices[39][2] = "Valoraci&oacute;n de los votos.";
 choices[39][3] = "Ponderaci&oacute;n de los votos.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10329. UNION EUROPEA";


//  Id pregunta: 10115 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[40]= new Array();
 choices[40][0] = "El Tratado de Lisboa";
 choices[40][1] = "El Tratado de Amsterdam";
 choices[40][2] = "El Tratado de Niza";
 choices[40][3] = "El Acta &Uacute;nica Europea";
 answers[40] = choices[40][1];
 units[40] = "15";
 comments[40] = "Id Pregunta: 10115. ";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[41]= "42)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[41][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[41][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[41][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10134 Año de creación de pregunta: 2016
 questions[42]= "43)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[42]= new Array();
 choices[42][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[42][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[42][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[42][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[42] = choices[42][2];
 units[42] = "12";
 comments[42] = "Id Pregunta: 10134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[43]= "44)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[43]= new Array();
 choices[43][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[43][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[43][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[43][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[43] = choices[43][2];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[44]= new Array();
 choices[44][0] = "Es un framework de software libre.";
 choices[44][1] = "Es una base de datos NoSQL.";
 choices[44][2] = "Est&aacute; basado en MapReduce.";
 choices[44][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[44] = choices[44][1];
 units[44] = "73";
 comments[44] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10220 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[45]= new Array();
 choices[45][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[45][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[45][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[45][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 10220. CONSTITUCION1978";


//  Id pregunta: 10345 Año de creación de pregunta: 2016
 questions[46]= "47)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[46]= new Array();
 choices[46][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[46][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[46][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[46][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[46] = choices[46][3];
 units[46] = "5";
 comments[46] = "Id Pregunta: 10345. UNION EUROPEA";


//  Id pregunta: 10123 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[47]= new Array();
 choices[47][0] = "Un representante de la Administraci&oacute;n local.";
 choices[47][1] = "Un representante del Tribunal de Cuentas.";
 choices[47][2] = "Un representante del Defensor del Pueblo.";
 choices[47][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[47] = choices[47][0];
 units[47] = "22";
 comments[47] = "Id Pregunta: 10123. ";


//  Id pregunta: 10173 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[48]= new Array();
 choices[48][0] = "absoluta de las Cortes Generales.";
 choices[48][1] = "absoluta del Congreso de los Diputados.";
 choices[48][2] = "simple de las Cortes Generales.";
 choices[48][3] = "simple del Congreso de los Diputados.";
 answers[48] = choices[48][3];
 units[48] = "1";
 comments[48] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10413 Año de creación de pregunta: 2016
 questions[49]= "50)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[49]= new Array();
 choices[49][0] = "La mujeres.";
 choices[49][1] = "Lo hombres.";
 choices[49][2] = "Todas las personas.";
 choices[49][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[49] = choices[49][2];
 units[49] = "14";
 comments[49] = "Id Pregunta: 10413. POLITICAS DE IGUALDAD";


//  Id pregunta: 10301 Año de creación de pregunta: 2016
 questions[50]= "51)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[50]= new Array();
 choices[50][0] = "Los propios miembros del Tribunal.";
 choices[50][1] = "El Consejo de Europa.";
 choices[50][2] = "El Consejo Europeo.";
 choices[50][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[50] = choices[50][0];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10301. UNION EUROPEA";


//  Id pregunta: 10677 Año de creación de pregunta: 2016
 questions[51]= "52)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[51]= new Array();
 choices[51][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[51][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[51][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[51][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[51] = choices[51][2];
 units[51] = "14";
 comments[51] = "Id Pregunta: 10677. Dependencia";


//  Id pregunta: 10568 Año de creación de pregunta: 2016
 questions[52]= "53)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[52]= new Array();
 choices[52][0] = "Alrededor de un 26% del PIB";
 choices[52][1] = "Alrededor de un 11% del PIB";
 choices[52][2] = "Alrededor de un 34% del PIB";
 choices[52][3] = "Alrededor de un 7% del PIB";
 answers[52] = choices[52][1];
 units[52] = "12";
 comments[52] = "Id Pregunta: 10568. Modelo econ&oacute;mico";


//  Id pregunta: 10628 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[53]= new Array();
 choices[53][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[53][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[53][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[53][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[53] = choices[53][0];
 units[53] = "45";
 comments[53] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10225 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[54]= new Array();
 choices[54][0] = "las Cortes generales.";
 choices[54][1] = "los partidos pol&iacute;ticos.";
 choices[54][2] = "los sindicatos.";
 choices[54][3] = "las Comunidades Aut&oacute;nomas.";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10225. CONSTITUCION1978";


//  Id pregunta: 10672 Año de creación de pregunta: 2016
 questions[55]= "56)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[55]= new Array();
 choices[55][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[55][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[55][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[55][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[55] = choices[55][2];
 units[55] = "47";
 comments[55] = "Id Pregunta: 10672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[56]= "57)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[56]= new Array();
 choices[56][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[56][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[56][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[56][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[56] = choices[56][1];
 units[56] = "58";
 comments[56] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10140 Año de creación de pregunta: 2016
 questions[57]= "58)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[57]= new Array();
 choices[57][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[57][1] = "Tratarse de un acto no susceptible de recurso";
 choices[57][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[57][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[57] = choices[57][2];
 units[57] = "8";
 comments[57] = "Id Pregunta: 10140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 10199 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[58]= new Array();
 choices[58][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[58][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[58][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[58][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 10199. CONSTITUCION1978";


//  Id pregunta: 10536 Año de creación de pregunta: 2016
 questions[59]= "60)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[59]= new Array();
 choices[59][0] = "apud acta";
 choices[59][1] = "presencialmente";
 choices[59][2] = "electr&oacute;nicamente";
 choices[59][3] = "todas son correctas";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10538 Año de creación de pregunta: 2016
 questions[60]= "61)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[60]= new Array();
 choices[60][0] = "los registros mercantiles";
 choices[60][1] = "los registros de la propiedad";
 choices[60][2] = "los protocolos notariales";
 choices[60][3] = "todas son correctas";
 answers[60] = choices[60][3];
 units[60] = "7";
 comments[60] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10530 Año de creación de pregunta: 2016
 questions[61]= "62)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[61]= new Array();
 choices[61][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[61][1] = "mediante resoluci&oacute;n judicial especial";
 choices[61][2] = "&uacute;nicamente mediante poder notarial";
 choices[61][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[61] = choices[61][3];
 units[61] = "7";
 comments[61] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10099 Año de creación de pregunta: 2016
 questions[62]= "63)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[62]= new Array();
 choices[62][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[62][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[62][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[62][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[62] = choices[62][2];
 units[62] = "26";
 comments[62] = "Id Pregunta: 10099. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10346 Año de creación de pregunta: 2016
 questions[63]= "64)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[63]= new Array();
 choices[63][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[63][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[63][2] = "Cinco a&ntilde;os.";
 choices[63][3] = "Ninguna es correcta.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10392 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[64]= new Array();
 choices[64][0] = "Indirecta.";
 choices[64][1] = "Directa.";
 choices[64][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[64][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[64] = choices[64][1];
 units[64] = "14";
 comments[64] = "Id Pregunta: 10392. POLITICAS DE IGUALDAD";


//  Id pregunta: 10507 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[65]= new Array();
 choices[65][0] = "Reducir el gasto p&uacute;blico.";
 choices[65][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[65][2] = "Reducir el endeudamiento neto.";
 choices[65][3] = "Al Fondo de Contingencia.";
 answers[65] = choices[65][2];
 units[65] = "10";
 comments[65] = "Id Pregunta: 10507. PRESUPUESTOS GENERALES";


//  Id pregunta: 10600 Año de creación de pregunta: 2016
 questions[66]= "67)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[66]= new Array();
 choices[66][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[66][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[66][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[66][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[66] = choices[66][2];
 units[66] = "108";
 comments[66] = "Id Pregunta: 10600. Junta de Extremadura A1 2015";


//  Id pregunta: 10674 Año de creación de pregunta: 2016
 questions[67]= "68)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[67]= new Array();
 choices[67][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[67][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[67][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[67][3] = "Todas las anteriores son correctas.";
 answers[67] = choices[67][3];
 units[67] = "47";
 comments[67] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10287 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[68]= new Array();
 choices[68][0] = "Versi&oacute;n digital prioritaria.";
 choices[68][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[68][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[68][3] = "Apertura y transparencia.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10287. UNION EUROPEA";


//  Id pregunta: 10678 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[69]= new Array();
 choices[69][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[69] = choices[69][1];
 units[69] = "14";
 comments[69] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10519 Año de creación de pregunta: 2016
 questions[70]= "71)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[70]= new Array();
 choices[70][0] = "un art&iacute;culo";
 choices[70][1] = "dos art&iacute;culos";
 choices[70][2] = "tres art&iacute;culos";
 choices[70][3] = "cuatro art&iacute;culos";
 answers[70] = choices[70][1];
 units[70] = "7";
 comments[70] = "Id Pregunta: 10519. LEY 39/2015";


//  Id pregunta: 10448 Año de creación de pregunta: 2016
 questions[71]= "72)  La partida presupuestaria es equivalente a...";
 choices[71]= new Array();
 choices[71][0] = "El sujeto que realiza el gasto";
 choices[71][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[71][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[71][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[71] = choices[71][3];
 units[71] = "10";
 comments[71] = "Id Pregunta: 10448. PRESUPUESTOS GENERALES";


//  Id pregunta: 10497 Año de creación de pregunta: 2016
 questions[72]= "73)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[72]= new Array();
 choices[72][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[72][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[72][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[72][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[72] = choices[72][3];
 units[72] = "10";
 comments[72] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10443 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[73]= new Array();
 choices[73][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[73][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[73][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[73][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[73] = choices[73][1];
 units[73] = "43";
 comments[73] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10390 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[74]= new Array();
 choices[74][0] = "El Consejo Nacional de la Mujer.";
 choices[74][1] = "El Consejo de la Mujer.";
 choices[74][2] = "El Instituto de la Mujer.";
 choices[74][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[74] = choices[74][3];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


