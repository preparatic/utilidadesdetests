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

//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[0]= "1)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[0]= new Array();
 choices[0][0] = "El Gobierno.";
 choices[0][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[0][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[0][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[1]= new Array();
 choices[1][0] = "Quince miembros.";
 choices[1][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[1][2] = "Los miembros que determine el Consejo.";
 choices[1][3] = "Un Presidente y quince miembros.";
 answers[1] = choices[1][1];
 units[1] = "14";
 comments[1] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[2]= "3)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[2]= new Array();
 choices[2][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[2][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[2][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[2][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[3]= new Array();
 choices[3][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[3][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[3][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[3][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[3] = choices[3][0];
 units[3] = "22";
 comments[3] = "Id Pregunta: 124. ";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[4]= new Array();
 choices[4][0] = "Ford";
 choices[4][1] = "Google";
 choices[4][2] = "Toyota";
 choices[4][3] = "Facebook";
 answers[4] = choices[4][2];
 units[4] = "34";
 comments[4] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[5]= "6)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[5]= new Array();
 choices[5][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[5][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[5][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[5][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[5] = choices[5][2];
 units[5] = "50";
 comments[5] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[6]= "7)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[6]= new Array();
 choices[6][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[6][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[6][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[6][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "VMware ESX";
 choices[7][1] = "XenServer";
 choices[7][2] = "Alfresco";
 choices[7][3] = "Microsoft Hyper-V";
 answers[7] = choices[7][2];
 units[7] = "54";
 comments[7] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[8]= new Array();
 choices[8][0] = "El Presidente del Gobierno.";
 choices[8][1] = "El Consejo de Ministros.";
 choices[8][2] = "40 Diputados.";
 choices[8][3] = "El Ministerio Fiscal.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[9]= new Array();
 choices[9][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[9][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[9][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[9][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[9] = choices[9][3];
 units[9] = "101";
 comments[9] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


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


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[11]= new Array();
 choices[11][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[11][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[11][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[11][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[11] = choices[11][0];
 units[11] = "91";
 comments[11] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[12]= "13)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[12]= new Array();
 choices[12][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[12][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[12][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[12][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[12] = choices[12][3];
 units[12] = "56";
 comments[12] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[13]= "14)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[13]= new Array();
 choices[13][0] = "la Administraci&oacute;n General del Estado";
 choices[13][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[13][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[13][3] = "el sector p&uacute;blico y privado institucional";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[14]= "15)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[14]= new Array();
 choices[14][0] = "623";
 choices[14][1] = "649";
 choices[14][2] = "626";
 choices[14][3] = "565";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[15]= new Array();
 choices[15][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[15][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[15][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[15][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[15] = choices[15][0];
 units[15] = "19";
 comments[15] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[16]= new Array();
 choices[16][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[16][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[16][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[16][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[16] = choices[16][2];
 units[16] = "22";
 comments[16] = "Id Pregunta: 121. ";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[17]= new Array();
 choices[17][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[17][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[17][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[17][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[18]= "19)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[18]= new Array();
 choices[18][0] = "l Consejo General del Poder Judicial";
 choices[18][1] = "El pleno de Tribunal Constitucional";
 choices[18][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[18][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[18] = choices[18][3];
 units[18] = "1";
 comments[18] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[19]= "20)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[19]= new Array();
 choices[19][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[19][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[19][2] = "Cinco a&ntilde;os.";
 choices[19][3] = "Ninguna es correcta.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[20]= "21)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[20]= new Array();
 choices[20][0] = "Acuerdos cualificados.";
 choices[20][1] = "Acuerdos ponderados.";
 choices[20][2] = "Valoraci&oacute;n de los votos.";
 choices[20][3] = "Ponderaci&oacute;n de los votos.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[21]= new Array();
 choices[21][0] = "El 5 de Octubre de 2015";
 choices[21][1] = "El 15 de Octubre de 2015";
 choices[21][2] = "El 15 de Septiembre de 2015";
 choices[21][3] = "El 2 de Octubre de 2015";
 answers[21] = choices[21][2];
 units[21] = "19";
 comments[21] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[22]= "23)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[22]= new Array();
 choices[22][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[22][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[22][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[22][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[23]= "24)  Los Secretarios generales t&eacute;cnicos:";
 choices[23]= new Array();
 choices[23][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[23][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[23][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[23][3] = "todas son correctas";
 answers[23] = choices[23][3];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[24]= new Array();
 choices[24][0] = "La CETIC";
 choices[24][1] = "Los Ministerios";
 choices[24][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[24][3] = "Ninguno de los anteriores";
 answers[24] = choices[24][1];
 units[24] = "19";
 comments[24] = "Id Pregunta: 597. Estrategia TIC";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[25]= "26)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[25]= new Array();
 choices[25][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[25][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[25][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[25][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[25] = choices[25][2];
 units[25] = "7";
 comments[25] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[26]= "27)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[26]= new Array();
 choices[26][0] = "Transparencia e innovaci&oacute;n";
 choices[26][1] = "Seguridad y reutilizaci&oacute;n";
 choices[26][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[26][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[26] = choices[26][3];
 units[26] = "28";
 comments[26] = "Id Pregunta: 743. Estrategia TIC";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[27]= "28)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[27]= new Array();
 choices[27][0] = "Pas&oacute; de 518 a 626.";
 choices[27][1] = "Pas&oacute; de 434 a 518.";
 choices[27][2] = "Pas&oacute; de 345 a 512.";
 choices[27][3] = "Pas&oacute; de 435 a 610.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[28]= "29)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[28]= new Array();
 choices[28][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[28][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[28][2] = "Se basan en sistemas distribuidos";
 choices[28][3] = "Se basan en el modelo de datos relacional";
 answers[28] = choices[28][2];
 units[28] = "73";
 comments[28] = "Id Pregunta: 102. ";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[29]= "30)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[29]= new Array();
 choices[29][0] = "Son actos individuales no normativos.";
 choices[29][1] = "Poseen alcance general.";
 choices[29][2] = "Son actos normativos.";
 choices[29][3] = "No son obligatorias.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[30]= new Array();
 choices[30][0] = "Art&iacute;culo 16.2.";
 choices[30][1] = "Art&iacute;culo 17.1.";
 choices[30][2] = "Art&iacute;culo 18.1.";
 choices[30][3] = "Art&iacute;culo 18.2.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[31]= new Array();
 choices[31][0] = "Art&iacute;culo 70.";
 choices[31][1] = "Art&iacute;culo 54.";
 choices[31][2] = "Articulo 62.";
 choices[31][3] = "Articulo 55. 5.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[32]= new Array();
 choices[32][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[32][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[32][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[32][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[32] = choices[32][3];
 units[32] = "10";
 comments[32] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[33]= "34)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[33]= new Array();
 choices[33][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[33][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[33][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[33][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[34]= new Array();
 choices[34][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[34][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[34][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[34][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[34] = choices[34][3];
 units[34] = "19";
 comments[34] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[35]= "36)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[35]= new Array();
 choices[35][0] = "Intersecci&oacute;n.";
 choices[35][1] = "Uni&oacute;n.";
 choices[35][2] = "Restricci&oacute;n.";
 choices[35][3] = "Diferencia.";
 answers[35] = choices[35][0];
 units[35] = "60";
 comments[35] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[36]= "37)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[36]= new Array();
 choices[36][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[36][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[36][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[36][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[36] = choices[36][2];
 units[36] = "26";
 comments[36] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[37]= new Array();
 choices[37][0] = "Estrasburgo.";
 choices[37][1] = "Bruselas.";
 choices[37][2] = "Luxemburgo.";
 choices[37][3] = "Par&iacute;s.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[38]= new Array();
 choices[38][0] = "La Comisi&oacute;n Permanente.";
 choices[38][1] = "El Presidente.";
 choices[38][2] = "El Pleno.";
 choices[38][3] = "El Vicepresidente.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[39]= "40)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[39]= new Array();
 choices[39][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[39][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[39][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[39][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[40]= "41)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[40]= new Array();
 choices[40][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[40][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[40][2] = "El Presidente del Gobierno";
 choices[40][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[40] = choices[40][1];
 units[40] = "26";
 comments[40] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[41]= new Array();
 choices[41][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[41][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[41][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[41][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[41] = choices[41][0];
 units[41] = "76";
 comments[41] = "Id Pregunta: 855. Xunta de Galicia 2015";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[42]= "43)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[42]= new Array();
 choices[42][0] = "la Administraci&oacute;n General del Estado";
 choices[42][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[42][2] = "las Entidades Locales";
 choices[42][3] = "todas son correctas";
 answers[42] = choices[42][3];
 units[42] = "7";
 comments[42] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[43]= new Array();
 choices[43][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[43][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[43][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[43][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[43] = choices[43][1];
 units[43] = "77";
 comments[43] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[44]= new Array();
 choices[44][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[44][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[44][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[44][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[45]= new Array();
 choices[45][0] = "Backup full.";
 choices[45][1] = "Backup diferencial.";
 choices[45][2] = "Backup incremental.";
 choices[45][3] = "Backup deduplicado.";
 answers[45] = choices[45][3];
 units[45] = "53";
 comments[45] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[46]= new Array();
 choices[46][0] = "Jenkins";
 choices[46][1] = "Hudson";
 choices[46][2] = "SonarQube";
 choices[46][3] = "Todas lo son";
 answers[46] = choices[46][3];
 units[46] = "92";
 comments[46] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[47]= "48)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[47]= new Array();
 choices[47][0] = "Conformidad";
 choices[47][1] = "Responsabilidad";
 choices[47][2] = "Adquisici&oacute;n";
 choices[47][3] = "Desempe&ntilde;o";
 answers[47] = choices[47][0];
 units[47] = "26";
 comments[47] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[48][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[48][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[48][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[48] = choices[48][2];
 units[48] = "47";
 comments[48] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[49]= "50)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[49]= new Array();
 choices[49][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[49][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[49][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[49][3] = "Todas son correctas.";
 answers[49] = choices[49][3];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[50]= "51)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[50]= new Array();
 choices[50][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[50][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[50][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[50][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[50] = choices[50][0];
 units[50] = "14";
 comments[50] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[51]= "52)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[51]= new Array();
 choices[51][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[51][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[51][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[51][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[52]= "53)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[52]= new Array();
 choices[52][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[52][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[52][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[52][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[52] = choices[52][1];
 units[52] = "7";
 comments[52] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[53]= "54)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[53]= new Array();
 choices[53][0] = "Ejecuci&oacute;n";
 choices[53][1] = "Adjudicaci&oacute;n";
 choices[53][2] = "Licitaci&oacute;n";
 choices[53][3] = "Formalizaci&oacute;n";
 answers[53] = choices[53][3];
 units[53] = "37";
 comments[53] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[54]= new Array();
 choices[54][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[54][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[54][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][1];
 units[54] = "19";
 comments[54] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[55]= "56)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[55]= new Array();
 choices[55][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[55][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[55][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[55][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[55] = choices[55][0];
 units[55] = "34, 84";
 comments[55] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[56]= new Array();
 choices[56][0] = "La CETIC";
 choices[56][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[56][2] = "La DTIC";
 choices[56][3] = "Ninguno de los anteriores";
 answers[56] = choices[56][1];
 units[56] = "19";
 comments[56] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[57]= "58)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[57]= new Array();
 choices[57][0] = "El nombre y el tipo de correspondencia.";
 choices[57][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[57][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[57][3] = "El nombre y el grado.";
 answers[57] = choices[57][1];
 units[57] = "85";
 comments[57] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[58]= "59)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[58]= new Array();
 choices[58][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[58][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[58][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[58][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[58] = choices[58][2];
 units[58] = "47";
 comments[58] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[59]= "60)  Big Data:";
 choices[59]= new Array();
 choices[59][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[59][1] = "No puede emplearse para tratar datos no estructurados";
 choices[59][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][3];
 units[59] = "73";
 comments[59] = "Id Pregunta: 109. ";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[60]= "61)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[60]= new Array();
 choices[60][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[60][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[60][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[60][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[60] = choices[60][0];
 units[60] = "101";
 comments[60] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[61]= "62)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[61]= new Array();
 choices[61][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[61][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[61][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[61][3] = "ninguna es correcta";
 answers[61] = choices[61][2];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[62]= "63)  En qu&eacute; consiste el principio BASE:";
 choices[62]= new Array();
 choices[62][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[62][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[62][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[62][3] = "Todas las anteriores son falsas";
 answers[62] = choices[62][3];
 units[62] = "73";
 comments[62] = "Id Pregunta: 103. ";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[63]= new Array();
 choices[63][0] = "Versi&oacute;n digital prioritaria.";
 choices[63][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[63][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[63][3] = "Apertura y transparencia.";
 answers[63] = choices[63][0];
 units[63] = "5";
 comments[63] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[64]= "65)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[64]= new Array();
 choices[64][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[64][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[64][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[64][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[64] = choices[64][1];
 units[64] = "73";
 comments[64] = "Id Pregunta: 101. ";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[65]= "66)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[65]= new Array();
 choices[65][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[65][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[65][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[65][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[65] = choices[65][2];
 units[65] = "10";
 comments[65] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[66]= "67)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[66]= new Array();
 choices[66][0] = "la Administraci&oacute;n General del Estado";
 choices[66][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[66][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[66][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[66] = choices[66][3];
 units[66] = "7";
 comments[66] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[67]= "68)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[67]= new Array();
 choices[67][0] = "Discriminaci&oacute;n indirecta.";
 choices[67][1] = "Discriminaci&oacute;n directa.";
 choices[67][2] = "Discriminaci&oacute;n por maternidad.";
 choices[67][3] = "Discriminaci&oacute;n abusiva.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[68]= new Array();
 choices[68][0] = "De 1a  4 ";
 choices[68][1] = "De 3 a  7 ";
 choices[68][2] = "De 5 a  9";
 choices[68][3] = "De 7 a 11";
 answers[68] = choices[68][2];
 units[68] = "34, 84";
 comments[68] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[69]= "70)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[69]= new Array();
 choices[69][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[69][1] = "Personas con nacionalidad europea.";
 choices[69][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[69][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[70]= new Array();
 choices[70][0] = "Anualmente";
 choices[70][1] = "Bienalmente";
 choices[70][2] = "Cada cuatro a&ntilde;os";
 choices[70][3] = "No se define ninguna periodicidad";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[71]= "72)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[71]= new Array();
 choices[71][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[71][1] = "La CETIC";
 choices[71][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[71][3] = "El MHFP";
 answers[71] = choices[71][0];
 units[71] = "19";
 comments[71] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[72]= "73)  El Parlamento Europeo celebrar&aacute;:";
 choices[72]= new Array();
 choices[72][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[72][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[72][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[72][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[73]= "74)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[73]= new Array();
 choices[73][0] = "El Parlamento Europeo.";
 choices[73][1] = "Todas las respuestas son correctas.";
 choices[73][2] = "La Comisi&oacute;n Europea.";
 choices[73][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[74]= "75)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[74]= new Array();
 choices[74][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[74][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[74][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[74][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[74] = choices[74][1];
 units[74] = "14";
 comments[74] = "Id Pregunta: 678. Dependencia";


