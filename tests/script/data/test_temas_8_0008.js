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

//  Id pregunta: 884 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l es la diferencia b&aacute;sica entre C y C++?";
 choices[0]= new Array();
 choices[0][0] = "C++ es la versi&oacute;n de C estandarizada por ANSI (tambi&eacute;n se le conoce como ANSI-C).";
 choices[0][1] = "C++ es un superconjunto de instrucciones de C para soportar programaci&oacute;n orientada a objetos.";
 choices[0][2] = "C++ es la versi&oacute;n de C preparada por los laboratorios Bell de ATT que permite embeber sentencias SQL.";
 choices[0][3] = "C++ es una versi&oacute;n 4GL del C est&aacute;ndar (lenguaje de 4&ordf; generaci&oacute;n) mientras que C es un lenguaje de 3&ordf; generaci&oacute;n.";
 answers[0] = choices[0][1];
 units[0] = "82, 84";
 comments[0] = "Id Pregunta: 884. ";


//  Id pregunta: 2019 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En el dise&ntilde;o estructurado, se&ntilde;ale la definici&oacute;n correcta de FAN-OUT.";
 choices[1]= new Array();
 choices[1][0] = "Es el n&uacute;mero de superordinados inmediatos de un m&oacute;dulo.";
 choices[1][1] = "Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[1][2] = "Es el n&uacute;mero de m&oacute;dulos que hay que compilar antes del m&oacute;dulo.";
 choices[1][3] = "Es el n&uacute;mero de par&aacute;metros de salida que tiene un m&oacute;dulo.";
 answers[1] = choices[1][1];
 units[1] = "84";
 comments[1] = "Id Pregunta: 2019. Examen TIC MAP B 2004";


//  Id pregunta: 2074 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Son comunes a todas las metodolog&iacute;as de desarrollo de SW";
 choices[2]= new Array();
 choices[2][0] = "Uso de t&eacute;cnicas Gr&aacute;ficas";
 choices[2][1] = "Documentaci&oacute;n";
 choices[2][2] = "Diccionario de datos";
 choices[2][3] = "todas las anteriores";
 answers[2] = choices[2][3];
 units[2] = "79";
 comments[2] = "Id Pregunta: 2074. ";


//  Id pregunta: 2091 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  DARTS es el acr&oacute;nimo de:";
 choices[3]= new Array();
 choices[3][0] = "Data Redesign for Transactional Systems.";
 choices[3][1] = "Design Aproach for Real Time Systems.";
 choices[3][2] = "Design Aproach for Real Transactional Systems.";
 choices[3][3] = "No es acr&oacute;nimo de nada.";
 answers[3] = choices[3][1];
 units[3] = "83";
 comments[3] = "Id Pregunta: 2091. ";


//  Id pregunta: 2109 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest; De los siguientes, cu&aacute;l es un lenguaje orientado a objetos puro?:";
 choices[4]= new Array();
 choices[4][0] = "Dominum";
 choices[4][1] = "PureLisp";
 choices[4][2] = "Eiffel";
 choices[4][3] = "Domino";
 answers[4] = choices[4][2];
 units[4] = "82";
 comments[4] = "Id Pregunta: 2109. ";


//  Id pregunta: 2188 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;les de las siguientes cuestiones conciernen al an&aacute;lisis de requerimientos?:";
 choices[5]= new Array();
 choices[5][0] = "Criterios de prueba y evaluaci&oacute;n del producto software obtenido";
 choices[5][1] = "Descripci&oacute;n detallada de las funciones";
 choices[5][2] = "Estructura de la base de datos";
 choices[5][3] = "Son ciertas las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[5] = choices[5][0];
 units[5] = "78";
 comments[5] = "Id Pregunta: 2188. ";


//  Id pregunta: 2239 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Cada ocurrencia de un tipo de entidad o interrelaci&oacute;n toma valores a partir de la observaci&oacute;n del mundo real Al conjunto de posibles valores que puede tomar una cierta caracter&iacute;stica se llama:";
 choices[6]= new Array();
 choices[6][0] = "Atributo";
 choices[6][1] = "Dominio";
 choices[6][2] = "Relaci&oacute;n";
 choices[6][3] = "Restricci&oacute;n";
 answers[6] = choices[6][1];
 units[6] = "80";
 comments[6] = "Id Pregunta: 2239. ";


