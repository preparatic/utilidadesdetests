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

//  Id pregunta: 72 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas incorpora la posibilidad de valorar el riesgo y la incertidumbre?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo Promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 72. ";


//  Id pregunta: 119 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Dentro de las t&eacute;cnicas de ayuda a la toma grupal de decisiones, una de las m&aacute;s destacadas es la:";
 choices[1]= new Array();
 choices[1][0] = "Programaci&oacute;n lineal";
 choices[1][1] = "T&eacute;cnica Delphi";
 choices[1][2] = "Teor&iacute;a de la probabilidad";
 choices[1][3] = "T&eacute;cnica de normalizaci&oacute;n de grupo";
 answers[1] = choices[1][1];
 units[1] = "23";
 comments[1] = "Id Pregunta: 119. NULL";


//  Id pregunta: 154 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El nivel de adecuaci&oacute;n AA indica:";
 choices[2]= new Array();
 choices[2][0] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1";
 choices[2][1] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1 y 2";
 choices[2][2] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2 y 3";
 choices[2][3] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2, 3 y 4";
 answers[2] = choices[2][1];
 units[2] = "39";
 comments[2] = "Id Pregunta: 154. ";


//  Id pregunta: 321 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La norma 1003.1-1988 de IEEE se corresponde con la norma ISO:";
 choices[3]= new Array();
 choices[3][0] = "7498";
 choices[3][1] = "9735";
 choices[3][2] = "9075";
 choices[3][3] = "9945";
 answers[3] = choices[3][3];
 units[3] = "40";
 comments[3] = "Id Pregunta: 321. ";


//  Id pregunta: 579 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cual de las siguientes afirmaciones no es una ventaja de una organizaci&oacute;n estructurada de forma funcional";
 choices[4]= new Array();
 choices[4][0] = "Se aprovechan mucho mejor los recursos humanos al no estar adjudicados a un &uacute;nico proyecto.";
 choices[4][1] = "Se conoce mejor la organizaci&oacute;n desde arriba";
 choices[4][2] = "Al trabajar los empleados  en diferentes aplicaciones se expecializan en ellas";
 choices[4][3] = "Se evita el riesgo de la dependencia excesiva de unos pocos expertos";
 answers[4] = choices[4][2];
 units[4] = "26";
 comments[4] = "Id Pregunta: 579. ";


//  Id pregunta: 652 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Se&ntilde;ale la respuesta falsa respecto a los CTS (Conformance Testing Services):";
 choices[5]= new Array();
 choices[5][0] = "Los centros de prueba CTS pueden comercializar herramientas de ensayo para que las empresas puedan realizar sus propias pruebas";
 choices[5][1] = "En Espa&ntilde;a, coordinados por AENOR, existen varios centros de prueba CTS";
 choices[5][2] = "Cada servicio de pruebas debe ofrecerse en m&aacute;s de dos Estados miembros, que deber&aacute;n velar por el reconocimiento mutuo de los resultados de las pruebas";
 choices[5][3] = "El programa CTS se basa en los principios de independencia, reconocimiento mutuo y armonizaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "42";
 comments[5] = "Id Pregunta: 652. ";


