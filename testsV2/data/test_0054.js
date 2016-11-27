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

//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[0]= "1)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[0]= new Array();
 choices[0][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[0][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[0][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[0][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[0] = choices[0][0];
 units[0] = "109";
 comments[0] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[1]= "2)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[1]= new Array();
 choices[1][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[1][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[1][2] = "Funcionarios e interinos.";
 choices[1][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[1] = choices[1][3];
 units[1] = "20";
 comments[1] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[2]= "3)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[2]= new Array();
 choices[2][0] = "Cinco a&ntilde;os.";
 choices[2][1] = "Seis a&ntilde;os.";
 choices[2][2] = "Cuatro a&ntilde;os.";
 choices[2][3] = "Tres a&ntilde;os.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[3]= "4)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[3]= new Array();
 choices[3][0] = "los Secretarios generales t&eacute;cnicos";
 choices[3][1] = "los Directores generales";
 choices[3][2] = "los Secretarios generales";
 choices[3][3] = "los Subsecretarios";
 answers[3] = choices[3][1];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[4]= new Array();
 choices[4][0] = "JAXP";
 choices[4][1] = "JNI";
 choices[4][2] = "JNDI";
 choices[4][3] = "JDBC";
 answers[4] = choices[4][1];
 units[4] = "64";
 comments[4] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[5]= new Array();
 choices[5][0] = "Versi&oacute;n digital prioritaria.";
 choices[5][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[5][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[5][3] = "Apertura y transparencia.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[6]= "7)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[6]= new Array();
 choices[6][0] = "Programaci&oacute;n estructurada.";
 choices[6][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[6][2] = "Programaci&oacute;n extrema.";
 choices[6][3] = "Programaci&oacute;n Espuria.";
 answers[6] = choices[6][2];
 units[6] = "92";
 comments[6] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[7]= "8)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[7]= new Array();
 choices[7][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[7][1] = "La libertad sexual y religiosa.";
 choices[7][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[7][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[7] = choices[7][3];
 units[7] = "1";
 comments[7] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[8]= "9)  El Presupuesto por programas sirve para saber...";
 choices[8]= new Array();
 choices[8][0] = "En qu&eacute; nos gastamos el dinero";
 choices[8][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[8][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[8][3] = "Qui&eacute;n se gasta el dinero";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[9]= "10)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[9]= new Array();
 choices[9][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[9][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[9][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[9][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[10]= new Array();
 choices[10][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[10][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[10][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[10][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[10] = choices[10][1];
 units[10] = "7";
 comments[10] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[11]= "12)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[11]= new Array();
 choices[11][0] = "Fat y Ntfs.";
 choices[11][1] = "Extfat y Fat.";
 choices[11][2] = "Fat y Nfst.";
 choices[11][3] = "ext2fs y Ntfs.";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[12]= new Array();
 choices[12][0] = "Jenkins";
 choices[12][1] = "Hudson";
 choices[12][2] = "SonarQube";
 choices[12][3] = "Todas lo son";
 answers[12] = choices[12][3];
 units[12] = "92";
 comments[12] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[13]= new Array();
 choices[13][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[13][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[13][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[13][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[14]= "15)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[14]= new Array();
 choices[14][0] = "formular solicitudes";
 choices[14][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[14][2] = "presentar declaraciones responsables o comunicaciones";
 choices[14][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[14] = choices[14][1];
 units[14] = "7";
 comments[14] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[15]= new Array();
 choices[15][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[15][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[15][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[15][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[16]= "17)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[16]= new Array();
 choices[16][0] = "Los ocupados y los parados activos";
 choices[16][1] = "S&oacute;lo los ocupados";
 choices[16][2] = "Los ocupados y los inactivos";
 choices[16][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[16] = choices[16][0];
 units[16] = "12";
 comments[16] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[17]= "18)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[17]= new Array();
 choices[17][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[17][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[17][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[17][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[17] = choices[17][3];
 units[17] = "62";
 comments[17] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[18]= "19)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[18][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[18][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[18][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[18] = choices[18][3];
 units[18] = "14";
 comments[18] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[19]= "20)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[19]= new Array();
 choices[19][0] = "Almacenamiento orientado a columnas";
 choices[19][1] = "Framework MapReduce";
 choices[19][2] = "OLTP";
 choices[19][3] = "Bases de datos clave-valor";
 answers[19] = choices[19][2];
 units[19] = "73";
 comments[19] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[20]= "21)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[20]= new Array();
 choices[20][0] = "Rey.";
 choices[20][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[20][2] = "Constituci&oacute;n.";
 choices[20][3] = "Pueblo.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[21]= new Array();
 choices[21][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[21][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[21][2] = "Fomentar el despliegue de redes y servicios";
 choices[21][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[21] = choices[21][0];
 units[21] = "19";
 comments[21] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[22]= new Array();
 choices[22][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[22][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[22][2] = "Las respuestas a) b) no son correctas.";
 choices[22][3] = "Las respuestas a) y b) son correctas.";
 answers[22] = choices[22][3];
 units[22] = "10";
 comments[22] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[23]= "24)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[23]= new Array();
 choices[23][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[23][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[23][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[23][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[24]= new Array();
 choices[24][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[24][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[24][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][1];
 units[24] = "19";
 comments[24] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[25]= "26)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[25]= new Array();
 choices[25][0] = "SMB3";
 choices[25][1] = "AFP";
 choices[25][2] = "NFS";
 choices[25][3] = "FTP";
 answers[25] = choices[25][0];
 units[25] = "59";
 comments[25] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[26]= new Array();
 choices[26][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[26][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[26][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[26][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[26] = choices[26][2];
 units[26] = "43";
 comments[26] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[27]= new Array();
 choices[27][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[27][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[27][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[27][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[27] = choices[27][0];
 units[27] = "15";
 comments[27] = "Id Pregunta: 114. ";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[28]= new Array();
 choices[28][0] = "Crecimiento sostenible";
 choices[28][1] = "Crecimiento inteligente";
 choices[28][2] = "Crecimiento digital";
 choices[28][3] = "Crecimiento integrador";
 answers[28] = choices[28][2];
 units[28] = "19";
 comments[28] = "Id Pregunta: 757. Europa 2020";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[29]= new Array();
 choices[29][0] = "a) Los cuatro ejercicios siguientes.";
 choices[29][1] = "b) El ejercicio siguiente.";
 choices[29][2] = "c) Los dos ejercicios siguientes.";
 choices[29][3] = "d) Los tres ejercicios siguientes.";
 answers[29] = choices[29][3];
 units[29] = "10";
 comments[29] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[30]= new Array();
 choices[30][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[30][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[30][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[30][3] = "Sancionar y publicar las leyes.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[31]= "32)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[31]= new Array();
 choices[31][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[31][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[31][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[31][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[32]= "33)  El sector p&uacute;blico institucional se integra por:";
 choices[32]= new Array();
 choices[32][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[32][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[32][2] = "las Universidades p&uacute;blicas";
 choices[32][3] = "todas son correctas";
 answers[32] = choices[32][3];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[33]= "34)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[33]= new Array();
 choices[33][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[33][1] = "Tratarse de un acto no susceptible de recurso";
 choices[33][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[33][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[33] = choices[33][2];
 units[33] = "8";
 comments[33] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[34]= "35)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[34]= new Array();
 choices[34][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[34][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[34][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[34][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[34] = choices[34][0];
 units[34] = "31";
 comments[34] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[35]= "36)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[35]= new Array();
 choices[35][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[35][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[35][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[35][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[35] = choices[35][3];
 units[35] = "86";
 comments[35] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[36]= new Array();
 choices[36][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[36][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[36][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[36][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[36] = choices[36][0];
 units[36] = "75";
 comments[36] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[37]= "38)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[37]= new Array();
 choices[37][0] = "la poblaci&oacute;n del territorio";
 choices[37][1] = "el volumen de gesti&oacute;n";
 choices[37][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[37][3] = "todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[38]= new Array();
 choices[38][0] = "Dos Cap&iacute;tulos.";
 choices[38][1] = "Tres Cap&iacute;tulos.";
 choices[38][2] = "Un Cap&iacute;tulo.";
 choices[38][3] = "Cuatro Cap&iacute;tulos.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[39]= new Array();
 choices[39][0] = "A nivel de secci&oacute;n de programa.";
 choices[39][1] = "A nivel de grupo de programa.";
 choices[39][2] = "Ninguna de las respuestas es correcta.";
 choices[39][3] = "A nivel de programa.";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[40]= new Array();
 choices[40][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[40][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[40][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[40][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[40] = choices[40][2];
 units[40] = "22";
 comments[40] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[41]= "42)  La Poblaci&oacute;n Activa incluye a:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[41][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[41][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[41][3] = "Todo aquel que desea trabajar";
 answers[41] = choices[41][2];
 units[41] = "15";
 comments[41] = "Id Pregunta: 110. ";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[42]= new Array();
 choices[42][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[42][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[42][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[42][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[42] = choices[42][3];
 units[42] = "12";
 comments[42] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[43]= "44)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[43]= new Array();
 choices[43][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[43][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[43][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[43][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[44]= new Array();
 choices[44][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[44][1] = "Solamente el Congreso.";
 choices[44][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[44][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[45][1] = "El responsable de la custodia de los datos enviados.";
 choices[45][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[45][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[45] = choices[45][3];
 units[45] = "35";
 comments[45] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[46]= "47)  Los Subdirectores generales:";
 choices[46]= new Array();
 choices[46][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[46][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[46][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[46][3] = "todas son correctas";
 answers[46] = choices[46][1];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[47]= new Array();
 choices[47][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[47][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[47][2] = "Servicio de seguridad gestionada";
 choices[47][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[47] = choices[47][1];
 units[47] = "26";
 comments[47] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[48]= "49)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[48]= new Array();
 choices[48][0] = "la Administraci&oacute;n General del Estado";
 choices[48][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[48][2] = "las Entidades Locales";
 choices[48][3] = "todas son correctas";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[49]= "50)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[49]= new Array();
 choices[49][0] = "6 principios.";
 choices[49][1] = "7 principios.";
 choices[49][2] = "5 principios.";
 choices[49][3] = "6 directrices.";
 answers[49] = choices[49][1];
 units[49] = "28";
 comments[49] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[50]= "51)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[50]= new Array();
 choices[50][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[50][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[50][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[50][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[50] = choices[50][0];
 units[50] = "14";
 comments[50] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[51]= "52)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[51]= new Array();
 choices[51][0] = "Gesti&oacute;n de la disponibilidad";
 choices[51][1] = "Gesti&oacute;n de la demanda";
 choices[51][2] = "Gesti&oacute;n de entregas";
 choices[51][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[51] = choices[51][0];
 units[51] = "101";
 comments[51] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[52]= "53)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[52][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[52][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[52][3] = "Todas las anteriores son ciertas";
 answers[52] = choices[52][3];
 units[52] = "8";
 comments[52] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[53]= "54)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[53]= new Array();
 choices[53][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[53][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[53][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[53][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[54]= new Array();
 choices[54][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[54][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[54][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[54][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[54] = choices[54][1];
 units[54] = "26";
 comments[54] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[55]= new Array();
 choices[55][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[55][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[55][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[55][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[55] = choices[55][0];
 units[55] = "73";
 comments[55] = "Id Pregunta: 654. ";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[56]= "57)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[56][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[56][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[56][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[56] = choices[56][2];
 units[56] = "83";
 comments[56] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[57]= "58)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[57]= new Array();
 choices[57][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[57][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[57][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[57][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[58]= "59)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[58]= new Array();
 choices[58][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[58][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[58][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[58][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[58] = choices[58][2];
 units[58] = "101";
 comments[58] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[59]= "60)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[59]= new Array();
 choices[59][0] = "Subsecretario";
 choices[59][1] = "Subdirector general";
 choices[59][2] = "Secretario de Estado";
 choices[59][3] = "ninguna es correcta";
 answers[59] = choices[59][0];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[60]= "61)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[60]= new Array();
 choices[60][0] = "solo mediante ley";
 choices[60][1] = "reglamentariamente";
 choices[60][2] = "mediante ley o reglamentariamente";
 choices[60][3] = "ninguna es correcta";
 answers[60] = choices[60][0];
 units[60] = "7";
 comments[60] = "Id Pregunta: 511. LEY 39/2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[61]= "62)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[61]= new Array();
 choices[61][0] = "un &oacute;rgano superior";
 choices[61][1] = "un &oacute;rgano directivo";
 choices[61][2] = "un &oacute;rgano superior o directivo";
 choices[61][3] = "ninguna es correcta";
 answers[61] = choices[61][2];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[62]= "63)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[62]= new Array();
 choices[62][0] = "Ejecutivo";
 choices[62][1] = "Limitativo";
 choices[62][2] = "Estimativo";
 choices[62][3] = "Progresivo";
 answers[62] = choices[62][1];
 units[62] = "10";
 comments[62] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[63]= "64)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[63]= new Array();
 choices[63][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[63][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[63][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[63][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[63] = choices[63][0];
 units[63] = "35";
 comments[63] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[64]= "65)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[64]= new Array();
 choices[64][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[64][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[64][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[64][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[64] = choices[64][0];
 units[64] = "1";
 comments[64] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[65]= "66)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[65]= new Array();
 choices[65][0] = "Subgrupo A1";
 choices[65][1] = "Subgrupo A2";
 choices[65][2] = "Subgrupo B";
 choices[65][3] = "Subgrupo C1";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[66]= "67)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[66]= new Array();
 choices[66][0] = "Resoluci&oacute;n.";
 choices[66][1] = "Desistimiento o renuncia.";
 choices[66][2] = "Caducidad.";
 choices[66][3] = "Todas las anteriores.";
 answers[66] = choices[66][3];
 units[66] = "7";
 comments[66] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[67]= "68)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[67]= new Array();
 choices[67][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[67][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[67][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[67][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[68]= new Array();
 choices[68][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[68][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[68][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[68][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[68] = choices[68][2];
 units[68] = "47";
 comments[68] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[69]= "70)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[69]= new Array();
 choices[69][0] = "Los propios miembros del Tribunal.";
 choices[69][1] = "El Consejo de Europa.";
 choices[69][2] = "El Consejo Europeo.";
 choices[69][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[70]= "71)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[70]= new Array();
 choices[70][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[70][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[70][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[70][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[70] = choices[70][1];
 units[70] = "92";
 comments[70] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[71]= "72)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[71]= new Array();
 choices[71][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[71][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[71][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[71][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[71] = choices[71][1];
 units[71] = "19";
 comments[71] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[72]= new Array();
 choices[72][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[72][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[72][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[72][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[72] = choices[72][3];
 units[72] = "1";
 comments[72] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[73]= "74)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[73]= new Array();
 choices[73][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[73][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[73][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[73][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[73] = choices[73][2];
 units[73] = "47";
 comments[73] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[74]= new Array();
 choices[74][0] = "Backlog refinement";
 choices[74][1] = "Backlog refinement";
 choices[74][2] = "A y b son correctas";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][2];
 units[74] = "34, 84";
 comments[74] = "Id Pregunta: 727. Metodologias &aacute;giles";


