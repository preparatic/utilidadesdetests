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

//  Id pregunta: 1042 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El objetivo principal de las t&eacute;cnicas de benchmark es:";
 choices[0]= new Array();
 choices[0][0] = "Comparar diferentes sistemas frente a una carga particularizada de trabajo";
 choices[0][1] = "Analizar el tiempo de respuesta de un sistema frente a distintas cargas reales de trabajo";
 choices[0][2] = "Simular el comportamiento del sistema frente a distintas cargas de trabajo";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][0];
 units[0] = "98";
 comments[0] = "Id Pregunta: 1042. NULL";


//  Id pregunta: 1473 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Para el tratamiento de im&aacute;genes informatizadas se usan algoritmos construidos mediante:";
 choices[1]= new Array();
 choices[1][0] = "Ecuaciones de Cauchy";
 choices[1][1] = "Series de McLaurin";
 choices[1][2] = "Integrales de Riemann Stiltges";
 choices[1][3] = "Transformadas de Fourier";
 answers[1] = choices[1][3];
 units[1] = "93";
 comments[1] = "Id Pregunta: 1473. NULL";


//  Id pregunta: 1984 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una decisi&oacute;n que debe tomar una organizaci&oacute;n para establecer su planificaci&oacute;n estrat&eacute;gica?:";
 choices[2]= new Array();
 choices[2][0] = "Establecimiento de los objetivos y metas principales";
 choices[2][1] = "Formulaci&oacute;n de los diferentes programas y proyectos orientados a conseguir los objetivos";
 choices[2][2] = "Definici&oacute;n del marco econ&oacute;mico presupuestario y del &aacute;mbito de actuaci&oacute;n de la organizaci&oacute;n";
 choices[2][3] = "Control de los costes de ejecuci&oacute;n de cada programa y proyecto definidos";
 answers[2] = choices[2][3];
 units[2] = "77";
 comments[2] = "Id Pregunta: 1984. ";


//  Id pregunta: 2022 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;sitica com&uacute;nmente reconocida en los lenguajes de programaci&oacute;n orientados a objetos (LPOO)?";
 choices[3]= new Array();
 choices[3][0] = "La base de objetos y clases.";
 choices[3][1] = "La sustanciaci&oacute;n de objetos.";
 choices[3][2] = "Las relaciones de agregaci&oacute;n y herencia.";
 choices[3][3] = "El ligamiento din&aacute;mico y el polimorfismo.";
 answers[3] = choices[3][1];
 units[3] = "84";
 comments[3] = "Id Pregunta: 2022. Examen TIC MAP B 2004";


//  Id pregunta: 2039 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Hablar de un modelo de gesti&oacute;n que basado en un sistema empresarial orientado hacia la calidad persigue la satisfacci&oacute;n de todos aquellos entes que se relacionan con la empresa u organizaci&oacute;n, supone hablar de:";
 choices[4]= new Array();
 choices[4][0] = "Las normas ISO 9000";
 choices[4][1] = "Calidad Total";
 choices[4][2] = "Plan General de Garant&iacute;a de Calidad";
 choices[4][3] = "Todos los aspectos anteriores";
 answers[4] = choices[4][1];
 units[4] = "92";
 comments[4] = "Id Pregunta: 2039. NULL";


//  Id pregunta: 2065 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[5]= new Array();
 choices[5][0] = "M&eacute;tricas de productividad";
 choices[5][1] = "M&eacute;tricas de fiabilidad";
 choices[5][2] = "M&eacute;tricas de rendimiento";
 choices[5][3] = "M&eacute;tricas de Complejidad";
 answers[5] = choices[5][2];
 units[5] = "88";
 comments[5] = "Id Pregunta: 2065. ";


//  Id pregunta: 2082 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n Roger S. Pressman, entre los principios del an&aacute;lisis de requerimientos tenemos:";
 choices[6]= new Array();
 choices[6][0] = "El dominio de la Informaci&oacute;n, as&iacute; como el dominio funcional de un problema debe ser representado y comprendido";
 choices[6][1] = "El problema debe subdividirse de forma que se descubran los detalles de una manera progresiva";
 choices[6][2] = "Deben desarrollarse las representaciones l&oacute;gicas y f&iacute;sicas del sistema";
 choices[6][3] = "Todas las anteriores son ciertas";
 answers[6] = choices[6][3];
 units[6] = "78";
 comments[6] = "Id Pregunta: 2082. ";


//  Id pregunta: 2087 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes no es un sistema de tiempo real?";
 choices[7]= new Array();
 choices[7][0] = "Control de seguimiento de sat&eacute;lites.";
 choices[7][1] = "Control de edificios inteligentes.";
 choices[7][2] = "N&oacute;mina de una empresa.";
 choices[7][3] = "Reserva de billetes de una compa&ntilde;&iacute;a de transportes interurbana.";
 answers[7] = choices[7][2];
 units[7] = "83";
 comments[7] = "Id Pregunta: 2087. ";


//  Id pregunta: 2093 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El par&aacute;metro m&aacute;s importante de un sistema en tiempo real es:";
 choices[8]= new Array();
 choices[8][0] = "La tasa de errores.";
 choices[8][1] = "El jitter.";
 choices[8][2] = "El retardo m&aacute;ximo.";
 choices[8][3] = "La velocidad de transmisi&oacute;n.";
 answers[8] = choices[8][2];
 units[8] = "83";
 comments[8] = "Id Pregunta: 2093. ";


//  Id pregunta: 2125 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Upsizing&quot;?:";
 choices[9]= new Array();
 choices[9][0] = "Las aplicaciones se elevan a la gerencia de la organizaci&oacute;n";
 choices[9][1] = "El &quot;upsizing&quot; es lo que queda de un &quot;righsizing&quot; cuando se le hace un &quot;downsizing&quot;";
 choices[9][2] = "S&oacute;lo se realiza en algunos sistemas";
 choices[9][3] = "Con la tecnolog&iacute;a web ya no tiene sentido hablar de &quot;upsizing&quot; ya que es centralizada";
 answers[9] = choices[9][2];
 units[9] = "90";
 comments[9] = "Id Pregunta: 2125. NULL";


//  Id pregunta: 2137 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes es una t&eacute;cnica y no una metodolog&iacute;a?";
 choices[10]= new Array();
 choices[10][0] = "Desarrollo de sistemas estructurados de datos.";
 choices[10][1] = "Higher Order Software (HOS).";
 choices[10][2] = "Desarrollo de sistemas de Jackson.";
 choices[10][3] = "Information Engineering Workbench (IEW).";
 answers[10] = choices[10][3];
 units[10] = "84";
 comments[10] = "Id Pregunta: 2137. ";


//  Id pregunta: 2142 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes tareas no pertenece a la actividad 'Ejecuci&oacute;n de las pruebas del sistema'?:";
 choices[11]= new Array();
 choices[11][0] = "Preparaci&oacute;n del entorno de las pruebas del sistema";
 choices[11][1] = "Evaluaci&oacute;n del resultado de las pruebas del sistema";
 choices[11][2] = "Preparaci&oacute;n de pruebas de aceptaci&oacute;n del sistema";
 choices[11][3] = "Realizaci&oacute;n de las pruebas del sistema";
 answers[11] = choices[11][2];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2142. NULL";


