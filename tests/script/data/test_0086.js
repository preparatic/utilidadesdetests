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

//  Id pregunta: 127 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El art&iacute;culo 18.4 de la Constituci&oacute;n dice que:";
 choices[0]= new Array();
 choices[0][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos";
 choices[0][1] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[0][2] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros inform&aacute;ticos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[0][3] = "Los tratados internacionales v&aacute;lidamente celebrados, una vez publicados oficialmente en Espa&ntilde;a, formar&aacute;n parte del ordenamiento interno";
 answers[0] = choices[0][0];
 units[0] = "29";
 comments[0] = "Id Pregunta: 127. ";


//  Id pregunta: 142 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El dominio de la informaci&oacute;n se articula en tres grandes partes:";
 choices[1]= new Array();
 choices[1][0] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, estructura de la informaci&oacute;n";
 choices[1][1] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[1][2] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[1][3] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, estructura de la informaci&oacute;n";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 142. NULL";


//  Id pregunta: 143 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El establecimiento de un mecanismo que permita la identificaci&oacute;n de forma inequ&iacute;voca y personalizada de todo aquel usuario que intente acceder al sistema de informaci&oacute;n y la verificaci&oacute;n de que est&aacute; autorizado, es una medida de nivel:";
 choices[2]= new Array();
 choices[2][0] = "B&aacute;sico";
 choices[2][1] = "Medio";
 choices[2][2] = "Alto";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][0];
 units[2] = "29";
 comments[2] = "Id Pregunta: 143. ";


