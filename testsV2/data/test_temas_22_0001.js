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


//  Id pregunta: 758 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  De las siguientes afirmaciones referentes a los sistemas operativos, &iquest;cu&aacute;l es falsa?.";
 choices[1]= new Array();
 choices[1][0] = "El scheduler decide los candidatos a competir por los recursos";
 choices[1][1] = "El dispatcher decide que proceso se ejecuta";
 choices[1][2] = "Para prevenir el deadlock se puede usar el &quot;algoritmo del banquero&quot;.";
 choices[1][3] = "Ninguna de las anteriores es verdadera";
 answers[1] = choices[1][3];
 units[1] = "52";
 comments[1] = "Id Pregunta: 758. ";


//  Id pregunta: 762 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La orden chmod";
 choices[2]= new Array();
 choices[2][0] = "bloquea un archivo en windows";
 choices[2][1] = "cambia los permisos de un achivo en linux - unix";
 choices[2][2] = "crea un directorio modificable en unix";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][1];
 units[2] = "52,53";
 comments[2] = "Id Pregunta: 762. ";


//  Id pregunta: 763 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  SOAP (Simple Object Access protocol):";
 choices[3]= new Array();
 choices[3][0] = "En un protocolo de programaci&oacute;n orientado a la plataforma .net de Microsoft (COM)";
 choices[3][1] = "Es un protocolo de intercambio electr&oacute;nico de datos EDI ya en desuso y que se utiliz&oacute; en redes orientados a paquetes del tipo X.25";
 choices[3][2] = "Es un protocolo basado en XML que permite invocar m&eacute;todos, servicios, componentes y objetos sobre servidores remotos utilizando HTTP";
 choices[3][3] = "Es un protocolo de acceso a bases de datos orientadas a objetos con el cual Microsoft Corporation ha anunciado recientemente sque se incorporar&aacute; a la comunidad SW de fuentes abiertas";
 answers[3] = choices[3][2];
 units[3] = "52";
 comments[3] = "Id Pregunta: 763. ";


//  Id pregunta: 778 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En Unix o compatibles, la parte del sistema operativo que interactua con el usuario, aceptando comandos, interpretando los procedimientos, etc, se denomina gen&eacute;ricamente:";
 choices[4]= new Array();
 choices[4][0] = "Kernel";
 choices[4][1] = "Interfaz de usuario";
 choices[4][2] = "Shell";
 choices[4][3] = "Motif";
 answers[4] = choices[4][2];
 units[4] = "53";
 comments[4] = "Id Pregunta: 778. ";


//  Id pregunta: 785 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;En qu&eacute; forma normal est&aacute; una tabla que no tiene grupos repetitivos,  en la que los atributos no principales dependan completamente de la clave principal, y dependan de otros atributos adem&aacute;s de la clave principal?:";
 choices[5]= new Array();
 choices[5][0] = "1FN";
 choices[5][1] = "2FN";
 choices[5][2] = "3FN";
 choices[5][3] = "Boyce-Cood";
 answers[5] = choices[5][1];
 units[5] = "58";
 comments[5] = "Id Pregunta: 785. SS-A 2004";


//  Id pregunta: 871 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes principios no forman parte de los doce que Codd estableci&oacute; en 1985 para que una base de datos pueda considerarse relacional si se satisfacen al menos seis de ellos?:";
 choices[6]= new Array();
 choices[6][0] = "Regla de la no subversi&oacute;n";
 choices[6][1] = "Independencia l&oacute;gica de los datos";
 choices[6][2] = "Actualizaci&oacute;n de vistas";
 choices[6][3] = "Consistencia de los datos";
 answers[6] = choices[6][3];
 units[6] = "58";
 comments[6] = "Id Pregunta: 871. ";


//  Id pregunta: 909 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  &iquest;Puede ejecutarse una aplicaci&oacute;n Windows al mismo tiempo por muchos usuarios, en una misma m&aacute;quina, pero con pantallas diferentes?:";
 choices[7]= new Array();
 choices[7][0] = "No, dado que un sistema de este tipo solo puede tener una consola, esa prestaci&oacute;n est&aacute; accesible en sistemas empresariales tipo Unix";
 choices[7][1] = "Si, dado que en un servidor windows empresarial pueden conectarse varias consolas diferentes";
 choices[7][2] = "Si, utilizando X-Windows";
 choices[7][3] = "Si, utilizando servicios de Remote Desktop";
 answers[7] = choices[7][3];
 units[7] = "56";
 comments[7] = "Id Pregunta: 909. ";


//  Id pregunta: 942 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; se entiende por solapamiento de componentes?:";
 choices[8]= new Array();
 choices[8][0] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[8][1] = "Es el porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[8][2] = "Es la cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[8][3] = "Es el n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio o para reorganizar el mismo";
 answers[8] = choices[8][0];
 units[8] = "52";
 comments[8] = "Id Pregunta: 942. ";


//  Id pregunta: 973 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dada una relaci&oacute;n R y dos de sus atributos X e Y, si cada valor de X tiene asociado con &eacute;l un &uacute;nico valorde Y en todo instante, se dice que:";
 choices[9]= new Array();
 choices[9][0] = "El atributo X es funcionalmente dependiente del atributo Y";
 choices[9][1] = "El atributo Y es funcionalmente dependiente del atributo X";
 choices[9][2] = "La relaci&oacute;n R no est&aacute; normalizada";
 choices[9][3] = "La relaci&oacute;n R no est&aacute; en Segunda Forma Normal";
 answers[9] = choices[9][1];
 units[9] = "58";
 comments[9] = "Id Pregunta: 973. ";


//  Id pregunta: 987 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Dentro de los modos de direccionamiento se llama direccionamiento indirecto a:";
 choices[10]= new Array();
 choices[10][0] = "Cuando el objeto se halla direccionado en la propia instrucci&oacute;n";
 choices[10][1] = "Cuando el objeto direccionado es la direcci&oacute;n del objeto buscado";
 choices[10][2] = "Cuando el objeto est&aacute; en un direcci&oacute;n predeterminada";
 choices[10][3] = "Cuando se expresa un desplazamiento sobre una direcci&oacute;n base";
 answers[10] = choices[10][1];
 units[10] = "52";
 comments[10] = "Id Pregunta: 987. ";


