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


//  Id pregunta: 728 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En una base de datos las vistas";
 choices[1]= new Array();
 choices[1][0] = "Definen la estructura y organizaci&oacute;n de los datos";
 choices[1][1] = "Permiten restringir el acceso, permitiendo que diferentes usuarios s&oacute;lo vean ciertas filas o ciertas columnas de una tabla";
 choices[1][2] = "Se crean autom&aacute;ticamente cuando una consulta se realiza m&aacute;s de una vez en la misma sesi&oacute;n";
 choices[1][3] = "S&oacute;lo pueden ser creadas por el usuario propietario del esquema";
 answers[1] = choices[1][1];
 units[1] = "57";
 comments[1] = "Id Pregunta: 728. Examen TIC MAP B 2004";


//  Id pregunta: 731 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[2]= new Array();
 choices[2][0] = "Perceptron";
 choices[2][1] = "Adaline";
 choices[2][2] = "Art";
 choices[2][3] = "Madaline";
 answers[2] = choices[2][2];
 units[2] = "63,64";
 comments[2] = "Id Pregunta: 731. Examen TIC MAP B 2004";


//  Id pregunta: 735 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[3]= new Array();
 choices[3][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[3][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[3][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[3][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[3] = choices[3][3];
 units[3] = "30";
 comments[3] = "Id Pregunta: 735. Examen TIC MAP B 2004. Ley 34/2002, art&iacute;culo 23";


//  Id pregunta: 739 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En la arquitectura cliente-servidor es falso que:";
 choices[4]= new Array();
 choices[4][0] = "Cliente y servidor tienen que estar obligatoriamente en distintas m&aacute;quinas";
 choices[4][1] = "Un servidor atiende a muchos clientes";
 choices[4][2] = "Hay m&aacute;s tr&aacute;fico de servidor a cliente que de cliente a servidor";
 choices[4][3] = "Todas las respuestas anteriores son verdaderas";
 answers[4] = choices[4][0];
 units[4] = "50";
 comments[4] = "Id Pregunta: 739. Similar a examen TIC SS A 2003";


//  Id pregunta: 867 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes modelos de miner&iacute;a de datos escoger&iacute;a para detectar un posible fraude?";
 choices[5]= new Array();
 choices[5][0] = "El modelo de Verificaci&oacute;n.";
 choices[5][1] = "El modelo de Descubrimiento.";
 choices[5][2] = "El modelo de Simulaci&oacute;n.";
 choices[5][3] = "El modelo Distribuido.";
 answers[5] = choices[5][1];
 units[5] = "68";
 comments[5] = "Id Pregunta: 867. ";


//  Id pregunta: 930 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es SPICE?";
 choices[6]= new Array();
 choices[6][0] = "Una especificaci&oacute;n de SW para la Comunidad Europea.";
 choices[6][1] = "Un SW de simulaci&oacute;n de circuitos electr&oacute;nicos.";
 choices[6][2] = "Una directiva comunitaria sobre la emisi&oacute;n de ruidos medioambientales.";
 choices[6][3] = "Un est&aacute;ndar de facto sobre intercambio de datos seg&uacute;n EDI.";
 answers[6] = choices[6][1];
 units[6] = "46";
 comments[6] = "Id Pregunta: 930. ";


//  Id pregunta: 1000 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El &aacute;rbol formado por las entradas del directorio, en LDAP, se llama:";
 choices[7]= new Array();
 choices[7][0] = "Ltree";
 choices[7][1] = "LDS";
 choices[7][2] = "DIT";
 choices[7][3] = "Todas son falsas";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 1000. NULL";


//  Id pregunta: 1045 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El principio de &quot;Need-To-Know&quot; viene a significar que:";
 choices[8]= new Array();
 choices[8][0] = "Un proceso s&oacute;lo deber&iacute;a acceder a aquello recursos que son necesarios para completar su tarea";
 choices[8][1] = "Un proceso ha de estar siempre activo frente a cualquier ataque pasivo";
 choices[8][2] = "Las dos anteriores son correctas";
 choices[8][3] = "Hace referencia exclusiva a la asignaci&oacute;n de recursos con herramientas PERT, CPM etc";
 answers[8] = choices[8][0];
 units[8] = "52";
 comments[8] = "Id Pregunta: 1045. ";


//  Id pregunta: 1074 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el &aacute;mbito de las estructuras de datos, las siglas VSAM significan:";
 choices[9]= new Array();
 choices[9][0] = "Virtual Storage Access Method";
 choices[9][1] = "Verification System Access Method";
 choices[9][2] = "Very Short Access Method";
 choices[9][3] = "Valued Storage Archival Method";
 answers[9] = choices[9][0];
 units[9] = "48";
 comments[9] = "Id Pregunta: 1074. ";


//  Id pregunta: 1110 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En la orientaci&oacute;n l&oacute;gica de la inteligencia artificial podemos afirmar que:";
 choices[10]= new Array();
 choices[10][0] = "El c&aacute;lculo proposicional entra en la sem&aacute;ntica de las proposiciones, distinguiendo en ella los componentes predicados y los t&eacute;rminos";
 choices[10][1] = "El c&aacute;lculo de predicados representa el lenguaje usual tomando como elemento b&aacute;sico de la formulaci&oacute;n una representaci&oacute;n matem&aacute;tica de las frases declarativas simples (proposiciones)";
 choices[10][2] = "En el c&aacute;lculo proposicional, una proposici&oacute;n es la unidad m&iacute;nima del lenguaje con un contenido de informaci&oacute;n, sobre cuyo significado es posible afirmar la verdad o falsedad";
 choices[10][3] = "Las clases de conectivas &quot;negaci&oacute;n y condicional&quot; pertenecen al c&aacute;lculo de predicados";
 answers[10] = choices[10][2];
 units[10] = "63";
 comments[10] = "Id Pregunta: 1110. ";


//  Id pregunta: 1127 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En relaci&oacute;n con el concepto de memoria virtual, una de las siguientes afirmaciones es falsa. Indique cu&aacute;l:";
 choices[11]= new Array();
 choices[11][0] = "El mecanismo de traducci&oacute;n de las direcciones de las memorias virtuales se basa en una memoria asociativa que contiene la tabla de p&aacute;ginas f&iacute;sicas y sus equivalentes l&oacute;gicas";
 choices[11][1] = "Generalmente existe una memoria asociativa de alta velocidad que sirve para albergar aquellos elementos de la tabla de p&aacute;ginas/segmentos utilizadas m&aacute;s recientemente";
 choices[11][2] = "La viabilidad de la memoria virtual se basa en el principio de la proximidad de las referencias a memorias";
 choices[11][3] = "La memoria virtual paginada da lugar a la fragmentaci&oacute;n externa";
 answers[11] = choices[11][3];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1127. ";


//  Id pregunta: 1128 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En relaci&oacute;n con el diccionario de recursos de informaci&oacute;n de una base de datos, se define 'metadatos' como:";
 choices[12]= new Array();
 choices[12][0] = "El repositorio que contiene todos los datos de la organizaci&oacute;n";
 choices[12][1] = "La informaci&oacute;n relativa al propio diccionario de datos, su estructura y sus caracter&iacute;sticas";
 choices[12][2] = "La informaci&oacute;n de nivel conceptual que determina la visi&oacute;n global del sistema de informaci&oacute;n";
 choices[12][3] = "El conjunto de datos necesarios para deducir determinada informaci&oacute;n no especificada en la base de datos";
 answers[12] = choices[12][1];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1128. ";


//  Id pregunta: 1159 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En Unix la gesti&oacute;n de procesos se realiza:";
 choices[13]= new Array();
 choices[13][0] = "Cuanta m&aacute;s CPU ha consumido un proceso mayor se hace su prioridad, ya que se considera que debe ser uno de los procesos principales del sistema";
 choices[13][1] = "Existe una &uacute;nica cola de procesos. La prioridad se asigna seg&uacute;n el orden de llegada de los mismos";
 choices[13][2] = "El mecanismo de planificaci&oacute;n funciona mediante un timeout que ordena a un driver llamar a una subrutina del kernel cuando ha transcurrido un determinado tiempo";
 choices[13][3] = "El scheduler asigna rodajas de tiempo (time slicers) a los distintos procesos. La duraci&oacute;n de cada rodaja es variable seg&uacute;n la prioridad que tenga asignada el proceso";
 answers[13] = choices[13][3];
 units[13] = "54";
 comments[13] = "Id Pregunta: 1159. ";


//  Id pregunta: 1176 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar cu&aacute;l de las siguientes no es un tipo de georreferenciaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Directa.";
 choices[14][1] = "Discreta.";
 choices[14][2] = "Indirecta.";
 choices[14][3] = "Posicional.";
 answers[14] = choices[14][3];
 units[14] = "67";
 comments[14] = "Id Pregunta: 1176. NULL";


//  Id pregunta: 1199 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Java es un lenguaje de programaci&oacute;n que surgi&oacute; tras realizar pruebas fallidas para dise&ntilde;ar un sistema de programaci&oacute;n de electrodom&eacute;sticos. &iquest;Qu&eacute; empresa cre&oacute; este lenguaje?:";
 choices[15]= new Array();
 choices[15][0] = "Siemens";
 choices[15][1] = "Sun Microsystems";
 choices[15][2] = "General Electric";
 choices[15][3] = "IBM";
 answers[15] = choices[15][1];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1199. NULL";


//  Id pregunta: 1208 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La arquitectura UMA seg&uacute;n Silicon Graphics:";
 choices[16]= new Array();
 choices[16][0] = "Utiliza un bus AGP 16x";
 choices[16][1] = "Utiliza una &uacute;nica memoria para todos los dispositivos, sin que estos tengan memorias locales";
 choices[16][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[16][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[16] = choices[16][1];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1208. ";


//  Id pregunta: 1229 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La memoria EPROM:";
 choices[17]= new Array();
 choices[17][0] = "Es vol&aacute;til y se puede leer y escribir en ella";
 choices[17][1] = "Es una memoria principal permanente pero que s&oacute;lo se puede leer";
 choices[17][2] = "Es borrable de acuerdo con unos procedimientos especiales";
 choices[17][3] = "S&oacute;lo permite acceso secuencial";
 answers[17] = choices[17][2];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1229. ";


//  Id pregunta: 1246 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La tercera generaci&oacute;n de la inform&aacute;tica se caracteriza por:";
 choices[18]= new Array();
 choices[18][0] = "El uso de transistores";
 choices[18][1] = "Uso de microprocesadores";
 choices[18][2] = "El uso de los circuitos SSI";
 choices[18][3] = "El uso de v&aacute;lvulas de vacio";
 answers[18] = choices[18][2];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1246. ";


//  Id pregunta: 1325 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  SAN:";
 choices[19]= new Array();
 choices[19][0] = "Es un fabricante americano de hardware y software";
 choices[19][1] = "Es una red de fibra &oacute;ptica dedicada para el almacenamiento";
 choices[19][2] = "Es una red de &aacute;rea local muy peque&ntilde;a (Simple Area Network)";
 choices[19][3] = "Corresponde con la tecnolog&iacute;a Software Adaptative Networking que permite que los nodos de conmutaci&oacute;n de las redes tengan procesamiento inteligente liberando a los clientes de incompatibilidades de protocolos y de gran cantidad de procesamiento";
 answers[19] = choices[19][1];
 units[19] = "48";
 comments[19] = "Id Pregunta: 1325. ";


//  Id pregunta: 1326 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[20]= new Array();
 choices[20][0] = "Los usuarios";
 choices[20][1] = "Los datos";
 choices[20][2] = "Los documentos";
 choices[20][3] = "Los mensajes";
 answers[20] = choices[20][0];
 units[20] = "74";
 comments[20] = "Id Pregunta: 1326. NULL";


//  Id pregunta: 1573 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;En qu&eacute; consiste el concepto de &quot;web sem&aacute;ntica&quot;?";
 choices[21]= new Array();
 choices[21][0] = "Se trata de un sistema de gesti&oacute;n de contenidos que permite buscar &aacute;gilmente el significado de todo tipo de t&eacute;rminos";
 choices[21][1] = "Se trata de que las p&aacute;ginas web puedan, no s&oacute;lo presentar informaci&oacute;n, sino &quot;entenderla&quot;";
 choices[21][2] = "Es un medio de documentos para personas";
 choices[21][3] = "Todas las anteriores son definiciones correctas";
 answers[21] = choices[21][1];
 units[21] = "64";
 comments[21] = "Id Pregunta: 1573. ";


//  Id pregunta: 1595 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  En los sistemas gestores de bases de datos (SGBD) , &iquest;qu&eacute; diferencia hay entre el DDL y el DML?";
 choices[22]= new Array();
 choices[22][0] = "El DDL se utiliza embebido mediante un precompilador mientras que el DML solamente se puede utilizar con un compilador extendido.";
 choices[22][1] = "El DDL sirve para definir el esquema conceptual y los diferentes esquemas externos de la base de datos  mientras que el DML sirve para gestionar la informaci&oacute;n incluida en dicha base.";
 choices[22][2] = "El DDL se utiliza para definir y mantener las estructuras de la base de datos en el nivel conceptual mientras que el DML sirve para la definici&oacute;n y mantenimiento de las vistas en el nivel externo (usuario).";
 choices[22][3] = "El DDL es el lenguaje de base de datos de los sistemas MVS y el DML es el lenguaje de base de datos para los entornos DOS/VSE.";
 answers[22] = choices[22][1];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1595. ";


//  Id pregunta: 1596 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  En que tres bibliotecas esta basado GTK+";
 choices[23]= new Array();
 choices[23][0] = "Bonobo, Nautilus, ATK";
 choices[23][1] = "Gnome-db/libgda";
 choices[23][2] = "Glib, Pango, ATK";
 choices[23][3] = "BCEL, Log4j";
 answers[23] = choices[23][2];
 units[23] = "62";
 comments[23] = "Id Pregunta: 1596. ";


//  Id pregunta: 1657 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  Acceso directo a memoria (DMA) es:";
 choices[24]= new Array();
 choices[24][0] = "Mecanismo por el que se transfieren datos entre un sistema de entrada/salida y el sistema de memoria sin la intervenci&oacute;n de la CPU.";
 choices[24][1] = "Un modo de funcionamiento opcional del hardware que permite acelerar el acceso a discos duros.";
 choices[24][2] = "Un modo de funcionamiento opcional del software que permite acelerar el acceso a discos duros.";
 choices[24][3] = "Un modo de acceso a dispositivos de entrada/salida en el que cada uno de ellos esta &quot;mapeado&quot; a una direcci&oacute;n de memoria.";
 answers[24] = choices[24][0];
 units[24] = "47";
 comments[24] = "Id Pregunta: 1657. ";


//  Id pregunta: 1658 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  La gesti&oacute;n de un sistema operativo a trav&eacute;s de los sistemas distribuidos";
 choices[25]= new Array();
 choices[25][0] = "Aporta como ventajas: La compartici&oacute;n de recursos, la aceleraci&oacute;n de c&aacute;lculos, la fiabilidad y la comunicaci&oacute;n.";
 choices[25][1] = "Son sistemas altamente acoplados, los procesadores comparten tanto memoria como reloj.";
 choices[25][2] = "Son sistemas d&eacute;bilmente acoplados, compartiendo los procesadores la memoria.";
 choices[25][3] = "Son sistemas d&eacute;bilmente acoplados, los procesadores comparten reloj pero no memoria.";
 answers[25] = choices[25][0];
 units[25] = "50";
 comments[25] = "Id Pregunta: 1658. MAP-B 2003";


//  Id pregunta: 1699 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l ser&iacute;a una caracter&iacute;stica esencial a la hora de valorar un equipo mini?";
 choices[26]= new Array();
 choices[26][0] = "Disponer de microprocesadores RISCs.";
 choices[26][1] = "La modularidad.";
 choices[26][2] = "Disponer de sistemas de almacenamiento basados en RAID.";
 choices[26][3] = "La posibilidad de interconexi&oacute;n al host.";
 answers[26] = choices[26][1];
 units[26] = "47";
 comments[26] = "Id Pregunta: 1699. ";


//  Id pregunta: 1704 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  La t&eacute;cnica usada para incrementar la velocidad de los PC, copiando a memoria RAM el c&oacute;digo de la memoria BIOS ROM tras el arranque, se denomina:";
 choices[27]= new Array();
 choices[27][0] = "Overclocking";
 choices[27][1] = "Ghosting";
 choices[27][2] = "Shadowing";
 choices[27][3] = "La BIOS no se puede ejecutar en una memoria RAM";
 answers[27] = choices[27][2];
 units[27] = "47";
 comments[27] = "Id Pregunta: 1704. ";


//  Id pregunta: 1716 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Los sistemas operativos multitarea:";
 choices[28]= new Array();
 choices[28][0] = "se conocen tambi&eacute;n como sistemas multiproceso";
 choices[28][1] = "el procesador cambia de una tarea a otra dando la apariencia de que se realizan concurrentemente";
 choices[28][2] = "son &quot;preemptive&quot; si cada tarea controla el tiempo que utiliza la CPU";
 choices[28][3] = "son &quot;cooperative&quot; si el sistema operativo controla el tiempo que cada tarea utiliza la CPU";
 answers[28] = choices[28][1];
 units[28] = "52";
 comments[28] = "Id Pregunta: 1716. NULL";


//  Id pregunta: 1719 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Un proceso pasa por los estados, RUN, READY IN, READY OUT, WAITING IN y WAITING OUT. Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta";
 choices[29]= new Array();
 choices[29][0] = "RUN, ejecut&aacute;ndose actualmente, s&oacute;lo puede estar en estado RUN un proceso por m&aacute;quina, independientemente del n&uacute;mero de procesadores que exista en el sistema.";
 choices[29][1] = "READY IN, est&aacute; preparado para ser ejeutado en cuanto la CPU se quede libre, estando residente en la memoria secundaria.";
 choices[29][2] = "READY OUT, est&aacute; preparado para ser ejecutado en cuanto la CPU se quede libre, estando residente en memoria principal.";
 choices[29][3] = "WAITING IN y WAITING OUT, el proceso est&aacute; esperando la finalizaci&oacute;n de alg&uacute;n evento (normalmente de E/S), estando residente en memoria principal o secundaria respectivamente.";
 answers[29] = choices[29][3];
 units[29] = "53";
 comments[29] = "Id Pregunta: 1719. ";


//  Id pregunta: 1728 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  El permiso de Unix 500 permite:";
 choices[30]= new Array();
 choices[30][0] = "Lectura y escritura para el propietario del archivo";
 choices[30][1] = "Lectura y ejecuci&oacute;n para  el propietario del archivo";
 choices[30][2] = "lectura y escritura para todos los usuarios";
 choices[30][3] = "lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[30] = choices[30][1];
 units[30] = "54";
 comments[30] = "Id Pregunta: 1728. NULL";


//  Id pregunta: 1745 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Cu&aacute;les son las funciones de un SGBD";
 choices[31]= new Array();
 choices[31][0] = "Facilitar la compresi&oacute;n de un problema complejo como es el dise&ntilde;o de una base de datos";
 choices[31][1] = "Proporcionar un DDL (Lenguaje de Definici&oacute;n de Datos) o un DML (Lenguaje de Manipulaci&oacute;n de Datos)";
 choices[31][2] = "Proporcionar soluciones ante problemas de cuota de almacenamiento concurrente";
 choices[31][3] = "Proporcionar un diccionario de datos";
 answers[31] = choices[31][3];
 units[31] = "57";
 comments[31] = "Id Pregunta: 1745. ";


//  Id pregunta: 1823 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Las especializaciones de los sistemas de Datawarehouse orientadas a departamentos o &aacute;reas de negocio concretas se denominan:";
 choices[32]= new Array();
 choices[32][0] = "Data Marts.";
 choices[32][1] = "Data Cleansing.";
 choices[32][2] = "Data Mining.";
 choices[32][3] = "Metadata.";
 answers[32] = choices[32][0];
 units[32] = "68";
 comments[32] = "Id Pregunta: 1823. ";


//  Id pregunta: 1848 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  ESTROFA:";
 choices[33]= new Array();
 choices[33][0] = "Especificaciones para el tratamiento de flujos automatizados";
 choices[33][1] = "Elaboradas por la COAXI hoy Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[33][2] = "Elaboradas con el fin de homogeneizar terminolog&iacute;a y asesorar a los compradores p&uacute;blicos a la hora de la adquisici&oacute;n de productos de Data Warehouse";
 choices[33][3] = "Todos los anteriores";
 answers[33] = choices[33][0];
 units[33] = "71";
 comments[33] = "Id Pregunta: 1848. ";


//  Id pregunta: 1862 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  Relativo a la firma digital, indique la opci&oacute;n incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "XMLDSig es una sintaxis XML para la generaci&oacute;n de firma digital";
 choices[34][1] = "XMLDSig s&oacute;lo se utiliza para firmar documentos XML";
 choices[34][2] = "XML Advanced Electronic Signatures (XAdES) cumple la directiva europea sobre firma electr&oacute;nica 1999/93/CE";
 choices[34][3] = "Las respuestas 'a' y 'c' son verdaderas";
 answers[34] = choices[34][1];
 units[34] = "74";
 comments[34] = "Id Pregunta: 1862. NULL";


//  Id pregunta: 1878 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  El RD 209/2003 Regulaci&oacute;n de registros y notificaciones telem&aacute;ticas se aplica a:";
 choices[35]= new Array();
 choices[35][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[35][1] = "Las Administraciones P&uacute;blicas y Entidades Locales.";
 choices[35][2] = "La Administraci&oacute;n General del Estado.";
 choices[35][3] = " A ninguna a no ser que se realice su desarrollo.";
 answers[35] = choices[35][2];
 units[35] = "30";
 comments[35] = "Id Pregunta: 1878. ";


//  Id pregunta: 1880 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  La imposici&oacute;n de sanciones por incumplimiento de lo previsto en la Ley 34/2002 (LSSICE) corresponder&aacute; a:";
 choices[36]= new Array();
 choices[36][0] = "En el caso de infracciones muy graves, al Ministro de Industria, Energ&iacute;a y Turismo, y en el de infracciones graves y leves, al Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[36][1] = "En el caso de infracciones muy graves, al Ministerio de Industria, Turismo y Comercio y en el caso de infracciones graves y leves, al &oacute;rgano que dict&oacute; la resoluci&oacute;n incumplida";
 choices[36][2] = "En todos los casos, al Ministerio de Industria, Turismo y Comercio";
 choices[36][3] = "La Agencia de Protecci&oacute;n de Datos";
 answers[36] = choices[36][0];
 units[36] = "30";
 comments[36] = "Id Pregunta: 1880. Ley 34/2002, art&iacute;culo 43 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 1898 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Cual es la tecnica basada en software que permite a un CAU telef&oacute;nico tomar el control del ordenador de un usuario para mostrarle algo?";
 choices[37]= new Array();
 choices[37][0] = "despertar remoto (remote wakeup)";
 choices[37][1] = "navegaci&oacute;n colaborativa";
 choices[37][2] = "Invocaci&oacute;n Remota de M&eacute;todo (RMI)";
 choices[37][3] = "Control de visualizaci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "26";
 comments[37] = "Id Pregunta: 1898. ";


//  Id pregunta: 1905 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Espacio intermedio de almacenamiento utilizado hasta obtener una unidad de datos que permita su procesado";
 choices[38]= new Array();
 choices[38][0] = "registro";
 choices[38][1] = "cache";
 choices[38][2] = "buffer";
 choices[38][3] = "pipelining";
 answers[38] = choices[38][2];
 units[38] = "47";
 comments[38] = "Id Pregunta: 1905. ";


//  Id pregunta: 1911 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Respecto de las arquitecturas Grid, es falso afirmar que:";
 choices[39]= new Array();
 choices[39][0] = "El porcentaje de dedicaci&oacute;n de cada m&aacute;quina de la arquitectura es fijo e independiente de la carga de cada una.";
 choices[39][1] = "Su nombre proviene del paradigma de la red el&eacute;ctrica.";
 choices[39][2] = "Los recursos que las componen se encuentran distribuidos geogr&aacute;ficamente.";
 choices[39][3] = "Sus creadores fueron Ian Foster y Carl Kesselman.";
 answers[39] = choices[39][0];
 units[39] = "45";
 comments[39] = "Id Pregunta: 1911. ";


//  Id pregunta: 4304 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En una base de datos relacional, para definir la estructura org&aacute;nica de un organismo p&uacute;blico, la mejor soluci&oacute;n ser&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "Definir una tabla de departamentos con una relaci&oacute;n reflexiva &lsquo;pertenece a&rsquo;.";
 choices[40][1] = "Definir dos tablas de departamentos con una relaci&oacute;n &lsquo;pertenece a&rsquo; entre ellas.";
 choices[40][2] = "Definir una tabla de departamentos con una clave tipo &lsquo;TREE&rsquo; que recoja la estructura org&aacute;nica.";
 choices[40][3] = "Preguntar al usuario cu&aacute;ntos niveles de departamentos tiene el organismo, y definir en una tabla de departamentos tantos atributos como niveles posibles pueda haber.";
 answers[40] = choices[40][0];
 units[40] = "58";
 comments[40] = "Id Pregunta: 4304. ";


//  Id pregunta: 4362 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un operador en el an&aacute;lisis de los almacenes de datos multidimensionales?";
 choices[41]= new Array();
 choices[41][0] = "Duck.";
 choices[41][1] = "Drill.";
 choices[41][2] = "Roll.";
 choices[41][3] = "Slice &amp; dice.";
 answers[41] = choices[41][0];
 units[41] = "68";
 comments[41] = "Id Pregunta: 4362. ";


//  Id pregunta: 4454 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El sistema de almacenamiento SAN:";
 choices[42]= new Array();
 choices[42][0] = "Se corresponde con una red independiente de almacenamiento de altas prestaciones basada en tecnolog&iacute;a de fibra &oacute;ptica.";
 choices[42][1] = "Se corresponde con el sistema de conexi&oacute;n directa (discos en RAID, cinta o disco &oacute;ptico) a un servidor que procesa todas as peticiones de archivos.";
 choices[42][2] = "Tiene una serie de limitaciones entre las que destaca su falta de escalabilidad, lo que hace que su use sea limitado.";
 choices[42][3] = "Se corresponde con un dispositivo de almacenamiento que se conecta a una LAN en la que est&aacute;n conectados los dem&aacute;s equipos , normalmente una Ethernet, y que posee una ip propia.";
 answers[42] = choices[42][0];
 units[42] = "48";
 comments[42] = "Id Pregunta: 4454. ";


//  Id pregunta: 4461 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Es un est&aacute;ndar de e-learning: ";
 choices[43]= new Array();
 choices[43][0] = "IEEE";
 choices[43][1] = "ADL";
 choices[43][2] = "LMS";
 choices[43][3] = "SCORM";
 answers[43] = choices[43][3];
 units[43] = "66";
 comments[43] = "Id Pregunta: 4461. ";


//  Id pregunta: 4576 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Cual de los siguientes aspectos NO son tratados en Ia Ley 34/2002, de 11 de julio, de servicios de Ia sociedad de la informaci&oacute;n y de comercio electr&oacute;nico:";
 choices[44]= new Array();
 choices[44][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[44][1] = "promueve Ia elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[44][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a Ia informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[44][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[44] = choices[44][0];
 units[44] = "30";
 comments[44] = "Id Pregunta: 4576. ";


//  Id pregunta: 4839 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En relaci&oacute;n con las licencias de software libre, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[45]= new Array();
 choices[45][0] = "La licencia GPL (General Public License) de software libre obliga a publicar las modificaciones realizadassobre el software";
 choices[45][1] = "En un producto distribuido bajo licencia GPL es obligatorio incluir un fichero que contenga &uacute;nicamente lost&eacute;rminos concretos de la licencia y un aviso de que los derechos de copia son establecidos por el autor delproducto";
 choices[45][2] = "La licencia LGPL (Lesser General Public License) permite la inclusi&oacute;n del software que ampara enprogramas distribuidos bajo licencia no GPL";
 choices[45][3] = "La licencia LGPL no es compatible con la definici&oacute;n del software distribuido bajo el tipo licencia &quot;Copyleft&quot;";
 answers[45] = choices[45][2];
 units[45] = "61";
 comments[45] = "Id Pregunta: 4839. ";


//  Id pregunta: 4880 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization /International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas yprotocolos de comunicaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "7816-2";
 choices[46][1] = "7816-3";
 choices[46][2] = "7816-4";
 choices[46][3] = "7816-5";
 answers[46] = choices[46][1];
 units[46] = "73";
 comments[46] = "Id Pregunta: 4880. ";


//  Id pregunta: 5078 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public KeyInfrastructures)? :";
 choices[47]= new Array();
 choices[47][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[47][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[47][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;npermitidas para dicho certificado";
 choices[47][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[47] = choices[47][3];
 units[47] = "74";
 comments[47] = "Id Pregunta: 5078. Examen TIC A 2007";


//  Id pregunta: 5134 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Seg&uacute;n el art&iacute;culo 21 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio electr&oacute;nico, las comunicaciones comerciales a trav&eacute;s de correo electr&oacute;nico:";
 choices[48]= new Array();
 choices[48][0] = "Est&aacute;n estrictamente prohibidas en todos los casos.";
 choices[48][1] = "Est&aacute;n permitidas si el destinatario de las mismas no manifiesta su oposici&oacute;n inequ&iacute;voca y expresa.";
 choices[48][2] = "Est&aacute;n permitidas en los casos previstos en la Ley Org&aacute;nica de Protecci&oacute;n de Datos.";
 choices[48][3] = "Est&aacute;n permitidas si han sido solicitadas o previamente autorizadas por los destinatarios de las mismas.";
 answers[48] = choices[48][3];
 units[48] = "30";
 comments[48] = "Id Pregunta: 5134. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5482 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Firmar un mensaje electr&oacute;nico";
 choices[49]= new Array();
 choices[49][0] = "Es lo mismo que cifrarlo";
 choices[49][1] = "Garantiza la confidencialidad";
 choices[49][2] = "Es lo mismo que codificarlo";
 choices[49][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[49] = choices[49][3];
 units[49] = "72";
 comments[49] = "Id Pregunta: 5482. Castilla y Le&oacute;n";


//  Id pregunta: 5617 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En UNIX, el t&eacute;rmino &ldquo;vi&rdquo; se refiere a :";
 choices[50]= new Array();
 choices[50][0] = "Un comando que lista las 20 primeras l&iacute;neas de un fichero";
 choices[50][1] = "Un comando que indica el proceso activo";
 choices[50][2] = "Un editor de texto";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][2];
 units[50] = "53";
 comments[50] = "Id Pregunta: 5617. ";


//  Id pregunta: 5890 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Cu&aacute;les de los siguientes elementos no pueden ser miembros de una clase en Java SE 5?";
 choices[51]= new Array();
 choices[51][0] = "Variables de instancia y de clase";
 choices[51][1] = "M&eacute;todos";
 choices[51][2] = "Otras clases (clases internas)";
 choices[51][3] = "Todas las anteriores son ciertas";
 answers[51] = choices[51][3];
 units[51] = "60";
 comments[51] = "Id Pregunta: 5890. NULL";


//  Id pregunta: 5898 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes corresponde a una tecnolog&iacute;a Java para acceder a bases de datos relacionales?";
 choices[52]= new Array();
 choices[52][0] = "JRDB";
 choices[52][1] = "JPA";
 choices[52][2] = "ORM";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][1];
 units[52] = "60";
 comments[52] = "Id Pregunta: 5898. NULL";


//  Id pregunta: 5899 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Qu&eacute; es JPA?";
 choices[53]= new Array();
 choices[53][0] = "Una tecnolog&iacute;a Java de acceso a bases de datos alternativa a JDBC y con la cu&aacute;l no tiene nada que ver";
 choices[53][1] = "Una tecnolog&iacute;a Java de acceso a bases de datos de mayor nivel que JDBC, en la cu&aacute;l se apoya";
 choices[53][2] = "Es la capa que soporta la portabilidad entre gestores de bases de datos en JDBC";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = choices[53][1];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5899. NULL";


//  Id pregunta: 6132 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  La creaci&oacute;n de una vista l&oacute;gica unificada de los datos, a&uacute;n cuando &eacute;stos est&eacute;n dispersos entre varias bases de datos f&iacute;sicas, para as&iacute; disponer de un &uacute;nico modelo de trabajo de los datos de la organizaci&oacute;n, es una manera de definir:";
 choices[54]= new Array();
 choices[54][0] = "Un almac&eacute;n de datos.";
 choices[54][1] = "Un sistema OLAP.";
 choices[54][2] = "Un sistema de informaci&oacute;n a la direcci&oacute;n.";
 choices[54][3] = "Una base de datos.";
 answers[54] = choices[54][0];
 units[54] = "68";
 comments[54] = "Id Pregunta: 6132. TIC A 2009";


//  Id pregunta: 6139 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Linux se genera inspir&aacute;ndose en:";
 choices[55]= new Array();
 choices[55][0] = "Unix y MINIX.";
 choices[55][1] = "Unix y Windows.";
 choices[55][2] = "MINIX y Windows.";
 choices[55][3] = "Unix y OS/360 IBM.";
 answers[55] = choices[55][0];
 units[55] = "53";
 comments[55] = "Id Pregunta: 6139. TIC A 2010";


//  Id pregunta: 6242 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes APIs de JEE especifica la gesti&oacute;n de transacciones a trav&eacute;s de sistemas distribuidos?";
 choices[56]= new Array();
 choices[56][0] = "JNDE";
 choices[56][1] = "JNI";
 choices[56][2] = "JTA";
 choices[56][3] = "JAX";
 answers[56] = choices[56][2];
 units[56] = "60";
 comments[56] = "Id Pregunta: 6242. TICB-2009, bloque desarrollo";


//  Id pregunta: 6320 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Los ficheros inversos se utilizan preferentemente en:";
 choices[57]= new Array();
 choices[57][0] = "Bases de datos relacionales.";
 choices[57][1] = "Bases de datos jer&aacute;rquicas.";
 choices[57][2] = "Sistemas de recuperaci&oacute;n de informaci&oacute;n";
 choices[57][3] = "Bases de datos reticulares.";
 answers[57] = choices[57][2];
 units[57] = "96";
 comments[57] = "Id Pregunta: 6320. ";


//  Id pregunta: 6321 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Las reglas de integridad en una base de datos relacional son:";
 choices[58]= new Array();
 choices[58][0] = "Integridad de claves con las claves ajenas";
 choices[58][1] = "Integridad de entidad e integridad referencial";
 choices[58][2] = "Integridad referente a las claves";
 choices[58][3] = "Restricciones de usuario y claves primarias no nulas";
 answers[58] = choices[58][1];
 units[58] = "58";
 comments[58] = "Id Pregunta: 6321. ";


//  Id pregunta: 6328 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  La operaci&oacute;n de JOIN:";
 choices[59]= new Array();
 choices[59][0] = "Hace &uacute;nicamente el producto cartesiano.";
 choices[59][1] = "Realiza el producto cartesiano y elimina aquellas tuplas que tienen el mismo valor en los atributos comunes.";
 choices[59][2] = "Realiza el producto cartesiano y elimina aquellas tuplas que no tienen el mismo valor en los atributos comunes.";
 choices[59][3] = "Elimina los atributos que no est&aacute;n repetidos.";
 answers[59] = choices[59][2];
 units[59] = "58";
 comments[59] = "Id Pregunta: 6328. NULL";


//  Id pregunta: 6585 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Un fichero de car&aacute;cter personal de entidades financieras para las finalidades relacionadas con la prestaci&oacute;n de servicios financieros de acuerdo a la regulaci&oacute;n de protecci&oacute;n de datos vigente, de las siguientes medidas de seguridad cu&aacute;l no es obligatorio que cumpla?";
 choices[60]= new Array();
 choices[60][0] = "Debe existir un responsable de seguridad encargado de coordinar y controlar las medidas del documento";
 choices[60][1] = "Debe llevarse a cabo al menos una copia de respaldo semanal";
 choices[60][2] = "Debe existir un registro de accesos: usuario, hora, fichero, tipo de acceso, autorizado o denegado";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][2];
 units[60] = "29";
 comments[60] = "Id Pregunta: 6585. NULL";


//  Id pregunta: 6596 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[61]= new Array();
 choices[61][0] = "En la distribuci&oacute;n de soportes para datos personales a los que corresponde aplicar medidas de seguridad de nivel alto";
 choices[61][1] = "Los datos personales en su transmisi&oacute;n a trav&eacute;s de las redes de telecomunicaciones";
 choices[61][2] = "A y B son correctas";
 choices[61][3] = "A y B son incorrectas";
 answers[61] = choices[61][0];
 units[61] = "75";
 comments[61] = "Id Pregunta: 6596. NULL";


//  Id pregunta: 7321 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Seg&uacute;n la ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico cu&aacute;l de los siguientes servicios se encuentra excluidos del &aacute;mbito de aplicaci&oacute;n de la Ley:";
 choices[62]= new Array();
 choices[62][0] = "Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones p&uacute;blicas";
 choices[62][1] = "Los servicios prestados por prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a";
 choices[62][2] = "Los servicios de la sociedad de la informaci&oacute;n que los prestadores residentes o domiciliados en otro Estado ofrezcan a trav&eacute;s de un establecimiento permanente situado en Espa&ntilde;a";
 choices[62][3] = "Servicios que afecten a derechos de propiedad intelectual o industrial prestados por prestadores de servicios establecidos en otro Estado miembro de la Uni&oacute;n Europea o del Espacio Econ&oacute;mico Europeo cuando el destinatario de los servicios radique en Espa&ntilde;a";
 answers[62] = choices[62][0];
 units[62] = "70";
 comments[62] = "Id Pregunta: 7321. NULL";


//  Id pregunta: 8254 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Seleccione la respuesta correcta acerca de los sistemas de representaci&oacute;n del conocimiento:";
 choices[63]= new Array();
 choices[63][0] = "La representaci&oacute;n del conocimiento mediante ternas Objeto, Atributo, Valor, no tiene mecanismos inferenciales.";
 choices[63][1] = "Las redes sem&aacute;nticas no tienen capacidad de representar acciones.";
 choices[63][2] = "La representaci&oacute;n en marcos admite el concepto de herencia, pero las redes sem&aacute;nticas no.";
 choices[63][3] = "En los sistemas de razonamiento mon&oacute;tono el conocimiento no var&iacute;a durante el proceso de razonamiento.";
 answers[63] = choices[63][0];
 units[63] = "64";
 comments[63] = "Id Pregunta: 8254. Examen TIC A1 2010";


//  Id pregunta: 8302 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  La especificaci&oacute;n PKCS#3 de RSA se refiere a: ";
 choices[64]= new Array();
 choices[64][0] = "El est&aacute;ndar criptogr&aacute;fico RSA. ";
 choices[64][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[64][2] = "El intercambio de claves Diffie-Hellman.";
 choices[64][3] = "La sintaxis del mensaje criptogr&aacute;fico. ";
 answers[64] = choices[64][2];
 units[64] = "72";
 comments[64] = "Id Pregunta: 8302. Examen TIC A2 2010";


//  Id pregunta: 8761 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Sean dos procesos: P1, con tiempo de ejecuci&oacute;n de 20ms, y P2, con 15ms. El planificador a corto plazo act&uacute;a seg&uacute;n un Round Robin con cuanto de 10ms y tiempo de conmutaci&oacute;n de tarea de 5ms Marcar el tiempo de retorno (regreso) de P2, teniendo en cuenta que se empieza ejecutando P1.";
 choices[65]= new Array();
 choices[65][0] = "35";
 choices[65][1] = "40";
 choices[65][2] = "50";
 choices[65][3] = "55";
 answers[65] = choices[65][2];
 units[65] = "52";
 comments[65] = "Id Pregunta: 8761. Examen TIC A2 2010 interna";


//  Id pregunta: 8783 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (LDD) de SQL?";
 choices[66]= new Array();
 choices[66][0] = "ROLLBACK";
 choices[66][1] = "UPDATE";
 choices[66][2] = "GRANT";
 choices[66][3] = "TRUNCATE";
 answers[66] = choices[66][3];
 units[66] = "57, 58";
 comments[66] = "Id Pregunta: 8783. Examen UPM A2 2011";


//  Id pregunta: 8860 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[67]= new Array();
 choices[67][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura";
 choices[67][1] = "Ofrece la maxima seguridad de los datos almacenados";
 choices[67][2] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas";
 choices[67][3] = "Puede ser implementado tanto en Hardware como en Software";
 answers[67] = choices[67][2];
 units[67] = "48";
 comments[67] = "Id Pregunta: 8860. Analista Ayto. Madrid 2010";


//  Id pregunta: 8950 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El Registro Electr&oacute;nico Com&uacute;n ser&aacute; gestionado por:";
 choices[68]= new Array();
 choices[68][0] = "El Ministerio de la Presidencia";
 choices[68][1] = "Por la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[68][2] = "Por la Secretar&iacute;a de Estado para la Funci&oacute;n P&uacute;blica";
 choices[68][3] = "Ninguna de las anteriores es cierta";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 8950. ";


//  Id pregunta: 8957 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Denttro de Web Sem&aacute;ntica 3.0 &iquest;cu&aacute;l no es un lenguaje de construcci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "SHOE";
 choices[69][1] = "DAML + OIL";
 choices[69][2] = "WDML";
 choices[69][3] = "RDF";
 answers[69] = choices[69][2];
 units[69] = "63";
 comments[69] = "Id Pregunta: 8957. ";


//  Id pregunta: 9092 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[70]= new Array();
 choices[70][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[70][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[70][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[70][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[70] = choices[70][2];
 units[70] = "36";
 comments[70] = "Id Pregunta: 9092. ";


//  Id pregunta: 9113 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;Cu&aacute;ndo se publicaron las taxonom&iacute;as de Flynn?";
 choices[71]= new Array();
 choices[71][0] = "En 1950";
 choices[71][1] = "Por primera vez en 1966 y por segunda vez en 1970";
 choices[71][2] = "En 1980";
 choices[71][3] = "En la d&eacute;cada de los noventa.";
 answers[71] = choices[71][1];
 units[71] = "45";
 comments[71] = "Id Pregunta: 9113. ";


//  Id pregunta: 9120 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[72]= new Array();
 choices[72][0] = "Fuertemente acoplados.";
 choices[72][1] = "Muy desacoplados";
 choices[72][2] = "Un procesador no depende de lo que hace otro";
 choices[72][3] = "Todas las respuestas con correctas";
 answers[72] = choices[72][0];
 units[72] = "45";
 comments[72] = "Id Pregunta: 9120. ";


//  Id pregunta: 9128 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  La arquitectura de un ordenador viene definida por";
 choices[73]= new Array();
 choices[73][0] = "El repertorio de instrucciones";
 choices[73][1] = "El tipo de direccionamientos";
 choices[73][2] = "El tipo de operandos";
 choices[73][3] = "Todas las anteriores";
 answers[73] = choices[73][3];
 units[73] = "46";
 comments[73] = "Id Pregunta: 9128. ";


//  Id pregunta: 9146 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es FAMOS?";
 choices[74]= new Array();
 choices[74][0] = "Floating Gate Avalanche-Injection Metal Oxide Semiconductor";
 choices[74][1] = "Floating Avalanche-Injection Metal Oxide Semiconductor";
 choices[74][2] = "Floating Gate Avalanche-Injection Metal for Operating Systems";
 choices[74][3] = "FAMOS no existe";
 answers[74] = choices[74][3];
 units[74] = "47";
 comments[74] = "Id Pregunta: 9146. ";


//  Id pregunta: 9162 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  La norma ISO referida a la calidad en la informaci&oacute;n geogr&aacute;fica es:";
 choices[75]= new Array();
 choices[75][0] = "ISO 19110";
 choices[75][1] = "ISO 19113";
 choices[75][2] = "ISO 19119";
 choices[75][3] = "ISO 19139";
 answers[75] = choices[75][1];
 units[75] = "67";
 comments[75] = "Id Pregunta: 9162. NULL";


//  Id pregunta: 9168 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[76]= new Array();
 choices[76][0] = "Independiente/Infraestructura";
 choices[76][1] = "Activo/Pasivo";
 choices[76][2] = "Manual/Continuo";
 choices[76][3] = "Modo voz/Modo voz + datos";
 answers[76] = choices[76][1];
 units[76] = "70";
 comments[76] = "Id Pregunta: 9168. Examen TIC A2 2011";


//  Id pregunta: 9200 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[77]= new Array();
 choices[77][0] = "No se pueden realizar copias de seguridad.";
 choices[77][1] = "La ley permite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[77][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[77][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[77] = choices[77][1];
 units[77] = "36";
 comments[77] = "Id Pregunta: 9200. ";


//  Id pregunta: 9205 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[78]= new Array();
 choices[78][0] = "Huella sim&eacute;trica.";
 choices[78][1] = "Huella asim&eacute;trica.";
 choices[78][2] = "Huella an&oacute;nima.";
 choices[78][3] = "Todas las anteriores son verdaderas.";
 answers[78] = choices[78][3];
 units[78] = "37";
 comments[78] = "Id Pregunta: 9205. ";


//  Id pregunta: 9212 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[79]= new Array();
 choices[79][0] = "Mediante la MAC";
 choices[79][1] = "Mediante su WWN";
 choices[79][2] = "Mediante una url";
 choices[79][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[79] = choices[79][1];
 units[79] = "48";
 comments[79] = "Id Pregunta: 9212. ";


//  Id pregunta: 9243 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es main en relaci&oacute;n a Ubuntu?";
 choices[80]= new Array();
 choices[80][0] = "Contiene s&oacute;lo los paquetes que cumplen los requisitos de la licencia de Ubuntu.";
 choices[80][1] = "Contiene los programas soportados por los desarrollores de Ubuntu que no est&aacute;n disponibles bajo ning&uacute;n tipo de licencia libre.";
 choices[80][2] = "Son los programas que no reciben apoyo por parte del equipo de Ubuntu.";
 choices[80][3] = "Son programas comerciales.";
 answers[80] = choices[80][0];
 units[80] = "54";
 comments[80] = "Id Pregunta: 9243. ";


//  Id pregunta: 9260 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y adem&aacute;s puede acceder a las memorias de otros procesadores se conoce como:";
 choices[81]= new Array();
 choices[81][0] = "SMP ";
 choices[81][1] = "Grid ";
 choices[81][2] = "NUMA ";
 choices[81][3] = "Cluster ";
 answers[81] = choices[81][2];
 units[81] = "45";
 comments[81] = "Id Pregunta: 9260. Examen TICA2-2011";


//  Id pregunta: 9614 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;C&uacute;al es un m&eacute;todo aceptado de desnormalizaci&oacute;n de bases de datos?";
 choices[82]= new Array();
 choices[82][0] = "Vistas materializadas.";
 choices[82][1] = "Esquemas de copo de nieve.";
 choices[82][2] = "Cubos OLAP.";
 choices[82][3] = "Todos los anteriores.";
 answers[82] = choices[82][3];
 units[82] = "68";
 comments[82] = "Id Pregunta: 9614. ";


//  Id pregunta: 9687 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En Georeferenciaci&oacute;n, las funciones que deben ser desempe&ntilde;adas por los metadatos son:";
 choices[83]= new Array();
 choices[83][0] = "Descubrimiento, exploraci&oacute;n y acceso.";
 choices[83][1] = "Localizaci&oacute;n inicial, exploraci&oacute;n y carga de los datos.";
 choices[83][2] = "Localizaci&oacute;n inicial, exploraci&oacute;n, carga de los datos e interpretaci&oacute;n.";
 choices[83][3] = "Descubrimiento, exploraci&oacute;n y explotaci&oacute;n.";
 answers[83] = choices[83][3];
 units[83] = "67";
 comments[83] = "Id Pregunta: 9687. NULL";


//  Id pregunta: 9775 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra &quot;libro&quot; dentro de ficheros?";
 choices[84]= new Array();
 choices[84][0] = "find -type f | xwygs grep &quot;libro&quot;";
 choices[84][1] = "find -type f | xaygs grep &quot;libro&quot; ";
 choices[84][2] = "find -type f | xargs grep &quot;libro&quot; ";
 choices[84][3] = "find -type f | xargp grep &quot;libro&quot; ";
 answers[84] = choices[84][2];
 units[84] = "54";
 comments[84] = "Id Pregunta: 9775. Examen TIC A2 2013 - Duplicada";


//  Id pregunta: 9883 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El protocolo SET (Secure Electronic Transaction)";
 choices[85]= new Array();
 choices[85][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[85][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[85][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[85][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[85] = choices[85][1];
 units[85] = "70";
 comments[85] = "Id Pregunta: 9883. TIC A1, Examen 2013";


//  Id pregunta: 10222 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[86]= new Array();
 choices[86][0] = "Da un error de compilaci&oacute;n";
 choices[86][1] = "TRUE";
 choices[86][2] = "FALSE";
 choices[86][3] = "12";
 answers[86] = choices[86][1];
 units[86] = "60";
 comments[86] = "Id Pregunta: 10222. NULL";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Para que la siguiente sentencia compile:float a = 100.21;I)&nbsp; Necesita hacer un casting a float: float a = (float) 100.21;II)&nbsp; Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;III)&nbsp; Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[87]= new Array();
 choices[87][0] = "Compila bien sin cambios";
 choices[87][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[87][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[87][3] = "I), II) y III) son v&aacute;lidas";
 answers[87] = choices[87][3];
 units[87] = "60";
 comments[87] = "Id Pregunta: 10224. NULL";


//  Id pregunta: 10282 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[88]= new Array();
 choices[88][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[88][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[88][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[88][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[88] = choices[88][2];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10282. TIC A2, libre, examen 2013";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[89]= new Array();
 choices[89][0] = "rdlccfg";
 choices[89][1] = "tsmrpt";
 choices[89][2] = "rptsetup";
 choices[89][3] = "rsconfig";
 answers[89] = choices[89][3];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


//  Id pregunta: 10311 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[90]= new Array();
 choices[90][0] = "33%";
 choices[90][1] = "20%";
 choices[90][2] = "50%";
 choices[90][3] = "0%";
 answers[90] = choices[90][0];
 units[90] = "48";
 comments[90] = "Id Pregunta: 10311. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10313 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[91]= new Array();
 choices[91][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[91][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[91][2] = "Ambos operan a nivel de bloque.";
 choices[91][3] = "Ambos operan a nivel de fichero.";
 answers[91] = choices[91][0];
 units[91] = "48";
 comments[91] = "Id Pregunta: 10313. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Ordene los siguientes dispositivos seg&uacute;n velocidad de transferencia, de menor a mayor:";
 choices[92]= new Array();
 choices[92][0] = "FireWire 800 &lt; USB 2.0 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[92][1] = "USB 2.0 &lt; FireWire 800 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[92][2] = "FireWire 800 &lt; USB 2.0 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 choices[92][3] = "USB 2.0 &lt; FireWire 800 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 answers[92] = choices[92][1];
 units[92] = "46";
 comments[92] = "Id Pregunta: 10529. NULL";


//  Id pregunta: 10537 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; combinaci&oacute;n de discos RAID presenta un mayor rendimiento?";
 choices[93]= new Array();
 choices[93][0] = "RAID 0";
 choices[93][1] = "RAID 5";
 choices[93][2] = "RAID 1+0";
 choices[93][3] = "RAID 0+1";
 answers[93] = choices[93][0];
 units[93] = "48";
 comments[93] = "Id Pregunta: 10537. NULL";


//  Id pregunta: 10617 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale aquel que se corresponde con un protocolo de establecimiento de claves entre partes:";
 choices[94]= new Array();
 choices[94][0] = "Diffie Hellman";
 choices[94][1] = "RIPEMD";
 choices[94][2] = "Rabbit";
 choices[94][3] = "Blowfish";
 answers[94] = choices[94][0];
 units[94] = "72";
 comments[94] = "Id Pregunta: 10617. ";


//  Id pregunta: 10618 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El planificador de Windows:";
 choices[95]= new Array();
 choices[95][0] = "Se ejecuta en el hilo de planificaci&oacute;n central del kernel.";
 choices[95][1] = "Su c&oacute;digo se ejecuta cuando se completa una operaci&oacute;n de E/S.";
 choices[95][2] = "Windows no tiene planificador.";
 choices[95][3] = "Est&aacute; escrito en Python.";
 answers[95] = choices[95][1];
 units[95] = "56";
 comments[95] = "Id Pregunta: 10618. ";


//  Id pregunta: 10998 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Respecto a HTML5, se&ntilde;ale la respuesta correcta:";
 choices[96]= new Array();
 choices[96][0] = "Su uso est&aacute; recomendado para el desarrollo web de los sitios de la Administraci&oacute;n General del Estado, siempre que no se incumpla la normativa de accesibilidad.";
 choices[96][1] = "En ning&uacute;n caso se recomienda el uso de HTML5 en el desarrollo web de los sitios de la Administraci&oacute;n General del Estado.";
 choices[96][2] = "Simplifica el desarrollo de sitios web porque elimina el uso de CSS (Cascading Style Sheets).";
 choices[96][3] = "No permite incluir v&iacute;deo de forma nativa, siendo necesario recurrir siempre a complementos (plugins) externos.";
 answers[96] = choices[96][0];
 units[96] = "69";
 comments[96] = "Id Pregunta: 10998. TIC A1 AGE 2014";


//  Id pregunta: 11254 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El algoritmo de encriptaci&oacute;n Camellia:";
 choices[97]= new Array();
 choices[97][0] = "Fue desarrollado en EEUU.";
 choices[97][1] = "La longitud de clave es variable entre 128, 192 y 256 bits.";
 choices[97][2] = "Tiene un tama&ntilde;o de bloque de 64 bits.";
 choices[97][3] = "No est&aacute; soportado en TLS/SSL.";
 answers[97] = choices[97][1];
 units[97] = "72";
 comments[97] = "Id Pregunta: 11254. ";


//  Id pregunta: 11346 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De los siguientes, indique la opci&oacute;n que contiene los modelos correctos contemplados por LDAP";
 choices[98]= new Array();
 choices[98][0] = "informaci&oacute;n; direccionamiento; observable; estructural";
 choices[98][1] = "informaci&oacute;n; direccionamiento; objetivable; estructural";
 choices[98][2] = "informaci&oacute;n; direccionamiento; seguridad; estructural";
 choices[98][3] = "informaci&oacute;n; direccionamiento; seguridad; funcional";
 answers[98] = choices[98][3];
 units[98] = "73";
 comments[98] = "Id Pregunta: 11346. ";


//  Id pregunta: 11504 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes es un rol descrito en la Arquitectura de Referencia del Cloud Compunting versi&oacute;n 4.0 de IBM (CCRA)?";
 choices[99]= new Array();
 choices[99][0] = "Consumer.";
 choices[99][1] = "Provider.";
 choices[99][2] = "Creator.";
 choices[99][3] = "Todos los anteriores.";
 answers[99] = choices[99][3];
 units[99] = "47";
 comments[99] = "Id Pregunta: 11504. NULL";


