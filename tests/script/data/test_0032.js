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

//  Id pregunta: 10009 Año de creación de pregunta: 2016
 questions[0]= "1)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[0]= new Array();
 choices[0][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[0][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[0][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[0][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[0] = choices[0][1];
 units[0] = "95";
 comments[0] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10093 Año de creación de pregunta: 2016
 questions[1]= "2)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[1]= new Array();
 choices[1][0] = "Almacenamiento orientado a columnas";
 choices[1][1] = "Framework MapReduce";
 choices[1][2] = "OLTP";
 choices[1][3] = "Bases de datos clave-valor";
 answers[1] = choices[1][2];
 units[1] = "73";
 comments[1] = "Id Pregunta: 10093. AGE A1 2015";


//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[2]= "3)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[2]= new Array();
 choices[2][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[2][1] = "Personas con nacionalidad europea.";
 choices[2][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[2][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[3]= "4)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[3]= new Array();
 choices[3][0] = "El servicio de teleasistencia.";
 choices[3][1] = "El servicio de ayuda a domicilio.";
 choices[3][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[3][3] = "Todas las anteriores son correctas.";
 answers[3] = choices[3][3];
 units[3] = "14";
 comments[3] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10533 Año de creación de pregunta: 2016
 questions[4]= "5)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[4]= new Array();
 choices[4][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[4][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[4][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[4][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[4] = choices[4][1];
 units[4] = "7";
 comments[4] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10089 Año de creación de pregunta: 2016
 questions[5]= "6)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[5]= new Array();
 choices[5][0] = "2.400 euros";
 choices[5][1] = "4.000 euros";
 choices[5][2] = "3.200 euros";
 choices[5][3] = "1.600 euros";
 answers[5] = choices[5][1];
 units[5] = "37";
 comments[5] = "Id Pregunta: 10089. AGE A1 2015";


//  Id pregunta: 10248 Año de creación de pregunta: 2016
 questions[6]= "7)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[6]= new Array();
 choices[6][0] = "61";
 choices[6][1] = "53";
 choices[6][2] = "65";
 choices[6][3] = "67";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10248. CONSTITUCION1978";


//  Id pregunta: 10490 Año de creación de pregunta: 2016
 questions[7]= "8)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "A los cinco a&ntilde;os.";
 choices[7][1] = "A los dos a&ntilde;os.";
 choices[7][2] = "A los tres a&ntilde;os.";
 choices[7][3] = "A los cuatro a&ntilde;os.";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 10490. PRESUPUESTOS GENERALES";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[8]= "9)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[8]= new Array();
 choices[8][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[8][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[8][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[8][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[8] = choices[8][0];
 units[8] = "65";
 comments[8] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10160 Año de creación de pregunta: 2016
 questions[9]= "10)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[9]= new Array();
 choices[9][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[9][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[9][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[9][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[9] = choices[9][1];
 units[9] = "19";
 comments[9] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10102 Año de creación de pregunta: 2016
 questions[10]= "11)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[10]= new Array();
 choices[10][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[10][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[10][2] = "Se basan en sistemas distribuidos";
 choices[10][3] = "Se basan en el modelo de datos relacional";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 10102. ";


//  Id pregunta: 10068 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[11]= new Array();
 choices[11][0] = "Data Mining (miner&iacute;a de datos)";
 choices[11][1] = "Business Intelligence (inteligencia de negocio)";
 choices[11][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[11][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[11] = choices[11][1];
 units[11] = "72";
 comments[11] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10352 Año de creación de pregunta: 2016
 questions[12]= "13)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[12]= new Array();
 choices[12][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[12][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[12][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[12][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10456 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[13]= new Array();
 choices[13][0] = "a) Los cuatro ejercicios siguientes.";
 choices[13][1] = "b) El ejercicio siguiente.";
 choices[13][2] = "c) Los dos ejercicios siguientes.";
 choices[13][3] = "d) Los tres ejercicios siguientes.";
 answers[13] = choices[13][3];
 units[13] = "10";
 comments[13] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10370 Año de creación de pregunta: 2016
 questions[14]= "15)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[14]= new Array();
 choices[14][0] = "Un recurso de incumplimiento.";
 choices[14][1] = "Recurso de carencia.";
 choices[14][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[14][3] = "Ninguna es correcta.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10422 Año de creación de pregunta: 2016
 questions[15]= "16)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[15]= new Array();
 choices[15][0] = "El Ministerio de Igualdad.";
 choices[15][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[15][2] = "Ambas son correctas.";
 choices[15][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 10422. POLITICAS DE IGUALDAD";


//  Id pregunta: 10673 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[16]= new Array();
 choices[16][0] = "El aumento de la esperanza de vida.";
 choices[16][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[16][2] = "La reducci&oacute;n del desempleo.";
 choices[16][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[16] = choices[16][0];
 units[16] = "14";
 comments[16] = "Id Pregunta: 10673. Estructura social";


//  Id pregunta: 10406 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[17]= new Array();
 choices[17][0] = "Art&iacute;culo 9.1 CE.";
 choices[17][1] = "Art&iacute;culo 53 CE.";
 choices[17][2] = "Art&iacute;culo 14 CE.";
 choices[17][3] = "Art&iacute;culo 16 CE.";
 answers[17] = choices[17][2];
 units[17] = "14";
 comments[17] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10449 Año de creación de pregunta: 2016
 questions[18]= "19)  El cr&eacute;dito presupuestario es...";
 choices[18]= new Array();
 choices[18][0] = "El sujeto que realiza el gasto";
 choices[18][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[18][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[18][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10216 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[19]= new Array();
 choices[19][0] = "El Presidente del Gobierno.";
 choices[19][1] = "El Consejo de Ministros.";
 choices[19][2] = "40 Diputados.";
 choices[19][3] = "El Ministerio Fiscal.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10330 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[20]= new Array();
 choices[20][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[20][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[20][2] = "Todas son correctas.";
 choices[20][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10330. UNION EUROPEA";


//  Id pregunta: 10423 Año de creación de pregunta: 2016
 questions[21]= "22)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[21]= new Array();
 choices[21][0] = "El derecho a un permiso.";
 choices[21][1] = "Una prestaci&oacute;n por paternidad.";
 choices[21][2] = "Ambas son correctas.";
 choices[21][3] = "18 d&iacute;as de permiso.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10133 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[22]= new Array();
 choices[22][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[22][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[22][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[22][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[22] = choices[22][1];
 units[22] = "12";
 comments[22] = "Id Pregunta: 10133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10059 Año de creación de pregunta: 2016
 questions[23]= "24)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[23]= new Array();
 choices[23][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[23][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[23][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[23][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[23] = choices[23][3];
 units[23] = "101";
 comments[23] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10051 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[24]= new Array();
 choices[24][0] = "Cifrado de las comunicaciones";
 choices[24][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[24][2] = "Registro de los accesos";
 choices[24][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[24] = choices[24][1];
 units[24] = "35";
 comments[24] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10583 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[25]= new Array();
 choices[25][0] = "Los principios rectores";
 choices[25][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[25][2] = "Los hitos para su desarrollo gradual";
 choices[25][3] = "Todos los anteriores";
 answers[25] = choices[25][3];
 units[25] = "19";
 comments[25] = "Id Pregunta: 10583. Estrategia TIC";


//  Id pregunta: 10208 Año de creación de pregunta: 2016
 questions[26]= "27)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[26]= new Array();
 choices[26][0] = "El Rey.";
 choices[26][1] = "El Jefe del Estado.";
 choices[26][2] = "El Gobierno.";
 choices[26][3] = "El Presidente del Gobierno.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10208. CONSTITUCION1978";


//  Id pregunta: 10601 Año de creación de pregunta: 2016
 questions[27]= "28)  Los criptosistemas pueden clasificarse en:";
 choices[27]= new Array();
 choices[27][0] = "Concretos, Estables e Inestables.";
 choices[27][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[27][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[27][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[27] = choices[27][3];
 units[27] = "76";
 comments[27] = "Id Pregunta: 10601. Junta de Extremadura A1 2015";


//  Id pregunta: 10646 Año de creación de pregunta: 2016
 questions[28]= "29)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[28]= new Array();
 choices[28][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[28][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[28][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[28][3] = "Todas las respuestas son correctas.";
 answers[28] = choices[28][0];
 units[28] = "101";
 comments[28] = "Id Pregunta: 10646. Junta de Extremadura A1 2015";


//  Id pregunta: 10482 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[29]= new Array();
 choices[29][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[29][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[29][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[29][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[29] = choices[29][0];
 units[29] = "10";
 comments[29] = "Id Pregunta: 10482. PRESUPUESTOS GENERALES";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[30]= new Array();
 choices[30][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[30][1] = "Pasivos financieros y transferencias de capital.";
 choices[30][2] = "Activos financieros y pasivos financieros.";
 choices[30][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[30] = choices[30][2];
 units[30] = "10";
 comments[30] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10384 Año de creación de pregunta: 2016
 questions[31]= "32)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[31]= new Array();
 choices[31][0] = "Sean dirigidas por mujeres";
 choices[31][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[31][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[31][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10380 Año de creación de pregunta: 2016
 questions[32]= "33)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[32]= new Array();
 choices[32][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[32][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[32][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[32][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[32] = choices[32][3];
 units[32] = "14";
 comments[32] = "Id Pregunta: 10380. POLITICAS DE IGUALDAD";


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


//  Id pregunta: 10157 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[34]= new Array();
 choices[34][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[34][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[34][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[34][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[34] = choices[34][0];
 units[34] = "7";
 comments[34] = "Id Pregunta: 10157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 10234 Año de creación de pregunta: 2016
 questions[35]= "36)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[35]= new Array();
 choices[35][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[35][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[35][2] = "Al Congreso de los Diputados.";
 choices[35][3] = "Al Gobierno.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 10234. CONSTITUCION1978";


//  Id pregunta: 10592 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[36]= new Array();
 choices[36][0] = "Anualmente";
 choices[36][1] = "Bienalmente";
 choices[36][2] = "Cada cuatro a&ntilde;os";
 choices[36][3] = "No se define ninguna periodicidad";
 answers[36] = choices[36][1];
 units[36] = "19";
 comments[36] = "Id Pregunta: 10592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 10325 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[37]= new Array();
 choices[37][0] = "Veinticinco.";
 choices[37][1] = "Veintiuno.";
 choices[37][2] = "Dieciocho.";
 choices[37][3] = "Diecinueve.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10368 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[38]= new Array();
 choices[38][0] = "Un Reglamento.";
 choices[38][1] = "Un Decreto.";
 choices[38][2] = "Una Ley.";
 choices[38][3] = "Un Real-Decreto.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 10368. UNION EUROPEA";


//  Id pregunta: 10298 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[39]= new Array();
 choices[39][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[39][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[39][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[39][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10465 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[40]= new Array();
 choices[40][0] = "Las respuestas a) y b) son correctas.";
 choices[40][1] = "Las respuestas a) y b) no son correctas.";
 choices[40][2] = "Contenido coherente con los planes sectoriales.";
 choices[40][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[40] = choices[40][0];
 units[40] = "10";
 comments[40] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10613 Año de creación de pregunta: 2016
 questions[41]= "42)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[41]= new Array();
 choices[41][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[41][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[41][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[41][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[41] = choices[41][1];
 units[41] = "48";
 comments[41] = "Id Pregunta: 10613. Junta de Extremadura A1 2015";


//  Id pregunta: 10432 Año de creación de pregunta: 2016
 questions[42]= "43)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[42]= new Array();
 choices[42][0] = "De ocho a&ntilde;os.";
 choices[42][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[42][2] = "Ambas son correctas.";
 choices[42][3] = "No existe un l&iacute;mite.";
 answers[42] = choices[42][0];
 units[42] = "14";
 comments[42] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10154 Año de creación de pregunta: 2016
 questions[43]= "44)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[43]= new Array();
 choices[43][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[43][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[43][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[43][3] = "todas son correctas";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 10154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10120 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[44]= new Array();
 choices[44][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[44][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[44][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[44][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[44] = choices[44][3];
 units[44] = "22";
 comments[44] = "Id Pregunta: 10120. ";


//  Id pregunta: 10588 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "14";
 choices[45][1] = "11";
 choices[45][2] = "12";
 choices[45][3] = "15";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10127 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "Tiene car&aacute;cter facultativo.";
 choices[46][1] = "Tiene car&aacute;cter potestativo. ";
 choices[46][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[46][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[46] = choices[46][1];
 units[46] = "22";
 comments[46] = "Id Pregunta: 10127. ";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[47]= "48)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[47]= new Array();
 choices[47][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[47][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[47][2] = "Son refrendados por el Rey.";
 choices[47][3] = "Son convocados por el Presidente del Gobierno.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10397 Año de creación de pregunta: 2016
 questions[48]= "49)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[48]= new Array();
 choices[48][0] = "Acoso sexual.";
 choices[48][1] = "Acoso por raz&oacute;n de sexo.";
 choices[48][2] = "Acoso laboral.";
 choices[48][3] = "Acoso mental.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 10397. POLITICAS DE IGUALDAD";


//  Id pregunta: 10442 Año de creación de pregunta: 2016
 questions[49]= "50)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[49]= new Array();
 choices[49][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[49][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[49][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[49][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 10442. SERVICIOS COMUNES";


//  Id pregunta: 10034 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[50]= new Array();
 choices[50][0] = "Memcached";
 choices[50][1] = "OpCache";
 choices[50][2] = "WinCache Extension for PHP";
 choices[50][3] = "Alternative PHP Cache";
 answers[50] = choices[50][0];
 units[50] = "65";
 comments[50] = "Id Pregunta: 10034. AGE A1 2015";


//  Id pregunta: 10628 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[51]= new Array();
 choices[51][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[51][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[51][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[51][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "45";
 comments[51] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10240 Año de creación de pregunta: 2016
 questions[52]= "53)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[52]= new Array();
 choices[52][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[52][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[52][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[52][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 10240. CONSTITUCION1978";


//  Id pregunta: 10303 Año de creación de pregunta: 2016
 questions[53]= "54)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[53]= new Array();
 choices[53][0] = "Veinticinco.";
 choices[53][1] = "Veintisiete.";
 choices[53][2] = "Veintinueve.";
 choices[53][3] = "Cuarenta y uno.";
 answers[53] = choices[53][1];
 units[53] = "5";
 comments[53] = "Id Pregunta: 10303. UNION EUROPEA";


//  Id pregunta: 10556 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[54]= new Array();
 choices[54][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[54][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[54][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[54][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[54] = choices[54][2];
 units[54] = "17";
 comments[54] = "Id Pregunta: 10556. Mercado &Uacute;nico Digital";


//  Id pregunta: 10273 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[55]= new Array();
 choices[55][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[55][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[55][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[55][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[55] = choices[55][1];
 units[55] = "92";
 comments[55] = "Id Pregunta: 10273. INTEGRACION CONTINUA";


//  Id pregunta: 10000 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[56]= new Array();
 choices[56][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[56][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[56][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[56][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[56] = choices[56][0];
 units[56] = "26";
 comments[56] = "Id Pregunta: 10000. AGE A1 2015";


//  Id pregunta: 10082 Año de creación de pregunta: 2016
 questions[57]= "58)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[57][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[57][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[57][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[57] = choices[57][3];
 units[57] = "41";
 comments[57] = "Id Pregunta: 10082. AGE A1 2015";


//  Id pregunta: 10005 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[58]= new Array();
 choices[58][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[58][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[58][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[58][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[58] = choices[58][1];
 units[58] = "101";
 comments[58] = "Id Pregunta: 10005. AGE A1 2015";


//  Id pregunta: 10310 Año de creación de pregunta: 2016
 questions[59]= "60)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[59]= new Array();
 choices[59][0] = "La Comisi&oacute;n Europea.";
 choices[59][1] = "El Consejo Europeo.";
 choices[59][2] = "El Consejo de Europa.";
 choices[59][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[59] = choices[59][0];
 units[59] = "5";
 comments[59] = "Id Pregunta: 10310. UNION EUROPEA";


//  Id pregunta: 10590 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[60]= new Array();
 choices[60][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[60][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[60][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[60][3] = "Todos los anteriores";
 answers[60] = choices[60][3];
 units[60] = "19";
 comments[60] = "Id Pregunta: 10590. Estrategia TIC";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[61]= "62)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[61]= new Array();
 choices[61][0] = "Estrasburgo.";
 choices[61][1] = "Bruselas.";
 choices[61][2] = "Luxemburgo.";
 choices[61][3] = "Holanda.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10587 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[62]= new Array();
 choices[62][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[62][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[62][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[62][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[62] = choices[62][0];
 units[62] = "19";
 comments[62] = "Id Pregunta: 10587. Estrategia TIC";


//  Id pregunta: 10096 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "VMware ESX";
 choices[63][1] = "XenServer";
 choices[63][2] = "Alfresco";
 choices[63][3] = "Microsoft Hyper-V";
 answers[63] = choices[63][2];
 units[63] = "54";
 comments[63] = "Id Pregunta: 10096. AGE A1 2015";


//  Id pregunta: 10501 Año de creación de pregunta: 2016
 questions[64]= "65)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[64]= new Array();
 choices[64][0] = "Las sociedades mercantiles estatales.";
 choices[64][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[64][2] = "Las respuestas a) y b) son correctas.";
 choices[64][3] = "Las respuestas a) y b) no son correctas.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10501. PRESUPUESTOS GENERALES";


//  Id pregunta: 10287 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[65]= new Array();
 choices[65][0] = "Versi&oacute;n digital prioritaria.";
 choices[65][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[65][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[65][3] = "Apertura y transparencia.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10287. UNION EUROPEA";


//  Id pregunta: 10534 Año de creación de pregunta: 2016
 questions[66]= "67)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[66]= new Array();
 choices[66][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[66][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[66][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[66][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[66] = choices[66][2];
 units[66] = "7";
 comments[66] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10279 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la respuesta correcta:";
 choices[67]= new Array();
 choices[67][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[67][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[67][2] = "Las respuestas A y B son correctas.";
 choices[67][3] = "Las respuestas A y B son falsas.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10279. UNION EUROPEA";


//  Id pregunta: 10621 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[68]= new Array();
 choices[68][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[68][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[68][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[68][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[68] = choices[68][0];
 units[68] = "89";
 comments[68] = "Id Pregunta: 10621. Junta de Extremadura A1 2015";


//  Id pregunta: 10254 Año de creación de pregunta: 2016
 questions[69]= "70)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[69]= new Array();
 choices[69][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[69][1] = "La libertad sexual y religiosa.";
 choices[69][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[69][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10235 Año de creación de pregunta: 2016
 questions[70]= "71)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[70]= new Array();
 choices[70][0] = "El Jefe del Estado.";
 choices[70][1] = "El Tribunal Constitucional.";
 choices[70][2] = "El Congreso de los Diputados.";
 choices[70][3] = "Las Cortes Generales.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10235. CONSTITUCION1978";


//  Id pregunta: 10252 Año de creación de pregunta: 2016
 questions[71]= "72)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[71]= new Array();
 choices[71][0] = "De las disposiciones favorables.";
 choices[71][1] = "De las disposiciones sancionadoras no favorables.";
 choices[71][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[71][3] = "Las respuestas b) y c) son correctas.";
 answers[71] = choices[71][3];
 units[71] = "1";
 comments[71] = "Id Pregunta: 10252. CONSTITUCION1978";


//  Id pregunta: 10445 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[72]= new Array();
 choices[72][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[72][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[72][2] = "Fecha de otorgamiento.";
 choices[72][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10578 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[73]= new Array();
 choices[73][0] = "Fue elaborada y aprobada por la CETIC";
 choices[73][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[73][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[73][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[73] = choices[73][1];
 units[73] = "19";
 comments[73] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10328 Año de creación de pregunta: 2016
 questions[74]= "75)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[74]= new Array();
 choices[74][0] = "El Presidente del Consejo Europeo.";
 choices[74][1] = "La Comisi&oacute;n.";
 choices[74][2] = "El Consejo.";
 choices[74][3] = "El Parlamento Europeo.";
 answers[74] = choices[74][2];
 units[74] = "5";
 comments[74] = "Id Pregunta: 10328. UNION EUROPEA";


