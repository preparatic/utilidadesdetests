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

//  Id pregunta: 1994 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  El estudio de Viabilidad del Sistema:";
 choices[0]= new Array();
 choices[0][0] = "Es una parte del ciclo de vida, y como tal est&aacute; comtemplado en la metodolog&iacute;a METRICA V3";
 choices[0][1] = "No est&aacute; contemplado en la METRICA, pues esta es solo una metodolog&iacute;a de desarrollo";
 choices[0][2] = "No es necesaria si se emplean t&eacute;cnicas orientadas a objetos";
 choices[0][3] = "No es necesaria si el desarrollo del sistema viene motivado por una orden superior.";
 answers[0] = choices[0][0];
 units[0] = "86";
 comments[0] = "Id Pregunta: 1994. Pregunta TIC-B 2004";


//  Id pregunta: 2010 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El tipo de mantenimiento consistente en a&ntilde;adir nueva funcionalidad y adaptar el sistema a nuevos requerimientos del usuario se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Correctivo";
 choices[1][1] = "Adaptativo";
 choices[1][2] = "Evolutivo";
 choices[1][3] = "Perfectivo";
 answers[1] = choices[1][2];
 units[1] = "86";
 comments[1] = "Id Pregunta: 2010. Similar a examen TIC SS A 2004";


