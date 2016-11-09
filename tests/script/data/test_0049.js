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

//  Id pregunta: 144 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El est&aacute;ndar POSIX se corresponde con la norma internacional:";
 choices[0]= new Array();
 choices[0][0] = "ISO 9945-1";
 choices[0][1] = "IEEE 1033.1";
 choices[0][2] = "OSF 99945-1";
 choices[0][3] = "ISO 1003-1";
 answers[0] = choices[0][0];
 units[0] = "42";
 comments[0] = "Id Pregunta: 144. ";


//  Id pregunta: 147 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El la teor&iacute;a de la decisi&oacute;n multicriterio discreta, para el problema de la asignaci&oacute;n de pesos a criterios pueden utilizarse, entre otros, los m&eacute;todos:";
 choices[1]= new Array();
 choices[1][0] = "Lexicogr&aacute;fico y Promethee";
 choices[1][1] = "El m&eacute;todo de ponderaci&oacute;n lineal";
 choices[1][2] = "El m&eacute;todo Delphi y el de la entrop&iacute;a";
 choices[1][3] = "El m&eacute;todo de ponderaci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "34";
 comments[1] = "Id Pregunta: 147. NULL";


//  Id pregunta: 204 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La teor&iacute;a de la decisi&oacute;n multicriterio discreta";
 choices[2]= new Array();
 choices[2][0] = "tiene problemas con una incorrecta asignaci&oacute;n de pesos";
 choices[2][1] = "es usada en la elecci&oacute;n de contratos por parte de la administraci&oacute;n en ocasiones";
 choices[2][2] = "la normalizaci&oacute;n de las puntuaciones puede hacer perder la proporcionalidad";
 choices[2][3] = "todas las anteriores";
 answers[2] = choices[2][3];
 units[2] = "34";
 comments[2] = "Id Pregunta: 204. ";


//  Id pregunta: 230 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En los conceptos principales de la seguridad inform&aacute;tica no es cierto que:";
 choices[3]= new Array();
 choices[3][0] = "los da&ntilde;os sobre los activos producen impactos";
 choices[3][1] = "los impactos son materializaciones de las amenazas sobre los activos";
 choices[3][2] = "las salvaguardas ofrecen medidas curativas sobre los impactos, y preventivas sobre las vulnerabilidades";
 choices[3][3] = "los riesgos son las frecuencias con las que se pueden producir las amenazas sobre los activos";
 answers[3] = choices[3][3];
 units[3] = "33";
 comments[3] = "Id Pregunta: 230. ";


