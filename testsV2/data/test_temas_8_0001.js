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

//  Id pregunta: 1634 AÃ±o de creación de pregunta: 2003-01-01
 questions[0]= "1)  &iquest;Qu&eacute; son las funciones primitivas en un Diagrama de Flujo de Datos?";
 choices[0]= new Array();
 choices[0][0] = "Son aquellas funciones que no responden a eventos del sistema, que se describen en un Diagrama de Flujo de Datos para mejorar su legibilidad.";
 choices[0][1] = "Son aquellos procesos de un Diagrama de Flujo de Datos que no se descomponen m&aacute;s.";
 choices[0][2] = "  Son los procesos que aparecen en el Diagrama de Contexto.";
 choices[0][3] = " Son las funciones que se conectan con los almacenes de datos en un Diagrama de Flujo de Datos.";
 answers[0] = choices[0][1];
 units[0] = "81";
 comments[0] = "Id Pregunta: 1634. ";


//  Id pregunta: 1920 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[1]= new Array();
 choices[1][0] = "Modelo en cascada";
 choices[1][1] = "Modelo de prototipado";
 choices[1][2] = "Modelo de transformaci&oacute;n";
 choices[1][3] = "Modelo en espiral";
 answers[1] = choices[1][3];
 units[1] = "76";
 comments[1] = "Id Pregunta: 1920. ";


//  Id pregunta: 1986 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes es un principio de especificaci&oacute;n del software de acuerdo con R.S. Pressman?:";
 choices[2]= new Array();
 choices[2][0] = "Separar funcionalidad de implementaci&oacute;n";
 choices[2][1] = "La especificaci&oacute;n del sistema debe ser tolerante a la incompletitud y ampliable";
 choices[2][2] = "Una especificaci&oacute;n debe ser operativa";
 choices[2][3] = "Todos los anteriores son principios de especificaci&oacute;n del software";
 answers[2] = choices[2][3];
 units[2] = "78";
 comments[2] = "Id Pregunta: 1986. ";


//  Id pregunta: 1989 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El acoplamiento QUE presenta una gradaci&oacute;n de menor a mayor es:";
 choices[3]= new Array();
 choices[3][0] = "Sin acoplamiento directo, de datos simple, por estampado, de control, externo, com&uacute;n, por contenido.";
 choices[3][1] = "Sin acoplamiento directo, de datos simple, generico, de control, externo, por contenido.";
 choices[3][2] = "De datos simple, por estampado, externo, com&uacute;n, de control, por contenido.";
 choices[3][3] = "Por estampado, simple, de control, externo, com&uacute;n, por contenido.";
 answers[3] = choices[3][0];
 units[3] = "84";
 comments[3] = "Id Pregunta: 1989. ";


//  Id pregunta: 2012 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Si la fecha l&iacute;mite para la entrega de un sistema de informaci&oacute;n est&aacute; tan cerca que no va a ser posible con los recursos asignados, entregar un sistema que satisfaga todos los requisitos, la estrategia (modelo) a seguir deber&iacute;a ser:";
 choices[4]= new Array();
 choices[4][0] = "El modelo de prototipaci&oacute;n";
 choices[4][1] = "El modelo en cascada";
 choices[4][2] = "El modelo incremental";
 choices[4][3] = "El modelo de espiral WINWIN";
 answers[4] = choices[4][2];
 units[4] = "76";
 comments[4] = "Id Pregunta: 2012. Examen TIC MAP B 2004";


//  Id pregunta: 2013 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  El denominado &quot;modelo de desarrollo concurrente&quot; del ciclo de vida";
 choices[5]= new Array();
 choices[5][0] = "Es una variante del Modelo en Espiral Cl&aacute;sico";
 choices[5][1] = "Es una variante del Modelo Lienal o en Cascada";
 choices[5][2] = "S&oacute;lo es apropiado para aplicaciones de Miner&iacute;a de Datos u OLAP";
 choices[5][3] = "Est&aacute; espec&iacute;ficamente concebido para sistemas multiprocesador";
 answers[5] = choices[5][0];
 units[5] = "76";
 comments[5] = "Id Pregunta: 2013. Examen TIC MAP B 2004";


//  Id pregunta: 2024 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En Programaci&oacute;n orientada a objetos, las relaciones de agregaci&oacute;n entre objetos son:";
 choices[6]= new Array();
 choices[6][0] = "Maneras de construir clases u objetos en t&eacute;rminos de otras clases u objetos.";
 choices[6][1] = "La forma de definir una clase u objeto como extensi&oacute;n de otra clase u objeto.";
 choices[6][2] = "Mecanismos para sobrecargar los m&eacute;todos de accesos a los objetos.";
 choices[6][3] = "S&oacute;lo posibles entre objetos monol&iacute;ticos.";
 answers[6] = choices[6][0];
 units[6] = "82,84";
 comments[6] = "Id Pregunta: 2024. Examen TIC MAP B 2004";


//  Id pregunta: 2029 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Ivar Jacobson, Jim Rumbaugh y Grady Booch fueron los creadores de:";
 choices[7]= new Array();
 choices[7][0] = "UML";
 choices[7][1] = "XML";
 choices[7][2] = "HTML";
 choices[7][3] = "Ninguno de los anteriores";
 answers[7] = choices[7][0];
 units[7] = "82";
 comments[7] = "Id Pregunta: 2029. Similar a examen TIC SS A 2003";


//  Id pregunta: 2037 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  En UML una variable o un m&eacute;todo con la notaci&oacute;n: '#' &iquest;qu&eacute; significa?";
 choices[8]= new Array();
 choices[8][0] = "Que es p&uacute;blica.";
 choices[8][1] = "Que es privada.";
 choices[8][2] = "Que es protegida.";
 choices[8][3] = "Ninguna de las anteriores.";
 answers[8] = choices[8][2];
 units[8] = "84";
 comments[8] = "Id Pregunta: 2037. ";


//  Id pregunta: 2087 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es un sistema de tiempo real?";
 choices[9]= new Array();
 choices[9][0] = "Control de seguimiento de sat&eacute;lites.";
 choices[9][1] = "Control de edificios inteligentes.";
 choices[9][2] = "N&oacute;mina de una empresa.";
 choices[9][3] = "Reserva de billetes de una compa&ntilde;&iacute;a de transportes interurbana.";
 answers[9] = choices[9][2];
 units[9] = "83";
 comments[9] = "Id Pregunta: 2087. ";


//  Id pregunta: 2116 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;C&oacute;mo conviene que sea el acoplamiento?";
 choices[10]= new Array();
 choices[10][0] = "M&aacute;ximo.";
 choices[10][1] = "M&iacute;nimo.";
 choices[10][2] = "No es importante.";
 choices[10][3] = "Por defecto.";
 answers[10] = choices[10][1];
 units[10] = "84";
 comments[10] = "Id Pregunta: 2116. ";


