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

//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[0]= new Array();
 choices[0][0] = "Nueve.";
 choices[0][1] = "Diez.";
 choices[0][2] = "Siete.";
 choices[0][3] = "Ocho.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[1]= "2)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[1]= new Array();
 choices[1][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[1][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[1][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[1][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[1] = choices[1][3];
 units[1] = "86";
 comments[1] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[2]= new Array();
 choices[2][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[2][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[2][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[2][3] = "Ninguna de las anteriores.";
 answers[2] = choices[2][1];
 units[2] = "92";
 comments[2] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[3]= "4)  Indica la respuesta correcta";
 choices[3]= new Array();
 choices[3][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[3][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[3][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[3][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[3] = choices[3][0];
 units[3] = "34, 84";
 comments[3] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[4]= new Array();
 choices[4][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[4][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[4][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[4][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[4] = choices[4][0];
 units[4] = "14";
 comments[4] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[5]= new Array();
 choices[5][0] = "Perceptible";
 choices[5][1] = "Operable";
 choices[5][2] = "Comprensible";
 choices[5][3] = "Robusto";
 answers[5] = choices[5][2];
 units[5] = "42";
 comments[5] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[6]= "7)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[6]= new Array();
 choices[6][0] = "150 trabajadores/as.";
 choices[6][1] = "200 trabajadores/as.";
 choices[6][2] = "250 trabajadores/as.";
 choices[6][3] = "300 trabajadores/as.";
 answers[6] = choices[6][2];
 units[6] = "14";
 comments[6] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[7]= new Array();
 choices[7][0] = "MySQL";
 choices[7][1] = "SQLite";
 choices[7][2] = "Zope";
 choices[7][3] = "MariaDB";
 answers[7] = choices[7][2];
 units[7] = "61";
 comments[7] = "Id Pregunta: 577. Tema 61. TAI 2016.";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[8]= new Array();
 choices[8][0] = "Las sociedades mercantiles estatales.";
 choices[8][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[8][2] = "Las respuestas a) y b) son correctas.";
 choices[8][3] = "Las respuestas a) y b) no son correctas.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[9]= "10)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[9]= new Array();
 choices[9][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[9][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[9][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[9][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[9] = choices[9][0];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[10]= "11)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[10]= new Array();
 choices[10][0] = "En qu&eacute; nos gastamos el dinero";
 choices[10][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[10][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[10][3] = "Qui&eacute;n se gasta el dinero.";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[11]= "12)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[11]= new Array();
 choices[11][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[11][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[11][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[11][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[11] = choices[11][0];
 units[11] = "15";
 comments[11] = "Id Pregunta: 111. ";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ala la correcta:";
 choices[12]= new Array();
 choices[12][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[12][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[12][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[12][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[12] = choices[12][1];
 units[12] = "7";
 comments[12] = "Id Pregunta: 543. LEY 39/2015";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[13]= "14)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[13]= new Array();
 choices[13][0] = "El rey, a propuesta del Gobierno.";
 choices[13][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[13][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[13][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[13] = choices[13][1];
 units[13] = "1";
 comments[13] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[14]= "15)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[14]= new Array();
 choices[14][0] = "61";
 choices[14][1] = "53";
 choices[14][2] = "65";
 choices[14][3] = "67";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[15]= new Array();
 choices[15][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[15][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[15][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[15][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[15] = choices[15][3];
 units[15] = "44";
 comments[15] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[16]= "17)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[16]= new Array();
 choices[16][0] = "Cuatro millones de euros.";
 choices[16][1] = "Seis millones de euros.";
 choices[16][2] = "Siete millones de euros.";
 choices[16][3] = "Cinco millones de euros.";
 answers[16] = choices[16][1];
 units[16] = "10";
 comments[16] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[17]= new Array();
 choices[17][0] = "Art&iacute;culo 16.2.";
 choices[17][1] = "Art&iacute;culo 17.1.";
 choices[17][2] = "Art&iacute;culo 18.1.";
 choices[17][3] = "Art&iacute;culo 18.2.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[18]= "19)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[18]= new Array();
 choices[18][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[18][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[18][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[18][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[18] = choices[18][1];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[19]= "20)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[19]= new Array();
 choices[19][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[19][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[19][2] = "La protecci&oacute;n del medio ambiente.";
 choices[19][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[19] = choices[19][0];
 units[19] = "22";
 comments[19] = "Id Pregunta: 125. ";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[20]= "21)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[20]= new Array();
 choices[20][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[20][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[20][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[20][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[21]= "22)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[21]= new Array();
 choices[21][0] = "Subgrupo A1";
 choices[21][1] = "Subgrupo A2";
 choices[21][2] = "Subgrupo B";
 choices[21][3] = "Subgrupo C1";
 answers[21] = choices[21][0];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[22]= "23)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[22]= new Array();
 choices[22][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[22][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[22][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[22][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[22] = choices[22][1];
 units[22] = "58";
 comments[22] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[23]= "24)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[23]= new Array();
 choices[23][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[23][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[23][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[23][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[24]= "25)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[24]= new Array();
 choices[24][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[24][1] = "El Congreso de los Diputados.";
 choices[24][2] = "Las Cortes Generales.";
 choices[24][3] = "El Consejo de Ministros";
 answers[24] = choices[24][3];
 units[24] = "1";
 comments[24] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[25]= new Array();
 choices[25][0] = "Tres meses.";
 choices[25][1] = "Nueve meses.";
 choices[25][2] = "Cuatro meses.";
 choices[25][3] = "Seis meses.";
 answers[25] = choices[25][0];
 units[25] = "10";
 comments[25] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[26]= "27)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[26]= new Array();
 choices[26][0] = "Los cr&eacute;ditos";
 choices[26][1] = "Las partidas presupuestarias";
 choices[26][2] = "Los derechos";
 choices[26][3] = "Las obligaciones";
 answers[26] = choices[26][3];
 units[26] = "10";
 comments[26] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[27]= "28)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[27]= new Array();
 choices[27][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[27][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[27][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[27][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[27] = choices[27][1];
 units[27] = "73";
 comments[27] = "Id Pregunta: 101. ";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[28]= "29)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[28]= new Array();
 choices[28][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[28][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[28][2] = "Ministerio de la Presidencia";
 choices[28][3] = "Ministerio de Fomento";
 answers[28] = choices[28][2];
 units[28] = "22";
 comments[28] = "Id Pregunta: 708. Portal de Transparencia";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[29]= "30)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[29]= new Array();
 choices[29][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[29][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[29][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[29][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[30]= new Array();
 choices[30][0] = "Veinte.";
 choices[30][1] = "Quince.";
 choices[30][2] = "Diez.";
 choices[30][3] = "Doce.";
 answers[30] = choices[30][1];
 units[30] = "1";
 comments[30] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[31][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[31][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[31][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[31] = choices[31][2];
 units[31] = "53";
 comments[31] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[32]= "33)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[32]= new Array();
 choices[32][0] = "El Instituto de la Mujer.";
 choices[32][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[32][2] = "Ambas son correctas.";
 choices[32][3] = "A y B son incorrectas.";
 answers[32] = choices[32][2];
 units[32] = "14";
 comments[32] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[33]= "34)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[33]= new Array();
 choices[33][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[33][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[33][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[33][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[34]= new Array();
 choices[34][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[34][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[34][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[34][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[34] = choices[34][0];
 units[34] = "75";
 comments[34] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[35]= "36)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[35]= new Array();
 choices[35][0] = "Bases de datos orientadas a filas";
 choices[35][1] = "Bases de datos orientadas a documentos";
 choices[35][2] = "Bases de datos de clave/valor";
 choices[35][3] = "Bases de datos orientadas a objetos";
 answers[35] = choices[35][0];
 units[35] = "73";
 comments[35] = "Id Pregunta: 100. ";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[36]= "37)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[36]= new Array();
 choices[36][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[36][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[36][2] = "a y b son correctas";
 choices[36][3] = "a y b son incorrectas";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[37]= new Array();
 choices[37][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[37][1] = "Excesiva estabilidad de empleo";
 choices[37][2] = "An&eacute;mico crecimiento de la productividad";
 choices[37][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[37] = choices[37][1];
 units[37] = "12";
 comments[37] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[38]= new Array();
 choices[38][0] = "Indirecta.";
 choices[38][1] = "Directa.";
 choices[38][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[38][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[38] = choices[38][1];
 units[38] = "14";
 comments[38] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[39]= "40)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[39]= new Array();
 choices[39][0] = "Subsecretario";
 choices[39][1] = "Subdirector general";
 choices[39][2] = "Secretario de Estado";
 choices[39][3] = "ninguna es correcta";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[40]= new Array();
 choices[40][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[40][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[40][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[40][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[40] = choices[40][2];
 units[40] = "17";
 comments[40] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[41]= "42)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[41][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[41][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[41][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[42]= new Array();
 choices[42][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[42][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[42][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[42][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[42] = choices[42][1];
 units[42] = "63";
 comments[42] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[43]= "44)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[43]= new Array();
 choices[43][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[43][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[43][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[43][3] = "Todas son correctas.";
 answers[43] = choices[43][3];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[44]= new Array();
 choices[44][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[44][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[44][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[44][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[45]= "46)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[45]= new Array();
 choices[45][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[45][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[45][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[45][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[45] = choices[45][3];
 units[45] = "1";
 comments[45] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[46]= "47)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[46]= new Array();
 choices[46][0] = "Ejecuci&oacute;n";
 choices[46][1] = "Adjudicaci&oacute;n";
 choices[46][2] = "Licitaci&oacute;n";
 choices[46][3] = "Formalizaci&oacute;n";
 answers[46] = choices[46][3];
 units[46] = "37";
 comments[46] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[47]= "48)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Igualdad.";
 choices[47][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[47][2] = "Ambas son correctas.";
 choices[47][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[47] = choices[47][1];
 units[47] = "14";
 comments[47] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[48]= "49)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[48]= new Array();
 choices[48][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[48][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[48][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[48][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[48] = choices[48][3];
 units[48] = "28";
 comments[48] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[49]= "50)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[49]= new Array();
 choices[49][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[49][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[49][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[49][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[49] = choices[49][3];
 units[49] = "56";
 comments[49] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[50]= "51)  Componen la Comisi&oacute;n Europea:";
 choices[50]= new Array();
 choices[50][0] = "Un Comisario por cada Estado miembro.";
 choices[50][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[50][2] = "Dos Comisarios por cada Estado miembro.";
 choices[50][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[50] = choices[50][0];
 units[50] = "5";
 comments[50] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[51]= "52)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[51]= new Array();
 choices[51][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[51][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[51][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[51][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[51] = choices[51][2];
 units[51] = "8";
 comments[51] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[52]= "53)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[52]= new Array();
 choices[52][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[52][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[52][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][1];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[53]= new Array();
 choices[53][0] = "DoS";
 choices[53][1] = "Phishing";
 choices[53][2] = "Sniffing";
 choices[53][3] = "Spoofing";
 answers[53] = choices[53][3];
 units[53] = "119";
 comments[53] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[54]= new Array();
 choices[54][0] = "personalidad jur&iacute;dica propia";
 choices[54][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[54][2] = "personalidad jur&iacute;dica plena";
 choices[54][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[54] = choices[54][1];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[55]= new Array();
 choices[55][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[55][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[55][2] = "la falta de interoperabilidad.";
 choices[55][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[56]= new Array();
 choices[56][0] = "No, en ning&uacute;n caso.";
 choices[56][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[56][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[56][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[56] = choices[56][3];
 units[56] = "1";
 comments[56] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[57]= new Array();
 choices[57][0] = "Crecimiento sostenible";
 choices[57][1] = "Crecimiento inteligente";
 choices[57][2] = "Crecimiento digital";
 choices[57][3] = "Crecimiento integrador";
 answers[57] = choices[57][2];
 units[57] = "19";
 comments[57] = "Id Pregunta: 759. Europa 2020";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[58]= "59)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[58]= new Array();
 choices[58][0] = "18 miembros.";
 choices[58][1] = "Ninguna es correcta.";
 choices[58][2] = "22 miembros.";
 choices[58][3] = "21 miembros.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[59]= "60)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[59]= new Array();
 choices[59][0] = "6 TB.";
 choices[59][1] = "8 TB.";
 choices[59][2] = "7 TB.";
 choices[59][3] = "4 TB.";
 answers[59] = choices[59][3];
 units[59] = "53";
 comments[59] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[60]= new Array();
 choices[60][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[60][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[60][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[60][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[61]= "62)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[61]= new Array();
 choices[61][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[61][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[61][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[61][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[61] = choices[61][1];
 units[61] = "74";
 comments[61] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[62]= new Array();
 choices[62][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[62][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[62][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[62][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[62] = choices[62][0];
 units[62] = "26";
 comments[62] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[63]= new Array();
 choices[63][0] = "Siempre en formato electr&oacute;nico.";
 choices[63][1] = "Siempre en formato papel.";
 choices[63][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[63][3] = "La ley no regula el formato del expediente.";
 answers[63] = choices[63][0];
 units[63] = "7";
 comments[63] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[64]= "65)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[64]= new Array();
 choices[64][0] = "Relaciones base y vistas.";
 choices[64][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[64][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[64][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[64] = choices[64][3];
 units[64] = "60";
 comments[64] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[65]= "66)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[65]= new Array();
 choices[65][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[65][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[65][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[65][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[66][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[66][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[66][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[66] = choices[66][1];
 units[66] = "14";
 comments[66] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[67]= "68)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[67]= new Array();
 choices[67][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[67][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[67][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[67][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[67] = choices[67][2];
 units[67] = "27";
 comments[67] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[68]= "69)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[68]= new Array();
 choices[68][0] = "Mercurial, Git y Apache Subversion.";
 choices[68][1] = "Gimp, Mercurial y Git.";
 choices[68][2] = "RedMine, Planner y OpenProj.";
 choices[68][3] = "Cassandra, Git y REDIS.";
 answers[68] = choices[68][0];
 units[68] = "92";
 comments[68] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[69]= new Array();
 choices[69][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[69][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[69][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[69][3] = "El Senado se compone de 350 senadores.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[70]= new Array();
 choices[70][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[70][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[70][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[70][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[70] = choices[70][3];
 units[70] = "26";
 comments[70] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[71]= "72)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[71]= new Array();
 choices[71][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[71][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[71][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[71][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[71] = choices[71][1];
 units[71] = "35";
 comments[71] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[72]= "73)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[72]= new Array();
 choices[72][0] = "Presentar la moci&oacute;n de censura.";
 choices[72][1] = "Presidir las sesiones del Parlamento.";
 choices[72][2] = "Organizar la Secretar&iacute;a General.";
 choices[72][3] = "Preparar las actividades de las Comisiones.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[73]= "74)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[73]= new Array();
 choices[73][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[73][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[73][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[73][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[73] = choices[73][2];
 units[73] = "1";
 comments[73] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[74]= "75)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[74]= new Array();
 choices[74][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[74][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[74][2] = "Son incompatibles ambas actas de diputado.";
 choices[74][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[74] = choices[74][2];
 units[74] = "5";
 comments[74] = "Id Pregunta: 335. UNION EUROPEA";