//  Id pregunta: 697 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[6]= new Array();
 choices[6][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los &quot;threads&quot;";
 choices[6][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[6][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[6][3] = "La variable &quot;this&quot; de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[6] = choices[6][1];
 units[6] = "60";
 comments[6] = "Id Pregunta: 697. JCED - Preparatic XVII";


//  Id pregunta: 769 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Dada la arquitectura de supercomputaci&oacute;n MPP, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[7]= new Array();
 choices[7][0] = "Distintas CPU acceden a la misma &aacute;rea de memoria";
 choices[7][1] = "Distintas CPU acceden a sus propias &aacute;reas de memoria";
 choices[7][2] = "Cada CPU puede acceder tanto a su propia &aacute;rea de memoria como a un &aacute;rea com&uacute;n";
 choices[7][3] = "ninguna de las anteriores";
 answers[7] = choices[7][1];
 units[7] = "45";
 comments[7] = "Id Pregunta: 769. ";


//  Id pregunta: 950 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Codd  estableci&oacute; en 1986 doce principios, de los cuales al menos seis deben satisfacerse para que una base de datos pueda considerarse totalmente relacional. Entre ellos est&aacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Acceso garantizado, cat&aacute;logo din&aacute;mico e independencia f&iacute;sica de los datos";
 choices[8][1] = "Gesti&oacute;n de una base de datos relacional, representaci&oacute;n de la informaci&oacute;n y regla de inversi&oacute;n";
 choices[8][2] = "Independencia de integridad, distribuci&oacute;n dependiente y sublenguaje global de datos";
 choices[8][3] = "Actualizaci&oacute;n de vistas, inserciones de alto nivel y n&uacute;cleo funcional independiente";
 answers[8] = choices[8][0];
 units[8] = "58";
 comments[8] = "Id Pregunta: 950. ";


//  Id pregunta: 1094 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el sistema operativo Unix, las tuberias (pipes) son mecanismos de comunicaci&oacute;n que permiten la transferencia de datos entre dos procesos. &iquest;C&oacute;mo podr&iacute;amos crear una tuber&iacute;a con el nombre TUB?:";
 choices[9]= new Array();
 choices[9][0] = "mknod TUB p";
 choices[9][1] = "En Unix no se puede dar una nombre a una tuber&iacute;a";
 choices[9][2] = "mkp TUB";
 choices[9][3] = "mkpipe TUB";
 answers[9] = choices[9][0];
 units[9] = "53";
 comments[9] = "Id Pregunta: 1094. ";


//  Id pregunta: 1374 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  SSL:";
 choices[10]= new Array();
 choices[10][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza (banco)";
 choices[10][1] = "Permite que un tercero cn acceso al tr&aacute;fico entre el servidor y el cliente no pueda romper la confidencialidad";
 choices[10][2] = "Es un algoritmo de cifrado, de un n&uacute;mero de bits variable";
 choices[10][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[10] = choices[10][1];
 units[10] = "72";
 comments[10] = "Id Pregunta: 1374. ";


//  Id pregunta: 1389 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Un proveedor de servicios OLE DB es:";
 choices[11]= new Array();
 choices[11][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[11][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[11][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[11][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[11] = choices[11][0];
 units[11] = "59";
 comments[11] = "Id Pregunta: 1389. ";


//  Id pregunta: 1459 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En las interfaces orientadas a objetos (OOUI) es falso que:";
 choices[12]= new Array();
 choices[12][0] = "los iconos representan objetos que se pueden manipular directamente";
 choices[12][1] = "los objetos son de 3 tipos: datos, contenedores y dispositivos";
 choices[12][2] = "un ejemplo de interfaz orientada a objeto lo representan los accesos directos de Windows, donde cada objeto tiene su propia tarea asociada";
 choices[12][3] = "el estilo de interacci&oacute;n es el de acci&oacute;n-objeto y no el de objeto-acci&oacute;n";
 answers[12] = choices[12][3];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1459. ";


//  Id pregunta: 1678 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[13]= new Array();
 choices[13][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[13][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[13][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[13][3] = "Todas son ciertas";
 answers[13] = choices[13][3];
 units[13] = "59";
 comments[13] = "Id Pregunta: 1678. ";


//  Id pregunta: 1714 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[14]= new Array();
 choices[14][0] = "El procesamiento cooperativo es aquel en que 2 o m&aacute;s elementos l&oacute;gicos diferentes interact&uacute;an entre s&iacute; en la realizaci&oacute;n de una tarea com&uacute;n";
 choices[14][1] = "El procesamiento centralizado utiliza el host para ejecutar el 100% de la l&oacute;gica asociada a un programa";
 choices[14][2] = "Los procesamientos centralizados dan mayor flexibilidad y escalabilidad";
 choices[14][3] = "Los procesamientos cooperativos reducen los costes de inversi&oacute;n en equipamiento";
 answers[14] = choices[14][2];
 units[14] = "50";
 comments[14] = "Id Pregunta: 1714. ";


//  Id pregunta: 1799 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  En sistemas de representaci&oacute;n del conocimiento mediante reglas, el disparo de una regla en el mecanismo de inferencia con encadenamiento hacia delante:";
 choices[15]= new Array();
 choices[15][0] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar dejan de poder hacerlo y otras pasan a verificar su antecedente";
 choices[15][1] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar pueden seguir haci&eacute;ndolo y otras pasan tambi&eacute;n a verificar su antecedente";
 choices[15][2] = "El antecedente de la regla seleccionada est&aacute; formado por hechos que son consi-derados ahora como subobjetivos iniciando de nuevo el proceso";
 choices[15][3] = "La idea es partir del objetivo, seleccionar una regla y entonces elegir como otro u otros subobjetivos los hechos que est&aacute;n en el antecedente de la regla seleccionada, repitiendo el proceso de selecci&oacute;n de regla hasta alcanzar los datos";
 answers[15] = choices[15][0];
 units[15] = "64";
 comments[15] = "Id Pregunta: 1799. ";


//  Id pregunta: 1865 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;Qu&eacute; es falso respecto a LDAP?";
 choices[16]= new Array();
 choices[16][0] = "Cada entrada cuenta con un nombre DN";
 choices[16][1] = "Representa todos los campos mediante ASN.1";
 choices[16][2] = "Ha eliminado opciones respecto a DAP";
 choices[16][3] = "Las entradas se pueden organizar en &aacute;rbol";
 answers[16] = choices[16][1];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1865. RFC 4514";


//  Id pregunta: 1866 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa: ";
 choices[17]= new Array();
 choices[17][0] = "PKCS#3 Protocolo de acuerdo de claves  Diffie-Hellman";
 choices[17][1] = "PKCS#11 Cryptoki";
 choices[17][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[17][3] = "La primera es falsa";
 answers[17] = choices[17][3];
 units[17] = "74";
 comments[17] = "Id Pregunta: 1866. NULL";


//  Id pregunta: 1902 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Cada uno de los multiples elementos utilizados internamente por el procesador para el de almacenamiento de datos intermedios en la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[18]= new Array();
 choices[18][0] = "registro";
 choices[18][1] = "cache";
 choices[18][2] = "buffer";
 choices[18][3] = "pipelining";
 answers[18] = choices[18][0];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1902. ";


//  Id pregunta: 1926 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  El est&aacute;ndar DMI";
 choices[19]= new Array();
 choices[19][0] = "Permite la monitorizaci&oacute;n de determinadas funciones del PC";
 choices[19][1] = "Permite el control de las diferentes funciones de ahorro de energ&iacute;a de un PC";
 choices[19][2] = "Es un est&aacute;ndar de gesti&oacute;n de energ&iacute;a desarrollado por Intel, Microsoft y Toshiba";
 choices[19][3] = "Es una norma dirigida a dispositivos de alta velocidad";
 answers[19] = choices[19][0];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1926. ";


//  Id pregunta: 2072 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de estos elementos no forma parte de EFQM?";
 choices[20]= new Array();
 choices[20][0] = "Liderazgo";
 choices[20][1] = "Resultados Empresariales";
 choices[20][2] = "Pol&iacute;ticas y estrategias";
 choices[20][3] = "Valor de las acciones";
 answers[20] = choices[20][3];
 units[20] = "92";
 comments[20] = "Id Pregunta: 2072. NULL";


//  Id pregunta: 2227 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  A la hora de poner en explotaci&oacute;n un servicio:";
 choices[21]= new Array();
 choices[21][0] = "Conviene realizar las pruebas una vez est&eacute; el servicio en el entorno de explotaci&oacute;n, ya que es el mejor medio para detectar los errores.";
 choices[21][1] = "Conviene realizar las pruebas en el entorno de preexplotaci&oacute;n.";
 choices[21][2] = "Conviene realizar las pruebas en el entorno de desarrollo, ya que el de preexplotaci&oacute;n es s&oacute;lo para las pruebas de rendimiento.";
 choices[21][3] = "Conviene realizar algunas pruebas en el entorno de preexplotaci&oacute;n, y las restantes en el entorno de explotaci&oacute;n, junto a los usuarios.";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2227. NULL";


//  Id pregunta: 2327 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En la orientaci&oacute;n al objeto, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[22]= new Array();
 choices[22][0] = "Una clase define a un conjunto de objetos diferentes que pueden actuar de formas muy similares";
 choices[22][1] = "Una clase es un conjunto de m&eacute;todos y datos que resumen las caracter&iacute;sticas comunes de todos los objetos que la componen";
 choices[22][2] = "A cada uno de los objetos individuales pertenecientes a una clase se le denomina m&eacute;todo";
 choices[22][3] = "Al conjunto de las clases utilizadas para una determinada tarea de programaci&oacute;n se le denomina biblioteca de clases";
 answers[22] = choices[22][2];
 units[22] = "82";
 comments[22] = "Id Pregunta: 2327. ";


//  Id pregunta: 2366 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Entre los objetivos generales que debe cumplir un plan de sistemas tenemos:";
 choices[23]= new Array();
 choices[23][0] = "Establecimiento de pol&iacute;ticas y objetivos coherentes";
 choices[23][1] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[23][2] = "Las dos anteriores respuestas son correctas";
 choices[23][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[23] = choices[23][2];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2366. ";


//  Id pregunta: 2395 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La ingenier&iacute;a inversa consiste en:";
 choices[24]= new Array();
 choices[24][0] = "Obtener los elementos de dise&ntilde;o de un sistema de informaci&oacute;n a partir del c&oacute;digo fuente y de las estructuras de datos que utiliza.";
 choices[24][1] = "Realizar un proceso de redise&ntilde;o de un sistema de informaci&oacute;n, bas&aacute;ndose en la utilizaci&oacute;n de las nuevas tecnolog&iacute;as de dise&ntilde;o inverso (desde el conocimiento de las posibilidades de las nuevas tecnolog&iacute;as hasta los requerimientos funcionales).";
 choices[24][2] = "Redise&ntilde;ar el c&oacute;digo y las estructuras de un sistema de informaci&oacute;n bas&aacute;ndose en los dise&ntilde;os f&iacute;sicos.";
 choices[24][3] = "Un conjunto de herramientas orientadas a facilitar las fases de an&aacute;lisis y dise&ntilde;o de los sistemas de informaci&oacute;n.";
 answers[24] = choices[24][0];
 units[24] = "91";
 comments[24] = "Id Pregunta: 2395. ";


//  Id pregunta: 2601 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)   &iquest;Cu&aacute;l de los siguientes modelos de ciclode vida, hace especial &eacute;nfasis en el control de riesgos?";
 choices[25]= new Array();
 choices[25][0] = "Espiral";
 choices[25][1] = "Cascada";
 choices[25][2] = "Ambos";
 choices[25][3] = "Ninguno";
 answers[25] = choices[25][0];
 units[25] = "76";
 comments[25] = "Id Pregunta: 2601. ";


//  Id pregunta: 2619 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de  11 aristas y 9 nodos?";
 choices[26]= new Array();
 choices[26][0] = "6";
 choices[26][1] = "12";
 choices[26][2] = "8";
 choices[26][3] = "4";
 answers[26] = choices[26][3];
 units[26] = "88";
 comments[26] = "Id Pregunta: 2619. NULL";


//  Id pregunta: 2693 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Los servicios de informaci&oacute;n electr&oacute;nica que contienen referencias, algunas veces con extractos, de informaci&oacute;n no publicada, se denominan:";
 choices[27]= new Array();
 choices[27][0] = "Num&eacute;ricos.";
 choices[27][1] = "Directorios.";
 choices[27][2] = "Agendas.";
 choices[27][3] = "Bibliogr&aacute;ficos.";
 answers[27] = choices[27][1];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2693. ";


//  Id pregunta: 2729 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Uno de los objetivos principales de los Sistemas de Informaci&oacute;n es:";
 choices[28]= new Array();
 choices[28][0] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[28][1] = "Interconectar las distintas sedes de la organizaci&oacute;n";
 choices[28][2] = "Aumentar la complejidad de los procesos de la organizaci&oacute;n";
 choices[28][3] = "Reducir el n&uacute;mero de empleados";
 answers[28] = choices[28][0];
 units[28] = "77";
 comments[28] = "Id Pregunta: 2729. ";


//  Id pregunta: 2771 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  En Dise&ntilde;o estructurado, &iquest;cu&aacute;l de los siguientes presenta un mayor grado de acoplamiento entre m&oacute;dulos?";
 choices[29]= new Array();
 choices[29][0] = "Acoplamiento por contenido.";
 choices[29][1] = "Acoplamiento por estampado.";
 choices[29][2] = "Acoplamiento externo.";
 choices[29][3] = "Acoplamiento de control.";
 answers[29] = choices[29][0];
 units[29] = "84";
 comments[29] = "Id Pregunta: 2771. ";


//  Id pregunta: 2796 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Qu&eacute; tipo de actividades contempla M&eacute;trica v3 en la interfaz de seguridad";
 choices[30]= new Array();
 choices[30][0] = "Seguridad intr&iacute;nseca del sistema";
 choices[30][1] = "seguridad del proceso de desarrollo";
 choices[30][2] = "Formaci&oacute;n en materia de seguridad";
 choices[30][3] = "Todas son correctas";
 answers[30] = choices[30][3];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2796. NULL";


//  Id pregunta: 2888 AÃ±o de creación de pregunta: 2005-01-01
 questions[31]= "32)  La red SARA (Intranet Administrativa) no tiene entre sus principales objetivos:";
 choices[31]= new Array();
 choices[31][0] = "Ser un &uacute;nico punto de conexi&oacute;n con las Comunidades Aut&oacute;nomas";
 choices[31][1] = "Conectar con la Uni&oacute;n Europea a trav&eacute;s de TESTA e IDA";
 choices[31][2] = "Conectar todos los edificios de la Administraci&oacute;n General del Estado";
 choices[31][3] = "Ser de utilidad en la implantaci&oacute;n de aplicaciones horizontales";
 answers[31] = choices[31][2];
 units[31] = "113.44";
 comments[31] = "Id Pregunta: 2888. NULL";


//  Id pregunta: 2935 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[32]= new Array();
 choices[32][0] = "1000BaseT";
 choices[32][1] = "1000BaseSX";
 choices[32][2] = "1000BaseLx";
 choices[32][3] = "1000BaseCX";
 answers[32] = choices[32][3];
 units[32] = "99";
 comments[32] = "Id Pregunta: 2935. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2964 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[33]= new Array();
 choices[33][0] = "Un Organismo Aut&oacute;nomo de los previstos en el art&iacute;culo 42 de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[33][1] = "Una Entidad P&uacute;blica Empresarial de las previstas en el art&iacute;culo 54 de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[33][2] = "Una Sociedad Estatal de las previstas en la disposici&oacute;n adicional trig&eacute;simo sexta de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[33][3] = "Un Organismo p&uacute;blico de los previstos en el apartado 1 de la disposici&oacute;n adicional d&eacute;cima de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 answers[33] = choices[33][3];
 units[33] = "110";
 comments[33] = "Id Pregunta: 2964. Examen TIC MAP B 2004.Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 3187 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguiente elementos residen en la capa de aplicaci&oacute;n de la pila TCP/IP?:";
 choices[34]= new Array();
 choices[34][0] = "TFTP";
 choices[34][1] = "FTP";
 choices[34][2] = "DNS";
 choices[34][3] = "Todos los anteriores  ";
 answers[34] = choices[34][3];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3187. NULL";


//  Id pregunta: 3225 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es protocolo OSI de nivel de aplicaci&oacute;n?:";
 choices[35]= new Array();
 choices[35][0] = "Transferencia de ficheros FTAM";
 choices[35][1] = "Correo electr&oacute;nico X.400";
 choices[35][2] = "Servicios de Directorio X.500";
 choices[35][3] = "Transferencia de correo electr&oacute;nico SMTP";
 answers[35] = choices[35][3];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3225. SMTP es protocolo del nivel de aplicaci&oacute;n del modelo TCP/IP";


//  Id pregunta: 3269 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  &iquest;En qu&eacute; nivel del modelo de Referencia OSI se llevar&iacute;a a cabo el cifrado de datos?:";
 choices[36]= new Array();
 choices[36][0] = "Nivel 5 : Comunicaci&oacute;n";
 choices[36][1] = "Nivel 2 : Enlace";
 choices[36][2] = "Nivel 6 : Presentaci&oacute;n";
 choices[36][3] = "Nivel 4 : Transporte";
 answers[36] = choices[36][2];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3269. ";


//  Id pregunta: 3328 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[37]= new Array();
 choices[37][0] = "applet";
 choices[37][1] = "cookie";
 choices[37][2] = "socket";
 choices[37][3] = "control activeX";
 answers[37] = choices[37][1];
 units[37] = "113";
 comments[37] = "Id Pregunta: 3328. ";


//  Id pregunta: 3381 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  El m&eacute;todo de Okumura-Hata se usa para:";
 choices[38]= new Array();
 choices[38][0] = "Resoluci&oacute;n de conflictos en negociaciones cuando los contendientes no desean verse en persona";
 choices[38][1] = "Calcular el coste de aplicaci&oacute;n de una u otra estrategia de adquisici&oacute;n de bienes y servicios inform&aacute;ticos y de telecomunicaci&oacute;n";
 choices[38][2] = "C&aacute;lculo de coberturas en enlaces radioel&eacute;ctricos";
 choices[38][3] = "No existe el m&eacute;todo de Okumura-Hata";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 3381. ";


//  Id pregunta: 3580 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  En X.400, &iquest;cu&aacute;les son las partes que definen un dominio de gesti&oacute;n?:";
 choices[39]= new Array();
 choices[39][0] = "Un PRMD y un IPM";
 choices[39][1] = "Un AU y un ADMD";
 choices[39][2] = "Un MTA y opcionalmente UA's, MS's y AU's";
 choices[39][3] = "Un AU y un PRMD";
 answers[39] = choices[39][1];
 units[39] = "106";
 comments[39] = "Id Pregunta: 3580. ";


//  Id pregunta: 3754 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Nombre y caracter&iacute;sticas del mecanismo de encriptado y autenticaci&oacute;n especificado en el est&aacute;ndar 802.11:";
 choices[40]= new Array();
 choices[40][0] = "WAP, con clave de hasta 40 bits";
 choices[40][1] = "WEP, con clave de hasta 40 bits";
 choices[40][2] = "WEP, con clave de hasta 128 bits";
 choices[40][3] = "WTLS, con clave de hasta 128 bits";
 answers[40] = choices[40][2];
 units[40] = "107";
 comments[40] = "Id Pregunta: 3754. NULL";


//  Id pregunta: 3943 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  De las siguientes opciones cual no esta relacionada con ATM";
 choices[41]= new Array();
 choices[41][0] = "VPI";
 choices[41][1] = "VCI";
 choices[41][2] = "VHI";
 choices[41][3] = "SDH";
 answers[41] = choices[41][2];
 units[41] = "109";
 comments[41] = "Id Pregunta: 3943. ";


//  Id pregunta: 3950 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  En las redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[42]= new Array();
 choices[42][0] = "Un ordenador se conecta con el siguiente y el &uacute;ltimo con el primero, formando un circuito cerrado";
 choices[42][1] = "Existe un nodo ra&iacute;z del que cuelgan uno o varios nodos";
 choices[42][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[42][3] = "Cada uno de los nodos est&aacute; conectado con todos los dem&aacute;s";
 answers[42] = choices[42][2];
 units[42] = "101";
 comments[42] = "Id Pregunta: 3950. ";


//  Id pregunta: 3970 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Un registro MX en un servidor DNS, &iquest; a qu&eacute; hace referencia?";
 choices[43]= new Array();
 choices[43][0] = "al servidor DNS principal";
 choices[43][1] = "al servidor web asociado al dominio";
 choices[43][2] = "al servidor de correo asociado al dominio";
 choices[43][3] = "al servidor seguro asociado al dominio";
 answers[43] = choices[43][2];
 units[43] = "106";
 comments[43] = "Id Pregunta: 3970. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 4120 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  El lugar de almacenamiento temporal de las im&aacute;genes descargadas desde una p&aacute;gina Web se llama";
 choices[44]= new Array();
 choices[44][0] = "RAM";
 choices[44][1] = "disco duro";
 choices[44][2] = "cookie";
 choices[44][3] = "cache";
 answers[44] = choices[44][3];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4120. ";


//  Id pregunta: 4291 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Un Jefe de Proyecto ha elaborado un borrador del Plan de Gesti&oacute;n de un proyecto de software. &iquest;Cu&aacute;les de los siguientes elementos deben ser tratados en ese plan? I) Calendario. II) Presupuesto. III) Requisitos del software. IV) Personal.";
 choices[45]= new Array();
 choices[45][0] = "I, III y IV.";
 choices[45][1] = "I, II y III.";
 choices[45][2] = "I, II y IV.";
 choices[45][3] = "I, II, III y IV.";
 answers[45] = choices[45][2];
 units[45] = "77";
 comments[45] = "Id Pregunta: 4291. ";


//  Id pregunta: 4587 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Que herramienta se utilliza en Reports 2.5 para dise&ntilde;ar las consultas en las que se basa un informe?";
 choices[46]= new Array();
 choices[46][0] = "QUERY MODEL";
 choices[46][1] = "DATA MODEL";
 choices[46][2] = "STRUCT MODEL";
 choices[46][3] = "REPORT MODEL";
 answers[46] = choices[46][1];
 units[46] = "";
 comments[46] = "Id Pregunta: 4587. ";


//  Id pregunta: 4680 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  La API JDBC se utiliza:";
 choices[47]= new Array();
 choices[47][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[47][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[47][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[47][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[47] = choices[47][0];
 units[47] = "60";
 comments[47] = "Id Pregunta: 4680. Examen 2006 JCYL";


//  Id pregunta: 4695 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar.";
 choices[48]= new Array();
 choices[48][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesarioajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos.";
 choices[48][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo.";
 choices[48][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[48][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n).";
 answers[48] = choices[48][2];
 units[48] = "89";
 comments[48] = "Id Pregunta: 4695. Examen 2006 JCYL";


//  Id pregunta: 4721 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a .es la tiene legalmenteencomendada:";
 choices[49]= new Array();
 choices[49][0] = "Internic.es";
 choices[49][1] = "Red.es";
 choices[49][2] = "Mityc.es";
 choices[49][3] = " Netsol.es";
 answers[49] = choices[49][1];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4721. Examen 2006 JCYL";


//  Id pregunta: 4757 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un control de prioridad 1 de las directrices de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[50]= new Array();
 choices[50][0] = "Para cualquier presentaci&oacute;n multimedia basada en tiempo (p.ej., una pel&iacute;cula o animaci&oacute;n), sincronice alternativas equivalentes (p.ej., subt&iacute;tulos o descripciones auditivas de la pista visual) con la presentaci&oacute;n";
 choices[50][1] = "Use hojas de estilo para controlar la composici&oacute;n y la presentaci&oacute;n.";
 choices[50][2] = "Identifique claramente los cambios en el lenguaje natural del texto de un documento y de cualquier equivalente de texto (p.ej., subt&iacute;tulos).";
 choices[50][3] = "Para tablas de datos, identifique encabezados de fila y columna.";
 answers[50] = choices[50][1];
 units[50] = "39";
 comments[50] = "Id Pregunta: 4757. ";


//  Id pregunta: 5077 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cual de los siguientes es un est&aacute;ndar de W3C que permite referenciar partes de un documento XML?:";
 choices[51]= new Array();
 choices[51][0] = "XSL-FO";
 choices[51][1] = "Xpath";
 choices[51][2] = "XSLT";
 choices[51][3] = "Xforms";
 answers[51] = choices[51][1];
 units[51] = "69";
 comments[51] = "Id Pregunta: 5077. Examen TIC A 2007";


//  Id pregunta: 5123 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Qu&eacute; tipo de driver JDBC es aquel que convierte las llamadas JDBC a llamadas nativas de la base de datos?";
 choices[52]= new Array();
 choices[52][0] = "Tipo 1";
 choices[52][1] = "Tipo 2";
 choices[52][2] = "Tipo 3";
 choices[52][3] = "Tipo 4";
 answers[52] = choices[52][1];
 units[52] = "60";
 comments[52] = "Id Pregunta: 5123. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5165 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  La Tecnolog&iacute;a empleada por la Televisi&oacute;n Digital Terrestre (TDT) permite que el despliegue de las redes de radiodifusi&oacute;n se efect&uacute;e:";
 choices[53]= new Array();
 choices[53][0] = "En redes de Frecuencia &Uacute;nica (SFN) y en redes Multifrecuencia (MFN).";
 choices[53][1] = "&Uacute;nicamente en redes de Frecuencia &Uacute;nica (SFN).";
 choices[53][2] = "&Uacute;nicamente en redes Multifrecuencia (MFN).";
 choices[53][3] = "En redes de Frecuencia (SFN) sin necesidad de sincronizar los transmisores radio.";
 answers[53] = choices[53][0];
 units[53] = "105";
 comments[53] = "Id Pregunta: 5165. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5438 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Los sistemas colaborativos buscan";
 choices[54]= new Array();
 choices[54][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[54][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n";
 choices[54][2] = "Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto";
 choices[54][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n";
 answers[54] = choices[54][2];
 units[54] = "71";
 comments[54] = "Id Pregunta: 5438. Castilla y Le&oacute;n";


//  Id pregunta: 5496 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[55]= new Array();
 choices[55][0] = "EJB Container y Web Container";
 choices[55][1] = "EJB Container, Web Container y Application Client Container";
 choices[55][2] = "b) y Applet Container";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][2];
 units[55] = "60";
 comments[55] = "Id Pregunta: 5496. NULL";


//  Id pregunta: 5561 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  De las siguientes afirmaciones se&ntilde;ale aquella que supone un inconveniente para la protecci&oacute;n de derechos de autor comparado con la protecci&oacute;n por patentes:";
 choices[56]= new Array();
 choices[56][0] = "Los derechos de autor nacen en el mismo momento de la creaci&oacute;n de la obra.";
 choices[56][1] = "S&oacute;lo se exige que la obra sea de creaci&oacute;n original.";
 choices[56][2] = "Se protege la forma de expresi&oacute;n de las ideas.";
 choices[56][3] = "Todas las anteriores son ventajas.";
 answers[56] = choices[56][2];
 units[56] = "37";
 comments[56] = "Id Pregunta: 5561. ";


//  Id pregunta: 5792 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  Indique cu&aacute;l de los siguientes derechos de los ciudadanos al relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos NO est&aacute; reconocido por la ley 11/2007";
 choices[57]= new Array();
 choices[57][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[57][1] = "A conocer por medios electr&oacute;nicos el estado de tramitaci&oacute;n de cualquier procedimiento administrativo.";
 choices[57][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[57][3] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas de los documentos electr&oacute;nicos que formen parte de un expediente.";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 5792. MAP 2008 A2";


//  Id pregunta: 5886 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  El m&eacute;todo de Saaty &oacute; AHP:";
 choices[58]= new Array();
 choices[58][0] = "Es relativo a accesibilidad web";
 choices[58][1] = "Es relativo a la decisi&oacute;n multicriterio";
 choices[58][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n";
 choices[58][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo";
 answers[58] = choices[58][1];
 units[58] = "34";
 comments[58] = "Id Pregunta: 5886. MAP 2008 A1";


//  Id pregunta: 6059 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Los servicios web son:";
 choices[59]= new Array();
 choices[59][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[59][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[59][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[59][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[59] = choices[59][3];
 units[59] = "51,69";
 comments[59] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6090 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[60]= new Array();
 choices[60][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[60][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[60][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[60][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[60] = choices[60][3];
 units[60] = "100";
 comments[60] = "Id Pregunta: 6090. TIC A 2009";


//  Id pregunta: 6320 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Los ficheros inversos se utilizan preferentemente en:";
 choices[61]= new Array();
 choices[61][0] = "Bases de datos relacionales.";
 choices[61][1] = "Bases de datos jer&aacute;rquicas.";
 choices[61][2] = "Sistemas de recuperaci&oacute;n de informaci&oacute;n";
 choices[61][3] = "Bases de datos reticulares.";
 answers[61] = choices[61][2];
 units[61] = "96";
 comments[61] = "Id Pregunta: 6320. ";


//  Id pregunta: 6415 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  De los siguientes, &iquest;Cu&aacute;l no es un estandar del W3C?";
 choices[62]= new Array();
 choices[62][0] = "DOM";
 choices[62][1] = "P3P";
 choices[62][2] = "PVG";
 choices[62][3] = "HTML";
 answers[62] = choices[62][2];
 units[62] = "39";
 comments[62] = "Id Pregunta: 6415. NULL";


//  Id pregunta: 6420 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es TAW?";
 choices[63]= new Array();
 choices[63][0] = "Es una familia de herramienta para el an&aacute;lisis de la accesibilidad  de sitios web.";
 choices[63][1] = "Es un Gestor de Contenidos";
 choices[63][2] = "Es un tipo de licencia de software libre";
 choices[63][3] = "Es una herramienta de workgroup";
 answers[63] = choices[63][0];
 units[63] = "39";
 comments[63] = "Id Pregunta: 6420. NULL";


//  Id pregunta: 6433 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Dada una empresa en la que se quiere almacenar informaci&oacute;n de sus empleados, departamentos y proyectos en los que colaboran sus empleados, las entidades que resultan son:";
 choices[64]= new Array();
 choices[64][0] = "empleados, departamentos y empresa";
 choices[64][1] = "empresa, proyectos, empleados y departamentos.";
 choices[64][2] = "empleados, proyectos y departamentos.";
 choices[64][3] = "empleados y departamentos.";
 answers[64] = choices[64][2];
 units[64] = "80";
 comments[64] = "Id Pregunta: 6433. NULL";


//  Id pregunta: 6577 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El filtrado de paquetes no proporciona";
 choices[65]= new Array();
 choices[65][0] = "Bajo nivel de seguridad";
 choices[65][1] = "Protecci&oacute;n sobre la capa de red";
 choices[65][2] = "Alto rendimiento y escalabilidad";
 choices[65][3] = "Todas las respuestas anteriores son correctas";
 answers[65] = choices[65][1];
 units[65] = "111";
 comments[65] = "Id Pregunta: 6577. NULL";


//  Id pregunta: 6598 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  El documento de seguridad de obligado cumplimiento para el personal con acceso a los ficheros automatizados y no automatizados de car&aacute;cter personal y a los sistemas de informaci&oacute;n, debo incluir:";
 choices[66]= new Array();
 choices[66][0] = "&Aacute;mbito de aplicaci&oacute;n del documento con especificaci&oacute;n detallada de los recursos protegidos";
 choices[66][1] = "Estructura de los ficheros con datos de car&aacute;cter personal y descripci&oacute;n de los sistemas de informaci&oacute;n que los tratan";
 choices[66][2] = "Procedimiento de notificaci&oacute;n, gesti&oacute;n y respuesta ante incidencias";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = choices[66][3];
 units[66] = "75";
 comments[66] = "Id Pregunta: 6598. NULL";


//  Id pregunta: 6606 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Cual de las siguientes t&eacute;cnicas no se contempla en el An&aacute;lisis Estructurado";
 choices[67]= new Array();
 choices[67][0] = "Diagrama de Flujos de Control";
 choices[67][1] = "Diccionario de Datos";
 choices[67][2] = "Diagrama de Interaci&oacute;n";
 choices[67][3] = "Tabla de Activaci&oacute;n de Procesos";
 answers[67] = choices[67][2];
 units[67] = "81";
 comments[67] = "Id Pregunta: 6606. NULL";


//  Id pregunta: 7310 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  En relaci&oacute;n a la utilizaci&oacute;n de gram&aacute;ticas y modelos de lenguaje para el reconocimiento de lenguaje natural, indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[68]= new Array();
 choices[68][0] = "Las gram&aacute;ticas permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 choices[68][1] = "Las gram&aacute;ticas permiten obtener tasas de acierto m&aacute;s elevadas que los modelos de lenguaje";
 choices[68][2] = "Los modelos de lenguaje precisan de grandes corpus de entrenamiento";
 choices[68][3] = "Los modelos de lenguaje permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 answers[68] = choices[68][0];
 units[68] = "94";
 comments[68] = "Id Pregunta: 7310. NULL";


//  Id pregunta: 7845 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)   En la matriz de puntuaci&oacute;n REDER, que es el m&eacute;todo de evaluaci&oacute;n utilizado para puntuar las memorias de las organizaciones que se presentan al Premio Europeo de la Calidad, al subcriterio 7b se le asigna, del total de puntos correspondientes al criterio 7, el:";
 choices[69]= new Array();
 choices[69][0] = " 10%.";
 choices[69][1] = " 15%.";
 choices[69][2] = " 20%.";
 choices[69][3] = " 25%.";
 answers[69] = choices[69][3];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7845. Map 2005";


//  Id pregunta: 7931 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NO es cierta?";
 choices[70]= new Array();
 choices[70][0] = " Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks).";
 choices[70][1] = " Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada uno de sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas por dicha estaci&oacute;n.";
 choices[70][2] = " Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast.";
 choices[70][3] = " Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os.";
 answers[70] = choices[70][2];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7931. Map 2006";


//  Id pregunta: 8064 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[71]= new Array();
 choices[71][0] = " Vista de Componentes.";
 choices[71][1] = " Vista de Despliegue.";
 choices[71][2] = " Vista de Casos de Uso.";
 choices[71][3] = " Vista de Flujo de Datos.";
 answers[71] = choices[71][3];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 8064. Map 2008";


//  Id pregunta: 8066 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)   Con respecto a la tecnolog&iacute;a conocida como &laquo;SONET&raquo; (terminolog&iacute;a de EE.UU.) o SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[72]= new Array();
 choices[72][0] = " Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplo de una se&ntilde;al base de 155 Mbps denominada STM.";
 choices[72][1] = " Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia.";
 choices[72][2] = " La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red.";
 choices[72][3] = " En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace o nodo de la red.";
 answers[72] = choices[72][1];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 8066. Map 2008";


//  Id pregunta: 8075 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)   &iquest;Cu&aacute;l de las siguientes NO es una herramienta TAW (Test de Accesibilidad Web)?";
 choices[73]= new Array();
 choices[73][0] = " TAW3 Online.";
 choices[73][1] = " TAW3 Web Start.";
 choices[73][2] = " TAW3 Onsite.";
 choices[73][3] = " TAW3 en un clic.";
 answers[73] = choices[73][2];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8075. Map 2008";


//  Id pregunta: 8082 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)   En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes wireless de banda ancha (MBWA):";
 choices[74]= new Array();
 choices[74][0] = " 802.3.";
 choices[74][1] = " 802.11.";
 choices[74][2] = " 802.15.";
 choices[74][3] = " 802.20.";
 answers[74] = choices[74][3];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 8082. Map 2008";


//  Id pregunta: 8179 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  El manifiesto por un desarrollo de software &aacute;gil (Manifesto for Agile Software Development) da m&aacute;s valor a:";
 choices[75]= new Array();
 choices[75][0] = "Los individuos y sus interacciones que a los procesos y herramientas.";
 choices[75][1] = "Una documentaci&oacute;n completa que a software que funcione.";
 choices[75][2] = "La negociaci&oacute;n contractual que a la colaboraci&oacute;n con los usuarios.";
 choices[75][3] = "Seguir una planificaci&oacute;n que a adaptarse al cambio.";
 answers[75] = choices[75][0];
 units[75] = "";
 comments[75] = "Id Pregunta: 8179. Examen TIC A1 2010";


//  Id pregunta: 8322 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Un sistema compuesto por 15 usuarios intercambian informaci&oacute;n cifrada mediante AES. Si los canales de comunicaci&oacute;n entre usuarios es 2 a 2 (es decir, todos intercambian informaci&oacute;n con todos) &iquest;cu&aacute;ntas claves son necesarias?";
 choices[76]= new Array();
 choices[76][0] = "15.";
 choices[76][1] = "105.";
 choices[76][2] = "210.";
 choices[76][3] = "30. ";
 answers[76] = choices[76][1];
 units[76] = "72";
 comments[76] = "Id Pregunta: 8322. Examen TIC A2 2010";


//  Id pregunta: 8463 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[77]= new Array();
 choices[77][0] = "JNDI";
 choices[77][1] = "JAAS";
 choices[77][2] = "JMS";
 choices[77][3] = "JNI";
 answers[77] = choices[77][1];
 units[77] = "116";
 comments[77] = "Id Pregunta: 8463. Analista Ayto. Madrid 2010";


//  Id pregunta: 8512 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;C&oacute;mo se conoce a la disciplina en la que se estudian y aplican t&eacute;cnicas que permiten el ocultamiento de informaci&oacute;n o archivos, dentro de otros, llamados portadores, de modo que NO se perciba su existencia? ";
 choices[78]= new Array();
 choices[78][0] = "Esteganograf&iacute;a. ";
 choices[78][1] = "Criptograf&iacute;a. ";
 choices[78][2] = "Criptoan&aacute;lisis. ";
 choices[78][3] = "Estegan&aacute;lisis. ";
 answers[78] = choices[78][0];
 units[78] = "37";
 comments[78] = "Id Pregunta: 8512. Examen TIC A2 2010";


//  Id pregunta: 8548 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos se corresponde con la tecnolog&iacute;a que proporciona una infraestructura para la definici&oacute;n de servicios que pueden ser consumidos de manera uniforme, sin conocer los detalles e los sistemas que los proporcionan?";
 choices[79]= new Array();
 choices[79][0] = "EAI (Enterprise Application Integration)";
 choices[79][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[79][2] = "ESB (Enterprise Service Bus)";
 choices[79][3] = "ORB (Object Request Broker)";
 answers[79] = choices[79][2];
 units[79] = "51";
 comments[79] = "Id Pregunta: 8548. Analista Ayto. Madrid 2010";


//  Id pregunta: 8839 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, son derechos de los ciudadanos en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad administrativa:";
 choices[80]= new Array();
 choices[80][0] = "Que los servicios p&uacute;blicos se presten por medios electr&oacute;nicos, aunque sea con menor calidad que los medios presenciales ";
 choices[80][1] = "Que las personas jur&iacute;dicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, pero no as&iacute; las personas f&iacute;sicas.";
 choices[80][2] = "Que las personas f&iacute;sicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, excluy&eacute;ndose otros sistemas de firma";
 choices[80][3] = "Que puedan elegir, entre aquellos que en cada momento se encuentren disponibles, el canal a trav&eacute;s del cual relacionarse por medios electr&oacute;nicos con las Administraciones P&uacute;blicas";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 8839. Examen UC3M 2010";


//  Id pregunta: 9309 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;ndo es necesario disponer de un control compensatorio?";
 choices[81]= new Array();
 choices[81][0] = "Cuando no est&eacute; previsto un control.";
 choices[81][1] = "Cuando el coste de un control lo haga inabordable.";
 choices[81][2] = "Cuando el control no est&eacute; efectivamente implantado o falle su aplicaci&oacute;n.";
 choices[81][3] = "Todas las anteriores son ciertas.";
 answers[81] = choices[81][3];
 units[81] = "31";
 comments[81] = "Id Pregunta: 9309. ";


//  Id pregunta: 9325 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; norma define el cableado";
 choices[82]= new Array();
 choices[82][0] = "ISO 50173";
 choices[82][1] = "ISO 11801";
 choices[82][2] = "ISO 18765";
 choices[82][3] = "ISO 80211";
 answers[82] = choices[82][1];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9325. NULL";


//  Id pregunta: 9410 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Cu&aacute;l de las siguientes no es una funci&oacute;n de car&aacute;cter esencialmente estrat&eacute;gico en las organizaciones TIC?";
 choices[83]= new Array();
 choices[83][0] = "Definici&oacute;n de pol&iacute;ticas de seguridad";
 choices[83][1] = "Definici&oacute;n de la arquitectura TIC";
 choices[83][2] = "Definici&oacute;n de la estrategia TIC";
 choices[83][3] = "Oficina de gesti&oacute;n de proyectos";
 answers[83] = choices[83][3];
 units[83] = "26";
 comments[83] = "Id Pregunta: 9410. ";


//  Id pregunta: 9605 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[84]= new Array();
 choices[84][0] = "Oracle";
 choices[84][1] = "MongoDB";
 choices[84][2] = "eXist";
 choices[84][3] = "Redis";
 answers[84] = choices[84][2];
 units[84] = "58";
 comments[84] = "Id Pregunta: 9605. NULL";


//  Id pregunta: 9682 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Son tipos de mapas:";
 choices[85]= new Array();
 choices[85][0] = "Topogr&aacute;fico, topol&oacute;gico, tem&aacute;tico y superficial.";
 choices[85][1] = "Topogr&aacute;fico, azimutal, tem&aacute;tico y plano.";
 choices[85][2] = "Referencial, topol&oacute;gico, tem&aacute;tico y plano. ";
 choices[85][3] = "Cil&iacute;ndrico, azimutal, c&oacute;nico y estereogr&aacute;fico.";
 answers[85] = choices[85][2];
 units[85] = "67";
 comments[85] = "Id Pregunta: 9682. NULL";


//  Id pregunta: 9775 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra &quot;libro&quot; dentro de ficheros?";
 choices[86]= new Array();
 choices[86][0] = "find -type f | xwygs grep &quot;libro&quot;";
 choices[86][1] = "find -type f | xaygs grep &quot;libro&quot; ";
 choices[86][2] = "find -type f | xargs grep &quot;libro&quot; ";
 choices[86][3] = "find -type f | xargp grep &quot;libro&quot; ";
 answers[86] = choices[86][2];
 units[86] = "54";
 comments[86] = "Id Pregunta: 9775. Examen TIC A2 2013 - Duplicada";


//  Id pregunta: 9804 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Indique la opci&oacute;n INCORRECTA en relaci&oacute;n con el Esquema Nacional de Seguridad (ENS):";
 choices[87]= new Array();
 choices[87][0] = "Los sistemas de informaci&oacute;n a los que se refiere el ENS ser&aacute;n objeto de una auditor&iacute;a regular ordinaria, al menos cada dos a&ntilde;os, que verifique el cumplimiento de los requerimientos expuestos en el ENS. ";
 choices[87][1] = "Gesti&oacute;n de riesgos, funci&oacute;n diferenciada y reevaluaci&oacute;n peri&oacute;dica son 3 de los principios b&aacute;sicos que deber&aacute;n tenerse en cuenta en las decisiones en materia de seguridad";
 choices[87][2] = "El Instituto Nacional de las Tecnolog&iacute;as de la Informaci&oacute;n (INTECO), en el ejercicio de sus competencias, elaborar&aacute; y difundir&aacute; las correspondientes gu&iacute;as de la seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones. ";
 choices[87][3] = "Si a los 12 meses de la entrada en vigor del ENS hubiera circunstancias que impidan la plena aplicaci&oacute;n de lo exigido en el mismo, se dispondr&aacute; de un plan de adecuaci&oacute;n que marque los plazos de ejecuci&oacute;n, los cuales, en ning&uacute;n caso, ser&aacute;nsuperiores a 48 meses desde la entrada en vigor. ";
 answers[87] = choices[87][2];
 units[87] = "44";
 comments[87] = "Id Pregunta: 9804. NULL";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Cual de las siguientes certificaciones profesionales NO pertenecen a ISACA";
 choices[88]= new Array();
 choices[88][0] = "CISSP";
 choices[88][1] = "CISA";
 choices[88][2] = "CRISC ";
 choices[88][3] = "CISM";
 answers[88] = choices[88][0];
 units[88] = "31, 32, 33";
 comments[88] = "Id Pregunta: 10556. CISSP pertenece a ISC2";


//  Id pregunta: 10708 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Qu&eacute; dato/s sobre los documentos electr&oacute;nicos no se incluyen en el &iacute;ndice electr&oacute;nico?";
 choices[89]= new Array();
 choices[89][0] = "Identificador del documento.";
 choices[89][1] = "El propio documento electr&oacute;nico.";
 choices[89][2] = "La huella digital del documento.";
 choices[89][3] = "La funci&oacute;n resumen utlizada para la obtenci&oacute;n de la huella digital.";
 answers[89] = choices[89][1];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10708. ";


//  Id pregunta: 10963 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[90]= new Array();
 choices[90][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[90][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[90][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[90][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[90] = choices[90][1];
 units[90] = "115";
 comments[90] = "Id Pregunta: 10963. TIC A1 AGE 2014";


//  Id pregunta: 11132 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;A qu&eacute; se refiere un problema de fragmentaci&oacute;n interna de la memoria de un sistema operativo?";
 choices[91]= new Array();
 choices[91][0] = "Cuando el programa es m&aacute;s peque&ntilde;o que el marco de p&aacute;gina asignado";
 choices[91][1] = "Cuando quedan zonas de memoria libres peque&ntilde;as que no se pueden utilizar";
 choices[91][2] = "Cuando un programa utiliza zonas de memoria diferentes en cada sesi&oacute;n para escribir sus datos.";
 choices[91][3] = "Ninguna de las anteriores";
 answers[91] = choices[91][0];
 units[91] = "52";
 comments[91] = "Id Pregunta: 11132. ";


//  Id pregunta: 11189 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo TCP WhoIS?";
 choices[92]= new Array();
 choices[92][0] = "43";
 choices[92][1] = "21";
 choices[92][2] = "23";
 choices[92][3] = "69";
 answers[92] = choices[92][0];
 units[92] = "112";
 comments[92] = "Id Pregunta: 11189. ";


//  Id pregunta: 11293 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de plugin de Liferay?";
 choices[93]= new Array();
 choices[93][0] = "Tema";
 choices[93][1] = "Portlet";
 choices[93][2] = "Ruta";
 choices[93][3] = "Hook";
 answers[93] = choices[93][2];
 units[93] = "95";
 comments[93] = "Id Pregunta: 11293. ";


//  Id pregunta: 11295 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes gestores de contenidos NO est&aacute; desarrollado en Java?";
 choices[94]= new Array();
 choices[94][0] = "Liferay";
 choices[94][1] = "Alfresco";
 choices[94][2] = "Drupal";
 choices[94][3] = "OpenCMS";
 answers[94] = choices[94][2];
 units[94] = "95";
 comments[94] = "Id Pregunta: 11295. ";


//  Id pregunta: 11389 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes actividades asegura y desempe&ntilde;a la Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio?: 1. Identificar los elementos de configuraci&oacute;n (CI); 2. Que los CIs tengan una l&iacute;nea base; 3. Controlar los cambios en los CIs";
 choices[95]= new Array();
 choices[95][0] = "Todos";
 choices[95][1] = "Solo 1 y 2";
 choices[95][2] = "Solo 3";
 choices[95][3] = "Solo 2 y 3";
 answers[95] = choices[95][0];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11389. ";


//  Id pregunta: 11561 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De los siguientes tipos de middlewares, &iquest;Cu&aacute;l de ellos permite de manera m&aacute;s sencilla la transformaci&oacute;n de mensajes, conversi&oacute;n de protocolos y enrutamiento de servicios, desde una perspectiva de red WAN?";
 choices[96]= new Array();
 choices[96][0] = "Estaci&oacute;n de Mensajer&iacute;a";
 choices[96][1] = "Motor de Integraci&oacute;n";
 choices[96][2] = "Cliente-Servidor";
 choices[96][3] = "ESB";
 answers[96] = choices[96][3];
 units[96] = "114";
 comments[96] = "Id Pregunta: 11561. NULL";


//  Id pregunta: 11603 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La soluci&oacute;n integral de registro para cualquier organismo p&uacute;blico, que cubre tanto la gesti&oacute;n de sus oficinas de registro de entrada/salida como la recepci&oacute;n y env&iacute;o de registros en las unidades tramitadoras destinatarias de la documentaci&oacute;n sellama:";
 choices[97]= new Array();
 choices[97][0] = "ORVE";
 choices[97][1] = "SIR";
 choices[97][2] = "GEISER";
 choices[97][3] = "Registro Electr&oacute;nico Com&uacute;n";
 answers[97] = choices[97][2];
 units[97] = "44";
 comments[97] = "Id Pregunta: 11603. ";


//  Id pregunta: 11657 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El est&aacute;ndar WiFi que permite establecer comunicaciones entre autom&oacute;viles es:";
 choices[98]= new Array();
 choices[98][0] = "IEEE 802.11j";
 choices[98][1] = "IEEE 802.11k";
 choices[98][2] = "IEEE 802.11n";
 choices[98][3] = "IEEE 802.11p";
 answers[98] = choices[98][3];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11657. ";


//  Id pregunta: 11708 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; amenaza de seguridad se trata de SW que se adhiere a otro SW para ejecutar funciones no deseadas?";
 choices[99]= new Array();
 choices[99][0] = "Virus";
 choices[99][1] = "Gusano";
 choices[99][2] = "Caballo de Troya Proxy";
 choices[99][3] = "Caballo de Troya de denegaci&oacute;n de servicio";
 answers[99] = choices[99][0];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11708. NULL";


