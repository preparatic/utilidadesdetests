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

//  Id pregunta: 222 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En la planificaci&oacute;n de un proyecto no debemos realizar las siguientes tareas:";
 choices[0]= new Array();
 choices[0][0] = "Definici&oacute;n de los requerimientos";
 choices[0][1] = "Selecci&oacute;n de una metodolog&iacute;a de gesti&oacute;n de proyecto";
 choices[0][2] = "Reclutamiento de personal y asignaci&oacute;n de tareas";
 choices[0][3] = "An&aacute;lisis de riesgos y revisi&oacute;n inicial de seguridad";
 answers[0] = choices[0][2];
 units[0] = "77";
 comments[0] = "Id Pregunta: 222. ";


//  Id pregunta: 1182 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Indique la afirmaci&oacute;n falsa sobre sistemas en tiempo real.";
 choices[1]= new Array();
 choices[1][0] = "El sistema operativo de tiempo real deber&aacute; contar con gesti&oacute;n de memoria virtual.";
 choices[1][1] = "Los sistemas de tiempo real se basan en la realimentaci&oacute;n de la informaci&oacute;n.";
 choices[1][2] = "El sistema deber&aacute; permanecer pr&aacute;cticamente inactivo para poder atender con la mayor rapidez posible cualquier evento de entrada.";
 choices[1][3] = "El sistema operativo de tiempo real deber&aacute; contar con bloqueo de los procesos cuando est&eacute;n espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 answers[1] = choices[1][0];
 units[1] = "83";
 comments[1] = "Id Pregunta: 1182. ";


//  Id pregunta: 1982 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l no es una decisi&oacute;n que deba tomar una organizaci&oacute;n para establecer su planificaci&oacute;n estrat&eacute;gica?:";
 choices[2]= new Array();
 choices[2][0] = "Determinar el personal y recursos necesarios para desarrollar los proyectos";
 choices[2][1] = "Establecimiento de los objetivos y metas principales";
 choices[2][2] = "Definici&oacute;n del marco econ&oacute;mico presupuestario y del &aacute;mbito de actuaci&oacute;n de la organizaci&oacute;n";
 choices[2][3] = "Formulaci&oacute;n de los diferentes programas y proyectos orientados a conseguir los objetivos";
 answers[2] = choices[2][0];
 units[2] = "77";
 comments[2] = "Id Pregunta: 1982. ";


//  Id pregunta: 2000 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En Orientaci&oacute;n a Objetos, &iquest;c&oacute;mo se denomina el concepto por el que el an&aacute;lisis se centra en los aspectos esenciales e inherentes de una entidad, ignorarando sus propiedades accidentales?";
 choices[3]= new Array();
 choices[3][0] = "Abstracci&oacute;n";
 choices[3][1] = "Encapsulaci&oacute;n";
 choices[3][2] = "Persistencia";
 choices[3][3] = "Polimorfismo";
 answers[3] = choices[3][0];
 units[3] = "82";
 comments[3] = "Id Pregunta: 2000. Similar a examen TIC SS A 2003";


//  Id pregunta: 2022 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;sitica com&uacute;nmente reconocida en los lenguajes de programaci&oacute;n orientados a objetos (LPOO)?";
 choices[4]= new Array();
 choices[4][0] = "La base de objetos y clases.";
 choices[4][1] = "La sustanciaci&oacute;n de objetos.";
 choices[4][2] = "Las relaciones de agregaci&oacute;n y herencia.";
 choices[4][3] = "El ligamiento din&aacute;mico y el polimorfismo.";
 answers[4] = choices[4][1];
 units[4] = "84";
 comments[4] = "Id Pregunta: 2022. Examen TIC MAP B 2004";


//  Id pregunta: 2025 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Son lenguajes que al menos en sus &uacute;ltimos est&aacute;ndares soportan la programaci&oacute;n orientada a objetos:";
 choices[5]= new Array();
 choices[5][0] = "C++, COBOL, FORTRAN, Ada.";
 choices[5][1] = "Java, Lisp, Algol, Eiffel.";
 choices[5][2] = "C++, Java, Eiffel, Smalltalk.";
 choices[5][3] = "C++, Smalltalk, Eiffel, REXX.";
 answers[5] = choices[5][2];
 units[5] = "82,84";
 comments[5] = "Id Pregunta: 2025. Examen TIC MAP B 2004";


//  Id pregunta: 2028 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes lenguajes no es orientado a objetos?";
 choices[6]= new Array();
 choices[6][0] = "C.";
 choices[6][1] = "Smalltalk.";
 choices[6][2] = "Eiffel.";
 choices[6][3] = "ACTOR.";
 answers[6] = choices[6][0];
 units[6] = "82,84";
 comments[6] = "Id Pregunta: 2028. Similar a examen TIC SS A 2003";


//  Id pregunta: 2048 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En la planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n, las decisiones principales que es preciso tomar son:";
 choices[7]= new Array();
 choices[7][0] = "Establecer los objetivos y metas principales";
 choices[7][1] = "Formular programas y proyectos parqa conseguir los objetivos";
 choices[7][2] = "Definir presupuesto y &aacute;mbito de actuaci&oacute;n para llevar a cabo lo anterior";
 choices[7][3] = "Todas las anteriores respuestas son correctas";
 answers[7] = choices[7][3];
 units[7] = "77";
 comments[7] = "Id Pregunta: 2048. ";


//  Id pregunta: 2148 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes modelos se basan en la idea 'No puedo decirte lo que quiero, pero lo reconocer&eacute; en cuanto lo vea'?:";
 choices[8]= new Array();
 choices[8][0] = "Modelo en cascada";
 choices[8][1] = "Modelo por etapas";
 choices[8][2] = "Modelo en espiral";
 choices[8][3] = "Modelo de prototipado evolutivo";
 answers[8] = choices[8][3];
 units[8] = "76";
 comments[8] = "Id Pregunta: 2148. ";


//  Id pregunta: 2187 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l no es una caracter&iacute;stica com&uacute;n a todas las metodolog&iacute;as?:";
 choices[9]= new Array();
 choices[9][0] = "Diccionario de datos";
 choices[9][1] = "Prototipado";
 choices[9][2] = "Cubre todos los aspectos de un sistema de aplicaci&oacute;n: desde el organizativo , hasta el sistema t&eacute;cnico de apoyo";
 choices[9][3] = "An&aacute;lisis de riesgo";
 answers[9] = choices[9][1];
 units[9] = "79,85";
 comments[9] = "Id Pregunta: 2187. ";


//  Id pregunta: 2212 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; expresa la dimensi&oacute;n angular del modelo en Espiral?:";
 choices[10]= new Array();
 choices[10][0] = "Es un indicador del gasto acumulativo del proyecto";
 choices[10][1] = "Representa el progreso hecho en completar cada ciclo de la espiral.";
 choices[10][2] = "En algunos casos no es posible delimitarla";
 choices[10][3] = "Se debe calcular, no s&oacute;lo en el modelo en espiral";
 answers[10] = choices[10][1];
 units[10] = "76";
 comments[10] = "Id Pregunta: 2212. ";


