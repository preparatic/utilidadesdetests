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


//  Id pregunta: 1293 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  OLTP son las siglas en ingl&eacute;s de software del tipo:";
 choices[1]= new Array();
 choices[1][0] = "Gestores de bases de datos orientadas a objetos.";
 choices[1][1] = "Gestores estandarizados de bases de datos documentales.";
 choices[1][2] = "Sistemas de Gestion Transaccional.";
 choices[1][3] = "Programas de an&aacute;lisis tipo data warehouse.";
 answers[1] = choices[1][2];
 units[1] = "83";
 comments[1] = "Id Pregunta: 1293. ";


//  Id pregunta: 1886 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Al pasar al modelo f&iacute;sico de datos las relaciones M:N entre clases se transforman en...";
 choices[2]= new Array();
 choices[2][0] = "Se propagan las claves.";
 choices[2][1] = "Dos tablas";
 choices[2][2] = "Una tabla";
 choices[2][3] = "Tres tablas";
 answers[2] = choices[2][2];
 units[2] = "80";
 comments[2] = "Id Pregunta: 1886. ";


//  Id pregunta: 1913 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Reusabilidad";
 choices[3][1] = "Encapsulaci&oacute;n";
 choices[3][2] = "Abstracci&oacute;n";
 choices[3][3] = "Persistencia";
 answers[3] = choices[3][3];
 units[3] = "82";
 comments[3] = "Id Pregunta: 1913. ";


//  Id pregunta: 1993 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  La &quot;descomposicion del problema&quot; es una actividad b&aacute;sica en el an&aacute;lisis de requisitos de los sistemas de informaci&oacute;n. Esta &quot;descomposici&oacute;n&quot; se aplica sobre dos &aacute;reas:";
 choices[4]= new Array();
 choices[4][0] = "La funcionalidad a entregar y el proceso que se utilizar&aacute; para entregarla";
 choices[4][1] = "El hardware y el software previsto en el proyecto";
 choices[4][2] = "El modelado de datos y el modelado de procesos";
 choices[4][3] = "El an&aacute;lisis funcional y el an&aacute;lisis org&aacute;nico";
 answers[4] = choices[4][0];
 units[4] = "78";
 comments[4] = "Id Pregunta: 1993. Pregunta TIC-B 2004";


//  Id pregunta: 2002 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  En el marco del dise&ntilde;o orientado a objetos, una clase abstracta es:";
 choices[5]= new Array();
 choices[5][0] = "Una instancia de una clase para la que, de momento, no existe ning&uacute;n ejemplar.";
 choices[5][1] = "Una superclase que s&oacute;lo se utiliza para generalizaci&oacute;n y que nunca se instancia.";
 choices[5][2] = "Una clase que resume todos los atributos y m&eacute;todos comunes de un conjunto de instancias de objetos relacionados.";
 choices[5][3] = "Una abstracci&oacute;n de un conjunto de objetos que tienen los mismos atributos, operaciones, relaciones y sem&aacute;ntica.";
 answers[5] = choices[5][1];
 units[5] = "84";
 comments[5] = "Id Pregunta: 2002. ";


//  Id pregunta: 2088 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l no es un requisito para un software de tiempo real?";
 choices[6]= new Array();
 choices[6][0] = "Predecible.";
 choices[6][1] = "Encapsulado.";
 choices[6][2] = "Fiable.";
 choices[6][3] = "F&aacute;cil de mantener.";
 answers[6] = choices[6][1];
 units[6] = "83";
 comments[6] = "Id Pregunta: 2088. ";


//  Id pregunta: 2102 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Indicar cu&aacute;l no es un requisito que deba reunir el software de tiempo real.";
 choices[7]= new Array();
 choices[7][0] = "Sincronizaci&oacute;n y divisi&oacute;n en tareas.";
 choices[7][1] = "Eficiente.";
 choices[7][2] = "Modular.";
 choices[7][3] = "Facilidad de mantenimiento.";
 answers[7] = choices[7][1];
 units[7] = "83";
 comments[7] = "Id Pregunta: 2102. ";


//  Id pregunta: 2139 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica com&uacute;n de las metodolog&iacute;as de desarrollo de equipos l&oacute;gicos?:";
 choices[8]= new Array();
 choices[8][0] = "Uso de las t&eacute;cnicas gr&aacute;ficas";
 choices[8][1] = "Orden y coherencia";
 choices[8][2] = "Pruebas de aceptaci&oacute;n";
 choices[8][3] = "Diccionario de datos";
 answers[8] = choices[8][2];
 units[8] = "79";
 comments[8] = "Id Pregunta: 2139. ";


//  Id pregunta: 2149 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes modelos se puede considerar como una nueva versi&oacute;n, utilizando lenguajes de m&aacute;s alto nivel, del modelo Code &amp; Fix?:";
 choices[9]= new Array();
 choices[9][0] = "Modelo de transformaci&oacute;n";
 choices[9][1] = "Modelo por etapas";
 choices[9][2] = "Modelo en espiral";
 choices[9][3] = "Modelo de desarrollo evolutivo o prototipado evolutivo";
 answers[9] = choices[9][3];
 units[9] = "76";
 comments[9] = "Id Pregunta: 2149. ";


//  Id pregunta: 2154 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la identificaci&oacute;n de objetos?";
 choices[10]= new Array();
 choices[10][0] = "An&aacute;lisis l&eacute;xico.";
 choices[10][1] = "Tarjetas CRC (Collaboration Rehusabilities Cards).";
 choices[10][2] = "Modelado de informaci&oacute;n.";
 choices[10][3] = "Todos los anteriores son m&eacute;todos de identificaci&oacute;n de objetos.";
 answers[10] = choices[10][3];
 units[10] = "82,84";
 comments[10] = "Id Pregunta: 2154. ";


//  Id pregunta: 2156 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cual de los siguientes no es uno de los 10 items de riesgo del software m&aacute;s importantes que se consideran en el modelo en espiral?:";
 choices[11]= new Array();
 choices[11][0] = "Escasez de personal";
 choices[11][1] = "Calendario no realista";
 choices[11][2] = "Componentes hardware no tiene calidad adecuada";
 choices[11][3] = "Componentes del exterior no tienen calidad adecuada";
 answers[11] = choices[11][2];
 units[11] = "76";
 comments[11] = "Id Pregunta: 2156. ";


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


//  Id pregunta: 2211 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; es un m&eacute;todo en programaci&oacute;n orientada a objetos?:";
 choices[14]= new Array();
 choices[14][0] = "Una operaci&oacute;n sobre un objeto";
 choices[14][1] = "Un algoritmo";
 choices[14][2] = "Un conjunto de objetos";
 choices[14][3] = "Un atributo de un objeto";
 answers[14] = choices[14][0];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2211. ";


