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

//  Id pregunta: 697 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[0]= new Array();
 choices[0][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los &quot;threads&quot;";
 choices[0][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[0][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[0][3] = "La variable &quot;this&quot; de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[0] = choices[0][1];
 units[0] = "60";
 comments[0] = "Id Pregunta: 697. JCED - Preparatic XVII";


//  Id pregunta: 716 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En el lenguaje Java, la misi&oacute;n del recolector de basura (garbage collector) es:";
 choices[1]= new Array();
 choices[1][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[1][1] = "En los que en otros entornos de programcaci&oacute;n se llama depurador o debugger";
 choices[1][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[1][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[1] = choices[1][0];
 units[1] = "60";
 comments[1] = "Id Pregunta: 716. Examen TIC MAP B 2004";


//  Id pregunta: 720 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[2]= new Array();
 choices[2][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[2][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[2][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[2][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[2] = choices[2][1];
 units[2] = "58";
 comments[2] = "Id Pregunta: 720. Examen TIC MAP B 2004";


//  Id pregunta: 722 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[3]= new Array();
 choices[3][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[3][1] = "Utiliza modelos de datos multidimensionales.";
 choices[3][2] = "Proporciona la velocidad y flexibilidad necesarias en tiempo real.";
 choices[3][3] = "Est&aacute; basado en modelos de datos jer&aacute;rquicos.";
 answers[3] = choices[3][3];
 units[3] = "68";
 comments[3] = "Id Pregunta: 722. Examen TIC MAP B 2004";


//  Id pregunta: 725 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[4]= new Array();
 choices[4][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[4][1] = "De clase y de objeto";
 choices[4][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[4][3] = "De flujo de control y de flujo de datos";
 answers[4] = choices[4][0];
 units[4] = "57";
 comments[4] = "Id Pregunta: 725. Examen TIC MAP B 2004";


//  Id pregunta: 726 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  En el estudio te&oacute;rico de las Estructuras de Datos, el conocido como &quot;m&eacute;todo de la baraja&quot; responde a un algoritmo de:";
 choices[5]= new Array();
 choices[5][0] = "B&uacute;squeda";
 choices[5][1] = "Ordenaci&oacute;n";
 choices[5][2] = "Iteraci&oacute;n";
 choices[5][3] = "Recursi&oacute;n";
 answers[5] = choices[5][1];
 units[5] = "57";
 comments[5] = "Id Pregunta: 726. Examen TIC MAP B 2004";


//  Id pregunta: 795 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; son los midlets?:";
 choices[6]= new Array();
 choices[6][0] = "Son aplicaciones Java para la capa de middleware";
 choices[6][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[6][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[6][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[6] = choices[6][3];
 units[6] = "60";
 comments[6] = "Id Pregunta: 795. NULL";


//  Id pregunta: 821 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Un elemento clave en la integraci&oacute;n de los sistemas de informaci&oacute;n, que permite hacer relaciones y operaciones interactivas sobre todos los datos de la organizaci&oacute;n para efectuar labores de planificaci&oacute;n, control y operaci&oacute;n son los llamados:";
 choices[7]= new Array();
 choices[7][0] = "Optical Character Readers (OCR)";
 choices[7][1] = "Diccionarios de Recursos de Informaci&oacute;n (DRI)";
 choices[7][2] = "Servidores de red local";
 choices[7][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[7] = choices[7][1];
 units[7] = "57";
 comments[7] = "Id Pregunta: 821. ";


//  Id pregunta: 842 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre data-warehouse es verdadera?";
 choices[8]= new Array();
 choices[8][0] = "Los datos se agregan en conjuntos.";
 choices[8][1] = "La actualizaci&oacute;n de los datos se hace en tiempo real.";
 choices[8][2] = "Est&aacute;n orientados a procesos.";
 choices[8][3] = "&Uacute;nicamente se puede realizar data-mining sobre un sistema data-warehouse.";
 answers[8] = choices[8][0];
 units[8] = "68";
 comments[8] = "Id Pregunta: 842. ";


//  Id pregunta: 867 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes modelos de miner&iacute;a de datos escoger&iacute;a para detectar un posible fraude?";
 choices[9]= new Array();
 choices[9][0] = "El modelo de Verificaci&oacute;n.";
 choices[9][1] = "El modelo de Descubrimiento.";
 choices[9][2] = "El modelo de Simulaci&oacute;n.";
 choices[9][3] = "El modelo Distribuido.";
 answers[9] = choices[9][1];
 units[9] = "68";
 comments[9] = "Id Pregunta: 867. ";


//  Id pregunta: 871 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes principios no forman parte de los doce que Codd estableci&oacute; en 1985 para que una base de datos pueda considerarse relacional si se satisfacen al menos seis de ellos?:";
 choices[10]= new Array();
 choices[10][0] = "Regla de la no subversi&oacute;n";
 choices[10][1] = "Independencia l&oacute;gica de los datos";
 choices[10][2] = "Actualizaci&oacute;n de vistas";
 choices[10][3] = "Consistencia de los datos";
 answers[10] = choices[10][3];
 units[10] = "58";
 comments[10] = "Id Pregunta: 871. ";


//  Id pregunta: 924 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es JDBC?:";
 choices[11]= new Array();
 choices[11][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[11][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[11][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[11][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[11] = choices[11][1];
 units[11] = "60";
 comments[11] = "Id Pregunta: 924. NULL";


//  Id pregunta: 927 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; es la miner&iacute;a de datos?";
 choices[12]= new Array();
 choices[12][0] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda manual de patrones y relaciones.";
 choices[12][1] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda automatizada de patrones y relaciones.";
 choices[12][2] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda aleatoria de patrones y relaciones.";
 choices[12][3] = "Nada de lo anterior es correcto.";
 answers[12] = choices[12][1];
 units[12] = "68";
 comments[12] = "Id Pregunta: 927. ";


//  Id pregunta: 1011 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El data warehousing consiste b&aacute;sicamente en:";
 choices[13]= new Array();
 choices[13][0] = "En realizar un BPR (Business Processing Re-engineering) mediante el an&aacute;lisis automatizado de los datos corporativos.";
 choices[13][1] = "En automatizar los procesos de almacenamiento de datos de toda la corporaci&oacute;n. El sistema se encarga de situar los datos, de manera transparente, en los medios f&iacute;sicos m&aacute;s adecuados (discos, cintas, etc&eacute;tera) y de gestionar las copias de salvaguarda.";
 choices[13][2] = "En generar din&aacute;mica y autom&aacute;ticamente, a partir de datos extra&iacute;dos de todas las B.D. operacionales del sistema, otra base de datos donde se va almacenando informaci&oacute;n integrada, resumida, consolidada, multidimensional y significativa.";
 choices[13][3] = "En independizar los datos de la corporaci&oacute;n de su localizaci&oacute;n f&iacute;sica, creando un sistema de informaci&oacute;n virtual que integra todos los datos de la corporaci&oacute;n, incluso si est&aacute;n repartidos en diferentes sedes.";
 answers[13] = choices[13][2];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1011. ";


//  Id pregunta: 1037 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El modelo de referencia ANSI/SPARC para la estandarizaci&oacute;n de los SGBD:";
 choices[14]= new Array();
 choices[14][0] = "El n&uacute;cleo de la arquitectura lo constituye el diccionario de datos";
 choices[14][1] = "Los metadatos no forman parte del diccionario";
 choices[14][2] = "Indica la forma de instrumentar las interacciones del SGBD";
 choices[14][3] = "La administraci&oacute;n de la empresa dise&ntilde;a los esquemas externos";
 answers[14] = choices[14][0];
 units[14] = "57";
 comments[14] = "Id Pregunta: 1037. ";


//  Id pregunta: 1057 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El software para la productividad en grupos de trabajo incluye:";
 choices[15]= new Array();
 choices[15][0] = "Gesti&oacute;n de agenda compartida";
 choices[15][1] = "Teleconversaciones m&uacute;ltiples";
 choices[15][2] = "Correo electr&oacute;nico";
 choices[15][3] = "Todas las respuestas anteriores son correctas";
 answers[15] = choices[15][3];
 units[15] = "71";
 comments[15] = "Id Pregunta: 1057. ";


//  Id pregunta: 1084 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En el lenguaje SQL una 'Transacci&oacute;n' es una secuencia de operaciones que constituye una unidad de recuperaci&oacute;n, y que puede finalizarse con una sentencia:";
 choices[16]= new Array();
 choices[16][0] = "SELECT";
 choices[16][1] = "END";
 choices[16][2] = "COMMIT";
 choices[16][3] = "CLOSE";
 answers[16] = choices[16][2];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1084. ";


//  Id pregunta: 1088 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En el modelo de referencia ANSI/SPARC, el nivel conceptual:";
 choices[17]= new Array();
 choices[17][0] = "Se obtiene conceptualizando los datos f&iacute;sicos";
 choices[17][1] = "Es una representaci&oacute;n abstracta de la base de datos, com&uacute;n para todos los usuarios";
 choices[17][2] = "Conceptualiza y abstrae las vistas del nivel externo";
 choices[17][3] = "Es una representaci&oacute;n abstracta de la base de datos, diferente para cada usuario";
 answers[17] = choices[17][1];
 units[17] = "57";
 comments[17] = "Id Pregunta: 1088. ";


//  Id pregunta: 1089 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el Modelo de Referencia para la estandarizaci&oacute;n de los Sistemas de Gesti&oacute;n de Bases de Datos, basado en la arquitectura de tres niveles de ANSI, las funciones de insertar y borrar se realizan mediante:";
 choices[18]= new Array();
 choices[18][0] = "El esquema interno";
 choices[18][1] = "El diccionario central de datos";
 choices[18][2] = "El lenguaje de definici&oacute;n de datos";
 choices[18][3] = "El lenguaje de manipulaci&oacute;n de datos";
 answers[18] = choices[18][3];
 units[18] = "57";
 comments[18] = "Id Pregunta: 1089. ";


//  Id pregunta: 1100 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[19]= new Array();
 choices[19][0] = "Superset o superconjunto";
 choices[19][1] = "Package o paquete";
 choices[19][2] = "Superclass o Superclase";
 choices[19][3] = "Colection o Colecci&oacute;n";
 answers[19] = choices[19][1];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1100. JCED - Preparatic XVII";


//  Id pregunta: 1102 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En Java:";
 choices[20]= new Array();
 choices[20][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[20][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[20][2] = "Los programas son aplicaciones web de servidor";
 choices[20][3] = "Todas las anteriores respuestas son ciertas";
 answers[20] = choices[20][3];
 units[20] = "60";
 comments[20] = "Id Pregunta: 1102. NULL";


//  Id pregunta: 1107 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En la extracci&oacute;n del conocimiento en la miner&iacute;a de datos, &iquest;qu&eacute; ejemplo de los siguientes no se corresponde con aprendizaje supervisado?";
 choices[21]= new Array();
 choices[21][0] = "Sistemas de clasificaci&oacute;n.";
 choices[21][1] = "Patrones de comportamiento.";
 choices[21][2] = "Sistemas de predicci&oacute;n.";
 choices[21][3] = "Modelado y control.";
 answers[21] = choices[21][1];
 units[21] = "68";
 comments[21] = "Id Pregunta: 1107. ";


//  Id pregunta: 1130 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En relaci&oacute;n con la teor&iacute;a de la normalizaci&oacute;n, que nos permite asegurar que un esquema relacional cumple unas ciertas propiedades, indicar cu&aacute;l de las siguientes corresponde a la definici&oacute;n de segunda forma normal:";
 choices[22]= new Array();
 choices[22][0] = "Si y s&oacute;lo si todo determinante es una clave candidata";
 choices[22][1] = "Si no existe ning&uacute;n atributo no principal que dependa transitivamente de alguna de las claves de relaci&oacute;n";
 choices[22][2] = "Cada atributo no principal tiene dependencia funcional completa respecto de cada una de las claves";
 choices[22][3] = "Si no existen grupos repetitivos";
 answers[22] = choices[22][2];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1130. ";


//  Id pregunta: 1165 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[23]= new Array();
 choices[23][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[23][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[23][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[23][3] = "Todas las anteriores son ciertas";
 answers[23] = choices[23][1];
 units[23] = "60";
 comments[23] = "Id Pregunta: 1165. JCED - Preparatic XVII";


//  Id pregunta: 1195 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indique una caracter&iacute;stica falsa de Java:";
 choices[24]= new Array();
 choices[24][0] = "Es interpretado y portable a distintas plataformas";
 choices[24][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[24][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[24][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[24] = choices[24][3];
 units[24] = "60";
 comments[24] = "Id Pregunta: 1195. JCED - Preparatic XVII";


//  Id pregunta: 1211 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La cla&uacute;sula GROUP BY se utiliza para:";
 choices[25]= new Array();
 choices[25][0] = "Agrupar varios atributos para formar una clave";
 choices[25][1] = "Formar una vista con elementos de varias tablas";
 choices[25][2] = "Agrupar usuarios para asignar privilegio";
 choices[25][3] = "Obtener en una sentencia SELECT grupos de tuplas en lugar de tuplas individuales";
 answers[25] = choices[25][3];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1211. ";


//  Id pregunta: 1220 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La estructura secuencial encadenada:";
 choices[26]= new Array();
 choices[26][0] = "Es una estructura de f&aacute;cil gesti&oacute;n";
 choices[26][1] = "La inserciones de datos se autogestionan sin variar la estructura l&oacute;gica inicial";
 choices[26][2] = "Es el elemento precursor de la estructura relacional de las bases de datos";
 choices[26][3] = "La idea de apuntadores ha sido utilizada en los sistemas jer&aacute;rquicos y en red";
 answers[26] = choices[26][3];
 units[26] = "57";
 comments[26] = "Id Pregunta: 1220. ";


//  Id pregunta: 1255 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las bases de datos tipo ORACLE o Mysql est&aacute;n estructuradas seg&uacute;n un modelo:";
 choices[27]= new Array();
 choices[27][0] = "Sem&aacute;ntico";
 choices[27][1] = "Conceptual";
 choices[27][2] = "Relacional";
 choices[27][3] = "Jer&aacute;rquico";
 answers[27] = choices[27][2];
 units[27] = "58";
 comments[27] = "Id Pregunta: 1255. ";


//  Id pregunta: 1422 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[28]= new Array();
 choices[28][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[28][1] = "No contiene claves dependientes de otra extranjera";
 choices[28][2] = "La clave extranjera est&aacute; normalizada";
 choices[28][3] = "No contiene grupos repetitivos";
 answers[28] = choices[28][3];
 units[28] = "58";
 comments[28] = "Id Pregunta: 1422. ";


//  Id pregunta: 1485 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[29]= new Array();
 choices[29][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[29][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[29][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[29][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[29] = choices[29][2];
 units[29] = "59";
 comments[29] = "Id Pregunta: 1485. JCED - Preparatic XVII";


//  Id pregunta: 1520 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[30]= new Array();
 choices[30][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[30][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[30][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[30][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[30] = choices[30][3];
 units[30] = "58";
 comments[30] = "Id Pregunta: 1520. Junta Andaluc&iacute;a";


//  Id pregunta: 1574 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es JDBC?:";
 choices[31]= new Array();
 choices[31][0] = " Un modelo de objetos ActiveX.";
 choices[31][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[31][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[31][3] = " Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[31] = choices[31][3];
 units[31] = "58";
 comments[31] = "Id Pregunta: 1574. Junta Andaluc&iacute;a";


//  Id pregunta: 1673 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Qu&eacute; se conoce como grado de una relaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Un conjunto de valores";
 choices[32][1] = "El n&uacute;mero de tuplas";
 choices[32][2] = "El n&uacute;mero de atributos";
 choices[32][3] = "El n&uacute;mero de vistas";
 answers[32] = choices[32][2];
 units[32] = "58";
 comments[32] = "Id Pregunta: 1673. ";


//  Id pregunta: 1747 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Cu&aacute;l de las siguientes &oacute;rdenes, define el Lenguaje de Manipulaci&oacute;n de Datos (DML) de un SGBD";
 choices[33]= new Array();
 choices[33][0] = "create table";
 choices[33][1] = "revoke";
 choices[33][2] = "insert";
 choices[33][3] = "todas las anteriores";
 answers[33] = choices[33][2];
 units[33] = "57";
 comments[33] = "Id Pregunta: 1747. ";


//  Id pregunta: 1751 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Se&ntilde;alar el enunciado cierto, referente a la sem&aacute;ntica de las relaciones representadas en el model E/R";
 choices[34]= new Array();
 choices[34][0] = "El tipo de la relaci&oacute;n es el n&uacute;mero de entidades sobre las que se realiza la asociaci&oacute;n";
 choices[34][1] = "El grado se corresponde con el n&uacute;mero m&aacute;ximo de ocurrencias de una entidad asociado a una ocurrencia de otra o de la misma entidad a trav&eacute;s de una relaci&oacute;n";
 choices[34][2] = "La cardinalidad de una entidad se define como el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias que pueden estar relacionadas con ocurrencias de otra entidad";
 choices[34][3] = "Todos los enunciados anteriores son ciertos";
 answers[34] = choices[34][2];
 units[34] = "58";
 comments[34] = "Id Pregunta: 1751. ";


//  Id pregunta: 1763 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  El AWT de Java es";
 choices[35]= new Array();
 choices[35][0] = "Una interfaz gr&aacute;fica de usuario (GUI) plenamente independiente del SO";
 choices[35][1] = "Driver para conectarse a una base de datos";
 choices[35][2] = "Interfaz gr&aacute;fica pesada y dependiente del SO";
 choices[35][3] = "Paquete de desarrollo Java";
 answers[35] = choices[35][2];
 units[35] = "60";
 comments[35] = "Id Pregunta: 1763. NULL";


//  Id pregunta: 1772 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es un fichero JAR?";
 choices[36]= new Array();
 choices[36][0] = "Es el fichero que proporciona el entorno de ejecuci&oacute;n de java,  as&iacute; como una API gr&aacute;fica para el desarrollo de aplicaciones y applets.";
 choices[36][1] = "Es el fichero que empaqueta el entorno de ejecuci&oacute;n de java.";
 choices[36][2] = "Es el fichero que contiene el c&oacute;digo intermedio de java.";
 choices[36][3] = "Es un fichero en el que se re&uacute;nen las clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n de un applet o una aplicaci&oacute;n Java.";
 answers[36] = choices[36][3];
 units[36] = "60";
 comments[36] = "Id Pregunta: 1772. NULL";


//  Id pregunta: 1915 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[37]= new Array();
 choices[37][0] = "Una extensi&oacute;n de Swing";
 choices[37][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[37][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[37][3] = "Una familia de fuentes de caracteres";
 answers[37] = choices[37][1];
 units[37] = "60";
 comments[37] = "Id Pregunta: 1915. NULL";


//  Id pregunta: 1925 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n &iquest;Qu&eacute; se entiende como grado de una tabla?";
 choices[38]= new Array();
 choices[38][0] = "El n&uacute;mero de filas de la tabla";
 choices[38][1] = "El n&uacute;mero de columnas de la tabla";
 choices[38][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n";
 choices[38][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas";
 answers[38] = choices[38][1];
 units[38] = "58";
 comments[38] = "Id Pregunta: 1925. NULL";


//  Id pregunta: 2512 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Una relaci&oacute;n que est&eacute; en 3FN:";
 choices[39]= new Array();
 choices[39][0] = "No tiene por qu&eacute; estar en 1FN";
 choices[39][1] = "Tiene dependencias funcionales transitivas";
 choices[39][2] = "Tiene atributos multivaluados";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][3];
 units[39] = "58";
 comments[39] = "Id Pregunta: 2512. NULL";


//  Id pregunta: 2742 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[40]= new Array();
 choices[40][0] = "No tiene grupos repetitivos";
 choices[40][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[40][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[40][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[40] = choices[40][1];
 units[40] = "58";
 comments[40] = "Id Pregunta: 2742. ";


//  Id pregunta: 4398 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[41]= new Array();
 choices[41][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica.";
 choices[41][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[41][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[41][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[41] = choices[41][1];
 units[41] = "58";
 comments[41] = "Id Pregunta: 4398. ";


//  Id pregunta: 4584 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Cual de las siguientes opciones NO es un contenedor para Ia arquitectura J2EE";
 choices[42]= new Array();
 choices[42][0] = "contenedor web";
 choices[42][1] = "contenedor EJB";
 choices[42][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[42][3] = "contenedor de base de datos";
 answers[42] = choices[42][3];
 units[42] = "60";
 comments[42] = "Id Pregunta: 4584. NULL";


//  Id pregunta: 4683 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[43]= new Array();
 choices[43][0] = "Esquema externo";
 choices[43][1] = "Esquema legal";
 choices[43][2] = "Esquema conceptual";
 choices[43][3] = "Esquema interno";
 answers[43] = choices[43][1];
 units[43] = "57";
 comments[43] = "Id Pregunta: 4683. Examen 2006 JCYL";


//  Id pregunta: 4811 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[44]= new Array();
 choices[44][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[44][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[44][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[44][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[44] = choices[44][0];
 units[44] = "68";
 comments[44] = "Id Pregunta: 4811. ";


//  Id pregunta: 4837 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos,&iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint)";
 choices[45][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones";
 choices[45][2] = "Rollback de la transacci&oacute;n";
 choices[45][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones";
 answers[45] = choices[45][1];
 units[45] = "58";
 comments[45] = "Id Pregunta: 4837. ";


//  Id pregunta: 4846 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[46]= new Array();
 choices[46][0] = "WAR (Web Archive)";
 choices[46][1] = "EAR (Enterprise Archive)";
 choices[46][2] = "BAR (Bean Archive)";
 choices[46][3] = "JAR (Java Archive)";
 answers[46] = choices[46][2];
 units[46] = "60";
 comments[46] = "Id Pregunta: 4846. NULL";


//  Id pregunta: 5051 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java 2?:";
 choices[47]= new Array();
 choices[47][0] = "Enteros";
 choices[47][1] = "Booleanos";
 choices[47][2] = "Cadenas";
 choices[47][3] = "Tensores";
 answers[47] = choices[47][3];
 units[47] = "60";
 comments[47] = "Id Pregunta: 5051. Examen TIC A 2007";


//  Id pregunta: 5447 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Por qu&eacute; el recorrido completo de tablas de gran tama&ntilde;o es un asunto cr&iacute;tico en la definici&oacute;n de sentencias SQL?";
 choices[48]= new Array();
 choices[48][0] = "Porque es indicativo de una futura ejecuci&oacute;n &oacute;ptima";
 choices[48][1] = "Porque es muy probable que se requiera adaptaciones para el uso de &iacute;ndices";
 choices[48][2] = "Porque el recorrido completo de tablas deber&iacute;a ser normalizado desde el dise&ntilde;o de la base de datos";
 choices[48][3] = "Porque el recorrido completo de una tabla nunca es &oacute;ptimo";
 answers[48] = choices[48][1];
 units[48] = "58";
 comments[48] = "Id Pregunta: 5447. Castilla y Le&oacute;n";


//  Id pregunta: 5488 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Un procedimiento almacenado:";
 choices[49]= new Array();
 choices[49][0] = "Es una tabla SQL especial que permite ejecutar procesos batch";
 choices[49][1] = "S&oacute;lo puede ser  usado por el DBA";
 choices[49][2] = "Se define mediante la palabra clave CREATE TRIGGER";
 choices[49][3] = "Es un conjunto de comandos SQL que pueden almacenarse en el servidor";
 answers[49] = choices[49][3];
 units[49] = "58";
 comments[49] = "Id Pregunta: 5488. ";


//  Id pregunta: 5778 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[50]= new Array();
 choices[50][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[50][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[50][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[50][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[50] = choices[50][1];
 units[50] = "59";
 comments[50] = "Id Pregunta: 5778. MAP 2008 A1";


//  Id pregunta: 5846 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Cual de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[51]= new Array();
 choices[51][0] = "BPML";
 choices[51][1] = "BPEL";
 choices[51][2] = "BPMN";
 choices[51][3] = "XPDL";
 answers[51] = choices[51][3];
 units[51] = "71";
 comments[51] = "Id Pregunta: 5846. MAP 2008 A1";


//  Id pregunta: 5926 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &quot;applets de Java&quot;?:";
 choices[52]= new Array();
 choices[52][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente";
 choices[52][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &quot;Sandbox&quot;";
 choices[52][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnologia &quot;authenticode&quot;";
 choices[52][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas";
 answers[52] = choices[52][1];
 units[52] = "60";
 comments[52] = "Id Pregunta: 5926. MAP 2008 A1";


//  Id pregunta: 5974 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[53]= new Array();
 choices[53][0] = "{a,b,c}.";
 choices[53][1] = "{ax,az,bz,cx}.";
 choices[53][2] = "{ay,by,cy}.";
 choices[53][3] = "{a}.";
 answers[53] = choices[53][3];
 units[53] = "58";
 comments[53] = "Id Pregunta: 5974. TIC A 2009";


//  Id pregunta: 6215 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Respecto a la arquitectura ANSI/SPARC, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[54]= new Array();
 choices[54][0] = "Se definen tres niveles: interno, medio y externo";
 choices[54][1] = "Cada esquema externo describe la parte de la base de datos que interesa a un grupo de usuarios determinado y oculta a ese grupo el resto de la base de datos";
 choices[54][2] = "Es &uacute;til para explicar el concepto de dependencia de datos";
 choices[54][3] = "Dos tipos de independencia de datos: b&aacute;sica y completa";
 answers[54] = choices[54][1];
 units[54] = "57";
 comments[54] = "Id Pregunta: 6215. TICB-2009, bloque desarrollo";


//  Id pregunta: 6516 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[55]= new Array();
 choices[55][0] = "bytecode";
 choices[55][1] = "class";
 choices[55][2] = "jar";
 choices[55][3] = "applet";
 answers[55] = choices[55][0];
 units[55] = "60";
 comments[55] = "Id Pregunta: 6516. NULL";


//  Id pregunta: 7171 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[56]= new Array();
 choices[56][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[56][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[56][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[56][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[56] = choices[56][2];
 units[56] = "68";
 comments[56] = "Id Pregunta: 7171. Examen TIC B 2009";


//  Id pregunta: 7317 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[57]= new Array();
 choices[57][0] = "MSIL";
 choices[57][1] = "JVM";
 choices[57][2] = "Biblioteca de Clases Base o BCL";
 choices[57][3] = "CLR (Common Language Runtime)";
 answers[57] = choices[57][1];
 units[57] = "59";
 comments[57] = "Id Pregunta: 7317. NULL";


//  Id pregunta: 7318 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[58]= new Array();
 choices[58][0] = "COBOL";
 choices[58][1] = "Fortran";
 choices[58][2] = "Delphi";
 choices[58][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[58] = choices[58][3];
 units[58] = "59";
 comments[58] = "Id Pregunta: 7318. NULL";


//  Id pregunta: 8208 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  En una tabla de una base de datos relacional:";
 choices[59]= new Array();
 choices[59][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[59][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[59][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[59][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder ala tabla.";
 answers[59] = choices[59][3];
 units[59] = "57, 58";
 comments[59] = "Id Pregunta: 8208. Examen TIC A1 2010";


//  Id pregunta: 8240 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Seg&uacute;n el modelo de referencia de workflow de la WfMC (Workflow Management Coalition), &iquest;cu&aacute;l de los siguientes elementos interpreta la descripci&oacute;n de los workflows y controla las diferentes instancias de &eacute;stos, as&iacute; como a&ntilde;ade elementos a la lista de trabajo de los usuarios e invoca las aplicaciones necesarias? ";
 choices[60]= new Array();
 choices[60][0] = "El motor de workflow (Workflow engine).";
 choices[60][1] = "La interfaz de programaci&oacute;n de aplicaciones de workflow (WAPI o Workflow Application Programming Interface).";
 choices[60][2] = "El cliente de workflow (Workflow client)";
 choices[60][3] = "El servicio de representaci&oacute;n de workflow (Workflow Enactment Service).";
 answers[60] = choices[60][3];
 units[60] = "71";
 comments[60] = "Id Pregunta: 8240. Examen TIC A2 2010";


//  Id pregunta: 8285 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  El fichero JAR de una distribuci&oacute;n JAVA , NO contiene:";
 choices[61]= new Array();
 choices[61][0] = "El fichero manifest.mf.";
 choices[61][1] = "Un fichero .class por cada clase compilada.";
 choices[61][2] = "Un fichero .sf por cada fichero firmado de la distribuci&oacute;n.";
 choices[61][3] = "Un fichero .crt con cada certificado digital utilizado para firmar las clases.";
 answers[61] = choices[61][3];
 units[61] = "60";
 comments[61] = "Id Pregunta: 8285. Examen TIC A1 2010";


//  Id pregunta: 8367 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[62]= new Array();
 choices[62][0] = "1992.";
 choices[62][1] = "2008";
 choices[62][2] = "2011";
 choices[62][3] = "2012";
 answers[62] = choices[62][2];
 units[62] = "57";
 comments[62] = "Id Pregunta: 8367. Similar a examen TIC A2 2010";


//  Id pregunta: 8456 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Entre las ventajas de un Datawarehouse NO se encuentra:";
 choices[63]= new Array();
 choices[63][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[63][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[63][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n.";
 choices[63][3] = "Facilitar la implementaci&oacute;n de cuadros de mando.";
 answers[63] = choices[63][0];
 units[63] = "68";
 comments[63] = "Id Pregunta: 8456. Analista Ayto. Madrid 2010";


//  Id pregunta: 8470 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  La regla 2 de Codd es la del:";
 choices[64]= new Array();
 choices[64][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[64][1] = "Acceso garantizado";
 choices[64][2] = "Actualizaci&oacute;n de vistas";
 choices[64][3] = "Integridad referencial";
 answers[64] = choices[64][1];
 units[64] = "57,58";
 comments[64] = "Id Pregunta: 8470. Analista Ayto. Madrid 2010";


//  Id pregunta: 8519 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[65]= new Array();
 choices[65][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[65][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[65][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[65][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[65] = choices[65][2];
 units[65] = "57, 58";
 comments[65] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8606 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes NO es un servidor OLAP?";
 choices[66]= new Array();
 choices[66][0] = "Microstrategy OLAP Services.";
 choices[66][1] = "MDX OLAP server.";
 choices[66][2] = "Oracle Database OLAP.";
 choices[66][3] = "Mondrian OLAP Server.";
 answers[66] = choices[66][1];
 units[66] = "68";
 comments[66] = "Id Pregunta: 8606. Examen TIC A2 2010 interna";


//  Id pregunta: 8629 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[67]= new Array();
 choices[67][0] = "En la especializaci&oacute;n un supertipo so descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[67][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[67][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[67][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[67] = choices[67][0];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8629. Examen TIC A2 2010 interna";


//  Id pregunta: 8783 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (LDD) de SQL?";
 choices[68]= new Array();
 choices[68][0] = "ROLLBACK";
 choices[68][1] = "UPDATE";
 choices[68][2] = "GRANT";
 choices[68][3] = "TRUNCATE";
 answers[68] = choices[68][3];
 units[68] = "57, 58";
 comments[68] = "Id Pregunta: 8783. Examen UPM A2 2011";


//  Id pregunta: 8878 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La cl&aacute;usula HAVING de SQL:";
 choices[69]= new Array();
 choices[69][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[69][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[69][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[69][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[69] = choices[69][2];
 units[69] = "57, 58";
 comments[69] = "Id Pregunta: 8878. Examen UPM A2 2011";


//  Id pregunta: 9455 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[70]= new Array();
 choices[70][0] = "Primera Forma Normal.";
 choices[70][1] = "Segunda Forma Normal.";
 choices[70][2] = "Tercera Forma Normal.";
 choices[70][3] = "Forma Normal de Boyce-Codd.";
 answers[70] = choices[70][1];
 units[70] = "58";
 comments[70] = "Id Pregunta: 9455. NULL";


//  Id pregunta: 9603 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[71]= new Array();
 choices[71][0] = "MariaBD";
 choices[71][1] = "Apache Cassandra";
 choices[71][2] = "Heidi";
 choices[71][3] = "Ingres";
 answers[71] = choices[71][1];
 units[71] = "58";
 comments[71] = "Id Pregunta: 9603. NULL";


//  Id pregunta: 9688 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Un almac&eacute;n de datos almacena:";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[72][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[72][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[72][3] = "B y C son correctas.";
 answers[72] = choices[72][2];
 units[72] = "68";
 comments[72] = "Id Pregunta: 9688. ";


//  Id pregunta: 9690 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "'Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[73][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[73][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[73][3] = "A es falsa.";
 answers[73] = choices[73][0];
 units[73] = "68";
 comments[73] = "Id Pregunta: 9690. ";


//  Id pregunta: 9741 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[74]= new Array();
 choices[74][0] = "Contexts and Dependency Injection.";
 choices[74][1] = "Common Display Interface.";
 choices[74][2] = "Context-Dependent Interface.";
 choices[74][3] = "Case-Driven Implementation.";
 answers[74] = choices[74][0];
 units[74] = "60";
 comments[74] = "Id Pregunta: 9741. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9783 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  El lenguaje de marcado PMML (Predictive Model Markup Language) es un lenguaje relacionado con las t&eacute;cnicas relativas a:";
 choices[75]= new Array();
 choices[75][0] = "Virtualizaci&oacute;n de escritorio. ";
 choices[75][1] = "Virtualizaci&oacute;n de servidores. ";
 choices[75][2] = "Sistemas SAN. ";
 choices[75][3] = "Miner&iacute;a de datos.";
 answers[75] = choices[75][3];
 units[75] = "68";
 comments[75] = "Id Pregunta: 9783. Examen TIC A2 2013";


//  Id pregunta: 9963 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[76]= new Array();
 choices[76][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[76][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[76][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[76][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[76] = choices[76][3];
 units[76] = "68,71";
 comments[76] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9966 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[77]= new Array();
 choices[77][0] = "Data Warehouse.";
 choices[77][1] = "OLAP";
 choices[77][2] = "Data Mart.";
 choices[77][3] = "Data Mining.";
 answers[77] = choices[77][2];
 units[77] = "68,71";
 comments[77] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10019 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[78]= new Array();
 choices[78][0] = "xUnit";
 choices[78][1] = "xUnit.net";
 choices[78][2] = "NUnit";
 choices[78][3] = "csUnit";
 answers[78] = choices[78][0];
 units[78] = "59";
 comments[78] = "Id Pregunta: 10019. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10029 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Los ETL son herramientas utilizadas habitualmente en la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas herramientas?";
 choices[79]= new Array();
 choices[79][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[79][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[79][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de p&aacute;ginas HTML.";
 choices[79][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[79] = choices[79][3];
 units[79] = "68";
 comments[79] = "Id Pregunta: 10029. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10162 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Un dominio en un modelo relacional&hellip;";
 choices[80]= new Array();
 choices[80][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[80][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[80][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[80][3] = "Todas las anteriores";
 answers[80] = choices[80][0];
 units[80] = "58";
 comments[80] = "Id Pregunta: 10162. ";


//  Id pregunta: 10169 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[81]= new Array();
 choices[81][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[81][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[81][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[81][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[81] = choices[81][2];
 units[81] = "58";
 comments[81] = "Id Pregunta: 10169. ";


//  Id pregunta: 10172 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Respecto los distintos tipos de drivers JDBC, se verifica que:";
 choices[82]= new Array();
 choices[82][0] = "Los drivers JDBC de tipo III son recomendables si la aplicaci&oacute;n Java ha de acceder a diferentes bases de datos o se desconoce el SGBD destino";
 choices[82][1] = "El uso de drivers JDBC de tipo IV evita problemas de dependencia tecnol&oacute;gica del fabricante";
 choices[82][2] = "Al permitir que la aplicaci&oacute;n Java interact&uacute;e con diferentes SGBD, un driver de tipo III no es 100% Java, ya que incluye c&oacute;digo espec&iacute;fico o nativo de cada SGBD";
 choices[82][3] = "Todas las anteriores";
 answers[82] = choices[82][0];
 units[82] = "58";
 comments[82] = "Id Pregunta: 10172. ";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[83]= new Array();
 choices[83][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[83][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[83][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[83][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[83] = choices[83][1];
 units[83] = "60";
 comments[83] = "Id Pregunta: 10225. NULL";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[84]= new Array();
 choices[84][0] = "sleep(long msec);";
 choices[84][1] = "start();";
 choices[84][2] = "wait();";
 choices[84][3] = "A y B son correctas.";
 answers[84] = choices[84][3];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10227. start() es un m&eacute;todo de Thread. Se cambia la opci&oacute;n D, notifyAll, por la actual.";


//  Id pregunta: 10229 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Cuales de los siguientes objetos son interfaces:";
 choices[85]= new Array();
 choices[85][0] = "java.util.List";
 choices[85][1] = "java.util.TreeMap";
 choices[85][2] = "java.util.AbstractList";
 choices[85][3] = "java.util.Collections";
 answers[85] = choices[85][0];
 units[85] = "60";
 comments[85] = "Id Pregunta: 10229. NULL";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[86]= new Array();
 choices[86][0] = "rdlccfg";
 choices[86][1] = "tsmrpt";
 choices[86][2] = "rptsetup";
 choices[86][3] = "rsconfig";
 answers[86] = choices[86][3];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


//  Id pregunta: 10433 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios? ";
 choices[87]= new Array();
 choices[87][0] = "CREATE VIEW.";
 choices[87][1] = "GRANT.";
 choices[87][2] = "CREATE PROFILE.";
 choices[87][3] = "CREATE ROLE.";
 answers[87] = choices[87][0];
 units[87] = "58";
 comments[87] = "Id Pregunta: 10433. Examen TIC A1 2013";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[88]= new Array();
 choices[88][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[88][1] = "Sitio web din&aacute;mico.";
 choices[88][2] = "Una plataforma de e-learning.";
 choices[88][3] = "Todas las anteriores.";
 answers[88] = choices[88][3];
 units[88] = "59";
 comments[88] = "Id Pregunta: 10619. ";


//  Id pregunta: 10629 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  BPMN (Business Process Model and Notation)...";
 choices[89]= new Array();
 choices[89][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[89][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[89][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[89][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[89] = choices[89][0];
 units[89] = "71";
 comments[89] = "Id Pregunta: 10629. ";


//  Id pregunta: 10826 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[90]= new Array();
 choices[90][0] = "Serializable.";
 choices[90][1] = "Repeatable Read (lecturas repetibles).";
 choices[90][2] = "Read Committed (lecturas comprometidas).";
 choices[90][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[90] = choices[90][3];
 units[90] = "57, 58";
 comments[90] = "Id Pregunta: 10826. Examen GSI 2014";


//  Id pregunta: 10851 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[91]= new Array();
 choices[91][0] = "Bajoo.";
 choices[91][1] = "Azure.";
 choices[91][2] = "Heroku.";
 choices[91][3] = "Adrive.";
 answers[91] = choices[91][1];
 units[91] = "59, 115";
 comments[91] = "Id Pregunta: 10851. Examen GSI 2014";


//  Id pregunta: 10871 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[92]= new Array();
 choices[92][0] = "RFID";
 choices[92][1] = "RSYNC";
 choices[92][2] = "RMAN";
 choices[92][3] = "RMON";
 answers[92] = choices[92][2];
 units[92] = "57";
 comments[92] = "Id Pregunta: 10871. Examen GSI 2014";


//  Id pregunta: 10947 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Dentro de las soluciones en el &aacute;mbito de BigData, la arquitectura Hadoop consta del m&oacute;dulo MapReduce que consiste en:";
 choices[93]= new Array();
 choices[93][0] = "Un framework para escribir aplicaciones que procesan grandes cantidades de datos en paralelo.";
 choices[93][1] = "Una base de datos no relacional y distribuida, con varios maestros, escalable y sin puntos &uacute;nicos de fallo.";
 choices[93][2] = "Un sistema de archivos distribuido que proporciona acceso de alto rendimiento a los datos de la aplicaci&oacute;n.";
 choices[93][3] = "Una infraestructura de data warehouse que proporciona los datos resumidos y consultas ad hoc.";
 answers[93] = choices[93][0];
 units[93] = "68";
 comments[93] = "Id Pregunta: 10947. TIC A1 AGE 2014";


//  Id pregunta: 10980 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  LINQ (Language-Integrated Query) es:";
 choices[94]= new Array();
 choices[94][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[94][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[94][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[94][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[94] = choices[94][2];
 units[94] = "59";
 comments[94] = "Id Pregunta: 10980. TIC A1 AGE 2014";


//  Id pregunta: 11036 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l no es un operador b&aacute;sico del &Aacute;lgebra Relacional?";
 choices[95]= new Array();
 choices[95][0] = "Intersecci&oacute;n";
 choices[95][1] = "Uni&oacute;n";
 choices[95][2] = "Proyecci&oacute;n";
 choices[95][3] = "Diferencia";
 answers[95] = choices[95][0];
 units[95] = "58";
 comments[95] = "Id Pregunta: 11036. ";


//  Id pregunta: 11039 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[96]= new Array();
 choices[96][0] = "Fue creado por Peter Chen";
 choices[96][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[96][2] = "Las estructuras de datos son complejas";
 choices[96][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[96] = choices[96][1];
 units[96] = "58";
 comments[96] = "Id Pregunta: 11039. ";


//  Id pregunta: 11136 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje para interactuar con la SGBD?";
 choices[97]= new Array();
 choices[97][0] = "DDL - Data Definition Language";
 choices[97][1] = "DML - Data Manipulation Language";
 choices[97][2] = "DCL - Data Control Language";
 choices[97][3] = "Todos los anteriores son lenguajes para interactuar con la SGBD";
 answers[97] = choices[97][3];
 units[97] = "57";
 comments[97] = "Id Pregunta: 11136. ";


//  Id pregunta: 11223 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el Framework de .NET, los servicios web:";
 choices[98]= new Array();
 choices[98][0] = "Se definen en ficheros de extensi&oacute;n .asmx incluyendo la directiva WebService.";
 choices[98][1] = "ASP.NET no se puede integrar f&aacute;cilmente con tecnolog&iacute;as como AJAX para construir aplicaciones RIA.";
 choices[98][2] = "Los servicios Web WCF pueden ser SOAP o REST, aunque no soportan un formato no XML como JSON.";
 choices[98][3] = "Los servicios WCF (Windows Communication Foundation) siempre se ejecutan directamente sobre TCP.";
 answers[98] = choices[98][0];
 units[98] = "59";
 comments[98] = "Id Pregunta: 11223. ";


//  Id pregunta: 11532 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En .NET, la biblioteca de clases ";
 choices[99]= new Array();
 choices[99][0] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio.";
 choices[99][1] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio y acceso a datos.";
 choices[99][2] = "Es &uacute;nica para todos los lenguajes de la plataforma.";
 choices[99][3] = "Todas las anteriores son falsas.";
 answers[99] = choices[99][2];
 units[99] = "59";
 comments[99] = "Id Pregunta: 11532. NULL";


