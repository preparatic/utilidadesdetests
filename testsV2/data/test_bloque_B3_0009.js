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

//  Id pregunta: 1452 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un formato de descripci&oacute;n de p&aacute;ginas?:";
 choices[0]= new Array();
 choices[0][0] = "EPS";
 choices[0][1] = "RIP";
 choices[0][2] = "PDF";
 choices[0][3] = "PCL ";
 answers[0] = choices[0][1];
 units[0] = "93";
 comments[0] = "Id Pregunta: 1452. NULL";


//  Id pregunta: 1985 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes respuestas no es un procedimiento para el control de calidad del software seg&uacute;n el PGGC?:";
 choices[1]= new Array();
 choices[1][0] = "Revisiones de aceptaci&oacute;n";
 choices[1][1] = "Auditor&iacute;as";
 choices[1][2] = "Revisiones t&eacute;cnicas formales";
 choices[1][3] = "Evaluaci&oacute;n de prototipos";
 answers[1] = choices[1][0];
 units[1] = "88";
 comments[1] = "Id Pregunta: 1985. Procedimientos de Control de Calidad: Revisiones T&eacute;cnicas Formales, Pruebas, Procedimientos extraordinarios (auditor&iacute;a) y Procedimientos particulares (Evaluaci&oacute;n de Prototipos)";


//  Id pregunta: 2021 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que se entiende por un &quot;objeto&quot; en programaci&oacute;n orientada a objetos?";
 choices[2]= new Array();
 choices[2][0] = "Un objeto es parte de la herencia de una clase";
 choices[2][1] = "Un objeto es una instancia de una clase";
 choices[2][2] = "Un objeto es una instancia de una metaclase";
 choices[2][3] = "Una clase es una instancia de un objeto generada por &quot;upcasting&quot;";
 answers[2] = choices[2][1];
 units[2] = "82";
 comments[2] = "Id Pregunta: 2021. Examen TIC MAP B 2004";


//  Id pregunta: 2024 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En Programaci&oacute;n orientada a objetos, las relaciones de agregaci&oacute;n entre objetos son:";
 choices[3]= new Array();
 choices[3][0] = "Maneras de construir clases u objetos en t&eacute;rminos de otras clases u objetos.";
 choices[3][1] = "La forma de definir una clase u objeto como extensi&oacute;n de otra clase u objeto.";
 choices[3][2] = "Mecanismos para sobrecargar los m&eacute;todos de accesos a los objetos.";
 choices[3][3] = "S&oacute;lo posibles entre objetos monol&iacute;ticos.";
 answers[3] = choices[3][0];
 units[3] = "82,84";
 comments[3] = "Id Pregunta: 2024. Examen TIC MAP B 2004";


