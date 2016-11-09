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

//  Id pregunta: 8 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes puntos de verificaci&oacute;n de WAI (en la norma WCAG 1.0) no es de prioridad 1?";
 choices[0]= new Array();
 choices[0][0] = "&quot;Titule cada marco para facilitar la identificaci&oacute;n y navegaci&oacute;n de los mismos&quot;";
 choices[0][1] = "&quot;En las tablas de datos, identifique los encabezamientos de fila y columna&quot;";
 choices[0][2] = "&quot;Asegure que toda la informaci&oacute;n transmitida a trav&eacute;s de los colores tambi&eacute;n est&eacute; disponible sin color, por ejemplo mediante el contexto o por marcadores&quot;";
 choices[0][3] = "&quot;Utilice hojas de estilo para controlar la maquetaci&oacute;n y la presentaci&oacute;n&quot;";
 answers[0] = choices[0][3];
 units[0] = "39";
 comments[0] = "Id Pregunta: 8. ";


//  Id pregunta: 28 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de estos m&eacute;todos no persigue directamente la reducci&oacute;n del TCO?:";
 choices[1]= new Array();
 choices[1][0] = "Inventario";
 choices[1][1] = "Estandarizaci&oacute;n";
 choices[1][2] = "Control de la configuraci&oacute;n";
 choices[1][3] = "Centralizaci&oacute;n";
 answers[1] = choices[1][3];
 units[1] = "25";
 comments[1] = "Id Pregunta: 28. ";


//  Id pregunta: 108 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Cuando hablamos de un nuevo tipo de trabajo en las organizaciones basadas en la informaci&oacute;n, nos referimos a:";
 choices[2]= new Array();
 choices[2][0] = "Disminuci&oacute;n de la presi&oacute;n sobre el trabajador y aumento sobre los sistemas de informaci&oacute;n";
 choices[2][1] = "Necesidad de un trabajador m&aacute;s inteligente pues necesita establecer conexiones entre los s&iacute;mbolos y la realidad";
 choices[2][2] = "Aumento de la conexi&oacute;n del trabajador con el mundo exterior lejano a &eacute;l, gracias a las redes internacionales de ordenadores";
 choices[2][3] = "Aumento de la satisfacci&oacute;n del trabajador que observa la capacidad de producci&oacute;n que tiene el simple hecho de pulsar una tecla del ordenador";
 answers[2] = choices[2][1];
 units[2] = "22";
 comments[2] = "Id Pregunta: 108. NULL";


//  Id pregunta: 162 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El representante de Estados Unidos en la ISO es:";
 choices[3]= new Array();
 choices[3][0] = "AENOR";
 choices[3][1] = "BSI";
 choices[3][2] = "IEEE";
 choices[3][3] = "ANSI";
 answers[3] = choices[3][3];
 units[3] = "42";
 comments[3] = "Id Pregunta: 162. ";


//  Id pregunta: 269 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Indicar la afirmaci&oacute;n que no corresponde entre los objetivos fundamentales de un DSS orientado a datos:";
 choices[4]= new Array();
 choices[4][0] = "Presentar al usuario una informaci&oacute;n seleccionada para la toma de decisiones";
 choices[4][1] = "Confrontar m&uacute;ltiples criterios de decisi&oacute;n y buscar un modelo en el sistema para predecir las consecuencias de una acci&oacute;n propuesta";
 choices[4][2] = "Facilitar el conocimiento estructural del problema que permite el posterior desarrollo de un modelo formal de decisi&oacute;n";
 choices[4][3] = "Proporcionar un medio f&aacute;cil al usuario para jugar con los datos";
 answers[4] = choices[4][1];
 units[4] = "21";
 comments[4] = "Id Pregunta: 269. ";


//  Id pregunta: 309 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La gu&iacute;a XPG 4 de X/OPEN apareci&oacute; en:";
 choices[5]= new Array();
 choices[5][0] = "1989";
 choices[5][1] = "1990";
 choices[5][2] = "1991";
 choices[5][3] = "1992";
 answers[5] = choices[5][3];
 units[5] = "40";
 comments[5] = "Id Pregunta: 309. XPG";


//  Id pregunta: 493 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  &iquest;C&uacute;antos niveles de evaluaci&oacute;n est&aacute;n contemplados en los Criterios Comunes?";
 choices[6]= new Array();
 choices[6][0] = "Siete";
 choices[6][1] = "Coinciden con los de ITSEC";
 choices[6][2] = "Cinco";
 choices[6][3] = "Seis";
 answers[6] = choices[6][0];
 units[6] = "31,32,33";
 comments[6] = "Id Pregunta: 493. ";


//  Id pregunta: 504 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  En la planificaci&oacute;n de un  Proyecto lo cierto es";
 choices[7]= new Array();
 choices[7][0] = "El diagrama de Gantt expresa el camino cr&iacute;tico";
 choices[7][1] = "Una tarea no perteneciente al camino cr&iacute;tico puede retrasar la finalizaci&oacute;n del proyecto";
 choices[7][2] = "En el diagrama de PERT los arcos no son dirigidos";
 choices[7][3] = "El gr&aacute;fico de Gant se basa en la representaci&oacute;n de restricciones";
 answers[7] = choices[7][1];
 units[7] = "28";
 comments[7] = "Id Pregunta: 504. ";


//  Id pregunta: 622 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  En teor&iacute;a de la decisi&oacute;n multicriterio discreta (DMD), el m&eacute;todo QUALIFLEX se basa en:";
 choices[8]= new Array();
 choices[8][0] = "evaluaciones cardinales y pesos cardinales";
 choices[8][1] = "evaluaciones ordinales y pesos cardinales";
 choices[8][2] = "evaluaciones ordinales y pesos ordinales";
 choices[8][3] = "evaluaciones cardinales y pesos ordinales";
 answers[8] = choices[8][1];
 units[8] = "34";
 comments[8] = "Id Pregunta: 622. ";


//  Id pregunta: 703 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Un documento XML con DTD es:";
 choices[9]= new Array();
 choices[9][0] = "v&aacute;lido";
 choices[9][1] = "inv&aacute;lido";
 choices[9][2] = "bien formado";
 choices[9][3] = "conformado";
 answers[9] = choices[9][0];
 units[9] = "69";
 comments[9] = "Id Pregunta: 703. Similar a examen TIC MAP A 2004";