//  Id pregunta: 2051 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En un modelo de datos jer&aacute;rquico";
 choices[2]= new Array();
 choices[2][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[2][1] = "Un registro es subordinado directo de c&oacute;mo m&aacute;ximo otro registro";
 choices[2][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo";
 choices[2][3] = "Los registros est&aacute;n organizados en una red de relaciones mediante un grafo";
 answers[2] = choices[2][1];
 units[2] = "57";
 comments[2] = "Id Pregunta: 2051. Pregunta Junta Andalucia - A";


//  Id pregunta: 2068 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de prueba no es considerada de &quot;caja negra&quot;?";
 choices[3]= new Array();
 choices[3][0] = "Las particiones de equivalencia";
 choices[3][1] = "Prueba del camino b&aacute;sico";
 choices[3][2] = "El an&aacute;lisis de los valores l&iacute;mite";
 choices[3][3] = "Los grafos causa-efecto";
 answers[3] = choices[3][1];
 units[3] = "86";
 comments[3] = "Id Pregunta: 2068. NULL";


//  Id pregunta: 2081 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3, en el an&aacute;lisis coste-beneficio de un sistema de informaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Deben considerarse s&oacute;lo los aspectos tangibles";
 choices[4][1] = "Deben considerarse tanto los aspectos tangibles como los intangibles";
 choices[4][2] = "El an&aacute;lisis coste-beneficio no figura en la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3";
 choices[4][3] = "No se incluyen los gastos de comunicaciones";
 answers[4] = choices[4][1];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2081. NULL";


//  Id pregunta: 2098 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En los sistemas de tiempo real, &iquest;qu&eacute; es m&aacute;s cr&iacute;tico?";
 choices[5]= new Array();
 choices[5][0] = "Fuertes restricciones del tiempo de respuesta.";
 choices[5][1] = "Informaci&oacute;n permanentemente actualizada.";
 choices[5][2] = "Alto rendimiento del sistema.";
 choices[5][3] = "La fiabilidad.";
 answers[5] = choices[5][0];
 units[5] = "83";
 comments[5] = "Id Pregunta: 2098. ";


//  Id pregunta: 2106 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Una de las caracter&iacute;sticas especiales de las bases de datos documentales, con respecto a otros tipos de bases de datos es que:";
 choices[6]= new Array();
 choices[6][0] = "Est&aacute;n integradas por campos";
 choices[6][1] = "Son adecuadas para una informaci&oacute;n muy estructurada";
 choices[6][2] = "Est&aacute;n basadas en sistemas de archivo y ficheros inversos";
 choices[6][3] = "Se almacenan en tablas";
 answers[6] = choices[6][2];
 units[6] = "96";
 comments[6] = "Id Pregunta: 2106. ";


//  Id pregunta: 2107 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[7]= new Array();
 choices[7][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[7][1] = "El responsable de mantenimiento y el jefe de proyecto";
 choices[7][2] = "El equipo de mantenimiento y el jefe de proyecto ";
 choices[7][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios";
 answers[7] = choices[7][2];
 units[7] = "86";
 comments[7] = "Id Pregunta: 2107. Pregunta Junta Andalucia - A";


//  Id pregunta: 2126 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[8]= new Array();
 choices[8][0] = "M&Eacute;TRICA Versi&oacute;n 3 contempla s&oacute;lo desarrollos orientados a objetos";
 choices[8][1] = "El grupo encargado del Aseguramiento de la calidad debe ser independiente del equipo de desarrollo";
 choices[8][2] = "En M&Eacute;TRICA Versi&oacute;n 3 el mantenimiento es s&oacute;lo correctivo y adaptativo";
 choices[8][3] = "El particionamiento f&iacute;sico del sistema de informaci&oacute;n se lleva a cabo en el An&aacute;lisis del sistema de informaci&oacute;n";
 answers[8] = choices[8][1];
 units[8] = "86";
 comments[8] = "Id Pregunta: 2126. NULL";


//  Id pregunta: 2141 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes reglas no es una regla de construcci&oacute;n de flujos en un DFD?:";
 choices[9]= new Array();
 choices[9][0] = "Activa procesos";
 choices[9][1] = "Conecta a los dem&aacute;s elementos de un DFD";
 choices[9][2] = "El flujo no puede crear ni destruir datos";
 choices[9][3] = "Se puede asimilar el flujo de datos a una tuber&iacute;a por la que transita informaci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2141. NULL";


//  Id pregunta: 2162 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indicar la afirmaci&oacute;n falsa sobre dise&ntilde;o estructurado:";
 choices[10]= new Array();
 choices[10][0] = "Se define el concepto del dise&ntilde;o estructurado como el proceso de definici&oacute;n de la arquitectura software: componentes, m&oacute;dulos, interfaces, procedimientos de prueba y datos de un sistema que se crean para satisfacer unos requisitos especificados.";
 choices[10][1] = "Podemos entender por cohesi&oacute;n la caracter&iacute;stica que presenta un m&oacute;dulo perteneciente a una aplicaci&oacute;n de ejecutar una tarea &uacute;nica y bien definida, encadenada a otras en una secuencia concreta para constituir un procedimiento dentro del logical.";
 choices[10][2] = "Por oposici&oacute;n al concepto de cohesi&oacute;n, que es una medida de la coherencia y/o complejidad funcional interna de un m&oacute;dulo, encontramos el acoplamiento, como medida de la complejidad externa del mismo de acuerdo a sus interfaces.";
 choices[10][3] = "Todas las respuestas anteriores son verdaderas.";
 answers[10] = choices[10][3];
 units[10] = "84";
 comments[10] = "Id Pregunta: 2162. ";


//  Id pregunta: 2164 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[11]= new Array();
 choices[11][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[11][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[11][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[11][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[11] = choices[11][3];
 units[11] = "92";
 comments[11] = "Id Pregunta: 2164. NULL";


//  Id pregunta: 2181 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes tipos de prueba es de caja blanca?:";
 choices[12]= new Array();
 choices[12][0] = "An&aacute;lisis de valores l&iacute;mite de entrada";
 choices[12][1] = "Prueba de bucles";
 choices[12][2] = "Pruebas de comparaci&oacute;n";
 choices[12][3] = "Pruebas basadas en grafos";
 answers[12] = choices[12][1];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2181. NULL";


//  Id pregunta: 2186 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l no es un tipo de mantenimiento software?:";
 choices[13]= new Array();
 choices[13][0] = "Continuo";
 choices[13][1] = "Correctivo";
 choices[13][2] = "Adaptativo";
 choices[13][3] = "Perfectivo";
 answers[13] = choices[13][0];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2186. NULL";


//  Id pregunta: 2198 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;En qu&eacute; consiste la teor&iacute;a de la Productividad aplicada a la implantaci&oacute;n de la calidad?:";
 choices[14]= new Array();
 choices[14][0] = "Un producto de calidad es m&aacute;s caro de producir";
 choices[14][1] = "Un producto de calidad es m&aacute;s dif&iacute;cil de producir";
 choices[14][2] = "Un producto de calidad es m&aacute;s r&aacute;pido de producir";
 choices[14][3] = "Un producto de calidad es m&aacute;s barato de producir";
 answers[14] = choices[14][3];
 units[14] = "88";
 comments[14] = "Id Pregunta: 2198. NULL";


//  Id pregunta: 2294 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El modo semiacoplado de aplicar los modelos de COCOMO considera:";
 choices[15]= new Array();
 choices[15][0] = "Proyectos peque&ntilde;os";
 choices[15][1] = "Proyectos de complejidad media";
 choices[15][2] = "Proyectos de complejidad alta";
 choices[15][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[15] = choices[15][1];
 units[15] = "89";
 comments[15] = "Id Pregunta: 2294. NULL";


//  Id pregunta: 2313 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En el modelo en cascada puede decirse que:";
 choices[16]= new Array();
 choices[16][0] = "Est&aacute; dise&ntilde;ado para la utilizaci&oacute;n de herramientas CASE";
 choices[16][1] = "El usuario es el principal protagonista";
 choices[16][2] = "La introducci&oacute;n de una fase de dise&ntilde;o r&aacute;pido servir&iacute;a para validar las especificaciones";
 choices[16][3] = "Todas las respuestas anteriores son ciertas";
 answers[16] = choices[16][2];
 units[16] = "76";
 comments[16] = "Id Pregunta: 2313. ";


//  Id pregunta: 2330 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En la realizaci&oacute;n de DFDs:";
 choices[17]= new Array();
 choices[17][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[17][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[17][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[17][3] = "Todas las respuestas anteriores son correctas";
 answers[17] = choices[17][3];
 units[17] = "81";
 comments[17] = "Id Pregunta: 2330. ";


//  Id pregunta: 2343 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En programaci&oacute;n orientada a objetos, el mecanismo por el cual una clase de objeto puede ser definido como un caso particular de una clase m&aacute;s general se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Herencia";
 choices[18][1] = "Subclase";
 choices[18][2] = "Polimorfismo";
 choices[18][3] = "Encapsulaci&oacute;n";
 answers[18] = choices[18][0];
 units[18] = "82";
 comments[18] = "Id Pregunta: 2343. ";


//  Id pregunta: 2416 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El m&eacute;todo booleano de recuperaci&oacute;n de informaci&oacute;n presenta como problema fundamental:";
 choices[19]= new Array();
 choices[19][0] = "Es de sintaxis compleja y la consulta debe reintentarse normalmente para obtener una cantidad razonable de documentos";
 choices[19][1] = "Deben utilizarse m&uacute;ltiples ficheros auxiliares";
 choices[19][2] = "Utilizan operadores l&oacute;gicos y modelos probabil&iacute;sticos simult&aacute;neamente";
 choices[19][3] = "Est&aacute; basado en sistemas expertos";
 answers[19] = choices[19][0];
 units[19] = "96";
 comments[19] = "Id Pregunta: 2416. NULL";


//  Id pregunta: 2453 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los criterios asociados al factor de calidad 'correcci&oacute;n':";
 choices[20]= new Array();
 choices[20][0] = "Modularidad, Independencia de los entornos";
 choices[20][1] = "Coherencia, concisi&oacute;n";
 choices[20][2] = "Trazabilidad, integridad, coherencia";
 choices[20][3] = "Precisi&oacute;n, tolerancia a errores, simplicidad";
 answers[20] = choices[20][2];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2453. ";


//  Id pregunta: 2477 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Para reutilizar &quot;software&quot; es ventajoso utilizar lenguajes de programaci&oacute;n orientados a objetos por la siguiente raz&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Porque son m&aacute;s modernos.";
 choices[21][1] = "Porque permiten agrupar los objetos y las operaciones que se realizan sobre los mismos.";
 choices[21][2] = "Porque permiten recursividad.";
 choices[21][3] = "Porque admiten paso de par&aacute;metros por valor y por referencia.";
 answers[21] = choices[21][1];
 units[21] = "82,84";
 comments[21] = "Id Pregunta: 2477. ";


//  Id pregunta: 2508 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Un proceso en un DFD&hellip;:";
 choices[22]= new Array();
 choices[22][0] = "Puede descomponerse en otros procesos";
 choices[22][1] = "Siempre tiene un almac&eacute;n de datos asociado";
 choices[22][2] = "Puede estar aislado";
 choices[22][3] = "Puede equivaler a una entidad externa";
 answers[22] = choices[22][0];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2508. ";


//  Id pregunta: 2515 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Uno de los siguientes no es un problema de la fase de an&aacute;lisis de requisitos:";
 choices[23]= new Array();
 choices[23][0] = "El usuario posee el conocimiento de forma desorganizada";
 choices[23][1] = "Manejo de la complejidad del problema";
 choices[23][2] = "La adquisici&oacute;n de la informaci&oacute;n pertinente";
 choices[23][3] = "Acomodar los cambios que puedan ocurrir durante o despu&eacute;s del an&aacute;lisis";
 answers[23] = choices[23][0];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2515. NULL";


//  Id pregunta: 2523 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;les son los m&eacute;todos b&aacute;sicos de reconocimiento de caracteres en OCR?:";
 choices[24]= new Array();
 choices[24][0] = "Comparaci&oacute;n matricial";
 choices[24][1] = "Extracci&oacute;n de caracter&iacute;sticas";
 choices[24][2] = "Reconocimiento de patrones";
 choices[24][3] = "Son v&aacute;lidas todas las respuestas anteriores";
 answers[24] = choices[24][3];
 units[24] = "93";
 comments[24] = "Id Pregunta: 2523. NULL";


//  Id pregunta: 2541 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los distintos tipos de sintetizadores de voz existentes se pueden clasificar en:";
 choices[25]= new Array();
 choices[25][0] = "Sintetizadores articulatorios. Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 choices[25][1] = "Sintetizadores autom&aacute;ticos. Sintetizadores manuales. Sintetizadores programables";
 choices[25][2] = "Sintetizadores programables. Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 choices[25][3] = "Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 answers[25] = choices[25][0];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2541. ";


//  Id pregunta: 2553 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  El modelado de Procesos de la Organizaci&oacute;n y el Modelo entidad/relaci&oacute;n extendido se utiliza en la siguiente actividad del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n METRICA V3:";
 choices[26]= new Array();
 choices[26][0] = "Estas t&eacute;cnicas no se utilizan en el PSI";
 choices[26][1] = "PSI6 Dise&ntilde;o de Modelos de Sistemas de Informaci&oacute;n";
 choices[26][2] = "PSI5 Estudio de los sistemas de informaci&oacute;n actuales";
 choices[26][3] = "PSI4 Identificaci&oacute;n de requisitos";
 answers[26] = choices[26][3];
 units[26] = "86";
 comments[26] = "Id Pregunta: 2553. Pregunta Junta Andalucia - A";


//  Id pregunta: 2565 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  El modelado de Procesos de la Organizaci&oacute;n y el Modelo entidad/relaci&oacute;n extendido se utiliza en la siguiente actividad del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n METRICA V3:";
 choices[27]= new Array();
 choices[27][0] = "Estas t&eacute;cnicas no se utilizan en el PSI.";
 choices[27][1] = "PSI6 Dise&ntilde;o de Modelos de Sistemas de Informaci&oacute;n.";
 choices[27][2] = "PSI5 Estudio de los sistemas de Informaci&oacute;n actuales.";
 choices[27][3] = "PSI4 Identificaci&oacute;n de requisitos.";
 answers[27] = choices[27][3];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2565. Junta Andaluc&iacute;a";


//  Id pregunta: 2569 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  El denominado &quot; principio de Pareto&quot; empleado frecuentemente en el enfoque estad&iacute;stico de Garant&iacute;a de Calidad en desarrollo del SW establece que:";
 choices[28]= new Array();
 choices[28][0] = "El n&uacute;mero de defectos del SW crece exponencialmente con el n&uacute;mero de nicveles jer&aacute;rquicos presentes en el equipo de desarrollo";
 choices[28][1] = "El 80% de los defectos tienen su origen com&uacute;n en el 20% de los factores causantes";
 choices[28][2] = "Cuando un buen programador es ascendido a analista la tasa de errores se duplica, con un nivel de confianza del 95%";
 choices[28][3] = "Para una complejidad dda en un proyecto inform&aacute;tico el n&uacute;mero de errores se duplica cada per&iacute;odo de 18 meses o fracci&oacute;n";
 answers[28] = choices[28][1];
 units[28] = "87,88,92";
 comments[28] = "Id Pregunta: 2569. ";


//  Id pregunta: 2591 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[29]= new Array();
 choices[29][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[29][1] = "El responsable de mantenimiento y el jefe de proyecto.";
 choices[29][2] = "El equipo de mantenimiento y el jefe del proyecto.";
 choices[29][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios.";
 answers[29] = choices[29][2];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2591. Junta Andaluc&iacute;a";


//  Id pregunta: 2632 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Qu&eacute; formula expresa la relaci&oacute;n entre puntos de funci&oacute;n y COCOMO?";
 choices[30]= new Array();
 choices[30][0] = "FP= DSI * 320/nivel de lenguaje";
 choices[30][1] = "DSI= FP *  320 /nivel del lenguaje ";
 choices[30][2] = "FP= nivel de lenguaje / DSI * 320";
 choices[30][3] = "DSI= nivel de lenguaje / FP * 320";
 answers[30] = choices[30][1];
 units[30] = "89";
 comments[30] = "Id Pregunta: 2632. NULL";


//  Id pregunta: 2641 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En el dise&ntilde;o Orientado a objetos,  &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[31]= new Array();
 choices[31][0] = "Una clase es la implantaci&oacute;n de un tipo de objeto.";
 choices[31][1] = "Las clases se representan mediante diagramas.";
 choices[31][2] = "Una clase especifica la estructura de datos y los m&eacute;todos operativos permitidos que se aplican a cada uno de sus objetos.";
 choices[31][3] = "Una clase especifica la estructura de datos de los objetos y las operaciones que se utilizan para tener acceso a los objetos.";
 answers[31] = choices[31][0];
 units[31] = "84";
 comments[31] = "Id Pregunta: 2641. ";


//  Id pregunta: 2697 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  M&eacute;todo b&aacute;sico de reconocimiento de caracteres en OCR:";
 choices[32]= new Array();
 choices[32][0] = "Comparaci&oacute;n matricial.";
 choices[32][1] = "S&iacute;ntesis de caracter&iacute;sticas.";
 choices[32][2] = "Todas las anteriores.";
 choices[32][3] = "Ninguna de las anteriores.";
 answers[32] = choices[32][0];
 units[32] = "94";
 comments[32] = "Id Pregunta: 2697. ";


//  Id pregunta: 2766 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  En el dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes definiciones se ajusta mejor al concepto de 'cohesi&oacute;n l&oacute;gica'?";
 choices[33]= new Array();
 choices[33][0] = "Un mismo m&oacute;dulo realiza varias tareas, las cuales tienen entre ellas una relaci&oacute;n d&eacute;bil, ya sea funcional o de otro tipo.";
 choices[33][1] = "Cuando todas las tareas efectuadas por el m&oacute;dulo se alimentan de una estructura de datos com&uacute;n.";
 choices[33][2] = "El m&oacute;dulo realiza un procedimiento completo o una secuencia de tareas del mismo tales que deben realizarse en un orden preciso y el resultado de una tarea se utiliza para el comienzo de la siguiente.";
 choices[33][3] = "Ninguna de las anteriores definiciones es correcta.";
 answers[33] = choices[33][3];
 units[33] = "84";
 comments[33] = "Id Pregunta: 2766. ";


//  Id pregunta: 2782 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  En M&Eacute;TRICA 3, la definici&oacute;n de la Arquitectura del Sistema, se lleva a cabo en:";
 choices[34]= new Array();
 choices[34][0] = "El An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[34][1] = "La Planificaci&oacute;n de Sistemas.";
 choices[34][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[34][3] = "La Especificaci&oacute;n Funcional del Sistema.";
 answers[34] = choices[34][2];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2782. NULL";


//  Id pregunta: 2799 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Qu&eacute; tipos de mantenimiento se definen en M&eacute;trica v3 (considerados o no)?";
 choices[35]= new Array();
 choices[35][0] = "Correctivo, adaptativo, preventivo y perfectivo";
 choices[35][1] = "Correctivo, adaptativo, evolutivo y perfectivo";
 choices[35][2] = "Correctivo, Adaptativo y evolutivo";
 choices[35][3] = "Correctivo, adaptativo y perfectivo";
 answers[35] = choices[35][1];
 units[35] = "86";
 comments[35] = "Id Pregunta: 2799. NULL";


//  Id pregunta: 2834 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  El proceso que va desde un alto nivel de abstracci&oacute;n hasta la propia implementaci&oacute;n f&iacute;sica del sistema se conoce como:";
 choices[36]= new Array();
 choices[36][0] = "Ingenier&iacute;a inversa.";
 choices[36][1] = "Reestructuraci&oacute;n.";
 choices[36][2] = "Ingenier&iacute;a hacia delante.";
 choices[36][3] = "Reingenier&iacute;a.";
 answers[36] = choices[36][2];
 units[36] = "91";
 comments[36] = "Id Pregunta: 2834. ";


//  Id pregunta: 2854 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Un gestor documental";
 choices[37]= new Array();
 choices[37][0] = "permite crear publicaciones a partir del contenido gestionado";
 choices[37][1] = "incluye funcionalidades propias de un gestor de contenidos";
 choices[37][2] = "se encarga de la gesti&oacute;n y organizaci&oacute;n de documentaci&oacute;n generada por otras aplicaciones";
 choices[37][3] = "ninguna de las anteriores";
 answers[37] = choices[37][2];
 units[37] = "95";
 comments[37] = "Id Pregunta: 2854. NULL";


//  Id pregunta: 2866 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  El objetivo principal de Google es  ";
 choices[38]= new Array();
 choices[38][0] = "maximizar el &Iacute;ndice de Precisi&oacute;n";
 choices[38][1] = "maximizar el &Iacute;ndice de Respuesta";
 choices[38][2] = "minimizar el Silencio";
 choices[38][3] = "B &yacute; C";
 answers[38] = choices[38][0];
 units[38] = "96";
 comments[38] = "Id Pregunta: 2866. NULL";


//  Id pregunta: 4241 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Cu&aacute;l de las siguientes no es una fase t&iacute;pica de PUDS (Proceso Unificado del Desarrollo del SW)";
 choices[39]= new Array();
 choices[39][0] = "Iniciaci&oacute;n";
 choices[39][1] = "Finalizaci&oacute;n";
 choices[39][2] = "Transici&oacute;n";
 choices[39][3] = "Elaboraci&oacute;n";
 answers[39] = choices[39][1];
 units[39] = "79";
 comments[39] = "Id Pregunta: 4241. ";


//  Id pregunta: 4295 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Un diagrama de Secuencia de UML:";
 choices[40]= new Array();
 choices[40][0] = "Representa los componentes del sistema y las dependencias existentes entre ellos.";
 choices[40][1] = "Hace hincapi&eacute; en la ordenaci&oacute;n temporal de los mensajes que se intercambian.";
 choices[40][2] = "Establece las relaciones que existen entre los objetos y las clases.";
 choices[40][3] = "Establece los estados y las transiciones entre los estados de los elementos del sistema.";
 answers[40] = choices[40][1];
 units[40] = "82";
 comments[40] = "Id Pregunta: 4295. ";


//  Id pregunta: 4378 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El objetivo principal del an&aacute;lisis de sistemas es:";
 choices[41]= new Array();
 choices[41][0] = "Determinar el mecanismo de funcionamiento de los m&oacute;dulos.";
 choices[41][1] = "Validar con el cliente el cumplimiento de las especificaciones.";
 choices[41][2] = "Establecer claramente las especificaciones del producto.";
 choices[41][3] = "Integrar los distintos componentes del sistema.";
 answers[41] = choices[41][2];
 units[41] = "80";
 comments[41] = "Id Pregunta: 4378. ";


//  Id pregunta: 4384 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En el desarrollo orientado a objetos, la ocultaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Permite utilizar un m&oacute;dulo sin necesidad de conocer su estructura interna.";
 choices[42][1] = "Posibilita la clasificaci&oacute;n de los m&oacute;dulos.";
 choices[42][2] = "Hace que un m&oacute;dulo pueda adquirir formas diferentes cuando se particulariza su uso.";
 choices[42][3] = "Tiene el peligro de la aparici&oacute;n de interbloqueos entre m&oacute;dulos";
 answers[42] = choices[42][0];
 units[42] = "82";
 comments[42] = "Id Pregunta: 4384. ";


//  Id pregunta: 4527 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cual es el tipo de mantenimiento que supone un conjunto de actividades para facilitar el mantenimiento futuro del sistema?";
 choices[43]= new Array();
 choices[43][0] = "Mantenimiento perfectivo.";
 choices[43][1] = "Mantenimiento adaptativo.";
 choices[43][2] = "Mantenimiento correctivo.";
 choices[43][3] = "Mantenimiento preventivo.";
 answers[43] = choices[43][3];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4527. NULL";


//  Id pregunta: 4531 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes no es una sentencia correcta?";
 choices[44]= new Array();
 choices[44][0] = "UML es un lenguaje unificado de modelado.";
 choices[44][1] = "UML fue adoptado en noviembre de 1997 por OMG.";
 choices[44][2] = "UML solo costa de una &uacute;nica versi&oacute;n desde su creaci&oacute;n.";
 choices[44][3] = "UML es un est&aacute;ndar de facto para visualizar, especificar y documentar los modelos que se crean durante Ia aplicaci&oacute;n de un proceso de software.";
 answers[44] = choices[44][2];
 units[44] = "82";
 comments[44] = "Id Pregunta: 4531. ";


//  Id pregunta: 4602 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Dentro de la ingenier&iacute;a del software orientada a objetos, &iquest;Como se denomina la relaci&oacute;n entre un componente y su interfaz?";
 choices[45]= new Array();
 choices[45][0] = "agregaci&oacute;n";
 choices[45][1] = "realizaci&oacute;n";
 choices[45][2] = "polimorfismo";
 choices[45][3] = "presentaci&oacute;n";
 answers[45] = choices[45][1];
 units[45] = "82";
 comments[45] = "Id Pregunta: 4602. ";


//  Id pregunta: 4635 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Dentro de la prueba de integraci&oacute;n de los sistemas 00, las pruebas basadas en el uso:";
 choices[46]= new Array();
 choices[46][0] = "se componen de pruebas basadas en errores, pruebas al azar y prueba por partici&oacute;n.";
 choices[46][1] = "construyen el sistema en capas, comenzando con las clases que no usan clases servidoras";
 choices[46][2] = "las pruebas basadas en el uso se engoblan en las pruebas de validaci&oacute;n";
 choices[46][3] = "est&aacute;n basadas en las pruebas unitarias del software convencional";
 answers[46] = choices[46][1];
 units[46] = "";
 comments[46] = "Id Pregunta: 4635. ";


//  Id pregunta: 4727 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Los resultados del modelo EFQM se eval&uacute;an:";
 choices[47]= new Array();
 choices[47][0] = "Respecto a los clientes";
 choices[47][1] = "Respecto a la sociedad";
 choices[47][2] = "Respecto al personal de la empresa";
 choices[47][3] = "Todas las respuestas son correctas";
 answers[47] = choices[47][3];
 units[47] = "92";
 comments[47] = "Id Pregunta: 4727. Examen 2006 JCYL";


//  Id pregunta: 4729 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Cual de los siguientes no es un formato vectorial para el tratamiento de im&aacute;genes:";
 choices[48]= new Array();
 choices[48][0] = "SVG";
 choices[48][1] = "WMF";
 choices[48][2] = "Postscript";
 choices[48][3] = "TIFF";
 answers[48] = choices[48][3];
 units[48] = "93";
 comments[48] = "Id Pregunta: 4729. Examen 2006 JCYL";


//  Id pregunta: 4832 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[49]= new Array();
 choices[49][0] = "Acoplamiento de control.";
 choices[49][1] = "Acoplamiento por estampado.";
 choices[49][2] = "Acoplamiento por contenido.";
 choices[49][3] = "Acoplamiento externo.";
 answers[49] = choices[49][2];
 units[49] = "84";
 comments[49] = "Id Pregunta: 4832. examen TIC 2006";


//  Id pregunta: 4878 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  El protocolo de escritura anticipada en el fichero diario (fichero log) de una base de datos establece que:";
 choices[50]= new Array();
 choices[50][0] = "La escritura de un elemento de datos deber&iacute;a hacerse antes de cualquier operaci&oacute;n en el diario";
 choices[50][1] = "El registro del diario de una operaci&oacute;n deber&iacute;a escribirse antes de que se escriban los datos reales";
 choices[50][2] = "Todos los registros del diario deber&iacute;an escribirse antes de que comenzara a ejecutarse una nuevatransacci&oacute;n";
 choices[50][3] = "El diario nunca necesita escribirse en disco";
 answers[50] = choices[50][1];
 units[50] = "97";
 comments[50] = "Id Pregunta: 4878. NULL";


//  Id pregunta: 4928 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Entre los agentes participantes en la gesti&oacute;n del proceso de desarrollo de un Sistema, el &ldquo;especialista en comunicaciones&rdquo; responde al perfil de:";
 choices[51]= new Array();
 choices[51][0] = "Jefe de Proyecto.";
 choices[51][1] = "Directivo.";
 choices[51][2] = "Consultor.";
 choices[51][3] = "Ninguna de las anteriores.";
 answers[51] = choices[51][2];
 units[51] = "86";
 comments[51] = "Id Pregunta: 4928. Examen TIC B 2007";


//  Id pregunta: 5013 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?:";
 choices[52]= new Array();
 choices[52][0] = "Entradas";
 choices[52][1] = "Salidas";
 choices[52][2] = "Consultas";
 choices[52][3] = "Usuarios";
 answers[52] = choices[52][3];
 units[52] = "89";
 comments[52] = "Id Pregunta: 5013. Examen TIC A 2007, preparatic XVII";


//  Id pregunta: 5080 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En el modelo COCOMO, la estimaci&oacute;n del esfuerzo anual b&aacute;sico para el mantenimiento de los sistemas deinformaci&oacute;n, (MM)am, conocido el esfuerzo estimado de desarrollo, (MM)d, es:";
 choices[53]= new Array();
 choices[53][0] = "(MM)am =1.8 (DSI) (MM)d";
 choices[53][1] = "(MM)am =2.0 (ADF) (MM)d";
 choices[53][2] = "(MM)am = 3.2(FSP) (MM)d";
 choices[53][3] = "(MM)am = 1.0 (ACT) (MM)d";
 answers[53] = choices[53][3];
 units[53] = "89";
 comments[53] = "Id Pregunta: 5080. Examen TIC A 2007";


//  Id pregunta: 5188 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[54]= new Array();
 choices[54][0] = "Estado, Comportamiento e Identidad";
 choices[54][1] = "Comportamiento, Identidad y Relaciones";
 choices[54][2] = "Estado, Identidad y Relaciones";
 choices[54][3] = "Todas son falsas";
 answers[54] = choices[54][0];
 units[54] = "82";
 comments[54] = "Id Pregunta: 5188. ";


//  Id pregunta: 5197 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n las clasificaci&oacute;n de Whitten, cu&aacute;les son los cuatro tipos de prototipos:";
 choices[55]= new Array();
 choices[55][0] = "Prototipos de Viabilidad, de Necesidad, de Dise&ntilde;o y de Validaci&oacute;n";
 choices[55][1] = "Prototipos de Viabilidad, de M&iacute;nimos, de Dise&ntilde;o y de Implantaci&oacute;n";
 choices[55][2] = "Prototipos de Viabilidad, de Necesidad, de Interfaz y de Implantaci&oacute;n";
 choices[55][3] = "Prototipos de Viabilidad, de Necesidad, de Dise&ntilde;o y de Implantaci&oacute;n";
 answers[55] = choices[55][3];
 units[55] = "85";
 comments[55] = "Id Pregunta: 5197. ";


//  Id pregunta: 5218 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  En qu&eacute; proceso no se utiliza la t&eacute;cnica de Diagrama de Clases";
 choices[56]= new Array();
 choices[56][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[56][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[56][2] = "Estudio de Viabilidad del Sistema";
 choices[56][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 answers[56] = choices[56][3];
 units[56] = "86";
 comments[56] = "Id Pregunta: 5218. NULL";


//  Id pregunta: 5246 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Seg&uacute;n Metrica v3, el Plan de Sistemas de Informaci&oacute;n";
 choices[57]= new Array();
 choices[57][0] = "Se compone de 9 actividades, que deben realizarse secuencialmente sin que ninguna de ellas pueda realizarse en paralelo";
 choices[57][1] = "Tiene por objeto obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que responda a los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[57][2] = "Define el programa general de actuaciones para la planificaci&oacute;n del desarrollo de los sistemas de informaci&oacute;n y su presupuestaci&oacute;n";
 choices[57][3] = "Todas las anteriores son correctas";
 answers[57] = choices[57][1];
 units[57] = "77";
 comments[57] = "Id Pregunta: 5246. ";


//  Id pregunta: 5251 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Dentro de la serie de normas ISO 9000:2000 NO se encuentra:";
 choices[58]= new Array();
 choices[58][0] = "ISO 9001:2000 Gesti&oacute;n de Calidad. Requisitos";
 choices[58][1] = "ISO 9002:2000. Fundamentos y vocabulario";
 choices[58][2] = "ISO 9004:2000. Recomendaciones para la mejora del desempe&ntilde;o.";
 choices[58][3] = "ISO 19011. Gu&iacute;a relativa gesti&oacute;n de calidad y gesti&oacute;n medioambiental";
 answers[58] = choices[58][1];
 units[58] = "87";
 comments[58] = "Id Pregunta: 5251. NULL";


//  Id pregunta: 5437 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[59][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[59][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[59][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[59] = choices[59][2];
 units[59] = "77";
 comments[59] = "Id Pregunta: 5437. Castilla y Le&oacute;n";


//  Id pregunta: 5534 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes no es una de las tres prioridades de i2010 (marco estrat&eacute;gico de la Comisi&oacute;n Europea para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n)? ";
 choices[60]= new Array();
 choices[60][0] = "Conseguir un espacio europeo &uacute;nico de la informaci&oacute;n, fomentando un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n";
 choices[60][1] = "El refuerzo de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n en las TIC";
 choices[60][2] = "Mejorar la prestaci&oacute;n de sevicios intraeuropeos mediante la utilizaci&oacute;n masiva de las TIC";
 choices[60][3] = "Una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que concede prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida";
 answers[60] = choices[60][2];
 units[60] = "30";
 comments[60] = "Id Pregunta: 5534. ";


//  Id pregunta: 5755 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de estos diagramas no es un diagrama de UML 2.0?";
 choices[61]= new Array();
 choices[61][0] = "Diagrama global de interacci&oacute;n";
 choices[61][1] = "Diagrama de colaboraci&oacute;n";
 choices[61][2] = "Diagrama de estructura compuesta";
 choices[61][3] = "Diagrama de tiempos";
 answers[61] = choices[61][1];
 units[61] = "82";
 comments[61] = "Id Pregunta: 5755. ";


//  Id pregunta: 6203 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Las fases componentes del ciclo de vida Rapid Application Development son:";
 choices[62]= new Array();
 choices[62][0] = "Cuatro: Planificaci&oacute;n de requerimientos, dise&ntilde;o con usuario, construcci&oacute;n, implantaci&oacute;n";
 choices[62][1] = "Siete: Planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n, pruebas e integraci&oacute;n, implantaci&oacute;n y aceptaci&oacute;n, mantenimiento";
 choices[62][2] = "Cuatro: Planificaci&oacute;n, an&aacute;lisis del riesgo, ingenier&iacute;a, evaluaci&oacute;n del cliente";
 choices[62][3] = "Cinco: Especificaci&oacute;n del producto, transformaci&oacute;n autom&aacute;tica, realizaci&oacute;n bucles iterativos, probar el producto, reajustar especificacones";
 answers[62] = choices[62][0];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6203. TICB-2009, bloque desarrollo";


//  Id pregunta: 6276 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;les son las fases por ciclo del modelo de ciclo de vida en espiral?";
 choices[63]= new Array();
 choices[63][0] = "Evaluaci&oacute;n, Planificaci&oacute;n, An&aacute;lisis de riesgos e Ingenier&iacute;a";
 choices[63][1] = "Planificaci&oacute;n, Ingenier&iacute;a, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 choices[63][2] = "Planificaci&oacute;n, An&aacute;lisis de riesgos, Ingenier&iacute;a y Evaluaci&oacute;n";
 choices[63][3] = "Ingenier&iacute;a, Planificaci&oacute;n, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 answers[63] = choices[63][2];
 units[63] = "76";
 comments[63] = "Id Pregunta: 6276. ";


//  Id pregunta: 6298 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l es la diferencia entre una clase y un objeto?";
 choices[64]= new Array();
 choices[64][0] = "Las clases son un concepto din&aacute;mico mientras que los objetos son entes est&aacute;ticos";
 choices[64][1] = "Ninguna, son lo mismo";
 choices[64][2] = "Las clases son un concepto est&aacute;ticos mientras que los objetos son entes din&aacute;micos";
 choices[64][3] = "Tanto las clases como los objetos son entes est&aacute;ticos definidos en el programa fuente";
 answers[64] = choices[64][2];
 units[64] = "82";
 comments[64] = "Id Pregunta: 6298. ";


//  Id pregunta: 6307 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; se entiende por acoplamiento en el contexto del dise&ntilde;o de un sistema transaccional?";
 choices[65]= new Array();
 choices[65][0] = "Indica el grado de interdependencia entre los m&oacute;dulos.";
 choices[65][1] = "Indica la relaci&oacute;n que existe entre los elementos de un mismo m&oacute;dulo.";
 choices[65][2] = "Indica c&oacute;mo se relacionan las entidades de datos del sistema.";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = choices[65][0];
 units[65] = "83";
 comments[65] = "Id Pregunta: 6307. ";


//  Id pregunta: 6618 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La actividad Verificaci&oacute;n y Aceptaci&oacute;n de la Arquitectura del Sistema seg&uacute;n M&eacute;trica:";
 choices[66]= new Array();
 choices[66][0] = "Se realiza en el proceso de Planificaci&oacute;n (PSI), despu&eacute;s de la Definici&oacute;n de la Arquitectura Tecnol&oacute;gica (PSI 7)";
 choices[66][1] = "Se realiza en el Estudio de Viabilidad, despu&eacute;s del Estudio de Alternativas de la Soluci&oacute;n (EVS 4)";
 choices[66][2] = "Se realiza en el proceso de An&aacute;lisis (ASI), despu&eacute;s del An&aacute;lisis de Consistencia (ASI 9)";
 choices[66][3] = "Se realiza en el proceso de Dise&ntilde;o (DSI), despu&eacute;s del Dise&ntilde;o de la Arqitectura de Soporte (DSI 2) y el Dise&ntilde;o F&iacute;sico de Datos (DSI 6)";
 answers[66] = choices[66][3];
 units[66] = "86";
 comments[66] = "Id Pregunta: 6618. NULL";


//  Id pregunta: 6626 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El modelo CMM de Ingenier&iacute;a de Software consta de:";
 choices[67]= new Array();
 choices[67][0] = "5 niveles, de los cuales todos se descomponen en &aacute;reas de procesos clave";
 choices[67][1] = "5 niveles, de los cuales todos excepto el nivel 1 se descomponen en &aacute;reas de procesos clave";
 choices[67][2] = "5 niveles, de los cuales todos excepto el nivel 5 se descomponen en &aacute;reas de procesos clave";
 choices[67][3] = "6 niveles que se descomponen en &aacute;reas de procesos clave y estas a su vez se organizan seg&uacute;n caracter&iacute;sticas comunes";
 answers[67] = choices[67][1];
 units[67] = "87";
 comments[67] = "Id Pregunta: 6626. NULL";


//  Id pregunta: 6646 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El nombre del modelo COCOMO se corresponde con:";
 choices[68]= new Array();
 choices[68][0] = "Constructive Cost Model";
 choices[68][1] = "Cost Control Model";
 choices[68][2] = "Comprehensive Cost Model";
 choices[68][3] = "Continuous Cost Model";
 answers[68] = choices[68][0];
 units[68] = "89";
 comments[68] = "Id Pregunta: 6646. NULL";


//  Id pregunta: 7309 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Indique cu&aacute;l de los siguientes es un lenguaje de marcado empleado en conversi&oacute;n texto-voz (TTS):";
 choices[69]= new Array();
 choices[69][0] = "TTSXML";
 choices[69][1] = "SVML";
 choices[69][2] = "SSML";
 choices[69][3] = "Todos son lenguajes de marcado utilizados en TTS";
 answers[69] = choices[69][2];
 units[69] = "94";
 comments[69] = "Id Pregunta: 7309. NULL";


//  Id pregunta: 7775 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;C&oacute;mo se llama la norma europea que recoge las especificaciones para la gesti&oacute;n de documentos electr&oacute;nicos de archivo?";
 choices[70]= new Array();
 choices[70][0] = " MoReq.";
 choices[70][1] = " IDABC.";
 choices[70][2] = " ISAD(G).";
 choices[70][3] = " EDMS.";
 answers[70] = choices[70][0];
 units[70] = "95";
 comments[70] = "Id Pregunta: 7775. Map 2005";


//  Id pregunta: 8336 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[71]= new Array();
 choices[71][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[71][1] = "Staffing Size.";
 choices[71][2] = "Catalogaci&oacute;n.";
 choices[71][3] = "Diagrama de Gantt.";
 answers[71] = choices[71][2];
 units[71] = "86";
 comments[71] = "Id Pregunta: 8336. Examen TIC A2 2010";


//  Id pregunta: 8338 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[72]= new Array();
 choices[72][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[72][1] = "PERT.";
 choices[72][2] = "CPM.";
 choices[72][3] = "El histograma de recursos.";
 answers[72] = choices[72][0];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8338. Examen TIC A2 2010";


//  Id pregunta: 8390 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Cuando un sistema se debe modificar para que contemple un cambio en las necesidades de los usuarios, se hace referencia al:";
 choices[73]= new Array();
 choices[73][0] = "Mantenimiento Correctivo.";
 choices[73][1] = "Mantenimiento Evolutivo.";
 choices[73][2] = "Mantenimiento Adaptativo.";
 choices[73][3] = "Mantenimiento Perfectivo.";
 answers[73] = choices[73][1];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8390. Examen TIC A2 2010";


//  Id pregunta: 8413 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes lenguajes NO es un lenguaje que sigue el modelo de orientaci&oacute;n a objetos basados en clases? ";
 choices[74]= new Array();
 choices[74][0] = "JavaScript.";
 choices[74][1] = "Java.";
 choices[74][2] = "C++.";
 choices[74][3] = "Eiffel.";
 answers[74] = choices[74][0];
 units[74] = "82, 84";
 comments[74] = "Id Pregunta: 8413. Examen TIC A2 2010";


//  Id pregunta: 8814 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de estos procesos de M&eacute;trica 3 contiene actividades diferentes dependiendo de si se trata de un desarrollo estructurado u orientado a objetos?";
 choices[75]= new Array();
 choices[75][0] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 choices[75][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[75][2] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[75][3] = "Ninguno de los anteriores";
 answers[75] = choices[75][1];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8814. Examen UPM A2 2011";


//  Id pregunta: 9046 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  C&uacute;al no es un interfaz en M&eacute;trica v3";
 choices[76]= new Array();
 choices[76][0] = "Gesti&oacute;n de la Configuraci&oacute;n";
 choices[76][1] = "Seguridad Integral";
 choices[76][2] = "Gesti&oacute;n del Cambio";
 choices[76][3] = "Aseguramiento de la Calidad";
 answers[76] = choices[76][2];
 units[76] = "86";
 comments[76] = "Id Pregunta: 9046. NULL";


//  Id pregunta: 9443 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[77]= new Array();
 choices[77][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[77][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[77][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[77][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[77] = choices[77][2];
 units[77] = "86";
 comments[77] = "Id Pregunta: 9443. Examen AGE TIC A1 2011";


//  Id pregunta: 9452 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Aquellas pruebas que se realizan en el entorno de desarrollo y tienen como objetivo verificar el funcionamiento global del sistema de informaci&oacute;n completo se denominan:";
 choices[78]= new Array();
 choices[78][0] = "Pruebas unitarias.";
 choices[78][1] = "Pruebas de integraci&oacute;n.";
 choices[78][2] = "Pruebas del sistema.";
 choices[78][3] = "Pruebas de implantaci&oacute;n.";
 answers[78] = choices[78][2];
 units[78] = "86";
 comments[78] = "Id Pregunta: 9452. Examen AGE TIC A1 2011";


//  Id pregunta: 9460 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es la cohesi&oacute;n de un m&oacute;dulo?:";
 choices[79]= new Array();
 choices[79][0] = "M&eacute;trica de la calidad del software directamente proporcional al n&uacute;mero de clases de un m&oacute;dulo.";
 choices[79][1] = "Relaci&oacute;n que existe entre elementos del mismo m&oacute;dulo.";
 choices[79][2] = "Fan-in.";
 choices[79][3] = "Fan-out.";
 answers[79] = choices[79][1];
 units[79] = "84";
 comments[79] = "Id Pregunta: 9460. NULL";


//  Id pregunta: 9489 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Las entrevistas son una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos. &iquest;Cu&aacute;l de las siguientes no es una fase de las mismas?";
 choices[80]= new Array();
 choices[80][0] = "Identificaci&oacute;n de candidatos";
 choices[80][1] = "Contacto con candidatos para fijar entrevista";
 choices[80][2] = "Preparaci&oacute;n";
 choices[80][3] = "Ejecuci&oacute;n de la entrevista";
 answers[80] = choices[80][1];
 units[80] = "78";
 comments[80] = "Id Pregunta: 9489. ";


//  Id pregunta: 9895 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En el mapeo objeto-relacional (ORM) en el que el objeto de dominio gestiona su propia persistencia se implementa el patr&oacute;n";
 choices[81]= new Array();
 choices[81][0] = "repositorio (repository pattern).";
 choices[81][1] = "registro activo (active record).";
 choices[81][2] = "mapeador de datos (data mapper).";
 choices[81][3] = "objeto de transferencia de datos (DTO, data transfer object pattern).";
 answers[81] = choices[81][1];
 units[81] = "84";
 comments[81] = "Id Pregunta: 9895. TIC A1, Examen 2013";


//  Id pregunta: 9936 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Se&ntilde;ale la respuesta INCORRECTA sobre patrones de dise&ntilde;o orientado a objetos.";
 choices[82]= new Array();
 choices[82][0] = "Facilitan el aprendizaje de las nuevas generaciones de dise&ntilde;adores condensando conocimiento ya existente.";
 choices[82][1] = "Imponen ciertas alternativas de dise&ntilde;o frente a otras.";
 choices[82][2] = "Permiten la creatividad inherente al proceso de dise&ntilde;o.";
 choices[82][3] = "Estandarizan el modo en que se realiza el dise&ntilde;o.";
 answers[82] = choices[82][1];
 units[82] = "84";
 comments[82] = "Id Pregunta: 9936. TIC A1, Examen 2013";


//  Id pregunta: 9956 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de las siguientes es una herramienta que ayuda a realizar seguimiento a los requisitos a lo largo del ciclo de vida del proyecto para asegurar que se est&aacute;n cumpliendo de manera eficaz?";
 choices[83]= new Array();
 choices[83][0] = "Cuestionarios";
 choices[83][1] = "Casos de uso.";
 choices[83][2] = "Matriz de trazabilidad de requisitos.";
 choices[83][3] = "Prototipos";
 answers[83] = choices[83][2];
 units[83] = "78";
 comments[83] = "Id Pregunta: 9956. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10182 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se califican como entidades d&eacute;biles aquellas cuya existencia no tiene sentido sin la existencia de la entidad regular de la que dependen. En relaci&oacute;n con las entidades d&eacute;biles y regulares, es falso que:";
 choices[84]= new Array();
 choices[84][0] = "La dependencia en existencia implica a su vez dependencia en identificaci&oacute;n";
 choices[84][1] = "La dependencia en existencia de una entidad d&eacute;bil respecto de una entidad regular supone que la entidad d&eacute;bil no dispone de suficientes atributos para formar su clave primaria. La entidad regular aporta la parte de clave que le falta a la entidad d&eacute;bil.";
 choices[84][2] = "Las relaciones de dependencia pueden surgir en interrelaciones con tipo de correspondencia 1:N o N:M";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][3];
 units[84] = "80";
 comments[84] = "Id Pregunta: 10182. ";


//  Id pregunta: 10488 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ale la respuesta correcta:";
 choices[85]= new Array();
 choices[85][0] = "Las personas pueden certificarse en las diversas opciones de  ITIL (Foundation, Intermediate, etc.) pero las empresas no, deben certificarse en la ISO 20000";
 choices[85][1] = "Las personas y empresas pueden certificarse en ITIL";
 choices[85][2] = "Las personas y empresas pueden certificase en la ISO 20000";
 choices[85][3] = "Las personas s&oacute;lo pueden certificarse en ITIL Foundation, las empresas en ITIL  Intermediate";
 answers[85] = choices[85][0];
 units[85] = "98";
 comments[85] = "Id Pregunta: 10488. NULL";


//  Id pregunta: 11057 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qu&eacute; rol de Scrum NO est&aacute; incluido dentro de los roles 'Cerdo'?";
 choices[86]= new Array();
 choices[86][0] = "ScrumMaster";
 choices[86][1] = "Product Owner";
 choices[86][2] = "ScrumTeam";
 choices[86][3] = "Stakeholders";
 answers[86] = choices[86][3];
 units[86] = "79";
 comments[86] = "Id Pregunta: 11057. Los Stakeholders se encuentran dentro del tipo de rol 'Gallina'";


//  Id pregunta: 11069 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes NO es una de las 4 Ps de la Estrategia seg&uacute;n ITIL?";
 choices[87]= new Array();
 choices[87][0] = "Perspectiva";
 choices[87][1] = "Posici&oacute;n";
 choices[87][2] = "Patr&oacute;n";
 choices[87][3] = "Todas son correctas";
 answers[87] = choices[87][3];
 units[87] = "98";
 comments[87] = "Id Pregunta: 11069. ";


//  Id pregunta: 11075 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El Gestor del Nivel de Servicio tiene la responsabilidad de asegurarse 1que los objetivos del Proceso de Gesti&oacute;n del Nivel de Servicio sean cumplidos. El Gestor del Nivel de Servicio NO es responsable de &hellip;";
 choices[88]= new Array();
 choices[88][0] = "Negociar y cerrar los Acuerdos de Nivel Operacionales. (OLA -Operation Level Agreement)";
 choices[88][1] = "Asegurar que todos los servicios no operacionales sean registrados dentro del Cat&aacute;logo de Servicios";
 choices[88][2] = "Negociar y acordar los Acuerdos de Nivel de Servicio (SLA - Service Level Agreement)";
 choices[88][3] = "Ayudar a la creaci&oacute;n del Cat&aacute;logo de Servicios y a mantenerlo actualizado";
 answers[88] = choices[88][1];
 units[88] = "98";
 comments[88] = "Id Pregunta: 11075. ";


//  Id pregunta: 11081 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  La MEJOR descripci&oacute;n de la prioridad de una Incidencia es&hellip;";
 choices[89]= new Array();
 choices[89][0] = "La importancia relativa de una Incidencia basada en su impacto y urgencia";
 choices[89][1] = "La velocidad con la que necesita ser resuelta la Incidencia";
 choices[89][2] = "El n&uacute;mero de personas que ser&aacute;n asignadas para trabajar en la Incidencia con el fin de que se resuelva dentro del plazo";
 choices[89][3] = "El camino de escalado que debe seguir para asegurar la resoluci&oacute;n de la Incidencia";
 answers[89] = choices[89][0];
 units[89] = "98";
 comments[89] = "Id Pregunta: 11081. ";


//  Id pregunta: 11289 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En un gestor documental t&iacute;pico &iquest;d&oacute;nde se realiza el almacenamiento?";
 choices[90]= new Array();
 choices[90][0] = "Los metadatos en el Sistema de Ficheros, los documentos en Base de Datos";
 choices[90][1] = "Los metadatos en Base de Datos, los documentos en el Sistema de Ficheros";
 choices[90][2] = "Metadatos y documentos se almacenan en Base de Datos";
 choices[90][3] = "Ninguna de las anteriores";
 answers[90] = choices[90][1];
 units[90] = "95";
 comments[90] = "Id Pregunta: 11289. ";


//  Id pregunta: 11340 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n con los diagramas de casos de uso, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[91]= new Array();
 choices[91][0] = "Las relaciones entre casos de uso y actores pueden ser de tipo usa o extiende";
 choices[91][1] = "Las relaciones s&oacute;lo pueden ser entre actores y casos de uso";
 choices[91][2] = "Los elementos principales son: casos de uso, relaciones, actores y extensiones";
 choices[91][3] = "M&eacute;trica no contempla su uso";
 answers[91] = choices[91][2];
 units[91] = "86";
 comments[91] = "Id Pregunta: 11340. ";


//  Id pregunta: 11380 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; etapa del ciclo de vida del servicio asegura que los m&eacute;todos de medici&oacute;n proporcionar&aacute;n las m&eacute;tricas necesarias para los servicios nuevos o modificados?";
 choices[92]= new Array();
 choices[92][0] = "Dise&ntilde;o del servicio";
 choices[92][1] = "Operaci&oacute;n del servicio";
 choices[92][2] = "Estrategia del servicio";
 choices[92][3] = "Entrega del servicio";
 answers[92] = choices[92][0];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11380. ";


//  Id pregunta: 11381 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas NO es un tipo de m&eacute;trica que se describe en la Mejora Continua del Servicio (CSI)?";
 choices[93]= new Array();
 choices[93][0] = "M&eacute;tricas del proceso";
 choices[93][1] = "M&eacute;tricas del servicio";
 choices[93][2] = "M&eacute;tricas de personal";
 choices[93][3] = "M&eacute;tricas tecnol&oacute;gicas";
 answers[93] = choices[93][2];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11381. ";


//  Id pregunta: 11402 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la descripci&oacute;n correcta de las cuatro Ps del Dise&ntilde;o del Servicio?";
 choices[94]= new Array();
 choices[94][0] = "Un proceso de cuatro pasos para el dise&ntilde;o de una gesti&oacute;n del servicio efectiva";
 choices[94][1] = "Una definici&oacute;n del personal y los productos requeridos para un dise&ntilde;o exitoso";
 choices[94][2] = "Una serie de preguntas que deben hacerse cuando se revisan las especificaciones de dise&ntilde;o";
 choices[94][3] = "Cuatro &aacute;reas principales que deben ser consideradas durante el Dise&ntilde;o del Servicio";
 answers[94] = choices[94][3];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11402. ";


//  Id pregunta: 11547 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes acciones NO es necesaria para implantar en una organizaci&oacute;n la Calidad Total?";
 choices[95]= new Array();
 choices[95][0] = "Lograr el compromiso de todos los niveles de direcci&oacute;n.";
 choices[95][1] = "Adoptar el Modelo CMMI.";
 choices[95][2] = "Formar en las t&eacute;cnicas y herramientas de la Calidad";
 choices[95][3] = "Son necesarias todas las acciones anteriores.";
 answers[95] = choices[95][1];
 units[95] = "87";
 comments[95] = "Id Pregunta: 11547. NULL";


//  Id pregunta: 11554 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El n&uacute;mero de l&iacute;neas de c&oacute;digo fuente de una aplicaci&oacute;n es una m&eacute;trica de estimaci&oacute;n del software de:";
 choices[96]= new Array();
 choices[96][0] = "Tama&ntilde;o, directa y objetiva.";
 choices[96][1] = "Producitividad, complejidad y objetiva.";
 choices[96][2] = "Complejidad y tama&ntilde;o.";
 choices[96][3] = "Tama&ntilde;o, directa y subjetiva.";
 answers[96] = choices[96][0];
 units[96] = "89";
 comments[96] = "Id Pregunta: 11554. NULL";


//  Id pregunta: 11631 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La metodolog&iacute;a OOSE fue desarrollada por:";
 choices[97]= new Array();
 choices[97][0] = "Booch";
 choices[97][1] = "Rumbaugh";
 choices[97][2] = "Jacobson";
 choices[97][3] = "Codd";
 answers[97] = choices[97][2];
 units[97] = "79";
 comments[97] = "Id Pregunta: 11631. ";


//  Id pregunta: 11639 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el modelo CMMI por etapas, el nivel 4 se corresponde con:";
 choices[98]= new Array();
 choices[98][0] = "Gestionado";
 choices[98][1] = "Gestionado cuantitativamente";
 choices[98][2] = "Definido";
 choices[98][3] = "Realizado";
 answers[98] = choices[98][1];
 units[98] = "87";
 comments[98] = "Id Pregunta: 11639. ";


//  Id pregunta: 11643 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En la versi&oacute;n de 2013 del modelo EFQM se introduce como nuevo concepto fundamental:";
 choices[99]= new Array();
 choices[99][0] = "Alcanzar el &eacute;xito mediante el talento de las personas";
 choices[99][1] = "Crear un futuro sostenible";
 choices[99][2] = "Gestionar con agilidad";
 choices[99][3] = "Aprovechar la creatividad y la innovaci&oacute;n";
 answers[99] = choices[99][2];
 units[99] = "92";
 comments[99] = "Id Pregunta: 11643. ";