//  Id pregunta: 2134 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones, respecto de las especificaciones de los requerimientos, es falsa?:";
 choices[11]= new Array();
 choices[11][0] = "La especificaci&oacute;n debe separar la funcionalidad de la implementaci&oacute;n";
 choices[11][1] = "La especificaci&oacute;n s&oacute;lo debe contemplar el software, aisl&aacute;ndolo del resto del sistema";
 choices[11][2] = "La especificaci&oacute;n debe ser ampliable y flexible";
 choices[11][3] = "La especificaci&oacute;n debe ser f&aacute;cilmente operativa";
 answers[11] = choices[11][1];
 units[11] = "78";
 comments[11] = "Id Pregunta: 2134. ";


//  Id pregunta: 2137 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes es una t&eacute;cnica y no una metodolog&iacute;a?";
 choices[12]= new Array();
 choices[12][0] = "Desarrollo de sistemas estructurados de datos.";
 choices[12][1] = "Higher Order Software (HOS).";
 choices[12][2] = "Desarrollo de sistemas de Jackson.";
 choices[12][3] = "Information Engineering Workbench (IEW).";
 answers[12] = choices[12][3];
 units[12] = "84";
 comments[12] = "Id Pregunta: 2137. ";


//  Id pregunta: 2176 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La diferencia entre ciclo de vida y metodolog&iacute;a  es que &hellip;:";
 choices[13]= new Array();
 choices[13][0] = "El ciclo de vida indica el qu&eacute;, mientras que la metodolog&iacute;a indica el cu&aacute;ndo";
 choices[13][1] = "El ciclo de vida indica el cu&aacute;ndo, mientras que la metodolog&iacute;a indica el c&oacute;mo";
 choices[13][2] = "El ciclo de vida indica el qu&eacute;, mientras que la metodolog&iacute;a indica el c&oacute;mo";
 choices[13][3] = "El ciclo de vida indica el modo, mientras que la metodolog&iacute;a indica el qu&eacute;";
 answers[13] = choices[13][2];
 units[13] = "76";
 comments[13] = "Id Pregunta: 2176. ";


//  Id pregunta: 2187 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l no es una caracter&iacute;stica com&uacute;n a todas las metodolog&iacute;as?:";
 choices[14]= new Array();
 choices[14][0] = "Diccionario de datos";
 choices[14][1] = "Prototipado";
 choices[14][2] = "Cubre todos los aspectos de un sistema de aplicaci&oacute;n: desde el organizativo , hasta el sistema t&eacute;cnico de apoyo";
 choices[14][3] = "An&aacute;lisis de riesgo";
 answers[14] = choices[14][1];
 units[14] = "79,85";
 comments[14] = "Id Pregunta: 2187. ";


//  Id pregunta: 2247 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Del modelo de ciclo de vida en espiral se puede decir:";
 choices[15]= new Array();
 choices[15][0] = "Es un modelo orientado a la gesti&oacute;n de riesgos y permite el prototipado r&aacute;pido";
 choices[15][1] = "No es un modelo orientado a la gesti&oacute;n de riesgos, pero permite el prototipado r&aacute;pido";
 choices[15][2] = "Es un modelo orientado a la gesti&oacute;n de riesgos, pero no permite el prototipado";
 choices[15][3] = "No es un modelo orientado a la gesti&oacute;n de riesgos y no permite el prototipado r&aacute;pido";
 answers[15] = choices[15][0];
 units[15] = "76";
 comments[15] = "Id Pregunta: 2247. ";


//  Id pregunta: 2276 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El flujo de datos de un DFD:";
 choices[16]= new Array();
 choices[16][0] = "Tiene siempre flechas";
 choices[16][1] = "No tiene por qu&eacute; existir";
 choices[16][2] = "S&oacute;lo conecta procesos";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][3];
 units[16] = "81";
 comments[16] = "Id Pregunta: 2276. ";


//  Id pregunta: 2291 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El modelo entidad/relaci&oacute;n de Chen es:";
 choices[17]= new Array();
 choices[17][0] = "Una t&eacute;cnica para la modelizaci&oacute;n sem&aacute;ntica de datos";
 choices[17][1] = "Una herramienta automatizada de an&aacute;lisis de requisitos";
 choices[17][2] = "Una t&eacute;cnica para el modelado de procesos";
 choices[17][3] = "Una metodolog&iacute;a para el desarrollo de sistemas de informaci&oacute;n";
 answers[17] = choices[17][0];
 units[17] = "80";
 comments[17] = "Id Pregunta: 2291. ";


//  Id pregunta: 2312 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el modelo en cascada del ciclo de vida de un &quot;software&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[18]= new Array();
 choices[18][0] = "La fase de especificaci&oacute;n de requisitos depende del entorno tecnol&oacute;gico del Sistema de Informaci&oacute;n (SI)";
 choices[18][1] = "Se puede pasar por las fases de planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n y pruebas, sin necesidad de completar cada una de ellas";
 choices[18][2] = "La fase de dise&ntilde;o se denomina an&aacute;lisis funcional";
 choices[18][3] = "La decisi&oacute;n del paso de una fase a la siguiente se toma en funci&oacute;n de si la documentaci&oacute;n asociada a esa fase est&aacute; completa o no";
 answers[18] = choices[18][3];
 units[18] = "76";
 comments[18] = "Id Pregunta: 2312. ";


//  Id pregunta: 2349 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En un DFD, se&ntilde;alar aquella situaci&oacute;n que no es correcta:";
 choices[19]= new Array();
 choices[19][0] = "Una entidad externa se relaciona con un proceso mediante uno o varios flujos de datos";
 choices[19][1] = "Un almac&eacute;n se repite en varios niveles de DFDs";
 choices[19][2] = "Dos procesos se pueden comunicar, enviando datos de uno a otro, siempre que lacomunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[19][3] = "Un flujo de datos entra en un proceso que s&oacute;lo realiza la transformaci&oacute;n de dividir el flujo entrante en dos flujos salientes";
 answers[19] = choices[19][2];
 units[19] = "81";
 comments[19] = "Id Pregunta: 2349. ";


//  Id pregunta: 2352 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En una planificaci&oacute;n de un proyecto, una situaci&oacute;n que se da normalmente es que:";
 choices[20]= new Array();
 choices[20][0] = "Al inicio del proyecto se consuman m&aacute;s recursos que al final";
 choices[20][1] = "Al principio los recursos precisos van creciendo y al final decreciendo";
 choices[20][2] = "Al final del proyecto se consumen m&aacute;s recursos que en toda su vida anterior";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][1];
 units[20] = "77";
 comments[20] = "Id Pregunta: 2352. ";


//  Id pregunta: 2365 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Entre los objetivos de los DFDs se encuentra:";
 choices[21]= new Array();
 choices[21][0] = "Hacer referencia al entorno f&iacute;sico";
 choices[21][1] = "Crear un modelo funcional del sistema";
 choices[21][2] = "Representar el &quot;c&oacute;mo se va a hacer el sistema&quot; en lugar del &quot;qu&eacute; se va a hacer en el sistema&quot; ";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][1];
 units[21] = "81";
 comments[21] = "Id Pregunta: 2365. ";