//  Id pregunta: 534 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  Se&ntilde;alar la respuesta correcta respecto a M&eacute;trica V3";
 choices[3]= new Array();
 choices[3][0] = "No propone la utilizaci&oacute;n de MAGERIT como la metodolog&iacute;a de an&aacute;lsis y gesti&oacute;n de riesgos";
 choices[3][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos.";
 choices[3][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de propia metodolog&iacute;a.";
 choices[3][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos.";
 answers[3] = choices[3][2];
 units[3] = "86";
 comments[3] = "Id Pregunta: 534. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 634 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  &iquest;C&oacute;mo se llama el lenguaje de definici&oacute;n de la protecci&oacute;n de derechos en DRM?";
 choices[4]= new Array();
 choices[4][0] = "XrSL (Extensible Rights Specification Language).";
 choices[4][1] = "CPL (Content Protection Language).";
 choices[4][2] = "XrML (Extensible Rights Markup Language XrML)";
 choices[4][3] = "DRML (Digital Rights Management Language).";
 answers[4] = choices[4][2];
 units[4] = "37";
 comments[4] = "Id Pregunta: 634. ";


//  Id pregunta: 635 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Los aspectos b&aacute;sicos a considerar en toda inversi&oacute;n son:";
 choices[5]= new Array();
 choices[5][0] = "La inversi&oacute;n incial y el plazo de la inversi&oacute;n.";
 choices[5][1] = "La inversi&oacute;n inicial, el plazo de la inversi&oacute;n, y el plazo de amortizaci&oacute;n.";
 choices[5][2] = "La inversi&oacute;n inicial, los flujos de caja y los momentos en que tienen lugar, y el plazo de la inversi&oacute;n.";
 choices[5][3] = "Los gastos financieros de la inversi&oacute;n, los flujos de caja, y el punto de amortizaci&oacute;n.";
 answers[5] = choices[5][2];
 units[5] = "38";
 comments[5] = "Id Pregunta: 635. ";


//  Id pregunta: 659 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[6]= new Array();
 choices[6][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos";
 choices[6][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte";
 choices[6][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte";
 choices[6][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos";
 answers[6] = choices[6][2];
 units[6] = "36";
 comments[6] = "Id Pregunta: 659. ";


//  Id pregunta: 709 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Qu&eacute; se necesita para poder aprovechar la tecnolog&iacute;a HyperThreading?";
 choices[7]= new Array();
 choices[7][0] = "Procesador Intel Pentium 4 y Windows 2003";
 choices[7][1] = "Procesador Sun SPARC y Solaris";
 choices[7][2] = "Procesador Intel Core 2 Duo y Linux";
 choices[7][3] = "Procesador Sun SPARC y Windows 2000";
 answers[7] = choices[7][0];
 units[7] = "47";
 comments[7] = "Id Pregunta: 709. Similar a examen TIC SS A 2004";


//  Id pregunta: 740 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  En inteligencia artificial, los marcos";
 choices[8]= new Array();
 choices[8][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[8][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[8][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[8][3] = "Se representan mediante nodos y arcos";
 answers[8] = choices[8][0];
 units[8] = "64";
 comments[8] = "Id Pregunta: 740. Similar a examen TIC SS A 2003";


//  Id pregunta: 805 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  A la aplicaci&oacute;n de t&eacute;cnicas telem&aacute;ticas y tecnolog&iacute;as de redes para aumentar el confort, el control  y la seguridad en el hogar se le denomina:";
 choices[9]= new Array();
 choices[9][0] = "Infordom&oacute;tica.";
 choices[9][1] = "Domotelem&aacute;tica.";
 choices[9][2] = "Dom&oacute;tica.";
 choices[9][3] = "Telem&aacute;tica urban&iacute;stica.";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 805. ";


//  Id pregunta: 888 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[10]= new Array();
 choices[10][0] = "Permite actualizar la informaci&oacute;n de manera r&aacute;pida y f&aacute;cil.";
 choices[10][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[10][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[10][3] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 answers[10] = choices[10][0];
 units[10] = "68";
 comments[10] = "Id Pregunta: 888. ";


//  Id pregunta: 941 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; se entiende por quantum?:";
 choices[11]= new Array();
 choices[11][0] = "El porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[11][1] = "El porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[11][2] = "La cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[11][3] = "El n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio &oacute; para reorganizar el mismo";
 answers[11] = choices[11][2];
 units[11] = "52";
 comments[11] = "Id Pregunta: 941. ";


//  Id pregunta: 1004 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El comando 'kill' en Linux:";
 choices[12]= new Array();
 choices[12][0] = "Se utiliza para eliminar un proceso, siempre que se est&eacute; autorizado";
 choices[12][1] = "Se utiliza para comunicarse con los procesos y enviarles se&ntilde;ales";
 choices[12][2] = "Desconecta a un usuario";
 choices[12][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[12] = choices[12][1];
 units[12] = "53";
 comments[12] = "Id Pregunta: 1004. ";


//  Id pregunta: 1063 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El transistor fue inventado en 1947 por:";
 choices[13]= new Array();
 choices[13][0] = "Shottky y Gunn.";
 choices[13][1] = "E. W. Intel.";
 choices[13][2] = "Bardeen, Brattain, Shockley.";
 choices[13][3] = "Ohm y Watt.";
 answers[13] = choices[13][2];
 units[13] = "";
 comments[13] = "Id Pregunta: 1063. ";


//  Id pregunta: 1067 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Elija la respuesta falsa respecto de OLAP.";
 choices[14]= new Array();
 choices[14][0] = "Implica el uso de t&eacute;cnicas multidimensionales.";
 choices[14][1] = "Realiza el an&aacute;lisis Offline de los datos.";
 choices[14][2] = "Puede utilizar bases de datos relacionales.";
 choices[14][3] = "Puede presentar vistas de los datos en un numero reducido de dimensiones.";
 answers[14] = choices[14][1];
 units[14] = "68";
 comments[14] = "Id Pregunta: 1067. ";


//  Id pregunta: 1129 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En relaci&oacute;n con la gesti&oacute;n de prioridades entre perif&eacute;ricos para acceder a un recurso com&uacute;n,  cu&aacute;l de las siguientes sentencias es correcta?:";
 choices[15]= new Array();
 choices[15][0] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s utilizada cuando los dispositivos est&aacute;n conectados mediante bus al recurso com&uacute;n";
 choices[15][1] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[15][2] = "La gesti&oacute;n de prioridad programada es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[15][3] = "La gesti&oacute;n de prioridad h&iacute;brida emplea simult&aacute;neamente los conceptos de gesti&oacute;n distribuida y programada";
 answers[15] = choices[15][0];
 units[15] = "52";
 comments[15] = "Id Pregunta: 1129. ";


//  Id pregunta: 1134 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En un desplazamiento c&iacute;clico a la izquierda de un bit, el contenido de &quot;100101&quot; se modifica en:";
 choices[16]= new Array();
 choices[16][0] = "&ldquo;110010&rdquo;.";
 choices[16][1] = "&quot;1010&rdquo;.";
 choices[16][2] = "&ldquo;110011&rdquo;.";
 choices[16][3] = "&ldquo;1011&rdquo;.";
 answers[16] = choices[16][3];
 units[16] = "49";
 comments[16] = "Id Pregunta: 1134. ";


//  Id pregunta: 1183 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indicar la respuesta falsa respecto a la representaci&oacute;n del conocimiento:";
 choices[17]= new Array();
 choices[17][0] = "En inteligencia artificial el conocimiento puede representarse mediante marcos";
 choices[17][1] = "En inteligencia artificial el conocimiento puede representarse mediante redes sem&aacute;nticas";
 choices[17][2] = "En inteligencia artificial el conocimiento puede representarse mediante DFDs";
 choices[17][3] = "En inteligencia artificial el conocimiento puede representarse mediante reglas de inferencia";
 answers[17] = choices[17][2];
 units[17] = "64";
 comments[17] = "Id Pregunta: 1183. ";


//  Id pregunta: 1197 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Java ME es:";
 choices[18]= new Array();
 choices[18][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[18][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[18][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[18][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[18] = choices[18][1];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1197. NULL";


//  Id pregunta: 1220 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La estructura secuencial encadenada:";
 choices[19]= new Array();
 choices[19][0] = "Es una estructura de f&aacute;cil gesti&oacute;n";
 choices[19][1] = "La inserciones de datos se autogestionan sin variar la estructura l&oacute;gica inicial";
 choices[19][2] = "Es el elemento precursor de la estructura relacional de las bases de datos";
 choices[19][3] = "La idea de apuntadores ha sido utilizada en los sistemas jer&aacute;rquicos y en red";
 answers[19] = choices[19][3];
 units[19] = "57";
 comments[19] = "Id Pregunta: 1220. ";


//  Id pregunta: 1279 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los procedimientos b&aacute;sicos para realizar una transferencia elemental entre la UCP y un perif&eacute;rico son:";
 choices[20]= new Array();
 choices[20][0] = "E/S programada, acceso directo a memoria y canal de E/S";
 choices[20][1] = "E/S programada, interrupciones y acceso directo a memoria";
 choices[20][2] = "Memoria multipuerta y robo de ciclo";
 choices[20][3] = "Canal selector para perif&eacute;ricos r&aacute;pidos y canal multiplexor para perif&eacute;ricos lentos";
 answers[20] = choices[20][1];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1279. ";


//  Id pregunta: 1310 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Por clave ajena se entiende:";
 choices[21]= new Array();
 choices[21][0] = "Un conjunto no vacio de atributos de una relaci&oacute;n";
 choices[21][1] = "Un atributo no principal de una relaci&oacute;n que no tiene valor nulo";
 choices[21][2] = "Un descriptor de una relaci&oacute;n, cuyos valores coinciden con los valores de la clave primaria de otra relaci&oacute;n";
 choices[21][3] = "Es el atributo de una relaci&oacute;n que garantiza la integridad de la entidad";
 answers[21] = choices[21][2];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1310. ";


//  Id pregunta: 1383 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Un servicio de directorio:";
 choices[22]= new Array();
 choices[22][0] = "Es una base de datos, orientada a consulta, con replicaci&oacute;n, y estructura jer&aacute;rquica";
 choices[22][1] = "Puede ser utilizado como un repositorio para guardar la informaci&oacute;n de los usuarios";
 choices[22][2] = "Puede ser utilizado como medio de autenticaci&oacute;n en sistemas heterogeneos";
 choices[22][3] = "Todas las respuestas anteriores son ciertas";
 answers[22] = choices[22][3];
 units[22] = "106";
 comments[22] = "Id Pregunta: 1383. ";


//  Id pregunta: 1507 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Para una corporaci&oacute;n bancaria con un potente mainframe el principal cuello de botella suele ser:";
 choices[23]= new Array();
 choices[23][0] = "Los canales de comunicaciones";
 choices[23][1] = "La memoria del sistema central";
 choices[23][2] = "La velocidad de acceso a los datos";
 choices[23][3] = "La velocidad de los operadores humanos que introducen la informaci&oacute;n";
 answers[23] = choices[23][2];
 units[23] = "46";
 comments[23] = "Id Pregunta: 1507. ";


//  Id pregunta: 1547 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;C&oacute;mo se crea un &iacute;ndice para una tabla?";
 choices[24]= new Array();
 choices[24][0] = "Se crea siempre en la misma sentencia en que se crea la tabla.";
 choices[24][1] = "Se crea siempre autom&aacute;ticamente sobre la clave primaria al crear la tabla.";
 choices[24][2] = "Con CREATE INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 choices[24][3] = "Con INSERT INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 answers[24] = choices[24][2];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1547. NULL";


//  Id pregunta: 1573 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;En qu&eacute; consiste el concepto de &quot;web sem&aacute;ntica&quot;?";
 choices[25]= new Array();
 choices[25][0] = "Se trata de un sistema de gesti&oacute;n de contenidos que permite buscar &aacute;gilmente el significado de todo tipo de t&eacute;rminos";
 choices[25][1] = "Se trata de que las p&aacute;ginas web puedan, no s&oacute;lo presentar informaci&oacute;n, sino &quot;entenderla&quot;";
 choices[25][2] = "Es un medio de documentos para personas";
 choices[25][3] = "Todas las anteriores son definiciones correctas";
 answers[25] = choices[25][1];
 units[25] = "64";
 comments[25] = "Id Pregunta: 1573. ";


//  Id pregunta: 1875 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[26]= new Array();
 choices[26][0] = "Por la comisi&oacute;n de infracciones muy graves, se impondr&aacute; al infractor multa de 150.001 a 600.000 euros";
 choices[26][1] = "Por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros";
 choices[26][2] = "Por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][3];
 units[26] = "30";
 comments[26] = "Id Pregunta: 1875. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 2079 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  En el mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[27]= new Array();
 choices[27][0] = "Estad&iacute;stica e Inventario de Cambios";
 choices[27][1] = "Registro de cambios";
 choices[27][2] = "Registro de petici&oacute;n";
 choices[27][3] = "Cat&aacute;logo de peticiones";
 answers[27] = choices[27][2];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2079. Pregunta Junta Andalucia - A";


//  Id pregunta: 2432 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[28]= new Array();
 choices[28][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[28][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[28][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[28][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[28] = choices[28][1];
 units[28] = "82,84";
 comments[28] = "Id Pregunta: 2432. ";


//  Id pregunta: 2479 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Por sistema de garant&iacute;a de calidad se entiende:";
 choices[29]= new Array();
 choices[29][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[29][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[29][2] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 choices[29][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior";
 answers[29] = choices[29][2];
 units[29] = "87";
 comments[29] = "Id Pregunta: 2479. NULL";


//  Id pregunta: 2498 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Se&ntilde;ale el tipo de prueba que es de caja negra:";
 choices[30]= new Array();
 choices[30][0] = "Prueba de bucles";
 choices[30][1] = "Prueba basada en grafos";
 choices[30][2] = "Prueba del camino b&aacute;sico";
 choices[30][3] = "Prueba de condici&oacute;n";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2498. NULL";


//  Id pregunta: 2555 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  &iquest;Cu&aacute;ntos niveles tiene el CMMi?:";
 choices[31]= new Array();
 choices[31][0] = "3";
 choices[31][1] = "4";
 choices[31][2] = "5";
 choices[31][3] = "6";
 answers[31] = choices[31][2];
 units[31] = "27";
 comments[31] = "Id Pregunta: 2555. NULL";


//  Id pregunta: 2595 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  La eliminaci&oacute;n del efecto onda que provocan los cambios introducidos por una petici&oacute;n de mantenimiento de un sistema de informaci&oacute;n se consigne:";
 choices[32]= new Array();
 choices[32][0] = "Con la definici&oacute;n de los puntos de control adecuados en el plan de mantenimiento de sistemas de informaci&oacute;n.";
 choices[32][1] = "A trav&eacute;s de las pruebas de regresi&oacute;n.";
 choices[32][2] = "Con el seguimiento de las referencias cruzadas de los elementos afectados por los cambios.";
 choices[32][3] = "Con la planificaci&oacute;n detallada del desarrollo de los cambios.";
 answers[32] = choices[32][1];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2595. Junta Andaluc&iacute;a";


//  Id pregunta: 2772 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;En cu&aacute;l de los siguientes tipos se garantiza un mayor nivel de cohesi&oacute;n de un m&oacute;dulo de software?";
 choices[33]= new Array();
 choices[33][0] = "Cohesi&oacute;n de comunicaci&oacute;n.";
 choices[33][1] = "Cohesi&oacute;n temporal.";
 choices[33][2] = "Cohesi&oacute;n l&oacute;gica.";
 choices[33][3] = "Cohesi&oacute;n procedimental.";
 answers[33] = choices[33][0];
 units[33] = "84";
 comments[33] = "Id Pregunta: 2772. ";


//  Id pregunta: 2949 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  ActiveX s&oacute;lo puede ejecutarse en:";
 choices[34]= new Array();
 choices[34][0] = "Java";
 choices[34][1] = "UNIX";
 choices[34][2] = "Microsoft/Intel";
 choices[34][3] = "Virtual Machine";
 answers[34] = choices[34][2];
 units[34] = "114";
 comments[34] = "Id Pregunta: 2949. Similar a examen TIC SS A 2003";


//  Id pregunta: 2997 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al protocolo IPv6?";
 choices[35]= new Array();
 choices[35][0] = "Maneja direcciones de 16 bytes";
 choices[35][1] = "La cabecera del protocolo se ha ampliado respecto a la de IPv4";
 choices[35][2] = "Incluye funciones de autenticaci&oacute;n";
 choices[35][3] = "Incluye funciones de encriptaciones";
 answers[35] = choices[35][1];
 units[35] = "100";
 comments[35] = "Id Pregunta: 2997. Aunque la cabecera IPv6 tiene mayor tama&ntilde;o, los campos menos utilizados de IP v4 se han movido a OPCIONES";


//  Id pregunta: 3120 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  &iquest;C&oacute;mo se comunican una sonda RMON y un agente RMON?:";
 choices[36]= new Array();
 choices[36][0] = "Mediante mensajes SNMP";
 choices[36][1] = "Mediante mensajes LAP-B";
 choices[36][2] = "Mediante mensajes CMIP";
 choices[36][3] = "Mediante Data Streams";
 answers[36] = choices[36][0];
 units[36] = "104";
 comments[36] = "Id Pregunta: 3120. ";


//  Id pregunta: 3169 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes es un m&eacute;todo de modulaci&oacute;n &oacute;ptica?:";
 choices[37]= new Array();
 choices[37][0] = "Modulaci&oacute;n directa";
 choices[37][1] = "Modulaci&oacute;n indirecta";
 choices[37][2] = "Modulaci&oacute;n de fase";
 choices[37][3] = "Modulaci&oacute;n interna";
 answers[37] = choices[37][0];
 units[37] = "97";
 comments[37] = "Id Pregunta: 3169. NULL";


//  Id pregunta: 3249 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  &iquest;Cu&aacute;les de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos puentes (bridges)?:";
 choices[38]= new Array();
 choices[38][0] = "Analizan la direcci&oacute;n destino del MAC (nivel 2 de OSI), pudiendo efectuar funciones de aprendizaje, filtrado y reenv&iacute;o";
 choices[38][1] = "Pueden interconectar redes tipo 802 que usan niveles 1 y 2 de OSI diferentes, pero no son transparentes a los protocolos de niveles superiores";
 choices[38][2] = "Su rendimiento (medido en paquetes/segundo) es menor que el de los equipos encaminadores (routers)";
 choices[38][3] = "Operan a nivel 3 de OSI, por lo que realizan funciones de filtrado, aislando el tr&aacute;fico de los segmentos conectados";
 answers[38] = choices[38][0];
 units[38] = "102";
 comments[38] = "Id Pregunta: 3249. ";


//  Id pregunta: 3255 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  &iquest;Cu&aacute;ntos bytes ocupa la cabecera m&iacute;nima en IPv4?";
 choices[39]= new Array();
 choices[39][0] = "16";
 choices[39][1] = "20";
 choices[39][2] = "24";
 choices[39][3] = "32";
 answers[39] = choices[39][1];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3255. ";


//  Id pregunta: 3356 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  De los cuatro octetos que forman una direcci&oacute;n del protocolo IP indicar en qu&eacute; clase de red se utiliza un octeto para los n&uacute;meros de host:";
 choices[40]= new Array();
 choices[40][0] = "Clase B";
 choices[40][1] = "Clase D";
 choices[40][2] = "Clase A";
 choices[40][3] = "Clase C";
 answers[40] = choices[40][3];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3356. NULL";


//  Id pregunta: 3387 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  El m&oacute;dulo de transferencia s&iacute;ncrono (STM) principal de SDH  se transmite a una velocidad de:";
 choices[41]= new Array();
 choices[41][0] = "51.84 Mbps";
 choices[41][1] = "1984 kbps";
 choices[41][2] = "100 Mbps";
 choices[41][3] = "155.52 Mbps";
 answers[41] = choices[41][3];
 units[41] = "108";
 comments[41] = "Id Pregunta: 3387. ";


//  Id pregunta: 3434 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Indique cu&aacute;l de las siguientes informaciones sobre la interconexi&oacute;n de redes locales desde el punto de vista del hardware es correcta:";
 choices[42]= new Array();
 choices[42][0] = "Las funciones del Enrutador consiste en compatibilizar dos medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[42][1] = "Los Repetidores operan posibilitando la conexi&oacute;n de elementos de red a nivel de enlace dentro del subnivel MAC (Medium Access Control)";
 choices[42][2] = "El Puente compatibiliza elementos de dos redes locales a nivel de red";
 choices[42][3] = "Las Pasarelas operan a nivel de transporte o en niveles superiores";
 answers[42] = choices[42][3];
 units[42] = "102";
 comments[42] = "Id Pregunta: 3434. ";


//  Id pregunta: 3449 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  El protocolo en que est&aacute;n basados los niveles inferiores del modelo OSI de la ISO es:";
 choices[43]= new Array();
 choices[43][0] = "SDLC";
 choices[43][1] = "EBCDIC";
 choices[43][2] = "HDLC";
 choices[43][3] = "X.400";
 answers[43] = choices[43][2];
 units[43] = "100";
 comments[43] = "Id Pregunta: 3449. NULL";


//  Id pregunta: 3476 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  El tiempo m&aacute;ximo de paso de datos de una estaci&oacute;n en una red Ethernet a 100 Mbits es:";
 choices[44]= new Array();
 choices[44][0] = "Igual al tiempo que tarda en propagarse un mensaje con longitud m&aacute;xima multiplicado por el n&uacute;mero de nodos en ese tramo";
 choices[44][1] = "No hay tiempo m&aacute;ximo";
 choices[44][2] = "Depende fundamentalmente de si el soporte es de cobre o de fibra &oacute;ptica";
 choices[44][3] = "No existe tiempo m&aacute;ximo ya que es inmediato, pues que el acceso al medio del mensaje lo hace en cuanto escucha que no hay tr&aacute;fico en la red";
 answers[44] = choices[44][1];
 units[44] = "101";
 comments[44] = "Id Pregunta: 3476. ";


//  Id pregunta: 3545 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  En notaci&oacute;n Kendall A/B/X/Y/Z: ";
 choices[45]= new Array();
 choices[45][0] = "X especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[45][1] = "Y especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[45][2] = "Z especifica la disciplina de cola.";
 choices[45][3] = "La notaci&oacute;n empleada en teor&iacute;a de tr&aacute;fico se debe a Erlang y no a Kendall.";
 answers[45] = choices[45][2];
 units[45] = "";
 comments[45] = "Id Pregunta: 3545. Kendall T&ordm; Colas";


//  Id pregunta: 3813 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  Se&ntilde;alar qu&eacute; afirmaci&oacute;n no es correcta. En una red de conmutaci&oacute;n de paquetes para evitar la congesti&oacute;n se puede:";
 choices[46]= new Array();
 choices[46][0] = "Reservar espacio suficiente de almacenamiento en los nodos";
 choices[46][1] = "Descartar paquetes";
 choices[46][2] = "En una red de conmutaci&oacute;n de paquetes no hay congesti&oacute;n";
 choices[46][3] = "Enviar paquetes de contenci&oacute;n";
 answers[46] = choices[46][2];
 units[46] = "101";
 comments[46] = "Id Pregunta: 3813. ";


//  Id pregunta: 3895 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  En un sistema de cableado estructurado IEEE 802.3 en UTP, la distancia m&aacute;xima horizontal ser&aacute; de 90 metros desde la terminaci&oacute;n mec&aacute;nica del armario repartidor de planta hasta la roseta, permiti&eacute;ndose desde &eacute;sta, hasta la estaci&oacute;n de trabajo o tel&eacute;fono";
 choices[47]= new Array();
 choices[47][0] = "1,5 metros m&aacute;s.";
 choices[47][1] = "3 metros m&aacute;s.";
 choices[47][2] = "4,5 metros m&aacute;s.";
 choices[47][3] = "Una distancia tal que la longitud total de este &uacute;ltimo latiguillo y la del armario repartidor, no supere los 10 metros.";
 answers[47] = choices[47][3];
 units[47] = "99";
 comments[47] = "Id Pregunta: 3895. Junta Andaluc&iacute;a";


//  Id pregunta: 3988 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Sobre FDDI:";
 choices[48]= new Array();
 choices[48][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[48][1] = "Se conoce como X3T9.3";
 choices[48][2] = "Su equivalente en cobre es CDDI";
 choices[48][3] = "Todas son verdaderas";
 answers[48] = choices[48][2];
 units[48] = "101";
 comments[48] = "Id Pregunta: 3988. ";


//  Id pregunta: 4355 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  La raz&oacute;n por la que en las comunicaciones WiFi se utilizan t&eacute;cnicas de expansi&oacute;n del espectro es:";
 choices[49]= new Array();
 choices[49][0] = "Para poder incrementar la longitud de onda.";
 choices[49][1] = "Para reducir los problemas de propagaci&oacute;n de la se&ntilde;al.";
 choices[49][2] = "Por razones de seguridad.";
 choices[49][3] = "WiFi no utiliza expansi&oacute;n del espectro.";
 answers[49] = choices[49][1];
 units[49] = "107";
 comments[49] = "Id Pregunta: 4355. NULL";


//  Id pregunta: 4362 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un operador en el an&aacute;lisis de los almacenes de datos multidimensionales?";
 choices[50]= new Array();
 choices[50][0] = "Duck.";
 choices[50][1] = "Drill.";
 choices[50][2] = "Roll.";
 choices[50][3] = "Slice &amp; dice.";
 answers[50] = choices[50][0];
 units[50] = "68";
 comments[50] = "Id Pregunta: 4362. ";


//  Id pregunta: 4437 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Qu&eacute; se entiende por Indoor PLC?:";
 choices[51]= new Array();
 choices[51][0] = "MODEM que recoge la se&ntilde;al de la red el&eacute;ctrica a trav&eacute;s del enchufe.";
 choices[51][1] = "Vertiente de la tecnolog&iacute;a PLC que convierte la l&iacute;nea el&eacute;ctrica en una LAN.";
 choices[51][2] = "Equipo que conecta la red el&eacute;ctrica con la red de comunicaciones.";
 choices[51][3] = "Conjunto formado por el MODEM y el equipo terminal de datos que existen en la vivienda el usuario.";
 answers[51] = choices[51][1];
 units[51] = "107";
 comments[51] = "Id Pregunta: 4437. NULL";


//  Id pregunta: 4487 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  En un sistema de gesti&oacute;n de red, Ia base de datos MIB (Management Information Base):";
 choices[52]= new Array();
 choices[52][0] = "Identifica el elemento de administraci&oacute;n central de Ia red.";
 choices[52][1] = "Especifica los elementos y Ia parte de los datos que un nodo debe conservar, asi Como las operaciones que se permiten sobre cada uno de ellos";
 choices[52][2] = "Establece Ia conexi&oacute;n entre el nodo administrado y la estaci&oacute;n administradora central.";
 choices[52][3] = "Es una Unidad de Datos del Protocolo (6 PDU) de gesti&oacute;n de red.";
 answers[52] = choices[52][1];
 units[52] = "104";
 comments[52] = "Id Pregunta: 4487. ";


//  Id pregunta: 4492 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Entre otras funciones, sa Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de:";
 choices[53]= new Array();
 choices[53][0] = "La gesti&oacute;n de nombres de dominios de Internet.";
 choices[53][1] = "Arbitrar en los conflictos que puedan surgir entre operadores del sector de Ia comunicaci&oacute;n electr&oacute;nica cuando los interesados lo acuerden.";
 choices[53][2] = "Elaborar el Cuadro Nacional de Atribuci&oacute;n de Frecuencias.";
 choices[53][3] = "Elaboraci&oacute;n de proyectos y desarrollo de los Planes Nacionales de Radiodifusi&oacute;n y Televisi&oacute;n.";
 answers[53] = choices[53][1];
 units[53] = "110";
 comments[53] = "Id Pregunta: 4492. ";


//  Id pregunta: 4546 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  La capa de adaptaci&oacute;n de ATM (AAL o ATM Adaptation Layer) com&uacute;nmente utilizada para la transmisi&oacute;n de datagramas IP sobre redes ATM es:";
 choices[54]= new Array();
 choices[54][0] = "AAL 5.";
 choices[54][1] = "AAL 1.";
 choices[54][2] = "AAL 3/4.";
 choices[54][3] = "AAL 2.";
 answers[54] = choices[54][0];
 units[54] = "109";
 comments[54] = "Id Pregunta: 4546. ";


//  Id pregunta: 5138 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones sobre el m&eacute;todo de planificaci&oacute;n PERT (Program Evaluation and Review Technique) es FALSA:";
 choices[55]= new Array();
 choices[55][0] = "El m&eacute;todo PERT parte de la descomposici&oacute;n del proyecto en una serie de obras parciales o actividades.";
 choices[55][1] = "Para representar las diferentes actividades en que se descompone un proyecto, as&iacute; como sus correspondientes sucesos, se utiliza una estructura de grafo. Los arcos del grafo representan las actividades y los v&eacute;rtices los sucesos.";
 choices[55][2] = "Es la forma habitual de presentar el plan de ejecuci&oacute;n de un proyecto, recogiendo en las filas la relaci&oacute;n de actividades a realizar y en las columnas la escala de tiempos que se est&aacute; manejando.";
 choices[55][3] = "Un suceso es un acontecimiento, un punto en el tiempo, una fecha en el calendario. El suceso no consume recursos, s&oacute;lo indica el principio o el fin de una actividad o de un conjunto de actividades.";
 answers[55] = choices[55][2];
 units[55] = "77";
 comments[55] = "Id Pregunta: 5138. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5181 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes opciones no es una metodolog&iacute;a estructurada orientada a procesos?";
 choices[56]= new Array();
 choices[56][0] = "DeMarco";
 choices[56][1] = "Gane &amp; Sarson";
 choices[56][2] = "Yourdon / Constantine";
 choices[56][3] = "Warnier-Orr";
 answers[56] = choices[56][3];
 units[56] = "79";
 comments[56] = "Id Pregunta: 5181. ";


//  Id pregunta: 5565 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as permiten la transmisi&oacute;n de datos sobre una infraestructura de fibra &oacute;ptica para una red de &aacute;rea metropolitana?";
 choices[57]= new Array();
 choices[57][0] = "DQDB";
 choices[57][1] = "CDDI";
 choices[57][2] = "HIPPI";
 choices[57][3] = "PDDI";
 answers[57] = choices[57][0];
 units[57] = "101";
 comments[57] = "Id Pregunta: 5565. ";


//  Id pregunta: 5842 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[58]= new Array();
 choices[58][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[58][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[58][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[58][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[58] = choices[58][2];
 units[58] = "30";
 comments[58] = "Id Pregunta: 5842. MAP 2008 A1";


//  Id pregunta: 5879 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  Indique quien NO es miembro del Pleno del Consejo Superior de Administraci&oacute;n Electr&oacute;nica:";
 choices[59]= new Array();
 choices[59][0] = "El Presidente del Instituto Nacional de Estad&iacute;stica";
 choices[59][1] = "El Subdirector General del Centro Criptol&oacute;gico Nacional";
 choices[59][2] = "El Interventor General de la Administraci&oacute;n del Estado";
 choices[59][3] = "El Director General de la F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda";
 answers[59] = choices[59][1];
 units[59] = "30";
 comments[59] = "Id Pregunta: 5879. MAP 2008 A1";


//  Id pregunta: 6045 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En relaci&oacute;n con el Single Sign On";
 choices[60]= new Array();
 choices[60][0] = "Los sistemas Web Single Sign On utilizan 'cookies' para reconocer a los usuarios y su estado de autenticaci&oacute;n";
 choices[60][1] = "Los usuarios de los sistemas SSO mediante Kerberos reciben un 'ticket' al registrarse que luego se presenta en las aplicaciones cliente";
 choices[60][2] = "Las dos respuestas anteriores son correctas";
 choices[60][3] = "Todas las respuestas anteriores son incorrectas";
 answers[60] = choices[60][2];
 units[60] = "118";
 comments[60] = "Id Pregunta: 6045. ";


//  Id pregunta: 6216 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un tipo de ramas o m&oacute;dulos subordinados del an&aacute;lisis de transformaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "Aferentes";
 choices[61][1] = "de Transformaci&oacute;n";
 choices[61][2] = "Diferentes";
 choices[61][3] = "Eferentes";
 answers[61] = choices[61][2];
 units[61] = "81";
 comments[61] = "Id Pregunta: 6216. TICB-2009, bloque desarrollo";


//  Id pregunta: 6271 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Qu&eacute; estandar define el ciclo de vida de un sistema de informac&oacute;n como el marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotaci&oacute;n y el mantenimiento de un producto de software, abarcando la vida del sistema desde la definici&oacute;n de los requisitos hasta la finalizaci&oacute;n de su uso.";
 choices[62]= new Array();
 choices[62][0] = "ISO-12207";
 choices[62][1] = "ISO-9800";
 choices[62][2] = "ISO-17702";
 choices[62][3] = "ISO-11200";
 answers[62] = choices[62][0];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6271. ";


//  Id pregunta: 6346 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes definiciones describe lo que es Mashup?";
 choices[63]= new Array();
 choices[63][0] = "Aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes para crear un servicio en base a ellas.";
 choices[63][1] = "T&eacute;cnica de desarrollo web que permite modificar la informaci&oacute;n de una p&aacute;gina web, sin tener que recargarla totalmente, agilizando la interacci&oacute;n con el usuario.";
 choices[63][2] = "Conjunto de especificaciones que posibilitan la comunicaci&oacute;n y provisi&oacute;n de servicios entre diferentes aplicaciones v&iacute;a web.";
 choices[63][3] = "Ninguna de las anteriores.";
 answers[63] = choices[63][0];
 units[63] = "120";
 comments[63] = "Id Pregunta: 6346. NULL";


//  Id pregunta: 6403 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[64]= new Array();
 choices[64][0] = "15 d&iacute;as";
 choices[64][1] = "1 mes";
 choices[64][2] = "2 meses";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = choices[64][3];
 units[64] = "30";
 comments[64] = "Id Pregunta: 6403. Ley 34/2002, art&iacute;culo 6";


//  Id pregunta: 6404 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Cuando un trabajador asalariado cree un programa de ordenador, en el ejercicio de las funciones que le han sido confiadas o siguiendo las instrucciones de su empresario, &iquest;a qui&eacute;n corresponde la titularidad de los derechos de explotaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Al empresario, salvo pacto en contrario";
 choices[65][1] = "Al trabajador, en todo caso";
 choices[65][2] = "Al empresario, en todo caso";
 choices[65][3] = "Al trabajador, salvo pacto en contrario";
 answers[65] = choices[65][0];
 units[65] = "36";
 comments[65] = "Id Pregunta: 6404. Art&iacute;culo 97 RDL 1/1996";


//  Id pregunta: 6434 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[66]= new Array();
 choices[66][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[66][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[66][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[66][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[66] = choices[66][1];
 units[66] = "80";
 comments[66] = "Id Pregunta: 6434. NULL";


//  Id pregunta: 6442 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Seg&uacute;n la normativa en materia de normalizaci&oacute;n en el campo de las tecnolog&iacute;as de la informaci&oacute;n y las telecomunicaciones, se obliga a usar normas europeas e Internacionales en la Adquisici&oacute;n de Bienes y Servicios TIC, y NO es una excepci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Continuidad de funcionamiento";
 choices[67][1] = "Naturaleza innovadora de algunos proyectos";
 choices[67][2] = "Soluci&oacute;n de coste excesivo. Cuando tras un estudio de mercado, existan razones relacionadas con la efectividad del coste que hacen inadecuada el uso de la norma.";
 choices[67][3] = "Compras menores o iguales a 100.000 euros.";
 answers[67] = choices[67][3];
 units[67] = "41";
 comments[67] = "Id Pregunta: 6442. Castilla La Mancha 2009";


//  Id pregunta: 6502 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Es una licencia compatible con GPL:";
 choices[68]= new Array();
 choices[68][0] = "NPL";
 choices[68][1] = "MPL";
 choices[68][2] = "BSD Original";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = choices[68][3];
 units[68] = "61";
 comments[68] = "Id Pregunta: 6502. ";


//  Id pregunta: 6560 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[69]= new Array();
 choices[69][0] = "Tecnolog&iacute;a HSDPA";
 choices[69][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[69][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[69][3] = "Todas las respuestas anteriores son correctas";
 answers[69] = choices[69][3];
 units[69] = "108";
 comments[69] = "Id Pregunta: 6560. NULL";


//  Id pregunta: 7996 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[70]= new Array();
 choices[70][0] = " De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet.";
 choices[70][1] = " Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet.";
 choices[70][2] = " Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree).";
 choices[70][3] = " De la especificaci&oacute;n 1000Base-T.";
 answers[70] = choices[70][1];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7996. Map 2007";


//  Id pregunta: 8376 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una herramienta de benchmarking de aplicaciones web: ";
 choices[71]= new Array();
 choices[71][0] = "JMeter.";
 choices[71][1] = "OpenSTA.";
 choices[71][2] = "ApacheBench.";
 choices[71][3] = "Junit.";
 answers[71] = choices[71][3];
 units[71] = "112";
 comments[71] = "Id Pregunta: 8376. Examen TIC A2 2010";


//  Id pregunta: 8461 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de estos NO es un est&aacute;ndar del W3C para Web Services?:";
 choices[72]= new Array();
 choices[72][0] = "UDDI";
 choices[72][1] = "SOAP";
 choices[72][2] = "WSDL";
 choices[72][3] = "XML";
 answers[72] = choices[72][0];
 units[72] = "51";
 comments[72] = "Id Pregunta: 8461. Analista Ayto. Madrid 2010";


//  Id pregunta: 8597 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO usa JAVA como lenguaje?";
 choices[73]= new Array();
 choices[73][0] = "JavaScript";
 choices[73][1] = "JavaBeans";
 choices[73][2] = "Servlets";
 choices[73][3] = "JSP";
 answers[73] = choices[73][0];
 units[73] = "116";
 comments[73] = "Id Pregunta: 8597. Examen TIC A2 2010 interna";


//  Id pregunta: 8673 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El protocolo OCSP, se utiliza en:";
 choices[74]= new Array();
 choices[74][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[74][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[74][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[74][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[74] = choices[74][0];
 units[74] = "74";
 comments[74] = "Id Pregunta: 8673. Examen UPM A2 2011";


//  Id pregunta: 8680 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  a) A que componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;:";
 choices[75]= new Array();
 choices[75][0] = "Proxy Server.";
 choices[75][1] = "Account Server.";
 choices[75][2] = "Redirect Server.";
 choices[75][3] = "Registrar Server.";
 answers[75] = choices[75][3];
 units[75] = "109";
 comments[75] = "Id Pregunta: 8680. Examen UPM A2 2011";


//  Id pregunta: 8751 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  El Real Decreto 3/2010, de 8 de enero, regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica. En el mismo, la seguridad se entender&aacute; como:";
 choices[76]= new Array();
 choices[76][0] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, contemplando exclusivamente elementos t&eacute;cnicos";
 choices[76][1] = "Un proceso integral te&oacute;rico que comprende &uacute;nicamente tas medidas de prevenci&oacute;n y detecci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de correcci&oacute;n, a implantar particularmente en cada caso.";
 choices[76][2] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, que comprende &uacute;nicamente las medidas concretas de detecci&oacute;n y correcci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de prevenci&oacute;n, como propias de cada caso particular";
 choices[76][3] = "Un proceso integral constituido por elementos t&eacute;cnicos, humanos, materiales y organizativos";
 answers[76] = choices[76][3];
 units[76] = "43";
 comments[76] = "Id Pregunta: 8751. Examen TIC A2 2010 interna";


//  Id pregunta: 8818 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[77]= new Array();
 choices[77][0] = "Para dar confianza";
 choices[77][1] = "Para asegurar que el software funciona";
 choices[77][2] = "Para evaluar el proceso de desarrollo de software";
 choices[77][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[77] = choices[77][3];
 units[77] = "87, 92";
 comments[77] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 8864 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[78]= new Array();
 choices[78][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros";
 choices[78][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee";
 choices[78][2] = "Se puede modelar datos a cualquier nivel de complejidad";
 choices[78][3] = "El uso de los ficheros se puede extender a cualquier plataforma";
 answers[78] = choices[78][1];
 units[78] = "69";
 comments[78] = "Id Pregunta: 8864. Analista Ayto. Madrid 2010";


//  Id pregunta: 9071 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[79]= new Array();
 choices[79][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines. ";
 choices[79][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos. ";
 choices[79][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0. ";
 choices[79][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications. ";
 answers[79] = choices[79][1];
 units[79] = "39";
 comments[79] = "Id Pregunta: 9071. ";


//  Id pregunta: 9083 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[80]= new Array();
 choices[80][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[80][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[80][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[80][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[80] = choices[80][3];
 units[80] = "77";
 comments[80] = "Id Pregunta: 9083. ";


//  Id pregunta: 9323 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Se&ntilde;ale la verdadera";
 choices[81]= new Array();
 choices[81][0] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es bajo se refleja en el informe como posible debilidad del sistema de control";
 choices[81][1] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es medio se describe dicho hallazgo como una vulnerabilidad a la que se expone el sistema";
 choices[81][2] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es bajo se describe dicho hallazgo como una vulnerabilidad a la que se expone el sistema";
 choices[81][3] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es medio se identifica como una debilidad que debe compensarse o anularse con m&aacute;s controles, o haciendo los existentes m&aacute;s estrictos";
 answers[81] = choices[81][2];
 units[81] = "31";
 comments[81] = "Id Pregunta: 9323. ";


//  Id pregunta: 9458 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En la t&eacute;cnica de Diagramas de Flujo de Datos:";
 choices[82]= new Array();
 choices[82][0] = "Las entidades externas pueden tener relaciones entre s&iacute;.";
 choices[82][1] = "Las entidades externas pueden enviar datos a los almacenes.";
 choices[82][2] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es as&iacute;ncrona.";
 choices[82][3] = "En el diagrama de conexto s&oacute;lo aparece un proceso.";
 answers[82] = choices[82][3];
 units[82] = "81";
 comments[82] = "Id Pregunta: 9458. ";


//  Id pregunta: 9493 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  El cliente web:";
 choices[83]= new Array();
 choices[83][0] = "Puede realizar peticiones HTTP al servidor web";
 choices[83][1] = "Dispone de un int&eacute;rprete de scripting";
 choices[83][2] = "Puede tener plugins instalados";
 choices[83][3] = "Todas las anteriores son ciertas";
 answers[83] = choices[83][3];
 units[83] = "114";
 comments[83] = "Id Pregunta: 9493. NULL";


//  Id pregunta: 9670 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La gesti&oacute;n NUMA:";
 choices[84]= new Array();
 choices[84][0] = "Significa Not Uniform Memory Access.";
 choices[84][1] = "Significa Not Unit of Memory Available.";
 choices[84][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[84][3] = "La a) y la c)";
 answers[84] = choices[84][3];
 units[84] = "45";
 comments[84] = "Id Pregunta: 9670. ";


//  Id pregunta: 9716 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[85]= new Array();
 choices[85][0] = "SIR.";
 choices[85][1] = "ORVE.";
 choices[85][2] = "SICRES 3.0.";
 choices[85][3] = "SVDR.";
 answers[85] = choices[85][1];
 units[85] = "44";
 comments[85] = "Id Pregunta: 9716. Examen TIC-A1 2013";


//  Id pregunta: 9761 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[86]= new Array();
 choices[86][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[86][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[86][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[86][3] = "Ninguna de las anteriores.";
 answers[86] = choices[86][1];
 units[86] = "41";
 comments[86] = "Id Pregunta: 9761. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";


//  Id pregunta: 10212 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta est&aacute; basado en relaciones de superaci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "M&eacute;todo PROMETHEE";
 choices[87][1] = "M&eacute;todo T.O.P.S.I.S. o de la programaci&oacute;n compromiso";
 choices[87][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[87][3] = "M&eacute;todo de la ponderaci&oacute;n lineal con &iacute;ndices econ&oacute;micos";
 answers[87] = choices[87][0];
 units[87] = "34";
 comments[87] = "Id Pregunta: 10212. ";


//  Id pregunta: 10563 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Los controles correctivos tienen como objeto:";
 choices[88]= new Array();
 choices[88][0] = "reducir el riesgo ante una debilidad existente";
 choices[88][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[88][2] = "Solucionar problemas detectados por controles detectivos";
 choices[88][3] = "Reportar errores";
 answers[88] = choices[88][2];
 units[88] = "31, 32, 33";
 comments[88] = "Id Pregunta: 10563. ";


//  Id pregunta: 10633 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Indique cu&aacute;l de los siguientes procesos de M&eacute;trica v3 no incluye actividades de la interfaz para Gestion de la Configuraci&oacute;n:";
 choices[89]= new Array();
 choices[89][0] = "ASI";
 choices[89][1] = "PSI";
 choices[89][2] = "MSI";
 choices[89][3] = "EVS";
 answers[89] = choices[89][1];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10633. ";


//  Id pregunta: 10643 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de estos no es un concepto fundamental de la excelencia seg&uacute;n el modelo EFQM?";
 choices[90]= new Array();
 choices[90][0] = "Orientaci&oacute;n hacia los resultados";
 choices[90][1] = "Liderazgo y coherencia en los objetivos";
 choices[90][2] = "Desarrollo de Alianzas";
 choices[90][3] = "Planificaci&oacute;n a corto plazo";
 answers[90] = choices[90][3];
 units[90] = "92";
 comments[90] = "Id Pregunta: 10643. ";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[91]= new Array();
 choices[91][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[91][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[91][2] = "Ambas";
 choices[91][3] = "Ninguna de las anteriores.";
 answers[91] = choices[91][0];
 units[91] = "30";
 comments[91] = "Id Pregunta: 10681. ";


//  Id pregunta: 10935 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En relaci&oacute;n con la contrataci&oacute;n en materia TIC, es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n de la AGE:";
 choices[92]= new Array();
 choices[92][0] = "Informar con car&aacute;cter facultativo la declaraci&oacute;n de contrataci&oacute;n centralizada de los contratos de suministros, obras y servicios en materia TIC.";
 choices[92][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[92][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[92][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[92] = choices[92][3];
 units[92] = "41";
 comments[92] = "Id Pregunta: 10935. TIC A1 AGE 2014";


//  Id pregunta: 11037 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; versi&oacute;n de SQL incorpor&oacute; las reglas de integridad referencial?";
 choices[93]= new Array();
 choices[93][0] = "SQL-86";
 choices[93][1] = "SQL-89";
 choices[93][2] = "SQL-92";
 choices[93][3] = "SQL-1999";
 answers[93] = choices[93][1];
 units[93] = "58";
 comments[93] = "Id Pregunta: 11037. ";


//  Id pregunta: 11138 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[94]= new Array();
 choices[94][0] = "Native-Api Driver";
 choices[94][1] = "Network Protocol Driver";
 choices[94][2] = "Native Protocol Driver";
 choices[94][3] = "JDBC-OBDC Bridge";
 answers[94] = choices[94][1];
 units[94] = "58";
 comments[94] = "Id Pregunta: 11138. ";


//  Id pregunta: 11140 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es de las siguientes aplicaciones ofim&aacute;ticas permite crear gr&aacute;ficos y diagramas?";
 choices[95]= new Array();
 choices[95][0] = "Draw";
 choices[95][1] = "Impress";
 choices[95][2] = "Base";
 choices[95][3] = "Picture";
 answers[95] = choices[95][0];
 units[95] = "62";
 comments[95] = "Id Pregunta: 11140. ";


//  Id pregunta: 11217 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con las interfaces de programaci&oacute;n para crear GUI en Java:";
 choices[96]= new Array();
 choices[96][0] = "La&nbsp;Java Foundation Classes&nbsp;(JFC) es un framework gr&aacute;fico para construir interfaces gr&aacute;ficas de usuario (GUIs)  basadas en&nbsp;Java y est&aacute; compuesto por AWT,Swing&nbsp;y&nbsp;Java 2D.";
 choices[96][1] = "Aunque Swing est&aacute; basado en AWT, se trata de una implementaci&oacute;n de controles gr&aacute;ficos en Java puro.";
 choices[96][2] = "JavaFX, aunque est&aacute; incluido en el JDK/JRE, no est&aacute; basado en ninguna especificaci&oacute;n est&aacute;ndar JSR sino que es un producto de Oracle.";
 choices[96][3] = "Todas las respuestas son verdaderas.";
 answers[96] = choices[96][3];
 units[96] = "60";
 comments[96] = "Id Pregunta: 11217. ";


//  Id pregunta: 11307 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a los c&oacute;digos HTTP";
 choices[97]= new Array();
 choices[97][0] = "Los c&oacute;digos que comienzan por 4 (4xx) informan de un error en el cliente";
 choices[97][1] = "El c&oacute;digo 401 informa que el recurso no se ha encontrado";
 choices[97][2] = "El c&oacute;digo 403 informa de una redirecci&oacute;n en el recurso accedido";
 choices[97][3] = "El c&oacute;digo 404 indica que no hay autorizaci&oacute;n para acceder al recurso";
 answers[97] = choices[97][0];
 units[97] = "112";
 comments[97] = "Id Pregunta: 11307. ";


//  Id pregunta: 11584 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Frente a la recepci&oacute;n de una solicitud de revocaci&oacute;n de consentimiento del tratamiento de datos de car&aacute;cter personal, el responsable cesar&aacute; el tratamiento de los datos en un plazo m&aacute;ximo de:";
 choices[98]= new Array();
 choices[98][0] = "30 d&iacute;as h&aacute;biles";
 choices[98][1] = "30 d&iacute;as naturales";
 choices[98][2] = "10 d&iacute;as h&aacute;biles";
 choices[98][3] = "10 d&iacute;as naturales";
 answers[98] = choices[98][2];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11584. ";


//  Id pregunta: 11702 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; caracter&iacute;stica no se a&ntilde;ade en SNMPv3 respecto a SNMPv2?";
 choices[99]= new Array();
 choices[99][0] = "Autenticaci&oacute;n";
 choices[99][1] = "Cifrado";
 choices[99][2] = "Deteccion de errores";
 choices[99][3] = "Integridad del mensaje";
 answers[99] = choices[99][2];
 units[99] = "104";
 comments[99] = "Id Pregunta: 11702. NULL";


