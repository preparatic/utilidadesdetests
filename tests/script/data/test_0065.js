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

//  Id pregunta: 209 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En general, lo m&aacute;s &uacute;til en determinadas &aacute;reas de la organizaci&oacute;n altamente normalizadas (ofim&aacute;tica, contabilidad, inventarios,&hellip;) es utilizar:";
 choices[0]= new Array();
 choices[0][0] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia.";
 choices[0][1] = "Aplicaciones a medida realizadas mediante programaci&oacute;n externa.";
 choices[0][2] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia y externa.";
 choices[0][3] = "Aplicaciones est&aacute;ndar o paquetes.";
 answers[0] = choices[0][3];
 units[0] = "27";
 comments[0] = "Id Pregunta: 209. ";


//  Id pregunta: 270 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Indicar la respuesta verdadera respecto al concepto de un sistema de informaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Es el conjunto de procedimientos, manuales y automatizados dirigidos a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[1][1] = "Es el conjunto de procedimientos, manuales y automatizados dirigidos a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[1][2] = "Es el conjunto de procedimientos, manuales y automatizados y de funciones dirigidas a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n  y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[1][3] = "Es el conjunto de procedimientos, manuales y automatizados y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 270. ";


//  Id pregunta: 309 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La gu&iacute;a XPG 4 de X/OPEN apareci&oacute; en:";
 choices[2]= new Array();
 choices[2][0] = "1989";
 choices[2][1] = "1990";
 choices[2][2] = "1991";
 choices[2][3] = "1992";
 answers[2] = choices[2][3];
 units[2] = "40";
 comments[2] = "Id Pregunta: 309. XPG";


//  Id pregunta: 388 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  No es un elemento de MAGERIT:";
 choices[3]= new Array();
 choices[3][0] = "Amenaza";
 choices[3][1] = "Activo";
 choices[3][2] = "Riesgo";
 choices[3][3] = "Salvaguarda";
 answers[3] = choices[3][2];
 units[3] = "33";
 comments[3] = "Id Pregunta: 388. ";


//  Id pregunta: 630 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cu&aacute;l de los siguientes derechos de explotaci&oacute;n no precisan la realizaci&oacute;n o autorizaci&oacute;n por parte del titular de un programa de ordenador, seg&uacute;n la ley espa&ntilde;ola de propiedad intelectual:";
 choices[4]= new Array();
 choices[4][0] = "Reproducci&oacute;n total o parcial.";
 choices[4][1] = "La realizaci&oacute;n de una copia de seguridad.";
 choices[4][2] = "Traducci&oacute;n, adaptaci&oacute;n o arreglo.";
 choices[4][3] = "Cualquier forma de distribuci&oacute;n p&uacute;blica.";
 answers[4] = choices[4][1];
 units[4] = "36";
 comments[4] = "Id Pregunta: 630. ";


//  Id pregunta: 750 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  De las estructuras de archivos propuestas a continuaci&oacute;n, indique cu&aacute;l implica que un Sistema Operativo tenga la m&aacute;xima flexibilidad: &quot;Aquella estructura en la que el archivo es un/una: &quot;";
 choices[5]= new Array();
 choices[5][0] = "Secuencia de registros de longitud fija";
 choices[5][1] = "Secuencia de bytes de tama&ntilde;o variable";
 choices[5][2] = "&Aacute;rbol de registros, todos ellos de igual longitud";
 choices[5][3] = "&Aacute;rbol de registros, que pueden ser de distinta longitud";
 answers[5] = choices[5][1];
 units[5] = "52";
 comments[5] = "Id Pregunta: 750. Examen TIC MAP B 2004";


//  Id pregunta: 834 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a los procedimientos almacenados en los sistemas de gesti&oacute;n de bases de datos relacionales?:";
 choices[6]= new Array();
 choices[6][0] = "Es un conjunto de instrucciones y l&oacute;gica de procedimiento de SQL compilado, verificado y almacenado en base de datos";
 choices[6][1] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de preparaci&oacute;n del programa";
 choices[6][2] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de ejecuci&oacute;n del programa";
 choices[6][3] = "Los procedimientos almacenados no admiten par&aacute;metros de entrada";
 answers[6] = choices[6][0];
 units[6] = "57";
 comments[6] = "Id Pregunta: 834. ";


//  Id pregunta: 837 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a Linux?:";
 choices[7]= new Array();
 choices[7][0] = "Est&aacute; constituido por un n&uacute;cleo Kernel, y cada usuario debe construirse las librer&iacute;as y programas para poderlo utilizar";
 choices[7][1] = "Es un sistema operativo compatible con Unix";
 choices[7][2] = "Es software libre";
 choices[7][3] = "El sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[7] = choices[7][0];
 units[7] = "52, 53";
 comments[7] = "Id Pregunta: 837. ";


//  Id pregunta: 959 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Con respecto a la manera de representar el modelo digital del terreno o DTM, un SIG puede ser:";
 choices[8]= new Array();
 choices[8][0] = "R&aacute;ster.";
 choices[8][1] = "Vectorial.";
 choices[8][2] = "Ambos.";
 choices[8][3] = "Ninguna es cierta.";
 answers[8] = choices[8][2];
 units[8] = "67";
 comments[8] = "Id Pregunta: 959. NULL";


//  Id pregunta: 991 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dentro del proyecto CERES, es posible disponer de tarjetas criptogr&aacute;ficas para entregar a los ciudadanos &iquest;Qu&eacute; funcionalidades proporcionan dichas tarjetas desde el punto de vista de la seguridad?:";
 choices[9]= new Array();
 choices[9][0] = "Autenticaci&oacute;n e integridad, &uacute;nicamente";
 choices[9][1] = "Autenticaci&oacute;n, integridad y confidencialidad, &uacute;nicamente";
 choices[9][2] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en origen";
 choices[9][3] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en destino";
 answers[9] = choices[9][2];
 units[9] = "74";
 comments[9] = "Id Pregunta: 991. NULL";


//  Id pregunta: 997 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  EDSAC y ENIAC son ejemplos de:";
 choices[10]= new Array();
 choices[10][0] = "comit&eacute;s reguladores de auditor&iacute;as inform&aacute;ticas";
 choices[10][1] = "algoritmos criptogr&aacute;ficos de clave sim&eacute;trica";
 choices[10][2] = "est&aacute;ndares de tecnolog&iacute;as de almacenamiento";
 choices[10][3] = "ordenadores de mediados del siglo XX";
 answers[10] = choices[10][3];
 units[10] = "47";
 comments[10] = "Id Pregunta: 997. ";