//  Id pregunta: 301 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La escalabilidad es:";
 choices[4]= new Array();
 choices[4][0] = "Un caso particular de la portabilidad";
 choices[4][1] = "La capacidad de utilizar el mismo entorno de software en diferentes clases de ordenadores";
 choices[4][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[4][3] = "Una propiedad que se da &uacute;nicamente en el mundo Unix";
 answers[4] = choices[4][2];
 units[4] = "40";
 comments[4] = "Id Pregunta: 301. ";


//  Id pregunta: 447 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n las teor&iacute;as de Alvin Toffler:";
 choices[5]= new Array();
 choices[5][0] = "Las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[5][1] = "Las organizaciones basadas en la informaci&oacute;n tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[5][2] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de S";
 choices[5][3] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de doble S";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 447. ";


//  Id pregunta: 480 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;De qu&eacute; depende el canon de compensacion equitativa por copia privada establecido con la orden PRE/1743/2008 de 18 de junio?";
 choices[6]= new Array();
 choices[6][0] = "Del tipo de equipo (anal&oacute;gico o digital)";
 choices[6][1] = "Del destino del soporte";
 choices[6][2] = "De la categoria del equipo";
 choices[6][3] = "Todas son ciertas";
 answers[6] = choices[6][3];
 units[6] = "36,37";
 comments[6] = "Id Pregunta: 480. ";


//  Id pregunta: 683 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; son empresas spin-off?";
 choices[7]= new Array();
 choices[7][0] = "Empresas dedicadas al SW libre.";
 choices[7][1] = "Empresas vinculadas a la Universidad y que se dedican a tareas de I+D.";
 choices[7][2] = "Empresas de aceleraci&oacute;n de electrones para la producci&oacute;n de energ&iacute;a.";
 choices[7][3] = "No existen.";
 answers[7] = choices[7][1];
 units[7] = "21";
 comments[7] = "Id Pregunta: 683. ";


//  Id pregunta: 697 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[8]= new Array();
 choices[8][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los &quot;threads&quot;";
 choices[8][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[8][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[8][3] = "La variable &quot;this&quot; de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[8] = choices[8][1];
 units[8] = "60";
 comments[8] = "Id Pregunta: 697. JCED - Preparatic XVII";


//  Id pregunta: 791 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Seg&uacute;n la licencia GNU GPL (General Public License), &iquest;cu&aacute;l de las siguientes sentencias no es correcta?";
 choices[9]= new Array();
 choices[9][0] = "Disponemos de la libertad de estudiar c&oacute;mo funciona el programa y adaptarlo seg&uacute;n nuestras necesidades";
 choices[9][1] = "Nuestro derecho de autor queda salvaguardado";
 choices[9][2] = "Podemos redistribuir todas las copias que queramos";
 choices[9][3] = "No se puede cobrar dinero por el software libre.";
 answers[9] = choices[9][3];
 units[9] = "61";
 comments[9] = "Id Pregunta: 791. ";


//  Id pregunta: 881 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l es el sistema de mensajer&iacute;a t&iacute;pico de los sistemas Unix?:";
 choices[10]= new Array();
 choices[10][0] = "Exchange";
 choices[10][1] = "Sendmail";
 choices[10][2] = "Memo";
 choices[10][3] = "Groupwise";
 answers[10] = choices[10][1];
 units[10] = "53";
 comments[10] = "Id Pregunta: 881. ";


//  Id pregunta: 982 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Dentro de la Inteligencia Artificial Distribuir&aacute;n indicar qu&eacute; significan las siglas KIF:";
 choices[11]= new Array();
 choices[11][0] = "Knowledge Interchange File";
 choices[11][1] = "Knowledge Intermediate Format";
 choices[11][2] = "Knowledge Intermediate File";
 choices[11][3] = "Knowledge Interchange Format";
 answers[11] = choices[11][3];
 units[11] = "63";
 comments[11] = "Id Pregunta: 982. ";


//  Id pregunta: 1010 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El creador de HTML fue:";
 choices[12]= new Array();
 choices[12][0] = "Tim Berners-Lee";
 choices[12][1] = "Ivar Jacobson";
 choices[12][2] = "Grady Booch";
 choices[12][3] = "Todas son falsas";
 answers[12] = choices[12][0];
 units[12] = "69";
 comments[12] = "Id Pregunta: 1010. NULL";


//  Id pregunta: 1526 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Dentro del &aacute;lgebra relacional, &iquest;qu&eacute; definici&oacute;n corresponde con la Uni&oacute;n Natural?";
 choices[13]= new Array();
 choices[13][0] = "Si X es un subconjunto de atributos de la relaci&oacute;n R, entonces la uni&oacute;n natural de R es la relaci&oacute;n formada por las columnas de R correspondientes a los atributos de X.";
 choices[13][1] = "La uni&oacute;n natural de dos relaciones R y S es el conjunto formado por todas las tuplas de R que no est&aacute;n en S. Este operador s&oacute;lo se puede aplicar a relaciones del mismo grado y con los mismos atributos.";
 choices[13][2] = "La uni&oacute;n natural de dos relaciones R y S, de grados m y n respectivamente es el conjunto formado por todas las posibles tuplas (mxn tuplas) de m+n elementos en las que los m primeros son de R y los n restantes pertenecen a S.";
 choices[13][3] = "Ninguna de las definiciones anteriores corresponde con la uni&oacute;n natural.";
 answers[13] = choices[13][3];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1526. ";


//  Id pregunta: 1773 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[14]= new Array();
 choices[14][0] = ".DOT";
 choices[14][1] = ".free";
 choices[14][2] = "Mono";
 choices[14][3] = "Gambas";
 answers[14] = choices[14][2];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1773. ";


//  Id pregunta: 1851 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Indicar la respuesta falsa:";
 choices[15]= new Array();
 choices[15][0] = "IDEA es un algoritmo de clave sim&eacute;trica";
 choices[15][1] = "RIPMED utiliza claves de 128 bits";
 choices[15][2] = "SHA-1 utiliza claves de 160 bits";
 choices[15][3] = "La seguridad de una funci&oacute;n hash radica en su car&aacute;cter unidireccional";
 answers[15] = choices[15][1];
 units[15] = "72";
 comments[15] = "Id Pregunta: 1851. ";


//  Id pregunta: 2038 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  En el Modelo de Excelencia de la EFQM, &iquest;Cu&aacute;l de los siguientes no es un criterio de calidad que act&uacute;e como agente facilitador del &eacute;xito?";
 choices[16]= new Array();
 choices[16][0] = "Liderazgo";
 choices[16][1] = "Pol&iacute;ticas y Estrategias";
 choices[16][2] = "Satisfacci&oacute;n del Personal";
 choices[16][3] = "Todos son agentes facilitadores";
 answers[16] = choices[16][2];
 units[16] = "92";
 comments[16] = "Id Pregunta: 2038. NULL";


//  Id pregunta: 2044 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  Seg&uacute;n el PGGC, si el nivel de intensidad es 2, el procedimiento de control de calidad a utilizar ser&aacute;:";
 choices[17]= new Array();
 choices[17][0] = "Revisi&oacute;n T&eacute;cnica Formal";
 choices[17][1] = "Auditor&iacute;a de Calidad";
 choices[17][2] = "Inspecci&oacute;n Detallada";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][2];
 units[17] = "88";
 comments[17] = "Id Pregunta: 2044. ";


//  Id pregunta: 2061 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[18]= new Array();
 choices[18][0] = "Eficiencia";
 choices[18][1] = "Correspondencia";
 choices[18][2] = "Eficacia";
 choices[18][3] = "Capacidad";
 answers[18] = choices[18][2];
 units[18] = "77";
 comments[18] = "Id Pregunta: 2061. ";


//  Id pregunta: 2122 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Estudio de Viabilidad del Sistema&rsquo;?:";
 choices[19]= new Array();
 choices[19][0] = "Estudio de la situaci&oacute;n actual";
 choices[19][1] = "Definici&oacute;n de requisitos del sistema ";
 choices[19][2] = "Estudio de alternativas de soluci&oacute;n";
 choices[19][3] = "Todas las anteriores";
 answers[19] = choices[19][3];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2122. NULL";


//  Id pregunta: 2154 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la identificaci&oacute;n de objetos?";
 choices[20]= new Array();
 choices[20][0] = "An&aacute;lisis l&eacute;xico.";
 choices[20][1] = "Tarjetas CRC (Collaboration Rehusabilities Cards).";
 choices[20][2] = "Modelado de informaci&oacute;n.";
 choices[20][3] = "Todos los anteriores son m&eacute;todos de identificaci&oacute;n de objetos.";
 answers[20] = choices[20][3];
 units[20] = "82,84";
 comments[20] = "Id Pregunta: 2154. ";


//  Id pregunta: 2291 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El modelo entidad/relaci&oacute;n de Chen es:";
 choices[21]= new Array();
 choices[21][0] = "Una t&eacute;cnica para la modelizaci&oacute;n sem&aacute;ntica de datos";
 choices[21][1] = "Una herramienta automatizada de an&aacute;lisis de requisitos";
 choices[21][2] = "Una t&eacute;cnica para el modelado de procesos";
 choices[21][3] = "Una metodolog&iacute;a para el desarrollo de sistemas de informaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "80";
 comments[21] = "Id Pregunta: 2291. ";


//  Id pregunta: 2380 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar aquella que no es una tarea del departamento de calidad:";
 choices[22]= new Array();
 choices[22][0] = "Desarrollo de pol&iacute;ticas, procedimientos y normas";
 choices[22][1] = "Certificaci&oacute;n y prueba del software";
 choices[22][2] = "Planificar la estrategia de la organizaci&oacute;n";
 choices[22][3] = "Auditor&iacute;as, revisiones e inspecciones";
 answers[22] = choices[22][2];
 units[22] = "87.88";
 comments[22] = "Id Pregunta: 2380. NULL";


//  Id pregunta: 2532 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En tratamiento digital de im&aacute;genes:";
 choices[23]= new Array();
 choices[23][0] = "El filtro de mediana es un filtro paso alto";
 choices[23][1] = "Un filtro paso bajo suaviza los contornos, provocando difusi&oacute;n en la imagen";
 choices[23][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[23][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[23] = choices[23][1];
 units[23] = "93";
 comments[23] = "Id Pregunta: 2532. NULL";


//  Id pregunta: 2605 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[24]= new Array();
 choices[24][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[24][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[24][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[24][3] = " El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[24] = choices[24][2];
 units[24] = "58,80";
 comments[24] = "Id Pregunta: 2605. ";


//  Id pregunta: 2697 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  M&eacute;todo b&aacute;sico de reconocimiento de caracteres en OCR:";
 choices[25]= new Array();
 choices[25][0] = "Comparaci&oacute;n matricial.";
 choices[25][1] = "S&iacute;ntesis de caracter&iacute;sticas.";
 choices[25][2] = "Todas las anteriores.";
 choices[25][3] = "Ninguna de las anteriores.";
 answers[25] = choices[25][0];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2697. ";


//  Id pregunta: 2739 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[26]= new Array();
 choices[26][0] = "Entidades externas al sistema";
 choices[26][1] = "Bucles";
 choices[26][2] = "Almac&eacute;n de datos";
 choices[26][3] = "Procesos";
 answers[26] = choices[26][1];
 units[26] = "79,81";
 comments[26] = "Id Pregunta: 2739. ";


//  Id pregunta: 2745 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;C&oacute;mo se denomina la estrategia para obtener el diagrama de  un DFD si existe un proceso que en funcion de un flujo de llegada determina la eleccion de uno o m&aacute;s flujos de informacion?";
 choices[27]= new Array();
 choices[27][0] = "An&aacute;lisis de transacci&oacute;n";
 choices[27][1] = "An&aacute;lisis de Transformaci&oacute;n";
 choices[27][2] = "An&aacute;lisis de flujo";
 choices[27][3] = "An&aacute;lisis de Informaci&oacute;n";
 answers[27] = choices[27][0];
 units[27] = "81";
 comments[27] = "Id Pregunta: 2745. ";


//  Id pregunta: 3201 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El acceso primario de la Red Digital de Servicios Integrados (en las normas europeas) est&aacute; constituido por:";
 choices[28]= new Array();
 choices[28][0] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[28][1] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[28][2] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 choices[28][3] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 answers[28] = choices[28][0];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3201. ";


//  Id pregunta: 3305 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[29]= new Array();
 choices[29][0] = "R";
 choices[29][1] = "S";
 choices[29][2] = "T";
 choices[29][3] = "U";
 answers[29] = choices[29][2];
 units[29] = "103";
 comments[29] = "Id Pregunta: 3305. ";


//  Id pregunta: 3575 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En una red de &aacute;rea local que utiliza la t&eacute;cnica de acceso al medio conocida como contienda, una de las siguientes afirmaciones es falsa. Se&ntilde;&aacute;lela:";
 choices[30]= new Array();
 choices[30][0] = "Se pueden producir colisiones";
 choices[30][1] = "Cualquier estaci&oacute;n de la Red de &Aacute;rea Local puede transmitir en cualquier momento";
 choices[30][2] = "Se pueden establecer prioridades";
 choices[30][3] = "Ofrece buen rendimiento a baja carga";
 answers[30] = choices[30][2];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3575. ";


//  Id pregunta: 3663 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Un puente transparente aprende la direcci&oacute;n de los dispositivos:";
 choices[31]= new Array();
 choices[31][0] = "Examinado las direcciones MAC de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[31][1] = "Examinando las direcciones de red de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[31][2] = "Examinado las direcciones MAC de las tramas salientes y asoci&aacute;ndolas con una interfaz da salida";
 choices[31][3] = "Examinando las direcciones de red de las tramas salientes y asoci&aacute;ndolas con una interfaz de salida";
 answers[31] = choices[31][0];
 units[31] = "102";
 comments[31] = "Id Pregunta: 3663. ";


//  Id pregunta: 3686 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La 'velocidad' seg&uacute;n demanda es propia de la t&eacute;cnica:";
 choices[32]= new Array();
 choices[32][0] = "ATM (Asynchronous Transfer Mode)";
 choices[32][1] = "STM (Synchronous Transfer Mode)";
 choices[32][2] = "ATM y STM";
 choices[32][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[32] = choices[32][0];
 units[32] = "109";
 comments[32] = "Id Pregunta: 3686. ";


//  Id pregunta: 3837 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  SOAP:";
 choices[33]= new Array();
 choices[33][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[33][1] = "Fue propuesta originalmente por Microsoft";
 choices[33][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[33][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[33] = choices[33][3];
 units[33] = "113";
 comments[33] = "Id Pregunta: 3837. ";


//  Id pregunta: 3921 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Para la conservaci&oacute;n de la informaci&oacute;n sobre soporte electr&oacute;nico:";
 choices[34]= new Array();
 choices[34][0] = "Ser&aacute; &uacute;til disponer de un SAI (UPS).";
 choices[34][1] = "Conviene almacenar la configuraci&oacute;n de la red en un fichero contenido en el sistema a proteger.";
 choices[34][2] = "Podemos utilizar cualquier ordenador descatalogado que tengamos a mano.";
 choices[34][3] = "El soporte ha de ser tolerante a fallos.";
 answers[34] = choices[34][0];
 units[34] = "97";
 comments[34] = "Id Pregunta: 3921. NULL";


//  Id pregunta: 3973 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Velocidades de RDSI de banda ancha en Europa";
 choices[35]= new Array();
 choices[35][0] = "1,5  2,6  155  622 Mbps";
 choices[35][1] = "2    51 155  722 Mbps";
 choices[35][2] = "2    34 155  622 Mbps";
 choices[35][3] = "2   34   155  722 Mbps";
 answers[35] = choices[35][2];
 units[35] = "103";
 comments[35] = "Id Pregunta: 3973. ";


//  Id pregunta: 4113 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre NFS:";
 choices[36]= new Array();
 choices[36][0] = "NFS es un sistema de archivos distribuido para un entorno de red de &aacute;rea local.";
 choices[36][1] = "Permite acceder a ficheros remotos como si fueran ficheros del sistema local siempre que se est&eacute; dentro de la misma red de &aacute;rea local.";
 choices[36][2] = "Originalmente fue desarrollado por Sun Microsystems.";
 choices[36][3] = "Todas las anteriores son ciertas.";
 answers[36] = choices[36][3];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4113. ";


//  Id pregunta: 4193 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  La herramienta MRTG";
 choices[37]= new Array();
 choices[37][0] = "Puede generar gr&aacute;ficas de cantidad de tr&aacute;fico";
 choices[37][1] = "Utiliza SNMP";
 choices[37][2] = "Es una herramienta gratuita";
 choices[37][3] = "todas las anteriores";
 answers[37] = choices[37][3];
 units[37] = "104";
 comments[37] = "Id Pregunta: 4193. ";


//  Id pregunta: 4275 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes sistemas operativos es un sistema orientado a objetos?";
 choices[38]= new Array();
 choices[38][0] = "Windows.";
 choices[38][1] = "Linux.";
 choices[38][2] = "OS/400.";
 choices[38][3] = "VMS";
 answers[38] = choices[38][2];
 units[38] = "52";
 comments[38] = "Id Pregunta: 4275. ";


//  Id pregunta: 4289 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Si tiene que desarrollar un procesador de textos siguiendo un modelo de ciclo de vida incremental, &iquest;qu&eacute; funcionalidad abordar&iacute;a primero?";
 choices[39]= new Array();
 choices[39][0] = "Las funciones de edici&oacute;n m&aacute;s sofisticadas.";
 choices[39][1] = "La gesti&oacute;n b&aacute;sica de archivos y producci&oacute;n de documentos.";
 choices[39][2] = "La m&aacute;s sencilla, para ir de menor a mayor complejidad.";
 choices[39][3] = "La funcionalidad m&aacute;s independiente del usuario, como por ejemplo, la correcci&oacute;n ortogr&aacute;fica y gramatical";
 answers[39] = choices[39][1];
 units[39] = "76";
 comments[39] = "Id Pregunta: 4289. ";


//  Id pregunta: 4375 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Indique cu&aacute;l de los siguientes no es un proceso principal incluido en M&eacute;trica versi&oacute;n 3:";
 choices[40]= new Array();
 choices[40][0] = "Desarrollo de Sistemas de Informaci&oacute;n.";
 choices[40][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[40][2] = "Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[40][3] = "An&aacute;lisis de Requisitos del Sistema.";
 answers[40] = choices[40][3];
 units[40] = "86";
 comments[40] = "Id Pregunta: 4375. NULL";


//  Id pregunta: 4426 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes clases de servicio es m&aacute;s adecuada en ATM para la transmisi&oacute;n de video comprimido en tiempo real?";
 choices[41]= new Array();
 choices[41][0] = "UBR";
 choices[41][1] = "VBR-NTR";
 choices[41][2] = "VBR-RT";
 choices[41][3] = "CBR";
 answers[41] = choices[41][2];
 units[41] = "109";
 comments[41] = "Id Pregunta: 4426. ";


//  Id pregunta: 4444 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El modelo CMMi , en su modo Staged establece 5 niveles de madurez. Indique el orden correcto de menor a mayor madurez:";
 choices[42]= new Array();
 choices[42][0] = "Performed, Managed, Defined, Quantitatively Managed, Optimizing";
 choices[42][1] = "Performed, Optimizing, Managed, Defined, Quantitatively Managed";
 choices[42][2] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 choices[42][3] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 answers[42] = choices[42][0];
 units[42] = "87";
 comments[42] = "Id Pregunta: 4444. NULL";


//  Id pregunta: 4447 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Cual es el nombre con que se conoce en MAGERIT versi&oacute;n 2 a la persona de la organizaci&oacute;n, con buen conocimiento de personas y unidades implicadas en el proyecto de An&aacute;lisis de Gesti&oacute;n de Riesgos, que tiene la capacidad para conectar al equipo de proyecto con el grupo de usuarios?";
 choices[43]= new Array();
 choices[43][0] = "Promotor";
 choices[43][1] = "Enlace operacional";
 choices[43][2] = "Director de proyecto";
 choices[43][3] = "Responsable de servicios internos";
 answers[43] = choices[43][1];
 units[43] = "33";
 comments[43] = "Id Pregunta: 4447. ";


//  Id pregunta: 4490 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[44]= new Array();
 choices[44][0] = "900 MHz.";
 choices[44][1] = "2 GHz.";
 choices[44][2] = "11 GHz.";
 choices[44][3] = "5 GHz";
 answers[44] = choices[44][1];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4490. ";


//  Id pregunta: 4498 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Se dice que una entidad se encuentra en segunda forma normal (2FN);";
 choices[45]= new Array();
 choices[45][0] = "Si no tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[45][1] = "Si tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[45][2] = "Si tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[45][3] = "Si no tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 answers[45] = choices[45][3];
 units[45] = "58";
 comments[45] = "Id Pregunta: 4498. ";


//  Id pregunta: 4563 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Las funciones de mediaci&oacute;n y arbitraje atribuidas por la Ley de Propiedad Intelectual son ejercidas por";
 choices[46]= new Array();
 choices[46][0] = "el Comit&eacute; Mediador y Arbitral de Ia Propiedad intelectual";
 choices[46][1] = "el Comit&eacute; Nacional de la Propiedad Intelectual";
 choices[46][2] = "la Comisi&oacute;n Nacional Mediadora y Arbitral de la Propiedad Intelectual";
 choices[46][3] = "Ia Comisi&oacute;n Mediadora y Arbitral de Ia Propiedad Intelectual";
 answers[46] = choices[46][3];
 units[46] = "36";
 comments[46] = "Id Pregunta: 4563. ";


//  Id pregunta: 4771 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El IETF (Internet Engineering Task Force) es uno de los organismos estandarizadores m&aacute;s destacados de Internet. Sus documentos oficiales son conocidos como";
 choices[47]= new Array();
 choices[47][0] = "Las series X y V (ejemplo la recomendaci&oacute;n X.25 o V.21bis)";
 choices[47][1] = "ISO (ejemplo ISO-9000)";
 choices[47][2] = "RFC (Request for Comments)";
 choices[47][3] = "Las respuestas A y C son verdaderas";
 answers[47] = choices[47][2];
 units[47] = "42";
 comments[47] = "Id Pregunta: 4771. ";


//  Id pregunta: 4779 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[48]= new Array();
 choices[48][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[48][1] = "Firma electr&oacute;nica";
 choices[48][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[48][3] = "Todas las anteriores son ciertas";
 answers[48] = choices[48][3];
 units[48] = "30";
 comments[48] = "Id Pregunta: 4779. Ley 56/2007";


//  Id pregunta: 4881 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los casos de uso son una t&eacute;cnica eficaz para la determinaci&oacute;n de necesidades. &Eacute;stos fueron creados por:";
 choices[49]= new Array();
 choices[49][0] = "Warnier-Orr";
 choices[49][1] = "Rumbaugh";
 choices[49][2] = "Jacobson";
 choices[49][3] = "Booch";
 answers[49] = choices[49][2];
 units[49] = "82";
 comments[49] = "Id Pregunta: 4881. ";


//  Id pregunta: 4911 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &ldquo;duplicaciones&rdquo; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[50]= new Array();
 choices[50][0] = "Data Marts.";
 choices[50][1] = "Metadata.";
 choices[50][2] = "Middleware.";
 choices[50][3] = "Dataware.";
 answers[50] = choices[50][0];
 units[50] = "68";
 comments[50] = "Id Pregunta: 4911. Examen TIC B 2007";


//  Id pregunta: 4934 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Clara acaba de recibir un documento de especificaciones de usuario de una aplicaci&oacute;n. El requisito establecidopara el desarrollo de que: &ldquo;El software debe soportar al menos 1.000.000 libros, 7.000 lectores y 250 materias&rdquo;,se enmarcar&iacute;a dentro de los requisitos de:";
 choices[51]= new Array();
 choices[51][0] = "Operaci&oacute;n.";
 choices[51][1] = "Funcionalidad.";
 choices[51][2] = "Recursos.";
 choices[51][3] = "Capacidad.";
 answers[51] = choices[51][3];
 units[51] = "78";
 comments[51] = "Id Pregunta: 4934. Examen TIC B 2007";


//  Id pregunta: 4967 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El principio de Frank-Condon, de especial importancia en las comunicaciones &oacute;pticas basadas en l&aacute;ser de semiconductor, establece que:";
 choices[52]= new Array();
 choices[52][0] = "La atenuaci&oacute;n de la se&ntilde;al disminuye con el cuadrado de la longitud de onda.";
 choices[52][1] = "S&oacute;lo son posibles transiciones con emisi&oacute;n de fotones cuando no hay cambio en la cantidad de movimiento delelectr&oacute;n.";
 choices[52][2] = "El ruido nodal es m&aacute;ximo en la fibra monomodo.";
 choices[52][3] = "El ruido nodal es m&iacute;nimo en la fibra monomodo.";
 answers[52] = choices[52][1];
 units[52] = "99";
 comments[52] = "Id Pregunta: 4967. Examen TIC B 2007";


//  Id pregunta: 5164 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Seg&uacute;n el Plan T&eacute;cnico Nacional de la Radiodifusi&oacute;n Sonora Digital Terrenal, cada bloque de frecuencias (de 1,536 MHz) integrar&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "Al menos cuatro programas diferentes";
 choices[53][1] = "Un &uacute;nico programa";
 choices[53][2] = "Tantos programas diferentes como estime el concesionario";
 choices[53][3] = "Al menos seis programas diferentes";
 answers[53] = choices[53][3];
 units[53] = "105";
 comments[53] = "Id Pregunta: 5164. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5286 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indique cu&aacute;l de las siguientes opciones no se corresponde al modelo .NET de desarrollo:";
 choices[54]= new Array();
 choices[54][0] = "Interface Definition Language";
 choices[54][1] = "Common Type System";
 choices[54][2] = "Base Class Library";
 choices[54][3] = "Common Language Runtime";
 answers[54] = choices[54][0];
 units[54] = "115";
 comments[54] = "Id Pregunta: 5286. ";


//  Id pregunta: 5507 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Qu&eacute; formato se emplea para la emision de facturas electr&oacute;nicas por parte de la AGE?";
 choices[55]= new Array();
 choices[55][0] = "XBRL";
 choices[55][1] = "ebXML";
 choices[55][2] = "UBL";
 choices[55][3] = "Facturae";
 answers[55] = choices[55][3];
 units[55] = "70";
 comments[55] = "Id Pregunta: 5507. NULL";


//  Id pregunta: 5565 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as permiten la transmisi&oacute;n de datos sobre una infraestructura de fibra &oacute;ptica para una red de &aacute;rea metropolitana?";
 choices[56]= new Array();
 choices[56][0] = "DQDB";
 choices[56][1] = "CDDI";
 choices[56][2] = "HIPPI";
 choices[56][3] = "PDDI";
 answers[56] = choices[56][0];
 units[56] = "101";
 comments[56] = "Id Pregunta: 5565. ";


//  Id pregunta: 5699 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[57]= new Array();
 choices[57][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[57][1] = " Chip RFID";
 choices[57][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[57][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[57] = choices[57][1];
 units[57] = "74";
 comments[57] = "Id Pregunta: 5699. NULL";


//  Id pregunta: 5703 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Se&ntilde;ale la afirmaci&oacute;n falsa sobre SOAP:";
 choices[58]= new Array();
 choices[58][0] = "Funciona s&oacute;lo sobre HTTP";
 choices[58][1] = "Tiene como base XML";
 choices[58][2] = "La cabecera header es opcional";
 choices[58][3] = "El desarrollo body contiene la informaci&oacute;n principal";
 answers[58] = choices[58][0];
 units[58] = "51";
 comments[58] = "Id Pregunta: 5703. NULL";


//  Id pregunta: 5782 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes objetos no forma parte del proveedor de datos del modelo de objetos ADO.NET?";
 choices[59]= new Array();
 choices[59][0] = "Connection.";
 choices[59][1] = "Command.";
 choices[59][2] = "DataAdapter.";
 choices[59][3] = "DataSet.";
 answers[59] = choices[59][3];
 units[59] = "59";
 comments[59] = "Id Pregunta: 5782. MAP 2008 A2";


//  Id pregunta: 5862 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[60]= new Array();
 choices[60][0] = "Es una especificaci&oacute;n desarrollada por la W3C";
 choices[60][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar";
 choices[60][2] = "P3P est&aacute; basado en CCXML";
 choices[60][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P";
 answers[60] = choices[60][2];
 units[60] = "111";
 comments[60] = "Id Pregunta: 5862. MAP 2008 A1";


//  Id pregunta: 5882 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Cu&aacute;ndo deber&aacute;n tener implantadas la totalidad de las medidas de seguridad los ficheros, tanto automatizados como no automatizados, creados con posterioridad a la fecha de entrada en vigor del RD 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de Desarrollo de la LOPD?:";
 choices[61]= new Array();
 choices[61][0] = "En el plazo de un a&ntilde;o desde su creaci&oacute;n";
 choices[61][1] = "En el plazo de seis meses desde su creaci&oacute;n";
 choices[61][2] = "En el momento de su creaci&oacute;n";
 choices[61][3] = "Depender&aacute; del tama&ntilde;o del fichero";
 answers[61] = choices[61][2];
 units[61] = "29";
 comments[61] = "Id Pregunta: 5882. MAP 2008 A1";


//  Id pregunta: 6088 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[62]= new Array();
 choices[62][0] = "XML, SOAP y WSDL";
 choices[62][1] = "XML, SOAP y UDDI";
 choices[62][2] = "XML, WSDL y UDDI";
 choices[62][3] = "SOAP, WSDL y UDDI";
 answers[62] = choices[62][0];
 units[62] = "51";
 comments[62] = "Id Pregunta: 6088. NULL";


//  Id pregunta: 6115 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[63]= new Array();
 choices[63][0] = "Activas.";
 choices[63][1] = "Pasivas.";
 choices[63][2] = "Hiperactivas.";
 choices[63][3] = "Semipasivas.";
 answers[63] = choices[63][2];
 units[63] = "74";
 comments[63] = "Id Pregunta: 6115. TIC A 2009";


//  Id pregunta: 6230 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[64]= new Array();
 choices[64][0] = "Gesti&oacute;n de la Infraestructura";
 choices[64][1] = "Gesti&oacute;n de Soporte";
 choices[64][2] = "Gesti&oacute;n de Entrega";
 choices[64][3] = "Gesti&oacute;n de Aplicaciones";
 answers[64] = choices[64][0];
 units[64] = "98";
 comments[64] = "Id Pregunta: 6230. TICB-2009, bloque desarrollo";


//  Id pregunta: 6424 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;ntas pautas se definen en total en las gu&iacute;as WCAG 2.0?";
 choices[65]= new Array();
 choices[65][0] = "12";
 choices[65][1] = "14";
 choices[65][2] = "25";
 choices[65][3] = "81";
 answers[65] = choices[65][0];
 units[65] = "39";
 comments[65] = "Id Pregunta: 6424. NULL";


//  Id pregunta: 6472 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; elementos de los siguientes NO pertenece a los diagramas de casos de uso?";
 choices[66]= new Array();
 choices[66][0] = "Interfaces.";
 choices[66][1] = "Actor.";
 choices[66][2] = "Paquete.";
 choices[66][3] = "Relaci&oacute;n.";
 answers[66] = choices[66][0];
 units[66] = "84";
 comments[66] = "Id Pregunta: 6472. Castilla La Mancha 2009";


//  Id pregunta: 6481 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de enrutamiento?";
 choices[67]= new Array();
 choices[67][0] = "OSPF";
 choices[67][1] = "RIP";
 choices[67][2] = "BGP";
 choices[67][3] = "RARP";
 answers[67] = choices[67][3];
 units[67] = "102";
 comments[67] = "Id Pregunta: 6481. Castilla La Mancha 2009";


//  Id pregunta: 6516 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[68]= new Array();
 choices[68][0] = "bytecode";
 choices[68][1] = "class";
 choices[68][2] = "jar";
 choices[68][3] = "applet";
 answers[68] = choices[68][0];
 units[68] = "60";
 comments[68] = "Id Pregunta: 6516. NULL";


//  Id pregunta: 6572 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto al modelo OSI?";
 choices[69]= new Array();
 choices[69][0] = "La capa 5 establece, mantiene y cierra el di&aacute;logo entre dos aplicaciones. Controla la organizaci&oacute;n del di&aacute;logo y su sincronizaci&oacute;n";
 choices[69][1] = "La capa 4 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 choices[69][2] = "La capa 3 proporciona transmisiones extremo a extremo";
 choices[69][3] = "La capa 2 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 answers[69] = choices[69][0];
 units[69] = "100";
 comments[69] = "Id Pregunta: 6572. NULL";


//  Id pregunta: 7172 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  En un documento XML, la parte donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[70]= new Array();
 choices[70][0] = "DTD";
 choices[70][1] = "XSL";
 choices[70][2] = "XLL";
 choices[70][3] = "DHTML";
 answers[70] = choices[70][2];
 units[70] = "69";
 comments[70] = "Id Pregunta: 7172. Examen TIC B 2009";


//  Id pregunta: 8198 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En ITIL v.3, &iquest;cu&aacute;l de los siguientes procesos y actividades NO corresponde a la estrategia de servicios?:";
 choices[71]= new Array();
 choices[71][0] = "Gesti&oacute;n financiera. ";
 choices[71][1] = "Gesti&oacute;n del portfolio de servicios. ";
 choices[71][2] = "Gesti&oacute;n de la demanda. ";
 choices[71][3] = "Gesti&oacute;n del cat&aacute;logo de servicios. ";
 answers[71] = choices[71][3];
 units[71] = "98";
 comments[71] = "Id Pregunta: 8198. Examen TIC A1 2010";


//  Id pregunta: 8227 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[72]= new Array();
 choices[72][0] = "A temperatura ambiente y bajo condiciones normales de atm&oacute;sfera, el valor de la banda de energ&iacute;a denominada GAP es de 1'12 eV para el Silicio y 1'42 eV para el Arseniuro de Galio.";
 choices[72][1] = "Un semiconductor intr&iacute;nseco es aqu&eacute;l que contiene elevadas cantidades de impurezas en comparaci&oacute;n con las cantidades de electrones y huecos generados t&eacute;rmicamente.";
 choices[72][2] = "El nivel de Fermi es el nivel de energ&iacute;a en el cu&aacute;l la probabilidad de ocupaci&oacute;n del mismo por un electr&oacute;n es exactamente 1/2.";
 choices[72][3] = "Un dispositivo bipolar es un dispositivo semiconductor en el que tanto huecos como electrones participan en el proceso de conducci&oacute;n.";
 answers[72] = choices[72][1];
 units[72] = "45";
 comments[72] = "Id Pregunta: 8227. Examen TIC A1 2010";


//  Id pregunta: 8312 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL? ";
 choices[73]= new Array();
 choices[73][0] = "VDSL.";
 choices[73][1] = "DDSL. ";
 choices[73][2] = "HDSL. ";
 choices[73][3] = "ADSL. ";
 answers[73] = choices[73][1];
 units[73] = "107";
 comments[73] = "Id Pregunta: 8312. Examen TIC A2 2010";


//  Id pregunta: 8321 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes sentencias JCL (Job Control language) marca el final de un trabajo? ";
 choices[74]= new Array();
 choices[74][0] = "//";
 choices[74][1] = "// JOB ";
 choices[74][2] = "//*";
 choices[74][3] = "// DD ";
 answers[74] = choices[74][0];
 units[74] = "50";
 comments[74] = "Id Pregunta: 8321. Examen TIC A2 2010";


//  Id pregunta: 8335 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; t&eacute;cnica es utilizada para identificar las dependencias en un proyecto?";
 choices[75]= new Array();
 choices[75][0] = "Los diagramas de Gantt.";
 choices[75][1] = "Program Evaluation &amp; Review Technique.";
 choices[75][2] = "Estructura de Descomposici&oacute;n de Trabajo (WBS).";
 choices[75][3] = "Diagrama de Extrapolaci&oacute;n.";
 answers[75] = choices[75][1];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8335. Examen TIC A2 2010";


//  Id pregunta: 8727 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[76]= new Array();
 choices[76][0] = "iSCSI";
 choices[76][1] = "sSCSI";
 choices[76][2] = "iFCP";
 choices[76][3] = "FCIP";
 answers[76] = choices[76][3];
 units[76] = "48";
 comments[76] = "Id Pregunta: 8727. Examen UPM A2 2011";


//  Id pregunta: 8780 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, se considera cesi&oacute;n o comunicaci&oacute;n de datos:";
 choices[77]= new Array();
 choices[77][0] = "Toda manifestaci&oacute;n de voluntad, libre inequ&iacute;voca, espec&iacute;fica e informada, mediante la cual el interesado comunique datos.";
 choices[77][1] = "Toda revelaci&oacute;n de datos realizada a una persona distinta del interesado.";
 choices[77][2] = "Toda revelaci&oacute;n electr&oacute;nica de datos realizada a otra persona distinta de la que los posee.";
 choices[77][3] = "Toda transferencia electr&oacute;nica de datos realizada a una persona distinta del interesado.";
 answers[77] = choices[77][1];
 units[77] = "29";
 comments[77] = "Id Pregunta: 8780. Examen UPM A2 2011";


//  Id pregunta: 8788 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Indique cu&aacute;l de las siguientes expresiones mostrar&aacute; el n&uacute;mero de veces que est&aacute; conectado el usuario root";
 choices[78]= new Array();
 choices[78][0] = "who | grep root | wc -l";
 choices[78][1] = "who root | wc -l";
 choices[78][2] = "who &gt;grep &mdash;v root&gt;wc";
 choices[78][3] = "who &lt;grep -v root&gt;wc";
 answers[78] = choices[78][0];
 units[78] = "53, 54";
 comments[78] = "Id Pregunta: 8788. Examen UPM A2 2011";


//  Id pregunta: 8866 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Un dato espacial es una variable asociada a una localizaci&oacute;n del espacio. Normalmente se utilizan datos vectoriales, los cuales pueden ser expresados mediante tres tipos de objetos espaciales:";
 choices[79]= new Array();
 choices[79][0] = "Puntos, l&iacute;neas, pol&iacute;gonos.";
 choices[79][1] = "Coordenadas, l&iacute;neas, pol&iacute;gonos.";
 choices[79][2] = "Puntos, vectores, pol&iacute;gonos.";
 choices[79][3] = "Puntos, arcos, rectas.";
 answers[79] = choices[79][0];
 units[79] = "67";
 comments[79] = "Id Pregunta: 8866. Analista Ayto. Madrid 2010";


//  Id pregunta: 8888 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;C&oacute;mo se llama la PDU de nivel 3?";
 choices[80]= new Array();
 choices[80][0] = "Paquete";
 choices[80][1] = "SPDU";
 choices[80][2] = "Trama";
 choices[80][3] = "TPDU";
 answers[80] = choices[80][0];
 units[80] = "100";
 comments[80] = "Id Pregunta: 8888. NULL";


//  Id pregunta: 8906 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[81]= new Array();
 choices[81][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[81][1] = "UTP Categor&iacute;a 3.";
 choices[81][2] = "UTP Categor&iacute;a 5.";
 choices[81][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[81] = choices[81][2];
 units[81] = "99, 101";
 comments[81] = "Id Pregunta: 8906. Operador Ayto. Madrid 2010";


//  Id pregunta: 8927 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[82]= new Array();
 choices[82][0] = "los directorios de trabajo de los usuarios.";
 choices[82][1] = "los sistemas de archivos montados temporalmente.";
 choices[82][2] = "el c&oacute;digo fuente del kernel.";
 choices[82][3] = "los ficheros de los controladores de dispositivos";
 answers[82] = choices[82][0];
 units[82] = "53, 54";
 comments[82] = "Id Pregunta: 8927. Operador Ayto. Madrid 2010";


//  Id pregunta: 9015 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Qu&eacute; utilidad tiene en la transmisi&oacute;n por radio el pico de absorci&oacute;n del ox&iacute;geno en 60 Ghz?:";
 choices[83]= new Array();
 choices[83][0] = "Permite la propagaci&oacute;n por conductos .";
 choices[83][1] = "Permite la reutilizaci&oacute;n espacial de frecuencias en esa banda.";
 choices[83][2] = "Permite la propagaci&oacute;n por dispersi&oacute;n en esa banda.";
 choices[83][3] = "Ninguna de las anteriores";
 answers[83] = choices[83][1];
 units[83] = "108";
 comments[83] = "Id Pregunta: 9015. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9450 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional.";
 choices[84]= new Array();
 choices[84][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[84][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[84][2] = "El producto cartesiano de una relaci&oacute;n de orden&quot;n&quot; y &quot;x&quot; tuplas y otra relaci&oacute;n de orden &quot;m&quot; y &quot;z&quot; tuplas es una relaci&oacute;n de orden n*m y de (x+z) tuplas. (F, es de orden n+m y x*z tuplas)";
 choices[84][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[84] = choices[84][2];
 units[84] = "58";
 comments[84] = "Id Pregunta: 9450. Examen AGE TIC A1 2011";


//  Id pregunta: 9511 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l es la API est&aacute;ndar para conectar programas desarrollados en Java con un sistema gestor de base de datos?";
 choices[85]= new Array();
 choices[85][0] = "JAXP";
 choices[85][1] = "StAX";
 choices[85][2] = "JAF";
 choices[85][3] = "JDBC";
 answers[85] = choices[85][3];
 units[85] = "116";
 comments[85] = "Id Pregunta: 9511. NULL";


//  Id pregunta: 9541 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[86]= new Array();
 choices[86][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[86][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[86][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[86][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[86] = choices[86][3];
 units[86] = "30";
 comments[86] = "Id Pregunta: 9541. Examen TIC A1 2011	";


//  Id pregunta: 9642 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[87]= new Array();
 choices[87][0] = "a) Publicidad y transparencia";
 choices[87][1] = "b) Salvaguarda de la libre competencia";
 choices[87][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[87][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[87] = choices[87][3];
 units[87] = "41";
 comments[87] = "Id Pregunta: 9642. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";


//  Id pregunta: 10008 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, en la actividad &ldquo;Definici&oacute;n de Requisitos del Sistema&rdquo; participan los siguientes grupos de personas:";
 choices[88]= new Array();
 choices[88][0] = "Jefe de proyecto, Analistas y Usuarios Expertos.";
 choices[88][1] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas y Usuarios Expertos.";
 choices[88][2] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones y Usuarios Expertos.";
 choices[88][3] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones, Responsables de Seguridad y Usuarios Expertos.";
 answers[88] = choices[88][0];
 units[88] = "86";
 comments[88] = "Id Pregunta: 10008. NULL";


//  Id pregunta: 10235 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[89]= new Array();
 choices[89][0] = "getHeaderValues() of HttpServletRequest";
 choices[89][1] = "getHeaderValue() of ServletRequest";
 choices[89][2] = "getHeader() of HttpServletRequest";
 choices[89][3] = "getHeader() of ServletRequest";
 answers[89] = choices[89][2];
 units[89] = "116";
 comments[89] = "Id Pregunta: 10235. NULL";


//  Id pregunta: 10291 AÃ±o de creación de pregunta: 2010-01-01
 questions[90]= "91)  Una desventaja de la topolog&iacute;a f&iacute;sica de bus es que:";
 choices[90]= new Array();
 choices[90][0] = "Un fallo en el concentrador provoca el aislamiento de todos los nodos a &eacute;l conectados.";
 choices[90][1] = "Requiere m&aacute;s cable que la topolog&iacute;a en estrella.";
 choices[90][2] = "Es vulnerable a la atenuaci&oacute;n, ya que pierde se&ntilde;al a trav&eacute;s de la distancia del cable.";
 choices[90][3] = "Es compleja y dif&iacute;cil de arreglar.";
 answers[90] = choices[90][2];
 units[90] = "101";
 comments[90] = "Id Pregunta: 10291. TIC A2, libre, examen 2013";


//  Id pregunta: 10300 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[91]= new Array();
 choices[91][0] = "Cabecera siguiente.";
 choices[91][1] = "Enrutamiento.";
 choices[91][2] = "Longitud de la carga &uacute;til.";
 choices[91][3] = "L&iacute;mite de saltos.";
 answers[91] = choices[91][1];
 units[91] = "100";
 comments[91] = "Id Pregunta: 10300. TIC A2, libre, examen 2013";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En relaci&oacute;n a una red privada virtual (VPN, Virtual Private Network), es FALSO que ";
 choices[92]= new Array();
 choices[92][0] = "una VPN permite utilizar la red p&uacute;blica de un operador para construir una red privada dedicada, con funcionalidades de red y de seguridad equivalentes a las que se obtienen con una red privada. ";
 choices[92][1] = "en la actualidad, el concepto de VPN se extiende para incluir las soluciones que permiten el acceso remoto de un equipo a la red de una organizaci&oacute;n a trav&eacute;s de redes p&uacute;blicas, especialmente Internet, mediante la utilizaci&oacute;n de mecanismos de t&uacute;nel y cifrado. ";
 choices[92][2] = "el protocolo MPLS (Multiprotocol Label Switching) permite crear VPNs de nivel 4, utilizando como tecnolog&iacute;as de acceso T1/E1, ATM &oacute; Frame Relay. ";
 choices[92][3] = "VPLS (Virtual Private LAN Switching) es un servicio de red LAN privada virtual, que permite entregar tramas de nivel 2 directamente entre sedes remotas de un mismo organismo  ";
 answers[92] = choices[92][2];
 units[92] = "111";
 comments[92] = "Id Pregunta: 10449. Examen TIC A1 2013";


//  Id pregunta: 10737 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Una &quot;Descripci&oacute;n formal de los conceptos y relaciones que pueden existir sobre agentes o una comunidad. Especificaci&oacute;n consensuada que describe un dominio de informaci&oacute;n.&quot; es:";
 choices[93]= new Array();
 choices[93][0] = "Un metadato";
 choices[93][1] = "Una ontolog&iacute;a";
 choices[93][2] = "Una categor&iacute;a";
 choices[93][3] = "Una forma de representaci&oacute;n de datos estructurados (RDFa)";
 answers[93] = choices[93][1];
 units[93] = "24";
 comments[93] = "Id Pregunta: 10737. ";


//  Id pregunta: 10768 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes servicios no ha sido declarado como servicio compartido?";
 choices[94]= new Array();
 choices[94][0] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[94][1] = "Servicio de gesti&oacute;n de archivo electr&oacute;nico";
 choices[94][2] = "Servicio de videoconferencia";
 choices[94][3] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 answers[94] = choices[94][2];
 units[94] = "24";
 comments[94] = "Id Pregunta: 10768. ";


//  Id pregunta: 10852 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[95]= new Array();
 choices[95][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[95][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[95][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[95][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[95] = choices[95][3];
 units[95] = "59, 115";
 comments[95] = "Id Pregunta: 10852. Examen GSI 2014";


//  Id pregunta: 11212 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[96]= new Array();
 choices[96][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[96][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[96][2] = "Los dos anteriores son verdaderos";
 choices[96][3] = "Todas las respuestas son falsas";
 answers[96] = choices[96][2];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11212. ";


//  Id pregunta: 11261 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;les son los niveles de seguridad de los sistemas de autenticaci&oacute;n que define el Reglamento 910/2014?";
 choices[97]= new Array();
 choices[97][0] = "Bajo, medio y alto.";
 choices[97][1] = "B&aacute;sico, medio y alto.";
 choices[97][2] = "B&aacute;sico, sustancial y alto.";
 choices[97][3] = "Bajo, sustancial y alto.";
 answers[97] = choices[97][3];
 units[97] = "73";
 comments[97] = "Id Pregunta: 11261. ";


//  Id pregunta: 11360 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[98]= new Array();
 choices[98][0] = "Controlar todos los proveedores externos de TI";
 choices[98][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[98][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[98][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[98] = choices[98][1];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11360. ";


//  Id pregunta: 11445 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la Ley 9/2014, marque la respuesta correcta respecto a la protecci&oacute;n de datos personales y la privacidad en relaci&oacute;n con las gu&iacute;as de abonados:";
 choices[99]= new Array();
 choices[99][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[99][1] = "A ser informado de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 choices[99][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[99][3] = "Todas las anteriores.";
 answers[99] = choices[99][3];
 units[99] = "110";
 comments[99] = "Id Pregunta: 11445. ";


