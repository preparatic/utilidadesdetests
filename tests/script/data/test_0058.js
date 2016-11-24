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

//  Id pregunta: 10451 Año de creación de pregunta: 2016
 questions[0]= "1)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[0]= new Array();
 choices[0][0] = "Los cr&eacute;ditos";
 choices[0][1] = "Las partidas presupuestarias";
 choices[0][2] = "Los derechos";
 choices[0][3] = "Las obligaciones";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 10451. PRESUPUESTOS GENERALES";


//  Id pregunta: 10639 Año de creación de pregunta: 2016
 questions[1]= "2)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[1]= new Array();
 choices[1][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[1][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[1][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[1][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[1] = choices[1][2];
 units[1] = "57";
 comments[1] = "Id Pregunta: 10639. Junta de Extremadura A1 2015";


//  Id pregunta: 10303 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[2]= new Array();
 choices[2][0] = "Veinticinco.";
 choices[2][1] = "Veintisiete.";
 choices[2][2] = "Veintinueve.";
 choices[2][3] = "Cuarenta y uno.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10303. UNION EUROPEA";


//  Id pregunta: 10003 Año de creación de pregunta: 2016
 questions[3]= "4)  En el lenguaje de modelado UML :";
 choices[3]= new Array();
 choices[3][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[3][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[3][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[3][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[3] = choices[3][2];
 units[3] = "89";
 comments[3] = "Id Pregunta: 10003. AGE A1 2015";


//  Id pregunta: 10674 Año de creación de pregunta: 2016
 questions[4]= "5)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[4]= new Array();
 choices[4][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[4][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[4][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[4][3] = "Todas las anteriores son correctas.";
 answers[4] = choices[4][3];
 units[4] = "47";
 comments[4] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10527 Año de creación de pregunta: 2016
 questions[5]= "6)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[5]= new Array();
 choices[5][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[5][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[5][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[5][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[5] = choices[5][2];
 units[5] = "7";
 comments[5] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[6]= new Array();
 choices[6][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[6][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[6][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[6][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[6] = choices[6][0];
 units[6] = "19";
 comments[6] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10642 Año de creación de pregunta: 2016
 questions[7]= "8)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[7]= new Array();
 choices[7][0] = "Dise&ntilde;o del servicio.";
 choices[7][1] = "Transici&oacute;n del servicio.";
 choices[7][2] = "Estrategia del servicio.";
 choices[7][3] = "Operaci&oacute;n del servicio.";
 answers[7] = choices[7][2];
 units[7] = "101";
 comments[7] = "Id Pregunta: 10642. Junta de Extremadura A1 2015";


//  Id pregunta: 10398 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[8]= new Array();
 choices[8][0] = "Art. 13, L.O.3/2007.";
 choices[8][1] = "Art. 14, L.O.3/2007.";
 choices[8][2] = "Art. 11, L.O.3/2007.";
 choices[8][3] = "Ninguna es correcta.";
 answers[8] = choices[8][2];
 units[8] = "14";
 comments[8] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10581 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[9]= new Array();
 choices[9][0] = "Car&aacute;cter sustitutivo";
 choices[9][1] = "Car&aacute;cter obligatorio";
 choices[9][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = choices[9][3];
 units[9] = "19";
 comments[9] = "Id Pregunta: 10581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 10395 Año de creación de pregunta: 2016
 questions[10]= "11)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[10]= new Array();
 choices[10][0] = "Discriminaci&oacute;n indirecta.";
 choices[10][1] = "Discriminaci&oacute;n directa.";
 choices[10][2] = "Discriminaci&oacute;n por maternidad.";
 choices[10][3] = "Discriminaci&oacute;n abusiva.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 10395. POLITICAS DE IGUALDAD";


//  Id pregunta: 10079 Año de creación de pregunta: 2016
 questions[11]= "12)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[11]= new Array();
 choices[11][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[11][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[11][2] = "Las Inspecciones Generales de los Servicios";
 choices[11][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[11] = choices[11][1];
 units[11] = "75";
 comments[11] = "Id Pregunta: 10079. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10614 Año de creación de pregunta: 2016
 questions[12]= "13)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[12]= new Array();
 choices[12][0] = "192.228.0.0";
 choices[12][1] = "192.228.8.0";
 choices[12][2] = "192.228.16.0";
 choices[12][3] = "192.228.17.0";
 answers[12] = choices[12][2];
 units[12] = "109";
 comments[12] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10033 Año de creación de pregunta: 2016
 questions[13]= "14)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[13]= new Array();
 choices[13][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[13][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[13][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[13][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[13] = choices[13][1];
 units[13] = "63";
 comments[13] = "Id Pregunta: 10033. AGE A1 2015";


//  Id pregunta: 10429 Año de creación de pregunta: 2016
 questions[14]= "15)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[14]= new Array();
 choices[14][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[14][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "Ambas son incorrectas.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10563 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[15]= new Array();
 choices[15][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[15][1] = "Excesiva estabilidad de empleo";
 choices[15][2] = "An&eacute;mico crecimiento de la productividad";
 choices[15][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[15] = choices[15][1];
 units[15] = "12";
 comments[15] = "Id Pregunta: 10563. Modelo econ&oacute;mico";


//  Id pregunta: 10314 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[16]= new Array();
 choices[16][0] = "Al Consejo Europeo.";
 choices[16][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[16][2] = "A la Comisi&oacute;n Europea.";
 choices[16][3] = "Al Parlamento Europeo.";
 answers[16] = choices[16][2];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10113 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "La Seguridad Social";
 choices[17][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[17][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[17][3] = "El Banco de Espa&ntilde;a";
 answers[17] = choices[17][3];
 units[17] = "15";
 comments[17] = "Id Pregunta: 10113. ";


//  Id pregunta: 10607 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[18][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[18][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[18][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[18] = choices[18][0];
 units[18] = "45";
 comments[18] = "Id Pregunta: 10607. Junta de Extremadura A1 2015";


//  Id pregunta: 10075 Año de creación de pregunta: 2016
 questions[19]= "20)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[19]= new Array();
 choices[19][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[19][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[19][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[19][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[19] = choices[19][0];
 units[19] = "35";
 comments[19] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10229 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[20]= new Array();
 choices[20][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[20][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[20][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[20][3] = "A las Diputaciones y a las Comarcas.";
 answers[20] = choices[20][3];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10229. CONSTITUCION1978";


//  Id pregunta: 10043 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[21]= new Array();
 choices[21][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[21][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[21][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[21][3] = "El software funcionando es la medida principal del progreso.";
 answers[21] = choices[21][2];
 units[21] = "34";
 comments[21] = "Id Pregunta: 10043. AGE A1 2015";


//  Id pregunta: 10554 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[22]= new Array();
 choices[22][0] = "El BCE";
 choices[22][1] = "El Parlamento";
 choices[22][2] = "El Consejo";
 choices[22][3] = "La Comisi&oacute;n";
 answers[22] = choices[22][3];
 units[22] = "17";
 comments[22] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10298 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[23]= new Array();
 choices[23][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[23][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[23][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[23][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10467 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[24]= new Array();
 choices[24][0] = "Tres meses.";
 choices[24][1] = "Nueve meses.";
 choices[24][2] = "Cuatro meses.";
 choices[24][3] = "Seis meses.";
 answers[24] = choices[24][0];
 units[24] = "10";
 comments[24] = "Id Pregunta: 10467. PRESUPUESTOS GENERALES";


//  Id pregunta: 10258 Año de creación de pregunta: 2016
 questions[25]= "26)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[25]= new Array();
 choices[25][0] = "Municipios, provincias y CCAA.";
 choices[25][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[25][2] = "En CCAA, 50 provincias y municipios.";
 choices[25][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 10258. CONSTITUCION1978";


//  Id pregunta: 10129 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[26]= new Array();
 choices[26][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[26][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[26][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[26][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[26] = choices[26][2];
 units[26] = "22";
 comments[26] = "Id Pregunta: 10129. ";


//  Id pregunta: 10264 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[27]= new Array();
 choices[27][0] = "Veinte.";
 choices[27][1] = "Quince.";
 choices[27][2] = "Diez.";
 choices[27][3] = "Doce.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10264. CONSTITUCION1978";


//  Id pregunta: 10555 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[28]= new Array();
 choices[28][0] = "Consumidores";
 choices[28][1] = "PYMES y Start-ups";
 choices[28][2] = "La Industria";
 choices[28][3] = "Todos los anteriores";
 answers[28] = choices[28][3];
 units[28] = "17";
 comments[28] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10528 Año de creación de pregunta: 2016
 questions[29]= "30)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[29]= new Array();
 choices[29][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[29][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[29][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[29][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[29] = choices[29][3];
 units[29] = "7";
 comments[29] = "Id Pregunta: 10528. LEY 39/2015";


//  Id pregunta: 10243 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[30]= new Array();
 choices[30][0] = "Art&iacute;culo 70.";
 choices[30][1] = "Art&iacute;culo 54.";
 choices[30][2] = "Articulo 62.";
 choices[30][3] = "Articulo 55. 5.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 10243. CONSTITUCION1978";


//  Id pregunta: 10186 Año de creación de pregunta: 2016
 questions[31]= "32)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[31]= new Array();
 choices[31][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[31][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[31][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[31][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10326 Año de creación de pregunta: 2016
 questions[32]= "33)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[32]= new Array();
 choices[32][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[32][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[32][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[32][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[32] = choices[32][3];
 units[32] = "5";
 comments[32] = "Id Pregunta: 10326. UNION EUROPEA";


//  Id pregunta: 10570 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[33]= new Array();
 choices[33][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[33][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[33][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[33][3] = "La tasa de desempleo ronda el 20%";
 answers[33] = choices[33][2];
 units[33] = "12";
 comments[33] = "Id Pregunta: 10570. Modelo econ&oacute;mico";


//  Id pregunta: 10669 Año de creación de pregunta: 2016
 questions[34]= "35)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[34]= new Array();
 choices[34][0] = "Resoluci&oacute;n.";
 choices[34][1] = "Desistimiento o renuncia.";
 choices[34][2] = "Caducidad.";
 choices[34][3] = "Todas las anteriores.";
 answers[34] = choices[34][3];
 units[34] = "7";
 comments[34] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10329 Año de creación de pregunta: 2016
 questions[35]= "36)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[35]= new Array();
 choices[35][0] = "Acuerdos cualificados.";
 choices[35][1] = "Acuerdos ponderados.";
 choices[35][2] = "Valoraci&oacute;n de los votos.";
 choices[35][3] = "Ponderaci&oacute;n de los votos.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10329. UNION EUROPEA";


//  Id pregunta: 10235 Año de creación de pregunta: 2016
 questions[36]= "37)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[36]= new Array();
 choices[36][0] = "El Jefe del Estado.";
 choices[36][1] = "El Tribunal Constitucional.";
 choices[36][2] = "El Congreso de los Diputados.";
 choices[36][3] = "Las Cortes Generales.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10235. CONSTITUCION1978";


//  Id pregunta: 10466 Año de creación de pregunta: 2016
 questions[37]= "38)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[37]= new Array();
 choices[37][0] = "Con el a&ntilde;o anterior.";
 choices[37][1] = "Con los tres a&ntilde;os anteriores.";
 choices[37][2] = "Con el a&ntilde;o natural.";
 choices[37][3] = "Con los dos a&ntilde;os anteriores.";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10205 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[38][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[38][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[38][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 10205. CONSTITUCION1978";


//  Id pregunta: 10030 Año de creación de pregunta: 2016
 questions[39]= "40)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[39]= new Array();
 choices[39][0] = "SMB3";
 choices[39][1] = "AFP";
 choices[39][2] = "NFS";
 choices[39][3] = "FTP";
 answers[39] = choices[39][0];
 units[39] = "59";
 comments[39] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10325 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[40]= new Array();
 choices[40][0] = "Veinticinco.";
 choices[40][1] = "Veintiuno.";
 choices[40][2] = "Dieciocho.";
 choices[40][3] = "Diecinueve.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10077 Año de creación de pregunta: 2016
 questions[41]= "42)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[41]= new Array();
 choices[41][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[41][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[41][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[41][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[41] = choices[41][2];
 units[41] = "47";
 comments[41] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10428 Año de creación de pregunta: 2016
 questions[42]= "43)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[42]= new Array();
 choices[42][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[42][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[42][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[42][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[42] = choices[42][2];
 units[42] = "14";
 comments[42] = "Id Pregunta: 10428. POLITICAS DE IGUALDAD";


//  Id pregunta: 10285 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[43]= new Array();
 choices[43][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[43][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[43][2] = "la falta de interoperabilidad.";
 choices[43][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10285. UNION EUROPEA";


//  Id pregunta: 10632 Año de creación de pregunta: 2016
 questions[44]= "45)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[44]= new Array();
 choices[44][0] = "Monol&iacute;tico.";
 choices[44][1] = "Estratificado.";
 choices[44][2] = "Cliente/servidor.";
 choices[44][3] = "Orientado a objetos.";
 answers[44] = choices[44][3];
 units[44] = "56";
 comments[44] = "Id Pregunta: 10632. Junta de Extremadura A1 2015";


//  Id pregunta: 10001 Año de creación de pregunta: 2016
 questions[45]= "46)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[45]= new Array();
 choices[45][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[45][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[45][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[45][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[45] = choices[45][2];
 units[45] = "26";
 comments[45] = "Id Pregunta: 10001. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10278 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[46][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[46][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[46][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[46] = choices[46][1];
 units[46] = "22";
 comments[46] = "Id Pregunta: 10278. LEY DE TRANSPARENCIA";


//  Id pregunta: 10582 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[47]= new Array();
 choices[47][0] = "El 5 de Octubre de 2015";
 choices[47][1] = "El 15 de Octubre de 2015";
 choices[47][2] = "El 15 de Septiembre de 2015";
 choices[47][3] = "El 2 de Octubre de 2015";
 answers[47] = choices[47][2];
 units[47] = "19";
 comments[47] = "Id Pregunta: 10582. Estrategia TIC";


//  Id pregunta: 10310 Año de creación de pregunta: 2016
 questions[48]= "49)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[48]= new Array();
 choices[48][0] = "La Comisi&oacute;n Europea.";
 choices[48][1] = "El Consejo Europeo.";
 choices[48][2] = "El Consejo de Europa.";
 choices[48][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[48] = choices[48][0];
 units[48] = "5";
 comments[48] = "Id Pregunta: 10310. UNION EUROPEA";


//  Id pregunta: 10602 Año de creación de pregunta: 2016
 questions[49]= "50)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[49]= new Array();
 choices[49][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[49][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[49][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[49][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[49] = choices[49][2];
 units[49] = "76";
 comments[49] = "Id Pregunta: 10602. Junta de Extremadura A1 2015";


//  Id pregunta: 10564 Año de creación de pregunta: 2016
 questions[50]= "51)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[50]= new Array();
 choices[50][0] = "Los ocupados y los parados activos";
 choices[50][1] = "S&oacute;lo los ocupados";
 choices[50][2] = "Los ocupados y los inactivos";
 choices[50][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[50] = choices[50][0];
 units[50] = "12";
 comments[50] = "Id Pregunta: 10564. Modelo econ&oacute;mico";


//  Id pregunta: 10633 Año de creación de pregunta: 2016
 questions[51]= "52)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[51]= new Array();
 choices[51][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[51][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[51][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[51][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[51] = choices[51][3];
 units[51] = "56";
 comments[51] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10393 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[52]= new Array();
 choices[52][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[52][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[52][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[52][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[52] = choices[52][0];
 units[52] = "14";
 comments[52] = "Id Pregunta: 10393. POLITICAS DE IGUALDAD";


//  Id pregunta: 10440 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[53][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[53][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[53][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10401 Año de creación de pregunta: 2016
 questions[54]= "55)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[54]= new Array();
 choices[54][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[54][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[54][2] = "Ambas son correctas.";
 choices[54][3] = "A y B son incorrectas.";
 answers[54] = choices[54][2];
 units[54] = "14";
 comments[54] = "Id Pregunta: 10401. POLITICAS DE IGUALDAD";


//  Id pregunta: 10161 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[55]= new Array();
 choices[55][0] = "Principio de solo una vez";
 choices[55][1] = "Apertura y transparencia";
 choices[55][2] = "Confianza y seguridad";
 choices[55][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[55] = choices[55][3];
 units[55] = "19";
 comments[55] = "Id Pregunta: 10161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 10359 Año de creación de pregunta: 2016
 questions[56]= "57)  Los Reglamentos no se caracterizan por:";
 choices[56]= new Array();
 choices[56][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[56][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[56][2] = "Ser obligatorios.";
 choices[56][3] = "No poseer alcance general.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10359. UNION EUROPEA";


//  Id pregunta: 10055 Año de creación de pregunta: 2016
 questions[57]= "58)  WS-Security contiene especificaciones sobre:";
 choices[57]= new Array();
 choices[57][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[57][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[57][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[57][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[57] = choices[57][1];
 units[57] = "119";
 comments[57] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10295 Año de creación de pregunta: 2016
 questions[58]= "59)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[58]= new Array();
 choices[58][0] = "Estrasburgo.";
 choices[58][1] = "Bruselas.";
 choices[58][2] = "Luxemburgo.";
 choices[58][3] = "Holanda.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10516 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Universidades p&uacute;blicas:";
 choices[59]= new Array();
 choices[59][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[59][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[59][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[59][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 10516. LEY 39/2015";


//  Id pregunta: 10267 Año de creación de pregunta: 2016
 questions[60]= "61)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[60]= new Array();
 choices[60][0] = "Los Derechos y Deberes fundamentales.";
 choices[60][1] = "La Corona.";
 choices[60][2] = "El Poder Judicial.";
 choices[60][3] = "Las Cortes Generales.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10267. CONSTITUCION1978";


//  Id pregunta: 10324 Año de creación de pregunta: 2016
 questions[61]= "62)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[61]= new Array();
 choices[61][0] = "Tres a&ntilde;os.";
 choices[61][1] = "Cuatro a&ntilde;os.";
 choices[61][2] = "Cinco a&ntilde;os.";
 choices[61][3] = "Seis a&ntilde;os.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10324. UNION EUROPEA";


//  Id pregunta: 10616 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[62]= new Array();
 choices[62][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[62][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[62][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[62][3] = "Todas las respuestas son correctas.";
 answers[62] = choices[62][2];
 units[62] = "42";
 comments[62] = "Id Pregunta: 10616. Junta de Extremadura A1 2015";


//  Id pregunta: 10543 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[63]= new Array();
 choices[63][0] = "ISO/IEC 31000";
 choices[63][1] = "ISO/IEC 14000";
 choices[63][2] = "ISO/IEC 38500";
 choices[63][3] = "ISO/IEC 18000";
 answers[63] = choices[63][2];
 units[63] = "26";
 comments[63] = "Id Pregunta: 10543. Gobernanza TIC";


//  Id pregunta: 10502 Año de creación de pregunta: 2016
 questions[64]= "65)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "Principio de transparencia.";
 choices[64][1] = "Principio de cooperaci&oacute;n.";
 choices[64][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[64][3] = "Principio de lealtad institucional.";
 answers[64] = choices[64][1];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10233 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[65]= new Array();
 choices[65][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[65][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[65][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[65][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10050 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[66]= new Array();
 choices[66][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[66][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[66][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[66][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[66] = choices[66][1];
 units[66] = "78";
 comments[66] = "Id Pregunta: 10050. AGE A1 2015";


//  Id pregunta: 10119 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[67]= new Array();
 choices[67][0] = "Anual";
 choices[67][1] = "Mensual";
 choices[67][2] = "Semestral";
 choices[67][3] = "Trimestral";
 answers[67] = choices[67][3];
 units[67] = "15";
 comments[67] = "Id Pregunta: 10119. ";


//  Id pregunta: 10167 Año de creación de pregunta: 2016
 questions[68]= "69)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[68]= new Array();
 choices[68][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[68][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[68][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[68][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[68] = choices[68][1];
 units[68] = "19";
 comments[68] = "Id Pregunta: 10167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 10132 Año de creación de pregunta: 2016
 questions[69]= "70)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[69]= new Array();
 choices[69][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[69][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[69][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[69][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[69] = choices[69][3];
 units[69] = "12";
 comments[69] = "Id Pregunta: 10132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10501 Año de creación de pregunta: 2016
 questions[70]= "71)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[70]= new Array();
 choices[70][0] = "Las sociedades mercantiles estatales.";
 choices[70][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[70][2] = "Las respuestas a) y b) son correctas.";
 choices[70][3] = "Las respuestas a) y b) no son correctas.";
 answers[70] = choices[70][2];
 units[70] = "10";
 comments[70] = "Id Pregunta: 10501. PRESUPUESTOS GENERALES";


//  Id pregunta: 10065 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[71][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[71][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[71][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[71] = choices[71][2];
 units[71] = "53";
 comments[71] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10118 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[72]= new Array();
 choices[72][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[72][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[72][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[72][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[72] = choices[72][2];
 units[72] = "15";
 comments[72] = "Id Pregunta: 10118. ";


//  Id pregunta: 10532 Año de creación de pregunta: 2016
 questions[73]= "74)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[73]= new Array();
 choices[73][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[73][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[73][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[73][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 10532. LEY 39/2015";


//  Id pregunta: 10478 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[74]= new Array();
 choices[74][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[74][1] = "Intervenci&oacute;n formal y material.";
 choices[74][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[74][3] = "Intervenci&oacute;n formal y general.";
 answers[74] = choices[74][1];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10478. PRESUPUESTOS GENERALES";


