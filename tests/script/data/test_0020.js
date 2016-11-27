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

//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[0]= "1)  El Parlamento Europeo celebrar&aacute;:";
 choices[0]= new Array();
 choices[0][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[0][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[0][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[0][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[1]= "2)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[1]= new Array();
 choices[1][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[1][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[1][2] = "Ministerio de la Presidencia";
 choices[1][3] = "Ministerio de Fomento";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[2]= "3)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[2]= new Array();
 choices[2][0] = "GROUP BY.";
 choices[2][1] = "COUNT.";
 choices[2][2] = "WHERE.";
 choices[2][3] = "DISTINCT.";
 answers[2] = choices[2][0];
 units[2] = "60";
 comments[2] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[3]= new Array();
 choices[3][0] = "La CETIC";
 choices[3][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[3][2] = "La DTIC";
 choices[3][3] = "El MHFP";
 answers[3] = choices[3][0];
 units[3] = "19";
 comments[3] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[4][1] = "Por Orden Ministerial.";
 choices[4][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[4][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[5]= new Array();
 choices[5][0] = "Flexibilidad para variar el servicio o producto";
 choices[5][1] = "Eliminar desperdicios";
 choices[5][2] = "Decidir lo m&aacute;s tarde posible";
 choices[5][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[5] = choices[5][0];
 units[5] = "34";
 comments[5] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[6]= "7)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[6]= new Array();
 choices[6][0] = "0";
 choices[6][1] = "1";
 choices[6][2] = "Tantos como peticiones concurrentes tenga.";
 choices[6][3] = "Tantos como le permita la memoria de la JVM.";
 answers[6] = choices[6][1];
 units[6] = "64";
 comments[6] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[7]= new Array();
 choices[7][0] = "Por Real Decreto.";
 choices[7][1] = "Por Orden del Ministerio del Interior.";
 choices[7][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[7][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[8]= "9)  Los Reglamentos no se caracterizan por:";
 choices[8]= new Array();
 choices[8][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[8][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[8][2] = "Ser obligatorios.";
 choices[8][3] = "No poseer alcance general.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[9]= new Array();
 choices[9][0] = "Al Gobierno de la naci&oacute;n";
 choices[9][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[9][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[9][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[9] = choices[9][3];
 units[9] = "7";
 comments[9] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[10]= "11)  Se consideran interesados en el procedimiento administrativo:";
 choices[10]= new Array();
 choices[10][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[10][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[10][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[10][3] = "todas son correctas";
 answers[10] = choices[10][0];
 units[10] = "7";
 comments[10] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[11]= "12)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[11]= new Array();
 choices[11][0] = "Discriminaci&oacute;n indirecta.";
 choices[11][1] = "Discriminaci&oacute;n directa.";
 choices[11][2] = "Discriminaci&oacute;n por maternidad.";
 choices[11][3] = "Discriminaci&oacute;n abusiva.";
 answers[11] = choices[11][1];
 units[11] = "14";
 comments[11] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[12]= "13)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[12]= new Array();
 choices[12][0] = "un &oacute;rgano superior";
 choices[12][1] = "un &oacute;rgano directivo";
 choices[12][2] = "un &oacute;rgano superior o directivo";
 choices[12][3] = "ninguna es correcta";
 answers[12] = choices[12][2];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[13]= "14)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[13]= new Array();
 choices[13][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[13][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[13][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[13][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[13] = choices[13][3];
 units[13] = "7";
 comments[13] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[14]= "15)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[14]= new Array();
 choices[14][0] = "Acuerdos cualificados.";
 choices[14][1] = "Acuerdos ponderados.";
 choices[14][2] = "Valoraci&oacute;n de los votos.";
 choices[14][3] = "Ponderaci&oacute;n de los votos.";
 answers[14] = choices[14][3];
 units[14] = "5";
 comments[14] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[15]= "16)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[15]= new Array();
 choices[15][0] = "Almacenamiento orientado a columnas";
 choices[15][1] = "Framework MapReduce";
 choices[15][2] = "OLTP";
 choices[15][3] = "Bases de datos clave-valor";
 answers[15] = choices[15][2];
 units[15] = "73";
 comments[15] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[16]= new Array();
 choices[16][0] = "Cincuenta y cuatro.";
 choices[16][1] = "Cincuenta.";
 choices[16][2] = "Cincuenta y cinco.";
 choices[16][3] = "Cincuenta y dos.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[17]= "18)  Son bases de datos NoSQL:";
 choices[17]= new Array();
 choices[17][0] = "MongoDB y Maria DB";
 choices[17][1] = "HBase y Dynamo";
 choices[17][2] = "MariaDB, Cassandra y BigTable";
 choices[17][3] = "La A) y la C)";
 answers[17] = choices[17][1];
 units[17] = "73";
 comments[17] = "Id Pregunta: 104. ";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[18]= new Array();
 choices[18][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[18][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[18][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[18][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[18] = choices[18][2];
 units[18] = "85";
 comments[18] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[19]= new Array();
 choices[19][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[19][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[19][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[19][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[19] = choices[19][3];
 units[19] = "106";
 comments[19] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[20]= new Array();
 choices[20][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[20][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[20][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[20][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[20] = choices[20][0];
 units[20] = "77";
 comments[20] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[21]= "22)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[21]= new Array();
 choices[21][0] = "Cuatro.";
 choices[21][1] = "Una.";
 choices[21][2] = "Cinco.";
 choices[21][3] = "Nueve.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[22]= "23)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[22]= new Array();
 choices[22][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[22][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[22][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[22][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[22] = choices[22][3];
 units[22] = "12";
 comments[22] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[23]= new Array();
 choices[23][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[23][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[23][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[23][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[23] = choices[23][2];
 units[23] = "22";
 comments[23] = "Id Pregunta: 97. AGE A1 2015";


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


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[25]= "26)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[25]= new Array();
 choices[25][0] = "Son actos individuales no normativos.";
 choices[25][1] = "Poseen alcance general.";
 choices[25][2] = "Son actos normativos.";
 choices[25][3] = "No son obligatorias.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[26]= new Array();
 choices[26][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[26][1] = "Autorizar indultos generales.";
 choices[26][2] = "Sancionar las leyes.";
 choices[26][3] = "Promulgar las leyes.";
 answers[26] = choices[26][1];
 units[26] = "1";
 comments[26] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[27]= new Array();
 choices[27][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[27][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[27][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[27][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[28]= "29)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[28]= new Array();
 choices[28][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[28][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[28][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[28][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[28] = choices[28][1];
 units[28] = "95";
 comments[28] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[29]= "30)  Los Secretarios generales t&eacute;cnicos:";
 choices[29]= new Array();
 choices[29][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[29][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[29][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[29][3] = "todas son correctas";
 answers[29] = choices[29][3];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[30]= new Array();
 choices[30][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[30][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[30][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[30][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[30] = choices[30][0];
 units[30] = "73";
 comments[30] = "Id Pregunta: 654. ";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[31]= new Array();
 choices[31][0] = "Art&iacute;culo 9.1 CE.";
 choices[31][1] = "Art&iacute;culo 53 CE.";
 choices[31][2] = "Art&iacute;culo 14 CE.";
 choices[31][3] = "Art&iacute;culo 16 CE.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[32]= "33)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[32]= new Array();
 choices[32][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[32][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[32][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[32][3] = "Todas las respuestas son correctas.";
 answers[32] = choices[32][3];
 units[32] = "5";
 comments[32] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[33]= "34)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[33]= new Array();
 choices[33][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[33][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[33][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[33][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[33] = choices[33][2];
 units[33] = "12";
 comments[33] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[34]= "35)  La recusaci&oacute;n pueden promoverla...";
 choices[34]= new Array();
 choices[34][0] = "Cualquier &oacute;rgano";
 choices[34][1] = "El interesado";
 choices[34][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[34][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[35]= "36)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[35]= new Array();
 choices[35][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[35][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[35][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[35][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 345. UNION EUROPEA";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[36]= "37)  La Administraci&oacute;n General del Estado se organiza:";
 choices[36]= new Array();
 choices[36][0] = "en Ministerios";
 choices[36][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[36][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[36][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[37]= "38)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[37]= new Array();
 choices[37][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[37][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[37][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[37][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[37] = choices[37][1];
 units[37] = "19";
 comments[37] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[38]= "39)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[38]= new Array();
 choices[38][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[38][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[38][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[38][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[38] = choices[38][2];
 units[38] = "14";
 comments[38] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[39]= new Array();
 choices[39][0] = "Quince miembros.";
 choices[39][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[39][2] = "Los miembros que determine el Consejo.";
 choices[39][3] = "Un Presidente y quince miembros.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[40]= new Array();
 choices[40][0] = "Anual";
 choices[40][1] = "Mensual";
 choices[40][2] = "Semestral";
 choices[40][3] = "Trimestral";
 answers[40] = choices[40][3];
 units[40] = "15";
 comments[40] = "Id Pregunta: 119. ";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[41]= new Array();
 choices[41][0] = "verbalmente";
 choices[41][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[41][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[41][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[41] = choices[41][2];
 units[41] = "7";
 comments[41] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[42]= "43)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[42]= new Array();
 choices[42][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[42][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[42][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[42][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[42] = choices[42][0];
 units[42] = "35";
 comments[42] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[43]= new Array();
 choices[43][0] = "IEEE 802.11p";
 choices[43][1] = "IEEE 802.11r";
 choices[43][2] = "IEEE 802.11v";
 choices[43][3] = "IEEE 802.11w";
 answers[43] = choices[43][1];
 units[43] = "112";
 comments[43] = "Id Pregunta: 572. Tema 112. TAI 2016.";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[44]= "45)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[44]= new Array();
 choices[44][0] = "los Secretarios de Estado";
 choices[44][1] = "los Ministros";
 choices[44][2] = "los Subsecretarios";
 choices[44][3] = "los Secretarios generales";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[45]= "46)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[45]= new Array();
 choices[45][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[45][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[45][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[45][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[45] = choices[45][3];
 units[45] = "44";
 comments[45] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[46]= "47)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[46]= new Array();
 choices[46][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[46][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[46][2] = "Cinco a&ntilde;os.";
 choices[46][3] = "Ninguna es correcta.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[47]= new Array();
 choices[47][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[47][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[47][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[47][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[47] = choices[47][1];
 units[47] = "7";
 comments[47] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[48]= "49)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[48]= new Array();
 choices[48][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[48][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[48][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[48][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[49]= new Array();
 choices[49][0] = "Backlog refinement";
 choices[49][1] = "Backlog refinement";
 choices[49][2] = "A y b son correctas";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][2];
 units[49] = "34, 84";
 comments[49] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[50]= new Array();
 choices[50][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[50][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[50][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[50][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[50] = choices[50][1];
 units[50] = "77";
 comments[50] = "Id Pregunta: 687. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[51]= "52)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[51]= new Array();
 choices[51][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[51][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[51][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[51][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[52]= new Array();
 choices[52][0] = "Cassandra";
 choices[52][1] = "Riak";
 choices[52][2] = "Avro";
 choices[52][3] = "Zookeeper";
 answers[52] = choices[52][3];
 units[52] = "73";
 comments[52] = "Id Pregunta: 656. ";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[53]= "54)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[53]= new Array();
 choices[53][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[53][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[53][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[53][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[53] = choices[53][0];
 units[53] = "34, 84";
 comments[53] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[54]= "55)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[54]= new Array();
 choices[54][0] = "Presencia equilibrada.";
 choices[54][1] = "Presencia paritaria.";
 choices[54][2] = "Presencia consensuada.";
 choices[54][3] = "presencia horizontal.";
 answers[54] = choices[54][0];
 units[54] = "14";
 comments[54] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[55]= "56)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[55]= new Array();
 choices[55][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[55][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[55][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[55][3] = "todas son correctas";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 759. Ley 40/2015";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[56]= "57)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[56]= new Array();
 choices[56][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[56][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[56][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[56][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[56] = choices[56][3];
 units[56] = "7";
 comments[56] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[57]= new Array();
 choices[57][0] = "Art. 25 LO, 3/2007.";
 choices[57][1] = "Art. 23 LO, 3/2007.";
 choices[57][2] = "Art. 14 LO, 3/2007.";
 choices[57][3] = "Ninguna es correcta, es el art. 13.";
 answers[57] = choices[57][0];
 units[57] = "14";
 comments[57] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[58]= "59)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[58]= new Array();
 choices[58][0] = "tienen capacidad de obrar limitada";
 choices[58][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[58][2] = "no tienen capacidad de obrar";
 choices[58][3] = "ninguna es correcta";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[59]= "60)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[59]= new Array();
 choices[59][0] = "Tres a&ntilde;os.";
 choices[59][1] = "Cuatro a&ntilde;os.";
 choices[59][2] = "Cinco a&ntilde;os.";
 choices[59][3] = "Seis a&ntilde;os.";
 answers[59] = choices[59][0];
 units[59] = "5";
 comments[59] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[60]= "61)  En las Administraciones P&uacute;blicas...";
 choices[60]= new Array();
 choices[60][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[60][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[60][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[60][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[60] = choices[60][0];
 units[60] = "10";
 comments[60] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[61]= "62)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[61]= new Array();
 choices[61][0] = "El Ministerio de Igualdad.";
 choices[61][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[61][2] = "Ambas son correctas.";
 choices[61][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[62]= new Array();
 choices[62][0] = "al menos por 50 Diputados.";
 choices[62][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[62][2] = "por la Mesa del Congreso de los Diputados.";
 choices[62][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[62] = choices[62][1];
 units[62] = "1";
 comments[62] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[63]= "64)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[63]= new Array();
 choices[63][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[63][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[63][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[63][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[63] = choices[63][3];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[64]= "65)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Acoso sexual.";
 choices[64][1] = "Acoso por raz&oacute;n de sexo.";
 choices[64][2] = "Acoso laboral.";
 choices[64][3] = "Acoso mental.";
 answers[64] = choices[64][1];
 units[64] = "14";
 comments[64] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[65]= "66)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[65]= new Array();
 choices[65][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[65][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[65][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[65][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[65] = choices[65][1];
 units[65] = "56";
 comments[65] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[66]= new Array();
 choices[66][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[66][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[66][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[66][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[67]= "68)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[67]= new Array();
 choices[67][0] = "Gesti&oacute;n de la disponibilidad";
 choices[67][1] = "Gesti&oacute;n de la demanda";
 choices[67][2] = "Gesti&oacute;n de entregas";
 choices[67][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[67] = choices[67][0];
 units[67] = "101";
 comments[67] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[68]= "69)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[68]= new Array();
 choices[68][0] = "Relaciones base y vistas.";
 choices[68][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[68][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[68][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[68] = choices[68][3];
 units[68] = "60";
 comments[68] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[69]= "70)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[69]= new Array();
 choices[69][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[69][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[69][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[69][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[69] = choices[69][0];
 units[69] = "101";
 comments[69] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[70]= "71)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[70]= new Array();
 choices[70][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[70][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[70][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[70][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[70] = choices[70][1];
 units[70] = "7";
 comments[70] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[71]= "72)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[71]= new Array();
 choices[71][0] = "786 Diputados como m&aacute;ximo.";
 choices[71][1] = "600 Diputados como m&aacute;ximo.";
 choices[71][2] = "650 Diputados como m&aacute;ximo.";
 choices[71][3] = "732 Diputados como m&aacute;ximo.";
 answers[71] = choices[71][0];
 units[71] = "5";
 comments[71] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[72]= "73)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[72]= new Array();
 choices[72][0] = "X.";
 choices[72][1] = "XIX.";
 choices[72][2] = "XV.";
 choices[72][3] = "XIII.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[73]= "74)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[73][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[73][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[73][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[73] = choices[73][3];
 units[73] = "14";
 comments[73] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[74]= "75)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[74][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[74][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[74][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[74] = choices[74][3];
 units[74] = "22";
 comments[74] = "Id Pregunta: 710. Ley de transparencia";


