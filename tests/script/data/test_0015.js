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
var preguntaids = new Array();

//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[0]= new Array();
 choices[0][0] = "El Presidente del Senado";
 choices[0][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[0][2] = "El Presidente del Gobierno";
 choices[0][3] = "El Presidente de las Cortes Generales";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 265. CONSTITUCION1978";
 preguntaids[0] = 265


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[1]= new Array();
 choices[1][0] = "A la CETIC";
 choices[1][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[1][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[1][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[1] = choices[1][3];
 units[1] = "19";
 comments[1] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[1] = 582


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[2]= "3)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[2]= new Array();
 choices[2][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[2][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[2][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[2][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[2] = choices[2][2];
 units[2] = "57";
 comments[2] = "Id Pregunta: 641. Junta de Extremadura A1 2015";
 preguntaids[2] = 641


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[3]= new Array();
 choices[3][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[3][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[3][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[3][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[3] = choices[3][1];
 units[3] = "28";
 comments[3] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[3] = 734


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[4]= "5)  En qu&eacute; consiste el principio BASE:";
 choices[4]= new Array();
 choices[4][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[4][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[4][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[4][3] = "Todas las anteriores son falsas";
 answers[4] = choices[4][3];
 units[4] = "73";
 comments[4] = "Id Pregunta: 103. ";
 preguntaids[4] = 103


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[5]= "6)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[5][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[5][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[5][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 241. CONSTITUCION1978";
 preguntaids[5] = 241


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[6]= new Array();
 choices[6][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[6][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[6][2] = "Servicio de seguridad gestionada";
 choices[6][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[6] = choices[6][1];
 units[6] = "26";
 comments[6] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[6] = 58


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[7]= "8)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[7]= new Array();
 choices[7][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[7][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[7][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[7][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[7] = choices[7][0];
 units[7] = "7";
 comments[7] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[7] = 673


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[8]= new Array();
 choices[8][0] = "Al Consejo Europeo.";
 choices[8][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[8][2] = "A la Comisi&oacute;n Europea.";
 choices[8][3] = "Al Parlamento Europeo.";
 answers[8] = choices[8][2];
 units[8] = "5";
 comments[8] = "Id Pregunta: 320. UNION EUROPEA";
 preguntaids[8] = 320


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[9]= new Array();
 choices[9][0] = "La CETIC";
 choices[9][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[9][2] = "La DTIC";
 choices[9][3] = "El MHFP";
 answers[9] = choices[9][0];
 units[9] = "19";
 comments[9] = "Id Pregunta: 593. Estrategia TIC";
 preguntaids[9] = 593


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[10]= "11)  Es falso que:";
 choices[10]= new Array();
 choices[10][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[10][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[10][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[10][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[10] = choices[10][1];
 units[10] = "20";
 comments[10] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[10] = 752


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[11]= "12)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[11]= new Array();
 choices[11][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[11][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[11][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[11][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[11] = choices[11][2];
 units[11] = "101";
 comments[11] = "Id Pregunta: 60. AGE A1 2015";
 preguntaids[11] = 60


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[12]= new Array();
 choices[12][0] = "Bienalmente";
 choices[12][1] = "Anualmente";
 choices[12][2] = "Semestralmente";
 choices[12][3] = "Cada cuatro a&ntilde;os";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[12] = 586


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[13]= "14)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[13]= new Array();
 choices[13][0] = "Tres a&ntilde;os.";
 choices[13][1] = "Dos a&ntilde;os y medio.";
 choices[13][2] = "Cinco a&ntilde;os.";
 choices[13][3] = "Seis a&ntilde;os.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[13] = 289


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[14]= "15)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[14]= new Array();
 choices[14][0] = "un art&iacute;culo";
 choices[14][1] = "dos art&iacute;culos";
 choices[14][2] = "tres art&iacute;culos";
 choices[14][3] = "cuatro art&iacute;culos";
 answers[14] = choices[14][1];
 units[14] = "7";
 comments[14] = "Id Pregunta: 521. LEY 39/2015";
 preguntaids[14] = 521


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[15]= new Array();
 choices[15][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[15][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[15][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[15][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[15] = choices[15][2];
 units[15] = "43";
 comments[15] = "Id Pregunta: 445. SERVICIOS COMUNES";
 preguntaids[15] = 445


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[16]= "17)  El sector p&uacute;blico institucional se integra por:";
 choices[16]= new Array();
 choices[16][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[16][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[16][2] = "las Universidades p&uacute;blicas";
 choices[16][3] = "todas son correctas";
 answers[16] = choices[16][3];
 units[16] = "7";
 comments[16] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[16] = 516


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[17]= "18)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[17]= new Array();
 choices[17][0] = "la Administraci&oacute;n General del Estado";
 choices[17][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[17][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[17][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[17] = choices[17][3];
 units[17] = "7";
 comments[17] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[17] = 519


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[18]= "19)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[18]= new Array();
 choices[18][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[18][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[18][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[18][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[18] = choices[18][2];
 units[18] = "57";
 comments[18] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[18] = 638


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[19]= new Array();
 choices[19][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[19][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[19][2] = "c) Todas las respuestas son correctas.";
 choices[19][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 358. UNION EUROPEA";
 preguntaids[19] = 358


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[20]= "21)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[20]= new Array();
 choices[20][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[20][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[20][2] = "Ambas son correctas.";
 choices[20][3] = "A y B son incorrectas.";
 answers[20] = choices[20][2];
 units[20] = "14";
 comments[20] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[20] = 401


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[21]= "22)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[21]= new Array();
 choices[21][0] = "Discriminaci&oacute;n indirecta.";
 choices[21][1] = "Discriminaci&oacute;n directa.";
 choices[21][2] = "Discriminaci&oacute;n por maternidad.";
 choices[21][3] = "Discriminaci&oacute;n abusiva.";
 answers[21] = choices[21][1];
 units[21] = "14";
 comments[21] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[21] = 395


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[22]= "23)  La recusaci&oacute;n pueden promoverla...";
 choices[22]= new Array();
 choices[22][0] = "Cualquier &oacute;rgano";
 choices[22][1] = "El interesado";
 choices[22][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[22][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[22] = 828


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[23]= "24)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[23]= new Array();
 choices[23][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[23][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[23][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[23][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[23] = 316


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[24]= "25)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[24]= new Array();
 choices[24][0] = "en cada Comunidad Aut&oacute;noma";
 choices[24][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[24][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[24][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[24] = 815


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[25]= "26)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[25]= new Array();
 choices[25][0] = "A nivel de art&iacute;culo.";
 choices[25][1] = "A nivel de cap&iacute;tulo.";
 choices[25][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[25][3] = "A nivel de concepto.";
 answers[25] = choices[25][2];
 units[25] = "10";
 comments[25] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[25] = 481


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[26]= new Array();
 choices[26][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[26][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[26][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[26][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[26] = choices[26][3];
 units[26] = "57";
 comments[26] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[26] = 640


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[27]= new Array();
 choices[27][0] = "Por reembolso de pr&eacute;stamos.";
 choices[27][1] = "Por la venta de bienes.";
 choices[27][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[27][3] = "Por prestaci&oacute;n de servicios.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";
 preguntaids[27] = 496


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[28]= "29)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[28]= new Array();
 choices[28][0] = "Los cr&eacute;ditos";
 choices[28][1] = "Las partidas presupuestarias";
 choices[28][2] = "Los derechos";
 choices[28][3] = "Las obligaciones";
 answers[28] = choices[28][3];
 units[28] = "10";
 comments[28] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[28] = 454


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[29]= new Array();
 choices[29][0] = "Las sociedades mercantiles estatales.";
 choices[29][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[29][2] = "Las respuestas a) y b) son correctas.";
 choices[29][3] = "Las respuestas a) y b) no son correctas.";
 answers[29] = choices[29][2];
 units[29] = "10";
 comments[29] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[29] = 503


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[30]= "31)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[30]= new Array();
 choices[30][0] = "El Delegado del Gobierno.";
 choices[30][1] = "El Subdelegado del Gobierno.";
 choices[30][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[30][3] = "El Gobernador Civil.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[30] = 207


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[31]= "32)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[31]= new Array();
 choices[31][0] = "IANA";
 choices[31][1] = "ISOC";
 choices[31][2] = "IETF";
 choices[31][3] = "IAB";
 answers[31] = choices[31][0];
 units[31] = "103";
 comments[31] = "Id Pregunta: 67. AGE A1 2015";
 preguntaids[31] = 67


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[32]= new Array();
 choices[32][0] = "Eric Ries";
 choices[32][1] = "Steve Blank";
 choices[32][2] = "Tom Poppendieck";
 choices[32][3] = "Alexander Osterwalder";
 answers[32] = choices[32][2];
 units[32] = "34";
 comments[32] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[32] = 720


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[33]= new Array();
 choices[33][0] = "De 1 a  4 ";
 choices[33][1] = "De 3 a  7 ";
 choices[33][2] = "De 5 a  9";
 choices[33][3] = "De 7 a 11";
 answers[33] = choices[33][2];
 units[33] = "34, 84";
 comments[33] = "Id Pregunta: 728. Metodologias &aacute;giles";
 preguntaids[33] = 728


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[34]= new Array();
 choices[34][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[34][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[34][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[34][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[34] = choices[34][0];
 units[34] = "19";
 comments[34] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[34] = 589


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[35]= "36)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[35]= new Array();
 choices[35][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[35][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[35][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[35][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[35] = choices[35][0];
 units[35] = "14";
 comments[35] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";
 preguntaids[35] = 396


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[36]= "37)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[36]= new Array();
 choices[36][0] = "Ley org&aacute;nica.";
 choices[36][1] = "Ley ordinaria.";
 choices[36][2] = "Ley de bases.";
 choices[36][3] = "Ley marco.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[36] = 271


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[37]= "38)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[37]= new Array();
 choices[37][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[37][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[37][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[37][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[37] = choices[37][3];
 units[37] = "77";
 comments[37] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[37] = 48


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[38]= "39)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[38]= new Array();
 choices[38][0] = "El Presidente del Congreso de los Diputados.";
 choices[38][1] = "El Presidente del Gobierno.";
 choices[38][2] = "El Rey.";
 choices[38][3] = "El Consejo de Ministros.";
 answers[38] = choices[38][0];
 units[38] = "1";
 comments[38] = "Id Pregunta: 231. CONSTITUCION1978";
 preguntaids[38] = 231


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[39]= new Array();
 choices[39][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[39][1] = "Todas las respuestas son correctas.";
 choices[39][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[39][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[39] = choices[39][1];
 units[39] = "10";
 comments[39] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";
 preguntaids[39] = 476


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[40]= "41)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[40]= new Array();
 choices[40][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[40][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[40][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[40][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[40] = choices[40][2];
 units[40] = "73";
 comments[40] = "Id Pregunta: 654. ";
 preguntaids[40] = 654


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[41]= "42)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[41]= new Array();
 choices[41][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[41][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[41][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[41][3] = "Todas son correctas.";
 answers[41] = choices[41][3];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[41] = 834


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[42]= new Array();
 choices[42][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[42][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[42][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[42][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[42] = 239


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[43]= new Array();
 choices[43][0] = "Car&aacute;cter sustitutivo";
 choices[43][1] = "Car&aacute;cter obligatorio";
 choices[43][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][3];
 units[43] = "19";
 comments[43] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[43] = 583


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[44]= "45)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[44]= new Array();
 choices[44][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[44][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[44][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[44][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[44] = choices[44][3];
 units[44] = "10";
 comments[44] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[44] = 510


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[45]= new Array();
 choices[45][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[45][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[45][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[45][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[45] = choices[45][1];
 units[45] = "43";
 comments[45] = "Id Pregunta: 441. SERVICIOS COMUNES";
 preguntaids[45] = 441


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[46]= new Array();
 choices[46][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[46][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[46][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[46][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[46] = choices[46][0];
 units[46] = "19";
 comments[46] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[46] = 559


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[47]= "48)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[47]= new Array();
 choices[47][0] = "X.";
 choices[47][1] = "XIX.";
 choices[47][2] = "XV.";
 choices[47][3] = "XIII.";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 327. UNION EUROPEA";
 preguntaids[47] = 327


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[48]= "49)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[48]= new Array();
 choices[48][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[48][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[48][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[48][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[48] = 524


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[49][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[49][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[49][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[49] = choices[49][3];
 units[49] = "44";
 comments[49] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[49] = 17


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[50]= "51)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[50]= new Array();
 choices[50][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[50][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[50][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[50][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[50] = 782


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[51]= "52)  WS-Security contiene especificaciones sobre:";
 choices[51]= new Array();
 choices[51][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[51][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[51][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[51][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[51] = choices[51][1];
 units[51] = "119";
 comments[51] = "Id Pregunta: 55. AGE A1 2015";
 preguntaids[51] = 55


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[52]= "53)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[52]= new Array();
 choices[52][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[52][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[52][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[52][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[52] = choices[52][1];
 units[52] = "26";
 comments[52] = "Id Pregunta: 22. AGE A1 2015";
 preguntaids[52] = 22


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[53]= "54)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[53]= new Array();
 choices[53][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[53][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[53][2] = "El Presidente del Gobierno";
 choices[53][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[53] = choices[53][1];
 units[53] = "26";
 comments[53] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[53] = 551


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[54]= "55)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[54][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[54][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[54][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[54] = choices[54][3];
 units[54] = "22";
 comments[54] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[54] = 712


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[55]= "56)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[55]= new Array();
 choices[55][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[55][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[55][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[55][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[55] = choices[55][1];
 units[55] = "74";
 comments[55] = "Id Pregunta: 45. AGE A1 2015";
 preguntaids[55] = 45


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[56]= "57)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[56]= new Array();
 choices[56][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[56][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[56][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[56][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[56] = choices[56][2];
 units[56] = "43";
 comments[56] = "Id Pregunta: 435. SERVICIOS COMUNES";
 preguntaids[56] = 435


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[57]= new Array();
 choices[57][0] = "DoS";
 choices[57][1] = "Phishing";
 choices[57][2] = "Sniffing";
 choices[57][3] = "Spoofing";
 answers[57] = choices[57][3];
 units[57] = "119";
 comments[57] = "Id Pregunta: 54. AGE A1 2015";
 preguntaids[57] = 54


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[58]= new Array();
 choices[58][0] = "Crecimiento sostenible";
 choices[58][1] = "Crecimiento inteligente";
 choices[58][2] = "Crecimiento digital";
 choices[58][3] = "Crecimiento integrador";
 answers[58] = choices[58][2];
 units[58] = "19";
 comments[58] = "Id Pregunta: 759. Europa 2020";
 preguntaids[58] = 759


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[59]= new Array();
 choices[59][0] = "Orientaci&oacute;n a objetos";
 choices[59][1] = "MapReduce";
 choices[59][2] = "Pipeline filtering";
 choices[59][3] = "Programaci&oacute;n funcional";
 answers[59] = choices[59][1];
 units[59] = "73";
 comments[59] = "Id Pregunta: 661. ";
 preguntaids[59] = 661


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[60]= "61)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[60]= new Array();
 choices[60][0] = "La Ley Org&aacute;nica 2/2011";
 choices[60][1] = "La Ley Org&aacute;nica 2/2012";
 choices[60][2] = "La Ley Org&aacute;nica 3/2012";
 choices[60][3] = "La Ley Org&aacute;nica 2/2002";
 answers[60] = choices[60][1];
 units[60] = "12";
 comments[60] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[60] = 138


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[61]= new Array();
 choices[61][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[61][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[61][2] = "Todas son correctas.";
 choices[61][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[61] = choices[61][2];
 units[61] = "5";
 comments[61] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[61] = 330


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[62]= new Array();
 choices[62][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[62][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[62][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[62][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[62] = choices[62][0];
 units[62] = "77";
 comments[62] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[62] = 685


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[63]= new Array();
 choices[63][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[63][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[63][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[63][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[63] = choices[63][1];
 units[63] = "89";
 comments[63] = "Id Pregunta: 621. Junta de Extremadura A1 2015";
 preguntaids[63] = 621


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[64]= "65)  En el sistema operativo Unix/Linux, el comando id:";
 choices[64]= new Array();
 choices[64][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[64][1] = "El comando id no existe.";
 choices[64][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[64][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[64] = choices[64][0];
 units[64] = "57";
 comments[64] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[64] = 639


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[65]= new Array();
 choices[65][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[65][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[65][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[65][3] = "Todos los anteriores";
 answers[65] = choices[65][3];
 units[65] = "19";
 comments[65] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[65] = 592


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[66]= "67)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Principio de transparencia.";
 choices[66][1] = "Principio de cooperaci&oacute;n.";
 choices[66][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[66][3] = "Principio de lealtad institucional.";
 answers[66] = choices[66][1];
 units[66] = "10";
 comments[66] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[66] = 504


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[67]= new Array();
 choices[67][0] = "Lean startup";
 choices[67][1] = "Business Model Canvas";
 choices[67][2] = "Dynamic system Development method";
 choices[67][3] = "Lean software development";
 answers[67] = choices[67][2];
 units[67] = "34";
 comments[67] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[67] = 722


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[68]= new Array();
 choices[68][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[68][1] = "Implantar el mercado general europeo";
 choices[68][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[68][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[68] = choices[68][1];
 units[68] = "19";
 comments[68] = "Id Pregunta: 758. Agenda Digital Europea";
 preguntaids[68] = 758


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[69]= "70)  En el lenguaje de modelado UML :";
 choices[69]= new Array();
 choices[69][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[69][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[69][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[69][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[69] = choices[69][2];
 units[69] = "89";
 comments[69] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[69] = 3


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[70]= new Array();
 choices[70][0] = "La CETIC";
 choices[70][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[70][2] = "La DTIC";
 choices[70][3] = "Ninguno de los anteriores";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[70] = 587


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[71]= "72)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[71]= new Array();
 choices[71][0] = "Consejos y Servicios.";
 choices[71][1] = "Servicios permanentes y no permanentes.";
 choices[71][2] = "Direcciones Generales.";
 choices[71][3] = "Direcciones ministeriales.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 318. UNION EUROPEA";
 preguntaids[71] = 318


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[72]= "73)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[72]= new Array();
 choices[72][0] = "formular solicitudes";
 choices[72][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[72][2] = "presentar declaraciones responsables o comunicaciones";
 choices[72][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[72] = 531


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[73]= "74)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[73]= new Array();
 choices[73][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[73][1] = "Personas con nacionalidad europea.";
 choices[73][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[73][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 376. UNION EUROPEA";
 preguntaids[73] = 376


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[74]= "75)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[74]= new Array();
 choices[74][0] = "Son actos normativos.";
 choices[74][1] = "Poseen alcance general.";
 choices[74][2] = "No son obligatorias.";
 choices[74][3] = "Son actos individuales no normativos.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 362. UNION EUROPEA";
 preguntaids[74] = 362


