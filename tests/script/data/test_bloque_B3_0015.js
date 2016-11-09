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

//  Id pregunta: 1995 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En un diagrama de transici&oacute;n de estados, en la metodolog&iacute;a Metrica V3:";
 choices[0]= new Array();
 choices[0][0] = "Se puede incluir mas de un estado inicial, que iran conectados mediante una transici&oacute;n sin etiquetar al primer estado del diagrama";
 choices[0][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final";
 choices[0][2] = "Puede haber varios estados finales en un diagrama, que ser&aacute;n mutuamente excluyentes";
 choices[0][3] = "Los &uacute;nicos elementos permitidos son estaedos, transiciones y acciones.";
 answers[0] = choices[0][2];
 units[0] = "86";
 comments[0] = "Id Pregunta: 1995. Pregunta TIC-B 2004";


//  Id pregunta: 2084 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;A qu&eacute; se denomina dentro de los lenguajes documentales &quot;silencios documentales&quot;?:";
 choices[1]= new Array();
 choices[1][0] = "A la informaci&oacute;n excedente";
 choices[1][1] = "A la informaci&oacute;n no excedente";
 choices[1][2] = "A los datos solicitados pero no obtenidos por ruptura del proceso";
 choices[1][3] = "A los datos solicitados pero no obtenidos por distorsi&oacute;n del proceso";
 answers[1] = choices[1][3];
 units[1] = "95,96";
 comments[1] = "Id Pregunta: 2084. ";


//  Id pregunta: 2123 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso implantaci&oacute;n y aceptaci&oacute;n del sistema de informaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "Preparaci&oacute;n del mantenimiento";
 choices[2][1] = "Carga de datos al entorno de operaci&oacute;n";
 choices[2][2] = "Pruebas de aceptaci&oacute;n del sistema";
 choices[2][3] = "Todas las anteriores";
 answers[2] = choices[2][3];
 units[2] = "86";
 comments[2] = "Id Pregunta: 2123. NULL";


//  Id pregunta: 2149 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes modelos se puede considerar como una nueva versi&oacute;n, utilizando lenguajes de m&aacute;s alto nivel, del modelo Code &amp; Fix?:";
 choices[3]= new Array();
 choices[3][0] = "Modelo de transformaci&oacute;n";
 choices[3][1] = "Modelo por etapas";
 choices[3][2] = "Modelo en espiral";
 choices[3][3] = "Modelo de desarrollo evolutivo o prototipado evolutivo";
 answers[3] = choices[3][3];
 units[3] = "76";
 comments[3] = "Id Pregunta: 2149. ";


//  Id pregunta: 2187 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l no es una caracter&iacute;stica com&uacute;n a todas las metodolog&iacute;as?:";
 choices[4]= new Array();
 choices[4][0] = "Diccionario de datos";
 choices[4][1] = "Prototipado";
 choices[4][2] = "Cubre todos los aspectos de un sistema de aplicaci&oacute;n: desde el organizativo , hasta el sistema t&eacute;cnico de apoyo";
 choices[4][3] = "An&aacute;lisis de riesgo";
 answers[4] = choices[4][1];
 units[4] = "79,85";
 comments[4] = "Id Pregunta: 2187. ";


//  Id pregunta: 2197 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;En cu&aacute;l de los siguientes grupos de m&eacute;tricas del software se debe encuadrar el modelo de An&aacute;lisis de Puntos de Funci&oacute;n?:";
 choices[5]= new Array();
 choices[5][0] = "M&eacute;tricas de complejidad";
 choices[5][1] = "M&eacute;tricas de productividad";
 choices[5][2] = "M&eacute;tricas de calidad";
 choices[5][3] = "M&eacute;tricas de riesgo";
 answers[5] = choices[5][1];
 units[5] = "89";
 comments[5] = "Id Pregunta: 2197. NULL";


//  Id pregunta: 2214 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; modelo de desarrollo de software tiene como caracter&iacute;stica convertir autom&aacute;ticamente una especificaci&oacute;n formal en un programa que satisfaga dicha especificaci&oacute;n?:";
 choices[6]= new Array();
 choices[6][0] = "Modelo en espiral";
 choices[6][1] = "Modelo evolutivo";
 choices[6][2] = "Modelo de lenguaje de especificaci&oacute;n formal";
 choices[6][3] = "Modelo de transformaci&oacute;n";
 answers[6] = choices[6][3];
 units[6] = "76";
 comments[6] = "Id Pregunta: 2214. ";


//  Id pregunta: 2234 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Al esfuerzo requerido para modificar un programa en explotaci&oacute;n se llama:";
 choices[7]= new Array();
 choices[7][0] = "Usabilidad";
 choices[7][1] = "Mantenibilidad";
 choices[7][2] = "Verificabilidad";
 choices[7][3] = "Flexibilidad";
 answers[7] = choices[7][3];
 units[7] = "88";
 comments[7] = "Id Pregunta: 2234. NULL";


//  Id pregunta: 2239 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Cada ocurrencia de un tipo de entidad o interrelaci&oacute;n toma valores a partir de la observaci&oacute;n del mundo real Al conjunto de posibles valores que puede tomar una cierta caracter&iacute;stica se llama:";
 choices[8]= new Array();
 choices[8][0] = "Atributo";
 choices[8][1] = "Dominio";
 choices[8][2] = "Relaci&oacute;n";
 choices[8][3] = "Restricci&oacute;n";
 answers[8] = choices[8][1];
 units[8] = "80";
 comments[8] = "Id Pregunta: 2239. ";


//  Id pregunta: 2260 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  DRM es:";
 choices[9]= new Array();
 choices[9][0] = "un sistema de modulaci&oacute;n digital basado en secuencias aleatorias";
 choices[9][1] = "un conjunto de directivas para la investigaci&oacute;n de tecnolog&iacute;as m&oacute;viles";
 choices[9][2] = "un programa de formaci&oacute;n especializado en las relaciones entre directivos";
 choices[9][3] = "una tecnolog&iacute;a para la gesti&oacute;n de los derechos de los contenidos digitales ";
 answers[9] = choices[9][3];
 units[9] = "37";
 comments[9] = "Id Pregunta: 2260. ";


//  Id pregunta: 2263 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El ciclo de vida es una herramienta &uacute;til para:";
 choices[10]= new Array();
 choices[10][0] = "Establecer los puntos de control para la gesti&oacute;n del proyecto";
 choices[10][1] = "Para definir las actividades a realizar y en qu&eacute; orden, &uacute;nicamente";
 choices[10][2] = "Para poder generar la documentaci&oacute;n asociada al sistema de una forma eficaz";
 choices[10][3] = "El ciclo de vida no es la herramienta, lo es la metodolog&iacute;a asociada";
 answers[10] = choices[10][0];
 units[10] = "76";
 comments[10] = "Id Pregunta: 2263. ";


//  Id pregunta: 2270 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El diagrama de contexto de un DFD contiene:";
 choices[11]= new Array();
 choices[11][0] = "Un &uacute;nico proceso";
 choices[11][1] = "Exclusivamente una entidad de procedencia y otra de destino";
 choices[11][2] = "Procesos diferentes cuando tiene que representar funciones diferentes";
 choices[11][3] = "Un &uacute;nico fichero de datos";
 answers[11] = choices[11][0];
 units[11] = "81";
 comments[11] = "Id Pregunta: 2270. ";


//  Id pregunta: 2358 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Entre las nuevas tecnolog&iacute;as incorporadas a la Versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[12]= new Array();
 choices[12][0] = "Orientaci&oacute;n a objetos";
 choices[12][1] = "Entorno cliente/servidor";
 choices[12][2] = "Reutilizaci&oacute;n de m&oacute;dulos - componentes (tambi&eacute;n denominados productos) y bases de datos";
 choices[12][3] = "Todas las respuestas anteriores son correctas";
 answers[12] = choices[12][3];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2358. NULL";


//  Id pregunta: 2388 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de un almac&eacute;n de datos dentro de un diagrama de flujo de datos:";
 choices[13]= new Array();
 choices[13][0] = "No puede crear, destruir ni transformar datos";
 choices[13][1] = "No se puede comunicar con otro almac&eacute;n de datos mediante un flujo directo, siempre tiene que haber un proceso entre ambos almacenes";
 choices[13][2] = "Debe referirse el almac&eacute;n al entorno f&iacute;sico";
 choices[13][3] = "Si se transpasa por un flujo de datos el contenido completo del almac&eacute;n, este flujo no llevar&aacute; nombre";
 answers[13] = choices[13][2];
 units[13] = "81";
 comments[13] = "Id Pregunta: 2388. ";


//  Id pregunta: 2391 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La estimaci&oacute;n de inversiones, costes de funcionamiento y resultados esperados se define en:";
 choices[14]= new Array();
 choices[14][0] = "Especificaciones funcionales del sistema";
 choices[14][1] = "Plan de sistemas";
 choices[14][2] = "Dise&ntilde;o del sistema";
 choices[14][3] = "Ninguno de los anteriores";
 answers[14] = choices[14][1];
 units[14] = "77";
 comments[14] = "Id Pregunta: 2391. ";


//  Id pregunta: 2419 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El nivel b&aacute;sico de comprensi&oacute;n que determina el n&uacute;mero preciso de sonidos con valor distinto es el nivel:";
 choices[15]= new Array();
 choices[15][0] = "Ac&uacute;stico";
 choices[15][1] = "Fon&eacute;tico";
 choices[15][2] = "Fonol&oacute;gico";
 choices[15][3] = "L&eacute;xico-sint&aacute;ctico";
 answers[15] = choices[15][2];
 units[15] = "94";
 comments[15] = "Id Pregunta: 2419. ";


//  Id pregunta: 2450 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Las ventajas del modelo en espiral son&hellip;:";
 choices[16]= new Array();
 choices[16][0] = "Potencia la reutilizaci&oacute;n del software existente.";
 choices[16][1] = "No tiene dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[16][2] = "Es muy interesante tanto para el software contratado como para el propio";
 choices[16][3] = "No acaba nunca";
 answers[16] = choices[16][0];
 units[16] = "76";
 comments[16] = "Id Pregunta: 2450. ";


//  Id pregunta: 2464 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Los s&iacute;mbolos &quot;(&quot; y &quot;)&quot; seg&uacute;n la notaci&oacute;n BNF representan, en el diccionario de datos:";
 choices[17]= new Array();
 choices[17][0] = "Iteraci&oacute;n";
 choices[17][1] = "Selecci&oacute;n";
 choices[17][2] = "Composici&oacute;n";
 choices[17][3] = "Opcionalidad";
 answers[17] = choices[17][3];
 units[17] = "81";
 comments[17] = "Id Pregunta: 2464. ";


//  Id pregunta: 2479 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Por sistema de garant&iacute;a de calidad se entiende:";
 choices[18]= new Array();
 choices[18][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[18][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[18][2] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 choices[18][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior";
 answers[18] = choices[18][2];
 units[18] = "87";
 comments[18] = "Id Pregunta: 2479. NULL";


//  Id pregunta: 2505 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Un almac&eacute;n de datos en un DFD&hellip;:";
 choices[19]= new Array();
 choices[19][0] = "No tiene por qu&eacute; equivaler a una tabla";
 choices[19][1] = "Representa una base de datos ";
 choices[19][2] = "Es un objeto de tipo dato";
 choices[19][3] = "Se usa tanto como repositorio como en la recogida de basura";
 answers[19] = choices[19][0];
 units[19] = "81";
 comments[19] = "Id Pregunta: 2505. ";


//  Id pregunta: 2526 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el an&aacute;lisis documental al nivel en el que se extrae un &quot;abstract&quot; o resumen anal&iacute;tico del texto &iacute;ntegro, se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Nivel de asiento";
 choices[20][1] = "Nivel de descriptor";
 choices[20][2] = "Nivel de resumen";
 choices[20][3] = "Nivel documental";
 answers[20] = choices[20][2];
 units[20] = "96";
 comments[20] = "Id Pregunta: 2526. NULL";


//  Id pregunta: 2548 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Para evaluar diferentes sistemas de recuperaci&oacute;n de informaci&oacute;n, &iquest;qu&eacute; par&aacute;metros suelen analizarse?:";
 choices[21]= new Array();
 choices[21][0] = "&Iacute;ndice de retorno e &iacute;ndice de precisi&oacute;n";
 choices[21][1] = "&Iacute;ndice de estimaci&oacute;n cuantificable";
 choices[21][2] = "&Iacute;ndice de ajuste de material devuelto";
 choices[21][3] = "N&uacute;mero de referencias correctas";
 answers[21] = choices[21][0];
 units[21] = "96";
 comments[21] = "Id Pregunta: 2548. NULL";


//  Id pregunta: 2551 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Uno de los est&aacute;ndares de representaci&oacute;n de c&oacute;digos de barras en dos dimensiones es:";
 choices[22]= new Array();
 choices[22][0] = "PDF 417";
 choices[22][1] = "EPS 417";
 choices[22][2] = "PES 417";
 choices[22][3] = "2DC 417";
 answers[22] = choices[22][0];
 units[22] = "93";
 comments[22] = "Id Pregunta: 2551. NULL";


//  Id pregunta: 2628 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;En q&uacute;e proceso de M&eacute;trica V3 se llevaria a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procesamientos de migraci&oacute;n y carga inicial de datos?";
 choices[23]= new Array();
 choices[23][0] = "CSI.";
 choices[23][1] = "DSI";
 choices[23][2] = "IAS.";
 choices[23][3] = "DCS.";
 answers[23] = choices[23][0];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2628. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2655 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Los objetivos a conseguir en cuanto a cohesi&oacute;n y acoplamiento en el Dise&ntilde;o Estructurado son:";
 choices[24]= new Array();
 choices[24][0] = "M&aacute;xima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 choices[24][1] = "M&iacute;nima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[24][2] = "M&aacute;xima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[24][3] = "M&iacute;nima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 answers[24] = choices[24][0];
 units[24] = "84";
 comments[24] = "Id Pregunta: 2655. Preparatic XVII";


//  Id pregunta: 2700 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Principal inconveniente del teletexto:";
 choices[25]= new Array();
 choices[25][0] = "El juego de colores es reducido.";
 choices[25][1] = "Carece de interactividad real.";
 choices[25][2] = "La resoluci&oacute;n gr&aacute;fica no es buena.";
 choices[25][3] = "Necesita un decodificador caro y voluminoso.";
 answers[25] = choices[25][1];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2700. NULL";


//  Id pregunta: 2710 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Una de estas no es una propiedad de un Sistema de Gesti&oacute;n Documental:";
 choices[26]= new Array();
 choices[26][0] = "Establecer m&eacute;todos seguros de distribuci&oacute;n de documentos interna o externamente a la organizaci&oacute;n.";
 choices[26][1] = "Recoger documentaci&oacute;n de otros profesionales o colaboradores.";
 choices[26][2] = "El env&iacute;o de documentos por fax o e-mail de forma directa.";
 choices[26][3] = "Gestionar millones de registros y recuperarlos en pocos segundos.";
 answers[26] = choices[26][1];
 units[26] = "95";
 comments[26] = "Id Pregunta: 2710. NULL";


//  Id pregunta: 2724 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  En cuanto al modelo en espiral:";
 choices[27]= new Array();
 choices[27][0] = "La dimensi&oacute;n radial da cuenta del coste acumulativo";
 choices[27][1] = "La dimensi&oacute;n angular da idea del avance realizado en cada ciclo";
 choices[27][2] = "Las dos anteriores son correctas";
 choices[27][3] = "las dos primeras son falsas";
 answers[27] = choices[27][2];
 units[27] = "76";
 comments[27] = "Id Pregunta: 2724. ";


//  Id pregunta: 2729 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Uno de los objetivos principales de los Sistemas de Informaci&oacute;n es:";
 choices[28]= new Array();
 choices[28][0] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[28][1] = "Interconectar las distintas sedes de la organizaci&oacute;n";
 choices[28][2] = "Aumentar la complejidad de los procesos de la organizaci&oacute;n";
 choices[28][3] = "Reducir el n&uacute;mero de empleados";
 answers[28] = choices[28][0];
 units[28] = "77";
 comments[28] = "Id Pregunta: 2729. ";


//  Id pregunta: 2750 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Indique de las siguientes cual no es una metodologia de desarrollo orientada a objetos";
 choices[29]= new Array();
 choices[29][0] = "SA/SD";
 choices[29][1] = "OMT";
 choices[29][2] = "Proceso Unificado de modelado";
 choices[29][3] = "Tarjetas de clase";
 answers[29] = choices[29][0];
 units[29] = "82";
 comments[29] = "Id Pregunta: 2750. ";


//  Id pregunta: 2763 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  El FAN_OUT es:";
 choices[30]= new Array();
 choices[30][0] = "Un indicador de cuantos m&oacute;dulos controlan directamente un determinado m&oacute;dulo.";
 choices[30][1] = "Una medida del n&uacute;mero de m&oacute;dulos controlados directamente por otro m&oacute;dulo.";
 choices[30][2] = "Un indicador de los m&oacute;dulos de funci&oacute;n &uacute;nica que pueden ser reutilizados.";
 choices[30][3] = "Un reflejo de la especificaci&oacute;n de requerimientos del sistema.";
 answers[30] = choices[30][1];
 units[30] = "84";
 comments[30] = "Id Pregunta: 2763. ";


//  Id pregunta: 2764 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre el acoplamiento normal.";
 choices[31]= new Array();
 choices[31][0] = "Provoca dependencia de ejecuci&oacute;n.";
 choices[31][1] = "Los m&oacute;dulos se refieren a la misma estructura de datos local.";
 choices[31][2] = "No se produce traspaso de par&aacute;metros.";
 choices[31][3] = "Los m&oacute;dulos se refieren a la misma &aacute;rea global de datos.";
 answers[31] = choices[31][2];
 units[31] = "84";
 comments[31] = "Id Pregunta: 2764. ";


//  Id pregunta: 2783 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  En M&Eacute;TRICA 3, la definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales se lleva a cabo en:";
 choices[32]= new Array();
 choices[32][0] = "La Planificaci&oacute;n de Sistemas.";
 choices[32][1] = "La Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[32][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[32][3] = "La Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 answers[32] = choices[32][1];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2783. NULL";


//  Id pregunta: 2790 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  La actividad de &quot;Verificaci&oacute;n y Aceptaci&oacute;n de la Arquitectura del Sistema &quot;";
 choices[33]= new Array();
 choices[33][0] = "Es anterior a la de &quot;Dise&ntilde;o f&iacute;sico de datos&quot;.";
 choices[33][1] = "Es posterior a la de &quot;Dise&ntilde;o de la Migraci&oacute;n y Carga Inicial de Datos&quot;.";
 choices[33][2] = "Es simult&aacute;nea a la de &quot;Dise&ntilde;o f&iacute;sico de datos&quot;.";
 choices[33][3] = "Es anterior a la de &quot;Generaci&oacute;n de Especificaciones de Construcci&oacute;n&quot;.";
 answers[33] = choices[33][3];
 units[33] = "86";
 comments[33] = "Id Pregunta: 2790. NULL";


//  Id pregunta: 2791 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Seg&uacute;n m&eacute;trica v3. En qu&eacute; perfil encajar&iacute;a un responsable de calidad";
 choices[34]= new Array();
 choices[34][0] = "Perfil directivo ";
 choices[34][1] = "Perfil jefe de proyecto";
 choices[34][2] = "M&eacute;trica v3 no define ese tipo de participante";
 choices[34][3] = "Consultor";
 answers[34] = choices[34][1];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2791. NULL";


//  Id pregunta: 2837 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En el modelo EFQM el atributo de calidad que recibe mayor ponderaci&oacute;n es:";
 choices[35]= new Array();
 choices[35][0] = "Resultados en cliente";
 choices[35][1] = "Procesos";
 choices[35][2] = "Liderazgo";
 choices[35][3] = "Gesti&oacute;n del Personal";
 answers[35] = choices[35][0];
 units[35] = "92";
 comments[35] = "Id Pregunta: 2837. NULL";


//  Id pregunta: 2851 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Qu&eacute; sistema de parametr&iacute;zaci&oacute;n no se emplea en el reconocimiento de voz?";
 choices[36]= new Array();
 choices[36][0] = "por fonemas";
 choices[36][1] = "por morfemas";
 choices[36][2] = "por difonemas";
 choices[36][3] = "por semis&iacute;labas";
 answers[36] = choices[36][1];
 units[36] = "94";
 comments[36] = "Id Pregunta: 2851. ";


//  Id pregunta: 4373 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de calidad CMM (Capacity Mature Model)?";
 choices[37]= new Array();
 choices[37][0] = "Inicial";
 choices[37][1] = "Administrado";
 choices[37][2] = "Definido";
 choices[37][3] = "Ideal";
 answers[37] = choices[37][3];
 units[37] = "88";
 comments[37] = "Id Pregunta: 4373. NULL";


//  Id pregunta: 4387 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad, seg&uacute;n el modelo de McCall?";
 choices[38]= new Array();
 choices[38][0] = "Integridad.";
 choices[38][1] = "Completitud.";
 choices[38][2] = "Fiabilidad.";
 choices[38][3] = "Facilidad de mantenimiento.";
 answers[38] = choices[38][1];
 units[38] = "88";
 comments[38] = "Id Pregunta: 4387. NULL";


//  Id pregunta: 4474 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Cual de los siguientes no es un tipo de prueba contemplado en la metodolog&iacute;a Metrica V3?";
 choices[39]= new Array();
 choices[39][0] = "Pruebas unitarias.";
 choices[39][1] = "Pruebas singulares.";
 choices[39][2] = "Pruebas de integraci&oacute;n.";
 choices[39][3] = "Pruebas de regresi&oacute;n.";
 answers[39] = choices[39][1];
 units[39] = "86";
 comments[39] = "Id Pregunta: 4474. NULL";


//  Id pregunta: 4525 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En un Sistema de Informaci&oacute;n Geogr&aacute;fica los atributos que puede tener un objeto ser&aacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Solamente gr&aacute;ficos.";
 choices[40][1] = "Solamente alfanum&eacute;ricos.";
 choices[40][2] = "Solamente vectoriales.";
 choices[40][3] = "Gr&aacute;ficos y alfanum&eacute;ricos.";
 answers[40] = choices[40][3];
 units[40] = "67";
 comments[40] = "Id Pregunta: 4525. NULL";


//  Id pregunta: 4555 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  En CMMi, Ia Process Area (PA) de Gesti&oacute;n de Riesgos (Risk Management) corresponde al Nivel";
 choices[41]= new Array();
 choices[41][0] = "Nivel 2 (Gestionado)";
 choices[41][1] = "Nivel 3 (Definido)";
 choices[41][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[41][3] = "Nivel 5 (Optimizado)";
 answers[41] = choices[41][1];
 units[41] = "87";
 comments[41] = "Id Pregunta: 4555. NULL";


//  Id pregunta: 4739 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  La refactorizaci&oacute;n consiste en:";
 choices[42]= new Array();
 choices[42][0] = "Mejorar el c&oacute;digo fuente.";
 choices[42][1] = "Mejorar el dise&ntilde;o de una aplicaci&oacute;n.";
 choices[42][2] = "Mejorar el mantenimiento del c&oacute;digo fuente.";
 choices[42][3] = "Todas las respuestas anteriores son correctas.";
 answers[42] = choices[42][3];
 units[42] = "91";
 comments[42] = "Id Pregunta: 4739. Examen 2006 JCYL";


//  Id pregunta: 4935 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Se&ntilde;ale, &iquest;cu&aacute;l de los siguientes t&eacute;rminos no es un elemento de los Diagramas de Flujos de Datos (DFD)?:";
 choices[43]= new Array();
 choices[43][0] = "Funci&oacute;n.";
 choices[43][1] = "Proceso.";
 choices[43][2] = "Flujo de recursos.";
 choices[43][3] = "Almac&eacute;n.";
 answers[43] = choices[43][0];
 units[43] = "81";
 comments[43] = "Id Pregunta: 4935. Examen TIC B 2007";


//  Id pregunta: 4950 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Qu&eacute; diagrama UML describe los mensajes que se pasan entre los objetos y el orden en el que lo hacen?:";
 choices[44]= new Array();
 choices[44][0] = "Diagrama de estado.";
 choices[44][1] = "Diagrama de actividad.";
 choices[44][2] = "Diagrama de despliegue.";
 choices[44][3] = "Diagrama de secuencia.";
 answers[44] = choices[44][3];
 units[44] = "82";
 comments[44] = "Id Pregunta: 4950. Examen TIC B 2007";


//  Id pregunta: 5071 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Seg&uacute;n M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes productos NO se obtienen del proceso de an&aacute;lisis de sistemas de informaci&oacute;n (ASI) orientado a objetos?:";
 choices[45]= new Array();
 choices[45][0] = "Dise&ntilde;o de clases";
 choices[45][1] = "Descripci&oacute;n de interfaces entre subsistemas";
 choices[45][2] = "Modelo de clases de an&aacute;lisis";
 choices[45][3] = "An&aacute;lisis de la realizaci&oacute;n de los casos de uso";
 answers[45] = choices[45][0];
 units[45] = "86";
 comments[45] = "Id Pregunta: 5071. Examen TIC A 2007";


//  Id pregunta: 5144 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l es el orden correcto en el que se realizan los pasos en un proceso de reingenier&iacute;a?";
 choices[46]= new Array();
 choices[46][0] = "Ingenier&iacute;a directa, ingenier&iacute;a inversa, an&aacute;lisis de c&oacute;digo, redise&ntilde;o y restructuraci&oacute;n.";
 choices[46][1] = "An&aacute;lisis de c&oacute;digo, redise&ntilde;o, ingenier&iacute;a inversa, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[46][2] = "An&aacute;lisis de c&oacute;digo, ingenier&iacute;a inversa, redise&ntilde;o, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[46][3] = "An&aacute;lisis de c&oacute;digo, reestructuraci&oacute;n, ingenier&iacute;a inversa, redise&ntilde;o e ingenier&iacute;a directa.";
 answers[46] = choices[46][3];
 units[46] = "91";
 comments[46] = "Id Pregunta: 5144. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5185 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Un modelado de un Sistema de Informaci&oacute;n se considera completo si se realiza desde los siguientes puntos de vista:";
 choices[47]= new Array();
 choices[47][0] = "Funcional, Est&aacute;tico y Din&aacute;mico";
 choices[47][1] = "Informaci&oacute;n, Procesos e Interfaces de Usuario";
 choices[47][2] = "Est&aacute;tico, Din&aacute;mico y Relacional";
 choices[47][3] = "Funcional, Informaci&oacute;n y Procesos";
 answers[47] = choices[47][0];
 units[47] = "81";
 comments[47] = "Id Pregunta: 5185. ";


//  Id pregunta: 5245 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Un Plan de sistemas de Informaci&oacute;n y Comunicaciones se elabora (se&ntilde;ale la falsa):";
 choices[48]= new Array();
 choices[48][0] = "Se elabora a partir de los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[48][1] = "Se recogen las necesidades y requerimientos de los usuarios, en base a procesos de negocio";
 choices[48][2] = "No implica necesariamente el liderazgo del equipo directivo para su &eacute;xito";
 choices[48][3] = "Se valoran los escenarios tecnol&oacute;gicos que aporten el menor riesgo, la mayor protecci&oacute;n de inversiones y los m&aacute;ximos beneficios";
 answers[48] = choices[48][2];
 units[48] = "77";
 comments[48] = "Id Pregunta: 5245. ";


//  Id pregunta: 5531 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de la gesti&oacute;n documental?";
 choices[49]= new Array();
 choices[49][0] = "Limitaci&oacute;n a un &uacute;nico tipo o formato de documento para cada gestor documental";
 choices[49][1] = "Establecer m&eacute;todos seguros de distribuci&oacute;n de documentos dentro y fuera de la organizaci&oacute;n";
 choices[49][2] = "Compartir documentaci&oacute;n con los distintos  integrantes de un grupo";
 choices[49][3] = "Gestionar gran volumen de registros y recuperarlos en poco tiempo";
 answers[49] = choices[49][0];
 units[49] = "95";
 comments[49] = "Id Pregunta: 5531. NULL";


//  Id pregunta: 5574 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo es la mejora continua de la eficiencia de los servicios y operaciones y la calidad del servicio al cliente?";
 choices[50]= new Array();
 choices[50][0] = "ITIL";
 choices[50][1] = "CMMI";
 choices[50][2] = "COBIT";
 choices[50][3] = "M&Eacute;TRICA";
 answers[50] = choices[50][0];
 units[50] = "98";
 comments[50] = "Id Pregunta: 5574. NULL";


//  Id pregunta: 5839 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA, en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[51]= new Array();
 choices[51][0] = "Se utiliza, en general, para la auto evaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora";
 choices[51][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea";
 choices[51][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados";
 choices[51][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo";
 answers[51] = choices[51][1];
 units[51] = "92";
 comments[51] = "Id Pregunta: 5839. MAP 2008 A1";


//  Id pregunta: 5907 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;En cu&aacute;l de las siguientes metodolog&iacute;as de desarrollo de software NO se utilizan Diagramas de Flujo de Datos?";
 choices[52]= new Array();
 choices[52][0] = "De Marco";
 choices[52][1] = "Jackson";
 choices[52][2] = "Gane &amp; Sarson";
 choices[52][3] = "Yourdon/Constantine";
 answers[52] = choices[52][1];
 units[52] = "79";
 comments[52] = "Id Pregunta: 5907. MAP 2008 A1";


//  Id pregunta: 5961 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[53]= new Array();
 choices[53][0] = "Eficiencia";
 choices[53][1] = "Eficacia";
 choices[53][2] = "Proceso";
 choices[53][3] = "Requisito";
 answers[53] = choices[53][0];
 units[53] = "87";
 comments[53] = "Id Pregunta: 5961. Castilla La Mancha 2009";


//  Id pregunta: 6107 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Entre las t&eacute;cnicas y pr&aacute;cticas de educci&oacute;n de requisitos utilizadas en la ingenier&iacute;a de requisitos NO se encuentra la siguiente:";
 choices[54]= new Array();
 choices[54][0] = "Brainstorming.";
 choices[54][1] = "Casos de uso.";
 choices[54][2] = "M&eacute;todo Albrecht.";
 choices[54][3] = "Prototipado.";
 answers[54] = choices[54][2];
 units[54] = "78";
 comments[54] = "Id Pregunta: 6107. TIC A 2009";


//  Id pregunta: 6217 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  En el desarrollo de un sistema &iquest;En qu&eacute; casos de los siguientes es adecuado el uso de un 'modelo en espiral'?";
 choices[55]= new Array();
 choices[55][0] = "Sistemas de peque&ntilde;o tama&ntilde;o";
 choices[55][1] = "Cuando los requisitos est&eacute;n bien definidos desde un principio";
 choices[55][2] = "Proyectos donde sea importante el factor riesgo";
 choices[55][3] = "El producto a desarrollar no es novedoso";
 answers[55] = choices[55][2];
 units[55] = "76";
 comments[55] = "Id Pregunta: 6217. TICB-2009, bloque desarrollo";


//  Id pregunta: 6291 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica que deba cumplir un requisito en un an&aacute;lisis de la informaci&oacute;n para que sea de utilidad?";
 choices[56]= new Array();
 choices[56][0] = "Completo";
 choices[56][1] = "Verificable";
 choices[56][2] = "Dif&iacute;cil de modificar";
 choices[56][3] = "Consistente";
 answers[56] = choices[56][2];
 units[56] = "78";
 comments[56] = "Id Pregunta: 6291. ";


//  Id pregunta: 6462 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Indique la actividad que NO forma parte del ciclo de vida del software";
 choices[57]= new Array();
 choices[57][0] = "El an&aacute;lisis del sistema de informaci&oacute;n";
 choices[57][1] = "La planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n";
 choices[57][2] = "El mantenimiento del sistema de informaci&oacute;n";
 choices[57][3] = "La gesti&oacute;n de riesgos";
 answers[57] = choices[57][1];
 units[57] = "76";
 comments[57] = "Id Pregunta: 6462. Castilla La Mancha 2009";


//  Id pregunta: 6465 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Seg&uacute;n el interfaz de Aseguramiento de la Calidad de M&eacute;trica v3, el establecimiento del Plan de Aseguramiento de la Calidad debe comenzar en el proceso:";
 choices[58]= new Array();
 choices[58][0] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[58][1] = "Estudio de Viabilidad del Sistema";
 choices[58][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[58][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "86";
 comments[58] = "Id Pregunta: 6465. Castilla La Mancha 2009";


//  Id pregunta: 6616 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Seg&uacute;n M&eacute;trica el grupo de Aseguramiento de la Calidad participa en el proyecto bajo el perfil de";
 choices[59]= new Array();
 choices[59][0] = "Consultor";
 choices[59][1] = "Analista";
 choices[59][2] = "Calidad";
 choices[59][3] = "Experto";
 answers[59] = choices[59][1];
 units[59] = "86";
 comments[59] = "Id Pregunta: 6616. NULL";


//  Id pregunta: 6620 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Seg&uacute;n M&eacute;trica, las Interfaces son:";
 choices[60]= new Array();
 choices[60][0] = "4: Gesti&oacute;n de Proyectos; Seguridad y Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad; Gesti&oacute;n de Configuraci&oacute;n";
 choices[60][1] = "3: Gesti&oacute;n de Proyectos; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 choices[60][2] = "3: Gesti&oacute;n de Proyectos; Aseguramiento de la Calidad  y Gesti&oacute;n de Riesgos; Gesti&oacute;n de Configuraci&oacute;n";
 choices[60][3] = "4: Gesti&oacute;n de Proyectos; Seguridad; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 answers[60] = choices[60][0];
 units[60] = "86";
 comments[60] = "Id Pregunta: 6620. NULL";


//  Id pregunta: 8334 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[61]= new Array();
 choices[61][0] = "Perfil Jefe de Proyecto.";
 choices[61][1] = "Perfil Consultor. ";
 choices[61][2] = "Perfil Analista.";
 choices[61][3] = "Perfil Programador.";
 answers[61] = choices[61][0];
 units[61] = "86";
 comments[61] = "Id Pregunta: 8334. Examen TIC A2 2010";


//  Id pregunta: 8337 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes tareas NO se engloba, en M&eacute;trica v3, en la actividad de Planificaci&oacute;n de la Interfaz de Gesti&oacute;n de Proyectos?";
 choices[62]= new Array();
 choices[62][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[62][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[62][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios. ";
 choices[62][3] = "Planificaci&oacute;n Detallada de las pruebas del Sistema. ";
 answers[62] = choices[62][3];
 units[62] = "86";
 comments[62] = "Id Pregunta: 8337. Examen TIC A2 2010";


//  Id pregunta: 8374 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos usados en la planificaci&oacute;n de la capacidad de los sistemas inform&aacute;ticos es de tipo anal&iacute;tico?";
 choices[63]= new Array();
 choices[63][0] = "Benchmarking.";
 choices[63][1] = "Teor&iacute;a de colas.";
 choices[63][2] = "Simulaci&oacute;n.";
 choices[63][3] = "Reglas basadas en la experiencia.";
 answers[63] = choices[63][1];
 units[63] = "35,38";
 comments[63] = "Id Pregunta: 8374. Examen TIC A2 2010";


//  Id pregunta: 8393 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo del Software (PUDS)?";
 choices[64]= new Array();
 choices[64][0] = "Se basa en las Historias de Usuario.";
 choices[64][1] = "Proceso centrado en la arquitectura.";
 choices[64][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[64][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[64] = choices[64][1];
 units[64] = "79";
 comments[64] = "Id Pregunta: 8393. Examen TIC A2 2010";


//  Id pregunta: 8516 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[65]= new Array();
 choices[65][0] = "Diagrama de Clases.";
 choices[65][1] = "Flujograma de Sistemas.";
 choices[65][2] = "Flujograma de Programas.";
 choices[65][3] = "Diagrama de Flujo de Datos.";
 answers[65] = choices[65][2];
 units[65] = "86";
 comments[65] = "Id Pregunta: 8516. Examen TIC A2 2010 interna";


//  Id pregunta: 8642 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[66]= new Array();
 choices[66][0] = "Mergesort";
 choices[66][1] = "Bubblesort";
 choices[66][2] = "Quicksort";
 choices[66][3] = "Insertionsort";
 answers[66] = choices[66][2];
 units[66] = "96";
 comments[66] = "Id Pregunta: 8642. Examen TIC A2 2010 interna";


//  Id pregunta: 8648 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de ordenaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "Quicksort.";
 choices[67][1] = "Mergesort.";
 choices[67][2] = "Bubblesort.";
 choices[67][3] = "Middlesort.";
 answers[67] = choices[67][3];
 units[67] = "96";
 comments[67] = "Id Pregunta: 8648. Examen TIC A2 2010 interna";


//  Id pregunta: 8874 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En la tarea &ldquo;Valoraci&oacute;n de los Sistemas de Informaci&oacute;n actuales&rdquo;, encuadrado en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n, participan seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[68]= new Array();
 choices[68][0] = "Consultores y Consultores Inform&aacute;ticos";
 choices[68][1] = "Consultores y Jefes de Proyecto";
 choices[68][2] = "Consultores Inform&aacute;ticos y Usuarios Expertos";
 choices[68][3] = "Analistas y Jefes de Proyecto";
 answers[68] = choices[68][0];
 units[68] = "86";
 comments[68] = "Id Pregunta: 8874. Analista Ayto. Madrid 2010";


//  Id pregunta: 8987 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil?";
 choices[69]= new Array();
 choices[69][0] = "Scrum";
 choices[69][1] = "XP (eXtreme Programming)";
 choices[69][2] = "Getting Real";
 choices[69][3] = "Todas las anteriores";
 answers[69] = choices[69][3];
 units[69] = "79";
 comments[69] = "Id Pregunta: 8987. ";


//  Id pregunta: 9084 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  En relaci&oacute;n a la elaboraci&oacute;n de un Plan de Sistemas de Informaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "El Comit&eacute; de Direcci&oacute;n realiza la programaci&oacute;n, define la administraci&oacute;n, los procedimientos y la organizaci&oacute;n del trabajo.";
 choices[70][1] = "El equipo de proyecto es la instancia que establece las orientaciones del desarrollo con los controles de su realizaci&oacute;n, la validaci&oacute;n de los trabajos efectuados, y la toma de decisiones al final de cada fase del estudio.";
 choices[70][2] = "Es tarea del Comit&eacute; de Direcci&oacute;n asegurarse de la traslaci&oacute;n de la pol&iacute;tica estrat&eacute;gica de la organizaci&oacute;n al plan estrat&eacute;gico de Sistemas de Informaci&oacute;n y las Comunicaciones";
 choices[70][3] = "Todas las anteriores";
 answers[70] = choices[70][2];
 units[70] = "77";
 comments[70] = "Id Pregunta: 9084. ";


//  Id pregunta: 9420 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  El modelo de estimaci&oacute;n de Putnam no se caracteriza por";
 choices[71]= new Array();
 choices[71][0] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[71][1] = "Tener asociada una herramienta automatizada (SLIM)";
 choices[71][2] = "Incluir una constante tecnol&oacute;gica";
 choices[71][3] = "Funcionar en proyectos grandes relativamente peor que en proyectos peque&ntilde;os";
 answers[71] = choices[71][3];
 units[71] = "89";
 comments[71] = "Id Pregunta: 9420. NULL";


//  Id pregunta: 9448 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  En el modelo de ciclo de vida en espiral, dentro de cada ciclo:";
 choices[72]= new Array();
 choices[72][0] = "La dimensi&oacute;n radial representa el avance y la angular el coste.";
 choices[72][1] = "La dimensi&oacute;n radial representa la complejidad y la angular el avance.";
 choices[72][2] = "La dimensi&oacute;n radial representa el coste y la angular la complejidad.";
 choices[72][3] = "La dimensi&oacute;n radial representa el coste y la angular el avance.";
 answers[72] = choices[72][3];
 units[72] = "76";
 comments[72] = "Id Pregunta: 9448. Examen AGE TIC A1 2011";


//  Id pregunta: 9483 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Indique la informaci&oacute;n opcional que se debe registrar de cada requisito";
 choices[73]= new Array();
 choices[73][0] = "C&oacute;digo &uacute;nico";
 choices[73][1] = "Nombre descriptivo";
 choices[73][2] = "Descripci&oacute;n";
 choices[73][3] = "Fecha creaci&oacute;n";
 answers[73] = choices[73][3];
 units[73] = "78";
 comments[73] = "Id Pregunta: 9483. ";


//  Id pregunta: 9652 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Entre las caracter&iacute;sticas del modelo de calidad de la ISO 9126 se encuentran:";
 choices[74]= new Array();
 choices[74][0] = "Funcionalidad";
 choices[74][1] = "Fiabilidad";
 choices[74][2] = "Portabilidad";
 choices[74][3] = "Todas las anteriores";
 answers[74] = choices[74][3];
 units[74] = "87";
 comments[74] = "Id Pregunta: 9652. Son 6, Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad";


//  Id pregunta: 9738 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[75]= new Array();
 choices[75][0] = "Intrastructure e Hiperstructure.";
 choices[75][1] = "Basic y Complex.";
 choices[75][2] = "Infrastructure y Superstructure.";
 choices[75][3] = "Infrastructure y Substructure.";
 answers[75] = choices[75][2];
 units[75] = "82";
 comments[75] = "Id Pregunta: 9738. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9754 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  La tarea de especificaci&oacute;n de necesidades de Migraci&oacute;n en M&eacute;trica v3 se tiene en cuenta en la actividad:";
 choices[76]= new Array();
 choices[76][0] = "Elaboraci&oacute;n del modelo de datos en ASI";
 choices[76][1] = "Dise&ntilde;o de clases en DSI";
 choices[76][2] = "Dise&ntilde;o de la Migraci&oacute;n y carga inicial de datos en DSI";
 choices[76][3] = "A y B son correctas";
 answers[76] = choices[76][3];
 units[76] = "86";
 comments[76] = "Id Pregunta: 9754. Ambas actividades tienen una tarea llamada &quot;Especificaci&oacute;n de necesidades de Migraci&oacute;n y Carga inicial de datos&quot;";


//  Id pregunta: 9903 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Se&ntilde;ale la respuesta correcta relativa al modelo de ciclo de vida en espiral:";
 choices[77]= new Array();
 choices[77][0] = "La dimensi&oacute;n radial mide el grado de avance del proyecto en cada fase y la dimensi&oacute;n angular el coste.";
 choices[77][1] = "Cada ciclo consta de 5 actividades: Determinar objetivos, an&aacute;lisis del riesgo, estimar, planificar y desarrollo-pruebas.";
 choices[77][2] = "Fue propuesto inicialmente por Rutherford.";
 choices[77][3] = "En sistemas peque&ntilde;os es un modelo poco operativo y se desaconseja su uso. Exige de gran experiencia en an&aacute;lisis y resoluci&oacute;n de riesgos.";
 answers[77] = choices[77][3];
 units[77] = "76";
 comments[77] = "Id Pregunta: 9903. TIC A2, Examen 2013";


//  Id pregunta: 9906 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En el modelo CMM (Capability Maturity Model) un grado mayor de madurez al nivel Repetible es:";
 choices[78]= new Array();
 choices[78][0] = "Optimizado";
 choices[78][1] = "Definido";
 choices[78][2] = "Gestionado";
 choices[78][3] = "Inicial";
 answers[78] = choices[78][1];
 units[78] = "87";
 comments[78] = "Id Pregunta: 9906. TIC A2, Examen 2013";


//  Id pregunta: 9909 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Entre los aspectos fundamentales de la Programaci&oacute;n Extrema NO se encuentra:";
 choices[79]= new Array();
 choices[79][0] = "Desarrollo iterativo e incremental.";
 choices[79][1] = "Basada en la planificaci&oacute;n previa.";
 choices[79][2] = "El cliente est&aacute; integrado en el proyecto.";
 choices[79][3] = "Simplicidad en el dise&ntilde;o para agilizar el desarrollo y facilitar el mantenimiento.";
 answers[79] = choices[79][1];
 units[79] = "79";
 comments[79] = "Id Pregunta: 9909. TIC A2, Examen 2013";


//  Id pregunta: 9949 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Cu&aacute;l de las siguientes palabras y acr&oacute;nimos NO est&aacute; relacionado con Metodolog&iacute;as &Aacute;giles para el desarrollo de software:";
 choices[80]= new Array();
 choices[80][0] = "SCRUM ";
 choices[80][1] = "XP ";
 choices[80][2] = "DSDM ";
 choices[80][3] = "AGILD ";
 answers[80] = choices[80][3];
 units[80] = "79";
 comments[80] = "Id Pregunta: 9949. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9978 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En el desarrollo de aplicaciones en .NET Framework disponemos de un Garbage Collector (recolector de basura). Indique cu&aacute;l de las siguientes afirmaciones es FALSA ";
 choices[81]= new Array();
 choices[81][0] = "La liberaci&oacute;n de un objeto en memoria es perfectamente posible sin intervenci&oacute;n expl&iacute;cita por parte del usuario ";
 choices[81][1] = "Para la liberaci&oacute;n expl&iacute;cita de memoria existen m&eacute;todos de finalizaci&oacute;n como Finalize() y Dispose()";
 choices[81][2] = "Se suele utilizar Dispose() cuando el objeto no se va a utilizar m&aacute;s definitivamente ";
 choices[81][3] = "Si se invoca expl&iacute;citamente el m&eacute;todo Dispose() de un objeto, este ser&aacute; liberado inmediatamente ";
 answers[81] = choices[81][3];
 units[81] = "59";
 comments[81] = "Id Pregunta: 9978. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9980 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Para qu&eacute; se usa el framework ASP.NET?";
 choices[82]= new Array();
 choices[82][0] = "Para construir aplicaciones y servicios Web";
 choices[82][1] = "Para conectar las aplicaciones a la base de datos";
 choices[82][2] = "Para construir la interface de usuario";
 choices[82][3] = "Para conectar los programas";
 answers[82] = choices[82][0];
 units[82] = "59.115";
 comments[82] = "Id Pregunta: 9980. TIC A2, UPM, Examen 2010";


//  Id pregunta: 9993 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[83]= new Array();
 choices[83][0] = "Ley 11/2007";
 choices[83][1] = "Real Decreto 1619/2012";
 choices[83][2] = "Ley 25/2013";
 choices[83][3] = "Real Decreto Legislativo 3/2011";
 answers[83] = choices[83][0];
 units[83] = "70";
 comments[83] = "Id Pregunta: 9993. NULL";


//  Id pregunta: 10174 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  UML o Unified Modeling Language&hellip;";
 choices[84]= new Array();
 choices[84][0] = "Fue desarrollado por tres autores conocidos como los &quot;Tres Amigos&quot;";
 choices[84][1] = "No constituye un m&eacute;todo o metodolog&iacute;a de an&aacute;lisis orientado a objetos";
 choices[84][2] = "Est&aacute;ndar actualmente soportado, mantenido y evolucionado por OMG";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][3];
 units[84] = "82";
 comments[84] = "Id Pregunta: 10174. ";


//  Id pregunta: 10175 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Booch, Jacobson y Rumbaugh propusieron de forma conjunta PUDS como marco de trabajo gen&eacute;rico para el desarrollo de software.";
 choices[85]= new Array();
 choices[85][0] = "PUDS propone un proceso iterativo e incremental para el desarrollo de sw. La distribuci&oacute;n de la funcionalidad a implementar en distintos incrementos implica un mayor esfuerzo y dificultad en relaci&oacute;n con la gesti&oacute;n del riesgo. ";
 choices[85][1] = "Cada ciclo de desarrollo comprende varias iteraciones. Cada iteraci&oacute;n se subdivide en 4 fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n y Transici&oacute;n";
 choices[85][2] = "Cada ciclo de desarrollo se subdivide en varias fases o flujos de trabajo fundamentales: planificaci&oacute;n, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n y pruebas y finalmente, evaluaci&oacute;n del ciclo.";
 choices[85][3] = "Los casos de uso gu&iacute;an el proceso de desarrollo, centrando la atenci&oacute;n en lo que el usuario quiere / espera del sistema";
 answers[85] = choices[85][3];
 units[85] = "82";
 comments[85] = "Id Pregunta: 10175. ";


//  Id pregunta: 10177 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[86]= new Array();
 choices[86][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprimer otros";
 choices[86][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[86][2] = "Los lenguajes OO son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[86][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[86] = choices[86][1];
 units[86] = "82";
 comments[86] = "Id Pregunta: 10177. ";


//  Id pregunta: 10183 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el modelo E-R de Chen, las interrelaciones entre entidades se clasifican en unarias, binarias o n-arias en funci&oacute;n del:";
 choices[87]= new Array();
 choices[87][0] = "Grado";
 choices[87][1] = "Tipo de correspondencia";
 choices[87][2] = "Cardinalidad";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][0];
 units[87] = "80";
 comments[87] = "Id Pregunta: 10183. ";


//  Id pregunta: 10445 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para ";
 choices[88]= new Array();
 choices[88][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles. ";
 choices[88][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[88][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[88][3] = "detectar errores de condiciones de carrera (race condition bugs). ";
 answers[88] = choices[88][3];
 units[88] = "88";
 comments[88] = "Id Pregunta: 10445. Examen TIC A1 2013";


//  Id pregunta: 10482 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  El m&eacute;todo SLIM de estimaci&oacute;n de esfuerzo, usa la curva de:";
 choices[89]= new Array();
 choices[89][0] = "F de Snedecor";
 choices[89][1] = "Parkingson";
 choices[89][2] = "Norden-Rayleigh";
 choices[89][3] = "Pareto";
 answers[89] = choices[89][2];
 units[89] = "89";
 comments[89] = "Id Pregunta: 10482. NULL";


//  Id pregunta: 10824 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[90]= new Array();
 choices[90][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[90][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[90][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[90][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[90] = choices[90][0];
 units[90] = "86";
 comments[90] = "Id Pregunta: 10824. Examen GSI 2014";


//  Id pregunta: 10833 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[91]= new Array();
 choices[91][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[91][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[91][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[91][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[91] = choices[91][2];
 units[91] = "80";
 comments[91] = "Id Pregunta: 10833. Examen GSI 2014";


//  Id pregunta: 10845 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[92]= new Array();
 choices[92][0] = "Diagrama de clases.";
 choices[92][1] = "Diagrama de objetos.";
 choices[92][2] = "Diagrama de despliegue.";
 choices[92][3] = "Diagrama de actividades.";
 answers[92] = choices[92][3];
 units[92] = "82, 84";
 comments[92] = "Id Pregunta: 10845. Examen GSI 2014";


//  Id pregunta: 10860 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[93]= new Array();
 choices[93][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[93][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[93][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[93][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[93] = choices[93][1];
 units[93] = "88";
 comments[93] = "Id Pregunta: 10860. Examen GSI 2014";


//  Id pregunta: 10955 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En ITIL V3, &iquest;qu&eacute; es un OLA?";
 choices[94]= new Array();
 choices[94][0] = "Es un contrato entre un proveedor de servicios de TI con un &uacute;nico cliente externo a la organizaci&oacute;n.";
 choices[94][1] = "Es un contrato entre departamentos de una misma organizaci&oacute;n.";
 choices[94][2] = "Es un contrato entre un proveedor de servicios de TI que describe los servicios ofertados a varios clientes externos a la organizaci&oacute;n.";
 choices[94][3] = "Es un contrato entre la administraci&oacute;n y la empresa privada.";
 answers[94] = choices[94][1];
 units[94] = "98";
 comments[94] = "Id Pregunta: 10955. TIC A1 AGE 2014";


//  Id pregunta: 11343 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale la afirmaci&oacute;n falsa de entre las siguientes:";
 choices[95]= new Array();
 choices[95][0] = "Las relaciones regulares son entre dos entidades fuertes";
 choices[95][1] = "La existencia de las entidades fuertes, depende de otra entidad";
 choices[95][2] = "Las entidades pueden ser fuertes o d&eacute;biles";
 choices[95][3] = "Las relaciones d&eacute;biles se producen entre una entidad fuerte y otra d&eacute;bil";
 answers[95] = choices[95][1];
 units[95] = "80";
 comments[95] = "Id Pregunta: 11343. ";


//  Id pregunta: 11384 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones respecto a funciones es correcta?: 1. Pueden incluir herramientas; 2. Son grupos que utilizan recursos para llevar a cabo una o m&aacute;s actividades; 3. Una persona o grupo puede desarrollar m&uacute;ltiples funciones; 4. Son m&aacute;s caras de implantar comparado con los procesos";
 choices[96]= new Array();
 choices[96][0] = "Solo 1, 2 y 3";
 choices[96][1] = "Solo 1, 2 y 4";
 choices[96][2] = "Todas las anteriores";
 choices[96][3] = "Ninguna de las anteriores";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11384. ";


//  Id pregunta: 11397 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la mejor definici&oacute;n de un evento?";
 choices[97]= new Array();
 choices[97][0] = "Una situaci&oacute;n donde un umbral de rendimiento se ha superado y esto impacta a un nivel de servicio acordado";
 choices[97][1] = "Un cambio de estado significativo para la gesti&oacute;n de un servicio TI";
 choices[97][2] = "Un defecto conocido del sistema que genera m&uacute;ltiples incidencias";
 choices[97][3] = "Una reuni&oacute;n planificada entre los clientes y el personal TI para anunciar un servicio nuevo o un programa de mejoras";
 answers[97] = choices[97][1];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11397. ";


//  Id pregunta: 11552 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale cu&aacute;l de las siguientes tareas se realiza en la fase de an&aacute;lisis:";
 choices[98]= new Array();
 choices[98][0] = "Elaboraci&oacute;n del modelo f&iacute;sico de procesos.";
 choices[98][1] = "Identificaci&oacute;n de requisitos funcionales del sistema.";
 choices[98][2] = "Definici&oacute;n de la arquitectura t&eacute;cnica del sistema.";
 choices[98][3] = "Elaboraci&oacute;n del modelo f&iacute;sico de datos.";
 answers[98] = choices[98][1];
 units[98] = "78";
 comments[98] = "Id Pregunta: 11552. NULL";


//  Id pregunta: 11553 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El modelo de estimaci&oacute;n que establece que el esfuerzo de desarrollo de un proyecto Software sigue una distribuci&oacute;n de Rayleigh-Norden es el de:";
 choices[99]= new Array();
 choices[99][0] = "PUTNAM";
 choices[99][1] = "COCOMO";
 choices[99][2] = "WALTSON-FELIX";
 choices[99][3] = "ESTERLING";
 answers[99] = choices[99][0];
 units[99] = "89";
 comments[99] = "Id Pregunta: 11553. NULL";


