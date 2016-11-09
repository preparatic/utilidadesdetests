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

//  Id pregunta: 2000 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En Orientaci&oacute;n a Objetos, &iquest;c&oacute;mo se denomina el concepto por el que el an&aacute;lisis se centra en los aspectos esenciales e inherentes de una entidad, ignorarando sus propiedades accidentales?";
 choices[0]= new Array();
 choices[0][0] = "Abstracci&oacute;n";
 choices[0][1] = "Encapsulaci&oacute;n";
 choices[0][2] = "Persistencia";
 choices[0][3] = "Polimorfismo";
 answers[0] = choices[0][0];
 units[0] = "82";
 comments[0] = "Id Pregunta: 2000. Similar a examen TIC SS A 2003";


//  Id pregunta: 2029 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Ivar Jacobson, Jim Rumbaugh y Grady Booch fueron los creadores de:";
 choices[1]= new Array();
 choices[1][0] = "UML";
 choices[1][1] = "XML";
 choices[1][2] = "HTML";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][0];
 units[1] = "82";
 comments[1] = "Id Pregunta: 2029. Similar a examen TIC SS A 2003";


//  Id pregunta: 2078 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Las actividades propuestas en METRICA V3 para el proceso de Mantenimiento de sistemas de informaci&oacute;n son:";
 choices[2]= new Array();
 choices[2][0] = "Registro de la petici&oacute;n; An&aacute;lisis de la petici&oacute;n; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n; Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n.";
 choices[2][1] = "Registro de la peticici&oacute;n; Identificaci&oacute;n del tipo y origen del mantenimiento; Construcci&oacute;n, Pruebas e Implantaci&oacute;n";
 choices[2][2] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o; Construcci&oacute;n; Pruebas de regresi&oacute;n; Aceptaci&oacute;n.";
 choices[2][3] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o, Construcci&oacute;n, Implantaci&oacute;n; Aceptaci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "86";
 comments[2] = "Id Pregunta: 2078. Pregunta Junta Andalucia - A";


//  Id pregunta: 2094 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El Sistema de Gesti&oacute;n del Diccionario de Recursos de Informaci&oacute;n (SGDRI):";
 choices[3]= new Array();
 choices[3][0] = "Es un componente del Sistema de Gesti&oacute;n de Base de Datos (SGBD) del sistema de informaci&oacute;n";
 choices[3][1] = "Se puede apoyar en el SGBD, en el Sistema de Gesti&oacute;n de Ficheros y en el sistema operativo";
 choices[3][2] = "Permite el almacenamiento de la sintaxis y la sem&aacute;ntica de los diferentes lenguajes que soporta los componentes DRI";
 choices[3][3] = "Describe los datos, componentes f&iacute;sicos y elementos del entorno que integran cada subsistema";
 answers[3] = choices[3][1];
 units[3] = "96";
 comments[3] = "Id Pregunta: 2094. NULL";


//  Id pregunta: 2112 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest; En qu&eacute; consiste la teor&iacute;a de la Calidad/Coste  aplicada a la implantaci&oacute;n de la calidad?:";
 choices[4]= new Array();
 choices[4][0] = "El coste de producci&oacute;n aumenta libremente con el aumento de la calidad";
 choices[4][1] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de la calidad";
 choices[4][2] = "El coste de producci&oacute;n aumenta linealmente con el aumento de la calidad";
 choices[4][3] = "El coste de producci&oacute;n aumenta diferencialmente con el aumento de la calidad";
 answers[4] = choices[4][1];
 units[4] = "88";
 comments[4] = "Id Pregunta: 2112. ";


//  Id pregunta: 2115 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Bajo qu&eacute; normas de la serie ISO-9000 puede certificarse una empresa?:";
 choices[5]= new Array();
 choices[5][0] = "9001, 9002 y 9003";
 choices[5][1] = "S&oacute;lo 9001";
 choices[5][2] = "9000, 9001, 9002, 9003 y 9004";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = choices[5][1];
 units[5] = "92";
 comments[5] = "Id Pregunta: 2115. NULL";


//  Id pregunta: 2152 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es un elemento del modelo EFQM?";
 choices[6]= new Array();
 choices[6][0] = "Impacto en la sociedad";
 choices[6][1] = "Control del dise&ntilde;o";
 choices[6][2] = "Satisfacci&oacute;n del cliente";
 choices[6][3] = "Recursos";
 answers[6] = choices[6][1];
 units[6] = "92";
 comments[6] = "Id Pregunta: 2152. NULL";


//  Id pregunta: 2157 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes nombres no se corresponde con el de una metodolog&iacute;a de desarrollo de equipos l&oacute;gicos?:";
 choices[7]= new Array();
 choices[7][0] = "MERISE";
 choices[7][1] = "SSADM";
 choices[7][2] = "SDM";
 choices[7][3] = "METHOD-1";
 answers[7] = choices[7][3];
 units[7] = "79";
 comments[7] = "Id Pregunta: 2157. ";


//  Id pregunta: 2246 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Del modelo de ciclo de vida en cascada se puede decir:";
 choices[8]= new Array();
 choices[8][0] = "Es un modelo que evoluciona en funci&oacute;n del grado de terminaci&oacute;n del proceso";
 choices[8][1] = "Es un modelo te&oacute;rico, dif&iacute;cil de cumplir porque necesita terminar una fase antes de comenzar la siguiente";
 choices[8][2] = "Es una particularizaci&oacute;n del ciclo de vida en espiral";
 choices[8][3] = "Normalmente va ligado al uso de prototipos";
 answers[8] = choices[8][1];
 units[8] = "76";
 comments[8] = "Id Pregunta: 2246. ";


//  Id pregunta: 2257 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dentro del Plan General de Calidad para el desarrollo de aplicaciones inform&aacute;ticas se distinguen dos bloques tem&aacute;ticos, con un contenido diferente pero complementario, a saber:";
 choices[9]= new Array();
 choices[9][0] = "Bloque metodol&oacute;gico y Bloque procedimental";
 choices[9][1] = "Bloque metodol&oacute;gico y Bloque instrumental";
 choices[9][2] = "Bloque l&oacute;gico y Bloque procedimental";
 choices[9][3] = "Bloque l&oacute;gico y Bloque instrumental";
 answers[9] = choices[9][1];
 units[9] = "92";
 comments[9] = "Id Pregunta: 2257. NULL";


//  Id pregunta: 2269 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de:";
 choices[10]= new Array();
 choices[10][0] = "La planificaci&oacute;n operativa";
 choices[10][1] = "El control anal&iacute;tico del gasto";
 choices[10][2] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[10][3] = "La previsi&oacute;n de beneficios";
 answers[10] = choices[10][0];
 units[10] = "77";
 comments[10] = "Id Pregunta: 2269. ";


//  Id pregunta: 2304 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En an&aacute;lisis estructurado, una definici&oacute;n de Historia de la Vida de las Entidades (HVE) es:";
 choices[11]= new Array();
 choices[11][0] = "Su principal objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[11][1] = "Su principal objetivo es la representaci&oacute;n gr&aacute;fica de las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[11][2] = "Su principal objetivo es describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[11][3] = "Su principal objetivo consiste en establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[11] = choices[11][2];
 units[11] = "81";
 comments[11] = "Id Pregunta: 2304. ";


