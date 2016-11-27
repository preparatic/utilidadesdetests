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


//  Id pregunta: 908 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Por qu&eacute; se dice que C es un lenguaje de nivel medio?";
 choices[1]= new Array();
 choices[1][0] = "porque su aprendizaje es de dificultad media respecto de otros m&aacute;s f&aacute;ciles o dif&iacute;ciles";
 choices[1][1] = "porque su funcionalidad es suficientemente buena aunque no es de los lenguajes que mayores funcionalidades presenta";
 choices[1][2] = "porque est&aacute; a medio camino entre la potencia y rapidez del lenguaje ensamblador y la funcionalidad del lenguaje natural";
 choices[1][3] = "porque sus programas tienen un tama&ntilde;o medio en comparaci&oacute;n con otros lenguajes de programas m&aacute;s simples y otros de programas muy complejos y largos";
 answers[1] = choices[1][2];
 units[1] = "82";
 comments[1] = "Id Pregunta: 908. ";


//  Id pregunta: 1983 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l no es una innovaci&oacute;n aplicable al modelo en cascada que permita mejorar algunas de las deficiencias del modelo y aumentar su eficacia?:";
 choices[2]= new Array();
 choices[2][0] = "Utilizaci&oacute;n de herramientas CASE";
 choices[2][1] = "Codificaci&oacute;n y pruebas de los m&oacute;dulos de m&aacute;s bajo nivel en primer lugar";
 choices[2][2] = "Realizaci&oacute;n de fases en paralelo";
 choices[2][3] = "Utilizar t&eacute;cnicas de an&aacute;lisis de riesgos y de coste-beneficio";
 answers[2] = choices[2][1];
 units[2] = "76";
 comments[2] = "Id Pregunta: 1983. ";


//  Id pregunta: 1990 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; significa OMG?:";
 choices[3]= new Array();
 choices[3][0] = "Organization Military  Government";
 choices[3][1] = "Object Manual Gestion";
 choices[3][2] = "Oriented Method Gestion";
 choices[3][3] = "Object Management Group";
 answers[3] = choices[3][3];
 units[3] = "82";
 comments[3] = "Id Pregunta: 1990. ";


//  Id pregunta: 1998 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En cuanto a los sistemas f&iacute;sicos, en un plan de sistemas se valorar&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "Coherencia con la estructura de la organizaci&oacute;n";
 choices[4][1] = "Coherencia con el modelo de estructura inform&aacute;tica";
 choices[4][2] = "Condicionamientos financieros";
 choices[4][3] = "Todas las opciones anteriores son ciertas";
 answers[4] = choices[4][3];
 units[4] = "77";
 comments[4] = "Id Pregunta: 1998. ";


//  Id pregunta: 2008 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Se desea desarrollar un proyecto con programaci&oacute;n orientada a objetos en el que va a ser necesario utilizar herencia m&uacute;ltiple. &iquest;Qu&eacute; lenguaje no vamos a poder usar?";
 choices[5]= new Array();
 choices[5][0] = "Python.";
 choices[5][1] = "C++.";
 choices[5][2] = "Eiffel.";
 choices[5][3] = "Smalltalk.";
 answers[5] = choices[5][3];
 units[5] = "84";
 comments[5] = "Id Pregunta: 2008. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2023 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  De acuerdo con el modelo Staffing Size, en un desarrollo orientado a objetos:";
 choices[6]= new Array();
 choices[6][0] = "El porcentaje de clases clave oscila entre el 20% y el 40%; el resto suelen ser clases secundarias.";
 choices[6][1] = "El porcentaje de clases clave nunca debe superar el 5% del total de clases.";
 choices[6][2] = "El porcentaje de clases clave debe ser superior al 75% para garantizar la robustez del proyecto.";
 choices[6][3] = "No deben existir clases secundarias.";
 answers[6] = choices[6][0];
 units[6] = "82,84";
 comments[6] = "Id Pregunta: 2023. Examen TIC MAP B 2004";


//  Id pregunta: 2025 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Son lenguajes que al menos en sus &uacute;ltimos est&aacute;ndares soportan la programaci&oacute;n orientada a objetos:";
 choices[7]= new Array();
 choices[7][0] = "C++, COBOL, FORTRAN, Ada.";
 choices[7][1] = "Java, Lisp, Algol, Eiffel.";
 choices[7][2] = "C++, Java, Eiffel, Smalltalk.";
 choices[7][3] = "C++, Smalltalk, Eiffel, REXX.";
 answers[7] = choices[7][2];
 units[7] = "82,84";
 comments[7] = "Id Pregunta: 2025. Examen TIC MAP B 2004";


