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

//  Id pregunta: 902 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Para qu&eacute; sirve el objeto BindingCollection de Visual Basic?";
 choices[0]= new Array();
 choices[0][0] = "Es falso que Visual Basic incluya dicho objeto.";
 choices[0][1] = "Es un recolector de memoria que libera la memoria que ha sido usada por objetos que ya no existen.";
 choices[0][2] = "Enlaza clases como or&iacute;genes de datos a controles orientados a datos.";
 choices[0][3] = "Todas las respuestas son falsas.";
 answers[0] = choices[0][2];
 units[0] = "82, 84";
 comments[0] = "Id Pregunta: 902. ";


//  Id pregunta: 1921 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  &iquest; Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programamci&oacute;n orientado a objetos?";
 choices[1]= new Array();
 choices[1][0] = "Encapsulaci&oacute;n";
 choices[1][1] = "Herencia";
 choices[1][2] = "Polimorfismo";
 choices[1][3] = "Historicismo";
 answers[1] = choices[1][3];
 units[1] = "82";
 comments[1] = "Id Pregunta: 1921. ";


//  Id pregunta: 1997 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida, hace enfasis en el control de riesgos?";
 choices[2]= new Array();
 choices[2][0] = "Espiral";
 choices[2][1] = "Cascada";
 choices[2][2] = "Ambos";
 choices[2][3] = "Ninguno";
 answers[2] = choices[2][0];
 units[2] = "76";
 comments[2] = "Id Pregunta: 1997. Pregunta TIC-B 2003";


//  Id pregunta: 2021 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que se entiende por un &quot;objeto&quot; en programaci&oacute;n orientada a objetos?";
 choices[3]= new Array();
 choices[3][0] = "Un objeto es parte de la herencia de una clase";
 choices[3][1] = "Un objeto es una instancia de una clase";
 choices[3][2] = "Un objeto es una instancia de una metaclase";
 choices[3][3] = "Una clase es una instancia de un objeto generada por &quot;upcasting&quot;";
 answers[3] = choices[3][1];
 units[3] = "82";
 comments[3] = "Id Pregunta: 2021. Examen TIC MAP B 2004";


//  Id pregunta: 2075 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La planificaci&oacute;n estrat&eacute;gica responde a las siguientes cuestiones salvo a una, &iquest;cu&aacute;l?:";
 choices[4]= new Array();
 choices[4][0] = "Cu&aacute;l es la posici&oacute;n futura deseable";
 choices[4][1] = "Cu&aacute;l es la situaci&oacute;n actual";
 choices[4][2] = "Cu&aacute;les son los escalones necesarios para pasar de donde estamos a donde deseamos estar";
 choices[4][3] = "Cu&aacute;l es el costo de dichos escalones";
 answers[4] = choices[4][3];
 units[4] = "77";
 comments[4] = "Id Pregunta: 2075. ";


//  Id pregunta: 2085 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no  es de un sistema de tiempo real?";
 choices[5]= new Array();
 choices[5][0] = "Fuertes restricciones en el tiempo de respuesta.";
 choices[5][1] = "La informaci&oacute;n debe estar permanentemente actualizada.";
 choices[5][2] = "El sistema permanecer&aacute; permanentemente activo contestando a cada evento seg&uacute;n las caracter&iacute;sticas del mismo y a la disposici&oacute;n de los recursos.";
 choices[5][3] = "Alto rendimiento del sistema tanto hardware como software, funcionando conjuntamente, lo que hace que el dise&ntilde;ador se encuentre con fuertes problemas de integraci&oacute;n de diversas tecnolog&iacute;as.";
 answers[5] = choices[5][2];
 units[5] = "83";
 comments[5] = "Id Pregunta: 2085. ";


//  Id pregunta: 2093 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El par&aacute;metro m&aacute;s importante de un sistema en tiempo real es:";
 choices[6]= new Array();
 choices[6][0] = "La tasa de errores.";
 choices[6][1] = "El jitter.";
 choices[6][2] = "El retardo m&aacute;ximo.";
 choices[6][3] = "La velocidad de transmisi&oacute;n.";
 answers[6] = choices[6][2];
 units[6] = "83";
 comments[6] = "Id Pregunta: 2093. ";


//  Id pregunta: 2098 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En los sistemas de tiempo real, &iquest;qu&eacute; es m&aacute;s cr&iacute;tico?";
 choices[7]= new Array();
 choices[7][0] = "Fuertes restricciones del tiempo de respuesta.";
 choices[7][1] = "Informaci&oacute;n permanentemente actualizada.";
 choices[7][2] = "Alto rendimiento del sistema.";
 choices[7][3] = "La fiabilidad.";
 answers[7] = choices[7][0];
 units[7] = "83";
 comments[7] = "Id Pregunta: 2098. ";


//  Id pregunta: 2154 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la identificaci&oacute;n de objetos?";
 choices[8]= new Array();
 choices[8][0] = "An&aacute;lisis l&eacute;xico.";
 choices[8][1] = "Tarjetas CRC (Collaboration Rehusabilities Cards).";
 choices[8][2] = "Modelado de informaci&oacute;n.";
 choices[8][3] = "Todos los anteriores son m&eacute;todos de identificaci&oacute;n de objetos.";
 answers[8] = choices[8][3];
 units[8] = "82,84";
 comments[8] = "Id Pregunta: 2154. ";


//  Id pregunta: 2168 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indique la afirmaci&oacute;n falsa:";
 choices[9]= new Array();
 choices[9][0] = "El modelado entidad-relaci&oacute;n es una t&eacute;cnica para el modelado de datos";
 choices[9][1] = "Las redes de Petri son una t&eacute;cnica orientada a objetos";
 choices[9][2] = "El diagrama de flujo de datos es una t&eacute;cnica orientada a los datos";
 choices[9][3] = "El diagrama de clases es una t&eacute;cnica orientada a objetos";
 answers[9] = choices[9][2];
 units[9] = "81";
 comments[9] = "Id Pregunta: 2168. ";


//  Id pregunta: 2180 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes principios no es de los generalmente aceptados del dise&ntilde;o estructurado?";
 choices[10]= new Array();
 choices[10][0] = "Modularizaci&oacute;n.";
 choices[10][1] = "Dependencia modular.";
 choices[10][2] = "Modularizaci&oacute;n conceptual.";
 choices[10][3] = "Principio de 'caja negra'.";
 answers[10] = choices[10][1];
 units[10] = "84";
 comments[10] = "Id Pregunta: 2180. ";


//  Id pregunta: 2236 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Suponiendo un ciclo de vida en cascada con fases de requisitos del sistema global y sistema software, dise&ntilde;o preliminar, dise&ntilde;o detallado y codificaci&oacute;n &iquest;d&oacute;nde se realiza la implementaci&oacute;n del sistema?";
 choices[11]= new Array();
 choices[11][0] = "Dise&ntilde;o detallado";
 choices[11][1] = "Codificaci&oacute;n";
 choices[11][2] = "Requisitos del sistema software";
 choices[11][3] = "Dise&ntilde;o preliminar";
 answers[11] = choices[11][1];
 units[11] = "76";
 comments[11] = "Id Pregunta: 2236. ";