//  Id pregunta: 2341 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En orientaci&oacute;n a objetos, &iquest;c&oacute;mo se define la cohesi&oacute;n fuerte?:";
 choices[12]= new Array();
 choices[12][0] = "Aislamiento de los m&eacute;todos de una clase frente a las dem&aacute;s";
 choices[12][1] = "Los operadores que aparecen en la interfaz son los &uacute;nicos que pueden acceder o alterar los datos internos a la clase";
 choices[12][2] = "Es la medida en la que las tareas que desempe&ntilde;a una clase est&aacute;n estrechamente relacionadas";
 choices[12][3] = "Ninguna de las anteriores define la cohesi&oacute;n";
 answers[12] = choices[12][2];
 units[12] = "82";
 comments[12] = "Id Pregunta: 2341. ";


//  Id pregunta: 2379 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Hist&oacute;ricamente, el primer modelo de desarrollo de software fue:";
 choices[13]= new Array();
 choices[13][0] = "Cascada";
 choices[13][1] = "Code and Fix";
 choices[13][2] = "En espiral";
 choices[13][3] = "Desarrollo de prototipos";
 answers[13] = choices[13][1];
 units[13] = "76";
 comments[13] = "Id Pregunta: 2379. ";


//  Id pregunta: 2405 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; es postcript?:";
 choices[14]= new Array();
 choices[14][0] = "Un formato de datos para las impresoras";
 choices[14][1] = "Un est&aacute;ndar de comunicaci&oacute;n con perif&eacute;ricos de impresi&oacute;n";
 choices[14][2] = "Un lenguaje de especificaci&oacute;n de documentos";
 choices[14][3] = "Nada de lo anterior";
 answers[14] = choices[14][2];
 units[14] = "93";
 comments[14] = "Id Pregunta: 2405. NULL";


