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

//  Id pregunta: 10314 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[0]= new Array();
 choices[0][0] = "Al Consejo Europeo.";
 choices[0][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[0][2] = "A la Comisi&oacute;n Europea.";
 choices[0][3] = "Al Parlamento Europeo.";
 answers[0] = choices[0][2];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10138 Año de creación de pregunta: 2016
 questions[1]= "2)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[1]= new Array();
 choices[1][0] = "La Ley Org&aacute;nica 2/2011";
 choices[1][1] = "La Ley Org&aacute;nica 2/2012";
 choices[1][2] = "La Ley Org&aacute;nica 3/2012";
 choices[1][3] = "La Ley Org&aacute;nica 2/2002";
 answers[1] = choices[1][1];
 units[1] = "12";
 comments[1] = "Id Pregunta: 10138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10455 Año de creación de pregunta: 2016
 questions[2]= "3)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[2]= new Array();
 choices[2][0] = "En qu&eacute; nos gastamos el dinero";
 choices[2][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[2][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[2][3] = "Qui&eacute;n se gasta el dinero.";
 answers[2] = choices[2][0];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10654 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[3]= new Array();
 choices[3][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[3][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[3][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[3][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[3] = choices[3][0];
 units[3] = "73";
 comments[3] = "Id Pregunta: 10654. ";


//  Id pregunta: 10614 Año de creación de pregunta: 2016
 questions[4]= "5)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[4]= new Array();
 choices[4][0] = "192.228.0.0";
 choices[4][1] = "192.228.8.0";
 choices[4][2] = "192.228.16.0";
 choices[4][3] = "192.228.17.0";
 answers[4] = choices[4][2];
 units[4] = "109";
 comments[4] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10183 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[5]= new Array();
 choices[5][0] = "al menos por 50 Diputados.";
 choices[5][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[5][2] = "por la Mesa del Congreso de los Diputados.";
 choices[5][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 10183. CONSTITUCION1978";


//  Id pregunta: 10370 Año de creación de pregunta: 2016
 questions[6]= "7)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[6]= new Array();
 choices[6][0] = "Un recurso de incumplimiento.";
 choices[6][1] = "Recurso de carencia.";
 choices[6][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[6][3] = "Ninguna es correcta.";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10471 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Org&aacute;nica.";
 choices[7][1] = "Contable.";
 choices[7][2] = "Econ&oacute;mica.";
 choices[7][3] = "Por programas.";
 answers[7] = choices[7][2];
 units[7] = "10";
 comments[7] = "Id Pregunta: 10471. PRESUPUESTOS GENERALES";


//  Id pregunta: 10334 Año de creación de pregunta: 2016
 questions[8]= "9)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[8]= new Array();
 choices[8][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[8][1] = "Ninguna de las respuestas es correcta.";
 choices[8][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[8][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[8] = choices[8][0];
 units[8] = "5";
 comments[8] = "Id Pregunta: 10334. UNION EUROPEA";


//  Id pregunta: 10214 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[9]= new Array();
 choices[9][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[9][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[9][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[9][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10214. CONSTITUCION1978";


//  Id pregunta: 10396 Año de creación de pregunta: 2016
 questions[10]= "11)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[10]= new Array();
 choices[10][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[10][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[10][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[10][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[10] = choices[10][0];
 units[10] = "14";
 comments[10] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


//  Id pregunta: 10504 Año de creación de pregunta: 2016
 questions[11]= "12)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[11]= new Array();
 choices[11][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[11][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[11][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[11][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10460 Año de creación de pregunta: 2016
 questions[12]= "13)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[12]= new Array();
 choices[12][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[12][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[12][2] = "La normativa reguladora de cada derecho.";
 choices[12][3] = "Ley 50/1997, del Gobierno.";
 answers[12] = choices[12][2];
 units[12] = "10";
 comments[12] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10299 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[13]= new Array();
 choices[13][0] = "Quince miembros.";
 choices[13][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[13][2] = "Los miembros que determine el Consejo.";
 choices[13][3] = "Un Presidente y quince miembros.";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10299. UNION EUROPEA";


//  Id pregunta: 10680 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[14]= new Array();
 choices[14][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[14][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[14][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[14][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 10680. Pensiones";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[15]= new Array();
 choices[15][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[15][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[15][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[15][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[15] = choices[15][3];
 units[15] = "46";
 comments[15] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10405 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[16]= new Array();
 choices[16][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[16][1] = "Directiva 2004/113/CE del Consejo.";
 choices[16][2] = "Todas son correctas.";
 choices[16][3] = "Todas son falsas.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 10405. POLITICAS DE IGUALDAD";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[17]= "18)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[17]= new Array();
 choices[17][0] = "La Comisi&oacute;n.";
 choices[17][1] = "El Consejo de Europa.";
 choices[17][2] = "El Consejo Europeo.";
 choices[17][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[17] = choices[17][3];
 units[17] = "5";
 comments[17] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10440 Año de creación de pregunta: 2016
 questions[18]= "19)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[18]= new Array();
 choices[18][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[18][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[18][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[18][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[18] = choices[18][2];
 units[18] = "43";
 comments[18] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10233 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[19]= new Array();
 choices[19][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[19][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[19][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[19][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10145 Año de creación de pregunta: 2016
 questions[20]= "21)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[20][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[20][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[20][3] = "Todas las anteriores son ciertas";
 answers[20] = choices[20][3];
 units[20] = "8";
 comments[20] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10665 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, , la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[21][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[21][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[21][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[21] = choices[21][2];
 units[21] = "7";
 comments[21] = "Id Pregunta: 10665. Art&iacute;culo 70 de la Ley 39/2015";


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


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[23]= "24)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[23]= new Array();
 choices[23][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[23][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[23][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[23][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[23] = choices[23][2];
 units[23] = "43";
 comments[23] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[24]= new Array();
 choices[24][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[24][1] = "Pasivos financieros y transferencias de capital.";
 choices[24][2] = "Activos financieros y pasivos financieros.";
 choices[24][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10544 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[25]= new Array();
 choices[25][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[25][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[25][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[25][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[25] = choices[25][3];
 units[25] = "26";
 comments[25] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10282 Año de creación de pregunta: 2016
 questions[26]= "27)  Sobre el Plan Juncker:";
 choices[26]= new Array();
 choices[26][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[26][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[26][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[26][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10282. UNION EUROPEA";


//  Id pregunta: 10568 Año de creación de pregunta: 2016
 questions[27]= "28)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[27]= new Array();
 choices[27][0] = "Alrededor de un 26% del PIB";
 choices[27][1] = "Alrededor de un 11% del PIB";
 choices[27][2] = "Alrededor de un 34% del PIB";
 choices[27][3] = "Alrededor de un 7% del PIB";
 answers[27] = choices[27][1];
 units[27] = "12";
 comments[27] = "Id Pregunta: 10568. Modelo econ&oacute;mico";


//  Id pregunta: 10598 Año de creación de pregunta: 2016
 questions[28]= "29)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[28]= new Array();
 choices[28][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[28][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[28][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[28][3] = "Todas las respuestas anteriores son correctas.";
 answers[28] = choices[28][0];
 units[28] = "45";
 comments[28] = "Id Pregunta: 10598. Junta de Extremadura A1 2015";


//  Id pregunta: 10574 Año de creación de pregunta: 2016
 questions[29]= "30)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[29]= new Array();
 choices[29][0] = "Mercurial, Git y Apache Subversion.";
 choices[29][1] = "Gimp, Mercurial y Git.";
 choices[29][2] = "RedMine, Planner y OpenProj.";
 choices[29][3] = "Cassandra, Git y REDIS.";
 answers[29] = choices[29][0];
 units[29] = "92";
 comments[29] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10483 Año de creación de pregunta: 2016
 questions[30]= "31)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[30]= new Array();
 choices[30][0] = "180 art&iacute;culos.";
 choices[30][1] = "182 art&iacute;culos.";
 choices[30][2] = "185 art&iacute;culos.";
 choices[30][3] = "190 art&iacute;culos.";
 answers[30] = choices[30][1];
 units[30] = "10";
 comments[30] = "Id Pregunta: 10483. PRESUPUESTOS GENERALES";


//  Id pregunta: 10439 Año de creación de pregunta: 2016
 questions[31]= "32)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[31]= new Array();
 choices[31][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[31][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[31][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[31][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[31] = choices[31][1];
 units[31] = "43";
 comments[31] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10274 Año de creación de pregunta: 2016
 questions[32]= "33)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[32]= new Array();
 choices[32][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[32][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[32][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[32][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[32] = choices[32][3];
 units[32] = "22";
 comments[32] = "Id Pregunta: 10274. LEY DE TRANSPARENCIA";


//  Id pregunta: 10169 Año de creación de pregunta: 2016
 questions[33]= "34)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[33]= new Array();
 choices[33][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[33][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[33][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[33][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[33] = choices[33][1];
 units[33] = "19";
 comments[33] = "Id Pregunta: 10169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 10164 Año de creación de pregunta: 2016
 questions[34]= "35)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[34]= new Array();
 choices[34][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[34][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[34][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[34][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[34] = choices[34][1];
 units[34] = "19";
 comments[34] = "Id Pregunta: 10164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 10559 Año de creación de pregunta: 2016
 questions[35]= "36)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[35]= new Array();
 choices[35][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[35][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[35][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[35][3] = "Todos los anteriores";
 answers[35] = choices[35][3];
 units[35] = "19";
 comments[35] = "Id Pregunta: 10559. Agenda Digital";


//  Id pregunta: 10206 Año de creación de pregunta: 2016
 questions[36]= "37)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[36]= new Array();
 choices[36][0] = "El Gobierno.";
 choices[36][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[36][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[36][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10206. CONSTITUCION1978";


//  Id pregunta: 10670 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[37]= new Array();
 choices[37][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[37][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[37][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[37][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[37] = choices[37][1];
 units[37] = "7";
 comments[37] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10010 Año de creación de pregunta: 2016
 questions[38]= "39)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Paging";
 choices[38][1] = "Roaming";
 choices[38][2] = "Handover";
 choices[38][3] = "Trunking";
 answers[38] = choices[38][0];
 units[38] = "117";
 comments[38] = "Id Pregunta: 10010. AGE A1 2015";


//  Id pregunta: 10508 Año de creación de pregunta: 2016
 questions[39]= "40)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[39]= new Array();
 choices[39][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[39][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[39][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[39][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10508. PRESUPUESTOS GENERALES";


//  Id pregunta: 10582 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[40]= new Array();
 choices[40][0] = "El 5 de Octubre de 2015";
 choices[40][1] = "El 15 de Octubre de 2015";
 choices[40][2] = "El 15 de Septiembre de 2015";
 choices[40][3] = "El 2 de Octubre de 2015";
 answers[40] = choices[40][2];
 units[40] = "19";
 comments[40] = "Id Pregunta: 10582. Estrategia TIC";


//  Id pregunta: 10528 Año de creación de pregunta: 2016
 questions[41]= "42)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[41]= new Array();
 choices[41][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[41][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[41][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[41][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[41] = choices[41][3];
 units[41] = "7";
 comments[41] = "Id Pregunta: 10528. LEY 39/2015";


//  Id pregunta: 10451 Año de creación de pregunta: 2016
 questions[42]= "43)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[42]= new Array();
 choices[42][0] = "Los cr&eacute;ditos";
 choices[42][1] = "Las partidas presupuestarias";
 choices[42][2] = "Los derechos";
 choices[42][3] = "Las obligaciones";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 10451. PRESUPUESTOS GENERALES";


//  Id pregunta: 10542 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[43]= new Array();
 choices[43][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[43][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[43][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[43][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[43] = choices[43][0];
 units[43] = "26";
 comments[43] = "Id Pregunta: 10542. Gobernanza TIC";


//  Id pregunta: 10478 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[44]= new Array();
 choices[44][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[44][1] = "Intervenci&oacute;n formal y material.";
 choices[44][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[44][3] = "Intervenci&oacute;n formal y general.";
 answers[44] = choices[44][1];
 units[44] = "10";
 comments[44] = "Id Pregunta: 10478. PRESUPUESTOS GENERALES";


//  Id pregunta: 10098 Año de creación de pregunta: 2016
 questions[45]= "46)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Clustering";
 choices[45][1] = "Deduplicaci&oacute;n";
 choices[45][2] = "Virtualizaci&oacute;n";
 choices[45][3] = "Contenerizaci&oacute;n";
 answers[45] = choices[45][2];
 units[45] = "124";
 comments[45] = "Id Pregunta: 10098. AGE A1 2015";


//  Id pregunta: 10527 Año de creación de pregunta: 2016
 questions[46]= "47)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[46]= new Array();
 choices[46][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[46][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[46][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[46][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[46] = choices[46][2];
 units[46] = "7";
 comments[46] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[47]= new Array();
 choices[47][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[47][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[47][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[47][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[47] = choices[47][3];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10588 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "14";
 choices[48][1] = "11";
 choices[48][2] = "12";
 choices[48][3] = "15";
 answers[48] = choices[48][0];
 units[48] = "19";
 comments[48] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10345 Año de creación de pregunta: 2016
 questions[49]= "50)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[49]= new Array();
 choices[49][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[49][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[49][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[49][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 10345. UNION EUROPEA";


//  Id pregunta: 10147 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[50]= new Array();
 choices[50][0] = "Al Gobierno de la naci&oacute;n";
 choices[50][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[50][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[50][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 10147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 10086 Año de creación de pregunta: 2016
 questions[51]= "52)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[51]= new Array();
 choices[51][0] = "Un a&ntilde;o prorrogable";
 choices[51][1] = "Dos a&ntilde;os no prorrogables";
 choices[51][2] = "Un a&ntilde;o no prorrogable";
 choices[51][3] = "Dos a&ntilde;os prorrogables";
 answers[51] = choices[51][2];
 units[51] = "37";
 comments[51] = "Id Pregunta: 10086. AGE A1 2015";


//  Id pregunta: 10044 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[52][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[52][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[52][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[52] = choices[52][1];
 units[52] = "60";
 comments[52] = "Id Pregunta: 10044. AGE A1 2015";


//  Id pregunta: 10507 Año de creación de pregunta: 2016
 questions[53]= "54)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[53]= new Array();
 choices[53][0] = "Reducir el gasto p&uacute;blico.";
 choices[53][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[53][2] = "Reducir el endeudamiento neto.";
 choices[53][3] = "Al Fondo de Contingencia.";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10507. PRESUPUESTOS GENERALES";


//  Id pregunta: 10364 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[54]= new Array();
 choices[54][0] = "El 1 de junio de 1999.";
 choices[54][1] = "El 1 de mayo de 1999.";
 choices[54][2] = "El 1 de abril de 1999.";
 choices[54][3] = "El 1 de marzo de 1999.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 10364. UNION EUROPEA";


//  Id pregunta: 10325 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[55]= new Array();
 choices[55][0] = "Veinticinco.";
 choices[55][1] = "Veintiuno.";
 choices[55][2] = "Dieciocho.";
 choices[55][3] = "Diecinueve.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10304 Año de creación de pregunta: 2016
 questions[56]= "57)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[56]= new Array();
 choices[56][0] = "Cinco a&ntilde;os.";
 choices[56][1] = "Seis a&ntilde;os.";
 choices[56][2] = "Cuatro a&ntilde;os.";
 choices[56][3] = "Tres a&ntilde;os.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10304. UNION EUROPEA";


//  Id pregunta: 10456 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[57]= new Array();
 choices[57][0] = "a) Los cuatro ejercicios siguientes.";
 choices[57][1] = "b) El ejercicio siguiente.";
 choices[57][2] = "c) Los dos ejercicios siguientes.";
 choices[57][3] = "d) Los tres ejercicios siguientes.";
 answers[57] = choices[57][3];
 units[57] = "10";
 comments[57] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10081 Año de creación de pregunta: 2016
 questions[58]= "59)  El lenguaje SPARK es un subconjunto de:";
 choices[58]= new Array();
 choices[58][0] = "Java";
 choices[58][1] = "Fortran";
 choices[58][2] = "Ruby";
 choices[58][3] = "Ada";
 answers[58] = choices[58][3];
 units[58] = "73";
 comments[58] = "Id Pregunta: 10081. AGE A1 2015";


//  Id pregunta: 10027 Año de creación de pregunta: 2016
 questions[59]= "60)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[59]= new Array();
 choices[59][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[59][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[59][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[59][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 10027. AGE A1 2015";


//  Id pregunta: 10359 Año de creación de pregunta: 2016
 questions[60]= "61)  Los Reglamentos no se caracterizan por:";
 choices[60]= new Array();
 choices[60][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[60][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[60][2] = "Ser obligatorios.";
 choices[60][3] = "No poseer alcance general.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10359. UNION EUROPEA";


//  Id pregunta: 10166 Año de creación de pregunta: 2016
 questions[61]= "62)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[61]= new Array();
 choices[61][0] = "Interoperabilidad";
 choices[61][1] = "Integridad";
 choices[61][2] = "Capital humano";
 choices[61][3] = "Trazabilidad";
 answers[61] = choices[61][2];
 units[61] = "19";
 comments[61] = "Id Pregunta: 10166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 10562 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[62]= new Array();
 choices[62][0] = "Entre 1973 y 1978";
 choices[62][1] = "Entre 1992 y 1996";
 choices[62][2] = "Entre 1978 y 1985";
 choices[62][3] = "Entre 2008 y 2013";
 answers[62] = choices[62][2];
 units[62] = "12";
 comments[62] = "Id Pregunta: 10562. Modelo econ&oacute;mico";


//  Id pregunta: 10251 Año de creación de pregunta: 2016
 questions[63]= "64)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[63]= new Array();
 choices[63][0] = "Rey.";
 choices[63][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[63][2] = "Constituci&oacute;n.";
 choices[63][3] = "Pueblo.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 10251. CONSTITUCION1978";


//  Id pregunta: 10084 Año de creación de pregunta: 2016
 questions[64]= "65)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[64]= new Array();
 choices[64][0] = "Interchange of Data between Administrations (IDA)";
 choices[64][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[64][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[64][3] = "Interoperability Electronic European Solution (IEES)";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10580 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[65]= new Array();
 choices[65][0] = "A la CETIC";
 choices[65][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[65][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[65][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[65] = choices[65][3];
 units[65] = "19";
 comments[65] = "Id Pregunta: 10580. Estrategia TIC";


//  Id pregunta: 10275 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[66][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[66][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[66][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 10275. LEY DE TRANSPARENCIA";


//  Id pregunta: 10332 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[67]= new Array();
 choices[67][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[67][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[67][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[67][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[67] = choices[67][3];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10069 Año de creación de pregunta: 2016
 questions[68]= "69)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[68]= new Array();
 choices[68][0] = "Ejecuci&oacute;n";
 choices[68][1] = "Adjudicaci&oacute;n";
 choices[68][2] = "Licitaci&oacute;n";
 choices[68][3] = "Formalizaci&oacute;n";
 answers[68] = choices[68][3];
 units[68] = "37";
 comments[68] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10108 Año de creación de pregunta: 2016
 questions[69]= "70)  Son proyectos de Apache relacionados con Big Data:";
 choices[69]= new Array();
 choices[69][0] = "Hadoop";
 choices[69][1] = "Spark";
 choices[69][2] = "A) y B)";
 choices[69][3] = "Niguno de los anteriores";
 answers[69] = choices[69][2];
 units[69] = "73";
 comments[69] = "Id Pregunta: 10108. ";


//  Id pregunta: 10531 Año de creación de pregunta: 2016
 questions[70]= "71)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[70]= new Array();
 choices[70][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[70][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[70][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[70][3] = "todas son correctas";
 answers[70] = choices[70][3];
 units[70] = "7";
 comments[70] = "Id Pregunta: 10531. LEY 39/2015";


//  Id pregunta: 10563 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[71]= new Array();
 choices[71][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[71][1] = "Excesiva estabilidad de empleo";
 choices[71][2] = "An&eacute;mico crecimiento de la productividad";
 choices[71][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[71] = choices[71][1];
 units[71] = "12";
 comments[71] = "Id Pregunta: 10563. Modelo econ&oacute;mico";


//  Id pregunta: 10307 Año de creación de pregunta: 2016
 questions[72]= "73)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[72]= new Array();
 choices[72][0] = "Seis a&ntilde;os.";
 choices[72][1] = "Cinco a&ntilde;os.";
 choices[72][2] = "Cuatro a&ntilde;os.";
 choices[72][3] = "Ocho a&ntilde;os.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 10307. UNION EUROPEA";


//  Id pregunta: 10026 Año de creación de pregunta: 2016
 questions[73]= "74)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[73]= new Array();
 choices[73][0] = "Sello electr&oacute;nico";
 choices[73][1] = "Sede electr&oacute;nica";
 choices[73][2] = "Servidor seguro (SSL/TLS)";
 choices[73][3] = "Empleado p&uacute;blico";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 10026. AGE A1 2015";


//  Id pregunta: 10063 Año de creación de pregunta: 2016
 questions[74]= "75)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[74]= new Array();
 choices[74][0] = "Infrastructure as a Service (IaaS)";
 choices[74][1] = "Platform as a Service (PaaS)";
 choices[74][2] = "Software as a Service (SaaS)";
 choices[74][3] = "Application as a Service (AaaS)";
 answers[74] = choices[74][1];
 units[74] = "52";
 comments[74] = "Id Pregunta: 10063. AGE A1 2015";


