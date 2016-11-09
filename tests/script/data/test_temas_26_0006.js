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

//  Id pregunta: 717 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En relaci&oacute;n a la definici&oacute;n y caracter&iacute;sticas de una base de datos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[0]= new Array();
 choices[0][0] = "En una base de datos se admite la redundancia controlada";
 choices[0][1] = "En una base de datos no debe darse la redundancia l&oacute;gica";
 choices[0][2] = "En una base de datos puede existir la redundancia f&iacute;sica";
 choices[0][3] = "En una base de datos puede admitirse la redundancia l&oacute;gica pero no f&iacute;sica";
 answers[0] = choices[0][3];
 units[0] = "57";
 comments[0] = "Id Pregunta: 717. Examen TIC MAP B 2004";


//  Id pregunta: 718 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Entre los distintos niveles de abstracci&oacute;n de una base de datos &iquest;con cu&aacute;l de los siguientes conceptos se identifica el &quot;usuario final&quot;?";
 choices[1]= new Array();
 choices[1][0] = "Esquema externo";
 choices[1][1] = "Esquema conceptual";
 choices[1][2] = "Esquema interno";
 choices[1][3] = "Esquema global";
 answers[1] = choices[1][0];
 units[1] = "57";
 comments[1] = "Id Pregunta: 718. Examen TIC MAP B 2004";


//  Id pregunta: 727 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes conceptos se clasifica dentro de la tipolog&iacute;a de &quot;Estructuras de datos no lineales&quot;?";
 choices[2]= new Array();
 choices[2][0] = "Pilas";
 choices[2][1] = "Listas";
 choices[2][2] = "Colas";
 choices[2][3] = "&Aacute;rboles";
 answers[2] = choices[2][3];
 units[2] = "57";
 comments[2] = "Id Pregunta: 727. Examen TIC MAP B 2004";


//  Id pregunta: 825 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;C&oacute;mo se denomina en Java el miniprograma que corre solamente bajo un navegador y es descargado autom&aacute;ticamente como parte de una p&aacute;gina web?:";
 choices[3]= new Array();
 choices[3][0] = "JavaScript";
 choices[3][1] = "Applet";
 choices[3][2] = "Servlet";
 choices[3][3] = "XML";
 answers[3] = choices[3][1];
 units[3] = "60";
 comments[3] = "Id Pregunta: 825. JCED - Preparatic XVII";