//  Id pregunta: 1028 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Existen diversos tipos de modelos de datos convencionales:";
 choices[11]= new Array();
 choices[11][0] = "El modelo jer&aacute;rquico es m&aacute;s flexible que el de red o reticular";
 choices[11][1] = "El modelo relacional se basa en el &aacute;lgebra y c&aacute;lculo relacional";
 choices[11][2] = "Cronol&oacute;gicamente el modelo de red o reticular es anterior al jer&aacute;rquico";
 choices[11][3] = "En el modelo relacional se exige que el usuario conozca las vinculaciones entre entidades";
 answers[11] = choices[11][1];
 units[11] = "57";
 comments[11] = "Id Pregunta: 1028. ";


//  Id pregunta: 1031 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El mecanismo &quot;priority aging&quot; que utilizan algunos programas de planificaci&oacute;n de trabajos funciona de la siguiente manera:";
 choices[12]= new Array();
 choices[12][0] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que ha transcurrido desde que el usuario lo envi&oacute;";
 choices[12][1] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo transcurrido desde una hora prefijada por el programador";
 choices[12][2] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que llevan en la cola de entrada";
 choices[12][3] = "Aumenta la prioridad de los trabajos en funci&oacute;n de la edad y categor&iacute;a profesional del programador";
 answers[12] = choices[12][2];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1031. ";