//  Id pregunta: 2055 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?";
 choices[8]= new Array();
 choices[8][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico";
 choices[8][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico";
 choices[8][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico; se realiza de forma conjunta";
 choices[8][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o f&iacute;sico";
 answers[8] = choices[8][0];
 units[8] = "79";
 comments[8] = "Id Pregunta: 2055. Pregunta Junta Andalucia - A";


//  Id pregunta: 2061 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[9]= new Array();
 choices[9][0] = "Eficiencia";
 choices[9][1] = "Correspondencia";
 choices[9][2] = "Eficacia";
 choices[9][3] = "Capacidad";
 answers[9] = choices[9][2];
 units[9] = "77";
 comments[9] = "Id Pregunta: 2061. ";


//  Id pregunta: 2069 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[10]= new Array();
 choices[10][0] = "la programaci&oacute;n funcional";
 choices[10][1] = "El acoplamiento d&eacute;bil";
 choices[10][2] = "La ocultaci&oacute;n de la implementacion";
 choices[10][3] = "el polimorfismo";
 answers[10] = choices[10][0];
 units[10] = "82";
 comments[10] = "Id Pregunta: 2069. ";


//  Id pregunta: 2086 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes funciones no es importante para un sistema operativo de tiempo real?";
 choices[11]= new Array();
 choices[11][0] = "Manejo eficaz de interrupciones.";
 choices[11][1] = "Gran manejo de memoria virtual.";
 choices[11][2] = "Mecanismos potentes y vers&aacute;tiles de comunicaci&oacute;n entre procesos.";
 choices[11][3] = "Funciones sencillas, &aacute;giles y potentes para el manejo de ficheros.";
 answers[11] = choices[11][1];
 units[11] = "83";
 comments[11] = "Id Pregunta: 2086. ";


//  Id pregunta: 2100 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En un sistema de tiempo real, la captura de est&iacute;mulos del entorno por el sistema se puede llevar  cabo por comprobaci&oacute;n de los dispositivos sensores cada cierto intervalo de tiempo. Esta t&eacute;cnica se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Muestreo o 'polling'.";
 choices[12][1] = "Tiempo real cr&iacute;tico.";
 choices[12][2] = "Interrupci&oacute;n.";
 choices[12][3] = "Tiempo real no cr&iacute;tico.";
 answers[12] = choices[12][0];
 units[12] = "83";
 comments[12] = "Id Pregunta: 2100. ";


//  Id pregunta: 2129 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[13]= new Array();
 choices[13][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados";
 choices[13][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones";
 choices[13][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad";
 choices[13][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones";
 answers[13] = choices[13][2];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2129. ";


//  Id pregunta: 2130 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[14]= new Array();
 choices[14][0] = "Los diagramas de secuencia muestran interacciones entre elementos desde el punto de vista temporal";
 choices[14][1] = "Los diagramas de estados-transiciones visualizan aut&oacute;matas de estados finitos";
 choices[14][2] = "La notaci&oacute;n UML proviene de la fusi&oacute;n de las notaciones Booch, OMT, OOSE y otras";
 choices[14][3] = "Todas las anteriores respuestas son ciertas";
 answers[14] = choices[14][3];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2130. ";


//  Id pregunta: 2135 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la m&aacute;s importante para un buen analista?:";
 choices[15]= new Array();
 choices[15][0] = "Capacidad de comprensi&oacute;n de conceptos abstractos";
 choices[15][1] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[15][2] = "Habilidad para evitar que 'los &aacute;rboles no dejen ver el bosque'";
 choices[15][3] = "Habilidad para relacionar aplicaciones hardware/software en el entorno usuario";
 answers[15] = choices[15][2];
 units[15] = "80";
 comments[15] = "Id Pregunta: 2135. ";


//  Id pregunta: 2162 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indicar la afirmaci&oacute;n falsa sobre dise&ntilde;o estructurado:";
 choices[16]= new Array();
 choices[16][0] = "Se define el concepto del dise&ntilde;o estructurado como el proceso de definici&oacute;n de la arquitectura software: componentes, m&oacute;dulos, interfaces, procedimientos de prueba y datos de un sistema que se crean para satisfacer unos requisitos especificados.";
 choices[16][1] = "Podemos entender por cohesi&oacute;n la caracter&iacute;stica que presenta un m&oacute;dulo perteneciente a una aplicaci&oacute;n de ejecutar una tarea &uacute;nica y bien definida, encadenada a otras en una secuencia concreta para constituir un procedimiento dentro del logical.";
 choices[16][2] = "Por oposici&oacute;n al concepto de cohesi&oacute;n, que es una medida de la coherencia y/o complejidad funcional interna de un m&oacute;dulo, encontramos el acoplamiento, como medida de la complejidad externa del mismo de acuerdo a sus interfaces.";
 choices[16][3] = "Todas las respuestas anteriores son verdaderas.";
 answers[16] = choices[16][3];
 units[16] = "84";
 comments[16] = "Id Pregunta: 2162. ";


//  Id pregunta: 2177 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La diferencia entre el an&aacute;lisis y el dise&ntilde;o en la orientaci&oacute;n a objetos es:";
 choices[17]= new Array();
 choices[17][0] = "La transici&oacute;n es tan natural que realmente no hay transici&oacute;n.";
 choices[17][1] = "La transici&oacute;n la marca el momento en que se empiezan a construir objetos.";
 choices[17][2] = "El dise&ntilde;o empieza cuando comienzan a conectarse las clases.";
 choices[17][3] = "El an&aacute;lisis debe definir los objetos en el dominio del problema y el dise&ntilde;o define los objetos en el dominio de la soluci&oacute;n.";
 answers[17] = choices[17][3];
 units[17] = "82,84";
 comments[17] = "Id Pregunta: 2177. ";


//  Id pregunta: 2192 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;les son los objetivos del dise&ntilde;o estructurado?";
 choices[18]= new Array();
 choices[18][0] = "M&aacute;xima portabilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, integraci&oacute;n del sistema.";
 choices[18][1] = "M&aacute;xima portabilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, modularizaci&oacute;n del sistema.";
 choices[18][2] = "M&aacute;xima inteligibilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, modularizaci&oacute;n del sistema.";
 choices[18][3] = "M&aacute;xima inteligibilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, integraci&oacute;n del sistema.";
 answers[18] = choices[18][3];
 units[18] = "84";
 comments[18] = "Id Pregunta: 2192. ";


//  Id pregunta: 2214 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; modelo de desarrollo de software tiene como caracter&iacute;stica convertir autom&aacute;ticamente una especificaci&oacute;n formal en un programa que satisfaga dicha especificaci&oacute;n?:";
 choices[19]= new Array();
 choices[19][0] = "Modelo en espiral";
 choices[19][1] = "Modelo evolutivo";
 choices[19][2] = "Modelo de lenguaje de especificaci&oacute;n formal";
 choices[19][3] = "Modelo de transformaci&oacute;n";
 answers[19] = choices[19][3];
 units[19] = "76";
 comments[19] = "Id Pregunta: 2214. ";


//  Id pregunta: 2241 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  CODE-AND-FIX:";
 choices[20]= new Array();
 choices[20][0] = "Es un modelo en cascada";
 choices[20][1] = "Es una t&eacute;cnica que se usa mucho en la Administraci&oacute;n";
 choices[20][2] = "Es equivalente a METRICA";
 choices[20][3] = "No resulta muy pr&aacute;ctico";
 answers[20] = choices[20][3];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2241. ";


//  Id pregunta: 2244 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  De acuerdo con el proceso de descomposici&oacute;n o explosi&oacute;n por niveles de los DFD's (Diagramas de Flujo de Datos) el primer nivel es el denominado:";
 choices[21]= new Array();
 choices[21][0] = "Diagrama del sistema";
 choices[21][1] = "Diagrama de contexto";
 choices[21][2] = "Diagrama de procesos primitivos";
 choices[21][3] = "Diagrama de top-down";
 answers[21] = choices[21][1];
 units[21] = "81";
 comments[21] = "Id Pregunta: 2244. ";


//  Id pregunta: 2245 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Del modelo clasico de ciclo de vida en cascada puede afirmarse que:";
 choices[22]= new Array();
 choices[22][0] = "El usuario valida el resultado de cada una de las fases";
 choices[22][1] = "Proporciona resultados parciales para validaci&oacute;n de requisitos";
 choices[22][2] = "Est&aacute; regido por la documentaci&oacute;n, que marca la transici&oacute;n entre fases";
 choices[22][3] = "Est&aacute; dirigido por el riesgo";
 answers[22] = choices[22][2];
 units[22] = "76";
 comments[22] = "Id Pregunta: 2245. ";


//  Id pregunta: 2256 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Dentro del Plan de Sistemas se encuentra el dise&ntilde;o del sistema de informaci&oacute;n en el que se encuadran una serie de actividades. Indicar qu&eacute; actividad de las que a continuaci&oacute;n se relacionan debe excluirse de este contexto:";
 choices[23]= new Array();
 choices[23][0] = "Determinaci&oacute;n de la estructura de la organizaci&oacute;n inform&aacute;tica";
 choices[23][1] = "Determinaci&oacute;n de la carga de procesos batch";
 choices[23][2] = "Determinaci&oacute;n de la metodolog&iacute;a a emplear en el desarrollo de las aplicaciones";
 choices[23][3] = "Determinaci&oacute;n de los propietarios de los diferentes conjuntos de datos";
 answers[23] = choices[23][0];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2256. ";


//  Id pregunta: 2264 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El contenido de un plan de sistemas se puede estructurar en un conjunto de proyectos entre los que podemos destacar como fundamentales:";
 choices[24]= new Array();
 choices[24][0] = "Sistemas f&iacute;sicos, l&oacute;gicos, de comunicaciones y de seguridad";
 choices[24][1] = "Estudio, racionalizaci&oacute;n y dise&ntilde;o de la organizaci&oacute;n, instalaciones, dise&ntilde;o del sistema de informaci&oacute;n y presupuesto";
 choices[24][2] = "Organizaci&oacute;n y personal, formaci&oacute;n, implantaci&oacute;n y explotaci&oacute;n, calendario";
 choices[24][3] = "Todas las anteriores respuestas son correctas";
 answers[24] = choices[24][3];
 units[24] = "77";
 comments[24] = "Id Pregunta: 2264. ";


//  Id pregunta: 2269 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de:";
 choices[25]= new Array();
 choices[25][0] = "La planificaci&oacute;n operativa";
 choices[25][1] = "El control anal&iacute;tico del gasto";
 choices[25][2] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[25][3] = "La previsi&oacute;n de beneficios";
 answers[25] = choices[25][0];
 units[25] = "77";
 comments[25] = "Id Pregunta: 2269. ";


//  Id pregunta: 2281 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  El modelo de cascada&hellip;:";
 choices[26]= new Array();
 choices[26][0] = "Es una evoluci&oacute;n del modelo por etapas";
 choices[26][1] = "Se conoce como el &quot;modelo antiguo&quot;";
 choices[26][2] = "Es similar al iterativo";
 choices[26][3] = "No admite realimentaci&oacute;n entre etapas";
 answers[26] = choices[26][0];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2281. ";


//  Id pregunta: 2289 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El modelo en espiral del ciclo de vida presenta alguna dificultades como son:";
 choices[27]= new Array();
 choices[27][0] = "Depender en exceso de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[27][1] = "Ajustar su aplicabilidad para el caso del software contratado";
 choices[27][2] = "Necesidad de una elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[27][3] = "Todas las anteriores son dificultades del modelo en espiral";
 answers[27] = choices[27][3];
 units[27] = "76";
 comments[27] = "Id Pregunta: 2289. ";


//  Id pregunta: 2295 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El objetivo del modelo conceptual es:";
 choices[28]= new Array();
 choices[28][0] = "Establecer una visi&oacute;n global de los datos";
 choices[28][1] = "Establecer el detalle de las propiedades";
 choices[28][2] = "Definir las propiedades de cada entidad";
 choices[28][3] = "Definir el flujo de informaci&oacute;n";
 answers[28] = choices[28][0];
 units[28] = "80";
 comments[28] = "Id Pregunta: 2295. ";


//  Id pregunta: 2348 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En un DFD el elemento usado para representar una actividad que transforma los flujos de entrada en otros de salida es:";
 choices[29]= new Array();
 choices[29][0] = "El programa";
 choices[29][1] = "El proceso";
 choices[29][2] = "El nodo";
 choices[29][3] = "La entidad";
 answers[29] = choices[29][1];
 units[29] = "81";
 comments[29] = "Id Pregunta: 2348. ";


//  Id pregunta: 2363 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Entre los elementos de un diagrama de flujo de datos tenemos:";
 choices[30]= new Array();
 choices[30][0] = "Entidad externa, proceso, almac&eacute;n de datos y diagrama general";
 choices[30][1] = "Entidad externa, almac&eacute;n de datos y flujo de datos";
 choices[30][2] = "Entidad externa, almac&eacute;n de datos, proceso y flujo de datos";
 choices[30][3] = "Almac&eacute;n de datos, proceso, flujo de datos y diagrama general";
 answers[30] = choices[30][2];
 units[30] = "81";
 comments[30] = "Id Pregunta: 2363. ";


//  Id pregunta: 2429 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La planificaci&oacute;n de un proyecto inform&aacute;tico debe permitir responder a las preguntas:";
 choices[31]= new Array();
 choices[31][0] = "&iquest;Qu&eacute; tareas hay que realizar, qui&eacute;n debe realizarlas, cu&aacute;ndo se deben realizar?";
 choices[31][1] = "&iquest;Qui&eacute;nes son los miembros del proyecto, cu&aacute;l es su jerarqu&iacute;a, a qu&eacute; unidades pertenecen?";
 choices[31][2] = "&iquest;Qui&eacute;n es el responsable del proyecto, cu&aacute;ntas personas van a participar, cu&aacute;l es su formaci&oacute;n?";
 choices[31][3] = "&iquest;Qui&eacute;nes son los proveedores, cu&aacute;l es su experiencia, de cu&aacute;ntos empleados disponen?";
 answers[31] = choices[31][0];
 units[31] = "77";
 comments[31] = "Id Pregunta: 2429. ";


//  Id pregunta: 2431 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La propuesta del ciclo de vida en espiral se ha realizado para superar determinados problemas del modelo en cascada. Entre estos:";
 choices[32]= new Array();
 choices[32][0] = "Identificar factores de riesgo y resolverlos antes de implementar fases m&aacute;s conocidas";
 choices[32][1] = "Utilizar prototipos desechables antes de comenzar un desarrollo en cascada";
 choices[32][2] = "Supone la repetici&oacute;n cada vez con mayor nivel de detalle del modelo en cascada";
 choices[32][3] = "Es un modelo en cascada completo de prototipado r&aacute;pido para la fase de an&aacute;lisis y especificaci&oacute;n de requisitos";
 answers[32] = choices[32][0];
 units[32] = "76";
 comments[32] = "Id Pregunta: 2431. ";


//  Id pregunta: 2445 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Las metodolog&iacute;as:";
 choices[33]= new Array();
 choices[33][0] = "Definen el conjunto de elementos del mundo real que intervienen en el sistema y son modelizables";
 choices[33][1] = "Emplean formalismos gr&aacute;ficos para derivar los procedimientos y recursos";
 choices[33][2] = "Emplean t&eacute;cnicas de auditor&iacute;a como fuente de integraci&oacute;n de prototipos";
 choices[33][3] = "Existen dos enfoques: en los m&eacute;todos aqu&eacute;llos que se orientan hacia los datos y aquellos que se orientan hacia los tratamientos";
 answers[33] = choices[33][3];
 units[33] = "79";
 comments[33] = "Id Pregunta: 2445. ";


//  Id pregunta: 2452 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Los almacenes de datos, en un DFD:";
 choices[34]= new Array();
 choices[34][0] = "pueden conectarse directamente con los terminadores, sin necesitar procesos intermedios";
 choices[34][1] = "por convenio, si el flujo hacia/desde el almac&eacute;n es etiquetado, se supone que representa a parte del registro ";
 choices[34][2] = "aparecen desde el DFD de nivel 0 para dar importancia a los datos sobre los procesos que los manejan";
 choices[34][3] = "son modificados tanto en la lectura como en la escritura de datos";
 answers[34] = choices[34][1];
 units[34] = "81";
 comments[34] = "Id Pregunta: 2452. ";


//  Id pregunta: 2470 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  No es un tipo de cohesi&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Logica.";
 choices[35][1] = "Temporal.";
 choices[35][2] = "Funcional.";
 choices[35][3] = "Por estampado.";
 answers[35] = choices[35][3];
 units[35] = "84";
 comments[35] = "Id Pregunta: 2470. ";


//  Id pregunta: 2487 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Sea una interrelaci&oacute;n 1:N entre dos entidades A y B. Si para toda ocurrencia de A pueden existir, o no, una o varias ocurrencias de B asociadas, y para una ocurrencia de B existe una ocurrencia de A asociada, se dice que esta interrelaci&oacute;n es:";
 choices[36]= new Array();
 choices[36][0] = "Obligatoria en A y opcional en B";
 choices[36][1] = "Obligatoria en B y opcional en A";
 choices[36][2] = "Obligatoria en ambos extremos";
 choices[36][3] = "Opcional en ambos extremos";
 answers[36] = choices[36][1];
 units[36] = "80";
 comments[36] = "Id Pregunta: 2487. ";


//  Id pregunta: 2633 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Qu&eacute; relaci&oacute;n hay entre usuarios y actores en la t&eacute;cnica de los casos de uso?";
 choices[37]= new Array();
 choices[37][0] = "Un usuario se identifica &uacute;nicamente con un actor";
 choices[37][1] = "Un usuario solamente puede ser varios actores";
 choices[37][2] = "Un actor solamente puede ser varios usuarios";
 choices[37][3] = "Un actor puede ser varios usuarios y un usuario varios actores";
 answers[37] = choices[37][3];
 units[37] = "78,84";
 comments[37] = "Id Pregunta: 2633. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2634 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  El  prototipado de sistemas de informaci&oacute;n, seg&uacute;n M&eacute;trica V3.";
 choices[38]= new Array();
 choices[38][0] = "Tiene como objetivo elaborar un modelo o maqueta de las interfaces entre el sistema y el usuario para evaluar el rendimiento y funcionalidad del sistema.";
 choices[38][1] = "Es la t&eacute;cnica principal para obtener un cat&aacute;logo de requisitos del usuario de forma alternativa a la obtenida en la fase del an&aacute;sis del sistema.";
 choices[38][2] = "Es una pr&aacute;ctica cuyo aspecto clave es la identificaci&oacute;n de los usuarios a los que va a dirigir, teniendo en cuenta que debe responder a diferentes individualidades, con distintos conocimientos y habilidades.";
 choices[38][3] = "Se debe centrar en las funciones fundamentales, ignorando aquellos atributos relacionados con el aspecto est&eacute;tico como son el color y el sonido y en general todo aspecto vidual del sistema";
 answers[38] = choices[38][2];
 units[38] = "85,86";
 comments[38] = "Id Pregunta: 2634. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2646 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[39]= new Array();
 choices[39][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[39][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[39][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[39][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[39] = choices[39][2];
 units[39] = "58,80";
 comments[39] = "Id Pregunta: 2646. ";


//  Id pregunta: 2723 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En cuanto al modelo en cascada:";
 choices[40]= new Array();
 choices[40][0] = "Es un modelo lineal que no considera la realimentaci&oacute;n";
 choices[40][1] = "Es tambi&eacute;n conocido como modelo en espiral";
 choices[40][2] = "No hace &eacute;nfasis en la documentaci&oacute;n";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][3];
 units[40] = "76";
 comments[40] = "Id Pregunta: 2723. ";


//  Id pregunta: 2732 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a que cubra el desarrollo de planes de sistemas de informaci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "M&eacute;trica";
 choices[41][1] = "Racines";
 choices[41][2] = "Method 1";
 choices[41][3] = "Eclipse";
 answers[41] = choices[41][3];
 units[41] = "77";
 comments[41] = "Id Pregunta: 2732. ";


//  Id pregunta: 2740 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[42]= new Array();
 choices[42][0] = "Caja blanca";
 choices[42][1] = "Caja negra";
 choices[42][2] = "Integraci&oacute;n";
 choices[42][3] = "Aceptaci&oacute;n";
 answers[42] = choices[42][0];
 units[42] = "79";
 comments[42] = "Id Pregunta: 2740. ";


//  Id pregunta: 2766 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  En el dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes definiciones se ajusta mejor al concepto de 'cohesi&oacute;n l&oacute;gica'?";
 choices[43]= new Array();
 choices[43][0] = "Un mismo m&oacute;dulo realiza varias tareas, las cuales tienen entre ellas una relaci&oacute;n d&eacute;bil, ya sea funcional o de otro tipo.";
 choices[43][1] = "Cuando todas las tareas efectuadas por el m&oacute;dulo se alimentan de una estructura de datos com&uacute;n.";
 choices[43][2] = "El m&oacute;dulo realiza un procedimiento completo o una secuencia de tareas del mismo tales que deben realizarse en un orden preciso y el resultado de una tarea se utiliza para el comienzo de la siguiente.";
 choices[43][3] = "Ninguna de las anteriores definiciones es correcta.";
 answers[43] = choices[43][3];
 units[43] = "84";
 comments[43] = "Id Pregunta: 2766. ";


//  Id pregunta: 4240 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Cual de las siguientes no es una caracter&iacute;stica del PUDS (Proceso Unificado de Desarrollo del SW)";
 choices[44]= new Array();
 choices[44][0] = "No tiene en cuenta el control de calidad";
 choices[44][1] = "Proceso centrado en la arquitectura";
 choices[44][2] = "Proceso dirigido por los casos de uso";
 choices[44][3] = "Proceso incremental e iterativo";
 answers[44] = choices[44][0];
 units[44] = "79";
 comments[44] = "Id Pregunta: 4240. ";


//  Id pregunta: 4391 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En la elaboraci&oacute;n e los DFD de un Sistema para la Gesti&oacute;n de Concursos de Provisi&oacute;n de Puestos de un Ministerio, &iquest;c&oacute;mo representar&iacute;a la publicaci&oacute;n en el BOE de las bases de concurso?";
 choices[45]= new Array();
 choices[45][0] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[45][1] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[45][2] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 choices[45][3] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 answers[45] = choices[45][3];
 units[45] = "81";
 comments[45] = "Id Pregunta: 4391. ";


//  Id pregunta: 4577 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Qu&eacute; actividades de las siguientes se incluyen en el ciclo de vida cl&aacute;sico, tambi&eacute;n Ilamado &quot;modelo en cascada&quot;?";
 choices[46]= new Array();
 choices[46][0] = "an&aacute;lisis del sistema, an&aacute;lisis de riesgo, an&aacute;lisis de requisitos";
 choices[46][1] = "an&aacute;lisis de riesgo, an&aacute;lisis de requisitos y codificaci&oacute;n";
 choices[46][2] = "an&aacute;lisis del sistema, prototipos y codificaci&oacute;n";
 choices[46][3] = "dise&ntilde;o, codificaci&oacute;n y pruebas";
 answers[46] = choices[46][3];
 units[46] = "76";
 comments[46] = "Id Pregunta: 4577. ";


//  Id pregunta: 4832 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[47]= new Array();
 choices[47][0] = "Acoplamiento de control.";
 choices[47][1] = "Acoplamiento por estampado.";
 choices[47][2] = "Acoplamiento por contenido.";
 choices[47][3] = "Acoplamiento externo.";
 answers[47] = choices[47][2];
 units[47] = "84";
 comments[47] = "Id Pregunta: 4832. examen TIC 2006";


//  Id pregunta: 4941 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  El objetivo en la evaluaci&oacute;n del dise&ntilde;o deber&aacute; ser:";
 choices[48]= new Array();
 choices[48][0] = "M&iacute;nimo acoplamiento posible y cohesi&oacute;n baja.";
 choices[48][1] = "M&aacute;ximo acoplamiento posible y cohesi&oacute;n baja.";
 choices[48][2] = "M&aacute;ximo acoplamiento posible y cohesi&oacute;n alta o media.";
 choices[48][3] = "M&iacute;nimo acoplamiento posible y cohesi&oacute;n alta o media.";
 answers[48] = choices[48][3];
 units[48] = "84";
 comments[48] = "Id Pregunta: 4941. Examen TIC B 2007";


//  Id pregunta: 4942 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La Programaci&oacute;n Estructurada de Jackson es una t&eacute;cnica de dise&ntilde;o:";
 choices[49]= new Array();
 choices[49][0] = "Estructurado.";
 choices[49][1] = "Orientada a objetos.";
 choices[49][2] = "Para organizar los datos.";
 choices[49][3] = "De descomposici&oacute;n funcional.";
 answers[49] = choices[49][0];
 units[49] = "83,84";
 comments[49] = "Id Pregunta: 4942. Examen TIC B 2007";


//  Id pregunta: 5143 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[50]= new Array();
 choices[50][0] = "La prueba funcional o de caja negra se centra en el estudio de la especificaci&oacute;n del hardware.";
 choices[50][1] = "Una prueba funcional bien elegida es la que reduce el n&uacute;mero de otros casos necesarios para que la prueba sea razonable.";
 choices[50][2] = "En la prueba funcional debemos ejecutar todas las posibilidades de funcionamiento y todas las combinaciones de entradas y salidas.";
 choices[50][3] = "La prueba funcional nunca se fija en las entradas ni en las salidas, sino en el funcionamiento interno del programa.";
 answers[50] = choices[50][1];
 units[50] = "78";
 comments[50] = "Id Pregunta: 5143. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5179 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;les son los requisitos, seg&uacute;n Dorfman, que debe cumplir una Metodolog&iacute;a?";
 choices[51]= new Array();
 choices[51][0] = "Documentada, Repetitiva, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[51][1] = "Documentada, Repetible, Ense&ntilde;able, Flexible, Validada y Apropiada";
 choices[51][2] = "Documentada, Repetible, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[51][3] = "Documentada, Repetible, Extensa, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 answers[51] = choices[51][2];
 units[51] = "79";
 comments[51] = "Id Pregunta: 5179. ";


//  Id pregunta: 5184 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Se&ntilde;ale la respuesta verdadera con respecto a los atributos en el modelo E/R:";
 choices[52]= new Array();
 choices[52][0] = "Cada atributo toma valores de un dominio diferenciado y no compartido";
 choices[52][1] = "Al atributo que identifica un&iacute;vocamente cada una de las ocurrencias de la entidad principal se le denomina atributo fuerte";
 choices[52][2] = "Existen atributos simples, mixtos y compuestos";
 choices[52][3] = "Existen atributos monovalorados y multivalorados";
 answers[52] = choices[52][3];
 units[52] = "80";
 comments[52] = "Id Pregunta: 5184. ";


//  Id pregunta: 5185 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Un modelado de un Sistema de Informaci&oacute;n se considera completo si se realiza desde los siguientes puntos de vista:";
 choices[53]= new Array();
 choices[53][0] = "Funcional, Est&aacute;tico y Din&aacute;mico";
 choices[53][1] = "Informaci&oacute;n, Procesos e Interfaces de Usuario";
 choices[53][2] = "Est&aacute;tico, Din&aacute;mico y Relacional";
 choices[53][3] = "Funcional, Informaci&oacute;n y Procesos";
 answers[53] = choices[53][0];
 units[53] = "81";
 comments[53] = "Id Pregunta: 5185. ";


//  Id pregunta: 5186 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no forma parte del conjunto de t&eacute;cnicas del an&aacute;lisis estructurado?";
 choices[54]= new Array();
 choices[54][0] = "Diagrama de Transici&oacute;n de Estados (DTE)";
 choices[54][1] = "Diagrama de Flujos de Datos (DFD)";
 choices[54][2] = "Diagrama de Flujos de Procesos (DFP)";
 choices[54][3] = "Diagrama de Flujos de Control (DFC)";
 answers[54] = choices[54][2];
 units[54] = "81";
 comments[54] = "Id Pregunta: 5186. ";


//  Id pregunta: 5189 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[55]= new Array();
 choices[55][0] = "RMI";
 choices[55][1] = "JINI";
 choices[55][2] = "EJB";
 choices[55][3] = "CORBA";
 answers[55] = choices[55][3];
 units[55] = "82";
 comments[55] = "Id Pregunta: 5189. ";


//  Id pregunta: 5194 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  En los diagramas de estructura, pertenecientes al dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes opciones no es un tipo de cupla (comunicaci&oacute;n entre m&oacute;dulos)?";
 choices[56]= new Array();
 choices[56][0] = "Cupla de Datos.";
 choices[56][1] = "Cupla de Funciones.";
 choices[56][2] = "Cupla Modificada.";
 choices[56][3] = "Cupla de Resultados.";
 answers[56] = choices[56][1];
 units[56] = "84";
 comments[56] = "Id Pregunta: 5194. ";


//  Id pregunta: 5226 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  En relaci&oacute;n al modelo de ciclo de vida de un sistema de informaci&oacute;n NO se puede afirmar:";
 choices[57]= new Array();
 choices[57][0] = "Es el conjunto etapas por las que atraviesa el sistema desde su concepci&oacute;n hasta su retirada del servicio";
 choices[57][1] = "Los modelos de ciclo de vida tradicionales, entre los que se engloban el modelo en cascada y los basados en prototipos, son los de m&aacute;s amplia utilizaci&oacute;n";
 choices[57][2] = "Los modelos de ciclo vida basados en transformaciones se adaptan bien a cualquier proyecto.";
 choices[57][3] = "En la pr&aacute;ctica no se suelen seguir modelos en forma pura, sino los que de acuerdo a las peculiaridades del sistema y la experiencia del jefe proyecto se pueden incorporar aspectos de otros modelos.";
 answers[57] = choices[57][2];
 units[57] = "76";
 comments[57] = "Id Pregunta: 5226. ";


//  Id pregunta: 5231 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  El modelo de ciclo de vida en espiral:";
 choices[58]= new Array();
 choices[58][0] = "Es el que mejor se adapta para ser aplicado al software contratado";
 choices[58][1] = "Permite incorporar objetivos de calidad en el desarrollo de productos software";
 choices[58][2] = "No es especialmente adecuado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[58][3] = "Todas las anteriores son correctas";
 answers[58] = choices[58][1];
 units[58] = "76";
 comments[58] = "Id Pregunta: 5231. ";


//  Id pregunta: 5240 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Para el desarrollo de una planificaci&oacute;n estrat&eacute;gica se necesita conocer:";
 choices[59]= new Array();
 choices[59][0] = "La misi&oacute;n de la organizaci&oacute;n";
 choices[59][1] = "Puntos d&eacute;biles y fuertes de la organizaci&oacute;n para sacar partido de ello";
 choices[59][2] = "Los clientes, competidores y accionistas";
 choices[59][3] = "Todas las anteriores.";
 answers[59] = choices[59][3];
 units[59] = "77";
 comments[59] = "Id Pregunta: 5240. ";


//  Id pregunta: 5755 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de estos diagramas no es un diagrama de UML 2.0?";
 choices[60]= new Array();
 choices[60][0] = "Diagrama global de interacci&oacute;n";
 choices[60][1] = "Diagrama de colaboraci&oacute;n";
 choices[60][2] = "Diagrama de estructura compuesta";
 choices[60][3] = "Diagrama de tiempos";
 answers[60] = choices[60][1];
 units[60] = "82";
 comments[60] = "Id Pregunta: 5755. ";


//  Id pregunta: 5826 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[61]= new Array();
 choices[61][0] = "Vista de Componentes.";
 choices[61][1] = "Vista de Despliegue.";
 choices[61][2] = "Vista de Casos de Uso.";
 choices[61][3] = "Vista de Flujo de Datos.";
 answers[61] = choices[61][3];
 units[61] = "84";
 comments[61] = "Id Pregunta: 5826. MAP 2008 A1";


//  Id pregunta: 5837 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[62]= new Array();
 choices[62][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[62][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[62][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[62][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[62] = choices[62][0];
 units[62] = "79";
 comments[62] = "Id Pregunta: 5837. MAP 2008 A1";


//  Id pregunta: 5998 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El Plan Estrat&eacute;gico Inform&aacute;tico Departamental debe ser elaborado por:";
 choices[63]= new Array();
 choices[63][0] = "La Subsecretar&iacute;a.";
 choices[63][1] = "La Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica.";
 choices[63][2] = "Las Unidades de Inform&aacute;tica del Ministerio.";
 choices[63][3] = "El Subdirector General de Inform&aacute;tica.";
 answers[63] = choices[63][1];
 units[63] = "77";
 comments[63] = "Id Pregunta: 5998. TIC A 2009";


//  Id pregunta: 6112 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Un diagrama de transici&oacute;n de estados:";
 choices[64]= new Array();
 choices[64][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[64][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[64][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[64][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[64] = choices[64][3];
 units[64] = "82";
 comments[64] = "Id Pregunta: 6112. TIC A 2009";


//  Id pregunta: 6131 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En un diagrama de flujo de datos:";
 choices[65]= new Array();
 choices[65][0] = "Un almac&eacute;n puede realizar un flujo de datos tanto con otro almac&eacute;n como con un proceso.";
 choices[65][1] = "Un almac&eacute;n puede realizar un flujo de datos tanto con una entidad externa como con un proceso.";
 choices[65][2] = "Un almac&eacute;n s&oacute;lo puede realizar un flujo de datos con un proceso.";
 choices[65][3] = "Un proceso s&oacute;lo puede realizar un flujo de datos con un almac&eacute;n.";
 answers[65] = choices[65][2];
 units[65] = "81";
 comments[65] = "Id Pregunta: 6131. TIC A 2009";


//  Id pregunta: 6276 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;les son las fases por ciclo del modelo de ciclo de vida en espiral?";
 choices[66]= new Array();
 choices[66][0] = "Evaluaci&oacute;n, Planificaci&oacute;n, An&aacute;lisis de riesgos e Ingenier&iacute;a";
 choices[66][1] = "Planificaci&oacute;n, Ingenier&iacute;a, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 choices[66][2] = "Planificaci&oacute;n, An&aacute;lisis de riesgos, Ingenier&iacute;a y Evaluaci&oacute;n";
 choices[66][3] = "Ingenier&iacute;a, Planificaci&oacute;n, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 answers[66] = choices[66][2];
 units[66] = "76";
 comments[66] = "Id Pregunta: 6276. ";


//  Id pregunta: 6288 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Seg&uacute;n Pressman, &iquest;cu&aacute;l de los siguientes no es un objetivo que deba cumplir un modelo de an&aacute;lisis (especificaci&oacute;n)?";
 choices[67]= new Array();
 choices[67][0] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o software";
 choices[67][1] = "Definir el calendario de ejecuci&oacute;n del proyecto";
 choices[67][2] = "Definir un conjunto de requisitos que una vez el sistema est&eacute; construido se puedan validar";
 choices[67][3] = "Describir lo que el cliente quiere";
 answers[67] = choices[67][1];
 units[67] = "78";
 comments[67] = "Id Pregunta: 6288. ";


//  Id pregunta: 6296 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; fases debe pasar la t&eacute;cnica de Brainstorming para que sea efectiva?";
 choices[68]= new Array();
 choices[68][0] = "Fase de Definici&oacute;n, Fase de Generaci&oacute;n y Fase de Consolidaci&oacute;n";
 choices[68][1] = "Fase de Generaci&oacute;n, Fase de Preparaci&oacute;n y Fase de Consolidaci&oacute;n";
 choices[68][2] = "Fase de Preparaci&oacute;n, Fase de Generaci&oacute;n y Fase de Conclusiones";
 choices[68][3] = "Fase de Preparaci&oacute;n, Fase de Generaci&oacute;n y Fase de Consolidaci&oacute;n";
 answers[68] = choices[68][3];
 units[68] = "78";
 comments[68] = "Id Pregunta: 6296. ";


//  Id pregunta: 6297 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Qu&eacute; se entiende por l&iacute;nea base en el control de versiones en el an&aacute;lisis de un sistema de informaci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Punto inicial de partida de un sistema de informaci&oacute;n, en el cual no hay nada desarrollado";
 choices[69][1] = "Especificaci&oacute;n o producto que ha sido revisado formalmente. Sirve de base para un desarrollo posterior";
 choices[69][2] = "Documentaci&oacute;n del sistema de informaci&oacute;n almacenada en un dispositivo de almacenamiento seguro";
 choices[69][3] = "Ninguna de las anteriores es cierta";
 answers[69] = choices[69][1];
 units[69] = "78";
 comments[69] = "Id Pregunta: 6297. ";


//  Id pregunta: 6299 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;C&oacute;mo se denomina cada uno de los objetos individuales pertenecientes a una clase?";
 choices[70]= new Array();
 choices[70][0] = "Ente";
 choices[70][1] = "Participaci&oacute;n";
 choices[70][2] = "Instancia";
 choices[70][3] = "Abstracci&oacute;n";
 answers[70] = choices[70][2];
 units[70] = "82";
 comments[70] = "Id Pregunta: 6299. ";


//  Id pregunta: 6300 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;C&oacute;mo se denomina la clase que no tiene instancias?";
 choices[71]= new Array();
 choices[71][0] = "No existen clases sin instancias";
 choices[71][1] = "Invisible";
 choices[71][2] = "Hu&eacute;rfana";
 choices[71][3] = "Abstracta";
 answers[71] = choices[71][3];
 units[71] = "82";
 comments[71] = "Id Pregunta: 6300. ";


//  Id pregunta: 6309 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Es un requisito de un sistema de tiempo real:";
 choices[72]= new Array();
 choices[72][0] = "Predecible.";
 choices[72][1] = "Modular.";
 choices[72][2] = "Sincronizaci&oacute;n y divisi&oacute;n en tareas.";
 choices[72][3] = "Todos lo son.";
 answers[72] = choices[72][3];
 units[72] = "83";
 comments[72] = "Id Pregunta: 6309. ";


//  Id pregunta: 6311 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del dise&ntilde;o estructurado de un proyecto de ingenier&iacute;a software?";
 choices[73]= new Array();
 choices[73][0] = "Minimizar el coste asociado al mantenimiento.";
 choices[73][1] = "M&aacute;ximo acoplamiento.";
 choices[73][2] = "M&aacute;xima inteligibilidad del sistema.";
 choices[73][3] = "Integraci&oacute;n del sistema.";
 answers[73] = choices[73][1];
 units[73] = "84";
 comments[73] = "Id Pregunta: 6311. ";


//  Id pregunta: 6435 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Las entidades d&eacute;biles se representan en E/R mediante:";
 choices[74]= new Array();
 choices[74][0] = "No hay entidades d&eacute;biles en el modelo E/R.";
 choices[74][1] = "Se representan mediante doble caja.";
 choices[74][2] = "Se representan con un tri&aacute;ngulo.";
 choices[74][3] = "Se representan como dos c&iacute;rculos conc&eacute;ntricos.";
 answers[74] = choices[74][1];
 units[74] = "80";
 comments[74] = "Id Pregunta: 6435. NULL";


//  Id pregunta: 6604 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  En el an&aacute;lisis estructurado un sistema se puede modelizar completamente con:";
 choices[75]= new Array();
 choices[75][0] = "Modelo Funcional, Modelo Est&aacute;tico y Modelo Din&aacute;mico";
 choices[75][1] = "Modelo de Procesos y Modelo de Datos";
 choices[75][2] = "Modelo Funcional, Modelo de Clases y Modelo de Casos de Uso";
 choices[75][3] = "Modelo Funcional y Modelo E/R";
 answers[75] = choices[75][0];
 units[75] = "81";
 comments[75] = "Id Pregunta: 6604. NULL";


//  Id pregunta: 8228 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[76]= new Array();
 choices[76][0] = "Herencia.";
 choices[76][1] = "Extensibilidad.";
 choices[76][2] = "Sobrecarga.";
 choices[76][3] = "Polimorfismo.";
 answers[76] = choices[76][3];
 units[76] = "82";
 comments[76] = "Id Pregunta: 8228. Examen TIC A1 2010";


//  Id pregunta: 8242 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  De acuerdo al Est&aacute;ndar ISO 12207 de procesos del ciclo de vida del software:";
 choices[77]= new Array();
 choices[77][0] = "Existe un proceso espec&iacute;fico para la adaptaci&oacute;n del resto de procesos.";
 choices[77][1] = "Para cumplir con el estandar es necesario adaptar los procesos a las circunstancias particulares de cada organizaci&oacute;n o proyecto.";
 choices[77][2] = "Se puede utilizar cualquier proceso de adaptaci&oacute;n, siempre y cuando est&eacute; justificado y documentado.";
 choices[77][3] = "No hay una categor&iacute;a espec&iacute;fica de &quot;cumplimiento adaptado&quot;.";
 answers[77] = choices[77][0];
 units[77] = "76";
 comments[77] = "Id Pregunta: 8242. Examen TIC A1 2010";


//  Id pregunta: 8394 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes diagramas NO aparece recogido en UML?";
 choices[78]= new Array();
 choices[78][0] = "Diagrama de secuencia.";
 choices[78][1] = "Diagrama de actividades.";
 choices[78][2] = "Diagrama de estados.";
 choices[78][3] = "Diagrama de perspectiva.";
 answers[78] = choices[78][3];
 units[78] = "84";
 comments[78] = "Id Pregunta: 8394. Examen TIC A2 2010";


//  Id pregunta: 8966 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[79]= new Array();
 choices[79][0] = "Hirsch";
 choices[79][1] = "Royce";
 choices[79][2] = "Jackson";
 choices[79][3] = "Bohem";
 answers[79] = choices[79][2];
 units[79] = "76,85";
 comments[79] = "Id Pregunta: 8966. ";


//  Id pregunta: 8987 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil?";
 choices[80]= new Array();
 choices[80][0] = "Scrum";
 choices[80][1] = "XP (eXtreme Programming)";
 choices[80][2] = "Getting Real";
 choices[80][3] = "Todas las anteriores";
 answers[80] = choices[80][3];
 units[80] = "79";
 comments[80] = "Id Pregunta: 8987. ";


//  Id pregunta: 9083 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[81]= new Array();
 choices[81][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[81][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[81][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[81][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[81] = choices[81][3];
 units[81] = "77";
 comments[81] = "Id Pregunta: 9083. ";


//  Id pregunta: 9436 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica de las transacciones?";
 choices[82]= new Array();
 choices[82][0] = "Concurrencia";
 choices[82][1] = "Durabilidad";
 choices[82][2] = "Aislamiento";
 choices[82][3] = "Atomicidad";
 answers[82] = choices[82][0];
 units[82] = "83";
 comments[82] = "Id Pregunta: 9436. Examen AGE TIC A1 2011";


//  Id pregunta: 9445 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En programaci&oacute;n orientada a objetos, la propiedad por la cual un mismo mensaje puede originar conductas diferentes al ser recibido por distintos objetos se denomina:";
 choices[83]= new Array();
 choices[83][0] = "Sobrecarga.";
 choices[83][1] = "Herencia.";
 choices[83][2] = "Extensibilidad.";
 choices[83][3] = "Polimorfismo.";
 answers[83] = choices[83][3];
 units[83] = "82";
 comments[83] = "Id Pregunta: 9445. Examen AGE TIC A1 2011";


//  Id pregunta: 9451 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  En UML, NO es un diagrama din&aacute;mico:";
 choices[84]= new Array();
 choices[84][0] = "Diagrama de secuencia.";
 choices[84][1] = "Diagrama de estado.";
 choices[84][2] = "Diagrama de despliegue.";
 choices[84][3] = "Diagrama de colaboraci&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "82";
 comments[84] = "Id Pregunta: 9451. Examen AGE TIC A1 2011";


//  Id pregunta: 9484 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Seg&uacute;n Pressman, el proceso de obtenci&oacute;n de requisitos";
 choices[85]= new Array();
 choices[85][0] = "Es un proceso iterativo";
 choices[85][1] = "Es un proceso de tres fases";
 choices[85][2] = "Es un proceso de 10 fases";
 choices[85][3] = "Todas las anteriores son falsas";
 answers[85] = choices[85][0];
 units[85] = "78";
 comments[85] = "Id Pregunta: 9484. ";


//  Id pregunta: 9936 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se&ntilde;ale la respuesta INCORRECTA sobre patrones de dise&ntilde;o orientado a objetos.";
 choices[86]= new Array();
 choices[86][0] = "Facilitan el aprendizaje de las nuevas generaciones de dise&ntilde;adores condensando conocimiento ya existente.";
 choices[86][1] = "Imponen ciertas alternativas de dise&ntilde;o frente a otras.";
 choices[86][2] = "Permiten la creatividad inherente al proceso de dise&ntilde;o.";
 choices[86][3] = "Estandarizan el modo en que se realiza el dise&ntilde;o.";
 answers[86] = choices[86][1];
 units[86] = "84";
 comments[86] = "Id Pregunta: 9936. TIC A1, Examen 2013";


//  Id pregunta: 9945 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  El modelo de desarrollo RAD (Rapid Application Development) fue descrito inicialmente por:";
 choices[87]= new Array();
 choices[87][0] = "Codd ";
 choices[87][1] = "Boehm ";
 choices[87][2] = "Chen ";
 choices[87][3] = "James Marti";
 answers[87] = choices[87][3];
 units[87] = "76";
 comments[87] = "Id Pregunta: 9945. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10086 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado para eliminar el problema de la indefinici&oacute;n de requisitos?";
 choices[88]= new Array();
 choices[88][0] = "R&aacute;pido";
 choices[88][1] = "Evolutivo";
 choices[88][2] = "Incremental";
 choices[88][3] = "R&aacute;pido o evolutivo, nunca el incremental";
 answers[88] = choices[88][0];
 units[88] = "76";
 comments[88] = "Id Pregunta: 10086. NULL";


//  Id pregunta: 10093 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  De acuerdo a las actividades de M&eacute;trica v.3, se&ntilde;ale la INCORRECTA:";
 choices[89]= new Array();
 choices[89][0] = "La actividad PSI 4 es de Idenficaci&oacute;n de Requisitos";
 choices[89][1] = "La actividad EVS 3 es de Definici&oacute;n de Requisitos";
 choices[89][2] = "La actividad ASI 2 es de Especificaci&oacute;n de Requisitos";
 choices[89][3] = "La actividad DSI 11 es de Establecimineto de Requisitos de Implantaci&oacute;n";
 answers[89] = choices[89][2];
 units[89] = "78";
 comments[89] = "Id Pregunta: 10093. NULL";


//  Id pregunta: 10097 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  De acuerdo a M&eacute;trica v.3, la pr&aacute;ctica JAD disitngue distinto perfiles. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[90]= new Array();
 choices[90][0] = "Moderador (l&iacute;der Jad)";
 choices[90][1] = "Desarrolladores";
 choices[90][2] = "Usuarios";
 choices[90][3] = "Analistas";
 answers[90] = choices[90][3];
 units[90] = "78";
 comments[90] = "Id Pregunta: 10097. NULL";


//  Id pregunta: 10174 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  UML o Unified Modeling Language&hellip;";
 choices[91]= new Array();
 choices[91][0] = "Fue desarrollado por tres autores conocidos como los &quot;Tres Amigos&quot;";
 choices[91][1] = "No constituye un m&eacute;todo o metodolog&iacute;a de an&aacute;lisis orientado a objetos";
 choices[91][2] = "Est&aacute;ndar actualmente soportado, mantenido y evolucionado por OMG";
 choices[91][3] = "Todas las anteriores";
 answers[91] = choices[91][3];
 units[91] = "82";
 comments[91] = "Id Pregunta: 10174. ";


//  Id pregunta: 10638 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique la respuesta correcta:";
 choices[92]= new Array();
 choices[92][0] = "UML est&aacute; dise&ntilde;ado para utilizarse exclusivamente con la metodolog&iacute;a RUP.";
 choices[92][1] = "UML es un m&oacute;dulo de OMT (Object-Modeling Technique)";
 choices[92][2] = "UML es un lenguaje de programaci&oacute;n estructurada.";
 choices[92][3] = "UML puede describir m&eacute;todos o procesos.";
 answers[92] = choices[92][3];
 units[92] = "84";
 comments[92] = "Id Pregunta: 10638. ";


//  Id pregunta: 10647 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En un modelo Entidad / Relaci&oacute;n extendido, las relaciones pueden ser:";
 choices[93]= new Array();
 choices[93][0] = "Regular o d&eacute;bil.";
 choices[93][1] = "De dependencia en existencia o de dependencia en identificaci&oacute;n.";
 choices[93][2] = "Exclusivas o no exclusivas.";
 choices[93][3] = "Todas las anteriores.";
 answers[93] = choices[93][3];
 units[93] = "80";
 comments[93] = "Id Pregunta: 10647. ";


//  Id pregunta: 10817 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Una pr&aacute;ctica frecuente asociada al modelo de Proceso Unificado de Desarrollo es el &quot;timeboxing&quot;, &iquest;en qu&eacute; consiste?";
 choices[94]= new Array();
 choices[94][0] = "Enfoque para identificar casos de uso y determinar el nivel de granularidad apropiado.";
 choices[94][1] = "Modelo de planificaci&oacute;n adaptativa para ganar tiempo.";
 choices[94][2] = "Asignaci&oacute;n de un periodo de tiempo fijo para la ejecuci&oacute;n de una iteraci&oacute;n.";
 choices[94][3] = "Utilizar casos de usos temporales para captar requisitos funcionales.";
 answers[94] = choices[94][2];
 units[94] = "79";
 comments[94] = "Id Pregunta: 10817. Examen GSI 2014";


//  Id pregunta: 10846 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[95]= new Array();
 choices[95][0] = "Abstracci&oacute;n.";
 choices[95][1] = "Polimorfismo.";
 choices[95][2] = "Herencia.";
 choices[95][3] = "Encapsulamiento.";
 answers[95] = choices[95][3];
 units[95] = "84";
 comments[95] = "Id Pregunta: 10846. Examen GSI 2014";


//  Id pregunta: 10864 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes respuestas incluye un est&aacute;ndar correcto del proceso de software?";
 choices[96]= new Array();
 choices[96][0] = "IEEE 930:1998. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 choices[96][1] = "IEEE 29148:2011. Ingenier&iacute;a de Sistemas y Software - Procesos de ciclo de vida - Ingenier&iacute;a de requisitos.";
 choices[96][2] = "IEEE 1216:1987. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n del Dise&ntilde;o del Software.";
 choices[96][3] = "IEEE 830: 2004. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 answers[96] = choices[96][1];
 units[96] = "76, 78, 79";
 comments[96] = "Id Pregunta: 10864. Examen GSI 2014";


//  Id pregunta: 11004 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En el modelo Entidad/Relaci&oacute;n, y dada una jerarqu&iacute;a obligatoria disjunta, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[97]= new Array();
 choices[97][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 choices[97][1] = "Es necesario que toda ocurrencia del supertipo se encuentre en uno solo de los subtipos.";
 choices[97][2] = "Es necesario que toda ocurrencia del supertipo se encuentre en todos los subtipos.";
 choices[97][3] = "Es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 answers[97] = choices[97][1];
 units[97] = "80";
 comments[97] = "Id Pregunta: 11004. TIC A1 AGE 2014";


//  Id pregunta: 11057 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; rol de Scrum NO est&aacute; incluido dentro de los roles 'Cerdo'?";
 choices[98]= new Array();
 choices[98][0] = "ScrumMaster";
 choices[98][1] = "Product Owner";
 choices[98][2] = "ScrumTeam";
 choices[98][3] = "Stakeholders";
 answers[98] = choices[98][3];
 units[98] = "79";
 comments[98] = "Id Pregunta: 11057. Los Stakeholders se encuentran dentro del tipo de rol 'Gallina'";


//  Id pregunta: 11343 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la afirmaci&oacute;n falsa de entre las siguientes:";
 choices[99]= new Array();
 choices[99][0] = "Las relaciones regulares son entre dos entidades fuertes";
 choices[99][1] = "La existencia de las entidades fuertes, depende de otra entidad";
 choices[99][2] = "Las entidades pueden ser fuertes o d&eacute;biles";
 choices[99][3] = "Las relaciones d&eacute;biles se producen entre una entidad fuerte y otra d&eacute;bil";
 answers[99] = choices[99][1];
 units[99] = "80";
 comments[99] = "Id Pregunta: 11343. ";


