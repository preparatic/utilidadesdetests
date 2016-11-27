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

//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[0]= new Array();
 choices[0][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[0][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[0][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[0][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[0] = choices[0][3];
 units[0] = "77";
 comments[0] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[1]= "2)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[1]= new Array();
 choices[1][0] = "El Jefe del Estado.";
 choices[1][1] = "El Tribunal Constitucional.";
 choices[1][2] = "El Congreso de los Diputados.";
 choices[1][3] = "Las Cortes Generales.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[2]= new Array();
 choices[2][0] = "Art&iacute;culo 16.2.";
 choices[2][1] = "Art&iacute;culo 17.1.";
 choices[2][2] = "Art&iacute;culo 18.1.";
 choices[2][3] = "Art&iacute;culo 18.2.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[3]= "4)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[3]= new Array();
 choices[3][0] = "Estrasburgo.";
 choices[3][1] = "Bruselas.";
 choices[3][2] = "Luxemburgo.";
 choices[3][3] = "Holanda.";
 answers[3] = choices[3][2];
 units[3] = "5";
 comments[3] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[4]= new Array();
 choices[4][0] = "Categor&iacute;a b&aacute;sica";
 choices[4][1] = "Categor&iacute;a media";
 choices[4][2] = "Categor&iacute;a alta";
 choices[4][3] = "Categor&iacute;a media y alta";
 answers[4] = choices[4][2];
 units[4] = "46";
 comments[4] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[5]= new Array();
 choices[5][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[5][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[5][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[5][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[5] = choices[5][3];
 units[5] = "106";
 comments[5] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[6]= "7)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[6]= new Array();
 choices[6][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[6][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[6][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[6][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[7]= new Array();
 choices[7][0] = "Varios namenodes y varios datanodes por cluster";
 choices[7][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[7][2] = "1 namenode y varios datanodes por cluster";
 choices[7][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[7] = choices[7][2];
 units[7] = "73";
 comments[7] = "Id Pregunta: 661. ";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[8]= "9)  El Colegio de Comisarios se re&uacute;ne:";
 choices[8]= new Array();
 choices[8][0] = "Una vez por semana.";
 choices[8][1] = "Una vez al mes.";
 choices[8][2] = "Dos veces en semana.";
 choices[8][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[8] = choices[8][0];
 units[8] = "5";
 comments[8] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[9]= "10)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[9]= new Array();
 choices[9][0] = "Un d&iacute;a";
 choices[9][1] = "Dos d&iacute;as";
 choices[9][2] = "Tres d&iacute;as";
 choices[9][3] = "Cuatro d&iacute;as";
 answers[9] = choices[9][3];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "A los cinco a&ntilde;os.";
 choices[10][1] = "A los dos a&ntilde;os.";
 choices[10][2] = "A los tres a&ntilde;os.";
 choices[10][3] = "A los cuatro a&ntilde;os.";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[11]= "12)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[11]= new Array();
 choices[11][0] = "Gesti&oacute;n de la disponibilidad";
 choices[11][1] = "Gesti&oacute;n de la demanda";
 choices[11][2] = "Gesti&oacute;n de entregas";
 choices[11][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[11] = choices[11][0];
 units[11] = "101";
 comments[11] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[12]= new Array();
 choices[12][0] = "Art&iacute;culo 14 CE.";
 choices[12][1] = "Art&iacute;culo 9.2 CE.";
 choices[12][2] = "Art&iacute;culo 9.1 CE.";
 choices[12][3] = "Art&iacute;culo 13 CE.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[13]= "14)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[13]= new Array();
 choices[13][0] = "el Secretario General";
 choices[13][1] = "el Subdirector General";
 choices[13][2] = "el Secretario de Estado";
 choices[13][3] = "ninguna es correcta";
 answers[13] = choices[13][0];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[14]= "15)  Las Universidades p&uacute;blicas:";
 choices[14]= new Array();
 choices[14][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[14][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[14][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[14][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[14] = choices[14][1];
 units[14] = "7";
 comments[14] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[15]= new Array();
 choices[15][0] = "al menos por 50 Diputados.";
 choices[15][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[15][2] = "por la Mesa del Congreso de los Diputados.";
 choices[15][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[15] = choices[15][1];
 units[15] = "1";
 comments[15] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[16]= new Array();
 choices[16][0] = "NoSQL";
 choices[16][1] = "Sistemas de baja latencia";
 choices[16][2] = "MapReduce";
 choices[16][3] = "Business Intelligence";
 answers[16] = choices[16][1];
 units[16] = "73";
 comments[16] = "Id Pregunta: 658. ";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[17]= "18)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[17]= new Array();
 choices[17][0] = "Intersecci&oacute;n.";
 choices[17][1] = "Uni&oacute;n.";
 choices[17][2] = "Restricci&oacute;n.";
 choices[17][3] = "Diferencia.";
 answers[17] = choices[17][0];
 units[17] = "60";
 comments[17] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[18]= "19)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[18]= new Array();
 choices[18][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[18][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[18][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[18][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[18] = choices[18][3];
 units[18] = "89";
 comments[18] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[19]= "20)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[19]= new Array();
 choices[19][0] = "0";
 choices[19][1] = "1";
 choices[19][2] = "Tantos como peticiones concurrentes tenga.";
 choices[19][3] = "Tantos como le permita la memoria de la JVM.";
 answers[19] = choices[19][1];
 units[19] = "64";
 comments[19] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[20]= "21)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[20][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[20][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[20][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[21]= "22)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[21]= new Array();
 choices[21][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[21][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[21][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[21][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[21] = choices[21][2];
 units[21] = "28";
 comments[21] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[22]= new Array();
 choices[22][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[22][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[22][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[22][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[23]= "24)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[23]= new Array();
 choices[23][0] = "B&aacute;sico";
 choices[23][1] = "Medio";
 choices[23][2] = "Alto";
 choices[23][3] = "A los niveles medio y alto";
 answers[23] = choices[23][2];
 units[23] = "35";
 comments[23] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[24]= "25)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[24]= new Array();
 choices[24][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[24][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[24][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[24][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[24] = choices[24][3];
 units[24] = "41";
 comments[24] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[25]= new Array();
 choices[25][0] = "Un diputado y un senador, cada una de ellas";
 choices[25][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[25][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[25][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[26]= "27)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[26]= new Array();
 choices[26][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[26][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[26][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[26][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[26] = choices[26][2];
 units[26] = "19";
 comments[26] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[27]= new Array();
 choices[27][0] = "En t&iacute;tulos-valores.";
 choices[27][1] = "Las respuestas a) y b) son correctas.";
 choices[27][2] = "Las respuestas a) y b) no son correctas.";
 choices[27][3] = "En cuenta.";
 answers[27] = choices[27][1];
 units[27] = "10";
 comments[27] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[28]= "29)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[28]= new Array();
 choices[28][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[28][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[28][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[28][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[28] = choices[28][3];
 units[28] = "26";
 comments[28] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[29]= new Array();
 choices[29][0] = "Anualmente";
 choices[29][1] = "Bienalmente";
 choices[29][2] = "Cada cuatro a&ntilde;os";
 choices[29][3] = "No se define ninguna periodicidad";
 answers[29] = choices[29][1];
 units[29] = "19";
 comments[29] = "Id Pregunta: 592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[30]= "31)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[30]= new Array();
 choices[30][0] = "apud acta";
 choices[30][1] = "presencialmente";
 choices[30][2] = "electr&oacute;nicamente";
 choices[30][3] = "todas son correctas";
 answers[30] = choices[30][3];
 units[30] = "7";
 comments[30] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[31]= "32)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[31]= new Array();
 choices[31][0] = "Un Reglamento.";
 choices[31][1] = "Un Decreto.";
 choices[31][2] = "Una Ley.";
 choices[31][3] = "Un Real-Decreto.";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[32]= "33)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[32]= new Array();
 choices[32][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[32][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[32][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[32][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[32] = choices[32][3];
 units[32] = "12";
 comments[32] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[33]= new Array();
 choices[33][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[33][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[33][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[33][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[33] = choices[33][0];
 units[33] = "15";
 comments[33] = "Id Pregunta: 114. ";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[34]= new Array();
 choices[34][0] = "Art&iacute;culo 70.";
 choices[34][1] = "Art&iacute;culo 54.";
 choices[34][2] = "Articulo 62.";
 choices[34][3] = "Articulo 55. 5.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[35]= "36)  La soberan&iacute;a nacional reside en:";
 choices[35]= new Array();
 choices[35][0] = "el Parlamento nacional.";
 choices[35][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[35][2] = "el pueblo espa&ntilde;ol.";
 choices[35][3] = "el Congreso y el Senado.";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[36]= new Array();
 choices[36][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[36][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[36][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[36][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[36] = choices[36][1];
 units[36] = "77";
 comments[36] = "Id Pregunta: 688. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[37]= new Array();
 choices[37][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[37][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[37][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[37][3] = "Sancionar y publicar las leyes.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[38]= "39)  Sobre el recurso de reposici&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[38][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[38][2] = "Ha desaparecido en la Ley 39/2015";
 choices[38][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[38] = choices[38][0];
 units[38] = "8";
 comments[38] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[39]= "40)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[39]= new Array();
 choices[39][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[39][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[39][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[39][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[40]= "41)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[40]= new Array();
 choices[40][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[40][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[40][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[40][3] = "Todas son correctas.";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[41]= "42)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[41]= new Array();
 choices[41][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[41][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[41][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[41][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[41] = choices[41][3];
 units[41] = "10";
 comments[41] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[42]= "43)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[42]= new Array();
 choices[42][0] = "la Administraci&oacute;n General del Estado";
 choices[42][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[42][2] = "las Entidades Locales";
 choices[42][3] = "todas son correctas";
 answers[42] = choices[42][3];
 units[42] = "7";
 comments[42] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[43]= new Array();
 choices[43][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[43][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[43][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[43][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[43] = choices[43][1];
 units[43] = "15";
 comments[43] = "Id Pregunta: 112. ";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[44]= "45)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[44]= new Array();
 choices[44][0] = "Seguridad Social y AEAT";
 choices[44][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[44][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[44][3] = "Todos los anteriores";
 answers[44] = choices[44][3];
 units[44] = "19";
 comments[44] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[45]= new Array();
 choices[45][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[45][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[45][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[45][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[45] = choices[45][1];
 units[45] = "22";
 comments[45] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[46]= "47)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[46]= new Array();
 choices[46][0] = "Resoluci&oacute;n.";
 choices[46][1] = "Desistimiento o renuncia.";
 choices[46][2] = "Caducidad.";
 choices[46][3] = "Todas las anteriores.";
 answers[46] = choices[46][3];
 units[46] = "7";
 comments[46] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[47]= "48)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[47]= new Array();
 choices[47][0] = "Ejecutivo";
 choices[47][1] = "Limitativo";
 choices[47][2] = "Estimativo";
 choices[47][3] = "Progresivo";
 answers[47] = choices[47][1];
 units[47] = "10";
 comments[47] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[48]= new Array();
 choices[48][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[48][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[48][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[48][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[48] = choices[48][3];
 units[48] = "56";
 comments[48] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[49]= new Array();
 choices[49][0] = "JUnit, Artifactory y SonarQube";
 choices[49][1] = "JUnit, Artifactory y Selenium";
 choices[49][2] = "JUnit, SonarQube y Selenium";
 choices[49][3] = "ArtiFactory, SonarQube y Selenium";
 answers[49] = choices[49][2];
 units[49] = "92";
 comments[49] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[50]= "51)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[50][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[50][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[50][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[50] = choices[50][0];
 units[50] = "19";
 comments[50] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[51]= "52)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[51]= new Array();
 choices[51][0] = "los Subsecretarios y Secretarios generales";
 choices[51][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[51][2] = "los Secretarios de Estado";
 choices[51][3] = "los Subdirectores generales";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[52]= new Array();
 choices[52][0] = "Jenkins";
 choices[52][1] = "Hudson";
 choices[52][2] = "SonarQube";
 choices[52][3] = "Todas lo son";
 answers[52] = choices[52][3];
 units[52] = "92";
 comments[52] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[53]= "54)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[53]= new Array();
 choices[53][0] = "Mercurial, Git y Apache Subversion.";
 choices[53][1] = "Gimp, Mercurial y Git.";
 choices[53][2] = "RedMine, Planner y OpenProj.";
 choices[53][3] = "Cassandra, Git y REDIS.";
 answers[53] = choices[53][0];
 units[53] = "92";
 comments[53] = "Id Pregunta: 574. Tema 92. TAI 2016.";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[54]= "55)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[54]= new Array();
 choices[54][0] = "Un informe de g&eacute;nero.";
 choices[54][1] = "La variable de sexo.";
 choices[54][2] = "La variable de edad.";
 choices[54][3] = "La variable de comportamiento.";
 answers[54] = choices[54][1];
 units[54] = "14";
 comments[54] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[55]= "56)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[55]= new Array();
 choices[55][0] = "P&uacute;blica.";
 choices[55][1] = "Privada.";
 choices[55][2] = "Ambas son correctas.";
 choices[55][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[56]= "57)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[56]= new Array();
 choices[56][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[56][1] = "garantizar la conservaci&oacute;n del documento";
 choices[56][2] = "garantizar la autenticidad del documento";
 choices[56][3] = "garantizar la integridad del documento";
 answers[56] = choices[56][0];
 units[56] = "7";
 comments[56] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[57]= "58)  La iniciativa legislativa corresponde:";
 choices[57]= new Array();
 choices[57][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[57][1] = "Al rey y al Gobierno.";
 choices[57][2] = "Al Congreso, al Senado y al Rey.";
 choices[57][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[57] = choices[57][3];
 units[57] = "1";
 comments[57] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[58]= "59)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[58]= new Array();
 choices[58][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[58][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[58][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[58][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[58] = choices[58][0];
 units[58] = "12";
 comments[58] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[59]= "60)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[59]= new Array();
 choices[59][0] = "Interchange of Data between Administrations (IDA)";
 choices[59][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[59][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[59][3] = "Interoperability Electronic European Solution (IEES)";
 answers[59] = choices[59][1];
 units[59] = "43";
 comments[59] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[60]= "61)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[60]= new Array();
 choices[60][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[60][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[60][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[60][3] = "Todos los anteriores";
 answers[60] = choices[60][3];
 units[60] = "19";
 comments[60] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[61]= "62)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[61]= new Array();
 choices[61][0] = "La Ley Org&aacute;nica 2/2011";
 choices[61][1] = "La Ley Org&aacute;nica 2/2012";
 choices[61][2] = "La Ley Org&aacute;nica 3/2012";
 choices[61][3] = "La Ley Org&aacute;nica 2/2002";
 answers[61] = choices[61][1];
 units[61] = "12";
 comments[61] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[62]= "63)  Componen la Comisi&oacute;n Europea:";
 choices[62]= new Array();
 choices[62][0] = "Un Comisario por cada Estado miembro.";
 choices[62][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[62][2] = "Dos Comisarios por cada Estado miembro.";
 choices[62][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[63]= "64)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[63]= new Array();
 choices[63][0] = "Los cr&eacute;ditos";
 choices[63][1] = "Las partidas presupuestarias";
 choices[63][2] = "Los derechos";
 choices[63][3] = "Las obligaciones";
 answers[63] = choices[63][3];
 units[63] = "10";
 comments[63] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[64]= new Array();
 choices[64][0] = "3 pilares";
 choices[64][1] = "4 pilares";
 choices[64][2] = "5 pilares";
 choices[64][3] = "7 pilares";
 answers[64] = choices[64][0];
 units[64] = "17";
 comments[64] = "Id Pregunta: 759. Mercado &Uacute;nico Digital";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[65]= "66)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[65]= new Array();
 choices[65][0] = "192.228.0.0";
 choices[65][1] = "192.228.8.0";
 choices[65][2] = "192.228.16.0";
 choices[65][3] = "192.228.17.0";
 answers[65] = choices[65][2];
 units[65] = "109";
 comments[65] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[66]= "67)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[66]= new Array();
 choices[66][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[66][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[66][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[66][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[66] = choices[66][0];
 units[66] = "60";
 comments[66] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[67]= new Array();
 choices[67][0] = "Crecimiento sostenible";
 choices[67][1] = "Crecimiento inteligente";
 choices[67][2] = "Crecimiento digital";
 choices[67][3] = "Crecimiento integrador";
 answers[67] = choices[67][2];
 units[67] = "19";
 comments[67] = "Id Pregunta: 757. Europa 2020";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[68]= "69)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[68]= new Array();
 choices[68][0] = "P&uacute;blica.";
 choices[68][1] = "Privada.";
 choices[68][2] = "A y B son correctas.";
 choices[68][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[68] = choices[68][2];
 units[68] = "14";
 comments[68] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[69]= "70)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[69]= new Array();
 choices[69][0] = "Prevenir las conductas discriminatorias.";
 choices[69][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[69][2] = "Todas son correctas.";
 choices[69][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[69] = choices[69][2];
 units[69] = "14";
 comments[69] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[70]= new Array();
 choices[70][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[70][1] = "Intervenci&oacute;n formal y material.";
 choices[70][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[70][3] = "Intervenci&oacute;n formal y general.";
 answers[70] = choices[70][1];
 units[70] = "10";
 comments[70] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[71]= new Array();
 choices[71][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[71][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[71][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][1];
 units[71] = "34, 84";
 comments[71] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[72]= "73)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[72]= new Array();
 choices[72][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[72][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[72][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[72][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[72] = choices[72][3];
 units[72] = "5";
 comments[72] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[73]= "74)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[73]= new Array();
 choices[73][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[73][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[73][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[73][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[74][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[74][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[74][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[74] = choices[74][1];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 843. Ley 40/2015";