//  Id pregunta: 785 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  &iquest;En qu&eacute; forma normal est&aacute; una tabla que no tiene grupos repetitivos,  en la que los atributos no principales dependan completamente de la clave principal, y dependan de otros atributos adem&aacute;s de la clave principal?:";
 choices[10]= new Array();
 choices[10][0] = "1FN";
 choices[10][1] = "2FN";
 choices[10][2] = "3FN";
 choices[10][3] = "Boyce-Cood";
 answers[10] = choices[10][1];
 units[10] = "58";
 comments[10] = "Id Pregunta: 785. SS-A 2004";


//  Id pregunta: 1024 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El lenguaje Visual Basic, y la arquitectura DNA de Microsoft permiten arquitecturas Cliente/Servidor:";
 choices[11]= new Array();
 choices[11][0] = "De 2 niveles";
 choices[11][1] = "De N niveles";
 choices[11][2] = "Solo con clientes Microsoft";
 choices[11][3] = "B y C son ciertas";
 answers[11] = choices[11][1];
 units[11] = "50";
 comments[11] = "Id Pregunta: 1024. ";


//  Id pregunta: 1083 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Private o privadas";
 choices[12][1] = "Static o est&aacute;ticas";
 choices[12][2] = "Final o final";
 choices[12][3] = "System o sistema";
 answers[12] = choices[12][1];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1083. NULL";


//  Id pregunta: 1302 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[13]= new Array();
 choices[13][0] = "ldir";
 choices[13][1] = "ls";
 choices[13][2] = "pwd";
 choices[13][3] = "ps";
 answers[13] = choices[13][1];
 units[13] = "52,53";
 comments[13] = "Id Pregunta: 1302. ";


//  Id pregunta: 1767 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Superset o superconjunto.";
 choices[14][1] = "Package o paquete.";
 choices[14][2] = "Superclass o Superclase.";
 choices[14][3] = "Colection o Colecci&oacute;n.";
 answers[14] = choices[14][1];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1767. NULL";


//  Id pregunta: 1788 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Al realizar la b&uacute;squeda en un espacio de estados, el m&eacute;todo de backtraking &hellip;";
 choices[15]= new Array();
 choices[15][0] = "Solo se puede usar para b&uacute;squedas ciegas";
 choices[15][1] = "Permite ahorrar recursos de computaci&oacute;n";
 choices[15][2] = "Permite recorrer los &aacute;rboles solo en anchura";
 choices[15][3] = "Permite recorrer los &aacute;rboles solo en profundidad";
 answers[15] = choices[15][1];
 units[15] = "63";
 comments[15] = "Id Pregunta: 1788. ";


//  Id pregunta: 1790 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Se&ntilde;ale de qu&eacute; etapa del desarrollo de la inteligencia artifical son propias las t&eacute;cnicas de b&uacute;squeda heur&iacute;stica";
 choices[16]= new Array();
 choices[16][0] = "Difusi&oacute;n actual";
 choices[16][1] = "Etapa de prototipos";
 choices[16][2] = "Sistemas expertos";
 choices[16][3] = "Etapa inicial";
 answers[16] = choices[16][0];
 units[16] = "63";
 comments[16] = "Id Pregunta: 1790. ";


