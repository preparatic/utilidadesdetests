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

//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[0]= new Array();
 choices[0][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[0][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[0][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[0][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[0] = choices[0][3];
 units[0] = "10";
 comments[0] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[1]= "2)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[1]= new Array();
 choices[1][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[1][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[1][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[1][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[1] = choices[1][0];
 units[1] = "65";
 comments[1] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10054 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[2]= new Array();
 choices[2][0] = "DoS";
 choices[2][1] = "Phishing";
 choices[2][2] = "Sniffing";
 choices[2][3] = "Spoofing";
 answers[2] = choices[2][3];
 units[2] = "119";
 comments[2] = "Id Pregunta: 10054. AGE A1 2015";


//  Id pregunta: 10319 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[3]= new Array();
 choices[3][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[3][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[3][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[3][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10611 Año de creación de pregunta: 2016
 questions[4]= "5)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[4]= new Array();
 choices[4][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[4][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[4][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[4][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[4] = choices[4][1];
 units[4] = "63";
 comments[4] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10205 Año de creación de pregunta: 2016
 questions[5]= "6)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[5]= new Array();
 choices[5][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[5][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[5][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[5][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 10205. CONSTITUCION1978";


//  Id pregunta: 10391 Año de creación de pregunta: 2016
 questions[6]= "7)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[6]= new Array();
 choices[6][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[6][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[6][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[6][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[6] = choices[6][2];
 units[6] = "14";
 comments[6] = "Id Pregunta: 10391. POLITICAS DE IGUALDAD";


//  Id pregunta: 10093 Año de creación de pregunta: 2016
 questions[7]= "8)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "Almacenamiento orientado a columnas";
 choices[7][1] = "Framework MapReduce";
 choices[7][2] = "OLTP";
 choices[7][3] = "Bases de datos clave-valor";
 answers[7] = choices[7][2];
 units[7] = "73";
 comments[7] = "Id Pregunta: 10093. AGE A1 2015";


//  Id pregunta: 10486 Año de creación de pregunta: 2016
 questions[8]= "9)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[8]= new Array();
 choices[8][0] = "La Ley General Tributaria.";
 choices[8][1] = "La Ley Presupuestaria.";
 choices[8][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[8][3] = "Ninguna de las respuestas es correcta.";
 answers[8] = choices[8][0];
 units[8] = "10";
 comments[8] = "Id Pregunta: 10486. PRESUPUESTOS GENERALES";


//  Id pregunta: 10404 Año de creación de pregunta: 2016
 questions[9]= "10)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[9]= new Array();
 choices[9][0] = "El Tratado de Roma, 1957.";
 choices[9][1] = "El Acta &Uacute;nica Europea.";
 choices[9][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[9][3] = "Ninguna es correcta.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 10404. POLITICAS DE IGUALDAD";


//  Id pregunta: 10368 Año de creación de pregunta: 2016
 questions[10]= "11)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[10]= new Array();
 choices[10][0] = "Un Reglamento.";
 choices[10][1] = "Un Decreto.";
 choices[10][2] = "Una Ley.";
 choices[10][3] = "Un Real-Decreto.";
 answers[10] = choices[10][2];
 units[10] = "5";
 comments[10] = "Id Pregunta: 10368. UNION EUROPEA";


//  Id pregunta: 10299 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[11]= new Array();
 choices[11][0] = "Quince miembros.";
 choices[11][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[11][2] = "Los miembros que determine el Consejo.";
 choices[11][3] = "Un Presidente y quince miembros.";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 10299. UNION EUROPEA";


//  Id pregunta: 10212 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[12]= new Array();
 choices[12][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[12][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[12][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[12][3] = "El Senado se compone de 350 senadores.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10212. CONSTITUCION1978";


//  Id pregunta: 10117 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[13]= new Array();
 choices[13][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[13][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[13][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[13][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[13] = choices[13][0];
 units[13] = "15";
 comments[13] = "Id Pregunta: 10117. ";


//  Id pregunta: 10172 Año de creación de pregunta: 2016
 questions[14]= "15)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[14][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[14][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[14][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 10172. CONSTITUCION1978";


//  Id pregunta: 10490 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[15]= new Array();
 choices[15][0] = "A los cinco a&ntilde;os.";
 choices[15][1] = "A los dos a&ntilde;os.";
 choices[15][2] = "A los tres a&ntilde;os.";
 choices[15][3] = "A los cuatro a&ntilde;os.";
 answers[15] = choices[15][0];
 units[15] = "10";
 comments[15] = "Id Pregunta: 10490. PRESUPUESTOS GENERALES";


//  Id pregunta: 10023 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[16]= new Array();
 choices[16][0] = "SPARQL";
 choices[16][1] = "UnQL";
 choices[16][2] = "XQUERY";
 choices[16][3] = "RQL";
 answers[16] = choices[16][0];
 units[16] = "74";
 comments[16] = "Id Pregunta: 10023. AGE A1 2015";


//  Id pregunta: 10387 Año de creación de pregunta: 2016
 questions[17]= "18)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[17][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[17][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[17][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[17] = choices[17][3];
 units[17] = "14";
 comments[17] = "Id Pregunta: 10387. POLITICAS DE IGUALDAD";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[18]= "19)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[18]= new Array();
 choices[18][0] = "El servicio de teleasistencia.";
 choices[18][1] = "El servicio de ayuda a domicilio.";
 choices[18][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[18][3] = "Todas las anteriores son correctas.";
 answers[18] = choices[18][3];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10139 Año de creación de pregunta: 2016
 questions[19]= "20)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[19]= new Array();
 choices[19][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[19][1] = "Static &amp; Active process for REsolution Bank.";
 choices[19][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[19][3] = "Super Active REsponse for Banks";
 answers[19] = choices[19][0];
 units[19] = "12";
 comments[19] = "Id Pregunta: 10139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10092 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[20]= new Array();
 choices[20][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[20][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[20][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[20][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[20] = choices[20][0];
 units[20] = "48";
 comments[20] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10585 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[21]= new Array();
 choices[21][0] = "La CETIC";
 choices[21][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[21][2] = "La DTIC";
 choices[21][3] = "Ninguno de los anteriores";
 answers[21] = choices[21][1];
 units[21] = "19";
 comments[21] = "Id Pregunta: 10585. Estrategia TIC";


//  Id pregunta: 10527 Año de creación de pregunta: 2016
 questions[22]= "23)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[22]= new Array();
 choices[22][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[22][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[22][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[22][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[22] = choices[22][2];
 units[22] = "7";
 comments[22] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10624 Año de creación de pregunta: 2016
 questions[23]= "24)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[23]= new Array();
 choices[23][0] = "En sentencias switch para alterar el control de flujo.";
 choices[23][1] = "Para manejar excepciones.";
 choices[23][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[23][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[23] = choices[23][1];
 units[23] = "64";
 comments[23] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10128 Año de creación de pregunta: 2016
 questions[24]= "25)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[24]= new Array();
 choices[24][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[24][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[24][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[24][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[24] = choices[24][2];
 units[24] = "22";
 comments[24] = "Id Pregunta: 10128. ";


//  Id pregunta: 10038 Año de creación de pregunta: 2016
 questions[25]= "26)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[25]= new Array();
 choices[25][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[25][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[25][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[25][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[25] = choices[25][3];
 units[25] = "62";
 comments[25] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10591 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[26]= new Array();
 choices[26][0] = "La CETIC";
 choices[26][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[26][2] = "La DTIC";
 choices[26][3] = "El MHFP";
 answers[26] = choices[26][0];
 units[26] = "19";
 comments[26] = "Id Pregunta: 10591. Estrategia TIC";


//  Id pregunta: 10640 Año de creación de pregunta: 2016
 questions[27]= "28)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[27]= new Array();
 choices[27][0] = "Fat y Ntfs.";
 choices[27][1] = "Extfat y Fat.";
 choices[27][2] = "Fat y Nfst.";
 choices[27][3] = "ext2fs y Ntfs.";
 answers[27] = choices[27][0];
 units[27] = "58";
 comments[27] = "Id Pregunta: 10640. Junta de Extremadura A1 2015";


//  Id pregunta: 10201 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[28]= new Array();
 choices[28][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[28][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[28][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[28][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[28] = choices[28][2];
 units[28] = "1";
 comments[28] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10039 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[29]= new Array();
 choices[29][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[29][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[29][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[29][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[29] = choices[29][2];
 units[29] = "71";
 comments[29] = "Id Pregunta: 10039. AGE A1 2015";


//  Id pregunta: 10669 Año de creación de pregunta: 2016
 questions[30]= "31)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[30]= new Array();
 choices[30][0] = "Resoluci&oacute;n.";
 choices[30][1] = "Desistimiento o renuncia.";
 choices[30][2] = "Caducidad.";
 choices[30][3] = "Todas las anteriores.";
 answers[30] = choices[30][3];
 units[30] = "7";
 comments[30] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10073 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[31]= new Array();
 choices[31][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[31][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[31][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[31][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[31] = choices[31][1];
 units[31] = "44";
 comments[31] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10055 Año de creación de pregunta: 2016
 questions[32]= "33)  WS-Security contiene especificaciones sobre:";
 choices[32]= new Array();
 choices[32][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[32][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[32][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[32][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[32] = choices[32][1];
 units[32] = "119";
 comments[32] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10466 Año de creación de pregunta: 2016
 questions[33]= "34)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "Con el a&ntilde;o anterior.";
 choices[33][1] = "Con los tres a&ntilde;os anteriores.";
 choices[33][2] = "Con el a&ntilde;o natural.";
 choices[33][3] = "Con los dos a&ntilde;os anteriores.";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10349 Año de creación de pregunta: 2016
 questions[34]= "35)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[34]= new Array();
 choices[34][0] = "El 23 de julio de 1952.";
 choices[34][1] = "El 18 de abril de 1951.";
 choices[34][2] = "El 16 de abril de 1948.";
 choices[34][3] = "d)Ninguna de las respuestas son correctas.";
 answers[34] = choices[34][0];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10349. UNION EUROPEA";


//  Id pregunta: 10112 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[35]= new Array();
 choices[35][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[35][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[35][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[35][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[35] = choices[35][1];
 units[35] = "15";
 comments[35] = "Id Pregunta: 10112. ";


//  Id pregunta: 10110 Año de creación de pregunta: 2016
 questions[36]= "37)  La Poblaci&oacute;n Activa incluye a:";
 choices[36]= new Array();
 choices[36][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[36][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[36][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[36][3] = "Todo aquel que desea trabajar";
 answers[36] = choices[36][2];
 units[36] = "15";
 comments[36] = "Id Pregunta: 10110. ";


//  Id pregunta: 10107 Año de creación de pregunta: 2016
 questions[37]= "38)  Son bases de datos NoSQL orientadas a objetos:";
 choices[37]= new Array();
 choices[37][0] = "GemStone";
 choices[37][1] = "Zope Object DB";
 choices[37][2] = "Las dos anteriores";
 choices[37][3] = "Solo B)";
 answers[37] = choices[37][2];
 units[37] = "73";
 comments[37] = "Id Pregunta: 10107. ";


//  Id pregunta: 10081 Año de creación de pregunta: 2016
 questions[38]= "39)  El lenguaje SPARK es un subconjunto de:";
 choices[38]= new Array();
 choices[38][0] = "Java";
 choices[38][1] = "Fortran";
 choices[38][2] = "Ruby";
 choices[38][3] = "Ada";
 answers[38] = choices[38][3];
 units[38] = "73";
 comments[38] = "Id Pregunta: 10081. AGE A1 2015";


//  Id pregunta: 10294 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[39]= new Array();
 choices[39][0] = "Al Consejo Europeo.";
 choices[39][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[39][2] = "A la Comisi&oacute;n Europea.";
 choices[39][3] = "Al Parlamento Europeo.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10294. UNION EUROPEA";


//  Id pregunta: 10238 Año de creación de pregunta: 2016
 questions[40]= "41)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[40]= new Array();
 choices[40][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[40][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[40][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[40][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[40] = choices[40][1];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10238. CONSTITUCION1978";


//  Id pregunta: 10423 Año de creación de pregunta: 2016
 questions[41]= "42)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[41]= new Array();
 choices[41][0] = "El derecho a un permiso.";
 choices[41][1] = "Una prestaci&oacute;n por paternidad.";
 choices[41][2] = "Ambas son correctas.";
 choices[41][3] = "18 d&iacute;as de permiso.";
 answers[41] = choices[41][2];
 units[41] = "14";
 comments[41] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10445 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[42]= new Array();
 choices[42][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[42][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[42][2] = "Fecha de otorgamiento.";
 choices[42][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[42] = choices[42][1];
 units[42] = "43";
 comments[42] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10413 Año de creación de pregunta: 2016
 questions[43]= "44)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[43]= new Array();
 choices[43][0] = "La mujeres.";
 choices[43][1] = "Lo hombres.";
 choices[43][2] = "Todas las personas.";
 choices[43][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 10413. POLITICAS DE IGUALDAD";


//  Id pregunta: 10546 Año de creación de pregunta: 2016
 questions[44]= "45)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[44]= new Array();
 choices[44][0] = "Conformidad";
 choices[44][1] = "Responsabilidad";
 choices[44][2] = "Adquisici&oacute;n";
 choices[44][3] = "Desempe&ntilde;o";
 answers[44] = choices[44][0];
 units[44] = "26";
 comments[44] = "Id Pregunta: 10546. Gobernanza TIC";


//  Id pregunta: 10470 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[45]= new Array();
 choices[45][0] = "El Ministro de Econom&iacute;a.";
 choices[45][1] = "El Gobierno.";
 choices[45][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[45][3] = "El Presidente del Gobierno.";
 answers[45] = choices[45][1];
 units[45] = "10";
 comments[45] = "Id Pregunta: 10470. PRESUPUESTOS GENERALES";


//  Id pregunta: 10237 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[46][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[46][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[46][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[46] = choices[46][2];
 units[46] = "1";
 comments[46] = "Id Pregunta: 10237. CONSTITUCION1978";


//  Id pregunta: 10249 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[47]= new Array();
 choices[47][0] = "Art&iacute;culo 16.2.";
 choices[47][1] = "Art&iacute;culo 17.1.";
 choices[47][2] = "Art&iacute;culo 18.1.";
 choices[47][3] = "Art&iacute;culo 18.2.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10398 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[48]= new Array();
 choices[48][0] = "Art. 13, L.O.3/2007.";
 choices[48][1] = "Art. 14, L.O.3/2007.";
 choices[48][2] = "Art. 11, L.O.3/2007.";
 choices[48][3] = "Ninguna es correcta.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10153 Año de creación de pregunta: 2016
 questions[49]= "50)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[49]= new Array();
 choices[49][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[49][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[49][2] = "a y b son correctas";
 choices[49][3] = "a y b son incorrectas";
 answers[49] = choices[49][0];
 units[49] = "7";
 comments[49] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10437 Año de creación de pregunta: 2016
 questions[50]= "51)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[50]= new Array();
 choices[50][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[50][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[50][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[50][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[50] = choices[50][0];
 units[50] = "43";
 comments[50] = "Id Pregunta: 10437. SERVICIOS COMUNES";


//  Id pregunta: 10382 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[51]= new Array();
 choices[51][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[51][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[51][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[51][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 10382. POLITICAS DE IGUALDAD";


//  Id pregunta: 10477 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[52]= new Array();
 choices[52][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[52][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[52][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[52][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[52] = choices[52][2];
 units[52] = "10";
 comments[52] = "Id Pregunta: 10477. PRESUPUESTOS GENERALES";


//  Id pregunta: 10272 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[53]= new Array();
 choices[53][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[53][1] = "Anteriormente se denominaba Sonar.";
 choices[53][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[53][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[53] = choices[53][2];
 units[53] = "92";
 comments[53] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[54]= "55)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[54]= new Array();
 choices[54][0] = "Pas&oacute; de 518 a 626.";
 choices[54][1] = "Pas&oacute; de 434 a 518.";
 choices[54][2] = "Pas&oacute; de 345 a 512.";
 choices[54][3] = "Pas&oacute; de 435 a 610.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10334 Año de creación de pregunta: 2016
 questions[55]= "56)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[55]= new Array();
 choices[55][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[55][1] = "Ninguna de las respuestas es correcta.";
 choices[55][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[55][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10334. UNION EUROPEA";


//  Id pregunta: 10610 Año de creación de pregunta: 2016
 questions[56]= "57)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[56]= new Array();
 choices[56][0] = "GROUP BY.";
 choices[56][1] = "COUNT.";
 choices[56][2] = "WHERE.";
 choices[56][3] = "DISTINCT.";
 answers[56] = choices[56][0];
 units[56] = "60";
 comments[56] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10430 Año de creación de pregunta: 2016
 questions[57]= "58)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[57]= new Array();
 choices[57][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[57][1] = "Protecci&oacute;n de su salud.";
 choices[57][2] = "Ninguna es correcta.";
 choices[57][3] = "A y B son correctas.";
 answers[57] = choices[57][1];
 units[57] = "14";
 comments[57] = "Id Pregunta: 10430. POLITICAS DE IGUALDAD";


//  Id pregunta: 10160 Año de creación de pregunta: 2016
 questions[58]= "59)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[58]= new Array();
 choices[58][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[58][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[58][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[58][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[58] = choices[58][1];
 units[58] = "19";
 comments[58] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10152 Año de creación de pregunta: 2016
 questions[59]= "60)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[59]= new Array();
 choices[59][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[59][1] = "garantizar la conservaci&oacute;n del documento";
 choices[59][2] = "garantizar la autenticidad del documento";
 choices[59][3] = "garantizar la integridad del documento";
 answers[59] = choices[59][0];
 units[59] = "7";
 comments[59] = "Id Pregunta: 10152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 10662 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[60]= new Array();
 choices[60][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[60][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[60][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[60][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que haya sido elaborado por &eacute;ste.";
 answers[60] = choices[60][1];
 units[60] = "7";
 comments[60] = "Id Pregunta: 10662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[61]= new Array();
 choices[61][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[61][1] = "Pasivos financieros y transferencias de capital.";
 choices[61][2] = "Activos financieros y pasivos financieros.";
 choices[61][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[61] = choices[61][2];
 units[61] = "10";
 comments[61] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10178 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[62]= new Array();
 choices[62][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[62][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[62][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[62][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 10178. CONSTITUCION1978";


//  Id pregunta: 10318 Año de creación de pregunta: 2016
 questions[63]= "64)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[63]= new Array();
 choices[63][0] = "Consejos y Servicios.";
 choices[63][1] = "Servicios permanentes y no permanentes.";
 choices[63][2] = "Direcciones Generales.";
 choices[63][3] = "Direcciones ministeriales.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10318. UNION EUROPEA";


//  Id pregunta: 10142 Año de creación de pregunta: 2016
 questions[64]= "65)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[64]= new Array();
 choices[64][0] = "De un mes si el acto fuera presunto";
 choices[64][1] = "De un mes si el acto fuera expreso";
 choices[64][2] = "De un mes en cualquier caso";
 choices[64][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[64] = choices[64][1];
 units[64] = "8";
 comments[64] = "Id Pregunta: 10142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10536 Año de creación de pregunta: 2016
 questions[65]= "66)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[65]= new Array();
 choices[65][0] = "apud acta";
 choices[65][1] = "presencialmente";
 choices[65][2] = "electr&oacute;nicamente";
 choices[65][3] = "todas son correctas";
 answers[65] = choices[65][3];
 units[65] = "7";
 comments[65] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10377 Año de creación de pregunta: 2016
 questions[66]= "67)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[66]= new Array();
 choices[66][0] = "Tener una estructura institucional.";
 choices[66][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[66][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[66][3] = "Todas las respuestas son correctas.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10032 Año de creación de pregunta: 2016
 questions[67]= "68)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[67]= new Array();
 choices[67][0] = "ASF-AL (Apache License 2.0)";
 choices[67][1] = "EUPL (European Union Public License)";
 choices[67][2] = "LGPL (Lesser General Public License)";
 choices[67][3] = "MIT(MIT License)";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 10032. AGE A1 2015";


//  Id pregunta: 10408 Año de creación de pregunta: 2016
 questions[68]= "69)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[68]= new Array();
 choices[68][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[68][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[68][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[68][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[68] = choices[68][1];
 units[68] = "14";
 comments[68] = "Id Pregunta: 10408. POLITICAS DE IGUALDAD";


//  Id pregunta: 10469 Año de creación de pregunta: 2016
 questions[69]= "70)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[69][1] = "Las inversiones reales y financieras.";
 choices[69][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[69][3] = "Las transferencias de capital y las inversiones reales.";
 answers[69] = choices[69][3];
 units[69] = "10";
 comments[69] = "Id Pregunta: 10469. PRESUPUESTOS GENERALES";


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


//  Id pregunta: 10248 Año de creación de pregunta: 2016
 questions[71]= "72)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[71]= new Array();
 choices[71][0] = "61";
 choices[71][1] = "53";
 choices[71][2] = "65";
 choices[71][3] = "67";
 answers[71] = choices[71][1];
 units[71] = "1";
 comments[71] = "Id Pregunta: 10248. CONSTITUCION1978";


//  Id pregunta: 10138 Año de creación de pregunta: 2016
 questions[72]= "73)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[72]= new Array();
 choices[72][0] = "La Ley Org&aacute;nica 2/2011";
 choices[72][1] = "La Ley Org&aacute;nica 2/2012";
 choices[72][2] = "La Ley Org&aacute;nica 3/2012";
 choices[72][3] = "La Ley Org&aacute;nica 2/2002";
 answers[72] = choices[72][1];
 units[72] = "12";
 comments[72] = "Id Pregunta: 10138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10044 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[73][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[73][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[73][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[73] = choices[73][1];
 units[73] = "60";
 comments[73] = "Id Pregunta: 10044. AGE A1 2015";


//  Id pregunta: 10473 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[74]= new Array();
 choices[74][0] = "Ley 50/1997, del Gobierno.";
 choices[74][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[74][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[74][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[74] = choices[74][1];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10473. PRESUPUESTOS GENERALES";


