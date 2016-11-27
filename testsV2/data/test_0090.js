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

//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[0]= new Array();
 choices[0][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[0][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[0][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[0][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10172 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[1][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[1][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[1][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10172. CONSTITUCION1978";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[2]= new Array();
 choices[2][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[2][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[2][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[2][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[2] = choices[2][3];
 units[2] = "19";
 comments[2] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10565 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[3]= new Array();
 choices[3][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[3][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[3][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[3][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[3] = choices[3][3];
 units[3] = "12";
 comments[3] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[4]= new Array();
 choices[4][0] = "Ley org&aacute;nica.";
 choices[4][1] = "Ley ordinaria.";
 choices[4][2] = "Ley de bases.";
 choices[4][3] = "Ley marco.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 10271. CONSTITUCION1978";


//  Id pregunta: 10530 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[5]= new Array();
 choices[5][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[5][1] = "mediante resoluci&oacute;n judicial especial";
 choices[5][2] = "&uacute;nicamente mediante poder notarial";
 choices[5][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[6]= new Array();
 choices[6][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[6][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[6][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[6][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10199. CONSTITUCION1978";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "De la C&aacute;mara respectiva.";
 choices[7][1] = "Del Rey.";
 choices[7][2] = "Del Tribunal Constitucional.";
 choices[7][3] = "Del Tribunal Supremo.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10223. CONSTITUCION1978";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[8]= new Array();
 choices[8][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[8][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[8][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[8][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[8] = choices[8][3];
 units[8] = "47";
 comments[8] = "Id Pregunta: 10675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 10299 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[9]= new Array();
 choices[9][0] = "Quince miembros.";
 choices[9][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[9][2] = "Los miembros que determine el Consejo.";
 choices[9][3] = "Un Presidente y quince miembros.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 10299. UNION EUROPEA";


//  Id pregunta: 10399 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[10]= new Array();
 choices[10][0] = "Acciones de discriminaci&oacute;n.";
 choices[10][1] = "Acciones positivas.";
 choices[10][2] = "Acciones negativas.";
 choices[10][3] = "Acciones neutras.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[11]= new Array();
 choices[11][0] = "Estrasburgo.";
 choices[11][1] = "Bruselas.";
 choices[11][2] = "Luxemburgo.";
 choices[11][3] = "Par&iacute;s.";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10080 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[12]= new Array();
 choices[12][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[12][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[12][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[12][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[12] = choices[12][3];
 units[12] = "46";
 comments[12] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10106 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[13]= new Array();
 choices[13][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[13][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[13][2] = "A) y B) son verdaderas";
 choices[13][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[13] = choices[13][2];
 units[13] = "73";
 comments[13] = "Id Pregunta: 10106. ";


//  Id pregunta: 10064 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[14]= new Array();
 choices[14][0] = "Windows Phone";
 choices[14][1] = "Blackberry";
 choices[14][2] = "iOS";
 choices[14][3] = "Android";
 answers[14] = choices[14][3];
 units[14] = "59";
 comments[14] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[15]= new Array();
 choices[15][0] = "Consumidores";
 choices[15][1] = "PYMES y Start-ups";
 choices[15][2] = "La Industria";
 choices[15][3] = "Todos los anteriores";
 answers[15] = choices[15][3];
 units[15] = "17";
 comments[15] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10637 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  En el sistema operativo Unix/Linux, el comando id:";
 choices[16]= new Array();
 choices[16][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[16][1] = "El comando id no existe.";
 choices[16][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[16][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[16] = choices[16][0];
 units[16] = "57";
 comments[16] = "Id Pregunta: 10637. Junta de Extremadura A1 2015";


//  Id pregunta: 10468 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[17]= new Array();
 choices[17][0] = "El Ministerio de Hacienda.";
 choices[17][1] = "El Ministerio de Econom&iacute;a.";
 choices[17][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[17][3] = "Ninguna de las respuestas es correcta.";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 10468. PRESUPUESTOS GENERALES";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[18]= new Array();
 choices[18][0] = "En 2015";
 choices[18][1] = "En 2013";
 choices[18][2] = "En 2016";
 choices[18][3] = "En 2007";
 answers[18] = choices[18][1];
 units[18] = "19";
 comments[18] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10243 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[19]= new Array();
 choices[19][0] = "Art&iacute;culo 70.";
 choices[19][1] = "Art&iacute;culo 54.";
 choices[19][2] = "Articulo 62.";
 choices[19][3] = "Articulo 55. 5.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10243. CONSTITUCION1978";


//  Id pregunta: 10321 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[20]= new Array();
 choices[20][0] = "Cincuenta y cuatro.";
 choices[20][1] = "Cincuenta.";
 choices[20][2] = "Cincuenta y cinco.";
 choices[20][3] = "Cincuenta y dos.";
 answers[20] = choices[20][1];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10321. UNION EUROPEA";


//  Id pregunta: 10075 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[21]= new Array();
 choices[21][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[21][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[21][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[21][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[21] = choices[21][0];
 units[21] = "35";
 comments[21] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[22]= new Array();
 choices[22][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[22][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[22][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[22][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10546 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[23]= new Array();
 choices[23][0] = "Conformidad";
 choices[23][1] = "Responsabilidad";
 choices[23][2] = "Adquisici&oacute;n";
 choices[23][3] = "Desempe&ntilde;o";
 answers[23] = choices[23][0];
 units[23] = "26";
 comments[23] = "Id Pregunta: 10546. Gobernanza TIC";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[24]= new Array();
 choices[24][0] = "las Cortes generales.";
 choices[24][1] = "los partidos pol&iacute;ticos.";
 choices[24][2] = "los sindicatos.";
 choices[24][3] = "las Comunidades Aut&oacute;nomas.";
 answers[24] = choices[24][1];
 units[24] = "1";
 comments[24] = "Id Pregunta: 10225. CONSTITUCION1978";


//  Id pregunta: 10375 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[25]= new Array();
 choices[25][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[25][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[25][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[25][3] = "Todas las respuestas son correctas.";
 answers[25] = choices[25][3];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10375. UNION EUROPEA";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[26]= new Array();
 choices[26][0] = "20 parlamentarios.";
 choices[26][1] = "29 parlamentarios.";
 choices[26][2] = "18 parlamentarios.";
 choices[26][3] = "23 parlamentarios.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10366. UNION EUROPEA";


//  Id pregunta: 10315 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  El Colegio de Comisarios se re&uacute;ne:";
 choices[27]= new Array();
 choices[27][0] = "Una vez por semana.";
 choices[27][1] = "Una vez al mes.";
 choices[27][2] = "Dos veces en semana.";
 choices[27][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 10315. UNION EUROPEA";


//  Id pregunta: 10008 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[28]= new Array();
 choices[28][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[28][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[28][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[28][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[28] = choices[28][2];
 units[28] = "26";
 comments[28] = "Id Pregunta: 10008. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  La iniciativa legislativa corresponde:";
 choices[29]= new Array();
 choices[29][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[29][1] = "Al rey y al Gobierno.";
 choices[29][2] = "Al Congreso, al Senado y al Rey.";
 choices[29][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[29] = choices[29][3];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10259. CONSTITUCION1978";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[30]= new Array();
 choices[30][0] = "El aumento de la esperanza de vida.";
 choices[30][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[30][2] = "La reducci&oacute;n del desempleo.";
 choices[30][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[30] = choices[30][0];
 units[30] = "14";
 comments[30] = "Id Pregunta: 10673. Estructura social";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[31][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[31][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[31][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[32]= new Array();
 choices[32][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[32][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[32][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[32][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 10156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 10082 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[33][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[33][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[33][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[33] = choices[33][3];
 units[33] = "41";
 comments[33] = "Id Pregunta: 10082. AGE A1 2015";


//  Id pregunta: 10091 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[34]= new Array();
 choices[34][0] = "JUnit, Artifactory y SonarQube";
 choices[34][1] = "JUnit, Artifactory y Selenium";
 choices[34][2] = "JUnit, SonarQube y Selenium";
 choices[34][3] = "ArtiFactory, SonarQube y Selenium";
 answers[34] = choices[34][2];
 units[34] = "92";
 comments[34] = "Id Pregunta: 10091. AGE A1 2015";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; es MongoDB?";
 choices[35]= new Array();
 choices[35][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[35][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[35][2] = "Un sistema gestor de base de datos relacional.";
 choices[35][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[35] = choices[35][1];
 units[35] = "73";
 comments[35] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10645 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[36]= new Array();
 choices[36][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[36][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[36][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[36][3] = "El Instituto de la Mujer de Extremadura.";
 answers[36] = choices[36][3];
 units[36] = "14";
 comments[36] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10507 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[37]= new Array();
 choices[37][0] = "Reducir el gasto p&uacute;blico.";
 choices[37][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[37][2] = "Reducir el endeudamiento neto.";
 choices[37][3] = "Al Fondo de Contingencia.";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 10507. PRESUPUESTOS GENERALES";


//  Id pregunta: 10072 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[38][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[38][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[38][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[38] = choices[38][1];
 units[38] = "86";
 comments[38] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10666 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el cumplimiento de tr&aacute;mites por defecto es de:";
 choices[39]= new Array();
 choices[39][0] = "10 d&iacute;as.";
 choices[39][1] = "15 d&iacute;as.";
 choices[39][2] = "1 mes.";
 choices[39][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[39] = choices[39][0];
 units[39] = "7";
 comments[39] = "Id Pregunta: 10666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 10324 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[40]= new Array();
 choices[40][0] = "Tres a&ntilde;os.";
 choices[40][1] = "Cuatro a&ntilde;os.";
 choices[40][2] = "Cinco a&ntilde;os.";
 choices[40][3] = "Seis a&ntilde;os.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10324. UNION EUROPEA";


//  Id pregunta: 10084 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[41]= new Array();
 choices[41][0] = "Interchange of Data between Administrations (IDA)";
 choices[41][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[41][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[41][3] = "Interoperability Electronic European Solution (IEES)";
 answers[41] = choices[41][1];
 units[41] = "43";
 comments[41] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10639 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[42]= new Array();
 choices[42][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[42][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[42][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[42][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[42] = choices[42][2];
 units[42] = "57";
 comments[42] = "Id Pregunta: 10639. Junta de Extremadura A1 2015";


//  Id pregunta: 10267 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[43]= new Array();
 choices[43][0] = "Los Derechos y Deberes fundamentales.";
 choices[43][1] = "La Corona.";
 choices[43][2] = "El Poder Judicial.";
 choices[43][3] = "Las Cortes Generales.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 10267. CONSTITUCION1978";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[44]= new Array();
 choices[44][0] = "Por unanimidad.";
 choices[44][1] = "Por mayor&iacute;a cualificada.";
 choices[44][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[44][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10312. UNION EUROPEA";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[45]= new Array();
 choices[45][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[45][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[45][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[45][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[45] = choices[45][1];
 units[45] = "56";
 comments[45] = "Id Pregunta: 10608. Junta de Extremadura A1 2015";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[46]= new Array();
 choices[46][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[46][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[46][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[46][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[46] = choices[46][3];
 units[46] = "26";
 comments[46] = "Id Pregunta: 10550. Gobernanza TIC";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[47]= new Array();
 choices[47][0] = "El Parlamento Europeo.";
 choices[47][1] = "Todas las respuestas son correctas.";
 choices[47][2] = "La Comisi&oacute;n Europea.";
 choices[47][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 10353. UNION EUROPEA";


//  Id pregunta: 10395 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[48]= new Array();
 choices[48][0] = "Discriminaci&oacute;n indirecta.";
 choices[48][1] = "Discriminaci&oacute;n directa.";
 choices[48][2] = "Discriminaci&oacute;n por maternidad.";
 choices[48][3] = "Discriminaci&oacute;n abusiva.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 10395. POLITICAS DE IGUALDAD";


//  Id pregunta: 10670 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[49][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[49][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[49][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[49] = choices[49][1];
 units[49] = "7";
 comments[49] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10219 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[50]= new Array();
 choices[50][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[50][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[50][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[50][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[50] = choices[50][1];
 units[50] = "1";
 comments[50] = "Id Pregunta: 10219. CONSTITUCION1978";


//  Id pregunta: 10646 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[51]= new Array();
 choices[51][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[51][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[51][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[51][3] = "Todas las respuestas son correctas.";
 answers[51] = choices[51][0];
 units[51] = "101";
 comments[51] = "Id Pregunta: 10646. Junta de Extremadura A1 2015";


//  Id pregunta: 10338 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[52]= new Array();
 choices[52][0] = "CO.PER.";
 choices[52][1] = "COMPER.";
 choices[52][2] = "CO.RE.PER.";
 choices[52][3] = "CO.PE.RRE.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10338. UNION EUROPEA";


//  Id pregunta: 10440 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[53][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[53][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[53][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10575 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[54]= new Array();
 choices[54][0] = "MySQL";
 choices[54][1] = "SQLite";
 choices[54][2] = "Zope";
 choices[54][3] = "MariaDB";
 answers[54] = choices[54][2];
 units[54] = "61";
 comments[54] = "Id Pregunta: 10575. Tema 61. TAI 2016.";


//  Id pregunta: 10382 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[55]= new Array();
 choices[55][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[55][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[55][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[55][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 10382. POLITICAS DE IGUALDAD";


//  Id pregunta: 10139 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[56]= new Array();
 choices[56][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[56][1] = "Static &amp; Active process for REsolution Bank.";
 choices[56][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[56][3] = "Super Active REsponse for Banks";
 answers[56] = choices[56][0];
 units[56] = "12";
 comments[56] = "Id Pregunta: 10139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10328 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[57]= new Array();
 choices[57][0] = "El Presidente del Consejo Europeo.";
 choices[57][1] = "La Comisi&oacute;n.";
 choices[57][2] = "El Consejo.";
 choices[57][3] = "El Parlamento Europeo.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10230 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[58]= new Array();
 choices[58][0] = "Por Real Decreto.";
 choices[58][1] = "Por Orden del Ministerio del Interior.";
 choices[58][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[58][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 10230. CONSTITUCION1978";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[59]= new Array();
 choices[59][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[59][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[59][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[59][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[59] = choices[59][2];
 units[59] = "53";
 comments[59] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[60]= new Array();
 choices[60][0] = "solo mediante ley";
 choices[60][1] = "reglamentariamente";
 choices[60][2] = "mediante ley o reglamentariamente";
 choices[60][3] = "ninguna es correcta";
 answers[60] = choices[60][1];
 units[60] = "7";
 comments[60] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10656 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[61]= new Array();
 choices[61][0] = "Cassandra";
 choices[61][1] = "Riak";
 choices[61][2] = "Avro";
 choices[61][3] = "Zookeeper";
 answers[61] = choices[61][3];
 units[61] = "73";
 comments[61] = "Id Pregunta: 10656. ";


//  Id pregunta: 10233 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[62]= new Array();
 choices[62][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[62][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[62][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[62][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10383 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[63]= new Array();
 choices[63][0] = "El Consejo Nacional de la Mujer";
 choices[63][1] = "El Consejo de la Mujer";
 choices[63][2] = "El Instituto de la Mujer";
 choices[63][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[63] = choices[63][3];
 units[63] = "14";
 comments[63] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10029 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[64][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[64][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[64][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[64] = choices[64][2];
 units[64] = "121";
 comments[64] = "Id Pregunta: 10029. AGE A1 2015";


//  Id pregunta: 10651 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[65]= new Array();
 choices[65][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[65][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[65][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[65][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[65] = choices[65][3];
 units[65] = "120";
 comments[65] = "Id Pregunta: 10651. Junta de Extremadura A1 2015";


//  Id pregunta: 10464 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[66]= new Array();
 choices[66][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[66][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[66][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[66][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10464. PRESUPUESTOS GENERALES";


//  Id pregunta: 10452 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[67]= new Array();
 choices[67][0] = "Los cr&eacute;ditos";
 choices[67][1] = "Las partidas presupuestarias";
 choices[67][2] = "Los derechos";
 choices[67][3] = "Las obligaciones";
 answers[67] = choices[67][3];
 units[67] = "10";
 comments[67] = "Id Pregunta: 10452. PRESUPUESTOS GENERALES";


//  Id pregunta: 10117 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[68]= new Array();
 choices[68][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[68][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[68][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[68][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[68] = choices[68][0];
 units[68] = "15";
 comments[68] = "Id Pregunta: 10117. ";


//  Id pregunta: 10289 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[69]= new Array();
 choices[69][0] = "Tres a&ntilde;os.";
 choices[69][1] = "Dos a&ntilde;os y medio.";
 choices[69][2] = "Cinco a&ntilde;os.";
 choices[69][3] = "Seis a&ntilde;os.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10289. UNION EUROPEA";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[70]= new Array();
 choices[70][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[70][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[70][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[70][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[70] = choices[70][3];
 units[70] = "10";
 comments[70] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10569 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  El sector Servicios NO incluye:";
 choices[71]= new Array();
 choices[71][0] = "El Comercio";
 choices[71][1] = "Los Transportes";
 choices[71][2] = "La Energ&iacute;a";
 choices[71][3] = "Las Comunicaciones";
 answers[71] = choices[71][2];
 units[71] = "12";
 comments[71] = "Id Pregunta: 10569. Modelo econ&oacute;mico";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[72]= new Array();
 choices[72][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[72][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[72][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[72][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10231 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[73]= new Array();
 choices[73][0] = "El Presidente del Congreso de los Diputados.";
 choices[73][1] = "El Presidente del Gobierno.";
 choices[73][2] = "El Rey.";
 choices[73][3] = "El Consejo de Ministros.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10491 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[74]= new Array();
 choices[74][0] = "Un programa presupuestario.";
 choices[74][1] = "Un concepto presupuestario.";
 choices[74][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[74][3] = "Un cr&eacute;dito presupuestario.";
 answers[74] = choices[74][0];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10491. PRESUPUESTOS GENERALES";


//  Id pregunta: 10211 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[75]= new Array();
 choices[75][0] = "Cuatro.";
 choices[75][1] = "Ninguno.";
 choices[75][2] = "Dos.";
 choices[75][3] = "Seis.";
 answers[75] = choices[75][2];
 units[75] = "1";
 comments[75] = "Id Pregunta: 10211. CONSTITUCION1978";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[76]= new Array();
 choices[76][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[76][1] = "Publicidad de las normas.";
 choices[76][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[76][3] = "Coordinaci&oacute;n normativa.";
 answers[76] = choices[76][2];
 units[76] = "1";
 comments[76] = "Id Pregunta: 10244. CONSTITUCION1978";


//  Id pregunta: 10663 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[77]= new Array();
 choices[77][0] = "De oficio.";
 choices[77][1] = "A solicitud del interesado.";
 choices[77][2] = "De oficio o a solicitud del interesado.";
 choices[77][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[77] = choices[77][2];
 units[77] = "7";
 comments[77] = "Id Pregunta: 10663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 10606 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[78]= new Array();
 choices[78][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[78][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[78][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[78][3] = "Todas las respuestas son correctas.";
 answers[78] = choices[78][1];
 units[78] = "101";
 comments[78] = "Id Pregunta: 10606. Junta de Extremadura A1 2015";


//  Id pregunta: 10285 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[79]= new Array();
 choices[79][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[79][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[79][2] = "la falta de interoperabilidad.";
 choices[79][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[79] = choices[79][1];
 units[79] = "5";
 comments[79] = "Id Pregunta: 10285. UNION EUROPEA";


//  Id pregunta: 10381 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[80]= new Array();
 choices[80][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[80][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[80][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[80][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[80] = choices[80][0];
 units[80] = "14";
 comments[80] = "Id Pregunta: 10381. POLITICAS DE IGUALDAD";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[81]= new Array();
 choices[81][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[81][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[81][2] = "a y b son correctas";
 choices[81][3] = "a y b son incorrectas";
 answers[81] = choices[81][0];
 units[81] = "7";
 comments[81] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10051 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[82]= new Array();
 choices[82][0] = "Cifrado de las comunicaciones";
 choices[82][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[82][2] = "Registro de los accesos";
 choices[82][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[82] = choices[82][1];
 units[82] = "35";
 comments[82] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[83]= new Array();
 choices[83][0] = "El servicio de teleasistencia.";
 choices[83][1] = "El servicio de ayuda a domicilio.";
 choices[83][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[83][3] = "Todas las anteriores son correctas.";
 answers[83] = choices[83][3];
 units[83] = "14";
 comments[83] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10394 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[84]= new Array();
 choices[84][0] = "Discriminaci&oacute;n indirecta.";
 choices[84][1] = "Discriminaci&oacute;n directa.";
 choices[84][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[84][3] = "Discriminaci&oacute;n abusiva.";
 answers[84] = choices[84][0];
 units[84] = "14";
 comments[84] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[85]= new Array();
 choices[85][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[85][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[85][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[85][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[85] = choices[85][3];
 units[85] = "78";
 comments[85] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[86]= new Array();
 choices[86][0] = "Presentar la moci&oacute;n de censura.";
 choices[86][1] = "Presidir las sesiones del Parlamento.";
 choices[86][2] = "Organizar la Secretar&iacute;a General.";
 choices[86][3] = "Preparar las actividades de las Comisiones.";
 answers[86] = choices[86][1];
 units[86] = "5";
 comments[86] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10553 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[87]= new Array();
 choices[87][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[87][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[87][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[87][3] = "Todas lo son";
 answers[87] = choices[87][0];
 units[87] = "17";
 comments[87] = "Id Pregunta: 10553. Mercado &Uacute;nico Digital";


//  Id pregunta: 10148 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[88]= new Array();
 choices[88][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[88][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[88][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[88][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[88] = choices[88][2];
 units[88] = "7";
 comments[88] = "Id Pregunta: 10148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 10039 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[89]= new Array();
 choices[89][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[89][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[89][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[89][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[89] = choices[89][2];
 units[89] = "71";
 comments[89] = "Id Pregunta: 10039. AGE A1 2015";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[90]= new Array();
 choices[90][0] = "Integrar la estrategia TIC con la de negocio";
 choices[90][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[90][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[90][3] = "Todas las anteriores";
 answers[90] = choices[90][3];
 units[90] = "26";
 comments[90] = "Id Pregunta: 10547. Gobernanza TIC";


//  Id pregunta: 10599 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[91]= new Array();
 choices[91][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[91][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[91][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[91][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[91] = choices[91][2];
 units[91] = "45";
 comments[91] = "Id Pregunta: 10599. Junta de Extremadura A1 2015";


//  Id pregunta: 10296 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[92]= new Array();
 choices[92][0] = "Al Consejo Europeo.";
 choices[92][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[92][2] = "A la Comisi&oacute;n Europea.";
 choices[92][3] = "Al Parlamento Europeo.";
 answers[92] = choices[92][2];
 units[92] = "5";
 comments[92] = "Id Pregunta: 10296. UNION EUROPEA";


//  Id pregunta: 10109 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Big Data:";
 choices[93]= new Array();
 choices[93][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[93][1] = "No puede emplearse para tratar datos no estructurados";
 choices[93][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[93][3] = "Ninguna de las anteriores";
 answers[93] = choices[93][3];
 units[93] = "73";
 comments[93] = "Id Pregunta: 10109. ";


//  Id pregunta: 10088 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[94]= new Array();
 choices[94][0] = "Diagrama de clases";
 choices[94][1] = "Diagrama de componentes";
 choices[94][2] = "Diagrama de estructura";
 choices[94][3] = "Diagrama de paquetes";
 answers[94] = choices[94][0];
 units[94] = "91";
 comments[94] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[95]= new Array();
 choices[95][0] = "Crecimiento inteligente.";
 choices[95][1] = "Crecimiento inclusivo.";
 choices[95][2] = "Crecimiento sostenible.";
 choices[95][3] = "Crecimiento integrador.";
 answers[95] = choices[95][1];
 units[95] = "5";
 comments[95] = "Id Pregunta: 10283. UNION EUROPEA";


//  Id pregunta: 10164 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[96]= new Array();
 choices[96][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[96][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[96][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[96][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[96] = choices[96][1];
 units[96] = "19";
 comments[96] = "Id Pregunta: 10164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 10396 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[97]= new Array();
 choices[97][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[97][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[97][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[97][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[97] = choices[97][0];
 units[97] = "14";
 comments[97] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


//  Id pregunta: 10141 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  El recurso de alzada puede interponerse:";
 choices[98]= new Array();
 choices[98][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[98][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[98][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[98][3] = "Ante el Defensor del Pueblo";
 answers[98] = choices[98][1];
 units[98] = "8";
 comments[98] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10665 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[99]= new Array();
 choices[99][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, , la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[99][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[99][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[99][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[99] = choices[99][2];
 units[99] = "7";
 comments[99] = "Id Pregunta: 10665. Art&iacute;culo 70 de la Ley 39/2015";


