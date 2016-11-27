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

//  Id pregunta: 10440 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[0]= new Array();
 choices[0][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[0][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[0][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[0][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[0] = choices[0][2];
 units[0] = "43";
 comments[0] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10482 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[1]= new Array();
 choices[1][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[1][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[1][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[1][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[1] = choices[1][0];
 units[1] = "10";
 comments[1] = "Id Pregunta: 10482. PRESUPUESTOS GENERALES";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[2]= new Array();
 choices[2][0] = "solo mediante ley";
 choices[2][1] = "reglamentariamente";
 choices[2][2] = "mediante ley o reglamentariamente";
 choices[2][3] = "ninguna es correcta";
 answers[2] = choices[2][1];
 units[2] = "7";
 comments[2] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10566 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[3]= new Array();
 choices[3][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[3][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[3][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[3][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[3] = choices[3][0];
 units[3] = "12";
 comments[3] = "Id Pregunta: 10566. Modelo econ&oacute;mico";


//  Id pregunta: 10439 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[4]= new Array();
 choices[4][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[4][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[4][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[4][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[4] = choices[4][1];
 units[4] = "43";
 comments[4] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10007 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[5]= new Array();
 choices[5][0] = "Nivel 7 - MPLS.";
 choices[5][1] = "Nivel 3 - RARP.";
 choices[5][2] = "Nivel 2 - HDLC.";
 choices[5][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[5] = choices[5][2];
 units[5] = "105";
 comments[5] = "Id Pregunta: 10007. AGE A1 2015";


//  Id pregunta: 10665 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[6]= new Array();
 choices[6][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, , la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[6][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[6][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[6][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[6] = choices[6][2];
 units[6] = "7";
 comments[6] = "Id Pregunta: 10665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10517 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[7]= new Array();
 choices[7][0] = "la Administraci&oacute;n General del Estado";
 choices[7][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[7][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[7][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10499 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[8]= new Array();
 choices[8][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[8][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[8][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[8][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[8] = choices[8][0];
 units[8] = "10";
 comments[8] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10585 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[9]= new Array();
 choices[9][0] = "La CETIC";
 choices[9][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[9][2] = "La DTIC";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = choices[9][1];
 units[9] = "19";
 comments[9] = "Id Pregunta: 10585. Estrategia TIC";


//  Id pregunta: 10647 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[10]= new Array();
 choices[10][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[10][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[10][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[10][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[10] = choices[10][0];
 units[10] = "101";
 comments[10] = "Id Pregunta: 10647. Junta de Extremadura A1 2015";


//  Id pregunta: 10398 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[11]= new Array();
 choices[11][0] = "Art. 13, L.O.3/2007.";
 choices[11][1] = "Art. 14, L.O.3/2007.";
 choices[11][2] = "Art. 11, L.O.3/2007.";
 choices[11][3] = "Ninguna es correcta.";
 answers[11] = choices[11][2];
 units[11] = "14";
 comments[11] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10559 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[12]= new Array();
 choices[12][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[12][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[12][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[12][3] = "Todos los anteriores";
 answers[12] = choices[12][3];
 units[12] = "19";
 comments[12] = "Id Pregunta: 10559. Agenda Digital";


//  Id pregunta: 10669 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[13]= new Array();
 choices[13][0] = "Resoluci&oacute;n.";
 choices[13][1] = "Desistimiento o renuncia.";
 choices[13][2] = "Caducidad.";
 choices[13][3] = "Todas las anteriores.";
 answers[13] = choices[13][3];
 units[13] = "7";
 comments[13] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[14]= new Array();
 choices[14][0] = "El Presidente y su gabinete.";
 choices[14][1] = "El Presidente y sus Ministros.";
 choices[14][2] = "El Rey y el Presidente.";
 choices[14][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 10257. CONSTITUCION1978";


//  Id pregunta: 10364 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[15]= new Array();
 choices[15][0] = "El 1 de junio de 1999.";
 choices[15][1] = "El 1 de mayo de 1999.";
 choices[15][2] = "El 1 de abril de 1999.";
 choices[15][3] = "El 1 de marzo de 1999.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 10364. UNION EUROPEA";


//  Id pregunta: 10101 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[16]= new Array();
 choices[16][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[16][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[16][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[16][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[16] = choices[16][1];
 units[16] = "73";
 comments[16] = "Id Pregunta: 10101. ";


//  Id pregunta: 10089 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[17]= new Array();
 choices[17][0] = "2.400 euros";
 choices[17][1] = "4.000 euros";
 choices[17][2] = "3.200 euros";
 choices[17][3] = "1.600 euros";
 answers[17] = choices[17][1];
 units[17] = "37";
 comments[17] = "Id Pregunta: 10089. AGE A1 2015";


//  Id pregunta: 10383 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[18]= new Array();
 choices[18][0] = "El Consejo Nacional de la Mujer";
 choices[18][1] = "El Consejo de la Mujer";
 choices[18][2] = "El Instituto de la Mujer";
 choices[18][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[18] = choices[18][3];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10560 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[19]= new Array();
 choices[19][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[19][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[19][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[19][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[19] = choices[19][1];
 units[19] = "19";
 comments[19] = "Id Pregunta: 10560. Agenda Digital";


//  Id pregunta: 10206 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[20]= new Array();
 choices[20][0] = "El Gobierno.";
 choices[20][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[20][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[20][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10206. CONSTITUCION1978";


//  Id pregunta: 10362 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[21]= new Array();
 choices[21][0] = "Son actos normativos.";
 choices[21][1] = "Poseen alcance general.";
 choices[21][2] = "No son obligatorias.";
 choices[21][3] = "Son actos individuales no normativos.";
 answers[21] = choices[21][3];
 units[21] = "5";
 comments[21] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10068 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[22]= new Array();
 choices[22][0] = "Data Mining (miner&iacute;a de datos)";
 choices[22][1] = "Business Intelligence (inteligencia de negocio)";
 choices[22][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[22][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[22] = choices[22][1];
 units[22] = "72";
 comments[22] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10030 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[23]= new Array();
 choices[23][0] = "SMB3";
 choices[23][1] = "AFP";
 choices[23][2] = "NFS";
 choices[23][3] = "FTP";
 answers[23] = choices[23][0];
 units[23] = "59";
 comments[23] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10332 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[24]= new Array();
 choices[24][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[24][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[24][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[24][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[24] = choices[24][3];
 units[24] = "5";
 comments[24] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10179 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[25]= new Array();
 choices[25][0] = "Una ley orginaria.";
 choices[25][1] = "Una ley org&aacute;nica.";
 choices[25][2] = "Una ley de bases.";
 choices[25][3] = "Una ley de transferencia.";
 answers[25] = choices[25][1];
 units[25] = "1";
 comments[25] = "Id Pregunta: 10179. CONSTITUCION1978";


//  Id pregunta: 10406 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[26]= new Array();
 choices[26][0] = "Art&iacute;culo 9.1 CE.";
 choices[26][1] = "Art&iacute;culo 53 CE.";
 choices[26][2] = "Art&iacute;culo 14 CE.";
 choices[26][3] = "Art&iacute;culo 16 CE.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10230 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[27]= new Array();
 choices[27][0] = "Por Real Decreto.";
 choices[27][1] = "Por Orden del Ministerio del Interior.";
 choices[27][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[27][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[27] = choices[27][2];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10230. CONSTITUCION1978";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[28]= new Array();
 choices[28][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[28][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[28][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[28][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[28] = choices[28][1];
 units[28] = "101";
 comments[28] = "Id Pregunta: 10005. AGE A1 2015";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[29][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[29][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[29][3] = "Todas las anteriores son ciertas";
 answers[29] = choices[29][3];
 units[29] = "8";
 comments[29] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[30]= new Array();
 choices[30][0] = "Presentar la moci&oacute;n de censura.";
 choices[30][1] = "Presidir las sesiones del Parlamento.";
 choices[30][2] = "Organizar la Secretar&iacute;a General.";
 choices[30][3] = "Preparar las actividades de las Comisiones.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[31]= new Array();
 choices[31][0] = "El Parlamento Europeo.";
 choices[31][1] = "Todas las respuestas son correctas.";
 choices[31][2] = "La Comisi&oacute;n Europea.";
 choices[31][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 10353. UNION EUROPEA";


//  Id pregunta: 10445 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[32]= new Array();
 choices[32][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[32][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[32][2] = "Fecha de otorgamiento.";
 choices[32][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10118 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[33]= new Array();
 choices[33][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[33][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[33][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[33][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[33] = choices[33][2];
 units[33] = "15";
 comments[33] = "Id Pregunta: 10118. ";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[34]= new Array();
 choices[34][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[34][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[34][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[34][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[34] = choices[34][0];
 units[34] = "15";
 comments[34] = "Id Pregunta: 10114. ";


//  Id pregunta: 10627 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[35]= new Array();
 choices[35][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[35][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[35][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[35][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[35] = choices[35][0];
 units[35] = "46";
 comments[35] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10282 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Sobre el Plan Juncker:";
 choices[36]= new Array();
 choices[36][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[36][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[36][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[36][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[36] = choices[36][1];
 units[36] = "5";
 comments[36] = "Id Pregunta: 10282. UNION EUROPEA";


//  Id pregunta: 10656 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[37]= new Array();
 choices[37][0] = "Cassandra";
 choices[37][1] = "Riak";
 choices[37][2] = "Avro";
 choices[37][3] = "Zookeeper";
 answers[37] = choices[37][3];
 units[37] = "73";
 comments[37] = "Id Pregunta: 10656. ";


//  Id pregunta: 10646 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[38]= new Array();
 choices[38][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[38][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[38][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[38][3] = "Todas las respuestas son correctas.";
 answers[38] = choices[38][0];
 units[38] = "101";
 comments[38] = "Id Pregunta: 10646. Junta de Extremadura A1 2015";


//  Id pregunta: 10433 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Unidad de igualdad.";
 choices[39][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[39][2] = "Ninguna de las anteriores.";
 choices[39][3] = "A y B son correctas.";
 answers[39] = choices[39][1];
 units[39] = "14";
 comments[39] = "Id Pregunta: 10433. POLITICAS DE IGUALDAD";


//  Id pregunta: 10196 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[40]= new Array();
 choices[40][0] = "Al Presidente del Gobierno.";
 choices[40][1] = "A las Cortes Generales";
 choices[40][2] = "A los electores.";
 choices[40][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10196. CONSTITUCION1978";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[41]= new Array();
 choices[41][0] = "El Presidente del Senado";
 choices[41][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[41][2] = "El Presidente del Gobierno";
 choices[41][3] = "El Presidente de las Cortes Generales";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10265. CONSTITUCION1978";


//  Id pregunta: 10626 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[42]= new Array();
 choices[42][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[42][1] = "La Direcci&oacute;n de la Competencia.";
 choices[42][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[42][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[42] = choices[42][0];
 units[42] = "121";
 comments[42] = "Id Pregunta: 10626. Junta de Extremadura A1 2015";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[43]= new Array();
 choices[43][0] = "Entradas (entities).";
 choices[43][1] = "Atributos (attribs).";
 choices[43][2] = "M&oacute;dulos (modules).";
 choices[43][3] = "Objetos (objects).";
 answers[43] = choices[43][0];
 units[43] = "74";
 comments[43] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10659 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[44]= new Array();
 choices[44][0] = "Orientaci&oacute;n a objetos";
 choices[44][1] = "MapReduce";
 choices[44][2] = "Pipeline filtering";
 choices[44][3] = "Programaci&oacute;n funcional";
 answers[44] = choices[44][1];
 units[44] = "73";
 comments[44] = "Id Pregunta: 10659. ";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[45]= new Array();
 choices[45][0] = "Cuatro millones de euros.";
 choices[45][1] = "Seis millones de euros.";
 choices[45][2] = "Siete millones de euros.";
 choices[45][3] = "Cinco millones de euros.";
 answers[45] = choices[45][1];
 units[45] = "10";
 comments[45] = "Id Pregunta: 10481. PRESUPUESTOS GENERALES";


//  Id pregunta: 10128 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[46]= new Array();
 choices[46][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[46][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[46][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[46][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[46] = choices[46][2];
 units[46] = "22";
 comments[46] = "Id Pregunta: 10128. ";


//  Id pregunta: 10598 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[47]= new Array();
 choices[47][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[47][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[47][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[47][3] = "Todas las respuestas anteriores son correctas.";
 answers[47] = choices[47][0];
 units[47] = "45";
 comments[47] = "Id Pregunta: 10598. Junta de Extremadura A1 2015";


//  Id pregunta: 10417 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[48][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[48][2] = "Ambas son correctas.";
 choices[48][3] = "La A y B son incorrectas.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 10417. POLITICAS DE IGUALDAD";


//  Id pregunta: 10098 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Clustering";
 choices[49][1] = "Deduplicaci&oacute;n";
 choices[49][2] = "Virtualizaci&oacute;n";
 choices[49][3] = "Contenerizaci&oacute;n";
 answers[49] = choices[49][2];
 units[49] = "124";
 comments[49] = "Id Pregunta: 10098. AGE A1 2015";


//  Id pregunta: 10326 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[50]= new Array();
 choices[50][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[50][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[50][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[50][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10326. UNION EUROPEA";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[51]= new Array();
 choices[51][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[51][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[51][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[51][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "45";
 comments[51] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10086 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[52]= new Array();
 choices[52][0] = "Un a&ntilde;o prorrogable";
 choices[52][1] = "Dos a&ntilde;os no prorrogables";
 choices[52][2] = "Un a&ntilde;o no prorrogable";
 choices[52][3] = "Dos a&ntilde;os prorrogables";
 answers[52] = choices[52][2];
 units[52] = "37";
 comments[52] = "Id Pregunta: 10086. AGE A1 2015";


//  Id pregunta: 10054 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[53]= new Array();
 choices[53][0] = "DoS";
 choices[53][1] = "Phishing";
 choices[53][2] = "Sniffing";
 choices[53][3] = "Spoofing";
 answers[53] = choices[53][3];
 units[53] = "119";
 comments[53] = "Id Pregunta: 10054. AGE A1 2015";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[54]= new Array();
 choices[54][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[54][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[54][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[54][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10166 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[55]= new Array();
 choices[55][0] = "Interoperabilidad";
 choices[55][1] = "Integridad";
 choices[55][2] = "Capital humano";
 choices[55][3] = "Trazabilidad";
 answers[55] = choices[55][2];
 units[55] = "19";
 comments[55] = "Id Pregunta: 10166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 10284 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la respuesta falsa:";
 choices[56]= new Array();
 choices[56][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[56][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[56][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[56][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10284. UNION EUROPEA";


//  Id pregunta: 10327 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[57]= new Array();
 choices[57][0] = "X.";
 choices[57][1] = "XIX.";
 choices[57][2] = "XV.";
 choices[57][3] = "XIII.";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 10327. UNION EUROPEA";


//  Id pregunta: 10141 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  El recurso de alzada puede interponerse:";
 choices[58]= new Array();
 choices[58][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[58][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[58][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[58][3] = "Ante el Defensor del Pueblo";
 answers[58] = choices[58][1];
 units[58] = "8";
 comments[58] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10074 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[59]= new Array();
 choices[59][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[59][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[59][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[59][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[59] = choices[59][3];
 units[59] = "106";
 comments[59] = "Id Pregunta: 10074. AGE A1 2015";


//  Id pregunta: 10203 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[60]= new Array();
 choices[60][0] = "Ley Org&aacute;nica.";
 choices[60][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[60][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[60][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10203. CONSTITUCION1978";


//  Id pregunta: 10454 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  El Presupuesto por programas sirve para saber...";
 choices[61]= new Array();
 choices[61][0] = "En qu&eacute; nos gastamos el dinero";
 choices[61][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[61][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[61][3] = "Qui&eacute;n se gasta el dinero";
 answers[61] = choices[61][2];
 units[61] = "10";
 comments[61] = "Id Pregunta: 10454. PRESUPUESTOS GENERALES";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[62]= new Array();
 choices[62][0] = "La Ley General Tributaria.";
 choices[62][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[62][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[62][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 10495. PRESUPUESTOS GENERALES";


//  Id pregunta: 10112 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[63]= new Array();
 choices[63][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[63][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[63][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[63][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[63] = choices[63][1];
 units[63] = "15";
 comments[63] = "Id Pregunta: 10112. ";


//  Id pregunta: 10183 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[64]= new Array();
 choices[64][0] = "al menos por 50 Diputados.";
 choices[64][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[64][2] = "por la Mesa del Congreso de los Diputados.";
 choices[64][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[64] = choices[64][1];
 units[64] = "1";
 comments[64] = "Id Pregunta: 10183. CONSTITUCION1978";


//  Id pregunta: 10197 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[65]= new Array();
 choices[65][0] = "Establecer tributos.";
 choices[65][1] = "Desarrollar lo establecido en una Ley.";
 choices[65][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[65][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 10197. CONSTITUCION1978";


//  Id pregunta: 10408 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[66]= new Array();
 choices[66][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[66][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[66][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[66][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[66] = choices[66][1];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10408. POLITICAS DE IGUALDAD";


//  Id pregunta: 10506 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[67]= new Array();
 choices[67][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[67][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[67][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[67][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[67] = choices[67][3];
 units[67] = "10";
 comments[67] = "Id Pregunta: 10506. PRESUPUESTOS GENERALES";


//  Id pregunta: 10636 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[68]= new Array();
 choices[68][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[68][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[68][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[68][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[68] = choices[68][2];
 units[68] = "57";
 comments[68] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10208 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[69]= new Array();
 choices[69][0] = "El Rey.";
 choices[69][1] = "El Jefe del Estado.";
 choices[69][2] = "El Gobierno.";
 choices[69][3] = "El Presidente del Gobierno.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10208. CONSTITUCION1978";


//  Id pregunta: 10595 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[70]= new Array();
 choices[70][0] = "La CETIC";
 choices[70][1] = "Los Ministerios";
 choices[70][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[70][3] = "Ninguno de los anteriores";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 10595. Estrategia TIC";


//  Id pregunta: 10489 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[71]= new Array();
 choices[71][0] = "Dos.";
 choices[71][1] = "Cuatro.";
 choices[71][2] = "Cinco.";
 choices[71][3] = "Tres.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[72]= new Array();
 choices[72][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[72][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[72][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[72][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10298 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[73]= new Array();
 choices[73][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[73][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[73][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[73][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[74]= new Array();
 choices[74][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[74][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[74][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[74][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[74] = choices[74][3];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10253. CONSTITUCION1978";


//  Id pregunta: 10178 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[75]= new Array();
 choices[75][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[75][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[75][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[75][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[75] = choices[75][0];
 units[75] = "1";
 comments[75] = "Id Pregunta: 10178. CONSTITUCION1978";


//  Id pregunta: 10048 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[76]= new Array();
 choices[76][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[76][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[76][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[76][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[76] = choices[76][3];
 units[76] = "77";
 comments[76] = "Id Pregunta: 10048. AGE A1 2015";


//  Id pregunta: 10189 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[77]= new Array();
 choices[77][0] = "Ley Org&aacute;nica.";
 choices[77][1] = "Ley de Bases.";
 choices[77][2] = "Ley ordinaria.";
 choices[77][3] = "Mandato.";
 answers[77] = choices[77][1];
 units[77] = "1";
 comments[77] = "Id Pregunta: 10189. CONSTITUCION1978";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[78]= new Array();
 choices[78][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[78][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[78][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[78][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[78] = choices[78][2];
 units[78] = "10";
 comments[78] = "Id Pregunta: 10484. PRESUPUESTOS GENERALES";


//  Id pregunta: 10418 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[79]= new Array();
 choices[79][0] = "P&uacute;blica.";
 choices[79][1] = "Privada.";
 choices[79][2] = "A y B son correctas.";
 choices[79][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[79] = choices[79][2];
 units[79] = "14";
 comments[79] = "Id Pregunta: 10418. POLITICAS DE IGUALDAD";


//  Id pregunta: 10359 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  Los Reglamentos no se caracterizan por:";
 choices[80]= new Array();
 choices[80][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[80][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[80][2] = "Ser obligatorios.";
 choices[80][3] = "No poseer alcance general.";
 answers[80] = choices[80][3];
 units[80] = "5";
 comments[80] = "Id Pregunta: 10359. UNION EUROPEA";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[81]= new Array();
 choices[81][0] = "Cuatro.";
 choices[81][1] = "Una.";
 choices[81][2] = "Cinco.";
 choices[81][3] = "Nueve.";
 answers[81] = choices[81][2];
 units[81] = "1";
 comments[81] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10360 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[82]= new Array();
 choices[82][0] = "786 Diputados como m&aacute;ximo.";
 choices[82][1] = "600 Diputados como m&aacute;ximo.";
 choices[82][2] = "650 Diputados como m&aacute;ximo.";
 choices[82][3] = "732 Diputados como m&aacute;ximo.";
 answers[82] = choices[82][0];
 units[82] = "5";
 comments[82] = "Id Pregunta: 10360. UNION EUROPEA";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[83]= new Array();
 choices[83][0] = "Consumidores";
 choices[83][1] = "PYMES y Start-ups";
 choices[83][2] = "La Industria";
 choices[83][3] = "Todos los anteriores";
 answers[83] = choices[83][3];
 units[83] = "17";
 comments[83] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10122 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[84]= new Array();
 choices[84][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[84][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[84][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[84][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[84] = choices[84][1];
 units[84] = "22";
 comments[84] = "Id Pregunta: 10122. ";


//  Id pregunta: 10426 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[85]= new Array();
 choices[85][0] = "Un plan de igualdad.";
 choices[85][1] = "Un informe de impacto de g&eacute;nero.";
 choices[85][2] = "Un programa de igualdad.";
 choices[85][3] = "Todas son correctas.";
 answers[85] = choices[85][1];
 units[85] = "14";
 comments[85] = "Id Pregunta: 10426. POLITICAS DE IGUALDAD";


//  Id pregunta: 10096 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[86]= new Array();
 choices[86][0] = "VMware ESX";
 choices[86][1] = "XenServer";
 choices[86][2] = "Alfresco";
 choices[86][3] = "Microsoft Hyper-V";
 answers[86] = choices[86][2];
 units[86] = "54";
 comments[86] = "Id Pregunta: 10096. AGE A1 2015";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[87]= new Array();
 choices[87][0] = "Seguridad Social y AEAT";
 choices[87][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[87][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[87][3] = "Todos los anteriores";
 answers[87] = choices[87][3];
 units[87] = "19";
 comments[87] = "Id Pregunta: 10594. Estrategia TIC";


//  Id pregunta: 10386 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[88]= new Array();
 choices[88][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[88][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[88][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[88][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[88] = choices[88][0];
 units[88] = "14";
 comments[88] = "Id Pregunta: 10386. POLITICAS DE IGUALDAD";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[89]= new Array();
 choices[89][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[89][1] = "Protecci&oacute;n de su salud.";
 choices[89][2] = "Ninguna es correcta.";
 choices[89][3] = "A y B son correctas.";
 answers[89] = choices[89][1];
 units[89] = "14";
 comments[89] = "Id Pregunta: 10430. POLITICAS DE IGUALDAD";


//  Id pregunta: 10288 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[90]= new Array();
 choices[90][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[90][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[90][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[90][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[90] = choices[90][2];
 units[90] = "5";
 comments[90] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[91]= new Array();
 choices[91][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[91][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[91][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[91][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[91] = choices[91][1];
 units[91] = "43";
 comments[91] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10596 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[92]= new Array();
 choices[92][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[92][1] = "Las CMADs";
 choices[92][2] = "Ambas son correctas.";
 choices[92][3] = "Ninguna es correcta";
 answers[92] = choices[92][2];
 units[92] = "19";
 comments[92] = "Id Pregunta: 10596. Estrategia TIC";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[93]= new Array();
 choices[93][0] = "absoluta de las Cortes Generales.";
 choices[93][1] = "absoluta del Congreso de los Diputados.";
 choices[93][2] = "simple de las Cortes Generales.";
 choices[93][3] = "simple del Congreso de los Diputados.";
 answers[93] = choices[93][3];
 units[93] = "1";
 comments[93] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[94]= new Array();
 choices[94][0] = "Fue elaborada y aprobada por la CETIC";
 choices[94][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[94][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[94][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[94] = choices[94][1];
 units[94] = "19";
 comments[94] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10490 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[95]= new Array();
 choices[95][0] = "A los cinco a&ntilde;os.";
 choices[95][1] = "A los dos a&ntilde;os.";
 choices[95][2] = "A los tres a&ntilde;os.";
 choices[95][3] = "A los cuatro a&ntilde;os.";
 answers[95] = choices[95][0];
 units[95] = "10";
 comments[95] = "Id Pregunta: 10490. PRESUPUESTOS GENERALES";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[96]= new Array();
 choices[96][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[96][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[96][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[96][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[96] = choices[96][0];
 units[96] = "19";
 comments[96] = "Id Pregunta: 10163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 10010 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[97]= new Array();
 choices[97][0] = "Paging";
 choices[97][1] = "Roaming";
 choices[97][2] = "Handover";
 choices[97][3] = "Trunking";
 answers[97] = choices[97][0];
 units[97] = "117";
 comments[97] = "Id Pregunta: 10010. AGE A1 2015";


//  Id pregunta: 10379 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[98]= new Array();
 choices[98][0] = "Anual.";
 choices[98][1] = "Semestral.";
 choices[98][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[98][3] = "Bienal.";
 answers[98] = choices[98][2];
 units[98] = "14";
 comments[98] = "Id Pregunta: 10379. POLITICAS DE IGUALDAD";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[99]= new Array();
 choices[99][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[99][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[99][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[99][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[99] = choices[99][3];
 units[99] = "47";
 comments[99] = "Id Pregunta: 10675. Inscripci&oacute;n autom&aacute;tica nacimientos";


