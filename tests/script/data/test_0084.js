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

//  Id pregunta: 10406 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[0]= new Array();
 choices[0][0] = "Art&iacute;culo 9.1 CE.";
 choices[0][1] = "Art&iacute;culo 53 CE.";
 choices[0][2] = "Art&iacute;culo 14 CE.";
 choices[0][3] = "Art&iacute;culo 16 CE.";
 answers[0] = choices[0][2];
 units[0] = "14";
 comments[0] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[1]= new Array();
 choices[1][0] = "formular solicitudes";
 choices[1][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[1][2] = "presentar declaraciones responsables o comunicaciones";
 choices[1][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[1] = choices[1][1];
 units[1] = "7";
 comments[1] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10614 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[2]= new Array();
 choices[2][0] = "192.228.0.0";
 choices[2][1] = "192.228.8.0";
 choices[2][2] = "192.228.16.0";
 choices[2][3] = "192.228.17.0";
 answers[2] = choices[2][2];
 units[2] = "109";
 comments[2] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10175 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[3]= new Array();
 choices[3][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[3][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[3][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[3][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[3] = choices[3][1];
 units[3] = "1";
 comments[3] = "Id Pregunta: 10175. CONSTITUCION1978";


//  Id pregunta: 10168 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[4]= new Array();
 choices[4][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[4][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[4][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[4][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[4] = choices[4][2];
 units[4] = "19";
 comments[4] = "Id Pregunta: 10168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[5]= new Array();
 choices[5][0] = "20 parlamentarios.";
 choices[5][1] = "29 parlamentarios.";
 choices[5][2] = "18 parlamentarios.";
 choices[5][3] = "23 parlamentarios.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10366. UNION EUROPEA";


//  Id pregunta: 10618 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[6][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[6][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[6][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[6] = choices[6][2];
 units[6] = "85";
 comments[6] = "Id Pregunta: 10618. Junta de Extremadura A1 2015";


//  Id pregunta: 10088 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[7]= new Array();
 choices[7][0] = "Diagrama de clases";
 choices[7][1] = "Diagrama de componentes";
 choices[7][2] = "Diagrama de estructura";
 choices[7][3] = "Diagrama de paquetes";
 answers[7] = choices[7][0];
 units[7] = "91";
 comments[7] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10276 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la respuesta falsa";
 choices[8]= new Array();
 choices[8][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[8][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[8][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[8][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[8] = choices[8][3];
 units[8] = "22";
 comments[8] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10040 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[9]= new Array();
 choices[9][0] = "Drupal";
 choices[9][1] = "Cassandra";
 choices[9][2] = "Wordpress";
 choices[9][3] = "OpenCMS";
 answers[9] = choices[9][1];
 units[9] = "99";
 comments[9] = "Id Pregunta: 10040. AGE A1 2015";


//  Id pregunta: 10517 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[10]= new Array();
 choices[10][0] = "la Administraci&oacute;n General del Estado";
 choices[10][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[10][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[10][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[11]= new Array();
 choices[11][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[11][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[11][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[11][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[11] = choices[11][1];
 units[11] = "63";
 comments[11] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10036 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[12]= new Array();
 choices[12][0] = "JAXP";
 choices[12][1] = "JNI";
 choices[12][2] = "JNDI";
 choices[12][3] = "JDBC";
 answers[12] = choices[12][1];
 units[12] = "64";
 comments[12] = "Id Pregunta: 10036. AGE A1 2015";


//  Id pregunta: 10598 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[13]= new Array();
 choices[13][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[13][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[13][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[13][3] = "Todas las respuestas anteriores son correctas.";
 answers[13] = choices[13][0];
 units[13] = "45";
 comments[13] = "Id Pregunta: 10598. Junta de Extremadura A1 2015";


//  Id pregunta: 10384 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[14]= new Array();
 choices[14][0] = "Sean dirigidas por mujeres";
 choices[14][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[14][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[14][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10363 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Los Reglamentos no se caracterizan por:";
 choices[15]= new Array();
 choices[15][0] = "No poseer alcance general.";
 choices[15][1] = "Ser obligatorios.";
 choices[15][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[15][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[15] = choices[15][0];
 units[15] = "5";
 comments[15] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10128 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[16]= new Array();
 choices[16][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[16][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[16][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[16][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[16] = choices[16][2];
 units[16] = "22";
 comments[16] = "Id Pregunta: 10128. ";


//  Id pregunta: 10322 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  El Tribunal de Justicia est&aacute; formado por:";
 choices[17]= new Array();
 choices[17][0] = "Un Juez de cada Estado miembro.";
 choices[17][1] = "Por dos Jueces de cada Estado miembro.";
 choices[17][2] = "Por veinte Jueces.";
 choices[17][3] = "Por ocho Jueces.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; es MongoDB?";
 choices[18]= new Array();
 choices[18][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[18][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[18][2] = "Un sistema gestor de base de datos relacional.";
 choices[18][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[18] = choices[18][1];
 units[18] = "73";
 comments[18] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10286 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[19]= new Array();
 choices[19][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[19][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[19][2] = "Iniciativa europea de libre flujo de datos.";
 choices[19][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10286. UNION EUROPEA";


//  Id pregunta: 10082 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[20][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[20][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[20][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[20] = choices[20][3];
 units[20] = "41";
 comments[20] = "Id Pregunta: 10082. AGE A1 2015";


//  Id pregunta: 10649 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[21]= new Array();
 choices[21][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[21][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[21][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[21][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[21] = choices[21][0];
 units[21] = "60";
 comments[21] = "Id Pregunta: 10649. Junta de Extremadura A1 2015";


//  Id pregunta: 10612 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[22]= new Array();
 choices[22][0] = "Intersecci&oacute;n.";
 choices[22][1] = "Uni&oacute;n.";
 choices[22][2] = "Restricci&oacute;n.";
 choices[22][3] = "Diferencia.";
 answers[22] = choices[22][0];
 units[22] = "60";
 comments[22] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10324 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[23]= new Array();
 choices[23][0] = "Tres a&ntilde;os.";
 choices[23][1] = "Cuatro a&ntilde;os.";
 choices[23][2] = "Cinco a&ntilde;os.";
 choices[23][3] = "Seis a&ntilde;os.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10324. UNION EUROPEA";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[24]= new Array();
 choices[24][0] = "Art&iacute;culo 16.2.";
 choices[24][1] = "Art&iacute;culo 17.1.";
 choices[24][2] = "Art&iacute;culo 18.1.";
 choices[24][3] = "Art&iacute;culo 18.2.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10627 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[25]= new Array();
 choices[25][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[25][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[25][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[25][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[25] = choices[25][0];
 units[25] = "46";
 comments[25] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  En qu&eacute; consiste el principio BASE:";
 choices[26]= new Array();
 choices[26][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[26][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[26][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[26][3] = "Todas las anteriores son falsas";
 answers[26] = choices[26][3];
 units[26] = "73";
 comments[26] = "Id Pregunta: 10103. ";


//  Id pregunta: 10410 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[27]= new Array();
 choices[27][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[27][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[27][2] = "Un programa de igualdad.";
 choices[27][3] = "Un estatuto de igualdad.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 10410. POLITICAS DE IGUALDAD";


//  Id pregunta: 10394 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[28]= new Array();
 choices[28][0] = "Discriminaci&oacute;n indirecta.";
 choices[28][1] = "Discriminaci&oacute;n directa.";
 choices[28][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[28][3] = "Discriminaci&oacute;n abusiva.";
 answers[28] = choices[28][0];
 units[28] = "14";
 comments[28] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10183 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[29]= new Array();
 choices[29][0] = "al menos por 50 Diputados.";
 choices[29][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[29][2] = "por la Mesa del Congreso de los Diputados.";
 choices[29][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[29] = choices[29][1];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10183. CONSTITUCION1978";


//  Id pregunta: 10043 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[30]= new Array();
 choices[30][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[30][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[30][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[30][3] = "El software funcionando es la medida principal del progreso.";
 answers[30] = choices[30][2];
 units[30] = "34";
 comments[30] = "Id Pregunta: 10043. AGE A1 2015";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[31]= new Array();
 choices[31][0] = "Cuatro.";
 choices[31][1] = "Una.";
 choices[31][2] = "Cinco.";
 choices[31][3] = "Nueve.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10033 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[32]= new Array();
 choices[32][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[32][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[32][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[32][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[32] = choices[32][1];
 units[32] = "63";
 comments[32] = "Id Pregunta: 10033. AGE A1 2015";


//  Id pregunta: 10214 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[33]= new Array();
 choices[33][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[33][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[33][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[33][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 10214. CONSTITUCION1978";


//  Id pregunta: 10116 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[34]= new Array();
 choices[34][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[34][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[34][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[34][3] = "El pago de subsidios a parados";
 answers[34] = choices[34][3];
 units[34] = "15";
 comments[34] = "Id Pregunta: 10116. ";


//  Id pregunta: 10402 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[35]= new Array();
 choices[35][0] = "Parcial.";
 choices[35][1] = "Sectorial.";
 choices[35][2] = "Tranversal.";
 choices[35][3] = "Vertical.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 10402. POLITICAS DE IGUALDAD";


//  Id pregunta: 10077 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[36]= new Array();
 choices[36][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[36][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[36][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[36][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[36] = choices[36][2];
 units[36] = "47";
 comments[36] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10389 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[37]= new Array();
 choices[37][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[37][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[37][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[37][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[37] = choices[37][0];
 units[37] = "14";
 comments[37] = "Id Pregunta: 10389. POLITICAS DE IGUALDAD";


//  Id pregunta: 10048 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[38]= new Array();
 choices[38][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[38][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[38][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[38][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[38] = choices[38][3];
 units[38] = "77";
 comments[38] = "Id Pregunta: 10048. AGE A1 2015";


//  Id pregunta: 10028 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[39]= new Array();
 choices[39][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[39][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[39][2] = "Crea una copia del proceso que hace la llamada.";
 choices[39][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[39] = choices[39][2];
 units[39] = "57";
 comments[39] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[40]= new Array();
 choices[40][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[40][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[40][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[40][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10101 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[41]= new Array();
 choices[41][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[41][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[41][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[41][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[41] = choices[41][1];
 units[41] = "73";
 comments[41] = "Id Pregunta: 10101. ";


//  Id pregunta: 10044 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[42][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[42][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[42][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[42] = choices[42][1];
 units[42] = "60";
 comments[42] = "Id Pregunta: 10044. AGE A1 2015";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[43]= new Array();
 choices[43][0] = "En 2015";
 choices[43][1] = "En 2013";
 choices[43][2] = "En 2016";
 choices[43][3] = "En 2007";
 answers[43] = choices[43][1];
 units[43] = "19";
 comments[43] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10135 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[44]= new Array();
 choices[44][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[44][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[44][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[44][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[44] = choices[44][0];
 units[44] = "12";
 comments[44] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[45]= new Array();
 choices[45][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[45][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[45][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[45][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[45] = choices[45][2];
 units[45] = "53";
 comments[45] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10086 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[46]= new Array();
 choices[46][0] = "Un a&ntilde;o prorrogable";
 choices[46][1] = "Dos a&ntilde;os no prorrogables";
 choices[46][2] = "Un a&ntilde;o no prorrogable";
 choices[46][3] = "Dos a&ntilde;os prorrogables";
 answers[46] = choices[46][2];
 units[46] = "37";
 comments[46] = "Id Pregunta: 10086. AGE A1 2015";


//  Id pregunta: 10467 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[47]= new Array();
 choices[47][0] = "Tres meses.";
 choices[47][1] = "Nueve meses.";
 choices[47][2] = "Cuatro meses.";
 choices[47][3] = "Seis meses.";
 answers[47] = choices[47][0];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10467. PRESUPUESTOS GENERALES";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[48]= new Array();
 choices[48][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[48][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[48][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[48][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[48] = choices[48][0];
 units[48] = "31";
 comments[48] = "Id Pregunta: 10002. AGE A1 2015";


//  Id pregunta: 10226 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[49]= new Array();
 choices[49][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[49][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[49][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[49][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 10226. CONSTITUCION1978";


//  Id pregunta: 10200 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[50]= new Array();
 choices[50][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[50][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[50][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[50][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[50] = choices[50][3];
 units[50] = "1";
 comments[50] = "Id Pregunta: 10200. CONSTITUCION1978";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[51]= new Array();
 choices[51][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[51][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[51][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[51][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[51] = choices[51][0];
 units[51] = "5";
 comments[51] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[52][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[52][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[52][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[52] = choices[52][2];
 units[52] = "48";
 comments[52] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10270 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[53][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[53][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[53][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10270. CONSTITUCION1978";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[54]= new Array();
 choices[54][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[54][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[54][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[54][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[54] = choices[54][2];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10417 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[55][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[55][2] = "Ambas son correctas.";
 choices[55][3] = "La A y B son incorrectas.";
 answers[55] = choices[55][2];
 units[55] = "14";
 comments[55] = "Id Pregunta: 10417. POLITICAS DE IGUALDAD";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[56]= new Array();
 choices[56][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[56][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[56][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[56][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10208 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[57]= new Array();
 choices[57][0] = "El Rey.";
 choices[57][1] = "El Jefe del Estado.";
 choices[57][2] = "El Gobierno.";
 choices[57][3] = "El Presidente del Gobierno.";
 answers[57] = choices[57][2];
 units[57] = "1";
 comments[57] = "Id Pregunta: 10208. CONSTITUCION1978";


//  Id pregunta: 10434 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[58][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[58][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[58][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 10434. SERVICIOS COMUNES";


//  Id pregunta: 10419 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[59]= new Array();
 choices[59][0] = "P&uacute;blica.";
 choices[59][1] = "Privada.";
 choices[59][2] = "Ambas son correctas.";
 choices[59][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10419. POLITICAS DE IGUALDAD";


//  Id pregunta: 10577 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[60]= new Array();
 choices[60][0] = "El 2 de Octubre de 2015";
 choices[60][1] = "El 15 de Septiembre de 2015";
 choices[60][2] = "El 1 de Octubre de 2015";
 choices[60][3] = "El 5 de Octubre de 2015";
 answers[60] = choices[60][0];
 units[60] = "19";
 comments[60] = "Id Pregunta: 10577. Estrategia TIC";


//  Id pregunta: 10670 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[61]= new Array();
 choices[61][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[61][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[61][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[61][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[61] = choices[61][1];
 units[61] = "7";
 comments[61] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10499 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[62]= new Array();
 choices[62][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[62][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[62][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[62][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[62] = choices[62][0];
 units[62] = "10";
 comments[62] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10572 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[63]= new Array();
 choices[63][0] = "IEEE 802.11p";
 choices[63][1] = "IEEE 802.11r";
 choices[63][2] = "IEEE 802.11v";
 choices[63][3] = "IEEE 802.11w";
 answers[63] = choices[63][1];
 units[63] = "112";
 comments[63] = "Id Pregunta: 10572. Tema 112. TAI 2016.";


//  Id pregunta: 10445 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[64]= new Array();
 choices[64][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[64][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[64][2] = "Fecha de otorgamiento.";
 choices[64][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10090 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[65]= new Array();
 choices[65][0] = "Categor&iacute;a b&aacute;sica";
 choices[65][1] = "Categor&iacute;a media";
 choices[65][2] = "Categor&iacute;a alta";
 choices[65][3] = "Categor&iacute;a media y alta";
 answers[65] = choices[65][2];
 units[65] = "46";
 comments[65] = "Id Pregunta: 10090. AGE A1 2015";


//  Id pregunta: 10075 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[66]= new Array();
 choices[66][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[66][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[66][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[66][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[66] = choices[66][0];
 units[66] = "35";
 comments[66] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10633 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[67]= new Array();
 choices[67][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[67][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[67][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[67][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[67] = choices[67][3];
 units[67] = "56";
 comments[67] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10220 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[68]= new Array();
 choices[68][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[68][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[68][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[68][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10220. CONSTITUCION1978";


//  Id pregunta: 10229 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[69]= new Array();
 choices[69][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[69][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[69][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[69][3] = "A las Diputaciones y a las Comarcas.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10229. CONSTITUCION1978";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[70]= new Array();
 choices[70][0] = "Estrasburgo.";
 choices[70][1] = "Bruselas.";
 choices[70][2] = "Luxemburgo.";
 choices[70][3] = "Par&iacute;s.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10679 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[71][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[71][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[71][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[71] = choices[71][1];
 units[71] = "14";
 comments[71] = "Id Pregunta: 10679. Pensiones";


//  Id pregunta: 10217 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[72]= new Array();
 choices[72][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[72][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[72][2] = "Son refrendados por el Rey.";
 choices[72][3] = "Son convocados por el Presidente del Gobierno.";
 answers[72] = choices[72][0];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[73]= new Array();
 choices[73][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[73][1] = "La delimitaci&oacute;n de su territorio.";
 choices[73][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[73][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[73] = choices[73][2];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10228. CONSTITUCION1978";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[74]= new Array();
 choices[74][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[74][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[74][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[74][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[74] = choices[74][2];
 units[74] = "22";
 comments[74] = "Id Pregunta: 10129. ";


//  Id pregunta: 10631 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[75]= new Array();
 choices[75][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[75][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[75][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[75][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[75] = choices[75][2];
 units[75] = "50";
 comments[75] = "Id Pregunta: 10631. Junta de Extremadura A1 2015";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[76]= new Array();
 choices[76][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[76][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[76][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[76][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[76] = choices[76][3];
 units[76] = "10";
 comments[76] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10148 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[77]= new Array();
 choices[77][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[77][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[77][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[77][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[77] = choices[77][2];
 units[77] = "7";
 comments[77] = "Id Pregunta: 10148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 10604 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  ITIL v3, define:";
 choices[78]= new Array();
 choices[78][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[78][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[78][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[78][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[78] = choices[78][0];
 units[78] = "101";
 comments[78] = "Id Pregunta: 10604. Junta de Extremadura A1 2015";


//  Id pregunta: 10334 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[79]= new Array();
 choices[79][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[79][1] = "Ninguna de las respuestas es correcta.";
 choices[79][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[79][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[79] = choices[79][0];
 units[79] = "5";
 comments[79] = "Id Pregunta: 10334. UNION EUROPEA";


//  Id pregunta: 10579 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[80]= new Array();
 choices[80][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[80][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[80][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[80][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[80] = choices[80][1];
 units[80] = "19";
 comments[80] = "Id Pregunta: 10579. Estrategia TIC";


//  Id pregunta: 10177 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[81]= new Array();
 choices[81][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[81][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[81][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[81][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[81] = choices[81][2];
 units[81] = "1";
 comments[81] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10437 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[82]= new Array();
 choices[82][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[82][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[82][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[82][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[82] = choices[82][0];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10437. SERVICIOS COMUNES";


//  Id pregunta: 10415 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[83]= new Array();
 choices[83][0] = "Un informe de g&eacute;nero.";
 choices[83][1] = "La variable de sexo.";
 choices[83][2] = "La variable de edad.";
 choices[83][3] = "La variable de comportamiento.";
 answers[83] = choices[83][1];
 units[83] = "14";
 comments[83] = "Id Pregunta: 10415. POLITICAS DE IGUALDAD";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[84]= new Array();
 choices[84][0] = "El Presidente y su gabinete.";
 choices[84][1] = "El Presidente y sus Ministros.";
 choices[84][2] = "El Rey y el Presidente.";
 choices[84][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[84] = choices[84][2];
 units[84] = "1";
 comments[84] = "Id Pregunta: 10257. CONSTITUCION1978";


//  Id pregunta: 10006 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[85]= new Array();
 choices[85][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[85][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[85][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[85][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[85] = choices[85][0];
 units[85] = "91";
 comments[85] = "Id Pregunta: 10006. AGE A1 2015";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  Son servicios declarados compartidos:";
 choices[86]= new Array();
 choices[86][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[86][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[86][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[86][3] = "Todos los anteriores";
 answers[86] = choices[86][3];
 units[86] = "19";
 comments[86] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10493 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[87]= new Array();
 choices[87][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[87][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[87][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[87][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[87] = choices[87][2];
 units[87] = "10";
 comments[87] = "Id Pregunta: 10493. PRESUPUESTOS GENERALES";


//  Id pregunta: 10330 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[88]= new Array();
 choices[88][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[88][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[88][2] = "Todas son correctas.";
 choices[88][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[88] = choices[88][2];
 units[88] = "5";
 comments[88] = "Id Pregunta: 10330. UNION EUROPEA";


//  Id pregunta: 10390 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[89]= new Array();
 choices[89][0] = "El Consejo Nacional de la Mujer.";
 choices[89][1] = "El Consejo de la Mujer.";
 choices[89][2] = "El Instituto de la Mujer.";
 choices[89][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[89] = choices[89][3];
 units[89] = "14";
 comments[89] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


//  Id pregunta: 10456 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[90]= new Array();
 choices[90][0] = "a) Los cuatro ejercicios siguientes.";
 choices[90][1] = "b) El ejercicio siguiente.";
 choices[90][2] = "c) Los dos ejercicios siguientes.";
 choices[90][3] = "d) Los tres ejercicios siguientes.";
 answers[90] = choices[90][3];
 units[90] = "10";
 comments[90] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10054 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[91]= new Array();
 choices[91][0] = "DoS";
 choices[91][1] = "Phishing";
 choices[91][2] = "Sniffing";
 choices[91][3] = "Spoofing";
 answers[91] = choices[91][3];
 units[91] = "119";
 comments[91] = "Id Pregunta: 10054. AGE A1 2015";


//  Id pregunta: 10073 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[92]= new Array();
 choices[92][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[92][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[92][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[92][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[92] = choices[92][1];
 units[92] = "44";
 comments[92] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10349 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[93]= new Array();
 choices[93][0] = "El 23 de julio de 1952.";
 choices[93][1] = "El 18 de abril de 1951.";
 choices[93][2] = "El 16 de abril de 1948.";
 choices[93][3] = "d)Ninguna de las respuestas son correctas.";
 answers[93] = choices[93][0];
 units[93] = "5";
 comments[93] = "Id Pregunta: 10349. UNION EUROPEA";


//  Id pregunta: 10269 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[94]= new Array();
 choices[94][0] = "Diez art&iacute;culos.";
 choices[94][1] = "Nueve art&iacute;culos.";
 choices[94][2] = "Once art&iacute;culos.";
 choices[94][3] = "Ocho art&iacute;culos.";
 answers[94] = choices[94][0];
 units[94] = "1";
 comments[94] = "Id Pregunta: 10269. CONSTITUCION1978";


//  Id pregunta: 10524 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[95]= new Array();
 choices[95][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[95][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[95][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[95][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[95] = choices[95][3];
 units[95] = "7";
 comments[95] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[96]= new Array();
 choices[96][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[96][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[96][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[96][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[96] = choices[96][3];
 units[96] = "78";
 comments[96] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[97]= new Array();
 choices[97][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[97][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[97][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[97][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[97] = choices[97][3];
 units[97] = "5";
 comments[97] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[98]= new Array();
 choices[98][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[98][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[98][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[98][3] = "Sancionar y publicar las leyes.";
 answers[98] = choices[98][2];
 units[98] = "1";
 comments[98] = "Id Pregunta: 10242. CONSTITUCION1978";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[99]= new Array();
 choices[99][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[99][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[99][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[99][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[99] = choices[99][3];
 units[99] = "86";
 comments[99] = "Id Pregunta: 10042. AGE A1 2015";