//  Id pregunta: 2240 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  CODE-AND-FIX:";
 choices[15]= new Array();
 choices[15][0] = "Es un m&eacute;todo de an&aacute;lisis";
 choices[15][1] = "Es un m&eacute;todo de dise&ntilde;o";
 choices[15][2] = "Es una forma de resolver los errores originados por otros programadores";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][3];
 units[15] = "76";
 comments[15] = "Id Pregunta: 2240. ";


//  Id pregunta: 2262 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El acoplamiento es una medida:";
 choices[16]= new Array();
 choices[16][0] = "Interna.";
 choices[16][1] = "Externa.";
 choices[16][2] = "Intermedia.";
 choices[16][3] = "No es ninguna medida.";
 answers[16] = choices[16][1];
 units[16] = "84";
 comments[16] = "Id Pregunta: 2262. ";


//  Id pregunta: 2270 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El diagrama de contexto de un DFD contiene:";
 choices[17]= new Array();
 choices[17][0] = "Un &uacute;nico proceso";
 choices[17][1] = "Exclusivamente una entidad de procedencia y otra de destino";
 choices[17][2] = "Procesos diferentes cuando tiene que representar funciones diferentes";
 choices[17][3] = "Un &uacute;nico fichero de datos";
 answers[17] = choices[17][0];
 units[17] = "81";
 comments[17] = "Id Pregunta: 2270. ";


//  Id pregunta: 2304 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En an&aacute;lisis estructurado, una definici&oacute;n de Historia de la Vida de las Entidades (HVE) es:";
 choices[18]= new Array();
 choices[18][0] = "Su principal objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[18][1] = "Su principal objetivo es la representaci&oacute;n gr&aacute;fica de las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[18][2] = "Su principal objetivo es describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[18][3] = "Su principal objetivo consiste en establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[18] = choices[18][2];
 units[18] = "81";
 comments[18] = "Id Pregunta: 2304. ";


//  Id pregunta: 2305 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el &aacute;mbito de las estructuras de datos, una relaci&oacute;n n:m es de tipo:";
 choices[19]= new Array();
 choices[19][0] = "Unitario";
 choices[19][1] = "Binario";
 choices[19][2] = "Ternario";
 choices[19][3] = "n-ario";
 answers[19] = choices[19][1];
 units[19] = "80";
 comments[19] = "Id Pregunta: 2305. ";


//  Id pregunta: 2306 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el diccionario de datos (lista organizada de todos los datos pertinentes al sistema, con un conjunto de definiciones precisas para que tanto el analista como el usuario se entiendan), la iteraci&oacute;n de elementos se representa con:";
 choices[20]= new Array();
 choices[20][0] = "&quot;[&quot; y &quot;]&quot;";
 choices[20][1] = "&quot;(&quot; y &quot;)&quot;";
 choices[20][2] = "&quot;{&quot; y &quot;}&quot;";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][2];
 units[20] = "81";
 comments[20] = "Id Pregunta: 2306. ";


//  Id pregunta: 2309 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En el dise&ntilde;o orientado a objetos una de las caracter&iacute;sticas m&aacute;s deseables en cualquier proceso de dise&ntilde;o es:";
 choices[21]= new Array();
 choices[21][0] = "Cohesi&oacute;n fuerte.";
 choices[21][1] = "Reusabilidad.";
 choices[21][2] = "Abstracci&oacute;n.";
 choices[21][3] = "Todas las respuestas anteriores son ciertas.";
 answers[21] = choices[21][3];
 units[21] = "84";
 comments[21] = "Id Pregunta: 2309. ";


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