//  Id pregunta: 1806 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[17]= new Array();
 choices[17][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[17][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[17][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[17][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[17] = choices[17][0];
 units[17] = "66";
 comments[17] = "Id Pregunta: 1806. &quot;blended learning&quot; = aprendizaje semipresencial";


//  Id pregunta: 1849 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[18]= new Array();
 choices[18][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[18][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[18][2] = "Facilidades de enrrutamiento";
 choices[18][3] = "Todas las anteriores";
 answers[18] = choices[18][3];
 units[18] = "71";
 comments[18] = "Id Pregunta: 1849. ";


//  Id pregunta: 1868 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;D&oacute;nde se recoge la posici&oacute;n de los contactos del chip enuna tarjetainteligente?";
 choices[19]= new Array();
 choices[19][0] = "ISO 7816-1";
 choices[19][1] = "ISO 7816-2";
 choices[19][2] = "ISO 7816-3";
 choices[19][3] = "ISO 7816-4";
 answers[19] = choices[19][1];
 units[19] = "74";
 comments[19] = "Id Pregunta: 1868. NULL";


//  Id pregunta: 2045 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Una Organizaci&oacute;n que este en el nivel 1 (Inicial) del Modelo de Capacidad de Madurez (CMM: Computer Capability Model) en el desarrollo del software, est&aacute;:";
 choices[20]= new Array();
 choices[20][0] = "En una fase preliminar de determinaci&oacute;n de la viabilidad del proyecto";
 choices[20][1] = "En una situaci&oacute;n donde el proyecto esta conforme a sus especificaciones originales y no ha sufrido todav&iacute;a modificaciones";
 choices[20][2] = "En una situaci&oacute;n ideal, con altos estandares de gesti&oacute;n y calidad implementados";
 choices[20][3] = "En una situaci&oacute;n en la que no se hace ning&uacute;n esfuerzo en la garant&iacute;a de calidad y gesti&oacute;n de proyectos";
 answers[20] = choices[20][3];
 units[20] = "27";
 comments[20] = "Id Pregunta: 2045. Pregunta TIC-B 2003";


//  Id pregunta: 2241 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  CODE-AND-FIX:";
 choices[21]= new Array();
 choices[21][0] = "Es un modelo en cascada";
 choices[21][1] = "Es una t&eacute;cnica que se usa mucho en la Administraci&oacute;n";
 choices[21][2] = "Es equivalente a METRICA";
 choices[21][3] = "No resulta muy pr&aacute;ctico";
 answers[21] = choices[21][3];
 units[21] = "76";
 comments[21] = "Id Pregunta: 2241. ";


//  Id pregunta: 2370 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Es cierto decir que la &quot;ingenier&iacute;a inversa&quot;:";
 choices[22]= new Array();
 choices[22][0] = "Crea un sistema distinto al original con el mismo nivel de abstracci&oacute;n.";
 choices[22][1] = "No se usa demasiado.";
 choices[22][2] = "Crea una representaci&oacute;n del sistema distinta a la original o con un grado de abstracci&oacute;n normalmente superior.";
 choices[22][3] = "El grado de abstracci&oacute;n que se obtiene es menor, pero eso hace que el proceso sea m&aacute;s din&aacute;mico.";
 answers[22] = choices[22][2];
 units[22] = "91";
 comments[22] = "Id Pregunta: 2370. ";


//  Id pregunta: 2842 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  ECW ";
 choices[23]= new Array();
 choices[23][0] = "es el acr&oacute;nimo de Enhanced Quality Wavelet ";
 choices[23][1] = "es un m&eacute;todo de compresi&oacute;n sin p&eacute;rdidas";
 choices[23][2] = "es un m&eacute;todo de compresi&oacute;n con p&eacute;rdidas";
 choices[23][3] = "se emplea preferentemente para la compresi&oacute;n de voz";
 answers[23] = choices[23][2];
 units[23] = "93";
 comments[23] = "Id Pregunta: 2842. NULL";


//  Id pregunta: 3528 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En la provisi&oacute;n de conexi&oacute;n del nivel de transporte al nivel de sesi&oacute;n del modelo OSI:";
 choices[24]= new Array();
 choices[24][0] = "Es posible el soporte simult&aacute;neo de varias conexiones de sesi&oacute;n por una sola conexi&oacute;n de transporte";
 choices[24][1] = "Una conexi&oacute;n de sesi&oacute;n no puede ser soportada por varias conexiones de transporte secuencialmente";
 choices[24][2] = "No es posible el soporte secuencial de varias conexiones de sesi&oacute;n por una de transporte";
 choices[24][3] = "Una sola conexi&oacute;n de sesi&oacute;n puede ser soportada por varias conexiones de transporte secuencialmente";
 answers[24] = choices[24][3];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3528. NULL";


//  Id pregunta: 3583 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indique la opci&oacute;n correcta respecto a la se&ntilde;alizaci&oacute;n en RDSI:";
 choices[25]= new Array();
 choices[25][0] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS7";
 choices[25][1] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal asociado y se le conoce como CCS7";
 choices[25][2] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS9";
 choices[25][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[25] = choices[25][0];
 units[25] = "103";
 comments[25] = "Id Pregunta: 3583. ";


//  Id pregunta: 3950 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  En las redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[26]= new Array();
 choices[26][0] = "Un ordenador se conecta con el siguiente y el &uacute;ltimo con el primero, formando un circuito cerrado";
 choices[26][1] = "Existe un nodo ra&iacute;z del que cuelgan uno o varios nodos";
 choices[26][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[26][3] = "Cada uno de los nodos est&aacute; conectado con todos los dem&aacute;s";
 answers[26] = choices[26][2];
 units[26] = "101";
 comments[26] = "Id Pregunta: 3950. ";


//  Id pregunta: 4374 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es propia del modelado de sistemas?";
 choices[27]= new Array();
 choices[27][0] = "Descomposici&oacute;n.";
 choices[27][1] = "Partici&oacute;n en clases de equivalencia.";
 choices[27][2] = "Aproximaciones sucesivas.";
 choices[27][3] = "An&aacute;lisis del dominio.";
 answers[27] = choices[27][1];
 units[27] = "80";
 comments[27] = "Id Pregunta: 4374. ";


//  Id pregunta: 4418 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  las diferencias principales entre el cable no apantallado UTP tipo 3 y el UTP tipo 5 es que";
 choices[28]= new Array();
 choices[28][0] = "UTP-3 incluye tres pares en un mismo conducto aislante, y UTP-5, cinco pares.";
 choices[28][1] = "UTP-5 es m&aacute;s trenzado por unidad de longitud que UTP-3.";
 choices[28][2] = "UTP-5 utiliza conectores RJ45, y UTP-3 utiliza RJ43.";
 choices[28][3] = "UTP-3 tiene m&aacute;s capacidad (ancho de banda), y consigue mayores velocidades que UTP-5.";
 answers[28] = choices[28][1];
 units[28] = "99";
 comments[28] = "Id Pregunta: 4418. ";


//  Id pregunta: 4536 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Un enlace del tipo STM-1:";
 choices[29]= new Array();
 choices[29][0] = "Es un enlace PDH de 155,52 Mbps";
 choices[29][1] = "Es un enlace PDH de 622,08 Mbps.";
 choices[29][2] = "Es un enlace SDH de 622,08 Mbps.";
 choices[29][3] = "Es un enlace SDH de 155,52 Mbps.";
 answers[29] = choices[29][3];
 units[29] = "";
 comments[29] = "Id Pregunta: 4536. ";


//  Id pregunta: 4663 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  Modulaci&oacute;n empleada en la tecnolog&iacute;a HSDPA en R5 para el enlace descendente";
 choices[30]= new Array();
 choices[30][0] = "4QAM y QPSK";
 choices[30][1] = "8QAM y QPSK";
 choices[30][2] = "16 QAM y QPSK";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][2];
 units[30] = "108";
 comments[30] = "Id Pregunta: 4663. ";


//  Id pregunta: 4862 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  En relaci&oacute;n a las m&eacute;tricas y evaluaci&oacute;n de la Calidad del software, &iquest;cu&aacute;l de las siguientes afirmaciones NO escierta?";
 choices[31]= new Array();
 choices[31][0] = "La t&eacute;cnica de Halstead es una m&eacute;trica de la fiabilidad del software";
 choices[31][1] = "Las m&eacute;tricas de complejidad eval&uacute;an la facilidad de mantenimiento del software";
 choices[31][2] = "El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de productividad del software";
 choices[31][3] = "COCOMO (Constructive Cost Model) es un modelo de estimaci&oacute;n algor&iacute;tmico";
 answers[31] = choices[31][0];
 units[31] = "88";
 comments[31] = "Id Pregunta: 4862. NULL";


//  Id pregunta: 4993 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[32]= new Array();
 choices[32][0] = "Polimorfismo";
 choices[32][1] = "Herencia";
 choices[32][2] = "Reusabilidad";
 choices[32][3] = "Encapsulaci&oacute;n";
 answers[32] = choices[32][3];
 units[32] = "82";
 comments[32] = "Id Pregunta: 4993. Examen TIC A 2007";


//  Id pregunta: 5038 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutadormultinivel Gigabit Ethernet?:";
 choices[33]= new Array();
 choices[33][0] = "Bus compartido.";
 choices[33][1] = "Memoria compartida.";
 choices[33][2] = "I/O compartida.";
 choices[33][3] = "Crossbar";
 answers[33] = choices[33][0];
 units[33] = "102";
 comments[33] = "Id Pregunta: 5038. Examen TIC A 2007";


//  Id pregunta: 5240 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Para el desarrollo de una planificaci&oacute;n estrat&eacute;gica se necesita conocer:";
 choices[34]= new Array();
 choices[34][0] = "La misi&oacute;n de la organizaci&oacute;n";
 choices[34][1] = "Puntos d&eacute;biles y fuertes de la organizaci&oacute;n para sacar partido de ello";
 choices[34][2] = "Los clientes, competidores y accionistas";
 choices[34][3] = "Todas las anteriores.";
 answers[34] = choices[34][3];
 units[34] = "77";
 comments[34] = "Id Pregunta: 5240. ";


//  Id pregunta: 5668 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Cual de las siguientes empresas no est&aacute; entre las que desarrollaron originalmente el protocolo WS-Security?";
 choices[35]= new Array();
 choices[35][0] = "IBM";
 choices[35][1] = "Microsoft";
 choices[35][2] = "VeriSign";
 choices[35][3] = "SUN";
 answers[35] = choices[35][3];
 units[35] = "113";
 comments[35] = "Id Pregunta: 5668. ";


//  Id pregunta: 5758 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[36]= new Array();
 choices[36][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[36][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[36][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[36][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[36] = choices[36][3];
 units[36] = "61";
 comments[36] = "Id Pregunta: 5758. ";


//  Id pregunta: 5794 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  Las Administraciones P&uacute;blicas pueden utilizar varios medios para su identificaci&oacute;n electr&oacute;nica. Indique cual NO es uno de ellos.";
 choices[37]= new Array();
 choices[37][0] = "Sistemas de firma electr&oacute;nica, como el sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica.";
 choices[37][1] = "Firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas.";
 choices[37][2] = "Intercambio electr&oacute;nico de datos en entornos cerrados de comunicaci&oacute;n, conforme a lo espec&iacute;ficamente acordado en las partes.";
 choices[37][3] = "La identidad electr&oacute;nica reconocida del &oacute;rgano administrativo.";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 5794. MAP 2008 A2";


//  Id pregunta: 5824 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia";
 choices[38]= new Array();
 choices[38][0] = "Colaboradores y recursos";
 choices[38][1] = "Resultados clave";
 choices[38][2] = "Resultados en la sociedad";
 choices[38][3] = "Viabilidad econ&oacute;mica";
 answers[38] = choices[38][3];
 units[38] = "92";
 comments[38] = "Id Pregunta: 5824. MAP 2008 A1";


//  Id pregunta: 5940 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes son las siglas de una infraestructura de virtualizaci&oacute;n del kernel de Linux?";
 choices[39]= new Array();
 choices[39][0] = "VLM";
 choices[39][1] = "LVM";
 choices[39][2] = "VKM";
 choices[39][3] = "KVM";
 answers[39] = choices[39][3];
 units[39] = "119";
 comments[39] = "Id Pregunta: 5940. ";


//  Id pregunta: 5969 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[40]= new Array();
 choices[40][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[40][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[40][2] = "Todos los datos relativos a una persona";
 choices[40][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[40] = choices[40][3];
 units[40] = "29";
 comments[40] = "Id Pregunta: 5969. Castilla La Mancha 2009";


//  Id pregunta: 5979 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  El Organismo de Normalizaci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n) desarrolla normas que deben adoptarse &iacute;ntegramente por los OrganismosNacionales de Normalizaci&oacute;n pertenecientes al CEN como normas nacionales.";
 choices[41][1] = "ISO (International Organization for Standardization) tiene la competencia exclusiva de la normalizaci&oacute;n internacional en elcampo de las Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[41][2] = "ISO desarrolla normas que, en la etapa previa a su publicaci&oacute;n como est&aacute;ndar internacional, reciben el nombre deISO/PIS (Preview Draft International Standard).";
 choices[41][3] = "CEN desarrolla en el campo de las Tecnolog&iacute;as de la Informaci&oacute;n Acuerdos de Trabajo (CWA) que tienen la categor&iacute;a deNormas Europeas (EN).";
 answers[41] = choices[41][0];
 units[41] = "42";
 comments[41] = "Id Pregunta: 5979. TIC A 2009";


//  Id pregunta: 5982 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  SIP (Session Initiation Protocol) es un protocolo que sirve para:";
 choices[42]= new Array();
 choices[42][0] = "Establecer videoconferencias sobre redes con calidad de servicio (ancho de banda garantizado).";
 choices[42][1] = "Realizar el transporte de flujos multimedia.";
 choices[42][2] = "Iniciar una sesi&oacute;n de correo web.";
 choices[42][3] = "Control y se&ntilde;alizaci&oacute;n, permite establecer y gestionar llamadas/conexiones de flujos multimedia.";
 answers[42] = choices[42][3];
 units[42] = "117";
 comments[42] = "Id Pregunta: 5982. TIC A 2009";


//  Id pregunta: 6055 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Seg&uacute;n el RD 951/2005 de 29 de julio, el nuevo marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[43]= new Array();
 choices[43][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[43][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[43][2] = "Quejas y reclamaciones.";
 choices[43][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[43] = choices[43][1];
 units[43] = "87";
 comments[43] = "Id Pregunta: 6055. TIC A 2009";


//  Id pregunta: 6059 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Los servicios web son:";
 choices[44]= new Array();
 choices[44][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[44][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[44][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[44][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[44] = choices[44][3];
 units[44] = "51,69";
 comments[44] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6141 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[45]= new Array();
 choices[45][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[45][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[45][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[45][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[45] = choices[45][0];
 units[45] = "100, 109";
 comments[45] = "Id Pregunta: 6141. ";


//  Id pregunta: 6278 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Qui&eacute;n propuso el modelo de ciclo de vida en espiral?";
 choices[46]= new Array();
 choices[46][0] = "Roger Pressman";
 choices[46][1] = "Richard Thomson";
 choices[46][2] = "Barry Boehm ";
 choices[46][3] = "Winston Royce ";
 answers[46] = choices[46][2];
 units[46] = "76";
 comments[46] = "Id Pregunta: 6278. ";


//  Id pregunta: 6290 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;C&oacute;mo pueden clasificarse los requisitos de un an&aacute;lisis de sistema de informaci&oacute;n seg&uacute;n Sommerville?";
 choices[47]= new Array();
 choices[47][0] = "Requisitos principales y requisitos secundarios";
 choices[47][1] = "Requisitos del cliente y requisitos de la empresa";
 choices[47][2] = "Requisitos a nivel de sistema y requisitos a nivel de software";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][2];
 units[47] = "78";
 comments[47] = "Id Pregunta: 6290. ";


//  Id pregunta: 6334 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Si el objetivo al plantear una consulta de data mining es obtener reglas de predicci&oacute;n orientadas a la toma de decisi&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Es indiferente que t&eacute;cnica se utilice.";
 choices[48][1] = "Se debe disponer de una buena herramienta de c&aacute;lculo de asociaciones.";
 choices[48][2] = "Se tiene que distinguir entre la variable que se va a  predecir y las variables que se uilizar&aacute;n para tal predicci&oacute;n.";
 choices[48][3] = "No hay en el estado actual de la tecnolog&iacute;a data mining ning&uacute;n enfoque adecuado para ese problema.";
 answers[48] = choices[48][2];
 units[48] = "68";
 comments[48] = "Id Pregunta: 6334. ";


//  Id pregunta: 6361 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Seguridad?";
 choices[49]= new Array();
 choices[49][0] = "RD 4/2010";
 choices[49][1] = "RD 40/2010";
 choices[49][2] = "RD 4/2009";
 choices[49][3] = "RD 3/2010";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 6361. NULL";


//  Id pregunta: 6409 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Qu&eacute; significa DRM?";
 choices[50]= new Array();
 choices[50][0] = "Digital Rights Management";
 choices[50][1] = "Direct Rights Management";
 choices[50][2] = "Direct Restriction Management";
 choices[50][3] = "Digital Restrictions Management";
 answers[50] = choices[50][0];
 units[50] = "37";
 comments[50] = "Id Pregunta: 6409. NULL";


//  Id pregunta: 6609 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  En el An&aacute;lisis Estructurado, las entidades externas";
 choices[51]= new Array();
 choices[51][0] = "Definen el Interfaz del Usuario";
 choices[51][1] = "Son parte del sistema";
 choices[51][2] = "Aparecen primero en el Diagrama de Contexto y se van heredando en las explosiones de los DFD's";
 choices[51][3] = "Generan y consumen informaci&oacute;n del sistema";
 answers[51] = choices[51][3];
 units[51] = "81";
 comments[51] = "Id Pregunta: 6609. NULL";


//  Id pregunta: 6613 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Entre los objetivos de M&eacute;trica est&aacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Definir Sistemas de Informaci&oacute;n que ayuden a conseguir los fines de la Organizaci&oacute;n y Mejorar la productividad de los departamentos de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[52][1] = "Facilitar la comunicaci&oacute;n y entendimiento entre los distintos participantes y facilitar la operaci&oacute;n, mantenimiento y uso de los productos software obtenidos.";
 choices[52][2] = "a y b";
 choices[52][3] = "Ninguno ya que M&eacute;trica no entra en los fines de la Organizaci&oacute;n, en la productividad, en la comunicaci&oacute;n ni en la operaci&oacute;n de los productos.";
 answers[52] = choices[52][2];
 units[52] = "86";
 comments[52] = "Id Pregunta: 6613. NULL";


//  Id pregunta: 7288 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service):";
 choices[53]= new Array();
 choices[53][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP y el puerto 1813";
 choices[53][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[53][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[53][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[53] = choices[53][0];
 units[53] = "111";
 comments[53] = "Id Pregunta: 7288. Examen TIC B 2009";


//  Id pregunta: 7307 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  El est&aacute;ndar VoiceXML ha sido desarrollado por:";
 choices[54]= new Array();
 choices[54][0] = "ETSI";
 choices[54][1] = "W3C";
 choices[54][2] = "ANSI";
 choices[54][3] = "IEEE";
 answers[54] = choices[54][1];
 units[54] = "94";
 comments[54] = "Id Pregunta: 7307. NULL";


//  Id pregunta: 7322 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  La Entidad P&uacute;blica Empresarial responsable de la gesti&oacute;n del Registro de nombres de dominio de Internet bajo el c&oacute;digo de pa&iacute;s .es se denomina:";
 choices[55]= new Array();
 choices[55][0] = "Oepm.es";
 choices[55][1] = "Red.es";
 choices[55][2] = "Funciona.es";
 choices[55][3] = "060.es";
 answers[55] = choices[55][1];
 units[55] = "112";
 comments[55] = "Id Pregunta: 7322. NULL";


//  Id pregunta: 8217 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  En relaci&oacute;n a la facturaci&oacute;n electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[56]= new Array();
 choices[56][0] = "La AEAT pone a disposici&oacute;n de los usuarios software distribuible para generar PDF417.";
 choices[56][1] = "El formato &quot;Facturae&quot; permite la inclusi&oacute;n de extensiones a nivel de l&iacute;nea, de factura o de lote de facturas.";
 choices[56][2] = "El certificado a usar para firmar la factura electr&oacute;nica y que &eacute;sta tenga validez ha de ser en todo caso el del obligado tributario.";
 choices[56][3] = "La Orden EHA/962/2007 dice que la obligaci&oacute;n de remisi&oacute;n y conservaci&oacute;n de facturas o documentos sustitutivos se cumplir&aacute; para la facturaci&oacute;n electr&oacute;nica mediante el uso de firma electr&oacute;nica reconocida.";
 answers[56] = choices[56][1];
 units[56] = "70";
 comments[56] = "Id Pregunta: 8217. Examen TIC A1 2010";


//  Id pregunta: 8228 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[57]= new Array();
 choices[57][0] = "Herencia.";
 choices[57][1] = "Extensibilidad.";
 choices[57][2] = "Sobrecarga.";
 choices[57][3] = "Polimorfismo.";
 answers[57] = choices[57][3];
 units[57] = "82";
 comments[57] = "Id Pregunta: 8228. Examen TIC A1 2010";


//  Id pregunta: 8290 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[58]= new Array();
 choices[58][0] = "No admite TCP/IP.";
 choices[58][1] = "No es un protocolo abierto.";
 choices[58][2] = "No requiere X.500.";
 choices[58][3] = "Ninguna de las anteriores es correcta.";
 answers[58] = choices[58][2];
 units[58] = "74";
 comments[58] = "Id Pregunta: 8290. Examen TIC A2 2010";


//  Id pregunta: 8327 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  ATM se caracteriza, entre otras, por que:";
 choices[59]= new Array();
 choices[59][0] = "Puede funcionar sobre cualquier capa f&iacute;sica";
 choices[59][1] = "Proporciona retransmisi&oacute;n de celdas en caso de detecci&oacute;n de error";
 choices[59][2] = "a y b son ciertas";
 choices[59][3] = "Todas las anteriores son falsas";
 answers[59] = choices[59][0];
 units[59] = "109";
 comments[59] = "Id Pregunta: 8327. Analista Ayto. Madrid 2010";


//  Id pregunta: 8351 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[60]= new Array();
 choices[60][0] = "Unity Application Block,";
 choices[60][1] = "Logging Application Block.";
 choices[60][2] = "Ajax Control Toolkit";
 choices[60][3] = "Cached XML Data Mapper";
 answers[60] = choices[60][0];
 units[60] = "59,115";
 comments[60] = "Id Pregunta: 8351. Examen TIC A2 2010";


//  Id pregunta: 8410 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes pol&iacute;ticas de planificaci&oacute;n es de tipo preemptive? ";
 choices[61]= new Array();
 choices[61][0] = "Shortest Job First (SJF)";
 choices[61][1] = "Shortest Remaining Time First (SRTF). ";
 choices[61][2] = "First-come, first-served (FCFS)";
 choices[61][3] = "Shortest Process Next (SPN). ";
 answers[61] = choices[61][1];
 units[61] = "52";
 comments[61] = "Id Pregunta: 8410. Examen TIC A2 2010";


//  Id pregunta: 8443 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera una mejora de IPv6 respecto a IPv4?";
 choices[62]= new Array();
 choices[62][0] = "Capacidad extendida del direccionamiento";
 choices[62][1] = "Seguridad de nivel de aplicaci&oacute;n obligatoria";
 choices[62][2] = "Movilidad";
 choices[62][3] = "Multicast";
 answers[62] = choices[62][1];
 units[62] = "100";
 comments[62] = "Id Pregunta: 8443. NULL";


//  Id pregunta: 8470 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  La regla 2 de Codd es la del:";
 choices[63]= new Array();
 choices[63][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[63][1] = "Acceso garantizado";
 choices[63][2] = "Actualizaci&oacute;n de vistas";
 choices[63][3] = "Integridad referencial";
 answers[63] = choices[63][1];
 units[63] = "57,58";
 comments[63] = "Id Pregunta: 8470. Analista Ayto. Madrid 2010";


//  Id pregunta: 8521 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n, una fase fundamental es la proyecci&oacute;n. Para ello se utilizan diversas t&eacute;cnicas, entre las que se encuentra la teor&iacute;a de colas. &iquest;Qu&eacute; valor ideal deber&iacute;a tomar el llamado factor de cola?";
 choices[64]= new Array();
 choices[64][0] = "Cualquier valor negativo.";
 choices[64][1] = "Fq=0.";
 choices[64][2] = "Fq=1.";
 choices[64][3] = "Infinito.";
 answers[64] = choices[64][2];
 units[64] = "104";
 comments[64] = "Id Pregunta: 8521. Examen TIC A2 2010 interna";


//  Id pregunta: 8654 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Seg&uacute;n M&eacute;trica v3 &iquest;cu&aacute;l de las siguientes NO es un tipo de relaci&oacute;n del diagrama de clases?";
 choices[65]= new Array();
 choices[65][0] = "Inclusi&oacute;n";
 choices[65][1] = "Agregaci&oacute;n";
 choices[65][2] = "Herencia";
 choices[65][3] = "Composici&oacute;n";
 answers[65] = choices[65][0];
 units[65] = "86";
 comments[65] = "Id Pregunta: 8654. Examen TIC A2 2010 interna";


//  Id pregunta: 8656 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En la recomendaci&oacute;n X.25, la capa f&iacute;sica en la interfaz est&aacute; definida por el protocolo:";
 choices[66]= new Array();
 choices[66][0] = "V.25";
 choices[66][1] = "V.21";
 choices[66][2] = "X.21";
 choices[66][3] = "X.24";
 answers[66] = choices[66][2];
 units[66] = "103";
 comments[66] = "Id Pregunta: 8656. Examen UPM A2 2011";


//  Id pregunta: 8784 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  MAGERIT es";
 choices[67]= new Array();
 choices[67][0] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de riesgos de sistemas de informaci&oacute;n.";
 choices[67][1] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de centros de recuperaci&oacute;n de desastres de sistemas de informaci&oacute;n.";
 choices[67][2] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de sistemas de archivo de sistemas de informaci&oacute;n.";
 choices[67][3] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de evaluaci&oacute;n de rendimiento de sistemas de informaci&oacute;n.";
 answers[67] = choices[67][0];
 units[67] = "33";
 comments[67] = "Id Pregunta: 8784. Examen UPM A2 2011";


//  Id pregunta: 8816 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[68]= new Array();
 choices[68][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[68][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[68][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[68][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[68] = choices[68][0];
 units[68] = "59";
 comments[68] = "Id Pregunta: 8816. Examen UPM A2 2011";


//  Id pregunta: 8968 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Qu&eacute; patr&oacute;n de dise&ntilde;o pertenece a la clasificaci&oacute;n de Comportamiento?";
 choices[69]= new Array();
 choices[69][0] = "Singleton.";
 choices[69][1] = "Template Method.";
 choices[69][2] = "Session.";
 choices[69][3] = "Succesive Update.";
 answers[69] = choices[69][1];
 units[69] = "82,84";
 comments[69] = "Id Pregunta: 8968. ";


//  Id pregunta: 8978 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Respecto al sistema operativo Android:";
 choices[70]= new Array();
 choices[70][0] = "Muchas de sus aplicaciones est&aacute;n escritas en Java";
 choices[70][1] = "No dispone de una m&aacute;quina virtual java";
 choices[70][2] = "Las respuestas a) y b) son ciertas";
 choices[70][3] = "Las respuestas a) y b) son falsas";
 answers[70] = choices[70][2];
 units[70] = "47";
 comments[70] = "Id Pregunta: 8978. ";


//  Id pregunta: 9055 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cual de los siguientes NO es un principio del dise&ntilde;o universal ?";
 choices[71]= new Array();
 choices[71][0] = "Escaso esfuerzo f&iacute;sico";
 choices[71][1] = "Simple e intuitivo.";
 choices[71][2] = "Informaci&oacute;n f&aacute;cil de percibir";
 choices[71][3] = "universalidad";
 answers[71] = choices[71][3];
 units[71] = "39";
 comments[71] = "Id Pregunta: 9055. NULL";


//  Id pregunta: 9092 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[72]= new Array();
 choices[72][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[72][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[72][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[72][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[72] = choices[72][2];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9092. ";


//  Id pregunta: 9126 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[73]= new Array();
 choices[73][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[73][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[73][2] = "El balanceo de carga solo puede implementarse por software";
 choices[73][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[73] = choices[73][2];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9126. Examen TIC-A1 2011";


//  Id pregunta: 9209 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;C&oacute;mo es el modelo de conectividad interno del almacenamiento?";
 choices[74]= new Array();
 choices[74][0] = "Bus SCSI y bus ATA/IDE de tipo serie";
 choices[74][1] = "SAS es la evoluci&oacute;n de ATA y SATA la evoluci&oacute;n de SCSI.";
 choices[74][2] = "SAS y SATA son evoluciones que modifican las capas bajas de forma que aseguran la compatibilidad a nivel de software.";
 choices[74][3] = "Ante la falta de escalabilidad, problemas de replicaci&oacute;n y redundancia del almacenamiento interno, para entornos empresariales se suele preferir el almacenamiento externo, en forma de una cabina de discos.";
 answers[74] = choices[74][3];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9209. ";


//  Id pregunta: 9266 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Si queremos programar la ejecuci&oacute;n del script &quot;/home/user/script.sh&quot; todos los mi&eacute;rcoles y domingos cada 4 horas, la entrada a a&ntilde;adir en el fichero cron ser&iacute;a:";
 choices[75]= new Array();
 choices[75][0] = "0 */4 * * 3,7 /home/user/script.sh";
 choices[75][1] = "* 4 * * 0,3 /home/user/script.sh ";
 choices[75][2] = "0 */4 wed,sun * * /home/user/script.sh ";
 choices[75][3] = "* */4 * * 3-7 /home/user/script.sh ";
 answers[75] = choices[75][0];
 units[75] = "53";
 comments[75] = "Id Pregunta: 9266. Examen TICA2-2011";


//  Id pregunta: 9299 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  El riesgo se puede:";
 choices[76]= new Array();
 choices[76][0] = "Eliminar, reducir, asumir o transferir. ";
 choices[76][1] = "Eliminar, reducir pero no asegurar.";
 choices[76][2] = "Reducir, asumir, transferir pero nunca se puede eliminar del todo.";
 choices[76][3] = "Eliminar, reducir, asumir, transferir o asegurar.";
 answers[76] = choices[76][3];
 units[76] = "32";
 comments[76] = "Id Pregunta: 9299. ";


//  Id pregunta: 9337 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[77]= new Array();
 choices[77][0] = "1000BASE-SX";
 choices[77][1] = "1000BASE-LX";
 choices[77][2] = "1000BASE-TX";
 choices[77][3] = "1000BASE-CX";
 answers[77] = choices[77][1];
 units[77] = "99";
 comments[77] = "Id Pregunta: 9337. TIC a2 AGE 2011";


//  Id pregunta: 9368 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[78]= new Array();
 choices[78][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[78][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[78][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[78][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[78] = choices[78][0];
 units[78] = "101";
 comments[78] = "Id Pregunta: 9368. ";


//  Id pregunta: 9715 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[79]= new Array();
 choices[79][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[79][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[79][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[79][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[79] = choices[79][2];
 units[79] = "102";
 comments[79] = "Id Pregunta: 9715. Examen TIC-A1 2013";


//  Id pregunta: 9791 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En el contexto de la seguridad, el shoulder surfing consiste en:";
 choices[80]= new Array();
 choices[80][0] = "Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.";
 choices[80][1] = "Uso de aplicaciones intermedias llamadas shoulders para la obtenci&oacute;n de los datos de navegaci&oacute;n.";
 choices[80][2] = "Espiar f&iacute;sicamente a los usuarios, para obtener generalmente claves de acceso al sistema.";
 choices[80][3] = "Es un sin&oacute;nimo del ataque man in the middle ";
 answers[80] = choices[80][2];
 units[80] = "111";
 comments[80] = "Id Pregunta: 9791. Examen TIC A2 2013";


//  Id pregunta: 9866 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En relaci&oacute;n con lenguajes de marcado, indique cu&aacute;l de las siguientes afirmaciones es INCORRECTA";
 choices[81]= new Array();
 choices[81][0] = "XSLT es un lenguaje de marcado para las transformaciones de documentos XML.";
 choices[81][1] = "El XML describe el contenido de la informaci&oacute;n y la estructura, mientras que HTML est&aacute; orientado a la presentaci&oacute;n de la informaci&oacute;n.";
 choices[81][2] = "XPath permite buscar y seleccionar parte de un fichero XML sin utilizar su estructura.";
 choices[81][3] = "CSS permite dar formato tanto a ficheros HTML como a ficheros XML.";
 answers[81] = choices[81][2];
 units[81] = "69";
 comments[81] = "Id Pregunta: 9866. TIC A1, Examen 2013";


//  Id pregunta: 9921 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[82]= new Array();
 choices[82][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[82][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[82][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[82][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[82] = choices[82][0];
 units[82] = "86,58";
 comments[82] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 10025 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se&ntilde;ale cu&aacute;l de las siguientes opciones se ajusta a la siguiente definici&oacute;n: plataforma basada en Java que permite crear rich internet applications (RIA) que se comportan de la misma forma en distintas plataformas:";
 choices[83]= new Array();
 choices[83][0] = "Flex";
 choices[83][1] = "JavaFX";
 choices[83][2] = "AJAX";
 choices[83][3] = "Silverlight";
 answers[83] = choices[83][1];
 units[83] = "116";
 comments[83] = "Id Pregunta: 10025. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10089 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l NO es un producto de la metodolog&iacute;a SCRUM?";
 choices[84]= new Array();
 choices[84][0] = "Product backlog";
 choices[84][1] = "Sprint";
 choices[84][2] = "Burn down chart";
 choices[84][3] = "Sprint backlog";
 answers[84] = choices[84][1];
 units[84] = "79";
 comments[84] = "Id Pregunta: 10089. NULL";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[85]= new Array();
 choices[85][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[85][1] = "la no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[85][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[85][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10151. ";


//  Id pregunta: 10196 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cual de la siguientes t&eacute;cnicas de modulaci&oacute;n no es usada por las tecnolog&iacute;as xDSL?";
 choices[86]= new Array();
 choices[86][0] = "2B1Q";
 choices[86][1] = "CAP";
 choices[86][2] = "DMT";
 choices[86][3] = "WDM";
 answers[86] = choices[86][3];
 units[86] = "107";
 comments[86] = "Id Pregunta: 10196. La tecnolog&iacute;a usada en algunas xDSL es DWMT, no WDM";


//  Id pregunta: 10205 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[87]= new Array();
 choices[87][0] = "Para el canal de subida utiliza la modulaci&oacute;n WCDMA y para el de bajada, OFDMA";
 choices[87][1] = "Corresponde a la release 8 del 3GPP (3rd Generation Partnership Project)";
 choices[87][2] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[87][3] = "El ancho de banda de los canales es variable entre 1,25MHz y 20MHz";
 answers[87] = choices[87][0];
 units[87] = "108";
 comments[87] = "Id Pregunta: 10205. Para el canal de subida usa SC-FDMA (Single Carrier FDMA)";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[88]= new Array();
 choices[88][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[88][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[88][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[88][3] = "ninguna de las anteriores";
 answers[88] = choices[88][0];
 units[88] = "60";
 comments[88] = "Id Pregunta: 10236. NULL";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En referencia al tratamiento de datos de car&aacute;cter personal, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[89]= new Array();
 choices[89][0] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que no obran en su poder datos personales del solicitante";
 choices[89][1] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que, de obrar en su poder datos personales del solicitante, &eacute;stos no son datos especialmente protegidos";
 choices[89][2] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso";
 choices[89][3] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso si los datos se refieren a menores, no siendo obligatorio responder en otros casos";
 answers[89] = choices[89][2];
 units[89] = "29";
 comments[89] = "Id Pregunta: 10257. Art&iacute;culo 25.2 del RD 1720/2007";


//  Id pregunta: 10308 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[90]= new Array();
 choices[90][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[90][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[90][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[90][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[90] = choices[90][1];
 units[90] = "58";
 comments[90] = "Id Pregunta: 10308. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10898 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qui&eacute;n elabor&oacute; la especificaci&oacute;n Transport Layer Security (TLS)?";
 choices[91]= new Array();
 choices[91][0] = "UIT (Uni&oacute;n Internacional de Telecomunicaciones).";
 choices[91][1] = "IETF (Internet Engineering Task Force).";
 choices[91][2] = "Netscape Communications.";
 choices[91][3] = "ETSI (European Telecommunications Standards Institute).";
 answers[91] = choices[91][1];
 units[91] = "111";
 comments[91] = "Id Pregunta: 10898. Examen GSI 2014";


//  Id pregunta: 10914 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En un escenario de movilidad IP &iquest;de qu&eacute; se encarga el Agente Base (Home Agent)?";
 choices[92]= new Array();
 choices[92][0] = "Es el nodo que cambia su punto de conexi&oacute;n a la red sin cambiar su direcci&oacute;n IP o perder las conexiones establecidas.";
 choices[92][1] = "Es el router situado en la red origen del nodo m&oacute;vil que intercepta el tr&aacute;fico destinado al nodo m&oacute;vil y se lo reenv&iacute;a mediante t&uacute;neles IP, realizando adem&aacute;s tareas de localizaci&oacute;n de los nodos m&oacute;viles.";
 choices[92][2] = "Es el router situado en la red visitada que proporciona servicios de encaminamiento a los nodos m&oacute;viles registrados.";
 choices[92][3] = "Es el router situado en la red visitada que facilita una nueva direcci&oacute;n IP al nodo m&oacute;vil.";
 answers[92] = choices[92][1];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10914. Examen GSI 2014";


//  Id pregunta: 11207 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[93]= new Array();
 choices[93][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[93][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[93][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[93][3] = "Ninguna de las anteriores";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11207. ";


//  Id pregunta: 11334 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Cuando la CNMC detecta operadores con poder significativo en los mercados de referencia, &iquest;cu&aacute;l de las siguientes no es una medida que pueda tomar?";
 choices[94]= new Array();
 choices[94][0] = "Imponer obligaciones de transparencia: informaci&oacute;n sobre contabilidad, especificaciones o precios";
 choices[94][1] = "Obligar a la separaci&oacute;n de cuentas";
 choices[94][2] = "Control de precios";
 choices[94][3] = "Promover intervencion judicial de la empresa";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11334. Dicha medida no aparece en la LGT";


//  Id pregunta: 11370 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos NO es una etapa del ciclo de vida del servicio?";
 choices[95]= new Array();
 choices[95][0] = "Optimizaci&oacute;n del servicio";
 choices[95][1] = "Transici&oacute;n del servicio";
 choices[95][2] = "Dise&ntilde;o del servicio";
 choices[95][3] = "Estrategia del servicio";
 answers[95] = choices[95][0];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11370. ";


//  Id pregunta: 11399 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, los procesos de Operaci&oacute;n del Servicio son Gesti&oacute;n de Incidencias, Gesti&oacute;n de Problemas, Gesti&oacute;n de Accesos, &hellip;";
 choices[96]= new Array();
 choices[96][0] = "&hellip; Gesti&oacute;n de Eventos y Gesti&oacute;n de Peticiones.";
 choices[96][1] = "&hellip; Gesti&oacute;n de Eventos y Centro de Servicio al usuario.";
 choices[96][2] = "&hellip; Gesti&oacute;n de las Instalaciones y Gesti&oacute;n de Eventos.";
 choices[96][3] = "&hellip; Gesti&oacute;n de Cambios y Gesti&oacute;n de Niveles del Servicio.";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11399. ";


//  Id pregunta: 11413 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, General de Telecomunicaciones, es facultad del gobierno para la administraci&oacute;n del espectro:";
 choices[97]= new Array();
 choices[97][0] = "Aprobaci&oacute;n del CNAF previa elaboraci&oacute;n del MINETUR.";
 choices[97][1] = "La determinaci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica de cuyo control se encarga MINETUR.";
 choices[97][2] = "Establecer el procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencia.";
 choices[97][3] = "El otorgamiento de las autorizaciones de uso.";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11413. ";


//  Id pregunta: 11621 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la respuesta incorrecta con respecto a los MOOC:";
 choices[98]= new Array();
 choices[98][0] = "Son similar a cualquier curso en l&iacute;nea.";
 choices[98][1] = "El n&uacute;mero de participantes es ilimitado.";
 choices[98][2] = "MOOC son las siglas de Masive Open Online Course.";
 choices[98][3] = "Se basan en la interacci&oacute;n social.";
 answers[98] = choices[98][0];
 units[98] = "66";
 comments[98] = "Id Pregunta: 11621. ";


//  Id pregunta: 11778 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El informe t&eacute;cnico de la Direcci&oacute;n de Tecnolog&iacute;a de la Informaci&oacute;n y de las Comunicaciones para los expedientes de contrataci&oacute;n TIC:";
 choices[99]= new Array();
 choices[99][0] = "Debe emitirse antes de 10 d&iacute;as&nbsp;";
 choices[99][1] = "Es preceptivo en todo caso";
 choices[99][2] = "Puede emitirse despu&eacute;s de 10 d&iacute;as laborables";
 choices[99][3] = "Es necesario junto con el informe de la CMAD";
 answers[99] = choices[99][2];
 units[99] = "41, 24";
 comments[99] = "Id Pregunta: 11778. ";


