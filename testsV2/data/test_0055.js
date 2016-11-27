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

//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[0]= "1)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[0]= new Array();
 choices[0][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[0][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[0][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[0][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[1]= "2)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[1]= new Array();
 choices[1][0] = "por Real Decreto";
 choices[1][1] = "reglamentariamente";
 choices[1][2] = "mediante Ley";
 choices[1][3] = "ninguna es correcta";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[2]= new Array();
 choices[2][0] = "No, en ning&uacute;n caso.";
 choices[2][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[2][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[2][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[2] = choices[2][3];
 units[2] = "1";
 comments[2] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[3]= "4)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[3]= new Array();
 choices[3][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[3][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[3][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[3][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[3] = choices[3][2];
 units[3] = "7";
 comments[3] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[4]= new Array();
 choices[4][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[4][1] = "Calidad de los servicios p&uacute;blicos";
 choices[4][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[4][3] = "Servicio efectivo a los ciudadanos";
 answers[4] = choices[4][1];
 units[4] = "18, 20";
 comments[4] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; es Java Web Start?";
 choices[5]= new Array();
 choices[5][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[5][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[5][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[5][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[5] = choices[5][3];
 units[5] = "64";
 comments[5] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[6]= "7)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[6]= new Array();
 choices[6][0] = "Seguridad Social y AEAT";
 choices[6][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[6][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[6][3] = "Todos los anteriores";
 answers[6] = choices[6][3];
 units[6] = "19";
 comments[6] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[7]= "8)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[7]= new Array();
 choices[7][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[7][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[7][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[7][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[7] = choices[7][2];
 units[7] = "73";
 comments[7] = "Id Pregunta: 652. ";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[8]= "9)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[8]= new Array();
 choices[8][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[8][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[8][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[8][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[8] = choices[8][2];
 units[8] = "76";
 comments[8] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


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


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[10]= new Array();
 choices[10][0] = "Los principios rectores";
 choices[10][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[10][2] = "Los hitos para su desarrollo gradual";
 choices[10][3] = "Todos los anteriores";
 answers[10] = choices[10][3];
 units[10] = "19";
 comments[10] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[11]= "12)  Los Subdirectores generales:";
 choices[11]= new Array();
 choices[11][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[11][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[11][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[11][3] = "todas son correctas";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[12]= "13)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[12]= new Array();
 choices[12][0] = "los Ministros y los Secretarios de Estado";
 choices[12][1] = "los Subsecretarios y Secretarios generales";
 choices[12][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[12][3] = "los Directores generales";
 answers[12] = choices[12][2];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 791. Ley 40/2015";


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


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[14]= "15)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[14]= new Array();
 choices[14][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[14][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[14][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[14][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[14] = choices[14][2];
 units[14] = "19";
 comments[14] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[15]= new Array();
 choices[15][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[15][1] = "Solamente el Congreso.";
 choices[15][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[15][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[16]= "17)  La recusaci&oacute;n se plantea...";
 choices[16]= new Array();
 choices[16][0] = "Antes de iniciado el procedimiento";
 choices[16][1] = "Una vez iniciado el procedimiento";
 choices[16][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[16][3] = "En cualquier momento del procedimiento";
 answers[16] = choices[16][0];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[17]= "18)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[17]= new Array();
 choices[17][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[17][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[17][2] = "Cinco a&ntilde;os.";
 choices[17][3] = "Ninguna es correcta.";
 answers[17] = choices[17][2];
 units[17] = "5";
 comments[17] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[18]= new Array();
 choices[18][0] = "Bienalmente";
 choices[18][1] = "Anualmente";
 choices[18][2] = "Semestralmente";
 choices[18][3] = "Cada cuatro a&ntilde;os";
 answers[18] = choices[18][1];
 units[18] = "19";
 comments[18] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[19]= new Array();
 choices[19][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[19][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[19][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[19][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[19] = choices[19][2];
 units[19] = "22";
 comments[19] = "Id Pregunta: 129. ";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[20]= "21)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[20]= new Array();
 choices[20][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[20][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[20][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[20][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[20] = choices[20][0];
 units[20] = "14";
 comments[20] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[21]= "22)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[21]= new Array();
 choices[21][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[21][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[21][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[21][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[22]= "23)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[22]= new Array();
 choices[22][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[22][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[22][2] = "Se basan en sistemas distribuidos";
 choices[22][3] = "Se basan en el modelo de datos relacional";
 answers[22] = choices[22][2];
 units[22] = "73";
 comments[22] = "Id Pregunta: 102. ";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[23]= "24)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[23]= new Array();
 choices[23][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[23][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[23][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[23][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique la afirmaci&oacute;n falsa:";
 choices[24]= new Array();
 choices[24][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[24][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[24][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[24][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[24] = choices[24][1];
 units[24] = "22";
 comments[24] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[25]= new Array();
 choices[25][0] = "Principio de solo una vez";
 choices[25][1] = "Apertura y transparencia";
 choices[25][2] = "Confianza y seguridad";
 choices[25][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[25] = choices[25][3];
 units[25] = "19";
 comments[25] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[26]= new Array();
 choices[26][0] = "Selenium";
 choices[26][1] = "JUnit";
 choices[26][2] = "Jenkins";
 choices[26][3] = "JMeter";
 answers[26] = choices[26][2];
 units[26] = "92";
 comments[26] = "Id Pregunta: 701. INTEGRACION CONTINUA";


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


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[28]= new Array();
 choices[28][0] = "No se aplican directamente en los Estados.";
 choices[28][1] = "No son vinculantes.";
 choices[28][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[28][3] = "Tienen alcance general.";
 answers[28] = choices[28][0];
 units[28] = "5";
 comments[28] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[29][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[29][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[29][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 679. Pensiones";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[30]= "31)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[30]= new Array();
 choices[30][0] = "la Administraci&oacute;n General del Estado";
 choices[30][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[30][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[30][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[31]= "32)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[31]= new Array();
 choices[31][0] = "Los cr&eacute;ditos";
 choices[31][1] = "Las partidas presupuestarias";
 choices[31][2] = "Los derechos";
 choices[31][3] = "Las obligaciones";
 answers[31] = choices[31][2];
 units[31] = "10";
 comments[31] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[32]= new Array();
 choices[32][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[32][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[32][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[32][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[32] = choices[32][1];
 units[32] = "28";
 comments[32] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[33]= new Array();
 choices[33][0] = "Perceptible";
 choices[33][1] = "Operable";
 choices[33][2] = "Comprensible";
 choices[33][3] = "Robusto";
 answers[33] = choices[33][2];
 units[33] = "42";
 comments[33] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[34]= "35)  El lenguaje SPARK es un subconjunto de:";
 choices[34]= new Array();
 choices[34][0] = "Java";
 choices[34][1] = "Fortran";
 choices[34][2] = "Ruby";
 choices[34][3] = "Ada";
 answers[34] = choices[34][3];
 units[34] = "73";
 comments[34] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[35]= "36)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[35]= new Array();
 choices[35][0] = "ISO/IEC 25000";
 choices[35][1] = "ISO/IEC 27000";
 choices[35][2] = "ISO 9000";
 choices[35][3] = "ISO 9001";
 answers[35] = choices[35][0];
 units[35] = "93";
 comments[35] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[36]= new Array();
 choices[36][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[36][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[36][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[36][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[36] = choices[36][2];
 units[36] = "53";
 comments[36] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[37]= new Array();
 choices[37][0] = "En 2011";
 choices[37][1] = "En 2013";
 choices[37][2] = "En 2015";
 choices[37][3] = "En 2016";
 answers[37] = choices[37][2];
 units[37] = "17";
 comments[37] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[38]= "39)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[38]= new Array();
 choices[38][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[38][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[38][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[38][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[38] = choices[38][3];
 units[38] = "47";
 comments[38] = "Id Pregunta: 675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[39]= new Array();
 choices[39][0] = "23";
 choices[39][1] = "20";
 choices[39][2] = "14";
 choices[39][3] = "18";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[40]= new Array();
 choices[40][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[40][1] = "El responsable de la custodia de los datos enviados.";
 choices[40][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[40][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[40] = choices[40][3];
 units[40] = "35";
 comments[40] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[41]= "42)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[41]= new Array();
 choices[41][0] = "Fat y Ntfs.";
 choices[41][1] = "Extfat y Fat.";
 choices[41][2] = "Fat y Nfst.";
 choices[41][3] = "ext2fs y Ntfs.";
 answers[41] = choices[41][0];
 units[41] = "58";
 comments[41] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[42]= new Array();
 choices[42][0] = "En 2015";
 choices[42][1] = "En 2013";
 choices[42][2] = "En 2016";
 choices[42][3] = "En 2007";
 answers[42] = choices[42][1];
 units[42] = "19";
 comments[42] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[43]= "44)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[43]= new Array();
 choices[43][0] = "Pas&oacute; de 518 a 626.";
 choices[43][1] = "Pas&oacute; de 434 a 518.";
 choices[43][2] = "Pas&oacute; de 345 a 512.";
 choices[43][3] = "Pas&oacute; de 435 a 610.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[44]= "45)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[44]= new Array();
 choices[44][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[44][1] = "Ninguna de las respuestas es correcta.";
 choices[44][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[44][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la respuesta correcta:";
 choices[45]= new Array();
 choices[45][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[45][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[45][2] = "Las respuestas A y B son correctas.";
 choices[45][3] = "Las respuestas A y B son falsas.";
 answers[45] = choices[45][2];
 units[45] = "5";
 comments[45] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[46]= new Array();
 choices[46][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[46][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[46][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[46][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[46] = choices[46][0];
 units[46] = "45";
 comments[46] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[47]= "48)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[47]= new Array();
 choices[47][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[47][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[47][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[47][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[48]= new Array();
 choices[48][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[48][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[48][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[48][3] = "todas son correctas";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[49]= "50)  El recurso de alzada puede interponerse:";
 choices[49]= new Array();
 choices[49][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[49][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[49][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[49][3] = "Ante el Defensor del Pueblo";
 answers[49] = choices[49][1];
 units[49] = "8";
 comments[49] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[50]= "51)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[50]= new Array();
 choices[50][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[50][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[50][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[50][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[51]= "52)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[51]= new Array();
 choices[51][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[51][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[51][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[51][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[51] = choices[51][3];
 units[51] = "5";
 comments[51] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[52]= "53)  Los Secretarios generales t&eacute;cnicos:";
 choices[52]= new Array();
 choices[52][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[52][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[52][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[53]= new Array();
 choices[53][0] = "De los derechos y deberes fundamentales.";
 choices[53][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[53][2] = "Derechos y libertades.";
 choices[53][3] = "De la Corona.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[54]= "55)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[54]= new Array();
 choices[54][0] = "El derecho a un permiso.";
 choices[54][1] = "Una prestaci&oacute;n por paternidad.";
 choices[54][2] = "Ambas son correctas.";
 choices[54][3] = "18 d&iacute;as de permiso.";
 answers[54] = choices[54][2];
 units[54] = "14";
 comments[54] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[55]= "56)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[55]= new Array();
 choices[55][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[55][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[55][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[55][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[55] = choices[55][3];
 units[55] = "5";
 comments[55] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[56]= "57)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[56]= new Array();
 choices[56][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[56][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[56][2] = "A y B son correctas.";
 choices[56][3] = "A y B son incorrectas.";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[57]= "58)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[57][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[57][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[57][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[57] = choices[57][1];
 units[57] = "7";
 comments[57] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[58]= new Array();
 choices[58][0] = "Versi&oacute;n digital prioritaria.";
 choices[58][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[58][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[58][3] = "Apertura y transparencia.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[59]= "60)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[59]= new Array();
 choices[59][0] = "Gesti&oacute;n de la disponibilidad";
 choices[59][1] = "Gesti&oacute;n de la demanda";
 choices[59][2] = "Gesti&oacute;n de entregas";
 choices[59][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[59] = choices[59][0];
 units[59] = "101";
 comments[59] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[60]= "61)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[60]= new Array();
 choices[60][0] = "Entradas (entities).";
 choices[60][1] = "Atributos (attribs).";
 choices[60][2] = "M&oacute;dulos (modules).";
 choices[60][3] = "Objetos (objects).";
 answers[60] = choices[60][0];
 units[60] = "74";
 comments[60] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[61]= new Array();
 choices[61][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[61][1] = "Todas las respuestas son correctas.";
 choices[61][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[61][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[61] = choices[61][1];
 units[61] = "10";
 comments[61] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[62]= new Array();
 choices[62][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[62][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[62][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[62][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[62] = choices[62][3];
 units[62] = "10";
 comments[62] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[63]= "64)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[63]= new Array();
 choices[63][0] = "Cuatro millones de euros.";
 choices[63][1] = "Seis millones de euros.";
 choices[63][2] = "Siete millones de euros.";
 choices[63][3] = "Cinco millones de euros.";
 answers[63] = choices[63][1];
 units[63] = "10";
 comments[63] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[64]= new Array();
 choices[64][0] = "Veinticinco.";
 choices[64][1] = "Veintiuno.";
 choices[64][2] = "Dieciocho.";
 choices[64][3] = "Diecinueve.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[65]= "66)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[65]= new Array();
 choices[65][0] = "La Comisi&oacute;n.";
 choices[65][1] = "El Consejo de Europa.";
 choices[65][2] = "El Consejo Europeo.";
 choices[65][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[65] = choices[65][3];
 units[65] = "5";
 comments[65] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[66]= "67)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Almacenamiento orientado a columnas";
 choices[66][1] = "Framework MapReduce";
 choices[66][2] = "OLTP";
 choices[66][3] = "Bases de datos clave-valor";
 answers[66] = choices[66][2];
 units[66] = "73";
 comments[66] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[67]= "68)  El plan nacional de ciudades inteligentes...";
 choices[67]= new Array();
 choices[67][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[67][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[67][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[67][3] = "No existe";
 answers[67] = choices[67][1];
 units[67] = "19";
 comments[67] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[68]= "69)  La recusaci&oacute;n pueden promoverla...";
 choices[68]= new Array();
 choices[68][0] = "Cualquier &oacute;rgano";
 choices[68][1] = "El interesado";
 choices[68][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[68][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[69]= "70)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[69]= new Array();
 choices[69][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[69][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[69][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[69][3] = "Todas son correctas.";
 answers[69] = choices[69][3];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[70]= new Array();
 choices[70][0] = "Al menos cada 12 meses";
 choices[70][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[70][2] = "Al menos cada 18 meses";
 choices[70][3] = "Al menos cada 24 meses";
 answers[70] = choices[70][3];
 units[70] = "77";
 comments[70] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[71]= new Array();
 choices[71][0] = "El Ministro de Econom&iacute;a.";
 choices[71][1] = "El Gobierno.";
 choices[71][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[71][3] = "El Presidente del Gobierno.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[72]= new Array();
 choices[72][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[72][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[72][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[72][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[72] = choices[72][2];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[73]= "74)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[73]= new Array();
 choices[73][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[73][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[73][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][3];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[74]= new Array();
 choices[74][0] = "Por Real Decreto.";
 choices[74][1] = "Por Orden del Ministerio del Interior.";
 choices[74][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[74][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 230. CONSTITUCION1978";


