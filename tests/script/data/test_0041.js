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

//  Id pregunta: 210 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En la Administraci&oacute;n P&uacute;blica se puede copiar un programa de ordenador para entregarlo a terceros s&oacute;lo:";
 choices[0]= new Array();
 choices[0][0] = "Cuando haya sido desarrollado a medida de las necesidades de la Administraci&oacute;n";
 choices[0][1] = "Cuando se trate de la copia de &quot;back-up&quot;";
 choices[0][2] = "Cuando los derechos de explotaci&oacute;n correspondan a la Administraci&oacute;n";
 choices[0][3] = "Cuando la Administraci&oacute;n haya adquirido una licencia de uso corporativa";
 answers[0] = choices[0][2];
 units[0] = "36";
 comments[0] = "Id Pregunta: 210. ";


//  Id pregunta: 215 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En la funci&oacute;n de almacenamiento de datos de un sistema de informaci&oacute;n no es necesario tener en cuenta:";
 choices[1]= new Array();
 choices[1][0] = "El papel de la base de datos";
 choices[1][1] = "La organizaci&oacute;n de la base de datos";
 choices[1][2] = "Almacenamiento en l&iacute;nea versus fuera de l&iacute;nea";
 choices[1][3] = "Enfoque integrado, capturando s&oacute;lo una vez un elemento dado de datos";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 215. ";


//  Id pregunta: 225 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la teor&iacute;a de la decisi&oacute;n multicriterio, un criterio es:";
 choices[2]= new Array();
 choices[2][0] = "Las diversas opciones entre las que queremos seleccionar una";
 choices[2][1] = "Aspectos que nos interesan de cada opci&oacute;n";
 choices[2][2] = "Las evaluaciones que damos a cada opci&oacute;n";
 choices[2][3] = "La importancia que le damos a cada aspecto seg&uacute;n nuestro criterio";
 answers[2] = choices[2][1];
 units[2] = "34";
 comments[2] = "Id Pregunta: 225. ";


//  Id pregunta: 229 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En las t&eacute;cnicas de negociaci&oacute;n y de resoluci&oacute;n de conflictos, el 'empowerment' consiste en:";
 choices[3]= new Array();
 choices[3][0] = "Potenciar el di&aacute;logo con reuniones peri&oacute;dicas";
 choices[3][1] = "Establecer una pauta a seguir como norma general indiscutible";
 choices[3][2] = "Dar poder a los subordinados para que se impliquen en la organizaci&oacute;n";
 choices[3][3] = "Nada de lo anterior es correcto";
 answers[3] = choices[3][2];
 units[3] = "28";
 comments[3] = "Id Pregunta: 229. negociaci&oacute;n";


//  Id pregunta: 240 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En un gr&aacute;fico PERT los nodos representan:";
 choices[4]= new Array();
 choices[4][0] = "Actividades.";
 choices[4][1] = "Sucesos.";
 choices[4][2] = "El camino cr&iacute;tico.";
 choices[4][3] = "La holgura de una actividad.";
 answers[4] = choices[4][1];
 units[4] = "27";
 comments[4] = "Id Pregunta: 240. ";


//  Id pregunta: 343 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La tarea de conceder a un producto o servicio un certificado indicando que se ha comprobado que cumple unas determinadas normas o especificaciones t&eacute;cnicas se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Certificaci&oacute;n";
 choices[5][1] = "Homologaci&oacute;n";
 choices[5][2] = "Normalizaci&oacute;n";
 choices[5][3] = "Estandarizaci&oacute;n";
 answers[5] = choices[5][0];
 units[5] = "42";
 comments[5] = "Id Pregunta: 343. ";


//  Id pregunta: 346 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La t&eacute;cnica de direcci&oacute;n en la etapa de madurez es:";
 choices[6]= new Array();
 choices[6][0] = "Orientada a ventas";
 choices[6][1] = "Informal";
 choices[6][2] = "Orientada a los recursos";
 choices[6][3] = "Orientada al control";
 answers[6] = choices[6][2];
 units[6] = "22";
 comments[6] = "Id Pregunta: 346. ";