//  Id pregunta: 2414 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El algoritmo de Viterbi para reconocimiento de voz es del tipo:";
 choices[15]= new Array();
 choices[15][0] = "Patrones de comparaci&oacute;n (pattern matching)";
 choices[15][1] = "HMM";
 choices[15][2] = "Modelos de Markov ocultos";
 choices[15][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[15] = choices[15][3];
 units[15] = "94";
 comments[15] = "Id Pregunta: 2414. ";


//  Id pregunta: 2448 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Las secuencias de ejecuci&oacute;n de los programas, el espacio requerido, memoria que utilizan&hellip;, son definidos en los:";
 choices[16]= new Array();
 choices[16][0] = "Manuales de procedimientos";
 choices[16][1] = "Manuales de usuarios";
 choices[16][2] = "Manuales de explotaci&oacute;n";
 choices[16][3] = "Manuales de contingencias";
 answers[16] = choices[16][2];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2448. NULL";


//  Id pregunta: 2471 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  No es un tipo de prueba:";
 choices[17]= new Array();
 choices[17][0] = "Pruebas individuales";
 choices[17][1] = "Pruebas unitarias";
 choices[17][2] = "Pruebas de Aceptaci&oacute;n";
 choices[17][3] = "Pruebas de Regresi&oacute;n";
 answers[17] = choices[17][0];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2471. NULL";


//  Id pregunta: 2482 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Respecto a la evaluaci&oacute;n realizada por COCOMO, &iquest;cu&aacute;l es la afirmaci&oacute;n falsa?:";
 choices[18]= new Array();
 choices[18][0] = "Se incluye s&oacute;lamente la parte de construcci&oacute;n del sistema y de integraci&oacute;n y pruebas";
 choices[18][1] = "No incluye la parte de formaci&oacute;n de los usuarios";
 choices[18][2] = "No incluye las conversiones";
 choices[18][3] = "No incluye los esfuerzos de planificaci&oacute;n de la instalaci&oacute;n";
 answers[18] = choices[18][0];
 units[18] = "89";
 comments[18] = "Id Pregunta: 2482. NULL";


//  Id pregunta: 2495 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;Las relaciones de un diagrama de clases pueden ser&quot;:";
 choices[19]= new Array();
 choices[19][0] = "Agregaci&oacute;n.";
 choices[19][1] = "Coherencia.";
 choices[19][2] = "Herencia.";
 choices[19][3] = "Dependencia.";
 answers[19] = choices[19][1];
 units[19] = "82,84";
 comments[19] = "Id Pregunta: 2495. ";


//  Id pregunta: 2501 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Sobre la cardinalidad de un tipo entidad podemos decir:";
 choices[20]= new Array();
 choices[20][0] = "Es el n&uacute;mero de ocurrencias de un tipo de entidad que se pueden interrelacionar con cada ocurrencia de los otros tipos de entidad en un determinado tipo de interrelaci&oacute;n";
 choices[20][1] = "Se habla de una cardinalidad m&aacute;xima y m&iacute;nima";
 choices[20][2] = "En las interrelaciones binarias el tipo de correspondencia se deduce directamente a partir de los tipos de entidad involucrada";
 choices[20][3] = "Todas las respuestas anteriores son ciertas";
 answers[20] = choices[20][3];
 units[20] = "80";
 comments[20] = "Id Pregunta: 2501. ";


//  Id pregunta: 2524 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Qu&eacute; desventaja tiene el formato de im&aacute;genes JPEG?:";
 choices[21]= new Array();
 choices[21][0] = "La imagen pierde informaci&oacute;n cuando se comprime";
 choices[21][1] = "La magnitud de compresi&oacute;n es peque&ntilde;a y ocupa demasiado espacio de disco";
 choices[21][2] = "Todos los programas que brindan soporte al formato JPEG han de pagar por el uso de la licencia del algoritmo de compresi&oacute;n que utiliza";
 choices[21][3] = "No tiene ninguna desventaja";
 answers[21] = choices[21][0];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2524. NULL";


//  Id pregunta: 2533 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En una base de datos documental, se denomina '&iacute;ndice de retorno' a:";
 choices[22]= new Array();
 choices[22][0] = "La relaci&oacute;n entre el n&uacute;mero de documentos relevantes en la base de datos frente a los documentos relevantes recuperados";
 choices[22][1] = "La inversa del &iacute;ndice de precisi&oacute;n";
 choices[22][2] = "La relaci&oacute;n entre el n&uacute;mero de documentos recuperados frente al n&uacute;mero total de documentos recuperados";
 choices[22][3] = "La relaci&oacute;n entre el n&uacute;mero de documentos relevantes recuperados frente a los documentos relevantes en la base de datos";
 answers[22] = choices[22][3];
 units[22] = "94";
 comments[22] = "Id Pregunta: 2533. ";


//  Id pregunta: 2574 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[23]= new Array();
 choices[23][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[23][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[23][2] = "El coste es constante e independiente de la calidad del producto";
 choices[23][3] = "Ninguna de ellas";
 answers[23] = choices[23][0];
 units[23] = "87,88,92";
 comments[23] = "Id Pregunta: 2574. ";


//  Id pregunta: 2648 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En la fase de an&aacute;lisis de Metrica v3 se puede afirmar";
 choices[24]= new Array();
 choices[24][0] = "Las fases de de an&aacute;lisis de consistencia y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[24][1] = "Las fases de de an&aacute;lisis de casos de uso y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[24][2] = "Las fases de de an&aacute;lisis de casos de uso y an&aacute;lisis de consistenacia se pueden hacer de forma paralela";
 choices[24][3] = "Las fases de definici&oacute;n del sistema y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 answers[24] = choices[24][1];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2648. NULL";


//  Id pregunta: 2656 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Relativo a las clases en OO, cuando dos subtipos se unen para crear una clase superior, se produce:";
 choices[25]= new Array();
 choices[25][0] = "Asociaci&oacute;n";
 choices[25][1] = "Agrupaci&oacute;n";
 choices[25][2] = "Agregaci&oacute;n";
 choices[25][3] = "Generalizaci&oacute;n";
 answers[25] = choices[25][3];
 units[25] = "82";
 comments[25] = "Id Pregunta: 2656. ";


//  Id pregunta: 2667 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  En este nivel se extraen los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos:";
 choices[26]= new Array();
 choices[26][0] = "Nivel fon&eacute;tico distintivo.";
 choices[26][1] = "Nivel pros&oacute;dico.";
 choices[26][2] = "Nivel l&eacute;xico-sint&aacute;ctico.";
 choices[26][3] = "Nivel ac&uacute;stico.";
 answers[26] = choices[26][2];
 units[26] = "94";
 comments[26] = "Id Pregunta: 2667. ";


//  Id pregunta: 2677 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  En un Sistema de Gesti&oacute;n Documental:";
 choices[27]= new Array();
 choices[27][0] = "El escaneado produce una imagen del documento que se almacena en el sistema.";
 choices[27][1] = "Ficheros originariamente en formatos de procesador de texto u hoja de c&aacute;lculo se convierten a imagen, generando una imagen inalterable del documento electr&oacute;nico original.";
 choices[27][2] = "Ficheros gr&aacute;ficos, de audio o video pueden ser tambi&eacute;n importados aun sistema de gesti&oacute;n documental. En estos casos, se mantienen en su formato nativo y para abrirlos se necesita un programa compatible con ese formato.";
 choices[27][3] = "Todas las anteriores son ciertas.";
 answers[27] = choices[27][3];
 units[27] = "95";
 comments[27] = "Id Pregunta: 2677. NULL";


//  Id pregunta: 2684 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  La copia de seguridad intermedia se utiliza:";
 choices[28]= new Array();
 choices[28][0] = "Para restaurar los archivos y carpetas a partir de la &uacute;ltima copia de seguridad normal y la mencinada copia.";
 choices[28][1] = "Cuando se desea hacer copias de seguridad de archivos entre copias de seguridad normales e incrementales, ya que no afecta a estas operaciones.";
 choices[28][2] = "Cuando se usa una combinaci&oacute;n de copias de seguridad normales e incrementales, ya que la restauraci&oacute;n de los datos debe realizarse con la &uacute;ltima copia de seguridad normal y todas las copias de seguridad intermedias.";
 choices[28][3] = "Cuando s&oacute;lo necesita la copia m&aacute;s reciente del archivo o la cinta que contiene la copia de seguridad para restaurar todos los archivos.";
 answers[28] = choices[28][1];
 units[28] = "96";
 comments[28] = "Id Pregunta: 2684. NULL";


//  Id pregunta: 2688 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  En METRICA v3, la actividad de &quot;Estudio de alternativas de soluci&oacute;n&quot; pertenece al proceso ...";
 choices[29]= new Array();
 choices[29][0] = "PSI (Planificaci&oacute;n de Sistemas de Informaci&oacute;n)";
 choices[29][1] = "EVS (Estudio de Viabilidad del Sistema)";
 choices[29][2] = "ASI (An&aacute;lisis del Sistema de Informaci&oacute;n)";
 choices[29][3] = "DSI (Dise&ntilde;o del Sistema de Informaci&oacute;n)";
 answers[29] = choices[29][1];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2688. NULL";


//  Id pregunta: 2706 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Son roles en un sistema gestor de contenidos:";
 choices[30]= new Array();
 choices[30][0] = "Autores.";
 choices[30][1] = "Publicador.";
 choices[30][2] = "Todas las anteriores.";
 choices[30][3] = "Ninguna de las anteriores.";
 answers[30] = choices[30][2];
 units[30] = "95";
 comments[30] = "Id Pregunta: 2706. NULL";


//  Id pregunta: 2742 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[31]= new Array();
 choices[31][0] = "No tiene grupos repetitivos";
 choices[31][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[31][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[31][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[31] = choices[31][1];
 units[31] = "58";
 comments[31] = "Id Pregunta: 2742. ";


//  Id pregunta: 2755 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Qu&eacute; se entiende por diagrama de despliegue en UML?";
 choices[32]= new Array();
 choices[32][0] = "Mostrar las relaciones f&iacute;sicas entre los componenetes del  sistema a desarrollar.";
 choices[32][1] = "Mostrar las relaciones entre procesos.";
 choices[32][2] = "Describir el comportamiento din&aacute;mico del sistema.";
 choices[32][3] = "Describir el comportamineto dinamico haciendo enfasis en los mensajes intercambiados.";
 answers[32] = choices[32][0];
 units[32] = "82";
 comments[32] = "Id Pregunta: 2755. ";


//  Id pregunta: 2781 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  El prototipado cl&aacute;sico, &iquest;en qu&eacute; fases del proyecto se aplica?";
 choices[33]= new Array();
 choices[33][0] = "En la fase de especificaci&oacute;n de requisitos";
 choices[33][1] = "En el dise&ntilde;o del sistema";
 choices[33][2] = "a) y b) son correctas";
 choices[33][3] = "Se aplica en todas las fases expecto implantaci&oacute;n y mantenimiento";
 answers[33] = choices[33][0];
 units[33] = "85";
 comments[33] = "Id Pregunta: 2781. ";


//  Id pregunta: 2795 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Qu&eacute; actividades componen la Interfaz de Gesti&oacute;n de proyectos en M&eacute;trica v3";
 choices[34]= new Array();
 choices[34][0] = "Inicio del proyecto, seguimiento y control, Finalizaci&oacute;n y registro del proyecto";
 choices[34][1] = "Planificaci&oacute;n de la calidad, Seguimiento y control, Finalizaci&oacute;n del proyecto";
 choices[34][2] = "Inicio del proyecto, seguimiento y supervisi&oacute;n, cierre del proyecto";
 choices[34][3] = "Inicio del proyecto, seguimiento y control y Finalizaci&oacute;n del proyecto";
 answers[34] = choices[34][3];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2795. NULL";


//  Id pregunta: 2816 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Las tres versiones del modelo COCOMO-2000 son:";
 choices[35]= new Array();
 choices[35][0] = "1) Modelo de composici&oacute;n de la arquitectura 2) Modelo de Dise&ntilde;o Preliminar 3) Modelo Post-Arquitectura.";
 choices[35][1] = "1) Modelo de composici&oacute;n de aplicaciones 2) Modelo de Dise&ntilde;o Preliminar 3) Modelo Post-Arquitectura.";
 choices[35][2] = "1) Modelo de composici&oacute;n de aplicaciones 2) Modelo de An&aacute;lisis Preliminar 3) Modelo Post-Arquitectura.";
 choices[35][3] = "1) Modelo de composici&oacute;n de la arquitectura 2) Modelo de An&aacute;lisis Preliminar 3) Modelo Post-Arquitectura.";
 answers[35] = choices[35][1];
 units[35] = "89";
 comments[35] = "Id Pregunta: 2816. NULL";


//  Id pregunta: 2820 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el m&eacute;todo de Puntos de Funci&oacute;n de Albretch se consideran cinco par&aacute;metros entre los cu&aacute;les est&aacute;n";
 choices[36]= new Array();
 choices[36][0] = "Ficheros l&oacute;gicos externos";
 choices[36][1] = "Salidas internas";
 choices[36][2] = "Ficheros de interfaz externos";
 choices[36][3] = "Consultas internas";
 answers[36] = choices[36][2];
 units[36] = "89";
 comments[36] = "Id Pregunta: 2820. NULL";


//  Id pregunta: 2826 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes no es una causa del fracaso en la migraci&oacute;n de un sistema?";
 choices[37]= new Array();
 choices[37][0] = "Excesivo coste econ&oacute;mico.";
 choices[37][1] = "Falta de planificaci&oacute;n de la migraci&oacute;n.";
 choices[37][2] = "Falta de formaci&oacute;n a usuarios finales.";
 choices[37][3] = "Todas son causas de fracaso.";
 answers[37] = choices[37][0];
 units[37] = "90";
 comments[37] = "Id Pregunta: 2826. ";


//  Id pregunta: 2831 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  La ingenier&iacute;a inversa:";
 choices[38]= new Array();
 choices[38][0] = "Seg&uacute;n el IEEE, es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original a un mayor nivel de abstracci&oacute;n";
 choices[38][1] = "Es sin&oacute;nimo de Reingenier&iacute;a";
 choices[38][2] = "Es sin&oacute;nimo de Forward Engineering";
 choices[38][3] = "El IEEE no proporciona una definici&oacute;n de Ingenier&iacute;a Inversa";
 answers[38] = choices[38][0];
 units[38] = "91";
 comments[38] = "Id Pregunta: 2831. NULL";


//  Id pregunta: 4376 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  En el an&aacute;lisis de sistemas, el m&eacute;todo de Abbott:";
 choices[39]= new Array();
 choices[39][0] = "Consiste en descomponer el problema utilizando los primeros niveles del refinamiento.";
 choices[39][1] = "Construye una estructura similar a la de los datos de entrada-salida.";
 choices[39][2] = "Identifica un flujo global desde los elementos de entrada a los de salida.";
 choices[39][3] = "Sistematiza la forma de reconocer las abstracciones.";
 answers[39] = choices[39][3];
 units[39] = "80";
 comments[39] = "Id Pregunta: 4376. ";


//  Id pregunta: 4445 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Indique el apartado que no debe incluir necesariamente el manual de calidad que Ia organizaci&oacute;n debe establecer y mantener, seg&uacute;n la norma ISO 9001.";
 choices[40]= new Array();
 choices[40][0] = "Las declaraciones documentadas de la pol&iacute;tica de calidad y de objetivos de la calidad.";
 choices[40][1] = "El alcance del sistema de gesti&oacute;n de calidad.";
 choices[40][2] = "Los procedimientos documentados establecidos para el sistema de gesti&oacute;n de calidad.";
 choices[40][3] = "La descripci&oacute;n de Ia interacci&oacute;n entre los procesos del sistema de gesti&oacute;n de calidad.";
 answers[40] = choices[40][0];
 units[40] = "92";
 comments[40] = "Id Pregunta: 4445. NULL";


//  Id pregunta: 4452 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cual es el miembro espa&ntilde;ol de ISO?";
 choices[41]= new Array();
 choices[41][0] = "IRANOR";
 choices[41][1] = "AENOR";
 choices[41][2] = "UNE";
 choices[41][3] = "CSl";
 answers[41] = choices[41][1];
 units[41] = "42";
 comments[41] = "Id Pregunta: 4452. ";


//  Id pregunta: 4462 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;En qu&eacute; modelo de representaci&oacute;n de datos espaciales las distintas unidades tem&aacute;ticas se definen por las coordenadas de sus bordes?";
 choices[42]= new Array();
 choices[42][0] = "R&aacute;ster.";
 choices[42][1] = "Vectorial.";
 choices[42][2] = "Sinusoidal.";
 choices[42][3] = "Vertical.";
 answers[42] = choices[42][1];
 units[42] = "67";
 comments[42] = "Id Pregunta: 4462. NULL";


//  Id pregunta: 4641 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En UML la forma especial de asociaci&oacute;n que especifica una relaci&oacute;n todo-parte entre el agregado y un componente se denomina";
 choices[43]= new Array();
 choices[43][0] = "agregaci&oacute;n";
 choices[43][1] = "generalizaci&oacute;n";
 choices[43][2] = "dependencia";
 choices[43][3] = "asociaci&oacute;n fuerte";
 answers[43] = choices[43][0];
 units[43] = "";
 comments[43] = "Id Pregunta: 4641. ";


//  Id pregunta: 4754 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l es el est&aacute;ndar en gesti&oacute;n de servicios de TI compatible con ITIL (IT Infrastructure Library)?";
 choices[44]= new Array();
 choices[44][0] = "ISO/IEC 20000";
 choices[44][1] = "ISO/IEC 6592";
 choices[44][2] = "ETSI TS 125 308";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][0];
 units[44] = "98";
 comments[44] = "Id Pregunta: 4754. NULL";


//  Id pregunta: 4833 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &quot;Gesti&oacute;n de la Tecnolog&iacute;a&quot; pertenece al criterio:";
 choices[45]= new Array();
 choices[45][0] = "Alianzas y Recursos";
 choices[45][1] = "Pol&iacute;tica y Estrategia";
 choices[45][2] = "Procesos";
 choices[45][3] = "Resultados Clave";
 answers[45] = choices[45][0];
 units[45] = "92";
 comments[45] = "Id Pregunta: 4833. NULL";


//  Id pregunta: 4874 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[46]= new Array();
 choices[46][0] = "La preferencia local";
 choices[46][1] = "El agregado at&oacute;mico";
 choices[46][2] = "El pr&oacute;ximo salto";
 choices[46][3] = "El agregador";
 answers[46] = choices[46][2];
 units[46] = "102";
 comments[46] = "Id Pregunta: 4874. ";


//  Id pregunta: 4994 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &quot;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&quot;?";
 choices[47]= new Array();
 choices[47][0] = "Desarrollo de sistemas de informaci&oacute;n";
 choices[47][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[47][2] = "An&aacute;lisis de sistema de informaci&oacute;n";
 choices[47][3] = "Mantenimiento de sistemas de informaci&oacute;n";
 answers[47] = choices[47][0];
 units[47] = "86";
 comments[47] = "Id Pregunta: 4994. Examen TIC A 2007";


//  Id pregunta: 5147 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas se utilizan en la actividad ASI 7 (Elaboraci&oacute;n del Modelo de Procesos) seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3?";
 choices[48]= new Array();
 choices[48][0] = "Diagrama de Flujo de Datos y Matricial.";
 choices[48][1] = "Casos de Uso y Catalogaci&oacute;n.";
 choices[48][2] = "Normalizaci&oacute;n y Prototipado.";
 choices[48][3] = "C&aacute;lculo de Accesos L&oacute;gicos y Diagrama de Clases.";
 answers[48] = choices[48][0];
 units[48] = "86";
 comments[48] = "Id Pregunta: 5147. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5209 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Entre los beneficios del Ajuste Dimensional encontramos:";
 choices[49]= new Array();
 choices[49][0] = "Mayores costes.";
 choices[49][1] = "Tiempo de respuesta inconsistente.";
 choices[49][2] = "Integridad de datos.";
 choices[49][3] = "Interfaz de usuario m&aacute;s compleja.";
 answers[49] = choices[49][2];
 units[49] = "90";
 comments[49] = "Id Pregunta: 5209. ";


//  Id pregunta: 5229 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Respecto al prototipado r&aacute;pido es incorrecto:";
 choices[50]= new Array();
 choices[50][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[50][1] = "Tambi&eacute;n denominados de usar y tirar, ya que una vez aceptado el prototipo se desecha y se comienza el desarrollo desde cero.";
 choices[50][2] = "Se deben poder construir con facilidad para evaluarlos en una fase temprana del desarrollo";
 choices[50][3] = "Deben ser desarrollados en poco tiempo";
 answers[50] = choices[50][0];
 units[50] = "76";
 comments[50] = "Id Pregunta: 5229. ";


//  Id pregunta: 5233 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indicar la opci&oacute;n incorrecta en relaci&oacute;n a los modelos basados en transformaciones:";
 choices[51]= new Array();
 choices[51][0] = "El modelo de transformaci&oacute;n asume la posibilidad de convertir autom&aacute;ticamente una especificaci&oacute;n formal de un producto software en un programa que satisface las especificaciones.";
 choices[51][1] = "Dentro de este tipo de modelos se encuentran los basados en t&eacute;cnicas de cuarta generaci&oacute;n (Roger Pressman) y los basados en modelos de transformaci&oacute;n (Carma McClure)";
 choices[51][2] = "Los que usan t&eacute;cnicas de cuarta generaci&oacute;n (Roger Pressman) se basan en herramientas Case.";
 choices[51][3] = "Las posibilidades de transformaci&oacute;n autom&aacute;ticas s&oacute;lo disponible para productos peque&ntilde;os aplicados a &aacute;reas limitadas";
 answers[51] = choices[51][2];
 units[51] = "76";
 comments[51] = "Id Pregunta: 5233. ";


//  Id pregunta: 5234 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al proceso unificado desarrollo de software (PUDS):";
 choices[52]= new Array();
 choices[52][0] = "Plantea un modelo de ciclo de vida iterativo e incremental, centrado en una arquitectura que gu&iacute;a el desarrollo del sistema.";
 choices[52][1] = "PUDS impulsa un control de calidad y una gesti&oacute;n de riesgos objetivos y continua.";
 choices[52][2] = "PUDS se compone de fases, iteraciones y ciclos";
 choices[52][3] = "Todas las anteriores son correctas";
 answers[52] = choices[52][3];
 units[52] = "76";
 comments[52] = "Id Pregunta: 5234. ";


//  Id pregunta: 5478 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cual de los siguientes factores de calidad es el m&aacute;s importante?";
 choices[53]= new Array();
 choices[53][0] = "Oportunidad";
 choices[53][1] = "Correcci&oacute;n";
 choices[53][2] = "Extensibilidad";
 choices[53][3] = "Modularidad";
 answers[53] = choices[53][3];
 units[53] = "88";
 comments[53] = "Id Pregunta: 5478. Castilla y Le&oacute;n";


//  Id pregunta: 5479 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[54]= new Array();
 choices[54][0] = "Liderazgo";
 choices[54][1] = "Oportunidad";
 choices[54][2] = "Satisfacci&oacute;n del cliente";
 choices[54][3] = "Satisfacer los requisitos";
 answers[54] = choices[54][0];
 units[54] = "88";
 comments[54] = "Id Pregunta: 5479. Castilla y Le&oacute;n";


//  Id pregunta: 5523 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  La norma para las medidas de la resoluci&oacute;n en c&aacute;maras electr&oacute;nicas es";
 choices[55]= new Array();
 choices[55][0] = "ISO 12233";
 choices[55][1] = "ISO 20000";
 choices[55][2] = "IEEE 12333";
 choices[55][3] = "ANSI 568";
 answers[55] = choices[55][0];
 units[55] = "93";
 comments[55] = "Id Pregunta: 5523. NULL";


//  Id pregunta: 5904 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[56]= new Array();
 choices[56][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n";
 choices[56][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n";
 choices[56][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n";
 choices[56][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n";
 answers[56] = choices[56][1];
 units[56] = "87";
 comments[56] = "Id Pregunta: 5904. MAP 2008 A1";


//  Id pregunta: 5975 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Suponga que dos sistemas A y B est&aacute;n conectados mediante un enlace transcontinental de capacidad C=64 Mbps y retardo de propagaci&oacute;n Rp=2 ms. A comienza a transmitir a B un fichero de 15 MB. &iquest;Cu&aacute;ntos octetos ha transmitido A cuando el primer bit de la transmisi&oacute;n llega a B?";
 choices[57]= new Array();
 choices[57][0] = "128.000.";
 choices[57][1] = "32.000.";
 choices[57][2] = "16.000.";
 choices[57][3] = "4.000.";
 answers[57] = choices[57][2];
 units[57] = "99";
 comments[57] = "Id Pregunta: 5975. TIC A 2009";


//  Id pregunta: 6008 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[58]= new Array();
 choices[58][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[58][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[58][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[58][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[58] = choices[58][1];
 units[58] = "78";
 comments[58] = "Id Pregunta: 6008. TIC A 2009";


//  Id pregunta: 6213 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[59]= new Array();
 choices[59][0] = "Diagrama de Componentes";
 choices[59][1] = "Diagrama de Descomposici&oacute;n";
 choices[59][2] = "Diagrama de Despliegue";
 choices[59][3] = "Diagrama de Estructura";
 answers[59] = choices[59][2];
 units[59] = "82";
 comments[59] = "Id Pregunta: 6213. TICB-2009, bloque desarrollo";


//  Id pregunta: 6310 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de dise&ntilde;o de sistemas de tiempo real?";
 choices[60]= new Array();
 choices[60][0] = "Rational Rose-RT.";
 choices[60][1] = "PERTS.";
 choices[60][2] = "TimeWiz.";
 choices[60][3] = "ADA.";
 answers[60] = choices[60][3];
 units[60] = "83";
 comments[60] = "Id Pregunta: 6310. ";


//  Id pregunta: 6312 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  No es un tipo de acoplamiento:";
 choices[61]= new Array();
 choices[61][0] = "Acoplamiento com&uacute;n.";
 choices[61][1] = "Acoplamiento normal.";
 choices[61][2] = "Acoplamiento de contenido.";
 choices[61][3] = "Todos lo son.";
 answers[61] = choices[61][3];
 units[61] = "84";
 comments[61] = "Id Pregunta: 6312. ";


//  Id pregunta: 6619 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Seg&uacute;n M&eacute;trica la Definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales:";
 choices[62]= new Array();
 choices[62][0] = "Se realiza en el proceso de An&aacute;lisis (ASI), conjuntamente con el Plan de Pruebas";
 choices[62][1] = "Se realiza en el proceso de Dise&ntilde;o (DSI), cuando se establecen los Requisitos de Implantaci&oacute;n";
 choices[62][2] = "Se realiza en el proceso de Construcci&oacute;n (CSI), en paralelo a la ejecuci&oacute;n de las Pruebas del Sistema";
 choices[62][3] = "Se realiza en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n (IAS), antes de las Pruebas de Aceptaci&oacute;n";
 answers[62] = choices[62][2];
 units[62] = "86";
 comments[62] = "Id Pregunta: 6619. NULL";


//  Id pregunta: 6624 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes NO es una norma aplicable a la Calidad del Software?";
 choices[63]= new Array();
 choices[63][0] = "ISO 15.504";
 choices[63][1] = "ISO 19011";
 choices[63][2] = "ISO 9000:2000";
 choices[63][3] = "ISO 15.408";
 answers[63] = choices[63][3];
 units[63] = "87";
 comments[63] = "Id Pregunta: 6624. NULL";


//  Id pregunta: 6631 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Hablando en calidad de Software de SPICE, decir cual de las siguientes afirmaciones NO es cierta:";
 choices[64]= new Array();
 choices[64][0] = "SPICE es un est&aacute;ndar internacional de evaluaci&oacute;n y determinaci&oacute;n de la capacidad ymejora continua de procesos de ingenier&iacute;a del software";
 choices[64][1] = "SPICE absorbe la escala de puntuaci&oacute;n de capacidad de CMM y el ciclo de vida de ISO 12207";
 choices[64][2] = "Se corresponde con la norma ISO/IEC 15054";
 choices[64][3] = "Absorbe la representaci&oacute;n de capacidad basada en perfiles de atributos de BOOTSTRAP";
 answers[64] = choices[64][2];
 units[64] = "87";
 comments[64] = "Id Pregunta: 6631. NULL";


//  Id pregunta: 6632 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[65]= new Array();
 choices[65][0] = "Si aumenta la calidad del producto, los costes de la no-calidad disminuyen";
 choices[65][1] = "Si aumenta la calidad del producto, los costes de la no-calidad aumentan";
 choices[65][2] = "Si aumenta la calidad del producto, el coste del sistema de calidad no aumenta";
 choices[65][3] = "Si aumenta la calidad del producto, el coste del sistema de calidad disminuye";
 answers[65] = choices[65][0];
 units[65] = "87";
 comments[65] = "Id Pregunta: 6632. NULL";


//  Id pregunta: 6634 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Entre los distintos modelos de calidad NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "FURPS (Funcionality, Usability, Reliability, Performance, Supportability)";
 choices[66][1] = "McCall";
 choices[66][2] = "EFQM (European Foundation for Quality Management)";
 choices[66][3] = "EQAM (European Quality Assurance Method)";
 answers[66] = choices[66][3];
 units[66] = "88";
 comments[66] = "Id Pregunta: 6634. NULL";


//  Id pregunta: 7777 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS:";
 choices[67]= new Array();
 choices[67][0] = " Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n.";
 choices[67][1] = " Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros.";
 choices[67][2] = " Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros.";
 choices[67][3] = " Proporciona transparencia de la replicaci&oacute;n.";
 answers[67] = choices[67][1];
 units[67] = "54";
 comments[67] = "Id Pregunta: 7777. Map 2005";


//  Id pregunta: 8180 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El manifiesto por un desarrollo de software &aacute;gil (Manifesto for Agile Software Development) da m&aacute;s valor a:";
 choices[68]= new Array();
 choices[68][0] = "Los individuos y sus interacciones que a los procesos y herramientas.";
 choices[68][1] = "Una documentaci&oacute;n completa que a software que funcione.";
 choices[68][2] = "La negociaci&oacute;n contractual que a la colaboraci&oacute;n con los usuarios.";
 choices[68][3] = "Seguir una planificaci&oacute;n que a adaptarse al cambio.";
 answers[68] = choices[68][0];
 units[68] = "79";
 comments[68] = "Id Pregunta: 8180. Examen TIC A1 2010";


//  Id pregunta: 8372 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Mantenimiento adaptativo.";
 choices[69][1] = "Mantenimiento preventivo.";
 choices[69][2] = "Mantenimiento correctivo.";
 choices[69][3] = "Mantenimiento evolutivo.";
 answers[69] = choices[69][1];
 units[69] = "86";
 comments[69] = "Id Pregunta: 8372. Examen TIC A2 2010";


//  Id pregunta: 8509 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Actualmente, el World Wide Web Consortium (W3C) trabaja en los siguientes est&aacute;ndares y herramientas de integraci&oacute;n de datos de entrada. Seleccionar la respuesta ERR&Oacute;NEA: ";
 choices[70]= new Array();
 choices[70][0] = "SRGS tiene corno funci&oacute;n principal permitir que una aplicaci&oacute;n de voz indique a un reconocedor qu&eacute; es lo que tiene que escuchar, es decir, palabras, modelos en los que estas palabras surgen, lenguaje hablado de cada palabra, etc. ";
 choices[70][1] = " SSML, lenguaje de marcado de S&iacute;ntesis del Habla, basado en XML, forma parte del proceso de salida de informaci&oacute;n y funciona como componente de conversi&oacute;n ayudando a generar habla sint&eacute;tica. ";
 choices[70][2] = "SlSR permite describir anotaciones sobre reglas gramaticales para extraer resultados sem&aacute;nticos a trav&eacute;s del reconocimiento del habla. El resultado obtenido puede expresarse en formato XML, usando el lenguaje EMMA. ";
 choices[70][3] = "EMMA es un lenguaje de etiquetado que permite crear di&aacute;logos con los que se puede interactuar escuchando comandos hablados, controlables a trav&eacute;s de entradas de voz";
 answers[70] = choices[70][3];
 units[70] = "94";
 comments[70] = "Id Pregunta: 8509. Examen TIC A2 2010";


//  Id pregunta: 8650 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; perfil es el encargado de la tarea de M&eacute;trica v3 &quot;Definici&oacute;n del Esquema de Formaci&oacute;n&quot;?";
 choices[71]= new Array();
 choices[71][0] = "Analista.";
 choices[71][1] = "Consultor.";
 choices[71][2] = "Analista-programador.";
 choices[71][3] = "Programador.";
 answers[71] = choices[71][0];
 units[71] = "86";
 comments[71] = "Id Pregunta: 8650. Examen TIC A2 2010 interna";


//  Id pregunta: 8818 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[72]= new Array();
 choices[72][0] = "Para dar confianza";
 choices[72][1] = "Para asegurar que el software funciona";
 choices[72][2] = "Para evaluar el proceso de desarrollo de software";
 choices[72][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[72] = choices[72][3];
 units[72] = "87, 92";
 comments[72] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 9083 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[73]= new Array();
 choices[73][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[73][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[73][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[73][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[73] = choices[73][3];
 units[73] = "77";
 comments[73] = "Id Pregunta: 9083. ";


//  Id pregunta: 9447 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objetos?:";
 choices[74]= new Array();
 choices[74][0] = "UMTS.";
 choices[74][1] = "JINI.";
 choices[74][2] = "VORBIS.";
 choices[74][3] = "CLOS.";
 answers[74] = choices[74][1];
 units[74] = "82";
 comments[74] = "Id Pregunta: 9447. Examen AGE TIC A1 2011";


//  Id pregunta: 9486 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Indique la afirmaci&oacute;n incorrecta con respecto a una sesi&oacute;n JAD";
 choices[75]= new Array();
 choices[75][0] = "Es una t&eacute;cnica que promueve la cooperaci&oacute;n entre usuarios y desarrolladores para la obtenci&oacute;n de requisitos";
 choices[75][1] = "T&iacute;picamente duran media jornada de trabajo";
 choices[75][2] = "Se utilizan para reducir el tiempo de desarrollo";
 choices[75][3] = "Involucran a personas de m&aacute;s alto nivel que las sesiones JRP";
 answers[75] = choices[75][3];
 units[75] = "78";
 comments[75] = "Id Pregunta: 9486. ";


//  Id pregunta: 9491 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[76]= new Array();
 choices[76][0] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[76][1] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual de datos";
 choices[76][2] = "El diagrama de casos de uso es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[76][3] = "El diagrama de flujo de datos es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 answers[76] = choices[76][0];
 units[76] = "78";
 comments[76] = "Id Pregunta: 9491. ";


//  Id pregunta: 9756 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;En qu&eacute; actividad de M&eacute;trica v3 se formaliza el Plan de Mantenimiento?";
 choices[77]= new Array();
 choices[77][0] = "IAS.3 Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n";
 choices[77][1] = "IAS.7 Preparaci&oacute;n del Mantenimiento del sistema";
 choices[77][2] = "IAS.8 Establecimiento del acuerdo de nivel de servicio";
 choices[77][3] = "DSI.11 Establecimiento de requisitos de implantaci&oacute;n";
 answers[77] = choices[77][1];
 units[77] = "86";
 comments[77] = "Id Pregunta: 9756. IAS.7.2 Formalizaci&oacute;n del Plan de Mantenimiento";


//  Id pregunta: 9915 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Se&ntilde;ale la opci&oacute;n INCORRECTA en relaci&oacute;n con los DFD (Diagrama de Flujos de Datos) y los DE (Diagramas de Estructura), seg&uacute;n M&eacute;trica v3:";
 choices[78]= new Array();
 choices[78][0] = "El objetivo del DFD es la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 choices[78][1] = "En un DFD, los flujos de control representan movimientos de datos con valores s&iacute;ncronos entre procesos de control.";
 choices[78][2] = "Existen dos estrategias para obtener el DE a partir de un DFD, an&aacute;lisis: de transacci&oacute;n y de transformaci&oacute;n. El uso de una de las dos depender&aacute; de los procesos del DFD.";
 choices[78][3] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD existe un proceso que en funci&oacute;n del flujo de llegada, determina la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 answers[78] = choices[78][1];
 units[78] = "86";
 comments[78] = "Id Pregunta: 9915. TIC A2, Examen 2013";


//  Id pregunta: 9918 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[79]= new Array();
 choices[79][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[79][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[79][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[79][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[79] = choices[79][1];
 units[79] = "86, 58";
 comments[79] = "Id Pregunta: 9918. TIC A2, Examen 2013";


//  Id pregunta: 9957 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Para las siguientes conexiones entre elementos de un DFD (Diagrama de flujo de datos), NO es posible el flujo:";
 choices[80]= new Array();
 choices[80][0] = "Proceso-Proceso";
 choices[80][1] = "Proceso-Entidad Externa";
 choices[80][2] = "Almac&eacute;n de datos-Almac&eacute;n de datos. ";
 choices[80][3] = "Entidad Externa-Proceso";
 answers[80] = choices[80][2];
 units[80] = "81";
 comments[80] = "Id Pregunta: 9957. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9977 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En un sistema de gesti&oacute;n documental, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA? ";
 choices[81]= new Array();
 choices[81][0] = "Un sistema de gesti&oacute;n documental se define como un conjunto de elementos y relaciones entre ellos, que tiene el prop&oacute;sito de normalizar, controlar y coordinar todas las actividades y procesos que afectan en cualquiermedida a los documentos generados en el transcurso de la actividad de una organizaci&oacute;n";
 choices[81][1] = "Un sistema de gesti&oacute;n documental tiene que conservar los atributos b&aacute;sicos de los documentos ";
 choices[81][2] = "Un sistema de gesti&oacute;n documental tiene que mantener la organizaci&oacute;n de los documentos integrados en un contexto ";
 choices[81][3] = "Las operaciones m&aacute;s habituales que se realizan sobre estos documentos, abarcan parte de su ciclo de vida, desde su almacenamiento hasta la puesta a disposici&oacute;n de los usuarios";
 answers[81] = choices[81][3];
 units[81] = "95";
 comments[81] = "Id Pregunta: 9977. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10086 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado para eliminar el problema de la indefinici&oacute;n de requisitos?";
 choices[82]= new Array();
 choices[82][0] = "R&aacute;pido";
 choices[82][1] = "Evolutivo";
 choices[82][2] = "Incremental";
 choices[82][3] = "R&aacute;pido o evolutivo, nunca el incremental";
 answers[82] = choices[82][0];
 units[82] = "76";
 comments[82] = "Id Pregunta: 10086. NULL";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil se basa en principios como &ldquo;decidir lo m&aacute;s tarde posible&rdquo; y &ldquo;reaccionar tan r&aacute;pido como sea posible?";
 choices[83]= new Array();
 choices[83][0] = "FDD";
 choices[83][1] = "LSD";
 choices[83][2] = "ASD";
 choices[83][3] = "Kanban";
 answers[83] = choices[83][1];
 units[83] = "79";
 comments[83] = "Id Pregunta: 10087. NULL";


//  Id pregunta: 10100 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En la lista eventos del modelo ambiental, indique que tipo de evento NO existe: ";
 choices[84]= new Array();
 choices[84][0] = "Evento orientado a flujo";
 choices[84][1] = "Evento temporal";
 choices[84][2] = "Evento de control";
 choices[84][3] = "Evento cr&iacute;tico";
 answers[84] = choices[84][3];
 units[84] = "81";
 comments[84] = "Id Pregunta: 10100. NULL";


//  Id pregunta: 10455 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como vital:";
 choices[85]= new Array();
 choices[85][0] = "Puede realizarse manualmente por un periodo breve de tiempo.";
 choices[85][1] = "Tiene mayor tolerancia a las interrupciones que una clasificada como cr&iacute;tica.";
 choices[85][2] = "Ninguna de las anteriores.";
 choices[85][3] = "A y B.";
 answers[85] = choices[85][3];
 units[85] = "97";
 comments[85] = "Id Pregunta: 10455. NULL";


//  Id pregunta: 10642 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Se&ntilde;ale la opci&oacute;n correcta:";
 choices[86]= new Array();
 choices[86][0] = "RMI es un m&eacute;todo de invocaci&oacute;n remota para Java exclusivamente.";
 choices[86][1] = "CORBA o RMI pueden utilizarse para la comunicaci&oacute;n entre aplicaciones distribuidas de tecnolog&iacute;as distintas.";
 choices[86][2] = "Un Sistema de Comunicaci&oacute;n entre Procesos (IPC) es una capa de software que permite realizar llamadas a m&eacute;todos situados en m&aacute;quinas remotas. ";
 choices[86][3] = "DCOM es una tecnolog&iacute;a de Sun Microsystems.";
 answers[86] = choices[86][0];
 units[86] = "82";
 comments[86] = "Id Pregunta: 10642. ";


//  Id pregunta: 10645 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Indique la que no es una caracter&iacute;stica com&uacute;n de las &aacute;reas clave del proceso seg&uacute;n CMM:";
 choices[87]= new Array();
 choices[87][0] = "Verificaci&oacute;n de la implementaci&oacute;n.";
 choices[87][1] = "Actividades realizadas.";
 choices[87][2] = "Imposibilidad de realizaci&oacute;n.";
 choices[87][3] = "Medici&oacute;n y an&aacute;lisis.";
 answers[87] = choices[87][2];
 units[87] = "87";
 comments[87] = "Id Pregunta: 10645. ";


//  Id pregunta: 10814 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[88]= new Array();
 choices[88][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[88][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[88][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[88][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[88] = choices[88][1];
 units[88] = "76, 79";
 comments[88] = "Id Pregunta: 10814. Examen GSI 2014";


//  Id pregunta: 10816 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Con respecto a la metodolog&iacute;a &aacute;gil Kanban, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[89]= new Array();
 choices[89][0] = "Las iteraciones deben ser de tiempo fijo siempre.";
 choices[89][1] = "No permite trabajar en m&uacute;ltiples productos simult&aacute;neamente.";
 choices[89][2] = "Prescribe los roles siguientes de modo obligatorio: due&ntilde;o del producto y equipo.";
 choices[89][3] = "Limita el n&uacute;mero de elementos al mismo tiempo en un estado del flujo de trabajo.";
 answers[89] = choices[89][3];
 units[89] = "79";
 comments[89] = "Id Pregunta: 10816. Examen GSI 2014";


//  Id pregunta: 11004 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En el modelo Entidad/Relaci&oacute;n, y dada una jerarqu&iacute;a obligatoria disjunta, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[90]= new Array();
 choices[90][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 choices[90][1] = "Es necesario que toda ocurrencia del supertipo se encuentre en uno solo de los subtipos.";
 choices[90][2] = "Es necesario que toda ocurrencia del supertipo se encuentre en todos los subtipos.";
 choices[90][3] = "Es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 answers[90] = choices[90][1];
 units[90] = "80";
 comments[90] = "Id Pregunta: 11004. TIC A1 AGE 2014";


//  Id pregunta: 11058 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; rol de la metodolog&iacute;a FDD es responsable del dise&ntilde;o global del sistema y de la ejecuci&oacute;n de todas las etapas del dise&ntilde;o?";
 choices[91]= new Array();
 choices[91][0] = "Product Manager";
 choices[91][1] = "Chief architect";
 choices[91][2] = "Chief programmer";
 choices[91][3] = "System administrator";
 answers[91] = choices[91][1];
 units[91] = "79";
 comments[91] = "Id Pregunta: 11058. ";


//  Id pregunta: 11070 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El principal objetivo de la Gesti&oacute;n de la Disponibilidad es &hellip;";
 choices[92]= new Array();
 choices[92][0] = "Monitorizar e informar sobre la disponibilidad de los servicios y componentes";
 choices[92][1] = "Asegurar que los objetivos de los SLA&rsquo;s se consiguen";
 choices[92][2] = "Garantizar niveles de disponibilidad para servicios y componentes";
 choices[92][3] = "Asegurarse que la disponibilidad de los servicios, se consigue o excede seg&uacute;n las necesidades acordadas con el negocio";
 answers[92] = choices[92][3];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11070. ";


//  Id pregunta: 11072 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Hay 7 diferentes estrategias de externalizaci&oacute;n que una compa&ntilde;&iacute;a puede emplear, &iquest;cu&aacute;l es la forma m&aacute;s reciente de outsourcing?";
 choices[93]= new Array();
 choices[93][0] = "Outsourcing del Proceso de Conocimiento";
 choices[93][1] = "Asociaci&oacute;n o multi-sourcing";
 choices[93][2] = "Outsourcing de Procesos de Negocio (Business Process Outsourcing BPO)";
 choices[93][3] = "Provisi&oacute;n de Servicios de Aplicaci&oacute;n";
 answers[93] = choices[93][0];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11072. ";


//  Id pregunta: 11163 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;A qu&eacute; concepto se corresponde la definici&oacute;n: &ldquo;proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n.&rdquo;";
 choices[94]= new Array();
 choices[94][0] = "Ingenier&iacute;a inversa";
 choices[94][1] = "Reingenier&iacute;a";
 choices[94][2] = "Ingenier&iacute;a hacia delante";
 choices[94][3] = "Ninguna de las anteriores";
 answers[94] = choices[94][0];
 units[94] = "91";
 comments[94] = "Id Pregunta: 11163. ";


//  Id pregunta: 11166 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;les de las siguientes t&eacute;cnicas no suele utilizarse en los sistemas de reconocimiento de habla?";
 choices[95]= new Array();
 choices[95][0] = "Dynamic Time Warping";
 choices[95][1] = "Hidden Markov Model";
 choices[95][2] = "Neural Networks";
 choices[95][3] = "Todas las anteriores se suelen utilizar en los sistemas de reconocimiento de habla";
 answers[95] = choices[95][3];
 units[95] = "93";
 comments[95] = "Id Pregunta: 11166. ";


//  Id pregunta: 11270 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En Cobitv5:";
 choices[96]= new Array();
 choices[96][0] = "La cascada de metas es el mecanismo para traducir las necesidades de las partes interesadas en metas corporativas, metas relacionadas con las TI y metas catalizadoras.";
 choices[96][1] = "Las metas corporativas han sido desarrolladas utilizando las dimensiones del cuadro de mando integral (CMI).";
 choices[96][2] = "Los tres objetivos principales de Gobierno a considerar son: realizaci&oacute;n de beneficios, optimizaci&oacute;n de riesgos y optimizaci&oacute;n de recursos.";
 choices[96][3] = "Todas son correctas.";
 answers[96] = choices[96][3];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11270. ";


//  Id pregunta: 11291 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares corresponde a la especificaci&oacute;n de portlets m&aacute;s reciente?";
 choices[97]= new Array();
 choices[97][0] = "JSR 286";
 choices[97][1] = "JSR 168";
 choices[97][2] = "JSR 283";
 choices[97][3] = "a y c son ciertas";
 answers[97] = choices[97][0];
 units[97] = "95";
 comments[97] = "Id Pregunta: 11291. ";


//  Id pregunta: 11360 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[98]= new Array();
 choices[98][0] = "Controlar todos los proveedores externos de TI";
 choices[98][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[98][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[98][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[98] = choices[98][1];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11360. ";


//  Id pregunta: 11548 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  De acuerdo a los 6 niveles definidos en CMMI para medir la capacidad de los procesos, &iquest;Qu&eacute; nivel corresponde a un proceso que adem&aacute;s de ser gestionado, se ajusta a la pol&iacute;tica de procesos que existe en la organizaci&oacute;n, alineada con las directivas de la empresa?";
 choices[99]= new Array();
 choices[99][0] = "Nivel 3 Definido";
 choices[99][1] = "Nivel 4 Cuantitativamente Gestionado";
 choices[99][2] = "Nivel 3 Predecible";
 choices[99][3] = "Nivel 5 Optimizado";
 answers[99] = choices[99][0];
 units[99] = "87";
 comments[99] = "Id Pregunta: 11548. NULL";


