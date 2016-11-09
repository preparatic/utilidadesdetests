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

//  Id pregunta: 1988 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; es el factor de utilizaci&oacute;n de los componentes?:";
 choices[0]= new Array();
 choices[0][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[0][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[0][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[0][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[0] = choices[0][2];
 units[0] = "88";
 comments[0] = "Id Pregunta: 1988. NULL";


//  Id pregunta: 2004 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Si una entidad reconocida como independiente, muestra la conformidad de una empresa, producto... con los requisitos definidos en normas o especificaciones t&eacute;cnicas, se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Normalizaci&oacute;n";
 choices[1][1] = "Certificaci&oacute;n";
 choices[1][2] = "ISO 9001";
 choices[1][3] = "Acuerdo de nivel de servicio";
 answers[1] = choices[1][1];
 units[1] = "87";
 comments[1] = "Id Pregunta: 2004. NULL";


//  Id pregunta: 2039 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Hablar de un modelo de gesti&oacute;n que basado en un sistema empresarial orientado hacia la calidad persigue la satisfacci&oacute;n de todos aquellos entes que se relacionan con la empresa u organizaci&oacute;n, supone hablar de:";
 choices[2]= new Array();
 choices[2][0] = "Las normas ISO 9000";
 choices[2][1] = "Calidad Total";
 choices[2][2] = "Plan General de Garant&iacute;a de Calidad";
 choices[2][3] = "Todos los aspectos anteriores";
 answers[2] = choices[2][1];
 units[2] = "92";
 comments[2] = "Id Pregunta: 2039. NULL";


//  Id pregunta: 2041 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Un &quot;walkthrough&quot; es:";
 choices[3]= new Array();
 choices[3][0] = "Un tipo de auditor&iacute;a de calidad";
 choices[3][1] = "Una actividad de garant&iacute;a de calidad";
 choices[3][2] = "Un tipo de revisi&oacute;n";
 choices[3][3] = "La verificaci&oacute;n formal de la calidad del software";
 answers[3] = choices[3][2];
 units[3] = "92";
 comments[3] = "Id Pregunta: 2041. NULL";


//  Id pregunta: 2044 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Seg&uacute;n el PGGC, si el nivel de intensidad es 2, el procedimiento de control de calidad a utilizar ser&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "Revisi&oacute;n T&eacute;cnica Formal";
 choices[4][1] = "Auditor&iacute;a de Calidad";
 choices[4][2] = "Inspecci&oacute;n Detallada";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "88";
 comments[4] = "Id Pregunta: 2044. ";


//  Id pregunta: 2064 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;Cual es la complejidad ciclom&aacute;tica de un grafo de flujo con 5 nodos y 7 aristas?";
 choices[5]= new Array();
 choices[5][0] = "3";
 choices[5][1] = "4";
 choices[5][2] = "5";
 choices[5][3] = "6";
 answers[5] = choices[5][1];
 units[5] = "88";
 comments[5] = "Id Pregunta: 2064. SS-A 2004. Complejidad McCabe = aristas - nodos + 2";


//  Id pregunta: 2073 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[6]= new Array();
 choices[6][0] = "Integridad";
 choices[6][1] = "Sencillez";
 choices[6][2] = "Mantenibilidad";
 choices[6][3] = "Portabilidad";
 answers[6] = choices[6][1];
 units[6] = "88";
 comments[6] = "Id Pregunta: 2073. ";


//  Id pregunta: 2077 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Para la estimaci&oacute;n del esfuerzo necesario y dimensionamiento de proyectos de desarrollo de sistemas, &iquest;qu&eacute; opciones viables aparecen?:";
 choices[7]= new Array();
 choices[7][0] = "Modelos basados en t&eacute;cnicas de descomposici&oacute;n y modelos de estimaci&oacute;n emp&iacute;ricos";
 choices[7][1] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos de punto de funci&oacute;n";
 choices[7][2] = "Modelos basados en t&eacute;cnicas de planificaci&oacute;n y control de proyectos y modelos de planificaci&oacute;n temporal";
 choices[7][3] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos emp&iacute;ricos";
 answers[7] = choices[7][1];
 units[7] = "89";
 comments[7] = "Id Pregunta: 2077. NULL";


//  Id pregunta: 2112 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest; En qu&eacute; consiste la teor&iacute;a de la Calidad/Coste  aplicada a la implantaci&oacute;n de la calidad?:";
 choices[8]= new Array();
 choices[8][0] = "El coste de producci&oacute;n aumenta libremente con el aumento de la calidad";
 choices[8][1] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de la calidad";
 choices[8][2] = "El coste de producci&oacute;n aumenta linealmente con el aumento de la calidad";
 choices[8][3] = "El coste de producci&oacute;n aumenta diferencialmente con el aumento de la calidad";
 answers[8] = choices[8][1];
 units[8] = "88";
 comments[8] = "Id Pregunta: 2112. ";


//  Id pregunta: 2113 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;A cu&aacute;nto equivale el trabajo de un hombre por mes en COCOMO, medido en horas de trabajo?:";
 choices[9]= new Array();
 choices[9][0] = "140 horas";
 choices[9][1] = "150 horas";
 choices[9][2] = "172 horas";
 choices[9][3] = "152 horas";
 answers[9] = choices[9][3];
 units[9] = "89";
 comments[9] = "Id Pregunta: 2113. NULL";


//  Id pregunta: 2115 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Bajo qu&eacute; normas de la serie ISO-9000 puede certificarse una empresa?:";
 choices[10]= new Array();
 choices[10][0] = "9001, 9002 y 9003";
 choices[10][1] = "S&oacute;lo 9001";
 choices[10][2] = "9000, 9001, 9002, 9003 y 9004";
 choices[10][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[10] = choices[10][1];
 units[10] = "92";
 comments[10] = "Id Pregunta: 2115. NULL";


//  Id pregunta: 2124 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Downsizing&quot;?";
 choices[11]= new Array();
 choices[11][0] = "El downsizing centraliza los procesos en sistemas tipo main-frame.";
 choices[11][1] = "Pretende acercar el proceso all&iacute; donde se va a realizar.";
 choices[11][2] = "Acerca los servidores a los Centros de Proceso de Datos m&aacute;s proximos a la gerencia de la empresa.";
 choices[11][3] = "Siempre que se hace downsizing se pide autorizaci&oacute;n al usuario afectado.";
 answers[11] = choices[11][1];
 units[11] = "90";
 comments[11] = "Id Pregunta: 2124. ";


//  Id pregunta: 2150 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un componente de una herramienta CASE integrada?";
 choices[12]= new Array();
 choices[12][0] = "Diccionario de datos.";
 choices[12][1] = "Editor de diagramas.";
 choices[12][2] = "Editor de documentos.";
 choices[12][3] = "Editor de textos.";
 answers[12] = choices[12][3];
 units[12] = "91";
 comments[12] = "Id Pregunta: 2150. ";


//  Id pregunta: 2189 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;les son las suposiciones b&aacute;sicas del modelo COCOMO cl&aacute;sico para estimar el esfuerzo necesario para el desarrollo de sistemas?:";
 choices[13]= new Array();
 choices[13][0] = "Considera que la principal variable explicativa del coste es el n&uacute;mero de instrucciones, con lo que centra sus esfuerzos en estimar este n&uacute;mero";
 choices[13][1] = "Supone que el esfuerzo necesario para el desarrollo de un sistema es el producto de dos factores: complejidad t&eacute;cnica y tama&ntilde;o del tratamiento de la informaci&oacute;n";
 choices[13][2] = "Usa como variable explicativa secundaria la complejidad t&eacute;cnica, originando tres modos de aplicaci&oacute;n del m&eacute;todo: org&aacute;nico, semiacoplado y empotrado";
 choices[13][3] = "Todas las anteriores son asunciones del modelo COCOMO";
 answers[13] = choices[13][3];
 units[13] = "89";
 comments[13] = "Id Pregunta: 2189. Preparatic XVII";


//  Id pregunta: 2221 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; variable utiliza COCOMO?:";
 choices[14]= new Array();
 choices[14][0] = "El n&uacute;mero de personas que intervienen en un proyectos";
 choices[14][1] = "N&uacute;mero de instrucciones en pseudoc&oacute;digo";
 choices[14][2] = "N&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[14][3] = "No se usan  las instrucciones de c&oacute;digo fuente porque var&iacute;an de un lenguaje a otro";
 answers[14] = choices[14][2];
 units[14] = "89";
 comments[14] = "Id Pregunta: 2221. NULL";


//  Id pregunta: 2222 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  A la cantidad de recursos de computador y codificaci&oacute;n requerida para que un programa ejecute una funci&oacute;n se llama:";
 choices[15]= new Array();
 choices[15][0] = "Correcci&oacute;n";
 choices[15][1] = "Fiabilidad";
 choices[15][2] = "Eficiencia";
 choices[15][3] = "Integridad";
 answers[15] = choices[15][2];
 units[15] = "88";
 comments[15] = "Id Pregunta: 2222. ";


//  Id pregunta: 2225 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  A la extensi&oacute;n por la cual un programa puede ser usado en otras aplicaciones se llama:";
 choices[16]= new Array();
 choices[16][0] = "Portabilidad";
 choices[16][1] = "Reusabilidad";
 choices[16][2] = "Interoperatividad";
 choices[16][3] = "Mantenibilidad";
 answers[16] = choices[16][1];
 units[16] = "88";
 comments[16] = "Id Pregunta: 2225. ";


//  Id pregunta: 2228 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  A las herramientas CASE que abarcan las &uacute;ltimas fases del ciclo de vida (dise&ntilde;o detallado y generaci&oacute;n de c&oacute;digo) se las denomina:";
 choices[17]= new Array();
 choices[17][0] = "Superiores (upper CASE).";
 choices[17][1] = "Inferiores (lower CASE).";
 choices[17][2] = "Las 2 anteriores son correctas.";
 choices[17][3] = "Todas son falsas.";
 answers[17] = choices[17][1];
 units[17] = "91";
 comments[17] = "Id Pregunta: 2228. ";


//  Id pregunta: 2234 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Al esfuerzo requerido para modificar un programa en explotaci&oacute;n se llama:";
 choices[18]= new Array();
 choices[18][0] = "Usabilidad";
 choices[18][1] = "Mantenibilidad";
 choices[18][2] = "Verificabilidad";
 choices[18][3] = "Flexibilidad";
 answers[18] = choices[18][3];
 units[18] = "88";
 comments[18] = "Id Pregunta: 2234. NULL";


//  Id pregunta: 2235 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Al esfuerzo requerido para probar o testear un programa asegurando que cumple la funci&oacute;n pretendida se llama:";
 choices[19]= new Array();
 choices[19][0] = "Usabilidad";
 choices[19][1] = "Mantenibilidad";
 choices[19][2] = "Verificabilidad";
 choices[19][3] = "Flexibilidad";
 answers[19] = choices[19][2];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2235. ";


//  Id pregunta: 2250 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Dentro de los modelos que permiten estimar el coste de un proyecto, la jerarqu&iacute;a COCOMO (Constructive Cost Model) de Boehm en su nivel 1 o b&aacute;sico calcula el esfuerzo y el coste de desarrollo del &quot;software&quot; en funci&oacute;n de:";
 choices[20]= new Array();
 choices[20][0] = "El n&uacute;mero de personas que participan en el proyecto";
 choices[20][1] = "La experiencia y formaci&oacute;n de los analistas y programadores";
 choices[20][2] = "El tama&ntilde;o del programa expresado en l&iacute;neas estimadas de c&oacute;digo";
 choices[20][3] = "Las pruebas que hay que realizar para asegurar que el software est&eacute; libre de errores";
 answers[20] = choices[20][2];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2250. ";


//  Id pregunta: 2274 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El esquema formal de clasificaci&oacute;n de proyectos inform&aacute;ticos que propone el PGGC (Plan General de Garant&iacute;a de Calidad), consta de varios elementos fundamentales, identifique - entre los siguientes - el elemento falso:";
 choices[21]= new Array();
 choices[21][0] = "Modelo de referencia";
 choices[21][1] = "Perfil de riesgos";
 choices[21][2] = "Foco de inter&eacute;s";
 choices[21][3] = "Establecimiento de la tipolog&iacute;a";
 answers[21] = choices[21][3];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2274. ";


//  Id pregunta: 2275 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos del Plan General de Garant&iacute;a de Calidad implica la realizaci&oacute;n secuencial de una serie de cuatro procesos:";
 choices[22]= new Array();
 choices[22][0] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, perfil de riesgos potenciales, plan de contingencia y focos de riesgo";
 choices[22][1] = "Modelo de referencia b&aacute;sico, modelo de referencia detallado, perfil de riesgos potenciales y puntos de especial atenci&oacute;n";
 choices[22][2] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, modelo de referencia para el desarrollo, perfil de riesgos potenciales y focos de inter&eacute;s";
 choices[22][3] = "Objetivos del proyecto, plan de implantaci&oacute;n, inventario de recursos y perfil de riesgos potenciales";
 answers[22] = choices[22][2];
 units[22] = "88";
 comments[22] = "Id Pregunta: 2275. ";


//  Id pregunta: 2287 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El modelo EFQM, desde el punto de vista de su &aacute;mbito, podr&iacute;a calificarse como:";
 choices[23]= new Array();
 choices[23][0] = "Certificaci&oacute;n de producto";
 choices[23][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[23][2] = "Total Quality Management";
 choices[23][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[23] = choices[23][2];
 units[23] = "92";
 comments[23] = "Id Pregunta: 2287. NULL";


//  Id pregunta: 2376 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Es una m&eacute;trica de complejidad:";
 choices[24]= new Array();
 choices[24][0] = "Halstead";
 choices[24][1] = "McCavendish";
 choices[24][2] = "McCall";
 choices[24][3] = "Dominique";
 answers[24] = choices[24][0];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2376. ";


//  Id pregunta: 2386 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de revisi&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Correcci&oacute;n";
 choices[25][1] = "Mantenibilidad";
 choices[25][2] = "Verificabilidad";
 choices[25][3] = "Flexibilidad";
 answers[25] = choices[25][0];
 units[25] = "88";
 comments[25] = "Id Pregunta: 2386. ";


//  Id pregunta: 2395 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La ingenier&iacute;a inversa consiste en:";
 choices[26]= new Array();
 choices[26][0] = "Obtener los elementos de dise&ntilde;o de un sistema de informaci&oacute;n a partir del c&oacute;digo fuente y de las estructuras de datos que utiliza.";
 choices[26][1] = "Realizar un proceso de redise&ntilde;o de un sistema de informaci&oacute;n, bas&aacute;ndose en la utilizaci&oacute;n de las nuevas tecnolog&iacute;as de dise&ntilde;o inverso (desde el conocimiento de las posibilidades de las nuevas tecnolog&iacute;as hasta los requerimientos funcionales).";
 choices[26][2] = "Redise&ntilde;ar el c&oacute;digo y las estructuras de un sistema de informaci&oacute;n bas&aacute;ndose en los dise&ntilde;os f&iacute;sicos.";
 choices[26][3] = "Un conjunto de herramientas orientadas a facilitar las fases de an&aacute;lisis y dise&ntilde;o de los sistemas de informaci&oacute;n.";
 answers[26] = choices[26][0];
 units[26] = "91";
 comments[26] = "Id Pregunta: 2395. ";


//  Id pregunta: 2403 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La norma ISO 9000-3:";
 choices[27]= new Array();
 choices[27][0] = "Establece el certificado de conformidad del producto";
 choices[27][1] = "Asegura la calidad del certificado";
 choices[27][2] = "Es la especificaci&oacute;n de la ISO 9000 para sistemas y tecnolog&iacute;as de la informaci&oacute;n";
 choices[27][3] = "Certifica las auditor&iacute;as realizadas";
 answers[27] = choices[27][2];
 units[27] = "87";
 comments[27] = "Id Pregunta: 2403. NULL";


//  Id pregunta: 2449 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Las series ISO-9000, desde el punto de vista de su &aacute;mbito, podr&iacute;an calificarse como:";
 choices[28]= new Array();
 choices[28][0] = "Certificaci&oacute;n de producto";
 choices[28][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[28][2] = "Total Quality Management";
 choices[28][3] = "Ninguno de los anteriores";
 answers[28] = choices[28][1];
 units[28] = "87";
 comments[28] = "Id Pregunta: 2449. NULL";


//  Id pregunta: 2480 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Relativo al software, &iquest;qu&eacute; es una m&eacute;trica?:";
 choices[29]= new Array();
 choices[29][0] = "Aquellos elementos externos al usuario, relativos al comportamiento actual del software y a su facilidad de cambio";
 choices[29][1] = "Medidas cuantitativas del grado que se da al software desde el punto de vista de un atributo";
 choices[29][2] = "Son aquellos elementos relativos a la forma y estructura de programas, datos y documentos";
 choices[29][3] = "Los criterios para calificar al software";
 answers[29] = choices[29][1];
 units[29] = "88";
 comments[29] = "Id Pregunta: 2480. ";


//  Id pregunta: 2513 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Uno de los efectos de la falta de calidad en el desarrollo de software es la insatisfacci&oacute;n de los usuarios. &iquest;Cu&aacute;l es una de las principales causas de esta insatisfacci&oacute;n?:";
 choices[30]= new Array();
 choices[30][0] = "El dimensionamiento del hardware";
 choices[30][1] = "Las necesidades funcionales solicitadas y no contempladas por el software para &eacute;l desarrollado";
 choices[30][2] = "Las dificultades de adaptaci&oacute;n al nuevo trabajo";
 choices[30][3] = "Los usuarios no suelen estar insatisfechos nunca";
 answers[30] = choices[30][1];
 units[30] = "92";
 comments[30] = "Id Pregunta: 2513. NULL";


//  Id pregunta: 2554 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[31]= new Array();
 choices[31][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[31][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[31][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[31][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[31] = choices[31][2];
 units[31] = "87,88,92";
 comments[31] = "Id Pregunta: 2554. Pregunta Junta Andalucia - A";


//  Id pregunta: 2563 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Qu&eacute; es el Modelo CMM (Modelo de madurez de la capacidad de proceso de software)?";
 choices[32]= new Array();
 choices[32][0] = "Metodolog&iacute;a de dise&ntilde;o de omponentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[32][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[32][2] = "Modelo organizativo para el dise&ntilde;o software de macroensamblares cruzados";
 choices[32][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[32] = choices[32][3];
 units[32] = "87,88,92";
 comments[32] = "Id Pregunta: 2563. Pregunta Junta Andalucia - A";


//  Id pregunta: 2571 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de evaluaci&oacute;n de la calidad del software del tipo: ";
 choices[33]= new Array();
 choices[33][0] = "Metrica de Fiabilidad";
 choices[33][1] = "Metrica de los Factores de calidad";
 choices[33][2] = "Metrica de Complejidad";
 choices[33][3] = "Ninguna de ellas";
 answers[33] = choices[33][3];
 units[33] = "89";
 comments[33] = "Id Pregunta: 2571. NULL";


//  Id pregunta: 2572 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[34]= new Array();
 choices[34][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[34][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[34][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[34][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[34] = choices[34][2];
 units[34] = "87,88,92";
 comments[34] = "Id Pregunta: 2572. ";


//  Id pregunta: 2573 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[35]= new Array();
 choices[35][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[35][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[35][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[35][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[35] = choices[35][2];
 units[35] = "87,88,92";
 comments[35] = "Id Pregunta: 2573. ";


//  Id pregunta: 2576 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  El PGGC define los agentes que deben de intervenir en un proyecto inform&aacute;tico.&iquest;Qui&eacute;n no participa?";
 choices[36]= new Array();
 choices[36][0] = "EXP: Experto o analista";
 choices[36][1] = "EDS: Equipo de Desarrollo";
 choices[36][2] = "EGC: Equipo de Garantia de Calidad";
 choices[36][3] = "USR: Usuario o cliente";
 answers[36] = choices[36][0];
 units[36] = "87,88,92";
 comments[36] = "Id Pregunta: 2576. ";


//  Id pregunta: 2625 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;ntas variables explicativas adicionales (o drivers) existen en cocomo II?";
 choices[37]= new Array();
 choices[37][0] = "15";
 choices[37][1] = "17";
 choices[37][2] = "22";
 choices[37][3] = "10";
 answers[37] = choices[37][1];
 units[37] = "89";
 comments[37] = "Id Pregunta: 2625. NULL";


//  Id pregunta: 2631 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; formula expresa la relaci&oacute;n entre puntos de funci&oacute;n y COCOMO?";
 choices[38]= new Array();
 choices[38][0] = "FP= DSI * 320/nivel de lenguaje";
 choices[38][1] = "DSI= FP *  320 /nivel del lenguaje ";
 choices[38][2] = "FP= nivel de lenguaje / DSI * 320";
 choices[38][3] = "DSI= nivel de lenguaje / FP * 320";
 answers[38] = choices[38][1];
 units[38] = "89";
 comments[38] = "Id Pregunta: 2631. NULL";


//  Id pregunta: 2632 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Qu&eacute; formula expresa la relaci&oacute;n entre puntos de funci&oacute;n y COCOMO?";
 choices[39]= new Array();
 choices[39][0] = "FP= DSI * 320/nivel de lenguaje";
 choices[39][1] = "DSI= FP *  320 /nivel del lenguaje ";
 choices[39][2] = "FP= nivel de lenguaje / DSI * 320";
 choices[39][3] = "DSI= nivel de lenguaje / FP * 320";
 answers[39] = choices[39][1];
 units[39] = "89";
 comments[39] = "Id Pregunta: 2632. NULL";


//  Id pregunta: 2689 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[40]= new Array();
 choices[40][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[40][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[40][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][2];
 units[40] = "87,88,92";
 comments[40] = "Id Pregunta: 2689. ";


//  Id pregunta: 2802 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La norma ISO 9001";
 choices[41]= new Array();
 choices[41][0] = "Est&aacute; reservada para aquellas empresas que tengan dise&ntilde;o o desarrollo de servicios.";
 choices[41][1] = "Contiene 25 puntos que  describen los requisitos que deben implantarse en una empresa para asegurar que cumple con una norma de calidad predefinida.";
 choices[41][2] = "Es la menos exigente de las opciones de la ISO 9000.";
 choices[41][3] = "Se diferencia de la ISO 9002 en que no contiene los puntos concernientes a Dise&ntilde;o, Compras, Control de procesos y Postventa.";
 answers[41] = choices[41][0];
 units[41] = "87";
 comments[41] = "Id Pregunta: 2802. NULL";


//  Id pregunta: 2808 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La Precisi&oacute;n es un criterio relacionado con:";
 choices[42]= new Array();
 choices[42][0] = "La Usabilidad.";
 choices[42][1] = "La Correcci&oacute;n.";
 choices[42][2] = "La Eficiencia.";
 choices[42][3] = "La Fiabilidad.";
 answers[42] = choices[42][3];
 units[42] = "88";
 comments[42] = "Id Pregunta: 2808. NULL";


//  Id pregunta: 2831 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  La ingenier&iacute;a inversa:";
 choices[43]= new Array();
 choices[43][0] = "Seg&uacute;n el IEEE, es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original a un mayor nivel de abstracci&oacute;n";
 choices[43][1] = "Es sin&oacute;nimo de Reingenier&iacute;a";
 choices[43][2] = "Es sin&oacute;nimo de Forward Engineering";
 choices[43][3] = "El IEEE no proporciona una definici&oacute;n de Ingenier&iacute;a Inversa";
 answers[43] = choices[43][0];
 units[43] = "91";
 comments[43] = "Id Pregunta: 2831. NULL";


//  Id pregunta: 2840 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da al liderazgo?";
 choices[44]= new Array();
 choices[44][0] = "15";
 choices[44][1] = "10";
 choices[44][2] = "20";
 choices[44][3] = "9";
 answers[44] = choices[44][1];
 units[44] = "92";
 comments[44] = "Id Pregunta: 2840. NULL";


//  Id pregunta: 4288 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La calidad del software entregado ser&aacute; alta si la EED (Eficacia de la Eliminaci&oacute;n de Defectos):";
 choices[45]= new Array();
 choices[45][0] = "Se acerca a uno";
 choices[45][1] = "Se acerca a cero.";
 choices[45][2] = "Es mayor que uno.";
 choices[45][3] = "Es negativa.";
 answers[45] = choices[45][0];
 units[45] = "87";
 comments[45] = "Id Pregunta: 4288. NULL";


//  Id pregunta: 4311 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Durante el desarrollo de un proyecto de software se han detectado dos defectos similares. Uno de ellos se detect&oacute; en la fase de especificaci&oacute;n de requisitos, y el otro en la fase de implementaci&oacute;n. &iquest;Cu&aacute;l de las siguientes afirmaciones sobre este escenario es m&aacute;s probablemente cierta?:";
 choices[46]= new Array();
 choices[46][0] = "El defecto m&aacute;s costoso de corregir ser&aacute; el detectado en la fase de especificaci&oacute;n de requisitos.";
 choices[46][1] = "El defecto m&aacute;s costoso de corregir ser&aacute; el detectado en la fase de implementaci&oacute;n.";
 choices[46][2] = "El coste de corregir ambos defectos ser&aacute; aproximadamente el mismo.";
 choices[46][3] = "No existe relaci&oacute;n entre la fase en la que se detecta un defecto y el coste de su correcci&oacute;n.";
 answers[46] = choices[46][1];
 units[46] = "87";
 comments[46] = "Id Pregunta: 4311. NULL";


//  Id pregunta: 4394 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El repositorio com&uacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Agrupa un conjunto de herramientas de desarrollo.";
 choices[47][1] = "Forma un banco de trabajo.";
 choices[47][2] = "Organiza un entorno de desarrollo.";
 choices[47][3] = "Es un manejador de versiones.";
 answers[47] = choices[47][2];
 units[47] = "87";
 comments[47] = "Id Pregunta: 4394. NULL";


//  Id pregunta: 4445 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Indique el apartado que no debe incluir necesariamente el manual de calidad que Ia organizaci&oacute;n debe establecer y mantener, seg&uacute;n la norma ISO 9001.";
 choices[48]= new Array();
 choices[48][0] = "Las declaraciones documentadas de la pol&iacute;tica de calidad y de objetivos de la calidad.";
 choices[48][1] = "El alcance del sistema de gesti&oacute;n de calidad.";
 choices[48][2] = "Los procedimientos documentados establecidos para el sistema de gesti&oacute;n de calidad.";
 choices[48][3] = "La descripci&oacute;n de Ia interacci&oacute;n entre los procesos del sistema de gesti&oacute;n de calidad.";
 answers[48] = choices[48][0];
 units[48] = "92";
 comments[48] = "Id Pregunta: 4445. NULL";


//  Id pregunta: 4495 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Que nivel del modelo CMMi se caracteriza porque el proceso del software de las actividades de gesti&oacute;n e ingenier&iacute;a esta documentado, estandarizado e integrado?";
 choices[49]= new Array();
 choices[49][0] = "Nivel 2 (Gestionado)";
 choices[49][1] = "Nivel 3 (Definido)";
 choices[49][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[49][3] = "Nivel 5 (Optimizado)";
 answers[49] = choices[49][1];
 units[49] = "87";
 comments[49] = "Id Pregunta: 4495. NULL";


//  Id pregunta: 4578 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[50]= new Array();
 choices[50][0] = "La ingenier&iacute;a inversa es el proceso de codificar los programas m&aacute;s eficientemente.";
 choices[50][1] = "La reingenier&iacute;a del software incluye el an&aacute;lisis de inventario.";
 choices[50][2] = "La ingenier&iacute;a inversa s&oacute;lo es aplicable al software estructurado.";
 choices[50][3] = "La ingenier&iacute;a directa es el proceso de analizar un programa para extraer informaci&oacute;n acerca de los datos, de su arquitectura y del dise&ntilde;o de procedimientos.";
 answers[50] = choices[50][1];
 units[50] = "91";
 comments[50] = "Id Pregunta: 4578. Castilla la Mancha B 06";


//  Id pregunta: 4719 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[51]= new Array();
 choices[51][0] = "400 puntos sobre 1000.";
 choices[51][1] = "500 puntos sobre 1000.";
 choices[51][2] = "700 puntos sobre 1000.";
 choices[51][3] = "900 puntos sobre 1000.";
 answers[51] = choices[51][1];
 units[51] = "92";
 comments[51] = "Id Pregunta: 4719. Examen 2006 JCYL";


//  Id pregunta: 4804 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[52]= new Array();
 choices[52][0] = "An&aacute;lisis de inventarios.";
 choices[52][1] = "Ingenier&iacute;a inversa.";
 choices[52][2] = "Ingenier&iacute;a directa.";
 choices[52][3] = "Ingenier&iacute;a relacional.";
 answers[52] = choices[52][3];
 units[52] = "91";
 comments[52] = "Id Pregunta: 4804. examen TIC 2006";


//  Id pregunta: 4841 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neasde c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en c&oacute;digo C el ratio es 128LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[53]= new Array();
 choices[53][0] = "148";
 choices[53][1] = "250";
 choices[53][2] = "460";
 choices[53][3] = "210";
 answers[53] = choices[53][2];
 units[53] = "89";
 comments[53] = "Id Pregunta: 4841. NULL";


//  Id pregunta: 4872 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  Seg&uacute;n el Modelo de Calidad de McCall, el factor &quot;Correcci&oacute;n&quot; debe ser tenido en cuenta cuando el productosoftware se encuentra en la fase de:";
 choices[54]= new Array();
 choices[54][0] = "Construcci&oacute;n";
 choices[54][1] = "Explotaci&oacute;n";
 choices[54][2] = "Revisi&oacute;n";
 choices[54][3] = "Transici&oacute;n";
 answers[54] = choices[54][1];
 units[54] = "88";
 comments[54] = "Id Pregunta: 4872. NULL";


//  Id pregunta: 5013 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?:";
 choices[55]= new Array();
 choices[55][0] = "Entradas";
 choices[55][1] = "Salidas";
 choices[55][2] = "Consultas";
 choices[55][3] = "Usuarios";
 answers[55] = choices[55][3];
 units[55] = "89";
 comments[55] = "Id Pregunta: 5013. Examen TIC A 2007, preparatic XVII";


//  Id pregunta: 5107 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  La norma ISO 9001 cuando se desarrolla, implementa y mejora la eficacia de un sistema de gesti&oacute;n de calidad promueve un enfoque:";
 choices[56]= new Array();
 choices[56][0] = "Basado en procesos.";
 choices[56][1] = "Basado en tareas.";
 choices[56][2] = "Basado en el usuario.";
 choices[56][3] = "Basado en recursos.";
 answers[56] = choices[56][0];
 units[56] = "87";
 comments[56] = "Id Pregunta: 5107. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5144 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es el orden correcto en el que se realizan los pasos en un proceso de reingenier&iacute;a?";
 choices[57]= new Array();
 choices[57][0] = "Ingenier&iacute;a directa, ingenier&iacute;a inversa, an&aacute;lisis de c&oacute;digo, redise&ntilde;o y restructuraci&oacute;n.";
 choices[57][1] = "An&aacute;lisis de c&oacute;digo, redise&ntilde;o, ingenier&iacute;a inversa, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[57][2] = "An&aacute;lisis de c&oacute;digo, ingenier&iacute;a inversa, redise&ntilde;o, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[57][3] = "An&aacute;lisis de c&oacute;digo, reestructuraci&oacute;n, ingenier&iacute;a inversa, redise&ntilde;o e ingenier&iacute;a directa.";
 answers[57] = choices[57][3];
 units[57] = "91";
 comments[57] = "Id Pregunta: 5144. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5250 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indique la afirmaci&oacute;n falsa relativa al Aseguramiento de la Calidad:";
 choices[58]= new Array();
 choices[58][0] = "Es una de las 4 interfaces definidas en M&eacute;trica v3";
 choices[58][1] = "El objetivo de esta interfaz es proporcionar un marco com&uacute;n de referencia para la definici&oacute;n y puesta marcha planes espec&iacute;ficos de aseguramiento de calidad aplicables a proyectos concretos";
 choices[58][2] = "Sus actividades orientadas a verificar y evaluar la calidad de los productos por un grupo de Aseguramiento de Calidad independiente";
 choices[58][3] = "Estas actividades entran en contradicci&oacute;n con el Plan General de Garant&iacute;a de Calidad (PGGC)";
 answers[58] = choices[58][3];
 units[58] = "87";
 comments[58] = "Id Pregunta: 5250. NULL";


//  Id pregunta: 5256 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  En relaci&oacute;n a las m&eacute;tricas de calidad del Software NO es correcto afirmar:";
 choices[59]= new Array();
 choices[59][0] = "Las m&eacute;tricas  se pueden utilizar para evaluar en qu&eacute; grado el software posee las distintas caracter&iacute;sticas que definen la calidad de un producto software.";
 choices[59][1] = "Las m&eacute;tricas se apoyan en 2 tipos de atributos, internos y externos.";
 choices[59][2] = "Los atributos internos son aquellos que se pueden medir en t&eacute;rminos de la propia entidad independientemente de su comportamiento.";
 choices[59][3] = "Las m&eacute;tricas se pueden aplicar s&oacute;lo a una etapa del ciclo de vida del desarrollo del software.";
 answers[59] = choices[59][3];
 units[59] = "88";
 comments[59] = "Id Pregunta: 5256. NULL";


//  Id pregunta: 5262 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[60]= new Array();
 choices[60][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[60][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[60][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][1];
 units[60] = "88";
 comments[60] = "Id Pregunta: 5262. NULL";


//  Id pregunta: 5849 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes no corresponde a una t&eacute;cnica de estimaci&oacute;n del tama&ntilde;o de un sistema software?";
 choices[61]= new Array();
 choices[61][0] = "Puntos funci&oacute;n de Albrecht";
 choices[61][1] = "Use case points";
 choices[61][2] = "Puntos funci&oacute;n MarkII";
 choices[61][3] = "Puntos funci&oacute;n de Boehm";
 answers[61] = choices[61][3];
 units[61] = "89";
 comments[61] = "Id Pregunta: 5849. NULL";


//  Id pregunta: 5963 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Gesti&oacute;n de la calidad";
 choices[62][1] = "Norma de la calidad";
 choices[62][2] = "Pol&iacute;tica de la calidad";
 choices[62][3] = "Direcci&oacute;n de la calidad";
 answers[62] = choices[62][2];
 units[62] = "87";
 comments[62] = "Id Pregunta: 5963. Castilla La Mancha 2009";


//  Id pregunta: 5966 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Seg&uacute;n CMMI, todos los elementos que influyen en la construcci&oacute;n del producto son:";
 choices[63]= new Array();
 choices[63][0] = "El procedimiento, la tecnolog&iacute;a, la direcci&oacute;n y las personas";
 choices[63][1] = "El proceso, la tecnolog&iacute;a y las personas";
 choices[63][2] = "El procedimiento, el proceso, la tecnolog&iacute;a y las personas";
 choices[63][3] = "El proceso y el procedimiento";
 answers[63] = choices[63][1];
 units[63] = "87";
 comments[63] = "Id Pregunta: 5966. Castilla La Mancha 2009";


//  Id pregunta: 5973 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Cu&aacute;l de las siguientes afirmaciones es aplicable a la reingenier&iacute;a basada en &quot;wrapping&quot;:";
 choices[64]= new Array();
 choices[64][0] = "&quot;Wrapping&quot; consiste en envolver interfaces basadas en texto con un entorno gr&aacute;fico basado en GUI o en HTML.";
 choices[64][1] = "La t&eacute;cnica &quot;wrapping&quot; es actualmente conocida como modernizaci&oacute;n de caja blanca.";
 choices[64][2] = "&quot;Wrapping&quot; es una reingenier&iacute;a en las que s&oacute;lo se analizan las interfaces (las entradas y salidas) del &quot;legacy&quot; ignorando los detalles internos.";
 choices[64][3] = "&quot;Wrapping&quot; es una reingenier&iacute;a mediante la cual se produce documentaci&oacute;n retroactivamente desde un sistema existente.";
 answers[64] = choices[64][2];
 units[64] = "91";
 comments[64] = "Id Pregunta: 5973. TIC A 2009";


//  Id pregunta: 6006 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  La redocumentaci&oacute;n es:";
 choices[65]= new Array();
 choices[65][0] = "Una forma de ingenier&iacute;a inversa.";
 choices[65][1] = "Es el proceso mediante el que se produce documentaci&oacute;n desde un sistema en desarrollo.";
 choices[65][2] = "Es el mismo concepto que humanware.";
 choices[65][3] = "Es la identificaci&oacute;n de los componentes de un sistema y sus relaciones.";
 answers[65] = choices[65][0];
 units[65] = "91";
 comments[65] = "Id Pregunta: 6006. TIC A 2009";


//  Id pregunta: 6218 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En el modelo de estimaci&oacute;n de costes COCOMO se utiliza de base la siguiente funci&oacute;n: 'E = a(Kl)b * m(X)' &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[66]= new Array();
 choices[66][0] = "a y b son variables con valores indefinidos";
 choices[66][1] = "Kl es la cantidad de l&iacute;neas de c&oacute;digo, en millones";
 choices[66][2] = "m(X) es una variable obtenida en una tabla a partir del n&uacute;mero de trabajadores y del conocimiento de las herramientas a utilizar";
 choices[66][3] = "El resultado se da en unidades salario/mes y horas-hombre";
 answers[66] = choices[66][3];
 units[66] = "89";
 comments[66] = "Id Pregunta: 6218. TICB-2009, bloque desarrollo";


//  Id pregunta: 6534 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El modelo EFQM de excelencia ";
 choices[67]= new Array();
 choices[67][0] = "Es un modelo din&aacute;mico";
 choices[67][1] = "Sigue el esquema l&oacute;gico REDER (RADAR en ingl&eacute;s)";
 choices[67][2] = "Tiene un car&aacute;cter globalizador que cubre todos los aspectos del funcionamiento de una organizaci&oacute;n";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][3];
 units[67] = "92";
 comments[67] = "Id Pregunta: 6534. NULL";


//  Id pregunta: 6623 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  ISO 8402 define la calidad del software como:";
 choices[68]= new Array();
 choices[68][0] = "La capacidad de un conjunto de caracter&iacute;sticas intr&iacute;nsecas para satisfacer requisitos";
 choices[68][1] = "Conjunto de propiedades y caracter&iacute;sticas de un producto o servicio, que le confieren aptitud para satisfacer una serie de necesidades expl&iacute;citas o impl&iacute;citas";
 choices[68][2] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que seesperan de todo software desarrollado profesionalmente";
 choices[68][3] = "La norma ISO 8402 no es una norma de calidad";
 answers[68] = choices[68][1];
 units[68] = "87";
 comments[68] = "Id Pregunta: 6623. NULL";


//  Id pregunta: 6624 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes NO es una norma aplicable a la Calidad del Software?";
 choices[69]= new Array();
 choices[69][0] = "ISO 15.504";
 choices[69][1] = "ISO 19011";
 choices[69][2] = "ISO 9000:2000";
 choices[69][3] = "ISO 15.408";
 answers[69] = choices[69][3];
 units[69] = "87";
 comments[69] = "Id Pregunta: 6624. NULL";


//  Id pregunta: 6625 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  CMM en el campo de la ingenier&iacute;a y calidad del software son las siglas de:";
 choices[70]= new Array();
 choices[70][0] = "Capacity Maturity Model";
 choices[70][1] = "Capability Maturity Model";
 choices[70][2] = "Capacity Management Model";
 choices[70][3] = "Capability Management Model";
 answers[70] = choices[70][1];
 units[70] = "87";
 comments[70] = "Id Pregunta: 6625. NULL";


//  Id pregunta: 6630 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  El modelo CMM de Ingenier&iacute;a de Software tiene:";
 choices[71]= new Array();
 choices[71][0] = "5 niveles de Capacidad y 6 niveles de Madurez";
 choices[71][1] = "5 niveles de Capacidad y 5 niveles de Madurez";
 choices[71][2] = "6 niveles de Capacidad y 5 niveles de Madurez";
 choices[71][3] = "6 niveles de Capacidad y 6 niveles de Madurez";
 answers[71] = choices[71][2];
 units[71] = "87";
 comments[71] = "Id Pregunta: 6630. NULL";


//  Id pregunta: 6636 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[72]= new Array();
 choices[72][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[72][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[72][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[72][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[72] = choices[72][1];
 units[72] = "88";
 comments[72] = "Id Pregunta: 6636. NULL";


//  Id pregunta: 6638 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  El modelo COCOMO II propone los modelos:";
 choices[73]= new Array();
 choices[73][0] = "Modelo de Composici&oacute;n de la Aplicci&oacute;n, Dise&ntilde;o Preliminar y Modelo Post-Arquitectura";
 choices[73][1] = "Modelo de Composici&oacute;n de la Aplicci&oacute;n y Dise&ntilde;o Preliminar";
 choices[73][2] = "Modelo Org&aacute;nico y Semiacoplado";
 choices[73][3] = "Modelo Org&aacute;nico, Semiacoplado y Empotrado";
 answers[73] = choices[73][0];
 units[73] = "88";
 comments[73] = "Id Pregunta: 6638. NULL";


//  Id pregunta: 6641 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Dentro de las t&eacute;cnicas para medir la complejidad del software NO se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "La t&eacute;cnica de McCabe";
 choices[74][1] = "La t&eacute;cnica de McCall";
 choices[74][2] = "La t&eacute;cnica de Halstead";
 choices[74][3] = "La t&eacute;cnica de Bang";
 answers[74] = choices[74][1];
 units[74] = "88";
 comments[74] = "Id Pregunta: 6641. NULL";


//  Id pregunta: 6648 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes m&eacute;tricas NO se usa en el modelo COCOMO?";
 choices[75]= new Array();
 choices[75][0] = "KLOC (K Lines Of Code)";
 choices[75][1] = "NSLOC (New Source Lines Of Code)";
 choices[75][2] = "DSI (Delivery Source Instructions)";
 choices[75][3] = "NSDSI (New Source Delivery Source Instructions)";
 answers[75] = choices[75][3];
 units[75] = "89";
 comments[75] = "Id Pregunta: 6648. NULL";


//  Id pregunta: 8186 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Seg&uacute;n el m&eacute;todo de puntos funci&oacute;n de Albrecht, marque la respuesta correcta para el valor de PFA (Puntos de Funci&oacute;n Ajustados), si PFNA (Puntos de Funci&oacute;n No Ajustados) y SVA (Suma de los Valores de los 14 Atributos o caracter&iacute;sticasgenerales del sistema) valen respectivamente 100 y 65:";
 choices[76]= new Array();
 choices[76][0] = "165";
 choices[76][1] = "120";
 choices[76][2] = "SVA no puede tener un valor superior a 50.";
 choices[76][3] = "130";
 answers[76] = choices[76][3];
 units[76] = "89";
 comments[76] = "Id Pregunta: 8186. Examen TIC A1 2010";


//  Id pregunta: 8331 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Con qu&eacute; nombre se conoce a las herramientas CASE adaptables que permiten la definici&oacute;n de nuestra propia t&eacute;cnica de modelado,pudiendo definir nuestros propios elementos y s&iacute;mbolos de las notaciones a utilizar?";
 choices[77]= new Array();
 choices[77][0] = "Upper CASE (U-CASE)";
 choices[77][1] = "MetaCASE";
 choices[77][2] = "CAST (Computer-Aided Software Testing)";
 choices[77][3] = "IPSE (Integrated Programming Support Environment)";
 answers[77] = choices[77][1];
 units[77] = "91";
 comments[77] = "Id Pregunta: 8331. Examen TIC A2 2010";


//  Id pregunta: 8391 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Para las pruebas de caja transparente, se&ntilde;ale la opci&oacute;n correcta:";
 choices[78]= new Array();
 choices[78][0] = "Aseguran la ausencia absoluta de defectos.";
 choices[78][1] = "Comprueban la funcionalidad de un programa.";
 choices[78][2] = "Se realizan ignorando completamente la estructura interna de un programa.";
 choices[78][3] = "Exigen el conocimiento de la estructura interna del programa.";
 answers[78] = choices[78][3];
 units[78] = "91";
 comments[78] = "Id Pregunta: 8391. Examen TIC A2 2010";


//  Id pregunta: 8818 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[79]= new Array();
 choices[79][0] = "Para dar confianza";
 choices[79][1] = "Para asegurar que el software funciona";
 choices[79][2] = "Para evaluar el proceso de desarrollo de software";
 choices[79][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[79] = choices[79][3];
 units[79] = "87, 92";
 comments[79] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 8819 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[80]= new Array();
 choices[80][0] = "ISO 9001";
 choices[80][1] = "ISO 9000";
 choices[80][2] = "ISO 9004";
 choices[80][3] = "ISO 19011";
 answers[80] = choices[80][0];
 units[80] = "87, 92";
 comments[80] = "Id Pregunta: 8819. Examen UPM A2 2011";


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


//  Id pregunta: 9340 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  La t&eacute;cnica de McCabe permite medir:";
 choices[82]= new Array();
 choices[82][0] = "la productividad del software";
 choices[82][1] = "la complejidad del software";
 choices[82][2] = "la fiabilidad del software";
 choices[82][3] = "Ninguna de las tres";
 answers[82] = choices[82][1];
 units[82] = "88";
 comments[82] = "Id Pregunta: 9340. NULL";


//  Id pregunta: 9418 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  El uso de la t&eacute;cnica de la media para combinar estimaciones software individuales es caracter&iacute;stico de los m&eacute;todos";
 choices[83]= new Array();
 choices[83][0] = "Con base hist&oacute;rica";
 choices[83][1] = "Con base estad&iacute;stica";
 choices[83][2] = "Compuestos";
 choices[83][3] = "Lineales";
 answers[83] = choices[83][0];
 units[83] = "89";
 comments[83] = "Id Pregunta: 9418. NULL";


//  Id pregunta: 9419 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  El modelo de estimaci&oacute;n de Putnam se caracteriza por";
 choices[84]= new Array();
 choices[84][0] = "Ser un modelo te&oacute;rico";
 choices[84][1] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[84][2] = "Incluir una constante tecnol&oacute;gica";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][3];
 units[84] = "89";
 comments[84] = "Id Pregunta: 9419. NULL";


//  Id pregunta: 9423 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[85]= new Array();
 choices[85][0] = "No cubre todo el ciclo de vida de desarrollo del software, puesto que no se incluye por ejemplo el estudio de viabilidad del sistema";
 choices[85][1] = "Supone que existe una buena direcci&oacute;n por parte del desarrollador y del cliente";
 choices[85][2] = "S&oacute;lo cubre los costes directos del proyecto";
 choices[85][3] = "Un mes.hombre consta de 160 horas de trabajo";
 answers[85] = choices[85][3];
 units[85] = "89";
 comments[85] = "Id Pregunta: 9423. NULL";


//  Id pregunta: 9652 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Entre las caracter&iacute;sticas del modelo de calidad de la ISO 9126 se encuentran:";
 choices[86]= new Array();
 choices[86][0] = "Funcionalidad";
 choices[86][1] = "Fiabilidad";
 choices[86][2] = "Portabilidad";
 choices[86][3] = "Todas las anteriores";
 answers[86] = choices[86][3];
 units[86] = "87";
 comments[86] = "Id Pregunta: 9652. Son 6, Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad";


//  Id pregunta: 9708 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  De acuerdo con la definiciones dadas por el grupo de trabajo del IEEE Computer Society, la reestructuraci&oacute;n software (restructuring) es";
 choices[87]= new Array();
 choices[87][0] = "el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos.";
 choices[87][1] = "el examen y la modificaci&oacute;n de un sistema para ser reconstruido de una forma nueva y realizar la implantaci&oacute;n derivada de esta nueva forma.";
 choices[87][2] = "la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero sin modificar el comportamiento externo del sistema.";
 choices[87][3] = "un proceso completo que va desde una alto nivel de abstracci&oacute;n, hasta la propia implementaci&oacute;n f&iacute;sica del sistema.";
 answers[87] = choices[87][2];
 units[87] = "91";
 comments[87] = "Id Pregunta: 9708. Examen TIC-A1 2013";


//  Id pregunta: 9906 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En el modelo CMM (Capability Maturity Model) un grado mayor de madurez al nivel Repetible es:";
 choices[88]= new Array();
 choices[88][0] = "Optimizado";
 choices[88][1] = "Definido";
 choices[88][2] = "Gestionado";
 choices[88][3] = "Inicial";
 answers[88] = choices[88][1];
 units[88] = "87";
 comments[88] = "Id Pregunta: 9906. TIC A2, Examen 2013";


//  Id pregunta: 10286 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; tipo de mantenimiento debe realizarse como consecuencia de los cambios en el entorno de operaci&oacute;n?";
 choices[89]= new Array();
 choices[89][0] = "Operativo";
 choices[89][1] = "Correctivo";
 choices[89][2] = "Perfectivo";
 choices[89][3] = "Adaptativo";
 answers[89] = choices[89][3];
 units[89] = "91";
 comments[89] = "Id Pregunta: 10286. TIC A2, libre, examen 2013";


//  Id pregunta: 10482 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  El m&eacute;todo SLIM de estimaci&oacute;n de esfuerzo, usa la curva de:";
 choices[90]= new Array();
 choices[90][0] = "F de Snedecor";
 choices[90][1] = "Parkingson";
 choices[90][2] = "Norden-Rayleigh";
 choices[90][3] = "Pareto";
 answers[90] = choices[90][2];
 units[90] = "89";
 comments[90] = "Id Pregunta: 10482. NULL";


//  Id pregunta: 10643 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de estos no es un concepto fundamental de la excelencia seg&uacute;n el modelo EFQM?";
 choices[91]= new Array();
 choices[91][0] = "Orientaci&oacute;n hacia los resultados";
 choices[91][1] = "Liderazgo y coherencia en los objetivos";
 choices[91][2] = "Desarrollo de Alianzas";
 choices[91][3] = "Planificaci&oacute;n a corto plazo";
 answers[91] = choices[91][3];
 units[91] = "92";
 comments[91] = "Id Pregunta: 10643. ";


//  Id pregunta: 10646 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; es un sistema legacy?";
 choices[92]= new Array();
 choices[92][0] = "Un sistema de informaci&oacute;n que, estando anticuado, contin&uacute;a siendo utilizado.";
 choices[92][1] = "Un sistema de informaci&oacute;n que est&aacute; anticuado y no se utiliza, pero contin&uacute;a instalado en los servidores de la organizaci&oacute;n.";
 choices[92][2] = "Un sistema de informaci&oacute;n de reemplazo para los sistemas anticuados.";
 choices[92][3] = "Un sistema de informaci&oacute;n que, aunque actualizado y sin incidencias, quiere ser evolucionado a otro con m&aacute;s funcionalidades.";
 answers[92] = choices[92][0];
 units[92] = "91";
 comments[92] = "Id Pregunta: 10646. ";


//  Id pregunta: 10972 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto al esquema l&oacute;gico REDER que se encuentra dentro del modelo EFQM?";
 choices[93]= new Array();
 choices[93][0] = "La Evaluaci&oacute;n y Revisi&oacute;n se ocupa de los logros que est&aacute; alcanzando una organizaci&oacute;n.";
 choices[93][1] = "Los Resultados se ocupan de c&oacute;mo una organizaci&oacute;n implanta sistem&aacute;ticamente el enfoque.";
 choices[93][2] = "El Enfoque abarca lo que una organizaci&oacute;n planifica hacer y las razones para ello.";
 choices[93][3] = "El Despliegue aborda lo que hace una organizaci&oacute;n para evaluar, revisar y mejorar el enfoque.";
 answers[93] = choices[93][2];
 units[93] = "92";
 comments[93] = "Id Pregunta: 10972. TIC A1 AGE 2014";


//  Id pregunta: 11163 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;A qu&eacute; concepto se corresponde la definici&oacute;n: &ldquo;proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n.&rdquo;";
 choices[94]= new Array();
 choices[94][0] = "Ingenier&iacute;a inversa";
 choices[94][1] = "Reingenier&iacute;a";
 choices[94][2] = "Ingenier&iacute;a hacia delante";
 choices[94][3] = "Ninguna de las anteriores";
 answers[94] = choices[94][0];
 units[94] = "91";
 comments[94] = "Id Pregunta: 11163. ";


//  Id pregunta: 11165 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De acuerdo con la Norma ISO 9004 sobre la madurez del sistema de gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes descripciones se refiere al nivel de madurez 1?";
 choices[95]= new Array();
 choices[95][0] = "Proceso de mejora existente y en uso";
 choices[95][1] = "No hay una aproximaci&oacute;n sistem&aacute;tica evidente; sin resultados, resultados pobres o resultados impredecibles.";
 choices[95][2] = "Aproximaci&oacute;n sistem&aacute;tica basada en el problema o en la prevenci&oacute;n; m&iacute;nimos datos disponibles sobre los resultados de mejora.";
 choices[95][3] = "Proceso de mejora ampliamente integrado.";
 answers[95] = choices[95][1];
 units[95] = "92";
 comments[95] = "Id Pregunta: 11165. ";


//  Id pregunta: 11542 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La duraci&oacute;n del camino m&aacute;s corto que hay desde el suceso inicial de un proyecto hasta el suceso &quot;n&quot; que se est&aacute; considerando es:";
 choices[96]= new Array();
 choices[96][0] = "EARLY del suceso &quot;n&quot;";
 choices[96][1] = "LAST del suceso &quot;n&quot;";
 choices[96][2] = "Tiempo de inicio del suceso &quot;n&quot;";
 choices[96][3] = "Ninguna de las anteriores";
 answers[96] = choices[96][3];
 units[96] = "89";
 comments[96] = "Id Pregunta: 11542. Conceptos PERT";


//  Id pregunta: 11548 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  De acuerdo a los 6 niveles definidos en CMMI para medir la capacidad de los procesos, &iquest;Qu&eacute; nivel corresponde a un proceso que adem&aacute;s de ser gestionado, se ajusta a la pol&iacute;tica de procesos que existe en la organizaci&oacute;n, alineada con las directivas de la empresa?";
 choices[97]= new Array();
 choices[97][0] = "Nivel 3 Definido";
 choices[97][1] = "Nivel 4 Cuantitativamente Gestionado";
 choices[97][2] = "Nivel 3 Predecible";
 choices[97][3] = "Nivel 5 Optimizado";
 answers[97] = choices[97][0];
 units[97] = "87";
 comments[97] = "Id Pregunta: 11548. NULL";


//  Id pregunta: 11549 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n el modelo EFQM (versi&oacute;n 2013) &iquest;Cu&aacute;l de los siguientes no lo considera como un concepto fundamental de la excelencia?";
 choices[98]= new Array();
 choices[98][0] = "Desarrolar la capacidad de la organizaci&oacute;n.";
 choices[98][1] = "Gestionar con agilidad.";
 choices[98][2] = "Alcanzar el &eacute;xito mediante el talento de las personas.";
 choices[98][3] = "Todos los anteriores son conceptos fundamentales para la excelencia.";
 answers[98] = choices[98][3];
 units[98] = "87";
 comments[98] = "Id Pregunta: 11549. NULL";


//  Id pregunta: 11555 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El model COCOMO contempla tres modos distintos de desarrollo del software. El m&aacute;s adecuado para un proyecto de unas 300.000 instrucciones de c&oacute;digo fuente, con unos requisitos extremadamente r&iacute;gidos, es:";
 choices[99]= new Array();
 choices[99][0] = "Modo semilibre.";
 choices[99][1] = "Modo empotrado.";
 choices[99][2] = "Modo org&aacute;nico.";
 choices[99][3] = "Modo avanzado.";
 answers[99] = choices[99][1];
 units[99] = "89";
 comments[99] = "Id Pregunta: 11555. NULL";