//  Id pregunta: 2246 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Del modelo de ciclo de vida en cascada se puede decir:";
 choices[11]= new Array();
 choices[11][0] = "Es un modelo que evoluciona en funci&oacute;n del grado de terminaci&oacute;n del proceso";
 choices[11][1] = "Es un modelo te&oacute;rico, dif&iacute;cil de cumplir porque necesita terminar una fase antes de comenzar la siguiente";
 choices[11][2] = "Es una particularizaci&oacute;n del ciclo de vida en espiral";
 choices[11][3] = "Normalmente va ligado al uso de prototipos";
 answers[11] = choices[11][1];
 units[11] = "76";
 comments[11] = "Id Pregunta: 2246. ";


//  Id pregunta: 2254 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Dentro del ciclo de vida cl&aacute;sico, &iquest;qu&eacute; es falso?:";
 choices[12]= new Array();
 choices[12][0] = "Es una visi&oacute;n del problema top-down";
 choices[12][1] = "Se basa en sucesivas subidas y bajadas del nivel de abstracci&oacute;n";
 choices[12][2] = "Se basa en una secuencia estricta de las fases del ciclo de vida";
 choices[12][3] = "Necesita especificaciones consistentes";
 answers[12] = choices[12][1];
 units[12] = "76";
 comments[12] = "Id Pregunta: 2254. ";


//  Id pregunta: 2258 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Despu&eacute;s de analizar un problema para el dise&ntilde;o de un sistema de informaci&oacute;n, se debe conocer:";
 choices[13]= new Array();
 choices[13][0] = "La estructura que tendr&aacute; el sistema inform&aacute;tico";
 choices[13][1] = "La informaci&oacute;n de salida deseada, los tratamientos a realizar y el dise&ntilde;o que tendr&aacute;n las tablas";
 choices[13][2] = "Los datos de que se dispone y las salidas que se desean obtener";
 choices[13][3] = "La informaci&oacute;n de salida deseada, los datos de entrada y los tratamientos a realizar con los datos";
 answers[13] = choices[13][3];
 units[13] = "78";
 comments[13] = "Id Pregunta: 2258. ";


//  Id pregunta: 2290 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El modelo en espiral:";
 choices[14]= new Array();
 choices[14][0] = "Tiene como n&uacute;cleo la evaluaci&oacute;n de riesgos";
 choices[14][1] = "Es un refinamiento del modelo de prototipos";
 choices[14][2] = "Tiene como idea fundamental la evaluaci&oacute;n de costes, calendario&hellip;";
 choices[14][3] = "No tiene fin, un sistema siempre es mejorable";
 answers[14] = choices[14][0];
 units[14] = "76";
 comments[14] = "Id Pregunta: 2290. ";


//  Id pregunta: 2314 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el modelo en espiral o iterativo del ciclo de vida, cada ciclo en espiral empieza con la identificaci&oacute;n de:";
 choices[15]= new Array();
 choices[15][0] = "Los objetivos de la parte del producto que va a ser elaborada";
 choices[15][1] = "Los medios alternativos para implementar esta parte de producto (dise&ntilde;o A, dise&ntilde;o B, productos software, etc ...)";
 choices[15][2] = "Las restricciones impuestas : costes, calendario, interfaces, etc";
 choices[15][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[15] = choices[15][3];
 units[15] = "76";
 comments[15] = "Id Pregunta: 2314. ";


//  Id pregunta: 2337 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Esquema Conceptual";
 choices[16][1] = "Esquema Externo";
 choices[16][2] = "Esquema Interno";
 choices[16][3] = "Esquema Funcional";
 answers[16] = choices[16][1];
 units[16] = "58,80,81";
 comments[16] = "Id Pregunta: 2337. ";


//  Id pregunta: 2338 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[17]= new Array();
 choices[17][0] = "Uno-a-muchos";
 choices[17][1] = "Binaria";
 choices[17][2] = "Muchos-a-muchos";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][0];
 units[17] = "57,58,80";
 comments[17] = "Id Pregunta: 2338. ";


//  Id pregunta: 2340 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En los modelos orientados a objeto, un m&eacute;todo:";
 choices[18]= new Array();
 choices[18][0] = "Es una implementaci&oacute;n espec&iacute;fica de una operaci&oacute;n en una determinada clase";
 choices[18][1] = "Es la implementaci&oacute;n de un operador, independientemente de la clase a la que se aplica";
 choices[18][2] = "Es la implementaci&oacute;n sistem&aacute;tica del mecanismo de herencia";
 choices[18][3] = "Es un procedimiento sistem&aacute;tico para el dise&ntilde;o del sistema";
 answers[18] = choices[18][0];
 units[18] = "82";
 comments[18] = "Id Pregunta: 2340. ";


//  Id pregunta: 2343 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En programaci&oacute;n orientada a objetos, el mecanismo por el cual una clase de objeto puede ser definido como un caso particular de una clase m&aacute;s general se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Herencia";
 choices[19][1] = "Subclase";
 choices[19][2] = "Polimorfismo";
 choices[19][3] = "Encapsulaci&oacute;n";
 answers[19] = choices[19][0];
 units[19] = "82";
 comments[19] = "Id Pregunta: 2343. ";


//  Id pregunta: 2361 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Entre las t&eacute;cnicas utilizadas para la especificaci&oacute;n de m&oacute;dulos figura el pseudoc&oacute;digo. Identifique entre los siguientes tipos de lenguaje cu&aacute;l se corresponde exactamente con el pseudoc&oacute;digo:";
 choices[20]= new Array();
 choices[20][0] = "Es un lenguaje natural.";
 choices[20][1] = "Es un lenguaje estructurado.";
 choices[20][2] = "Es un lenguaje de programaci&oacute;n.";
 choices[20][3] = "Ninguna es cierta.";
 answers[20] = choices[20][1];
 units[20] = "84";
 comments[20] = "Id Pregunta: 2361. ";


//  Id pregunta: 2428 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La orientaci&oacute;n a objetos usa com&uacute;nmente dos tipos de mecanismos de herencia: herencia simple y herencia m&uacute;ltiple. La herencia repetida:";
 choices[21]= new Array();
 choices[21][0] = "Supone que una clase, llamada subclase, hereda caracter&iacute;sticas y m&eacute;todos de una sola clase superior llamada superclase, a la que puede a&ntilde;adir o borrar alg&uacute;n comportamiento.";
 choices[21][1] = "Es un tipo de herencia m&uacute;ltiple en la que en la jerarqu&iacute;a de la herencia hay ciclos, es decir, una clase hereda directa o indirectamente de otra clase m&aacute;s de una vez.";
 choices[21][2] = "Consiste en que un objeto dado tenga m&aacute;s de un padre.";
 choices[21][3] = "No existe.";
 answers[21] = choices[21][1];
 units[21] = "82,84";
 comments[21] = "Id Pregunta: 2428. ";