//  Id pregunta: 2388 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de un almac&eacute;n de datos dentro de un diagrama de flujo de datos:";
 choices[22]= new Array();
 choices[22][0] = "No puede crear, destruir ni transformar datos";
 choices[22][1] = "No se puede comunicar con otro almac&eacute;n de datos mediante un flujo directo, siempre tiene que haber un proceso entre ambos almacenes";
 choices[22][2] = "Debe referirse el almac&eacute;n al entorno f&iacute;sico";
 choices[22][3] = "Si se transpasa por un flujo de datos el contenido completo del almac&eacute;n, este flujo no llevar&aacute; nombre";
 answers[22] = choices[22][2];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2388. ";


//  Id pregunta: 2389 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La dimensi&oacute;n est&aacute;tica del modelo E/R est&aacute; constituida por el siguiente conjunto de objetos con los que describimos la estructura del mundo real:";
 choices[23]= new Array();
 choices[23][0] = "Entidad, interrelaci&oacute;n y atributo";
 choices[23][1] = "Entidad, atributo, dominio y restricci&oacute;n";
 choices[23][2] = "Entidad, interrelaci&oacute;n, dominio, atributo y restricciones del modelo";
 choices[23][3] = "Entidad, interrelaci&oacute;n, domino, atributo y objeto";
 answers[23] = choices[23][2];
 units[23] = "80";
 comments[23] = "Id Pregunta: 2389. ";