//  Id pregunta: 839 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
 choices[4]= new Array();
 choices[4][0] = "Pueden verse los mismos datos por diferentes usuarios";
 choices[4][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
 choices[4][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
 choices[4][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
 answers[4] = choices[4][2];
 units[4] = "57";
 comments[4] = "Id Pregunta: 839. ";


//  Id pregunta: 861 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes ejemplos de tipos de aprendizaje en miner&iacute;a de datos es no supervisado?";
 choices[5]= new Array();
 choices[5][0] = "Modelado y control.";
 choices[5][1] = "Sistemas de predicci&oacute;n.";
 choices[5][2] = "Descubrimiento de patrones.";
 choices[5][3] = "&Aacute;rboles de predicci&oacute;n.";
 answers[5] = choices[5][2];
 units[5] = "68";
 comments[5] = "Id Pregunta: 861. ";


//  Id pregunta: 916 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es 'slice &amp; dice'?";
 choices[6]= new Array();
 choices[6][0] = "Una utilidad de las hojas de c&aacute;lculo para seleccionar filas y columnas.";
 choices[6][1] = "Una t&eacute;cnica OLAP que permite obtener subconjuntos de las vistas multidimensionales.";
 choices[6][2] = "Una t&eacute;cnica de representaci&oacute;n gr&aacute;fica de un sistema de informaci&oacute;n geogr&aacute;fica de acuerdo al modelo r&aacute;ster.";
 choices[6][3] = "Una t&eacute;cnica para redistribuir los flujos convergentes en un sistema de workflow.";
 answers[6] = choices[6][1];
 units[6] = "68";
 comments[6] = "Id Pregunta: 916. ";


//  Id pregunta: 928 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es la WFMC?";
 choices[7]= new Array();
 choices[7][0] = "Una organizaci&oacute;n para promover la investigaci&oacute;n en el campo de la microelectr&oacute;nica y los computadores";
 choices[7][1] = "Un c&oacute;mite de gesti&oacute;n de las distintas organizaciones mundiales existentes en torno al web";
 choices[7][2] = "Un consorcio para coordinar los distintos forums organizados en torno a la tecnolog&iacute;a multimedia emergente";
 choices[7][3] = "Una organizaci&oacute;n cuya misi&oacute;n es promover el uso del workflow";
 answers[7] = choices[7][3];
 units[7] = "71";
 comments[7] = "Id Pregunta: 928. ";


//  Id pregunta: 935 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; indica la directiva #pragma en lenguaje C?:";
 choices[8]= new Array();
 choices[8][0] = "Le indica al compilador que genere un mensaje de error si llega a ese punto del c&oacute;digo";
 choices[8][1] = "Es un #include condicional";
 choices[8][2] = "Permite al implementador del compilador definir otras instrucciones de preprocesamiento para el compilador";
 choices[8][3] = "Nada de lo anterior es correcto";
 answers[8] = choices[8][2];
 units[8] = "59";
 comments[8] = "Id Pregunta: 935. ";


//  Id pregunta: 1041 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El objetivo principal de la miner&iacute;a de datos es:";
 choices[9]= new Array();
 choices[9][0] = "Descubrir el conocimiento oculto en grandes vol&uacute;menes de datos y expresarlo de forma inteligible.";
 choices[9][1] = "Reorganizar adecuadamente los grandes vol&uacute;menes de datos.";
 choices[9][2] = "Tener copias de seguridad fiables y r&aacute;pidas de todos y cada uno de los datos de que se dispone.";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[9] = choices[9][0];
 units[9] = "68";
 comments[9] = "Id Pregunta: 1041. ";


//  Id pregunta: 1097 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En electr&oacute;nica digital, un conjunto de funciones es completo en un &aacute;lgebra de Boole:";
 choices[10]= new Array();
 choices[10][0] = "Si y s&oacute;lo si cualquier forma booleana puede realizarse con dichas funciones.";
 choices[10][1] = "Si un conjunto m&iacute;nimo puede realizarse con dichas funciones.";
 choices[10][2] = "Si y s&oacute;lo si contiene a todas las funciones l&oacute;gicas siguientes AND, OR, NOT, NAND, XOR.";
 choices[10][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[10] = choices[10][0];
 units[10] = "58";
 comments[10] = "Id Pregunta: 1097. ";


//  Id pregunta: 1197 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Java ME es:";
 choices[11]= new Array();
 choices[11][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[11][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[11][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[11][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[11] = choices[11][1];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1197. NULL";


//  Id pregunta: 1343 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Se&ntilde;ale el enunciado falso:";
 choices[12]= new Array();
 choices[12][0] = "Los sistemas transaccionales deben bloquear los registros que vayan a modificar";
 choices[12][1] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado es cuando se actualizan las bases de datos y se suelen liberar los registros intervinientes";
 choices[12][2] = "Todos los aspectos de una transacci&oacute;n deben completarse o el sistema debe actuar como si ninguna se hubiera completado";
 choices[12][3] = "Los efectos de una transacci&oacute;n deben ser visibles por las dem&aacute;s transacciones antes que la transacci&oacute;n se complete";
 answers[12] = choices[12][3];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1343. ";


//  Id pregunta: 1363 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Si disponemos de las entidades EMPLEADO y FAMILIAR, y es condici&oacute;n de funcionamiento en la empresa que una vez desaparecidos los datos del empleado deben desaparecer los de sus familiares,  entonces:";
 choices[13]= new Array();
 choices[13][0] = "Se dise&ntilde;&oacute; mal, FAMILIAR no es una entidad";
 choices[13][1] = "FAMILIAR debe estar contenida en EMPLEADO";
 choices[13][2] = "FAMILIAR es una entidad d&eacute;bil";
 choices[13][3] = "FAMILIAR es una entidad dependiente";
 answers[13] = choices[13][2];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1363. ";


//  Id pregunta: 1391 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Un 'Recordset' es:";
 choices[14]= new Array();
 choices[14][0] = "Un conjunto de variables en un lenguaje orientado a objetos";
 choices[14][1] = "Una referencia al resultado de una consulta o tabla de base de datos";
 choices[14][2] = "La unidad b&aacute;sica para acceder a vol&uacute;menes de disco montados por NFS";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = choices[14][1];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1391. ";


//  Id pregunta: 1394 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Un sistema de gesti&oacute;n de base de datos (SGBD) es relacional si, entre otras cosas:";
 choices[15]= new Array();
 choices[15][0] = "Soporta un lenguaje de manipulaci&oacute;n de datos basado en el c&aacute;lculo referencial";
 choices[15][1] = "Soporta un lenguaje de definici&oacute;n de datos de tipo referencial";
 choices[15][2] = "Es capaz de establecer relaciones con otros SGBD";
 choices[15][3] = "Toda la informaci&oacute;n se representa a nivel l&oacute;gico en forma de tablas";
 answers[15] = choices[15][3];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1394. NULL";


//  Id pregunta: 1416 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Una entidad d&eacute;bil es aquella que cumple que:";
 choices[16]= new Array();
 choices[16][0] = "La clave est&aacute; compuesta por atributos de la entidad";
 choices[16][1] = "La clave est&aacute; compuesta por atributos de la entidad y atributos de otras entidades";
 choices[16][2] = "Su existencia depende de la existencia de otra u otras entidades";
 choices[16][3] = "No puede tener relaciones cuya cardinalidad sea uno-a-uno";
 answers[16] = choices[16][2];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1416. ";


//  Id pregunta: 1450 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes no es una herramienta caracter&iacute;stica de un SGBDD?:";
 choices[17]= new Array();
 choices[17][0] = "Diccionario de palabras vac&iacute;as";
 choices[17][1] = "Diccionario de sin&oacute;nimos, acr&oacute;nimos, abreviaturas, etc.";
 choices[17][2] = "Tesauro";
 choices[17][3] = "Corrector sem&aacute;ntico y gramatical";
 answers[17] = choices[17][3];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1450. NULL";


//  Id pregunta: 1517 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Procedimiento";
 choices[18][1] = "Producto.";
 choices[18][2] = "Secuencia.";
 choices[18][3] = "Segmento.";
 answers[18] = choices[18][0];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1517. Junta Andaluc&iacute;a";


//  Id pregunta: 1519 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[19]= new Array();
 choices[19][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[19][1] = " Puede incluir un subdirectorio META-INF";
 choices[19][2] = " Puede incluir un fichero MANIFEST.MF";
 choices[19][3] = "Puede incluir clases e im&aacute;genes pero no sonidos ";
 answers[19] = choices[19][3];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1519. NULL";


//  Id pregunta: 1552 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;C&uacute;al de las siguientes afirmaciones sobre OLAP es falsa?";
 choices[20]= new Array();
 choices[20][0] = "Pueden presentar vistas de un n&uacute;mero reducido de dimensiones elegido por el usuario.";
 choices[20][1] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 choices[20][2] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[20][3] = "No pueden existir bases de datos OLAP relacionales.";
 answers[20] = choices[20][3];
 units[20] = "68";
 comments[20] = "Id Pregunta: 1552. ";


//  Id pregunta: 1576 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[21]= new Array();
 choices[21][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[21][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[21][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[21][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[21] = choices[21][0];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1576. ";


//  Id pregunta: 1584 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[22]= new Array();
 choices[22][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[22][1] = "Una biblioteca de clases Java.";
 choices[22][2] = "Una interfaz de usuario.";
 choices[22][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[22] = choices[22][0];
 units[22] = "60";
 comments[22] = "Id Pregunta: 1584. Junta Andaluc&iacute;a";


//  Id pregunta: 1585 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  En el contexto del Sistema Gestor de Base de Datos (SGBD) ORACLE, al conjunto compartido de estructuras de memoria y procesos que acceden a un grupo de ficheros de la base de datos, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "R&eacute;plica.";
 choices[23][1] = "Segmento.";
 choices[23][2] = "Instancia.";
 choices[23][3] = "Tablespace.";
 answers[23] = choices[23][2];
 units[23] = "58";
 comments[23] = "Id Pregunta: 1585. Junta Andaluc&iacute;a";


//  Id pregunta: 1595 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En los sistemas gestores de bases de datos (SGBD) , &iquest;qu&eacute; diferencia hay entre el DDL y el DML?";
 choices[24]= new Array();
 choices[24][0] = "El DDL se utiliza embebido mediante un precompilador mientras que el DML solamente se puede utilizar con un compilador extendido.";
 choices[24][1] = "El DDL sirve para definir el esquema conceptual y los diferentes esquemas externos de la base de datos  mientras que el DML sirve para gestionar la informaci&oacute;n incluida en dicha base.";
 choices[24][2] = "El DDL se utiliza para definir y mantener las estructuras de la base de datos en el nivel conceptual mientras que el DML sirve para la definici&oacute;n y mantenimiento de las vistas en el nivel externo (usuario).";
 choices[24][3] = "El DDL es el lenguaje de base de datos de los sistemas MVS y el DML es el lenguaje de base de datos para los entornos DOS/VSE.";
 answers[24] = choices[24][1];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1595. ";


//  Id pregunta: 1597 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  En relaci&oacute;n con la interfaz ODBC, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[25]= new Array();
 choices[25][0] = "Es la implementaci&oacute;n realizada por Microsoft de las especificaciones CLI (Call Level Interface) para el acceso desde aplicaciones a sistemas gestores de base de datos";
 choices[25][1] = "La idea que sustenta el desarrollo de ODBC es la de permitir que una misma aplicaci&oacute;n pueda interactuar con distintos sistemas gestores de base de datos";
 choices[25][2] = "Dispone de flexibilidad como interfaz pero impide aprovechar las ventajas de la arquitectura cliente servidor";
 choices[25][3] = "Permite que lo que un sistema gestor pueda hacerle sea transparente a la aplicaci&oacute;n, aunque no implementa nuevas capacidades";
 answers[25] = choices[25][2];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1597. NULL";


//  Id pregunta: 1601 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  En un sistema de workflow no es una funci&oacute;n b&aacute;sica:";
 choices[26]= new Array();
 choices[26][0] = "Monitorizaci&oacute;n y control";
 choices[26][1] = "Gesti&oacute;n de procedimientos";
 choices[26][2] = "Interoperabilidad entre aplicaciones";
 choices[26][3] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 answers[26] = choices[26][2];
 units[26] = "71";
 comments[26] = "Id Pregunta: 1601. Pregunta no perteneciente al test &nbsp;del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Worflow)";


//  Id pregunta: 1613 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Las herramientas de administraci&oacute;n de datos de un SGBD";
 choices[27]= new Array();
 choices[27][0] = " Est&aacute;n entre  las facilidades de usuario y el sistema central de transformaci&oacute;n de datos ";
 choices[27][1] = " Tienen como interfaces LDU y LD";
 choices[27][2] = " Tienen como interfaces LD y LD-I";
 choices[27][3] = "Est&aacute;n entre el usuario y el sistema central de transformaci&oacute;n de datos ";
 answers[27] = choices[27][0];
 units[27] = "57";
 comments[27] = "Id Pregunta: 1613. ";


//  Id pregunta: 1620 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[28]= new Array();
 choices[28][0] = "Es independiente del SO";
 choices[28][1] = "Es independiente de la plataforma";
 choices[28][2] = "Es independiente del HW";
 choices[28][3] = "Write once run everywhere ";
 answers[28] = choices[28][3];
 units[28] = "60";
 comments[28] = "Id Pregunta: 1620. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";


//  Id pregunta: 1642 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[29]= new Array();
 choices[29][0] = "Leer ficheros locales";
 choices[29][1] = "Cargar librer&iacute;as nativas";
 choices[29][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[29][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[29] = choices[29][2];
 units[29] = "60";
 comments[29] = "Id Pregunta: 1642. NULL";


//  Id pregunta: 1679 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[30]= new Array();
 choices[30][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[30][1] = "Es dependiente de la plataforma";
 choices[30][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[30][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[30] = choices[30][1];
 units[30] = "60";
 comments[30] = "Id Pregunta: 1679. JCED - Preparatic XVII";


//  Id pregunta: 1687 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Si comparamos una base de datos relacional y otra multidimensional, es FALSO que:";
 choices[31]= new Array();
 choices[31][0] = "Las BDR son mejores que las BDM para obtener vistas de unos datos en funci&oacute;n de otros.";
 choices[31][1] = "Las BDR est&aacute;n optimizadas para la inserci&oacute;n de registros y el control concurrente de usuarios.";
 choices[31][2] = "Las BDM tienen informaci&oacute;n m&aacute;s consistente que las BDR.";
 choices[31][3] = "Las BDM son mejores para el estudio a alto nivel de los datos, ya que ofrecen mayor flexibilidad y rapidez de acceso para el &aacute;nalisis de los mismos.";
 answers[31] = choices[31][0];
 units[31] = "68";
 comments[31] = "Id Pregunta: 1687. ";


//  Id pregunta: 1752 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Se&ntilde;ala la falsa referente a SQL";
 choices[32]= new Array();
 choices[32][0] = "Las funciones agregadas devuelven un &uacute;nico valor ";
 choices[32][1] = "La cla&uacute;sula HAVING se utiliza para especificar las condiciones que deben reunir los registros nulos a seleccionar";
 choices[32][2] = "SELF JOIN es una t&eacute;cnica empleada para conseguir el producto cartesiano de una tabla consigo misma";
 choices[32][3] = "La cla&uacute;sula CONSTRAINT permite crear o eliminar &iacute;ndices";
 answers[32] = choices[32][1];
 units[32] = "58";
 comments[32] = "Id Pregunta: 1752. NULL";


//  Id pregunta: 1758 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  En la arquitectura de la plataforma .NET ";
 choices[33]= new Array();
 choices[33][0] = "CLR es el entorno de ejecuci&oacute;n para .NET";
 choices[33][1] = "CLS  define las reglas que debe cumplir todo lenguaje que quiera trabajar con .NET.";
 choices[33][2] = "WebForms se utiliza para el desarrollo de aplicaciones dirigidas a Internet";
 choices[33][3] = "Todas son correctas";
 answers[33] = choices[33][3];
 units[33] = "59";
 comments[33] = "Id Pregunta: 1758. ";


//  Id pregunta: 1762 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Se&ntilde;alar la afirmaci&oacute;n FALSA sobre los APPLETS de Java";
 choices[34]= new Array();
 choices[34][0] = "Programa Java que proporciona funcionalidad avanzada a una p&aacute;gina web";
 choices[34][1] = "S&oacute;lo utiliza recursos del cliente, no interviene nada el servidor.";
 choices[34][2] = "No puede leer o escribir ficheros en la m&aacute;quina local en la que se ejecute";
 choices[34][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[34] = choices[34][3];
 units[34] = "60";
 comments[34] = "Id Pregunta: 1762. B es falsa. Usa recursos del servidor para descargar el propio Applet y, en su caso, hacer consultas.";


//  Id pregunta: 1769 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Los applets de JAVA:";
 choices[35]= new Array();
 choices[35][0] = "Se puede incluir en una p&aacute;gina HTML de forma mediante una etiqueta especial &lt;add_applet&gt;";
 choices[35][1] = "Un applet nunca puede hacer conexiones a la m&aacute;quina de la que se descarg&oacute;.";
 choices[35][2] = "El navegador invoca el m&eacute;todo init() sobre un applet cada vez que se va a mostrar la p&aacute;gina que contiene &eacute;ste.";
 choices[35][3] = "Para firmar un applet se tiene que crear un fichero de archivo JAR con las clases que componen el applet, un fichero de metainformaci&oacute;n y el fichero de firma.";
 answers[35] = choices[35][3];
 units[35] = "60";
 comments[35] = "Id Pregunta: 1769. NULL";


//  Id pregunta: 1816 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Para qu&eacute; se utiliza  principalmente el algoritmo k-medias?";
 choices[36]= new Array();
 choices[36][0] = "Clustering.";
 choices[36][1] = "Categorizaci&oacute;n.";
 choices[36][2] = "Predicci&oacute;n.";
 choices[36][3] = "Detecci&oacute;n de fraude.";
 answers[36] = choices[36][0];
 units[36] = "68";
 comments[36] = "Id Pregunta: 1816. ";


//  Id pregunta: 1818 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  De acuerdo al Garner Group, la transformaci&oacute;n de los datos de la compa&ntilde;&iacute;a en conocimiento para obtener una ventaja competitiva se define como:";
 choices[37]= new Array();
 choices[37][0] = "Business Intelligence.";
 choices[37][1] = "Data Mining.";
 choices[37][2] = "ETL.";
 choices[37][3] = "Balanced Score Card.";
 answers[37] = choices[37][0];
 units[37] = "68";
 comments[37] = "Id Pregunta: 1818. ";


//  Id pregunta: 1825 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Las tablas primarias en el modelo dimensional de un Datawarehouse y que contienen los valores y metricas se conocen como:";
 choices[38]= new Array();
 choices[38][0] = "Tablas de dimensiones.";
 choices[38][1] = "Tablas maestras.";
 choices[38][2] = "Tablas de hechos.";
 choices[38][3] = "Tablas externas.";
 answers[38] = choices[38][2];
 units[38] = "68";
 comments[38] = "Id Pregunta: 1825. ";


//  Id pregunta: 1845 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Indique la respuesta falsa en relaci&oacute;n al WfMC (Workflow Management Coalition):";
 choices[39]= new Array();
 choices[39][0] = "Organizaci&oacute;n destinada a establecer est&aacute;ndares relativos a la terminolog&iacute;a del software, su interoperabilidad y conectividad";
 choices[39][1] = "Organizaci&oacute;n creada por las principales empresas del sector para el facilitar la compatibilidad de sus herramientas";
 choices[39][2] = "Ha desarrollado el denominado Modelo de Referencia de Workflow";
 choices[39][3] = "Est&aacute; dividida en tres comit&eacute;s principales: el Comit&eacute; T&eacute;cnico, el Comit&eacute; de Relaciones Externas y el Comit&eacute; Directivo";
 answers[39] = choices[39][1];
 units[39] = "71";
 comments[39] = "Id Pregunta: 1845. ";


//  Id pregunta: 2101 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[40][1] = "Cuando acaba la rutina que los actualiza.";
 choices[40][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[40][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[40] = choices[40][3];
 units[40] = "57,58,83";
 comments[40] = "Id Pregunta: 2101. ";


//  Id pregunta: 2119 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de estas funciones no es propia del administrador del sistema de gesti&oacute;n de bases de datos?:";
 choices[41]= new Array();
 choices[41][0] = "Catalogar en el diccionario de datos los correspondientes al sistema de informaci&oacute;n";
 choices[41][1] = "Dise&ntilde;ar el modelo f&iacute;sico de datos";
 choices[41][2] = "Dar de alta y baja a los usuarios de las bases de datos";
 choices[41][3] = "Garantizar la ejecuci&oacute;n de los procedimientos de salvaguarda";
 answers[41] = choices[41][0];
 units[41] = "57";
 comments[41] = "Id Pregunta: 2119. ";


//  Id pregunta: 4361 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[42]= new Array();
 choices[42][0] = "De validaci&oacute;n.";
 choices[42][1] = "De verificaci&oacute;n.";
 choices[42][2] = "De descubrimiento.";
 choices[42][3] = "Predictivo.";
 answers[42] = choices[42][2];
 units[42] = "68";
 comments[42] = "Id Pregunta: 4361. ";


//  Id pregunta: 4518 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En relaci&oacute;n con los entornos OLAP, indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[43]= new Array();
 choices[43][0] = "Los sistemas MOLAP son capaces de almacenar mas informaci&oacute;n que los ROLAP.";
 choices[43][1] = "Los sistemas ROLAP son multidimensionales.";
 choices[43][2] = "Los sistemas ROLAP son capaces de almacenar m&aacute;s informaci&oacute;n que los MOLAP.";
 choices[43][3] = "Los sistemas MOLAP son relacionales.";
 answers[43] = choices[43][2];
 units[43] = "68";
 comments[43] = "Id Pregunta: 4518. ";


//  Id pregunta: 4680 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  La API JDBC se utiliza:";
 choices[44]= new Array();
 choices[44][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[44][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[44][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[44][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[44] = choices[44][0];
 units[44] = "60";
 comments[44] = "Id Pregunta: 4680. Examen 2006 JCYL";


//  Id pregunta: 4703 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque &hellip;";
 choices[45]= new Array();
 choices[45][0] = "el lenguaje Java se deriva de C++.";
 choices[45][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[45][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[45][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[45] = choices[45][1];
 units[45] = "60";
 comments[45] = "Id Pregunta: 4703. Examen 2006 JCYL";


//  Id pregunta: 4800 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las afirmaciones NO es cierta?";
 choices[46]= new Array();
 choices[46][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, puede existir un valor de K en R1 cuyo valor sea igual al valor de A";
 choices[46][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K";
 choices[46][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo";
 choices[46][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo";
 answers[46] = choices[46][1];
 units[46] = "57";
 comments[46] = "Id Pregunta: 4800. ";


//  Id pregunta: 4988 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (Datawarehouses):";
 choices[47]= new Array();
 choices[47][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[47][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[47][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[47][3] = "Son colecciones de datos.";
 answers[47] = choices[47][1];
 units[47] = "68";
 comments[47] = "Id Pregunta: 4988. Examen TIC A 2007";


//  Id pregunta: 5008 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[48][1] = "Es independiente del sistema operativo";
 choices[48][2] = "Es independiente de la base de datos";
 choices[48][3] = "Es un tipo de API";
 answers[48] = choices[48][0];
 units[48] = "58";
 comments[48] = "Id Pregunta: 5008. Examen TIC A 2007";


//  Id pregunta: 5490 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Qu&eacute; le ocurre a una transacci&oacute;n si recupera todos los datos que satisfacen una condici&oacute;n y despu&eacute;s otra transacci&oacute;n incorpora nuevos datos que satisfacen dicha condici&oacute;n, cuando repite la lectura inicial";
 choices[49]= new Array();
 choices[49][0] = "Nada";
 choices[49][1] = "Una lectura sucia";
 choices[49][2] = "Una lectura fantasma";
 choices[49][3] = "Una escritura sucia";
 answers[49] = choices[49][2];
 units[49] = "58";
 comments[49] = "Id Pregunta: 5490. ";


//  Id pregunta: 5502 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es una de las diferencias entre ROLAP y MOLAP?";
 choices[50]= new Array();
 choices[50][0] = "El grado de interactividad.";
 choices[50][1] = "El preprocesado de los datos desde las bases de datos relacionales a la base de datos multidimensional.";
 choices[50][2] = "El soporte de sistemas para la toma de decisiones.";
 choices[50][3] = "La presentaci&oacute;n de vistas de los datos sobre un n&uacute;mero de dimensiones.";
 answers[50] = choices[50][1];
 units[50] = "68";
 comments[50] = "Id Pregunta: 5502. ";


//  Id pregunta: 5728 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes no es un tipo de herramienta de Groupware?";
 choices[51]= new Array();
 choices[51][0] = "Herramientas de coordinaci&oacute;n";
 choices[51][1] = "Herramientas de control";
 choices[51][2] = "Herramientas de colaboraci&oacute;n";
 choices[51][3] = "Herramientas de comunicaci&oacute;n";
 answers[51] = choices[51][1];
 units[51] = "71";
 comments[51] = "Id Pregunta: 5728. ";


//  Id pregunta: 5781 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  Se&ntilde;ale cu&aacute;l de los siguientes objetos forma parte de los componentes proveedores de datos .NET Framework de ADO.NET";
 choices[52]= new Array();
 choices[52][0] = "DataSet";
 choices[52][1] = "DataTable";
 choices[52][2] = "DataAdapter";
 choices[52][3] = "RecordSet";
 answers[52] = choices[52][2];
 units[52] = "59";
 comments[52] = "Id Pregunta: 5781. MAP 2008 A2";


//  Id pregunta: 5890 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Cu&aacute;les de los siguientes elementos no pueden ser miembros de una clase en Java SE 5?";
 choices[53]= new Array();
 choices[53][0] = "Variables de instancia y de clase";
 choices[53][1] = "M&eacute;todos";
 choices[53][2] = "Otras clases (clases internas)";
 choices[53][3] = "Todas las anteriores son ciertas";
 answers[53] = choices[53][3];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5890. NULL";


//  Id pregunta: 5893 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Qu&eacute; es JNI?";
 choices[54]= new Array();
 choices[54][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[54][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[54][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][1];
 units[54] = "60";
 comments[54] = "Id Pregunta: 5893. NULL";


//  Id pregunta: 5898 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes corresponde a una tecnolog&iacute;a Java para acceder a bases de datos relacionales?";
 choices[55]= new Array();
 choices[55][0] = "JRDB";
 choices[55][1] = "JPA";
 choices[55][2] = "ORM";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][1];
 units[55] = "60";
 comments[55] = "Id Pregunta: 5898. NULL";


//  Id pregunta: 5905 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Un Data Warehouse es:";
 choices[56]= new Array();
 choices[56][0] = "Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[56][1] = "Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[56][2] = "Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[56][3] = "Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[56] = choices[56][3];
 units[56] = "68";
 comments[56] = "Id Pregunta: 5905. MAP 2008 A1";


//  Id pregunta: 6132 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La creaci&oacute;n de una vista l&oacute;gica unificada de los datos, a&uacute;n cuando &eacute;stos est&eacute;n dispersos entre varias bases de datos f&iacute;sicas, para as&iacute; disponer de un &uacute;nico modelo de trabajo de los datos de la organizaci&oacute;n, es una manera de definir:";
 choices[57]= new Array();
 choices[57][0] = "Un almac&eacute;n de datos.";
 choices[57][1] = "Un sistema OLAP.";
 choices[57][2] = "Un sistema de informaci&oacute;n a la direcci&oacute;n.";
 choices[57][3] = "Una base de datos.";
 answers[57] = choices[57][0];
 units[57] = "68";
 comments[57] = "Id Pregunta: 6132. TIC A 2009";


//  Id pregunta: 6226 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Qu&eacute; esquema de bases de datos incluye la descripci&oacute;n de todos los datos e interrelaciones entre &eacute;stos, as&iacute; como las restricciones de integridad y de confidencialidad";
 choices[58]= new Array();
 choices[58][0] = "Esquema interno";
 choices[58][1] = "Esquema conceptual";
 choices[58][2] = "Esquema externo";
 choices[58][3] = "Esquema f&iacute;sico";
 answers[58] = choices[58][1];
 units[58] = "57";
 comments[58] = "Id Pregunta: 6226. TICB-2009, bloque desarrollo";


//  Id pregunta: 6250 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Uno de los siguientes es un elemento de Java EE:";
 choices[59]= new Array();
 choices[59][0] = "Contenedor HTTP";
 choices[59][1] = "Servidor JDBC";
 choices[59][2] = "Contenedor Enterprise Java Beans";
 choices[59][3] = "Contenedor JDBC";
 answers[59] = choices[59][2];
 units[59] = "60";
 comments[59] = "Id Pregunta: 6250. TICB-2009, bloque desarrollo";


//  Id pregunta: 6327 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  El operador de agregaci&oacute;n AVG(nombre_atributo) sirve para:";
 choices[60]= new Array();
 choices[60][0] = "Calcular la media de cualquier atributo.";
 choices[60][1] = "Calcular la media de un atributo num&eacute;rico.";
 choices[60][2] = "Calcular la suma de los valores de un atributo.";
 choices[60][3] = "Contar el n&uacute;mero de ocurrencias de un atributo.";
 answers[60] = choices[60][1];
 units[60] = "58";
 comments[60] = "Id Pregunta: 6327. ";


//  Id pregunta: 6329 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Una actualizaci&oacute;n de los datos del Data Warehouse consistir&aacute; b&aacute;sicamente en:";
 choices[61]= new Array();
 choices[61][0] = "Modificar los valores de ciertos registros (tuplas de las relaciones subyacentes).";
 choices[61][1] = "Borrar los registros de tasa de utilizaci&oacute;n baja.";
 choices[61][2] = "Inserci&oacute;n de nuevos datos (que eventualmente diferir&aacute;n de otros ya existentes s&oacute;lo en la marca temporal).";
 choices[61][3] = "Un Data Warehouse no se actualiza pues contiene s&oacute;lo datos hist&oacute;ricos.";
 answers[61] = choices[61][2];
 units[61] = "68";
 comments[61] = "Id Pregunta: 6329. ";


//  Id pregunta: 6334 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Si el objetivo al plantear una consulta de data mining es obtener reglas de predicci&oacute;n orientadas a la toma de decisi&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Es indiferente que t&eacute;cnica se utilice.";
 choices[62][1] = "Se debe disponer de una buena herramienta de c&aacute;lculo de asociaciones.";
 choices[62][2] = "Se tiene que distinguir entre la variable que se va a  predecir y las variables que se uilizar&aacute;n para tal predicci&oacute;n.";
 choices[62][3] = "No hay en el estado actual de la tecnolog&iacute;a data mining ning&uacute;n enfoque adecuado para ese problema.";
 answers[62] = choices[62][2];
 units[62] = "68";
 comments[62] = "Id Pregunta: 6334. ";


//  Id pregunta: 6335 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En un data warehouse:";
 choices[63]= new Array();
 choices[63][0] = "Jam&aacute;s se debe normalizar ninguna tabla.";
 choices[63][1] = "Es normal que algunas tablas de dimensi&oacute;n se desnormalicen buscando mayor eficiencia.";
 choices[63][2] = "Las tablas se mantienen en la m&aacute;xima forma normal para no perder consistencia dado el alto n&uacute;mero de operaciones de modificaci&oacute;n que se realizan.";
 choices[63][3] = "Todas las respuestas son falsas.";
 answers[63] = choices[63][1];
 units[63] = "68";
 comments[63] = "Id Pregunta: 6335. ";


//  Id pregunta: 6336 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Indique la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "Las consultas de OLAP sin ser consultas de data mining permiten la realizaci&oacute;n de informes para soporte a la toma de decisiones.";
 choices[64][1] = "Todas las consultas de OLAP son tambi&eacute;n consultas de data mining.";
 choices[64][2] = "Las consultas de OLAP s&oacute;lo pueden realizarse si se ha implementado un hipercubo.";
 choices[64][3] = "Todas las respuestas son ciertas.";
 answers[64] = choices[64][0];
 units[64] = "68";
 comments[64] = "Id Pregunta: 6336. ";


//  Id pregunta: 7169 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Los sistemas OLTP se utilizan para:";
 choices[65]= new Array();
 choices[65][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[65][1] = "Generar informes para la direcci&oacute;n.";
 choices[65][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[65][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[65] = choices[65][2];
 units[65] = "68";
 comments[65] = "Id Pregunta: 7169. Examen TIC B 2009";


//  Id pregunta: 7320 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Cu&aacute;l de las siguientes afirmaciones sobre Visual Studio .NET no es cierta:";
 choices[66]= new Array();
 choices[66][0] = "Es un IDE (Entorno Integrado de Desarrollo) desarrollado por Microsoft";
 choices[66][1] = "Permite la programaci&oacute;n WYSIWYG (What You See Is What You Get)";
 choices[66][2] = "Los programas desarrollados con Visual Studio .NET &uacute;nicamente pueden usar SQL Server para el almacenamiento de datos";
 choices[66][3] = "Las versiones Express Editions se ofrecen gratuitamente";
 answers[66] = choices[66][2];
 units[66] = "59";
 comments[66] = "Id Pregunta: 7320. NULL";


//  Id pregunta: 8273 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En general, al pasar una relaci&oacute;n 1:N con atributos propios, del modelo entidad - relaci&oacute;n al modelo relacional:";
 choices[67]= new Array();
 choices[67][0] = "Se crea una nueva tabla cuya clave principal es el atributo de la relaci&oacute;n.";
 choices[67][1] = "Se crea una nueva tabla cuya clave es la concatenaci&oacute;n de las claves de las dos entidades y tiene un campo adicional para el atributo de la relaci&oacute;n.";
 choices[67][2] = "La clave de la entidad que participa con cardinalidad N y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad 1.";
 choices[67][3] = "La clave de la entidad que participa con cardinalidad 1 y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad N.";
 answers[67] = choices[67][3];
 units[67] = "58";
 comments[67] = "Id Pregunta: 8273. Examen TIC A1 2010";


//  Id pregunta: 8351 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[68]= new Array();
 choices[68][0] = "Unity Application Block,";
 choices[68][1] = "Logging Application Block.";
 choices[68][2] = "Ajax Control Toolkit";
 choices[68][3] = "Cached XML Data Mapper";
 answers[68] = choices[68][0];
 units[68] = "59,115";
 comments[68] = "Id Pregunta: 8351. Examen TIC A2 2010";


//  Id pregunta: 8417 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En el contexto del PL-SQL, &iquest;cu&aacute;l es el nombre que se da a los segmentos de memoria utilizados para realizar operaciones con los registros devueltos tras ejecutar una sentencia SELECT? ";
 choices[69]= new Array();
 choices[69][0] = "Row Trigger ";
 choices[69][1] = "Statement Trigger. ";
 choices[69][2] = "Cursor";
 choices[69][3] = "Puntero";
 answers[69] = choices[69][2];
 units[69] = "58";
 comments[69] = "Id Pregunta: 8417. Examen TIC A2 2010";


//  Id pregunta: 8617 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[70]= new Array();
 choices[70][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[70][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[70][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[70][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[70] = choices[70][0];
 units[70] = "57,58";
 comments[70] = "Id Pregunta: 8617. Examen TIC A2 2010 interna";


//  Id pregunta: 8618 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[71]= new Array();
 choices[71][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[71][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[71][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[71][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[71] = choices[71][2];
 units[71] = "57,58";
 comments[71] = "Id Pregunta: 8618. Examen TIC A2 2010 interna";


//  Id pregunta: 8630 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[72]= new Array();
 choices[72][0] = "Regla de la no subversi&oacute;n.";
 choices[72][1] = "Regla de la no concurrencia.";
 choices[72][2] = "Regla de la restricci&oacute;n.";
 choices[72][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[72] = choices[72][0];
 units[72] = "57, 58";
 comments[72] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8639 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[73]= new Array();
 choices[73][0] = "(A, B, C), (A, B, D).";
 choices[73][1] = "(A, B, C), (B, D).";
 choices[73][2] = "(A, B, C),  (A, D).";
 choices[73][3] = "Ya est&aacute; en 2FN.";
 answers[73] = choices[73][1];
 units[73] = "57, 58";
 comments[73] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8644 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[74]= new Array();
 choices[74][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[74][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[74][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[74][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[74] = choices[74][3];
 units[74] = "57 ,58";
 comments[74] = "Id Pregunta: 8644. Examen TIC A2 2010 interna";


//  Id pregunta: 8785 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  OLAP proporciona mayor velocidad de procesamiento en la sentencia SQL";
 choices[75]= new Array();
 choices[75][0] = "INSERT";
 choices[75][1] = "UPDATE";
 choices[75][2] = "DELETE";
 choices[75][3] = "SELECT";
 answers[75] = choices[75][3];
 units[75] = "57, 58";
 comments[75] = "Id Pregunta: 8785. Examen UPM A2 2011";


//  Id pregunta: 8809 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[76]= new Array();
 choices[76][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[76][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[76][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[76][3] = "Todas las anteriores son falsas";
 answers[76] = choices[76][0];
 units[76] = "59, 115";
 comments[76] = "Id Pregunta: 8809. Examen UPM A2 2011";


//  Id pregunta: 8815 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Los procesos de un Data Warehouse son:";
 choices[77]= new Array();
 choices[77][0] = "Elaboraci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[77][1] = "Extracci&oacute;n, elaboraci&oacute;n, carga y explotaci&oacute;n.";
 choices[77][2] = "Extracci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[77][3] = "Extracci&oacute;n, elaboraci&oacute;n, carga y an&aacute;lisis.";
 answers[77] = choices[77][1];
 units[77] = "68";
 comments[77] = "Id Pregunta: 8815. Examen TIC B 2007 y examen UPM A2 2011";


//  Id pregunta: 8855 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[78]= new Array();
 choices[78][0] = "Type 1 JDBC Driver";
 choices[78][1] = "Type 2 JDBC Driver";
 choices[78][2] = "Type 3 JDBC Driver";
 choices[78][3] = "Type 4 JDBC Driver";
 answers[78] = choices[78][3];
 units[78] = "58, 60";
 comments[78] = "Id Pregunta: 8855. Analista Ayto. Madrid 2010";


//  Id pregunta: 9610 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[79]= new Array();
 choices[79][0] = "SQL 2000";
 choices[79][1] = "SQL-2003";
 choices[79][2] = "SQL-2006";
 choices[79][3] = "SQL-2008";
 answers[79] = choices[79][2];
 units[79] = "58";
 comments[79] = "Id Pregunta: 9610. NULL";


//  Id pregunta: 9612 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es una vista materializada?";
 choices[80]= new Array();
 choices[80][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[80][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[80][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[80][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[80] = choices[80][1];
 units[80] = "58";
 comments[80] = "Id Pregunta: 9612. NULL";


//  Id pregunta: 9692 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Un problema del modelo dimensional es:";
 choices[81]= new Array();
 choices[81][0] = "Data Expression.";
 choices[81][1] = "Data Complexity.";
 choices[81][2] = "Data Sparsity.";
 choices[81][3] = "Data Compression.";
 answers[81] = choices[81][2];
 units[81] = "68";
 comments[81] = "Id Pregunta: 9692. ";


//  Id pregunta: 9719 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[82]= new Array();
 choices[82][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[82][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[82][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[82][3] = "las opciones a, b y c son ciertas.";
 answers[82] = choices[82][3];
 units[82] = "58";
 comments[82] = "Id Pregunta: 9719. Examen TIC-A1 2013";


//  Id pregunta: 9918 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[83]= new Array();
 choices[83][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[83][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[83][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[83][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[83] = choices[83][1];
 units[83] = "86, 58";
 comments[83] = "Id Pregunta: 9918. TIC A2, Examen 2013";


//  Id pregunta: 9944 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[84]= new Array();
 choices[84][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta. ";
 choices[84][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[84][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public. ";
 choices[84][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto. ";
 answers[84] = choices[84][0];
 units[84] = "82, 60";
 comments[84] = "Id Pregunta: 9944. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9963 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[85]= new Array();
 choices[85][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[85][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[85][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[85][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[85] = choices[85][3];
 units[85] = "68,71";
 comments[85] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10012 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En un entorno de base de datos relacional, si se puede afirmar que los valores de una clave ajena coinciden con los valores de la clave primaria a la que hace referencia o son nulos  entonces se est&aacute; cumpliendo:";
 choices[86]= new Array();
 choices[86][0] = "Regla de los nulos.";
 choices[86][1] = "Regla de integridad de la entidad.";
 choices[86][2] = "Regla de la integridad referencial.";
 choices[86][3] = "Regla de los valores ajenos.";
 answers[86] = choices[86][2];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10012. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10186 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[87]= new Array();
 choices[87][0] = "Externo";
 choices[87][1] = "L&oacute;gico";
 choices[87][2] = "Interno";
 choices[87][3] = "Conceptual";
 answers[87] = choices[87][3];
 units[87] = "57,80";
 comments[87] = "Id Pregunta: 10186. ";


//  Id pregunta: 10187 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[88]= new Array();
 choices[88][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[88][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[88][2] = "a) y b) son verdaderas";
 choices[88][3] = "a) y b) son falsas";
 answers[88] = choices[88][3];
 units[88] = "57";
 comments[88] = "Id Pregunta: 10187. ";


//  Id pregunta: 10219 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Las variables declaradas en un interface deben ser:";
 choices[89]= new Array();
 choices[89][0] = "public, static y final";
 choices[89][1] = "private static y final";
 choices[89][2] = "S&oacute;lo protected";
 choices[89][3] = "En un interface no se deben incluir variables";
 answers[89] = choices[89][0];
 units[89] = "60";
 comments[89] = "Id Pregunta: 10219. NULL";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Teniendo las siguientes sentencias, el resultado ser&aacute;:byte b1 = 126, b2 = 1;byte b3 = b1 + b2;System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[90]= new Array();
 choices[90][0] = "127";
 choices[90][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[90][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[90][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[90] = choices[90][2];
 units[90] = "60";
 comments[90] = "Id Pregunta: 10223. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Para que la siguiente sentencia compile:float a = 100.21;I)&nbsp; Necesita hacer un casting a float: float a = (float) 100.21;II)&nbsp; Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;III)&nbsp; Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[91]= new Array();
 choices[91][0] = "Compila bien sin cambios";
 choices[91][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[91][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[91][3] = "I), II) y III) son v&aacute;lidas";
 answers[91] = choices[91][3];
 units[91] = "60";
 comments[91] = "Id Pregunta: 10224. NULL";


//  Id pregunta: 10240 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[92]= new Array();
 choices[92][0] = "next()";
 choices[92][1] = "nextValue()";
 choices[92][2] = "nextToken()";
 choices[92][3] = "Ninguno de los anteriores";
 answers[92] = choices[92][2];
 units[92] = "60";
 comments[92] = "Id Pregunta: 10240. NULL";


//  Id pregunta: 10282 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[93]= new Array();
 choices[93][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[93][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[93][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[93][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[93] = choices[93][2];
 units[93] = "58";
 comments[93] = "Id Pregunta: 10282. TIC A2, libre, examen 2013";


//  Id pregunta: 10850 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[94]= new Array();
 choices[94][0] = "EntityConnection.";
 choices[94][1] = "SqlConnection.";
 choices[94][2] = "SqlCeConnection.";
 choices[94][3] = "OleOdbcConnection.";
 answers[94] = choices[94][3];
 units[94] = "59, 115";
 comments[94] = "Id Pregunta: 10850. Examen GSI 2014";


//  Id pregunta: 10862 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la definici&oacute;n de DataWarehouse de William Inmon, se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una caracter&iacute;stica de este tipo de sistemas:";
 choices[95]= new Array();
 choices[95][0] = "Integrado: los datos deben integrarse en una estructura consistente.";
 choices[95][1] = "Tem&aacute;tico: los datos se organizan por temas.";
 choices[95][2] = "Hist&oacute;rico: una variable puede tomar distintos valores en el tiempo.";
 choices[95][3] = "Vol&aacute;til: los datos no son permanentes en el sistema.";
 answers[95] = choices[95][3];
 units[95] = "68, 71";
 comments[95] = "Id Pregunta: 10862. Examen GSI 2014";


//  Id pregunta: 10863 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[96]= new Array();
 choices[96][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[96][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[96][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[96][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[96] = choices[96][3];
 units[96] = "68, 71";
 comments[96] = "Id Pregunta: 10863. Examen GSI 2014";


//  Id pregunta: 11037 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; versi&oacute;n de SQL incorpor&oacute; las reglas de integridad referencial?";
 choices[97]= new Array();
 choices[97][0] = "SQL-86";
 choices[97][1] = "SQL-89";
 choices[97][2] = "SQL-92";
 choices[97][3] = "SQL-1999";
 answers[97] = choices[97][1];
 units[97] = "58";
 comments[97] = "Id Pregunta: 11037. ";


//  Id pregunta: 11138 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[98]= new Array();
 choices[98][0] = "Native-Api Driver";
 choices[98][1] = "Network Protocol Driver";
 choices[98][2] = "Native Protocol Driver";
 choices[98][3] = "JDBC-OBDC Bridge";
 answers[98] = choices[98][1];
 units[98] = "58";
 comments[98] = "Id Pregunta: 11138. ";


//  Id pregunta: 11214 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Respecto a los componentes de Java Platform SE cual de las siguientes afirmaciones es falsa:";
 choices[99]= new Array();
 choices[99][0] = "El JDK contiene todos los niveles, incluyendo JRE y adem&aacute;s herramientas como compiladores y depuradores de errores (debuggers).";
 choices[99][1] = "JRE no incluye la JVM.";
 choices[99][2] = "Las Java SE APIs est&aacute;n basadas en especificaciones JSR (Java Specification Request) las cuales son aprobadas dentro del Java CommunityProcess (JCP).";
 choices[99][3] = "La JVM es propiedad de Oracle.";
 answers[99] = choices[99][1];
 units[99] = "60";
 comments[99] = "Id Pregunta: 11214. ";


