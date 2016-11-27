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

//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[0]= "1)  El Presupuesto por programas sirve para saber...";
 choices[0]= new Array();
 choices[0][0] = "En qu&eacute; nos gastamos el dinero";
 choices[0][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[0][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[0][3] = "Qui&eacute;n se gasta el dinero";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[1]= "2)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[1]= new Array();
 choices[1][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[1][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[1][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[1][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[1] = choices[1][2];
 units[1] = "43";
 comments[1] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[2]= "3)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[2]= new Array();
 choices[2][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[2][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[2][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[2][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[2] = choices[2][1];
 units[2] = "48";
 comments[2] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[3]= "4)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[3]= new Array();
 choices[3][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[3][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[3][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[3][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[3] = choices[3][0];
 units[3] = "31";
 comments[3] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[4]= "5)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[4]= new Array();
 choices[4][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[4][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[4][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[4][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[5]= "6)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[5]= new Array();
 choices[5][0] = "Los cr&eacute;ditos";
 choices[5][1] = "Las partidas presupuestarias";
 choices[5][2] = "Los derechos";
 choices[5][3] = "Las obligaciones";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[6]= new Array();
 choices[6][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[6][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[6][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[6][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[7]= "8)  En las Administraciones P&uacute;blicas...";
 choices[7]= new Array();
 choices[7][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[7][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[7][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[7][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[8]= "9)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[8]= new Array();
 choices[8][0] = "Cuatro millones de euros.";
 choices[8][1] = "Seis millones de euros.";
 choices[8][2] = "Siete millones de euros.";
 choices[8][3] = "Cinco millones de euros.";
 answers[8] = choices[8][1];
 units[8] = "10";
 comments[8] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[9]= "10)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[9]= new Array();
 choices[9][0] = "Cifrado de las comunicaciones";
 choices[9][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[9][2] = "Registro de los accesos";
 choices[9][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[9] = choices[9][1];
 units[9] = "35";
 comments[9] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[10]= "11)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[10]= new Array();
 choices[10][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[10][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[10][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[10][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[10] = choices[10][1];
 units[10] = "22";
 comments[10] = "Id Pregunta: 711. Portal de Transparencia";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[11]= "12)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[11]= new Array();
 choices[11][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[11][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[11][2] = "El Presidente del Gobierno";
 choices[11][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[11] = choices[11][1];
 units[11] = "26";
 comments[11] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[12]= "13)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[12]= new Array();
 choices[12][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[12][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[12][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[12][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[12] = choices[12][0];
 units[12] = "12";
 comments[12] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[13]= "14)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[13]= new Array();
 choices[13][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[13][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[13][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[13][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[13] = choices[13][2];
 units[13] = "22";
 comments[13] = "Id Pregunta: 128. ";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[14]= new Array();
 choices[14][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[14][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[14][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[14][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[14] = choices[14][2];
 units[14] = "43";
 comments[14] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[15]= "16)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[15][1] = "Las inversiones reales y financieras.";
 choices[15][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[15][3] = "Las transferencias de capital y las inversiones reales.";
 answers[15] = choices[15][3];
 units[15] = "10";
 comments[15] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[16]= new Array();
 choices[16][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[16][1] = "El responsable de la custodia de los datos enviados.";
 choices[16][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[16][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[16] = choices[16][3];
 units[16] = "35";
 comments[16] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[17][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[17][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[17][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[17] = choices[17][1];
 units[17] = "22";
 comments[17] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[18]= new Array();
 choices[18][0] = "Dos Cap&iacute;tulos.";
 choices[18][1] = "Tres Cap&iacute;tulos.";
 choices[18][2] = "Un Cap&iacute;tulo.";
 choices[18][3] = "Cuatro Cap&iacute;tulos.";
 answers[18] = choices[18][1];
 units[18] = "1";
 comments[18] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[19]= "20)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[19]= new Array();
 choices[19][0] = "En sentencias switch para alterar el control de flujo.";
 choices[19][1] = "Para manejar excepciones.";
 choices[19][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[19][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[19] = choices[19][1];
 units[19] = "64";
 comments[19] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la respuesta correcta:";
 choices[20]= new Array();
 choices[20][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[20][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[20][2] = "Las respuestas A y B son correctas.";
 choices[20][3] = "Las respuestas A y B son falsas.";
 answers[20] = choices[20][2];
 units[20] = "5";
 comments[20] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[21]= "22)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Medidas de igualdad.";
 choices[21][1] = "Objetivos de igualdad.";
 choices[21][2] = "Ambas son correctas.";
 choices[21][3] = "A y B son incorrectas.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[22]= "23)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[22]= new Array();
 choices[22][0] = "En qu&eacute; nos gastamos el dinero";
 choices[22][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[22][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[22][3] = "Qui&eacute;n se gasta el dinero.";
 answers[22] = choices[22][0];
 units[22] = "10";
 comments[22] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[23]= new Array();
 choices[23][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[23][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[23][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[23][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[23] = choices[23][0];
 units[23] = "19";
 comments[23] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[24]= "25)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[24]= new Array();
 choices[24][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[24][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[24][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[24][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[24] = choices[24][1];
 units[24] = "63";
 comments[24] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[25]= "26)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[25]= new Array();
 choices[25][0] = "Al Gobierno.";
 choices[25][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[25][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[25][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[25] = choices[25][2];
 units[25] = "10";
 comments[25] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[26]= new Array();
 choices[26][0] = "De los derechos y deberes fundamentales.";
 choices[26][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[26][2] = "Derechos y libertades.";
 choices[26][3] = "De la Corona.";
 answers[26] = choices[26][1];
 units[26] = "1";
 comments[26] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[27]= "28)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[27]= new Array();
 choices[27][0] = "Con el a&ntilde;o anterior.";
 choices[27][1] = "Con los tres a&ntilde;os anteriores.";
 choices[27][2] = "Con el a&ntilde;o natural.";
 choices[27][3] = "Con los dos a&ntilde;os anteriores.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[28]= "29)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[28]= new Array();
 choices[28][0] = "Un recurso de incumplimiento.";
 choices[28][1] = "Recurso de carencia.";
 choices[28][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[28][3] = "Ninguna es correcta.";
 answers[28] = choices[28][2];
 units[28] = "5";
 comments[28] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[29]= new Array();
 choices[29][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[29][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[29][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[29][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[29] = choices[29][0];
 units[29] = "89";
 comments[29] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[30]= "31)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[30]= new Array();
 choices[30][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[30][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[30][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[30][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[30] = choices[30][3];
 units[30] = "10";
 comments[30] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[31]= new Array();
 choices[31][0] = "El Parlamento y el Consejo.";
 choices[31][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[31][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[31][3] = "La Comisi&oacute;n y el Consejo.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[32]= "33)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[32]= new Array();
 choices[32][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[32][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[32][2] = "Gestionar el Registro de Operadores.";
 choices[32][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[32] = choices[32][3];
 units[32] = "121";
 comments[32] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale la respuesta falsa:";
 choices[33]= new Array();
 choices[33][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[33][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[33][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[33][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[34]= "35)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[34]= new Array();
 choices[34][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[34][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[34][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[34][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[34] = choices[34][0];
 units[34] = "35";
 comments[34] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[35]= "36)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[35]= new Array();
 choices[35][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[35][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[35][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[35][3] = "Todas son correctas.";
 answers[35] = choices[35][1];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[36]= "37)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[36]= new Array();
 choices[36][0] = "El Segundo.";
 choices[36][1] = "El Primero.";
 choices[36][2] = "El Preliminar.";
 choices[36][3] = "El Tercero.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[37]= new Array();
 choices[37][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[37][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[37][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[37][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[37] = choices[37][3];
 units[37] = "46";
 comments[37] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[38]= "39)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[38]= new Array();
 choices[38][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[38][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[38][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[38][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[39]= new Array();
 choices[39][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[39][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[39][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[39][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[40]= new Array();
 choices[40][0] = "10 d&iacute;as.";
 choices[40][1] = "15 d&iacute;as.";
 choices[40][2] = "1 mes.";
 choices[40][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[40] = choices[40][0];
 units[40] = "7";
 comments[40] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[41]= "42)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[41][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[41][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[41][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[41] = choices[41][0];
 units[41] = "45";
 comments[41] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[42]= "43)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[42]= new Array();
 choices[42][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[42][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[42][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[42][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[43]= new Array();
 choices[43][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[43][1] = "La Direcci&oacute;n de la Competencia.";
 choices[43][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[43][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[43] = choices[43][0];
 units[43] = "121";
 comments[43] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[44]= "45)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[44]= new Array();
 choices[44][0] = "Estrasburgo.";
 choices[44][1] = "Bruselas.";
 choices[44][2] = "Luxemburgo.";
 choices[44][3] = "Holanda.";
 answers[44] = choices[44][2];
 units[44] = "5";
 comments[44] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[45]= new Array();
 choices[45][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[45][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[45][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[45][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[45] = choices[45][1];
 units[45] = "101";
 comments[45] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[46]= "47)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[46]= new Array();
 choices[46][0] = "Interoperabilidad";
 choices[46][1] = "Integridad";
 choices[46][2] = "Capital humano";
 choices[46][3] = "Trazabilidad";
 answers[46] = choices[46][2];
 units[46] = "19";
 comments[46] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[47]= "48)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[47]= new Array();
 choices[47][0] = "192.228.0.0";
 choices[47][1] = "192.228.8.0";
 choices[47][2] = "192.228.16.0";
 choices[47][3] = "192.228.17.0";
 answers[47] = choices[47][2];
 units[47] = "109";
 comments[47] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[48]= "49)  Sobre el Plan Juncker:";
 choices[48]= new Array();
 choices[48][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[48][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[48][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[48][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[48] = choices[48][1];
 units[48] = "5";
 comments[48] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[49]= "50)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[49]= new Array();
 choices[49][0] = "l Consejo General del Poder Judicial";
 choices[49][1] = "El pleno de Tribunal Constitucional";
 choices[49][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[49][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[49] = choices[49][3];
 units[49] = "1";
 comments[49] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[50]= new Array();
 choices[50][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[50][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[50][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[50][3] = "Todos los anteriores";
 answers[50] = choices[50][3];
 units[50] = "19";
 comments[50] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[51]= "52)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[51]= new Array();
 choices[51][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[51][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[51][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[51][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[51] = choices[51][3];
 units[51] = "26";
 comments[51] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[52]= new Array();
 choices[52][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[52][1] = "De nivel alto.";
 choices[52][2] = "De nivel medio y nivel alto.";
 choices[52][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[52] = choices[52][3];
 units[52] = "35";
 comments[52] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[53]= new Array();
 choices[53][0] = "Art&iacute;culo 14 CE.";
 choices[53][1] = "Art&iacute;culo 9.2 CE.";
 choices[53][2] = "Art&iacute;culo 9.1 CE.";
 choices[53][3] = "Art&iacute;culo 13 CE.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[54]= "55)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[54]= new Array();
 choices[54][0] = "P&uacute;blica.";
 choices[54][1] = "Privada.";
 choices[54][2] = "A y B son correctas.";
 choices[54][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[54] = choices[54][2];
 units[54] = "14";
 comments[54] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[55]= new Array();
 choices[55][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[55][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[55][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[55][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[55] = choices[55][0];
 units[55] = "1";
 comments[55] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[56]= "57)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[56]= new Array();
 choices[56][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[56][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[56][2] = "Ambas son correctas.";
 choices[56][3] = "Ambas son incorrectas.";
 answers[56] = choices[56][0];
 units[56] = "14";
 comments[56] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[57]= "58)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[57]= new Array();
 choices[57][0] = "Presencia equilibrada.";
 choices[57][1] = "Presencia paritaria.";
 choices[57][2] = "Presencia consensuada.";
 choices[57][3] = "presencia horizontal.";
 answers[57] = choices[57][0];
 units[57] = "14";
 comments[57] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[58][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[58][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[58][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[58] = choices[58][0];
 units[58] = "45";
 comments[58] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[59]= new Array();
 choices[59][0] = "Ley 3/2015";
 choices[59][1] = "Ley 6/2007";
 choices[59][2] = "Ley 5/1984";
 choices[59][3] = "Ley 5/2006";
 answers[59] = choices[59][0];
 units[59] = "22";
 comments[59] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[60]= "61)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[60]= new Array();
 choices[60][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[60][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[60][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[60][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[60] = choices[60][2];
 units[60] = "27";
 comments[60] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[61]= "62)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[61]= new Array();
 choices[61][0] = "Interchange of Data between Administrations (IDA)";
 choices[61][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[61][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[61][3] = "Interoperability Electronic European Solution (IEES)";
 answers[61] = choices[61][1];
 units[61] = "43";
 comments[61] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[62]= "63)  Sobre el recurso de reposici&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[62][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[62][2] = "Ha desaparecido en la Ley 39/2015";
 choices[62][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[62] = choices[62][0];
 units[62] = "8";
 comments[62] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[63]= new Array();
 choices[63][0] = "Orientaci&oacute;n a objetos";
 choices[63][1] = "MapReduce";
 choices[63][2] = "Pipeline filtering";
 choices[63][3] = "Programaci&oacute;n funcional";
 answers[63] = choices[63][1];
 units[63] = "73";
 comments[63] = "Id Pregunta: 659. ";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[64]= "65)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[64]= new Array();
 choices[64][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[64][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[64][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[64][3] = "Todas son correctas.";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[65]= "66)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[65]= new Array();
 choices[65][0] = "Unidad de igualdad.";
 choices[65][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[65][2] = "Ninguna de las anteriores.";
 choices[65][3] = "A y B son correctas.";
 answers[65] = choices[65][1];
 units[65] = "14";
 comments[65] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[66]= "67)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[66]= new Array();
 choices[66][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[66][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[66][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[66][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[66] = choices[66][2];
 units[66] = "26";
 comments[66] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[67]= new Array();
 choices[67][0] = "Quince miembros.";
 choices[67][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[67][2] = "Los miembros que determine el Consejo.";
 choices[67][3] = "Un Presidente y quince miembros.";
 answers[67] = choices[67][1];
 units[67] = "5";
 comments[67] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[68]= "69)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[68]= new Array();
 choices[68][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[68][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[68][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[68][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[69]= new Array();
 choices[69][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[69][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[69][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[69][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[69] = choices[69][1];
 units[69] = "84";
 comments[69] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[70]= "71)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[70]= new Array();
 choices[70][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[70][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[70][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[70][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[70] = choices[70][0];
 units[70] = "101";
 comments[70] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[71]= new Array();
 choices[71][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[71][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[71][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[71][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[71] = choices[71][2];
 units[71] = "121";
 comments[71] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[72]= "73)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[72]= new Array();
 choices[72][0] = "Un plan de igualdad.";
 choices[72][1] = "Un informe de impacto de g&eacute;nero.";
 choices[72][2] = "Un programa de igualdad.";
 choices[72][3] = "Todas son correctas.";
 answers[72] = choices[72][1];
 units[72] = "14";
 comments[72] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[73]= "74)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[73]= new Array();
 choices[73][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[73][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[73][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[73][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[74]= new Array();
 choices[74][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[74][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[74][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[74][3] = "Ninguna de las anteriores.";
 answers[74] = choices[74][1];
 units[74] = "92";
 comments[74] = "Id Pregunta: 699. INTEGRACION CONTINUA";