//  Id pregunta: 2432 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[24]= new Array();
 choices[24][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[24][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[24][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[24][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[24] = choices[24][1];
 units[24] = "82,84";
 comments[24] = "Id Pregunta: 2432. ";


//  Id pregunta: 2442 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Las funciones primitivas del modelo l&oacute;gico de procesos:";
 choices[25]= new Array();
 choices[25][0] = "Se pueden descomponer en m&oacute;dulos elementales de proceso";
 choices[25][1] = "Son procesos que no se descomponen m&aacute;s";
 choices[25][2] = "Pueden aparecer en todos los niveles del modelo, incluso en el diagrama de contexto ";
 choices[25][3] = "Incluyen s&oacute;lo informaci&oacute;n sobre el modo de acceso a los datos del sistema";
 answers[25] = choices[25][1];
 units[25] = "81";
 comments[25] = "Id Pregunta: 2442. ";


//  Id pregunta: 2460 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Los modelos de ciclo de vida que incluyen prototipos software desechables, se realizan por la necesidad de ...";
 choices[26]= new Array();
 choices[26][0] = "Acortar el tiempo de implementaci&oacute;n facilitando la reutilizaci&oacute;n de software";
 choices[26][1] = "Mejorar la comprensi&oacute;n de los requisitos del sistema a dise&ntilde;ar";
 choices[26][2] = "Facilitar el mantenimiento del sistema";
 choices[26][3] = "La utilizaci&oacute;n de sistemas CASE que facilitan el desarrollo del prototipo";
 answers[26] = choices[26][1];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2460. ";


//  Id pregunta: 2481 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Respecto a la construcci&oacute;n de un prototipo podemos decir:";
 choices[27]= new Array();
 choices[27][0] = "Es el proceso que facilita al programador la creaci&oacute;n del modelo de software a construir";
 choices[27][1] = "Puede adoptar la forma de un 'prototipo que funcione' que describa la interacci&oacute;n hombre-m&aacute;quina, de forma que facilite al usuario la comprensi&oacute;n de c&oacute;mo funcionar&aacute; tal trabajo";
 choices[27][2] = "Puede adoptar la forma de 'un prototipo que funcione' que implementa algunos subconjuntos de la funcionalidad requerida al software deseado";
 choices[27][3] = "Todas las respuestas anteriores son ciertas";
 answers[27] = choices[27][3];
 units[27] = "85";
 comments[27] = "Id Pregunta: 2481. ";


//  Id pregunta: 2483 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Respecto a los procesos, en un DFD:";
 choices[28]= new Array();
 choices[28][0] = "Cada proceso debe tener al menos una entrada y una salida";
 choices[28][1] = "Un proceso no puede ser fuente ni sumidero de informaci&oacute;n, s&oacute;lo transformarla";
 choices[28][2] = "Un proceso primitivo es aquel del que derivan en el tiempo otros procesos del sistema";
 choices[28][3] = "Las opciones a) y b) son correctas";
 answers[28] = choices[28][3];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2483. ";


//  Id pregunta: 2495 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;Las relaciones de un diagrama de clases pueden ser&quot;:";
 choices[29]= new Array();
 choices[29][0] = "Agregaci&oacute;n.";
 choices[29][1] = "Coherencia.";
 choices[29][2] = "Herencia.";
 choices[29][3] = "Dependencia.";
 answers[29] = choices[29][1];
 units[29] = "82,84";
 comments[29] = "Id Pregunta: 2495. ";


//  Id pregunta: 2540 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los denominados paquetes integrados poseen como caracter&iacute;stica fundamental:";
 choices[30]= new Array();
 choices[30][0] = "Un potente sistema de comunicaciones.";
 choices[30][1] = "La conectividad en sus funciones y gran comodidad en el manejo de datos.";
 choices[30][2] = "Facilidad para el manejo de grandes vol&uacute;menes de datos.";
 choices[30][3] = "El incrementar la potencia real del ordenador al incorporar tarjetas de expansi&oacute;n de memoria.";
 answers[30] = choices[30][1];
 units[30] = "84";
 comments[30] = "Id Pregunta: 2540. ";


//  Id pregunta: 2601 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)   &iquest;Cu&aacute;l de los siguientes modelos de ciclode vida, hace especial &eacute;nfasis en el control de riesgos?";
 choices[31]= new Array();
 choices[31][0] = "Espiral";
 choices[31][1] = "Cascada";
 choices[31][2] = "Ambos";
 choices[31][3] = "Ninguno";
 answers[31] = choices[31][0];
 units[31] = "76";
 comments[31] = "Id Pregunta: 2601. ";


//  Id pregunta: 2605 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[32][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[32][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[32][3] = " El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[32] = choices[32][2];
 units[32] = "58,80";
 comments[32] = "Id Pregunta: 2605. ";


//  Id pregunta: 2607 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de estas afirmaciones es falsa?";
 choices[33]= new Array();
 choices[33][0] = "Dentro del An&aacute;lisis de Requisitos, un m&eacute;todo adecuado para decidir la mejor alternativa es el retorno de la inversi&oacute;n, que permite saber en qu&eacute; a&ntilde;o se recupera el coste total inicialmente estimado.";
 choices[33][1] = "Dentro del An&aacute;lisis de Requisitos, en la selecci&oacute;n de la alternativa m&aacute;s adecuada, si se hace una estimaci&oacute;n de Costes / Beneficios no se tendr&aacute;n en cuenta los costes de mantenimiento.";
 choices[33][2] = "El An&aacute;lisis Coste / Beneficio tiene como objetivo proporcionar una medida de los costes en que se incurre en la realizaci&oacute;n de un proyecto inform&aacute;tico y compara dichos costes previstos con los beneficios esperados de la realizaci&oacute;n de dicho proyecto.";
 choices[33][3] = "Dentro de la selecci&oacute;n de alternativas en el An&aacute;lisis de Requisitos, para cada alternativa se consideran los beneficios para el usuario y los beneficios t&eacute;cnicos";
 answers[33] = choices[33][1];
 units[33] = "86,38,78";
 comments[33] = "Id Pregunta: 2607. ";


//  Id pregunta: 2610 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;C&uacute;al de las siguientes afirmaciones sobre el Modelo de Ciclo de Vida en Espiral puede considerarse una ventaja del mismo?";
 choices[34]= new Array();
 choices[34][0] = "Su rango de opciones acomoda las buenas caracter&iacute;sticas de los dem&aacute;s modelos de desarrollo de software, mientras su procedimiento dirigido por el riesgo no evita muchas de sus dificultades";
 choices[34][1] = "Ajusta su aplicabilidad para el caso de software contratado";
 choices[34][2] = "Independencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[34][3] = "Es adecuado para software propio pero no se adapta bien al software contratado";
 answers[34] = choices[34][3];
 units[34] = "76";
 comments[34] = "Id Pregunta: 2610. ";


//  Id pregunta: 2614 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;C&uacute;al de los siguientes lenguajes no es Orientado a Objetos?";
 choices[35]= new Array();
 choices[35][0] = "Smalltalk";
 choices[35][1] = "C++";
 choices[35][2] = "Eiffel";
 choices[35][3] = "ACTOR";
 answers[35] = choices[35][3];
 units[35] = "82";
 comments[35] = "Id Pregunta: 2614. ";


//  Id pregunta: 2640 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  En dise&ntilde;o estructurado &iquest;c&uacute;al de los siguientes niveles tiene menor Cohesi&oacute;n?";
 choices[36]= new Array();
 choices[36][0] = "L&oacute;gica.";
 choices[36][1] = "Procedimental.";
 choices[36][2] = "Funcional.";
 choices[36][3] = "Coincidental.";
 answers[36] = choices[36][3];
 units[36] = "84";
 comments[36] = "Id Pregunta: 2640. ";


//  Id pregunta: 2702 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  Respecto al an&aacute;lisis esencial de Yourdon se puede afirmar que ...";
 choices[37]= new Array();
 choices[37][0] = "Se ha de elaborar un modelo esencial y un modelo de implantaci&oacute;n de usuario";
 choices[37][1] = "El modelo esencial de compone de modelo ambiental  y modelo de comportamiento";
 choices[37][2] = "Para describir el modelo de comportamiento se usan DFDs y diagramas E-R";
 choices[37][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[37] = choices[37][3];
 units[37] = "81,84,78";
 comments[37] = "Id Pregunta: 2702. ";


//  Id pregunta: 2717 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Uno de los pasos del modelo de ciclo de vida aplicado al desarrollo de software basado en componentes (DSBC) consiste en seleccionar los componentes seg&uacute;n su granularidad. &iquest;Qu&eacute; factores definen la granularidad de un componente?";
 choices[38]= new Array();
 choices[38][0] = "El tama&ntilde;o del componente.";
 choices[38][1] = "El tama&ntilde;o, la complejidad y la capacidad funcional del componente.";
 choices[38][2] = "La capacidad funcional del componente y su estructura de datos.";
 choices[38][3] = "El tama&ntilde;o, la fiabilidad, la complejidad y la mantenibilidad del componente.";
 answers[38] = choices[38][1];
 units[38] = "76";
 comments[38] = "Id Pregunta: 2717. ";


//  Id pregunta: 2736 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[39]= new Array();
 choices[39][0] = "Pueden  ser permanentes o temporales";
 choices[39][1] = "No crean informaci&oacute;n";
 choices[39][2] = "Son  accesibles desde entidades externas.";
 choices[39][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[39] = choices[39][2];
 units[39] = "79,81";
 comments[39] = "Id Pregunta: 2736. ";


//  Id pregunta: 2751 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Qu&eacute; tres modelos utiliza OMT?";
 choices[40]= new Array();
 choices[40][0] = "Modelo de objetos , din&aacute;mico y funcional";
 choices[40][1] = "Modelo est&aacute;tico , din&aacute;mico y funcional";
 choices[40][2] = "Modelo de objetos , din&aacute;mico y transaccional";
 choices[40][3] = "Modelo de objetos, est&aacute;tico y de clases";
 answers[40] = choices[40][0];
 units[40] = "82";
 comments[40] = "Id Pregunta: 2751. ";


//  Id pregunta: 2761 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  DARTS es:";
 choices[41]= new Array();
 choices[41][0] = "Un entorno de desarrollo J2EE.";
 choices[41][1] = "Un entorno de desarrollo .NET.";
 choices[41][2] = "Una extensi&oacute;n del An&aacute;lisis y Dise&ntilde;o Estructurados para el dise&ntilde;o de sistemas en tiempo real.";
 choices[41][3] = "Una metodolog&iacute;a para el dise&ntilde;o de Data Marts.";
 answers[41] = choices[41][2];
 units[41] = "83";
 comments[41] = "Id Pregunta: 2761. ";


//  Id pregunta: 4284 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre las estructuras de datos no es correcta?";
 choices[42]= new Array();
 choices[42][0] = "Una estructura de datos es un conjunto de variables de determinado tipo, agrupadas y organizadas para representar un comportamiento";
 choices[42][1] = "En general, la elecci&oacute;n del algoritmo y de las estructuras de datos que manipular&aacute; no tienen mucha relaci&oacute;n (bajo acoplamiento).";
 choices[42][2] = "Con las estructuras de datos se pretende facilitar un esquema l&oacute;gico para manipular los datos en funci&oacute;n del problema a resolver.";
 choices[42][3] = "Las estructuras de datos pueden ser est&aacute;ticas y din&aacute;micas.";
 answers[42] = choices[42][1];
 units[42] = "79";
 comments[42] = "Id Pregunta: 4284. ";


//  Id pregunta: 4289 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Si tiene que desarrollar un procesador de textos siguiendo un modelo de ciclo de vida incremental, &iquest;qu&eacute; funcionalidad abordar&iacute;a primero?";
 choices[43]= new Array();
 choices[43][0] = "Las funciones de edici&oacute;n m&aacute;s sofisticadas.";
 choices[43][1] = "La gesti&oacute;n b&aacute;sica de archivos y producci&oacute;n de documentos.";
 choices[43][2] = "La m&aacute;s sencilla, para ir de menor a mayor complejidad.";
 choices[43][3] = "La funcionalidad m&aacute;s independiente del usuario, como por ejemplo, la correcci&oacute;n ortogr&aacute;fica y gramatical";
 answers[43] = choices[43][1];
 units[43] = "76";
 comments[43] = "Id Pregunta: 4289. ";


//  Id pregunta: 4291 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Un Jefe de Proyecto ha elaborado un borrador del Plan de Gesti&oacute;n de un proyecto de software. &iquest;Cu&aacute;les de los siguientes elementos deben ser tratados en ese plan? I) Calendario. II) Presupuesto. III) Requisitos del software. IV) Personal.";
 choices[44]= new Array();
 choices[44][0] = "I, III y IV.";
 choices[44][1] = "I, II y III.";
 choices[44][2] = "I, II y IV.";
 choices[44][3] = "I, II, III y IV.";
 answers[44] = choices[44][2];
 units[44] = "77";
 comments[44] = "Id Pregunta: 4291. ";


//  Id pregunta: 4295 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Un diagrama de Secuencia de UML:";
 choices[45]= new Array();
 choices[45][0] = "Representa los componentes del sistema y las dependencias existentes entre ellos.";
 choices[45][1] = "Hace hincapi&eacute; en la ordenaci&oacute;n temporal de los mensajes que se intercambian.";
 choices[45][2] = "Establece las relaciones que existen entre los objetos y las clases.";
 choices[45][3] = "Establece los estados y las transiciones entre los estados de los elementos del sistema.";
 answers[45] = choices[45][1];
 units[45] = "82";
 comments[45] = "Id Pregunta: 4295. ";


//  Id pregunta: 4378 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  El objetivo principal del an&aacute;lisis de sistemas es:";
 choices[46]= new Array();
 choices[46][0] = "Determinar el mecanismo de funcionamiento de los m&oacute;dulos.";
 choices[46][1] = "Validar con el cliente el cumplimiento de las especificaciones.";
 choices[46][2] = "Establecer claramente las especificaciones del producto.";
 choices[46][3] = "Integrar los distintos componentes del sistema.";
 answers[46] = choices[46][2];
 units[46] = "80";
 comments[46] = "Id Pregunta: 4378. ";


//  Id pregunta: 4379 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el an&aacute;lisis y dise&ntilde;o de software, el flujo de transacci&oacute;n es una t&eacute;cnica de:";
 choices[47]= new Array();
 choices[47][0] = "Refinamiento progresivo.";
 choices[47][1] = "Descomposici&oacute;n modular.";
 choices[47][2] = "An&aacute;lisis estructurado.";
 choices[47][3] = "Dise&ntilde;o estructurado.";
 answers[47] = choices[47][3];
 units[47] = "83";
 comments[47] = "Id Pregunta: 4379. ";


//  Id pregunta: 4470 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cual de los siguientes modelos de ciclo de vida no es adecuado para el desarrollo de sistemas de informaci&oacute;n orientados a objetos?";
 choices[48]= new Array();
 choices[48][0] = "Modelo de agrupamiento.";
 choices[48][1] = "Modelo en cascada.";
 choices[48][2] = "Modelo remolino.";
 choices[48][3] = "Modelo pinball.";
 answers[48] = choices[48][1];
 units[48] = "76";
 comments[48] = "Id Pregunta: 4470. ";


//  Id pregunta: 4797 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[49]= new Array();
 choices[49][0] = "Diagramas de casos de uso.";
 choices[49][1] = "Diagramas de estados.";
 choices[49][2] = "Diagramas de interacci&oacute;n.";
 choices[49][3] = "Diagramas de flujo de datos.";
 answers[49] = choices[49][2];
 units[49] = "84";
 comments[49] = "Id Pregunta: 4797. examen TIC 2006";


//  Id pregunta: 4803 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En relaci&oacute;n con el diccionario de datos en el an&aacute;lisis estructurado, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[50]= new Array();
 choices[50][0] = "Contiene definiciones de todos los objetos de datos gestionados por el software";
 choices[50][1] = "Se configura con todas las definiciones de objetos de datos, sus atributos y sus relaciones";
 choices[50][2] = "Almacena tan solo una categorizaci&oacute;n de los objetos de datos, sin recoger sus atributos";
 choices[50][3] = "Contiene procedimientos almacenados";
 answers[50] = choices[50][0];
 units[50] = "81";
 comments[50] = "Id Pregunta: 4803. ";


//  Id pregunta: 4948 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  El proceso unificado de desarrollo de software est&aacute; dirigido por &ldquo;casos de uso&rdquo;. Un &ldquo;caso de uso&rdquo; es:";
 choices[51]= new Array();
 choices[51][0] = "Un diagrama que muestra el despliegue de un sistema desde un punto de vista est&aacute;tico.";
 choices[51][1] = "Un fragmento de funcionalidad del sistema, que proporciona al usuario un resultado importante.";
 choices[51][2] = "Un conjunto de objetos y relaciones, incluyendo los mensajes que pueden enviarse entre ellos.";
 choices[51][3] = "Un diagrama que muestra el flujo de actividad a actividad.";
 answers[51] = choices[51][1];
 units[51] = "76";
 comments[51] = "Id Pregunta: 4948. Examen TIC B 2007";


//  Id pregunta: 4950 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Qu&eacute; diagrama UML describe los mensajes que se pasan entre los objetos y el orden en el que lo hacen?:";
 choices[52]= new Array();
 choices[52][0] = "Diagrama de estado.";
 choices[52][1] = "Diagrama de actividad.";
 choices[52][2] = "Diagrama de despliegue.";
 choices[52][3] = "Diagrama de secuencia.";
 answers[52] = choices[52][3];
 units[52] = "82";
 comments[52] = "Id Pregunta: 4950. Examen TIC B 2007";


//  Id pregunta: 4993 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[53]= new Array();
 choices[53][0] = "Polimorfismo";
 choices[53][1] = "Herencia";
 choices[53][2] = "Reusabilidad";
 choices[53][3] = "Encapsulaci&oacute;n";
 answers[53] = choices[53][3];
 units[53] = "82";
 comments[53] = "Id Pregunta: 4993. Examen TIC A 2007";


//  Id pregunta: 5033 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En la planificaci&oacute;n de un proyecto representada por un diagrama de Pert, una actividad critica es una actividad:";
 choices[54]= new Array();
 choices[54][0] = "con un alto riesgo de incrementar su duraci&oacute;n";
 choices[54][1] = "con dependencia de otra actividad y de la que depende al menos una actividad";
 choices[54][2] = "en el camino cr&iacute;tico";
 choices[54][3] = "cuya duraci&oacute;n no puede modificarse";
 answers[54] = choices[54][2];
 units[54] = "77";
 comments[54] = "Id Pregunta: 5033. Examen TIC A 2007";


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


//  Id pregunta: 5174 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Los diagramas de estructura resultantes de la aplicaci&oacute;n de la metodolog&iacute;a de Jackson (JSP) se fundamentan en tres estructuras b&aacute;sicas. Indique de las siguientes cu&aacute;l NO es una de las tres estructuras b&aacute;sicas:";
 choices[56]= new Array();
 choices[56][0] = "Exclusi&oacute;n.";
 choices[56][1] = "Secuencia.";
 choices[56][2] = "Repetici&oacute;n.";
 choices[56][3] = "Selecci&oacute;n.";
 answers[56] = choices[56][0];
 units[56] = "83,84";
 comments[56] = "Id Pregunta: 5174. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5176 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l no es, seg&uacute;n Pressman, en el modelo de especificaciones de requisitos software, uno de los objetivos a cumplir?";
 choices[57]= new Array();
 choices[57][0] = "Describir lo que el cliente quiere.";
 choices[57][1] = "Determinar, junto con el cliente, la tecnolog&iacute;a a utilizar";
 choices[57][2] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o de software";
 choices[57][3] = "Definir un conjunto de requisitos que una vez el sistema construido se puedan validar";
 answers[57] = choices[57][1];
 units[57] = "78";
 comments[57] = "Id Pregunta: 5176. ";


//  Id pregunta: 5198 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de la t&eacute;cnica del prototipado?";
 choices[58]= new Array();
 choices[58][0] = "Hace part&iacute;cipes a los usuarios del desarrollo";
 choices[58][1] = "Facilita la continua revisi&oacute;n del sistema por parte de los usuarios";
 choices[58][2] = "Desemboca en sistemas muy flexibles a cambios posteriores";
 choices[58][3] = "En general, reduce el tiempo de los desarrollos posteriores";
 answers[58] = choices[58][2];
 units[58] = "85";
 comments[58] = "Id Pregunta: 5198. ";


//  Id pregunta: 5227 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  El modelo Code and Fix:";
 choices[59]= new Array();
 choices[59][0] = "Modelo b&aacute;sico usado en los primeros tiempos desarrollo de SW compuesto por 2 fases, primero codificar y despu&eacute;s resolver los problemas del c&oacute;digo";
 choices[59][1] = "Tras varios ajustes, el c&oacute;digo se vuelve poco estructurado y los siguientes ajustes son muy costosos.";
 choices[59][2] = "Con frecuencia se ajustaba poco a las necesidades de los usuarios.";
 choices[59][3] = "Todas las anteriores son correctas";
 answers[59] = choices[59][3];
 units[59] = "76";
 comments[59] = "Id Pregunta: 5227. ";


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


//  Id pregunta: 5437 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[61][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[61][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[61][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[61] = choices[61][2];
 units[61] = "77";
 comments[61] = "Id Pregunta: 5437. Castilla y Le&oacute;n";


//  Id pregunta: 5467 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  Cuando analizar&iacute;amos los recursos de la organizaci&oacute;n";
 choices[62]= new Array();
 choices[62][0] = "Cuando ejecutemos un desarrollo, para determinar el costo";
 choices[62][1] = "Al valorar los recursos que se han consumido";
 choices[62][2] = "Para ver la forma de materializar un desarrollo";
 choices[62][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica";
 answers[62] = choices[62][3];
 units[62] = "77";
 comments[62] = "Id Pregunta: 5467. Castilla y Le&oacute;n";


//  Id pregunta: 5477 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Que aspecto debe considerarse a la hora de efectuar una planificaci&oacute;n estrat&eacute;gica";
 choices[63]= new Array();
 choices[63][0] = "La misi&oacute;n del negocio";
 choices[63][1] = "La situaci&oacute;n de los competidores";
 choices[63][2] = "Los hitos en el calendario de actuaci&oacute;n";
 choices[63][3] = "Deben considerarse los aspectos anteriores";
 answers[63] = choices[63][3];
 units[63] = "77";
 comments[63] = "Id Pregunta: 5477. Castilla y Le&oacute;n";


//  Id pregunta: 5487 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo software en espiral, indicar qu&eacute; es lo que representa la dimensi&oacute;n radial";
 choices[64]= new Array();
 choices[64][0] = "El progreso hecho en completar cada ciclo de la espiral";
 choices[64][1] = "Coste acumulativo en el que se ha incurrido en las etapas realizadas hasta el momento actual";
 choices[64][2] = "El an&aacute;lisis de riesgos";
 choices[64][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[64] = choices[64][1];
 units[64] = "76";
 comments[64] = "Id Pregunta: 5487. Castilla y Le&oacute;n";


//  Id pregunta: 6228 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Entre las metodolog&iacute;as &aacute;giles de desarrollo de software no se encuentra:";
 choices[65]= new Array();
 choices[65][0] = "Adaptive Software Development (ASD)";
 choices[65][1] = "Merisse";
 choices[65][2] = "EXtreme Programming (XP)";
 choices[65][3] = "Feature Driven Development (FDD)";
 answers[65] = choices[65][1];
 units[65] = "79";
 comments[65] = "Id Pregunta: 6228. TICB-2009, bloque desarrollo";


//  Id pregunta: 6287 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una tarea de la actividad de Identificaci&oacute;n de Requisitos, en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Estudio de los Procesos del PSI";
 choices[66][1] = "An&aacute;lisis de las Necesidades de la Informaci&oacute;n";
 choices[66][2] = "Catalogaci&oacute;n de Requisitos";
 choices[66][3] = "Todas lo son";
 answers[66] = choices[66][3];
 units[66] = "77";
 comments[66] = "Id Pregunta: 6287. ";


//  Id pregunta: 6289 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Qu&eacute; informaci&oacute;n deber&aacute; describir, al menos, cada requisito en el an&aacute;lisis de un Sistema de Informaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "Una descripci&oacute;n";
 choices[67][1] = "Un nombre Descriptivo del Requisito";
 choices[67][2] = "Un c&oacute;digo &uacute;nico";
 choices[67][3] = "Todas las anteriores";
 answers[67] = choices[67][3];
 units[67] = "78";
 comments[67] = "Id Pregunta: 6289. ";


//  Id pregunta: 6290 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;C&oacute;mo pueden clasificarse los requisitos de un an&aacute;lisis de sistema de informaci&oacute;n seg&uacute;n Sommerville?";
 choices[68]= new Array();
 choices[68][0] = "Requisitos principales y requisitos secundarios";
 choices[68][1] = "Requisitos del cliente y requisitos de la empresa";
 choices[68][2] = "Requisitos a nivel de sistema y requisitos a nivel de software";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = choices[68][2];
 units[68] = "78";
 comments[68] = "Id Pregunta: 6290. ";


//  Id pregunta: 6302 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes no es una propiedad del modelo orientado a objetos?";
 choices[69]= new Array();
 choices[69][0] = "Abstracci&oacute;n";
 choices[69][1] = "Encapsulaci&oacute;n";
 choices[69][2] = "Independencia";
 choices[69][3] = "Modularidad";
 answers[69] = choices[69][2];
 units[69] = "82";
 comments[69] = "Id Pregunta: 6302. ";


//  Id pregunta: 6304 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes no es un componente de CORBA?";
 choices[70]= new Array();
 choices[70][0] = "Dynamic Invocation Interface (DII) ";
 choices[70][1] = "Object Request Broker (ORB) ";
 choices[70][2] = "Dynamic Skeleton Interface (DSI)";
 choices[70][3] = "Todos lo son";
 answers[70] = choices[70][3];
 units[70] = "82";
 comments[70] = "Id Pregunta: 6304. ";


//  Id pregunta: 6306 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;En qu&eacute; consiste el m&eacute;todo SSD (Structured System Design)?";
 choices[71]= new Array();
 choices[71][0] = "Es un m&eacute;todo de programaci&oacute;n orientado a objetos.";
 choices[71][1] = "Es un m&eacute;todo que permite obtener un sistema software a partir de su diagrama de datos.";
 choices[71][2] = "Es un m&eacute;todo de dise&ntilde;o que permite obtener la estructura de un sistema software a partir de un DFD que describa su funcionamiento.";
 choices[71][3] = "Es una tecnolog&iacute;a de objetos distribuidos.";
 answers[71] = choices[71][2];
 units[71] = "83";
 comments[71] = "Id Pregunta: 6306. ";


//  Id pregunta: 6313 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  No es un tipo de cohesi&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Cohesi&oacute;n com&uacute;n.";
 choices[72][1] = "Cohesi&oacute;n funcional.";
 choices[72][2] = "Cohesi&oacute;n comunicacional.";
 choices[72][3] = "Cohesi&oacute;n l&oacute;gica.";
 answers[72] = choices[72][0];
 units[72] = "84";
 comments[72] = "Id Pregunta: 6313. ";


//  Id pregunta: 6316 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes no es un tipo de vista en UML?";
 choices[73]= new Array();
 choices[73][0] = "Vista de Casos de Uso.";
 choices[73][1] = "Vista de Componentes.";
 choices[73][2] = "Vista est&aacute;tica.";
 choices[73][3] = "Vista de concurrencia.";
 answers[73] = choices[73][2];
 units[73] = "84";
 comments[73] = "Id Pregunta: 6316. ";


//  Id pregunta: 8393 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo del Software (PUDS)?";
 choices[74]= new Array();
 choices[74][0] = "Se basa en las Historias de Usuario.";
 choices[74][1] = "Proceso centrado en la arquitectura.";
 choices[74][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[74][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[74] = choices[74][1];
 units[74] = "79";
 comments[74] = "Id Pregunta: 8393. Examen TIC A2 2010";


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


//  Id pregunta: 8631 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En el modelo de ciclo de vida en espiral, &iquest;en qu&eacute; actividad se decide s&iacute; continuamos con las fases siguientes?";
 choices[76]= new Array();
 choices[76][0] = "An&aacute;lisis del riesgo.";
 choices[76][1] = "Evaluaci&oacute;n de la situaci&oacute;n.";
 choices[76][2] = "Desarrollar, verificar y validar (probar).";
 choices[76][3] = "Planificar.";
 answers[76] = choices[76][3];
 units[76] = "76";
 comments[76] = "Id Pregunta: 8631. Examen TIC A2 2010 interna";


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


//  Id pregunta: 9085 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En relaci&oacute;n a la matriz DAFO, se&ntilde;ale la afirmaci&oacute;n CORRECTA.";
 choices[78]= new Array();
 choices[78][0] = "Las fortalezas y las debilidades hacen referencia a aspectos internos de la organizaci&oacute;n";
 choices[78][1] = "Las fortalezas hacen referencia a aspectos externos a la organizaci&oacute;n y las debilidades a aspectos internos";
 choices[78][2] = "Las fortalezas hacen referencia a aspectos internos a la organizaci&oacute;n y las debilidades a aspectos externos";
 choices[78][3] = "Las fortalezas y las debilidades hacen referencia a aspectos externos de la organizaci&oacute;n";
 answers[78] = choices[78][0];
 units[78] = "77";
 comments[78] = "Id Pregunta: 9085. ";


//  Id pregunta: 9442 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[79]= new Array();
 choices[79][0] = "Polimorfismo.";
 choices[79][1] = "Abstracci&oacute;n.";
 choices[79][2] = "Encapsulaci&oacute;n.";
 choices[79][3] = "Persistencia.";
 answers[79] = choices[79][2];
 units[79] = "82";
 comments[79] = "Id Pregunta: 9442. Examen AGE TIC A1 2011";


//  Id pregunta: 9463 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; diagramas de UML 2.0 son los m&aacute;s adecuados para el modelo de interacci&oacute;n de una aplicaci&oacute;n?";
 choices[80]= new Array();
 choices[80][0] = "Comunicaci&oacute;n, despliegue y secuencia.";
 choices[80][1] = "Despliegue, secuencia y casos de uso.";
 choices[80][2] = "Secuencia, comunicaci&oacute;n y tiempos.";
 choices[80][3] = "Actividades, estados y tiempos.";
 answers[80] = choices[80][2];
 units[80] = "84";
 comments[80] = "Id Pregunta: 9463. NULL";


//  Id pregunta: 9465 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  En Orientaci&oacute;n a Objetos, &iquest;qu&eacute; es cierto acerca de la herencia m&uacute;ltiple?:";
 choices[81]= new Array();
 choices[81][0] = "Consiste en que una superclase puede tener varias subclases.";
 choices[81][1] = "Consiste en que una subclase puede tener m&aacute;s de una superclase.";
 choices[81][2] = "Es lo mismo que la herencia repetida.";
 choices[81][3] = "En orientaci&oacute;n a objetos no existe la herencia m&uacute;ltiple.";
 answers[81] = choices[81][1];
 units[81] = "84";
 comments[81] = "Id Pregunta: 9465. NULL";


//  Id pregunta: 9483 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Indique la informaci&oacute;n opcional que se debe registrar de cada requisito";
 choices[82]= new Array();
 choices[82][0] = "C&oacute;digo &uacute;nico";
 choices[82][1] = "Nombre descriptivo";
 choices[82][2] = "Descripci&oacute;n";
 choices[82][3] = "Fecha creaci&oacute;n";
 answers[82] = choices[82][3];
 units[82] = "78";
 comments[82] = "Id Pregunta: 9483. ";


//  Id pregunta: 9491 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[83]= new Array();
 choices[83][0] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[83][1] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual de datos";
 choices[83][2] = "El diagrama de casos de uso es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[83][3] = "El diagrama de flujo de datos es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 answers[83] = choices[83][0];
 units[83] = "78";
 comments[83] = "Id Pregunta: 9491. ";


//  Id pregunta: 9662 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes es una fase de un brainstorming?";
 choices[84]= new Array();
 choices[84][0] = "Preparaci&oacute;n";
 choices[84][1] = "Generaci&oacute;n";
 choices[84][2] = "Consolidaci&oacute;n";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][3];
 units[84] = "78";
 comments[84] = "Id Pregunta: 9662. ";


//  Id pregunta: 9911 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as &aacute;giles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[85]= new Array();
 choices[85][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[85][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[85][2] = "El software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[85][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[85] = choices[85][2];
 units[85] = "79";
 comments[85] = "Id Pregunta: 9911. TIC A2, Examen 2013";


//  Id pregunta: 9913 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  La relaci&oacute;n entre los requisitos, sus fuentes y el dise&ntilde;o del sistema se denomina:";
 choices[86]= new Array();
 choices[86][0] = "Evaluaci&oacute;n de requisitos.";
 choices[86][1] = "Trazabilidad.";
 choices[86][2] = "Integridad de requisitos.";
 choices[86][3] = "Gesti&oacute;n de requisitos.";
 answers[86] = choices[86][1];
 units[86] = "78";
 comments[86] = "Id Pregunta: 9913. TIC A2, Examen 2013";


//  Id pregunta: 9956 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes es una herramienta que ayuda a realizar seguimiento a los requisitos a lo largo del ciclo de vida del proyecto para asegurar que se est&aacute;n cumpliendo de manera eficaz?";
 choices[87]= new Array();
 choices[87][0] = "Cuestionarios";
 choices[87][1] = "Casos de uso.";
 choices[87][2] = "Matriz de trazabilidad de requisitos.";
 choices[87][3] = "Prototipos";
 answers[87] = choices[87][2];
 units[87] = "78";
 comments[87] = "Id Pregunta: 9956. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10088 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En la metodolog&iacute;a SCRUM existen distintos tipo de reuniones. &iquest;Qu&eacute; orden cronol&oacute;gico suelen tener?";
 choices[88]= new Array();
 choices[88][0] = "Daily Scrum, Scrum de Scrum, Sprint Planning Meeting, Sprint Review Meeting y Spring Retrospective.";
 choices[88][1] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Sprint Review Meeting y Spring Retrospective.";
 choices[88][2] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Spring Retrospective y Sprint Review Meeting. ";
 choices[88][3] = "Sprint Planning Meeting, Daily Scrum,  Sprint Review Meeting, Scrum de Scrum y Spring Retrospective.";
 answers[88] = choices[88][1];
 units[88] = "79";
 comments[88] = "Id Pregunta: 10088. NULL";


//  Id pregunta: 10089 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l NO es un producto de la metodolog&iacute;a SCRUM?";
 choices[89]= new Array();
 choices[89][0] = "Product backlog";
 choices[89][1] = "Sprint";
 choices[89][2] = "Burn down chart";
 choices[89][3] = "Sprint backlog";
 answers[89] = choices[89][1];
 units[89] = "79";
 comments[89] = "Id Pregunta: 10089. NULL";


//  Id pregunta: 10101 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En el an&aacute;lisis estructurado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[90]= new Array();
 choices[90][0] = "El Diccionario de Datos suele estar orientado a los desarrolladores.";
 choices[90][1] = "El Diccionario de Datos suele estar orientado a los usuarios.";
 choices[90][2] = "El Directorio de Datos suele estar orientado a los desarrolladores.";
 choices[90][3] = "La b) y la c) son correctas.";
 answers[90] = choices[90][3];
 units[90] = "81";
 comments[90] = "Id Pregunta: 10101. NULL";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Qu&eacute; tipo de flujos de datos no existen?";
 choices[91]= new Array();
 choices[91][0] = "Flujos discretos y continuos";
 choices[91][1] = "Flujos de consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[91][2] = "Flujo de control";
 choices[91][3] = "Existen todos los tipos de flujos anteriores";
 answers[91] = choices[91][3];
 units[91] = "81";
 comments[91] = "Id Pregunta: 10103. NULL";


//  Id pregunta: 10178 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con los diagramas UML&hellip;";
 choices[92]= new Array();
 choices[92][0] = "El diagrama de Comunicaci&oacute;n que introdujo UML2.0, constituye una versi&oacute;n modificada del anterior diagrama de Colaboraci&oacute;n";
 choices[92][1] = "UML tipifica como diagramas de comportamiento los siguientes: diagramas de Actividad, diagramas de Estado, diagramas de Caso de Uso y los diagramas de Interacci&oacute;n.";
 choices[92][2] = "Los denominados diagramas globales de interacci&oacute;n ofrecen una visi&oacute;n de conjunto de las rutas de acceso de ejecuci&oacute;n de toda la aplicaci&oacute;n, utilizando elementos de diagramas de actividades y diagramas de secuencia.";
 choices[92][3] = "Todas las anteriores";
 answers[92] = choices[92][3];
 units[92] = "82";
 comments[92] = "Id Pregunta: 10178. ";


//  Id pregunta: 10179 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  La herencia es el mecanismo de implementaci&oacute;n mediante el cual elementos m&aacute;s espec&iacute;ficos incorporan la estructura y comportamiento de elementos m&aacute;s generales.";
 choices[93]= new Array();
 choices[93][0] = "La herencia es siempre transitiva";
 choices[93][1] = "La herencia repetida es un problema derivado de la herencia m&uacute;ltiple que tiene lugar cuando una clase hereda de dos o m&aacute;s clases un m&eacute;todo con el mismo nombre y diferente implementaci&oacute;n.";
 choices[93][2] = "A trav&eacute;s de la herencia, una clase derivada puede heredar el comportamiento de una clase base, sin sobreescribir la funcionalidad gen&eacute;rica determinada en &eacute;sta.";
 choices[93][3] = "Ninguna de las anteriores";
 answers[93] = choices[93][0];
 units[93] = "82";
 comments[93] = "Id Pregunta: 10179. ";


//  Id pregunta: 10186 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[94]= new Array();
 choices[94][0] = "Externo";
 choices[94][1] = "L&oacute;gico";
 choices[94][2] = "Interno";
 choices[94][3] = "Conceptual";
 answers[94] = choices[94][3];
 units[94] = "57,80";
 comments[94] = "Id Pregunta: 10186. ";


//  Id pregunta: 10640 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique cu&aacute;l de &eacute;stas no es una herramienta BPM:";
 choices[95]= new Array();
 choices[95][0] = "Intalio";
 choices[95][1] = "Scrum";
 choices[95][2] = "Tibco";
 choices[95][3] = "Adonis";
 answers[95] = choices[95][1];
 units[95] = "79";
 comments[95] = "Id Pregunta: 10640. ";


//  Id pregunta: 10814 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[96]= new Array();
 choices[96][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[96][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[96][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[96][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[96] = choices[96][1];
 units[96] = "76, 79";
 comments[96] = "Id Pregunta: 10814. Examen GSI 2014";


//  Id pregunta: 10815 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[97]= new Array();
 choices[97][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[97][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[97][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[97][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[97] = choices[97][2];
 units[97] = "76, 79";
 comments[97] = "Id Pregunta: 10815. Examen GSI 2014";


//  Id pregunta: 10818 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el modelo de proceso Scrum para desarrollo &aacute;gil de sistemas software, &iquest;qu&eacute; es el backlog de producto?";
 choices[98]= new Array();
 choices[98][0] = "La lista detallada de requisitos seleccionados para implementaci&oacute;n en un Sprint.";
 choices[98][1] = "Un gr&aacute;fico que muestra el trabajo pendiente en un Sprint.";
 choices[98][2] = "La lista priorizada de requisitos de alto nivel pendientes de implementaci&oacute;n.";
 choices[98][3] = "La tabla con los requisitos ya implementados.";
 answers[98] = choices[98][2];
 units[98] = "79";
 comments[98] = "Id Pregunta: 10818. Examen GSI 2014";


//  Id pregunta: 11058 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; rol de la metodolog&iacute;a FDD es responsable del dise&ntilde;o global del sistema y de la ejecuci&oacute;n de todas las etapas del dise&ntilde;o?";
 choices[99]= new Array();
 choices[99][0] = "Product Manager";
 choices[99][1] = "Chief architect";
 choices[99][2] = "Chief programmer";
 choices[99][3] = "System administrator";
 answers[99] = choices[99][1];
 units[99] = "79";
 comments[99] = "Id Pregunta: 11058. ";


