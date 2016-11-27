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

//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[0]= new Array();
 choices[0][0] = "Art&iacute;culo 70.";
 choices[0][1] = "Art&iacute;culo 54.";
 choices[0][2] = "Articulo 62.";
 choices[0][3] = "Articulo 55. 5.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[1]= "2)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[1]= new Array();
 choices[1][0] = "Alrededor de un 26% del PIB";
 choices[1][1] = "Alrededor de un 11% del PIB";
 choices[1][2] = "Alrededor de un 34% del PIB";
 choices[1][3] = "Alrededor de un 7% del PIB";
 answers[1] = choices[1][1];
 units[1] = "12";
 comments[1] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[2]= new Array();
 choices[2][0] = "Cincuenta y cuatro.";
 choices[2][1] = "Cincuenta.";
 choices[2][2] = "Cincuenta y cinco.";
 choices[2][3] = "Cincuenta y dos.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[3]= new Array();
 choices[3][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[3][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[3][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[3][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[3] = choices[3][0];
 units[3] = "73";
 comments[3] = "Id Pregunta: 654. ";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[4]= "5)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[4]= new Array();
 choices[4][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[4][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[4][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[4][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[4] = choices[4][2];
 units[4] = "50";
 comments[4] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[5]= "6)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[5][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[5][2] = "b) y d) son verdaderas";
 choices[5][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[5] = choices[5][1];
 units[5] = "18, 20";
 comments[5] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[6]= new Array();
 choices[6][0] = "Compatibilidad";
 choices[6][1] = "Interoperabilidad";
 choices[6][2] = "Reutilizaci&oacute;n";
 choices[6][3] = "Accesibilidad";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[7]= "8)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[7]= new Array();
 choices[7][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[7][1] = "el C&oacute;digo Civil";
 choices[7][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[7][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[7] = choices[7][0];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[8]= new Array();
 choices[8][0] = "Backup full.";
 choices[8][1] = "Backup diferencial.";
 choices[8][2] = "Backup incremental.";
 choices[8][3] = "Backup deduplicado.";
 answers[8] = choices[8][3];
 units[8] = "53";
 comments[8] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[9]= "10)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[9]= new Array();
 choices[9][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[9][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[9][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[9][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[10]= new Array();
 choices[10][0] = "El Consejo Europeo.";
 choices[10][1] = "El Parlamento Europeo.";
 choices[10][2] = "El Consejo.";
 choices[10][3] = "La Comisi&oacute;n.";
 answers[10] = choices[10][3];
 units[10] = "5";
 comments[10] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[11]= "12)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[11]= new Array();
 choices[11][0] = "los Secretarios de Estado";
 choices[11][1] = "los Ministros";
 choices[11][2] = "los Subsecretarios";
 choices[11][3] = "los Secretarios generales";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[12]= "13)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[12]= new Array();
 choices[12][0] = "Cinco a&ntilde;os.";
 choices[12][1] = "Seis a&ntilde;os.";
 choices[12][2] = "Cuatro a&ntilde;os.";
 choices[12][3] = "Tres a&ntilde;os.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[13]= "14)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[13]= new Array();
 choices[13][0] = "la Administraci&oacute;n General del Estado";
 choices[13][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[13][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[13][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[14]= "15)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[14]= new Array();
 choices[14][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[14][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[14][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[14][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[15]= "16)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[15][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[15][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[15][3] = "Todas las anteriores son ciertas";
 answers[15] = choices[15][3];
 units[15] = "8";
 comments[15] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[16]= new Array();
 choices[16][0] = "El BCE";
 choices[16][1] = "El Parlamento";
 choices[16][2] = "El Consejo";
 choices[16][3] = "La Comisi&oacute;n";
 answers[16] = choices[16][3];
 units[16] = "17";
 comments[16] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[17]= "18)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[17]= new Array();
 choices[17][0] = "la capital del pa&iacute;s";
 choices[17][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[17][2] = "cada una de las provincias";
 choices[17][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[18]= new Array();
 choices[18][0] = "Categor&iacute;a b&aacute;sica";
 choices[18][1] = "Categor&iacute;a media";
 choices[18][2] = "Categor&iacute;a alta";
 choices[18][3] = "Categor&iacute;a media y alta";
 answers[18] = choices[18][2];
 units[18] = "46";
 comments[18] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[19]= "20)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[19]= new Array();
 choices[19][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[19][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[19][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[19][3] = "Todas son correctas.";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[20]= "21)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[20]= new Array();
 choices[20][0] = "Mercurial, Git y Apache Subversion.";
 choices[20][1] = "Gimp, Mercurial y Git.";
 choices[20][2] = "RedMine, Planner y OpenProj.";
 choices[20][3] = "Cassandra, Git y REDIS.";
 answers[20] = choices[20][0];
 units[20] = "92";
 comments[20] = "Id Pregunta: 574. Tema 92. TAI 2016.";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[21]= new Array();
 choices[21][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[21][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[21][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[21][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[21] = choices[21][0];
 units[21] = "14";
 comments[21] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[22]= new Array();
 choices[22][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[22][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[22][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[22][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[22] = choices[22][3];
 units[22] = "1";
 comments[22] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[23]= new Array();
 choices[23][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[23][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[23][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[23][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[23] = choices[23][1];
 units[23] = "84";
 comments[23] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[24]= new Array();
 choices[24][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[24][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[24][2] = "A) y B) son verdaderas";
 choices[24][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[24] = choices[24][2];
 units[24] = "73";
 comments[24] = "Id Pregunta: 106. ";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[25]= "26)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[25]= new Array();
 choices[25][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[25][1] = "Tratarse de un acto no susceptible de recurso";
 choices[25][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[25][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[25] = choices[25][2];
 units[25] = "8";
 comments[25] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[26]= new Array();
 choices[26][0] = "As&iacute;ncrona.";
 choices[26][1] = "Log-shipping.";
 choices[26][2] = "Disk buffering.";
 choices[26][3] = "S&iacute;ncrona.";
 answers[26] = choices[26][3];
 units[26] = "53";
 comments[26] = "Id Pregunta: 849. Xunta de Galicia 2015";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[27]= new Array();
 choices[27][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[27][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[27][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[27][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[27] = choices[27][3];
 units[27] = "77";
 comments[27] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[28]= new Array();
 choices[28][0] = "El Parlamento y el Consejo.";
 choices[28][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[28][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[28][3] = "La Comisi&oacute;n y el Consejo.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[29]= "30)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[29]= new Array();
 choices[29][0] = "Proveer de manera compartida servicios comunes";
 choices[29][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[29][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[29][3] = "Transparencia";
 answers[29] = choices[29][1];
 units[29] = "28";
 comments[29] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[30]= "31)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[30]= new Array();
 choices[30][0] = "Ejecutivo";
 choices[30][1] = "Limitativo";
 choices[30][2] = "Estimativo";
 choices[30][3] = "Progresivo";
 answers[30] = choices[30][2];
 units[30] = "10";
 comments[30] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[31]= new Array();
 choices[31][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[31][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[31][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[31][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[31] = choices[31][1];
 units[31] = "78";
 comments[31] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[32]= "33)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[32]= new Array();
 choices[32][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[32][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[32][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[32][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[32] = choices[32][1];
 units[32] = "19";
 comments[32] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[33]= new Array();
 choices[33][0] = "Car&aacute;cter sustitutivo";
 choices[33][1] = "Car&aacute;cter obligatorio";
 choices[33][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][3];
 units[33] = "19";
 comments[33] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[34]= "35)  Son bases de datos NoSQL orientadas a objetos:";
 choices[34]= new Array();
 choices[34][0] = "GemStone";
 choices[34][1] = "Zope Object DB";
 choices[34][2] = "Las dos anteriores";
 choices[34][3] = "Solo B)";
 answers[34] = choices[34][2];
 units[34] = "73";
 comments[34] = "Id Pregunta: 107. ";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[35][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[35][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[35][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[35] = choices[35][2];
 units[35] = "48";
 comments[35] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; es el machine learning?";
 choices[36]= new Array();
 choices[36][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[36][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[36][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[36][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[36] = choices[36][0];
 units[36] = "73";
 comments[36] = "Id Pregunta: 657. ";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[37]= "38)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[37]= new Array();
 choices[37][0] = "El Delegado del Gobierno.";
 choices[37][1] = "El Subdelegado del Gobierno.";
 choices[37][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[37][3] = "El Gobernador Civil.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[38]= "39)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[38]= new Array();
 choices[38][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[38][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[38][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[38][3] = "Todas las respuestas son correctas.";
 answers[38] = choices[38][3];
 units[38] = "50";
 comments[38] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[39]= "40)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[39]= new Array();
 choices[39][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[39][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[39][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[39][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[39] = choices[39][2];
 units[39] = "8";
 comments[39] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[40]= "41)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[40]= new Array();
 choices[40][0] = "l Consejo General del Poder Judicial";
 choices[40][1] = "El pleno de Tribunal Constitucional";
 choices[40][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[40][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[41]= new Array();
 choices[41][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[41][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[41][2] = "la falta de interoperabilidad.";
 choices[41][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[42]= "43)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[42]= new Array();
 choices[42][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[42][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[42][2] = "Crea una copia del proceso que hace la llamada.";
 choices[42][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[42] = choices[42][2];
 units[42] = "57";
 comments[42] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[43]= new Array();
 choices[43][0] = "a) Los cuatro ejercicios siguientes.";
 choices[43][1] = "b) El ejercicio siguiente.";
 choices[43][2] = "c) Los dos ejercicios siguientes.";
 choices[43][3] = "d) Los tres ejercicios siguientes.";
 answers[43] = choices[43][3];
 units[43] = "10";
 comments[43] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[44]= new Array();
 choices[44][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[44][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[44][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[44][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[44] = choices[44][3];
 units[44] = "10";
 comments[44] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[45]= new Array();
 choices[45][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[45][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[45][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[45][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[45] = choices[45][3];
 units[45] = "10";
 comments[45] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[46]= new Array();
 choices[46][0] = "Anualmente";
 choices[46][1] = "Bienalmente";
 choices[46][2] = "Cada cuatro a&ntilde;os";
 choices[46][3] = "No se define ninguna periodicidad";
 answers[46] = choices[46][1];
 units[46] = "19";
 comments[46] = "Id Pregunta: 592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[47]= "48)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[47]= new Array();
 choices[47][0] = "Conformidad";
 choices[47][1] = "Responsabilidad";
 choices[47][2] = "Adquisici&oacute;n";
 choices[47][3] = "Desempe&ntilde;o";
 answers[47] = choices[47][0];
 units[47] = "26";
 comments[47] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[48]= new Array();
 choices[48][0] = "En 2015";
 choices[48][1] = "En 2013";
 choices[48][2] = "En 2016";
 choices[48][3] = "En 2007";
 answers[48] = choices[48][1];
 units[48] = "19";
 comments[48] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Lollipop";
 choices[49][1] = "Jelly Bean";
 choices[49][2] = "Marshmallow";
 choices[49][3] = "KitKat";
 answers[49] = choices[49][2];
 units[49] = "59";
 comments[49] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[50]= new Array();
 choices[50][0] = "SPARQL";
 choices[50][1] = "UnQL";
 choices[50][2] = "XQUERY";
 choices[50][3] = "RQL";
 answers[50] = choices[50][0];
 units[50] = "74";
 comments[50] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[51]= "52)  Son proyectos de Apache relacionados con Big Data:";
 choices[51]= new Array();
 choices[51][0] = "Hadoop";
 choices[51][1] = "Spark";
 choices[51][2] = "A) y B)";
 choices[51][3] = "Niguno de los anteriores";
 answers[51] = choices[51][2];
 units[51] = "73";
 comments[51] = "Id Pregunta: 108. ";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[52]= new Array();
 choices[52][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[52][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[52][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][2];
 units[52] = "18, 20";
 comments[52] = "Id Pregunta: 742. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[53]= "54)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[53]= new Array();
 choices[53][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[53][1] = "Ninguna de las respuestas es correcta.";
 choices[53][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[53][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[53] = choices[53][0];
 units[53] = "5";
 comments[53] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[54]= "55)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[54]= new Array();
 choices[54][0] = "Un plan de igualdad.";
 choices[54][1] = "Un informe de impacto de g&eacute;nero.";
 choices[54][2] = "Un programa de igualdad.";
 choices[54][3] = "Todas son correctas.";
 answers[54] = choices[54][1];
 units[54] = "14";
 comments[54] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[55]= "56)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[55]= new Array();
 choices[55][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[55][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[55][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[55][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[55] = choices[55][2];
 units[55] = "22";
 comments[55] = "Id Pregunta: 128. ";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[56]= new Array();
 choices[56][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[56][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[56][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[56][3] = "todas son correctas";
 answers[56] = choices[56][3];
 units[56] = "7";
 comments[56] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[57]= new Array();
 choices[57][0] = "Perceptible";
 choices[57][1] = "Operable";
 choices[57][2] = "Comprensible";
 choices[57][3] = "Robusto";
 answers[57] = choices[57][2];
 units[57] = "42";
 comments[57] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[58]= "59)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[58]= new Array();
 choices[58][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[58][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[58] = choices[58][0];
 units[58] = "10";
 comments[58] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[59]= "60)  El sector Servicios NO incluye:";
 choices[59]= new Array();
 choices[59][0] = "El Comercio";
 choices[59][1] = "Los Transportes";
 choices[59][2] = "La Energ&iacute;a";
 choices[59][3] = "Las Comunicaciones";
 answers[59] = choices[59][2];
 units[59] = "12";
 comments[59] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[60]= new Array();
 choices[60][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[60][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[60][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[60][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[60] = choices[60][3];
 units[60] = "22";
 comments[60] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[61]= new Array();
 choices[61][0] = "ISO/IEC 31000";
 choices[61][1] = "ISO/IEC 14000";
 choices[61][2] = "ISO/IEC 38500";
 choices[61][3] = "ISO/IEC 18000";
 answers[61] = choices[61][2];
 units[61] = "26";
 comments[61] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[62]= "63)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[62]= new Array();
 choices[62][0] = "Fat y Ntfs.";
 choices[62][1] = "Extfat y Fat.";
 choices[62][2] = "Fat y Nfst.";
 choices[62][3] = "ext2fs y Ntfs.";
 answers[62] = choices[62][0];
 units[62] = "58";
 comments[62] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[63]= "64)  Las Universidades p&uacute;blicas:";
 choices[63]= new Array();
 choices[63][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[63][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[63][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[63][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[63] = choices[63][1];
 units[63] = "7";
 comments[63] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[64]= "65)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[64]= new Array();
 choices[64][0] = "De un mes si el acto fuera presunto";
 choices[64][1] = "De un mes si el acto fuera expreso";
 choices[64][2] = "De un mes en cualquier caso";
 choices[64][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[64] = choices[64][1];
 units[64] = "8";
 comments[64] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[65]= "66)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[65]= new Array();
 choices[65][0] = "Los propios miembros del Tribunal.";
 choices[65][1] = "El Consejo de Europa.";
 choices[65][2] = "El Consejo Europeo.";
 choices[65][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[66]= "67)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[66]= new Array();
 choices[66][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[66][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[66][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[66][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[66] = choices[66][0];
 units[66] = "8";
 comments[66] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[67]= "68)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[67]= new Array();
 choices[67][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[67][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[67][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[67][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[67] = choices[67][1];
 units[67] = "48";
 comments[67] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[68]= new Array();
 choices[68][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[68][1] = "La Direcci&oacute;n de la Competencia.";
 choices[68][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[68][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[68] = choices[68][0];
 units[68] = "121";
 comments[68] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[69]= new Array();
 choices[69][0] = "Se dejan listos los entornos de desarrollo";
 choices[69][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[69][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[69][3] = "Todas las anteriores son correctas";
 answers[69] = choices[69][3];
 units[69] = "34, 84";
 comments[69] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[70]= "71)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[70]= new Array();
 choices[70][0] = "Pas&oacute; de 518 a 626.";
 choices[70][1] = "Pas&oacute; de 434 a 518.";
 choices[70][2] = "Pas&oacute; de 345 a 512.";
 choices[70][3] = "Pas&oacute; de 435 a 610.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[71]= "72)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[71]= new Array();
 choices[71][0] = "Tres a&ntilde;os.";
 choices[71][1] = "Cuatro a&ntilde;os.";
 choices[71][2] = "Cinco a&ntilde;os.";
 choices[71][3] = "Seis a&ntilde;os.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[72]= new Array();
 choices[72][0] = "Selenium";
 choices[72][1] = "JUnit";
 choices[72][2] = "Jenkins";
 choices[72][3] = "JMeter";
 answers[72] = choices[72][2];
 units[72] = "92";
 comments[72] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[73]= new Array();
 choices[73][0] = "El Ministerio de Hacienda.";
 choices[73][1] = "El Ministerio de Econom&iacute;a.";
 choices[73][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[73][3] = "Ninguna de las respuestas es correcta.";
 answers[73] = choices[73][2];
 units[73] = "10";
 comments[73] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[74]= "75)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[74]= new Array();
 choices[74][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[74][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[74][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[74][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[74] = choices[74][0];
 units[74] = "31";
 comments[74] = "Id Pregunta: 2. AGE A1 2015";


