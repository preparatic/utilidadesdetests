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

//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[0]= new Array();
 choices[0][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[0][1] = "Las CMADs";
 choices[0][2] = "Ambas son correctas.";
 choices[0][3] = "Ninguna es correcta";
 answers[0] = choices[0][2];
 units[0] = "19";
 comments[0] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[1]= new Array();
 choices[1][0] = "El 1 de noviembre de 1994.";
 choices[1][1] = "El 1 de noviembre de 1992.";
 choices[1][2] = "El 1 de noviembre de 1995.";
 choices[1][3] = "El 1 de noviembre de 1993.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[2]= "3)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[2]= new Array();
 choices[2][0] = "Peters";
 choices[2][1] = "Hollingsworth";
 choices[2][2] = "Manuel Castells";
 choices[2][3] = "Gaebler";
 answers[2] = choices[2][1];
 units[2] = "18, 20";
 comments[2] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[3]= "4)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[3]= new Array();
 choices[3][0] = "El nombre y el tipo de correspondencia.";
 choices[3][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[3][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[3][3] = "El nombre y el grado.";
 answers[3] = choices[3][1];
 units[3] = "85";
 comments[3] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[4]= "5)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[4]= new Array();
 choices[4][0] = "Tres a&ntilde;os.";
 choices[4][1] = "Dos a&ntilde;os y medio.";
 choices[4][2] = "Cinco a&ntilde;os.";
 choices[4][3] = "Seis a&ntilde;os.";
 answers[4] = choices[4][3];
 units[4] = "5";
 comments[4] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[5]= new Array();
 choices[5][0] = "El 5 de Octubre de 2015";
 choices[5][1] = "El 15 de Octubre de 2015";
 choices[5][2] = "El 15 de Septiembre de 2015";
 choices[5][3] = "El 2 de Octubre de 2015";
 answers[5] = choices[5][2];
 units[5] = "19";
 comments[5] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[6][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[6][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[6][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[6] = choices[6][1];
 units[6] = "89";
 comments[6] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[7]= "8)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[7]= new Array();
 choices[7][0] = "Bases de datos orientadas a filas";
 choices[7][1] = "Bases de datos orientadas a documentos";
 choices[7][2] = "Bases de datos de clave/valor";
 choices[7][3] = "Bases de datos orientadas a objetos";
 answers[7] = choices[7][0];
 units[7] = "73";
 comments[7] = "Id Pregunta: 100. ";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[8]= "9)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[8]= new Array();
 choices[8][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[8][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[8][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[8][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[9]= "10)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[9]= new Array();
 choices[9][0] = "El derecho a la propiedad privada.";
 choices[9][1] = "El derecho de asociaci&oacute;n.";
 choices[9][2] = "El derecho de fundaci&oacute;n.";
 choices[9][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[10]= new Array();
 choices[10][0] = "El Parlamento y el Consejo.";
 choices[10][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[10][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[10][3] = "La Comisi&oacute;n y el Consejo.";
 answers[10] = choices[10][2];
 units[10] = "5";
 comments[10] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[11]= new Array();
 choices[11][0] = "Transferencias de cr&eacute;dito.";
 choices[11][1] = "Incorporaciones de cr&eacute;dito.";
 choices[11][2] = "Imputaciones de cr&eacute;dito.";
 choices[11][3] = "Ampliaciones de cr&eacute;dito.";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[12]= "13)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[12]= new Array();
 choices[12][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[12][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[12][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[12][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[13]= "14)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[13]= new Array();
 choices[13][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[13][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[13][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[13][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[13] = choices[13][2];
 units[13] = "53";
 comments[13] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[14]= new Array();
 choices[14][0] = "Categor&iacute;a b&aacute;sica";
 choices[14][1] = "Categor&iacute;a media";
 choices[14][2] = "Categor&iacute;a alta";
 choices[14][3] = "Categor&iacute;a media y alta";
 answers[14] = choices[14][2];
 units[14] = "46";
 comments[14] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[15]= "16)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[15]= new Array();
 choices[15][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[15][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[15][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[15][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[15] = choices[15][1];
 units[15] = "19";
 comments[15] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[16]= "17)  Sobre el recurso de reposici&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[16][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[16][2] = "Ha desaparecido en la Ley 39/2015";
 choices[16][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[16] = choices[16][0];
 units[16] = "8";
 comments[16] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[17]= new Array();
 choices[17][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[17][1] = "Directiva 2004/113/CE del Consejo.";
 choices[17][2] = "Todas son correctas.";
 choices[17][3] = "Todas son falsas.";
 answers[17] = choices[17][2];
 units[17] = "14";
 comments[17] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[18]= "19)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[18]= new Array();
 choices[18][0] = "Seguridad Social y AEAT";
 choices[18][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[18][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[18][3] = "Todos los anteriores";
 answers[18] = choices[18][3];
 units[18] = "19";
 comments[18] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[19]= "20)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[19]= new Array();
 choices[19][0] = "El Ministerio de Hacienda.";
 choices[19][1] = "El Ministerio de Econom&iacute;a.";
 choices[19][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[19][3] = "Ninguna de las respuestas es correcta.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[20]= "21)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[20][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[20][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[20][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[20] = choices[20][3];
 units[20] = "41";
 comments[20] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Estimaci&oacute;n del riesgo";
 choices[21][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[21][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[21][3] = "Mapa de riesgos";
 answers[21] = choices[21][3];
 units[21] = "45";
 comments[21] = "Id Pregunta: 85. AGE A1 2015";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[22]= "23)  LA estructura de la Estrategia TIC:";
 choices[22]= new Array();
 choices[22][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[22][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[22][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[22][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[22] = choices[22][2];
 units[22] = "28";
 comments[22] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[23]= "24)  El plan nacional de ciudades inteligentes...";
 choices[23]= new Array();
 choices[23][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[23][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[23][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[23][3] = "No existe";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[24]= "25)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[24]= new Array();
 choices[24][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[24][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[24][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[24][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[25]= "26)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[25]= new Array();
 choices[25][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[25][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[25][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[25][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[26]= "27)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[26]= new Array();
 choices[26][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[26][1] = "El Congreso de los Diputados.";
 choices[26][2] = "Las Cortes Generales.";
 choices[26][3] = "El Consejo de Ministros";
 answers[26] = choices[26][3];
 units[26] = "1";
 comments[26] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[27]= "28)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[27]= new Array();
 choices[27][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[27][1] = "En el extranjero.";
 choices[27][2] = "Ninguna es correcta.";
 choices[27][3] = "Ambas son correctas.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[28]= "29)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[28]= new Array();
 choices[28][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[28][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[28][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[28][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[28] = choices[28][1];
 units[28] = "92";
 comments[28] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[29]= "30)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[29]= new Array();
 choices[29][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[29][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[29][2] = "Un programa de igualdad.";
 choices[29][3] = "Un estatuto de igualdad.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[30]= new Array();
 choices[30][0] = "Por reembolso de pr&eacute;stamos.";
 choices[30][1] = "Por la venta de bienes.";
 choices[30][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[30][3] = "Por prestaci&oacute;n de servicios.";
 answers[30] = choices[30][2];
 units[30] = "10";
 comments[30] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[31]= "32)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[31]= new Array();
 choices[31][0] = "Interoperabilidad";
 choices[31][1] = "Integridad";
 choices[31][2] = "Capital humano";
 choices[31][3] = "Trazabilidad";
 answers[31] = choices[31][2];
 units[31] = "19";
 comments[31] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[32]= "33)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[32]= new Array();
 choices[32][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[32][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[32][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[32][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[32] = choices[32][0];
 units[32] = "31";
 comments[32] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[33]= "34)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[33]= new Array();
 choices[33][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[33][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[33][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[33][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[34]= "35)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[34]= new Array();
 choices[34][0] = "Prevenir las conductas discriminatorias.";
 choices[34][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[34][2] = "Todas son correctas.";
 choices[34][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[34] = choices[34][2];
 units[34] = "14";
 comments[34] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[35]= "36)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[35]= new Array();
 choices[35][0] = "P&uacute;blica.";
 choices[35][1] = "Privada.";
 choices[35][2] = "A y B son correctas.";
 choices[35][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[36]= "37)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[36]= new Array();
 choices[36][0] = "los &oacute;rganos administrativos";
 choices[36][1] = "las entidades dependientes";
 choices[36][2] = "las unidades administrativas";
 choices[36][3] = "los servicios comunes";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[37]= "38)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[37]= new Array();
 choices[37][0] = "Tener una estructura institucional.";
 choices[37][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[37][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[37][3] = "Todas las respuestas son correctas.";
 answers[37] = choices[37][3];
 units[37] = "5";
 comments[37] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[38]= new Array();
 choices[38][0] = "Al Consejo Europeo.";
 choices[38][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[38][2] = "A la Comisi&oacute;n Europea.";
 choices[38][3] = "Al Parlamento Europeo.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[39]= new Array();
 choices[39][0] = "Veinticinco.";
 choices[39][1] = "Veintiuno.";
 choices[39][2] = "Dieciocho.";
 choices[39][3] = "Diecinueve.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[40]= "41)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[40]= new Array();
 choices[40][0] = "Discriminaci&oacute;n indirecta.";
 choices[40][1] = "Discriminaci&oacute;n directa.";
 choices[40][2] = "Discriminaci&oacute;n por maternidad.";
 choices[40][3] = "Discriminaci&oacute;n abusiva.";
 answers[40] = choices[40][1];
 units[40] = "14";
 comments[40] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[41]= "42)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[41]= new Array();
 choices[41][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[41][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[41][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[41][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[41] = choices[41][2];
 units[41] = "5";
 comments[41] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[42]= "43)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[42]= new Array();
 choices[42][0] = "Cinco a&ntilde;os.";
 choices[42][1] = "Seis a&ntilde;os.";
 choices[42][2] = "Cuatro a&ntilde;os.";
 choices[42][3] = "Tres a&ntilde;os.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[43]= new Array();
 choices[43][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[43][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[43][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[43][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[43] = choices[43][1];
 units[43] = "77";
 comments[43] = "Id Pregunta: 688. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[44]= "45)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[44]= new Array();
 choices[44][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[44][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[44][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[44][3] = "Todas las respuestas son correctas.";
 answers[44] = choices[44][3];
 units[44] = "50";
 comments[44] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[45]= "46)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[45]= new Array();
 choices[45][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[45][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[45][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[45][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[46]= "47)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[46]= new Array();
 choices[46][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[46][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[46][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[46][3] = "Todas las anteriores son correctas.";
 answers[46] = choices[46][3];
 units[46] = "47";
 comments[46] = "Id Pregunta: 674. Receta electr&oacute;nica";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[47]= new Array();
 choices[47][0] = "El Tratado de Lisboa";
 choices[47][1] = "El Tratado de Amsterdam";
 choices[47][2] = "El Tratado de Niza";
 choices[47][3] = "El Acta &Uacute;nica Europea";
 answers[47] = choices[47][1];
 units[47] = "15";
 comments[47] = "Id Pregunta: 115. ";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[48]= new Array();
 choices[48][0] = "SPARQL";
 choices[48][1] = "UnQL";
 choices[48][2] = "XQUERY";
 choices[48][3] = "RQL";
 answers[48] = choices[48][0];
 units[48] = "74";
 comments[48] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[49]= new Array();
 choices[49][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[49][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[49][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[49][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[49] = choices[49][0];
 units[49] = "15";
 comments[49] = "Id Pregunta: 117. ";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[50]= new Array();
 choices[50][0] = "Estrasburgo.";
 choices[50][1] = "Bruselas.";
 choices[50][2] = "Luxemburgo.";
 choices[50][3] = "Par&iacute;s.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[51]= new Array();
 choices[51][0] = "Dos Cap&iacute;tulos.";
 choices[51][1] = "Tres Cap&iacute;tulos.";
 choices[51][2] = "Un Cap&iacute;tulo.";
 choices[51][3] = "Cuatro Cap&iacute;tulos.";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[52]= new Array();
 choices[52][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[52][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[52][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[52][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[52] = choices[52][0];
 units[52] = "22";
 comments[52] = "Id Pregunta: 124. ";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[53]= "54)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[53]= new Array();
 choices[53][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[53][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[53][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[53][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[53] = choices[53][0];
 units[53] = "12";
 comments[53] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[54]= "55)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "la Administraci&oacute;n General del Estado";
 choices[54][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[54][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[54][3] = "el sector p&uacute;blico y privado institucional";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[55]= "56)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[55]= new Array();
 choices[55][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[55][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[55][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[55][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[55] = choices[55][0];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[56]= new Array();
 choices[56][0] = "Al menos cada 12 meses";
 choices[56][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[56][2] = "Al menos cada 18 meses";
 choices[56][3] = "Al menos cada 24 meses";
 answers[56] = choices[56][3];
 units[56] = "77";
 comments[56] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[57]= new Array();
 choices[57][0] = "Cassandra";
 choices[57][1] = "Riak";
 choices[57][2] = "Avro";
 choices[57][3] = "Zookeeper";
 answers[57] = choices[57][3];
 units[57] = "73";
 comments[57] = "Id Pregunta: 656. ";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[58]= new Array();
 choices[58][0] = "Las respuestas a) y b) son correctas.";
 choices[58][1] = "Las respuestas a) y b) no son correctas.";
 choices[58][2] = "Contenido coherente con los planes sectoriales.";
 choices[58][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[58] = choices[58][0];
 units[58] = "10";
 comments[58] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[59]= "60)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[59]= new Array();
 choices[59][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[59][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[59][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[59][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[59] = choices[59][2];
 units[59] = "7";
 comments[59] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[60]= new Array();
 choices[60][0] = "verbalmente";
 choices[60][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[60][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[60][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[61]= "62)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[61]= new Array();
 choices[61][0] = "el Secretario General";
 choices[61][1] = "el Subdirector General";
 choices[61][2] = "el Secretario de Estado";
 choices[61][3] = "ninguna es correcta";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[62]= new Array();
 choices[62][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[62][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[62][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[62][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[62] = choices[62][0];
 units[62] = "62";
 comments[62] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[63]= new Array();
 choices[63][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[63][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[63][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[63][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[64]= "65)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[64]= new Array();
 choices[64][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[64][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[64][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[64][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[64] = choices[64][3];
 units[64] = "101";
 comments[64] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[65]= "66)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[65]= new Array();
 choices[65][0] = "l Consejo General del Poder Judicial";
 choices[65][1] = "El pleno de Tribunal Constitucional";
 choices[65][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[65][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[65] = choices[65][3];
 units[65] = "1";
 comments[65] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[66]= "67)  Los Secretarios generales t&eacute;cnicos:";
 choices[66]= new Array();
 choices[66][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[66][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[66][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[67]= new Array();
 choices[67][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[67][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[67][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[67][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[67] = choices[67][1];
 units[67] = "101";
 comments[67] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[68]= new Array();
 choices[68][0] = "Publicidad.";
 choices[68][1] = "Constituci&oacute;n.";
 choices[68][2] = "Legalidad.";
 choices[68][3] = "Creaci&oacute;n.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[69]= "70)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[69]= new Array();
 choices[69][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[69][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[69][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[69][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[69] = choices[69][2];
 units[69] = "47";
 comments[69] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[70]= "71)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[70][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[70][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[70][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[70] = choices[70][2];
 units[70] = "57";
 comments[70] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[71]= "72)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[71]= new Array();
 choices[71][0] = "Los ocupados y los parados activos";
 choices[71][1] = "S&oacute;lo los ocupados";
 choices[71][2] = "Los ocupados y los inactivos";
 choices[71][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[71] = choices[71][0];
 units[71] = "12";
 comments[71] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[72]= new Array();
 choices[72][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[72][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[72][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[72][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[72] = choices[72][2];
 units[72] = "22";
 comments[72] = "Id Pregunta: 129. ";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[73]= "74)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[73]= new Array();
 choices[73][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[73][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[73][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[73][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[73] = choices[73][1];
 units[73] = "63";
 comments[73] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[74]= new Array();
 choices[74][0] = "As&iacute;ncrona.";
 choices[74][1] = "Log-shipping.";
 choices[74][2] = "Disk buffering.";
 choices[74][3] = "S&iacute;ncrona.";
 answers[74] = choices[74][3];
 units[74] = "53";
 comments[74] = "Id Pregunta: 849. Xunta de Galicia 2015";


