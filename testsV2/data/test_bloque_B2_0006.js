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

//  Id pregunta: 714 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En UNIX, &iquest;qu&eacute; elemento traduce los comandos de usuario en instrucciones para el Kernel?";
 choices[0]= new Array();
 choices[0][0] = "Shell";
 choices[0][1] = "Kernel";
 choices[0][2] = "Shell o Kernel, dependiendo de la secuencia de comandos";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][0];
 units[0] = "52, 53";
 comments[0] = "Id Pregunta: 714. Similar a examen TIC SS A 2003";


//  Id pregunta: 734 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI?";
 choices[1]= new Array();
 choices[1][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica";
 choices[1][1] = "El v&iacute;deo bajo demanda";
 choices[1][2] = "El teletexto televisivo";
 choices[1][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos";
 answers[1] = choices[1][2];
 units[1] = "30";
 comments[1] = "Id Pregunta: 734. Examen TIC MAP B 2004. Ley 34/2002, Anexo Definiciones. Posteriormente, tanto el teletexto televisivo como el v&iacute;deo bajo demanda se eliminaron de la ley.";


//  Id pregunta: 766 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  con respecto a las tecnolog&iacute;as de desarrollo web";
 choices[2]= new Array();
 choices[2][0] = "iis act&uacute;a como servidor web de microsoft";
 choices[2][1] = "no se puede acceder a una base de datos oracle desde un entorno microsoft";
 choices[2][2] = "las p&aacute;ginas asp suelen funcionar sobre servidores apache";
 choices[2][3] = "sql server suele estar asociado a la tecnolog&iacute;a php";
 answers[2] = choices[2][0];
 units[2] = "114,115";
 comments[2] = "Id Pregunta: 766. ";


//  Id pregunta: 779 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indique una caracter&iacute;stica del software libre:";
 choices[3]= new Array();
 choices[3][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[3][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[3][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[3][3] = "Todas las respuestas son correctas";
 answers[3] = choices[3][3];
 units[3] = "61";
 comments[3] = "Id Pregunta: 779. ";


//  Id pregunta: 796 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows 2008?:";
 choices[4]= new Array();
 choices[4][0] = "ASP.NET";
 choices[4][1] = "PHP";
 choices[4][2] = "Java EE (Servlets)";
 choices[4][3] = "Todas son v&aacute;lidas";
 answers[4] = choices[4][3];
 units[4] = "59";
 comments[4] = "Id Pregunta: 796. ";


//  Id pregunta: 816 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Asociados a una red sem&aacute;ntica hay 2 procedimientos que permiten proporcionar respuestas navegando por su estructura. Estos procedimientos son:";
 choices[5]= new Array();
 choices[5][0] = "Herencia e inferencia";
 choices[5][1] = "Herencia y emparejamiento";
 choices[5][2] = "Emparejamiento y equiparaci&oacute;n";
 choices[5][3] = "Equiparaci&oacute;n y herencia";
 answers[5] = choices[5][1];
 units[5] = "63";
 comments[5] = "Id Pregunta: 816. ";


//  Id pregunta: 848 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de una funci&oacute;n Hash?:";
 choices[6]= new Array();
 choices[6][0] = "Obtiene un resultado unidireccional e irreversible";
 choices[6][1] = "No hace falta una clave pues el texto cifrado depende exclusivamente del texto claro original";
 choices[6][2] = "Se trata de una funci&oacute;n libre de colisiones en sentido estricto";
 choices[6][3] = "La seguridad de la funci&oacute;n Hash radica en su car&aacute;cter bidireccional";
 answers[6] = choices[6][3];
 units[6] = "72";
 comments[6] = "Id Pregunta: 848. ";


//  Id pregunta: 872 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes programas en Linux no es un editor de textos?:";
 choices[7]= new Array();
 choices[7][0] = "vi";
 choices[7][1] = "emacs";
 choices[7][2] = "pine";
 choices[7][3] = "joe";
 answers[7] = choices[7][2];
 units[7] = "53";
 comments[7] = "Id Pregunta: 872. ";


//  Id pregunta: 877 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l es el API de Java dedicada al procesamiento de XML?:";
 choices[8]= new Array();
 choices[8][0] = "JXML";
 choices[8][1] = "JML";
 choices[8][2] = "JAXP";
 choices[8][3] = "Todas son falsas";
 answers[8] = choices[8][2];
 units[8] = "60.116";
 comments[8] = "Id Pregunta: 877. NULL";


//  Id pregunta: 883 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de hardware?:";
 choices[9]= new Array();
 choices[9][0] = "Componentes s&oacute;lidos y dispositivos de estado de un ordenador";
 choices[9][1] = "Conjunto de programas y datos que procesa el ordenador";
 choices[9][2] = "Componentes f&iacute;sicos y dispositivos de estado s&oacute;lido de un ordenador";
 choices[9][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 883. ";


//  Id pregunta: 892 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;les son los condicionantes que originan la necesidad espec&iacute;fica de gestionar los entornos distribuidos?:";
 choices[10]= new Array();
 choices[10][0] = "Mayor complejidad de sistemas por su heterogeneidad, dispersi&oacute;n geogr&aacute;fica de los sistemas y recursos, variedad de servicios y distribuci&oacute;n de funciones de los aplicativos";
 choices[10][1] = "Mayores costes de mantenimiento de equipamiento f&iacute;sico y aplicaciones, menores costes de operaci&oacute;n, usuarios inoperativos y dispersi&oacute;n geogr&aacute;fica de los sistemas";
 choices[10][2] = "Dispersi&oacute;n geogr&aacute;fica de los sistemas, mayor coste del equipamiento que en soluciones centralizadas pero menores costes de operaci&oacute;n y aplicativos con funciones distribuidas";
 choices[10][3] = "Todos las respuestas anteriores son correctas";
 answers[10] = choices[10][0];
 units[10] = "50";
 comments[10] = "Id Pregunta: 892. ";


//  Id pregunta: 918 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es el abandonware?:";
 choices[11]= new Array();
 choices[11][0] = "Consiste en retomar proyectos software interesantes, que fueron abandonados en su momento por falta de rentabilidad";
 choices[11][1] = "Consiste en recopilar SW ya anticuado, cuyo soporte ha sido abandonado por la empresa/persona creadora, y que normalmente podr&aacute; obtenerse gratuitamente al estar descatalogado";
 choices[11][2] = "Consiste en estudiar el SW que circula por la red &quot;sin due&ntilde;o&quot; y que carece de las correspondientes licencias de distribuci&oacute;n";
 choices[11][3] = "Nada de lo anterior es cierto";
 answers[11] = choices[11][1];
 units[11] = "61";
 comments[11] = "Id Pregunta: 918. ";


//  Id pregunta: 937 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; paradigma de programaci&oacute;n reproduce mas fielmente el funcionamiento de un computador con arquitectura Von Neuman?:";
 choices[12]= new Array();
 choices[12][0] = "El l&oacute;gico";
 choices[12][1] = "El funcional";
 choices[12][2] = " El imperativo";
 choices[12][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[12] = choices[12][2];
 units[12] = "86";
 comments[12] = "Id Pregunta: 937. NULL";


//  Id pregunta: 959 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Con respecto a la manera de representar el modelo digital del terreno o DTM, un SIG puede ser:";
 choices[13]= new Array();
 choices[13][0] = "R&aacute;ster.";
 choices[13][1] = "Vectorial.";
 choices[13][2] = "Ambos.";
 choices[13][3] = "Ninguna es cierta.";
 answers[13] = choices[13][2];
 units[13] = "67";
 comments[13] = "Id Pregunta: 959. NULL";


//  Id pregunta: 961 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Considerando la orientaci&oacute;n l&oacute;gica en inteligencia artificial:";
 choices[14]= new Array();
 choices[14][0] = "La definici&oacute;n matem&aacute;tica de los mecanismos mediante los cuales ser&aacute; posible deducir f&oacute;rmulas a partir de otras es independiente de que se haya formalizado o no la estructura de las frases";
 choices[14][1] = "El sistema de Kleene, como ejemplo de sistema formal y de la teor&iacute;a de la demostraci&oacute;n, pertenece a la orientaci&oacute;n heur&iacute;stica y no a la orientaci&oacute;n l&oacute;gica";
 choices[14][2] = "La forma de representar las estructuras deductivas tiene dos l&iacute;neas principales: la de los sistemas formales y la de la sem&aacute;ntica";
 choices[14][3] = "Las soluciones de los Sistemas de Kleene est&aacute;n basadas en las formalizaciones del c&aacute;lculo proposicional y del c&aacute;lculo de predicados";
 answers[14] = choices[14][2];
 units[14] = "63";
 comments[14] = "Id Pregunta: 961. ";


//  Id pregunta: 974 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Dada una tarjeta con microprocesador utilizada en un sistema de control de acceso, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[15]= new Array();
 choices[15][0] = "Dispone de un sistema operativo con un juego de instrucciones grabado en memoria ROM";
 choices[15][1] = "Permite realizar algoritmos complejos de cifrado con clave asim&eacute;trica";
 choices[15][2] = "La lectura de su informaci&oacute;n se realiza mediante un diodo de l&aacute;ser";
 choices[15][3] = "Incorpora un microprocesador con memoria";
 answers[15] = choices[15][2];
 units[15] = "74";
 comments[15] = "Id Pregunta: 974. NULL";


//  Id pregunta: 1007 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El concepto de trabajo en grupo o groupware se construy&oacute; alrededor de:";
 choices[16]= new Array();
 choices[16][0] = "Los productos de correo electr&oacute;nico";
 choices[16][1] = "Los procesadores de texto";
 choices[16][2] = "Las redes locales de &aacute;mbito de oficina";
 choices[16][3] = "Las hojas de c&aacute;lculo";
 answers[16] = choices[16][0];
 units[16] = "71";
 comments[16] = "Id Pregunta: 1007. ";


//  Id pregunta: 1057 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El software para la productividad en grupos de trabajo incluye:";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de agenda compartida";
 choices[17][1] = "Teleconversaciones m&uacute;ltiples";
 choices[17][2] = "Correo electr&oacute;nico";
 choices[17][3] = "Todas las respuestas anteriores son correctas";
 answers[17] = choices[17][3];
 units[17] = "71";
 comments[17] = "Id Pregunta: 1057. ";


//  Id pregunta: 1059 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El Tel&eacute;grafo fue inventado en .... por: ";
 choices[18]= new Array();
 choices[18][0] = "1794, Claude Chapp&eacute;.";
 choices[18][1] = "1844, Samuel Morse.";
 choices[18][2] = "1839, Almond A. Strowger.";
 choices[18][3] = "G. Marconi.";
 answers[18] = choices[18][0];
 units[18] = "";
 comments[18] = "Id Pregunta: 1059. ";


//  Id pregunta: 1062 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El tiempo de latencia en un disco:";
 choices[19]= new Array();
 choices[19][0] = "Tiempo medio necesario para que la informaci&oacute;n pase por debajo de la cabeza de lectura-escritura cuandoest&aacute; posicionada sobre la pista adecuada";
 choices[19][1] = "Corresponde al tiempo empleado para realizar la mitad del giro";
 choices[19][2] = "Es equivalente al tiempo de espera";
 choices[19][3] = "Todas las respuestas anteriores son ciertas";
 answers[19] = choices[19][3];
 units[19] = "48";
 comments[19] = "Id Pregunta: 1062. ";


//  Id pregunta: 1075 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el campo de la integraci&oacute;n de los sistemas expertos:";
 choices[20]= new Array();
 choices[20][0] = "Los gestores inteligentes de bases de datos modelizan las descripciones funcionales de los procesos inferenciales b&aacute;sicos";
 choices[20][1] = "Las arquitecturas de sistemas de gesti&oacute;n de bases de datos se pueden optimizar incorporando m&oacute;dulos de optimizaci&oacute;n basados en t&eacute;cnicas heur&iacute;sticas de inteligencia artificial";
 choices[20][2] = "Un sistema de gesti&oacute;n de bases de datos deductivo es aqu&eacute;l en que los criterios de selecci&oacute;n pueden deducirse directamente de las restricciones de integridad";
 choices[20][3] = "Para la formalizaci&oacute;n de sistemas deductivos de bases de datos nunca se utilizan las t&eacute;cnicas de deducci&oacute;n autom&aacute;tica de la l&oacute;gica de primer orden";
 answers[20] = choices[20][1];
 units[20] = "64";
 comments[20] = "Id Pregunta: 1075. ";


//  Id pregunta: 1104 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados a continuaci&oacute;n no corresponde a dicha arquitectura:";
 choices[21]= new Array();
 choices[21][0] = "Esquema externo";
 choices[21][1] = "Esquema legal";
 choices[21][2] = "Esquema conceptual";
 choices[21][3] = "Esquema interno";
 answers[21] = choices[21][1];
 units[21] = "57";
 comments[21] = "Id Pregunta: 1104. ";


//  Id pregunta: 1132 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En sistemas operativos Unix se suele utilizar el editor de texto 'VI', que permite el uso de expresiones regulares. Adem&aacute;s tambien existe un editor de flujo basado en expresiones regulares, que se llama:";
 choices[22]= new Array();
 choices[22][0] = "fvi";
 choices[22][1] = "fred";
 choices[22][2] = "sed";
 choices[22][3] = "xlexp";
 answers[22] = choices[22][2];
 units[22] = "54";
 comments[22] = "Id Pregunta: 1132. NULL";


//  Id pregunta: 1174 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indicar cual de la siguientes cualidades de los sistemas expertos es falsa:";
 choices[23]= new Array();
 choices[23][0] = "Capacidad para explicar la forma en que el sistema resuelve los problemas planteados";
 choices[23][1] = "Flexibilidad para incorporar gradualmente nuevo conocimiento";
 choices[23][2] = "Pueden procesar informaci&oacute;n simb&oacute;lica en vez de s&oacute;lo informaci&oacute;n num&eacute;rica";
 choices[23][3] = "S&oacute;lo pueden operar con conocimiento completo";
 answers[23] = choices[23][3];
 units[23] = "64";
 comments[23] = "Id Pregunta: 1174. ";


//  Id pregunta: 1191 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indique cu&aacute;l de las siguientes expresiones corresponde a una sentencia correcta de consulta en SQL:";
 choices[24]= new Array();
 choices[24][0] = "SELECT Nombre, Apellido FROM PERSONAS IF Edad &gt;25";
 choices[24][1] = "SHOW Nombre, Apellido.FROM PERSONAS FOR Edad &gt;25";
 choices[24][2] = "SELECT Nombre, Apellido FROM PERSONAS WHERE Edad&gt; 25";
 choices[24][3] = "DISPLAY Nombre, Apellido FROM PERSONAS WHERE Edad &gt;25";
 answers[24] = choices[24][2];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1191. ";


//  Id pregunta: 1202 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  KADS es una metodolog&iacute;a de desarrollo de sistemas basados en en el conocimiento. Se divide en varias fases, entre las que no se encuentra:";
 choices[25]= new Array();
 choices[25][0] = "Refino de la base de conocimiento";
 choices[25][1] = "Implementaci&oacute;n";
 choices[25][2] = "Uso";
 choices[25][3] = "Clasificaci&oacute;n";
 answers[25] = choices[25][3];
 units[25] = "64";
 comments[25] = "Id Pregunta: 1202. ";


//  Id pregunta: 1233 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La modulaci&oacute;n QAM transmite a:";
 choices[26]= new Array();
 choices[26][0] = "1 bit por baudio.";
 choices[26][1] = "4 bits por baudio.";
 choices[26][2] = "2 bits por baudio.";
 choices[26][3] = "Depende de las portadoras utilizadas.";
 answers[26] = choices[26][1];
 units[26] = "107";
 comments[26] = "Id Pregunta: 1233. NULL";


//  Id pregunta: 1269 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los algoritmos de clave p&uacute;blica o asim&eacute;trica:";
 choices[27]= new Array();
 choices[27][0] = "no han alcanzado la perfecci&oacute;n matem&aacute;tica, hay ataques m&aacute;s eficaces que la fuerza bruta";
 choices[27][1] = "presentan altas tasas de cifrado y descifrado";
 choices[27][2] = "su distribuci&oacute;n usando directorios p&uacute;blicos es compleja";
 choices[27][3] = "no son compatibles con el concepto de certificado";
 answers[27] = choices[27][0];
 units[27] = "72";
 comments[27] = "Id Pregunta: 1269. ";


//  Id pregunta: 1275 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los mecanismos de inferencia usados en los sistemas expertos incluyen:";
 choices[28]= new Array();
 choices[28][0] = "La reducci&oacute;n con encadenamiento (chaining), herencia, inducci&oacute;n y abducci&oacute;n";
 choices[28][1] = "Redes sem&aacute;nticas, planificadores (skeletal planners), pizarras (blackboards) y reglas de producci&oacute;n";
 choices[28][2] = "Aserciones y &aacute;rboles de decisi&oacute;n";
 choices[28][3] = "Shells, correspondencia heur&iacute;stica y conjuntos borrosos (fuzzy)";
 answers[28] = choices[28][3];
 units[28] = "64";
 comments[28] = "Id Pregunta: 1275. ";


//  Id pregunta: 1282 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los sem&aacute;foros son una t&eacute;cnica de comunicaci&oacute;n entre procesos para:";
 choices[29]= new Array();
 choices[29][0] = "Evitar los bloqueos";
 choices[29][1] = "Ejecutar threads";
 choices[29][2] = "Permitir la exclusi&oacute;n mutua";
 choices[29][3] = "Comunicar procesos en sistemas distribuidos";
 answers[29] = choices[29][2];
 units[29] = "50";
 comments[29] = "Id Pregunta: 1282. ";


//  Id pregunta: 1284 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los tipos de an&aacute;lisis desarrollados en Data Mining se dividen com&uacute;nmente en:";
 choices[30]= new Array();
 choices[30][0] = "Sint&aacute;ctico y sem&aacute;ntico.";
 choices[30][1] = "Estad&iacute;stico y de calidad.";
 choices[30][2] = "Gr&aacute;fico y textual.";
 choices[30][3] = "Supervisado y no supervisado.";
 answers[30] = choices[30][3];
 units[30] = "68";
 comments[30] = "Id Pregunta: 1284. ";


//  Id pregunta: 1341 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Se&ntilde;alar la sentencia correcta respecto de la ingenier&iacute;a del conocimiento:";
 choices[31]= new Array();
 choices[31][0] = "Las reglas de producci&oacute;n y las reglas deductivas son maneras de representaci&oacute;n param&eacute;trica del conocimiento";
 choices[31][1] = "Ejemplos de modelos de representaci&oacute;n del conocimiento en forma param&eacute;trica son el perceptr&oacute;n y las redes neuronales";
 choices[31][2] = "Uno de los algoritmos m&aacute;s utilizados en el proceso de entrenamiento viene dado por el filtrado de Waltz";
 choices[31][3] = "El razonamiento no mon&oacute;tono es un modelo de razonamiento cuyo objetivo es asignar medidas o factores de certeza a un conjunto de proposiciones intermedias a partir de las asignadas a las proposiciones iniciales";
 answers[31] = choices[31][1];
 units[31] = "64";
 comments[31] = "Id Pregunta: 1341. ";


//  Id pregunta: 1390 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un pseudoc&oacute;digo:";
 choices[32]= new Array();
 choices[32][0] = "Tiene reglas fijas para la descripci&oacute;n de algoritmos.";
 choices[32][1] = "Es f&aacute;cil de escribir y traducir a un lenguaje de programaci&oacute;n.";
 choices[32][2] = "Utiliza como lenguaje el PASCAL.";
 choices[32][3] = "Sigue unas normas sint&aacute;cticas muy estrictas.";
 answers[32] = choices[32][1];
 units[32] = "";
 comments[32] = "Id Pregunta: 1390. ";


//  Id pregunta: 1425 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Una sala blanca es:";
 choices[33]= new Array();
 choices[33][0] = "Aquella especialmente dise&ntilde;ada para favorecer la ac&uacute;stica sin necesidad de altavoces ni micr&oacute;fonos";
 choices[33][1] = "Aquella especialmente dise&ntilde;ada para anular las ondas de los tel&eacute;fonos m&oacute;viles impidiendo as&iacute; su cobertura";
 choices[33][2] = "Aquella especialmente dise&ntilde;ada para realizar simulaciones de redes de &aacute;rea local por su escaso nivel de interferencia";
 choices[33][3] = "Aquella especialmente dise&ntilde;ada para la fabricaci&oacute;n de sustratos y componentes electr&oacute;nicos";
 answers[33] = choices[33][3];
 units[33] = "47";
 comments[33] = "Id Pregunta: 1425. ";


//  Id pregunta: 1441 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Con AGP se pretende:";
 choices[34]= new Array();
 choices[34][0] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el procesador";
 choices[34][1] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el disco duro";
 choices[34][2] = "Aislar el subsistema de v&iacute;deo de la arquitectura ISA";
 choices[34][3] = "Separar los subsistemas de audio y v&iacute;deo del bus principal";
 answers[34] = choices[34][0];
 units[34] = "48";
 comments[34] = "Id Pregunta: 1441. ";


//  Id pregunta: 1471 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Los servicios interactivos multimedia se caracterizan por ser:";
 choices[35]= new Array();
 choices[35][0] = "bidereccionales sim&eacute;tricos";
 choices[35][1] = "bidireccionales asim&eacute;tricos con mayor volumen del cliente al servidor";
 choices[35][2] = "bidireccionales asim&eacute;tricos con mayor volumen del servidor al cliente";
 choices[35][3] = "unidireccionales del servidor al cliente";
 answers[35] = choices[35][2];
 units[35] = "50";
 comments[35] = "Id Pregunta: 1471. ";


//  Id pregunta: 1574 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es JDBC?:";
 choices[36]= new Array();
 choices[36][0] = " Un modelo de objetos ActiveX.";
 choices[36][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[36][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[36][3] = " Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[36] = choices[36][3];
 units[36] = "58";
 comments[36] = "Id Pregunta: 1574. Junta Andaluc&iacute;a";


//  Id pregunta: 1607 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  La ejecuci&oacute;n desde otro lenguaje de programaci&oacute;n, de un procedimiento escrito en SQL, se denomina:";
 choices[37]= new Array();
 choices[37][0] = "PL/SQL.";
 choices[37][1] = "JSQL.";
 choices[37][2] = "SQL embebido.";
 choices[37][3] = "SQL anfitri&oacute;n.";
 answers[37] = choices[37][2];
 units[37] = "58";
 comments[37] = "Id Pregunta: 1607. Junta Andaluc&iacute;a";


//  Id pregunta: 1609 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  La forma normal Boyce-Codd (FNBC):";
 choices[38]= new Array();
 choices[38][0] = " Es mas restrictiva que la 4FN; toda FNBC es 4FN.";
 choices[38][1] = "Es menos restrictiva que la 4FN; toda 4FN es FNBC.";
 choices[38][2] = "Se denomina indistintamente 5FN.";
 choices[38][3] = "Se denomina indistintamente 5FN+ (quinta forma normal ampliada).";
 answers[38] = choices[38][1];
 units[38] = "58";
 comments[38] = "Id Pregunta: 1609. Junta Andaluc&iacute;a";


//  Id pregunta: 1619 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Qu&eacute; capas se pueden distinguir en la arquitectura de ODBC";
 choices[39]= new Array();
 choices[39][0] = "Cuatro: Aplicaci&oacute;n, administrador de or&iacute;genes de datos, controladores ODBC y or&iacute;genes de datos";
 choices[39][1] = "Tres: Aplicaci&oacute;n, ficherosy controlador basado en archivos";
 choices[39][2] = "Tres: Aplicaci&oacute;n, administrador y controlador ODBC basado en un sistema gestor de bases de datos";
 choices[39][3] = "Cuatro: Aplicaci&oacute;n, procesador, ficheros y controlador Driver Manager";
 answers[39] = choices[39][0];
 units[39] = "58";
 comments[39] = "Id Pregunta: 1619. ";


//  Id pregunta: 1649 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no tienen relaci&oacute;n con el elearning?";
 choices[40]= new Array();
 choices[40][0] = "IMS";
 choices[40][1] = "SCORM";
 choices[40][2] = "Moodle";
 choices[40][3] = "ePupil";
 answers[40] = choices[40][3];
 units[40] = "66";
 comments[40] = "Id Pregunta: 1649. ";


//  Id pregunta: 1736 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Qu&eacute; es MOSIX?";
 choices[41]= new Array();
 choices[41][0] = "Un sistema operativo monousuario";
 choices[41][1] = "Conjunto de herramientas para crear cl&uacute;sters basados en Linux";
 choices[41][2] = "El m&oacute;dulo encargado de la E/S en Linux";
 choices[41][3] = "API para ejecutar sentencias SQL";
 answers[41] = choices[41][1];
 units[41] = "55";
 comments[41] = "Id Pregunta: 1736. ";


//  Id pregunta: 1776 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El modelo de proceso de desarrollo de fuente abierta, b&aacute;sicamente descentralizado y caracter&iacute;stico de productos como Linux, Apache, Mozilla, Perl y Lisp/Emacs, se ha dado en llamar:";
 choices[42]= new Array();
 choices[42][0] = "Mercado";
 choices[42][1] = "Bazar";
 choices[42][2] = "Catedral";
 choices[42][3] = "Iglesia";
 answers[42] = choices[42][1];
 units[42] = "61,62";
 comments[42] = "Id Pregunta: 1776. ";


//  Id pregunta: 1804 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n que sea FALSA acerca de la educaci&oacute;n virtual (e-learning)";
 choices[43]= new Array();
 choices[43][0] = "La educaci&oacute;n virtual exige a los alumnos m&aacute;s esfuerzo en aprender las t&eacute;cnicas que en el contenido";
 choices[43][1] = "Lo realmente complejo en la educaci&oacute;n virtual es la instalaci&oacute;n de las herramientas necesarias";
 choices[43][2] = "La educaci&oacute;n virtual no rivaliza con la educaci&oacute;n presencial";
 choices[43][3] = "La educaci&oacute;n virtual permite la evaluaci&oacute;n de los alumnos de forma completamente fiable";
 answers[43] = choices[43][3];
 units[43] = "66";
 comments[43] = "Id Pregunta: 1804. ";


//  Id pregunta: 1812 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  En el campo de los sistemas de informaci&oacute;n geogr&aacute;fica, un IDE es:";
 choices[44]= new Array();
 choices[44][0] = "Un conjunto de tecnolog&iacute;as, est&aacute;ndares y recursos humanos necesarios para adquirir, procesar, almacenar, distribuir y mejorar la utilizaci&oacute;n de la informaci&oacute;n geogr&aacute;fica.";
 choices[44][1] = "Un entorno de desarrollo integrado para la elaboraci&oacute;n de aplicaciones que utilizan informaci&oacute;n geogr&aacute;fica.";
 choices[44][2] = "Una infraestructura de datos empresariales, que permite la unificaci&oacute;n de sistemas de informaci&oacute;n geogr&aacute;fica con topolog&iacute;a distribuida.";
 choices[44][3] = "Un sistema de informaci&oacute;n cartogr&aacute;fica como Arc/Info y Arc/View.";
 answers[44] = choices[44][0];
 units[44] = "67";
 comments[44] = "Id Pregunta: 1812. NULL";


//  Id pregunta: 1851 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Indicar la respuesta falsa:";
 choices[45]= new Array();
 choices[45][0] = "IDEA es un algoritmo de clave sim&eacute;trica";
 choices[45][1] = "RIPMED utiliza claves de 128 bits";
 choices[45][2] = "SHA-1 utiliza claves de 160 bits";
 choices[45][3] = "La seguridad de una funci&oacute;n hash radica en su car&aacute;cter unidireccional";
 answers[45] = choices[45][1];
 units[45] = "72";
 comments[45] = "Id Pregunta: 1851. ";


//  Id pregunta: 1855 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Se&ntilde;ale la falsa:";
 choices[46]= new Array();
 choices[46][0] = "CRL son las siglas en ingl&eacute;s de la lista de certificados revocados";
 choices[46][1] = "OCSP son las siglas en ingl&eacute;s del protocolo de estado de certificados en l&iacute;nea";
 choices[46][2] = "PKCS#7 corresponde al est&aacute;ndar del formato del sobre digital";
 choices[46][3] = "PKCS#11 corresponde al algoritmo RSA";
 answers[46] = choices[46][3];
 units[46] = "72";
 comments[46] = "Id Pregunta: 1855. ";


//  Id pregunta: 1906 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  La European Computer Driving Licence (ECDL)";
 choices[47]= new Array();
 choices[47][0] = "Es el sistema com&uacute;n europeo para el control de licencias de conducir, dentro del programa eEurope2005";
 choices[47][1] = "Es la acreditaci&oacute;n europea de uso de ordenadores recomendada por la Comisi&oacute;n Europea";
 choices[47][2] = "Es una acreditaci&oacute;n europea de uso de ordenadores gestionada por la Asociaci&oacute;n Europea de Fabricantes de Ordenadores (ECMA)";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][1];
 units[47] = "30";
 comments[47] = "Id Pregunta: 1906. ";


//  Id pregunta: 1916 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3";
 choices[48]= new Array();
 choices[48][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[48][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[48][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica";
 choices[48][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[48] = choices[48][2];
 units[48] = "73";
 comments[48] = "Id Pregunta: 1916. ";


//  Id pregunta: 4315 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En el Sistema operativo UN&Iacute;X la expresi&oacute;n que identifica la cuenta del &ldquo;superusuario&rdquo; (que puede llevar a cabo todas las facetas de la administraci&oacute;n de sistemas) es&hellip;";
 choices[49]= new Array();
 choices[49][0] = "Usuario daemon.";
 choices[49][1] = "Usuario adm.";
 choices[49][2] = "Usuario bin.";
 choices[49][3] = "Usuario root.";
 answers[49] = choices[49][3];
 units[49] = "55";
 comments[49] = "Id Pregunta: 4315. ";


//  Id pregunta: 4791 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes NO es uno de los 14 paquetes de nivel superior que se establecen en la norma 19115 de ISO (International Standards Organization) sobre metadatos de un sistema GIS (Geographycal Information System)?";
 choices[50]= new Array();
 choices[50][0] = "Informaci&oacute;n sobre restricciones.";
 choices[50][1] = "Informaci&oacute;n sobre formato.";
 choices[50][2] = "Informaci&oacute;n sobre extensi&oacute;n.";
 choices[50][3] = "Informaci&oacute;n sobre contenidos.";
 answers[50] = choices[50][1];
 units[50] = "67";
 comments[50] = "Id Pregunta: 4791. TIC A1, examen 2006";


//  Id pregunta: 4811 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[51]= new Array();
 choices[51][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[51][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[51][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[51][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[51] = choices[51][0];
 units[51] = "68";
 comments[51] = "Id Pregunta: 4811. ";


//  Id pregunta: 4850 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[52]= new Array();
 choices[52][0] = "Modo ECB (Electronic Code Book Mode)";
 choices[52][1] = "Modo CFB (Cipher Feedback Mode)";
 choices[52][2] = "Modo BBM (Bit Block Mode)";
 choices[52][3] = "Modo CBC (Cipher Block Chaining Mode)";
 answers[52] = choices[52][2];
 units[52] = "72";
 comments[52] = "Id Pregunta: 4850. ";


//  Id pregunta: 4916 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Se&ntilde;ale cu&aacute;l de los siguientes t&eacute;rminos NO constituye un estandar de interface de acceso a bases de datos:";
 choices[53]= new Array();
 choices[53][0] = "ODBC (Open Database Connectivity).";
 choices[53][1] = "RDO (Remote Data Objects.";
 choices[53][2] = "DMBS (DataBase Management System).";
 choices[53][3] = "OLE DB (Object Linking and Embedding for Databases).";
 answers[53] = choices[53][2];
 units[53] = "57";
 comments[53] = "Id Pregunta: 4916. Examen TIC B 2007";


//  Id pregunta: 4965 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  El &ldquo;throughput&rdquo;, como medida de rendimiento de un sistema inform&aacute;tico, se define mejor como:";
 choices[54]= new Array();
 choices[54][0] = "Tiempo transcurrido entre la realizaci&oacute;n de una petici&oacute;n al sistema y la recepci&oacute;n de la respuesta.";
 choices[54][1] = "El n&uacute;mero de usuarios simult&aacute;neos trabajando en el sistema.";
 choices[54][2] = "El porcentaje de tiempo de los dispositivos est&aacute;n trabajando en tareas del sistema, no imputables a ning&uacute;n trabajo de usuario.";
 choices[54][3] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado. Por ejemplo, transacciones por segundo.";
 answers[54] = choices[54][3];
 units[54] = "52";
 comments[54] = "Id Pregunta: 4965. Examen TIC B 2007";


//  Id pregunta: 5639 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es err&oacute;nea:";
 choices[55]= new Array();
 choices[55][0] = "Un microcomputador dispone de una CPU basada en un &uacute;nico microprocesador (chip)";
 choices[55][1] = "Un computador &oacute;ptico se basa en las propiedades de la luz para el tratamiento de la informaci&oacute;n";
 choices[55][2] = "Un computador empotrado es un computador de prop&oacute;sito especial, dise&ntilde;ado para llevar a cabo una funci&oacute;n dedicada concreta";
 choices[55][3] = "Un nanocomputador se basa en tecnolog&iacute;a de silicio/semiconductores";
 answers[55] = choices[55][3];
 units[55] = "49";
 comments[55] = "Id Pregunta: 5639. ";


//  Id pregunta: 5722 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[56]= new Array();
 choices[56][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros.";
 choices[56][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee.";
 choices[56][2] = "Los datos van formados mediante etiquetas de lo que significan.";
 choices[56][3] = "Si las reglas sint&aacute;cticas del DTD se cumplen, el documento es v&aacute;lido.";
 answers[56] = choices[56][1];
 units[56] = "69";
 comments[56] = "Id Pregunta: 5722. MAP 2008 A2";


//  Id pregunta: 5900 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[57]= new Array();
 choices[57][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[57][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[57][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[57][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[57] = choices[57][2];
 units[57] = "60";
 comments[57] = "Id Pregunta: 5900. NULL";


//  Id pregunta: 6179 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Una ventaja del procesado de documentos XML usando SAX (frente a DOM) es:";
 choices[58]= new Array();
 choices[58][0] = "Es posible la modificaci&oacute;n de los datos en memoria.";
 choices[58][1] = "Procesa el documento completo.";
 choices[58][2] = "En el procesado de documentos grandes consume menos memoria.";
 choices[58][3] = "Todas las anteriores son ventajas de SAX frente a DOM.";
 answers[58] = choices[58][2];
 units[58] = "69";
 comments[58] = "Id Pregunta: 6179. NULL";


//  Id pregunta: 6556 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El est&aacute;ndar X.509 v3 define los distintos elementos que debe contener un certificado, entre los que destacan:";
 choices[59]= new Array();
 choices[59][0] = "N&uacute;mero de serie del certificado";
 choices[59][1] = "Nombre de la autoridad de certificaci&oacute;n";
 choices[59][2] = "Firma digital de la autoridad  certificadora";
 choices[59][3] = "Todas las respuestas anteriores son correctas";
 answers[59] = choices[59][3];
 units[59] = "74";
 comments[59] = "Id Pregunta: 6556. NULL";


//  Id pregunta: 6599 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En cuanto al acceso a datos personales a trav&eacute;s de redes de comunicaciones:";
 choices[60]= new Array();
 choices[60][0] = "Debe llevarse a cabo a trav&eacute;s de t&eacute;cnicas de cifrado";
 choices[60][1] = "Deber&aacute;n garantizar un nivel de seguridad equivalente al correspondiente a los accesos en modo local";
 choices[60][2] = "Debe permitir el registro de todos los accesos a los datos, guardando, hora, fecha, usuario y fichero accedido.";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][1];
 units[60] = "75";
 comments[60] = "Id Pregunta: 6599. NULL";


//  Id pregunta: 7158 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[61]= new Array();
 choices[61][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[61][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[61][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[61][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[61] = choices[61][3];
 units[61] = "52";
 comments[61] = "Id Pregunta: 7158. Examen TIC B 2009";


//  Id pregunta: 7163 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[62]= new Array();
 choices[62][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[62][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios ";
 choices[62][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[62][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[62] = choices[62][1];
 units[62] = "53,54";
 comments[62] = "Id Pregunta: 7163. Examen TIC B 2009";


//  Id pregunta: 7322 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  La Entidad P&uacute;blica Empresarial responsable de la gesti&oacute;n del Registro de nombres de dominio de Internet bajo el c&oacute;digo de pa&iacute;s .es se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Oepm.es";
 choices[63][1] = "Red.es";
 choices[63][2] = "Funciona.es";
 choices[63][3] = "060.es";
 answers[63] = choices[63][1];
 units[63] = "112";
 comments[63] = "Id Pregunta: 7322. NULL";


//  Id pregunta: 8171 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Respecto a AJAX. &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[64]= new Array();
 choices[64][0] = "En lo referente a &quot;cross-scripting&quot; (ejecuci&oacute;n de c&oacute;digo de diferente dominio), est&aacute; sujeto a la pol&iacute;tica &quot;same origin&quot; implementada en la sandbox del navegador.";
 choices[64][1] = "Realizar una petici&oacute;n v&iacute;a XMLHttpRequest (XHR) no modifica el historial del navegador.";
 choices[64][2] = "No ha sido estandarizado por una Recomendaci&oacute;n del World Wide Web Consortium (W3C).";
 choices[64][3] = "Su uso obliga a refrescar una parte de la p&aacute;gina del navegador.";
 answers[64] = choices[64][3];
 units[64] = "69";
 comments[64] = "Id Pregunta: 8171. Examen TIC A1 2010";


//  Id pregunta: 8465 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes NO es una etiqueta HTML?:";
 choices[65]= new Array();
 choices[65][0] = "&lt;em&gt;&lt;/em&gt;";
 choices[65][1] = "&lt;meta&gt;";
 choices[65][2] = "&lt;tc&gt;&lt;/tc&gt;";
 choices[65][3] = "&lt;body&gt;&lt;/body&gt;";
 answers[65] = choices[65][2];
 units[65] = "69";
 comments[65] = "Id Pregunta: 8465. Analista Ayto. Madrid 2010";


//  Id pregunta: 8613 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En relaci&oacute;n con la administraci&oacute;n de un sistema operativo Linux, indique cu&aacute;l de los siguientes comandos NO est&aacute; destinado a realizar copias de seguridad:";
 choices[66]= new Array();
 choices[66][0] = "tar con los par&aacute;metros cvf";
 choices[66][1] = "tar con los par&aacute;metros tvf";
 choices[66][2] = "cpio en conjunci&oacute;n con el comando ls";
 choices[66][3] = "cpio en conjunci&oacute;n con el comando find";
 answers[66] = choices[66][1];
 units[66] = "53,54";
 comments[66] = "Id Pregunta: 8613. Examen TIC A2 2010 interna";


//  Id pregunta: 8758 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En un Sistema Operativo, una planificaci&oacute;n de procesos se denomina &quot;preemptive&quot;:";
 choices[67]= new Array();
 choices[67][0] = "Cuando un proceso no se puede desalojar de la CPU";
 choices[67][1] = "No existe tal denominaci&oacute;n.";
 choices[67][2] = "La prevenci&oacute;n de ejecutar procesos que consuman muchos recursos por el Sistema operativo";
 choices[67][3] = "Cuando un proceso se puedo desalojar de la CPU";
 answers[67] = choices[67][3];
 units[67] = "52";
 comments[67] = "Id Pregunta: 8758. Examen TIC A2 2010 interna";


//  Id pregunta: 8853 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En el marco de trabajo Windows Communication Foundation (WCF) para la creaci&oacute;n de Aplicaciones Orientadas a Servicios cu&aacute;l de las siguientes afirmaciones es correcta respecto al modelo de intercambio soportado:";
 choices[68]= new Array();
 choices[68][0] = "El modelo es el de solicitud/respuesta, en que un extremo ha de solicitar datos de otro extremo y el otro extremo enviar siempre una respuesta";
 choices[68][1] = "Permite un modelo d&uacute;plex, en donde dos extremos establecen una conexi&oacute;n y se env&iacute;an datos entre s&iacute;, como ocurre con un programa de mensajer&iacute;a instant&aacute;nea";
 choices[68][2] = "El modelo establece que el env&iacute;o de datos de un extremo de servicio a otro no puede ser asincr&oacute;nico";
 choices[68][3] = "Ninguna de las anteriores es correcta";
 answers[68] = choices[68][2];
 units[68] = "56";
 comments[68] = "Id Pregunta: 8853. Analista Ayto. Madrid 2010";


//  Id pregunta: 8922 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En HTML, &iquest;con qu&eacute; etiqueta indicamos el comienzo de una columna con datos en una tabla?";
 choices[69]= new Array();
 choices[69][0] = "&lt;table&gt;";
 choices[69][1] = "&lt;td&gt;";
 choices[69][2] = "&lt;th&gt;";
 choices[69][3] = "&lt;column&gt;";
 answers[69] = choices[69][1];
 units[69] = "69";
 comments[69] = "Id Pregunta: 8922. Operador Ayto. Madrid 2010";


//  Id pregunta: 8977 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; pantallas t&aacute;ctiles pueden ser manejadas con guantes de lana?";
 choices[70]= new Array();
 choices[70][0] = "las resistivas";
 choices[70][1] = "las capacitivas";
 choices[70][2] = "ambas";
 choices[70][3] = "ninguna";
 answers[70] = choices[70][0];
 units[70] = "47";
 comments[70] = "Id Pregunta: 8977. ";


//  Id pregunta: 9050 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[71]= new Array();
 choices[71][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[71][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[71][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][3];
 units[71] = "41";
 comments[71] = "Id Pregunta: 9050. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";


//  Id pregunta: 9129 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es Parallel Sysplex?";
 choices[72]= new Array();
 choices[72][0] = "La soluci&oacute;n de clustering de IBM para z/OS";
 choices[72][1] = "Un tipo de registro l&oacute;gico";
 choices[72][2] = "Una aplicaci&oacute;n que permite conocer el estado de procesos de un sistema operativo";
 choices[72][3] = "Una herramienta de virtualizaci&oacute;n";
 answers[72] = choices[72][0];
 units[72] = "46";
 comments[72] = "Id Pregunta: 9129. ";


//  Id pregunta: 9136 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es FSB?";
 choices[73]= new Array();
 choices[73][0] = "Front Side Bus. Representa el camino por el cual es posible integrar en la placa base los distintos componentes hardware para el intercambio de informaci&oacute;n entre microprocesador, memoria y el subsistema de Entrada/Salida";
 choices[73][1] = "First Serial Bus. Es el bus que se utiliza en la comunicaci&oacute;n con dispositivos serie como un m&oacute;dem";
 choices[73][2] = "Front Side Bus. Su velocidad siempre es superior a la velocidad interna del microprocesador.";
 choices[73][3] = "Front Side Bus. Se relaciona con el microprocesador mediante la frecuencia (velocidad)";
 answers[73] = choices[73][0];
 units[73] = "47";
 comments[73] = "Id Pregunta: 9136. ";


//  Id pregunta: 9163 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Respecto a la Directiva INSPIRE, indique la respuesta FALSA:";
 choices[74]= new Array();
 choices[74][0] = "Se refiere a la Directiva 2007/2/CE";
 choices[74][1] = "Contiene 34 temas espaciales";
 choices[74][2] = "El Comit&eacute; INSPIRE publica sus Implementing Rules en forma de Reglamentos";
 choices[74][3] = "Dirigida a que las IDEs de los Estados Miembros sean compatibles e interoperables";
 answers[74] = choices[74][2];
 units[74] = "67";
 comments[74] = "Id Pregunta: 9163. NULL";


//  Id pregunta: 9208 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es CAS?";
 choices[75]= new Array();
 choices[75][0] = "Content Address Storage";
 choices[75][1] = "Permiten almacenar una &uacute;nica copia de la informaci&oacute;n duplicada.";
 choices[75][2] = "Permiten reducir el espacio de almacenamiento requerido.";
 choices[75][3] = "Todas son correctas.";
 answers[75] = choices[75][3];
 units[75] = "48";
 comments[75] = "Id Pregunta: 9208. ";


//  Id pregunta: 9277 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[76]= new Array();
 choices[76][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[76][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado";
 choices[76][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[76][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[76] = choices[76][3];
 units[76] = "46";
 comments[76] = "Id Pregunta: 9277. Examen TIC-A1 2011";


//  Id pregunta: 9594 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[77]= new Array();
 choices[77][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[77][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[77][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[77][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[77] = choices[77][0];
 units[77] = "59";
 comments[77] = "Id Pregunta: 9594. Xunta Libre 2011";


//  Id pregunta: 9613 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[78]= new Array();
 choices[78][0] = "Vistas indexadas";
 choices[78][1] = "Vistas normalizadas";
 choices[78][2] = "Vistas f&iacute;sicas";
 choices[78][3] = "No existen alternativas";
 answers[78] = choices[78][0];
 units[78] = "58";
 comments[78] = "Id Pregunta: 9613. En SQL Server se llaman vistas indexadas";


//  Id pregunta: 9621 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;C&uacute;al de los siguientes es un medio para la sincronizaci&oacute;n entre procesos Windows?";
 choices[79]= new Array();
 choices[79][0] = "Signals";
 choices[79][1] = "Mutex";
 choices[79][2] = "Sockets";
 choices[79][3] = "RPCs";
 answers[79] = choices[79][1];
 units[79] = "56";
 comments[79] = "Id Pregunta: 9621. ";


//  Id pregunta: 9625 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix:";
 choices[80]= new Array();
 choices[80][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz";
 choices[80][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario. ";
 choices[80][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz. ";
 choices[80][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido. ";
 answers[80] = choices[80][2];
 units[80] = "54";
 comments[80] = "Id Pregunta: 9625. Examen TIC A1 2013";


//  Id pregunta: 9631 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[81]= new Array();
 choices[81][0] = "Metacity de GNOME ";
 choices[81][1] = "KWIN de KDE";
 choices[81][2] = "GTK de CDE";
 choices[81][3] = "Enlightenment de GNOME";
 answers[81] = choices[81][2];
 units[81] = "54";
 comments[81] = "Id Pregunta: 9631. Examen TIC A2 2013";


//  Id pregunta: 9633 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[82]= new Array();
 choices[82][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[82][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[82][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[82][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[82] = choices[82][2];
 units[82] = "53";
 comments[82] = "Id Pregunta: 9633. Examen TIC A2 2013";


//  Id pregunta: 9643 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes proyectos est&aacute; relacionado con el intercambio de contenidos docentes y la coordinaci&oacute;n entre promotores de formaci&oacute;n en la Administraci&oacute;n General del Estado?";
 choices[83]= new Array();
 choices[83][0] = "Comp@rte";
 choices[83][1] = "Racionaliz@";
 choices[83][2] = "Compartir";
 choices[83][3] = "Educ@";
 answers[83] = choices[83][2];
 units[83] = "66";
 comments[83] = "Id Pregunta: 9643. ";


//  Id pregunta: 9680 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En relaci&oacute;n con las t&eacute;cnicas de compresi&oacute;n y organizaci&oacute;n en SIG raster, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[84]= new Array();
 choices[84][0] = "RLE (Run Length Encode) se basa en estructuras de datos orientadas a la indexaci&oacute;n espacial en las que se procede a la divisi&oacute;n recursiva de la informaci&oacute;n de partida en bloques (cuadrantes).";
 choices[84][1] = "Las t&eacute;cnicas 'Quadtrees' son m&aacute;s complejas que las RLE pero m&aacute;s eficientes.";
 choices[84][2] = "Wavelets se basa en la compresi&oacute;n de patrones y hace factible la transmisi&oacute;n a trav&eacute;s de Internet con tiempos de respuesta muy aceptables.";
 choices[84][3] = "La t&eacute;cnica m&aacute;s elemental es almacenar secuencialmente los valores del atributo en las sucesivas celdas de acuerdo a la secuencia de barrido de la imagen.";
 answers[84] = choices[84][0];
 units[84] = "67";
 comments[84] = "Id Pregunta: 9680. NULL";


//  Id pregunta: 9944 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[85]= new Array();
 choices[85][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta. ";
 choices[85][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[85][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public. ";
 choices[85][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto. ";
 answers[85] = choices[85][0];
 units[85] = "82, 60";
 comments[85] = "Id Pregunta: 9944. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10310 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[86]= new Array();
 choices[86][0] = "300 MB/s.";
 choices[86][1] = "900 MB/s.";
 choices[86][2] = "600 MB/s.";
 choices[86][3] = "150 MB/s.";
 answers[86] = choices[86][2];
 units[86] = "48";
 comments[86] = "Id Pregunta: 10310. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10527 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el &aacute;mbito de los procesadores de ordenador, el concepto de pipelining hace referencia a:";
 choices[87]= new Array();
 choices[87][0] = "el encadenamiento de las instrucciones que se ejecutan en el procesador, de manera que la salida de una se conecta a la entrada de la siguiente ahorrando el paso por los registros, lo que acelera la ejecuci&oacute;n";
 choices[87][1] = "el particionado del procesador en etapas, lo que permite paralelizar las fases de ejecuci&oacute;n de instrucciones en el procesador";
 choices[87][2] = "el acceso a memoria mediante buses dedicados al efecto, denominados &quot;pipes&quot;, lo que prioriza las consultas del procesador a la memoria";
 choices[87][3] = "no se contempla el concepto de pipelining relacionado con los procesadores";
 answers[87] = choices[87][1];
 units[87] = "45";
 comments[87] = "Id Pregunta: 10527. NULL";


//  Id pregunta: 10602 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Indique cu&aacute;l de &eacute;stos es un problema asociado al cloud computing:";
 choices[88]= new Array();
 choices[88][0] = "Necesita de una mayor inversi&oacute;n inicial que una infraestructura in-house.";
 choices[88][1] = "Lock-in (cliente cautivo)";
 choices[88][2] = "Generalmente la implantaci&oacute;n es m&aacute;s lenta que con una infraestructura in-house.";
 choices[88][3] = "Ninguno de los anteriores.";
 answers[88] = choices[88][1];
 units[88] = "47";
 comments[88] = "Id Pregunta: 10602. ";


//  Id pregunta: 10868 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En un sistema operativo (S.O) con memoria virtual, cuando un proceso en ejecuci&oacute;n genera un fallo de p&aacute;gina:";
 choices[89]= new Array();
 choices[89][0] = "Se cierran todos los procesos en ejecuci&oacute;n ya que es un error grave del sistema operativo.";
 choices[89][1] = "El S.O busca la p&aacute;gina en memoria secundaria y la carga en memoria principal.";
 choices[89][2] = "El S.O interrumpe la ejecuci&oacute;n del proceso y lo pone en la cola de errores.";
 choices[89][3] = "En un sistema con memoria virtual nunca hay fallos de p&aacute;gina.";
 answers[89] = choices[89][1];
 units[89] = "52";
 comments[89] = "Id Pregunta: 10868. Examen GSI 2014";


//  Id pregunta: 10869 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[90]= new Array();
 choices[90][0] = "grep error log.txt | wc &ndash;l";
 choices[90][1] = "grep wc &ndash;l |error log.txt";
 choices[90][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[90][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[90] = choices[90][0];
 units[90] = "53, 54";
 comments[90] = "Id Pregunta: 10869. Examen GSI 2014";


//  Id pregunta: 11035 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes NO es una regla de Codd?";
 choices[91]= new Array();
 choices[91][0] = "Regla del Acceso Garantizado";
 choices[91][1] = "Regla de Actualizaci&oacute;n de Vistas";
 choices[91][2] = "Independencia L&oacute;gica de Datos";
 choices[91][3] = "Regla de la Subversi&oacute;n";
 answers[91] = choices[91][3];
 units[91] = "58";
 comments[91] = "Id Pregunta: 11035. La Regla 12 es de la No Subversi&oacute;n";


//  Id pregunta: 11041 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[92]= new Array();
 choices[92][0] = "5";
 choices[92][1] = "6";
 choices[92][2] = "7";
 choices[92][3] = "8";
 answers[92] = choices[92][3];
 units[92] = "60";
 comments[92] = "Id Pregunta: 11041. Viiene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";


//  Id pregunta: 11224 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En ADO.NET:";
 choices[93]= new Array();
 choices[93][0] = "Cualquier fuente de datos debe ser convertida a XML para ser accesible por Dataset";
 choices[93][1] = "DataReader proporciona un puente entre el objeto DataSet y el origen de datos.";
 choices[93][2] = "El DataSet contiene una colecci&oacute;n de uno o m&aacute;s objetos DataTable, formados por filas y columnas de datos pero sin incluir informaci&oacute;n de restricciones ni claves externas.";
 choices[93][3] = "ADO.NET Entity es un tipo de framework ORM.";
 answers[93] = choices[93][3];
 units[93] = "59";
 comments[93] = "Id Pregunta: 11224. ";


//  Id pregunta: 11272 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique la opci&oacute;n correcta sobre las plataformas Open Source para el Cloud:";
 choices[94]= new Array();
 choices[94][0] = "OpenNebula fue desarrollado por el DSA (Distributed Systems Architecture Research Group) en la Universidad Complutense de Madrid y financiado por varios proyectos europeos y permite programar tanto en Java como en Ruby.";
 choices[94][1] = "OpenStack fue fundada por Rackspace y la NASA.";
 choices[94][2] = "CloudStack fue desarrollado por Cloud.com y dispone de versiones propietarias adem&aacute;s de la edici&oacute;n Community.";
 choices[94][3] = "Todas son verdaderas.";
 answers[94] = choices[94][3];
 units[94] = "47";
 comments[94] = "Id Pregunta: 11272. ";


//  Id pregunta: 11333 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Distintos gobiernos regionales est&aacute;n desarrollando sus propias distribuciones Linux. Seleccione cu&aacute;l no es una de ellas:";
 choices[95]= new Array();
 choices[95][0] = "LinEx en Extremadura,";
 choices[95][1] = "Augustux en Arag&oacute;n";
 choices[95][2] = "AndaLinex en Andaluc&iacute;a";
 choices[95][3] = "LinuxGlobal en Cantabria";
 answers[95] = choices[95][2];
 units[95] = "61";
 comments[95] = "Id Pregunta: 11333. Es Guadalinex";


//  Id pregunta: 11519 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; es FALSO si hablamos de SET?";
 choices[96]= new Array();
 choices[96][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de cr&eacute;dito.";
 choices[96][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft, Mastercard-Netscape.";
 choices[96][2] = "Es m&aacute;s sencillo de implementar que SSL, lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado.";
 choices[96][3] = "Es el acr&oacute;nimo de Secure Electronic Transactions, Transacciones Electr&oacute;nicas Seguras";
 answers[96] = choices[96][2];
 units[96] = "72";
 comments[96] = "Id Pregunta: 11519. NULL";


//  Id pregunta: 11526 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seleccione el fichero de Linux que contiene las direcciones de los servidores DNS necesarios para la navegaci&oacute;n por Internet.";
 choices[97]= new Array();
 choices[97][0] = "crontab";
 choices[97][1] = "interfaces";
 choices[97][2] = "resolv.conf";
 choices[97][3] = "dns.conf";
 answers[97] = choices[97][2];
 units[97] = "53";
 comments[97] = "Id Pregunta: 11526. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11607 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La modalidad de Cloud Computing en la que se ofrece todo lo necesario para soportar la puesta en producci&oacute;n de aplicaciones y servicios web as&iacute; como el ciclo de vida completo de su desarrollo, construcci&oacute;n, ensayo y preproducci&oacute;n es:";
 choices[98]= new Array();
 choices[98][0] = "IaaS";
 choices[98][1] = "PaaS";
 choices[98][2] = "SaaS";
 choices[98][3] = "CaaS";
 answers[98] = choices[98][2];
 units[98] = "47";
 comments[98] = "Id Pregunta: 11607. ";


//  Id pregunta: 11628 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Las tarjetas de proximidad se encuentran recogidas en el est&aacute;ndar:";
 choices[99]= new Array();
 choices[99][0] = "ISO 10536";
 choices[99][1] = "ISO 14443";
 choices[99][2] = "ISO 15693";
 choices[99][3] = "ISO 16949";
 answers[99] = choices[99][1];
 units[99] = "74";
 comments[99] = "Id Pregunta: 11628. ";