//  Id pregunta: 2353 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo de software en espiral, indicar que es lo que representa la dimensi&oacute;n radial:";
 choices[23]= new Array();
 choices[23][0] = "Los costes de desarrollo acumulativos";
 choices[23][1] = "El progreso hecho en cumplimentar cada desarrollo en espiral";
 choices[23][2] = "El an&aacute;lisis de riesgos";
 choices[23][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[23] = choices[23][0];
 units[23] = "76";
 comments[23] = "Id Pregunta: 2353. ";


//  Id pregunta: 2377 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  EXCELERATOR, SADT, TAGS..., son herramientas para:";
 choices[24]= new Array();
 choices[24][0] = "Confecci&oacute;n de prototipos";
 choices[24][1] = "An&aacute;lisis de requerimientos";
 choices[24][2] = "Auditor&iacute;a de Sistemas de Informaci&oacute;n";
 choices[24][3] = "Ninguna de las anteriores es cierta";
 answers[24] = choices[24][1];
 units[24] = "78";
 comments[24] = "Id Pregunta: 2377. ";


//  Id pregunta: 2379 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Hist&oacute;ricamente, el primer modelo de desarrollo de software fue:";
 choices[25]= new Array();
 choices[25][0] = "Cascada";
 choices[25][1] = "Code and Fix";
 choices[25][2] = "En espiral";
 choices[25][3] = "Desarrollo de prototipos";
 answers[25] = choices[25][1];
 units[25] = "76";
 comments[25] = "Id Pregunta: 2379. ";


//  Id pregunta: 2390 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La documentaci&oacute;n en el modelo en cascada:";
 choices[26]= new Array();
 choices[26][0] = "Para algunos tipos de software, como compiladores o sistemas operativos, esta forma de proceder es la m&aacute;s efectiva. Sin embargo no es la m&aacute;s adecuada para otros tipos de software como, particularmente, el que se usa en las aplicaciones interactivas y de usuario final";
 choices[26][1] = "Contempla todos los productos de las fases; informes, programas, pruebas";
 choices[26][2] = "Determina la finalizaci&oacute;n de una etapa y el paso a la siguiente";
 choices[26][3] = "Todas las respuestas anteriores son ciertas";
 answers[26] = choices[26][3];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2390. ";


//  Id pregunta: 2430 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La planificaci&oacute;n estrat&eacute;gica es:";
 choices[27]= new Array();
 choices[27][0] = "Un momento en el tiempo para tomar decisiones";
 choices[27][1] = "Una herramienta para anticiparse a los cambios";
 choices[27][2] = "Un proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo los objetivos a largo plazo, identificando metas y objetivos cuantitativos, desarrollando estrategias para alcanzar dichos objetivos y localizando recursos para llevar a cabo dichas estrategias";
 choices[27][3] = "Una herramienta que se limita a extrapolar el presente al futuro";
 answers[27] = choices[27][2];
 units[27] = "77";
 comments[27] = "Id Pregunta: 2430. ";


//  Id pregunta: 2455 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los Diagramas de Flujo de Datos (DFD) son parte del dise&ntilde;o de sistemas, pero &iquest;de qu&eacute; fase?:";
 choices[28]= new Array();
 choices[28][0] = "Dise&ntilde;o de prototipos";
 choices[28][1] = "Tests finales";
 choices[28][2] = "An&aacute;lisis de requerimientos";
 choices[28][3] = "Ninguno de ellos";
 answers[28] = choices[28][2];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2455. ";


//  Id pregunta: 2475 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Para el an&aacute;lisis de sistemas en tiempo real no se usan:";
 choices[29]= new Array();
 choices[29][0] = "Modelos matem&aacute;ticos.";
 choices[29][1] = "Diagramas de bloques.";
 choices[29][2] = "Redes de Petri.";
 choices[29][3] = "Dominios distribuidos de Halm.";
 answers[29] = choices[29][3];
 units[29] = "83";
 comments[29] = "Id Pregunta: 2475. ";


//  Id pregunta: 2477 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Para reutilizar &quot;software&quot; es ventajoso utilizar lenguajes de programaci&oacute;n orientados a objetos por la siguiente raz&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Porque son m&aacute;s modernos.";
 choices[30][1] = "Porque permiten agrupar los objetos y las operaciones que se realizan sobre los mismos.";
 choices[30][2] = "Porque permiten recursividad.";
 choices[30][3] = "Porque admiten paso de par&aacute;metros por valor y por referencia.";
 answers[30] = choices[30][1];
 units[30] = "82,84";
 comments[30] = "Id Pregunta: 2477. ";


//  Id pregunta: 2570 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de ";
 choices[31]= new Array();
 choices[31][0] = "la planificaci&oacute;n operativa";
 choices[31][1] = "el control anal&iacute;tico del gasto";
 choices[31][2] = "la planificaci&oacute;n estrat&eacute;gica";
 choices[31][3] = "la planificaci&oacute;n t&aacute;ctica";
 answers[31] = choices[31][0];
 units[31] = "77";
 comments[31] = "Id Pregunta: 2570. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2606 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;C&oacute;mo se llama la caracter&iacute;stica que permite que dos m&eacute;todos distintos tengan el mismo nombre?";
 choices[32]= new Array();
 choices[32][0] = " Herencia";
 choices[32][1] = "Persistencia";
 choices[32][2] = "Polimorfismo";
 choices[32][3] = "Abstracci&oacute;n";
 answers[32] = choices[32][2];
 units[32] = "82";
 comments[32] = "Id Pregunta: 2606. ";


//  Id pregunta: 2609 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a las conexiones mediante flujos de datos en un DFD (Diagrama de Flujo de Datos) es correcta?";
 choices[33]= new Array();
 choices[33][0] = "  En un DFD los almacenes se pueden conectar con procesos, pero no con otros almacenes ni con entidades externas.";
 choices[33][1] = "  En un DFD los almacenes de datos se pueden conectar con procesos, almacenes pero no con entidades externas.";
 choices[33][2] = "  En un DFD las entidades externas se pueden conectar con procesos y almacenes y entidades externas.";
 choices[33][3] = "En un DFD las entidades externas se pueden conectar con procesos y con otras entidades externas pero no con almacenes.";
 answers[33] = choices[33][0];
 units[33] = "81";
 comments[33] = "Id Pregunta: 2609. ";


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


//  Id pregunta: 2655 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Los objetivos a conseguir en cuanto a cohesi&oacute;n y acoplamiento en el Dise&ntilde;o Estructurado son:";
 choices[35]= new Array();
 choices[35][0] = "M&aacute;xima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 choices[35][1] = "M&iacute;nima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[35][2] = "M&aacute;xima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[35][3] = "M&iacute;nima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 answers[35] = choices[35][0];
 units[35] = "84";
 comments[35] = "Id Pregunta: 2655. Preparatic XVII";


//  Id pregunta: 2719 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Indicar la afirmaci&oacute;n incorrecta relacionada con los modelos de ciclo de vida:";
 choices[36]= new Array();
 choices[36][0] = "El modelo en cascada supone que los requisitos son inamovibles a lo largo del desarrollo";
 choices[36][1] = "El modelo de prototipado permite definir los requisitos de desarrollo a medida que se va desarrollando";
 choices[36][2] = "El modelo en espiral se centra en la identificaci&oacute;n de los riesgos y en la manera de resolverlos";
 choices[36][3] = "Los modelos de transformaci&oacute;n se aplican en la actualidad con lenguaje 4G (generaci&oacute;n autom&aacute;tica de c&oacute;digo) especialmente indicado para proyectos grandes";
 answers[36] = choices[36][3];
 units[36] = "76";
 comments[36] = "Id Pregunta: 2719. ";


//  Id pregunta: 2725 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Una Planificaci&oacute;n Estrat&eacute;gica se caracteriza por:";
 choices[37]= new Array();
 choices[37][0] = "Fijar los objetivos generales de la organizaci&oacute;n.";
 choices[37][1] = "Llevarse a cabo por los altos directivos de la organizaci&oacute;n y por los responsables de los escalonesintermedios.";
 choices[37][2] = "Definir las pol&iacute;ticas y estrategias de la organizaci&oacute;n a corto plazo para la consecuci&oacute;n de losobjetivos concretos que se hayan fijado.";
 choices[37][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[37] = choices[37][0];
 units[37] = "77";
 comments[37] = "Id Pregunta: 2725. ";


//  Id pregunta: 2728 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  La funci&oacute;n principal del Comit&eacute; de Direcci&oacute;n en la planificaci&oacute;n estrat&eacute;gica es:";
 choices[38]= new Array();
 choices[38][0] = "Definir la administraci&oacute;n, procedimiento y organizaci&oacute;n del trabajo.";
 choices[38][1] = "la toma de decisiones a lo largo de las distintas etapas/fases en que se descompone el plan";
 choices[38][2] = "Colaborar en la soluci&oacute;n funcional de los problemas planteados";
 choices[38][3] = "Realizar estudios espec&iacute;ficos";
 answers[38] = choices[38][1];
 units[38] = "77";
 comments[38] = "Id Pregunta: 2728. ";


//  Id pregunta: 2755 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;Qu&eacute; se entiende por diagrama de despliegue en UML?";
 choices[39]= new Array();
 choices[39][0] = "Mostrar las relaciones f&iacute;sicas entre los componenetes del  sistema a desarrollar.";
 choices[39][1] = "Mostrar las relaciones entre procesos.";
 choices[39][2] = "Describir el comportamiento din&aacute;mico del sistema.";
 choices[39][3] = "Describir el comportamineto dinamico haciendo enfasis en los mensajes intercambiados.";
 answers[39] = choices[39][0];
 units[39] = "82";
 comments[39] = "Id Pregunta: 2755. ";


//  Id pregunta: 2760 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Un sistema operativo de tiempo real se caracteriza por:";
 choices[40]= new Array();
 choices[40][0] = "Manejo eficaz de interrupciones.";
 choices[40][1] = "Gesti&oacute;n de memoria real y no virtual.";
 choices[40][2] = "Bloqueo de los procesos cuando est&aacute;n en espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 choices[40][3] = "Todas las anteriores.";
 answers[40] = choices[40][3];
 units[40] = "83";
 comments[40] = "Id Pregunta: 2760. ";


//  Id pregunta: 2780 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;ndo aplicar&iacute;a usted un ciclo de vida basado en prototipos?";
 choices[41]= new Array();
 choices[41][0] = "Cuando los requisitios son dif&iacute;ciles de revisar";
 choices[41][1] = "Cuando el sistema es cr&iacute;tico";
 choices[41][2] = "Para desarrollos de larga duraci&oacute;n";
 choices[41][3] = "Se aplicar&iacute;a en todos los casos anteriores";
 answers[41] = choices[41][0];
 units[41] = "85";
 comments[41] = "Id Pregunta: 2780. ";


//  Id pregunta: 4303 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En el An&aacute;lisis estructurado moderno, la &ldquo;lista de eventos&rdquo; se utiliza para:";
 choices[42]= new Array();
 choices[42][0] = "Mejorar los requisitos de trazabilidad.";
 choices[42][1] = "Construir diagramas Entidad-Historia";
 choices[42][2] = "Documentar las transacciones de datos en el Diagrama Entidad-Relaci&oacute;n.";
 choices[42][3] = "Construir un Diagrama de Flujo de Datos preliminar del sistema.";
 answers[42] = choices[42][3];
 units[42] = "81";
 comments[42] = "Id Pregunta: 4303. ";


//  Id pregunta: 4376 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En el an&aacute;lisis de sistemas, el m&eacute;todo de Abbott:";
 choices[43]= new Array();
 choices[43][0] = "Consiste en descomponer el problema utilizando los primeros niveles del refinamiento.";
 choices[43][1] = "Construye una estructura similar a la de los datos de entrada-salida.";
 choices[43][2] = "Identifica un flujo global desde los elementos de entrada a los de salida.";
 choices[43][3] = "Sistematiza la forma de reconocer las abstracciones.";
 answers[43] = choices[43][3];
 units[43] = "80";
 comments[43] = "Id Pregunta: 4376. ";


//  Id pregunta: 4583 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;les de los siguientes diagramas dan una perspectiva est&aacute;tica de un sistema 00? ";
 choices[44]= new Array();
 choices[44][0] = "Diagrama de clases, diagrama de componentes y diagramas de colaboraciones.";
 choices[44][1] = "Diagramas de clase, diagramas de componentes y diagramas de distribuci&oacute;n.";
 choices[44][2] = "Diagramas de clases, de herencia, de encapsulaci&oacute;n y de polimorfismo.";
 choices[44][3] = "Diagramas de secuencias y diagramas de componentes.";
 answers[44] = choices[44][1];
 units[44] = "84";
 comments[44] = "Id Pregunta: 4583. ";


//  Id pregunta: 4926 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  El modelo de ciclo de vida de desarrollo de un sistema de informaci&oacute;n en el que una fase s&oacute;lo se considerafinalizada si su documentaci&oacute;n asociada ha sido completada es el denominado:";
 choices[45]= new Array();
 choices[45][0] = "En cascada.";
 choices[45][1] = "De prototipado.";
 choices[45][2] = "En espiral.";
 choices[45][3] = "Iterativo.";
 answers[45] = choices[45][0];
 units[45] = "76";
 comments[45] = "Id Pregunta: 4926. Examen TIC B 2007";


//  Id pregunta: 4931 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Indique cual de los siguientes t&eacute;rminos NO corresponde a una metodolog&iacute;a de desarrollo de Sistemas:";
 choices[46]= new Array();
 choices[46][0] = "Metodolog&iacute;a MERISE.";
 choices[46][1] = "Metodolog&iacute;a SSADM.";
 choices[46][2] = "Metodolog&iacute;a METRICA.";
 choices[46][3] = "Metodolog&iacute;a SVOUGH.";
 answers[46] = choices[46][3];
 units[46] = "79";
 comments[46] = "Id Pregunta: 4931. Examen TIC B 2007";


//  Id pregunta: 4933 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Pelayo y Rosana est&aacute;n utilizando la &ldquo;estrategia de derivaci&oacute;n&rdquo; como mecanismo para la especificaci&oacute;n derequisitos de un sistema de informaci&oacute;n. Esta estrategia es potencialmente &uacute;til cuando:";
 choices[47]= new Array();
 choices[47][0] = "No existe alta rotaci&oacute;n de usuarios.";
 choices[47][1] = "Existe alta rotaci&oacute;n de usuarios.";
 choices[47][2] = "No existe alta rotaci&oacute;n de analistas.";
 choices[47][3] = "Existe alta rotaci&oacute;n de analistas.";
 answers[47] = choices[47][1];
 units[47] = "78";
 comments[47] = "Id Pregunta: 4933. Examen TIC B 2007";


//  Id pregunta: 5062 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Se&ntilde;ale cual de los siguientes NO es un modelo de ciclo de vida del software:";
 choices[48]= new Array();
 choices[48][0] = "Cascada";
 choices[48][1] = "Espiral";
 choices[48][2] = "Prototipado";
 choices[48][3] = "Escalera";
 answers[48] = choices[48][3];
 units[48] = "76";
 comments[48] = "Id Pregunta: 5062. Examen TIC A 2007";


//  Id pregunta: 5180 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de Desarrollo Orientada a Objetos?";
 choices[49]= new Array();
 choices[49][0] = "Merise";
 choices[49][1] = "Booch";
 choices[49][2] = "OMT";
 choices[49][3] = "RUP";
 answers[49] = choices[49][0];
 units[49] = "79";
 comments[49] = "Id Pregunta: 5180. ";


//  Id pregunta: 5182 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En el modelo E/R, las entidades d&eacute;biles:";
 choices[50]= new Array();
 choices[50][0] = "Dependen de la existencia de otro tipo de entidad";
 choices[50][1] = "S&oacute;lo pueden tener un &uacute;nico atributo de clave propio";
 choices[50][2] = "Tienen atributos de clave propios, pero coinciden con los de la entidad fuerte de la que dependen";
 choices[50][3] = "Se representan mediante un rect&aacute;ngulo de trazo discontinuo";
 answers[50] = choices[50][0];
 units[50] = "80";
 comments[50] = "Id Pregunta: 5182. ";


//  Id pregunta: 5191 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;les son las caracter&iacute;sticas b&aacute;sicas que definen una transacci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Atomicidad, Consistencia, Aislamiento y Durabilidad.";
 choices[51][1] = "Atomicidad, Durabilidad, Racionalidad y Consistencia.";
 choices[51][2] = "Autenticaci&oacute;n, Confidencialidad, Integridad y Disponibilidad.";
 choices[51][3] = "Temporalidad, Consistencia, Aislamiento y Atomicidad.";
 answers[51] = choices[51][0];
 units[51] = "83";
 comments[51] = "Id Pregunta: 5191. ";


//  Id pregunta: 5204 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Dentro de los distintos elementos de UML, &iquest;cu&aacute;l de los siguientes es un elemento estructural?";
 choices[52]= new Array();
 choices[52][0] = "Clase.";
 choices[52][1] = "Interacci&oacute;n.";
 choices[52][2] = "M&aacute;quina de estados.";
 choices[52][3] = "Paquete.";
 answers[52] = choices[52][0];
 units[52] = "84";
 comments[52] = "Id Pregunta: 5204. ";


//  Id pregunta: 5225 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Todo ciclo de vida debe cubrir unos objetivos b&aacute;sicos. Indicar la FALSA:";
 choices[53]= new Array();
 choices[53][0] = "Definir las actividades a realizar y el orden";
 choices[53][1] = "Definir las t&eacute;cnicas a utilizar para la realizaci&oacute;n de las actividades";
 choices[53][2] = "Asegurar la consistencia con el resto de sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 choices[53][3] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto.";
 answers[53] = choices[53][1];
 units[53] = "76";
 comments[53] = "Id Pregunta: 5225. ";


//  Id pregunta: 5233 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indicar la opci&oacute;n incorrecta en relaci&oacute;n a los modelos basados en transformaciones:";
 choices[54]= new Array();
 choices[54][0] = "El modelo de transformaci&oacute;n asume la posibilidad de convertir autom&aacute;ticamente una especificaci&oacute;n formal de un producto software en un programa que satisface las especificaciones.";
 choices[54][1] = "Dentro de este tipo de modelos se encuentran los basados en t&eacute;cnicas de cuarta generaci&oacute;n (Roger Pressman) y los basados en modelos de transformaci&oacute;n (Carma McClure)";
 choices[54][2] = "Los que usan t&eacute;cnicas de cuarta generaci&oacute;n (Roger Pressman) se basan en herramientas Case.";
 choices[54][3] = "Las posibilidades de transformaci&oacute;n autom&aacute;ticas s&oacute;lo disponible para productos peque&ntilde;os aplicados a &aacute;reas limitadas";
 answers[54] = choices[54][2];
 units[54] = "76";
 comments[54] = "Id Pregunta: 5233. ";


//  Id pregunta: 5234 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al proceso unificado desarrollo de software (PUDS):";
 choices[55]= new Array();
 choices[55][0] = "Plantea un modelo de ciclo de vida iterativo e incremental, centrado en una arquitectura que gu&iacute;a el desarrollo del sistema.";
 choices[55][1] = "PUDS impulsa un control de calidad y una gesti&oacute;n de riesgos objetivos y continua.";
 choices[55][2] = "PUDS se compone de fases, iteraciones y ciclos";
 choices[55][3] = "Todas las anteriores son correctas";
 answers[55] = choices[55][3];
 units[55] = "76";
 comments[55] = "Id Pregunta: 5234. ";


//  Id pregunta: 5237 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Se&ntilde;ale la opci&oacute;n incorrecta en relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[56]= new Array();
 choices[56][0] = "Entre las ventajas del DSBC no se encuentra la reducci&oacute;n de tiempos y costes de desarrollo";
 choices[56][1] = "Su enfoque consiste en configurar y especializar componentes de software ya existentes.";
 choices[56][2] = "Estos componentes son los conocidos COTS (Commercial off-the-self) ";
 choices[56][3] = "Los productos COTS presentan problemas espec&iacute;ficos como incompatibilidad,falta de fuentes, cambio de versiones o esfuerzo de aprendizaje";
 answers[56] = choices[56][0];
 units[56] = "76";
 comments[56] = "Id Pregunta: 5237. ";


//  Id pregunta: 5809 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?:";
 choices[57]= new Array();
 choices[57][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados.";
 choices[57][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones.";
 choices[57][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad.";
 choices[57][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones.";
 answers[57] = choices[57][2];
 units[57] = "84";
 comments[57] = "Id Pregunta: 5809. NULL";


//  Id pregunta: 5907 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;En cu&aacute;l de las siguientes metodolog&iacute;as de desarrollo de software NO se utilizan Diagramas de Flujo de Datos?";
 choices[58]= new Array();
 choices[58][0] = "De Marco";
 choices[58][1] = "Jackson";
 choices[58][2] = "Gane &amp; Sarson";
 choices[58][3] = "Yourdon/Constantine";
 answers[58] = choices[58][1];
 units[58] = "79";
 comments[58] = "Id Pregunta: 5907. MAP 2008 A1";


//  Id pregunta: 5958 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  De entre las siguientes opciones, se&ntilde;ale la que no se corresponde con una metodolog&iacute;a de desarrollo &aacute;gil:";
 choices[59]= new Array();
 choices[59][0] = "Rational Rapid Development (RRD)";
 choices[59][1] = "Scrum";
 choices[59][2] = "Extreme Programming (XP)";
 choices[59][3] = "Open Unified Process (OpenUP)";
 answers[59] = choices[59][0];
 units[59] = "79";
 comments[59] = "Id Pregunta: 5958. ";


//  Id pregunta: 5993 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes funciones NO es competencia del Consejo Superior de Administraci&oacute;n Electr&oacute;nica?";
 choices[60]= new Array();
 choices[60][0] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[60][1] = "La colaboraci&oacute;n con el Centro Criptol&oacute;gico Nacional del Centro Nacional de Inteligencia en la elaboraci&oacute;n de medidas de seguridad.";
 choices[60][2] = "El control, regulaci&oacute;n y supervisi&oacute;n de los proveedores de accesos a Internet de la Administraci&oacute;n General del Estado.";
 choices[60][3] = "El impulso y la coordinaci&oacute;n de la Administraci&oacute;n Electr&oacute;nica en el seno de la Administraci&oacute;n General del Estado.";
 answers[60] = choices[60][2];
 units[60] = "77";
 comments[60] = "Id Pregunta: 5993. TIC A 2009";


//  Id pregunta: 6008 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[61]= new Array();
 choices[61][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[61][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[61][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[61][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[61] = choices[61][1];
 units[61] = "78";
 comments[61] = "Id Pregunta: 6008. TIC A 2009";


//  Id pregunta: 6064 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El creador de la t&eacute;cnica de modelado de objetos (OMT) fue:";
 choices[62]= new Array();
 choices[62][0] = "Pressman.";
 choices[62][1] = "Rumbaugh.";
 choices[62][2] = "Grady Booch.";
 choices[62][3] = "Kent Beck.";
 answers[62] = choices[62][1];
 units[62] = "79";
 comments[62] = "Id Pregunta: 6064. TIC A 2009";


//  Id pregunta: 6202 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Respecto al Diagrama de Secuencia, &iquest;cu&aacute;l de las siguientes opciones es correcta?";
 choices[63]= new Array();
 choices[63][0] = "Muestra los objetos participantes en la interacci&oacute;n y los mensajes que intercambian ordenados seg&uacute;n su secuencia en el tiempo.";
 choices[63][1] = "El eje horizontal representa el tiempo, y en el eje vertical se colocan los objetos y actores participantes en la interacci&oacute;n, sin un orden prefijado.";
 choices[63][2] = "Cada objeto o actor tiene una l&iacute;nea horizontal, y los mensajes se representan mediante etiquetas entre los distintos objetos.";
 choices[63][3] = "El tiempo fluye de abajo a arriba y de izquiera a derecha.";
 answers[63] = choices[63][0];
 units[63] = "84";
 comments[63] = "Id Pregunta: 6202. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6217 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  En el desarrollo de un sistema &iquest;En qu&eacute; casos de los siguientes es adecuado el uso de un 'modelo en espiral'?";
 choices[64]= new Array();
 choices[64][0] = "Sistemas de peque&ntilde;o tama&ntilde;o";
 choices[64][1] = "Cuando los requisitos est&eacute;n bien definidos desde un principio";
 choices[64][2] = "Proyectos donde sea importante el factor riesgo";
 choices[64][3] = "El producto a desarrollar no es novedoso";
 answers[64] = choices[64][2];
 units[64] = "76";
 comments[64] = "Id Pregunta: 6217. TICB-2009, bloque desarrollo";


//  Id pregunta: 6221 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Respecto a los diagramas de flujo de datos &iquest;Cu&aacute;l de las siguientes es falsa?";
 choices[65]= new Array();
 choices[65][0] = "Un diagrama de flujo de datos se compone de los siguientes elementos: entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[65][1] = "Un proceso como origen de datos puede hacer las funciones de un almacen de datos";
 choices[65][2] = "Los flujos de datos que comunican procesos con almacenes pueden ser de los tipos: consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[65][3] = "Elementos a&ntilde;adidos al diagrama de flujo de datos para sistemas especiales: proceso de control y flujo de control";
 answers[65] = choices[65][1];
 units[65] = "81";
 comments[65] = "Id Pregunta: 6221. TICB-2009, bloque desarrollo";


//  Id pregunta: 6254 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Una de las tareas de los Analistas en la gesti&oacute;n del proceso de desarrollo es:";
 choices[66]= new Array();
 choices[66][0] = "Dar seguimiento al plan de trabajo y corregir las desviaciones a tiempo";
 choices[66][1] = "Construir el c&oacute;digo que dar&aacute; lugar al producto resultante";
 choices[66][2] = "Fijar el calendario de hitos y entregas";
 choices[66][3] = "Mantener entrevistas y sesiones de trabajo con los responsables de la organizaci&oacute;n y los usuarios";
 answers[66] = choices[66][3];
 units[66] = "79";
 comments[66] = "Id Pregunta: 6254. TICB-2009, bloque desarrollo";


//  Id pregunta: 6273 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es modelo de ciclo de vida tradicional basado en prototipos?";
 choices[67]= new Array();
 choices[67][0] = "Modelo de prototipado evolutivo";
 choices[67][1] = "Modelo de desarrollo incremental";
 choices[67][2] = "Modelo de construcci&oacute;n de prototipos";
 choices[67][3] = "Modelo basado en transformaciones";
 answers[67] = choices[67][3];
 units[67] = "76";
 comments[67] = "Id Pregunta: 6273. ";


//  Id pregunta: 6284 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; es un Plan de Sistemas?";
 choices[68]= new Array();
 choices[68][0] = "Un an&aacute;lisis de la situaci&oacute;n actual del &aacute;rea de sistemas de una organizaci&oacute;n";
 choices[68][1] = "Un manual de usuario para los clientes de aplicaciones inform&aacute;ticas de una organizaci&oacute;n";
 choices[68][2] = "Un plan de riesgos de sistemas de informaci&oacute;n";
 choices[68][3] = "Un documento que recoge el conjunto de medidas dirigidas a satisfacer las necesidades en materia de tratamiento automatizado de informaci&oacute;n de una organizaci&oacute;n";
 answers[68] = choices[68][3];
 units[68] = "77";
 comments[68] = "Id Pregunta: 6284. ";


//  Id pregunta: 6301 AÃ±o de creación de pregunta: 2001-01-01
 questions[69]= "70)  &iquest;Qu&eacute; dos tipos de atributos puede tener un objeto?";
 choices[69]= new Array();
 choices[69][0] = "Atributos de clase y atributos de instancia";
 choices[69][1] = "Atributos visibles y atributos ciegos";
 choices[69][2] = "Atributos heredados y atributos no heredados";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][0];
 units[69] = "82";
 comments[69] = "Id Pregunta: 6301. NULL";


//  Id pregunta: 6305 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Qu&eacute; caracter&iacute;sticas se exige a un sistema OLTP?";
 choices[70]= new Array();
 choices[70][0] = "Capacidad del sistema para recuperar r&aacute;pidamente su funcionamiento en caso de fallo.";
 choices[70][1] = "Los efectos de una transacci&oacute;n no deben ser observables por ninguna otra transacci&oacute;n hasta que la transacci&oacute;n originaria haya concluido.";
 choices[70][2] = "Si una transacci&oacute;n resulta abortada, debe restituirse el anterior estado v&aacute;lido de los datos.";
 choices[70][3] = "Todas las anteriores.";
 answers[70] = choices[70][3];
 units[70] = "83";
 comments[70] = "Id Pregunta: 6305. ";


//  Id pregunta: 6312 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  No es un tipo de acoplamiento:";
 choices[71]= new Array();
 choices[71][0] = "Acoplamiento com&uacute;n.";
 choices[71][1] = "Acoplamiento normal.";
 choices[71][2] = "Acoplamiento de contenido.";
 choices[71][3] = "Todos lo son.";
 answers[71] = choices[71][3];
 units[71] = "84";
 comments[71] = "Id Pregunta: 6312. ";


//  Id pregunta: 6433 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Dada una empresa en la que se quiere almacenar informaci&oacute;n de sus empleados, departamentos y proyectos en los que colaboran sus empleados, las entidades que resultan son:";
 choices[72]= new Array();
 choices[72][0] = "empleados, departamentos y empresa";
 choices[72][1] = "empresa, proyectos, empleados y departamentos.";
 choices[72][2] = "empleados, proyectos y departamentos.";
 choices[72][3] = "empleados y departamentos.";
 answers[72] = choices[72][2];
 units[72] = "80";
 comments[72] = "Id Pregunta: 6433. NULL";


//  Id pregunta: 6608 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  En el an&aacute;lisis estructurado, al hablar de diccionario de datos se puede diferenciar entre:";
 choices[73]= new Array();
 choices[73][0] = "Diccionarios Activos y Pasivos";
 choices[73][1] = "Diccionario de Datos y de Procesos";
 choices[73][2] = "Diccionarios Funcionales y Descriptivos";
 choices[73][3] = "En el an&aacute;lisis estructurado no se diferencian tipos de diccionarios";
 answers[73] = choices[73][0];
 units[73] = "81";
 comments[73] = "Id Pregunta: 6608. NULL";


//  Id pregunta: 8193 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Seg&uacute;n el RD 589/2005, los Planes estrat&eacute;gicos departamentales en materia de tecnolog&iacute;as de la informaci&oacute;n y Administraci&oacute;n Electr&oacute;nica:";
 choices[74]= new Array();
 choices[74][0] = "Deben tener una duraci&oacute;n de al menos 2 a&ntilde;os. ";
 choices[74][1] = "Deben tener una duraci&oacute;n de al menos 3 a&ntilde;os.";
 choices[74][2] = "Deben tener una duraci&oacute;n de al menos 4 a&ntilde;os. ";
 choices[74][3] = "Pueden tener cualquier duraci&oacute;n siempre y cuando tengan car&aacute;cter verdaderamente estrat&eacute;gico.";
 answers[74] = choices[74][0];
 units[74] = "77";
 comments[74] = "Id Pregunta: 8193. Examen TIC A1 2010";


//  Id pregunta: 8413 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes lenguajes NO es un lenguaje que sigue el modelo de orientaci&oacute;n a objetos basados en clases? ";
 choices[75]= new Array();
 choices[75][0] = "JavaScript.";
 choices[75][1] = "Java.";
 choices[75][2] = "C++.";
 choices[75][3] = "Eiffel.";
 answers[75] = choices[75][0];
 units[75] = "82, 84";
 comments[75] = "Id Pregunta: 8413. Examen TIC A2 2010";


//  Id pregunta: 8765 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En relaci&oacute;n con los lenguajes de programaci&oacute;n, una constante puede pasarse como argumento a un procedimiento:";
 choices[76]= new Array();
 choices[76][0] = "No puede pasarse.";
 choices[76][1] = "S&oacute;lo por valor.";
 choices[76][2] = "S&oacute;lo por referencia.";
 choices[76][3] = "Por referencia y por valor.";
 answers[76] = choices[76][3];
 units[76] = "84";
 comments[76] = "Id Pregunta: 8765. Examen TIC A2 2010 interna";


//  Id pregunta: 8766 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  La metodolog&iacute;a de programaci&oacute;n estructurada utiliza la t&eacute;cnica de refinamientos:";
 choices[77]= new Array();
 choices[77][0] = "Sucesivos.";
 choices[77][1] = "Por iteraci&oacute;n.";
 choices[77][2] = "Secuencial";
 choices[77][3] = "Por selecci&oacute;n.";
 answers[77] = choices[77][0];
 units[77] = "81, 84";
 comments[77] = "Id Pregunta: 8766. Examen TIC A2 2010 interna";


//  Id pregunta: 8807 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  No todos los componentes de un Diagrama de Flujo de Datos (DFD) se pueden conectar mediante flujos de datos &iquest;qu&eacute; conexi&oacute;n de las siguientes est&aacute; permitida?";
 choices[78]= new Array();
 choices[78][0] = "Proceso con proceso";
 choices[78][1] = "Almac&eacute;n con almac&eacute;n";
 choices[78][2] = "Entidad Externa con Almac&eacute;n";
 choices[78][3] = "Entidad Externa con Entidad Externa";
 answers[78] = choices[78][0];
 units[78] = "81";
 comments[78] = "Id Pregunta: 8807. Examen UPM A2 2011";


//  Id pregunta: 8877 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  En un DFD es falso que:";
 choices[79]= new Array();
 choices[79][0] = "Los flujos de datos no puede conectar dos almacenes directamente.";
 choices[79][1] = "Los flujos de datos no pueden ser continuos.";
 choices[79][2] = "Los flujos de datos de di&aacute;logo pueden comunicar procesos.";
 choices[79][3] = "Los flujos de datos de consulta parten de almacenes de datos.";
 answers[79] = choices[79][1];
 units[79] = "81";
 comments[79] = "Id Pregunta: 8877. Examen UPM A2 2011";


//  Id pregunta: 8968 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Qu&eacute; patr&oacute;n de dise&ntilde;o pertenece a la clasificaci&oacute;n de Comportamiento?";
 choices[80]= new Array();
 choices[80][0] = "Singleton.";
 choices[80][1] = "Template Method.";
 choices[80][2] = "Session.";
 choices[80][3] = "Succesive Update.";
 answers[80] = choices[80][1];
 units[80] = "82,84";
 comments[80] = "Id Pregunta: 8968. ";


//  Id pregunta: 9447 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objetos?:";
 choices[81]= new Array();
 choices[81][0] = "UMTS.";
 choices[81][1] = "JINI.";
 choices[81][2] = "VORBIS.";
 choices[81][3] = "CLOS.";
 answers[81] = choices[81][1];
 units[81] = "82";
 comments[81] = "Id Pregunta: 9447. Examen AGE TIC A1 2011";


//  Id pregunta: 9449 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En el modelo Entidad-Relaci&oacute;n extendido, si puede haber elementos de una superentidad que no est&eacute;n en ninguna de las subentidades hablamos de:";
 choices[82]= new Array();
 choices[82][0] = "Jerarqu&iacute;a con cobertura total.";
 choices[82][1] = "Jerarqu&iacute;a con cobertura parcial.";
 choices[82][2] = "Jerarqu&iacute;a disjunta.";
 choices[82][3] = "Jerarqu&iacute;a con solapamiento.";
 answers[82] = choices[82][1];
 units[82] = "80";
 comments[82] = "Id Pregunta: 9449. Examen AGE TIC A1 2011";


//  Id pregunta: 9453 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En el modelo Entidad/Relaci&oacute;n de Chen, &iquest;qu&eacute; tipos de entidades se pueden diferenciar?:";
 choices[83]= new Array();
 choices[83][0] = "Regulares y d&eacute;biles.";
 choices[83][1] = "Fuertes y d&eacute;biles.";
 choices[83][2] = "A y B son correctas.";
 choices[83][3] = "Ninguna de las anteriores es correcta.";
 answers[83] = choices[83][2];
 units[83] = "80";
 comments[83] = "Id Pregunta: 9453. ";


//  Id pregunta: 9489 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Las entrevistas son una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos. &iquest;Cu&aacute;l de las siguientes no es una fase de las mismas?";
 choices[84]= new Array();
 choices[84][0] = "Identificaci&oacute;n de candidatos";
 choices[84][1] = "Contacto con candidatos para fijar entrevista";
 choices[84][2] = "Preparaci&oacute;n";
 choices[84][3] = "Ejecuci&oacute;n de la entrevista";
 answers[84] = choices[84][1];
 units[84] = "78";
 comments[84] = "Id Pregunta: 9489. ";


//  Id pregunta: 9733 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ale de entre las siguientes, la norma que establece los requisitos para el dise&ntilde;o y desarrollo de la documentaci&oacute;n del software de usuario como parte de los procesos del ciclo de vida:";
 choices[85]= new Array();
 choices[85][0] = "ISO/IEC 26514";
 choices[85][1] = "ISO 7816.";
 choices[85][2] = "ISO/IEC 12207.";
 choices[85][3] = "ISO 8859.";
 answers[85] = choices[85][0];
 units[85] = "76";
 comments[85] = "Id Pregunta: 9733. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9895 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el mapeo objeto-relacional (ORM) en el que el objeto de dominio gestiona su propia persistencia se implementa el patr&oacute;n";
 choices[86]= new Array();
 choices[86][0] = "repositorio (repository pattern).";
 choices[86][1] = "registro activo (active record).";
 choices[86][2] = "mapeador de datos (data mapper).";
 choices[86][3] = "objeto de transferencia de datos (DTO, data transfer object pattern).";
 answers[86] = choices[86][1];
 units[86] = "84";
 comments[86] = "Id Pregunta: 9895. TIC A1, Examen 2013";


//  Id pregunta: 9944 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[87]= new Array();
 choices[87][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta. ";
 choices[87][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[87][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public. ";
 choices[87][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto. ";
 answers[87] = choices[87][0];
 units[87] = "82, 60";
 comments[87] = "Id Pregunta: 9944. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9955 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En un proyecto de desarrollo que utiliza la metodolog&iacute;a SCRUM, aquel rol que tiene la responsabilidad de eliminar los obst&aacute;culos que impidan el progreso del equipo se denomina:";
 choices[88]= new Array();
 choices[88][0] = "Product owner.";
 choices[88][1] = "Retail Cashier.";
 choices[88][2] = "ScrumMaster";
 choices[88][3] = "Development team member. ";
 answers[88] = choices[88][2];
 units[88] = "79";
 comments[88] = "Id Pregunta: 9955. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9957 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Para las siguientes conexiones entre elementos de un DFD (Diagrama de flujo de datos), NO es posible el flujo:";
 choices[89]= new Array();
 choices[89][0] = "Proceso-Proceso";
 choices[89][1] = "Proceso-Entidad Externa";
 choices[89][2] = "Almac&eacute;n de datos-Almac&eacute;n de datos. ";
 choices[89][3] = "Entidad Externa-Proceso";
 answers[89] = choices[89][2];
 units[89] = "81";
 comments[89] = "Id Pregunta: 9957. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10082 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l NO es un proceso principal de acuerdo a la ISO 12207";
 choices[90]= new Array();
 choices[90][0] = "Adquisici&oacute;n";
 choices[90][1] = "Desarrollo";
 choices[90][2] = "Suministro";
 choices[90][3] = "Gesti&oacute;n";
 answers[90] = choices[90][3];
 units[90] = "76";
 comments[90] = "Id Pregunta: 10082. NULL";


//  Id pregunta: 10084 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo de soporte?";
 choices[91]= new Array();
 choices[91][0] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[91][1] = "Gesti&oacute;n";
 choices[91][2] = "Entorno de desarrollo";
 choices[91][3] = "Pruebas";
 answers[91] = choices[91][3];
 units[91] = "76";
 comments[91] = "Id Pregunta: 10084. NULL";


//  Id pregunta: 10183 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el modelo E-R de Chen, las interrelaciones entre entidades se clasifican en unarias, binarias o n-arias en funci&oacute;n del:";
 choices[92]= new Array();
 choices[92][0] = "Grado";
 choices[92][1] = "Tipo de correspondencia";
 choices[92][2] = "Cardinalidad";
 choices[92][3] = "Ninguna de las anteriores";
 answers[92] = choices[92][0];
 units[92] = "80";
 comments[92] = "Id Pregunta: 10183. ";


//  Id pregunta: 10648 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  La construcci&oacute;n de los diagramas de flujo de datos se basa en el principio de:";
 choices[93]= new Array();
 choices[93][0] = "Partici&oacute;n.";
 choices[93][1] = "Descomposici&oacute;n.";
 choices[93][2] = "Inconsistencia.";
 choices[93][3] = "Todos los anteriores.";
 answers[93] = choices[93][1];
 units[93] = "81";
 comments[93] = "Id Pregunta: 10648. ";


//  Id pregunta: 10833 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[94]= new Array();
 choices[94][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[94][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[94][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[94][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[94] = choices[94][2];
 units[94] = "80";
 comments[94] = "Id Pregunta: 10833. Examen GSI 2014";


//  Id pregunta: 10845 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[95]= new Array();
 choices[95][0] = "Diagrama de clases.";
 choices[95][1] = "Diagrama de objetos.";
 choices[95][2] = "Diagrama de despliegue.";
 choices[95][3] = "Diagrama de actividades.";
 answers[95] = choices[95][3];
 units[95] = "82, 84";
 comments[95] = "Id Pregunta: 10845. Examen GSI 2014";


//  Id pregunta: 11055 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes NO es una Metodolog&iacute;a &Aacute;gil?";
 choices[96]= new Array();
 choices[96][0] = "XP";
 choices[96][1] = "Kanban";
 choices[96][2] = "FDD";
 choices[96][3] = "Todas son metodolog&iacute;as &aacute;giles";
 answers[96] = choices[96][3];
 units[96] = "79";
 comments[96] = "Id Pregunta: 11055. ";


//  Id pregunta: 11155 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  A la hora de tomar requisitos para dise&ntilde;ar un sistema de informaci&oacute;n &iquest;Qu&eacute; informaci&oacute;n debe registrarse obligatoriamente de cada requisito?";
 choices[97]= new Array();
 choices[97][0] = "C&oacute;digo &uacute;nico";
 choices[97][1] = "Nombre descriptivo del requisito";
 choices[97][2] = "Descripci&oacute;n detallada del requisito";
 choices[97][3] = "Todos los anteriores";
 answers[97] = choices[97][3];
 units[97] = "78";
 comments[97] = "Id Pregunta: 11155. ";


//  Id pregunta: 11156 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seleccione la respuesta err&oacute;nea de los diagramas E/R:";
 choices[98]= new Array();
 choices[98][0] = "Los atributos multivalorados son aquellos que pueden contener m&aacute;s de un valor simult&aacute;neamente, y monovalorados los que s&oacute;lo pueden contener un valor";
 choices[98][1] = "Los atributos monovalorados se representan por un nombre dentro de una elipse, mientras que los multivalorados por un nombre dentro de una doble elipse.";
 choices[98][2] = "Se dice que un atributo es compuesto cuando puede descomponerse en otros componentes o atributos m&aacute;s peque&ntilde;os, y simple en otro caso.";
 choices[98][3] = "Se dice que un atributo es cardinal si obligatoriamente tiene que tener al menos un valor";
 answers[98] = choices[98][3];
 units[98] = "80";
 comments[98] = "Id Pregunta: 11156. ";


//  Id pregunta: 11552 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale cu&aacute;l de las siguientes tareas se realiza en la fase de an&aacute;lisis:";
 choices[99]= new Array();
 choices[99][0] = "Elaboraci&oacute;n del modelo f&iacute;sico de procesos.";
 choices[99][1] = "Identificaci&oacute;n de requisitos funcionales del sistema.";
 choices[99][2] = "Definici&oacute;n de la arquitectura t&eacute;cnica del sistema.";
 choices[99][3] = "Elaboraci&oacute;n del modelo f&iacute;sico de datos.";
 answers[99] = choices[99][1];
 units[99] = "78";
 comments[99] = "Id Pregunta: 11552. NULL";


