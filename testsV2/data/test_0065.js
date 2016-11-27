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

//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[0]= "1)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[0]= new Array();
 choices[0][0] = "Diez art&iacute;culos.";
 choices[0][1] = "Nueve art&iacute;culos.";
 choices[0][2] = "Once art&iacute;culos.";
 choices[0][3] = "Ocho art&iacute;culos.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[1]= "2)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[1]= new Array();
 choices[1][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[1][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[1][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[1][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[1] = choices[1][1];
 units[1] = "64";
 comments[1] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[2]= "3)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[2]= new Array();
 choices[2][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[2][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[2][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[2][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[3]= new Array();
 choices[3][0] = "Indirecta.";
 choices[3][1] = "Directa.";
 choices[3][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[3][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[3] = choices[3][1];
 units[3] = "14";
 comments[3] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[4]= "5)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[4]= new Array();
 choices[4][0] = "Acoso sexual.";
 choices[4][1] = "Acoso por raz&oacute;n de sexo.";
 choices[4][2] = "Acoso laboral.";
 choices[4][3] = "Acoso mental.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[5]= "6)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[5][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[5][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[5][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[6]= new Array();
 choices[6][0] = "Tres meses.";
 choices[6][1] = "Nueve meses.";
 choices[6][2] = "Cuatro meses.";
 choices[6][3] = "Seis meses.";
 answers[6] = choices[6][0];
 units[6] = "10";
 comments[6] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[7]= "8)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[7]= new Array();
 choices[7][0] = "En qu&eacute; nos gastamos el dinero";
 choices[7][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[7][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[7][3] = "Qui&eacute;n se gasta el dinero.";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[8]= "9)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[8]= new Array();
 choices[8][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[8][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[8][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[8][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[9]= "10)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[9]= new Array();
 choices[9][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[9][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[9][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[9][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[9] = choices[9][0];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[10]= new Array();
 choices[10][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[10][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[10][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[10][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[10] = choices[10][1];
 units[10] = "77";
 comments[10] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[11]= "12)  Las Administraciones P&uacute;blicas:";
 choices[11]= new Array();
 choices[11][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[11][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[11][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[11][3] = "todas son correctas";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[12]= new Array();
 choices[12][0] = "Cincuenta y cuatro.";
 choices[12][1] = "Cincuenta.";
 choices[12][2] = "Cincuenta y cinco.";
 choices[12][3] = "Cincuenta y dos.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[13]= new Array();
 choices[13][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[13][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[13][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[13][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[14]= new Array();
 choices[14][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[14][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[14][2] = "A) y B) son verdaderas";
 choices[14][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[14] = choices[14][2];
 units[14] = "73";
 comments[14] = "Id Pregunta: 106. ";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[15]= new Array();
 choices[15][0] = "Un representante de la Administraci&oacute;n local.";
 choices[15][1] = "Un representante del Tribunal de Cuentas.";
 choices[15][2] = "Un representante del Defensor del Pueblo.";
 choices[15][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[15] = choices[15][0];
 units[15] = "22";
 comments[15] = "Id Pregunta: 123. ";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[16]= new Array();
 choices[16][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[16][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[16][2] = "Servicio de seguridad gestionada";
 choices[16][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[16] = choices[16][1];
 units[16] = "26";
 comments[16] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[17]= "18)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[17]= new Array();
 choices[17][0] = "Monol&iacute;tico.";
 choices[17][1] = "Estratificado.";
 choices[17][2] = "Cliente/servidor.";
 choices[17][3] = "Orientado a objetos.";
 answers[17] = choices[17][3];
 units[17] = "56";
 comments[17] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[18]= "19)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[18]= new Array();
 choices[18][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[18][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[18][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[18][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[19]= new Array();
 choices[19][0] = "Art&iacute;culo 16.2.";
 choices[19][1] = "Art&iacute;culo 17.1.";
 choices[19][2] = "Art&iacute;culo 18.1.";
 choices[19][3] = "Art&iacute;culo 18.2.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[20]= "21)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[20][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[20][2] = "Ambas son correctas.";
 choices[20][3] = "Ambas son incorrectas.";
 answers[20] = choices[20][0];
 units[20] = "14";
 comments[20] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[21]= "22)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[21]= new Array();
 choices[21][0] = "De ocho a&ntilde;os.";
 choices[21][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[21][2] = "Ambas son correctas.";
 choices[21][3] = "No existe un l&iacute;mite.";
 answers[21] = choices[21][0];
 units[21] = "14";
 comments[21] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[22]= new Array();
 choices[22][0] = "A los cinco a&ntilde;os.";
 choices[22][1] = "A los dos a&ntilde;os.";
 choices[22][2] = "A los tres a&ntilde;os.";
 choices[22][3] = "A los cuatro a&ntilde;os.";
 answers[22] = choices[22][0];
 units[22] = "10";
 comments[22] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[23]= new Array();
 choices[23][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[23][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[23][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[23][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[23] = choices[23][2];
 units[23] = "7";
 comments[23] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[24]= "25)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[24]= new Array();
 choices[24][0] = "2.400 euros";
 choices[24][1] = "4.000 euros";
 choices[24][2] = "3.200 euros";
 choices[24][3] = "1.600 euros";
 answers[24] = choices[24][1];
 units[24] = "37";
 comments[24] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[25]= "26)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[25]= new Array();
 choices[25][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[25][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[25][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[25][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[25] = choices[25][0];
 units[25] = "12";
 comments[25] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[26]= new Array();
 choices[26][0] = "Al Gobierno de la naci&oacute;n";
 choices[26][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[26][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[26][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[26] = choices[26][3];
 units[26] = "7";
 comments[26] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[27]= new Array();
 choices[27][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[27][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[27][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[27][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[27] = choices[27][1];
 units[27] = "26";
 comments[27] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[28]= "29)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[28]= new Array();
 choices[28][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[28][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[28][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[28][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[28] = choices[28][3];
 units[28] = "14";
 comments[28] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[29]= "30)  El Colegio de Comisarios se re&uacute;ne:";
 choices[29]= new Array();
 choices[29][0] = "Una vez por semana.";
 choices[29][1] = "Una vez al mes.";
 choices[29][2] = "Dos veces en semana.";
 choices[29][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[30]= "31)  El sector p&uacute;blico institucional se integra por:";
 choices[30]= new Array();
 choices[30][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[30][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[30][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[30][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[31]= new Array();
 choices[31][0] = "Data Mining (miner&iacute;a de datos)";
 choices[31][1] = "Business Intelligence (inteligencia de negocio)";
 choices[31][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[31][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[31] = choices[31][1];
 units[31] = "72";
 comments[31] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[32]= new Array();
 choices[32][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[32][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[32][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[32][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[32] = choices[32][3];
 units[32] = "1";
 comments[32] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[33]= "34)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Paging";
 choices[33][1] = "Roaming";
 choices[33][2] = "Handover";
 choices[33][3] = "Trunking";
 answers[33] = choices[33][0];
 units[33] = "117";
 comments[33] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[34]= "35)  La Poblaci&oacute;n Activa incluye a:";
 choices[34]= new Array();
 choices[34][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[34][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[34][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[34][3] = "Todo aquel que desea trabajar";
 answers[34] = choices[34][2];
 units[34] = "15";
 comments[34] = "Id Pregunta: 110. ";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[35]= new Array();
 choices[35][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[35][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[35][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[35][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[35] = choices[35][3];
 units[35] = "120";
 comments[35] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[36]= new Array();
 choices[36][0] = "Programa de Educaci&oacute;n Digital";
 choices[36][1] = "Programa de Salud y Bienestar Social";
 choices[36][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[36][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[36] = choices[36][3];
 units[36] = "19";
 comments[36] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[37]= new Array();
 choices[37][0] = "Al Consejo Europeo.";
 choices[37][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[37][2] = "A la Comisi&oacute;n Europea.";
 choices[37][3] = "Al Parlamento Europeo.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[38]= "39)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[38]= new Array();
 choices[38][0] = "Un a&ntilde;o prorrogable";
 choices[38][1] = "Dos a&ntilde;os no prorrogables";
 choices[38][2] = "Un a&ntilde;o no prorrogable";
 choices[38][3] = "Dos a&ntilde;os prorrogables";
 answers[38] = choices[38][2];
 units[38] = "37";
 comments[38] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[39]= "40)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[39]= new Array();
 choices[39][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[39][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[39][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[39][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[39] = choices[39][3];
 units[39] = "7";
 comments[39] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[40]= "41)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[40]= new Array();
 choices[40][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[40][1] = "los Subdelegados del Gobierno en las provincias";
 choices[40][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[40][3] = "a y b son correctas";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[41]= "42)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[41]= new Array();
 choices[41][0] = "Presentar la moci&oacute;n de censura.";
 choices[41][1] = "Presidir las sesiones del Parlamento.";
 choices[41][2] = "Organizar la Secretar&iacute;a General.";
 choices[41][3] = "Preparar las actividades de las Comisiones.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[42]= "43)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[42]= new Array();
 choices[42][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[42][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[42][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[42][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[43]= "44)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[43]= new Array();
 choices[43][0] = "Relaciones base y vistas.";
 choices[43][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[43][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[43][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[43] = choices[43][3];
 units[43] = "60";
 comments[43] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[44]= "45)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[44]= new Array();
 choices[44][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[44][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[44][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[44][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[44] = choices[44][0];
 units[44] = "12";
 comments[44] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[45][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[45][2] = "Ambas son correctas.";
 choices[45][3] = "La A y B son incorrectas.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[46]= "47)  El lenguaje SPARK es un subconjunto de:";
 choices[46]= new Array();
 choices[46][0] = "Java";
 choices[46][1] = "Fortran";
 choices[46][2] = "Ruby";
 choices[46][3] = "Ada";
 answers[46] = choices[46][3];
 units[46] = "73";
 comments[46] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[47]= "48)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[47]= new Array();
 choices[47][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[47][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[47][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[47][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[47] = choices[47][2];
 units[47] = "47";
 comments[47] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[48]= "49)  Son proyectos de Apache relacionados con Big Data:";
 choices[48]= new Array();
 choices[48][0] = "Hadoop";
 choices[48][1] = "Spark";
 choices[48][2] = "A) y B)";
 choices[48][3] = "Niguno de los anteriores";
 answers[48] = choices[48][2];
 units[48] = "73";
 comments[48] = "Id Pregunta: 108. ";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[49]= "50)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[49]= new Array();
 choices[49][0] = "Subgrupo A1";
 choices[49][1] = "Subgrupo A2";
 choices[49][2] = "Subgrupo B";
 choices[49][3] = "Subgrupo C1";
 answers[49] = choices[49][0];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[50]= new Array();
 choices[50][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[50][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[50][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[50][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[50] = choices[50][0];
 units[50] = "19";
 comments[50] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[51]= "52)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[51]= new Array();
 choices[51][0] = "Cifrada";
 choices[51][1] = "Conjunta";
 choices[51][2] = "Sistem&aacute;tica";
 choices[51][3] = "Todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[52]= "53)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[52]= new Array();
 choices[52][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[52][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[52][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[52][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[52] = choices[52][3];
 units[52] = "1";
 comments[52] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a los servicios territoriales es correcto:";
 choices[53]= new Array();
 choices[53][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[53][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[53][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[53][3] = "ninguna es correcta";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[54]= "55)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[54]= new Array();
 choices[54][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[54][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[54][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[54][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[54] = choices[54][3];
 units[54] = "5";
 comments[54] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[55]= new Array();
 choices[55][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[55][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[55][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[55][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[55] = choices[55][2];
 units[55] = "15";
 comments[55] = "Id Pregunta: 118. ";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[56]= "57)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[56]= new Array();
 choices[56][0] = "6 TB.";
 choices[56][1] = "5 TB.";
 choices[56][2] = "7 TB.";
 choices[56][3] = "3 TB.";
 answers[56] = choices[56][1];
 units[56] = "53";
 comments[56] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[57]= "58)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[57]= new Array();
 choices[57][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[57][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[57][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[57][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[57] = choices[57][2];
 units[57] = "10";
 comments[57] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[58]= new Array();
 choices[58][0] = "Las respuestas a) y b) son correctas.";
 choices[58][1] = "Las respuestas a) y b) no son correctas.";
 choices[58][2] = "Contenido coherente con los planes sectoriales.";
 choices[58][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[58] = choices[58][0];
 units[58] = "10";
 comments[58] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[59]= "60)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[59]= new Array();
 choices[59][0] = "Ley Org&aacute;nica.";
 choices[59][1] = "Ley de Bases.";
 choices[59][2] = "Ley ordinaria.";
 choices[59][3] = "Mandato.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; es SonarQube?";
 choices[60]= new Array();
 choices[60][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[60][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[60][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[60][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[60] = choices[60][2];
 units[60] = "92";
 comments[60] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[61]= "62)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[61]= new Array();
 choices[61][0] = "150 trabajadores/as.";
 choices[61][1] = "200 trabajadores/as.";
 choices[61][2] = "250 trabajadores/as.";
 choices[61][3] = "300 trabajadores/as.";
 answers[61] = choices[61][2];
 units[61] = "14";
 comments[61] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[62]= new Array();
 choices[62][0] = "14";
 choices[62][1] = "11";
 choices[62][2] = "12";
 choices[62][3] = "15";
 answers[62] = choices[62][0];
 units[62] = "19";
 comments[62] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[63]= "64)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[63]= new Array();
 choices[63][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[63][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[63][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[63][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[63] = choices[63][2];
 units[63] = "7";
 comments[63] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[64]= "65)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[64]= new Array();
 choices[64][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[64][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[64][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[64][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[64] = choices[64][1];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[65]= new Array();
 choices[65][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[65][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[65][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[65][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[65] = choices[65][2];
 units[65] = "19";
 comments[65] = "Id Pregunta: 753. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[66]= "67)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[66]= new Array();
 choices[66][0] = "Estrasburgo.";
 choices[66][1] = "Bruselas.";
 choices[66][2] = "Luxemburgo.";
 choices[66][3] = "Holanda.";
 answers[66] = choices[66][0];
 units[66] = "5";
 comments[66] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[67]= new Array();
 choices[67][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[67][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[67][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[67][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[68]= "69)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[68]= new Array();
 choices[68][0] = "Ejecutivo";
 choices[68][1] = "Limitativo";
 choices[68][2] = "Estimativo";
 choices[68][3] = "Progresivo";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[69]= "70)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[69]= new Array();
 choices[69][0] = "El Parlamento Europeo.";
 choices[69][1] = "Todas las respuestas son correctas.";
 choices[69][2] = "La Comisi&oacute;n Europea.";
 choices[69][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[70]= "71)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[70]= new Array();
 choices[70][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[70][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[70][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[70][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[70] = choices[70][1];
 units[70] = "7";
 comments[70] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[71]= "72)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[71]= new Array();
 choices[71][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[71][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[71][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[71][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[71] = choices[71][2];
 units[71] = "85";
 comments[71] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[72]= "73)  Sobre el Plan Juncker:";
 choices[72]= new Array();
 choices[72][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[72][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[72][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[72][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[73]= "74)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[73]= new Array();
 choices[73][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[73][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[73][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[73][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[73] = choices[73][1];
 units[73] = "7";
 comments[73] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[74]= "75)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Anualmente.";
 choices[74][1] = "Ninguna de las respuestas es correcta.";
 choices[74][2] = "Trimestralmente.";
 choices[74][3] = "Semestralmente.";
 answers[74] = choices[74][0];
 units[74] = "10";
 comments[74] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