//  Id pregunta: 2323 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En la gesti&oacute;n de riesgos del modelo en espiral del ciclo de vida de una aplicaci&oacute;n, entre los riesgos m&aacute;s importantes que se contemplan tenemos:";
 choices[7]= new Array();
 choices[7][0] = "Escasez de personal";
 choices[7][1] = "Presupuestos y calendarios no realistas";
 choices[7][2] = "Las 2 anteriores";
 choices[7][3] = "Ninguna de las anteriores, pues este tema de riesgos es indiferente para el modelo en espiral";
 answers[7] = choices[7][2];
 units[7] = "76";
 comments[7] = "Id Pregunta: 2323. ";


//  Id pregunta: 2330 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En la realizaci&oacute;n de DFDs:";
 choices[8]= new Array();
 choices[8][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[8][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[8][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[8][3] = "Todas las respuestas anteriores son correctas";
 answers[8] = choices[8][3];
 units[8] = "81";
 comments[8] = "Id Pregunta: 2330. ";


//  Id pregunta: 2490 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[9]= new Array();
 choices[9][0] = "El dominio de la informaci&oacute;n";
 choices[9][1] = "La subdivisi&oacute;n del problema";
 choices[9][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[9][3] = "Los tres anteriores";
 answers[9] = choices[9][3];
 units[9] = "78,80,81,82";
 comments[9] = "Id Pregunta: 2490. ";


//  Id pregunta: 2505 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Un almac&eacute;n de datos en un DFD&hellip;:";
 choices[10]= new Array();
 choices[10][0] = "No tiene por qu&eacute; equivaler a una tabla";
 choices[10][1] = "Representa una base de datos ";
 choices[10][2] = "Es un objeto de tipo dato";
 choices[10][3] = "Se usa tanto como repositorio como en la recogida de basura";
 answers[10] = choices[10][0];
 units[10] = "81";
 comments[10] = "Id Pregunta: 2505. ";


//  Id pregunta: 2656 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  Relativo a las clases en OO, cuando dos subtipos se unen para crear una clase superior, se produce:";
 choices[11]= new Array();
 choices[11][0] = "Asociaci&oacute;n";
 choices[11][1] = "Agrupaci&oacute;n";
 choices[11][2] = "Agregaci&oacute;n";
 choices[11][3] = "Generalizaci&oacute;n";
 answers[11] = choices[11][3];
 units[11] = "82";
 comments[11] = "Id Pregunta: 2656. ";


//  Id pregunta: 2718 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  En el modelo de ciclo de vida en espiral:";
 choices[12]= new Array();
 choices[12][0] = "La dimensi&oacute;n radial indica los costes y la angular el progreso";
 choices[12][1] = "La dimensi&oacute;n angular indica los costes y la radial el progreso";
 choices[12][2] = "La dimensi&oacute;n lineal indica los costes y la angular el progreso";
 choices[12][3] = "La dimensi&oacute;n radial indica los costes y la angular el riesgo";
 answers[12] = choices[12][0];
 units[12] = "76";
 comments[12] = "Id Pregunta: 2718. ";


//  Id pregunta: 2748 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  En un DFD (Diagrama de Flujos de Datos)  el diagrama que  se representa mediante las entidades externas de entrada y salida y un solo proceso principal es el:";
 choices[13]= new Array();
 choices[13][0] = "Diagrama de bloques";
 choices[13][1] = "Diagrama de contexto";
 choices[13][2] = "Diagrama de primer nivel";
 choices[13][3] = "Diagrama b&aacute;sico";
 answers[13] = choices[13][1];
 units[13] = "81";
 comments[13] = "Id Pregunta: 2748. ";


//  Id pregunta: 2750 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Indique de las siguientes cual no es una metodologia de desarrollo orientada a objetos";
 choices[14]= new Array();
 choices[14][0] = "SA/SD";
 choices[14][1] = "OMT";
 choices[14][2] = "Proceso Unificado de modelado";
 choices[14][3] = "Tarjetas de clase";
 answers[14] = choices[14][0];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2750. ";


//  Id pregunta: 2758 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  En el an&aacute;lisis orientado a objetos, la herencia es:";
 choices[15]= new Array();
 choices[15][0] = "Es el t&eacute;rmino formal que se utiliza para expresar que los datos de un objeto solamente pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos";
 choices[15][1] = "Es el mecanismo mediante el cual una clase adquiere las propiedades de otra clase jer&aacute;rquicamente superior";
 choices[15][2] = "La propiedad que permite definir tantas versiones de un m&eacute;todo como tipos de argumentos pueda tener";
 choices[15][3] = "No existe";
 answers[15] = choices[15][1];
 units[15] = "82";
 comments[15] = "Id Pregunta: 2758. ";


//  Id pregunta: 2762 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  La base para el an&aacute;lisis de un sistema de tiempo real pasa por:";
 choices[16]= new Array();
 choices[16][0] = "La teor&iacute;a de los sistemas lineales.";
 choices[16][1] = "La especificaci&oacute;n de las pruebas de caja blanca.";
 choices[16][2] = "La sincronizaci&oacute;n.";
 choices[16][3] = "Ninguna de las anteriores.";
 answers[16] = choices[16][0];
 units[16] = "83";
 comments[16] = "Id Pregunta: 2762. NULL";


//  Id pregunta: 2772 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;En cu&aacute;l de los siguientes tipos se garantiza un mayor nivel de cohesi&oacute;n de un m&oacute;dulo de software?";
 choices[17]= new Array();
 choices[17][0] = "Cohesi&oacute;n de comunicaci&oacute;n.";
 choices[17][1] = "Cohesi&oacute;n temporal.";
 choices[17][2] = "Cohesi&oacute;n l&oacute;gica.";
 choices[17][3] = "Cohesi&oacute;n procedimental.";
 answers[17] = choices[17][0];
 units[17] = "84";
 comments[17] = "Id Pregunta: 2772. ";


//  Id pregunta: 2776 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Sobre la elaboraci&oacute;n de un prototipo se puede decir...";
 choices[18]= new Array();
 choices[18][0] = "La determinaci&oacute;n de los requerimientos de una aplicaci&oacute;n es tan importante para el m&eacute;todo de desarrollo de prototipos como lo es para el ciclo de desarrollo de sistemas o an&aacute;lisis estructurado.";
 choices[18][1] = "No deben realizarse si existe poca informaci&oacute;n disponible con respecto a las caracteristicas  de la aplicaci&oacute;n.";
 choices[18][2] = "No es necesario seguir los est&aacute;ndares de datos definidos en la organizaci&oacute;n.";
 choices[18][3] = "Son convenientes sea cual sea la aplicaci&oacute;n final.";
 answers[18] = choices[18][0];
 units[18] = "85";
 comments[18] = "Id Pregunta: 2776. ";


//  Id pregunta: 2777 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Sobre la elaboraci&oacute;n de un prototipo es cierto que...";
 choices[19]= new Array();
 choices[19][0] = "El que los usuarios finales vean en el prototipo una versi&oacute;n definitiva del software no es un problema t&iacute;pico de los prototipos desechables.";
 choices[19][1] = "Los prototipos desechables se utilizan en desarrollos en cascada.";
 choices[19][2] = "No se suelen considerar aspectos de calidad pero s&iacute; de facilidad de mantenimiento.";
 choices[19][3] = "El que los usuarios finales vean en el prototipo una versi&oacute;n definitiva del software es un problema t&iacute;pico de los prototipos evolutivos.";
 answers[19] = choices[19][1];
 units[19] = "85";
 comments[19] = "Id Pregunta: 2777. ";


//  Id pregunta: 4381 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Dentro de un programa se incluye el siguiente m&oacute;dulo. &iquest;Qu&eacute; cohesi&oacute;n existe entre los procedimientos que lo componen? DEFINITION MODULE PintarFigura; PROCEDURE PintarPerimetro(...); PROCEDURE   PintarColor(...); PROCEDURE PintarSombras(...); END PintarFigura";
 choices[20]= new Array();
 choices[20][0] = "Cohesi&oacute;n funcional.";
 choices[20][1] = "Cohesi&oacute;n abstraccional.";
 choices[20][2] = "Cohesi&oacute;n secuencial.";
 choices[20][3] = "Cohesi&oacute;n temporal.";
 answers[20] = choices[20][0];
 units[20] = "84";
 comments[20] = "Id Pregunta: 4381. ";


//  Id pregunta: 4438 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  En el an&aacute;lisis de los requisitos de un sistema de informaci&oacute;n, para representar los distintos datos y sus relaciones, la &ldquo;t&eacute;cnica&rdquo; m&aacute;s adecuada:";
 choices[21]= new Array();
 choices[21][0] = "Seudoc&oacute;digo.";
 choices[21][1] = "Modelo Entidad-Relaci&oacute;n.";
 choices[21][2] = "Diagramas de transici&oacute;n de estados.";
 choices[21][3] = "DFD (Diagrama de Flujo de Datos).";
 answers[21] = choices[21][1];
 units[21] = "78";
 comments[21] = "Id Pregunta: 4438. ";


//  Id pregunta: 4473 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  &iquest;Que se entiende por el conjunto de t&eacute;cnicas para iniciar, evaluar e implementar cambios en un producto software manteniendo su integridad?";
 choices[22]= new Array();
 choices[22][0] = "Metodolog&iacute;a.";
 choices[22][1] = "Gesti&oacute;n de Configuraci&oacute;n Software.";
 choices[22][2] = "Ingenier&iacute;a Inversa.";
 choices[22][3] = "An&aacute;lisis y Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[22] = choices[22][1];
 units[22] = "76";
 comments[22] = "Id Pregunta: 4473. ";


//  Id pregunta: 4517 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es un almac&eacute;n de datos?";
 choices[23]= new Array();
 choices[23][0] = "Un sistema de almacenamiento masivo en discos RAID.";
 choices[23][1] = "Una base de datos OLTP.";
 choices[23][2] = "Un repositorio de informaci&oacute;n recopilada de distintas fuentes.";
 choices[23][3] = "Un sistema de almacenamiento innovador que viene integrado en el paquete de Suse&shy;Linux.";
 answers[23] = choices[23][2];
 units[23] = "81";
 comments[23] = "Id Pregunta: 4517. ";


//  Id pregunta: 4602 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  Dentro de la ingenier&iacute;a del software orientada a objetos, &iquest;Como se denomina la relaci&oacute;n entre un componente y su interfaz?";
 choices[24]= new Array();
 choices[24][0] = "agregaci&oacute;n";
 choices[24][1] = "realizaci&oacute;n";
 choices[24][2] = "polimorfismo";
 choices[24][3] = "presentaci&oacute;n";
 answers[24] = choices[24][1];
 units[24] = "82";
 comments[24] = "Id Pregunta: 4602. ";


//  Id pregunta: 4938 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  La notaci&oacute;n de un diagrama Entidad-Relaci&oacute;n no permite representar:";
 choices[25]= new Array();
 choices[25][0] = "Jerarqu&iacute;as de tipos de objetos de datos.";
 choices[25][1] = "Asociaci&oacute;n de objetos de datos.";
 choices[25][2] = "Transformaciones de objetos de datos.";
 choices[25][3] = "La relaci&oacute;n entre objetos de datos.";
 answers[25] = choices[25][2];
 units[25] = "80";
 comments[25] = "Id Pregunta: 4938. Examen TIC B 2007";


//  Id pregunta: 5082 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Seg&uacute;n el m&eacute;todo del c&aacute;mino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[26]= new Array();
 choices[26][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone detodos los recursos necesarios";
 choices[26][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[26][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificarla duraci&oacute;n total del proyecto.";
 choices[26][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[26] = choices[26][3];
 units[26] = "77";
 comments[26] = "Id Pregunta: 5082. Examen TIC A 2007";


//  Id pregunta: 5202 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Cu&aacute;l de las siguientes es una caracter&iacute;stica de las Especificaciones que se obtienen al realizar un An&aacute;lisis estructurado:";
 choices[27]= new Array();
 choices[27][0] = " Redundantes";
 choices[27][1] = "Ambiguas";
 choices[27][2] = "Imposibles de mantener";
 choices[27][3] = "Particionadas";
 answers[27] = choices[27][3];
 units[27] = "81";
 comments[27] = "Id Pregunta: 5202. ";


//  Id pregunta: 5203 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de los Lenguajes Orientados a Objetos?";
 choices[28]= new Array();
 choices[28][0] = "Tipificaci&oacute;n fuerte";
 choices[28][1] = "Paso de mensajes";
 choices[28][2] = "Monotarea";
 choices[28][3] = "Manejo de excepciones";
 answers[28] = choices[28][2];
 units[28] = "82";
 comments[28] = "Id Pregunta: 5203. NULL";


//  Id pregunta: 5244 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[29]= new Array();
 choices[29][0] = "Los FCE ayudan a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n";
 choices[29][1] = "Factores de &eacute;xito son los objetivos de la organizaci&oacute;n";
 choices[29][2] = "FCE son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[29][3] = "Para definir los FCE de la organizaci&oacute;n, es necesario que los objetivos de la misma est&eacute;n claramente definidos";
 answers[29] = choices[29][1];
 units[29] = "77";
 comments[29] = "Id Pregunta: 5244. ";


//  Id pregunta: 6271 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  Qu&eacute; estandar define el ciclo de vida de un sistema de informac&oacute;n como el marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotaci&oacute;n y el mantenimiento de un producto de software, abarcando la vida del sistema desde la definici&oacute;n de los requisitos hasta la finalizaci&oacute;n de su uso.";
 choices[30]= new Array();
 choices[30][0] = "ISO-12207";
 choices[30][1] = "ISO-9800";
 choices[30][2] = "ISO-17702";
 choices[30][3] = "ISO-11200";
 answers[30] = choices[30][0];
 units[30] = "76";
 comments[30] = "Id Pregunta: 6271. ";


//  Id pregunta: 6277 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  No es una ventaja de los modelos de ciclo de vida basada en prototipos:";
 choices[31]= new Array();
 choices[31][0] = "Los sistemas se desarrollan con m&aacute;s rapidez";
 choices[31][1] = "El prototipo coincide exactamente con el producto final";
 choices[31][2] = "Se facilita la comunicaci&oacute;n con los usuarios";
 choices[31][3] = "Los requisitos de usuario son m&aacute;s f&aacute;ciles de determinar";
 answers[31] = choices[31][1];
 units[31] = "76";
 comments[31] = "Id Pregunta: 6277. ";


//  Id pregunta: 6281 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[32]= new Array();
 choices[32][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[32][1] = "An&aacute;lisis DAFO ";
 choices[32][2] = "Aprendizaje organizativo";
 choices[32][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[32] = choices[32][1];
 units[32] = "77";
 comments[32] = "Id Pregunta: 6281. ";


//  Id pregunta: 6283 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  &iquest;Qu&eacute; &oacute;rganos no suelen ser necesarios a la hora de realizar una planificaci&oacute;n y direcci&oacute;n estrat&eacute;gica?";
 choices[33]= new Array();
 choices[33][0] = "Los proveedores";
 choices[33][1] = "El equipo de proyecto";
 choices[33][2] = "El comit&eacute; de direcci&oacute;n";
 choices[33][3] = "Un grupo de usuarios";
 answers[33] = choices[33][0];
 units[33] = "77";
 comments[33] = "Id Pregunta: 6283. ";


//  Id pregunta: 6308 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica que daba tener un sistema en tiempo real?";
 choices[34]= new Array();
 choices[34][0] = "Manejo sencillo, pero potente, de prioridades, permitiendo que puedan modificarse din&aacute;micamente incluso durante la ejecuci&oacute;n de los procesos.";
 choices[34][1] = "Gesti&oacute;n de memoria real y no virtual.";
 choices[34][2] = "Manejo eficaz de interrupciones.";
 choices[34][3] = "Funciones complejas para el manejo de ficheros.";
 answers[34] = choices[34][3];
 units[34] = "83";
 comments[34] = "Id Pregunta: 6308. ";


//  Id pregunta: 6439 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  El paso a tablas de una relaci&oacute;n ternaria ocasiona:";
 choices[35]= new Array();
 choices[35][0] = "Una tabla para la relaci&oacute;n cuya clave es la concatenaci&oacute;n de las clasves de las entidades que participan en la relaci&oacute;n.";
 choices[35][1] = "Tres tablas, una para cada posible combinaci&oacute;n.";
 choices[35][2] = "Dos tablas son suficientes para mantener toda la informaci&oacute;n.";
 choices[35][3] = "No se permiten relaciones ternarias en el modelo E/R.";
 answers[35] = choices[35][0];
 units[35] = "80";
 comments[35] = "Id Pregunta: 6439. NULL";


//  Id pregunta: 8180 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  El manifiesto por un desarrollo de software &aacute;gil (Manifesto for Agile Software Development) da m&aacute;s valor a:";
 choices[36]= new Array();
 choices[36][0] = "Los individuos y sus interacciones que a los procesos y herramientas.";
 choices[36][1] = "Una documentaci&oacute;n completa que a software que funcione.";
 choices[36][2] = "La negociaci&oacute;n contractual que a la colaboraci&oacute;n con los usuarios.";
 choices[36][3] = "Seguir una planificaci&oacute;n que a adaptarse al cambio.";
 answers[36] = choices[36][0];
 units[36] = "79";
 comments[36] = "Id Pregunta: 8180. Examen TIC A1 2010";


//  Id pregunta: 8515 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida tiene en cuenta el an&aacute;lisis de riesgos?";
 choices[37]= new Array();
 choices[37][0] = "Extreme Programming.";
 choices[37][1] = "Modelo de ciclo de vida en cascada";
 choices[37][2] = "El modelo de ciclo de vida en V";
 choices[37][3] = "Modelo de ciclo de vida en espiral";
 answers[37] = choices[37][3];
 units[37] = "76";
 comments[37] = "Id Pregunta: 8515. Examen TIC A2 2010 interna";


//  Id pregunta: 8967 AÃ±o de creación de pregunta: 2011-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[38]= new Array();
 choices[38][0] = "Lisp.";
 choices[38][1] = "Perl.";
 choices[38][2] = "Php.";
 choices[38][3] = "Python.";
 answers[38] = choices[38][3];
 units[38] = "80,81,82,83,84";
 comments[38] = "Id Pregunta: 8967. ";


//  Id pregunta: 9086 AÃ±o de creación de pregunta: 2013-01-01
 questions[39]= "40)  Con respecto a los Factores Cr&iacute;ticos de &Eacute;xito y los objetivos de la organizaci&oacute;n, se&ntilde;ale la opci&oacute;n INCORRECTA";
 choices[39]= new Array();
 choices[39][0] = "Los objetivos  son los &quot;fines&quot; hacia los cuales se dirige el esfuerzo y el trabajo de la organizaci&oacute;n";
 choices[39][1] = "Los factores de &eacute;xito son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[39][2] = "Para cada objetivo se debe definir, al menos, un factor de &eacute;xito";
 choices[39][3] = "Los factores de &eacute;xito deben determinarse antes que los objetivos, ya que constituyen la base para definir los mismos de manera precisa";
 answers[39] = choices[39][3];
 units[39] = "77";
 comments[39] = "Id Pregunta: 9086. ";


//  Id pregunta: 9902 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[40]= new Array();
 choices[40][0] = "En cascada.";
 choices[40][1] = "Basado en prototipos.";
 choices[40][2] = "En espiral WINWIN.";
 choices[40][3] = "RAD.";
 answers[40] = choices[40][2];
 units[40] = "76";
 comments[40] = "Id Pregunta: 9902. TIC A2, Examen 2013";


//  Id pregunta: 9912 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  El proceso mediante el cual los usuarios descubren, revelan, organizan y comprenden los requisitos que desean se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Validaci&oacute;n de los requisitos.";
 choices[41][1] = "Entrevista de especificaci&oacute;n de requisitos.";
 choices[41][2] = "Estudio de viabilidad de requisitos.";
 choices[41][3] = "Elicitaci&oacute;n de requisitos.";
 answers[41] = choices[41][3];
 units[41] = "78";
 comments[41] = "Id Pregunta: 9912. TIC A2, Examen 2013";


//  Id pregunta: 9958 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[42]= new Array();
 choices[42][0] = "La persistencia";
 choices[42][1] = "Los procesos de transformaci&oacute;n.";
 choices[42][2] = "El flujo de la informaci&oacute;n.";
 choices[42][3] = "La herencia";
 answers[42] = choices[42][3];
 units[42] = "81";
 comments[42] = "Id Pregunta: 9958. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10083 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo del proceso?";
 choices[43]= new Array();
 choices[43][0] = "Entorno de desarrollo";
 choices[43][1] = "Modelado de negocio";
 choices[43][2] = "Pruebas";
 choices[43][3] = "Despliegue";
 answers[43] = choices[43][0];
 units[43] = "76";
 comments[43] = "Id Pregunta: 10083. NULL";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil se basa en principios como &ldquo;decidir lo m&aacute;s tarde posible&rdquo; y &ldquo;reaccionar tan r&aacute;pido como sea posible?";
 choices[44]= new Array();
 choices[44][0] = "FDD";
 choices[44][1] = "LSD";
 choices[44][2] = "ASD";
 choices[44][3] = "Kanban";
 answers[44] = choices[44][1];
 units[44] = "79";
 comments[44] = "Id Pregunta: 10087. NULL";


//  Id pregunta: 10104 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  En un DFD, de acuerdo a M&eacute;trica v.3:";
 choices[45]= new Array();
 choices[45][0] = "Existe un diagrama 0 (nivel 0)";
 choices[45][1] = "Existe un diagrama 1 (nivel 0)";
 choices[45][2] = "Existe un diagrama 1 (nivel 1)";
 choices[45][3] = "Existe un diagrama 0 (nivel 1)";
 answers[45] = choices[45][3];
 units[45] = "81";
 comments[45] = "Id Pregunta: 10104. NULL";


//  Id pregunta: 10105 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  Indique cu&aacute;l no es una t&eacute;cnica de an&aacute;lisis estructurado";
 choices[46]= new Array();
 choices[46][0] = "SADR";
 choices[46][1] = "SASS";
 choices[46][2] = "SRD";
 choices[46][3] = "SADT";
 answers[46] = choices[46][0];
 units[46] = "81";
 comments[46] = "Id Pregunta: 10105. NULL";


//  Id pregunta: 10426 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta. ";
 choices[47]= new Array();
 choices[47][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[47][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[47][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[47][3] = "Las anteriores a) b) y c) son correctas.";
 answers[47] = choices[47][3];
 units[47] = "76";
 comments[47] = "Id Pregunta: 10426. Examen TIC A1 2013";


//  Id pregunta: 10825 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[48]= new Array();
 choices[48][0] = "Diagrama de secuencia.";
 choices[48][1] = "Diagrama de colaboraci&oacute;n.";
 choices[48][2] = "Diagrama de clases.";
 choices[48][3] = "Diagrama de Casos de Uso.";
 answers[48] = choices[48][3];
 units[48] = "86, 82, 84";
 comments[48] = "Id Pregunta: 10825. Examen GSI 2014";


//  Id pregunta: 10831 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  Indique cu&aacute;l de las siguientes afirmaciones sobre el proceso de creaci&oacute;n del Modelo Relacional es cierta:";
 choices[49]= new Array();
 choices[49][0] = "El proceso de normalizaci&oacute;n de bases de datos consiste en aplicar una serie de reglas a las relaciones obtenidas tras el paso del Diccionario de Flujo de Datos (DFD) al Modelo Relacional.";
 choices[49][1] = "Una clave compuesta es aquella columna que siendo clave primaria de una tabla, se incluye como columna dependiente en otra tabla.";
 choices[49][2] = "Una clave ajena es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 choices[49][3] = "Una clave alternativa es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 answers[49] = choices[49][3];
 units[49] = "80";
 comments[49] = "Id Pregunta: 10831. Examen GSI 2014";


//  Id pregunta: 10832 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el proceso de normalizaci&oacute;n del Modelo Relacional es cierta?";
 choices[50]= new Array();
 choices[50][0] = "Existen s&oacute;lo un total de 3 Formas Normales: 1FN, 2FN y 3FN.";
 choices[50][1] = "Una tabla est&aacute; en 2FN cuando se demuestra que existe dependencia funcional del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[50][2] = "Una tabla est&aacute; en 1FN cuando se demuestra que existe dependencia funcional completa del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[50][3] = "Una tabla que est&aacute; en 1FN tiene el m&aacute;ximo grado de normalizaci&oacute;n y, por tanto, cumple tambi&eacute;n la Segunda y Tercera Forma Normal.";
 answers[50] = choices[50][1];
 units[50] = "80";
 comments[50] = "Id Pregunta: 10832. Examen GSI 2014";


//  Id pregunta: 10925 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as es considerada como una metodolog&iacute;a &aacute;gil?";
 choices[51]= new Array();
 choices[51][0] = "RAD.";
 choices[51][1] = "OpenUP.";
 choices[51][2] = "SSADM.";
 choices[51][3] = "UP.";
 answers[51] = choices[51][1];
 units[51] = "79";
 comments[51] = "Id Pregunta: 10925. TIC A1 AGE 2014";


//  Id pregunta: 10937 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;Qu&eacute; nombre recibe, en el paradigma de orientaci&oacute;n a objetos, el principio de dise&ntilde;o que establece que las interfaces definidas deben tener una finalidad espec&iacute;fica?";
 choices[52]= new Array();
 choices[52][0] = "Principio abierto-cerrado.";
 choices[52][1] = "Principio de segregaci&oacute;n de interfaces.";
 choices[52][2] = "Principio de responsabilidad simple.";
 choices[52][3] = "Principio de sustituci&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "84";
 comments[52] = "Id Pregunta: 10937. TIC A1 AGE 2014";


//  Id pregunta: 10944 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  Respecto a los diagramas de flujos de datos, se&ntilde;ale la respuesta correcta:";
 choices[53]= new Array();
 choices[53][0] = "Proporcionan un mecanismo para el modelado funcional, no siendo necesario considerar el flujo de informaci&oacute;n.";
 choices[53][1] = "Por s&iacute; solos, son una herramienta suficiente para describir los requisitos del software.";
 choices[53][2] = "En los sucesivos niveles de detalle es necesario mantener la continuidad del flujo de informaci&oacute;n.";
 choices[53][3] = "No son una herramienta v&aacute;lida para sistemas de tiempo real.";
 answers[53] = choices[53][2];
 units[53] = "81";
 comments[53] = "Id Pregunta: 10944. TIC A1 AGE 2014";


//  Id pregunta: 11309 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  Se&ntilde;ale el conjunto de conceptos que son introducidos por el Modelo Entidad/Relaci&oacute;n extendido";
 choices[54]= new Array();
 choices[54][0] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e identificaci&oacute;n.";
 choices[54][1] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima y Dependencia en existencia e identificaci&oacute;n.";
 choices[54][2] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e autenticaci&oacute;n.";
 choices[54][3] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima e independencia en existencia e identificaci&oacute;n.";
 answers[54] = choices[54][0];
 units[54] = "80";
 comments[54] = "Id Pregunta: 11309. ";


