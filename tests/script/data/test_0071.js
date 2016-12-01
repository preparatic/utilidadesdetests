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

//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[0]= "1)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[0]= new Array();
 choices[0][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[0][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[0][2] = "La protecci&oacute;n del medio ambiente.";
 choices[0][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[0] = choices[0][0];
 units[0] = "22";
 comments[0] = "Id Pregunta: 125. ";
 preguntaids[0] = 125


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[1]= "2)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[1]= new Array();
 choices[1][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[1][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[1][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[1][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[1] = choices[1][2];
 units[1] = "7";
 comments[1] = "Id Pregunta: 534. LEY 39/2015";
 preguntaids[1] = 534


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[2]= new Array();
 choices[2][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[2][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[2][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[2][3] = "El software funcionando es la medida principal del progreso.";
 answers[2] = choices[2][2];
 units[2] = "34";
 comments[2] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[2] = 43


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[3]= "4)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[3]= new Array();
 choices[3][0] = "Prevenir las conductas discriminatorias.";
 choices[3][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[3][2] = "Todas son correctas.";
 choices[3][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[3] = choices[3][2];
 units[3] = "14";
 comments[3] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";
 preguntaids[3] = 409


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[4]= new Array();
 choices[4][0] = "Estrasburgo.";
 choices[4][1] = "Bruselas.";
 choices[4][2] = "Luxemburgo.";
 choices[4][3] = "Par&iacute;s.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 305. UNION EUROPEA";
 preguntaids[4] = 305


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[5]= "6)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[5]= new Array();
 choices[5][0] = "Tres a&ntilde;os.";
 choices[5][1] = "Cuatro a&ntilde;os.";
 choices[5][2] = "Cinco a&ntilde;os.";
 choices[5][3] = "Seis a&ntilde;os.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[5] = 324


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[6]= "7)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[6]= new Array();
 choices[6][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[6][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[6][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[6][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[6] = choices[6][2];
 units[6] = "73";
 comments[6] = "Id Pregunta: 654. ";
 preguntaids[6] = 654


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[7]= new Array();
 choices[7][0] = "A nivel de secci&oacute;n de programa.";
 choices[7][1] = "A nivel de grupo de programa.";
 choices[7][2] = "Ninguna de las respuestas es correcta.";
 choices[7][3] = "A nivel de programa.";
 answers[7] = choices[7][3];
 units[7] = "10";
 comments[7] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";
 preguntaids[7] = 459


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[8]= "9)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[8]= new Array();
 choices[8][0] = "Resoluci&oacute;n.";
 choices[8][1] = "Desistimiento o renuncia.";
 choices[8][2] = "Caducidad.";
 choices[8][3] = "Todas las anteriores.";
 answers[8] = choices[8][3];
 units[8] = "7";
 comments[8] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";
 preguntaids[8] = 671


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[9]= new Array();
 choices[9][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[9][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[9][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[9][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[9] = choices[9][0];
 units[9] = "77";
 comments[9] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[9] = 685


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[10]= new Array();
 choices[10][0] = "Veinte.";
 choices[10][1] = "Quince.";
 choices[10][2] = "Diez.";
 choices[10][3] = "Doce.";
 answers[10] = choices[10][1];
 units[10] = "1";
 comments[10] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[10] = 264


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[11]= "12)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[11]= new Array();
 choices[11][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[11][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[11][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[11][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[11] = choices[11][2];
 units[11] = "22";
 comments[11] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";
 preguntaids[11] = 707


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[12]= new Array();
 choices[12][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[12][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[12][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[12][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[12] = choices[12][2];
 units[12] = "10";
 comments[12] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";
 preguntaids[12] = 486


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[13]= new Array();
 choices[13][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[13][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[13][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[13][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[13] = 770


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[14]= "15)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[14]= new Array();
 choices[14][0] = "Cifrada";
 choices[14][1] = "Conjunta";
 choices[14][2] = "Sistem&aacute;tica";
 choices[14][3] = "Todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "10";
 comments[14] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";
 preguntaids[14] = 452


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[15]= new Array();
 choices[15][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[15][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[15][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[15][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[15] = 824


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[16]= new Array();
 choices[16][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[16][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[16][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[16][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[16] = choices[16][3];
 units[16] = "22";
 comments[16] = "Id Pregunta: 126. ";
 preguntaids[16] = 126


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[17]= "18)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[17]= new Array();
 choices[17][0] = "Cinco a&ntilde;os.";
 choices[17][1] = "Seis a&ntilde;os.";
 choices[17][2] = "Cuatro a&ntilde;os.";
 choices[17][3] = "Tres a&ntilde;os.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 304. UNION EUROPEA";
 preguntaids[17] = 304


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[18]= "19)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[18]= new Array();
 choices[18][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[18][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[18][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[18][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[18] = choices[18][2];
 units[18] = "89";
 comments[18] = "Id Pregunta: 627. Junta de Extremadura A1 2015";
 preguntaids[18] = 627


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[19]= "20)  WS-Security contiene especificaciones sobre:";
 choices[19]= new Array();
 choices[19][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[19][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[19][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[19][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[19] = choices[19][1];
 units[19] = "119";
 comments[19] = "Id Pregunta: 55. AGE A1 2015";
 preguntaids[19] = 55


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[20]= "21)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[20]= new Array();
 choices[20][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[20][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[20][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[20][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[20] = choices[20][1];
 units[20] = "64";
 comments[20] = "Id Pregunta: 11. AGE A1 2015";
 preguntaids[20] = 11


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[21]= "22)  El sector p&uacute;blico institucional se integra por:";
 choices[21]= new Array();
 choices[21][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[21][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[21][2] = "las Universidades p&uacute;blicas";
 choices[21][3] = "todas son correctas";
 answers[21] = choices[21][3];
 units[21] = "7";
 comments[21] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[21] = 516


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[22]= "23)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[22]= new Array();
 choices[22][0] = "6 principios.";
 choices[22][1] = "7 principios.";
 choices[22][2] = "5 principios.";
 choices[22][3] = "6 directrices.";
 answers[22] = choices[22][2];
 units[22] = "28";
 comments[22] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[22] = 738


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[23]= "24)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[23]= new Array();
 choices[23][0] = "El 23 de julio de 1952.";
 choices[23][1] = "El 18 de abril de 1951.";
 choices[23][2] = "El 16 de abril de 1948.";
 choices[23][3] = "d)Ninguna de las respuestas son correctas.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[23] = 349


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; son las t&eacute;cnicas SEO? ";
 choices[24]= new Array();
 choices[24][0] = "SEO es el acr&oacute;nimo de search engine optimization.";
 choices[24][1] = "Las t&eacute;cnicas SEO Onsite son en s&iacute; las que llevaremos a cabo dentro de nuestro sitio, tales como optimizaciones de c&oacute;digo, optimizaci&oacute;n de procesos del servidor, llamadas a la base de datos y sobre todo optimizaci&oacute;n de contenido. ";
 choices[24][2] = "Las t&eacute;cnicas de SEO Offsite se refieren a todos los enlaces que no est&aacute;n en nuestro sitio web. Se trata del n&uacute;mero de veces que est&aacute; enlazado el sitio web, desde d&oacute;nde y con qu&eacute; t&eacute;rminos.";
 choices[24][3] = "Todas las anteriores son verdaderas.";
 answers[24] = choices[24][3];
 units[24] = "125";
 comments[24] = "Id Pregunta: 864. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[24] = 864


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[25]= new Array();
 choices[25][0] = "En 2011";
 choices[25][1] = "En 2013";
 choices[25][2] = "En 2015";
 choices[25][3] = "En 2016";
 answers[25] = choices[25][2];
 units[25] = "17";
 comments[25] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[25] = 763


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[26]= "27)  Big Data:";
 choices[26]= new Array();
 choices[26][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[26][1] = "No puede emplearse para tratar datos no estructurados";
 choices[26][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][3];
 units[26] = "73";
 comments[26] = "Id Pregunta: 109. ";
 preguntaids[26] = 109


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[27]= new Array();
 choices[27][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[27][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[27][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[27][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[27] = choices[27][0];
 units[27] = "89";
 comments[27] = "Id Pregunta: 623. Junta de Extremadura A1 2015";
 preguntaids[27] = 623


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[28]= new Array();
 choices[28][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[28][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[28][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[28][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[28] = choices[28][0];
 units[28] = "48";
 comments[28] = "Id Pregunta: 92. AGE A1 2015";
 preguntaids[28] = 92


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[29]= new Array();
 choices[29][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[29][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[29][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[29][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[29] = choices[29][1];
 units[29] = "44";
 comments[29] = "Id Pregunta: 73. AGE A1 2015";
 preguntaids[29] = 73


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[30]= new Array();
 choices[30][0] = "Al Consejo Europeo.";
 choices[30][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[30][2] = "A la Comisi&oacute;n Europea.";
 choices[30][3] = "Al Parlamento Europeo.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 296. UNION EUROPEA";
 preguntaids[30] = 296


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[31]= "32)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[31]= new Array();
 choices[31][0] = "la Administraci&oacute;n General del Estado";
 choices[31][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[31][2] = "las Entidades Locales";
 choices[31][3] = "todas son correctas";
 answers[31] = choices[31][3];
 units[31] = "7";
 comments[31] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[31] = 537


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[32]= "33)  Indica la respuesta correcta";
 choices[32]= new Array();
 choices[32][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[32][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[32][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[32][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[32] = choices[32][0];
 units[32] = "34, 84";
 comments[32] = "Id Pregunta: 730. Metodologias &aacute;giles";
 preguntaids[32] = 730


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[33]= "34)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[33]= new Array();
 choices[33][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[33][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[33][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[33][3] = "Todos los anteriores";
 answers[33] = choices[33][3];
 units[33] = "19";
 comments[33] = "Id Pregunta: 561. Agenda Digital";
 preguntaids[33] = 561


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[34]= new Array();
 choices[34][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[34][1] = "Por Orden Ministerial.";
 choices[34][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[34][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 247. CONSTITUCION1978";
 preguntaids[34] = 247


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[35]= "36)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[35]= new Array();
 choices[35][0] = "Mercurial, Git y Apache Subversion.";
 choices[35][1] = "Gimp, Mercurial y Git.";
 choices[35][2] = "RedMine, Planner y OpenProj.";
 choices[35][3] = "Cassandra, Git y REDIS.";
 answers[35] = choices[35][0];
 units[35] = "92";
 comments[35] = "Id Pregunta: 576. Tema 92. TAI 2016.";
 preguntaids[35] = 576


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[36]= "37)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[36]= new Array();
 choices[36][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[36][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[36][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[36][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[36] = choices[36][2];
 units[36] = "47";
 comments[36] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[36] = 19


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[37]= "38)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[37]= new Array();
 choices[37][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[37][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[37][2] = "Ninguna es correcta.";
 choices[37][3] = "A y B son correctas.";
 answers[37] = choices[37][1];
 units[37] = "14";
 comments[37] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";
 preguntaids[37] = 411


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[38]= "39)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[38]= new Array();
 choices[38][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[38][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[38][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[38][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[38] = choices[38][0];
 units[38] = "8";
 comments[38] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";
 preguntaids[38] = 146


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[39]= "40)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Acoso sexual.";
 choices[39][1] = "Acoso por raz&oacute;n de sexo.";
 choices[39][2] = "Acoso laboral.";
 choices[39][3] = "Acoso mental.";
 answers[39] = choices[39][1];
 units[39] = "14";
 comments[39] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";
 preguntaids[39] = 397


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[40]= "41)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[40]= new Array();
 choices[40][0] = "un &oacute;rgano superior";
 choices[40][1] = "un &oacute;rgano directivo";
 choices[40][2] = "un &oacute;rgano superior o directivo";
 choices[40][3] = "ninguna es correcta";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[40] = 795


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[41]= "42)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[41]= new Array();
 choices[41][0] = "Sean dirigidas por mujeres";
 choices[41][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[41][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[41][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[41] = choices[41][2];
 units[41] = "14";
 comments[41] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";
 preguntaids[41] = 384


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[42]= new Array();
 choices[42][0] = "B&aacute;sico, medio y alto";
 choices[42][1] = "D&eacute;bil y fuerte";
 choices[42][2] = "Bajo, medio y alto";
 choices[42][3] = "Bajo, sustancial y alto";
 answers[42] = choices[42][3];
 units[42] = "77";
 comments[42] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";
 preguntaids[42] = 686


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[43]= "44)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[43]= new Array();
 choices[43][0] = "los &oacute;rganos administrativos";
 choices[43][1] = "las entidades dependientes";
 choices[43][2] = "las unidades administrativas";
 choices[43][3] = "los servicios comunes";
 answers[43] = choices[43][2];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[43] = 799


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[44]= "45)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[44]= new Array();
 choices[44][0] = "&oacute;rganos superiores";
 choices[44][1] = "&oacute;rganos directivos";
 choices[44][2] = "&oacute;rganos superiores y directivos";
 choices[44][3] = "ninguna es correcta";
 answers[44] = choices[44][1];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[44] = 796


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[45]= new Array();
 choices[45][0] = "Consumidores";
 choices[45][1] = "PYMES y Start-ups";
 choices[45][2] = "La Industria";
 choices[45][3] = "Todos los anteriores";
 answers[45] = choices[45][3];
 units[45] = "17";
 comments[45] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[45] = 557


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[46]= new Array();
 choices[46][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[46][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[46][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[46][3] = "El Senado se compone de 350 senadores.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 212. CONSTITUCION1978";
 preguntaids[46] = 212


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[47]= "48)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[47]= new Array();
 choices[47][0] = "solo mediante ley";
 choices[47][1] = "reglamentariamente";
 choices[47][2] = "mediante ley o reglamentariamente";
 choices[47][3] = "ninguna es correcta";
 answers[47] = choices[47][0];
 units[47] = "7";
 comments[47] = "Id Pregunta: 513. LEY 39/2015";
 preguntaids[47] = 513


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[48]= "49)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[48]= new Array();
 choices[48][0] = "El Parlamento Europeo.";
 choices[48][1] = "Todas las respuestas son correctas.";
 choices[48][2] = "La Comisi&oacute;n Europea.";
 choices[48][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[48] = choices[48][1];
 units[48] = "5";
 comments[48] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[48] = 353


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[49]= new Array();
 choices[49][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[49][1] = "Directiva 2004/113/CE del Consejo.";
 choices[49][2] = "Todas son correctas.";
 choices[49][3] = "Todas son falsas.";
 answers[49] = choices[49][2];
 units[49] = "14";
 comments[49] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";
 preguntaids[49] = 405


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[50]= new Array();
 choices[50][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[50][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[50][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[50][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[50] = choices[50][3];
 units[50] = "120";
 comments[50] = "Id Pregunta: 653. Junta de Extremadura A1 2015";
 preguntaids[50] = 653


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[51]= "52)  Tienen la condici&oacute;n de alto cargo:";
 choices[51]= new Array();
 choices[51][0] = "los &oacute;rganos superiores";
 choices[51][1] = "los &oacute;rganos superiores y directivos";
 choices[51][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[51][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[51] = 794


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[52]= "53)  La recusaci&oacute;n pueden promoverla...";
 choices[52]= new Array();
 choices[52][0] = "Cualquier &oacute;rgano";
 choices[52][1] = "El interesado";
 choices[52][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[52][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[52] = 828


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[53]= "54)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[53]= new Array();
 choices[53][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[53][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[53][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[53][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[53] = choices[53][1];
 units[53] = "22";
 comments[53] = "Id Pregunta: 713. Portal de Transparencia";
 preguntaids[53] = 713


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[54]= "55)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[54]= new Array();
 choices[54][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[54][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[54][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[54][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[54] = choices[54][2];
 units[54] = "22";
 comments[54] = "Id Pregunta: 128. ";
 preguntaids[54] = 128


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[55]= "56)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[55]= new Array();
 choices[55][0] = "Cabr&aacute; recurso de alzada";
 choices[55][1] = "Cabr&aacute; el nuevo protesto";
 choices[55][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[55][3] = "No cabr&aacute; recurso alguno";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 832. Ley 40/2015";
 preguntaids[55] = 832


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[56]= "57)  Son proyectos de Apache relacionados con Big Data:";
 choices[56]= new Array();
 choices[56][0] = "Hadoop";
 choices[56][1] = "Spark";
 choices[56][2] = "A) y B)";
 choices[56][3] = "Niguno de los anteriores";
 answers[56] = choices[56][2];
 units[56] = "73";
 comments[56] = "Id Pregunta: 108. ";
 preguntaids[56] = 108


//  Id pregunta: 859 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ntos fasc&iacute;culos tiene la gu&iacute;a de comunicaci&oacute;n digital para la Administraci&oacute;n General del Estado?";
 choices[57]= new Array();
 choices[57][0] = "12";
 choices[57][1] = "11";
 choices[57][2] = "13";
 choices[57][3] = "10";
 answers[57] = choices[57][0];
 units[57] = "125";
 comments[57] = "Id Pregunta: 859. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[57] = 859


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[58]= "59)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[58]= new Array();
 choices[58][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[58][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[58][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[58][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[58] = 250


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[59]= "60)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[59]= new Array();
 choices[59][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[59][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[59][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[59][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[59] = 238


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[60]= "61)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[60]= new Array();
 choices[60][0] = "Diciembre de 1987.";
 choices[60][1] = "Septiembre de 1989.";
 choices[60][2] = "Octubre de 1990.";
 choices[60][3] = "Noviembre de 1980.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 336. UNION EUROPEA";
 preguntaids[60] = 336


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[61]= new Array();
 choices[61][0] = "MySQL";
 choices[61][1] = "SQLite";
 choices[61][2] = "Zope";
 choices[61][3] = "MariaDB";
 answers[61] = choices[61][2];
 units[61] = "61";
 comments[61] = "Id Pregunta: 577. Tema 61. TAI 2016.";
 preguntaids[61] = 577


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[62]= "63)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[62]= new Array();
 choices[62][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[62][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[62][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[62][3] = "Todas las respuestas son correctas.";
 answers[62] = choices[62][3];
 units[62] = "50";
 comments[62] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[62] = 622


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[63]= new Array();
 choices[63][0] = "Data Mining (miner&iacute;a de datos)";
 choices[63][1] = "Business Intelligence (inteligencia de negocio)";
 choices[63][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[63][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[63] = choices[63][1];
 units[63] = "72";
 comments[63] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[63] = 68


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[64]= "65)  El Parlamento Europeo celebrar&aacute;:";
 choices[64]= new Array();
 choices[64][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[64][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[64][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[64][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[64] = 290


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[65]= new Array();
 choices[65][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[65][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[65][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[65][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[65] = choices[65][2];
 units[65] = "43";
 comments[65] = "Id Pregunta: 436. SERVICIOS COMUNES";
 preguntaids[65] = 436


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[66]= new Array();
 choices[66][0] = "Las sociedades mercantiles estatales.";
 choices[66][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[66][2] = "Las respuestas a) y b) son correctas.";
 choices[66][3] = "Las respuestas a) y b) no son correctas.";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[66] = 503


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[67]= "68)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[67]= new Array();
 choices[67][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[67][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[67][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[67][3] = "Todas son correctas.";
 answers[67] = choices[67][0];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[67] = 835


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[68]= new Array();
 choices[68][0] = "Veinticinco.";
 choices[68][1] = "Veintisiete.";
 choices[68][2] = "Veintinueve.";
 choices[68][3] = "Cuarenta y uno.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 303. UNION EUROPEA";
 preguntaids[68] = 303


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[69]= "70)  El Tribunal de Justicia se cre&oacute; en:";
 choices[69]= new Array();
 choices[69][0] = "El Tratado de la CECA.";
 choices[69][1] = "El Tratado de Niza.";
 choices[69][2] = "El Tratado de &Aacute;msterdam.";
 choices[69][3] = "El Tratado de Lisboa.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 308. UNION EUROPEA";
 preguntaids[69] = 308


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[70]= "71)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[70]= new Array();
 choices[70][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[70][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[70][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[70][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[70] = choices[70][2];
 units[70] = "7";
 comments[70] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[70] = 155


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[71]= new Array();
 choices[71][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[71][1] = "La delimitaci&oacute;n de su territorio.";
 choices[71][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[71][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[71] = choices[71][2];
 units[71] = "1";
 comments[71] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[71] = 228


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[72]= new Array();
 choices[72][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[72][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[72][2] = "Iniciativa europea de libre flujo de datos.";
 choices[72][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 286. UNION EUROPEA";
 preguntaids[72] = 286


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[73]= "74)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[73]= new Array();
 choices[73][0] = "Primario, que incluye la agricultura y la pesca";
 choices[73][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[73][2] = "Minero, junto con las exportaciones de comercio";
 choices[73][3] = "Servicios";
 answers[73] = choices[73][3];
 units[73] = "12";
 comments[73] = "Id Pregunta: 569. Modelo econ&oacute;mico";
 preguntaids[73] = 569


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[74]= new Array();
 choices[74][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[74][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[74][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[74][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[74] = choices[74][2];
 units[74] = "71";
 comments[74] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[74] = 39


