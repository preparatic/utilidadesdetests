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

//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[0]= new Array();
 choices[0][0] = "La CETIC";
 choices[0][1] = "Los Ministerios";
 choices[0][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][1];
 units[0] = "19";
 comments[0] = "Id Pregunta: 597. Estrategia TIC";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[1]= new Array();
 choices[1][0] = "No, en ning&uacute;n caso.";
 choices[1][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[1][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[1][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[1] = choices[1][3];
 units[1] = "1";
 comments[1] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[2]= new Array();
 choices[2][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[2][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[2][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][1];
 units[2] = "19";
 comments[2] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[3]= "4)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[3]= new Array();
 choices[3][0] = "Se definen iteraciones";
 choices[3][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[3][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[3][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[3] = choices[3][1];
 units[3] = "34, 84";
 comments[3] = "Id Pregunta: 732. Metodologias &aacute;giles";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[4]= "5)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[4]= new Array();
 choices[4][0] = "192.228.0.0";
 choices[4][1] = "192.228.8.0";
 choices[4][2] = "192.228.16.0";
 choices[4][3] = "192.228.17.0";
 answers[4] = choices[4][2];
 units[4] = "109";
 comments[4] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[5]= "6)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[5]= new Array();
 choices[5][0] = "A la persona demandante.";
 choices[5][1] = "A la persona demandada.";
 choices[5][2] = "Al &oacute;rgano judicial.";
 choices[5][3] = "Al &oacute;rgano administrativo.";
 answers[5] = choices[5][1];
 units[5] = "14";
 comments[5] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[6]= "7)  Tienen la condici&oacute;n de alto cargo:";
 choices[6]= new Array();
 choices[6][0] = "los &oacute;rganos superiores";
 choices[6][1] = "los &oacute;rganos superiores y directivos";
 choices[6][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[6][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[7]= "8)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[7]= new Array();
 choices[7][0] = "Mercurial, Git y Apache Subversion.";
 choices[7][1] = "Gimp, Mercurial y Git.";
 choices[7][2] = "RedMine, Planner y OpenProj.";
 choices[7][3] = "Cassandra, Git y REDIS.";
 answers[7] = choices[7][0];
 units[7] = "92";
 comments[7] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[8]= new Array();
 choices[8][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[8][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[8][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[8][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[8] = choices[8][1];
 units[8] = "63";
 comments[8] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[9]= "10)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[9][1] = "Las inversiones reales y financieras.";
 choices[9][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[9][3] = "Las transferencias de capital y las inversiones reales.";
 answers[9] = choices[9][3];
 units[9] = "10";
 comments[9] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[10]= "11)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[10][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[10][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[10][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[10] = choices[10][3];
 units[10] = "14";
 comments[10] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[11]= new Array();
 choices[11][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[11][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[11][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[11][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[11] = choices[11][1];
 units[11] = "43";
 comments[11] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[12]= "13)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[12]= new Array();
 choices[12][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[12][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[12][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[12][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[13]= "14)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[13]= new Array();
 choices[13][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[13][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[13][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[13][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[13] = choices[13][2];
 units[13] = "57";
 comments[13] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[14]= "15)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Clustering";
 choices[14][1] = "Deduplicaci&oacute;n";
 choices[14][2] = "Virtualizaci&oacute;n";
 choices[14][3] = "Contenerizaci&oacute;n";
 answers[14] = choices[14][2];
 units[14] = "124";
 comments[14] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[15]= "16)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[15][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[15][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[15][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[15] = choices[15][2];
 units[15] = "48";
 comments[15] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[16]= "17)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[16]= new Array();
 choices[16][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[16][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[16][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[16][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[16] = choices[16][3];
 units[16] = "7";
 comments[16] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[17]= "18)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[17][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[17][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[17][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[17] = choices[17][2];
 units[17] = "57";
 comments[17] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[18]= "19)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[18]= new Array();
 choices[18][0] = "Tres a&ntilde;os.";
 choices[18][1] = "Cuatro a&ntilde;os.";
 choices[18][2] = "Cinco a&ntilde;os.";
 choices[18][3] = "Seis a&ntilde;os.";
 answers[18] = choices[18][3];
 units[18] = "5";
 comments[18] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[19]= "20)  Los Secretarios generales t&eacute;cnicos:";
 choices[19]= new Array();
 choices[19][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[19][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[19][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[19][3] = "todas son correctas";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[20]= new Array();
 choices[20][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[20][1] = "Directiva 2004/113/CE del Consejo.";
 choices[20][2] = "Todas son correctas.";
 choices[20][3] = "Todas son falsas.";
 answers[20] = choices[20][2];
 units[20] = "14";
 comments[20] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[21]= "22)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[21]= new Array();
 choices[21][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[21][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[21][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[21][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[21] = choices[21][2];
 units[21] = "22";
 comments[21] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[22]= "23)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[22]= new Array();
 choices[22][0] = "Acuerdos cualificados.";
 choices[22][1] = "Acuerdos ponderados.";
 choices[22][2] = "Valoraci&oacute;n de los votos.";
 choices[22][3] = "Ponderaci&oacute;n de los votos.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[23]= "24)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[23]= new Array();
 choices[23][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[23][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[23][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[23][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[23] = choices[23][0];
 units[23] = "65";
 comments[23] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[24]= "25)  Los criptosistemas pueden clasificarse en:";
 choices[24]= new Array();
 choices[24][0] = "Concretos, Estables e Inestables.";
 choices[24][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[24][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[24][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[24] = choices[24][3];
 units[24] = "76";
 comments[24] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[25]= new Array();
 choices[25][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[25][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[25][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[25][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[25] = choices[25][3];
 units[25] = "77";
 comments[25] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[26]= "27)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[26]= new Array();
 choices[26][0] = "Por unanimidad.";
 choices[26][1] = "Por mayor&iacute;a cualificada.";
 choices[26][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[26][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[27]= "28)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[27]= new Array();
 choices[27][0] = "Ejecutivo";
 choices[27][1] = "Limitativo";
 choices[27][2] = "Estimativo";
 choices[27][3] = "Progresivo";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[28]= "29)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[28]= new Array();
 choices[28][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[28][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[28][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[28][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[28] = choices[28][0];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[29]= new Array();
 choices[29][0] = "De oficio.";
 choices[29][1] = "A solicitud del interesado.";
 choices[29][2] = "De oficio o a solicitud del interesado.";
 choices[29][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[29] = choices[29][2];
 units[29] = "7";
 comments[29] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[30]= "31)  Los Reglamentos no se caracterizan por:";
 choices[30]= new Array();
 choices[30][0] = "No poseer alcance general.";
 choices[30][1] = "Ser obligatorios.";
 choices[30][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[30][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[31]= "32)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[31]= new Array();
 choices[31][0] = "El Parlamento Europeo.";
 choices[31][1] = "Todas las respuestas son correctas.";
 choices[31][2] = "La Comisi&oacute;n Europea.";
 choices[31][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[32]= "33)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[32]= new Array();
 choices[32][0] = "Director General";
 choices[32][1] = "Secretario general";
 choices[32][2] = "Subdirector general";
 choices[32][3] = "Subsecretario";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[33]= "34)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "De un mes si el acto fuera presunto";
 choices[33][1] = "De un mes si el acto fuera expreso";
 choices[33][2] = "De un mes en cualquier caso";
 choices[33][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[33] = choices[33][1];
 units[33] = "8";
 comments[33] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[34]= "35)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[34]= new Array();
 choices[34][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[34][1] = "Ninguna de las respuestas es correcta.";
 choices[34][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[34][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[34] = choices[34][0];
 units[34] = "5";
 comments[34] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[35]= new Array();
 choices[35][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[35][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[35][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[35][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[35] = choices[35][0];
 units[35] = "19";
 comments[35] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[36]= new Array();
 choices[36][0] = "Constitucional.";
 choices[36][1] = "Penal.";
 choices[36][2] = "Militar.";
 choices[36][3] = "Tribunales consuetudinarios.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[37]= "38)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[37]= new Array();
 choices[37][0] = "61";
 choices[37][1] = "53";
 choices[37][2] = "65";
 choices[37][3] = "67";
 answers[37] = choices[37][1];
 units[37] = "1";
 comments[37] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[38]= new Array();
 choices[38][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[38][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[38][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[38][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[38] = choices[38][1];
 units[38] = "7";
 comments[38] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[39]= new Array();
 choices[39][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[39][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[39][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[39][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[39] = choices[39][2];
 units[39] = "15";
 comments[39] = "Id Pregunta: 118. ";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[40]= new Array();
 choices[40][0] = "El Consejo Europeo.";
 choices[40][1] = "El Parlamento Europeo.";
 choices[40][2] = "El Consejo.";
 choices[40][3] = "La Comisi&oacute;n.";
 answers[40] = choices[40][3];
 units[40] = "5";
 comments[40] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[41]= "42)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[41]= new Array();
 choices[41][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[41][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[41][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[41][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[41] = choices[41][2];
 units[41] = "19";
 comments[41] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[42]= "43)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[42]= new Array();
 choices[42][0] = "en cada Comunidad Aut&oacute;noma";
 choices[42][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[42][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[42][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[43]= "44)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[43]= new Array();
 choices[43][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[43][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[43][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[43][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[43] = choices[43][2];
 units[43] = "121";
 comments[43] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[44]= new Array();
 choices[44][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[44][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[44][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[44][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[44] = choices[44][0];
 units[44] = "14";
 comments[44] = "Id Pregunta: 682. Pensiones";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[45]= new Array();
 choices[45][0] = "La CETIC";
 choices[45][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[45][2] = "La DTIC";
 choices[45][3] = "El MHFP";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[46]= "47)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[46]= new Array();
 choices[46][0] = "solo mediante ley";
 choices[46][1] = "reglamentariamente";
 choices[46][2] = "mediante ley o reglamentariamente";
 choices[46][3] = "ninguna es correcta";
 answers[46] = choices[46][1];
 units[46] = "7";
 comments[46] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[47]= new Array();
 choices[47][0] = "El BCE";
 choices[47][1] = "El Parlamento";
 choices[47][2] = "El Consejo";
 choices[47][3] = "La Comisi&oacute;n";
 answers[47] = choices[47][3];
 units[47] = "17";
 comments[47] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[48]= new Array();
 choices[48][0] = "A los ministros.";
 choices[48][1] = "Las respuestas a) y b) son correctas.";
 choices[48][2] = "Las respuestas a) y b) no son correctas.";
 choices[48][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[48] = choices[48][1];
 units[48] = "10";
 comments[48] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[49]= "50)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[49]= new Array();
 choices[49][0] = "apud acta";
 choices[49][1] = "presencialmente";
 choices[49][2] = "electr&oacute;nicamente";
 choices[49][3] = "todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[50]= new Array();
 choices[50][0] = "Neo4J ";
 choices[50][1] = "OrientDB ";
 choices[50][2] = "InfoGrid ";
 choices[50][3] = "SimpleDB";
 answers[50] = choices[50][3];
 units[50] = "73";
 comments[50] = "Id Pregunta: 655. ";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[51]= new Array();
 choices[51][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[51][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[51][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[51][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[51] = choices[51][2];
 units[51] = "17";
 comments[51] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[52]= "53)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[52]= new Array();
 choices[52][0] = "De los interesados en el procedimiento";
 choices[52][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[52][2] = "Disposiciones generales";
 choices[52][3] = "De los actos administrativos";
 answers[52] = choices[52][2];
 units[52] = "7";
 comments[52] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[53]= "54)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[53]= new Array();
 choices[53][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[53][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[53][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[53][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[53] = choices[53][2];
 units[53] = "5";
 comments[53] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[54]= "55)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[54]= new Array();
 choices[54][0] = "A nivel de art&iacute;culo.";
 choices[54][1] = "A nivel de cap&iacute;tulo.";
 choices[54][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[54][3] = "A nivel de concepto.";
 answers[54] = choices[54][2];
 units[54] = "10";
 comments[54] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[55]= "56)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[55]= new Array();
 choices[55][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[55][1] = "los Subdelegados del Gobierno en las provincias";
 choices[55][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[55][3] = "a y b son correctas";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[56]= "57)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[56]= new Array();
 choices[56][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[56][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[56][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[56][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[56] = choices[56][0];
 units[56] = "7";
 comments[56] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[57]= new Array();
 choices[57][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[57][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[57][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[57][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[58]= new Array();
 choices[58][0] = "Art&iacute;culo 16.2.";
 choices[58][1] = "Art&iacute;culo 17.1.";
 choices[58][2] = "Art&iacute;culo 18.1.";
 choices[58][3] = "Art&iacute;culo 18.2.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[59]= "60)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[59]= new Array();
 choices[59][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[59][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[59][2] = "Son incompatibles ambas actas de diputado.";
 choices[59][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[60]= "61)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[60]= new Array();
 choices[60][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[60][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[60][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[60][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[60] = choices[60][1];
 units[60] = "1";
 comments[60] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[61]= new Array();
 choices[61][0] = "NoSQL";
 choices[61][1] = "Sistemas de baja latencia";
 choices[61][2] = "MapReduce";
 choices[61][3] = "Business Intelligence";
 answers[61] = choices[61][1];
 units[61] = "73";
 comments[61] = "Id Pregunta: 660. ";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[62]= new Array();
 choices[62][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[62][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[62][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[62][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[63]= new Array();
 choices[63][0] = "JUnit, Artifactory y SonarQube";
 choices[63][1] = "JUnit, Artifactory y Selenium";
 choices[63][2] = "JUnit, SonarQube y Selenium";
 choices[63][3] = "ArtiFactory, SonarQube y Selenium";
 answers[63] = choices[63][2];
 units[63] = "92";
 comments[63] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[64]= "65)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[64]= new Array();
 choices[64][0] = "Conformidad";
 choices[64][1] = "Responsabilidad";
 choices[64][2] = "Adquisici&oacute;n";
 choices[64][3] = "Desempe&ntilde;o";
 answers[64] = choices[64][0];
 units[64] = "26";
 comments[64] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[65]= new Array();
 choices[65][0] = "117.5";
 choices[65][1] = "117.1";
 choices[65][2] = "116";
 choices[65][3] = "15";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[66]= "67)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[66]= new Array();
 choices[66][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[66][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[66][2] = "A partir del 1 de enero de 2015";
 choices[66][3] = "A partir del 1 de julio de 2016";
 answers[66] = choices[66][1];
 units[66] = "77";
 comments[66] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[67]= "68)  Son servicios declarados compartidos:";
 choices[67]= new Array();
 choices[67][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[67][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[67][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[67][3] = "Todos los anteriores";
 answers[67] = choices[67][3];
 units[67] = "19";
 comments[67] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[68]= "69)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[68]= new Array();
 choices[68][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[68][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[68][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[68][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[68] = choices[68][1];
 units[68] = "63";
 comments[68] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[69]= new Array();
 choices[69][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[69][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[69][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[69][3] = "La tasa de desempleo ronda el 20%";
 answers[69] = choices[69][2];
 units[69] = "12";
 comments[69] = "Id Pregunta: 572. Modelo econ&oacute;mico";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[70]= new Array();
 choices[70][0] = "La Seguridad Social";
 choices[70][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[70][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[70][3] = "El Banco de Espa&ntilde;a";
 answers[70] = choices[70][3];
 units[70] = "15";
 comments[70] = "Id Pregunta: 113. ";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[71]= "72)  La Administraci&oacute;n General del Estado se organiza:";
 choices[71]= new Array();
 choices[71][0] = "en Ministerios";
 choices[71][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[71][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[71][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[71] = choices[71][1];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[72]= "73)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[72]= new Array();
 choices[72][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[72][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[72][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[72][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[72] = choices[72][1];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[73]= "74)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[73]= new Array();
 choices[73][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[73][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[73][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[73][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[73] = choices[73][0];
 units[73] = "45";
 comments[73] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[74]= new Array();
 choices[74][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[74][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[74][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[74][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[74] = choices[74][1];
 units[74] = "26";
 comments[74] = "Id Pregunta: 547. Gobernanza TIC";