//  Id pregunta: 2056 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En METRICA V3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?";
 choices[4]= new Array();
 choices[4][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[4][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[4][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[4][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[4] = choices[4][1];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2056. Pregunta Junta Andalucia - A";


//  Id pregunta: 2063 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n (IAS)?";
 choices[5]= new Array();
 choices[5][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[5][1] = "Elaboraci&oacute;n de los manuales de usuario";
 choices[5][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n";
 choices[5][3] = "Paso a Producci&oacute;n";
 answers[5] = choices[5][1];
 units[5] = "86";
 comments[5] = "Id Pregunta: 2063. Pregunta Junta Andalucia - A";


//  Id pregunta: 2075 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La planificaci&oacute;n estrat&eacute;gica responde a las siguientes cuestiones salvo a una, &iquest;cu&aacute;l?:";
 choices[6]= new Array();
 choices[6][0] = "Cu&aacute;l es la posici&oacute;n futura deseable";
 choices[6][1] = "Cu&aacute;l es la situaci&oacute;n actual";
 choices[6][2] = "Cu&aacute;les son los escalones necesarios para pasar de donde estamos a donde deseamos estar";
 choices[6][3] = "Cu&aacute;l es el costo de dichos escalones";
 answers[6] = choices[6][3];
 units[6] = "77";
 comments[6] = "Id Pregunta: 2075. ";


//  Id pregunta: 2076 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Se&ntilde;ale entre los siguientes tipos de mantenimiento de sistemas de informaci&oacute;n aquel que queda fuera del &aacute;mbito de METRICA V3:";
 choices[7]= new Array();
 choices[7][0] = "Cambios precisos para corregir errores del software";
 choices[7][1] = "Incorporaciones necesarias para cubrir la expansi&oacute;n de las necesidades de los usuarios";
 choices[7][2] = "Modificaciones y eliminaciones necesarias para atender los cambios en las necesidades de los usuarios";
 choices[7][3] = "Acciones necesarias para mejorar la calidad interna de los sistemas";
 answers[7] = choices[7][3];
 units[7] = "86";
 comments[7] = "Id Pregunta: 2076. Pregunta Junta Andalucia - A";


//  Id pregunta: 2080 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  La asignaci&oacute;n de la petici&oacute;n, en METRICA V3, consiste en: ";
 choices[8]= new Array();
 choices[8][0] = "La tarea del Mantenimiento de sistemas de informaci&oacute;n en METRICA V3 en la que se determina el tipo de mantenimiento requerido por la petici&oacute;n asignada.";
 choices[8][1] = "La determinaci&oacute;n de los recursos necesarios para atender una petici&oacute;n de mantenimiento una vez aceptada la petici&oacute;n";
 choices[8][2] = "La determinaci&oacute;n de quien es la responsabilidad de atender una petici&oacute;n, previa a la aceptaci&oacute;n de la petici&oacute;n";
 choices[8][3] = "No es una tarea incluida en esta metodolog&iacute;a";
 answers[8] = choices[8][0];
 units[8] = "86";
 comments[8] = "Id Pregunta: 2080. Pregunta Junta Andalucia - A";


//  Id pregunta: 2090 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; es un 'antidiccionario'?:";
 choices[9]= new Array();
 choices[9][0] = "Un conjunto de palabras de caracterizaci&oacute;n o palabras clave";
 choices[9][1] = "Un conjunto de palabras y signos algebraico-matem&aacute;tico que puede encontrarse en los textos";
 choices[9][2] = "Un conjunto de palabras vac&iacute;as de significado (art&iacute;culos, preposiciones...)";
 choices[9][3] = "Un diccionario en orden alfab&eacute;tico inverso";
 answers[9] = choices[9][2];
 units[9] = "96";
 comments[9] = "Id Pregunta: 2090. NULL";


//  Id pregunta: 2091 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  DARTS es el acr&oacute;nimo de:";
 choices[10]= new Array();
 choices[10][0] = "Data Redesign for Transactional Systems.";
 choices[10][1] = "Design Aproach for Real Time Systems.";
 choices[10][2] = "Design Aproach for Real Transactional Systems.";
 choices[10][3] = "No es acr&oacute;nimo de nada.";
 answers[10] = choices[10][1];
 units[10] = "83";
 comments[10] = "Id Pregunta: 2091. ";


//  Id pregunta: 2131 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[11]= new Array();
 choices[11][0] = "Para aplicar M&Eacute;TRICA Versi&oacute;n 3 es preciso realizar una adaptaci&oacute;n previa en funci&oacute;n del proyecto, la organizaci&oacute;n, etc";
 choices[11][1] = "Las interfaces de M&Eacute;TRICA 3 son: Gesti&oacute;n de Proyectos, Gesti&oacute;n de Configuraci&oacute;n, Aseguramiento de la Calidad y Seguridad";
 choices[11][2] = "En las tareas de M&Eacute;TRICA Versi&oacute;n 3 se describe su contenido, se indican los productos a obtener, las t&eacute;cnicas a utilizar y los participantes responsables de su realizaci&oacute;n";
 choices[11][3] = "La participaci&oacute;n de los usuarios en M&Eacute;TRICA Versi&oacute;n 3 se produce s&oacute;lo en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[11] = choices[11][3];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2131. NULL";


//  Id pregunta: 2134 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones, respecto de las especificaciones de los requerimientos, es falsa?:";
 choices[12]= new Array();
 choices[12][0] = "La especificaci&oacute;n debe separar la funcionalidad de la implementaci&oacute;n";
 choices[12][1] = "La especificaci&oacute;n s&oacute;lo debe contemplar el software, aisl&aacute;ndolo del resto del sistema";
 choices[12][2] = "La especificaci&oacute;n debe ser ampliable y flexible";
 choices[12][3] = "La especificaci&oacute;n debe ser f&aacute;cilmente operativa";
 answers[12] = choices[12][1];
 units[12] = "78";
 comments[12] = "Id Pregunta: 2134. ";


//  Id pregunta: 2146 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes es un objetivo de la Historia de la Vida de las Entidades (HVE) dentro del an&aacute;lisis estructurado?:";
 choices[13]= new Array();
 choices[13][0] = "Obtener un registro de la secuencia de los cambios de las entidades con el tiempo";
 choices[13][1] = "Establecer los estados posibles de las entidades para que tengan lugar transacciones externas, as&iacute; como los cambios de estado de las entidades originadas por dichas transacciones";
 choices[13][2] = "Los dos anteriores son objetivos de la HVE";
 choices[13][3] = "Todas las anteriores respuestas son falsas";
 answers[13] = choices[13][2];
 units[13] = "81";
 comments[13] = "Id Pregunta: 2146. ";


//  Id pregunta: 2172 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La complejidad ciclom&aacute;tica tiene que ver con la t&eacute;cnica de:";
 choices[14]= new Array();
 choices[14][0] = "McCall";
 choices[14][1] = "McCabe";
 choices[14][2] = "Hasltead";
 choices[14][3] = "COCOMO";
 answers[14] = choices[14][1];
 units[14] = "88";
 comments[14] = "Id Pregunta: 2172. ";


//  Id pregunta: 2296 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El PGGC aplicable al desarrollo de equipos l&oacute;gicos del CSI existen los siguientes procedimientos de control de calidad:";
 choices[15]= new Array();
 choices[15][0] = "Revisiones, pruebas y procedimientos extraordinarios";
 choices[15][1] = "Revisiones, pruebas e inspecciones detalladas";
 choices[15][2] = "Revisiones, pruebas, procedimientos extraordinarios y procedimientos particulares";
 choices[15][3] = "Todas las respuestas anteriores son falsas";
 answers[15] = choices[15][2];
 units[15] = "88";
 comments[15] = "Id Pregunta: 2296. ";


//  Id pregunta: 2323 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En la gesti&oacute;n de riesgos del modelo en espiral del ciclo de vida de una aplicaci&oacute;n, entre los riesgos m&aacute;s importantes que se contemplan tenemos:";
 choices[16]= new Array();
 choices[16][0] = "Escasez de personal";
 choices[16][1] = "Presupuestos y calendarios no realistas";
 choices[16][2] = "Las 2 anteriores";
 choices[16][3] = "Ninguna de las anteriores, pues este tema de riesgos es indiferente para el modelo en espiral";
 answers[16] = choices[16][2];
 units[16] = "76";
 comments[16] = "Id Pregunta: 2323. ";


//  Id pregunta: 2338 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[17]= new Array();
 choices[17][0] = "Uno-a-muchos";
 choices[17][1] = "Binaria";
 choices[17][2] = "Muchos-a-muchos";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][0];
 units[17] = "57,58,80";
 comments[17] = "Id Pregunta: 2338. ";


//  Id pregunta: 2367 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Entre los problemas que presenta el modelo en cascada con respecto al prototipado tenemos:";
 choices[18]= new Array();
 choices[18][0] = "Una versi&oacute;n del programa funcionando no podr&iacute;a estar disponible hasta las etapas finales del desarrollo del proyecto";
 choices[18][1] = "Los proyectos reales escasamente siguen el camino secuencial que propone el modelo";
 choices[18][2] = "Es dif&iacute;cil para el usuario establecer correcta y totalmente todos los requerimientos al principio del proyecto";
 choices[18][3] = "Todas las respuestas anteriores son ciertas";
 answers[18] = choices[18][3];
 units[18] = "85";
 comments[18] = "Id Pregunta: 2367. ";


//  Id pregunta: 2371 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Es cierto decir que la &quot;reingenier&iacute;a&quot;:";
 choices[19]= new Array();
 choices[19][0] = "Suele usarse para ampliar la vida &uacute;til de un sistema.";
 choices[19][1] = "Es una ingenier&iacute;a inversa hecha con herramientas de asistencia computerizada.";
 choices[19][2] = "No tiene sentido si se hace usando tecnolog&iacute;a de objetos, que por definici&oacute;n son reutilizables.";
 choices[19][3] = "S&oacute;lo se usa cuando se encuentran fallos de funcionalidad.";
 answers[19] = choices[19][0];
 units[19] = "91";
 comments[19] = "Id Pregunta: 2371. ";


//  Id pregunta: 2386 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de revisi&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Correcci&oacute;n";
 choices[20][1] = "Mantenibilidad";
 choices[20][2] = "Verificabilidad";
 choices[20][3] = "Flexibilidad";
 answers[20] = choices[20][0];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2386. ";


//  Id pregunta: 2399 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La metodolog&iacute;a M&eacute;trica Versi&oacute;n 3:";
 choices[21]= new Array();
 choices[21][0] = "No incorpora una interface para la gesti&oacute;n de proyectos";
 choices[21][1] = "No incorpora una interface para la gesti&oacute;n de la configuraci&oacute;n";
 choices[21][2] = "Establece que el estudio de viabilidad del sistema queda fuera de la metodolog&iacute;a, al ser previo al desarrollo del sistema de informaci&oacute;n";
 choices[21][3] = "Ha sido concebida para abarcar el desarrollo completo de sistemas de informaci&oacute;n sea cual sea su complejidad y magnitud";
 answers[21] = choices[21][3];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2399. NULL";


//  Id pregunta: 2458 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los elementos que determinan o componen la calidad del software son los siguientes:";
 choices[22]= new Array();
 choices[22][0] = "Factores externos o de usuarios relativos al comportamiento actual del software, a la facilidad de cambio y a su facilidad de conversi&oacute;n";
 choices[22][1] = "Criterios internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[22][2] = "M&eacute;tricas de cuantificaci&oacute;n de criterios y factores";
 choices[22][3] = "Todos los anteriores";
 answers[22] = choices[22][3];
 units[22] = "87.88";
 comments[22] = "Id Pregunta: 2458. NULL";


//  Id pregunta: 2469 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  No es un tipo de acoplamiento:";
 choices[23]= new Array();
 choices[23][0] = "Externo.";
 choices[23][1] = "Por contenido.";
 choices[23][2] = "Temporal.";
 choices[23][3] = "Por estampado.";
 answers[23] = choices[23][2];
 units[23] = "84";
 comments[23] = "Id Pregunta: 2469. ";


//  Id pregunta: 2494 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;En un diagrama de casos de uso se tienen los siguientes componentes&quot;:";
 choices[24]= new Array();
 choices[24][0] = "Caso de uso.";
 choices[24][1] = "Carpetas.";
 choices[24][2] = "Actor.";
 choices[24][3] = "Relaci&oacute;n.";
 answers[24] = choices[24][1];
 units[24] = "82,84";
 comments[24] = "Id Pregunta: 2494. ";


//  Id pregunta: 2510 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Una caracter&iacute;stica de los sistemas en tiempo real es:";
 choices[25]= new Array();
 choices[25][0] = "Gesti&oacute;n de memoria virtual eficiente.";
 choices[25][1] = "Inexistencia de mecanismos de exclusi&oacute;n mutua que retrasen el flujo en &quot;real time&quot;.";
 choices[25][2] = "Sem&aacute;foros para dirigir los procesos.";
 choices[25][3] = "Gesti&oacute;n de los accesos a disco exclusivamente mediante interrupciones.";
 answers[25] = choices[25][2];
 units[25] = "83";
 comments[25] = "Id Pregunta: 2510. ";


//  Id pregunta: 2511 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una entidad externa en un DFD:";
 choices[26]= new Array();
 choices[26][0] = "No debe figurar en el DFD";
 choices[26][1] = "No se tiene en consideraci&oacute;n";
 choices[26][2] = "Interactua con el sistema";
 choices[26][3] = "Se relaciona con otras entidades externas";
 answers[26] = choices[26][2];
 units[26] = "81";
 comments[26] = "Id Pregunta: 2511. ";


//  Id pregunta: 2545 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los m&eacute;todos vectoriales y probabil&iacute;sticos de recuperaci&oacute;n de informaci&oacute;n se basan:";
 choices[27]= new Array();
 choices[27][0] = "&Aacute;lgebra de Boole y frecuencia de t&eacute;rminos respectivamente";
 choices[27][1] = "Sistemas de retroalimentaci&oacute;n y lenguaje natural respectivamente";
 choices[27][2] = "Indexaci&oacute;n y recuperaci&oacute;n vectorial";
 choices[27][3] = "Frecuencia de aparici&oacute;n de t&eacute;rminos y teorema de Bayes";
 answers[27] = choices[27][3];
 units[27] = "96";
 comments[27] = "Id Pregunta: 2545. NULL";


//  Id pregunta: 2571 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de evaluaci&oacute;n de la calidad del software del tipo: ";
 choices[28]= new Array();
 choices[28][0] = "Metrica de Fiabilidad";
 choices[28][1] = "Metrica de los Factores de calidad";
 choices[28][2] = "Metrica de Complejidad";
 choices[28][3] = "Ninguna de ellas";
 answers[28] = choices[28][3];
 units[28] = "89";
 comments[28] = "Id Pregunta: 2571. NULL";


//  Id pregunta: 2575 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;Que definici&oacute;n de las siguientes se ajusta m&aacute;s al concepto de Downsizing?";
 choices[29]= new Array();
 choices[29][0] = "Descarga y migraci&oacute;n selectiva de aplicaciones.";
 choices[29][1] = "Migraci&oacute;n de aquellas aplicaciones personales o departamentales cuya informaci&oacute;n es relevante para toda la organizaci&oacute;n y que deben ser dispuestas para su acceso global.";
 choices[29][2] = "Todas son ciertas.";
 choices[29][3] = "Migraci&oacute;n de aplicaciones desde el gran ordenador principal a m&aacute;quinas mucho menores.";
 answers[29] = choices[29][3];
 units[29] = "90";
 comments[29] = "Id Pregunta: 2575. ";


//  Id pregunta: 2612 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a de desarrollo de sistemas de informaci&oacute;n?";
 choices[30]= new Array();
 choices[30][0] = "Merise";
 choices[30][1] = "Method I";
 choices[30][2] = "Eurom&eacute;todo";
 choices[30][3] = "Metrica v3";
 answers[30] = choices[30][2];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2612. ";


//  Id pregunta: 2631 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; formula expresa la relaci&oacute;n entre puntos de funci&oacute;n y COCOMO?";
 choices[31]= new Array();
 choices[31][0] = "FP= DSI * 320/nivel de lenguaje";
 choices[31][1] = "DSI= FP *  320 /nivel del lenguaje ";
 choices[31][2] = "FP= nivel de lenguaje / DSI * 320";
 choices[31][3] = "DSI= nivel de lenguaje / FP * 320";
 answers[31] = choices[31][1];
 units[31] = "89";
 comments[31] = "Id Pregunta: 2631. NULL";


//  Id pregunta: 2638 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  El UML ( Unified modeling Language) es un lenguaje que permite modelar construir y documentar los elementos que forman un sistema SW orientado a objetos. Indicar cu&aacute;l entre los siguientes no corresponde a un modelo usado en UML ";
 choices[32]= new Array();
 choices[32][0] = "Diagrama de estructura din&aacute;mica";
 choices[32][1] = "Diagrama de Casos de Uso";
 choices[32][2] = "Diagrama de Secuencia";
 choices[32][3] = "Diagrama de colaboraci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2638. NULL";


//  Id pregunta: 2640 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  En dise&ntilde;o estructurado &iquest;c&uacute;al de los siguientes niveles tiene menor Cohesi&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "L&oacute;gica.";
 choices[33][1] = "Procedimental.";
 choices[33][2] = "Funcional.";
 choices[33][3] = "Coincidental.";
 answers[33] = choices[33][3];
 units[33] = "84";
 comments[33] = "Id Pregunta: 2640. ";


//  Id pregunta: 2662 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  De acuerdo con la informaci&oacute;n contenida los servicios de informaci&oacute;n electr&oacute;nica pueden clasificarse en:";
 choices[34]= new Array();
 choices[34][0] = "Servicios referenciales y servicios fuente.";
 choices[34][1] = "Servicios num&eacute;ricos y servicios textuales.";
 choices[34][2] = "Servicios de banda ancha y servicios de banda estrecha.";
 choices[34][3] = "Servicios portadores y servicios de valor a&ntilde;adido.";
 answers[34] = choices[34][0];
 units[34] = "96";
 comments[34] = "Id Pregunta: 2662. NULL";


//  Id pregunta: 2664 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  El nivel l&eacute;xico-sint&aacute;ctico:";
 choices[35]= new Array();
 choices[35][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[35][1] = "Llega a la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, as&iacute; como del contexto en el que discurre el di&aacute;l";
 choices[35][2] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras.";
 choices[35][3] = "Extrae los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos.";
 answers[35] = choices[35][3];
 units[35] = "94";
 comments[35] = "Id Pregunta: 2664. ";


//  Id pregunta: 2692 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Los servicios de informaci&oacute;n electr&oacute;nica denominados &quot;Servicios referenciales&quot; pueden ser:";
 choices[36]= new Array();
 choices[36][0] = "Num&eacute;ricos y textuales.";
 choices[36][1] = "Num&eacute;ricos, textuales o ic&oacute;nicos.";
 choices[36][2] = "Bibliogr&aacute;ficos o directorios.";
 choices[36][3] = "Bibliogr&aacute;ficos, directorios y agendas.";
 answers[36] = choices[36][2];
 units[36] = "96";
 comments[36] = "Id Pregunta: 2692. NULL";


//  Id pregunta: 2734 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El an&aacute;lisis de requerimientos es:";
 choices[37]= new Array();
 choices[37][0] = "Una actividad intesiva de comunicaci&oacute;n";
 choices[37][1] = "Una actividad intensiva de programaci&oacute;n";
 choices[37][2] = "Una actividad intesiva de especificaci&oacute;n";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][0];
 units[37] = "78";
 comments[37] = "Id Pregunta: 2734. ";


//  Id pregunta: 2751 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Qu&eacute; tres modelos utiliza OMT?";
 choices[38]= new Array();
 choices[38][0] = "Modelo de objetos , din&aacute;mico y funcional";
 choices[38][1] = "Modelo est&aacute;tico , din&aacute;mico y funcional";
 choices[38][2] = "Modelo de objetos , din&aacute;mico y transaccional";
 choices[38][3] = "Modelo de objetos, est&aacute;tico y de clases";
 answers[38] = choices[38][0];
 units[38] = "82";
 comments[38] = "Id Pregunta: 2751. ";


//  Id pregunta: 2756 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;C&oacute;mo se denomina la t&eacute;cnica que permite  obtener un modelo f&iacute;sico de datos a partir del modelo de clases?";
 choices[39]= new Array();
 choices[39][0] = "Matricial";
 choices[39][1] = "Historia de vidas de las entidades";
 choices[39][2] = "Diagrama de paquetes";
 choices[39][3] = "Reglas de transformaci&oacute;n.";
 answers[39] = choices[39][3];
 units[39] = "82";
 comments[39] = "Id Pregunta: 2756. ";


//  Id pregunta: 2771 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En Dise&ntilde;o estructurado, &iquest;cu&aacute;l de los siguientes presenta un mayor grado de acoplamiento entre m&oacute;dulos?";
 choices[40]= new Array();
 choices[40][0] = "Acoplamiento por contenido.";
 choices[40][1] = "Acoplamiento por estampado.";
 choices[40][2] = "Acoplamiento externo.";
 choices[40][3] = "Acoplamiento de control.";
 answers[40] = choices[40][0];
 units[40] = "84";
 comments[40] = "Id Pregunta: 2771. ";


//  Id pregunta: 2787 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  M&Eacute;TRICA v.3 considera que las pruebas de integraci&oacute;n se deben realizar en el proceso de:";
 choices[41]= new Array();
 choices[41][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[41][1] = "M&eacute;trica v.3 no contempla este tipo de pruebas.";
 choices[41][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n y en el de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[41][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[41] = choices[41][3];
 units[41] = "86";
 comments[41] = "Id Pregunta: 2787. NULL";


//  Id pregunta: 2788 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La Normalizaci&oacute;n del modelo de datos...";
 choices[42]= new Array();
 choices[42][0] = "Se lleva a cabo en la fase de PSI.";
 choices[42][1] = "Se lleva a cabo en la fase de DSI.";
 choices[42][2] = "Se lleva a cabo en la fase de ASI.";
 choices[42][3] = "Se lleva  a cabo en la fase de CSI.";
 answers[42] = choices[42][2];
 units[42] = "86";
 comments[42] = "Id Pregunta: 2788. NULL";


//  Id pregunta: 2807 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[43]= new Array();
 choices[43][0] = "Productividad";
 choices[43][1] = "Fiabilidad";
 choices[43][2] = "Factores de calidad";
 choices[43][3] = "Complejidad";
 answers[43] = choices[43][1];
 units[43] = "88";
 comments[43] = "Id Pregunta: 2807. NULL";


//  Id pregunta: 2848 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  El nivel que determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras es el";
 choices[44]= new Array();
 choices[44][0] = "fonol&oacute;gico";
 choices[44][1] = "pros&oacute;dico";
 choices[44][2] = "fon&eacute;tico";
 choices[44][3] = "ninguno de los anteriores";
 answers[44] = choices[44][1];
 units[44] = "94";
 comments[44] = "Id Pregunta: 2848. ";


//  Id pregunta: 2860 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  La incicativa europea i2010 se transpone en Espa&ntilde;a en ";
 choices[45]= new Array();
 choices[45][0] = "Plan Avanza 2010";
 choices[45][1] = "Ingenio 2010";
 choices[45][2] = "Plan Avanza";
 choices[45][3] = "Avanza.es";
 answers[45] = choices[45][1];
 units[45] = "30";
 comments[45] = "Id Pregunta: 2860. ";


//  Id pregunta: 2861 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Entre las &aacute;reas de actuaci&oacute;n del Plan Avanza no se encuentra";
 choices[46]= new Array();
 choices[46][0] = "Servicios P&uacute;blicos Digitales";
 choices[46][1] = "Educaci&oacute;n en la Era Digital";
 choices[46][2] = "Hogar e Inclusi&oacute;n de los Ciudadanos";
 choices[46][3] = "La Sanidad en la Era Digital";
 answers[46] = choices[46][3];
 units[46] = "30";
 comments[46] = "Id Pregunta: 2861. ";


//  Id pregunta: 4288 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  La calidad del software entregado ser&aacute; alta si la EED (Eficacia de la Eliminaci&oacute;n de Defectos):";
 choices[47]= new Array();
 choices[47][0] = "Se acerca a uno";
 choices[47][1] = "Se acerca a cero.";
 choices[47][2] = "Es mayor que uno.";
 choices[47][3] = "Es negativa.";
 answers[47] = choices[47][0];
 units[47] = "87";
 comments[47] = "Id Pregunta: 4288. NULL";


//  Id pregunta: 4293 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Las t&eacute;cnicas de ingenier&iacute;a del software de &ldquo;sala limpia&rdquo; (cleanroom):";
 choices[48]= new Array();
 choices[48][0] = "Enfatizan la prevenci&oacute;n de defectos sobre la correcci&oacute;n de los defectos.";
 choices[48][1] = "Minimizan las pr&aacute;cticas de verificaci&oacute;n formal.";
 choices[48][2] = "No precisan un proceso de desarrollo del software bien definido.";
 choices[48][3] = "Requieren que cada miembro del equipo de desarrollo tenga una responsabilidad &uacute;nica.";
 answers[48] = choices[48][0];
 units[48] = "";
 comments[48] = "Id Pregunta: 4293. ";


//  Id pregunta: 4397 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los dos esquemas empleados en la recuperaci&oacute;n de errores en el procesamiento de transacciones son:";
 choices[49]= new Array();
 choices[49][0] = "Detecci&oacute;n y recuperaci&oacute;n.";
 choices[49][1] = "La prevenci&oacute;n y el ignorarlos.";
 choices[49][2] = "Sem&aacute;foros y monitores.";
 choices[49][3] = "Hacia delante y hacia atr&aacute;s.";
 answers[49] = choices[49][3];
 units[49] = "83";
 comments[49] = "Id Pregunta: 4397. ";


//  Id pregunta: 4475 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;les de los siguientes no ser&iacute;an objetivos de la ingenier&iacute;a inversa?";
 choices[50]= new Array();
 choices[50][0] = "Incrementar la comprensi&oacute;n global del sistema para el mantenimiento o nuevo desarrollo.";
 choices[50][1] = "Reducir la complejidad del sistema y generar vistas alternativas.";
 choices[50][2] = "Disminuci&oacute;n en los tiempos del ciclo de vida.";
 choices[50][3] = "Recuperar informaci&oacute;n perdida y detectar efectos laterales.";
 answers[50] = choices[50][2];
 units[50] = "91";
 comments[50] = "Id Pregunta: 4475. Castilla la Mancha 06";


//  Id pregunta: 4633 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  En M&eacute;trica V3 NO participa en Ia realizaci&oacute;n de las pruebas de regresi&oacute;n";
 choices[51]= new Array();
 choices[51][0] = "el equipo de mantenimiento";
 choices[51][1] = "el responsable de mantenimiento";
 choices[51][2] = "el jefe del proyecto";
 choices[51][3] = "los usuarios expertos";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 4633. NULL";


//  Id pregunta: 4926 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El modelo de ciclo de vida de desarrollo de un sistema de informaci&oacute;n en el que una fase s&oacute;lo se considerafinalizada si su documentaci&oacute;n asociada ha sido completada es el denominado:";
 choices[52]= new Array();
 choices[52][0] = "En cascada.";
 choices[52][1] = "De prototipado.";
 choices[52][2] = "En espiral.";
 choices[52][3] = "Iterativo.";
 answers[52] = choices[52][0];
 units[52] = "76";
 comments[52] = "Id Pregunta: 4926. Examen TIC B 2007";


//  Id pregunta: 5025 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  El CMM-CMMI es:";
 choices[53]= new Array();
 choices[53][0] = "Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;nen centros de proceso de datos";
 choices[53][1] = "Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos";
 choices[53][2] = "Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[53][3] = "Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[53] = choices[53][2];
 units[53] = "98";
 comments[53] = "Id Pregunta: 5025. Examen TIC A 2007";


//  Id pregunta: 5052 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[54]= new Array();
 choices[54][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 choices[54][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n";
 choices[54][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de ejecuci&oacute;n";
 choices[54][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 answers[54] = choices[54][2];
 units[54] = "82";
 comments[54] = "Id Pregunta: 5052. Examen TIC A 2007";


//  Id pregunta: 5205 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cual de las siguientes no se considera un beneficio de construir prototipos en el proceso del software?";
 choices[55]= new Array();
 choices[55][0] = "Mejora en la usabilidad del sistema";
 choices[55][1] = "Aumento del esfuerzo de desarrollo";
 choices[55][2] = "Mejora en la calidad del dise&ntilde;o";
 choices[55][3] = "Mejor acoplamiento entre el sistema y las necesidades del usuario";
 answers[55] = choices[55][1];
 units[55] = "85";
 comments[55] = "Id Pregunta: 5205. ";


//  Id pregunta: 5216 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  En qu&eacute; proceso se obtiene el producto &quot;Requisitos de Implantaci&oacute;n&quot;";
 choices[56]= new Array();
 choices[56][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[56][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[56][2] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[56][3] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 answers[56] = choices[56][0];
 units[56] = "86";
 comments[56] = "Id Pregunta: 5216. NULL";


//  Id pregunta: 5532 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indicar el gestor de contenidos que no es software libre";
 choices[57]= new Array();
 choices[57][0] = "Open CMS";
 choices[57][1] = "Vignette";
 choices[57][2] = "Zope";
 choices[57][3] = "Alfresco";
 answers[57] = choices[57][1];
 units[57] = "95";
 comments[57] = "Id Pregunta: 5532. NULL";


//  Id pregunta: 5849 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no corresponde a una t&eacute;cnica de estimaci&oacute;n del tama&ntilde;o de un sistema software?";
 choices[58]= new Array();
 choices[58][0] = "Puntos funci&oacute;n de Albrecht";
 choices[58][1] = "Use case points";
 choices[58][2] = "Puntos funci&oacute;n MarkII";
 choices[58][3] = "Puntos funci&oacute;n de Boehm";
 answers[58] = choices[58][3];
 units[58] = "89";
 comments[58] = "Id Pregunta: 5849. NULL";


//  Id pregunta: 5996 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En relaci&oacute;n con ITIL, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[59]= new Array();
 choices[59][0] = "Los m&oacute;dulos principales y m&aacute;s ampliamente implantados de ITIL versi&oacute;n 3 son Entrega del Servicio (Software Delivery) y Soporte del Servicio (Service Support).";
 choices[59][1] = "ITIL versi&oacute;n 3 es un est&aacute;ndar &quot;de iure&quot; similar a BS15000 o ISO/IEC 20000, de modo que una organizaci&oacute;n puede obtener un certificado ITIL.";
 choices[59][2] = "Seg&uacute;n ITIL versi&oacute;n 3, el ciclo de vida de un servicio consta de 5 fases: estrategia, dise&ntilde;o, transici&oacute;n, operaci&oacute;n y mejora continua del servicio.";
 choices[59][3] = "El proceso de Gesti&oacute;n del Cambio (Change Management) forma parte del m&oacute;dulo de Entrega del Servicio (Service Delivery).";
 answers[59] = choices[59][2];
 units[59] = "98";
 comments[59] = "Id Pregunta: 5996. TIC A 2009";


//  Id pregunta: 6126 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  De los siguientes pares de t&eacute;rminos referidos al control de calidad, indique cu&aacute;l contiene dos conceptos equivalentes:";
 choices[60]= new Array();
 choices[60][0] = "Prevenci&oacute;n e inspecci&oacute;n.";
 choices[60][1] = "Causas comunes y causas aleatorias.";
 choices[60][2] = "Muestreo por atributos y muestreo por variables.";
 choices[60][3] = "Tolerancias y l&iacute;mites de control.";
 answers[60] = choices[60][1];
 units[60] = "87";
 comments[60] = "Id Pregunta: 6126. TIC A 2009";


//  Id pregunta: 6209 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  En Programaci&oacute;n y Dise&ntilde;o de Algoritmos &iquest;Cu&aacute;l de los siguientes es un nivel de acoplamiento?";
 choices[61]= new Array();
 choices[61][0] = "De marca";
 choices[61][1] = "De presentaci&oacute;n";
 choices[61][2] = "De clases";
 choices[61][3] = "De herencia";
 answers[61] = choices[61][0];
 units[61] = "79";
 comments[61] = "Id Pregunta: 6209. TICB-2009, bloque desarrollo";


//  Id pregunta: 6257 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  De qu&eacute; modelo de ciclo de vida del software orientado a objetos son propios los conceptos amplitud, profundidad, madurez, alternativas y alcance";
 choices[62]= new Array();
 choices[62][0] = "Modelo de agrupamiento";
 choices[62][1] = "Modelo fuente";
 choices[62][2] = "Modelo remolino";
 choices[62][3] = "Modelo pinball";
 answers[62] = choices[62][2];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6257. TICB-2009, bloque desarrollo";


//  Id pregunta: 6274 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qui&eacute;n defini&oacute; el modelo de ciclo de vida en casacada?";
 choices[63]= new Array();
 choices[63][0] = "Roger Pressman";
 choices[63][1] = "Roger Smith";
 choices[63][2] = "Winston Royce ";
 choices[63][3] = "Carma McClure";
 answers[63] = choices[63][2];
 units[63] = "76";
 comments[63] = "Id Pregunta: 6274. ";


//  Id pregunta: 6292 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El problema de volatilidad a la hora de la obtenci&oacute;n de requisitos en el an&aacute;lisis de un Sistema de Informaci&oacute;n y Comunicaciones se refiere a:";
 choices[64]= new Array();
 choices[64][0] = "Los requisitos son el resultado de integrar informaci&oacute;n de m&uacute;ltiples fuentes, algunas con intereses contrapuestos";
 choices[64][1] = "La complejidad de la organizaci&oacute;n puede hacer que a lo largo del proyecto se cambien objetivos, pol&iacute;ticas, legislaci&oacute;n, etc";
 choices[64][2] = "Las necesidades del usuario cambian";
 choices[64][3] = "Todas las anteriores";
 answers[64] = choices[64][3];
 units[64] = "78";
 comments[64] = "Id Pregunta: 6292. ";


//  Id pregunta: 6315 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un dise&ntilde;o orientado a objetos?";
 choices[65]= new Array();
 choices[65][0] = "Acoplamiento fuerte.";
 choices[65][1] = "Modularidad.";
 choices[65][2] = "Extensibilidad.";
 choices[65][3] = "Reusabilidad.";
 answers[65] = choices[65][0];
 units[65] = "84";
 comments[65] = "Id Pregunta: 6315. ";


//  Id pregunta: 6608 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En el an&aacute;lisis estructurado, al hablar de diccionario de datos se puede diferenciar entre:";
 choices[66]= new Array();
 choices[66][0] = "Diccionarios Activos y Pasivos";
 choices[66][1] = "Diccionario de Datos y de Procesos";
 choices[66][2] = "Diccionarios Funcionales y Descriptivos";
 choices[66][3] = "En el an&aacute;lisis estructurado no se diferencian tipos de diccionarios";
 answers[66] = choices[66][0];
 units[66] = "81";
 comments[66] = "Id Pregunta: 6608. NULL";


//  Id pregunta: 6614 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  De las siguientes actividades, &iquest;cu&aacute;l forma parte del proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (ASI) de M&eacute;trica?";
 choices[67]= new Array();
 choices[67][0] = "Establecimiento de Requisitos";
 choices[67][1] = "Identificaci&oacute;n de Requisitos";
 choices[67][2] = "Establecimiento de Requisitos de Implantaci&oacute;n";
 choices[67][3] = "Definici&oacute;n de Requisitos del Sistema";
 answers[67] = choices[67][0];
 units[67] = "86";
 comments[67] = "Id Pregunta: 6614. NULL";


//  Id pregunta: 6625 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  CMM en el campo de la ingenier&iacute;a y calidad del software son las siglas de:";
 choices[68]= new Array();
 choices[68][0] = "Capacity Maturity Model";
 choices[68][1] = "Capability Maturity Model";
 choices[68][2] = "Capacity Management Model";
 choices[68][3] = "Capability Management Model";
 answers[68] = choices[68][1];
 units[68] = "87";
 comments[68] = "Id Pregunta: 6625. NULL";


//  Id pregunta: 7180 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Uno de los modelos utilizados para la estimaci&oacute;n de costes de un proyecto inform&aacute;tico es COCOMO (COnstructive COst MOdel). Se puede afirmar sobre &eacute;l que:";
 choices[69]= new Array();
 choices[69][0] = "La medici&oacute;n que realiza COCOMO por l&iacute;neas de c&oacute;digo es especialmente &uacute;til para la Orientaci&oacute;n a Objetos";
 choices[69][1] = "Incluye tres submodelos: B&aacute;sico, Intermedio y Detallado";
 choices[69][2] = "Cada submodelo se divide en tres modos: Org&aacute;nico, Inorg&aacute;nico y Directo";
 choices[69][3] = "El modo Org&aacute;nico se aplica a un tipo de proyectos complejos, en los que se tiene experiencia y con unos requisitos muy restrictivos";
 answers[69] = choices[69][1];
 units[69] = "89";
 comments[69] = "Id Pregunta: 7180. Examen TIC B 2009";


//  Id pregunta: 7349 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Liferay est&aacute; desarrollado por:";
 choices[70]= new Array();
 choices[70][0] = "Canonical";
 choices[70][1] = "Red Hat";
 choices[70][2] = "Novell";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = choices[70][3];
 units[70] = "95";
 comments[70] = "Id Pregunta: 7349. NULL";


//  Id pregunta: 8172 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[71][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[71][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[71][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[71] = choices[71][1];
 units[71] = "86";
 comments[71] = "Id Pregunta: 8172. Examen TIC A1 2010";


//  Id pregunta: 8189 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Las certificaciones ITIL:";
 choices[72]= new Array();
 choices[72][0] = "Se pueden obtener tanto por personas como por organizaciones.";
 choices[72][1] = "S&oacute;lo se pueden obtener por organizaciones y no por personas.";
 choices[72][2] = "S&oacute;lo se pueden obtener por personas y no por organizaciones.";
 choices[72][3] = "No existen certificaciones ITIL.";
 answers[72] = choices[72][2];
 units[72] = "98";
 comments[72] = "Id Pregunta: 8189. Examen TIC A1 2010";


//  Id pregunta: 8198 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En ITIL v.3, &iquest;cu&aacute;l de los siguientes procesos y actividades NO corresponde a la estrategia de servicios?:";
 choices[73]= new Array();
 choices[73][0] = "Gesti&oacute;n financiera. ";
 choices[73][1] = "Gesti&oacute;n del portfolio de servicios. ";
 choices[73][2] = "Gesti&oacute;n de la demanda. ";
 choices[73][3] = "Gesti&oacute;n del cat&aacute;logo de servicios. ";
 answers[73] = choices[73][3];
 units[73] = "98";
 comments[73] = "Id Pregunta: 8198. Examen TIC A1 2010";


//  Id pregunta: 8335 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; t&eacute;cnica es utilizada para identificar las dependencias en un proyecto?";
 choices[74]= new Array();
 choices[74][0] = "Los diagramas de Gantt.";
 choices[74][1] = "Program Evaluation &amp; Review Technique.";
 choices[74][2] = "Estructura de Descomposici&oacute;n de Trabajo (WBS).";
 choices[74][3] = "Diagrama de Extrapolaci&oacute;n.";
 answers[74] = choices[74][1];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8335. Examen TIC A2 2010";


//  Id pregunta: 8347 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA 3, en la tarea &quot;Preparaci&oacute;n del Entorno de Construcci&oacute;n&quot; participan:";
 choices[75]= new Array();
 choices[75][0] = "Programadores, T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[75][1] = "T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[75][2] = "Equipo del Proyecto, T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[75][3] = "Programadores, Equipo de Arquitectura, Administradores de Bases de Datos.";
 answers[75] = choices[75][2];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8347. Examen TIC A2 2010";


//  Id pregunta: 8358 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Se&ntilde;ale cu&aacute;l de &eacute;stas es una de las funciones del Grupo de Aseguramiento de la Calidad (seg&uacute;n M&eacute;trica v3): ";
 choices[76]= new Array();
 choices[76][0] = "Definir los recursos que se necesitan para instalar el sistema.";
 choices[76][1] = "Identificar las posibles desviac&iacute;ones en los est&aacute;ndares aplicados, as&iacute; como en los requisitos y procedimientos especificados.";
 choices[76][2] = "Notificar a los desarrolladores de las anomal&iacute;as encontradas en el proceso de desarrollo.";
 choices[76][3] = "Documentar las pruebas seg&uacute;n el est&aacute;ndar ISO 9000:2000.";
 answers[76] = choices[76][1];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8358. Examen TIC A2 2010";


//  Id pregunta: 8392 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Elija la opci&oacute;n que corresponde a una relaci&oacute;n entre casos de usos en UMl:";
 choices[77]= new Array();
 choices[77][0] = "Extiende.";
 choices[77][1] = "Referencia.";
 choices[77][2] = "Hereda.";
 choices[77][3] = "Vincula.";
 answers[77] = choices[77][0];
 units[77] = "84";
 comments[77] = "Id Pregunta: 8392. Examen TIC A2 2010";


//  Id pregunta: 8510 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  El IVR (lnteractive Voice Response), para brindar mejores servicios involucra otras tecnolog&iacute;as, indicar la ERR&Oacute;NEA:";
 choices[78]= new Array();
 choices[78][0] = "DTMF (Dual Tone Multi Frequency) es la tecnolog&iacute;a de tonos utilizada para el marcado. ";
 choices[78][1] = "TTS (Text To Speech) le da capacidad de transformar texto a audio que escucha el operador. ";
 choices[78][2] = " ASR (Reconocimiento de Voz) le da la capacidad de reconocer las palabras del usuario y aceptarlas como &oacute;rdenes. ";
 choices[78][3] = "MSCML (Media Server Control Markup Language): lo que le permite controlar cualquier Media Resource Function (MRF). ";
 answers[78] = choices[78][3];
 units[78] = "94";
 comments[78] = "Id Pregunta: 8510. Examen TIC A2 2010";


//  Id pregunta: 8518 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Indicar la respuesta correcta respecto al diagrama de flujo de datos:";
 choices[79]= new Array();
 choices[79][0] = "Un proceso de control puede ser el origen de los datos pero nunca el final de los datos.";
 choices[79][1] = "El flujo de di&aacute;logo se representa por una flecha discontinua que indica la direcci&oacute;n de los datos, y que se etiqueta con un nombre representativo.";
 choices[79][2] = "Un flujo de di&aacute;logo es un flujo entre un proceso y un almac&eacute;n que representa una consulta y una actualizaci&oacute;n.";
 choices[79][3] = "Un proceso de control se encarga de coordinar y sincronizar los accesos a los almacenes de datos.";
 answers[79] = choices[79][2];
 units[79] = "86";
 comments[79] = "Id Pregunta: 8518. Examen TIC A2 2010 interna";


//  Id pregunta: 8766 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  La metodolog&iacute;a de programaci&oacute;n estructurada utiliza la t&eacute;cnica de refinamientos:";
 choices[80]= new Array();
 choices[80][0] = "Sucesivos.";
 choices[80][1] = "Por iteraci&oacute;n.";
 choices[80][2] = "Secuencial";
 choices[80][3] = "Por selecci&oacute;n.";
 answers[80] = choices[80][0];
 units[80] = "81, 84";
 comments[80] = "Id Pregunta: 8766. Examen TIC A2 2010 interna";


//  Id pregunta: 8933 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  La &uacute;ltima versi&oacute;n de ISO 9004 es:";
 choices[81]= new Array();
 choices[81][0] = "ISO 9004:2005";
 choices[81][1] = "ISO 9004:2000";
 choices[81][2] = "ISO 9004:2009";
 choices[81][3] = "ISO 9004:2008";
 answers[81] = choices[81][2];
 units[81] = "92";
 comments[81] = "Id Pregunta: 8933. NULL";


//  Id pregunta: 8969 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  Entre las m&eacute;tricas de Calidad para sistemas orientados a objetos se encuentran MDOO &iquest;cu&aacute;l de los siguientes no es un factor que la compongan?";
 choices[82]= new Array();
 choices[82][0] = "Factor de polimorfismo";
 choices[82][1] = "Factor de acoplamiento";
 choices[82][2] = "Factor de herencia de m&eacute;todos";
 choices[82][3] = "Factor de cohesi&oacute;n";
 answers[82] = choices[82][3];
 units[82] = "88";
 comments[82] = "Id Pregunta: 8969. NULL";


//  Id pregunta: 9423 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[83]= new Array();
 choices[83][0] = "No cubre todo el ciclo de vida de desarrollo del software, puesto que no se incluye por ejemplo el estudio de viabilidad del sistema";
 choices[83][1] = "Supone que existe una buena direcci&oacute;n por parte del desarrollador y del cliente";
 choices[83][2] = "S&oacute;lo cubre los costes directos del proyecto";
 choices[83][3] = "Un mes.hombre consta de 160 horas de trabajo";
 answers[83] = choices[83][3];
 units[83] = "89";
 comments[83] = "Id Pregunta: 9423. NULL";


//  Id pregunta: 9461 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes diagramas no se usan en UML 2.0?";
 choices[84]= new Array();
 choices[84][0] = "Diagrama de secuencia.";
 choices[84][1] = "Diagrama de comunicaci&oacute;n.";
 choices[84][2] = "Diagrama de transici&oacute;n de estados.";
 choices[84][3] = "Diagrama de elementos.";
 answers[84] = choices[84][3];
 units[84] = "84";
 comments[84] = "Id Pregunta: 9461. NULL";


//  Id pregunta: 9463 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; diagramas de UML 2.0 son los m&aacute;s adecuados para el modelo de interacci&oacute;n de una aplicaci&oacute;n?";
 choices[85]= new Array();
 choices[85][0] = "Comunicaci&oacute;n, despliegue y secuencia.";
 choices[85][1] = "Despliegue, secuencia y casos de uso.";
 choices[85][2] = "Secuencia, comunicaci&oacute;n y tiempos.";
 choices[85][3] = "Actividades, estados y tiempos.";
 answers[85] = choices[85][2];
 units[85] = "84";
 comments[85] = "Id Pregunta: 9463. NULL";


//  Id pregunta: 9465 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  En Orientaci&oacute;n a Objetos, &iquest;qu&eacute; es cierto acerca de la herencia m&uacute;ltiple?:";
 choices[86]= new Array();
 choices[86][0] = "Consiste en que una superclase puede tener varias subclases.";
 choices[86][1] = "Consiste en que una subclase puede tener m&aacute;s de una superclase.";
 choices[86][2] = "Es lo mismo que la herencia repetida.";
 choices[86][3] = "En orientaci&oacute;n a objetos no existe la herencia m&uacute;ltiple.";
 answers[86] = choices[86][1];
 units[86] = "84";
 comments[86] = "Id Pregunta: 9465. NULL";


//  Id pregunta: 10021 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale la respuesta INCORRECTA respecto a las caracter&iacute;sticas de la metodolog&iacute;a de desarrollo software conocida como Proceso Unificado de Desarrollo Software:";
 choices[87]= new Array();
 choices[87][0] = "Es Iterativo e Incremental.";
 choices[87][1] = "Est&aacute; dirigido por los casos de uso.";
 choices[87][2] = "Est&aacute; enfocado en los riesgos.";
 choices[87][3] = "Fue creado por Dennis Ritchie y Ken Thompson.";
 answers[87] = choices[87][3];
 units[87] = "76";
 comments[87] = "Id Pregunta: 10021. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10088 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En la metodolog&iacute;a SCRUM existen distintos tipo de reuniones. &iquest;Qu&eacute; orden cronol&oacute;gico suelen tener?";
 choices[88]= new Array();
 choices[88][0] = "Daily Scrum, Scrum de Scrum, Sprint Planning Meeting, Sprint Review Meeting y Spring Retrospective.";
 choices[88][1] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Sprint Review Meeting y Spring Retrospective.";
 choices[88][2] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Spring Retrospective y Sprint Review Meeting. ";
 choices[88][3] = "Sprint Planning Meeting, Daily Scrum,  Sprint Review Meeting, Scrum de Scrum y Spring Retrospective.";
 answers[88] = choices[88][1];
 units[88] = "79";
 comments[88] = "Id Pregunta: 10088. NULL";


//  Id pregunta: 10090 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seg&uacute;n SCRUM, &iquest;se pueden modificar el sprintbacklog durante un sprint?";
 choices[89]= new Array();
 choices[89][0] = "No, nunca";
 choices[89][1] = "Solo el Product Owner";
 choices[89][2] = "Solo el Scrum Master";
 choices[89][3] = "Solo el Product Owner a petici&oacute;n de alg&uacute;n Stakeholder";
 answers[89] = choices[89][0];
 units[89] = "79";
 comments[89] = "Id Pregunta: 10090. NULL";


//  Id pregunta: 10101 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En el an&aacute;lisis estructurado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[90]= new Array();
 choices[90][0] = "El Diccionario de Datos suele estar orientado a los desarrolladores.";
 choices[90][1] = "El Diccionario de Datos suele estar orientado a los usuarios.";
 choices[90][2] = "El Directorio de Datos suele estar orientado a los desarrolladores.";
 choices[90][3] = "La b) y la c) son correctas.";
 answers[90] = choices[90][3];
 units[90] = "81";
 comments[90] = "Id Pregunta: 10101. NULL";


//  Id pregunta: 10634 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique cu&aacute;l de &eacute;stas no es una t&eacute;cnica propuesta por M&eacute;trica v3:";
 choices[91]= new Array();
 choices[91][0] = "Factores Cr&iacute;ticos de &Eacute;xito (FCE).";
 choices[91][1] = "Modelo Entidad/Relaci&oacute;n";
 choices[91][2] = "Diagrama de componentes";
 choices[91][3] = "An&aacute;lisis de Puntos Funci&oacute;n.";
 answers[91] = choices[91][0];
 units[91] = "86";
 comments[91] = "Id Pregunta: 10634. ";


//  Id pregunta: 10838 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Empleando el algoritmo m&aacute;s simple de la burbuja (Bubble Sort), en caso de querer ordenar un array de 10 elementos, &iquest;cu&aacute;ntas pasadas ser&iacute;a necesario realizar?";
 choices[92]= new Array();
 choices[92][0] = "10";
 choices[92][1] = "5";
 choices[92][2] = "11";
 choices[92][3] = "9";
 answers[92] = choices[92][3];
 units[92] = "0";
 comments[92] = "Id Pregunta: 10838. Examen GSI 2014";


//  Id pregunta: 11158 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; caracter&iacute;sticas deben tener las transacciones para realizarse r&aacute;pidamente y con riesgos m&iacute;nimos?";
 choices[93]= new Array();
 choices[93][0] = "Atomicidad, Coherencia, Independencia, Durabilidad";
 choices[93][1] = "Atomicidad, Consistencia, Aislamiento, Durabilidad";
 choices[93][2] = "Atomicidad, Consistencia, Independencia, Durabilidad";
 choices[93][3] = "Atomicidad, Coherencia, Aislamiento, Durabilidad";
 answers[93] = choices[93][1];
 units[93] = "83";
 comments[93] = "Id Pregunta: 11158. ";


//  Id pregunta: 11309 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale el conjunto de conceptos que son introducidos por el Modelo Entidad/Relaci&oacute;n extendido";
 choices[94]= new Array();
 choices[94][0] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e identificaci&oacute;n.";
 choices[94][1] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima y Dependencia en existencia e identificaci&oacute;n.";
 choices[94][2] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e autenticaci&oacute;n.";
 choices[94][3] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima e independencia en existencia e identificaci&oacute;n.";
 answers[94] = choices[94][0];
 units[94] = "80";
 comments[94] = "Id Pregunta: 11309. ";


//  Id pregunta: 11313 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[95]= new Array();
 choices[95][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[95][1] = "En cada tarea debe haber un unico R y A";
 choices[95][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[95][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[95] = choices[95][1];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11313. Cuidado con esto. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";


//  Id pregunta: 11391 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es primordialmente responsable de empaquetar, construir, probar y desplegar servicios?";
 choices[96]= new Array();
 choices[96][0] = "Planificaci&oacute;n y soporte a la transici&oacute;n";
 choices[96][1] = "Gesti&oacute;n de versiones y despliegues";
 choices[96][2] = "Gesti&oacute;n de configuraci&oacute;n y activos del servicio";
 choices[96][3] = "Gesti&oacute;n del cat&aacute;logo de servicios";
 answers[96] = choices[96][1];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11391. ";


//  Id pregunta: 11399 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, los procesos de Operaci&oacute;n del Servicio son Gesti&oacute;n de Incidencias, Gesti&oacute;n de Problemas, Gesti&oacute;n de Accesos, &hellip;";
 choices[97]= new Array();
 choices[97][0] = "&hellip; Gesti&oacute;n de Eventos y Gesti&oacute;n de Peticiones.";
 choices[97][1] = "&hellip; Gesti&oacute;n de Eventos y Centro de Servicio al usuario.";
 choices[97][2] = "&hellip; Gesti&oacute;n de las Instalaciones y Gesti&oacute;n de Eventos.";
 choices[97][3] = "&hellip; Gesti&oacute;n de Cambios y Gesti&oacute;n de Niveles del Servicio.";
 answers[97] = choices[97][0];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11399. ";


//  Id pregunta: 11404 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes es un prop&oacute;sito b&aacute;sico de la gesti&oacute;n de relaciones con el negocio?";
 choices[98]= new Array();
 choices[98][0] = "Llevar a cabo actividades operacionales para dar soporte de servicios";
 choices[98][1] = "Asegurar que todos los objetivos dentro del acuerdo de nivel de servicio se cumplan";
 choices[98][2] = "Maximizar el valor del contrato y la eficiencia operacional de los servicios que son entregados";
 choices[98][3] = "Entender las necesidades del cliente y asegurar que se cumplen";
 answers[98] = choices[98][3];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11404. ";


//  Id pregunta: 11739 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Indicar el gestor de contenidos que no es software libre";
 choices[99]= new Array();
 choices[99][0] = "Open CMS";
 choices[99][1] = "Vignette";
 choices[99][2] = "Zope";
 choices[99][3] = "Alfresco";
 answers[99] = choices[99][1];
 units[99] = "95";
 comments[99] = "Id Pregunta: 11739. ";