//  Id pregunta: 2159 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de una entidad externa dentro de un diagrama de flujo de datos:";
 choices[12]= new Array();
 choices[12][0] = "Representa procesos de aplicaci&oacute;n que no pertenecen al del estudio";
 choices[12][1] = "No est&aacute; permitido que se comuniquen entre s&iacute; las entidades externas a trav&eacute;s de flujos de datos";
 choices[12][2] = "Pueden aparecer en los distintos niveles de un DFD, pero se recomienda que s&oacute;lo aparezcan en el nivel cero";
 choices[12][3] = "Se pueden representar varias veces en el mismo gr&aacute;fico para evitar entrecruzamiento de l&iacute;neas";
 answers[12] = choices[12][0];
 units[12] = "81";
 comments[12] = "Id Pregunta: 2159. ";


//  Id pregunta: 2160 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar cu&aacute;les de las siguientes son propiedades fundamentales en la orientaci&oacute;n a objetos:";
 choices[13]= new Array();
 choices[13][0] = "Herencia, encapsulaci&oacute;n, polimorfismo, persistencia";
 choices[13][1] = "Abstracci&oacute;n, reusabilidad";
 choices[13][2] = "Extensibilidad";
 choices[13][3] = "Todas son propiedades fundamentales en la orientaci&oacute;n a objetos";
 answers[13] = choices[13][3];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2160. ";


//  Id pregunta: 2199 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;En qu&eacute; consiste la teor&iacute;a del Modelo Compuesto aplicada a la implantaci&oacute;n de la Calidad propuesto por Lawler?";
 choices[14]= new Array();
 choices[14][0] = "El coste aumenta primero linealmente y luego exponencialmente";
 choices[14][1] = "En el primer tramo, el coste aumenta con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad.";
 choices[14][2] = "Se usa aritm&eacute;tica compuesta para su c&aacute;lculo, aunque la curva sale convexa siempre que se sigue este modelo.";
 choices[14][3] = "En el primer tramo, el coste disminuye con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad. En el tercer tramo el coste se incrementa con la calidad.";
 answers[14] = choices[14][3];
 units[14] = "88";
 comments[14] = "Id Pregunta: 2199. NULL";


//  Id pregunta: 2227 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  A la hora de poner en explotaci&oacute;n un servicio:";
 choices[15]= new Array();
 choices[15][0] = "Conviene realizar las pruebas una vez est&eacute; el servicio en el entorno de explotaci&oacute;n, ya que es el mejor medio para detectar los errores.";
 choices[15][1] = "Conviene realizar las pruebas en el entorno de preexplotaci&oacute;n.";
 choices[15][2] = "Conviene realizar las pruebas en el entorno de desarrollo, ya que el de preexplotaci&oacute;n es s&oacute;lo para las pruebas de rendimiento.";
 choices[15][3] = "Conviene realizar algunas pruebas en el entorno de preexplotaci&oacute;n, y las restantes en el entorno de explotaci&oacute;n, junto a los usuarios.";
 answers[15] = choices[15][1];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2227. NULL";


//  Id pregunta: 2230 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Al esfuerzo requeriddo para transferir un programa desde una cierta configuraci&oacute;n hardware o entorno operativo a otro se llama:";
 choices[16]= new Array();
 choices[16][0] = "Portabilidad";
 choices[16][1] = "Reusabilidad";
 choices[16][2] = "Interoperatividad";
 choices[16][3] = "Mantenibilidad";
 answers[16] = choices[16][0];
 units[16] = "89";
 comments[16] = "Id Pregunta: 2230. NULL";


//  Id pregunta: 2236 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Suponiendo un ciclo de vida en cascada con fases de requisitos del sistema global y sistema software, dise&ntilde;o preliminar, dise&ntilde;o detallado y codificaci&oacute;n &iquest;d&oacute;nde se realiza la implementaci&oacute;n del sistema?";
 choices[17]= new Array();
 choices[17][0] = "Dise&ntilde;o detallado";
 choices[17][1] = "Codificaci&oacute;n";
 choices[17][2] = "Requisitos del sistema software";
 choices[17][3] = "Dise&ntilde;o preliminar";
 answers[17] = choices[17][1];
 units[17] = "76";
 comments[17] = "Id Pregunta: 2236. ";


