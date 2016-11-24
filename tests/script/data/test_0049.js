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

//  Id pregunta: 10476 Año de creación de pregunta: 2016
 questions[0]= "1)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[0]= new Array();
 choices[0][0] = "Al Gobierno.";
 choices[0][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[0][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[0][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[0] = choices[0][2];
 units[0] = "10";
 comments[0] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10653 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[1]= new Array();
 choices[1][0] = "Neo4J ";
 choices[1][1] = "OrientDB ";
 choices[1][2] = "InfoGrid ";
 choices[1][3] = "SimpleDB";
 answers[1] = choices[1][3];
 units[1] = "73";
 comments[1] = "Id Pregunta: 10653. ";


//  Id pregunta: 10431 Año de creación de pregunta: 2016
 questions[2]= "3)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[2]= new Array();
 choices[2][0] = "El Instituto de la Mujer.";
 choices[2][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[2][2] = "Ambas son correctas.";
 choices[2][3] = "A y B son incorrectas.";
 answers[2] = choices[2][2];
 units[2] = "14";
 comments[2] = "Id Pregunta: 10431. POLITICAS DE IGUALDAD";


//  Id pregunta: 10071 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[3]= new Array();
 choices[3][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[3][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[3][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[3][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[3] = choices[3][0];
 units[3] = "86";
 comments[3] = "Id Pregunta: 10071. AGE A1 2015";


//  Id pregunta: 10185 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[4]= new Array();
 choices[4][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[4][1] = "Autorizar indultos generales.";
 choices[4][2] = "Sancionar las leyes.";
 choices[4][3] = "Promulgar las leyes.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 10185. CONSTITUCION1978";


//  Id pregunta: 10401 Año de creación de pregunta: 2016
 questions[5]= "6)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[5]= new Array();
 choices[5][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[5][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[5][2] = "Ambas son correctas.";
 choices[5][3] = "A y B son incorrectas.";
 answers[5] = choices[5][2];
 units[5] = "14";
 comments[5] = "Id Pregunta: 10401. POLITICAS DE IGUALDAD";


//  Id pregunta: 10332 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[6]= new Array();
 choices[6][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[6][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[6][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[6][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[6] = choices[6][3];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10203 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[7]= new Array();
 choices[7][0] = "Ley Org&aacute;nica.";
 choices[7][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[7][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[7][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10203. CONSTITUCION1978";


//  Id pregunta: 10188 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[8]= new Array();
 choices[8][0] = "No, en ning&uacute;n caso.";
 choices[8][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[8][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[8][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[8] = choices[8][3];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10187 Año de creación de pregunta: 2016
 questions[9]= "10)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[9]= new Array();
 choices[9][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[9][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[9][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[9][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10187. CONSTITUCION1978";


//  Id pregunta: 10362 Año de creación de pregunta: 2016
 questions[10]= "11)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[10]= new Array();
 choices[10][0] = "Son actos normativos.";
 choices[10][1] = "Poseen alcance general.";
 choices[10][2] = "No son obligatorias.";
 choices[10][3] = "Son actos individuales no normativos.";
 answers[10] = choices[10][3];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10107 Año de creación de pregunta: 2016
 questions[11]= "12)  Son bases de datos NoSQL orientadas a objetos:";
 choices[11]= new Array();
 choices[11][0] = "GemStone";
 choices[11][1] = "Zope Object DB";
 choices[11][2] = "Las dos anteriores";
 choices[11][3] = "Solo B)";
 answers[11] = choices[11][2];
 units[11] = "73";
 comments[11] = "Id Pregunta: 10107. ";


//  Id pregunta: 10181 Año de creación de pregunta: 2016
 questions[12]= "13)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[12]= new Array();
 choices[12][0] = "l Consejo General del Poder Judicial";
 choices[12][1] = "El pleno de Tribunal Constitucional";
 choices[12][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[12][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10181. CONSTITUCION1978";


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


//  Id pregunta: 10494 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[14]= new Array();
 choices[14][0] = "Por reembolso de pr&eacute;stamos.";
 choices[14][1] = "Por la venta de bienes.";
 choices[14][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[14][3] = "Por prestaci&oacute;n de servicios.";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 10494. PRESUPUESTOS GENERALES";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[15]= new Array();
 choices[15][0] = "Yarn";
 choices[15][1] = "Flume";
 choices[15][2] = "Hive";
 choices[15][3] = "BizAgi";
 answers[15] = choices[15][3];
 units[15] = "73";
 comments[15] = "Id Pregunta: 10655. ";


//  Id pregunta: 10403 Año de creación de pregunta: 2016
 questions[16]= "17)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[16]= new Array();
 choices[16][0] = "Medidas de igualdad.";
 choices[16][1] = "Objetivos de igualdad.";
 choices[16][2] = "Ambas son correctas.";
 choices[16][3] = "A y B son incorrectas.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 10403. POLITICAS DE IGUALDAD";


//  Id pregunta: 10671 Año de creación de pregunta: 2016
 questions[17]= "18)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[17]= new Array();
 choices[17][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[17][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[17][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[17][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[17] = choices[17][0];
 units[17] = "7";
 comments[17] = "Id Pregunta: 10671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10259 Año de creación de pregunta: 2016
 questions[18]= "19)  La iniciativa legislativa corresponde:";
 choices[18]= new Array();
 choices[18][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[18][1] = "Al rey y al Gobierno.";
 choices[18][2] = "Al Congreso, al Senado y al Rey.";
 choices[18][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[18] = choices[18][3];
 units[18] = "1";
 comments[18] = "Id Pregunta: 10259. CONSTITUCION1978";


//  Id pregunta: 10042 Año de creación de pregunta: 2016
 questions[19]= "20)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[19]= new Array();
 choices[19][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[19][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[19][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[19][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[19] = choices[19][3];
 units[19] = "86";
 comments[19] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10361 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[20]= new Array();
 choices[20][0] = "El Consejo Europeo.";
 choices[20][1] = "El Parlamento Europeo.";
 choices[20][2] = "El Consejo.";
 choices[20][3] = "La Comisi&oacute;n.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10361. UNION EUROPEA";


//  Id pregunta: 10017 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[21]= new Array();
 choices[21][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[21][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[21][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[21][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[21] = choices[21][3];
 units[21] = "44";
 comments[21] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10065 Año de creación de pregunta: 2016
 questions[22]= "23)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[22]= new Array();
 choices[22][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[22][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[22][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[22][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[22] = choices[22][2];
 units[22] = "53";
 comments[22] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10432 Año de creación de pregunta: 2016
 questions[23]= "24)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[23]= new Array();
 choices[23][0] = "De ocho a&ntilde;os.";
 choices[23][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[23][2] = "Ambas son correctas.";
 choices[23][3] = "No existe un l&iacute;mite.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10396 Año de creación de pregunta: 2016
 questions[24]= "25)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[24]= new Array();
 choices[24][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[24][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[24][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[24][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[24] = choices[24][0];
 units[24] = "14";
 comments[24] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


//  Id pregunta: 10436 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[25]= new Array();
 choices[25][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[25][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[25][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[25][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[25] = choices[25][2];
 units[25] = "43";
 comments[25] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10060 Año de creación de pregunta: 2016
 questions[26]= "27)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[26]= new Array();
 choices[26][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[26][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[26][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[26][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[26] = choices[26][2];
 units[26] = "101";
 comments[26] = "Id Pregunta: 10060. AGE A1 2015";


//  Id pregunta: 10445 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[27]= new Array();
 choices[27][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[27][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[27][2] = "Fecha de otorgamiento.";
 choices[27][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[27] = choices[27][1];
 units[27] = "43";
 comments[27] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10046 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[28]= new Array();
 choices[28][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[28][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[28][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[28][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[28] = choices[28][1];
 units[28] = "76";
 comments[28] = "Id Pregunta: 10046. AGE A1 2015";


//  Id pregunta: 10565 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[29]= new Array();
 choices[29][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[29][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[29][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[29][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[29] = choices[29][3];
 units[29] = "12";
 comments[29] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10116 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[30]= new Array();
 choices[30][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[30][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[30][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[30][3] = "El pago de subsidios a parados";
 answers[30] = choices[30][3];
 units[30] = "15";
 comments[30] = "Id Pregunta: 10116. ";


//  Id pregunta: 10554 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[31]= new Array();
 choices[31][0] = "El BCE";
 choices[31][1] = "El Parlamento";
 choices[31][2] = "El Consejo";
 choices[31][3] = "La Comisi&oacute;n";
 answers[31] = choices[31][3];
 units[31] = "17";
 comments[31] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10148 Año de creación de pregunta: 2016
 questions[32]= "33)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[32]= new Array();
 choices[32][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[32][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[32][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[32][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 10148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 10605 Año de creación de pregunta: 2016
 questions[33]= "34)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[33][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[33][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[33][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[33] = choices[33][2];
 units[33] = "101";
 comments[33] = "Id Pregunta: 10605. Junta de Extremadura A1 2015";


//  Id pregunta: 10000 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[34]= new Array();
 choices[34][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[34][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[34][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[34][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[34] = choices[34][0];
 units[34] = "26";
 comments[34] = "Id Pregunta: 10000. AGE A1 2015";


//  Id pregunta: 10372 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[35]= new Array();
 choices[35][0] = "El Parlamento y el Consejo.";
 choices[35][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[35][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[35][3] = "La Comisi&oacute;n y el Consejo.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10372. UNION EUROPEA";


//  Id pregunta: 10489 Año de creación de pregunta: 2016
 questions[36]= "37)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[36]= new Array();
 choices[36][0] = "Dos.";
 choices[36][1] = "Cuatro.";
 choices[36][2] = "Cinco.";
 choices[36][3] = "Tres.";
 answers[36] = choices[36][1];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10490 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[37]= new Array();
 choices[37][0] = "A los cinco a&ntilde;os.";
 choices[37][1] = "A los dos a&ntilde;os.";
 choices[37][2] = "A los tres a&ntilde;os.";
 choices[37][3] = "A los cuatro a&ntilde;os.";
 answers[37] = choices[37][0];
 units[37] = "10";
 comments[37] = "Id Pregunta: 10490. PRESUPUESTOS GENERALES";


//  Id pregunta: 10190 Año de creación de pregunta: 2016
 questions[38]= "39)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[38]= new Array();
 choices[38][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[38][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[38][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[38][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[38] = choices[38][2];
 units[38] = "1";
 comments[38] = "Id Pregunta: 10190. CONSTITUCION1978";


//  Id pregunta: 10347 Año de creación de pregunta: 2016
 questions[39]= "40)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[39]= new Array();
 choices[39][0] = "18 miembros.";
 choices[39][1] = "Ninguna es correcta.";
 choices[39][2] = "22 miembros.";
 choices[39][3] = "21 miembros.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10488 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[40]= new Array();
 choices[40][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[40][1] = "El Gobierno.";
 choices[40][2] = "El Presidente del Gobierno.";
 choices[40][3] = "El Consejo de Ministros.";
 answers[40] = choices[40][1];
 units[40] = "10";
 comments[40] = "Id Pregunta: 10488. PRESUPUESTOS GENERALES";


//  Id pregunta: 10324 Año de creación de pregunta: 2016
 questions[41]= "42)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[41]= new Array();
 choices[41][0] = "Tres a&ntilde;os.";
 choices[41][1] = "Cuatro a&ntilde;os.";
 choices[41][2] = "Cinco a&ntilde;os.";
 choices[41][3] = "Seis a&ntilde;os.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10324. UNION EUROPEA";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[42]= new Array();
 choices[42][0] = "las personas jur&iacute;dicas ";
 choices[42][1] = "las entidades con personalidad jur&iacute;dica";
 choices[42][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[42][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[42] = choices[42][1];
 units[42] = "7";
 comments[42] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10572 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[43]= new Array();
 choices[43][0] = "IEEE 802.11p";
 choices[43][1] = "IEEE 802.11r";
 choices[43][2] = "IEEE 802.11v";
 choices[43][3] = "IEEE 802.11w";
 answers[43] = choices[43][1];
 units[43] = "112";
 comments[43] = "Id Pregunta: 10572. Tema 112. TAI 2016.";


//  Id pregunta: 10643 Año de creación de pregunta: 2016
 questions[44]= "45)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[44]= new Array();
 choices[44][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[44][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[44][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[44][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[44] = choices[44][2];
 units[44] = "85";
 comments[44] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10466 Año de creación de pregunta: 2016
 questions[45]= "46)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[45]= new Array();
 choices[45][0] = "Con el a&ntilde;o anterior.";
 choices[45][1] = "Con los tres a&ntilde;os anteriores.";
 choices[45][2] = "Con el a&ntilde;o natural.";
 choices[45][3] = "Con los dos a&ntilde;os anteriores.";
 answers[45] = choices[45][2];
 units[45] = "10";
 comments[45] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[46]= new Array();
 choices[46][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[46][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[46][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[46][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[46] = choices[46][3];
 units[46] = "10";
 comments[46] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[47]= new Array();
 choices[47][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[47][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[47][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[47][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[47] = choices[47][3];
 units[47] = "57";
 comments[47] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10577 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[48]= new Array();
 choices[48][0] = "El 2 de Octubre de 2015";
 choices[48][1] = "El 15 de Septiembre de 2015";
 choices[48][2] = "El 1 de Octubre de 2015";
 choices[48][3] = "El 5 de Octubre de 2015";
 answers[48] = choices[48][0];
 units[48] = "19";
 comments[48] = "Id Pregunta: 10577. Estrategia TIC";


//  Id pregunta: 10384 Año de creación de pregunta: 2016
 questions[49]= "50)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[49]= new Array();
 choices[49][0] = "Sean dirigidas por mujeres";
 choices[49][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[49][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[49][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[49] = choices[49][2];
 units[49] = "14";
 comments[49] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10008 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[50]= new Array();
 choices[50][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[50][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[50][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[50][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[50] = choices[50][2];
 units[50] = "26";
 comments[50] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10601 Año de creación de pregunta: 2016
 questions[51]= "52)  Los criptosistemas pueden clasificarse en:";
 choices[51]= new Array();
 choices[51][0] = "Concretos, Estables e Inestables.";
 choices[51][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[51][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[51][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[51] = choices[51][3];
 units[51] = "76";
 comments[51] = "Id Pregunta: 10601. Junta de Extremadura A1 2015";


//  Id pregunta: 10068 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[52]= new Array();
 choices[52][0] = "Data Mining (miner&iacute;a de datos)";
 choices[52][1] = "Business Intelligence (inteligencia de negocio)";
 choices[52][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[52][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[52] = choices[52][1];
 units[52] = "72";
 comments[52] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10110 Año de creación de pregunta: 2016
 questions[53]= "54)  La Poblaci&oacute;n Activa incluye a:";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[53][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[53][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[53][3] = "Todo aquel que desea trabajar";
 answers[53] = choices[53][2];
 units[53] = "15";
 comments[53] = "Id Pregunta: 10110. ";


//  Id pregunta: 10491 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[54]= new Array();
 choices[54][0] = "Un programa presupuestario.";
 choices[54][1] = "Un concepto presupuestario.";
 choices[54][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[54][3] = "Un cr&eacute;dito presupuestario.";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10491. PRESUPUESTOS GENERALES";


//  Id pregunta: 10478 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[55]= new Array();
 choices[55][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[55][1] = "Intervenci&oacute;n formal y material.";
 choices[55][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[55][3] = "Intervenci&oacute;n formal y general.";
 answers[55] = choices[55][1];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10478. PRESUPUESTOS GENERALES";


//  Id pregunta: 10353 Año de creación de pregunta: 2016
 questions[56]= "57)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[56]= new Array();
 choices[56][0] = "El Parlamento Europeo.";
 choices[56][1] = "Todas las respuestas son correctas.";
 choices[56][2] = "La Comisi&oacute;n Europea.";
 choices[56][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10353. UNION EUROPEA";


//  Id pregunta: 10189 Año de creación de pregunta: 2016
 questions[57]= "58)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[57]= new Array();
 choices[57][0] = "Ley Org&aacute;nica.";
 choices[57][1] = "Ley de Bases.";
 choices[57][2] = "Ley ordinaria.";
 choices[57][3] = "Mandato.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 10189. CONSTITUCION1978";


//  Id pregunta: 10030 Año de creación de pregunta: 2016
 questions[58]= "59)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[58]= new Array();
 choices[58][0] = "SMB3";
 choices[58][1] = "AFP";
 choices[58][2] = "NFS";
 choices[58][3] = "FTP";
 answers[58] = choices[58][0];
 units[58] = "59";
 comments[58] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10404 Año de creación de pregunta: 2016
 questions[59]= "60)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[59]= new Array();
 choices[59][0] = "El Tratado de Roma, 1957.";
 choices[59][1] = "El Acta &Uacute;nica Europea.";
 choices[59][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[59][3] = "Ninguna es correcta.";
 answers[59] = choices[59][2];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10404. POLITICAS DE IGUALDAD";


//  Id pregunta: 10575 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[60]= new Array();
 choices[60][0] = "MySQL";
 choices[60][1] = "SQLite";
 choices[60][2] = "Zope";
 choices[60][3] = "MariaDB";
 answers[60] = choices[60][2];
 units[60] = "61";
 comments[60] = "Id Pregunta: 10575. Tema 61. TAI 2016.";


//  Id pregunta: 10611 Año de creación de pregunta: 2016
 questions[61]= "62)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[61][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[61][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[61][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[61] = choices[61][1];
 units[61] = "63";
 comments[61] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10336 Año de creación de pregunta: 2016
 questions[62]= "63)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[62]= new Array();
 choices[62][0] = "Diciembre de 1987.";
 choices[62][1] = "Septiembre de 1989.";
 choices[62][2] = "Octubre de 1990.";
 choices[62][3] = "Noviembre de 1980.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10380 Año de creación de pregunta: 2016
 questions[63]= "64)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[63]= new Array();
 choices[63][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[63][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[63][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[63][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[63] = choices[63][3];
 units[63] = "14";
 comments[63] = "Id Pregunta: 10380. POLITICAS DE IGUALDAD";


//  Id pregunta: 10670 Año de creación de pregunta: 2016
 questions[64]= "65)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[64]= new Array();
 choices[64][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[64][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[64][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[64][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[64] = choices[64][1];
 units[64] = "7";
 comments[64] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10363 Año de creación de pregunta: 2016
 questions[65]= "66)  Los Reglamentos no se caracterizan por:";
 choices[65]= new Array();
 choices[65][0] = "No poseer alcance general.";
 choices[65][1] = "Ser obligatorios.";
 choices[65][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[65][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10509 Año de creación de pregunta: 2016
 questions[66]= "67)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[66]= new Array();
 choices[66][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[66][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[66][2] = "Absoluta frente a cualquier otro gasto.";
 choices[66][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10509. PRESUPUESTOS GENERALES";


//  Id pregunta: 10034 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[67]= new Array();
 choices[67][0] = "Memcached";
 choices[67][1] = "OpCache";
 choices[67][2] = "WinCache Extension for PHP";
 choices[67][3] = "Alternative PHP Cache";
 answers[67] = choices[67][0];
 units[67] = "65";
 comments[67] = "Id Pregunta: 10034. AGE A1 2015";


//  Id pregunta: 10254 Año de creación de pregunta: 2016
 questions[68]= "69)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[68]= new Array();
 choices[68][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[68][1] = "La libertad sexual y religiosa.";
 choices[68][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[68][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[68] = choices[68][3];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10593 Año de creación de pregunta: 2016
 questions[69]= "70)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[69]= new Array();
 choices[69][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[69][1] = "La CETIC";
 choices[69][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[69][3] = "El MHFP";
 answers[69] = choices[69][0];
 units[69] = "19";
 comments[69] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10502 Año de creación de pregunta: 2016
 questions[70]= "71)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "Principio de transparencia.";
 choices[70][1] = "Principio de cooperaci&oacute;n.";
 choices[70][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[70][3] = "Principio de lealtad institucional.";
 answers[70] = choices[70][1];
 units[70] = "10";
 comments[70] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10594 Año de creación de pregunta: 2016
 questions[71]= "72)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[71]= new Array();
 choices[71][0] = "Seguridad Social y AEAT";
 choices[71][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[71][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[71][3] = "Todos los anteriores";
 answers[71] = choices[71][3];
 units[71] = "19";
 comments[71] = "Id Pregunta: 10594. Estrategia TIC";


//  Id pregunta: 10451 Año de creación de pregunta: 2016
 questions[72]= "73)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[72]= new Array();
 choices[72][0] = "Los cr&eacute;ditos";
 choices[72][1] = "Las partidas presupuestarias";
 choices[72][2] = "Los derechos";
 choices[72][3] = "Las obligaciones";
 answers[72] = choices[72][2];
 units[72] = "10";
 comments[72] = "Id Pregunta: 10451. PRESUPUESTOS GENERALES";


//  Id pregunta: 10426 Año de creación de pregunta: 2016
 questions[73]= "74)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[73]= new Array();
 choices[73][0] = "Un plan de igualdad.";
 choices[73][1] = "Un informe de impacto de g&eacute;nero.";
 choices[73][2] = "Un programa de igualdad.";
 choices[73][3] = "Todas son correctas.";
 answers[73] = choices[73][1];
 units[73] = "14";
 comments[73] = "Id Pregunta: 10426. POLITICAS DE IGUALDAD";


//  Id pregunta: 10548 Año de creación de pregunta: 2016
 questions[74]= "75)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[74]= new Array();
 choices[74][0] = "La Administraci&oacute;n General del Estado";
 choices[74][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[74][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[74][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[74] = choices[74][1];
 units[74] = "26";
 comments[74] = "Id Pregunta: 10548. Gobernanza TIC";


