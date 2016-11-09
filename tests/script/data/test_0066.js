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

//  Id pregunta: 184 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[0]= new Array();
 choices[0][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[0][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[0][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[0][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[0] = choices[0][1];
 units[0] = "27";
 comments[0] = "Id Pregunta: 184. ";


//  Id pregunta: 260 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Hay muchas organizaciones diferentes de normalizaci&oacute;n, pero una de las siguientes no est&aacute; entre ellas. &iquest;Cu&aacute;l?:";
 choices[1]= new Array();
 choices[1][0] = "ISO ";
 choices[1][1] = "ANSI  ";
 choices[1][2] = "CEPT";
 choices[1][3] = "OSI";
 answers[1] = choices[1][3];
 units[1] = "42";
 comments[1] = "Id Pregunta: 260. ";


//  Id pregunta: 472 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Una ley de protecci&oacute;n de datos deber&aacute; responder a las siguientes cuestiones, excepto una, &iquest;cu&aacute;l?:";
 choices[2]= new Array();
 choices[2][0] = "&iquest;Qu&eacute; datos pueden ser recogidos?";
 choices[2][1] = "&iquest;C&oacute;mo pueden ser recogidos?";
 choices[2][2] = "&iquest;Cuando pueden ser recogidos?";
 choices[2][3] = "&iquest;Con qu&eacute; fin pueden ser recogidos?";
 answers[2] = choices[2][2];
 units[2] = "29";
 comments[2] = "Id Pregunta: 472. ";


//  Id pregunta: 491 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes se puede decir que no es una caracter&iacute;stica de los Benchmark?";
 choices[3]= new Array();
 choices[3][0] = "Pruebas entre productos de distintas compa&ntilde;&iacute;as";
 choices[3][1] = "Suelen basarse en el tiempo necesario para la ejecuci&oacute;n de un programa";
 choices[3][2] = "Metodolog&iacute;a para comparar distintos sistemas inform&aacute;ticos";
 choices[3][3] = "Una herramienta para la mejora de rendimiento de un sistema";
 answers[3] = choices[3][3];
 units[3] = "35";
 comments[3] = "Id Pregunta: 491. NULL";


//  Id pregunta: 592 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  El retraso de una actividad:";
 choices[4]= new Array();
 choices[4][0] = "supone un retraso siempre en el proyecto";
 choices[4][1] = "supondr&aacute; un retraso si no pertenece al camino cr&iacute;tico";
 choices[4][2] = "no supone retraso alguno si no pertenece al camino critico y la actividad no pasa a formar parte de este al alargar su duraci&oacute;n";
 choices[4][3] = "no supone retraso nunca";
 answers[4] = choices[4][2];
 units[4] = "28";
 comments[4] = "Id Pregunta: 592. ";


//  Id pregunta: 716 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  En el lenguaje Java, la misi&oacute;n del recolector de basura (garbage collector) es:";
 choices[5]= new Array();
 choices[5][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[5][1] = "En los que en otros entornos de programcaci&oacute;n se llama depurador o debugger";
 choices[5][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[5][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[5] = choices[5][0];
 units[5] = "60";
 comments[5] = "Id Pregunta: 716. Examen TIC MAP B 2004";


//  Id pregunta: 744 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Las aplicaciones Java son comprobadas:";
 choices[6]= new Array();
 choices[6][0] = "en tiempo de compilaci&oacute;n";
 choices[6][1] = "en tiempo de ejecuci&oacute;n";
 choices[6][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[6][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[6] = choices[6][2];
 units[6] = "60";
 comments[6] = "Id Pregunta: 744. Similar a examen TIC SS A 2003";


//  Id pregunta: 748 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En relaci&oacute;n con la huella digital y las funciones hash, se&ntilde;alar la opci&oacute;n falsa:";
 choices[7]= new Array();
 choices[7][0] = "Dos mensajes id&eacute;nticos, producen la misma huella";
 choices[7][1] = "Dada una huella es computacionalmente imposible encontrar un mensaje que produzca esa huella";
 choices[7][2] = "Si dos huellas son id&eacute;nticas, s&oacute;lo pueden haber sido originadas con el mismo mensaje";
 choices[7][3] = "Si dos huellas son id&eacute;nticas, pueden haber sido originadas por distintos mensajes con muy poca probabilidad";
 answers[7] = choices[7][2];
 units[7] = "72";
 comments[7] = "Id Pregunta: 748. Similar a examen TIC SS A 2003";


//  Id pregunta: 868 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un grupo de &aacute;reas de aplicaci&oacute;n de la inteligencia artifical?";
 choices[8]= new Array();
 choices[8][0] = "juegos, sistemas expertos, demostraci&oacute;n de teoremas";
 choices[8][1] = "lenguaje natural, razonamiento autom&aacute;tico, redes neuronales";
 choices[8][2] = "algoritmos gen&eacute;ticos, modelizaci&oacute;n del comportamiento humano, rob&oacute;tica";
 choices[8][3] = "todas son &aacute;reas de aplicaci&oacute;n de la inteligencia artificial";
 answers[8] = choices[8][3];
 units[8] = "63";
 comments[8] = "Id Pregunta: 868. ";


//  Id pregunta: 908 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Por qu&eacute; se dice que C es un lenguaje de nivel medio?";
 choices[9]= new Array();
 choices[9][0] = "porque su aprendizaje es de dificultad media respecto de otros m&aacute;s f&aacute;ciles o dif&iacute;ciles";
 choices[9][1] = "porque su funcionalidad es suficientemente buena aunque no es de los lenguajes que mayores funcionalidades presenta";
 choices[9][2] = "porque est&aacute; a medio camino entre la potencia y rapidez del lenguaje ensamblador y la funcionalidad del lenguaje natural";
 choices[9][3] = "porque sus programas tienen un tama&ntilde;o medio en comparaci&oacute;n con otros lenguajes de programas m&aacute;s simples y otros de programas muy complejos y largos";
 answers[9] = choices[9][2];
 units[9] = "82";
 comments[9] = "Id Pregunta: 908. ";


//  Id pregunta: 1009 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El control de la ejecuci&oacute;n de un programa JCL se realiza por medio de:";
 choices[10]= new Array();
 choices[10][0] = "El subsistema del control de trabajos del sistema operativo";
 choices[10][1] = "El cortafuegos";
 choices[10][2] = "El subsistema de seguridad Kerberos";
 choices[10][3] = "El filtro de paquetes IP";
 answers[10] = choices[10][0];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1009. ";


//  Id pregunta: 1200 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Javascript:";
 choices[11]= new Array();
 choices[11][0] = "Es una evoluci&oacute;n de Java, dise&ntilde;ada por Sun Microsystems, como lenguaje de script para el cliente";
 choices[11][1] = "Permite el acceso a bases de datos en el lado del cliente";
 choices[11][2] = "Es una evoluci&oacute;n de LiveScript";
 choices[11][3] = "Se utiliza para programar Applets en el cliente";
 answers[11] = choices[11][2];
 units[11] = "114,116";
 comments[11] = "Id Pregunta: 1200. ";


//  Id pregunta: 1568 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[12]= new Array();
 choices[12][0] = "Enrutamiento";
 choices[12][1] = "Asignaci&oacute;n de responsabilidades";
 choices[12][2] = "Generaci&oacute;n de formularios ";
 choices[12][3] = "Gesti&oacute;n de procedimiento";
 answers[12] = choices[12][2];
 units[12] = "71";
 comments[12] = "Id Pregunta: 1568. ";


//  Id pregunta: 1569 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l no es un modelo de extracci&oacute;n de datos en miner&iacute;a de datos?";
 choices[13]= new Array();
 choices[13][0] = " De verificaci&oacute;n.";
 choices[13][1] = " De descubrimiento.";
 choices[13][2] = "Jer&aacute;rquico.";
 choices[13][3] = "Predictivo.";
 answers[13] = choices[13][2];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1569. ";


//  Id pregunta: 1633 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l es un navegador propietario?";
 choices[14]= new Array();
 choices[14][0] = "Lynx";
 choices[14][1] = "Epiphany";
 choices[14][2] = "Firefox";
 choices[14][3] = "Internet Explorer";
 answers[14] = choices[14][3];
 units[14] = "62";
 comments[14] = "Id Pregunta: 1633. ";


//  Id pregunta: 1724 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  El estandar 1003.9 especifica:";
 choices[15]= new Array();
 choices[15][0] = "Extensiones para la seguridad";
 choices[15][1] = " Administraci&oacute;n del Sistema";
 choices[15][2] = " Lenguaje Fortran.";
 choices[15][3] = "Acceso transparente a archivos.";
 answers[15] = choices[15][2];
 units[15] = "53";
 comments[15] = "Id Pregunta: 1724. ";


//  Id pregunta: 1805 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  La iniciativa ADL (Advanced Distributed Learning) public&oacute; en el a&ntilde;o 2000 un modelo que trata de estandarizar los contenidos formativos digitales y que se conoce como";
 choices[16]= new Array();
 choices[16][0] = "SCORM";
 choices[16][1] = "B-Learning";
 choices[16][2] = "DFC";
 choices[16][3] = "ADL 2000";
 answers[16] = choices[16][0];
 units[16] = "66";
 comments[16] = "Id Pregunta: 1805. ";


//  Id pregunta: 1844 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[17]= new Array();
 choices[17][0] = "Incremento de la productividad";
 choices[17][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[17][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[17][3] = "Todas las anteriores son ciertas";
 answers[17] = choices[17][3];
 units[17] = "71";
 comments[17] = "Id Pregunta: 1844. ";


//  Id pregunta: 1940 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[18]= new Array();
 choices[18][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML";
 choices[18][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web";
 choices[18][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos";
 choices[18][3] = "CSS y XSL no pueden usarse en paralelo";
 answers[18] = choices[18][1];
 units[18] = "69";
 comments[18] = "Id Pregunta: 1940. NULL";


//  Id pregunta: 2018 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Con objeto de optimizar el modelo f&iacute;sico de datos y satisfacer los requisitos de rendimiento establecidos, &iquest;cu&aacute;l de las siguientes t&eacute;cnicas no deber&iacute;a utilizarse?";
 choices[19]= new Array();
 choices[19][0] = "Dividir entidades.";
 choices[19][1] = "Evitar el uso de encriptaci&oacute;n de datos.";
 choices[19][2] = "Combinar entidades si los accesos son frecuentes dentro de la misma transacci&oacute;n.";
 choices[19][3] = "Definir &iacute;ndices para permitir caminos de acceso alternativos.";
 answers[19] = choices[19][1];
 units[19] = "84";
 comments[19] = "Id Pregunta: 2018. Examen TIC MAP B 2004";


//  Id pregunta: 2093 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El par&aacute;metro m&aacute;s importante de un sistema en tiempo real es:";
 choices[20]= new Array();
 choices[20][0] = "La tasa de errores.";
 choices[20][1] = "El jitter.";
 choices[20][2] = "El retardo m&aacute;ximo.";
 choices[20][3] = "La velocidad de transmisi&oacute;n.";
 answers[20] = choices[20][2];
 units[20] = "83";
 comments[20] = "Id Pregunta: 2093. ";


//  Id pregunta: 2221 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Qu&eacute; variable utiliza COCOMO?:";
 choices[21]= new Array();
 choices[21][0] = "El n&uacute;mero de personas que intervienen en un proyectos";
 choices[21][1] = "N&uacute;mero de instrucciones en pseudoc&oacute;digo";
 choices[21][2] = "N&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[21][3] = "No se usan  las instrucciones de c&oacute;digo fuente porque var&iacute;an de un lenguaje a otro";
 answers[21] = choices[21][2];
 units[21] = "89";
 comments[21] = "Id Pregunta: 2221. NULL";


//  Id pregunta: 2283 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El modelo de ciclo de vida en espiral:";
 choices[22]= new Array();
 choices[22][0] = "No permite detectar errores en las primeras fases";
 choices[22][1] = "Se adapta bien a las metodolog&iacute;as orientadas a objetos";
 choices[22][2] = "Implica procedimientos separados para el desarrollo de los programas y su mantenimiento";
 choices[22][3] = "Tiende a pasar por alto los factores de riesgo";
 answers[22] = choices[22][1];
 units[22] = "76";
 comments[22] = "Id Pregunta: 2283. ";


//  Id pregunta: 2444 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las herramientas que incluyen componentes para la gesti&oacute;n de proyectos y la gesti&oacute;n de configuraci&oacute;n son las:";
 choices[23]= new Array();
 choices[23][0] = "L-CASE (Lower CASE)";
 choices[23][1] = "I-CASE (Integrated CASE)";
 choices[23][2] = "IPSE (Integrated Project Support Environment)";
 choices[23][3] = "CAST (Computer Aided Software Testing)";
 answers[23] = choices[23][2];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2444. NULL";


//  Id pregunta: 2496 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Se&ntilde;ale de las siguientes respuestas la que es una funci&oacute;n propia del responsable de producci&oacute;n y sistemas:";
 choices[24]= new Array();
 choices[24][0] = "Establecer los planes de pruebas de cada aplicaci&oacute;n";
 choices[24][1] = "Definir una metodolog&iacute;a para el desarrollo de aplicaciones";
 choices[24][2] = "Planificar y evaluar el crecimiento del almacenamiento de datos";
 choices[24][3] = "Establecer los procedimientos para la gesti&oacute;n de la organizaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "97";
 comments[24] = "Id Pregunta: 2496. NULL";


//  Id pregunta: 2529 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En relaci&oacute;n con las tecnolog&iacute;as de tratamiento de im&aacute;genes:";
 choices[25]= new Array();
 choices[25][0] = "En la norma CCITT (ahora UIT-T) grupo 4 se utiliza la t&eacute;cnica de la transformada discreta del coseno";
 choices[25][1] = "En la norma JPEG se emplea la t&eacute;cnica de compresi&oacute;n Huffman para generar la DCT";
 choices[25][2] = "La norma CCITT (ahora UIT-T) grupo 4 realiza una compresi&oacute;n sin perdida de la informaci&oacute;n y, por el contrario, la compresi&oacute;n JPEG produce p&eacute;rdida de informaci&oacute;n";
 choices[25][3] = "JPEG es una norma de compresi&oacute;n y descompresi&oacute;n de im&aacute;genes en movimiento";
 answers[25] = choices[25][2];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2529. NULL";


//  Id pregunta: 2558 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La cintoteca o armario ign&iacute;fugo debe colocarse en:";
 choices[26]= new Array();
 choices[26][0] = "El sotano";
 choices[26][1] = "Un sitio estable desde el punto de vista metereologico";
 choices[26][2] = "Pegado a la estructura del edificio";
 choices[26][3] = "No hace falta tener cuidado con su localizacion";
 answers[26] = choices[26][2];
 units[26] = "32";
 comments[26] = "Id Pregunta: 2558. ";


//  Id pregunta: 2621 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;C&uacute;al NO es un factor de McCall de revisi&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "Flexibilidad";
 choices[27][1] = "Usabilidad ";
 choices[27][2] = "Verificabilidad";
 choices[27][3] = "Mantenibilidad";
 answers[27] = choices[27][1];
 units[27] = "87,88,92";
 comments[27] = "Id Pregunta: 2621. ";


//  Id pregunta: 2717 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Uno de los pasos del modelo de ciclo de vida aplicado al desarrollo de software basado en componentes (DSBC) consiste en seleccionar los componentes seg&uacute;n su granularidad. &iquest;Qu&eacute; factores definen la granularidad de un componente?";
 choices[28]= new Array();
 choices[28][0] = "El tama&ntilde;o del componente.";
 choices[28][1] = "El tama&ntilde;o, la complejidad y la capacidad funcional del componente.";
 choices[28][2] = "La capacidad funcional del componente y su estructura de datos.";
 choices[28][3] = "El tama&ntilde;o, la fiabilidad, la complejidad y la mantenibilidad del componente.";
 answers[28] = choices[28][1];
 units[28] = "76";
 comments[28] = "Id Pregunta: 2717. ";


//  Id pregunta: 2880 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  En la matriz de puntuaci&oacute;n REDER, utilizada para puntuar las memorias de las organizaciones que se presentan al Premio Europeo de la Calidad, al subcriterio 7b se le asigna, del total de puntos correspondientes al criterio 7, el:";
 choices[29]= new Array();
 choices[29][0] = "0.1";
 choices[29][1] = "0.15";
 choices[29][2] = "0.2";
 choices[29][3] = "0.25";
 answers[29] = choices[29][3];
 units[29] = "92";
 comments[29] = "Id Pregunta: 2880. NULL";


//  Id pregunta: 2995 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  En un switch ethernet";
 choices[30]= new Array();
 choices[30][0] = "todos los puertos trabajan a la misma velocidad";
 choices[30][1] = "puede adaptarse a las distintas velocidades de los host conectados de manera autom&aacute;tica";
 choices[30][2] = "hace labores de enrutamiento a nivel wan";
 choices[30][3] = "sirve &uacute;nicamente para conectar redes ethernet con token ring";
 answers[30] = choices[30][1];
 units[30] = "102";
 comments[30] = "Id Pregunta: 2995. ";


//  Id pregunta: 3011 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  &iquest;A qu&eacute; se corresponden las siglas 802.11f sobre redes inal&aacute;mbricas?";
 choices[31]= new Array();
 choices[31][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[31][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[31][2] = "A especificaciones de Seguridad";
 choices[31][3] = "A especificiaciones de comunicaci&oacute;n entre puntos de acceso";
 answers[31] = choices[31][3];
 units[31] = "107";
 comments[31] = "Id Pregunta: 3011. Es una recomendaci&oacute;n que permite mayor compatibilidad. Usa el protocolo IAPP que permite a un usuario itinerante cambiarse de un punto de acceso a otro mientras est&aacute; en movimiento sin importar qu&eacute; marcas de puntos de acceso se usan en la red.";


//  Id pregunta: 3038 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de scripting?:";
 choices[32]= new Array();
 choices[32][0] = "JavaScript";
 choices[32][1] = "Jscript";
 choices[32][2] = "VBScript";
 choices[32][3] = "XMLScript";
 answers[32] = choices[32][3];
 units[32] = "114,115,116";
 comments[32] = "Id Pregunta: 3038. ";


//  Id pregunta: 3124 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;C&oacute;mo se denominan los 2 modos de utilizaci&oacute;n de IPSec?";
 choices[33]= new Array();
 choices[33][0] = "balanceado y no balanceado";
 choices[33][1] = "t&uacute;nel y abierto";
 choices[33][2] = "datagrama y transporte";
 choices[33][3] = "transporte y t&uacute;nel";
 answers[33] = choices[33][3];
 units[33] = "111";
 comments[33] = "Id Pregunta: 3124. NULL";


//  Id pregunta: 3430 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Indicar la afirmaci&oacute;n incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "Un Gateway (pasarelas&iacute;ncrono no permite a los usuarios de ordenadores personales acceder a grandes ordenadores (mainframes)";
 choices[34][1] = "Un Gateway SNA permite la conexi&oacute;n a grandes ordenadores con arquitectura de comunicaciones SNA (System Network Arquitecture)";
 choices[34][2] = "Un Gateway PAD X.25 permite a los usuarios de ordenadores personales acceder a grandes ordenadores (mainframes)";
 choices[34][3] = "Los Gateways est&aacute;n pensados para facilitar el acceso entre sistemas o entornos que soportan diferentes protocolos y operan en los niveles m&aacute;s altos del modelo de referencia OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 answers[34] = choices[34][0];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3430. ";


//  Id pregunta: 3737 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Los protocolos TP0 y TP2 de OSI est&aacute;n dise&ntilde;ados para redes de tipo A (fiables). &iquest;Cu&aacute;l de las siguentes afirmaciones es correcta?:";
 choices[35]= new Array();
 choices[35][0] = "TP0 no dispone de mecanismos de checksum y TP2 s&iacute;";
 choices[35][1] = "TP2 numera las TPDUs (Transport Protocolo Data Unit) y TP0 no";
 choices[35][2] = "En TP2 existen mecanismos de restablecimiento de la conexi&oacute;n mientras que en TP0 no";
 choices[35][3] = "Ambos permiten el multiplexado Ascendente (varias conexiones de transporte pueden usar la misma de red)";
 answers[35] = choices[35][1];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3737. NULL";


//  Id pregunta: 3752 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  MIME responde por:";
 choices[36]= new Array();
 choices[36][0] = "Multimedia Internet Mail Extensions";
 choices[36][1] = "Multimedia Information Mail Extensions";
 choices[36][2] = "Multipurpose Internet Mail Extensions";
 choices[36][3] = "Multipurpose Information Mail Extensions";
 answers[36] = choices[36][2];
 units[36] = "106";
 comments[36] = "Id Pregunta: 3752. ";


//  Id pregunta: 3960 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  La tecnolog&iacute;a GPRS est&aacute; definida para transmitir datos a una velocidad te&oacute;rica m&aacute;xima (troughput) de:";
 choices[37]= new Array();
 choices[37][0] = "171,2 Kbits/s";
 choices[37][1] = "115 Kbits/s";
 choices[37][2] = "21,4 Kbits/s";
 choices[37][3] = "15,6 Kbits/s";
 answers[37] = choices[37][0];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3960. ";


//  Id pregunta: 4054 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Un buen sistema de gesti&oacute;n de contrase&ntilde;as se caracteriza por";
 choices[38]= new Array();
 choices[38][0] = "El sistema, si procede, permitir&aacute; a los usuarios que seleccionen sus contrase&ntilde;as";
 choices[38][1] = "Las contrase&ntilde;as de los usuarios con m&aacute;s privilegios se cambiar&aacute;n con mayor frecuencia";
 choices[38][2] = "El sistema no mantendr&aacute; un registro de las &uacute;ltimas contrase&ntilde;as usadas, manteniendo s&oacute;lo la actual";
 choices[38][3] = "A y B son correctas";
 answers[38] = choices[38][3];
 units[38] = "111";
 comments[38] = "Id Pregunta: 4054. NULL";


//  Id pregunta: 4064 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[39]= new Array();
 choices[39][0] = "La defensa de los productos de las multinacionales";
 choices[39][1] = "Evitar que se pueda difundir el software libre";
 choices[39][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[39][3] = "La defensa de los derechos de los autores";
 answers[39] = choices[39][3];
 units[39] = "36";
 comments[39] = "Id Pregunta: 4064. ";


//  Id pregunta: 4086 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El formato para im&aacute;genes GIF";
 choices[40]= new Array();
 choices[40][0] = "Se basa en un algoritmo de compresi&oacute;n patentado, lo que te&oacute;ricamente limita su uso";
 choices[40][1] = "Significa Graphic Interleaved Format (Formato Gr&aacute;fico Entrelazado)";
 choices[40][2] = "Fue creado por Microsoft";
 choices[40][3] = "Ninguna de las anteriores es correcta";
 answers[40] = choices[40][0];
 units[40] = "114";
 comments[40] = "Id Pregunta: 4086. ";


//  Id pregunta: 4181 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Con el termino &quot;ventana de backup&quot; se define";
 choices[41]= new Array();
 choices[41][0] = "El espacio m&aacute;ximo disponible para un posible backup, dependiente de la capacidad de las cintas utilizadas";
 choices[41][1] = "La m&aacute;xima velocidad de transferencia de la cinta, que determina la duraci&oacute;n del mismo.";
 choices[41][2] = "El ancho de banda de la red de backup, que determina la duraci&oacute;n del mismo.";
 choices[41][3] = "El periodo de inactividad del sistema, que define el tiempo m&aacute;ximo disponible para realizar el backup.";
 answers[41] = choices[41][3];
 units[41] = "97";
 comments[41] = "Id Pregunta: 4181. NULL";


//  Id pregunta: 4189 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Para listar las conexiones TCP/UDP abiertas en un servidor utilizo el comando";
 choices[42]= new Array();
 choices[42][0] = "ping";
 choices[42][1] = "netstat";
 choices[42][2] = "tracert o traceroute";
 choices[42][3] = "ipconfig / ifconfig";
 answers[42] = choices[42][1];
 units[42] = "100";
 comments[42] = "Id Pregunta: 4189. ";


//  Id pregunta: 4404 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  La metodolog&iacute;a COBIT (Control Objetives for Information and related Technologies)...";
 choices[43]= new Array();
 choices[43][0] = "Sigue los principios de reingenier&iacute;a de negocios (BPR).";
 choices[43][1] = "Depende de la plataforma tecnol&oacute;gica.";
 choices[43][2] = "Presenta 4 dominios: planificaci&oacute;n, organizaci&oacute;n, adquisici&oacute;n e implementaci&oacute;n.";
 choices[43][3] = "Plantea como principal requisito de negocio de la informaci&oacute;n la modularidad.";
 answers[43] = choices[43][0];
 units[43] = "98";
 comments[43] = "Id Pregunta: 4404. NULL";


//  Id pregunta: 4463 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Respecto a los servicios Web, podemos afirmar que:";
 choices[44]= new Array();
 choices[44][0] = "WDSL define los criterios para los registros basados en Ia red.";
 choices[44][1] = "XML busca Ia definici&oacute;n y descripci&oacute;n de los servicios Web";
 choices[44][2] = "SOAP proporciona una manera estandar de transportar mensajes para el use de servicios Web";
 choices[44][3] = "UUID define un protocolo de comunicaci&oacute;n f&iacute;sica entre ordenadores.";
 answers[44] = choices[44][2];
 units[44] = "51";
 comments[44] = "Id Pregunta: 4463. NULL";


//  Id pregunta: 4490 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[45]= new Array();
 choices[45][0] = "900 MHz.";
 choices[45][1] = "2 GHz.";
 choices[45][2] = "11 GHz.";
 choices[45][3] = "5 GHz";
 answers[45] = choices[45][1];
 units[45] = "108";
 comments[45] = "Id Pregunta: 4490. ";


//  Id pregunta: 4688 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de la siguientes afirmaciones es falsa?";
 choices[46]= new Array();
 choices[46][0] = " El protocolo IPv6 admite direcciones en IPv4";
 choices[46][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[46][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[46][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[46] = choices[46][1];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4688. Examen 2006 JCYL";


//  Id pregunta: 4697 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Los sistemas colaborativos buscan";
 choices[47]= new Array();
 choices[47][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[47][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n.";
 choices[47][2] = " Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto.";
 choices[47][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n.";
 answers[47] = choices[47][2];
 units[47] = "21";
 comments[47] = "Id Pregunta: 4697. Examen 2006 JCYL";


//  Id pregunta: 4807 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[48]= new Array();
 choices[48][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (InternationalTelecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el partelef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logramediante el empleo de unos filtros denominados &quot;splitters&quot;";
 choices[48][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrier-lessAmplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos deestandarizaci&oacute;n se decantaron por esta &uacute;ltima";
 choices[48][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5,que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access)";
 choices[48][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &quot;G.Lite&quot; o &quot;ADSL Lite&quot; es una variante de ADSL queproporciona menor caudal, pero tiene la ventaja de no requerir splitters";
 answers[48] = choices[48][2];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4807. NULL";


//  Id pregunta: 4855 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, frecuencias o canales radioel&eacute;ctricos no adecuada al correspondiente plan de utilizaci&oacute;n del espectro radioel&eacute;ctrico o al Cuadro Nacional de Atribuci&oacute;n de Frecuencia:";
 choices[49]= new Array();
 choices[49][0] = "Es una infracci&oacute;n muy grave";
 choices[49][1] = "Es una infracci&oacute;n grave";
 choices[49][2] = "Es una infracci&oacute;n leve";
 choices[49][3] = "No es una infracci&oacute;n";
 answers[49] = choices[49][0];
 units[49] = "110";
 comments[49] = "Id Pregunta: 4855. ";


//  Id pregunta: 4879 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Seg&uacute;n se establece en la Gu&iacute;a de Certificaci&oacute;n para Sistemas de e-Learning basados en Web de AICC (Aviation Industry Computer-based Training Committee), &iquest;cu&aacute;l es la longitud m&aacute;xima de la URL (Uniform Resource Locator)de arranque de una unidad de asignaci&oacute;n en caracteres?";
 choices[50]= new Array();
 choices[50][0] = "64";
 choices[50][1] = "128";
 choices[50][2] = "256";
 choices[50][3] = "1024";
 answers[50] = choices[50][2];
 units[50] = "66";
 comments[50] = "Id Pregunta: 4879. ";


//  Id pregunta: 4930 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  En la metodolog&iacute;a M&eacute;trica V3, la especificaci&oacute;n del Plan de Pruebas se inicia en el proceso denominado:";
 choices[51]= new Array();
 choices[51][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[51][1] = "Estudio de Viabilidad del Sistema.";
 choices[51][2] = "Dise&ntilde;o de Sistema de Informaci&oacute;n.";
 choices[51][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "86";
 comments[51] = "Id Pregunta: 4930. Examen TIC B 2007";


//  Id pregunta: 4936 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Dentro de la t&eacute;cnica de desarrollo de sistemas de informaci&oacute;n denominada Diagrama de Interacci&oacute;n, el periodo de tiempo en el cual el objeto se encuentra ejecutando alguna operaci&oacute;n en un diagrama de secuencia se denomina:";
 choices[52]= new Array();
 choices[52][0] = "L&iacute;nea de vida.";
 choices[52][1] = "Foco de control.";
 choices[52][2] = "Tiempo de latencia.";
 choices[52][3] = "Per&iacute;odo de acci&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "84";
 comments[52] = "Id Pregunta: 4936. Examen TIC B 2007";


//  Id pregunta: 4941 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  El objetivo en la evaluaci&oacute;n del dise&ntilde;o deber&aacute; ser:";
 choices[53]= new Array();
 choices[53][0] = "M&iacute;nimo acoplamiento posible y cohesi&oacute;n baja.";
 choices[53][1] = "M&aacute;ximo acoplamiento posible y cohesi&oacute;n baja.";
 choices[53][2] = "M&aacute;ximo acoplamiento posible y cohesi&oacute;n alta o media.";
 choices[53][3] = "M&iacute;nimo acoplamiento posible y cohesi&oacute;n alta o media.";
 answers[53] = choices[53][3];
 units[53] = "84";
 comments[53] = "Id Pregunta: 4941. Examen TIC B 2007";


//  Id pregunta: 5003 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En el proceso RUP (&quot;Rational Unified Process&quot;):";
 choices[54]= new Array();
 choices[54][0] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de actividades, productos intermedios, perfilesde trabajo o roles y flujos de trabajo";
 choices[54][1] = "La dimensi&oacute;n est&aacute;tica del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos";
 choices[54][2] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos";
 choices[54][3] = "En la dimensi&oacute;n est&aacute;tica, cada ciclo se compone de cuatro fases secuenciales (comienzo, elaboraci&oacute;n,construcci&oacute;n y transici&oacute;n)";
 answers[54] = choices[54][2];
 units[54] = "76";
 comments[54] = "Id Pregunta: 5003. Examen TIC A 2007";


//  Id pregunta: 5093 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Los algoritmos de autenticaci&oacute;n y firma utilizados en el DNI se basan en:";
 choices[55]= new Array();
 choices[55][0] = "Cuatro pares de claves RSA";
 choices[55][1] = "Dos pares de claves DES";
 choices[55][2] = "Dos pares de claves DSA";
 choices[55][3] = "Dos pares de claves RSA";
 answers[55] = choices[55][3];
 units[55] = "74";
 comments[55] = "Id Pregunta: 5093. NULL";


//  Id pregunta: 5095 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, NO es un requisito de los proveedores de servicios de certificaci&oacute;n que expiden certificados reconocidos:";
 choices[56]= new Array();
 choices[56][0] = "Comprobar debidamente, de conformidad con el Derecho nacional, la identidad y, si procede, cualesquiera atributos espec&iacute;ficos de la persona a la que se expide un certificado reconocido";
 choices[56][1] = "Utilizar sistemas y productos fiables que est&eacute;n protegidos contra toda alteraci&oacute;n y que garanticen la seguridad t&eacute;cnica y criptogr&aacute;fica de los procedimientos con que trabajan";
 choices[56][2] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el proveedor de servicios de certificaci&oacute;n ha prestado servicios de gesti&oacute;n de claves";
 choices[56][3] = "Disponer de recursos econ&oacute;micos suficientes para operar de conformidad con lo dispuesto en la presente Directiva, en particular para afrontar el riesgo de responsabilidad por da&ntilde;os y perjuicios, por ejemplo contratando un seguro apropiado";
 answers[56] = choices[56][2];
 units[56] = "30";
 comments[56] = "Id Pregunta: 5095. Directiva 1999/93/CE, Anexo II";


//  Id pregunta: 5188 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[57]= new Array();
 choices[57][0] = "Estado, Comportamiento e Identidad";
 choices[57][1] = "Comportamiento, Identidad y Relaciones";
 choices[57][2] = "Estado, Identidad y Relaciones";
 choices[57][3] = "Todas son falsas";
 answers[57] = choices[57][0];
 units[57] = "82";
 comments[57] = "Id Pregunta: 5188. ";


//  Id pregunta: 5626 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  De los siguientes ataques, cu&aacute;l se corresponde con la obtenci&oacute;n de informaci&oacute;n de una red sin modificar la informaci&oacute;n ";
 choices[58]= new Array();
 choices[58][0] = "Explot";
 choices[58][1] = "Snooping";
 choices[58][2] = "Wardriving";
 choices[58][3] = "Teardrop";
 answers[58] = choices[58][1];
 units[58] = "111";
 comments[58] = "Id Pregunta: 5626. NULL";


//  Id pregunta: 5833 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[59]= new Array();
 choices[59][0] = "Hub";
 choices[59][1] = "Puente";
 choices[59][2] = "NIC (Network Interface Card)";
 choices[59][3] = "Router";
 answers[59] = choices[59][3];
 units[59] = "102";
 comments[59] = "Id Pregunta: 5833. MAP 2008 A1";


//  Id pregunta: 5844 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l era clasificado por CISCO como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace";
 choices[60]= new Array();
 choices[60][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol)";
 choices[60][1] = "IGRP (Interior Gateway Routing Protocol)";
 choices[60][2] = "OSPF (Open Shortest Path First)";
 choices[60][3] = "RIPv2 (Routing Information Protocol ver. 2)";
 answers[60] = choices[60][0];
 units[60] = "102";
 comments[60] = "Id Pregunta: 5844. MAP 2008 A1";


//  Id pregunta: 5911 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  Los fabricantes e investigadores hacen referencia a diversos factores determinantes en la calidad de la trasmisi&oacute;n de la voz; de entre los siguientes, determine el &quot;cr&iacute;tico&quot; para aplicaciones de tiempo real como la voz y el video sobre IP:";
 choices[61]= new Array();
 choices[61][0] = "Jitter";
 choices[61][1] = "Throughput";
 choices[61][2] = "Delay";
 choices[61][3] = "Packet Loss";
 answers[61] = choices[61][0];
 units[61] = "109";
 comments[61] = "Id Pregunta: 5911. MAP 2008 A1";


//  Id pregunta: 5965 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; norma espa&ntilde;ola es la vigente de &quot;Tecnolog&iacute;as de la Informaci&oacute;n. T&eacute;cnicas de seguridad. Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n (SGSI). Requisitos&quot;?";
 choices[62]= new Array();
 choices[62][0] = "UNE 71502:2004";
 choices[62][1] = "UNE-ISO/IEC 27001:2007";
 choices[62][2] = "UNE 17799:2000";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][1];
 units[62] = "42";
 comments[62] = "Id Pregunta: 5965. Castilla La Mancha 2009";


//  Id pregunta: 6047 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El programa marco de la UE para la innovaci&oacute;n y competitividad se denomina:";
 choices[63]= new Array();
 choices[63][0] = "eTEN";
 choices[63][1] = "IDA";
 choices[63][2] = "CIP";
 choices[63][3] = "Ninguna de las respuestas es correcta";
 answers[63] = choices[63][2];
 units[63] = "103";
 comments[63] = "Id Pregunta: 6047. ";


//  Id pregunta: 6077 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;En qu&eacute; fase del proyecto es mayor el nivel de coste y de personal?";
 choices[64]= new Array();
 choices[64][0] = "Al inicio del proyecto.";
 choices[64][1] = "Al final del proyecto.";
 choices[64][2] = "En las fases intermedias del proyecto.";
 choices[64][3] = "Tanto el coste como el personal debe ser homog&eacute;neo a lo largo del proyecto.";
 answers[64] = choices[64][2];
 units[64] = "27";
 comments[64] = "Id Pregunta: 6077. ";


//  Id pregunta: 6162 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Indique cual de las siguientes no es una funci&oacute;n de los gatekeepers:";
 choices[65]= new Array();
 choices[65][0] = "Control del Ancho de Banda.";
 choices[65][1] = "Rechazo de llamadas seg&uacute;n distintos criterios.";
 choices[65][2] = "Control de comunicaci&oacute;n con MCUs o gateways.";
 choices[65][3] = "Comunicaci&oacute;n con redes de conmutaci&oacute;n de circuitos.";
 answers[65] = choices[65][3];
 units[65] = "117";
 comments[65] = "Id Pregunta: 6162. ";


//  Id pregunta: 6348 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; es MySpace?";
 choices[66]= new Array();
 choices[66][0] = "Una red social";
 choices[66][1] = "Un servicio FTP";
 choices[66][2] = "Un servicio de mensajer&iacute;a instant&aacute;nea";
 choices[66][3] = "Un escritorio virtual";
 answers[66] = choices[66][0];
 units[66] = "120";
 comments[66] = "Id Pregunta: 6348. NULL";


//  Id pregunta: 6386 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[67]= new Array();
 choices[67][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[67][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[67][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[67][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 6386. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6471 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Indique cu&aacute;l de los siguientes enunciados sobre principios y conceptos fundamentales del Dise&ntilde;o del Software es FALSO:";
 choices[68]= new Array();
 choices[68][0] = "Los principios del dise&ntilde;o s&oacute;lo sirven de gu&iacute;a al ingeniero del software al principio del proceso de dise&ntilde;o. Los conceptos de dise&ntilde;o no proporcionan los criterios b&aacute;sicos para la calidad del dise&ntilde;o.";
 choices[68][1] = "La modularidad (tanto en el programa como en los datos) y el concepto de abstracci&oacute;n permiten que el dise&ntilde;ador simplifique y reutilice los componentes del software.";
 choices[68][2] = "El refinamiento proporciona un mecanismo para representar sucesivas capas de datos funcionales.";
 choices[68][3] = "La ocultaci&oacute;n de informaci&oacute;n y la independencia funcional proporcionan la heur&iacute;stica para conseguir una modularidad efectiva.";
 answers[68] = choices[68][0];
 units[68] = "84";
 comments[68] = "Id Pregunta: 6471. Castilla La Mancha 2009";


//  Id pregunta: 7251 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El protocolo FTP es un protocolo:";
 choices[69]= new Array();
 choices[69][0] = "Seguro";
 choices[69][1] = "No orientado a conexi&oacute;n";
 choices[69][2] = "De nivel de aplicaci&oacute;n";
 choices[69][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[69] = choices[69][2];
 units[69] = "100";
 comments[69] = "Id Pregunta: 7251. Examen TIC B 2009";


//  Id pregunta: 7881 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   El protocolo IPv6 (Internet Protocol version 6";
 choices[70]= new Array();
 choices[70][0] = "Tiene direcciones de red de 64 bits de longitud.";
 choices[70][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento (routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header).";
 choices[70][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menos campos. Esto hace que, por lo general, los routers (encaminadores) realicen menos procesamiento sobre los datagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente.";
 choices[70][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes.";
 answers[70] = choices[70][2];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7881. Map 2006";


//  Id pregunta: 8037 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   &iquest;Cu&aacute;l es el m&iacute;nimo n&uacute;mero de discos necesario para un sistema RAID 0+1?";
 choices[71]= new Array();
 choices[71][0] = " 2.";
 choices[71][1] = " 3.";
 choices[71][2] = " 4.";
 choices[71][3] = " 5.";
 answers[71] = choices[71][2];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 8037. Map 2007";


//  Id pregunta: 8400 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Respeto a los c&oacute;mputos de plazos, la ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, dispone que:";
 choices[72]= new Array();
 choices[72][0] = "Se consideran h&aacute;biles los 365 d&iacute;as del a&ntilde;o, debiendo estar operativos los registros 365x24.";
 choices[72][1] = "Cada sede electr&oacute;nica en la que est&eacute; disponible un registro electr&oacute;nico determinar&aacute;, atendiendo al &aacute;mbito territorial en el que ejerece sus competencias el titular de aquella, los d&iacute;as que se considerar&aacute;n inh&aacute;biles";
 choices[72][2] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, con excepci&oacute;n de las fiestas de la Constituci&oacute;n, Navidad, y A&ntilde;o nuevo. ";
 choices[72][3] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, excepto aquellos en que en el Registro se hagan labores de mantenimiento inform&aacute;tico que impidan su servicio ";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 8400. Examen TIC A2 2010";


//  Id pregunta: 8433 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Uno de los problemas m&aacute;s serios que se pueden presentar en un ambiente de concurrencia es el &ldquo;abrazo mortal&rdquo; (deadlock), el cu&aacute;l se produce cuando se presentan al mismo tiempo 4 condiciones necesarias. &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[73]= new Array();
 choices[73][0] = "Condici&oacute;n de no apropiaci&oacute;n";
 choices[73][1] = "Condici&oacute;n de espera circular";
 choices[73][2] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[73][3] = "Condici&oacute;n de espera ocupada";
 answers[73] = choices[73][3];
 units[73] = "52";
 comments[73] = "Id Pregunta: 8433. ";


//  Id pregunta: 8668 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[74]= new Array();
 choices[74][0] = "Capa IP";
 choices[74][1] = "Capa de Aplicaci&oacute;n";
 choices[74][2] = "Capa de Sesi&oacute;n";
 choices[74][3] = "Capa de Transporte";
 answers[74] = choices[74][0];
 units[74] = "111";
 comments[74] = "Id Pregunta: 8668. Examen UPM A2 2011";


//  Id pregunta: 8749 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[75]= new Array();
 choices[75][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[75][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[75][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[75][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[75] = choices[75][1];
 units[75] = "43";
 comments[75] = "Id Pregunta: 8749. Examen TIC A2 2010 interna";


//  Id pregunta: 8814 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de estos procesos de M&eacute;trica 3 contiene actividades diferentes dependiendo de si se trata de un desarrollo estructurado u orientado a objetos?";
 choices[76]= new Array();
 choices[76][0] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 choices[76][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[76][2] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[76][3] = "Ninguno de los anteriores";
 answers[76] = choices[76][1];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8814. Examen UPM A2 2011";


//  Id pregunta: 8940 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[77]= new Array();
 choices[77][0] = "El &oacute;rgano titular de la sede";
 choices[77][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[77][2] = "Los dos anteriores";
 choices[77][3] = "Ninguno de los anteriores";
 answers[77] = choices[77][3];
 units[77] = "43";
 comments[77] = "Id Pregunta: 8940. ";


//  Id pregunta: 8990 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  El est&aacute;ndar de telefon&iacute;a m&oacute;vil LTE (Long Term Evolution), emplea";
 choices[78]= new Array();
 choices[78][0] = "MIMO";
 choices[78][1] = "FDD";
 choices[78][2] = "TDD";
 choices[78][3] = "Todas las anteriores";
 answers[78] = choices[78][3];
 units[78] = "107";
 comments[78] = "Id Pregunta: 8990. NULL";


//  Id pregunta: 9019 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[79]= new Array();
 choices[79][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[79][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[79][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[79][3] = "Ninguna de las anteriores";
 answers[79] = choices[79][1];
 units[79] = "99";
 comments[79] = "Id Pregunta: 9019. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9219 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es LUN Masking?";
 choices[80]= new Array();
 choices[80][0] = "La cabina presenta una LUN a un servidor y este puede acceder.";
 choices[80][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[80][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSCI.";
 choices[80][3] = "Todos son v&aacute;lidas";
 answers[80] = choices[80][3];
 units[80] = "48";
 comments[80] = "Id Pregunta: 9219. ";


//  Id pregunta: 9230 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Desde el punto de vista interno el sistema operativo puede concebirse como:";
 choices[81]= new Array();
 choices[81][0] = "un interfaz entre los programas de aplicaci&oacute;n y la m&aacute;quina pura.";
 choices[81][1] = "gestor de recursos.";
 choices[81][2] = "coordinador del funcionamiento de los recursos de c&oacute;mputo y de entrada y salida.";
 choices[81][3] = "B) y C) son correctas.";
 answers[81] = choices[81][3];
 units[81] = "52";
 comments[81] = "Id Pregunta: 9230. ";


//  Id pregunta: 9332 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Respecto a la tecnologia";
 choices[82]= new Array();
 choices[82][0] = "Dense WDM soporta menos canales que Coarse WDM y se usa en distancias mas cortas.";
 choices[82][1] = "Coarse WDM utiliza luz muy direccional para aprovechar el bajo numero de canales";
 choices[82][2] = "Dense WDM y Coarse WDM son tecnologias no interoperables";
 choices[82][3] = "Coarse WDM alcanza distancias de 1000 km";
 answers[82] = choices[82][2];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9332. Corregida la respuesta A.";


//  Id pregunta: 9467 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En lo referente a la mensajer&iacute;a en Internet indique la afirmaci&oacute;n falsa:";
 choices[83]= new Array();
 choices[83][0] = "MIME se desarrolla en los RFCs 2045 a 2049";
 choices[83][1] = "Si un servidor que no soporta extensiones SMTP recibe un mensaje HELO, devuelve un error de sintaxis al emisor SMTP, quien deber&aacute; enviar en su lugar un mensaje de tipo EHLO";
 choices[83][2] = "El RFC 1870 permite a un receptor especificar el tama&ntilde;o m&aacute;ximo de mensaje que puede recibir";
 choices[83][3] = "El protocolo SMTP se apoya en el sistema de resoluci&oacute;n de nombres de dominio de Internet";
 answers[83] = choices[83][1];
 units[83] = "106";
 comments[83] = "Id Pregunta: 9467. ";


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


//  Id pregunta: 9618 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cuantos atributos tiene un archivo en el sistema de ficheros NTFS?";
 choices[85]= new Array();
 choices[85][0] = "9";
 choices[85][1] = "11";
 choices[85][2] = "13";
 choices[85][3] = "15";
 answers[85] = choices[85][2];
 units[85] = "56";
 comments[85] = "Id Pregunta: 9618. ";


//  Id pregunta: 9624 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)   Indique cual de las siguientes ediciones no corresponde a Windows Server 2012 ";
 choices[86]= new Array();
 choices[86][0] = "Bussiness";
 choices[86][1] = "Essentials";
 choices[86][2] = "Foundation";
 choices[86][3] = "Standard";
 answers[86] = choices[86][0];
 units[86] = "56";
 comments[86] = "Id Pregunta: 9624. Examen TIC A1 2013";


//  Id pregunta: 10152 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[87]= new Array();
 choices[87][0] = "se crea en el RD 1671/2009 (art. 15) ";
 choices[87][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[87][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[87][3] = "Todas las anteriores son ciertas";
 answers[87] = choices[87][3];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10152. ";


//  Id pregunta: 10343 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[88][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[88][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[88][3] = "Todas las respuestas anteriores son falsas";
 answers[88] = choices[88][2];
 units[88] = "36";
 comments[88] = "Id Pregunta: 10343. Consultar Art. 100 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10569 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  La probabilidad de explosi&oacute;n por escape de gas en una f&aacute;brica es de 0'0001. Si llega a producirse se sabe que morir&aacute;n al menos diez empleados y se producir&aacute;n p&eacute;rdidas materiales por al menos de 100 millones de euros. &iquest;Cu&aacute;l es riesgo cuantitativo asociado a la amenaza de explosi&oacute;n?";
 choices[89]= new Array();
 choices[89][0] = "10000 euros";
 choices[89][1] = "100 millones de euros";
 choices[89][2] = "No se puede valorar porque la p&eacute;rdida de vidas humanas no es cuantificable (salvo para las compa&ntilde;&iacute;as de seguros)";
 choices[89][3] = "Muy alto";
 answers[89] = choices[89][2];
 units[89] = "33";
 comments[89] = "Id Pregunta: 10569. ";


//  Id pregunta: 10759 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Plan de Adecuaci&oacute;n del Esquema Nacional de Seguridad&quot;?";
 choices[90]= new Array();
 choices[90][0] = "CCN-STIC-803";
 choices[90][1] = "CCN-STIC-805";
 choices[90][2] = "CCN-STIC-806";
 choices[90][3] = "CCN-STIC-807";
 answers[90] = choices[90][2];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10759. ";


//  Id pregunta: 10760 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; serie CCN-STIC establece las pol&iacute;ticas y procedimientos adecuados para la implementaci&oacute;n de las medidas contempladas en el Esquema Nacional de Seguridad?";
 choices[91]= new Array();
 choices[91][0] = "500";
 choices[91][1] = "600";
 choices[91][2] = "700";
 choices[91][3] = "800";
 answers[91] = choices[91][3];
 units[91] = "43";
 comments[91] = "Id Pregunta: 10760. ";


//  Id pregunta: 11055 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes NO es una Metodolog&iacute;a &Aacute;gil?";
 choices[92]= new Array();
 choices[92][0] = "XP";
 choices[92][1] = "Kanban";
 choices[92][2] = "FDD";
 choices[92][3] = "Todas son metodolog&iacute;as &aacute;giles";
 answers[92] = choices[92][3];
 units[92] = "79";
 comments[92] = "Id Pregunta: 11055. ";


//  Id pregunta: 11292 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de un gestor documental?";
 choices[93]= new Array();
 choices[93][0] = "Creaci&oacute;n";
 choices[93][1] = "Redifusi&oacute;n";
 choices[93][2] = "Expurgo";
 choices[93][3] = "Todas lo son";
 answers[93] = choices[93][1];
 units[93] = "95";
 comments[93] = "Id Pregunta: 11292. ";


//  Id pregunta: 11326 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/99, el encargado del tratamiento es:";
 choices[94]= new Array();
 choices[94][0] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada previa certificaci&oacute;n por la AEPD";
 choices[94][1] = "Persona f&iacute;sica, ya sea trabajador de una entidad p&uacute;blica, en cuyo caso ser&aacute; un funcionario o privada";
 choices[94][2] = "Persona f&iacute;sica, jur&iacute;dica o  entidad sin personalidad jur&iacute;dica, p&uacute;blica o privada, servicio o cualquier otro organismo";
 choices[94][3] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada, servicio o cualquier otro organismo";
 answers[94] = choices[94][3];
 units[94] = "29";
 comments[94] = "Id Pregunta: 11326. ";


//  Id pregunta: 11335 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Respecto del modelo EFQM, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[95]= new Array();
 choices[95][0] = "Contempla entre los agentes facilitadores los siguientes: Liderazgo; Personas; Pol&iacute;ticas y Estrategias;";
 choices[95][1] = "La autoevaluaci&oacute;n del modelo no permite extraer puntos fuertes y &aacute;reas de mejora";
 choices[95][2] = "Contempla cuatro tipos de resultados:  en las Personas; Clientes; en la Sociedad y resultados Clave. Los resultados no son consecuencia de los agentes facilitadores";
 choices[95][3] = "El premio europeo a la calidad es quinquenal";
 answers[95] = choices[95][0];
 units[95] = "92";
 comments[95] = "Id Pregunta: 11335. ";


//  Id pregunta: 11337 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cu&aacute;l de los siguientes es un m&eacute;todo din&aacute;mico de rentabilidad de inversiones";
 choices[96]= new Array();
 choices[96][0] = "Tasa de rendimiento contable";
 choices[96][1] = "&Iacute;ndice de rentabilidad";
 choices[96][2] = "Rentabilidad media";
 choices[96][3] = "Pay-back";
 answers[96] = choices[96][1];
 units[96] = "38";
 comments[96] = "Id Pregunta: 11337. ";


//  Id pregunta: 11650 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El protocolo TCP se encuentra especificado en:";
 choices[97]= new Array();
 choices[97][0] = "RFC 793";
 choices[97][1] = "RFC 739";
 choices[97][2] = "RFC 791";
 choices[97][3] = "RFC 719";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11650. ";


//  Id pregunta: 11697 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l no es una caracteristica de PPP?";
 choices[98]= new Array();
 choices[98][0] = "Se puede usar en circuitos anal&oacute;gicos";
 choices[98][1] = "solo soporta IP";
 choices[98][2] = "es capaz de encapsular varios protocolos";
 choices[98][3] = "Proporciona correcci&oacute;n de errores";
 answers[98] = choices[98][1];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11697. NULL";


//  Id pregunta: 11724 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[99]= new Array();
 choices[99][0] = "WEP";
 choices[99][1] = "PSK";
 choices[99][2] = "EAP";
 choices[99][3] = "WPA";
 answers[99] = choices[99][3];
 units[99] = "107";
 comments[99] = "Id Pregunta: 11724. NULL";


