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

//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[0]= "1)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[0]= new Array();
 choices[0][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[0][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[0][2] = "A y B son correctas.";
 choices[0][3] = "A y B son incorrectas.";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[0] = 844


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; es SonarQube?";
 choices[1]= new Array();
 choices[1][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[1][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[1][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[1][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[1] = choices[1][2];
 units[1] = "92";
 comments[1] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[1] = 700


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[2]= "3)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[2]= new Array();
 choices[2][0] = "192.228.0.0";
 choices[2][1] = "192.228.8.0";
 choices[2][2] = "192.228.16.0";
 choices[2][3] = "192.228.17.0";
 answers[2] = choices[2][2];
 units[2] = "109";
 comments[2] = "Id Pregunta: 616. Junta de Extremadura A1 2015";
 preguntaids[2] = 616


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[3]= "4)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[3]= new Array();
 choices[3][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[3][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[3][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[3][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[3] = choices[3][0];
 units[3] = "10";
 comments[3] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";
 preguntaids[3] = 484


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[4]= "5)  La recusaci&oacute;n se plantear&aacute;...";
 choices[4]= new Array();
 choices[4][0] = "S&oacute;lo verbalmente";
 choices[4][1] = "S&oacute;lo por escrito";
 choices[4][2] = "Verbalmente o por escrito";
 choices[4][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[4] = choices[4][0];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[4] = 830


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[5]= new Array();
 choices[5][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[5][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[5][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[5][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[5] = 843


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[6]= "7)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[6]= new Array();
 choices[6][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[6][1] = "La CETIC";
 choices[6][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[6][3] = "El MHFP";
 answers[6] = choices[6][0];
 units[6] = "19";
 comments[6] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[6] = 595


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[7]= "8)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[7]= new Array();
 choices[7][0] = "Interoperabilidad";
 choices[7][1] = "Integridad";
 choices[7][2] = "Capital humano";
 choices[7][3] = "Trazabilidad";
 answers[7] = choices[7][2];
 units[7] = "19";
 comments[7] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[7] = 166


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[8]= "9)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[8]= new Array();
 choices[8][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[8][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[8][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[8][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[8] = choices[8][2];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[8] = 784


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[9]= "10)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[9][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[9][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[9][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[9] = choices[9][3];
 units[9] = "22";
 comments[9] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[9] = 712


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[10]= "11)  Las Universidades p&uacute;blicas:";
 choices[10]= new Array();
 choices[10][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[10][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[10][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[10][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[10] = choices[10][1];
 units[10] = "7";
 comments[10] = "Id Pregunta: 518. LEY 39/2015";
 preguntaids[10] = 518


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la respuesta correcta:";
 choices[11]= new Array();
 choices[11][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[11][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[11][2] = "A y B son correctas.";
 choices[11][3] = "A y B son falsas.";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[11] = 848


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[12]= "13)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[12]= new Array();
 choices[12][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[12][1] = "Protecci&oacute;n de su salud.";
 choices[12][2] = "Ninguna es correcta.";
 choices[12][3] = "A y B son correctas.";
 answers[12] = choices[12][1];
 units[12] = "14";
 comments[12] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";
 preguntaids[12] = 430


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[13]= "14)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[13]= new Array();
 choices[13][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[13][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[13][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[13][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[13] = choices[13][3];
 units[13] = "12";
 comments[13] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[13] = 130


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[14]= "15)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[14]= new Array();
 choices[14][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[14][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[14][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[14][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[14] = choices[14][3];
 units[14] = "62";
 comments[14] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[14] = 38


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[15][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[15][2] = "Ambas son correctas.";
 choices[15][3] = "La A y B son incorrectas.";
 answers[15] = choices[15][2];
 units[15] = "14";
 comments[15] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[15] = 417


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Diagrama de clases";
 choices[16][1] = "Diagrama de componentes";
 choices[16][2] = "Diagrama de estructura";
 choices[16][3] = "Diagrama de paquetes";
 answers[16] = choices[16][0];
 units[16] = "91";
 comments[16] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[16] = 88


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[17]= "18)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Acoso sexual.";
 choices[17][1] = "Acoso por raz&oacute;n de sexo.";
 choices[17][2] = "Acoso laboral.";
 choices[17][3] = "Acoso mental.";
 answers[17] = choices[17][1];
 units[17] = "14";
 comments[17] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";
 preguntaids[17] = 397


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[18]= "19)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[18]= new Array();
 choices[18][0] = "Los cr&eacute;ditos";
 choices[18][1] = "Las partidas presupuestarias";
 choices[18][2] = "Los derechos";
 choices[18][3] = "Las obligaciones";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";
 preguntaids[18] = 453


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[19]= new Array();
 choices[19][0] = "Categor&iacute;a b&aacute;sica";
 choices[19][1] = "Categor&iacute;a media";
 choices[19][2] = "Categor&iacute;a alta";
 choices[19][3] = "Categor&iacute;a media y alta";
 answers[19] = choices[19][2];
 units[19] = "46";
 comments[19] = "Id Pregunta: 90. AGE A1 2015";
 preguntaids[19] = 90


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[20]= new Array();
 choices[20][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[20][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[20][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[20][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[20] = choices[20][2];
 units[20] = "43";
 comments[20] = "Id Pregunta: 445. SERVICIOS COMUNES";
 preguntaids[20] = 445


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[21]= "22)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[21]= new Array();
 choices[21][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[21][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[21][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[21][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[21] = choices[21][1];
 units[21] = "58";
 comments[21] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[21] = 643


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[22]= new Array();
 choices[22][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[22][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[22][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[22][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[22] = choices[22][0];
 units[22] = "86";
 comments[22] = "Id Pregunta: 71. AGE A1 2015";
 preguntaids[22] = 71


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[23]= "24)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[23]= new Array();
 choices[23][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[23][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[23][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[23][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[23] = choices[23][0];
 units[23] = "7";
 comments[23] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[23] = 520


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Lollipop";
 choices[24][1] = "Jelly Bean";
 choices[24][2] = "Marshmallow";
 choices[24][3] = "KitKat";
 answers[24] = choices[24][2];
 units[24] = "59";
 comments[24] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[24] = 61


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[25]= "26)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[25]= new Array();
 choices[25][0] = "El Instituto de la Mujer.";
 choices[25][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[25][2] = "Ambas son correctas.";
 choices[25][3] = "A y B son incorrectas.";
 answers[25] = choices[25][2];
 units[25] = "14";
 comments[25] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";
 preguntaids[25] = 431


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[26]= "27)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[26]= new Array();
 choices[26][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[26][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[26][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[26][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 352. UNION EUROPEA";
 preguntaids[26] = 352


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[27]= new Array();
 choices[27][0] = "al menos por 50 Diputados.";
 choices[27][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[27][2] = "por la Mesa del Congreso de los Diputados.";
 choices[27][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[27] = 183


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Aplicaci&oacute;n";
 choices[28][1] = "Sesi&oacute;n";
 choices[28][2] = "Presentaci&oacute;n";
 choices[28][3] = "Transporte";
 answers[28] = choices[28][2];
 units[28] = "105";
 comments[28] = "Id Pregunta: 18. AGE A1 2015";
 preguntaids[28] = 18


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[29]= "30)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[29]= new Array();
 choices[29][0] = "Bases de datos orientadas a filas";
 choices[29][1] = "Bases de datos orientadas a documentos";
 choices[29][2] = "Bases de datos de clave/valor";
 choices[29][3] = "Bases de datos orientadas a objetos";
 answers[29] = choices[29][0];
 units[29] = "73";
 comments[29] = "Id Pregunta: 100. ";
 preguntaids[29] = 100


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[30]= "31)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[30]= new Array();
 choices[30][0] = "La Comisi&oacute;n.";
 choices[30][1] = "El Consejo de Europa.";
 choices[30][2] = "El Consejo Europeo.";
 choices[30][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[30] = choices[30][3];
 units[30] = "5";
 comments[30] = "Id Pregunta: 300. UNION EUROPEA";
 preguntaids[30] = 300


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[31]= new Array();
 choices[31][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[31][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[31][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[31][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[31] = choices[31][1];
 units[31] = "19";
 comments[31] = "Id Pregunta: 562. Agenda Digital";
 preguntaids[31] = 562


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[32]= "33)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[32]= new Array();
 choices[32][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[32][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[32][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[32][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[32] = 190


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[33]= new Array();
 choices[33][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[33][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[33][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[33][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[33] = choices[33][1];
 units[33] = "76";
 comments[33] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[33] = 46


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[34]= new Array();
 choices[34][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[34][1] = "Auditor&iacute;a operativa.";
 choices[34][2] = "Auditor&iacute;a de cumplimiento.";
 choices[34][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[34] = 474


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[35]= "36)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[35]= new Array();
 choices[35][0] = "ASF-AL (Apache License 2.0)";
 choices[35][1] = "EUPL (European Union Public License)";
 choices[35][2] = "LGPL (Lesser General Public License)";
 choices[35][3] = "MIT(MIT License)";
 answers[35] = choices[35][1];
 units[35] = "43";
 comments[35] = "Id Pregunta: 32. AGE A1 2015";
 preguntaids[35] = 32


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[36]= "37)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[36]= new Array();
 choices[36][0] = "Ejecutivo";
 choices[36][1] = "Limitativo";
 choices[36][2] = "Estimativo";
 choices[36][3] = "Progresivo";
 answers[36] = choices[36][1];
 units[36] = "10";
 comments[36] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";
 preguntaids[36] = 449


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[37]= new Array();
 choices[37][0] = "Un programa presupuestario.";
 choices[37][1] = "Un concepto presupuestario.";
 choices[37][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[37][3] = "Un cr&eacute;dito presupuestario.";
 answers[37] = choices[37][0];
 units[37] = "10";
 comments[37] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";
 preguntaids[37] = 493


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[38]= "39)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[38]= new Array();
 choices[38][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[38][1] = "Publicidad de las normas.";
 choices[38][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[38][3] = "Coordinaci&oacute;n normativa.";
 answers[38] = choices[38][2];
 units[38] = "1";
 comments[38] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[38] = 244


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[39]= "40)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[39]= new Array();
 choices[39][0] = "CO.PER.";
 choices[39][1] = "COMPER.";
 choices[39][2] = "CO.RE.PER.";
 choices[39][3] = "CO.PE.RRE.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 338. UNION EUROPEA";
 preguntaids[39] = 338


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[40]= "41)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[40]= new Array();
 choices[40][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[40][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[40][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[40][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[40] = choices[40][3];
 units[40] = "77";
 comments[40] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[40] = 48


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[41]= "42)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[41]= new Array();
 choices[41][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[41][1] = "el Consejo de Estado";
 choices[41][2] = "el Congreso";
 choices[41][3] = "las Cortes Generales";
 answers[41] = choices[41][0];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[41] = 785


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[42]= "43)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[42]= new Array();
 choices[42][0] = "Seguridad Social y AEAT";
 choices[42][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[42][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[42][3] = "Todos los anteriores";
 answers[42] = choices[42][3];
 units[42] = "19";
 comments[42] = "Id Pregunta: 596. Estrategia TIC";
 preguntaids[42] = 596


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[43]= "44)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[43]= new Array();
 choices[43][0] = "Siempre en formato electr&oacute;nico.";
 choices[43][1] = "Siempre en formato papel.";
 choices[43][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[43][3] = "La ley no regula el formato del expediente.";
 answers[43] = choices[43][0];
 units[43] = "7";
 comments[43] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[43] = 666


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[44]= "45)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[44]= new Array();
 choices[44][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[44][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[44][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[44][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[44] = choices[44][3];
 units[44] = "7";
 comments[44] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[44] = 530


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[45]= new Array();
 choices[45][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[45][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[45][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[45][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[45] = choices[45][1];
 units[45] = "43";
 comments[45] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[45] = 444


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[46]= "47)  Son proyectos de Apache relacionados con Big Data:";
 choices[46]= new Array();
 choices[46][0] = "Hadoop";
 choices[46][1] = "Spark";
 choices[46][2] = "A) y B)";
 choices[46][3] = "Niguno de los anteriores";
 answers[46] = choices[46][2];
 units[46] = "73";
 comments[46] = "Id Pregunta: 108. ";
 preguntaids[46] = 108


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[47]= new Array();
 choices[47][0] = "Art&iacute;culo 70.";
 choices[47][1] = "Art&iacute;culo 54.";
 choices[47][2] = "Articulo 62.";
 choices[47][3] = "Articulo 55. 5.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 243. CONSTITUCION1978";
 preguntaids[47] = 243


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[48]= "49)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[48]= new Array();
 choices[48][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[48][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[48][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[48][3] = "Todas son correctas.";
 answers[48] = choices[48][0];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[48] = 835


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[49]= "50)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[49]= new Array();
 choices[49][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[49][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[49][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[49][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[49] = choices[49][3];
 units[49] = "10";
 comments[49] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[49] = 505


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[50]= new Array();
 choices[50][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[50][1] = "Autorizar indultos generales.";
 choices[50][2] = "Sancionar las leyes.";
 choices[50][3] = "Promulgar las leyes.";
 answers[50] = choices[50][1];
 units[50] = "1";
 comments[50] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[50] = 185


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[51]= "52)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[51]= new Array();
 choices[51][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[51][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[51][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[51][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[51] = choices[51][1];
 units[51] = "7";
 comments[51] = "Id Pregunta: 535. LEY 39/2015";
 preguntaids[51] = 535


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[52]= new Array();
 choices[52][0] = "Car&aacute;cter sustitutivo";
 choices[52][1] = "Car&aacute;cter obligatorio";
 choices[52][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][3];
 units[52] = "19";
 comments[52] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[52] = 583


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[53]= "54)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[53]= new Array();
 choices[53][0] = "El Ministerio de Hacienda.";
 choices[53][1] = "El Ministerio de Econom&iacute;a.";
 choices[53][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[53][3] = "Ninguna de las respuestas es correcta.";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[53] = 470


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[54]= new Array();
 choices[54][0] = "A los cinco a&ntilde;os.";
 choices[54][1] = "A los dos a&ntilde;os.";
 choices[54][2] = "A los tres a&ntilde;os.";
 choices[54][3] = "A los cuatro a&ntilde;os.";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[54] = 492


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[55]= "56)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[55]= new Array();
 choices[55][0] = "El Tratado de Roma, 1957.";
 choices[55][1] = "El Acta &Uacute;nica Europea.";
 choices[55][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[55][3] = "Ninguna es correcta.";
 answers[55] = choices[55][2];
 units[55] = "14";
 comments[55] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";
 preguntaids[55] = 404


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[56]= "57)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[56]= new Array();
 choices[56][0] = "Dise&ntilde;o del servicio.";
 choices[56][1] = "Transici&oacute;n del servicio.";
 choices[56][2] = "Estrategia del servicio.";
 choices[56][3] = "Operaci&oacute;n del servicio.";
 answers[56] = choices[56][2];
 units[56] = "101";
 comments[56] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[56] = 644


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[57]= new Array();
 choices[57][0] = "Nivel 7 - MPLS.";
 choices[57][1] = "Nivel 3 - RARP.";
 choices[57][2] = "Nivel 2 - HDLC.";
 choices[57][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[57] = choices[57][2];
 units[57] = "105";
 comments[57] = "Id Pregunta: 7. AGE A1 2015";
 preguntaids[57] = 7


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[58]= new Array();
 choices[58][0] = "Orientaci&oacute;n a objetos";
 choices[58][1] = "MapReduce";
 choices[58][2] = "Pipeline filtering";
 choices[58][3] = "Programaci&oacute;n funcional";
 answers[58] = choices[58][1];
 units[58] = "73";
 comments[58] = "Id Pregunta: 661. ";
 preguntaids[58] = 661


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[59]= "60)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Un informe de impacto de g&eacute;nero.";
 choices[59][1] = "Un programa de igualdad de oportunidades.";
 choices[59][2] = "Un plan de Igualdad de Oportunidades.";
 choices[59][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[59] = 414


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[60]= "61)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[60]= new Array();
 choices[60][0] = "Tres a&ntilde;os.";
 choices[60][1] = "Dos a&ntilde;os y medio.";
 choices[60][2] = "Cinco a&ntilde;os.";
 choices[60][3] = "Seis a&ntilde;os.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 291. UNION EUROPEA";
 preguntaids[60] = 291


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[61][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[61][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[61][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[61] = choices[61][0];
 units[61] = "45";
 comments[61] = "Id Pregunta: 609. Junta de Extremadura A1 2015";
 preguntaids[61] = 609


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[62]= new Array();
 choices[62][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[62][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[62][2] = "Las respuestas a) b) no son correctas.";
 choices[62][3] = "Las respuestas a) y b) son correctas.";
 answers[62] = choices[62][3];
 units[62] = "10";
 comments[62] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[62] = 482


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[63]= new Array();
 choices[63][0] = "De los derechos y deberes fundamentales.";
 choices[63][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[63][2] = "Derechos y libertades.";
 choices[63][3] = "De la Corona.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[63] = 221


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[64]= "65)  JNDI se usa para el acceso a:";
 choices[64]= new Array();
 choices[64][0] = "Datos de ficheros";
 choices[64][1] = "Sistemas gestores de bases de datos";
 choices[64][2] = "Directorios de nombres";
 choices[64][3] = "Colas de mensajer&iacute;a";
 answers[64] = choices[64][2];
 units[64] = "64";
 comments[64] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[64] = 13


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[65]= "66)  ITIL v3, define:";
 choices[65]= new Array();
 choices[65][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[65][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[65][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[65][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[65] = choices[65][0];
 units[65] = "101";
 comments[65] = "Id Pregunta: 606. Junta de Extremadura A1 2015";
 preguntaids[65] = 606


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[66]= "67)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[66]= new Array();
 choices[66][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[66][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[66][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[66][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[66] = choices[66][1];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[66] = 838


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[67]= new Array();
 choices[67][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[67][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[67][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[67][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[67] = choices[67][1];
 units[67] = "7";
 comments[67] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[67] = 156


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[68]= new Array();
 choices[68][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[68][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[68][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[68][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[68] = choices[68][2];
 units[68] = "22";
 comments[68] = "Id Pregunta: 706. Ley de transparencia";
 preguntaids[68] = 706


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[69]= "70)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "El Ministerio de Igualdad.";
 choices[69][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[69][2] = "Ambas son correctas.";
 choices[69][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[69] = choices[69][1];
 units[69] = "14";
 comments[69] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";
 preguntaids[69] = 422


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[70]= "71)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[70]= new Array();
 choices[70][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[70][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[70][2] = "Los interesados en el procedimiento";
 choices[70][3] = "Las alternativas b) y c) son correctas";
 answers[70] = choices[70][1];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[70] = 826


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[71]= "72)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[71]= new Array();
 choices[71][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[71][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[71][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[71][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[71] = 381


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ala la correcta:";
 choices[72]= new Array();
 choices[72][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[72][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[72][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[72][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[72] = 543


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[73]= "74)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[73]= new Array();
 choices[73][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[73][1] = "El Congreso de los Diputados.";
 choices[73][2] = "Las Cortes Generales.";
 choices[73][3] = "El Consejo de Ministros";
 answers[73] = choices[73][3];
 units[73] = "1";
 comments[73] = "Id Pregunta: 209. CONSTITUCION1978";
 preguntaids[73] = 209


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[74]= new Array();
 choices[74][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[74][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[74][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[74][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[74] = choices[74][0];
 units[74] = "76";
 comments[74] = "Id Pregunta: 855. Xunta de Galicia 2015";
 preguntaids[74] = 855