//  Id pregunta: 2432 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[22]= new Array();
 choices[22][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[22][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[22][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[22][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[22] = choices[22][1];
 units[22] = "82,84";
 comments[22] = "Id Pregunta: 2432. ";


//  Id pregunta: 2447 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las relaciones denominadas maestro-detalle, corresponden a:";
 choices[23]= new Array();
 choices[23][0] = "Relaciones con cardinalidad n:m";
 choices[23][1] = "Relaciones con cardinalidad 1:1";
 choices[23][2] = "Relaciones unarias";
 choices[23][3] = "Relaciones con cardinalidad 1:n";
 answers[23] = choices[23][3];
 units[23] = "80";
 comments[23] = "Id Pregunta: 2447. ";


//  Id pregunta: 2450 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Las ventajas del modelo en espiral son&hellip;:";
 choices[24]= new Array();
 choices[24][0] = "Potencia la reutilizaci&oacute;n del software existente.";
 choices[24][1] = "No tiene dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[24][2] = "Es muy interesante tanto para el software contratado como para el propio";
 choices[24][3] = "No acaba nunca";
 answers[24] = choices[24][0];
 units[24] = "76";
 comments[24] = "Id Pregunta: 2450. ";


//  Id pregunta: 2459 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los inconvenientes del modelo en espiral son&hellip;:";
 choices[25]= new Array();
 choices[25][0] = "Dependencia de la experiencia del personal";
 choices[25][1] = "No es tan estandar como METRICA";
 choices[25][2] = "No es adecuado para la orientaci&oacute;n a objetos";
 choices[25][3] = "Todas las anteriores son ciertas";
 answers[25] = choices[25][0];
 units[25] = "76";
 comments[25] = "Id Pregunta: 2459. ";


//  Id pregunta: 2495 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;Las relaciones de un diagrama de clases pueden ser&quot;:";
 choices[26]= new Array();
 choices[26][0] = "Agregaci&oacute;n.";
 choices[26][1] = "Coherencia.";
 choices[26][2] = "Herencia.";
 choices[26][3] = "Dependencia.";
 answers[26] = choices[26][1];
 units[26] = "82,84";
 comments[26] = "Id Pregunta: 2495. ";


//  Id pregunta: 2503 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  UML se corresponde con:";
 choices[27]= new Array();
 choices[27][0] = "Unstructured Markup Language, Lenguaje Estructurado de Marcaci&oacute;n.";
 choices[27][1] = "Unified Multimedia Language, Lenguaje Multimedia Unificado.";
 choices[27][2] = "Unified Modelling Language, Lenguaje Unificado de Modelado.";
 choices[27][3] = "Universal Modelling Language, Lenguaje de Modelado Universal";
 answers[27] = choices[27][2];
 units[27] = "82,84";
 comments[27] = "Id Pregunta: 2503. ";


//  Id pregunta: 2511 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Una entidad externa en un DFD:";
 choices[28]= new Array();
 choices[28][0] = "No debe figurar en el DFD";
 choices[28][1] = "No se tiene en consideraci&oacute;n";
 choices[28][2] = "Interactua con el sistema";
 choices[28][3] = "Se relaciona con otras entidades externas";
 answers[28] = choices[28][2];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2511. ";


//  Id pregunta: 2514 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Uno de los m&eacute;todos utilizados para la identificaci&oacute;n de objetos es:";
 choices[29]= new Array();
 choices[29][0] = "Tarjetas CRC";
 choices[29][1] = "An&aacute;lisis l&eacute;xico";
 choices[29][2] = "Contraste de modelos";
 choices[29][3] = "Todas las anteriores son ciertas";
 answers[29] = choices[29][3];
 units[29] = "82";
 comments[29] = "Id Pregunta: 2514. ";


//  Id pregunta: 2564 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  En el dise&ntilde;o estructurado, &iquest;Qu&eacute; es la cohesi&oacute;n? ";
 choices[30]= new Array();
 choices[30][0] = "Todas son falsas.";
 choices[30][1] = "Es una medida de la coherencia y/o complejidad funcional interna de un m&oacute;dulo.";
 choices[30][2] = "Es la medida de la complejidad externa de un modulo de acuerdo a sus interfaces.";
 choices[30][3] = "B y C son ciertas.";
 answers[30] = choices[30][1];
 units[30] = "84";
 comments[30] = "Id Pregunta: 2564. ";


//  Id pregunta: 2630 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; contendr&aacute; el diagrama de contexto en un DFD?";
 choices[31]= new Array();
 choices[31][0] = "Entidades Extermas, Procesos, Flujos de Datos";
 choices[31][1] = "Almacenes de Datos, Prodesos, Entidades Extrenas.";
 choices[31][2] = "Entidades Externas, Un solo Proceso, Flujos de Datos.";
 choices[31][3] = "Entidades Extermas, Procesos, Flujos de Datos, Almacenes de Datos";
 answers[31] = choices[31][2];
 units[31] = "81";
 comments[31] = "Id Pregunta: 2630. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2720 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Seg&uacute;n Martins, el modelo de construcci&oacute;n de prototipos no est&aacute; recomendado:";
 choices[32]= new Array();
 choices[32][0] = "En proyectos muy grandes y a largo plazo (de duraci&oacute;n mayor a un a&ntilde;o) porque los requisitos ser&aacute; dif&iacute;cil mantenerlos congelados tanto tiempo";
 choices[32][1] = "En proyectos peque&ntilde;os (de duraci&oacute;n inferior a un mes) porque es dif&iacute;cil que los requisitos sean tan complejos como para no conocerlos";
 choices[32][2] = "S&iacute; est&aacute; recomendado para proyectos de tama&ntilde;o medio cuyo desarrollo va entre 3 y 5 meses";
 choices[32][3] = "Todas las anteriores respuestas son correctas";
 answers[32] = choices[32][3];
 units[32] = "76";
 comments[32] = "Id Pregunta: 2720. ";


//  Id pregunta: 2729 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Uno de los objetivos principales de los Sistemas de Informaci&oacute;n es:";
 choices[33]= new Array();
 choices[33][0] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[33][1] = "Interconectar las distintas sedes de la organizaci&oacute;n";
 choices[33][2] = "Aumentar la complejidad de los procesos de la organizaci&oacute;n";
 choices[33][3] = "Reducir el n&uacute;mero de empleados";
 answers[33] = choices[33][0];
 units[33] = "77";
 comments[33] = "Id Pregunta: 2729. ";


//  Id pregunta: 2736 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[34]= new Array();
 choices[34][0] = "Pueden  ser permanentes o temporales";
 choices[34][1] = "No crean informaci&oacute;n";
 choices[34][2] = "Son  accesibles desde entidades externas.";
 choices[34][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[34] = choices[34][2];
 units[34] = "79,81";
 comments[34] = "Id Pregunta: 2736. ";


//  Id pregunta: 2741 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En el modelo entidad-relaci&oacute;n de CHEN la cardinalidad es:";
 choices[35]= new Array();
 choices[35][0] = "El n&uacute;mero de tablas";
 choices[35][1] = "El n&uacute;mero de elementos del modelo";
 choices[35][2] = "El n&uacute;mero m&iacute;nimo y m&aacute;ximo de entidades de un tipo de entidad que se relacionan con una entidad del otro tipo.";
 choices[35][3] = "El n&uacute;mero de relaciones unitarias";
 answers[35] = choices[35][2];
 units[35] = "80";
 comments[35] = "Id Pregunta: 2741. ";


//  Id pregunta: 2743 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[36]= new Array();
 choices[36][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[36][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[36][2] = "El n&uacute;mero de columnas de una tabla";
 choices[36][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[36] = choices[36][0];
 units[36] = "58,80";
 comments[36] = "Id Pregunta: 2743. ";


//  Id pregunta: 2756 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;C&oacute;mo se denomina la t&eacute;cnica que permite  obtener un modelo f&iacute;sico de datos a partir del modelo de clases?";
 choices[37]= new Array();
 choices[37][0] = "Matricial";
 choices[37][1] = "Historia de vidas de las entidades";
 choices[37][2] = "Diagrama de paquetes";
 choices[37][3] = "Reglas de transformaci&oacute;n.";
 answers[37] = choices[37][3];
 units[37] = "82";
 comments[37] = "Id Pregunta: 2756. ";


//  Id pregunta: 2771 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En Dise&ntilde;o estructurado, &iquest;cu&aacute;l de los siguientes presenta un mayor grado de acoplamiento entre m&oacute;dulos?";
 choices[38]= new Array();
 choices[38][0] = "Acoplamiento por contenido.";
 choices[38][1] = "Acoplamiento por estampado.";
 choices[38][2] = "Acoplamiento externo.";
 choices[38][3] = "Acoplamiento de control.";
 answers[38] = choices[38][0];
 units[38] = "84";
 comments[38] = "Id Pregunta: 2771. ";


//  Id pregunta: 2773 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;C&oacute;mo se denomina el acoplamiento donde la comunicaci&oacute;n entre m&oacute;dulos es a trav&eacute;s de estructuras de datos?";
 choices[39]= new Array();
 choices[39][0] = "Acoplamiento de marca.";
 choices[39][1] = "Acoplamiento de control.";
 choices[39][2] = "Acoplamiento externo.";
 choices[39][3] = "Acoplamiento com&uacute;n.";
 answers[39] = choices[39][0];
 units[39] = "84";
 comments[39] = "Id Pregunta: 2773. ";


//  Id pregunta: 2774 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Uno de los siguientes no es un tipo de flujo de datos que comunica un proceso con un almacen de mensajes. Se&ntilde;&aacute;lelo.";
 choices[40]= new Array();
 choices[40][0] = "De consulta.";
 choices[40][1] = "De control.";
 choices[40][2] = "De di&aacute;logo.";
 choices[40][3] = "De actualizaci&oacute;n.";
 answers[40] = choices[40][1];
 units[40] = "84";
 comments[40] = "Id Pregunta: 2774. ";


//  Id pregunta: 2781 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  El prototipado cl&aacute;sico, &iquest;en qu&eacute; fases del proyecto se aplica?";
 choices[41]= new Array();
 choices[41][0] = "En la fase de especificaci&oacute;n de requisitos";
 choices[41][1] = "En el dise&ntilde;o del sistema";
 choices[41][2] = "a) y b) son correctas";
 choices[41][3] = "Se aplica en todas las fases expecto implantaci&oacute;n y mantenimiento";
 answers[41] = choices[41][0];
 units[41] = "85";
 comments[41] = "Id Pregunta: 2781. ";


//  Id pregunta: 2875 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  En el dise&ntilde;o estructurado se utiliza el concepto de acoplamiento entre m&oacute;dulos de software. Indique de entre los siguientes tipos de acoplamiento el que corresponde al caso en que la informaci&oacute;n se transmite entre m&oacute;dulos como estructura de datos.";
 choices[42]= new Array();
 choices[42][0] = "Acoplamiento de datos simple.";
 choices[42][1] = "Acoplamiento por estampado.";
 choices[42][2] = "Acoplamiento de control.";
 choices[42][3] = "Acoplamiento externo.";
 answers[42] = choices[42][1];
 units[42] = "84";
 comments[42] = "Id Pregunta: 2875. ";


//  Id pregunta: 4372 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Una caracter&iacute;stica distintiva del modelo de ciclo de vida en espiral respecto a los modelos cl&aacute;sicos de ciclo de vida es la inclusi&oacute;n en el primero de actividades de:";
 choices[43]= new Array();
 choices[43][0] = "Codificaci&oacute;n.";
 choices[43][1] = "Mantenimiento";
 choices[43][2] = "An&aacute;lisis de riesgo.";
 choices[43][3] = "Dise&ntilde;o.";
 answers[43] = choices[43][2];
 units[43] = "76";
 comments[43] = "Id Pregunta: 4372. ";


//  Id pregunta: 4390 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El diagrama de transici&oacute;n de estados es una notaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Est&aacute;tica.";
 choices[44][1] = "H&iacute;brida.";
 choices[44][2] = "Din&aacute;mica.";
 choices[44][3] = "Estructural.";
 answers[44] = choices[44][2];
 units[44] = "84";
 comments[44] = "Id Pregunta: 4390. Examen TIC MAP B 2006";


//  Id pregunta: 4397 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Los dos esquemas empleados en la recuperaci&oacute;n de errores en el procesamiento de transacciones son:";
 choices[45]= new Array();
 choices[45][0] = "Detecci&oacute;n y recuperaci&oacute;n.";
 choices[45][1] = "La prevenci&oacute;n y el ignorarlos.";
 choices[45][2] = "Sem&aacute;foros y monitores.";
 choices[45][3] = "Hacia delante y hacia atr&aacute;s.";
 answers[45] = choices[45][3];
 units[45] = "83";
 comments[45] = "Id Pregunta: 4397. ";


//  Id pregunta: 4531 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes no es una sentencia correcta?";
 choices[46]= new Array();
 choices[46][0] = "UML es un lenguaje unificado de modelado.";
 choices[46][1] = "UML fue adoptado en noviembre de 1997 por OMG.";
 choices[46][2] = "UML solo costa de una &uacute;nica versi&oacute;n desde su creaci&oacute;n.";
 choices[46][3] = "UML es un est&aacute;ndar de facto para visualizar, especificar y documentar los modelos que se crean durante Ia aplicaci&oacute;n de un proceso de software.";
 answers[46] = choices[46][2];
 units[46] = "82";
 comments[46] = "Id Pregunta: 4531. ";


//  Id pregunta: 4608 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;En cual de las siguientes fases del modelo de ciclo de vida de un proyecto de tecnolog&iacute;as de Ia informaci&oacute;n se asignan los recursos materiales para cada una de las funciones?";
 choices[47]= new Array();
 choices[47][0] = "fase de definici&oacute;n";
 choices[47][1] = "fase de dise&ntilde;o";
 choices[47][2] = "fase de construccion";
 choices[47][3] = "fase de operaci&oacute;n";
 answers[47] = choices[47][1];
 units[47] = "76";
 comments[47] = "Id Pregunta: 4608. ";


//  Id pregunta: 4640 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Los diagramas de flujo de datos se componen de";
 choices[48]= new Array();
 choices[48][0] = "actores y casos de uso";
 choices[48][1] = "procesos y tablas";
 choices[48][2] = "entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[48][3] = "modulo, conexi&oacute;n, par&aacute;metro, almac&eacute;n de datos y dispositivos f&iacute;sicos";
 answers[48] = choices[48][2];
 units[48] = "81";
 comments[48] = "Id Pregunta: 4640. ";


//  Id pregunta: 4932 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La matriz Requisitos-Componentes empleada en los procesos de dise&ntilde;o y desarrollo de software, aparece en:";
 choices[49]= new Array();
 choices[49][0] = "El documento de especificaci&oacute;n de requisitos.";
 choices[49][1] = "El documento de dise&ntilde;o de software.";
 choices[49][2] = "Los documentos de cambios.";
 choices[49][3] = "El Plan de garant&iacute;a de calidad de software.";
 answers[49] = choices[49][1];
 units[49] = "78";
 comments[49] = "Id Pregunta: 4932. Examen TIC B 2007";


//  Id pregunta: 4942 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  La Programaci&oacute;n Estructurada de Jackson es una t&eacute;cnica de dise&ntilde;o:";
 choices[50]= new Array();
 choices[50][0] = "Estructurado.";
 choices[50][1] = "Orientada a objetos.";
 choices[50][2] = "Para organizar los datos.";
 choices[50][3] = "De descomposici&oacute;n funcional.";
 answers[50] = choices[50][0];
 units[50] = "83,84";
 comments[50] = "Id Pregunta: 4942. Examen TIC B 2007";


//  Id pregunta: 5003 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  En el proceso RUP (&quot;Rational Unified Process&quot;):";
 choices[51]= new Array();
 choices[51][0] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de actividades, productos intermedios, perfilesde trabajo o roles y flujos de trabajo";
 choices[51][1] = "La dimensi&oacute;n est&aacute;tica del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos";
 choices[51][2] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos";
 choices[51][3] = "En la dimensi&oacute;n est&aacute;tica, cada ciclo se compone de cuatro fases secuenciales (comienzo, elaboraci&oacute;n,construcci&oacute;n y transici&oacute;n)";
 answers[51] = choices[51][2];
 units[51] = "76";
 comments[51] = "Id Pregunta: 5003. Examen TIC A 2007";


//  Id pregunta: 5136 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;En qu&eacute; modelo de ciclo de vida cada ciclo comienza identificando los objetivos, las alternativas y las restricciones del ciclo?";
 choices[52]= new Array();
 choices[52][0] = "Modelo incremental.";
 choices[52][1] = "Modelo en espiral.";
 choices[52][2] = "Modelo en cascada.";
 choices[52][3] = "Modelo fuente.";
 answers[52] = choices[52][1];
 units[52] = "76";
 comments[52] = "Id Pregunta: 5136. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5138 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique cu&aacute;l de las siguientes afirmaciones sobre el m&eacute;todo de planificaci&oacute;n PERT (Program Evaluation and Review Technique) es FALSA:";
 choices[53]= new Array();
 choices[53][0] = "El m&eacute;todo PERT parte de la descomposici&oacute;n del proyecto en una serie de obras parciales o actividades.";
 choices[53][1] = "Para representar las diferentes actividades en que se descompone un proyecto, as&iacute; como sus correspondientes sucesos, se utiliza una estructura de grafo. Los arcos del grafo representan las actividades y los v&eacute;rtices los sucesos.";
 choices[53][2] = "Es la forma habitual de presentar el plan de ejecuci&oacute;n de un proyecto, recogiendo en las filas la relaci&oacute;n de actividades a realizar y en las columnas la escala de tiempos que se est&aacute; manejando.";
 choices[53][3] = "Un suceso es un acontecimiento, un punto en el tiempo, una fecha en el calendario. El suceso no consume recursos, s&oacute;lo indica el principio o el fin de una actividad o de un conjunto de actividades.";
 answers[53] = choices[53][2];
 units[53] = "77";
 comments[53] = "Id Pregunta: 5138. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5139 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Qu&eacute; tipos de herramientas CASE son las que tienen las capacidades de control de versiones, trazabilidad de requisitos y an&aacute;lisis de impacto?";
 choices[54]= new Array();
 choices[54][0] = "Las herramientas de prueba.";
 choices[54][1] = "Las herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[54][2] = "Las herramientas de an&aacute;lisis y dise&ntilde;o.";
 choices[54][3] = "Las herramientas de pantallas.";
 answers[54] = choices[54][1];
 units[54] = "79";
 comments[54] = "Id Pregunta: 5139. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5141 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es el objetivo de la Gesti&oacute;n de Configuraci&oacute;n del Software?";
 choices[55]= new Array();
 choices[55][0] = "Gestionar de forma autom&aacute;tica la creaci&oacute;n, modificaci&oacute;n y borrado de usuarios en un sistema de informaci&oacute;n.";
 choices[55][1] = "Mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realizan cambios incontrolados.";
 choices[55][2] = "Permitir que los programadores de un sistema de informaci&oacute;n conozcan en todo momento los cambios de la configuraci&oacute;n f&iacute;sica que se vaya produciendo a nivel de sistema operativo.";
 choices[55][3] = "Permitir gestionar los recursos que se deidcan a cada tarea de desarrollo de los distintos m&oacute;dulos del sistema.";
 answers[55] = choices[55][1];
 units[55] = "79";
 comments[55] = "Id Pregunta: 5141. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5151 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  En un dise&ntilde;o de Software es deseable que exista entre los distintos m&oacute;dulos que lo componen:";
 choices[56]= new Array();
 choices[56][0] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&aacute;xima.";
 choices[56][1] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&iacute;nima.";
 choices[56][2] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&aacute;xima.";
 choices[56][3] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&iacute;nima.";
 answers[56] = choices[56][2];
 units[56] = "84";
 comments[56] = "Id Pregunta: 5151. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5152 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[57]= new Array();
 choices[57][0] = "Interrelaciones";
 choices[57][1] = "Sometimiento";
 choices[57][2] = "Generalizaci&oacute;n";
 choices[57][3] = "Agregaci&oacute;n";
 answers[57] = choices[57][1];
 units[57] = "82";
 comments[57] = "Id Pregunta: 5152. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5178 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  La t&eacute;cnica PIECES define las categor&iacute;as que deben estudiar conjuntamente el analista y el usuario. &iquest;Cu&aacute;l no es un conjunto valido de categor&iacute;as seg&uacute;n PIECES?";
 choices[58]= new Array();
 choices[58][0] = "Rendimiento, Econom&iacute;a y Control";
 choices[58][1] = "Control, Eficiencia y Servicios";
 choices[58][2] = "Informaci&oacute;n, Eficiencia y Servicios";
 choices[58][3] = "Informaci&oacute;n, Precio y Rendimiento";
 answers[58] = choices[58][3];
 units[58] = "78";
 comments[58] = "Id Pregunta: 5178. ";


//  Id pregunta: 5183 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  En el modelo E/R, las relaciones d&eacute;biles:";
 choices[59]= new Array();
 choices[59][0] = "Relacionan una entidad fuerte con dos o m&aacute;s entidades, fuertes o d&eacute;biles";
 choices[59][1] = "Relacionan dos entidades d&eacute;biles";
 choices[59][2] = "Relacionan una entidad d&eacute;bil con una fuerte";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][2];
 units[59] = "80";
 comments[59] = "Id Pregunta: 5183. ";


//  Id pregunta: 5187 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Con respecto a los diccionarios de datos:";
 choices[60]= new Array();
 choices[60][0] = "Los diccionarios Activos permiten que los programadores puedan definir datos dentro sus programas y que estos no est&eacute;n en el diccionario.";
 choices[60][1] = "Los diccionarios Pasivos fuerzan a los programadores a utilizar las definiciones del diccionario.";
 choices[60][2] = "A y B son ciertas";
 choices[60][3] = "A y B son falsas";
 answers[60] = choices[60][3];
 units[60] = "81";
 comments[60] = "Id Pregunta: 5187. ";


//  Id pregunta: 5188 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[61]= new Array();
 choices[61][0] = "Estado, Comportamiento e Identidad";
 choices[61][1] = "Comportamiento, Identidad y Relaciones";
 choices[61][2] = "Estado, Identidad y Relaciones";
 choices[61][3] = "Todas son falsas";
 answers[61] = choices[61][0];
 units[61] = "82";
 comments[61] = "Id Pregunta: 5188. ";


//  Id pregunta: 6091 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En relaci&oacute;n con las metodolog&iacute;as ligeras de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[62]= new Array();
 choices[62][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[62][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[62][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a ligera.";
 choices[62][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a ligera.";
 answers[62] = choices[62][0];
 units[62] = "79";
 comments[62] = "Id Pregunta: 6091. TIC A 2009";


//  Id pregunta: 6204 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Un requerimiento se define como una condici&oacute;n o necesidad de un usuario para resolver un problema o alcanzar un objetivo. Un requerimiento debe ser (se&ntilde;ale la correcta):";
 choices[63]= new Array();
 choices[63][0] = "Conciso, ambiguo, verificable";
 choices[63][1] = "Necesario, conciso, inconsistente";
 choices[63][2] = "Conciso, completo, verificable";
 choices[63][3] = "Completo, inconsistente, obvio";
 answers[63] = choices[63][2];
 units[63] = "78";
 comments[63] = "Id Pregunta: 6204. TICB-2009, bloque desarrollo";


//  Id pregunta: 6209 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  En Programaci&oacute;n y Dise&ntilde;o de Algoritmos &iquest;Cu&aacute;l de los siguientes es un nivel de acoplamiento?";
 choices[64]= new Array();
 choices[64][0] = "De marca";
 choices[64][1] = "De presentaci&oacute;n";
 choices[64][2] = "De clases";
 choices[64][3] = "De herencia";
 answers[64] = choices[64][0];
 units[64] = "79";
 comments[64] = "Id Pregunta: 6209. TICB-2009, bloque desarrollo";


//  Id pregunta: 6213 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[65]= new Array();
 choices[65][0] = "Diagrama de Componentes";
 choices[65][1] = "Diagrama de Descomposici&oacute;n";
 choices[65][2] = "Diagrama de Despliegue";
 choices[65][3] = "Diagrama de Estructura";
 answers[65] = choices[65][2];
 units[65] = "82";
 comments[65] = "Id Pregunta: 6213. TICB-2009, bloque desarrollo";


//  Id pregunta: 6229 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  El diagrama de Gantt es una herramienta para:";
 choices[66]= new Array();
 choices[66][0] = "Gesti&oacute;n de los recursos";
 choices[66][1] = "Gesti&oacute;n de la calidad";
 choices[66][2] = "Gesti&oacute;n de los riesgos";
 choices[66][3] = "Generaci&oacute;n de gr&aacute;ficas e informes";
 answers[66] = choices[66][0];
 units[66] = "77";
 comments[66] = "Id Pregunta: 6229. TICB-2009, bloque desarrollo";


//  Id pregunta: 6278 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Qui&eacute;n propuso el modelo de ciclo de vida en espiral?";
 choices[67]= new Array();
 choices[67][0] = "Roger Pressman";
 choices[67][1] = "Richard Thomson";
 choices[67][2] = "Barry Boehm ";
 choices[67][3] = "Winston Royce ";
 answers[67] = choices[67][2];
 units[67] = "76";
 comments[67] = "Id Pregunta: 6278. ";


//  Id pregunta: 6282 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; diferencia existe entre factores de &eacute;xito y objetivos de la organizaci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "Los factores de &eacute;xito son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los objetivos son los &ldquo;medios&rdquo; para lograr dicho &eacute;xito";
 choices[68][1] = "Los objetivos son los estudios de mercado mientras que los factores de &eacute;xito son las variaciones en los mercados que modifican dichos estudios";
 choices[68][2] = "Los objetivos son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los factores de &eacute;xito son los &ldquo;medios&rdquo; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = choices[68][2];
 units[68] = "77";
 comments[68] = "Id Pregunta: 6282. ";


//  Id pregunta: 6314 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Qu&eacute; es el Fan-Out en el contexto de dise&ntilde;o de un proyecto de ingenier&iacute;a software?";
 choices[69]= new Array();
 choices[69][0] = "Es una medida de reusabilidad. Es el n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 choices[69][1] = "Es una medida de complejidad. Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[69][2] = "Es una medida de mantenibilidad. Es el n&uacute;mero de m&oacute;dulos iguales.";
 choices[69][3] = "Ninguna de las anteriores.";
 answers[69] = choices[69][1];
 units[69] = "84";
 comments[69] = "Id Pregunta: 6314. ";


//  Id pregunta: 6436 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Cuando se pasa a tablas una relaci&oacute;n n:m";
 choices[70]= new Array();
 choices[70][0] = "Se generan restricciones de integridad referencial.";
 choices[70][1] = "No hay que preocuparse por la integridad referencial.";
 choices[70][2] = "hay que modificar las claves ajenas de las entidades participantes en la relaci&oacute;n.";
 choices[70][3] = "No se generan claves ajenas nada m&aacute;s que para los atributos propios de la relaci&oacute;n.";
 answers[70] = choices[70][0];
 units[70] = "80";
 comments[70] = "Id Pregunta: 6436. NULL";


//  Id pregunta: 6472 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Qu&eacute; elementos de los siguientes NO pertenece a los diagramas de casos de uso?";
 choices[71]= new Array();
 choices[71][0] = "Interfaces.";
 choices[71][1] = "Actor.";
 choices[71][2] = "Paquete.";
 choices[71][3] = "Relaci&oacute;n.";
 answers[71] = choices[71][0];
 units[71] = "84";
 comments[71] = "Id Pregunta: 6472. Castilla La Mancha 2009";


//  Id pregunta: 6609 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En el An&aacute;lisis Estructurado, las entidades externas";
 choices[72]= new Array();
 choices[72][0] = "Definen el Interfaz del Usuario";
 choices[72][1] = "Son parte del sistema";
 choices[72][2] = "Aparecen primero en el Diagrama de Contexto y se van heredando en las explosiones de los DFD's";
 choices[72][3] = "Generan y consumen informaci&oacute;n del sistema";
 answers[72] = choices[72][3];
 units[72] = "81";
 comments[72] = "Id Pregunta: 6609. NULL";


//  Id pregunta: 6611 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  Que NO se puede incluir en un DFD de nivel 2";
 choices[73]= new Array();
 choices[73][0] = "Procesos";
 choices[73][1] = "Decisiones L&oacute;gicas";
 choices[73][2] = "Flujos de Datos";
 choices[73][3] = "Almacenes de Datos";
 answers[73] = choices[73][1];
 units[73] = "81";
 comments[73] = "Id Pregunta: 6611. NULL";


//  Id pregunta: 8333 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil de desarrollo?";
 choices[74]= new Array();
 choices[74][0] = "Programaci&oacute;n Extrema (XP).";
 choices[74][1] = "SCRUM.";
 choices[74][2] = "RDS.";
 choices[74][3] = "Feature-Driven Development (FDD).";
 answers[74] = choices[74][2];
 units[74] = "79";
 comments[74] = "Id Pregunta: 8333. Examen TIC A2 2010";


//  Id pregunta: 8368 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Cuando describimos o identificamos requisitos de una aplicaci&oacute;n con t&eacute;rminos c&oacute;mo eficiencia, accesibilidad, usabilidad o precio deseados, estamos hablando de requisitos:";
 choices[75]= new Array();
 choices[75][0] = "Funcionales.";
 choices[75][1] = "No funcionales";
 choices[75][2] = "Web.";
 choices[75][3] = "No son requisitos.";
 answers[75] = choices[75][1];
 units[75] = "78";
 comments[75] = "Id Pregunta: 8368. Examen TIC A2 2010";


//  Id pregunta: 8392 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Elija la opci&oacute;n que corresponde a una relaci&oacute;n entre casos de usos en UMl:";
 choices[76]= new Array();
 choices[76][0] = "Extiende.";
 choices[76][1] = "Referencia.";
 choices[76][2] = "Hereda.";
 choices[76][3] = "Vincula.";
 answers[76] = choices[76][0];
 units[76] = "84";
 comments[76] = "Id Pregunta: 8392. Examen TIC A2 2010";


//  Id pregunta: 8396 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; tipo de nodo de control se emplea en un diagrama de actividades de UML 2.0 para indicar la sincronizaci&oacute;n de varios flujos concurrentes en uno solo?";
 choices[77]= new Array();
 choices[77][0] = "Divisi&oacute;n (fork node).";
 choices[77][1] = "Bifurcaci&oacute;n (decision node).";
 choices[77][2] = "Fusi&oacute;n (merge node).";
 choices[77][3] = "Union (join node).";
 answers[77] = choices[77][3];
 units[77] = "84";
 comments[77] = "Id Pregunta: 8396. Examen TIC A2 2010";


//  Id pregunta: 8652 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo de Software?";
 choices[78]= new Array();
 choices[78][0] = "Se basa en las Historias de Usuario.";
 choices[78][1] = "Proceso dirigido por casos de uso.";
 choices[78][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[78][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[78] = choices[78][1];
 units[78] = "79";
 comments[78] = "Id Pregunta: 8652. Examen TIC A2 2010 interna";


//  Id pregunta: 8759 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes NO es un lenguaje orientado a objetos?";
 choices[79]= new Array();
 choices[79][0] = "Java.";
 choices[79][1] = "C.";
 choices[79][2] = "Smalltalk.";
 choices[79][3] = "Ada.";
 answers[79] = choices[79][1];
 units[79] = "82, 84";
 comments[79] = "Id Pregunta: 8759. Examen TIC A2 2010 interna";


//  Id pregunta: 8763 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  En el contexto de los lenguajes de programaci&oacute;n orientados a objetos, cuando un objeto recibe de otro objeto o aplicaci&oacute;n una notificaci&oacute;n, ha recibido un:";
 choices[80]= new Array();
 choices[80][0] = "Evento.";
 choices[80][1] = "Comando.";
 choices[80][2] = "Protocolo.";
 choices[80][3] = "Orden.";
 answers[80] = choices[80][0];
 units[80] = "82, 84";
 comments[80] = "Id Pregunta: 8763. Examen TIC A2 2010 interna";


//  Id pregunta: 8875 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &ldquo;Los casos de uso&rdquo; son una t&eacute;cnica utilizada para la especificaci&oacute;n de los requisitos que debe de cumplir el software, &iquest;cu&aacute;l de estas afirmaciones es v&aacute;lida?:";
 choices[81]= new Array();
 choices[81][0] = "No es una t&eacute;cnica v&aacute;lida para desarrollos estructurados";
 choices[81][1] = "Es una t&eacute;cnica v&aacute;lida s&oacute;lo para desarrollos orientados a objetos";
 choices[81][2] = "Es una t&eacute;cnica v&aacute;lida tanto en desarrollos estructurados como en orientaci&oacute;n a objetos, aunque en este caso se propone como t&eacute;cnica obligatoria";
 choices[81][3] = "Es una t&eacute;cnica obligatoria tanto para desarrollos estructurados como para orientados a objetos";
 answers[81] = choices[81][2];
 units[81] = "78";
 comments[81] = "Id Pregunta: 8875. Analista Ayto. Madrid 2010";


//  Id pregunta: 8879 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  El c&oacute;digo objeto se obtiene a partir de:";
 choices[82]= new Array();
 choices[82][0] = "El c&oacute;digo fuente.";
 choices[82][1] = "El c&oacute;digo m&aacute;quina.";
 choices[82][2] = "El c&oacute;digo clase.";
 choices[82][3] = "El c&oacute;digo de enlazado.";
 answers[82] = choices[82][0];
 units[82] = "82";
 comments[82] = "Id Pregunta: 8879. Examen UPM A2 2011";


//  Id pregunta: 8966 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[83]= new Array();
 choices[83][0] = "Hirsch";
 choices[83][1] = "Royce";
 choices[83][2] = "Jackson";
 choices[83][3] = "Bohem";
 answers[83] = choices[83][2];
 units[83] = "76,85";
 comments[83] = "Id Pregunta: 8966. ";


//  Id pregunta: 9459 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es el acoplamiento entre m&oacute;dulos?:";
 choices[84]= new Array();
 choices[84][0] = "Fan-in.";
 choices[84][1] = "Fan-out.";
 choices[84][2] = "Grado de interdependencia entre m&oacute;dulos.";
 choices[84][3] = "N&uacute;mero de clases repetidas en los dos m&oacute;dulos.";
 answers[84] = choices[84][2];
 units[84] = "84";
 comments[84] = "Id Pregunta: 9459. NULL";


//  Id pregunta: 9461 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes diagramas no se usan en UML 2.0?";
 choices[85]= new Array();
 choices[85][0] = "Diagrama de secuencia.";
 choices[85][1] = "Diagrama de comunicaci&oacute;n.";
 choices[85][2] = "Diagrama de transici&oacute;n de estados.";
 choices[85][3] = "Diagrama de elementos.";
 answers[85] = choices[85][3];
 units[85] = "84";
 comments[85] = "Id Pregunta: 9461. NULL";


//  Id pregunta: 9738 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[86]= new Array();
 choices[86][0] = "Intrastructure e Hiperstructure.";
 choices[86][1] = "Basic y Complex.";
 choices[86][2] = "Infrastructure y Superstructure.";
 choices[86][3] = "Infrastructure y Substructure.";
 answers[86] = choices[86][2];
 units[86] = "82";
 comments[86] = "Id Pregunta: 9738. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9739 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes NO es un concepto clave asociado con casos de uso seg&uacute;n la definici&oacute;n de UML 2.4.1?";
 choices[87]= new Array();
 choices[87][0] = "Actors.";
 choices[87][1] = "Use cases.";
 choices[87][2] = "Subject.";
 choices[87][3] = "Scenario.";
 answers[87] = choices[87][3];
 units[87] = "82";
 comments[87] = "Id Pregunta: 9739. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10090 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n SCRUM, &iquest;se pueden modificar el sprintbacklog durante un sprint?";
 choices[88]= new Array();
 choices[88][0] = "No, nunca";
 choices[88][1] = "Solo el Product Owner";
 choices[88][2] = "Solo el Scrum Master";
 choices[88][3] = "Solo el Product Owner a petici&oacute;n de alg&uacute;n Stakeholder";
 answers[88] = choices[88][0];
 units[88] = "79";
 comments[88] = "Id Pregunta: 10090. NULL";


//  Id pregunta: 10091 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil tiene 5 fases claramente diferenciadas?";
 choices[89]= new Array();
 choices[89][0] = "SCRUM";
 choices[89][1] = "LSD";
 choices[89][2] = "Kanban";
 choices[89][3] = "FDD";
 answers[89] = choices[89][3];
 units[89] = "79";
 comments[89] = "Id Pregunta: 10091. NULL";


//  Id pregunta: 10094 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l NO se considera una t&eacute;cnica general del an&aacute;lisis de requisitos?";
 choices[90]= new Array();
 choices[90][0] = "Abstracci&oacute;n";
 choices[90][1] = "Proyecci&oacute;n";
 choices[90][2] = "Partici&oacute;n";
 choices[90][3] = "Todas se consideran t&eacute;cnicas generales";
 answers[90] = choices[90][3];
 units[90] = "78";
 comments[90] = "Id Pregunta: 10094. NULL";


//  Id pregunta: 10098 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es la diferencia entre una maqueta y un prototipo seg&uacute;n M&eacute;trica v3?";
 choices[91]= new Array();
 choices[91][0] = "Ninguna, son lo mismo seg&uacute;n M&eacute;trica v3.";
 choices[91][1] = "Un prototipo describe parte de la funcionalidad del sistema, una maqueta simula el aspecto visual.";
 choices[91][2] = "Una maqueta describe parte de la funcionalidad del sistema, un prototipo simula el aspecto visual.";
 choices[91][3] = "Una maqueta es un tipo de prototipo evolutivo.";
 answers[91] = choices[91][0];
 units[91] = "78";
 comments[91] = "Id Pregunta: 10098. NULL";


//  Id pregunta: 10099 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[92]= new Array();
 choices[92][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[92][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[92][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[92][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[92] = choices[92][1];
 units[92] = "81";
 comments[92] = "Id Pregunta: 10099. NULL";


//  Id pregunta: 10185 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  El n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de un tipo de entidad que pueden estar relacionadas con una ocurrencia del otro u otros tipos de entidad participantes en la relaci&oacute;n se denomina:";
 choices[93]= new Array();
 choices[93][0] = "Tipo de correspondencia";
 choices[93][1] = "Cardinalidad de la relaci&oacute;n";
 choices[93][2] = "Grado";
 choices[93][3] = "No es de inter&eacute;s en el modelo E-R y por tanto no tiene una denominaci&oacute;n espec&iacute;fica";
 answers[93] = choices[93][1];
 units[93] = "80";
 comments[93] = "Id Pregunta: 10185. NULL";


//  Id pregunta: 10641 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Las fases por ciclo en el Modelo de Ciclo de Vida en espiral son:";
 choices[94]= new Array();
 choices[94][0] = "Planificaci&oacute;n, An&aacute;lisis de Riesgos, Ingenier&iacute;a y Evaluaci&oacute;n.";
 choices[94][1] = "Planificaci&oacute;n, Dise&ntilde;o, Codificaci&oacute;n e Integraci&oacute;n.";
 choices[94][2] = "Construcci&oacute;n y Transici&oacute;n.";
 choices[94][3] = "Adaptaci&oacute;n, Composici&oacute;n y Reemplazo.";
 answers[94] = choices[94][0];
 units[94] = "76";
 comments[94] = "Id Pregunta: 10641. ";


//  Id pregunta: 10642 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale la opci&oacute;n correcta:";
 choices[95]= new Array();
 choices[95][0] = "RMI es un m&eacute;todo de invocaci&oacute;n remota para Java exclusivamente.";
 choices[95][1] = "CORBA o RMI pueden utilizarse para la comunicaci&oacute;n entre aplicaciones distribuidas de tecnolog&iacute;as distintas.";
 choices[95][2] = "Un Sistema de Comunicaci&oacute;n entre Procesos (IPC) es una capa de software que permite realizar llamadas a m&eacute;todos situados en m&aacute;quinas remotas. ";
 choices[95][3] = "DCOM es una tecnolog&iacute;a de Sun Microsystems.";
 answers[95] = choices[95][0];
 units[95] = "82";
 comments[95] = "Id Pregunta: 10642. ";


//  Id pregunta: 10827 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos (DFD) es correcta?";
 choices[96]= new Array();
 choices[96][0] = "Son elementos propios de este diagrama: entidades externas, procesos, almacenes de datos y flujos de datos.";
 choices[96][1] = "Son elementos propios de este diagrama: entidades, atributos, relaciones y jerarqu&iacute;as.";
 choices[96][2] = "Son elementos propios de este diagrama: diccionarios de datos, m&oacute;dulos, procesos y flujos.";
 choices[96][3] = "Se trata de una t&eacute;cnica que se emplea en la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI) de M&eacute;trica v3.";
 answers[96] = choices[96][0];
 units[96] = "81";
 comments[96] = "Id Pregunta: 10827. Examen GSI 2014";


//  Id pregunta: 11157 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[97]= new Array();
 choices[97][0] = "Nivel 0: Diagrama de Contexto";
 choices[97][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[97][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[97][3] = "Nivel 4: Diagrama de Procesos";
 answers[97] = choices[97][2];
 units[97] = "81";
 comments[97] = "Id Pregunta: 11157. ";


//  Id pregunta: 11303 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique cu&aacute;l de los siguientes, es un lenguaje de programaci&oacute;n orientado a objetos puro";
 choices[98]= new Array();
 choices[98][0] = "Eiffel";
 choices[98][1] = "Basic";
 choices[98][2] = "LISP";
 choices[98][3] = "Pascal";
 answers[98] = choices[98][0];
 units[98] = "82";
 comments[98] = "Id Pregunta: 11303. ";


//  Id pregunta: 11556 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, aquella reuni&oacute;n que se lleva a cabo todos los d&iacute;as y en la que &uacute;nicamente un miembro de cada equipo participa, se denomina:";
 choices[99]= new Array();
 choices[99][0] = "Daily Scrum";
 choices[99][1] = "Srum de Scrum";
 choices[99][2] = "Sprint Review Meeting";
 choices[99][3] = "Sprint Retrospective";
 answers[99] = choices[99][1];
 units[99] = "79";
 comments[99] = "Id Pregunta: 11556. NULL";