//  Id pregunta: 1097 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En electr&oacute;nica digital, un conjunto de funciones es completo en un &aacute;lgebra de Boole:";
 choices[11]= new Array();
 choices[11][0] = "Si y s&oacute;lo si cualquier forma booleana puede realizarse con dichas funciones.";
 choices[11][1] = "Si un conjunto m&iacute;nimo puede realizarse con dichas funciones.";
 choices[11][2] = "Si y s&oacute;lo si contiene a todas las funciones l&oacute;gicas siguientes AND, OR, NOT, NAND, XOR.";
 choices[11][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1097. ";


//  Id pregunta: 1141 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En un sistema de informaci&oacute;n geogr&aacute;fica tipo r&aacute;ster, indique cu&aacute;l de las siguientes es una operaci&oacute;n con varias capas:";
 choices[12]= new Array();
 choices[12][0] = "Vectorizaci&oacute;n.";
 choices[12][1] = "Filtrado.";
 choices[12][2] = "Scanning.";
 choices[12][3] = "Overlay.";
 answers[12] = choices[12][3];
 units[12] = "67";
 comments[12] = "Id Pregunta: 1141. NULL";


//  Id pregunta: 1257 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Las modulaciones angulares, respecto a las modulaciones lineales:";
 choices[13]= new Array();
 choices[13][0] = "Dan peor discriminaci&oacute;n en contra del ruido y la interferencia.";
 choices[13][1] = "Utilizan menor ancho de banda.";
 choices[13][2] = "Utilizan mayor energ&iacute;a para transmitir.";
 choices[13][3] = "Dan mejor discriminaci&oacute;n en contra del ruido y la interferencia.";
 answers[13] = choices[13][3];
 units[13] = "107, 108";
 comments[13] = "Id Pregunta: 1257. ";


//  Id pregunta: 1581 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  El algoritmo de cifrado Rijndael";
 choices[14]= new Array();
 choices[14][0] = "Compite con AES por ser el est&aacute;ndar de criptograf&iacute;a dominante";
 choices[14][1] = "Es un algoritmo de clave p&uacute;blica";
 choices[14][2] = "Es un desarrollo propietario de IBM";
 choices[14][3] = "Se basa en la teor&iacute;a de campos de Galois";
 answers[14] = choices[14][3];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1581. Tanenbaum";


//  Id pregunta: 1652 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[15]= new Array();
 choices[15][0] = "Advanced Distributed Learning";
 choices[15][1] = "Advanced Distanced Learning";
 choices[15][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][0];
 units[15] = "66";
 comments[15] = "Id Pregunta: 1652. ";


//  Id pregunta: 1821 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Entre las ventajas de un Datawarehouse no se encuentra:";
 choices[16]= new Array();
 choices[16][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[16][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[16][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n. ";
 choices[16][3] = "La informaci&oacute;n de una empresa se mantiene consistente, segura, actualizada y f&aacute;cilmente accesible. ";
 answers[16] = choices[16][0];
 units[16] = "68";
 comments[16] = "Id Pregunta: 1821. ";


//  Id pregunta: 1912 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las arquitecturas Grid?:";
 choices[17]= new Array();
 choices[17][0] = "Resultados de supercomputaci&oacute;n (alta transaccionalidad) a bajo coste.";
 choices[17][1] = "La obsolescencia deja de ser un problema.";
 choices[17][2] = "Los nodos de la red no son dedicados. Podemos parametrizar exactamente el porcentaje de dedicaci&oacute;n a la red.";
 choices[17][3] = "No ser&aacute; necesario modificar las aplicaciones desarrolladas para que &eacute;stas puedan ser ejecutadas en la arquitetura Grid.";
 answers[17] = choices[17][3];
 units[17] = "45";
 comments[17] = "Id Pregunta: 1912. ";


//  Id pregunta: 2270 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El diagrama de contexto de un DFD contiene:";
 choices[18]= new Array();
 choices[18][0] = "Un &uacute;nico proceso";
 choices[18][1] = "Exclusivamente una entidad de procedencia y otra de destino";
 choices[18][2] = "Procesos diferentes cuando tiene que representar funciones diferentes";
 choices[18][3] = "Un &uacute;nico fichero de datos";
 answers[18] = choices[18][0];
 units[18] = "81";
 comments[18] = "Id Pregunta: 2270. ";


//  Id pregunta: 2280 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El modelo COCOMO de estimaci&oacute;n de recursos y esfuerzo en el desarrollo de un sistema de software, define un tipo de m&eacute;trica:";
 choices[19]= new Array();
 choices[19][0] = "De productividad";
 choices[19][1] = "De complejidad";
 choices[19][2] = "De calidad";
 choices[19][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[19] = choices[19][0];
 units[19] = "89";
 comments[19] = "Id Pregunta: 2280. NULL";


//  Id pregunta: 2350 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En un diagrama de flujo de datos:";
 choices[20]= new Array();
 choices[20][0] = "Una entidad externa puede aparecer en cualquier diagrama de cualquier nivel";
 choices[20][1] = "Una entidad externa nunca se relaciona mediante un flujo directamente con un almac&eacute;n de datos";
 choices[20][2] = "Se entiende por 'cuadre de flujos netos' el que un proceso tenga el mismo n&uacute;mero de flujos de entrada que de salida";
 choices[20][3] = "Son ciertas las respuestas 'a' y 'b'";
 answers[20] = choices[20][3];
 units[20] = "81";
 comments[20] = "Id Pregunta: 2350. ";


//  Id pregunta: 2439 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Las consideraciones sobre an&aacute;lisis coste/beneficio y an&aacute;lisis de riesgos, corresponden a la siguiente &aacute;rea de un proyecto inform&aacute;tico:";
 choices[21]= new Array();
 choices[21][0] = "Planificaci&oacute;n del proyecto";
 choices[21][1] = "An&aacute;lisis de viabilidad";
 choices[21][2] = "Dise&ntilde;o de la soluci&oacute;n";
 choices[21][3] = "Seguimiento del proyecto";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2439. NULL";


//  Id pregunta: 2656 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Relativo a las clases en OO, cuando dos subtipos se unen para crear una clase superior, se produce:";
 choices[22]= new Array();
 choices[22][0] = "Asociaci&oacute;n";
 choices[22][1] = "Agrupaci&oacute;n";
 choices[22][2] = "Agregaci&oacute;n";
 choices[22][3] = "Generalizaci&oacute;n";
 answers[22] = choices[22][3];
 units[22] = "82";
 comments[22] = "Id Pregunta: 2656. ";


//  Id pregunta: 2726 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  De los siguientes aspectos, &iquest;cu&aacute;les no deben considerarse a la hora de efectuar unaPlanificaci&oacute;n Estrat&eacute;gica? :";
 choices[23]= new Array();
 choices[23][0] = "La misi&oacute;n del negocio.";
 choices[23][1] = "La situaci&oacute;n de los competidores.";
 choices[23][2] = "Los hitos o puntos clave en el calendario de actuaci&oacute;n.";
 choices[23][3] = "Deben considerarse todos los aspectos anteriores.";
 answers[23] = choices[23][3];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2726. ";


//  Id pregunta: 3037 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes componentes de software no forma parte del servidor de aplicaciones en una arquitectura a tres capas?:";
 choices[24]= new Array();
 choices[24][0] = "P&aacute;ginas din&aacute;micas";
 choices[24][1] = "Java Virtual Machine";
 choices[24][2] = "Navegador Web";
 choices[24][3] = "Int&eacute;rprete de Scripting";
 answers[24] = choices[24][2];
 units[24] = "114";
 comments[24] = "Id Pregunta: 3037. ";


//  Id pregunta: 3049 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Qu&eacute; es GOPHER?:";
 choices[25]= new Array();
 choices[25][0] = "Un protocolo de comunicaci&oacute;n entre redes Ethernet";
 choices[25][1] = "Un sistema operativo multitarea y multipuesto desarrollado por NeXT";
 choices[25][2] = "Un sistema disponible en Internet para b&uacute;squeda y transmisi&oacute;n de ficheros";
 choices[25][3] = "Nada de lo anterior";
 answers[25] = choices[25][2];
 units[25] = "112";
 comments[25] = "Id Pregunta: 3049. ";


//  Id pregunta: 3136 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las respuestas siguientes es verdadera sobre las direcciones disponibles en clases A, B y C en redes IP?:";
 choices[26]= new Array();
 choices[26][0] = "El n&uacute;mero de direcciones para sistemas por red decrece de redes clase A  a las de clase C";
 choices[26][1] = "El n&uacute;mero de direcciones disponibles para redes decrece de las de clases A a las de clase C";
 choices[26][2] = "Las direcciones de clase C son adecuadas para organizaciones muy grandes, mientras que las de clase B son m&aacute;s adecuadas para compa&ntilde;ias peque&ntilde;as";
 choices[26][3] = "El rango de direcciones A es num&eacute;ricamente el mayor mientras que las de clase C es numericamente el menor";
 answers[26] = choices[26][0];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3136. NULL";


//  Id pregunta: 3184 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes respuestas sobre CDDI (o CuDDI o TP-DDI) es falsa?:";
 choices[27]= new Array();
 choices[27][0] = "CDDI tiene toda la tolerancia a fallos y velocidad que la FDDI";
 choices[27][1] = "CDDI usa una especificaci&oacute;n PMD ANSI diferente que la FDDI";
 choices[27][2] = "CDDI tiene la misma limitaci&oacute;n de distancia que la FDDI";
 choices[27][3] = "CDDI usa un cableado m&aacute;s econ&oacute;mico que la FDDI";
 answers[27] = choices[27][2];
 units[27] = "97";
 comments[27] = "Id Pregunta: 3184. NULL";


//  Id pregunta: 3239 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l es el servicio del nivel de enlace del modelo OSI m&aacute;s apropiado para transmitir voz?:";
 choices[28]= new Array();
 choices[28][0] = "Servicio con acuse de recibo y sin conexi&oacute;n";
 choices[28][1] = "Servicio sin acuse de recibo y sin conexi&oacute;n";
 choices[28][2] = "Servicio con acuse de recibo y orientado a la conexi&oacute;n";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][1];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3239. NULL";


//  Id pregunta: 3324 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  8802.3 es:";
 choices[29]= new Array();
 choices[29][0] = "El c&oacute;digo de acceso a la red digital";
 choices[29][1] = "Un est&aacute;ndar de redes de &aacute;rea local de ISO IEC JTC1";
 choices[29][2] = "Un est&aacute;ndar europeo de conmutaci&oacute;n de paquetes";
 choices[29][3] = "Un est&aacute;ndar ANSI que trata de m&oacute;dems";
 answers[29] = choices[29][1];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3324. ";


//  Id pregunta: 3345 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  CSMA/CD es:";
 choices[30]= new Array();
 choices[30][0] = "Un m&eacute;todo de paso de testigo en bus";
 choices[30][1] = "Un sistema operativo no propietario";
 choices[30][2] = "Un m&eacute;todo de detecci&oacute;n de se&ntilde;al en bus";
 choices[30][3] = "Un m&eacute;todo de paso de testigo en anillo";
 answers[30] = choices[30][2];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3345. ";


//  Id pregunta: 3346 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  CTI es:";
 choices[31]= new Array();
 choices[31][0] = "Computer Telephony Integration, el uso conjunto de telefon&iacute;a y ordenadores en el funcionamiento de un centro de atenci&oacute;n de llamadas";
 choices[31][1] = "el conjunto formado por la intranet, los tel&eacute;fonos de los puestos de ofim&aacute;tica y los ordenadores de los usuarios";
 choices[31][2] = "las siglas del Comit&eacute; para las Telecomunicaciones y la Innovaci&oacute;n, organismo sin &aacute;nimo de lucro encargado de observar las tendencias tecnol&oacute;gicas en telecomunicaciones y su aplicaci&oacute;n a los proyectos de la Administraci&oacute;n del Estado";
 choices[31][3] = "nada de lo anterior";
 answers[31] = choices[31][0];
 units[31] = "108";
 comments[31] = "Id Pregunta: 3346. ";


//  Id pregunta: 3355 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  De las siguientes funciones, &iquest;cu&aacute;l no es propia del protocolo de nivel de red?:";
 choices[32]= new Array();
 choices[32][0] = "Conmutaci&oacute;n";
 choices[32][1] = "Encaminamiento";
 choices[32][2] = "Multiplexaci&oacute;n";
 choices[32][3] = "Tarificaci&oacute;n";
 answers[32] = choices[32][3];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3355. NULL";


//  Id pregunta: 3427 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Indicar entre las siguientes normas del IEEE la que trata sobre redes inal&aacute;mbricas:";
 choices[33]= new Array();
 choices[33][0] = "802.10";
 choices[33][1] = "802.11";
 choices[33][2] = "802.12";
 choices[33][3] = "802.13";
 answers[33] = choices[33][1];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3427. ";


//  Id pregunta: 3477 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  El tiempo que tarda un terminal en poner una trama en la red:";
 choices[34]= new Array();
 choices[34][0] = "En las redes Ethernet no depende de la ocupaci&oacute;n de su segmento de red";
 choices[34][1] = "Es mejor en una red Token Ring que en una Ethernet si la red est&aacute; muy cargada";
 choices[34][2] = "No tiene cota m&aacute;xima en una red Token Bus";
 choices[34][3] = "Tiene una cota m&aacute;xima en una red Ethernet";
 answers[34] = choices[34][1];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3477. ";


//  Id pregunta: 3911 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Algoritmo de compresi&oacute;n de im&aacute;genes sin p&eacute;rdidas:";
 choices[35]= new Array();
 choices[35][0] = "ECW.";
 choices[35][1] = "RLE.";
 choices[35][2] = "MPEG.";
 choices[35][3] = "TXA.";
 answers[35] = choices[35][1];
 units[35] = "93";
 comments[35] = "Id Pregunta: 3911. NULL";


//  Id pregunta: 3980 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el protocolo IPV6 las direcciones son de:";
 choices[36]= new Array();
 choices[36][0] = "16 bits";
 choices[36][1] = "16 bytes";
 choices[36][2] = "32 bits";
 choices[36][3] = "32 bytes";
 answers[36] = choices[36][1];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3980. ";


//  Id pregunta: 4024 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[37]= new Array();
 choices[37][0] = "HSCSD, GSM, GPRS, UMTS";
 choices[37][1] = "GSM. HSCSD, UMTS, GPRS";
 choices[37][2] = "GSM, HSCSD, GPRS, UMTS";
 choices[37][3] = "GSM, GPRS, HSCSD, UMTS";
 answers[37] = choices[37][2];
 units[37] = "108";
 comments[37] = "Id Pregunta: 4024. ";


//  Id pregunta: 4034 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;C&oacute;mo se denomina la tecnolog&iacute;a de multiplexaci&oacute;n utilizada por ATM?";
 choices[38]= new Array();
 choices[38][0] = "Multiplexaci&oacute;n por divisi&oacute;n en el tiempo";
 choices[38][1] = "Multiplexaci&oacute;n estad&iacute;stica";
 choices[38][2] = "Multiplexaci&oacute;n por divisi&oacute;n en la frecuencia";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][1];
 units[38] = "109";
 comments[38] = "Id Pregunta: 4034. ";


//  Id pregunta: 4240 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Cual de las siguientes no es una caracter&iacute;stica del PUDS (Proceso Unificado de Desarrollo del SW)";
 choices[39]= new Array();
 choices[39][0] = "No tiene en cuenta el control de calidad";
 choices[39][1] = "Proceso centrado en la arquitectura";
 choices[39][2] = "Proceso dirigido por los casos de uso";
 choices[39][3] = "Proceso incremental e iterativo";
 answers[39] = choices[39][0];
 units[39] = "79";
 comments[39] = "Id Pregunta: 4240. ";


//  Id pregunta: 4505 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;a que se denomina riesgo en MAGERIT version 2?";
 choices[40]= new Array();
 choices[40][0] = "A la medida del da&ntilde;o probable sobre un sistema";
 choices[40][1] = "Al suceso que puede afectar a un activo y causarle un da&ntilde;o";
 choices[40][2] = "A la medida del da&ntilde;o sobre un activo derivado de la materializaci&oacute;n de una amenaza";
 choices[40][3] = "Al recurso del sistema de informaci&oacute;n expuesto a un ataque";
 answers[40] = choices[40][0];
 units[40] = "33";
 comments[40] = "Id Pregunta: 4505. ";


//  Id pregunta: 4669 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Qui&eacute;n est&aacute; detr&aacute;s del conjunto de mejores pr&aacute;cticas COBIT?";
 choices[41]= new Array();
 choices[41][0] = "Information Systems Audit and Control Association (ISACA)";
 choices[41][1] = "IT Governance Institute (ITGI)";
 choices[41][2] = "La respuestas A) y B) son ambas correctas";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][2];
 units[41] = "98";
 comments[41] = "Id Pregunta: 4669. NULL";


//  Id pregunta: 4858 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[42]= new Array();
 choices[42][0] = "Mosix es un sistema basado en Linux que permite trabajar coordinadamente a m&uacute;ltiples ordenadorespertenecientes a una misma organizaci&oacute;n, u organizaciones distintas";
 choices[42][1] = "Un grid de Mosix puede dividirse en clusters virtuales. Un proceso ejecut&aacute;ndose en un cluster virtual nopuede ser transferido a otro cluster virtual";
 choices[42][2] = "El Entorno de Ejecuci&oacute;n Virtual de Mosix (MVE, Mosix Virtual Runtime Environment) garantiza que unproceso creado en un nodo del grid, pero que se est&aacute; ejecutando en otro, s&oacute;lo accede en &eacute;ste &uacute;ltimo a laCPU y la memoria";
 choices[42][3] = "En un grid Mosix cualquier proceso puede ser detenido en un punto de control y salvado a disco paraposteriormente reanudar su ejecuci&oacute;n desde dicho punto";
 answers[42] = choices[42][2];
 units[42] = "45";
 comments[42] = "Id Pregunta: 4858. ";


//  Id pregunta: 4965 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  El &ldquo;throughput&rdquo;, como medida de rendimiento de un sistema inform&aacute;tico, se define mejor como:";
 choices[43]= new Array();
 choices[43][0] = "Tiempo transcurrido entre la realizaci&oacute;n de una petici&oacute;n al sistema y la recepci&oacute;n de la respuesta.";
 choices[43][1] = "El n&uacute;mero de usuarios simult&aacute;neos trabajando en el sistema.";
 choices[43][2] = "El porcentaje de tiempo de los dispositivos est&aacute;n trabajando en tareas del sistema, no imputables a ning&uacute;n trabajo de usuario.";
 choices[43][3] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado. Por ejemplo, transacciones por segundo.";
 answers[43] = choices[43][3];
 units[43] = "52";
 comments[43] = "Id Pregunta: 4965. Examen TIC B 2007";


//  Id pregunta: 4980 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Cu&aacute;l debe ser la frecuencia m&iacute;nima de muestreo de una se&ntilde;al anal&oacute;gica de voz transmitida por un canaltelef&oacute;nico para que pueda ser reconstruida con exactitud:";
 choices[44]= new Array();
 choices[44][0] = "8 muestras/segundo.";
 choices[44][1] = "8000 muestras/segundo.";
 choices[44][2] = "16 muestras/segundo.";
 choices[44][3] = "4000 muestras/segundo.";
 answers[44] = choices[44][1];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4980. Examen TIC B 2007";


//  Id pregunta: 5009 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP (TransmissionControl Protocol/Internet Protocol)?";
 choices[45]= new Array();
 choices[45][0] = "PGR";
 choices[45][1] = "SMTP";
 choices[45][2] = "ICMP";
 choices[45][3] = "SNMP";
 answers[45] = choices[45][3];
 units[45] = "104";
 comments[45] = "Id Pregunta: 5009. Examen TIC A 2007";


//  Id pregunta: 5065 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En relaci&oacute;n con los ERP, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a SAP R/3?";
 choices[46]= new Array();
 choices[46][0] = "El m&oacute;dulo donde se gestionan las compras se denomina CO";
 choices[46][1] = "El m&oacute;dulo PM se encarga de gestionar la gesti&oacute;n de proyectos";
 choices[46][2] = "El m&oacute;dulo SD es parte del m&oacute;dulo de contabilidad financiera";
 choices[46][3] = "El m&oacute;dulo &quot;Basis&quot; se encarga de gestionar la base de datos";
 answers[46] = choices[46][3];
 units[46] = "65";
 comments[46] = "Id Pregunta: 5065. Examen TIC A 2007";


//  Id pregunta: 5459 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[47]= new Array();
 choices[47][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[47][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[47][2] = "Permite crear redes privadas virtuales";
 choices[47][3] = "Todas las respuestas son correctas";
 answers[47] = choices[47][3];
 units[47] = "100, 101, 107, 111";
 comments[47] = "Id Pregunta: 5459. Castilla y Le&oacute;n";


//  Id pregunta: 5554 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Los documentos ATAG:";
 choices[48]= new Array();
 choices[48][0] = "Muestran c&oacute;mo hacer que las herramientas de autor sean accesibles para personas con discapacidad.";
 choices[48][1] = "Muestran c&oacute;mo hacer  que los reproductores multimedia sean accesibles a personas con discapacidad.";
 choices[48][2] = "Est&aacute;n pensados para el contenido web.";
 choices[48][3] = "Todas las anteriores son correctas.";
 answers[48] = choices[48][0];
 units[48] = "39";
 comments[48] = "Id Pregunta: 5554. ";


//  Id pregunta: 5695 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[49]= new Array();
 choices[49][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[49][1] = " Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[49][2] = "No tiene valor jur&iacute;dico";
 choices[49][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[49] = choices[49][1];
 units[49] = "74";
 comments[49] = "Id Pregunta: 5695. NULL";


//  Id pregunta: 5788 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  En un radioenlace:";
 choices[50]= new Array();
 choices[50][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[50][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[50][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[50][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[50] = choices[50][1];
 units[50] = "108";
 comments[50] = "Id Pregunta: 5788. ";


//  Id pregunta: 5821 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &quot;servidor NAT&quot;?:";
 choices[51]= new Array();
 choices[51][0] = "Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n";
 choices[51][1] = "Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[51][2] = "Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5";
 choices[51][3] = "Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse";
 answers[51] = choices[51][1];
 units[51] = "102";
 comments[51] = "Id Pregunta: 5821. MAP 2008 A1";


//  Id pregunta: 5825 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[52]= new Array();
 choices[52][0] = "Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE)";
 choices[52][1] = "Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos";
 choices[52][2] = "Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE";
 choices[52][3] = "El proyecto complementario IDABD extiende esta normativa a particulares y empresas";
 answers[52] = choices[52][3];
 units[52] = "40";
 comments[52] = "Id Pregunta: 5825. MAP 2008 A1";


//  Id pregunta: 5951 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Qu&eacute; es SSO?";
 choices[53]= new Array();
 choices[53][0] = "Es un Sistema Operativo para proporcionar la autorizaci&oacute;n de utilizaci&oacute;n de recursos basado en certificados de usuario.";
 choices[53][1] = "Es un m&eacute;todo de control de acceso que permite a un usuario validarse una &uacute;nica vez y tener acceso a diferentes recursos sin tener que volver a introducir sus credenciales";
 choices[53][2] = "Es una plataforma que almacena todas las contrase&ntilde;as del usuario para que &eacute;ste no tenga que teclearlas cada vez que accede a las distintas aplicaciones";
 choices[53][3] = "Es la plataforma PKI que emite certificados de empleado p&uacute;blico para la AGE";
 answers[53] = choices[53][1];
 units[53] = "118";
 comments[53] = "Id Pregunta: 5951. ";


//  Id pregunta: 6166 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Se&ntilde;ale cual es el flujo general de informaci&oacute;n dentro de la organizaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Entrada, procesado, almacenamiento, difusi&oacute;n y utilizaci&oacute;n.";
 choices[54][1] = "Entrada, almacenamiento, utilizaci&oacute;n, procesado y difusi&oacute;n.";
 choices[54][2] = "Entrada, procesado, almacenamiento, utilizaci&oacute;n y difusi&oacute;n.";
 choices[54][3] = "Entrada, almacenamiento, procesado, difusi&oacute;n y utilizaci&oacute;n.";
 answers[54] = choices[54][3];
 units[54] = "21";
 comments[54] = "Id Pregunta: 6166. ";


//  Id pregunta: 6246 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes son implementaciones de Java Persistence API?";
 choices[55]= new Array();
 choices[55][0] = "Mediator";
 choices[55][1] = "Composite";
 choices[55][2] = "Facade";
 choices[55][3] = "Kodo";
 answers[55] = choices[55][3];
 units[55] = "116";
 comments[55] = "Id Pregunta: 6246. TICB-2009, bloque desarrollo";


//  Id pregunta: 6289 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Qu&eacute; informaci&oacute;n deber&aacute; describir, al menos, cada requisito en el an&aacute;lisis de un Sistema de Informaci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "Una descripci&oacute;n";
 choices[56][1] = "Un nombre Descriptivo del Requisito";
 choices[56][2] = "Un c&oacute;digo &uacute;nico";
 choices[56][3] = "Todas las anteriores";
 answers[56] = choices[56][3];
 units[56] = "78";
 comments[56] = "Id Pregunta: 6289. ";


//  Id pregunta: 6298 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es la diferencia entre una clase y un objeto?";
 choices[57]= new Array();
 choices[57][0] = "Las clases son un concepto din&aacute;mico mientras que los objetos son entes est&aacute;ticos";
 choices[57][1] = "Ninguna, son lo mismo";
 choices[57][2] = "Las clases son un concepto est&aacute;ticos mientras que los objetos son entes din&aacute;micos";
 choices[57][3] = "Tanto las clases como los objetos son entes est&aacute;ticos definidos en el programa fuente";
 answers[57] = choices[57][2];
 units[57] = "82";
 comments[57] = "Id Pregunta: 6298. ";


//  Id pregunta: 6430 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es una suite ofim&aacute;tica de software libre?";
 choices[58]= new Array();
 choices[58][0] = "iWork";
 choices[58][1] = "Koffice";
 choices[58][2] = "OpenOffice.org";
 choices[58][3] = "Todas las anteriores son suites ofim&aacute;ticas de software libre";
 answers[58] = choices[58][0];
 units[58] = "62";
 comments[58] = "Id Pregunta: 6430. NULL";


//  Id pregunta: 7264 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Existen diferencias entre ADSL2 y ADSL2+. Se&ntilde;ale la INCORRECTA:";
 choices[59]= new Array();
 choices[59][0] = "La velocidad m&aacute;xima. ADSL2+ alcanza mayores velocidades";
 choices[59][1] = "El ancho de banda. ADSL2+ ocupa mayor ancho de banda";
 choices[59][2] = "La infraestructura necesaria. ADSL2+ requiere una instalaci&oacute;n m&aacute;s compleja que ADSL2 para proporcionar la transici&oacute;n desde ADSL";
 choices[59][3] = "El n&uacute;mero de pares de cobre entrelazados. ADSL2+ requiere el doble de pares de cobre entrelazados";
 answers[59] = choices[59][3];
 units[59] = "107";
 comments[59] = "Id Pregunta: 7264. Examen TIC B 2009";


//  Id pregunta: 7300 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En reconocimiento autom&aacute;tico del habla (ASR), se utiliza el siguiente concepto:";
 choices[60]= new Array();
 choices[60][0] = "Trigrama";
 choices[60][1] = "Trifonema";
 choices[60][2] = "Al&oacute;fono";
 choices[60][3] = "Todos son conceptos utilizados en ASR";
 answers[60] = choices[60][3];
 units[60] = "94";
 comments[60] = "Id Pregunta: 7300. NULL";


//  Id pregunta: 7767 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   El entorno de escritorio KDE:";
 choices[61]= new Array();
 choices[61][0] = " Utiliza como gestor de ventanas uno propio.";
 choices[61][1] = " No posee gestor de ventanas propio.";
 choices[61][2] = " Define sus interfaces mediante tecnolog&iacute;a CORBA.";
 choices[61][3] = " No proporciona distintas configuraciones para distintos idiomas.";
 answers[61] = choices[61][0];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 7767. Map 2005";


//  Id pregunta: 7791 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[62]= new Array();
 choices[62][0] = " XPG4 Base.";
 choices[62][1] = " XPG4 Commands and Utilities.";
 choices[62][2] = " XPG4 Language.";
 choices[62][3] = " XPG4 Internationalised System Calls and Libraries.";
 answers[62] = choices[62][2];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7791. Map 2005";


//  Id pregunta: 7854 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   Indique cu&aacute;l de las siguientes reglas es cierta con respecto al Flujo de Datos, como elemento de un DFD:";
 choices[63]= new Array();
 choices[63][0] = " No puede crear ni destruir los datos.";
 choices[63][1] = " Puede transformar un dato en varios.";
 choices[63][2] = " Activa Procesos.";
 choices[63][3] = " Transforma los flujos de datos de entrada en flujos de salida de datos.";
 answers[63] = choices[63][0];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7854. Map 2005";


//  Id pregunta: 7913 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   En ADO.NET para mostrar datos en un control DataGrid:";
 choices[64]= new Array();
 choices[64][0] = " Hay que vincular el control DataGrid a un objeto DataView, seleccionar &laquo;Permitir ordenaci&oacute;n&raquo; en el Generador de propiedades y generar una rutina de tratamiento del evento SortCommand.";
 choices[64][1] = " Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculados por cada control en las plantillas del control DataList.";
 choices[64][2] = " Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador de propiedades.";
 choices[64][3] = " Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del control DataGrid.";
 answers[64] = choices[64][2];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7913. Map 2006";


//  Id pregunta: 8083 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[65]= new Array();
 choices[65][0] = " BPML.";
 choices[65][1] = " BPEL.";
 choices[65][2] = " BPMN.";
 choices[65][3] = " XPDL.";
 answers[65] = choices[65][3];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 8083. Map 2008";


//  Id pregunta: 8087 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   &iquest;Cu&aacute;l NO es un formato espec&iacute;fico de factura electr&oacute;nica?";
 choices[66]= new Array();
 choices[66][0] = " UBL.";
 choices[66][1] = " EDI.";
 choices[66][2] = " FacturaDTD.";
 choices[66][3] = " CCI-AEAT.";
 answers[66] = choices[66][2];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 8087. Map 2008";


//  Id pregunta: 8213 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La plataforma de validaci&oacute;n de certificados VALIDE del Ministerio de la Presidencia permite validar:";
 choices[67]= new Array();
 choices[67][0] = "Las URLs de los portales de las Administraciones P&uacute;blicas.";
 choices[67][1] = "Los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[67][2] = "Los certificados de sedes electr&oacute;nicas y los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[67][3] = "Los certificados de sede electr&oacute;nica.";
 answers[67] = choices[67][3];
 units[67] = "30";
 comments[67] = "Id Pregunta: 8213. Examen TIC A1 2010";


//  Id pregunta: 8531 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[68]= new Array();
 choices[68][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[68][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[68][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[68][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[68] = choices[68][0];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8531. Examen TIC A2 2010 interna";


//  Id pregunta: 8662 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[69]= new Array();
 choices[69][0] = "Agente de usuario";
 choices[69][1] = "Servidor proxy";
 choices[69][2] = "Agente de usuario inverso";
 choices[69][3] = "Agente proxy";
 answers[69] = choices[69][3];
 units[69] = "109";
 comments[69] = "Id Pregunta: 8662. Examen UPM A2 2011";


//  Id pregunta: 8797 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; se entiende por la longitud de un camino de un grafo?";
 choices[70]= new Array();
 choices[70][0] = "El n&uacute;mero de v&eacute;rtices que contiene";
 choices[70][1] = "El n&uacute;mero de aristas que contiene";
 choices[70][2] = "El n&uacute;mero de sub&aacute;rboles que contiene";
 choices[70][3] = "La distancia entre dos aristas";
 answers[70] = choices[70][1];
 units[70] = "-";
 comments[70] = "Id Pregunta: 8797. Examen UPM A2 2011";


//  Id pregunta: 8978 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Respecto al sistema operativo Android:";
 choices[71]= new Array();
 choices[71][0] = "Muchas de sus aplicaciones est&aacute;n escritas en Java";
 choices[71][1] = "No dispone de una m&aacute;quina virtual java";
 choices[71][2] = "Las respuestas a) y b) son ciertas";
 choices[71][3] = "Las respuestas a) y b) son falsas";
 answers[71] = choices[71][2];
 units[71] = "47";
 comments[71] = "Id Pregunta: 8978. ";


//  Id pregunta: 9177 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Es un formato de imagen vectorial:";
 choices[72]= new Array();
 choices[72][0] = "VML";
 choices[72][1] = "JPG";
 choices[72][2] = "XCF";
 choices[72][3] = "GIF";
 answers[72] = choices[72][0];
 units[72] = "93";
 comments[72] = "Id Pregunta: 9177. NULL";


//  Id pregunta: 9205 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[73]= new Array();
 choices[73][0] = "Huella sim&eacute;trica.";
 choices[73][1] = "Huella asim&eacute;trica.";
 choices[73][2] = "Huella an&oacute;nima.";
 choices[73][3] = "Todas las anteriores son verdaderas.";
 answers[73] = choices[73][3];
 units[73] = "37";
 comments[73] = "Id Pregunta: 9205. ";


//  Id pregunta: 9463 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; diagramas de UML 2.0 son los m&aacute;s adecuados para el modelo de interacci&oacute;n de una aplicaci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "Comunicaci&oacute;n, despliegue y secuencia.";
 choices[74][1] = "Despliegue, secuencia y casos de uso.";
 choices[74][2] = "Secuencia, comunicaci&oacute;n y tiempos.";
 choices[74][3] = "Actividades, estados y tiempos.";
 answers[74] = choices[74][2];
 units[74] = "84";
 comments[74] = "Id Pregunta: 9463. NULL";


//  Id pregunta: 9480 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[75]= new Array();
 choices[75][0] = "Cuando una inversi&oacute;n tiene VAN positivo, la TIR es superior al coste de capital invertido";
 choices[75][1] = "Cuando una inversi&oacute;n tiene VAN negativo, la TIR es inferior al coste de capital invertido";
 choices[75][2] = "VAN y TIR son m&eacute;todos din&aacute;micos de selecci&oacute;n de inversiones";
 choices[75][3] = "Todas las afirmaciones anteriores son correctas";
 answers[75] = choices[75][3];
 units[75] = "38";
 comments[75] = "Id Pregunta: 9480. ";


//  Id pregunta: 9776 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[76]= new Array();
 choices[76][0] = "chmod u+s /directorio/fichero ";
 choices[76][1] = "chmog g+s /directorio ";
 choices[76][2] = "chmod 177 /directorio ";
 choices[76][3] = "chmod +t /directorio ";
 answers[76] = choices[76][3];
 units[76] = "53";
 comments[76] = "Id Pregunta: 9776. Examen TIC A2 2013";


//  Id pregunta: 9784 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En un documento XML los valores de un atributo:";
 choices[77]= new Array();
 choices[77][0] = "Deben ir siempre entre comillas.";
 choices[77][1] = "Deben ir entre comillas si no son n&uacute;meros o fechas.";
 choices[77][2] = "No deben ir entre comillas.";
 choices[77][3] = "Deben ir entre comillas si son n&uacute;meros o fechas.";
 answers[77] = choices[77][0];
 units[77] = "69";
 comments[77] = "Id Pregunta: 9784. Examen TIC A2 2013";


//  Id pregunta: 9807 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[78]= new Array();
 choices[78][0] = "Ley ordinaria.";
 choices[78][1] = "Orden Ministerial.";
 choices[78][2] = "Ley org&aacute;nica.";
 choices[78][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[78] = choices[78][1];
 units[78] = "43";
 comments[78] = "Id Pregunta: 9807. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9811 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  La velocidad del est&aacute;ndar USB 3.0 es:";
 choices[79]= new Array();
 choices[79][0] = "Similar a la de USB 2.0.";
 choices[79][1] = "10 veces superior a la de USB 2.0.";
 choices[79][2] = "480 Mbps.";
 choices[79][3] = "15 veces superior a la de USB 2.0.";
 answers[79] = choices[79][1];
 units[79] = "46";
 comments[79] = "Id Pregunta: 9811. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9874 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Un trabajador asalariado crea un programa de ordenador en el ejercicio de sus funciones laborales. De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, la titularidad de los derechos de explotaci&oacute;n del programa corresponder&aacute;";
 choices[80]= new Array();
 choices[80][0] = "al autor del programa.";
 choices[80][1] = "al autor y al empresario, conjuntamente, salvo pacto en contrario.";
 choices[80][2] = "al autor en cuanto al programa objeto, pero no respecto al programa fuente.";
 choices[80][3] = "exclusivamente al empresario, salvo pacto en contrario.";
 answers[80] = choices[80][3];
 units[80] = "36";
 comments[80] = "Id Pregunta: 9874. TIC A1, Examen 2013";


//  Id pregunta: 9931 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[81]= new Array();
 choices[81][0] = "N3.";
 choices[81][1] = "N4.";
 choices[81][2] = "N6.";
 choices[81][3] = "N7.";
 answers[81] = choices[81][2];
 units[81] = "100";
 comments[81] = "Id Pregunta: 9931. NULL";


//  Id pregunta: 9967 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[82]= new Array();
 choices[82][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[82][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[82][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[82][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[82] = choices[82][3];
 units[82] = "71";
 comments[82] = "Id Pregunta: 9967. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10051 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[83]= new Array();
 choices[83][0] = "Contiene la clave privada.";
 choices[83][1] = "Cumple la sintaxis PKCS #21.";
 choices[83][2] = "Est&aacute; codificado en un formato no binario.";
 choices[83][3] = "No se puede convertir a formato .PEM.";
 answers[83] = choices[83][0];
 units[83] = "72";
 comments[83] = "Id Pregunta: 10051. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10127 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[84]= new Array();
 choices[84][0] = "Fault Mangement";
 choices[84][1] = "Configuration Management";
 choices[84][2] = "Accounting Management";
 choices[84][3] = "Improvement Management";
 answers[84] = choices[84][3];
 units[84] = "104";
 comments[84] = "Id Pregunta: 10127. ";


//  Id pregunta: 10175 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Booch, Jacobson y Rumbaugh propusieron de forma conjunta PUDS como marco de trabajo gen&eacute;rico para el desarrollo de software.";
 choices[85]= new Array();
 choices[85][0] = "PUDS propone un proceso iterativo e incremental para el desarrollo de sw. La distribuci&oacute;n de la funcionalidad a implementar en distintos incrementos implica un mayor esfuerzo y dificultad en relaci&oacute;n con la gesti&oacute;n del riesgo. ";
 choices[85][1] = "Cada ciclo de desarrollo comprende varias iteraciones. Cada iteraci&oacute;n se subdivide en 4 fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n y Transici&oacute;n";
 choices[85][2] = "Cada ciclo de desarrollo se subdivide en varias fases o flujos de trabajo fundamentales: planificaci&oacute;n, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n y pruebas y finalmente, evaluaci&oacute;n del ciclo.";
 choices[85][3] = "Los casos de uso gu&iacute;an el proceso de desarrollo, centrando la atenci&oacute;n en lo que el usuario quiere / espera del sistema";
 answers[85] = choices[85][3];
 units[85] = "82";
 comments[85] = "Id Pregunta: 10175. ";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[86]= new Array();
 choices[86][0] = "Est&aacute; sometida a control por parte de la IGAE y del Tribunal de Cuentas";
 choices[86][1] = "Est&aacute; sujeta a la LOFAGE en todos sus preceptos";
 choices[86][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[86][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[86] = choices[86][0];
 units[86] = "29";
 comments[86] = "Id Pregunta: 10271. Art&iacute;culos 2 y 33 del RD 428/1993";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)   Cu&aacute;l de los siguientes debe ser el primer paso en una Auditor&iacute;a de Sistemas ";
 choices[87]= new Array();
 choices[87][0] = "Crear un diagrama de flujo de las ramas de decisi&oacute;n. ";
 choices[87][1] = "Comprender el entorno a estudiar";
 choices[87][2] = "Realizar una evaluaci&oacute;n de riesgos";
 choices[87][3] = "Desarrollar un plan de auditor&iacute;a";
 answers[87] = choices[87][1];
 units[87] = "31, 32, 33";
 comments[87] = "Id Pregunta: 10555. Un auditor necesita obtener una comprensi&oacute;n de los procesos antes de crear un diagrama de flujo, evaluar los riesgos o desarrollar un plan de auditor&iacute;a";


//  Id pregunta: 10844 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El tipo de prueba BigBang es de tipo:";
 choices[88]= new Array();
 choices[88][0] = "Prueba de sistema.";
 choices[88][1] = "Prueba de aceptaci&oacute;n.";
 choices[88][2] = "Prueba de rendimiento.";
 choices[88][3] = "Prueba de integraci&oacute;n.";
 answers[88] = choices[88][3];
 units[88] = "0";
 comments[88] = "Id Pregunta: 10844. Examen GSI 2014";


//  Id pregunta: 10934 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[89]= new Array();
 choices[89][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[89][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[89][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[89][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[89] = choices[89][1];
 units[89] = "111";
 comments[89] = "Id Pregunta: 10934. TIC A1 AGE 2014";


//  Id pregunta: 11068 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cual de la siguientes afirmaciones es CORRECTA para TODOS los procesos?";
 choices[90]= new Array();
 choices[90][0] = "Definen actividades, roles, responsabilidades, funciones y m&eacute;tricas";
 choices[90][1] = "Crean valor para las partes interesadas (stakeholders)";
 choices[90][2] = "Se entrega por un Proveedor de Servicios como soporte a un Cliente";
 choices[90][3] = "Son unidades de las Organizaciones, responsables de resultados espec&iacute;ficos";
 answers[90] = choices[90][1];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11068. ";


//  Id pregunta: 11112 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seleccione la opci&oacute;n verdadera";
 choices[91]= new Array();
 choices[91][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[91][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[91][2] = "ACCEDA permite crear un registro en la nube";
 choices[91][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[91] = choices[91][0];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11112. ";


//  Id pregunta: 11116 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seleccione la opci&oacute;n verdadera respecto a la clasificaci&oacute;n de las empresas en contratos";
 choices[92]= new Array();
 choices[92][0] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y contratos de servicios de valor estimado mayor que 500.000&euro;";
 choices[92][1] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 500.000&euro; y contratos de servicios de valor estimado mayor que 200.000&euro;";
 choices[92][2] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y en todo caso para contratos de servicios";
 choices[92][3] = "S&oacute;lo es exigible en contratos de obras en todo caso y contratos de servicios de valor estimado mayor que 200.000&euro;";
 answers[92] = choices[92][1];
 units[92] = "41";
 comments[92] = "Id Pregunta: 11116. ";


//  Id pregunta: 11358 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el objetivo principal del contenido del Cat&aacute;logo de Servicios?";
 choices[93]= new Array();
 choices[93][0] = "Ofrecer informaci&oacute;n sobre todos los servicios";
 choices[93][1] = "Ofrecer informaci&oacute;n confiable de los servicios operativos y en desarrollo";
 choices[93][2] = "Tener informaci&oacute;n sobre la infraestructura";
 choices[93][3] = "Analizar inversiones en servicios";
 answers[93] = choices[93][1];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11358. ";


//  Id pregunta: 11362 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique qu&eacute; definiciones son correctas de acuerdo a ITIL v3 para Gesti&oacute;n de Incidencias y Gesti&oacute;n de Problemas: 1. Gesti&oacute;n de Incidencias: restaura el servicio lo antes posible, sin importar la soluci&oacute;n aplicada; 2. Gesti&oacute;n de Problemas: procura dar soluciones definitivas para evitar la recurrencia de incidencias.";
 choices[94]= new Array();
 choices[94][0] = "Solo 1";
 choices[94][1] = "Solo 2";
 choices[94][2] = "Ambas";
 choices[94][3] = "Ninguna";
 answers[94] = choices[94][2];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11362. ";


//  Id pregunta: 11442 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece los procedimientos para la habilitaci&oacute;n del ejercicio de los derechos del uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[95]= new Array();
 choices[95][0] = "La CNMC.";
 choices[95][1] = "El gobierno.";
 choices[95][2] = "El Estado.";
 choices[95][3] = "El MINETUR.";
 answers[95] = choices[95][1];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11442. ";


//  Id pregunta: 11517 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n el Modelo de Referencia de WorkFlow de la WFMc (WorkFlow Management Coalition), se&ntilde;ale la INCORRECTA:";
 choices[96]= new Array();
 choices[96][0] = "WF Enacment Service es el servicio de representaci&oacute;n de workflow e interpreta la descripci&oacute;n de los procesos.";
 choices[96][1] = "El interfaz 2 establece la comunicaci&oacute;n con las aplicaciones de los clientes.";
 choices[96][2] = "La Interfaz 4 o WAPI, establece funciones de interoperabilidad e interpretaci&oacute;n com&uacute;n en la definici&oacute;n de procesos.";
 choices[96][3] = "La Interfaz 1 se encarga de la administraci&oacute;n y monitorizaci&oacute;n del flujo de trabajo.";
 answers[96] = choices[96][3];
 units[96] = "71";
 comments[96] = "Id Pregunta: 11517. NULL";


//  Id pregunta: 11557 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, el documento de alto nivel con todos los requerimientos del proyectos priorizados seg&uacute;n retorno de inversi&oacute;n (ROI), se denomina:";
 choices[97]= new Array();
 choices[97][0] = "Sprint Backlog";
 choices[97][1] = "Sprint Chart";
 choices[97][2] = "Product Backlog";
 choices[97][3] = "Burn Down Chart";
 answers[97] = choices[97][2];
 units[97] = "79";
 comments[97] = "Id Pregunta: 11557. NULL";


//  Id pregunta: 11572 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l no es una modulaci&oacute;n para DSL?";
 choices[98]= new Array();
 choices[98][0] = "CAP";
 choices[98][1] = "FSK";
 choices[98][2] = "DMT";
 choices[98][3] = "WDMT";
 answers[98] = choices[98][1];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11572. NULL";


//  Id pregunta: 11757 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes dificultades no tiene que hacer frente el par telef&oacute;nico para la transmisi&oacute;n de alta velocidad de datos?";
 choices[99]= new Array();
 choices[99][0] = "Ruido impulsivo";
 choices[99][1] = "Ruido de fondo";
 choices[99][2] = "Diafon&iacute;a";
 choices[99][3] = "Medio costoso";
 answers[99] = choices[99][3];
 units[99] = "107";
 comments[99] = "Id Pregunta: 11757. ";


