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

//  Id pregunta: 10224 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[0]= new Array();
 choices[0][0] = "Art&iacute;culo 16.2.";
 choices[0][1] = "Art&iacute;culo 17.1.";
 choices[0][2] = "Art&iacute;culo 18.1.";
 choices[0][3] = "Art&iacute;culo 18.2.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 10224. CONSTITUCION1978";


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


//  Id pregunta: 10331 Año de creación de pregunta: 2016
 questions[2]= "3)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[2]= new Array();
 choices[2][0] = "90";
 choices[2][1] = "50";
 choices[2][2] = "64";
 choices[2][3] = "60";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[3]= "4)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[3]= new Array();
 choices[3][0] = "La Comisi&oacute;n.";
 choices[3][1] = "El Consejo de Europa.";
 choices[3][2] = "El Consejo Europeo.";
 choices[3][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10245 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[4]= new Array();
 choices[4][0] = "De los derechos y deberes fundamentales.";
 choices[4][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[4][2] = "Derechos y libertades.";
 choices[4][3] = "De la Corona.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 10245. CONSTITUCION1978";


//  Id pregunta: 10321 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[5]= new Array();
 choices[5][0] = "Cincuenta y cuatro.";
 choices[5][1] = "Cincuenta.";
 choices[5][2] = "Cincuenta y cinco.";
 choices[5][3] = "Cincuenta y dos.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10321. UNION EUROPEA";


//  Id pregunta: 10562 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[6]= new Array();
 choices[6][0] = "Entre 1973 y 1978";
 choices[6][1] = "Entre 1992 y 1996";
 choices[6][2] = "Entre 1978 y 1985";
 choices[6][3] = "Entre 2008 y 2013";
 answers[6] = choices[6][2];
 units[6] = "12";
 comments[6] = "Id Pregunta: 10562. Modelo econ&oacute;mico";


//  Id pregunta: 10209 Año de creación de pregunta: 2016
 questions[7]= "8)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[7]= new Array();
 choices[7][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[7][1] = "El Congreso de los Diputados.";
 choices[7][2] = "Las Cortes Generales.";
 choices[7][3] = "El Consejo de Ministros";
 answers[7] = choices[7][3];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10209. CONSTITUCION1978";


//  Id pregunta: 10597 Año de creación de pregunta: 2016
 questions[8]= "9)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[8][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[8][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[8][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[8] = choices[8][0];
 units[8] = "45";
 comments[8] = "Id Pregunta: 10597. Junta de Extremadura A1 2015";


//  Id pregunta: 10329 Año de creación de pregunta: 2016
 questions[9]= "10)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[9]= new Array();
 choices[9][0] = "Acuerdos cualificados.";
 choices[9][1] = "Acuerdos ponderados.";
 choices[9][2] = "Valoraci&oacute;n de los votos.";
 choices[9][3] = "Ponderaci&oacute;n de los votos.";
 answers[9] = choices[9][3];
 units[9] = "5";
 comments[9] = "Id Pregunta: 10329. UNION EUROPEA";


//  Id pregunta: 10377 Año de creación de pregunta: 2016
 questions[10]= "11)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[10]= new Array();
 choices[10][0] = "Tener una estructura institucional.";
 choices[10][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[10][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[10][3] = "Todas las respuestas son correctas.";
 answers[10] = choices[10][3];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[11]= new Array();
 choices[11][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[11][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[11][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[11][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[11] = choices[11][3];
 units[11] = "57";
 comments[11] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10168 Año de creación de pregunta: 2016
 questions[12]= "13)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[12]= new Array();
 choices[12][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[12][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[12][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[12][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[12] = choices[12][2];
 units[12] = "19";
 comments[12] = "Id Pregunta: 10168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 10514 Año de creación de pregunta: 2016
 questions[13]= "14)  El sector p&uacute;blico institucional se integra por:";
 choices[13]= new Array();
 choices[13][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[13][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[13][2] = "las Universidades p&uacute;blicas";
 choices[13][3] = "todas son correctas";
 answers[13] = choices[13][3];
 units[13] = "7";
 comments[13] = "Id Pregunta: 10514. LEY 39/2015";


//  Id pregunta: 10679 Año de creación de pregunta: 2016
 questions[14]= "15)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[14][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[14][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[14][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[14] = choices[14][1];
 units[14] = "14";
 comments[14] = "Id Pregunta: 10679. Pensiones";


//  Id pregunta: 10045 Año de creación de pregunta: 2016
 questions[15]= "16)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[15]= new Array();
 choices[15][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[15][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[15][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[15][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[15] = choices[15][1];
 units[15] = "74";
 comments[15] = "Id Pregunta: 10045. AGE A1 2015";


//  Id pregunta: 10681 Año de creación de pregunta: 2016
 questions[16]= "17)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[16]= new Array();
 choices[16][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[16][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[16][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[16][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 10681. Pensiones";


//  Id pregunta: 10316 Año de creación de pregunta: 2016
 questions[17]= "18)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[17]= new Array();
 choices[17][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[17][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[17][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[17][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[17] = choices[17][1];
 units[17] = "5";
 comments[17] = "Id Pregunta: 10316. UNION EUROPEA";


//  Id pregunta: 10026 Año de creación de pregunta: 2016
 questions[18]= "19)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[18]= new Array();
 choices[18][0] = "Sello electr&oacute;nico";
 choices[18][1] = "Sede electr&oacute;nica";
 choices[18][2] = "Servidor seguro (SSL/TLS)";
 choices[18][3] = "Empleado p&uacute;blico";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 10026. AGE A1 2015";


//  Id pregunta: 10292 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[19]= new Array();
 choices[19][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[19][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[19][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[19][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10292. UNION EUROPEA";


//  Id pregunta: 10476 Año de creación de pregunta: 2016
 questions[20]= "21)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[20]= new Array();
 choices[20][0] = "Al Gobierno.";
 choices[20][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[20][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[20][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[20] = choices[20][2];
 units[20] = "10";
 comments[20] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[21]= "22)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[21]= new Array();
 choices[21][0] = "Pas&oacute; de 518 a 626.";
 choices[21][1] = "Pas&oacute; de 434 a 518.";
 choices[21][2] = "Pas&oacute; de 345 a 512.";
 choices[21][3] = "Pas&oacute; de 435 a 610.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10552 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[22]= new Array();
 choices[22][0] = "Establecer redes de telecomunicaciones continentales";
 choices[22][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[22][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[22][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[22] = choices[22][0];
 units[22] = "17";
 comments[22] = "Id Pregunta: 10552. Mercado &Uacute;nico Digital";


//  Id pregunta: 10084 Año de creación de pregunta: 2016
 questions[23]= "24)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[23]= new Array();
 choices[23][0] = "Interchange of Data between Administrations (IDA)";
 choices[23][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[23][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[23][3] = "Interoperability Electronic European Solution (IEES)";
 answers[23] = choices[23][1];
 units[23] = "43";
 comments[23] = "Id Pregunta: 10084. AGE A1 2015";


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


//  Id pregunta: 10096 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "VMware ESX";
 choices[25][1] = "XenServer";
 choices[25][2] = "Alfresco";
 choices[25][3] = "Microsoft Hyper-V";
 answers[25] = choices[25][2];
 units[25] = "54";
 comments[25] = "Id Pregunta: 10096. AGE A1 2015";


//  Id pregunta: 10309 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[26]= new Array();
 choices[26][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[26][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[26][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[26][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10309. UNION EUROPEA";


//  Id pregunta: 10469 Año de creación de pregunta: 2016
 questions[27]= "28)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[27][1] = "Las inversiones reales y financieras.";
 choices[27][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[27][3] = "Las transferencias de capital y las inversiones reales.";
 answers[27] = choices[27][3];
 units[27] = "10";
 comments[27] = "Id Pregunta: 10469. PRESUPUESTOS GENERALES";


//  Id pregunta: 10003 Año de creación de pregunta: 2016
 questions[28]= "29)  En el lenguaje de modelado UML :";
 choices[28]= new Array();
 choices[28][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[28][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[28][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[28][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[28] = choices[28][2];
 units[28] = "89";
 comments[28] = "Id Pregunta: 10003. AGE A1 2015";


//  Id pregunta: 10176 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[29]= new Array();
 choices[29][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[29][1] = "Solamente el Congreso.";
 choices[29][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[29][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10176. CONSTITUCION1978";


//  Id pregunta: 10478 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[30]= new Array();
 choices[30][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[30][1] = "Intervenci&oacute;n formal y material.";
 choices[30][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[30][3] = "Intervenci&oacute;n formal y general.";
 answers[30] = choices[30][1];
 units[30] = "10";
 comments[30] = "Id Pregunta: 10478. PRESUPUESTOS GENERALES";


//  Id pregunta: 10427 Año de creación de pregunta: 2016
 questions[31]= "32)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[31]= new Array();
 choices[31][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[31][1] = "En el extranjero.";
 choices[31][2] = "Ninguna es correcta.";
 choices[31][3] = "Ambas son correctas.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10427. POLITICAS DE IGUALDAD";


//  Id pregunta: 10070 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[32]= new Array();
 choices[32][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[32][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[32][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[32][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[32] = choices[32][0];
 units[32] = "75";
 comments[32] = "Id Pregunta: 10070. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10659 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[33]= new Array();
 choices[33][0] = "Orientaci&oacute;n a objetos";
 choices[33][1] = "MapReduce";
 choices[33][2] = "Pipeline filtering";
 choices[33][3] = "Programaci&oacute;n funcional";
 answers[33] = choices[33][1];
 units[33] = "73";
 comments[33] = "Id Pregunta: 10659. ";


//  Id pregunta: 10487 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[34]= new Array();
 choices[34][0] = "Las Cortes Generales.";
 choices[34][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[34][2] = "El Gobierno.";
 choices[34][3] = "El Congreso de los Diputados.";
 answers[34] = choices[34][0];
 units[34] = "10";
 comments[34] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10090 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[35]= new Array();
 choices[35][0] = "Categor&iacute;a b&aacute;sica";
 choices[35][1] = "Categor&iacute;a media";
 choices[35][2] = "Categor&iacute;a alta";
 choices[35][3] = "Categor&iacute;a media y alta";
 answers[35] = choices[35][2];
 units[35] = "46";
 comments[35] = "Id Pregunta: 10090. AGE A1 2015";


//  Id pregunta: 10051 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[36]= new Array();
 choices[36][0] = "Cifrado de las comunicaciones";
 choices[36][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[36][2] = "Registro de los accesos";
 choices[36][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[36] = choices[36][1];
 units[36] = "35";
 comments[36] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10360 Año de creación de pregunta: 2016
 questions[37]= "38)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[37]= new Array();
 choices[37][0] = "786 Diputados como m&aacute;ximo.";
 choices[37][1] = "600 Diputados como m&aacute;ximo.";
 choices[37][2] = "650 Diputados como m&aacute;ximo.";
 choices[37][3] = "732 Diputados como m&aacute;ximo.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 10360. UNION EUROPEA";


//  Id pregunta: 10064 Año de creación de pregunta: 2016
 questions[38]= "39)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[38]= new Array();
 choices[38][0] = "Windows Phone";
 choices[38][1] = "Blackberry";
 choices[38][2] = "iOS";
 choices[38][3] = "Android";
 answers[38] = choices[38][3];
 units[38] = "59";
 comments[38] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10143 Año de creación de pregunta: 2016
 questions[39]= "40)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[39]= new Array();
 choices[39][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[39][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[39][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[39][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[39] = choices[39][2];
 units[39] = "8";
 comments[39] = "Id Pregunta: 10143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10179 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[40]= new Array();
 choices[40][0] = "Una ley orginaria.";
 choices[40][1] = "Una ley org&aacute;nica.";
 choices[40][2] = "Una ley de bases.";
 choices[40][3] = "Una ley de transferencia.";
 answers[40] = choices[40][1];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10179. CONSTITUCION1978";


//  Id pregunta: 10215 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[41]= new Array();
 choices[41][0] = "Publicidad.";
 choices[41][1] = "Constituci&oacute;n.";
 choices[41][2] = "Legalidad.";
 choices[41][3] = "Creaci&oacute;n.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10215. CONSTITUCION1978";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[42]= new Array();
 choices[42][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[42][1] = "Pasivos financieros y transferencias de capital.";
 choices[42][2] = "Activos financieros y pasivos financieros.";
 choices[42][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10114 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[43]= new Array();
 choices[43][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[43][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[43][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[43][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[43] = choices[43][0];
 units[43] = "15";
 comments[43] = "Id Pregunta: 10114. ";


//  Id pregunta: 10226 Año de creación de pregunta: 2016
 questions[44]= "45)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[44]= new Array();
 choices[44][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[44][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[44][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[44][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 10226. CONSTITUCION1978";


//  Id pregunta: 10375 Año de creación de pregunta: 2016
 questions[45]= "46)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[45]= new Array();
 choices[45][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[45][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[45][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[45][3] = "Todas las respuestas son correctas.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10375. UNION EUROPEA";


//  Id pregunta: 10477 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[46][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[46][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[46][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 10477. PRESUPUESTOS GENERALES";


//  Id pregunta: 10645 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[47]= new Array();
 choices[47][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[47][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[47][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[47][3] = "El Instituto de la Mujer de Extremadura.";
 answers[47] = choices[47][3];
 units[47] = "14";
 comments[47] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10628 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[48]= new Array();
 choices[48][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[48][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[48][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[48][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "45";
 comments[48] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[49]= "50)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Discriminaci&oacute;n indirecta.";
 choices[49][1] = "Discriminaci&oacute;n directa.";
 choices[49][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[49][3] = "Discriminaci&oacute;n abusiva.";
 answers[49] = choices[49][0];
 units[49] = "14";
 comments[49] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10365 Año de creación de pregunta: 2016
 questions[50]= "51)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[50]= new Array();
 choices[50][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[50][1] = "Unanimidad.";
 choices[50][2] = "Mayor&iacute;a cualificada.";
 choices[50][3] = "Mayor&iacute;a simple.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10365. UNION EUROPEA";


//  Id pregunta: 10495 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[51]= new Array();
 choices[51][0] = "La Ley General Tributaria.";
 choices[51][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[51][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[51][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[51] = choices[51][2];
 units[51] = "10";
 comments[51] = "Id Pregunta: 10495. PRESUPUESTOS GENERALES";


//  Id pregunta: 10496 Año de creación de pregunta: 2016
 questions[52]= "53)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[52]= new Array();
 choices[52][0] = "Las respuestas a) y b) son correctas.";
 choices[52][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[52][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[52][3] = "Las respuestas a) y b) no son correctas.";
 answers[52] = choices[52][0];
 units[52] = "10";
 comments[52] = "Id Pregunta: 10496. PRESUPUESTOS GENERALES";


//  Id pregunta: 10317 Año de creación de pregunta: 2016
 questions[53]= "54)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[53]= new Array();
 choices[53][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[53][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[53][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[53][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[53] = choices[53][3];
 units[53] = "5";
 comments[53] = "Id Pregunta: 10317. UNION EUROPEA";


//  Id pregunta: 10118 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[54]= new Array();
 choices[54][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[54][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[54][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[54][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[54] = choices[54][2];
 units[54] = "15";
 comments[54] = "Id Pregunta: 10118. ";


//  Id pregunta: 10007 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[55]= new Array();
 choices[55][0] = "Nivel 7 - MPLS.";
 choices[55][1] = "Nivel 3 - RARP.";
 choices[55][2] = "Nivel 2 - HDLC.";
 choices[55][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[55] = choices[55][2];
 units[55] = "105";
 comments[55] = "Id Pregunta: 10007. AGE A1 2015";


//  Id pregunta: 10662 Año de creación de pregunta: 2016
 questions[56]= "57)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[56]= new Array();
 choices[56][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[56][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[56][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[56][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que haya sido elaborado por &eacute;ste.";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 10662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 10634 Año de creación de pregunta: 2016
 questions[57]= "58)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[57]= new Array();
 choices[57][0] = "El nombre y el tipo de correspondencia.";
 choices[57][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[57][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[57][3] = "El nombre y el grado.";
 answers[57] = choices[57][1];
 units[57] = "85";
 comments[57] = "Id Pregunta: 10634. Junta de Extremadura A1 2015";


//  Id pregunta: 10131 Año de creación de pregunta: 2016
 questions[58]= "59)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[58]= new Array();
 choices[58][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[58][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[58][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[58][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[58] = choices[58][0];
 units[58] = "12";
 comments[58] = "Id Pregunta: 10131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10542 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[59]= new Array();
 choices[59][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[59][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[59][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[59][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[59] = choices[59][0];
 units[59] = "26";
 comments[59] = "Id Pregunta: 10542. Gobernanza TIC";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[60]= new Array();
 choices[60][0] = "El Parlamento y el Consejo.";
 choices[60][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[60][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[60][3] = "La Comisi&oacute;n y el Consejo.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10499 Año de creación de pregunta: 2016
 questions[61]= "62)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[61]= new Array();
 choices[61][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[61][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[61][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[61][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[61] = choices[61][0];
 units[61] = "10";
 comments[61] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10105 Año de creación de pregunta: 2016
 questions[62]= "63)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[62]= new Array();
 choices[62][0] = "Gran volumen de informaci&oacute;n";
 choices[62][1] = "Gran variedad de datos";
 choices[62][2] = "Se analizan datos a gran velocidad";
 choices[62][3] = "Todas las anteriores son verdaderas";
 answers[62] = choices[62][3];
 units[62] = "73";
 comments[62] = "Id Pregunta: 10105. ";


//  Id pregunta: 10006 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[63]= new Array();
 choices[63][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[63][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[63][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[63][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[63] = choices[63][0];
 units[63] = "91";
 comments[63] = "Id Pregunta: 10006. AGE A1 2015";


//  Id pregunta: 10307 Año de creación de pregunta: 2016
 questions[64]= "65)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[64]= new Array();
 choices[64][0] = "Seis a&ntilde;os.";
 choices[64][1] = "Cinco a&ntilde;os.";
 choices[64][2] = "Cuatro a&ntilde;os.";
 choices[64][3] = "Ocho a&ntilde;os.";
 answers[64] = choices[64][1];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10307. UNION EUROPEA";


//  Id pregunta: 10272 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[65]= new Array();
 choices[65][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[65][1] = "Anteriormente se denominaba Sonar.";
 choices[65][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[65][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[65] = choices[65][2];
 units[65] = "92";
 comments[65] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10183 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[66]= new Array();
 choices[66][0] = "al menos por 50 Diputados.";
 choices[66][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[66][2] = "por la Mesa del Congreso de los Diputados.";
 choices[66][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 10183. CONSTITUCION1978";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[67]= "68)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[67]= new Array();
 choices[67][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[67][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[67][2] = "Son refrendados por el Rey.";
 choices[67][3] = "Son convocados por el Presidente del Gobierno.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10437 Año de creación de pregunta: 2016
 questions[68]= "69)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[68]= new Array();
 choices[68][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[68][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[68][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[68][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[68] = choices[68][0];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10437. SERVICIOS COMUNES";


//  Id pregunta: 10260 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[69]= new Array();
 choices[69][0] = "117.5";
 choices[69][1] = "117.1";
 choices[69][2] = "116";
 choices[69][3] = "15";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10260. CONSTITUCION1978";


//  Id pregunta: 10022 Año de creación de pregunta: 2016
 questions[70]= "71)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[70]= new Array();
 choices[70][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[70][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[70][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[70][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[70] = choices[70][1];
 units[70] = "26";
 comments[70] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[71]= "72)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[71]= new Array();
 choices[71][0] = "Diciembre de 1987.";
 choices[71][1] = "Septiembre de 1989.";
 choices[71][2] = "Octubre de 1990.";
 choices[71][3] = "Noviembre de 1980.";
 answers[71] = choices[71][1];
 units[71] = "5";
 comments[71] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10466 Año de creación de pregunta: 2016
 questions[72]= "73)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[72]= new Array();
 choices[72][0] = "Con el a&ntilde;o anterior.";
 choices[72][1] = "Con los tres a&ntilde;os anteriores.";
 choices[72][2] = "Con el a&ntilde;o natural.";
 choices[72][3] = "Con los dos a&ntilde;os anteriores.";
 answers[72] = choices[72][2];
 units[72] = "10";
 comments[72] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10266 Año de creación de pregunta: 2016
 questions[73]= "74)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[73]= new Array();
 choices[73][0] = "El Segundo.";
 choices[73][1] = "El Primero.";
 choices[73][2] = "El Preliminar.";
 choices[73][3] = "El Tercero.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10674 Año de creación de pregunta: 2016
 questions[74]= "75)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[74]= new Array();
 choices[74][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[74][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[74][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[74][3] = "Todas las anteriores son correctas.";
 answers[74] = choices[74][3];
 units[74] = "47";
 comments[74] = "Id Pregunta: 10674. Receta electr&oacute;nica";