//  Id pregunta: 2238 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Booch, Jacobson y Rumbaugh:";
 choices[12]= new Array();
 choices[12][0] = "crearon C++";
 choices[12][1] = "crearon los diagramas E/R";
 choices[12][2] = "dise&ntilde;aron el primer ordenador que usaba procesamiento real en paralelo";
 choices[12][3] = "crearon UML";
 answers[12] = choices[12][3];
 units[12] = "82";
 comments[12] = "Id Pregunta: 2238. ";


//  Id pregunta: 2253 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Dentro de un diagrama de flujos de datos, a los procesos que no necesitan descomponerse se les denomina:";
 choices[13]= new Array();
 choices[13][0] = "Procesos primitivos";
 choices[13][1] = "Procesos finales";
 choices[13][2] = "Procesos at&oacute;micos";
 choices[13][3] = "Procesos elementales";
 answers[13] = choices[13][0];
 units[13] = "81";
 comments[13] = "Id Pregunta: 2253. ";


//  Id pregunta: 2282 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El modelo de ciclo de vida en cascada:";
 choices[14]= new Array();
 choices[14][0] = "Se compone de una serie de fases en paralelo, siendo necesario que concluyan todas ellas para iniciar la fase del nivel siguiente";
 choices[14][1] = "No contempla la divisi&oacute;n en fases, sino que es una secuencia encadenada de acciones e interacciones";
 choices[14][2] = "Est&aacute; especialmente indicado para sistemas dise&ntilde;ados con orientaci&oacute;n a objetos";
 choices[14][3] = "Se compone de una serie de fases que se suceden secuencialmente, gener&aacute;ndose en cada fase resultados que ser&aacute;n necesarios para iniciar la siguiente fase";
 answers[14] = choices[14][3];
 units[14] = "76";
 comments[14] = "Id Pregunta: 2282. ";


//  Id pregunta: 2283 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El modelo de ciclo de vida en espiral:";
 choices[15]= new Array();
 choices[15][0] = "No permite detectar errores en las primeras fases";
 choices[15][1] = "Se adapta bien a las metodolog&iacute;as orientadas a objetos";
 choices[15][2] = "Implica procedimientos separados para el desarrollo de los programas y su mantenimiento";
 choices[15][3] = "Tiende a pasar por alto los factores de riesgo";
 answers[15] = choices[15][1];
 units[15] = "76";
 comments[15] = "Id Pregunta: 2283. ";


//  Id pregunta: 2286 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El modelo de UML que describe las necesidades de los usuarios es el:";
 choices[16]= new Array();
 choices[16][0] = "modelo de casos de uso";
 choices[16][1] = "modelo de despliegue";
 choices[16][2] = "modelo de interacci&oacute;n";
 choices[16][3] = "modelo de realizaci&oacute;n";
 answers[16] = choices[16][0];
 units[16] = "82";
 comments[16] = "Id Pregunta: 2286. ";


//  Id pregunta: 2303 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En an&aacute;lisis estructurado, el principal objetivo de un DFD es:";
 choices[17]= new Array();
 choices[17][0] = "Construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[17][1] = "Representar gr&aacute;ficamente las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[17][2] = "Describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[17][3] = "Establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[17] = choices[17][0];
 units[17] = "81";
 comments[17] = "Id Pregunta: 2303. ";


//  Id pregunta: 2310 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el modelo de ciclo de vida en espiral, cada ciclo de la espiral comienza con la etapa de:";
 choices[18]= new Array();
 choices[18][0] = "Planificaci&oacute;n";
 choices[18][1] = "An&aacute;lisis de riesgos";
 choices[18][2] = "Desarrollo del prototipo";
 choices[18][3] = "Evaluaci&oacute;n";
 answers[18] = choices[18][0];
 units[18] = "76";
 comments[18] = "Id Pregunta: 2310. ";


//  Id pregunta: 2313 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el modelo en cascada puede decirse que:";
 choices[19]= new Array();
 choices[19][0] = "Est&aacute; dise&ntilde;ado para la utilizaci&oacute;n de herramientas CASE";
 choices[19][1] = "El usuario es el principal protagonista";
 choices[19][2] = "La introducci&oacute;n de una fase de dise&ntilde;o r&aacute;pido servir&iacute;a para validar las especificaciones";
 choices[19][3] = "Todas las respuestas anteriores son ciertas";
 answers[19] = choices[19][2];
 units[19] = "76";
 comments[19] = "Id Pregunta: 2313. ";


//  Id pregunta: 2327 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En la orientaci&oacute;n al objeto, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[20]= new Array();
 choices[20][0] = "Una clase define a un conjunto de objetos diferentes que pueden actuar de formas muy similares";
 choices[20][1] = "Una clase es un conjunto de m&eacute;todos y datos que resumen las caracter&iacute;sticas comunes de todos los objetos que la componen";
 choices[20][2] = "A cada uno de los objetos individuales pertenecientes a una clase se le denomina m&eacute;todo";
 choices[20][3] = "Al conjunto de las clases utilizadas para una determinada tarea de programaci&oacute;n se le denomina biblioteca de clases";
 answers[20] = choices[20][2];
 units[20] = "82";
 comments[20] = "Id Pregunta: 2327. ";


//  Id pregunta: 2345 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En programaci&oacute;n orientada a objetos:";
 choices[21]= new Array();
 choices[21][0] = "Los objetos son m&oacute;dulos que contienen s&oacute;lo datos, de cualquier tipo";
 choices[21][1] = "Los objetos son m&oacute;dulos que contienen los datos y las instrucciones u operaciones que manipulan esos datos";
 choices[21][2] = "Los objetos pueden ser tratados como cualquier otro dato mediante un lenguaje procedural";
 choices[21][3] = "No existe una concepci&oacute;n din&aacute;mica del objeto como una entidad que exista en tiempo de ejecuci&oacute;n";
 answers[21] = choices[21][1];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2345. ";


//  Id pregunta: 2384 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar cu&aacute;l es una regla de construcci&oacute;n de un proceso dentro de un Diagrama de Flujo de Datos:";
 choices[22]= new Array();
 choices[22][0] = "Los procesos transforman los flujos de datos de entrada en flujos de salida de datos";
 choices[22][1] = "Se puede transformar un dato en varios mediante un proceso";
 choices[22][2] = "Se necesita siempre un proceso entre una entidad externa y un almac&eacute;n de datos";
 choices[22][3] = "Todas las anteriores son reglas de construcci&oacute;n de un proceso";
 answers[22] = choices[22][3];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2384. ";


//  Id pregunta: 2438 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las &quot;Collaboration Responsabilities Cards&quot; se usan en:";
 choices[23]= new Array();
 choices[23][0] = "La localizaci&oacute;n de objetos.";
 choices[23][1] = "La direcci&oacute;n de reuniones.";
 choices[23][2] = "La negociaci&oacute;n.";
 choices[23][3] = "Los diagramas generales de un sistema.";
 answers[23] = choices[23][0];
 units[23] = "82,84";
 comments[23] = "Id Pregunta: 2438. ";


//  Id pregunta: 2454 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los criterios, ordenados de menor a mayor, para definir el nivel de cohesi&oacute;n son:";
 choices[24]= new Array();
 choices[24][0] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[24][1] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[24][2] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[24][3] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 answers[24] = choices[24][1];
 units[24] = "84";
 comments[24] = "Id Pregunta: 2454. ";