//  Id pregunta: 375 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Los par&aacute;metros de seguridad de la informaci&oacute;n pueden resumirse en:";
 choices[7]= new Array();
 choices[7][0] = "Disponibilidad, integridad, confidencialidad";
 choices[7][1] = "Integridad, autenticaci&oacute;n, confidencialidad";
 choices[7][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n";
 choices[7][3] = "Autenticaci&oacute;n, disponibilidad, integridad";
 answers[7] = choices[7][0];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 375. ";


//  Id pregunta: 479 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[8]= new Array();
 choices[8][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[8][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[8][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[8][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[8] = choices[8][0];
 units[8] = "40";
 comments[8] = "Id Pregunta: 479. ";


//  Id pregunta: 544 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Existe el concepto de 'copia privada' en la actual legislaci&oacute;n de propiedad intelectual?";
 choices[9]= new Array();
 choices[9][0] = "Si, es un derecho por el cual no es necesaria la autorizaci&oacute;n del creador de una obra ya divulgada para proceder a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[9][1] = "Si, pero no como copia leg&iacute;tima";
 choices[9][2] = "Si, es un derecho por el cual, previa autorizaci&oacute;n del creador de una obra ya divulgada, se procede a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[9][3] = "No";
 answers[9] = choices[9][0];
 units[9] = "36,37";
 comments[9] = "Id Pregunta: 544. LPI de 1996";


//  Id pregunta: 896 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;En qu&eacute; consiste el an&aacute;lisis multidimensional de OLAP?";
 choices[10]= new Array();
 choices[10][0] = "En analizar los mismos datos desde distintas perspectivas.";
 choices[10][1] = "En consolidar los datos por distintas trayectorias.";
 choices[10][2] = "En encontrar nuevas relaciones entre variables.";
 choices[10][3] = "Todas las respuestas anteriores son correctas.";
 answers[10] = choices[10][3];
 units[10] = "68";
 comments[10] = "Id Pregunta: 896. ";


//  Id pregunta: 928 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es la WFMC?";
 choices[11]= new Array();
 choices[11][0] = "Una organizaci&oacute;n para promover la investigaci&oacute;n en el campo de la microelectr&oacute;nica y los computadores";
 choices[11][1] = "Un c&oacute;mite de gesti&oacute;n de las distintas organizaciones mundiales existentes en torno al web";
 choices[11][2] = "Un consorcio para coordinar los distintos forums organizados en torno a la tecnolog&iacute;a multimedia emergente";
 choices[11][3] = "Una organizaci&oacute;n cuya misi&oacute;n es promover el uso del workflow";
 answers[11] = choices[11][3];
 units[11] = "71";
 comments[11] = "Id Pregunta: 928. ";


//  Id pregunta: 1110 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En la orientaci&oacute;n l&oacute;gica de la inteligencia artificial podemos afirmar que:";
 choices[12]= new Array();
 choices[12][0] = "El c&aacute;lculo proposicional entra en la sem&aacute;ntica de las proposiciones, distinguiendo en ella los componentes predicados y los t&eacute;rminos";
 choices[12][1] = "El c&aacute;lculo de predicados representa el lenguaje usual tomando como elemento b&aacute;sico de la formulaci&oacute;n una representaci&oacute;n matem&aacute;tica de las frases declarativas simples (proposiciones)";
 choices[12][2] = "En el c&aacute;lculo proposicional, una proposici&oacute;n es la unidad m&iacute;nima del lenguaje con un contenido de informaci&oacute;n, sobre cuyo significado es posible afirmar la verdad o falsedad";
 choices[12][3] = "Las clases de conectivas &quot;negaci&oacute;n y condicional&quot; pertenecen al c&aacute;lculo de predicados";
 answers[12] = choices[12][2];
 units[12] = "63";
 comments[12] = "Id Pregunta: 1110. ";


//  Id pregunta: 1384 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Un lenguaje de programaci&oacute;n en el que s&oacute;lo se especifica lo que quiere llevarse a cabo en lugar de indicar los pasos a dar para llevarlo a cabo, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "No procedural.";
 choices[13][1] = "Simb&oacute;lico.";
 choices[13][2] = "Orientado al objetos.";
 choices[13][3] = "Procedural.";
 answers[13] = choices[13][0];
 units[13] = "81, 84";
 comments[13] = "Id Pregunta: 1384. ";


//  Id pregunta: 1784 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Indique aquel conjunto de programas que no guardan relaci&oacute;n en cuanto a su funcionalidad";
 choices[14]= new Array();
 choices[14][0] = "Gnumeric, kspread";
 choices[14][1] = "Firefox, Epiphany";
 choices[14][2] = "Thunderbird, Konqueror";
 choices[14][3] = "Dia, kivio";
 answers[14] = choices[14][2];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1784. ";


//  Id pregunta: 1842 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  La directiva 2002/38/CE:";
 choices[15]= new Array();
 choices[15][0] = "Ha regulado el fen&oacute;meno del comercio electr&oacute;nico en lo que se refiere al IVA";
 choices[15][1] = "Est&aacute;  incluida en el denominado paquete Telecom";
 choices[15][2] = "Es relativa a la protecci&oacute;n de datos personales y a la protecci&oacute;n de la intimidad en el sector de las comunicaciones electr&oacute;nicas";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][0];
 units[15] = "70";
 comments[15] = "Id Pregunta: 1842. NULL";


//  Id pregunta: 1921 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest; Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programamci&oacute;n orientado a objetos?";
 choices[16]= new Array();
 choices[16][0] = "Encapsulaci&oacute;n";
 choices[16][1] = "Herencia";
 choices[16][2] = "Polimorfismo";
 choices[16][3] = "Historicismo";
 answers[16] = choices[16][3];
 units[16] = "82";
 comments[16] = "Id Pregunta: 1921. ";


//  Id pregunta: 1936 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  En JDBC &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[17]= new Array();
 choices[17][0] = "Driver Tipo 1";
 choices[17][1] = "Driver Tipo 2";
 choices[17][2] = "Driver Tipo 3";
 choices[17][3] = "Driver Tipo 4";
 answers[17] = choices[17][0];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1936. NULL";


//  Id pregunta: 2027 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  En s&iacute;ntesis de voz no se usan";
 choices[18]= new Array();
 choices[18][0] = "Fonemas";
 choices[18][1] = "Difonemas";
 choices[18][2] = "Sintaxis";
 choices[18][3] = "Morfemas";
 answers[18] = choices[18][2];
 units[18] = "94";
 comments[18] = "Id Pregunta: 2027. Similar a examen TIC SS A 2003";


//  Id pregunta: 2039 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Hablar de un modelo de gesti&oacute;n que basado en un sistema empresarial orientado hacia la calidad persigue la satisfacci&oacute;n de todos aquellos entes que se relacionan con la empresa u organizaci&oacute;n, supone hablar de:";
 choices[19]= new Array();
 choices[19][0] = "Las normas ISO 9000";
 choices[19][1] = "Calidad Total";
 choices[19][2] = "Plan General de Garant&iacute;a de Calidad";
 choices[19][3] = "Todos los aspectos anteriores";
 answers[19] = choices[19][1];
 units[19] = "92";
 comments[19] = "Id Pregunta: 2039. NULL";


//  Id pregunta: 2290 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El modelo en espiral:";
 choices[20]= new Array();
 choices[20][0] = "Tiene como n&uacute;cleo la evaluaci&oacute;n de riesgos";
 choices[20][1] = "Es un refinamiento del modelo de prototipos";
 choices[20][2] = "Tiene como idea fundamental la evaluaci&oacute;n de costes, calendario&hellip;";
 choices[20][3] = "No tiene fin, un sistema siempre es mejorable";
 answers[20] = choices[20][0];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2290. ";


//  Id pregunta: 2415 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El filtro de Sobel es com&uacute;nmente usado en tratamiento de im&aacute;genes para:";
 choices[21]= new Array();
 choices[21][0] = "Esqueletizaci&oacute;n de figuras";
 choices[21][1] = "Suavizaci&oacute;n de contornos";
 choices[21][2] = "Eliminaci&oacute;n del ruido";
 choices[21][3] = "Detecci&oacute;n de bordes";
 answers[21] = choices[21][3];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2415. NULL";


//  Id pregunta: 2428 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La orientaci&oacute;n a objetos usa com&uacute;nmente dos tipos de mecanismos de herencia: herencia simple y herencia m&uacute;ltiple. La herencia repetida:";
 choices[22]= new Array();
 choices[22][0] = "Supone que una clase, llamada subclase, hereda caracter&iacute;sticas y m&eacute;todos de una sola clase superior llamada superclase, a la que puede a&ntilde;adir o borrar alg&uacute;n comportamiento.";
 choices[22][1] = "Es un tipo de herencia m&uacute;ltiple en la que en la jerarqu&iacute;a de la herencia hay ciclos, es decir, una clase hereda directa o indirectamente de otra clase m&aacute;s de una vez.";
 choices[22][2] = "Consiste en que un objeto dado tenga m&aacute;s de un padre.";
 choices[22][3] = "No existe.";
 answers[22] = choices[22][1];
 units[22] = "82,84";
 comments[22] = "Id Pregunta: 2428. ";


//  Id pregunta: 2644 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  En el modelo Entidad Relaci&oacute;n, &iquest; qu&eacute; es una entidad regular?";
 choices[23]= new Array();
 choices[23][0] = "Es aquella que tiene existencia por si misma, no depende de ninguna otra entidad.";
 choices[23][1] = "Es aquella que su existencia depende de otra entidad del modelo y sin la otra entidad no tiene sentido &eacute;sta.";
 choices[23][2] = " Una entidad en la que el n&uacute;mero m&aacute;ximo de ocurrencias que pueden estar asociadas a ella con una ocurrencia de otra u otras entidades participantes es 1.";
 choices[23][3] = "  Una entidad que tiene atributos derivados.";
 answers[23] = choices[23][0];
 units[23] = "80";
 comments[23] = "Id Pregunta: 2644. ";


//  Id pregunta: 2805 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  En el modelo de McCall. Cu&aacute;l de los siguientes elementos no se considera un factor de calidad";
 choices[24]= new Array();
 choices[24][0] = "Reusabilidad";
 choices[24][1] = "Modularidad";
 choices[24][2] = "Flexibilidad";
 choices[24][3] = "Eficiencia";
 answers[24] = choices[24][1];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2805. ";


//  Id pregunta: 2853 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Una Base de Datos documental ";
 choices[25]= new Array();
 choices[25][0] = "presenta un modelo de recuperaci&oacute;n de informaci&oacute;n probabil&iacute;stica";
 choices[25][1] = "presenta un &iacute;ndice de incertidumbre en la respuesta";
 choices[25][2] = "las dos anteriores";
 choices[25][3] = "ninguna de las anteriores";
 answers[25] = choices[25][2];
 units[25] = "95,96";
 comments[25] = "Id Pregunta: 2853. ";


//  Id pregunta: 3045 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes no es cierta respecto a SSL?";
 choices[26]= new Array();
 choices[26][0] = "Es el acr&oacute;nimo de Secure Sockets Layer, capa segura de interfaz con sockets";
 choices[26][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web";
 choices[26][2] = "En su funcionamiento, se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal (confidencialidad)";
 choices[26][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes";
 answers[26] = choices[26][3];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3045. NULL";


//  Id pregunta: 3083 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los sistemas de multiplexaci&oacute;n por divisi&oacute;n en frecuencia, respecto a los por divisi&oacute;n en el tiempo:";
 choices[27]= new Array();
 choices[27][0] = "Tienen problemas de diafon&iacute;a, por lo que se dejan espacios de guarda";
 choices[27][1] = "Utilizan el ancho de banda completo del canal con una duraci&oacute;n fija";
 choices[27][2] = "No utilizan filtros";
 choices[27][3] = "Utilizan antenas de tipo dipolo";
 answers[27] = choices[27][0];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3083. ";


//  Id pregunta: 3091 AÃ±o de creación de pregunta: 2005-01-01
 questions[28]= "29)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un hacker en un servidor web afecta a:";
 choices[28]= new Array();
 choices[28][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[28][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[28][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[28][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[28] = choices[28][0];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3091. NULL";


//  Id pregunta: 3141 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos repetidores?:";
 choices[29]= new Array();
 choices[29][0] = "Operan a nivel de LLC, pudiendo usarse para la interconexi&oacute;n de LANs heterog&eacute;neas de nivel 1 y 2 de OSI";
 choices[29][1] = "Operan a nivel 1 de OSI, pudiendo usarse para conectar diferentes tipos de medio f&iacute;sico";
 choices[29][2] = "Pueden analizar direcci&oacute;n de origen y destino, efectuando funciones de filtrado, pero sobre medios f&iacute;sicos homog&eacute;neos";
 choices[29][3] = "Permiten aislar los diferentes segmentos separando el tr&aacute;fico de cada uno";
 answers[29] = choices[29][1];
 units[29] = "101, 102";
 comments[29] = "Id Pregunta: 3141. ";


//  Id pregunta: 3142 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[30]= new Array();
 choices[30][0] = "El tama&ntilde;o m&aacute;ximo del mensaje a transmitir entre aplicaci&oacute;n origen y destino, depende del tama&ntilde;o m&aacute;ximo del paquete, que viene impuesto por la red";
 choices[30][1] = "No se puede establecer dos circuitos virtuales simult&aacute;neos entere un mismo origen y un mismo destino, ya que la red no podr&iacute;a coordinar dos n&uacute;meros de canal l&oacute;gico con un mismo destino";
 choices[30][2] = "Siempre que se reduzca el tama&ntilde;o de los paquetes, el rendimiento (bytes de informaci&oacute;n transmitidos por unidad de tiempo) disminuir&aacute;, ya que se env&iacute;an los mismo bytes de cabecera, para menos bytes de informaci&oacute;n";
 choices[30][3] = "Todas las respuestas anteriores son falsas ";
 answers[30] = choices[30][2];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3142. ";


//  Id pregunta: 3342 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Con un &quot;m&oacute;dem&quot; RDSI, la llamada:";
 choices[31]= new Array();
 choices[31][0] = "Se establece cada vez que se intercambian datos";
 choices[31][1] = "Est&aacute; siempre establecida";
 choices[31][2] = "Puede ser configurable cu&aacute;ndo se quiere que se establezca la llamada";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][2];
 units[31] = "103,104,109";
 comments[31] = "Id Pregunta: 3342. ";


//  Id pregunta: 3533 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En las necesidades para establecer una aplicaci&oacute;n de videoconferencia, es falso que se requiera:";
 choices[32]= new Array();
 choices[32][0] = "una compresi&oacute;n / descompresi&oacute;n en tiempo real";
 choices[32][1] = "unos l&iacute;mites m&iacute;nimos y m&aacute;ximos para el retardo de comunicaci&oacute;n";
 choices[32][2] = "una sincronizaci&oacute;n de audio y de video";
 choices[32][3] = "un protocolo de se&ntilde;alizaci&oacute;n";
 answers[32] = choices[32][1];
 units[32] = "117";
 comments[32] = "Id Pregunta: 3533. ";


//  Id pregunta: 3649 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  La tecnolog&iacute;a PUSH permite:";
 choices[33]= new Array();
 choices[33][0] = "Proteger la informaci&oacute;n mediante cifrado de la misma";
 choices[33][1] = "Establecer una conexi&oacute;n con un ordenador remoto";
 choices[33][2] = "Encaminar los datagramas a su destino";
 choices[33][3] = "Distribuir informaci&oacute;n en el momento oportuno";
 answers[33] = choices[33][3];
 units[33] = "113";
 comments[33] = "Id Pregunta: 3649. ";


//  Id pregunta: 3674 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Una empresa dispone de dos edificios de oficinas a ambos lados de una calle. Para conectarlos han decidido estudiar las alternativas disponibles. Indique la opci&oacute;n que sea mejor tanto t&eacute;cnica como econ&oacute;micamente:";
 choices[34]= new Array();
 choices[34][0] = "utilizaci&oacute;n de un enlace infrarrojos";
 choices[34][1] = "Utilizaci&oacute;n de una l&iacute;nea punto a punto arrendada a una empresa con concesi&oacute;n para ofrecer servicios portadores";
 choices[34][2] = "Contrataci&oacute;n de un servicio VSAT";
 choices[34][3] = "Solicitar del Ayuntamiento permiso de obra para la conexi&oacute;n permanente de una l&iacute;nea privada que atraviese la calle";
 answers[34] = choices[34][1];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3674. ";


//  Id pregunta: 3976 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  La Directiva Europea sobre compatibilidad electro magnetica EMC es:";
 choices[35]= new Array();
 choices[35][0] = "89/336/EEC";
 choices[35][1] = "87/306/EEC";
 choices[35][2] = "87/95/EEC";
 choices[35][3] = "79/335/EEC";
 answers[35] = choices[35][0];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3976. ";


//  Id pregunta: 4087 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Cual es el equivalente en .Net de los JSP de J2EE";
 choices[36]= new Array();
 choices[36][0] = "ASP.Net";
 choices[36][1] = "ASP.com";
 choices[36][2] = "ASP.org";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][0];
 units[36] = "115";
 comments[36] = "Id Pregunta: 4087. ";


//  Id pregunta: 4120 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El lugar de almacenamiento temporal de las im&aacute;genes descargadas desde una p&aacute;gina Web se llama";
 choices[37]= new Array();
 choices[37][0] = "RAM";
 choices[37][1] = "disco duro";
 choices[37][2] = "cookie";
 choices[37][3] = "cache";
 answers[37] = choices[37][3];
 units[37] = "112";
 comments[37] = "Id Pregunta: 4120. ";


//  Id pregunta: 4167 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Las comunicaciones satelite son f&aacute;cilmente interceptables porque";
 choices[38]= new Array();
 choices[38][0] = "las transmisiones son continuas 24 horas al d&iacute;a";
 choices[38][1] = "la huella del sat&eacute;lite no cambia";
 choices[38][2] = "la huella del sat&eacute;lite es muy amplia";
 choices[38][3] = "la posici&oacute;n del sat&eacute;lite es conocida";
 answers[38] = choices[38][2];
 units[38] = "105";
 comments[38] = "Id Pregunta: 4167. ";


//  Id pregunta: 4201 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Un modem RDSI";
 choices[39]= new Array();
 choices[39][0] = "Es un dispositivo utilizado para conectar un Interfaz B&aacute;sico a otros interfaces";
 choices[39][1] = "Permite la transmisi&oacute;n de datos sobre uno o dos canales B";
 choices[39][2] = "Es un t&eacute;rmino incorrecto";
 choices[39][3] = "Tiene un SPID  (n&uacute;mero de l&iacute;nea) propio";
 answers[39] = choices[39][2];
 units[39] = "103";
 comments[39] = "Id Pregunta: 4201. ";


//  Id pregunta: 4243 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Qu&eacute; es AXIS";
 choices[40]= new Array();
 choices[40][0] = "Un servidor de aplicaciones";
 choices[40][1] = "Un lenguaje de programaci&oacute;n";
 choices[40][2] = "Una implementaci&oacute;n de SOAP para APACHE";
 choices[40][3] = "Un m&eacute;todo as&iacute;ncrono de comunicaci&oacute;n entre servidores.";
 answers[40] = choices[40][2];
 units[40] = "51";
 comments[40] = "Id Pregunta: 4243. NULL";


//  Id pregunta: 4298 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  La adopci&oacute;n de m&eacute;todos formales de especificaci&oacute;n de requisitos:";
 choices[41]= new Array();
 choices[41][0] = "Permite reducir el coste de desarrollo desde el inicio de su adopci&oacute;n en la organizaci&oacute;n.";
 choices[41][1] = "No debe combinarse con los m&eacute;todos convencionales de desarrollo.";
 choices[41][2] = "Aconseja adjuntar comentarios en lenguaje natural a las especificaciones formales";
 choices[41][3] = "Supone una garant&iacute;a de correcci&oacute;n del sistema final.";
 answers[41] = choices[41][2];
 units[41] = "78";
 comments[41] = "Id Pregunta: 4298. ";


//  Id pregunta: 4318 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[42]= new Array();
 choices[42][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[42][1] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[42][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[42][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[42] = choices[42][1];
 units[42] = "33";
 comments[42] = "Id Pregunta: 4318. ";


//  Id pregunta: 4434 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[43]= new Array();
 choices[43][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[43][1] = "100 kbps";
 choices[43][2] = "144 Kbps";
 choices[43][3] = "384 kbps";
 answers[43] = choices[43][3];
 units[43] = "108";
 comments[43] = "Id Pregunta: 4434. ";


//  Id pregunta: 4473 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Que se entiende por el conjunto de t&eacute;cnicas para iniciar, evaluar e implementar cambios en un producto software manteniendo su integridad?";
 choices[44]= new Array();
 choices[44][0] = "Metodolog&iacute;a.";
 choices[44][1] = "Gesti&oacute;n de Configuraci&oacute;n Software.";
 choices[44][2] = "Ingenier&iacute;a Inversa.";
 choices[44][3] = "An&aacute;lisis y Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[44] = choices[44][1];
 units[44] = "76";
 comments[44] = "Id Pregunta: 4473. ";


//  Id pregunta: 4763 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Relativo a la estructura de COBIT 5:";
 choices[45]= new Array();
 choices[45][0] = "Se definen 37 objetivos de control generales";
 choices[45][1] = "Se define un objetivo para cada uno de los procesos de las TI";
 choices[45][2] = "Especifica un total de 17 Metas de Negocio";
 choices[45][3] = "Todas son ciertas";
 answers[45] = choices[45][3];
 units[45] = "98";
 comments[45] = "Id Pregunta: 4763. NULL";


//  Id pregunta: 4768 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En ATM, para la transmisi&oacute;n de servicios is&oacute;cronos se utilizan los protocolos de adaptaci&oacute;n AAL1 y AAL2. La diferencia entre ellos es";
 choices[46]= new Array();
 choices[46][0] = "AAL1 es de velocidad variable y AAL2 es de velocidad constante";
 choices[46][1] = "AAL1 es de velocidad constante y AAL2 es de velocidad variable";
 choices[46][2] = "AAL1 es orientado a conexi&oacute;n y AAL2 es de tipo datagrama";
 choices[46][3] = "AAL1 es de tipo datagrama y AAL2 es orientado a conexi&oacute;n";
 answers[46] = choices[46][1];
 units[46] = "109";
 comments[46] = "Id Pregunta: 4768. ";


//  Id pregunta: 4787 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En que lenguaje esta especificada La MIB de SNMPv2 ";
 choices[47]= new Array();
 choices[47][0] = "XML";
 choices[47][1] = "HTML";
 choices[47][2] = "ASN1";
 choices[47][3] = "Java";
 answers[47] = choices[47][2];
 units[47] = "104";
 comments[47] = "Id Pregunta: 4787. ";


//  Id pregunta: 4803 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En relaci&oacute;n con el diccionario de datos en el an&aacute;lisis estructurado, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[48]= new Array();
 choices[48][0] = "Contiene definiciones de todos los objetos de datos gestionados por el software";
 choices[48][1] = "Se configura con todas las definiciones de objetos de datos, sus atributos y sus relaciones";
 choices[48][2] = "Almacena tan solo una categorizaci&oacute;n de los objetos de datos, sin recoger sus atributos";
 choices[48][3] = "Contiene procedimientos almacenados";
 answers[48] = choices[48][0];
 units[48] = "81";
 comments[48] = "Id Pregunta: 4803. ";


//  Id pregunta: 5077 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cual de los siguientes es un est&aacute;ndar de W3C que permite referenciar partes de un documento XML?:";
 choices[49]= new Array();
 choices[49][0] = "XSL-FO";
 choices[49][1] = "Xpath";
 choices[49][2] = "XSLT";
 choices[49][3] = "Xforms";
 answers[49] = choices[49][1];
 units[49] = "69";
 comments[49] = "Id Pregunta: 5077. Examen TIC A 2007";


//  Id pregunta: 5078 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public KeyInfrastructures)? :";
 choices[50]= new Array();
 choices[50][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[50][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[50][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;npermitidas para dicho certificado";
 choices[50][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[50] = choices[50][3];
 units[50] = "74";
 comments[50] = "Id Pregunta: 5078. Examen TIC A 2007";


//  Id pregunta: 5139 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; tipos de herramientas CASE son las que tienen las capacidades de control de versiones, trazabilidad de requisitos y an&aacute;lisis de impacto?";
 choices[51]= new Array();
 choices[51][0] = "Las herramientas de prueba.";
 choices[51][1] = "Las herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[51][2] = "Las herramientas de an&aacute;lisis y dise&ntilde;o.";
 choices[51][3] = "Las herramientas de pantallas.";
 answers[51] = choices[51][1];
 units[51] = "79";
 comments[51] = "Id Pregunta: 5139. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5198 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de la t&eacute;cnica del prototipado?";
 choices[52]= new Array();
 choices[52][0] = "Hace part&iacute;cipes a los usuarios del desarrollo";
 choices[52][1] = "Facilita la continua revisi&oacute;n del sistema por parte de los usuarios";
 choices[52][2] = "Desemboca en sistemas muy flexibles a cambios posteriores";
 choices[52][3] = "En general, reduce el tiempo de los desarrollos posteriores";
 answers[52] = choices[52][2];
 units[52] = "85";
 comments[52] = "Id Pregunta: 5198. ";


//  Id pregunta: 5246 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Seg&uacute;n Metrica v3, el Plan de Sistemas de Informaci&oacute;n";
 choices[53]= new Array();
 choices[53][0] = "Se compone de 9 actividades, que deben realizarse secuencialmente sin que ninguna de ellas pueda realizarse en paralelo";
 choices[53][1] = "Tiene por objeto obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que responda a los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[53][2] = "Define el programa general de actuaciones para la planificaci&oacute;n del desarrollo de los sistemas de informaci&oacute;n y su presupuestaci&oacute;n";
 choices[53][3] = "Todas las anteriores son correctas";
 answers[53] = choices[53][1];
 units[53] = "77";
 comments[53] = "Id Pregunta: 5246. ";


//  Id pregunta: 5272 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  El DNIe recoge los siguientes datos biom&eacute;tricos";
 choices[54]= new Array();
 choices[54][0] = "Huellas dactilares";
 choices[54][1] = "Iris del ojo";
 choices[54][2] = "Patr&oacute;n facial";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][3];
 units[54] = "74";
 comments[54] = "Id Pregunta: 5272. no recoge huella dactilar completa, s&oacute;lo las minucias";


//  Id pregunta: 5455 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Una Importante cuesti&oacute;n a considerar en la elecci&oacute;n de una sentencia SQL es";
 choices[55]= new Array();
 choices[55][0] = "N&uacute;mero de CPUs en el servidor";
 choices[55][1] = "Grado de paralelismo de las tablas";
 choices[55][2] = "Uso de &iacute;ndices de mapas de bits";
 choices[55][3] = "Calidad de las optimizaciones de las sentencias SQL";
 answers[55] = choices[55][3];
 units[55] = "58";
 comments[55] = "Id Pregunta: 5455. Castilla y Le&oacute;n";


//  Id pregunta: 5520 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indicar la respuesta verdadera";
 choices[56]= new Array();
 choices[56][0] = "Las im&aacute;genes r&aacute;ster constan de matrices de p&iacute;xeles que se ordenan en una relaci&oacute;n predefinida de columnas y filas";
 choices[56][1] = "Las im&aacute;genes vectoriales se componen de formas matem&aacute;ticas codificadas como f&oacute;rmulas matem&aacute;ticas";
 choices[56][2] = "Las respuestas a) y b) son verdaderas";
 choices[56][3] = "Las respuestas a) y b) son falsas";
 answers[56] = choices[56][2];
 units[56] = "93";
 comments[56] = "Id Pregunta: 5520. NULL";


//  Id pregunta: 5807 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l no es en general cierto a la hora de tomar una decisi&oacute;n sobre adquirir o desarrollar a medida un software?";
 choices[57]= new Array();
 choices[57][0] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos prodecer con cuidado a la hora de adquirirlo, ya que el coste de modificar el software podr&iacute;a superar el coste de desarrollarlo a medida.";
 choices[57][1] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos adquirirlo, ya que el coste de modificar el software es siempre inferior al coste de desarrollarlo a medida.";
 choices[57][2] = "Si existe un software que satisface los requisitos deber&iacute;amos adquirirlo, ya que el coste de desarrollar un software equivalente ser&aacute; en general mayor que el la adquisici&oacute;n.";
 choices[57][3] = "Si existe un software que satisface los requisitos deber&iacute;amos tener en cuenta tambi&eacute;n el coste que supone el mantenimiento del mismo para los a&ntilde;os siguientes, ya que en muchos productos comerciales el coste del mantenimiento suele ser un gasto importante.";
 answers[57] = choices[57][1];
 units[57] = "35";
 comments[57] = "Id Pregunta: 5807. NULL";


//  Id pregunta: 5852 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[58]= new Array();
 choices[58][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[58][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[58][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC";
 choices[58][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste";
 answers[58] = choices[58][1];
 units[58] = "30";
 comments[58] = "Id Pregunta: 5852. Pregunta 32";


//  Id pregunta: 5856 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  El JTC-1 es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[59]= new Array();
 choices[59][0] = "CEN y CENELEC";
 choices[59][1] = "ISO e IEC";
 choices[59][2] = "CEN y ETSI";
 choices[59][3] = "ISO y CIE";
 answers[59] = choices[59][1];
 units[59] = "42";
 comments[59] = "Id Pregunta: 5856. Pregunta 36";


//  Id pregunta: 6105 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[60]= new Array();
 choices[60][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[60][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[60][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[60][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[60] = choices[60][1];
 units[60] = "100";
 comments[60] = "Id Pregunta: 6105. TIC A 2009";


//  Id pregunta: 6176 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Se&ntilde;ale cual de los siguientes no se corresponde con ning&uacute;n libro SCORM";
 choices[61]= new Array();
 choices[61][0] = "Scorm Content Aggregation Model.";
 choices[61][1] = "Scorm Shareable Content Objects.";
 choices[61][2] = "Scorm Run-Time Environment.";
 choices[61][3] = "Scorm Sequencing and Navigation.";
 answers[61] = choices[61][1];
 units[61] = "66";
 comments[61] = "Id Pregunta: 6176. ";


//  Id pregunta: 6209 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En Programaci&oacute;n y Dise&ntilde;o de Algoritmos &iquest;Cu&aacute;l de los siguientes es un nivel de acoplamiento?";
 choices[62]= new Array();
 choices[62][0] = "De marca";
 choices[62][1] = "De presentaci&oacute;n";
 choices[62][2] = "De clases";
 choices[62][3] = "De herencia";
 answers[62] = choices[62][0];
 units[62] = "79";
 comments[62] = "Id Pregunta: 6209. TICB-2009, bloque desarrollo";


//  Id pregunta: 6248 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[63]= new Array();
 choices[63][0] = "La clase DataRow representa una fila de datos en un DataTable";
 choices[63][1] = "La clase DataRow representa una cach&eacute; de memoria interna de datos";
 choices[63][2] = "La clase DataRow representa una tabla de datos en memoria";
 choices[63][3] = "La clase DataRow representa el esquema de una columna en una DataTable";
 answers[63] = choices[63][0];
 units[63] = "82";
 comments[63] = "Id Pregunta: 6248. TICB-2009, bloque desarrollo";


//  Id pregunta: 6328 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  La operaci&oacute;n de JOIN:";
 choices[64]= new Array();
 choices[64][0] = "Hace &uacute;nicamente el producto cartesiano.";
 choices[64][1] = "Realiza el producto cartesiano y elimina aquellas tuplas que tienen el mismo valor en los atributos comunes.";
 choices[64][2] = "Realiza el producto cartesiano y elimina aquellas tuplas que no tienen el mismo valor en los atributos comunes.";
 choices[64][3] = "Elimina los atributos que no est&aacute;n repetidos.";
 answers[64] = choices[64][2];
 units[64] = "58";
 comments[64] = "Id Pregunta: 6328. NULL";


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


//  Id pregunta: 6422 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Proporcionar a los usuarios el tiempo suficiente para leer y usar el contenido es una pauta que corresponde, &iquest;a qu&eacute; principio de WCAG 2.0?";
 choices[66]= new Array();
 choices[66][0] = "Perceptible";
 choices[66][1] = "Operable";
 choices[66][2] = "Robusto";
 choices[66][3] = "Comprensible";
 answers[66] = choices[66][1];
 units[66] = "39";
 comments[66] = "Id Pregunta: 6422. NULL";


//  Id pregunta: 6468 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Seg&uacute;n M&eacute;trica V3 las pruebas de seguridad, rendimiento y operaci&oacute;n se encuentran englobadas dentro del conjunto de pruebas de:";
 choices[67]= new Array();
 choices[67][0] = "Aceptaci&oacute;n";
 choices[67][1] = "Regresi&oacute;n";
 choices[67][2] = "Integraci&oacute;n";
 choices[67][3] = "Implantaci&oacute;n";
 answers[67] = choices[67][3];
 units[67] = "86";
 comments[67] = "Id Pregunta: 6468. Castilla La Mancha 2009";


//  Id pregunta: 6551 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Revisar los logs de seguridad es un tipo de seguridad";
 choices[68]= new Array();
 choices[68][0] = "Preventiva";
 choices[68][1] = "De detecci&oacute;n";
 choices[68][2] = "Disuasoria";
 choices[68][3] = "Correctiva";
 answers[68] = choices[68][1];
 units[68] = "111";
 comments[68] = "Id Pregunta: 6551. NULL";


//  Id pregunta: 6587 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El RD 1720/2007 s&oacute;lo desarrolla las medidas de seguridad en el tratamiento de datos de car&aacute;cter personal para los ficheros";
 choices[69]= new Array();
 choices[69][0] = "automatizados";
 choices[69][1] = "no automatizados";
 choices[69][2] = "A y B son correctas";
 choices[69][3] = "A y B son incorrectas";
 answers[69] = choices[69][2];
 units[69] = "29";
 comments[69] = "Id Pregunta: 6587. NULL";


//  Id pregunta: 6631 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Hablando en calidad de Software de SPICE, decir cual de las siguientes afirmaciones NO es cierta:";
 choices[70]= new Array();
 choices[70][0] = "SPICE es un est&aacute;ndar internacional de evaluaci&oacute;n y determinaci&oacute;n de la capacidad ymejora continua de procesos de ingenier&iacute;a del software";
 choices[70][1] = "SPICE absorbe la escala de puntuaci&oacute;n de capacidad de CMM y el ciclo de vida de ISO 12207";
 choices[70][2] = "Se corresponde con la norma ISO/IEC 15054";
 choices[70][3] = "Absorbe la representaci&oacute;n de capacidad basada en perfiles de atributos de BOOTSTRAP";
 answers[70] = choices[70][2];
 units[70] = "87";
 comments[70] = "Id Pregunta: 6631. NULL";


//  Id pregunta: 7177 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  El n&uacute;mero m&aacute;ximo de certificados que se pueden almacenar en una  tarjeta criptogr&aacute;fica CERES es:";
 choices[71]= new Array();
 choices[71][0] = "4";
 choices[71][1] = "5";
 choices[71][2] = "10";
 choices[71][3] = "7";
 answers[71] = choices[71][2];
 units[71] = "74";
 comments[71] = "Id Pregunta: 7177. Examen TIC B 2009. Seg&uacute;n Proyecto CERES actualizado al a&ntilde;o 2015";


//  Id pregunta: 7267 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En el &aacute;mbito del Frame Relay, el CIR se refiere";
 choices[72]= new Array();
 choices[72][0] = "Al ratio de ocupaci&oacute;n m&aacute;xima del canal";
 choices[72][1] = "A la velocidad m&iacute;nima comprometida";
 choices[72][2] = "Al porcentaje m&aacute;ximo de tramas err&oacute;neas garantizado";
 choices[72][3] = "A la velocidad m&aacute;xima asegurada";
 answers[72] = choices[72][1];
 units[72] = "109";
 comments[72] = "Id Pregunta: 7267. Examen TIC B 2009";


//  Id pregunta: 7316 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de acceso a datos de Microsoft:";
 choices[73]= new Array();
 choices[73][0] = "ADO.NET";
 choices[73][1] = "OLEDB";
 choices[73][2] = "DEA";
 choices[73][3] = "DAO";
 answers[73] = choices[73][2];
 units[73] = "59";
 comments[73] = "Id Pregunta: 7316. NULL";


//  Id pregunta: 8419 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[74]= new Array();
 choices[74][0] = "Bluetooth";
 choices[74][1] = "PayPal Mobile";
 choices[74][2] = "NFC (Near Field Communication)";
 choices[74][3] = "3D Secure";
 answers[74] = choices[74][2];
 units[74] = "70, 107";
 comments[74] = "Id Pregunta: 8419. ";


//  Id pregunta: 8476 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[75]= new Array();
 choices[75][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[75][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[75][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[75][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[75] = choices[75][0];
 units[75] = "101";
 comments[75] = "Id Pregunta: 8476. Examen TIC A2 2010 interna";


//  Id pregunta: 8627 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[76]= new Array();
 choices[76][0] = "Por encaminamiento IP y basada en ATM";
 choices[76][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[76][2] = "Mediante solicitud-reserva y por contienda.";
 choices[76][3] = "En estrella y en &aacute;rbol.";
 answers[76] = choices[76][2];
 units[76] = "101, 102";
 comments[76] = "Id Pregunta: 8627. Examen TIC A2 2010 interna";


//  Id pregunta: 8634 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[77]= new Array();
 choices[77][0] = "Actividades de Seguimiento y Control.";
 choices[77][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[77][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[77][3] = "Actividades de Inicio del Proyecto.";
 answers[77] = choices[77][1];
 units[77] = "86";
 comments[77] = "Id Pregunta: 8634. Examen TIC A2 2010 interna";


//  Id pregunta: 8665 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  El protocolo MESI:";
 choices[78]= new Array();
 choices[78][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM.";
 choices[78][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP.";
 choices[78][2] = "Controla las colisiones en redes Token Ring.";
 choices[78][3] = "Controla la coherencia cach&eacute; en algunos procesadores.";
 answers[78] = choices[78][3];
 units[78] = "46, 52";
 comments[78] = "Id Pregunta: 8665. Examen UPM A2 2011";


//  Id pregunta: 8732 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[79]= new Array();
 choices[79][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[79][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[79][2] = "Firma electr&oacute;nica avanzada.";
 choices[79][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 8732. Examen TIC A2 2010 interna";


//  Id pregunta: 8790 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es correcta?";
 choices[80]= new Array();
 choices[80][0] = "Las direcciones no son jer&aacute;rquicas y se asignan aleatoriamente";
 choices[80][1] = "Hay 2.7 billones de direcciones disponibles para asignar";
 choices[80][2] = "Las direcciones broadcast se reemplazan con direcciones multicast";
 choices[80][3] = "Un interfaz de red &uacute;nicamente podr&aacute; ser configurado con una &uacute;nica direcci&oacute;n";
 answers[80] = choices[80][2];
 units[80] = "100";
 comments[80] = "Id Pregunta: 8790. Examen UPM A2 2011";


//  Id pregunta: 8795 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Qu&eacute; comando de unix no tiene que ver con el control de trabajos de ejecuci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "jobs";
 choices[81][1] = "fg";
 choices[81][2] = "pg";
 choices[81][3] = "bg";
 answers[81] = choices[81][2];
 units[81] = "53, 54";
 comments[81] = "Id Pregunta: 8795. Examen UPM A2 2011";


//  Id pregunta: 8904 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[82]= new Array();
 choices[82][0] = "En el navegador del cliente.";
 choices[82][1] = "En el servidor Web.";
 choices[82][2] = "En el proxy.";
 choices[82][3] = "En el servidor de aplicaciones";
 answers[82] = choices[82][0];
 units[82] = "60";
 comments[82] = "Id Pregunta: 8904. Operador Ayto. Madrid 2010";


//  Id pregunta: 8915 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con XML:";
 choices[83]= new Array();
 choices[83][0] = "Es un lenguaje de programaci&oacute;n para aplicaciones basadas en Internet.";
 choices[83][1] = "Es un lenguaje de marcado que, al igual que HTML, hace uso de etiquetas (&ldquo;tags&rdquo;).";
 choices[83][2] = "Es un lenguaje independiente de plataforma cuyo objetivo es definir c&oacute;mo un navegador est&aacute;ndar debe presentar la informaci&oacute;n definida en HTML.";
 choices[83][3] = "Es un lenguaje definido por Microsoft para implementar su arquitectura orientada a servicios";
 answers[83] = choices[83][1];
 units[83] = "69";
 comments[83] = "Id Pregunta: 8915. Operador Ayto. Madrid 2010";


//  Id pregunta: 9123 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;C&oacute;mo se puede enmarcar el proyecto SETIHome de investigaci&oacute;n de vida extraterrestre?";
 choices[84]= new Array();
 choices[84][0] = "Como una soluci&oacute;n de web 2.0";
 choices[84][1] = "Como un ejemplo pr&aacute;ctico de computaci&oacute;n Grid";
 choices[84][2] = "Una soluci&oacute;n basada en tecnolog&iacute;a Oracle.";
 choices[84][3] = "Ninguna respuesta es correcta.";
 answers[84] = choices[84][1];
 units[84] = "45";
 comments[84] = "Id Pregunta: 9123. ";


//  Id pregunta: 9220 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; es Zoning?";
 choices[85]= new Array();
 choices[85][0] = "Es un concepto perteneciente a las redes SAN de FC";
 choices[85][1] = "Cada zona se comporta como si en la red SAN solo existienen los dispositivos que forman parte de ella.";
 choices[85][2] = "El servidor y la cabina debe estar en la misma zona y adicionalmente la cabina debe permitir el acceso del servicio a dicha LUN.";
 choices[85][3] = "Todas son v&aacute;lidas";
 answers[85] = choices[85][3];
 units[85] = "48";
 comments[85] = "Id Pregunta: 9220. ";


//  Id pregunta: 9330 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI";
 choices[86]= new Array();
 choices[86][0] = "Equivale al cable clase E de ISO";
 choices[86][1] = "Es el cable adecuado para transmisiones de 100 mbps";
 choices[86][2] = "Su rango de funcionamiento alcanza los 100 mhz";
 choices[86][3] = "Se trata de una";
 answers[86] = choices[86][0];
 units[86] = "99";
 comments[86] = "Id Pregunta: 9330. NULL";


//  Id pregunta: 9392 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  En las comunicaciones m&oacute;viles, permitir que se mantenga la conexi&oacute;n cuando un dispositivo m&oacute;vil se cambia dentro de la red a la que pertenece de la zona cubierta por una estaci&oacute;n base a otra, se conoce como:";
 choices[87]= new Array();
 choices[87][0] = "Roaming.";
 choices[87][1] = "Cobertura.";
 choices[87][2] = "Talk-out.";
 choices[87][3] = "hand-off o handover.";
 answers[87] = choices[87][3];
 units[87] = "108";
 comments[87] = "Id Pregunta: 9392. Examen TIC A2 2011 Libre";


//  Id pregunta: 9514 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos no existe dentro de la clase abstracta HttpServlet?";
 choices[88]= new Array();
 choices[88][0] = "doGet()";
 choices[88][1] = "doDelete()";
 choices[88][2] = "doPut()";
 choices[88][3] = "Todos los m&eacute;todos anteriores existen en el clase HttpServlet";
 answers[88] = choices[88][3];
 units[88] = "116";
 comments[88] = "Id Pregunta: 9514. NULL";


//  Id pregunta: 9540 AÃ±o de creación de pregunta: 2013-01-01
 questions[89]= "90)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[89]= new Array();
 choices[89][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa.";
 choices[89][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[89][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[89][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[89] = choices[89][2];
 units[89] = "30";
 comments[89] = "Id Pregunta: 9540. Examen TIC A1 2011 (Ley 11/2007, art&iacute;culo 11.2)";


//  Id pregunta: 9612 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; es una vista materializada?";
 choices[90]= new Array();
 choices[90][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[90][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[90][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[90][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[90] = choices[90][1];
 units[90] = "58";
 comments[90] = "Id Pregunta: 9612. NULL";


//  Id pregunta: 9849 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[91]= new Array();
 choices[91][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[91][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[91][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[91][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[91] = choices[91][2];
 units[91] = "111";
 comments[91] = "Id Pregunta: 9849. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9953 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Dentro del perfil analista de M&eacute;trica v3 se agrupa uno de los siguientes participantes:";
 choices[92]= new Array();
 choices[92][0] = "Especialista en Comunicaciones";
 choices[92][1] = "Usuarios expertos";
 choices[92][2] = "T&eacute;cnicos de Comunicaciones. ";
 choices[92][3] = "Grupo de Aseguramiento de la Calidad";
 answers[92] = choices[92][3];
 units[92] = "86";
 comments[92] = "Id Pregunta: 9953. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[93]= new Array();
 choices[93][0] = "Tendr&aacute; vigencia indefinida";
 choices[93][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[93][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[93][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[93] = choices[93][3];
 units[93] = "29";
 comments[93] = "Id Pregunta: 10266. Art&iacute;culo 31.2 y 31.3 de la Ley 15/1999";


//  Id pregunta: 10302 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[94]= new Array();
 choices[94][0] = "15 bits.";
 choices[94][1] = "8 bits.";
 choices[94][2] = "10 bits.";
 choices[94][3] = "3 bits.";
 answers[94] = choices[94][1];
 units[94] = "100";
 comments[94] = "Id Pregunta: 10302. TIC A2, libre, examen 2013";


//  Id pregunta: 10488 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Se&ntilde;ale la respuesta correcta:";
 choices[95]= new Array();
 choices[95][0] = "Las personas pueden certificarse en las diversas opciones de  ITIL (Foundation, Intermediate, etc.) pero las empresas no, deben certificarse en la ISO 20000";
 choices[95][1] = "Las personas y empresas pueden certificarse en ITIL";
 choices[95][2] = "Las personas y empresas pueden certificase en la ISO 20000";
 choices[95][3] = "Las personas s&oacute;lo pueden certificarse en ITIL Foundation, las empresas en ITIL  Intermediate";
 answers[95] = choices[95][0];
 units[95] = "98";
 comments[95] = "Id Pregunta: 10488. NULL";


//  Id pregunta: 11192 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;A cu&aacute;l de las siguientes prioridades de la estrategia Europa 2020 se hace referencia con el objetivo de la b&uacute;squeda de un econom&iacute;a basada en el conocimiento y la innovaci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "Crecimiento inteligente";
 choices[96][1] = "Crecimiento sostenible";
 choices[96][2] = "Crecimiento innovador";
 choices[96][3] = "Crecimiento integrador";
 answers[96] = choices[96][0];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11192. ";


//  Id pregunta: 11379 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; significa &ldquo;Garant&iacute;a de un servicio&rdquo;?";
 choices[97]= new Array();
 choices[97][0] = "El servicio se ajusta al prop&oacute;sito";
 choices[97][1] = "No habr&aacute; fallas en las aplicaciones ni en la infraestructura asociada al servicio";
 choices[97][2] = "Todos los problemas relacionados con el servicio se solucionan gratuitamente durante un per&iacute;odo determinado de tiempo";
 choices[97][3] = "A los clientes se les aseguran ciertos niveles de disponibilidad, capacidad, continuidad y seguridad";
 answers[97] = choices[97][3];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11379. ";


//  Id pregunta: 11451 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Ley 9/2014, el Gobierno, al administrar el espectro radioel&eacute;ctrico, debe:";
 choices[98]= new Array();
 choices[98][0] = "Determinar los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[98][1] = "Establecer el procedimiento para reasignar el uso de las bandas para un uso m&aacute;s eficiente del espectro.";
 choices[98][2] = "Utilizar el espectro de forma adecuada.";
 choices[98][3] = "Todas son atribuciones del Gobierno.";
 answers[98] = choices[98][3];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11451. ";


//  Id pregunta: 11588 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Los contratos de servicios de los organismos aut&oacute;nomos se encuentran sujetos a regulaci&oacute;n armonizada cuando su importe es igual o superior a:";
 choices[99]= new Array();
 choices[99][0] = "50000";
 choices[99][1] = "134000";
 choices[99][2] = "207000";
 choices[99][3] = "862000";
 answers[99] = choices[99][1];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11588. ";