//  Id pregunta: 2278 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El mantenimiento de sistemas de informaci&oacute;n, tal y como lo define METRICA V3:";
 choices[18]= new Array();
 choices[18][0] = "Es de tipo perfectivo";
 choices[18][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo de mantenimiento";
 choices[18][2] = "Hace uso de la t&eacute;cnica denominada &quot;factores cr&iacute;ticos de &eacute;xito&quot;";
 choices[18][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[18] = choices[18][3];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2278. NULL";


//  Id pregunta: 2292 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El modo empotrado de aplicar los modelos de COCOMO considera:";
 choices[19]= new Array();
 choices[19][0] = "Proyectos peque&ntilde;os";
 choices[19][1] = "Proyectos de complejidad media";
 choices[19][2] = "Proyectos de complejidad alta";
 choices[19][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[19] = choices[19][3];
 units[19] = "89";
 comments[19] = "Id Pregunta: 2292. NULL";


//  Id pregunta: 2305 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el &aacute;mbito de las estructuras de datos, una relaci&oacute;n n:m es de tipo:";
 choices[20]= new Array();
 choices[20][0] = "Unitario";
 choices[20][1] = "Binario";
 choices[20][2] = "Ternario";
 choices[20][3] = "n-ario";
 answers[20] = choices[20][1];
 units[20] = "80";
 comments[20] = "Id Pregunta: 2305. ";


//  Id pregunta: 2310 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En el modelo de ciclo de vida en espiral, cada ciclo de la espiral comienza con la etapa de:";
 choices[21]= new Array();
 choices[21][0] = "Planificaci&oacute;n";
 choices[21][1] = "An&aacute;lisis de riesgos";
 choices[21][2] = "Desarrollo del prototipo";
 choices[21][3] = "Evaluaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "76";
 comments[21] = "Id Pregunta: 2310. ";


//  Id pregunta: 2316 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En el modelo entidad/relaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "una relaci&oacute;n o interrelaci&oacute;n expresa una correspondencia o asociaci&oacute;n entre 2 &oacute; m&aacute;s entidades";
 choices[22][1] = "una relaci&oacute;n no puede tener atributos, ya que esto s&oacute;lo corresponde a las entidades";
 choices[22][2] = "la cardinalidad se refiere al m&iacute;nimo y m&aacute;ximo n&uacute;mero de entidades que puede haber en el sistema";
 choices[22][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[22] = choices[22][0];
 units[22] = "80";
 comments[22] = "Id Pregunta: 2316. ";


//  Id pregunta: 2337 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Esquema Conceptual";
 choices[23][1] = "Esquema Externo";
 choices[23][2] = "Esquema Interno";
 choices[23][3] = "Esquema Funcional";
 answers[23] = choices[23][1];
 units[23] = "58,80,81";
 comments[23] = "Id Pregunta: 2337. ";


//  Id pregunta: 2356 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Entre las m&eacute;tricas que miden la complejidad tenemos:";
 choices[24]= new Array();
 choices[24][0] = "T&eacute;cnica de McCabe y T&eacute;cnica de Halstead";
 choices[24][1] = "M&eacute;todos de los puntos de funci&oacute;n";
 choices[24][2] = "T&eacute;cnicas de McCall sobre la estructura de la calidad del software";
 choices[24][3] = "Todas las respuestas anteriores son ciertas";
 answers[24] = choices[24][0];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2356. NULL";


//  Id pregunta: 2364 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Entre los factores de calidad del software que McCall identific&oacute; para la fase de explotaci&oacute;n podemos destacar:";
 choices[25]= new Array();
 choices[25][0] = "Fiabilidad, correcci&oacute;n, integridad, eficiencia y usabilidad";
 choices[25][1] = "Fiabilidad, flexibilidad y portabilidad";
 choices[25][2] = "Mantenibilidad, seguridad, flexibilidad y eficiencia";
 choices[25][3] = "Todos los anteriores";
 answers[25] = choices[25][0];
 units[25] = "87.88";
 comments[25] = "Id Pregunta: 2364. NULL";


//  Id pregunta: 2389 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La dimensi&oacute;n est&aacute;tica del modelo E/R est&aacute; constituida por el siguiente conjunto de objetos con los que describimos la estructura del mundo real:";
 choices[26]= new Array();
 choices[26][0] = "Entidad, interrelaci&oacute;n y atributo";
 choices[26][1] = "Entidad, atributo, dominio y restricci&oacute;n";
 choices[26][2] = "Entidad, interrelaci&oacute;n, dominio, atributo y restricciones del modelo";
 choices[26][3] = "Entidad, interrelaci&oacute;n, domino, atributo y objeto";
 answers[26] = choices[26][2];
 units[26] = "80";
 comments[26] = "Id Pregunta: 2389. ";


//  Id pregunta: 2413 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Dentro de los niveles b&aacute;sicos de compresi&oacute;n y fuentes del conocimiento, el nivel fonol&oacute;gico es aqu&eacute;l que:";
 choices[27]= new Array();
 choices[27][0] = "Analiza las caracter&iacute;sticas de la se&ntilde;al vocal";
 choices[27][1] = "Determina los objetos sonoros elementales";
 choices[27][2] = "Determina el n&uacute;mero preciso de sonidos con valor distinto";
 choices[27][3] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras";
 answers[27] = choices[27][2];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2413. ";


//  Id pregunta: 2415 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El filtro de Sobel es com&uacute;nmente usado en tratamiento de im&aacute;genes para:";
 choices[28]= new Array();
 choices[28][0] = "Esqueletizaci&oacute;n de figuras";
 choices[28][1] = "Suavizaci&oacute;n de contornos";
 choices[28][2] = "Eliminaci&oacute;n del ruido";
 choices[28][3] = "Detecci&oacute;n de bordes";
 answers[28] = choices[28][3];
 units[28] = "93";
 comments[28] = "Id Pregunta: 2415. NULL";


//  Id pregunta: 2438 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Las &quot;Collaboration Responsabilities Cards&quot; se usan en:";
 choices[29]= new Array();
 choices[29][0] = "La localizaci&oacute;n de objetos.";
 choices[29][1] = "La direcci&oacute;n de reuniones.";
 choices[29][2] = "La negociaci&oacute;n.";
 choices[29][3] = "Los diagramas generales de un sistema.";
 answers[29] = choices[29][0];
 units[29] = "82,84";
 comments[29] = "Id Pregunta: 2438. ";


//  Id pregunta: 2446 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Las m&eacute;tricas que tratan de evaluar si el software desarrollado cumple los requerimientos del usuario son las:";
 choices[30]= new Array();
 choices[30][0] = "M&eacute;tricas de productividad";
 choices[30][1] = "M&eacute;tricas de los factores de calidad";
 choices[30][2] = "M&eacute;tricas de complejidad";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][1];
 units[30] = "88";
 comments[30] = "Id Pregunta: 2446. ";


//  Id pregunta: 2465 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  McCall, en su modelo de calidad del software, define 11 factores. &iquest;Con cu&aacute;l de ellos se asocia el coste de modificaci&oacute;n de un producto?:";
 choices[31]= new Array();
 choices[31][0] = "Fiabilidad";
 choices[31][1] = "Reusabilidad";
 choices[31][2] = "Flexibilidad";
 choices[31][3] = "Facilidad de prueba";
 answers[31] = choices[31][2];
 units[31] = "87.88";
 comments[31] = "Id Pregunta: 2465. NULL";


//  Id pregunta: 2489 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Seg&uacute;n los estudios de calidad, &iquest;en qu&eacute; fase del desarrollo los errores son m&aacute;s costosos?:";
 choices[32]= new Array();
 choices[32][0] = "Especificaci&oacute;n";
 choices[32][1] = "Dise&ntilde;o  ";
 choices[32][2] = "Codificaci&oacute;n";
 choices[32][3] = "Otros";
 answers[32] = choices[32][0];
 units[32] = "87";
 comments[32] = "Id Pregunta: 2489. NULL";


//  Id pregunta: 2539 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Los algoritmos de comprensi&oacute;n LZW son del tipo:";
 choices[33]= new Array();
 choices[33][0] = "Basados en diccionario";
 choices[33][1] = "RLE";
 choices[33][2] = "HUFFMAN";
 choices[33][3] = "JPEG";
 answers[33] = choices[33][0];
 units[33] = "93";
 comments[33] = "Id Pregunta: 2539. NULL";


//  Id pregunta: 2546 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Los sintetizadores de voz utilizan dos m&eacute;todos para sintetizar las palabras. Uno de ellos es:";
 choices[34]= new Array();
 choices[34][0] = "S&iacute;ntesis constructiva";
 choices[34][1] = "S&iacute;ntesis acumulativa";
 choices[34][2] = "S&iacute;ntesis simulativa";
 choices[34][3] = "S&iacute;ntesis por patrones";
 answers[34] = choices[34][0];
 units[34] = "94";
 comments[34] = "Id Pregunta: 2546. ";


//  Id pregunta: 2584 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; es el Modelo CMM (modelo de madurez de la capacidad de proceso de software)?:";
 choices[35]= new Array();
 choices[35][0] = "Metodolog&iacute;a de dise&ntilde;o de componentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[35][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[35][2] = " Modelo organizativo para el dise&ntilde;o software de macroensambladores cruzados.";
 choices[35][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[35] = choices[35][3];
 units[35] = "87";
 comments[35] = "Id Pregunta: 2584. Junta Andaluc&iacute;a";


//  Id pregunta: 2590 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  En la planificaci&oacute;n de Sistemas de informaci&oacute;n seg&uacute;n METRICA V3 en relaci&oacute;n con la actividad Estudio de Informaci&oacute;n Relevante, PSI3, La Definici&oacute;n de Requisitos, PSI4, y el Estudio de la situaci&oacute;n actual, PSI5:";
 choices[36]= new Array();
 choices[36][0] = "Dado que los resultados de la actividad estudio de la informaci&oacute;n relevante, PSI3, debe tenerse en cuenta para la definici&oacute;n de Requisitos, PSI4, esta &uacute;ltima s&oacute;lo puede llevarse a cabo una vez finalizada la anterior.";
 choices[36][1] = "Aunque los resultados de la actividad PSI3 debe tenerse en cuenta para la PSI4, ambas pueden realizarse en paralelo junto a PSI5.";
 choices[36][2] = "La, actividades PSI3 p PSI4 deben preceder a PSI5.";
 choices[36][3] = "El orden de realizaci&oacute;n de PSI3 y PSI4 debe preceder a PSI5.";
 answers[36] = choices[36][1];
 units[36] = "86";
 comments[36] = "Id Pregunta: 2590. Junta Andaluc&iacute;a";


//  Id pregunta: 2604 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest; Cu&aacute;l es la primera actividad que debe realizar un analista?";
 choices[37]= new Array();
 choices[37][0] = "Identificar el problema";
 choices[37][1] = "Evaluaci&oacute;n de los problemas";
 choices[37][2] = "Preparar antes de nada un plan de control";
 choices[37][3] = "Sintetizar soluciones";
 answers[37] = choices[37][0];
 units[37] = "78";
 comments[37] = "Id Pregunta: 2604. ";


//  Id pregunta: 2649 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Indicar la afirmaci&oacute;n falsa sobre Diagramas de Flujo de Datos";
 choices[38]= new Array();
 choices[38][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[38][1] = "Se pueden representar relaciones entre entidades externas ";
 choices[38][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[38][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[38] = choices[38][1];
 units[38] = "86";
 comments[38] = "Id Pregunta: 2649. NULL";


//  Id pregunta: 2704 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[39]= new Array();
 choices[39][0] = "Los avances m&aacute;s recientes en la s&iacute;ntesis del habla han ido por el camino de una parametrizaci&oacute;n de la se&ntilde;al original para suprimir la informaci&oacute;n redundante contenida en las ondas ac&uacute;sticas.";
 choices[39][1] = "En el nivel fon&eacute;tico distintivo se determinan los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[39][2] = "En el nivel fon&eacute;tico se analizan las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[39][3] = "El estudio en el dominio de la frecuencia ha conducido al an&aacute;lisis del habla por transformadas de Fourier y por bancos de filtros en paralelo.";
 answers[39] = choices[39][3];
 units[39] = "94";
 comments[39] = "Id Pregunta: 2704. ";


//  Id pregunta: 2714 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  &iquest;C&oacute;mo se puede mantener la sesi&oacute;n en CGIs?";
 choices[40]= new Array();
 choices[40][0] = "Mediante campos ocultos en los formularios";
 choices[40][1] = "Mediantes cookies";
 choices[40][2] = "Mediante formularios o cookies indistintamente";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][2];
 units[40] = "114";
 comments[40] = "Id Pregunta: 2714. ";


//  Id pregunta: 2716 AÃ±o de creación de pregunta: 2004-01-01
 questions[41]= "42)  Comparando Java y C++, indique la afirmaci&oacute;n Incorrecta";
 choices[41]= new Array();
 choices[41][0] = "Java es debilmente tipado y C++ es fuertemente tipado";
 choices[41][1] = "Java es altamente portable y C++ tiene aspectos no portables";
 choices[41][2] = "Java es interpretado y C++ es compilado";
 choices[41][3] = "Java no tiene herencia multiple y C++ si";
 answers[41] = choices[41][0];
 units[41] = "82";
 comments[41] = "Id Pregunta: 2716. ";


//  Id pregunta: 2728 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La funci&oacute;n principal del Comit&eacute; de Direcci&oacute;n en la planificaci&oacute;n estrat&eacute;gica es:";
 choices[42]= new Array();
 choices[42][0] = "Definir la administraci&oacute;n, procedimiento y organizaci&oacute;n del trabajo.";
 choices[42][1] = "la toma de decisiones a lo largo de las distintas etapas/fases en que se descompone el plan";
 choices[42][2] = "Colaborar en la soluci&oacute;n funcional de los problemas planteados";
 choices[42][3] = "Realizar estudios espec&iacute;ficos";
 answers[42] = choices[42][1];
 units[42] = "77";
 comments[42] = "Id Pregunta: 2728. ";


//  Id pregunta: 2737 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Cuando decimos que una entidad est&aacute; en 3FN?";
 choices[43]= new Array();
 choices[43][0] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave tiene una dependencia funcional completa de la clave.";
 choices[43][1] = "Si est&aacute; en 2FN y no contiene grupos repetitivos.";
 choices[43][2] = "Si est&aacute; en 2FN y no contiene atributos multivaluados.";
 choices[43][3] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave no depende transitivamente de dicha clave.";
 answers[43] = choices[43][3];
 units[43] = "58";
 comments[43] = "Id Pregunta: 2737. ";


//  Id pregunta: 2738 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Indique la afirmaci&oacute;n incorrecta";
 choices[44]= new Array();
 choices[44][0] = "Una relaci&oacute;n est&aacute; en segunda forma normal (2FN) solamente si todos los atributos son dependientes en forma completa de la clave.";
 choices[44][1] = "Cualquier relaci&oacute;n en primera forma normal que tiene una clave compuesta, est&aacute; autom&aacute;ticamente en segunda forma normal.";
 choices[44][2] = "Una relaci&oacute;n se encuentra en tercera forma normal (EFN) si no existen transitividades entre sus atributos y si ya se encuentra en 2 FN.";
 choices[44][3] = "Para poner una relaci&oacute;n en la cuarta forma normal debe estar en 3FN y deben existir una o m&aacute;s multidependencias.";
 answers[44] = choices[44][1];
 units[44] = "58";
 comments[44] = "Id Pregunta: 2738. ";


//  Id pregunta: 2744 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Son objetivos que persigue el An&aacute;lisis de Sistemas de Informaci&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Identificar las necesidades del cliente";
 choices[45][1] = "Crear una definici&oacute;n clara y precisa del sistema, que sea la base para todo lo que sigue despu&eacute;s";
 choices[45][2] = "Establecer las restricciones de coste y tiempo que incidir&aacute;n en el futuro desarrollo";
 choices[45][3] = "Todas las anteriores";
 answers[45] = choices[45][3];
 units[45] = "80";
 comments[45] = "Id Pregunta: 2744. ";


//  Id pregunta: 2758 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  En el an&aacute;lisis orientado a objetos, la herencia es:";
 choices[46]= new Array();
 choices[46][0] = "Es el t&eacute;rmino formal que se utiliza para expresar que los datos de un objeto solamente pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos";
 choices[46][1] = "Es el mecanismo mediante el cual una clase adquiere las propiedades de otra clase jer&aacute;rquicamente superior";
 choices[46][2] = "La propiedad que permite definir tantas versiones de un m&eacute;todo como tipos de argumentos pueda tener";
 choices[46][3] = "No existe";
 answers[46] = choices[46][1];
 units[46] = "82";
 comments[46] = "Id Pregunta: 2758. ";


//  Id pregunta: 2786 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  La Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n M&Eacute;TRICA 3, tiene por objeto:";
 choices[47]= new Array();
 choices[47][0] = "Obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que respondan a los objetivos estrat&eacute;gicos y operativos de la organizaci&oacute;n.";
 choices[47][1] = "Recoger el conjunto de reglas que aseguran una decisi&oacute;n &oacute;ptima en cada momento.";
 choices[47][2] = "La previsi&oacute;n en fechas de la realizaci&oacute;n del conjunto de actividades que comprende la construcci&oacute;n del sistema, teniendo en cuenta los recursos a emplear y el coste de los mismos.";
 choices[47][3] = "Todo lo anterior.";
 answers[47] = choices[47][0];
 units[47] = "86";
 comments[47] = "Id Pregunta: 2786. NULL";


//  Id pregunta: 2855 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Entre las fases de publicaci&oacute;n de un contenido no se encuentra";
 choices[48]= new Array();
 choices[48][0] = "Categorizaci&oacute;n";
 choices[48][1] = "Composici&oacute;n";
 choices[48][2] = "Difusi&oacute;n";
 choices[48][3] = "Normalizaci&oacute;n";
 answers[48] = choices[48][3];
 units[48] = "95";
 comments[48] = "Id Pregunta: 2855. NULL";


//  Id pregunta: 2869 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Conjunto de planes, m&eacute;todos y herramientas dirigidas a modernizar, consolidar y coordinar las aplicaciones inform&aacute;ticas de una empresa";
 choices[49]= new Array();
 choices[49][0] = "EAI";
 choices[49][1] = "EDI";
 choices[49][2] = "Sistemas de Soporte a la Decisi&oacute;n";
 choices[49][3] = "ERP";
 answers[49] = choices[49][0];
 units[49] = "77";
 comments[49] = "Id Pregunta: 2869. ";


//  Id pregunta: 4300 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Qu&eacute; afirmaci&oacute;n es correcta acerca de las diferentes notaciones que se pueden emplear para la especificaci&oacute;n de requisitos del software?:";
 choices[50]= new Array();
 choices[50][0] = "El pseudoc&oacute;digo es una notaci&oacute;n especialmente indicada para describir los requisitos funcionales.";
 choices[50][1] = "El diccionario de datos es la manera m&aacute;s adecuada de describir las transformaciones ocurridas en los datos.";
 choices[50][2] = "El diagrama de flujo de datos se emplea para realizar la especificaci&oacute;n del comportamiento del sistema.";
 choices[50][3] = "El modelo E-R es una notaci&oacute;n gr&aacute;fica en la que se representan los flujos de datos y sus estados.";
 answers[50] = choices[50][2];
 units[50] = "78";
 comments[50] = "Id Pregunta: 4300. ";


//  Id pregunta: 4410 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Los requisitos que debe cumplir un sistema para evitar que sus errores de funcionamiento tengan consecuencias en las personas o equipos, se denominan requisitos de:";
 choices[51]= new Array();
 choices[51][0] = "Fiabilidad.";
 choices[51][1] = "Operaci&oacute;n.";
 choices[51][2] = "Salvaguarda.";
 choices[51][3] = "Verificaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "88";
 comments[51] = "Id Pregunta: 4410. NULL";


//  Id pregunta: 4495 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Que nivel del modelo CMMi se caracteriza porque el proceso del software de las actividades de gesti&oacute;n e ingenier&iacute;a esta documentado, estandarizado e integrado?";
 choices[52]= new Array();
 choices[52][0] = "Nivel 2 (Gestionado)";
 choices[52][1] = "Nivel 3 (Definido)";
 choices[52][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[52][3] = "Nivel 5 (Optimizado)";
 answers[52] = choices[52][1];
 units[52] = "87";
 comments[52] = "Id Pregunta: 4495. NULL";


//  Id pregunta: 4742 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Cual de las siguientes afirmaciones es incorrecta:";
 choices[53]= new Array();
 choices[53][0] = "PNG comprime mejor que el formato GIF las im&aacute;genes";
 choices[53][1] = "W3C desaconseja el uso del formato GIF por el posible pago de patentes";
 choices[53][2] = "PNG y GIF soportan animaci&oacute;n de im&aacute;genes";
 choices[53][3] = "PNG soporta un m&aacute;ximo de 256 colores";
 answers[53] = choices[53][2];
 units[53] = "93";
 comments[53] = "Id Pregunta: 4742. Examen 2006 JCYL";


//  Id pregunta: 4838 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtualde 2^20 (2 elevado a 20) p&aacute;ginas y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos dep&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[54]= new Array();
 choices[54][0] = "32 kB";
 choices[54][1] = "4 MB";
 choices[54][2] = "1 MB";
 choices[54][3] = "8 kB";
 answers[54] = choices[54][0];
 units[54] = "97";
 comments[54] = "Id Pregunta: 4838. NULL";


//  Id pregunta: 5081 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Qu&eacute; propiedad no es inherente a la orientaci&oacute;n a objetos?";
 choices[55]= new Array();
 choices[55][0] = "Polimorfismo.";
 choices[55][1] = "Volatilidad.";
 choices[55][2] = "Herencia.";
 choices[55][3] = "Encapsulaci&oacute;n.";
 answers[55] = choices[55][1];
 units[55] = "84";
 comments[55] = "Id Pregunta: 5081. Examen TIC A 2007";


//  Id pregunta: 5152 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[56]= new Array();
 choices[56][0] = "Interrelaciones";
 choices[56][1] = "Sometimiento";
 choices[56][2] = "Generalizaci&oacute;n";
 choices[56][3] = "Agregaci&oacute;n";
 answers[56] = choices[56][1];
 units[56] = "82";
 comments[56] = "Id Pregunta: 5152. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5179 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;les son los requisitos, seg&uacute;n Dorfman, que debe cumplir una Metodolog&iacute;a?";
 choices[57]= new Array();
 choices[57][0] = "Documentada, Repetitiva, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[57][1] = "Documentada, Repetible, Ense&ntilde;able, Flexible, Validada y Apropiada";
 choices[57][2] = "Documentada, Repetible, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[57][3] = "Documentada, Repetible, Extensa, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 answers[57] = choices[57][2];
 units[57] = "79";
 comments[57] = "Id Pregunta: 5179. ";


//  Id pregunta: 5194 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  En los diagramas de estructura, pertenecientes al dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes opciones no es un tipo de cupla (comunicaci&oacute;n entre m&oacute;dulos)?";
 choices[58]= new Array();
 choices[58][0] = "Cupla de Datos.";
 choices[58][1] = "Cupla de Funciones.";
 choices[58][2] = "Cupla Modificada.";
 choices[58][3] = "Cupla de Resultados.";
 answers[58] = choices[58][1];
 units[58] = "84";
 comments[58] = "Id Pregunta: 5194. ";


//  Id pregunta: 5215 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[59]= new Array();
 choices[59][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[59][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[59][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[59][3] = "Especificaciones de Implantaci&oacute;n";
 answers[59] = choices[59][2];
 units[59] = "86";
 comments[59] = "Id Pregunta: 5215. NULL";


//  Id pregunta: 5413 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  La propiedad de un objeto denominada persistencia consiste en";
 choices[60]= new Array();
 choices[60][0] = "Que un objeto ocupa un determinado espacio de memoria y existe durante una cierta cantidad de tiempo. Es un concepto din&aacute;mico. La permanencia del objeto es el tiempo durante el cual se le asigna espacio y permanece accesible en la memoria del ordenador";
 choices[60][1] = "Un objeto ocupa un determinado espacio de memoria durante toda la vida de la aplicaci&oacute;n. La permanencia del objeto es que est&aacute; accesible en la memoria del ordenador";
 choices[60][2] = "Un objeto est&aacute; accesible ocupe o no memoria en el ordenador, el S.O. se encarga de cargar y descargar el objeto de la memoria RAM";
 choices[60][3] = "La persistencia de un objeto consiste en que aunque su instancia haya sido eliminada el objeto sigue accesible";
 answers[60] = choices[60][0];
 units[60] = "82";
 comments[60] = "Id Pregunta: 5413. Examen 2006 JCYL";


//  Id pregunta: 6204 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Un requerimiento se define como una condici&oacute;n o necesidad de un usuario para resolver un problema o alcanzar un objetivo. Un requerimiento debe ser (se&ntilde;ale la correcta):";
 choices[61]= new Array();
 choices[61][0] = "Conciso, ambiguo, verificable";
 choices[61][1] = "Necesario, conciso, inconsistente";
 choices[61][2] = "Conciso, completo, verificable";
 choices[61][3] = "Completo, inconsistente, obvio";
 answers[61] = choices[61][2];
 units[61] = "78";
 comments[61] = "Id Pregunta: 6204. TICB-2009, bloque desarrollo";


//  Id pregunta: 6221 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Respecto a los diagramas de flujo de datos &iquest;Cu&aacute;l de las siguientes es falsa?";
 choices[62]= new Array();
 choices[62][0] = "Un diagrama de flujo de datos se compone de los siguientes elementos: entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[62][1] = "Un proceso como origen de datos puede hacer las funciones de un almacen de datos";
 choices[62][2] = "Los flujos de datos que comunican procesos con almacenes pueden ser de los tipos: consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[62][3] = "Elementos a&ntilde;adidos al diagrama de flujo de datos para sistemas especiales: proceso de control y flujo de control";
 answers[62] = choices[62][1];
 units[62] = "81";
 comments[62] = "Id Pregunta: 6221. TICB-2009, bloque desarrollo";


//  Id pregunta: 6256 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, la especificaci&oacute;n de los requisitos de implantaci&oacute;n se realiza en:";
 choices[63]= new Array();
 choices[63][0] = "An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[63][1] = "Dise&ntilde;o de Sistema de Informaci&oacute;n";
 choices[63][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[63][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[63] = choices[63][1];
 units[63] = "86";
 comments[63] = "Id Pregunta: 6256. TICB-2009, bloque desarrollo";


//  Id pregunta: 6293 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Brainstorming";
 choices[64][1] = "An&aacute;lisis de Mercado";
 choices[64][2] = "Factores Cr&iacute;ticos de &Eacute;xito";
 choices[64][3] = "Entrevistas";
 answers[64] = choices[64][2];
 units[64] = "78";
 comments[64] = "Id Pregunta: 6293. ";


//  Id pregunta: 6308 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica que daba tener un sistema en tiempo real?";
 choices[65]= new Array();
 choices[65][0] = "Manejo sencillo, pero potente, de prioridades, permitiendo que puedan modificarse din&aacute;micamente incluso durante la ejecuci&oacute;n de los procesos.";
 choices[65][1] = "Gesti&oacute;n de memoria real y no virtual.";
 choices[65][2] = "Manejo eficaz de interrupciones.";
 choices[65][3] = "Funciones complejas para el manejo de ficheros.";
 answers[65] = choices[65][3];
 units[65] = "83";
 comments[65] = "Id Pregunta: 6308. ";


//  Id pregunta: 6613 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Entre los objetivos de M&eacute;trica est&aacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Definir Sistemas de Informaci&oacute;n que ayuden a conseguir los fines de la Organizaci&oacute;n y Mejorar la productividad de los departamentos de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[66][1] = "Facilitar la comunicaci&oacute;n y entendimiento entre los distintos participantes y facilitar la operaci&oacute;n, mantenimiento y uso de los productos software obtenidos.";
 choices[66][2] = "a y b";
 choices[66][3] = "Ninguno ya que M&eacute;trica no entra en los fines de la Organizaci&oacute;n, en la productividad, en la comunicaci&oacute;n ni en la operaci&oacute;n de los productos.";
 answers[66] = choices[66][2];
 units[66] = "86";
 comments[66] = "Id Pregunta: 6613. NULL";


//  Id pregunta: 6643 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  En el m&eacute;todo de los Puntos de Funci&oacute;n se valoran:";
 choices[67]= new Array();
 choices[67][0] = "15 caracter&iacute;sticas generales";
 choices[67][1] = "5 caracter&iacute;sticas generales";
 choices[67][2] = "6 caracter&iacute;sticas generales";
 choices[67][3] = "14 caracter&iacute;sticas generales";
 answers[67] = choices[67][3];
 units[67] = "89";
 comments[67] = "Id Pregunta: 6643. NULL";


//  Id pregunta: 8214 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En la aprobaci&oacute;n del Plan de Sistemas de Informaci&oacute;n en la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 participan:";
 choices[68]= new Array();
 choices[68][0] = "Comit&eacute; de Direcci&oacute;n y jefe de proyecto del PSI.";
 choices[68][1] = "Comit&eacute; de Direcci&oacute;n, jefe de proyecto y usuarios expertos.";
 choices[68][2] = "Comit&eacute; de Direcci&oacute;n, consultores y jefe de proyecto.";
 choices[68][3] = "Jefe de proyecto, responsable de seguridad y usuarios expertos.";
 answers[68] = choices[68][0];
 units[68] = "86";
 comments[68] = "Id Pregunta: 8214. Examen TIC A1 2010";


//  Id pregunta: 8220 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[69]= new Array();
 choices[69][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[69][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[69][2] = "Cliente - IDL Stub - Servidor.";
 choices[69][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[69] = choices[69][0];
 units[69] = "82";
 comments[69] = "Id Pregunta: 8220. Examen TIC A1 2010";


//  Id pregunta: 8263 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Seg&uacute;n Lientz y Swanson y a diferencia de M&Eacute;TRICA versi&oacute;n 3, entre los 4 tipos de mantenimiento de sistemas de informaci&oacute;n, se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "Mantenimiento preventivo.";
 choices[70][1] = "Mantenimiento perfectivo.";
 choices[70][2] = "Mantenimiento adaptativo.";
 choices[70][3] = "Mantenimiento correctivo.";
 answers[70] = choices[70][0];
 units[70] = "86";
 comments[70] = "Id Pregunta: 8263. Examen TIC A1 2010";


//  Id pregunta: 8517 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[71]= new Array();
 choices[71][0] = "El Diccionario de Datos.";
 choices[71][1] = "El Diagrama de Flujo de Datos.";
 choices[71][2] = "Las especificaciones de procesos.";
 choices[71][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[71] = choices[71][3];
 units[71] = "86";
 comments[71] = "Id Pregunta: 8517. Examen TIC A2 2010 interna";


//  Id pregunta: 8831 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)   Se&ntilde;ale la respuesta correcta con relaci&oacute;n a lTIL (IT Infrastructure Library):";
 choices[72]= new Array();
 choices[72][0] = " La gesti&oacute;n de problemas busca solucionar lo m&aacute;s r&aacute;pido posible las incidencias y restablecer el servicio lo antes posible ";
 choices[72][1] = " La gesti&oacute;n de la configuraci&oacute;n tiene como &uacute;nico objetivo el control del hardware inform&aacute;tico existente en la organizaci&oacute;n ";
 choices[72][2] = " La gesti&oacute;n de versiones se encarga de controlar todas las versiones, tanto hardware como software, involucrados en el sistema de explotaci&oacute;n ";
 choices[72][3] = " No es necesario analizar el impacto de la introducci&oacute;n de cambios en los sistemas inform&aacute;ticos, sino que se deben realizar lo m&aacute;s r&aacute;pido posible para evitar incidencias en los sistemas (gesti&oacute;n de cambios).";
 answers[72] = choices[72][2];
 units[72] = "98";
 comments[72] = "Id Pregunta: 8831. Examen UC3M 2010";


//  Id pregunta: 8873 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El desarrollo en Espiral es un modelo del ciclo de vida del software, que establece una serie de etapas por los que pasa el mismo, desde su concepci&oacute;n inicial hasta la finalizaci&oacute;n del producto. Se&ntilde;ale las etapas correctas";
 choices[73]= new Array();
 choices[73][0] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; y &ldquo;Desarrollo y Validaci&oacute;n&rdquo;";
 choices[73][1] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[73][2] = "&ldquo;Planificaci&oacute;n de actividades y recursos necesarios&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[73][3] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 answers[73] = choices[73][0];
 units[73] = "76";
 comments[73] = "Id Pregunta: 8873. Analista Ayto. Madrid 2010";


//  Id pregunta: 8879 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El c&oacute;digo objeto se obtiene a partir de:";
 choices[74]= new Array();
 choices[74][0] = "El c&oacute;digo fuente.";
 choices[74][1] = "El c&oacute;digo m&aacute;quina.";
 choices[74][2] = "El c&oacute;digo clase.";
 choices[74][3] = "El c&oacute;digo de enlazado.";
 answers[74] = choices[74][0];
 units[74] = "82";
 comments[74] = "Id Pregunta: 8879. Examen UPM A2 2011";


//  Id pregunta: 9045 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[75]= new Array();
 choices[75][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[75][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[75][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos ";
 choices[75][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[75] = choices[75][1];
 units[75] = "86";
 comments[75] = "Id Pregunta: 9045. NULL";


//  Id pregunta: 9188 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;En qu&eacute; proceso se llevan a cabo las pruebas de sistema?";
 choices[76]= new Array();
 choices[76][0] = "ASI";
 choices[76][1] = "DSI";
 choices[76][2] = "CSI";
 choices[76][3] = "IAS";
 answers[76] = choices[76][2];
 units[76] = "86";
 comments[76] = "Id Pregunta: 9188. NULL";


//  Id pregunta: 9412 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En general, no se entiende por m&eacute;trica software";
 choices[77]= new Array();
 choices[77][0] = "Una asignaci&oacute;n de valor a un atributo de una entidad propia del software, ya sea un producto o un proceso";
 choices[77][1] = "Una caracter&iacute;stica o atributo propio del software o del proceso de construcci&oacute;n del software";
 choices[77][2] = "Una medida cuantitativa del grado en el que un sistema, un componente o un proceso posee un determinado atributo";
 choices[77][3] = "Una medida o conjunto de medidas destinadas a conocer o estimar el tama&ntilde;o u otra caracter&iacute;stica de un software o un sistema de informaci&oacute;n";
 answers[77] = choices[77][1];
 units[77] = "89";
 comments[77] = "Id Pregunta: 9412. NULL";


//  Id pregunta: 9662 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes es una fase de un brainstorming?";
 choices[78]= new Array();
 choices[78][0] = "Preparaci&oacute;n";
 choices[78][1] = "Generaci&oacute;n";
 choices[78][2] = "Consolidaci&oacute;n";
 choices[78][3] = "Todas las anteriores";
 answers[78] = choices[78][3];
 units[78] = "78";
 comments[78] = "Id Pregunta: 9662. ";


//  Id pregunta: 9707 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[79]= new Array();
 choices[79][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[79][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[79][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[79][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[79] = choices[79][3];
 units[79] = "86";
 comments[79] = "Id Pregunta: 9707. Examen TIC-A1 2013";


//  Id pregunta: 9787 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Cual de los siguientes NO es un elemento VoiceXML 2.0:";
 choices[80]= new Array();
 choices[80][0] = "&lt;input&gt;";
 choices[80][1] = "&lt;transfer&gt; ";
 choices[80][2] = "&lt;object&gt;";
 choices[80][3] = "&lt;log&gt; ";
 answers[80] = choices[80][0];
 units[80] = "94";
 comments[80] = "Id Pregunta: 9787. Examen TIC A2 2013";


//  Id pregunta: 9911 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as &aacute;giles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[81]= new Array();
 choices[81][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[81][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[81][2] = "El software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[81][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[81] = choices[81][2];
 units[81] = "79";
 comments[81] = "Id Pregunta: 9911. TIC A2, Examen 2013";


//  Id pregunta: 9916 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Se&ntilde;ale cu&aacute;l de las siguientes NO es un tipo de conexi&oacute;n v&aacute;lida entre un proceso y un almac&eacute;n de datos de un DFD (diagrama de flujo de datos), seg&uacute;n M&eacute;trica v3:";
 choices[82]= new Array();
 choices[82][0] = "Flujo de consulta.";
 choices[82][1] = "Flujo de actualizaci&oacute;n.";
 choices[82][2] = "Flujo de di&aacute;logo.";
 choices[82][3] = "Flujo de sincronizaci&oacute;n.";
 answers[82] = choices[82][3];
 units[82] = "86";
 comments[82] = "Id Pregunta: 9916. TIC A2, Examen 2013";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[83]= new Array();
 choices[83][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[83][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[83][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[83][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[83] = choices[83][3];
 units[83] = "59,115";
 comments[83] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9974 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Los sistemas de gesti&oacute;n de contenidos, (CMS en ingl&eacute;s), son un tipo especial de software orientado a la creaci&oacute;n, administraci&oacute;n y distribuci&oacute;n de contenidos digitales. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta.";
 choices[84]= new Array();
 choices[84][0] = "Disponen de una interfaz que permite controlar una o varias bases de datos donde se aloja el contenido del sitio.";
 choices[84][1] = "Permiten manejar de forma independiente el contenido y el dise&ntilde;o.";
 choices[84][2] = "Permiten una gesti&oacute;n de roles de usuarios: administrador, autor, editor, lector, ...";
 choices[84][3] = "Garantizan la accesibilidad de los portales y contenidos digitales";
 answers[84] = choices[84][3];
 units[84] = "95";
 comments[84] = "Id Pregunta: 9974. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9983 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[85]= new Array();
 choices[85][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[85][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[85][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[85][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[85] = choices[85][1];
 units[85] = "59,115";
 comments[85] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10185 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de un tipo de entidad que pueden estar relacionadas con una ocurrencia del otro u otros tipos de entidad participantes en la relaci&oacute;n se denomina:";
 choices[86]= new Array();
 choices[86][0] = "Tipo de correspondencia";
 choices[86][1] = "Cardinalidad de la relaci&oacute;n";
 choices[86][2] = "Grado";
 choices[86][3] = "No es de inter&eacute;s en el modelo E-R y por tanto no tiene una denominaci&oacute;n espec&iacute;fica";
 answers[86] = choices[86][1];
 units[86] = "80";
 comments[86] = "Id Pregunta: 10185. NULL";


//  Id pregunta: 10191 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[87]= new Array();
 choices[87][0] = "Filtro de mediana";
 choices[87][1] = "Realce logar&iacute;tmico";
 choices[87][2] = "Filtro paso bajo";
 choices[87][3] = "Filtro paso alto";
 answers[87] = choices[87][1];
 units[87] = "93";
 comments[87] = "Id Pregunta: 10191. NULL";


//  Id pregunta: 10426 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta. ";
 choices[88]= new Array();
 choices[88][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[88][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[88][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[88][3] = "Las anteriores a) b) y c) son correctas.";
 answers[88] = choices[88][3];
 units[88] = "76";
 comments[88] = "Id Pregunta: 10426. Examen TIC A1 2013";


//  Id pregunta: 10438 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Para determinar la viabilidad de un proyecto a partir de las estimaciones coste/beneficio, METRICA 3 calcula su rentabilidad a trav&eacute;s de ";
 choices[89]= new Array();
 choices[89][0] = "el m&eacute;todo de la cadena de reemplazo.";
 choices[89][1] = "el m&eacute;todo de la anualidad equivalente.";
 choices[89][2] = "m&eacute;todos de coste total de propiedad (TCO).";
 choices[89][3] = "m&eacute;todos de Retorno de la Inversi&oacute;n o del Valor Actual Neto";
 answers[89] = choices[89][3];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10438. Examen TIC A1 2013";


//  Id pregunta: 10635 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de estas publicaciones no pertenece a ITILv3?";
 choices[90]= new Array();
 choices[90][0] = "Mejora continua del servicio";
 choices[90][1] = "Evoluci&oacute;n del Servicio";
 choices[90][2] = "Dise&ntilde;o del Servicio";
 choices[90][3] = "Operaci&oacute;n del Servicio";
 answers[90] = choices[90][1];
 units[90] = "98";
 comments[90] = "Id Pregunta: 10635. ";


//  Id pregunta: 10821 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En M&eacute;trica 3, el &quot;t&eacute;cnico de sistemas&quot; est&aacute; incluido en el perfil:";
 choices[91]= new Array();
 choices[91][0] = "Consultor.";
 choices[91][1] = "Analista.";
 choices[91][2] = "Programador.";
 choices[91][3] = "Jefe de Proyecto.";
 answers[91] = choices[91][0];
 units[91] = "86";
 comments[91] = "Id Pregunta: 10821. Examen GSI 2014";


//  Id pregunta: 10827 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos (DFD) es correcta?";
 choices[92]= new Array();
 choices[92][0] = "Son elementos propios de este diagrama: entidades externas, procesos, almacenes de datos y flujos de datos.";
 choices[92][1] = "Son elementos propios de este diagrama: entidades, atributos, relaciones y jerarqu&iacute;as.";
 choices[92][2] = "Son elementos propios de este diagrama: diccionarios de datos, m&oacute;dulos, procesos y flujos.";
 choices[92][3] = "Se trata de una t&eacute;cnica que se emplea en la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI) de M&eacute;trica v3.";
 answers[92] = choices[92][0];
 units[92] = "81";
 comments[92] = "Id Pregunta: 10827. Examen GSI 2014";


//  Id pregunta: 10865 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[93]= new Array();
 choices[93][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[93][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[93][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[93][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[93] = choices[93][1];
 units[93] = "86, 81, 82";
 comments[93] = "Id Pregunta: 10865. Examen GSI 2014";


//  Id pregunta: 11078 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL, &iquest;Cu&aacute;l de estos NO es un tipo de cambio?";
 choices[94]= new Array();
 choices[94][0] = "Cambio est&aacute;ndar";
 choices[94][1] = "Cambio normal";
 choices[94][2] = "Cambio urgente";
 choices[94][3] = "Cambio de emergencia";
 answers[94] = choices[94][2];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11078. ";


//  Id pregunta: 11083 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es la principal raz&oacute;n para establecer una L&iacute;nea Base (Baseline)?";
 choices[95]= new Array();
 choices[95][0] = "Estandarizar la operaci&oacute;n";
 choices[95][1] = "Conocer el coste de los servicios proporcionados";
 choices[95][2] = "Para que los roles y responsabilidades sean claras";
 choices[95][3] = "Para comparaciones posteriores";
 answers[95] = choices[95][3];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11083. ";


//  Id pregunta: 11162 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes no es un modo de COCOMO (Constructive Cost Model) para estimar el n&uacute;mero de instrucciones de c&oacute;digo fuente seg&uacute;n el entorno de aplicaci&oacute;n que se utiliza?";
 choices[96]= new Array();
 choices[96][0] = "Org&aacute;nico";
 choices[96][1] = "Acoplado";
 choices[96][2] = "Semiacoplado";
 choices[96][3] = "Empotrado";
 answers[96] = choices[96][1];
 units[96] = "88";
 comments[96] = "Id Pregunta: 11162. ";


//  Id pregunta: 11363 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[97]= new Array();
 choices[97][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[97][1] = "De tecnolog&iacute;a y de servicios";
 choices[97][2] = "De servicios y de personas";
 choices[97][3] = "De servicios y de procesos";
 answers[97] = choices[97][0];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11363. ";


//  Id pregunta: 11539 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la metodolog&iacute;a m&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes funciones NO le correspondel al Jefe de Proyecto?";
 choices[98]= new Array();
 choices[98][0] = "Seleccionar la estrategia de desarrollo (modelo de ciclo de vida) y determinar los procesos, actividades y tareas que integran el proyecto (mapa de actividades).";
 choices[98][1] = "Ofrecer una opini&oacute;n experta relativa a los requisitos del negocio, t&eacute;cnicos y de usuario que han de tenerse en cuenta en el desarrollo del sistema de informaci&oacute;n.";
 choices[98][2] = "Estimar el esfuerzo necesario para llevar a cabo el proyecto.";
 choices[98][3] = "Le corresponden todas las funciones anteriores.";
 answers[98] = choices[98][1];
 units[98] = "86";
 comments[98] = "Id Pregunta: 11539. La B, son funciones propias del perfil consultor.";


//  Id pregunta: 11559 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de reconocimiento del habla se basan en el an&aacute;lisis de patrones o plantillas?";
 choices[99]= new Array();
 choices[99][0] = "DTW, Dinamic Time Warping";
 choices[99][1] = "Modelos Ocultos de Markov (HMM)";
 choices[99][2] = "SIFT, Simplified Inversed Filter Tracking";
 choices[99][3] = "Ninguna de las anteriores es cierta.";
 answers[99] = choices[99][0];
 units[99] = "94";
 comments[99] = "Id Pregunta: 11559. NULL";