//  Id pregunta: 2490 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[25]= new Array();
 choices[25][0] = "El dominio de la informaci&oacute;n";
 choices[25][1] = "La subdivisi&oacute;n del problema";
 choices[25][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[25][3] = "Los tres anteriores";
 answers[25] = choices[25][3];
 units[25] = "78,80,81,82";
 comments[25] = "Id Pregunta: 2490. ";


//  Id pregunta: 2494 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;En un diagrama de casos de uso se tienen los siguientes componentes&quot;:";
 choices[26]= new Array();
 choices[26][0] = "Caso de uso.";
 choices[26][1] = "Carpetas.";
 choices[26][2] = "Actor.";
 choices[26][3] = "Relaci&oacute;n.";
 answers[26] = choices[26][1];
 units[26] = "82,84";
 comments[26] = "Id Pregunta: 2494. ";


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


//  Id pregunta: 2506 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Un an&aacute;lisis de requerimientos puede dividirse en las siguientes &aacute;reas principales:";
 choices[28]= new Array();
 choices[28][0] = "Evaluaci&oacute;n y s&iacute;ntesis, especificaci&oacute;n y documentaci&oacute;n del problema";
 choices[28][1] = "Reconocimiento del problema, evaluaci&oacute;n y s&iacute;ntesis, especificaci&oacute;n y revisi&oacute;n";
 choices[28][2] = "Reconocimiento del problema, especificaci&oacute;n y revisi&oacute;n";
 choices[28][3] = "Revisi&oacute;n, evaluaci&oacute;n y s&iacute;ntesis, especificaci&oacute;n del problema y documentaci&oacute;n del mismo";
 answers[28] = choices[28][1];
 units[28] = "78";
 comments[28] = "Id Pregunta: 2506. ";


//  Id pregunta: 2509 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Un sistema de an&aacute;lisis de sistema en tiempo real puede ser:";
 choices[29]= new Array();
 choices[29][0] = "DOLMEN.";
 choices[29][1] = "DESIGN RT.";
 choices[29][2] = "RT-XML.";
 choices[29][3] = "DARTS.";
 answers[29] = choices[29][3];
 units[29] = "83";
 comments[29] = "Id Pregunta: 2509. ";


//  Id pregunta: 2510 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Una caracter&iacute;stica de los sistemas en tiempo real es:";
 choices[30]= new Array();
 choices[30][0] = "Gesti&oacute;n de memoria virtual eficiente.";
 choices[30][1] = "Inexistencia de mecanismos de exclusi&oacute;n mutua que retrasen el flujo en &quot;real time&quot;.";
 choices[30][2] = "Sem&aacute;foros para dirigir los procesos.";
 choices[30][3] = "Gesti&oacute;n de los accesos a disco exclusivamente mediante interrupciones.";
 answers[30] = choices[30][2];
 units[30] = "83";
 comments[30] = "Id Pregunta: 2510. ";


//  Id pregunta: 2577 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  La planificaci&oacute;n estrat&eacute;gica es";
 choices[31]= new Array();
 choices[31][0] = "un  momento en el tiempo para tomar decisiones";
 choices[31][1] = "una herramienta para anticiparse a los cambios";
 choices[31][2] = "una herramienta que permite que los cambios sean consecuencia de las acciones emprendidas por la organizaci&oacute;n";
 choices[31][3] = "una herramineta que se limita e extrapolar el presente al futuro";
 answers[31] = choices[31][2];
 units[31] = "77";
 comments[31] = "Id Pregunta: 2577. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2623 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l no pertenece al an&aacute;lisis DAFO?";
 choices[32]= new Array();
 choices[32][0] = "debilidades";
 choices[32][1] = "Amenazas";
 choices[32][2] = "Flexibilidad";
 choices[32][3] = "Oportunidades";
 answers[32] = choices[32][2];
 units[32] = "77";
 comments[32] = "Id Pregunta: 2623. ";


//  Id pregunta: 2626 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;En el Modelo Entidad Relaci&oacute;n, qu&eacute; es el tipo de correspondencia?";
 choices[33]= new Array();
 choices[33][0] = "Es el n&uacute;mero de entidades que participan en una asociaci&oacute;n.";
 choices[33][1] = "Representa el tipo de entidades que participan en una asociaci&oacute;n";
 choices[33][2] = "Es el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de una entidad que pueden estar asociadas con una ocurrencia de otra u otras entidades participantes en la asociaci&oacute;n.";
 choices[33][3] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada entidad conectada que pueden intervenir en una ocurrencia de la asociaci&oacute;n.";
 answers[33] = choices[33][3];
 units[33] = "80";
 comments[33] = "Id Pregunta: 2626. ";


//  Id pregunta: 2627 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?";
 choices[34]= new Array();
 choices[34][0] = "Diagrama de despliegue.";
 choices[34][1] = "Diagrama de componentes.";
 choices[34][2] = "Diagrama de descomposici&oacute;n.";
 choices[34][3] = "Diagrama de estructura.";
 answers[34] = choices[34][0];
 units[34] = "82,84";
 comments[34] = "Id Pregunta: 2627. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2633 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; relaci&oacute;n hay entre usuarios y actores en la t&eacute;cnica de los casos de uso?";
 choices[35]= new Array();
 choices[35][0] = "Un usuario se identifica &uacute;nicamente con un actor";
 choices[35][1] = "Un usuario solamente puede ser varios actores";
 choices[35][2] = "Un actor solamente puede ser varios usuarios";
 choices[35][3] = "Un actor puede ser varios usuarios y un usuario varios actores";
 answers[35] = choices[35][3];
 units[35] = "78,84";
 comments[35] = "Id Pregunta: 2633. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2641 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  En el dise&ntilde;o Orientado a objetos,  &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[36]= new Array();
 choices[36][0] = "Una clase es la implantaci&oacute;n de un tipo de objeto.";
 choices[36][1] = "Las clases se representan mediante diagramas.";
 choices[36][2] = "Una clase especifica la estructura de datos y los m&eacute;todos operativos permitidos que se aplican a cada uno de sus objetos.";
 choices[36][3] = "Una clase especifica la estructura de datos de los objetos y las operaciones que se utilizan para tener acceso a los objetos.";
 answers[36] = choices[36][0];
 units[36] = "84";
 comments[36] = "Id Pregunta: 2641. ";


//  Id pregunta: 2644 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  En el modelo Entidad Relaci&oacute;n, &iquest; qu&eacute; es una entidad regular?";
 choices[37]= new Array();
 choices[37][0] = "Es aquella que tiene existencia por si misma, no depende de ninguna otra entidad.";
 choices[37][1] = "Es aquella que su existencia depende de otra entidad del modelo y sin la otra entidad no tiene sentido &eacute;sta.";
 choices[37][2] = " Una entidad en la que el n&uacute;mero m&aacute;ximo de ocurrencias que pueden estar asociadas a ella con una ocurrencia de otra u otras entidades participantes es 1.";
 choices[37][3] = "  Una entidad que tiene atributos derivados.";
 answers[37] = choices[37][0];
 units[37] = "80";
 comments[37] = "Id Pregunta: 2644. ";


//  Id pregunta: 2716 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  Comparando Java y C++, indique la afirmaci&oacute;n Incorrecta";
 choices[38]= new Array();
 choices[38][0] = "Java es debilmente tipado y C++ es fuertemente tipado";
 choices[38][1] = "Java es altamente portable y C++ tiene aspectos no portables";
 choices[38][2] = "Java es interpretado y C++ es compilado";
 choices[38][3] = "Java no tiene herencia multiple y C++ si";
 answers[38] = choices[38][0];
 units[38] = "82";
 comments[38] = "Id Pregunta: 2716. ";


//  Id pregunta: 2724 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En cuanto al modelo en espiral:";
 choices[39]= new Array();
 choices[39][0] = "La dimensi&oacute;n radial da cuenta del coste acumulativo";
 choices[39][1] = "La dimensi&oacute;n angular da idea del avance realizado en cada ciclo";
 choices[39][2] = "Las dos anteriores son correctas";
 choices[39][3] = "las dos primeras son falsas";
 answers[39] = choices[39][2];
 units[39] = "76";
 comments[39] = "Id Pregunta: 2724. ";


//  Id pregunta: 2744 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Son objetivos que persigue el An&aacute;lisis de Sistemas de Informaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Identificar las necesidades del cliente";
 choices[40][1] = "Crear una definici&oacute;n clara y precisa del sistema, que sea la base para todo lo que sigue despu&eacute;s";
 choices[40][2] = "Establecer las restricciones de coste y tiempo que incidir&aacute;n en el futuro desarrollo";
 choices[40][3] = "Todas las anteriores";
 answers[40] = choices[40][3];
 units[40] = "80";
 comments[40] = "Id Pregunta: 2744. ";


//  Id pregunta: 2745 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;C&oacute;mo se denomina la estrategia para obtener el diagrama de  un DFD si existe un proceso que en funcion de un flujo de llegada determina la eleccion de uno o m&aacute;s flujos de informacion?";
 choices[41]= new Array();
 choices[41][0] = "An&aacute;lisis de transacci&oacute;n";
 choices[41][1] = "An&aacute;lisis de Transformaci&oacute;n";
 choices[41][2] = "An&aacute;lisis de flujo";
 choices[41][3] = "An&aacute;lisis de Informaci&oacute;n";
 answers[41] = choices[41][0];
 units[41] = "81";
 comments[41] = "Id Pregunta: 2745. ";


//  Id pregunta: 2753 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;les son las cuatro fases del proceso unificado de desarrollo de software?";
 choices[42]= new Array();
 choices[42][0] = "Comienzo, incepci&oacute;n, transici&oacute;n y fin";
 choices[42][1] = "An&aacute;lisis, Dise&ntilde;o, Implementaci&oacute;n y pruebas";
 choices[42][2] = "An&aacute;lisis de requisitos, dise&ntilde;o, desarrollo y pruebas";
 choices[42][3] = "Inicio, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n";
 answers[42] = choices[42][3];
 units[42] = "82";
 comments[42] = "Id Pregunta: 2753. ";


//  Id pregunta: 2768 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n son orientados a objetos puros?";
 choices[43]= new Array();
 choices[43][0] = "Object-Pascal.";
 choices[43][1] = "C++.";
 choices[43][2] = "Trellis.";
 choices[43][3] = "CLOS.";
 answers[43] = choices[43][2];
 units[43] = "84";
 comments[43] = "Id Pregunta: 2768. ";


//  Id pregunta: 2769 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Referido al dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes opciones representa tipos de acoplamiento correctos?";
 choices[44]= new Array();
 choices[44][0] = "Directo, de datos simple, por estampado, de control, externo, com&uacute;n, por contenido.";
 choices[44][1] = "Directo, de datos compuestos, por estampado, de control, externo, com&uacute;n, por contenido.";
 choices[44][2] = "Directo, de datos simple, por estampado, de control, externo, com&uacute;n, por contenido, procedimental.";
 choices[44][3] = "Directo, de datos simple, por estampado, de control, externo, funcional, por contenido.";
 answers[44] = choices[44][0];
 units[44] = "84";
 comments[44] = "Id Pregunta: 2769. ";


//  Id pregunta: 2775 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre los prototipos...";
 choices[45]= new Array();
 choices[45][0] = "Son un modelo a escala o facs&iacute;mil de lo real que lleva a cabo la totalidad de las funciones necesarias del sistema final.";
 choices[45][1] = "En la fase de dise&ntilde;o se utiliza para definir los requerimientos del usuario.";
 choices[45][2] = "Se debe definir su objetivo a medida que se desarrolla.";
 choices[45][3] = "Los prototipos de pantalla permiten evaluar la posici&oacute;n de informaci&oacute;n sobre la pantalla.";
 answers[45] = choices[45][3];
 units[45] = "85";
 comments[45] = "Id Pregunta: 2775. ";


//  Id pregunta: 2778 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  La utilizaci&oacute;n de prototipos tiene como objetivo/s:";
 choices[46]= new Array();
 choices[46][0] = "Reducir el riesgo del proyecto";
 choices[46][1] = "Conseguir mayor aceptaci&oacute;n del sistema final por el &aacute;rea usuaria";
 choices[46][2] = "Definir con exactitud los requisitos de los usuarios";
 choices[46][3] = "las respuestas a) y b) son correctas";
 answers[46] = choices[46][0];
 units[46] = "85";
 comments[46] = "Id Pregunta: 2778. ";


//  Id pregunta: 4299 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Si est&aacute; utilizando la t&eacute;cnica de despliegue de la funci&oacute;n calidad (DFC) para traducir las necesidades del cliente en requisitos, el an&aacute;lisis de valor:";
 choices[47]= new Array();
 choices[47][0] = "Se emplea para determinar el valor de cada funci&oacute;n requerida por el sistema.";
 choices[47][1] = "Se lleva a cabo para determinar la prioridad relativa de requisitos";
 choices[47][2] = "Sirve para identificar los acontecimientos que el sistema debe producir y consumir.";
 choices[47][3] = "Examina el comportamiento del sistema dentro del contexto de su entorno.";
 answers[47] = choices[47][1];
 units[47] = "78";
 comments[47] = "Id Pregunta: 4299. ";


//  Id pregunta: 4307 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes opciones no es una heur&iacute;stica de dise&ntilde;o aplicable a los Diagramas de Estructura preliminares?:";
 choices[48]= new Array();
 choices[48][0] = "Aislar el centro de transformaci&oacute;n especificando los l&iacute;mites del flujo de entrada y salida.";
 choices[48][1] = "No utilizar variables globales.";
 choices[48][2] = "Optimizar los grados de entrada y salida de los m&oacute;dulos.";
 choices[48][3] = "No dejar que un dato se obtenga en un m&oacute;dulo lejano al m&oacute;dulo donde se utiliza.";
 answers[48] = choices[48][0];
 units[48] = "81";
 comments[48] = "Id Pregunta: 4307. ";


//  Id pregunta: 4371 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  El Ciclo de Vida del software es:";
 choices[49]= new Array();
 choices[49][0] = "Un patr&oacute;n del comportamiento de los dise&ntilde;adores.";
 choices[49][1] = "Un modelo del proceso de construcci&oacute;n del Software";
 choices[49][2] = "Un modelo de especificaciones establecido por el analista.";
 choices[49][3] = "Un esquema para integrar el sistema completo.";
 answers[49] = choices[49][1];
 units[49] = "76";
 comments[49] = "Id Pregunta: 4371. ";


//  Id pregunta: 4393 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, cuando estamos hablando del mantenimiento del software?";
 choices[50]= new Array();
 choices[50][0] = "Un sistema de informaci&oacute;n debe concebirse como algo est&aacute;tico, que permanece invariable desde que se crea hasta su extinci&oacute;n, pues de otro modo, nunca se pueden estabilizar los requisitos funcionales de dicho sistema.";
 choices[50][1] = "Los productos software requieren una evoluci&oacute;n continua durante todo su ciclo de vida para irse adaptando a las nuevas necesidades.";
 choices[50][2] = "La evoluci&oacute;n del sistema de informaci&oacute;n tiene como finalidad &uacute;ltima su adecuaci&oacute;n al entorno, de forma que se adapte para realizar nuevas funciones, trabajar m&aacute;s efectivamente o m&aacute;s correctamente.";
 choices[50][3] = "La necesidad de evoluci&oacute;n de los sistemas de informaci&oacute;n hace muy recomendable utilizar una metodolog&iacute;a fiable que permita gestionar los cambios y evaluar el correcto funcionamiento del sistema una vez realizados los cambios necesarios.";
 answers[50] = choices[50][0];
 units[50] = "76";
 comments[50] = "Id Pregunta: 4393. ";


//  Id pregunta: 4934 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Clara acaba de recibir un documento de especificaciones de usuario de una aplicaci&oacute;n. El requisito establecidopara el desarrollo de que: &ldquo;El software debe soportar al menos 1.000.000 libros, 7.000 lectores y 250 materias&rdquo;,se enmarcar&iacute;a dentro de los requisitos de:";
 choices[51]= new Array();
 choices[51][0] = "Operaci&oacute;n.";
 choices[51][1] = "Funcionalidad.";
 choices[51][2] = "Recursos.";
 choices[51][3] = "Capacidad.";
 answers[51] = choices[51][3];
 units[51] = "78";
 comments[51] = "Id Pregunta: 4934. Examen TIC B 2007";


//  Id pregunta: 4936 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Dentro de la t&eacute;cnica de desarrollo de sistemas de informaci&oacute;n denominada Diagrama de Interacci&oacute;n, el periodo de tiempo en el cual el objeto se encuentra ejecutando alguna operaci&oacute;n en un diagrama de secuencia se denomina:";
 choices[52]= new Array();
 choices[52][0] = "L&iacute;nea de vida.";
 choices[52][1] = "Foco de control.";
 choices[52][2] = "Tiempo de latencia.";
 choices[52][3] = "Per&iacute;odo de acci&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "84";
 comments[52] = "Id Pregunta: 4936. Examen TIC B 2007";


//  Id pregunta: 5137 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Qu&eacute; es un diagrama de Gantt?";
 choices[53]= new Array();
 choices[53][0] = "Es un diagrama de barras en forma de tabla donde se hace una referencia cruzada entre las tareas y los tiempos de duraci&oacute;n de las mismas.";
 choices[53][1] = "Es un cuadro o tabla formado por dos columnas, en la primera se se&ntilde;alan las actividades y en la segunda se indican las fechas de finalizaci&oacute;n.";
 choices[53][2] = "Partiendo de la descomposici&oacute;n de un proyecto en actividades, estas ocurren entre dos sucesos. Se representa mediante un grafo en donde las actividades se reflejan mediante arcos y los sucesos mediante v&eacute;rtices.";
 choices[53][3] = "Es una matriz de referencias cruzadas entre los miembros del equipo de proyecto y su dedicaci&oacute;n al proyecto.";
 answers[53] = choices[53][0];
 units[53] = "77";
 comments[53] = "Id Pregunta: 5137. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5177 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En lo referente a las t&eacute;cnicas de sesiones JAD y JRP. Es cierto que:";
 choices[54]= new Array();
 choices[54][0] = "Son t&eacute;cnicas que promueven la cooperaci&oacute;n entre los usuarios y los desarrolladores para lograr que ambas partes compartan una visi&oacute;n com&uacute;n";
 choices[54][1] = "JRP se usa para el dise&ntilde;o conjunto de aplicaciones";
 choices[54][2] = "JAD se usa para la planificaci&oacute;n de requisitos";
 choices[54][3] = "Todas son ciertas";
 answers[54] = choices[54][0];
 units[54] = "78,86";
 comments[54] = "Id Pregunta: 5177. ";


//  Id pregunta: 5195 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  El acoplamiento por estampado implica:";
 choices[55]= new Array();
 choices[55][0] = "Comunicaci&oacute;n entre dos m&oacute;dulos a trav&eacute;s de un tercer m&oacute;dulo intermedio.";
 choices[55][1] = "El aislamiento de los m&oacute;dulos respecto de una estructura de datos reservada.";
 choices[55][2] = "Comunicaci&oacute;n entre m&oacute;dulos haciendo referencia a la misma estructura de datos.";
 choices[55][3] = "Ninguna de las anteriores es correcta.";
 answers[55] = choices[55][2];
 units[55] = "84";
 comments[55] = "Id Pregunta: 5195. ";


//  Id pregunta: 5197 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n las clasificaci&oacute;n de Whitten, cu&aacute;les son los cuatro tipos de prototipos:";
 choices[56]= new Array();
 choices[56][0] = "Prototipos de Viabilidad, de Necesidad, de Dise&ntilde;o y de Validaci&oacute;n";
 choices[56][1] = "Prototipos de Viabilidad, de M&iacute;nimos, de Dise&ntilde;o y de Implantaci&oacute;n";
 choices[56][2] = "Prototipos de Viabilidad, de Necesidad, de Interfaz y de Implantaci&oacute;n";
 choices[56][3] = "Prototipos de Viabilidad, de Necesidad, de Dise&ntilde;o y de Implantaci&oacute;n";
 answers[56] = choices[56][3];
 units[56] = "85";
 comments[56] = "Id Pregunta: 5197. ";


//  Id pregunta: 5201 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Cu&aacute;l de las siguientes no se considera una regla b&aacute;sica en  las reuniones de Brainstorming:";
 choices[57]= new Array();
 choices[57][0] = "Ninguna cr&iacute;tica";
 choices[57][1] = "Ser convencional";
 choices[57][2] = "Cuantas m&aacute;s ideas mejor";
 choices[57][3] = " Apoyarse en otras ideas";
 answers[57] = choices[57][1];
 units[57] = "78";
 comments[57] = "Id Pregunta: 5201. ";


//  Id pregunta: 5229 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Respecto al prototipado r&aacute;pido es incorrecto:";
 choices[58]= new Array();
 choices[58][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[58][1] = "Tambi&eacute;n denominados de usar y tirar, ya que una vez aceptado el prototipo se desecha y se comienza el desarrollo desde cero.";
 choices[58][2] = "Se deben poder construir con facilidad para evaluarlos en una fase temprana del desarrollo";
 choices[58][3] = "Deben ser desarrollados en poco tiempo";
 answers[58] = choices[58][0];
 units[58] = "76";
 comments[58] = "Id Pregunta: 5229. ";


//  Id pregunta: 5230 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  No es cierto respecto al prototipado evolutivo:";
 choices[59]= new Array();
 choices[59][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[59][1] = "En este modelo no se asume que los requisitos vayan a cambiar continuamente desde el principio.";
 choices[59][2] = "Se construye una implementaci&oacute;n parcial de los requisitos conocidos, para que el usuario comprenda mejor la totalidad de los requisitos deseados";
 choices[59][3] = "Est&aacute; relacionado con el concepto de Desarrollo R&aacute;pido de Aplicaciones (RAD)";
 answers[59] = choices[59][1];
 units[59] = "76";
 comments[59] = "Id Pregunta: 5230. ";


//  Id pregunta: 5238 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Sobre la Programaci&oacute;n Extrema:";
 choices[60]= new Array();
 choices[60][0] = "Los proyectos que usan esta metodolog&iacute;a comienzan obteniendo Historias de usuario(User Stories) y desarrollando soluciones (Spike solutions) sobre una arquitectura general de la soluci&oacute;n (Architectural Spike)";
 choices[60][1] = "A partir de aqu&iacute;, se mantiene una reuni&oacute;n a la que acudir&aacute;n clientes/usuarios, desarrolladores y gestores para acordar entre todos lo que se debe hacer";
 choices[60][2] = "Las iteraciones sobre lo que se tiene que hacer generar&aacute;n pruebas que generar&aacute;n m&aacute;s iteraciones sobre el sistema.";
 choices[60][3] = "Todas las anteriores son correctas";
 answers[60] = choices[60][3];
 units[60] = "76";
 comments[60] = "Id Pregunta: 5238. ";


//  Id pregunta: 5246 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Seg&uacute;n Metrica v3, el Plan de Sistemas de Informaci&oacute;n";
 choices[61]= new Array();
 choices[61][0] = "Se compone de 9 actividades, que deben realizarse secuencialmente sin que ninguna de ellas pueda realizarse en paralelo";
 choices[61][1] = "Tiene por objeto obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que responda a los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[61][2] = "Define el programa general de actuaciones para la planificaci&oacute;n del desarrollo de los sistemas de informaci&oacute;n y su presupuestaci&oacute;n";
 choices[61][3] = "Todas las anteriores son correctas";
 answers[61] = choices[61][1];
 units[61] = "77";
 comments[61] = "Id Pregunta: 5246. ";


//  Id pregunta: 6272 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientesa no es un objetivo b&aacute;sico que debe cubrir un ciclo de vida?";
 choices[62]= new Array();
 choices[62][0] = "Asegurar la consistencia con el resto de los sistemas de informaci&oacute;n de la organizaci&oacute;n";
 choices[62][1] = "Garantizar la satisfacci&oacute;n del cliente";
 choices[62][2] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto (calendario y presupuesto)";
 choices[62][3] = "Definir las actividades a realizar y en qu&eacute; orden";
 answers[62] = choices[62][1];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6272. ";


//  Id pregunta: 6274 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qui&eacute;n defini&oacute; el modelo de ciclo de vida en casacada?";
 choices[63]= new Array();
 choices[63][0] = "Roger Pressman";
 choices[63][1] = "Roger Smith";
 choices[63][2] = "Winston Royce ";
 choices[63][3] = "Carma McClure";
 answers[63] = choices[63][2];
 units[63] = "76";
 comments[63] = "Id Pregunta: 6274. ";


//  Id pregunta: 6279 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  No es una dificultad del modelo de ciclo de vida en espiral:";
 choices[64]= new Array();
 choices[64][0] = "Dificultad a la hora de definir requisitos";
 choices[64][1] = "Dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[64][2] = "Necesidad de elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[64][3] = "Adaptar su aplicabilidad al software contratado";
 answers[64] = choices[64][0];
 units[64] = "76";
 comments[64] = "Id Pregunta: 6279. ";


//  Id pregunta: 6280 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;les de las siguientes no es una fase definida en la planificaci&oacute;n estrat&eacute;gica?";
 choices[65]= new Array();
 choices[65][0] = "Formulaci&oacute;n de objetivos organizacionales";
 choices[65][1] = "An&aacute;lisis de las fortalezas y limitaciones de la empresa";
 choices[65][2] = "Reestructuraci&oacute;n de la empresa";
 choices[65][3] = "Formulaci&oacute;n de alternativas estrat&eacute;gicas";
 answers[65] = choices[65][2];
 units[65] = "77";
 comments[65] = "Id Pregunta: 6280. ";


//  Id pregunta: 6285 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[66]= new Array();
 choices[66][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[66][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[66][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[66][3] = "Todos lo son";
 answers[66] = choices[66][3];
 units[66] = "77";
 comments[66] = "Id Pregunta: 6285. ";


//  Id pregunta: 6291 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica que deba cumplir un requisito en un an&aacute;lisis de la informaci&oacute;n para que sea de utilidad?";
 choices[67]= new Array();
 choices[67][0] = "Completo";
 choices[67][1] = "Verificable";
 choices[67][2] = "Dif&iacute;cil de modificar";
 choices[67][3] = "Consistente";
 answers[67] = choices[67][2];
 units[67] = "78";
 comments[67] = "Id Pregunta: 6291. ";


//  Id pregunta: 6293 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Brainstorming";
 choices[68][1] = "An&aacute;lisis de Mercado";
 choices[68][2] = "Factores Cr&iacute;ticos de &Eacute;xito";
 choices[68][3] = "Entrevistas";
 answers[68] = choices[68][2];
 units[68] = "78";
 comments[68] = "Id Pregunta: 6293. ";


//  Id pregunta: 6295 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Entrevistas";
 choices[69][1] = "An&aacute;lisis de Mercado";
 choices[69][2] = "Entorno de Bucles Adaptativo";
 choices[69][3] = "Brainstorming";
 answers[69] = choices[69][2];
 units[69] = "78";
 comments[69] = "Id Pregunta: 6295. ";


//  Id pregunta: 6307 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Qu&eacute; se entiende por acoplamiento en el contexto del dise&ntilde;o de un sistema transaccional?";
 choices[70]= new Array();
 choices[70][0] = "Indica el grado de interdependencia entre los m&oacute;dulos.";
 choices[70][1] = "Indica la relaci&oacute;n que existe entre los elementos de un mismo m&oacute;dulo.";
 choices[70][2] = "Indica c&oacute;mo se relacionan las entidades de datos del sistema.";
 choices[70][3] = "Ninguna de las anteriores.";
 answers[70] = choices[70][0];
 units[70] = "83";
 comments[70] = "Id Pregunta: 6307. ";


//  Id pregunta: 6310 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de dise&ntilde;o de sistemas de tiempo real?";
 choices[71]= new Array();
 choices[71][0] = "Rational Rose-RT.";
 choices[71][1] = "PERTS.";
 choices[71][2] = "TimeWiz.";
 choices[71][3] = "ADA.";
 answers[71] = choices[71][3];
 units[71] = "83";
 comments[71] = "Id Pregunta: 6310. ";


//  Id pregunta: 6315 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un dise&ntilde;o orientado a objetos?";
 choices[72]= new Array();
 choices[72][0] = "Acoplamiento fuerte.";
 choices[72][1] = "Modularidad.";
 choices[72][2] = "Extensibilidad.";
 choices[72][3] = "Reusabilidad.";
 answers[72] = choices[72][0];
 units[72] = "84";
 comments[72] = "Id Pregunta: 6315. ";


//  Id pregunta: 6434 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[73]= new Array();
 choices[73][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[73][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[73][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[73][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[73] = choices[73][1];
 units[73] = "80";
 comments[73] = "Id Pregunta: 6434. NULL";


//  Id pregunta: 6437 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Cuando se transforma un modelo E/R a modelo relacional las relaciones 1:n:";
 choices[74]= new Array();
 choices[74][0] = "Se transforman por el mecanismo de propagaci&oacute;n de clave ajena.";
 choices[74][1] = "Generan una tabla igual que una relaci&oacute;n n:m.";
 choices[74][2] = "Dependiendo del tipo de consultas posteriores se genera o no la tabla.";
 choices[74][3] = "Si el volumen de datos es muy grande se genera la tabla.";
 answers[74] = choices[74][0];
 units[74] = "80";
 comments[74] = "Id Pregunta: 6437. NULL";


//  Id pregunta: 6438 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  Se&ntilde;ale una de las restricciones del modelo E/R:";
 choices[75]= new Array();
 choices[75][0] = "No se pueden realizar relaciones de unas relaciones con otras.";
 choices[75][1] = "No permite relacionar m&aacute;s de dos entidades.";
 choices[75][2] = "No permite relacines reflexivas.";
 choices[75][3] = "No se pueden representar las propiedades de las entidades.";
 answers[75] = choices[75][0];
 units[75] = "80";
 comments[75] = "Id Pregunta: 6438. NULL";


//  Id pregunta: 6606 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  Cual de las siguientes t&eacute;cnicas no se contempla en el An&aacute;lisis Estructurado";
 choices[76]= new Array();
 choices[76][0] = "Diagrama de Flujos de Control";
 choices[76][1] = "Diccionario de Datos";
 choices[76][2] = "Diagrama de Interaci&oacute;n";
 choices[76][3] = "Tabla de Activaci&oacute;n de Procesos";
 answers[76] = choices[76][2];
 units[76] = "81";
 comments[76] = "Id Pregunta: 6606. NULL";


//  Id pregunta: 6610 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  En un DFD, entre 2 procesos existir&aacute; un almac&eacute;n de datos cuando:";
 choices[77]= new Array();
 choices[77][0] = "La comunicaci&oacute;n entre ellos sea s&iacute;ncrona";
 choices[77][1] = "La comunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[77][2] = "Existir&aacute; siempre que haya comunicaci&oacute;n entre los procesos";
 choices[77][3] = "Es el analista el que decide si tiene que existir o no el almac&eacute;n de datos";
 answers[77] = choices[77][1];
 units[77] = "81";
 comments[77] = "Id Pregunta: 6610. NULL";


//  Id pregunta: 8220 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[78]= new Array();
 choices[78][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[78][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[78][2] = "Cliente - IDL Stub - Servidor.";
 choices[78][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[78] = choices[78][0];
 units[78] = "82";
 comments[78] = "Id Pregunta: 8220. Examen TIC A1 2010";


//  Id pregunta: 8250 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  En el desarrollo de software &aacute;gil (Agile) se usan los siguientes niveles de planificaci&oacute;n:";
 choices[79]= new Array();
 choices[79][0] = "Planificaci&oacute;n de entregas, planificaci&oacute;n de iteraciones o sprints y planificaci&oacute;n diaria.";
 choices[79][1] = "Planificaci&oacute;n estrat&eacute;gica y planifiaci&oacute;n semanal.";
 choices[79][2] = "Planificaci&oacute;n de iteraciones o sprints, planificaci&oacute;n de hitos de cada iteraci&oacute;n o sprint y planificaci&oacute;n semanal.";
 choices[79][3] = "Planificaci&oacute;n estrat&eacute;gica, planificaci&oacute;n de recursos y planificaci&oacute;n de entregas.";
 answers[79] = choices[79][0];
 units[79] = "76";
 comments[79] = "Id Pregunta: 8250. Examen TIC A1 2010";


//  Id pregunta: 8348 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[80]= new Array();
 choices[80][0] = "Estereotipos.";
 choices[80][1] = "Valores etiquetados.";
 choices[80][2] = "Artefactos.";
 choices[80][3] = "Restricciones.";
 answers[80] = choices[80][2];
 units[80] = "80,81,82";
 comments[80] = "Id Pregunta: 8348. Examen TIC A2 2010";


//  Id pregunta: 8800 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  Respecto al modelo en espiral es falso que:";
 choices[81]= new Array();
 choices[81][0] = "Incluye el an&aacute;lisis de riesgos.";
 choices[81][1] = "Se compone de ciclos.";
 choices[81][2] = "El n&uacute;mero de ciclos a realizar se encuentra predefinido en el modelo.";
 choices[81][3] = "La dimensi&oacute;n angular indica el avance dentro del ciclo actual.";
 answers[81] = choices[81][2];
 units[81] = "76";
 comments[81] = "Id Pregunta: 8800. Examen UPM A2 2011";


//  Id pregunta: 8813 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  En programaci&oacute;n orientada a objetos &iquest;qu&eacute; son las clases abstractas?";
 choices[82]= new Array();
 choices[82][0] = "Aquellas que se dividen en subclases";
 choices[82][1] = "Aquellas que est&aacute;n predefinidas";
 choices[82][2] = "Las que no tienen instancias";
 choices[82][3] = "Las que no son reutilizables";
 answers[82] = choices[82][2];
 units[82] = "82";
 comments[82] = "Id Pregunta: 8813. Examen UPM A2 2011";


//  Id pregunta: 9082 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v.3, el Plan de Sistemas de Informaci&oacute;n debe tener una perspectiva";
 choices[83]= new Array();
 choices[83][0] = "Exclusivamente estrat&eacute;gica, y no tecnol&oacute;gica";
 choices[83][1] = "Estrat&eacute;gica y operativa, y no tecnolog&iacute;ca";
 choices[83][2] = "Exclusivamente estrat&eacute;gica, y fuertemente tecnol&oacute;gica";
 choices[83][3] = "Ninguna de las anteriores";
 answers[83] = choices[83][1];
 units[83] = "77";
 comments[83] = "Id Pregunta: 9082. ";


//  Id pregunta: 9440 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Qu&eacute; diagrama UML muestra el flujo de acciones en curso, no necesariamente at&oacute;micas, en relaci&oacute;n a la estructura de estados del sistema?:";
 choices[84]= new Array();
 choices[84][0] = "Diagrama de secuencia.";
 choices[84][1] = "Diagrama de estados.";
 choices[84][2] = "Diagrama de actividad.";
 choices[84][3] = "Diagrama de colaboraci&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "82";
 comments[84] = "Id Pregunta: 9440. Examen AGE TIC A1 2011";


//  Id pregunta: 9458 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  En la t&eacute;cnica de Diagramas de Flujo de Datos:";
 choices[85]= new Array();
 choices[85][0] = "Las entidades externas pueden tener relaciones entre s&iacute;.";
 choices[85][1] = "Las entidades externas pueden enviar datos a los almacenes.";
 choices[85][2] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es as&iacute;ncrona.";
 choices[85][3] = "En el diagrama de conexto s&oacute;lo aparece un proceso.";
 answers[85] = choices[85][3];
 units[85] = "81";
 comments[85] = "Id Pregunta: 9458. ";


//  Id pregunta: 9460 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Qu&eacute; es la cohesi&oacute;n de un m&oacute;dulo?:";
 choices[86]= new Array();
 choices[86][0] = "M&eacute;trica de la calidad del software directamente proporcional al n&uacute;mero de clases de un m&oacute;dulo.";
 choices[86][1] = "Relaci&oacute;n que existe entre elementos del mismo m&oacute;dulo.";
 choices[86][2] = "Fan-in.";
 choices[86][3] = "Fan-out.";
 answers[86] = choices[86][1];
 units[86] = "84";
 comments[86] = "Id Pregunta: 9460. NULL";


//  Id pregunta: 9486 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Indique la afirmaci&oacute;n incorrecta con respecto a una sesi&oacute;n JAD";
 choices[87]= new Array();
 choices[87][0] = "Es una t&eacute;cnica que promueve la cooperaci&oacute;n entre usuarios y desarrolladores para la obtenci&oacute;n de requisitos";
 choices[87][1] = "T&iacute;picamente duran media jornada de trabajo";
 choices[87][2] = "Se utilizan para reducir el tiempo de desarrollo";
 choices[87][3] = "Involucran a personas de m&aacute;s alto nivel que las sesiones JRP";
 answers[87] = choices[87][3];
 units[87] = "78";
 comments[87] = "Id Pregunta: 9486. ";


//  Id pregunta: 9903 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Se&ntilde;ale la respuesta correcta relativa al modelo de ciclo de vida en espiral:";
 choices[88]= new Array();
 choices[88][0] = "La dimensi&oacute;n radial mide el grado de avance del proyecto en cada fase y la dimensi&oacute;n angular el coste.";
 choices[88][1] = "Cada ciclo consta de 5 actividades: Determinar objetivos, an&aacute;lisis del riesgo, estimar, planificar y desarrollo-pruebas.";
 choices[88][2] = "Fue propuesto inicialmente por Rutherford.";
 choices[88][3] = "En sistemas peque&ntilde;os es un modelo poco operativo y se desaconseja su uso. Exige de gran experiencia en an&aacute;lisis y resoluci&oacute;n de riesgos.";
 answers[88] = choices[88][3];
 units[88] = "76";
 comments[88] = "Id Pregunta: 9903. TIC A2, Examen 2013";


//  Id pregunta: 10096 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En el an&aacute;lisis de requisitos, el dominio de la informaci&oacute;n debe analizarse desde 3 puntos de vista. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[89]= new Array();
 choices[89][0] = "Flujo de la informaci&oacute;n";
 choices[89][1] = "Contenido de la informaci&oacute;n";
 choices[89][2] = "Modelo de la informaci&oacute;n";
 choices[89][3] = "Estructura de la informaci&oacute;n";
 answers[89] = choices[89][2];
 units[89] = "78";
 comments[89] = "Id Pregunta: 10096. NULL";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  El uso del paradigma de OO se caracteriza por&hellip;.";
 choices[90]= new Array();
 choices[90][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[90][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[90][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[90][3] = "La mayor dificultad de la programaci&oacute;n OO reduce la mantenibilidad y modificabilidad de los programas";
 answers[90] = choices[90][0];
 units[90] = "82";
 comments[90] = "Id Pregunta: 10176. ";


//  Id pregunta: 10287 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En la herramienta de control de versiones Subversion, &iquest;con que comando se suben los cambios al repositorio?";
 choices[91]= new Array();
 choices[91][0] = "svn commit";
 choices[91][1] = "svn checkin";
 choices[91][2] = "svn checkout";
 choices[91][3] = "svn upload";
 answers[91] = choices[91][0];
 units[91] = "78";
 comments[91] = "Id Pregunta: 10287. TIC A2, libre, examen 2013";


//  Id pregunta: 10814 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[92]= new Array();
 choices[92][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[92][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[92][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[92][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[92] = choices[92][1];
 units[92] = "76, 79";
 comments[92] = "Id Pregunta: 10814. Examen GSI 2014";


//  Id pregunta: 10816 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Con respecto a la metodolog&iacute;a &aacute;gil Kanban, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[93]= new Array();
 choices[93][0] = "Las iteraciones deben ser de tiempo fijo siempre.";
 choices[93][1] = "No permite trabajar en m&uacute;ltiples productos simult&aacute;neamente.";
 choices[93][2] = "Prescribe los roles siguientes de modo obligatorio: due&ntilde;o del producto y equipo.";
 choices[93][3] = "Limita el n&uacute;mero de elementos al mismo tiempo en un estado del flujo de trabajo.";
 answers[93] = choices[93][3];
 units[93] = "79";
 comments[93] = "Id Pregunta: 10816. Examen GSI 2014";


//  Id pregunta: 10819 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes NO es una metodolog&iacute;a de desarrollo?";
 choices[94]= new Array();
 choices[94][0] = "MERISE.";
 choices[94][1] = "SDM (Structured Development Method).";
 choices[94][2] = "RUP (Rational Unified Process).";
 choices[94][3] = "SCRUM.";
 answers[94] = choices[94][1];
 units[94] = "79";
 comments[94] = "Id Pregunta: 10819. Examen GSI 2014";


//  Id pregunta: 10829 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[95]= new Array();
 choices[95][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[95][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[95][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[95][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[95] = choices[95][1];
 units[95] = "86, 81";
 comments[95] = "Id Pregunta: 10829. Examen GSI 2014";


//  Id pregunta: 10967 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En dise&ntilde;o orientado a objetos se utiliza el patr&oacute;n Observador (en ingl&eacute;s, Observer), que define una dependencia uno a muchos entre un sujeto y varios observadores. Se&ntilde;ale la respuesta correcta:";
 choices[96]= new Array();
 choices[96][0] = "Cuando el sujeto se modifica, se notifica dicha modificaci&oacute;n. Los observadores se actualizar&aacute;n s&oacute;lo si se va a utilizar la informaci&oacute;n del sujeto.";
 choices[96][1] = "Establece cu&aacute;ntos observadores de un sujeto van a existir para poder notificarles cualquier cambio.";
 choices[96][2] = "La responsabilidad de actualizaci&oacute;n puede residir en los observadores tras la notificaci&oacute;n de cambio del sujeto.";
 choices[96][3] = "El sujeto nunca puede ser borrado.";
 answers[96] = choices[96][2];
 units[96] = "84";
 comments[96] = "Id Pregunta: 10967. TIC A1 AGE 2014";


//  Id pregunta: 11538 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes m&eacute;tricas se puede aplicar durante le proceso de dise&ntilde;o del software?";
 choices[97]= new Array();
 choices[97][0] = "M&eacute;trica de complejidad de McCabe.";
 choices[97][1] = "M&eacute;tricas MDOO";
 choices[97][2] = "M&eacute;tricas de cobertura de instrucciones y ramas.";
 choices[97][3] = "Todas las anteriores.";
 answers[97] = choices[97][1];
 units[97] = "84";
 comments[97] = "Id Pregunta: 11538. McCabe, m&eacute;trica complejidad en fase de programaci&oacute;n. M&eacute;trica de cobertura en fase de pruebas.";


//  Id pregunta: 11557 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, el documento de alto nivel con todos los requerimientos del proyectos priorizados seg&uacute;n retorno de inversi&oacute;n (ROI), se denomina:";
 choices[98]= new Array();
 choices[98][0] = "Sprint Backlog";
 choices[98][1] = "Sprint Chart";
 choices[98][2] = "Product Backlog";
 choices[98][3] = "Burn Down Chart";
 answers[98] = choices[98][2];
 units[98] = "79";
 comments[98] = "Id Pregunta: 11557. NULL";


//  Id pregunta: 11634 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Entre los diagramas de comportamiento de UML se encuentran:";
 choices[99]= new Array();
 choices[99][0] = "Diagrama de clases, diagrama de secuencia y diagrama de componentes.";
 choices[99][1] = "Diagrama de tiempos, diagrama de secuencia y diagrama de componentes.";
 choices[99][2] = "Diagrama de paquetes, diagrama de actividad y diagrama de perfil.";
 choices[99][3] = "Todas las anteriores son falsas";
 answers[99] = choices[99][3];
 units[99] = "84";
 comments[99] = "Id Pregunta: 11634. ";


