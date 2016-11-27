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

//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[0]= new Array();
 choices[0][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[0][1] = "Calidad de los servicios p&uacute;blicos";
 choices[0][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[0][3] = "Servicio efectivo a los ciudadanos";
 answers[0] = choices[0][1];
 units[0] = "18, 20";
 comments[0] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[1]= "2)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[1]= new Array();
 choices[1][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[1][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[1][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[1][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[1] = choices[1][2];
 units[1] = "57";
 comments[1] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[2]= "3)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[2]= new Array();
 choices[2][0] = "Seguridad Social y AEAT";
 choices[2][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[2][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[2][3] = "Todos los anteriores";
 answers[2] = choices[2][3];
 units[2] = "19";
 comments[2] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[3]= "4)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[3]= new Array();
 choices[3][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[3][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[3][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[3][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[4]= "5)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[4]= new Array();
 choices[4][0] = "El Presidente del Consejo Europeo.";
 choices[4][1] = "La Comisi&oacute;n.";
 choices[4][2] = "El Consejo.";
 choices[4][3] = "El Parlamento Europeo.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[5]= "6)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[5]= new Array();
 choices[5][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[5][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[5][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[5][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[6][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[6][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[6][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[6] = choices[6][2];
 units[6] = "85";
 comments[6] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[7]= "8)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[7]= new Array();
 choices[7][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[7][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[7][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[7][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[7] = choices[7][2];
 units[7] = "101";
 comments[7] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[8]= new Array();
 choices[8][0] = "A los ministros.";
 choices[8][1] = "Las respuestas a) y b) son correctas.";
 choices[8][2] = "Las respuestas a) y b) no son correctas.";
 choices[8][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[8] = choices[8][1];
 units[8] = "10";
 comments[8] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[9]= new Array();
 choices[9][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[9][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[9][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[9][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[10]= "11)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[10]= new Array();
 choices[10][0] = "CO.PER.";
 choices[10][1] = "COMPER.";
 choices[10][2] = "CO.RE.PER.";
 choices[10][3] = "CO.PE.RRE.";
 answers[10] = choices[10][2];
 units[10] = "5";
 comments[10] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[11]= new Array();
 choices[11][0] = "El Ministerio de Hacienda.";
 choices[11][1] = "El Ministerio de Econom&iacute;a.";
 choices[11][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[11][3] = "Ninguna de las respuestas es correcta.";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[12]= new Array();
 choices[12][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[12][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[12][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[12][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[12] = choices[12][2];
 units[12] = "26";
 comments[12] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[13]= "14)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[13]= new Array();
 choices[13][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[13][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[13][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[13][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[13] = choices[13][0];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[14]= new Array();
 choices[14][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[14][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[14][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[14][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[14] = choices[14][0];
 units[14] = "73";
 comments[14] = "Id Pregunta: 654. ";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[15]= "16)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[15]= new Array();
 choices[15][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[15][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[15][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[15][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[16]= "17)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[16]= new Array();
 choices[16][0] = "Los Derechos y Deberes fundamentales.";
 choices[16][1] = "La Corona.";
 choices[16][2] = "El Poder Judicial.";
 choices[16][3] = "Las Cortes Generales.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[17]= "18)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[17]= new Array();
 choices[17][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[17][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[17][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[17][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[17] = choices[17][0];
 units[17] = "15";
 comments[17] = "Id Pregunta: 111. ";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[18]= "19)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[18]= new Array();
 choices[18][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[18][1] = "El Congreso de los Diputados.";
 choices[18][2] = "Las Cortes Generales.";
 choices[18][3] = "El Consejo de Ministros";
 answers[18] = choices[18][3];
 units[18] = "1";
 comments[18] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[19]= "20)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[19]= new Array();
 choices[19][0] = "por Real Decreto";
 choices[19][1] = "reglamentariamente";
 choices[19][2] = "mediante Ley";
 choices[19][3] = "ninguna es correcta";
 answers[19] = choices[19][1];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[20]= "21)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[20]= new Array();
 choices[20][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[20][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[20][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[20][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[21]= "22)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[21]= new Array();
 choices[21][0] = "El Parlamento Europeo.";
 choices[21][1] = "Todas las respuestas son correctas.";
 choices[21][2] = "La Comisi&oacute;n Europea.";
 choices[21][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[22]= "23)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[22]= new Array();
 choices[22][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[22][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[22][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[22][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[22] = choices[22][1];
 units[22] = "92";
 comments[22] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[23]= "24)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[23]= new Array();
 choices[23][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[23][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[23][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[23][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[23] = choices[23][2];
 units[23] = "50";
 comments[23] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[24]= new Array();
 choices[24][0] = "Entre 1973 y 1978";
 choices[24][1] = "Entre 1992 y 1996";
 choices[24][2] = "Entre 1978 y 1985";
 choices[24][3] = "Entre 2008 y 2013";
 answers[24] = choices[24][2];
 units[24] = "12";
 comments[24] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[25]= new Array();
 choices[25][0] = "El Consejo Europeo.";
 choices[25][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[25][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[25][3] = "El Parlamento Europeo.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[26]= new Array();
 choices[26][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[26][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[26][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[26][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[26] = choices[26][0];
 units[26] = "19";
 comments[26] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la respuesta falsa:";
 choices[27]= new Array();
 choices[27][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[27][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[27][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[27][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[27] = choices[27][2];
 units[27] = "5";
 comments[27] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[28]= new Array();
 choices[28][0] = "El Tratado de Lisboa";
 choices[28][1] = "El Tratado de Amsterdam";
 choices[28][2] = "El Tratado de Niza";
 choices[28][3] = "El Acta &Uacute;nica Europea";
 answers[28] = choices[28][1];
 units[28] = "15";
 comments[28] = "Id Pregunta: 115. ";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[29]= new Array();
 choices[29][0] = "las personas jur&iacute;dicas ";
 choices[29][1] = "las entidades con personalidad jur&iacute;dica";
 choices[29][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[29][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[29] = choices[29][1];
 units[29] = "7";
 comments[29] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[30]= new Array();
 choices[30][0] = "Cincuenta y cuatro.";
 choices[30][1] = "Cincuenta.";
 choices[30][2] = "Cincuenta y cinco.";
 choices[30][3] = "Cincuenta y dos.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[31]= "32)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[31]= new Array();
 choices[31][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[31][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[31][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[31][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[31] = choices[31][0];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[32]= "33)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[32]= new Array();
 choices[32][0] = "El Ministerio de Igualdad.";
 choices[32][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[32][2] = "Ambas son correctas.";
 choices[32][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[32] = choices[32][1];
 units[32] = "14";
 comments[32] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[33]= new Array();
 choices[33][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[33][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[33][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[33][3] = "El Instituto de la Mujer de Extremadura.";
 answers[33] = choices[33][3];
 units[33] = "14";
 comments[33] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[34]= new Array();
 choices[34][0] = "absoluta de las Cortes Generales.";
 choices[34][1] = "absoluta del Congreso de los Diputados.";
 choices[34][2] = "simple de las Cortes Generales.";
 choices[34][3] = "simple del Congreso de los Diputados.";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[35]= "36)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[35]= new Array();
 choices[35][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[35][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[35][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[35][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[35] = choices[35][3];
 units[35] = "47";
 comments[35] = "Id Pregunta: 675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[36]= "37)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[36]= new Array();
 choices[36][0] = "Programaci&oacute;n estructurada.";
 choices[36][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[36][2] = "Programaci&oacute;n extrema.";
 choices[36][3] = "Programaci&oacute;n Espuria.";
 answers[36] = choices[36][2];
 units[36] = "92";
 comments[36] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[37]= "38)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[37]= new Array();
 choices[37][0] = "Relaciones base y vistas.";
 choices[37][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[37][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[37][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[37] = choices[37][3];
 units[37] = "60";
 comments[37] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[38]= new Array();
 choices[38][0] = "El rey, a propuesta del Gobierno.";
 choices[38][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[38][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[38][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[39]= "40)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[39]= new Array();
 choices[39][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[39][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[39][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[39][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[39] = choices[39][2];
 units[39] = "7";
 comments[39] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[40]= "41)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[40]= new Array();
 choices[40][0] = "El acoso sexual.";
 choices[40][1] = "El acoso por raz&oacute;n del sexo.";
 choices[40][2] = "Ambas son correctas.";
 choices[40][3] = "A y B son incorrectas.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[41]= "42)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[41]= new Array();
 choices[41][0] = "Acciones de discriminaci&oacute;n.";
 choices[41][1] = "Acciones positivas.";
 choices[41][2] = "Acciones negativas.";
 choices[41][3] = "Acciones neutras.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[42]= new Array();
 choices[42][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[42][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[42][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[42][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[42] = choices[42][3];
 units[42] = "77";
 comments[42] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "VMware ESX";
 choices[43][1] = "XenServer";
 choices[43][2] = "Alfresco";
 choices[43][3] = "Microsoft Hyper-V";
 answers[43] = choices[43][2];
 units[43] = "54";
 comments[43] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[44]= "45)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[44]= new Array();
 choices[44][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[44][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[44][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[44][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[44] = choices[44][0];
 units[44] = "7";
 comments[44] = "Id Pregunta: 671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[45]= "46)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[45]= new Array();
 choices[45][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[45][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[45][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[45][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[46]= "47)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[46]= new Array();
 choices[46][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[46][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[46][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[46][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[46] = choices[46][0];
 units[46] = "92";
 comments[46] = "Id Pregunta: 694. INTEGRACION CONTINUA";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[47]= "48)  La soberan&iacute;a nacional reside en:";
 choices[47]= new Array();
 choices[47][0] = "el Parlamento nacional.";
 choices[47][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[47][2] = "el pueblo espa&ntilde;ol.";
 choices[47][3] = "el Congreso y el Senado.";
 answers[47] = choices[47][3];
 units[47] = "1";
 comments[47] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[48]= new Array();
 choices[48][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[48][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[48][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[48][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[48] = choices[48][1];
 units[48] = "44";
 comments[48] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[49][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[49][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[49][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[49] = choices[49][3];
 units[49] = "19";
 comments[49] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[50]= new Array();
 choices[50][0] = "Flexibilidad para variar el servicio o producto";
 choices[50][1] = "Eliminar desperdicios";
 choices[50][2] = "Decidir lo m&aacute;s tarde posible";
 choices[50][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[50] = choices[50][0];
 units[50] = "34";
 comments[50] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta correcta:";
 choices[51]= new Array();
 choices[51][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[51][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[51][2] = "A y B son correctas.";
 choices[51][3] = "A y B son falsas.";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[52]= "53)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[52]= new Array();
 choices[52][0] = "61";
 choices[52][1] = "53";
 choices[52][2] = "65";
 choices[52][3] = "67";
 answers[52] = choices[52][1];
 units[52] = "1";
 comments[52] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[53]= "54)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[53]= new Array();
 choices[53][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[53][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[53][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[53][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[53] = choices[53][2];
 units[53] = "7";
 comments[53] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[54]= "55)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[54]= new Array();
 choices[54][0] = "La Comisi&oacute;n Europea.";
 choices[54][1] = "El Consejo Europeo.";
 choices[54][2] = "El Consejo de Europa.";
 choices[54][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[55]= "56)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[55][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[55][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[55][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[55] = choices[55][2];
 units[55] = "83";
 comments[55] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[56]= "57)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[56]= new Array();
 choices[56][0] = "Transferencias de cr&eacute;dito.";
 choices[56][1] = "Incorporaciones de cr&eacute;dito.";
 choices[56][2] = "Imputaciones de cr&eacute;dito.";
 choices[56][3] = "Ampliaciones de cr&eacute;dito.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[57]= new Array();
 choices[57][0] = "150 trabajadores/as.";
 choices[57][1] = "200 trabajadores/as.";
 choices[57][2] = "250 trabajadores/as.";
 choices[57][3] = "300 trabajadores/as.";
 answers[57] = choices[57][2];
 units[57] = "14";
 comments[57] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[58]= new Array();
 choices[58][0] = "Art&iacute;culo 9.1 CE.";
 choices[58][1] = "Art&iacute;culo 53 CE.";
 choices[58][2] = "Art&iacute;culo 14 CE.";
 choices[58][3] = "Art&iacute;culo 16 CE.";
 answers[58] = choices[58][2];
 units[58] = "14";
 comments[58] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[59]= new Array();
 choices[59][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[59][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[59][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[59][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[60]= "61)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[60]= new Array();
 choices[60][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[60][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[60][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[60][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 345. UNION EUROPEA";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[61]= new Array();
 choices[61][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[61][1] = "La delimitaci&oacute;n de su territorio.";
 choices[61][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[61][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[62]= "63)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[62]= new Array();
 choices[62][0] = "Gran volumen de informaci&oacute;n";
 choices[62][1] = "Gran variedad de datos";
 choices[62][2] = "Se analizan datos a gran velocidad";
 choices[62][3] = "Todas las anteriores son verdaderas";
 answers[62] = choices[62][3];
 units[62] = "73";
 comments[62] = "Id Pregunta: 105. ";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[63]= "64)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[63]= new Array();
 choices[63][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[63][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[63][2] = "Al Congreso de los Diputados.";
 choices[63][3] = "Al Gobierno.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[64]= new Array();
 choices[64][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[64][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[64][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[64][3] = "Todos los anteriores";
 answers[64] = choices[64][3];
 units[64] = "19";
 comments[64] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[65]= "66)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[65]= new Array();
 choices[65][0] = "Pas&oacute; de 518 a 626.";
 choices[65][1] = "Pas&oacute; de 434 a 518.";
 choices[65][2] = "Pas&oacute; de 345 a 512.";
 choices[65][3] = "Pas&oacute; de 435 a 610.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[66]= "67)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[66]= new Array();
 choices[66][0] = "GROUP BY.";
 choices[66][1] = "COUNT.";
 choices[66][2] = "WHERE.";
 choices[66][3] = "DISTINCT.";
 answers[66] = choices[66][0];
 units[66] = "60";
 comments[66] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[67]= "68)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Un informe de impacto de g&eacute;nero.";
 choices[67][1] = "Un programa de igualdad de oportunidades.";
 choices[67][2] = "Un plan de Igualdad de Oportunidades.";
 choices[67][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[67] = choices[67][0];
 units[67] = "14";
 comments[67] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[68]= new Array();
 choices[68][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[68][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[68][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[68][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "De la C&aacute;mara respectiva.";
 choices[69][1] = "Del Rey.";
 choices[69][2] = "Del Tribunal Constitucional.";
 choices[69][3] = "Del Tribunal Supremo.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[70]= new Array();
 choices[70][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[70][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[70][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[70][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[70] = choices[70][1];
 units[70] = "84";
 comments[70] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[71]= new Array();
 choices[71][0] = "En t&iacute;tulos-valores.";
 choices[71][1] = "Las respuestas a) y b) son correctas.";
 choices[71][2] = "Las respuestas a) y b) no son correctas.";
 choices[71][3] = "En cuenta.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[72]= new Array();
 choices[72][0] = "Veinticinco.";
 choices[72][1] = "Veintisiete.";
 choices[72][2] = "Veintinueve.";
 choices[72][3] = "Cuarenta y uno.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[73]= "74)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[73]= new Array();
 choices[73][0] = "Almacenamiento orientado a columnas";
 choices[73][1] = "Framework MapReduce";
 choices[73][2] = "OLTP";
 choices[73][3] = "Bases de datos clave-valor";
 answers[73] = choices[73][2];
 units[73] = "73";
 comments[73] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[74]= new Array();
 choices[74][0] = "Indirecta.";
 choices[74][1] = "Directa.";
 choices[74][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[74][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[74] = choices[74][1];
 units[74] = "14";
 comments[74] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