//  Id pregunta: 1056 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El sistema Windows 2003, en su versi&oacute;n cliente:";
 choices[13]= new Array();
 choices[13][0] = "Es el primer sistema cliente de Microsoft en incluir de serie la estrategia.net";
 choices[13][1] = "Incluye facilidades avanzadas para discapacitados";
 choices[13][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[13][3] = "No existe";
 answers[13] = choices[13][3];
 units[13] = "56";
 comments[13] = "Id Pregunta: 1056. ";


//  Id pregunta: 1078 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el editor vi de Unix para escribir el fichero que se est&aacute; editando y salir se utiliza el mandato:";
 choices[14]= new Array();
 choices[14][0] = "ww";
 choices[14][1] = "zz";
 choices[14][2] = "Ctrl + w (presionar simult&aacute;neamente la tecla Control y la w)";
 choices[14][3] = "F10 (la tecla de funci&oacute;n F10)";
 answers[14] = choices[14][1];
 units[14] = "54";
 comments[14] = "Id Pregunta: 1078. Tambi&eacute;n se puede utilizar :wq";


//  Id pregunta: 1088 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el modelo de referencia ANSI/SPARC, el nivel conceptual:";
 choices[15]= new Array();
 choices[15][0] = "Se obtiene conceptualizando los datos f&iacute;sicos";
 choices[15][1] = "Es una representaci&oacute;n abstracta de la base de datos, com&uacute;n para todos los usuarios";
 choices[15][2] = "Conceptualiza y abstrae las vistas del nivel externo";
 choices[15][3] = "Es una representaci&oacute;n abstracta de la base de datos, diferente para cada usuario";
 answers[15] = choices[15][1];
 units[15] = "57";
 comments[15] = "Id Pregunta: 1088. ";


//  Id pregunta: 1132 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En sistemas operativos Unix se suele utilizar el editor de texto 'VI', que permite el uso de expresiones regulares. Adem&aacute;s tambien existe un editor de flujo basado en expresiones regulares, que se llama:";
 choices[16]= new Array();
 choices[16][0] = "fvi";
 choices[16][1] = "fred";
 choices[16][2] = "sed";
 choices[16][3] = "xlexp";
 answers[16] = choices[16][2];
 units[16] = "54";
 comments[16] = "Id Pregunta: 1132. NULL";


//  Id pregunta: 1146 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En un sistema operativo Linux, el runlevel 6:";
 choices[17]= new Array();
 choices[17][0] = "Pone a la m&aacute;quina en modo multiusuario";
 choices[17][1] = "Pone a la m&aacute;quina en modo monousuario";
 choices[17][2] = "Prepara a la m&aacute;quina para reiniciar";
 choices[17][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[17] = choices[17][2];
 units[17] = "53";
 comments[17] = "Id Pregunta: 1146. ";


//  Id pregunta: 1158 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En Unix el comando  vi  es muy utilizado, sirve para:";
 choices[18]= new Array();
 choices[18][0] = "Listar las primeras 10 l&iacute;neas de un fichero";
 choices[18][1] = "Lista todos los procesos en ejecuci&oacute;n con su estado";
 choices[18][2] = "Es un editor de texto";
 choices[18][3] = "Visualiza la cantidad de memoria libre y el tanto por ciento ocupado del procesador";
 answers[18] = choices[18][2];
 units[18] = "54";
 comments[18] = "Id Pregunta: 1158. NULL";


//  Id pregunta: 1172 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  HURD:";
 choices[19]= new Array();
 choices[19][0] = "Es el sistema operativo GNU por definici&oacute;n";
 choices[19][1] = "Utiliza arquitectura Microkernel";
 choices[19][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[19][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[19] = choices[19][2];
 units[19] = "53";
 comments[19] = "Id Pregunta: 1172. ";


//  Id pregunta: 1188 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Indique cu&aacute;l de las siguientes afirmaciones es falsa respecto a la ortogonalidad:";
 choices[20]= new Array();
 choices[20][0] = "Un juego de instrucciones se dice que es regular si es ortogonal";
 choices[20][1] = "La ortogonalidad implica que cada operaci&oacute;n debe poder realizarse con un tipo de operando fijo y su propio direccionamiento";
 choices[20][2] = "Se garantiza la ortogonalidad limitando la informaci&oacute;n contenida en el c&oacute;digo de operaci&oacute;n a la operaci&oacute;n pura, excluyendo direccionamiento y representaci&oacute;n de datos";
 choices[20][3] = "La ortogonalidad de un juego de instrucciones aporta claras ventajas de simplicidad y claridad";
 answers[20] = choices[20][1];
 units[20] = "52";
 comments[20] = "Id Pregunta: 1188. ";


//  Id pregunta: 1300 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Para la traducci&oacute;n de direcciones virtuales a f&iacute;sicas se utiliza:";
 choices[21]= new Array();
 choices[21][0] = "La paginaci&oacute;n";
 choices[21][1] = "La segmentaci&oacute;n";
 choices[21][2] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[21][3] = "Todas son falsas";
 answers[21] = choices[21][2];
 units[21] = "52";
 comments[21] = "Id Pregunta: 1300. ";


//  Id pregunta: 1305 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Para Unix un archivo de compone de:";
 choices[22]= new Array();
 choices[22][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[22][1] = "Una secuencia de bytes";
 choices[22][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[22][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[22] = choices[22][1];
 units[22] = "53";
 comments[22] = "Id Pregunta: 1305. ";


//  Id pregunta: 1380 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Un buen sistema operativo, en cuanto a la gesti&oacute;n de memoria principal, debe:";
 choices[23]= new Array();
 choices[23][0] = "Repartirla entre los diversos procesos, de forma que cada uno sepa desde el comienzo que solo cuenta con la que se le ha asignado. As&iacute; el programador sabe lo que tiene que hacer en cada momento en cuanto al trasiego de datos a la memoria principal";
 choices[23][1] = "No afectarle demasiado, dejando que ella misma se gestione sin intervenci&oacute;n del sistema operativo";
 choices[23][2] = "Asignar memoria din&aacute;micamente a los programas seg&uacute;n la vayan necesitando, de forma transparente para el programador";
 choices[23][3] = "Reservarse una cantidad peque&ntilde;a para s&iacute; mismo, dejando que cada aplicaci&oacute;n tenga mayor cantidad limitada de forma fija";
 answers[23] = choices[23][2];
 units[23] = "52";
 comments[23] = "Id Pregunta: 1380. ";


//  Id pregunta: 1442 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Considerando de modo gen&eacute;rico una interfaz como un dispositivo de adaptaci&oacute;n a dos entidades distintas, podr&iacute;a decirse que es:";
 choices[24]= new Array();
 choices[24][0] = "Un grupo de especificaciones";
 choices[24][1] = "Una entidad l&oacute;gica";
 choices[24][2] = "Un conjunto de convenios que permite el intercambio de informaci&oacute;n entre dos entidades que pueden ser f&iacute;sicas o no";
 choices[24][3] = "Todas las respuestas son correctas";
 answers[24] = choices[24][3];
 units[24] = "52";
 comments[24] = "Id Pregunta: 1442. ";


//  Id pregunta: 1549 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de estas afirmaciones es falsa con respecto al concepto transacci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Todas las operaciones que constituyen una transacci&oacute;n se ejecutan en su totalidad o no se ejecutan en absoluto, es decir constituyen una unidad at&oacute;mica e indivisible.";
 choices[25][1] = "Si la transacci&oacute;n debe ejecutarse en varios servidores y uno de ellos sufre una aver&iacute;a, las transacciones efectuadas en el resto de servidores no tendr&aacute;n efecto al objeto de asegurar la sincronizaci&oacute;n e integridad de los datos.";
 choices[25][2] = "El procedimiento de transacciones de &lsquo;two phase commit&rsquo; consta de una 1&ordf; fase de verificaci&oacute;n de la correcta terminaci&oacute;n de la transacci&oacute;n en cada uno de los sistemas participantes y una 2&ordf; fase de ejecuci&oacute;n o cancelaci&oacute;n de dicha transacci&oacute;n.";
 choices[25][3] = "El procesamiento de transacciones solo puede hacerse en modo no orientado a la conexi&oacute;n, nunca en modo interactivo.";
 answers[25] = choices[25][3];
 units[25] = "56,57";
 comments[25] = "Id Pregunta: 1549. ";


//  Id pregunta: 1727 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Cu&aacute;l de los siguientes gestores de ventanas utiliza GNOME por defecto";
 choices[26]= new Array();
 choices[26][0] = "GNOME es tambi&eacute;n un gestor de ventanas";
 choices[26][1] = "Puede utilizar cualquiera, pero por defecto es KDE";
 choices[26][2] = "A partir de la versi&oacute;n GNOME 3.0 es Mutter";
 choices[26][3] = "X11 es el gestor por defecto";
 answers[26] = choices[26][2];
 units[26] = "54";
 comments[26] = "Id Pregunta: 1727. Desactualizada";


//  Id pregunta: 1751 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Se&ntilde;alar el enunciado cierto, referente a la sem&aacute;ntica de las relaciones representadas en el model E/R";
 choices[27]= new Array();
 choices[27][0] = "El tipo de la relaci&oacute;n es el n&uacute;mero de entidades sobre las que se realiza la asociaci&oacute;n";
 choices[27][1] = "El grado se corresponde con el n&uacute;mero m&aacute;ximo de ocurrencias de una entidad asociado a una ocurrencia de otra o de la misma entidad a trav&eacute;s de una relaci&oacute;n";
 choices[27][2] = "La cardinalidad de una entidad se define como el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias que pueden estar relacionadas con ocurrencias de otra entidad";
 choices[27][3] = "Todos los enunciados anteriores son ciertos";
 answers[27] = choices[27][2];
 units[27] = "58";
 comments[27] = "Id Pregunta: 1751. ";


//  Id pregunta: 1938 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Dentro del kernel de Unix, el n&uacute;cleo dependiente";
 choices[28]= new Array();
 choices[28][0] = "Controla la ejecuci&oacute;n de procesos";
 choices[28][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n";
 choices[28][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos";
 choices[28][3] = "Se encarga de las interrupciones";
 answers[28] = choices[28][3];
 units[28] = "53";
 comments[28] = "Id Pregunta: 1938. ";


//  Id pregunta: 2217 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; se entiende por overhead?:";
 choices[29]= new Array();
 choices[29][0] = "Porcentaje de tiempo que transcurre entre  la cabecera (header) del primer paquete y el siguiente";
 choices[29][1] = "Porcentaje de tiempo en el que la CPU est&aacute; atendiendo a tareas del propio sistema";
 choices[29][2] = "Tiempo que tarda la cabeza del disco, una vez posicionada en la pista, en acceder al sector que le interesa";
 choices[29][3] = "Porcentaje de tiempo que la CPU gasta en tratar los datos de entrada";
 answers[29] = choices[29][1];
 units[29] = "52";
 comments[29] = "Id Pregunta: 2217. ";


//  Id pregunta: 2605 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[30]= new Array();
 choices[30][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[30][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[30][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[30][3] = " El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[30] = choices[30][2];
 units[30] = "58,80";
 comments[30] = "Id Pregunta: 2605. ";


//  Id pregunta: 2737 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Cuando decimos que una entidad est&aacute; en 3FN?";
 choices[31]= new Array();
 choices[31][0] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave tiene una dependencia funcional completa de la clave.";
 choices[31][1] = "Si est&aacute; en 2FN y no contiene grupos repetitivos.";
 choices[31][2] = "Si est&aacute; en 2FN y no contiene atributos multivaluados.";
 choices[31][3] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave no depende transitivamente de dicha clave.";
 answers[31] = choices[31][3];
 units[31] = "58";
 comments[31] = "Id Pregunta: 2737. ";


//  Id pregunta: 2921 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  El tiempo de respuesta en teor&iacute;a de colas es:";
 choices[32]= new Array();
 choices[32][0] = "Tiempo de servicio de un dispositivo para un usuario";
 choices[32][1] = "Tiempo de espera mas tiempo de servicio";
 choices[32][2] = "Tiempo que el usuario espera en la cola atendiendo a otros usuarios hasta que le toca el turno";
 choices[32][3] = "Tiempo en que un dispositivo est&aacute; ocupado en atender al sistema operativo";
 answers[32] = choices[32][1];
 units[32] = "53";
 comments[32] = "Id Pregunta: 2921. ";


//  Id pregunta: 3930 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l no es una extensi&oacute;n de fichero?";
 choices[33]= new Array();
 choices[33][0] = " .pdf";
 choices[33][1] = " .bmp";
 choices[33][2] = ".phf";
 choices[33][3] = ".doc";
 answers[33] = choices[33][2];
 units[33] = "56";
 comments[33] = "Id Pregunta: 3930. ";


//  Id pregunta: 4073 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Una BD relacional puede distribuirse en diferentes maquinas?";
 choices[34]= new Array();
 choices[34][0] = "Si";
 choices[34][1] = "Si, pero solo en entorno Linux";
 choices[34][2] = "No";
 choices[34][3] = "No porque se violaria la integridad  referencial";
 answers[34] = choices[34][0];
 units[34] = "57";
 comments[34] = "Id Pregunta: 4073. ";


//  Id pregunta: 4279 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[35]= new Array();
 choices[35][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[35][1] = "Mediante un trigger.";
 choices[35][2] = "Mediante una constraint de tipo CHECK.";
 choices[35][3] = "No se pueden definir restricciones de ese tipo.";
 answers[35] = choices[35][1];
 units[35] = "58";
 comments[35] = "Id Pregunta: 4279. ";


//  Id pregunta: 4316 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Indique cu&aacute;l de los siguientes t&eacute;rminos no identifica un gestor de arranque del Sistema Operativo";
 choices[36]= new Array();
 choices[36][0] = "NT OS Loader.";
 choices[36][1] = "LILO (Linux Loader)";
 choices[36][2] = "LIUL (Linux Unified Loader).";
 choices[36][3] = "GRUB (Grand Unified Bootloader).";
 answers[36] = choices[36][2];
 units[36] = "53";
 comments[36] = "Id Pregunta: 4316. ";


//  Id pregunta: 4453 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  La utilidad de Microsoft para sincronizar los contenidos de un Pocket PC y una estaci&oacute;n Windows XP se denomina:";
 choices[37]= new Array();
 choices[37][0] = "MS PowerSync";
 choices[37][1] = "MS Syncronizer";
 choices[37][2] = "MS ActiveSync";
 choices[37][3] = "MS PocketSync";
 answers[37] = choices[37][2];
 units[37] = "56";
 comments[37] = "Id Pregunta: 4453. ";


//  Id pregunta: 4534 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite? ";
 choices[38]= new Array();
 choices[38][0] = "Forms.";
 choices[38][1] = "Reports.";
 choices[38][2] = "Designer.";
 choices[38][3] = "Fusion.";
 answers[38] = choices[38][3];
 units[38] = "57,58";
 comments[38] = "Id Pregunta: 4534. ";


//  Id pregunta: 4574 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cual de los siguientes tipos de sistemas de ficheros, lo es de red?";
 choices[39]= new Array();
 choices[39][0] = "ext2";
 choices[39][1] = "swap";
 choices[39][2] = "SMB";
 choices[39][3] = "MSB";
 answers[39] = choices[39][2];
 units[39] = "56";
 comments[39] = "Id Pregunta: 4574. ";


//  Id pregunta: 4626 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Que comando se utiliza para convertir un sistema de ficheros ext2 a ext3 en las ultimas versiones de Suse Linux?";
 choices[40]= new Array();
 choices[40][0] = "tune2fs -c ldev/hdbX";
 choices[40][1] = "tune2fs -j /dev/hdbX";
 choices[40][2] = "make2fs /devlhdbX";
 choices[40][3] = "mount -t ext3 /dev/hdbX /mountpoint";
 answers[40] = choices[40][1];
 units[40] = "53";
 comments[40] = "Id Pregunta: 4626. ";


//  Id pregunta: 4848 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, unaindirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Pararepresentar un fichero de 2 MB:";
 choices[41]= new Array();
 choices[41][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[41][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[41][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[41][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[41] = choices[41][0];
 units[41] = "52";
 comments[41] = "Id Pregunta: 4848. ";


//  Id pregunta: 4906 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  En un sistema con memoria virtual, la pol&iacute;tica de reemplazo &oacute;ptima es aqu&eacute;lla que aconseja reemplazar la p&aacute;gina:";
 choices[42]= new Array();
 choices[42][0] = "Que m&aacute;s tiempo lleva en memoria.";
 choices[42][1] = "Que m&aacute;s tiempo vaya a tardar en ser referenciada.";
 choices[42][2] = "Que lleva m&aacute;s tiempo sin ser referenciada.";
 choices[42][3] = "Que ha sido utilizada con menos frecuencia.";
 answers[42] = choices[42][1];
 units[42] = "52";
 comments[42] = "Id Pregunta: 4906. Examen TIC B 2007";


//  Id pregunta: 4908 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por &ldquo;proceso zombi&rdquo;?:";
 choices[43]= new Array();
 choices[43][0] = "Un proceso hijo que ha acabado de realizar sus tareas pero que el padre todav&iacute;a no ha ejecutado la orden de esperar a que el hijo acabe.";
 choices[43][1] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes.";
 choices[43][2] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo proceso";
 choices[43][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita.";
 answers[43] = choices[43][0];
 units[43] = "53,54";
 comments[43] = "Id Pregunta: 4908. Examen TIC B 2007";


//  Id pregunta: 4921 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  En el UNIX System V, los i-nodos tienen una tabla de direcciones con:";
 choices[44]= new Array();
 choices[44][0] = "11 entradas.";
 choices[44][1] = "12 entradas.";
 choices[44][2] = "13 entradas.";
 choices[44][3] = "14 entradas.";
 answers[44] = choices[44][2];
 units[44] = "53,54";
 comments[44] = "Id Pregunta: 4921. Examen TIC B 2007";


//  Id pregunta: 5155 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En entornos Oracle, &iquest;cu&aacute;l de los siguientes NO es un componente de las herramientas Forms y Reports?";
 choices[45]= new Array();
 choices[45][0] = "Forms y Reports Developer (desarrollador)";
 choices[45][1] = "Forms y Reports Runtime (tiempo de ejecuci&oacute;n)";
 choices[45][2] = "Forms y Reports Compiler (compilador)";
 choices[45][3] = "Forms y Reports Designer (dise&ntilde;ador)";
 answers[45] = choices[45][3];
 units[45] = "58";
 comments[45] = "Id Pregunta: 5155. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5424 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[46]= new Array();
 choices[46][0] = "Esquema externo";
 choices[46][1] = "Esquema legal";
 choices[46][2] = "Esquema conceptual";
 choices[46][3] = "Esquema interno";
 answers[46] = choices[46][1];
 units[46] = "57";
 comments[46] = "Id Pregunta: 5424. Castilla y Le&oacute;n";


//  Id pregunta: 5452 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  El entorno de escritorio GNOME";
 choices[47]= new Array();
 choices[47][0] = "es uno de los entornos m&aacute;s avanzados y completos para Linux";
 choices[47][1] = "usa poco recursos del sistema porque no usa mucho espacio de disco o memoria";
 choices[47][2] = "es el escritorio por defecto de algunas distribuciones como Red Hat y Debian";
 choices[47][3] = "es el GUI elegido por los sistemas UNIX comerciales";
 answers[47] = choices[47][2];
 units[47] = "54";
 comments[47] = "Id Pregunta: 5452. Castilla y Le&oacute;n";


//  Id pregunta: 5715 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  &iquest;Qu&eacute; es abiword?";
 choices[48]= new Array();
 choices[48][0] = "Un comando para contar palabras o bytes en archivos de texto.";
 choices[48][1] = "Un procesador de texto";
 choices[48][2] = "Un conversor de formatos multimedia.";
 choices[48][3] = "Un editor de archivos de sonido.";
 answers[48] = choices[48][1];
 units[48] = "54";
 comments[48] = "Id Pregunta: 5715. NULL";


//  Id pregunta: 5718 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  Desde un repositorio oficial de SUSE Linux Enterprise Server usted se descarga los archivos binarios de una aplicaci&oacute;n empaquetados del modo est&aacute;ndar de esta distribuci&oacute;n. &iquest;Cu&aacute;l es la extensi&oacute;n del archivo?";
 choices[49]= new Array();
 choices[49][0] = "rpm";
 choices[49][1] = "tar.gz";
 choices[49][2] = "deb";
 choices[49][3] = "tgz";
 answers[49] = choices[49][0];
 units[49] = "54";
 comments[49] = "Id Pregunta: 5718. ";


//  Id pregunta: 5727 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos NO sirve para seleccionar la p&aacute;gina a descargar tras un fallo de p&aacute;gina?";
 choices[50]= new Array();
 choices[50][0] = "FIFO";
 choices[50][1] = "Aleatoria";
 choices[50][2] = "SJF";
 choices[50][3] = "NRU";
 answers[50] = choices[50][2];
 units[50] = "52";
 comments[50] = "Id Pregunta: 5727. ";


//  Id pregunta: 5953 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Qu&eacute; es com&uacute;n a todas las tecnolog&iacute;as de virtualizaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Simulaci&oacute;n del Hardware Completo";
 choices[51][1] = "Simulaci&oacute;n del Sistema Operativo";
 choices[51][2] = "Ocultaci&oacute;n de los detalles t&eacute;cnicos a trav&eacute;s de la encapsulaci&oacute;n";
 choices[51][3] = "Paravirtualizaci&oacute;n, donde se ofrece un API especial que debe usarse modificando el sistema operativo &quot;guest&quot;";
 answers[51] = choices[51][2];
 units[51] = "119";
 comments[51] = "Id Pregunta: 5953. ";


//  Id pregunta: 6215 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Respecto a la arquitectura ANSI/SPARC, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[52]= new Array();
 choices[52][0] = "Se definen tres niveles: interno, medio y externo";
 choices[52][1] = "Cada esquema externo describe la parte de la base de datos que interesa a un grupo de usuarios determinado y oculta a ese grupo el resto de la base de datos";
 choices[52][2] = "Es &uacute;til para explicar el concepto de dependencia de datos";
 choices[52][3] = "Dos tipos de independencia de datos: b&aacute;sica y completa";
 answers[52] = choices[52][1];
 units[52] = "57";
 comments[52] = "Id Pregunta: 6215. TICB-2009, bloque desarrollo";


//  Id pregunta: 6323 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Toda sentencia SQL tiene al menos los siguientes elementos:";
 choices[53]= new Array();
 choices[53][0] = "SELECT, FROM";
 choices[53][1] = "SELECT, FROM y WHERE";
 choices[53][2] = "SELECT, FROM, o bien WHERE o bien HAVING";
 choices[53][3] = "SELECT, FROM y ORDER BY";
 answers[53] = choices[53][0];
 units[53] = "58";
 comments[53] = "Id Pregunta: 6323. ";


//  Id pregunta: 6327 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  El operador de agregaci&oacute;n AVG(nombre_atributo) sirve para:";
 choices[54]= new Array();
 choices[54][0] = "Calcular la media de cualquier atributo.";
 choices[54][1] = "Calcular la media de un atributo num&eacute;rico.";
 choices[54][2] = "Calcular la suma de los valores de un atributo.";
 choices[54][3] = "Contar el n&uacute;mero de ocurrencias de un atributo.";
 answers[54] = choices[54][1];
 units[54] = "58";
 comments[54] = "Id Pregunta: 6327. ";


//  Id pregunta: 6328 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  La operaci&oacute;n de JOIN:";
 choices[55]= new Array();
 choices[55][0] = "Hace &uacute;nicamente el producto cartesiano.";
 choices[55][1] = "Realiza el producto cartesiano y elimina aquellas tuplas que tienen el mismo valor en los atributos comunes.";
 choices[55][2] = "Realiza el producto cartesiano y elimina aquellas tuplas que no tienen el mismo valor en los atributos comunes.";
 choices[55][3] = "Elimina los atributos que no est&aacute;n repetidos.";
 answers[55] = choices[55][2];
 units[55] = "58";
 comments[55] = "Id Pregunta: 6328. NULL";


//  Id pregunta: 6478 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Durante la creaci&oacute;n de una base de datos Oracle se generan autom&aacute;ticamente dos usuarios. Estas dos cuentas son:";
 choices[56]= new Array();
 choices[56][0] = "SYS Y DBA";
 choices[56][1] = "SYS Y SYSTEM";
 choices[56][2] = "SYSTEM Y DBA";
 choices[56][3] = "MANAGER Y DBA";
 answers[56] = choices[56][1];
 units[56] = "57";
 comments[56] = "Id Pregunta: 6478. Castilla La Mancha 2009";


//  Id pregunta: 6497 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El kernel de Linux fue desarrollado por:";
 choices[57]= new Array();
 choices[57][0] = "Linus Torvalds";
 choices[57][1] = "Benjamin Linus";
 choices[57][2] = "Richard Stallman";
 choices[57][3] = "Steve Jobs";
 answers[57] = choices[57][0];
 units[57] = "53";
 comments[57] = "Id Pregunta: 6497. NULL";


//  Id pregunta: 7157 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes funciones no las realiza el Sistema Operativo?";
 choices[58]= new Array();
 choices[58][0] = "Gesti&oacute;n de memoria";
 choices[58][1] = "Administraci&oacute;n de procesos";
 choices[58][2] = "Arranque de la m&aacute;quina";
 choices[58][3] = "Administraci&oacute;n del sistema de E/S";
 answers[58] = choices[58][2];
 units[58] = "52";
 comments[58] = "Id Pregunta: 7157. Examen TIC B 2009";


//  Id pregunta: 7163 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[59]= new Array();
 choices[59][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[59][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios ";
 choices[59][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[59][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[59] = choices[59][1];
 units[59] = "53,54";
 comments[59] = "Id Pregunta: 7163. Examen TIC B 2009";


//  Id pregunta: 7276 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La t&eacute;cnica que utiliza la paravirtualizaci&oacute;n se denomina ";
 choices[60]= new Array();
 choices[60][0] = "Ringing up";
 choices[60][1] = "Ring deprivileging";
 choices[60][2] = "Privileging";
 choices[60][3] = "Hypervisor";
 answers[60] = choices[60][1];
 units[60] = "119";
 comments[60] = "Id Pregunta: 7276. NULL";


//  Id pregunta: 7282 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Generalmente el primer paso en un proceso de virtualizaci&oacute;n de infraestructuras TIC en una Organizaci&oacute;n suele ser un proyecto de:";
 choices[61]= new Array();
 choices[61][0] = "Consolidaci&oacute;n de servidores";
 choices[61][1] = "Virtualizaci&oacute;n de salvaguardas";
 choices[61][2] = "SaaS (Storage as a Service)";
 choices[61][3] = "Computing Mobility";
 answers[61] = choices[61][0];
 units[61] = "119";
 comments[61] = "Id Pregunta: 7282. Examen TIC B 2009";


//  Id pregunta: 7283 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &quot;&iquest;Cu&aacute;l de las siguientes no es una de las tres condiciones de Popek y Godbergh que debe cumplir toda arquitectura inform&aacute;tica para soportar adecuadamente &quot;&quot;virtualizaci&oacute;n&quot;&quot; de sistemas?&quot;";
 choices[62]= new Array();
 choices[62][0] = "Eficiencia";
 choices[62][1] = "Control de Recursos";
 choices[62][2] = "Equivalencia";
 choices[62][3] = "Escalabilidad";
 answers[62] = choices[62][3];
 units[62] = "119";
 comments[62] = "Id Pregunta: 7283. Examen TIC B 2009";


//  Id pregunta: 8208 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En una tabla de una base de datos relacional:";
 choices[63]= new Array();
 choices[63][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[63][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[63][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[63][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder ala tabla.";
 answers[63] = choices[63][3];
 units[63] = "57, 58";
 comments[63] = "Id Pregunta: 8208. Examen TIC A1 2010";


//  Id pregunta: 8270 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[64]= new Array();
 choices[64][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[64][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[64][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[64][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[64] = choices[64][0];
 units[64] = "52,53";
 comments[64] = "Id Pregunta: 8270. Examen TIC A1 2010";


//  Id pregunta: 8417 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En el contexto del PL-SQL, &iquest;cu&aacute;l es el nombre que se da a los segmentos de memoria utilizados para realizar operaciones con los registros devueltos tras ejecutar una sentencia SELECT? ";
 choices[65]= new Array();
 choices[65][0] = "Row Trigger ";
 choices[65][1] = "Statement Trigger. ";
 choices[65][2] = "Cursor";
 choices[65][3] = "Puntero";
 answers[65] = choices[65][2];
 units[65] = "58";
 comments[65] = "Id Pregunta: 8417. Examen TIC A2 2010";


//  Id pregunta: 8432 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  De los siguientes algoritmos de asignaci&oacute;n del turno de ejecuci&oacute;n de los procesos, &iquest;Cu&aacute;l de ellos consiste en asignar a cada proceso un intervalo de tiempo de ejecuci&oacute;n (llamado time-slice), y cada vez que se vence ese intervalo se copia el contexto del proceso a un lugar seguro y se le asigna su turno a otro proceso?";
 choices[66]= new Array();
 choices[66][0] = "SJF (Shortest Job First)";
 choices[66][1] = "FIFO (First In First Out";
 choices[66][2] = "Por prioridad";
 choices[66][3] = "Round Robin";
 answers[66] = choices[66][3];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8432. ";


//  Id pregunta: 8519 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[67]= new Array();
 choices[67][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[67][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[67][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[67][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[67] = choices[67][2];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8612 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[68]= new Array();
 choices[68][0] = "Listado de todos los equipos";
 choices[68][1] = "Listado de software usado en cada equipo.";
 choices[68][2] = "Esquema de la red.";
 choices[68][3] = "Todos son necesarios.";
 answers[68] = choices[68][3];
 units[68] = "52";
 comments[68] = "Id Pregunta: 8612. Examen TIC A2 2010 interna";


//  Id pregunta: 8617 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[69]= new Array();
 choices[69][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[69][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[69][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[69][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[69] = choices[69][0];
 units[69] = "57,58";
 comments[69] = "Id Pregunta: 8617. Examen TIC A2 2010 interna";


//  Id pregunta: 8643 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "&Aacute;rbol Binario";
 choices[70][1] = "Lista.";
 choices[70][2] = "Lista enlazada.";
 choices[70][3] = "&Aacute;rbol-B";
 answers[70] = choices[70][3];
 units[70] = "57";
 comments[70] = "Id Pregunta: 8643. Examen TIC A2 2010 interna";


//  Id pregunta: 8644 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[71]= new Array();
 choices[71][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[71][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[71][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[71][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[71] = choices[71][3];
 units[71] = "57 ,58";
 comments[71] = "Id Pregunta: 8644. Examen TIC A2 2010 interna";


//  Id pregunta: 8665 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  El protocolo MESI:";
 choices[72]= new Array();
 choices[72][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM.";
 choices[72][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP.";
 choices[72][2] = "Controla las colisiones en redes Token Ring.";
 choices[72][3] = "Controla la coherencia cach&eacute; en algunos procesadores.";
 answers[72] = choices[72][3];
 units[72] = "46, 52";
 comments[72] = "Id Pregunta: 8665. Examen UPM A2 2011";


//  Id pregunta: 8760 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Una se&ntilde;al en UNIX es un mecanismo de comunicaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Bidireccional";
 choices[73][1] = "S&iacute;ncrono.";
 choices[73][2] = "Entre procesos.";
 choices[73][3] = "En el fichero de cabecera &lt;stdio.h&gt; est&aacute;n definidas todas las se&ntilde;ales, n&uacute;mero y nombre.";
 answers[73] = choices[73][2];
 units[73] = "53, 54";
 comments[73] = "Id Pregunta: 8760. Examen TIC A2 2010 interna";


//  Id pregunta: 8783 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (LDD) de SQL?";
 choices[74]= new Array();
 choices[74][0] = "ROLLBACK";
 choices[74][1] = "UPDATE";
 choices[74][2] = "GRANT";
 choices[74][3] = "TRUNCATE";
 answers[74] = choices[74][3];
 units[74] = "57, 58";
 comments[74] = "Id Pregunta: 8783. Examen UPM A2 2011";


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


//  Id pregunta: 8881 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  ODBC son las siglas de:";
 choices[76]= new Array();
 choices[76][0] = "Open DataBase Consortium";
 choices[76][1] = "Open Data Business Connectivity";
 choices[76][2] = "Open DataBase Connectivity";
 choices[76][3] = "Object DataBase Consortium";
 answers[76] = choices[76][2];
 units[76] = "57, 58";
 comments[76] = "Id Pregunta: 8881. Examen UPM A2 2011";


//  Id pregunta: 8927 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[77]= new Array();
 choices[77][0] = "los directorios de trabajo de los usuarios.";
 choices[77][1] = "los sistemas de archivos montados temporalmente.";
 choices[77][2] = "el c&oacute;digo fuente del kernel.";
 choices[77][3] = "los ficheros de los controladores de dispositivos";
 answers[77] = choices[77][0];
 units[77] = "53, 54";
 comments[77] = "Id Pregunta: 8927. Operador Ayto. Madrid 2010";


//  Id pregunta: 9239 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; hace ifconfig -a?";
 choices[78]= new Array();
 choices[78][0] = "Instala Ubuntu sobre Windows.";
 choices[78][1] = "Muestra informaci&oacute;n sobre los diversos interfaces de red.";
 choices[78][2] = "Inicia la interfaz de red eth0.";
 choices[78][3] = "Detiene las interfaces de red.";
 answers[78] = choices[78][1];
 units[78] = "53";
 comments[78] = "Id Pregunta: 9239. ";


//  Id pregunta: 9241 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es Nemo?";
 choices[79]= new Array();
 choices[79][0] = "un gestor de archivos.";
 choices[79][1] = "Una aplicaci&oacute;n multimedia para m&oacute;viles.";
 choices[79][2] = "Una suite de ofim&aacute;tica.";
 choices[79][3] = "Un editor de texto.";
 answers[79] = choices[79][0];
 units[79] = "54";
 comments[79] = "Id Pregunta: 9241. ";


//  Id pregunta: 9251 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es UMS?";
 choices[80]= new Array();
 choices[80][0] = "Una tecnolog&iacute;a m&oacute;vil";
 choices[80][1] = "User Mode Scheduling.";
 choices[80][2] = "Permite separar en dos partes el hilo de usuario entre la parte del proceso que se ejecuta en modo usuario y el hilo que se ejecuta en modo kernel.";
 choices[80][3] = "La B) y la C) son correctas.";
 answers[80] = choices[80][3];
 units[80] = "56";
 comments[80] = "Id Pregunta: 9251. ";


//  Id pregunta: 9263 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Indicad cu&aacute;l de las siguientes versiones NO se corresponde con una distribuci&oacute;n de Linux:";
 choices[81]= new Array();
 choices[81][0] = "Kubuntu.";
 choices[81][1] = "Red Hat";
 choices[81][2] = "Slackware.";
 choices[81][3] = "IRIX.";
 answers[81] = choices[81][3];
 units[81] = "53";
 comments[81] = "Id Pregunta: 9263. Examen TICA2-2011";


//  Id pregunta: 9264 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Indicad cu&aacute;l de los siguientes sistemas de ficheros se corresponde con un sistema de ficheros de alto rendimiento con soporte transaccional:";
 choices[82]= new Array();
 choices[82][0] = "NFS ";
 choices[82][1] = "CIFS ";
 choices[82][2] = "JFS";
 choices[82][3] = "FAT";
 answers[82] = choices[82][2];
 units[82] = "55";
 comments[82] = "Id Pregunta: 9264. Examen TICA2-2011";


//  Id pregunta: 9272 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es: ";
 choices[83]= new Array();
 choices[83][0] = "32MB";
 choices[83][1] = "1GB";
 choices[83][2] = "2GB";
 choices[83][3] = "4GB";
 answers[83] = choices[83][3];
 units[83] = "54";
 comments[83] = "Id Pregunta: 9272. Examen TICA2-2011";


//  Id pregunta: 9598 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La arquitectura original de Linux es de tipo:";
 choices[84]= new Array();
 choices[84][0] = "Microkernel";
 choices[84][1] = "Monol&iacute;tica";
 choices[84][2] = "Modular";
 choices[84][3] = "H&iacute;brida";
 answers[84] = choices[84][1];
 units[84] = "53";
 comments[84] = "Id Pregunta: 9598. ";


//  Id pregunta: 9603 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[85]= new Array();
 choices[85][0] = "MariaBD";
 choices[85][1] = "Apache Cassandra";
 choices[85][2] = "Heidi";
 choices[85][3] = "Ingres";
 answers[85] = choices[85][1];
 units[85] = "58";
 comments[85] = "Id Pregunta: 9603. NULL";


//  Id pregunta: 9616 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Desde qu&eacute; versi&oacute;n del SO Windows est&aacute; disponible la funcionalidad de bitlocker para USB?";
 choices[86]= new Array();
 choices[86][0] = "Windows XP";
 choices[86][1] = "Windows Vista";
 choices[86][2] = "Windows 7";
 choices[86][3] = "Windows 8";
 answers[86] = choices[86][2];
 units[86] = "56";
 comments[86] = "Id Pregunta: 9616. ";


//  Id pregunta: 9751 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?";
 choices[87]= new Array();
 choices[87][0] = "SELECT";
 choices[87][1] = "DRILL";
 choices[87][2] = "CUBE ";
 choices[87][3] = "MEMBER";
 answers[87] = choices[87][1];
 units[87] = "57";
 comments[87] = "Id Pregunta: 9751. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9773 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Podremos almacenar un fichero de 6 GB en un dispositivo, si el sistema de ficheros con el que est&aacute; formateado es:";
 choices[88]= new Array();
 choices[88][0] = "FAT32.";
 choices[88][1] = "NTFS. ";
 choices[88][2] = "HPFS";
 choices[88][3] = "ISO 9660:1988 Level 2. ";
 answers[88] = choices[88][1];
 units[88] = "52";
 comments[88] = "Id Pregunta: 9773. Examen TIC A2 2013";


//  Id pregunta: 9777 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[89]= new Array();
 choices[89][0] = "Metacity de GNOME. ";
 choices[89][1] = "KWIN de KDE.";
 choices[89][2] = "GTK de CDE.";
 choices[89][3] = "Enlightenment de GNOME.";
 answers[89] = choices[89][2];
 units[89] = "54";
 comments[89] = "Id Pregunta: 9777. Examen TIC A2 2013 - Duplicada";


//  Id pregunta: 10013 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique los cuatro niveles de aislamiento que define ANSI SQL 92:";
 choices[90]= new Array();
 choices[90][0] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[90][1] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 choices[90][2] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[90][3] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 answers[90] = choices[90][0];
 units[90] = "57";
 comments[90] = "Id Pregunta: 10013. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10170 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[91]= new Array();
 choices[91][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[91][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[91][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[91][3] = "Todas las anteriores";
 answers[91] = choices[91][3];
 units[91] = "58";
 comments[91] = "Id Pregunta: 10170. ";


//  Id pregunta: 10282 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[92]= new Array();
 choices[92][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[92][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[92][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[92][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[92] = choices[92][2];
 units[92] = "58";
 comments[92] = "Id Pregunta: 10282. TIC A2, libre, examen 2013";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[93]= new Array();
 choices[93][0] = "Los ficheros abiertos.";
 choices[93][1] = "El escritorio.";
 choices[93][2] = "Los procesos.";
 choices[93][3] = "Los puertos TCP/IP.";
 answers[93] = choices[93][2];
 units[93] = "53";
 comments[93] = "Id Pregunta: 10305. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10307 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, &iquest;cu&aacute;l de los siguientes m&eacute;todos podemos usar?";
 choices[94]= new Array();
 choices[94][0] = "Mediante cuotas de disco.";
 choices[94][1] = "Mediante el editor de directivas de grupo.";
 choices[94][2] = "No se puede restringir el almacenamiento a usuarios.";
 choices[94][3] = "No se puede restringir el almacenamiento por grupos.";
 answers[94] = choices[94][0];
 units[94] = "54";
 comments[94] = "Id Pregunta: 10307. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10627 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[95]= new Array();
 choices[95][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[95][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[95][2] = "Externo, interno y conceptual.";
 choices[95][3] = "Externo, interno y l&oacute;gico.";
 answers[95] = choices[95][2];
 units[95] = "57";
 comments[95] = "Id Pregunta: 10627. ";


//  Id pregunta: 10789 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[96]= new Array();
 choices[96][0] = "ext3";
 choices[96][1] = "mini fs";
 choices[96][2] = "ReiserFS";
 choices[96][3] = "Reiser4";
 answers[96] = choices[96][1];
 units[96] = "53, 54";
 comments[96] = "Id Pregunta: 10789. Examen GSI 2014";


//  Id pregunta: 10791 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes comandos Unix impide que el archivo de nombre &quot;miarchivo&quot; sea modificado y ejecutado por el grupo al que pertenece dicho archivo?";
 choices[97]= new Array();
 choices[97][0] = "chmod 766 miarchivo";
 choices[97][1] = "chmod a+xw miarchivo";
 choices[97][2] = "chmod 644 miarchivo";
 choices[97][3] = "chmod u=rwx go=wx miarchivo";
 answers[97] = choices[97][2];
 units[97] = "53, 54";
 comments[97] = "Id Pregunta: 10791. Examen GSI 2014";


//  Id pregunta: 11526 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seleccione el fichero de Linux que contiene las direcciones de los servidores DNS necesarios para la navegaci&oacute;n por Internet.";
 choices[98]= new Array();
 choices[98][0] = "crontab";
 choices[98][1] = "interfaces";
 choices[98][2] = "resolv.conf";
 choices[98][3] = "dns.conf";
 answers[98] = choices[98][2];
 units[98] = "53";
 comments[98] = "Id Pregunta: 11526. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11679 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El comando top de Linux permite:";
 choices[99]= new Array();
 choices[99][0] = "Moverse por una b&uacute;squeda";
 choices[99][1] = "Acceder al directorio inmediatamente inferior";
 choices[99][2] = "Conocer el consumo de CPU de todos los procesos";
 choices[99][3] = "Todas las anteriores son falsas";
 answers[99] = choices[99][2];
 units[99] = "53, 54";
 comments[99] = "Id Pregunta: 11679. ";


