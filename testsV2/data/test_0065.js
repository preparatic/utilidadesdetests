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

//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[0]= new Array();
 choices[0][0] = "En t&iacute;tulos-valores.";
 choices[0][1] = "Las respuestas a) y b) son correctas.";
 choices[0][2] = "Las respuestas a) y b) no son correctas.";
 choices[0][3] = "En cuenta.";
 answers[0] = choices[0][1];
 units[0] = "10";
 comments[0] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[0] = 500


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[1]= "2)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[1][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[1][2] = "Ambas son correctas.";
 choices[1][3] = "Ambas son incorrectas.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";
 preguntaids[1] = 429


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[2]= new Array();
 choices[2][0] = "Perceptible";
 choices[2][1] = "Operable";
 choices[2][2] = "Comprensible";
 choices[2][3] = "Robusto";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[2] = 83


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[3]= new Array();
 choices[3][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[3][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[3][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[3][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[3] = choices[3][3];
 units[3] = "56";
 comments[3] = "Id Pregunta: 635. Junta de Extremadura A1 2015";
 preguntaids[3] = 635


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[4]= "5)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[4]= new Array();
 choices[4][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[4][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[4][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[4][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[4] = 316


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[5]= "6)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[5]= new Array();
 choices[5][0] = "Monol&iacute;tico.";
 choices[5][1] = "Estratificado.";
 choices[5][2] = "Cliente/servidor.";
 choices[5][3] = "Orientado a objetos.";
 answers[5] = choices[5][3];
 units[5] = "56";
 comments[5] = "Id Pregunta: 634. Junta de Extremadura A1 2015";
 preguntaids[5] = 634


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[6]= "7)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[6]= new Array();
 choices[6][0] = "A la persona demandante.";
 choices[6][1] = "A la persona demandada.";
 choices[6][2] = "Al &oacute;rgano judicial.";
 choices[6][3] = "Al &oacute;rgano administrativo.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[6] = 400


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[7]= new Array();
 choices[7][0] = "Al Gobierno de la naci&oacute;n";
 choices[7][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[7][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[7][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";
 preguntaids[7] = 147


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[8]= "9)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[8]= new Array();
 choices[8][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[8][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[8][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[8][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[8] = choices[8][2];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[8] = 764


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[9]= "10)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[9]= new Array();
 choices[9][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[9][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[9][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[9][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[9] = choices[9][2];
 units[9] = "101";
 comments[9] = "Id Pregunta: 60. AGE A1 2015";
 preguntaids[9] = 60


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[10]= "11)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[10]= new Array();
 choices[10][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[10][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[10][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[10][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";
 preguntaids[10] = 408


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[11]= "12)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[11]= new Array();
 choices[11][0] = "El Ministerio de Igualdad.";
 choices[11][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[11][2] = "Ambas son correctas.";
 choices[11][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[11] = choices[11][1];
 units[11] = "14";
 comments[11] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";
 preguntaids[11] = 422


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[12]= "13)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[12]= new Array();
 choices[12][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[12][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[12][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[12][3] = "Todas las respuestas anteriores son correctas.";
 answers[12] = choices[12][0];
 units[12] = "45";
 comments[12] = "Id Pregunta: 600. Junta de Extremadura A1 2015";
 preguntaids[12] = 600


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[13]= "14)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[13]= new Array();
 choices[13][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[13][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[13][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[13][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[13] = choices[13][1];
 units[13] = "7";
 comments[13] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[13] = 541


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[14]= new Array();
 choices[14][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[14][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[14][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[14][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[14] = choices[14][1];
 units[14] = "43";
 comments[14] = "Id Pregunta: 441. SERVICIOS COMUNES";
 preguntaids[14] = 441


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[15]= "16)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[15]= new Array();
 choices[15][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[15][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[15][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[15][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[15] = choices[15][2];
 units[15] = "57";
 comments[15] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[15] = 638


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[16]= new Array();
 choices[16][0] = "En 1988.";
 choices[16][1] = "En 1981.";
 choices[16][2] = "En 1982.";
 choices[16][3] = "En 1986.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[16] = 371


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[17][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[17][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[17][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[17] = choices[17][1];
 units[17] = "19";
 comments[17] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";
 preguntaids[17] = 757


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[18]= new Array();
 choices[18][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[18][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[18][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[18][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[18] = 199


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[19]= "20)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[19]= new Array();
 choices[19][0] = "B&aacute;sico";
 choices[19][1] = "Medio";
 choices[19][2] = "Alto";
 choices[19][3] = "A los niveles medio y alto";
 answers[19] = choices[19][2];
 units[19] = "35";
 comments[19] = "Id Pregunta: 62. AGE A1 2015";
 preguntaids[19] = 62


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[20]= "21)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[20]= new Array();
 choices[20][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[20][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[20][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[20][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 184. CONSTITUCION1978";
 preguntaids[20] = 184


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; es SonarQube?";
 choices[21]= new Array();
 choices[21][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[21][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[21][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[21][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[21] = choices[21][2];
 units[21] = "92";
 comments[21] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[21] = 700


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[22]= "23)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[22]= new Array();
 choices[22][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[22][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[22][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[22][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[22] = choices[22][2];
 units[22] = "7";
 comments[22] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[22] = 529


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[23]= new Array();
 choices[23][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[23][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[23][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[23][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[23] = choices[23][1];
 units[23] = "92";
 comments[23] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[23] = 698


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la respuesta falsa:";
 choices[24]= new Array();
 choices[24][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[24][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[24][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[24][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[24] = 847


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[25]= "26)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[25]= new Array();
 choices[25][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[25][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[25][2] = "La normativa reguladora de cada derecho.";
 choices[25][3] = "Ley 50/1997, del Gobierno.";
 answers[25] = choices[25][2];
 units[25] = "10";
 comments[25] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";
 preguntaids[25] = 462


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[26]= "27)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[26]= new Array();
 choices[26][0] = "El Parlamento Europeo.";
 choices[26][1] = "Todas las respuestas son correctas.";
 choices[26][2] = "La Comisi&oacute;n Europea.";
 choices[26][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[26] = 353


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[27]= "28)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[27]= new Array();
 choices[27][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[27][1] = "Ninguna de las respuestas es correcta.";
 choices[27][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[27][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 334. UNION EUROPEA";
 preguntaids[27] = 334


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[28]= "29)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[28]= new Array();
 choices[28][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[28][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[28][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[28][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[28] = choices[28][0];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[28] = 779


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[29]= "30)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[29]= new Array();
 choices[29][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[29][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[29][2] = "El Presidente del Gobierno";
 choices[29][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[29] = choices[29][1];
 units[29] = "26";
 comments[29] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[29] = 551


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[30]= new Array();
 choices[30][0] = "La Comisi&oacute;n Permanente.";
 choices[30][1] = "El Presidente.";
 choices[30][2] = "El Pleno.";
 choices[30][3] = "El Vicepresidente.";
 answers[30] = choices[30][3];
 units[30] = "1";
 comments[30] = "Id Pregunta: 261. CONSTITUCION1978";
 preguntaids[30] = 261


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[31]= new Array();
 choices[31][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[31][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[31][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[31][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[31] = choices[31][3];
 units[31] = "106";
 comments[31] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[31] = 74


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[32]= "33)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[32]= new Array();
 choices[32][0] = "los registros mercantiles";
 choices[32][1] = "los registros de la propiedad";
 choices[32][2] = "los protocolos notariales";
 choices[32][3] = "todas son correctas";
 answers[32] = choices[32][3];
 units[32] = "7";
 comments[32] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[32] = 540


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[33]= "34)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[33]= new Array();
 choices[33][0] = "Interoperabilidad";
 choices[33][1] = "Integridad";
 choices[33][2] = "Capital humano";
 choices[33][3] = "Trazabilidad";
 answers[33] = choices[33][2];
 units[33] = "19";
 comments[33] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[33] = 166


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[34]= "35)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[34]= new Array();
 choices[34][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[34][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[34][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[34][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[34] = choices[34][2];
 units[34] = "12";
 comments[34] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";
 preguntaids[34] = 134


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[35]= "36)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[35]= new Array();
 choices[35][0] = "623";
 choices[35][1] = "649";
 choices[35][2] = "626";
 choices[35][3] = "565";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 341. UNION EUROPEA";
 preguntaids[35] = 341


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[36]= new Array();
 choices[36][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[36][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[36][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[36][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[36] = choices[36][3];
 units[36] = "120";
 comments[36] = "Id Pregunta: 653. Junta de Extremadura A1 2015";
 preguntaids[36] = 653


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[37]= new Array();
 choices[37][0] = "Avro";
 choices[37][1] = "Sqoop";
 choices[37][2] = "UIMA";
 choices[37][3] = "Jaql";
 answers[37] = choices[37][1];
 units[37] = "73";
 comments[37] = "Id Pregunta: 662. ";
 preguntaids[37] = 662


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[38]= new Array();
 choices[38][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[38][1] = "Pasivos financieros y transferencias de capital.";
 choices[38][2] = "Activos financieros y pasivos financieros.";
 choices[38][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[38] = 461


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[39]= "40)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[39]= new Array();
 choices[39][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[39][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[39][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[39][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[39] = choices[39][2];
 units[39] = "43";
 comments[39] = "Id Pregunta: 435. SERVICIOS COMUNES";
 preguntaids[39] = 435


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[40]= "41)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[40]= new Array();
 choices[40][0] = "X.";
 choices[40][1] = "XIX.";
 choices[40][2] = "XV.";
 choices[40][3] = "XIII.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 327. UNION EUROPEA";
 preguntaids[40] = 327


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[41]= "42)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[41]= new Array();
 choices[41][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[41][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[41][2] = "a y b son correctas";
 choices[41][3] = "a y b son incorrectas";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[41] = 783


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[42]= "43)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[42]= new Array();
 choices[42][0] = "Los propios miembros del Tribunal.";
 choices[42][1] = "El Consejo de Europa.";
 choices[42][2] = "El Consejo Europeo.";
 choices[42][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[42] = 301


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[43]= new Array();
 choices[43][0] = "Memcached";
 choices[43][1] = "OpCache";
 choices[43][2] = "WinCache Extension for PHP";
 choices[43][3] = "Alternative PHP Cache";
 answers[43] = choices[43][0];
 units[43] = "65";
 comments[43] = "Id Pregunta: 34. AGE A1 2015";
 preguntaids[43] = 34


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[44]= new Array();
 choices[44][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[44][1] = "El responsable de la custodia de los datos enviados.";
 choices[44][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[44][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[44] = choices[44][3];
 units[44] = "35";
 comments[44] = "Id Pregunta: 631. Junta de Extremadura A1 2015";
 preguntaids[44] = 631


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[45]= new Array();
 choices[45][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[45][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[45][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[45][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[45] = 239


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[46]= new Array();
 choices[46][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[46][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[46][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[46][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[46] = choices[46][0];
 units[46] = "26";
 comments[46] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[46] = 0


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[47]= "48)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[47]= new Array();
 choices[47][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[47][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[47][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[47][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[47] = choices[47][3];
 units[47] = "77";
 comments[47] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[47] = 48


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[48]= "49)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[48]= new Array();
 choices[48][0] = "en cada Comunidad Aut&oacute;noma";
 choices[48][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[48][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[48][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[48] = 815


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[49]= "50)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[49]= new Array();
 choices[49][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[49][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[49][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[49][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[49] = 526


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[50]= new Array();
 choices[50][0] = "Data Mining (miner&iacute;a de datos)";
 choices[50][1] = "Business Intelligence (inteligencia de negocio)";
 choices[50][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[50][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[50] = choices[50][1];
 units[50] = "72";
 comments[50] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[50] = 68


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[51]= "52)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[51]= new Array();
 choices[51][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[51][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[51][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[51][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[51] = 226


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[52]= "53)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[52]= new Array();
 choices[52][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[52][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[52][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[52][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[52] = choices[52][0];
 units[52] = "12";
 comments[52] = "Id Pregunta: 568. Modelo econ&oacute;mico";
 preguntaids[52] = 568


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[53]= "54)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[53]= new Array();
 choices[53][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[53][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[53][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[53][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 679. Dependencia";
 preguntaids[53] = 679


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[54]= "55)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[54]= new Array();
 choices[54][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[54][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[54][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[54][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 339. UNION EUROPEA";
 preguntaids[54] = 339


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[55]= "56)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[55]= new Array();
 choices[55][0] = "Fat y Ntfs.";
 choices[55][1] = "Extfat y Fat.";
 choices[55][2] = "Fat y Nfst.";
 choices[55][3] = "ext2fs y Ntfs.";
 answers[55] = choices[55][0];
 units[55] = "58";
 comments[55] = "Id Pregunta: 642. Junta de Extremadura A1 2015";
 preguntaids[55] = 642


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[56]= "57)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[56]= new Array();
 choices[56][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[56][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[56][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[56][3] = "A las Diputaciones y a las Comarcas.";
 answers[56] = choices[56][3];
 units[56] = "1";
 comments[56] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[56] = 229


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[57]= "58)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[57]= new Array();
 choices[57][0] = "Interchange of Data between Administrations (IDA)";
 choices[57][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[57][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[57][3] = "Interoperability Electronic European Solution (IEES)";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 84. AGE A1 2015";
 preguntaids[57] = 84


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[58]= "59)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[58]= new Array();
 choices[58][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[58][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[58][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[58][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[58] = choices[58][0];
 units[58] = "15";
 comments[58] = "Id Pregunta: 111. ";
 preguntaids[58] = 111


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Lollipop";
 choices[59][1] = "Jelly Bean";
 choices[59][2] = "Marshmallow";
 choices[59][3] = "KitKat";
 answers[59] = choices[59][2];
 units[59] = "59";
 comments[59] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[59] = 61


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[60]= "61)  El sector Servicios NO incluye:";
 choices[60]= new Array();
 choices[60][0] = "El Comercio";
 choices[60][1] = "Los Transportes";
 choices[60][2] = "La Energ&iacute;a";
 choices[60][3] = "Las Comunicaciones";
 answers[60] = choices[60][2];
 units[60] = "12";
 comments[60] = "Id Pregunta: 571. Modelo econ&oacute;mico";
 preguntaids[60] = 571


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[61]= new Array();
 choices[61][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[61][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[61][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[61][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[61] = choices[61][2];
 units[61] = "17";
 comments[61] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";
 preguntaids[61] = 558


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[62]= "63)  Los Reglamentos no se caracterizan por:";
 choices[62]= new Array();
 choices[62][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[62][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[62][2] = "Ser obligatorios.";
 choices[62][3] = "No poseer alcance general.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 359. UNION EUROPEA";
 preguntaids[62] = 359


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[63]= "64)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[63]= new Array();
 choices[63][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[63][1] = "Tratarse de un acto no susceptible de recurso";
 choices[63][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[63][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[63] = choices[63][2];
 units[63] = "8";
 comments[63] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";
 preguntaids[63] = 140


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[64]= "65)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[64]= new Array();
 choices[64][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[64][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[64][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[64][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[64] = 809


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[65]= new Array();
 choices[65][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[65][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[65][2] = "A) y B) son verdaderas";
 choices[65][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[65] = choices[65][2];
 units[65] = "73";
 comments[65] = "Id Pregunta: 106. ";
 preguntaids[65] = 106


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[66]= new Array();
 choices[66][0] = "El 2 de Octubre de 2015";
 choices[66][1] = "El 15 de Septiembre de 2015";
 choices[66][2] = "El 1 de Octubre de 2015";
 choices[66][3] = "El 5 de Octubre de 2015";
 answers[66] = choices[66][0];
 units[66] = "19";
 comments[66] = "Id Pregunta: 579. Estrategia TIC";
 preguntaids[66] = 579


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[67]= "68)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[67]= new Array();
 choices[67][0] = "El nombre y el tipo de correspondencia.";
 choices[67][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[67][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[67][3] = "El nombre y el grado.";
 answers[67] = choices[67][1];
 units[67] = "85";
 comments[67] = "Id Pregunta: 636. Junta de Extremadura A1 2015";
 preguntaids[67] = 636


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[68]= "69)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[68]= new Array();
 choices[68][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[68][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[68][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[68][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[68] = choices[68][3];
 units[68] = "1";
 comments[68] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[68] = 236


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[69]= new Array();
 choices[69][0] = "Por Real Decreto.";
 choices[69][1] = "Por Orden del Ministerio del Interior.";
 choices[69][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[69][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[69] = 230


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[70]= new Array();
 choices[70][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[70][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[70][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[70][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[70] = choices[70][0];
 units[70] = "77";
 comments[70] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[70] = 685


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[71]= new Array();
 choices[71][0] = "ISO/IEC 31000";
 choices[71][1] = "ISO/IEC 14000";
 choices[71][2] = "ISO/IEC 38500";
 choices[71][3] = "ISO/IEC 18000";
 answers[71] = choices[71][2];
 units[71] = "26";
 comments[71] = "Id Pregunta: 545. Gobernanza TIC";
 preguntaids[71] = 545


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[72]= "73)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[72]= new Array();
 choices[72][0] = "Relaciones base y vistas.";
 choices[72][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[72][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[72][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[72] = choices[72][3];
 units[72] = "60";
 comments[72] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[72] = 637


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[73]= new Array();
 choices[73][0] = "Neo4J ";
 choices[73][1] = "OrientDB ";
 choices[73][2] = "InfoGrid ";
 choices[73][3] = "SimpleDB";
 answers[73] = choices[73][3];
 units[73] = "73";
 comments[73] = "Id Pregunta: 655. ";
 preguntaids[73] = 655


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[74]= new Array();
 choices[74][0] = "B&aacute;sico, medio y alto";
 choices[74][1] = "D&eacute;bil y fuerte";
 choices[74][2] = "Bajo, medio y alto";
 choices[74][3] = "Bajo, sustancial y alto";
 answers[74] = choices[74][3];
 units[74] = "77";
 comments[74] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";
 preguntaids[74] = 686


