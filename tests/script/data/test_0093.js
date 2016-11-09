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

//  Id pregunta: 63 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; es la WAI?";
 choices[0]= new Array();
 choices[0][0] = "una asociaci&oacute;n mundial de defensa de los internautas";
 choices[0][1] = "una iniciativa para la automatizaci&oacute;n de las tareas de organizaci&oacute;n web";
 choices[0][2] = "una iniciativa para facilitar el acceso a la web de los discapacitados";
 choices[0][3] = "una iniciativa para el desarrollo de aplicaciones inal&aacute;mbricas";
 answers[0] = choices[0][2];
 units[0] = "39";
 comments[0] = "Id Pregunta: 63. ";


//  Id pregunta: 179 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el contexto de la normalizaci&oacute;n, pruebas de conformidad y certificaciones, determine cu&aacute;l de las siguientes sentencias es falsa:";
 choices[1]= new Array();
 choices[1][0] = "Las pruebas de conformidad tienen que ser realizadas por un laboratorio independiente";
 choices[1][1] = "Certificaci&oacute;n y homologaci&oacute;n son conceptos equivalentes";
 choices[1][2] = "Una norma es una especificaci&oacute;n t&eacute;cnica aprobada por un organismo autorizado de normalizaci&oacute;n y cuyo cumplimiento no es obligatorio";
 choices[1][3] = "Normalizaci&oacute;n es un conjunto de actividades entre las que se incluyen los m&eacute;todos de medida relativos a las normas";
 answers[1] = choices[1][0];
 units[1] = "42";
 comments[1] = "Id Pregunta: 179. ";


//  Id pregunta: 351 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La utilizaci&oacute;n de sistemas abiertos permite una serie de ventajas. Se&ntilde;ale cual de las siguientes no es una de ellas:";
 choices[2]= new Array();
 choices[2][0] = "Mejorar, en general, precio/rendimiento";
 choices[2][1] = "Simplificar el mantenimiento debido al reducido n&uacute;mero de posibles proveedores";
 choices[2][2] = "Garantizar la libertad de elecci&oacute;n";
 choices[2][3] = "Proteger la inversi&oacute;n realizada en equipo f&iacute;sico";
 answers[2] = choices[2][1];
 units[2] = "40";
 comments[2] = "Id Pregunta: 351. ";


//  Id pregunta: 560 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cual de las siguientes opciones no es una ventaja de un sistema integrado";
 choices[3]= new Array();
 choices[3][0] = "Mayor eficiencia conjunta y una interrelaci&oacute;n m&aacute;s efectiva de actividades entre subsistemas.";
 choices[3][1] = "Incorporaci&oacute;n de h&aacute;bitos para compartir ampliamente los recursos, obteniendo beneficios potenciales, debidos aeconom&iacute;as de escala y especializaci&oacute;n.";
 choices[3][2] = "Posibilidad de abordar las decisiones desde la perspectiva del sistema com&uacute;n conjunto en vez de sobre una basesub&oacute;ptima que utilice solamente informaci&oacute;n y objetivos locales.";
 choices[3][3] = "Sistemas mas simples evitando riesgos a&ntilde;adidos";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 560. ";


//  Id pregunta: 566 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Las organizaciones basadas en el conocimiento, seg&uacute;n Berenguer. Se&ntilde;ale la correcta.";
 choices[4]= new Array();
 choices[4][0] = "Consideran el tiempo como un factor cr&iacute;tico";
 choices[4][1] = "Tienen claro que la tecnolog&iacute;a vuelve a una organizaci&oacute;n m&aacute;s competitiva";
 choices[4][2] = "Poseen una cultura organizacional basada en compartir conocimientos y valorar los resultados a corto plazo";
 choices[4][3] = "Todas son caracter&iacute;siticas propias de las organizaciones basadas en el conocimiento";
 answers[4] = choices[4][0];
 units[4] = "22";
 comments[4] = "Id Pregunta: 566. ";


//  Id pregunta: 571 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)   Stephen P. Robbins aport&oacute; a los sistemas de informaci&oacute;n";
 choices[5]= new Array();
 choices[5][0] = "Algoritmos de ordenaci&oacute;n num&eacute;rica";
 choices[5][1] = "Una m&eacute;todo de  de gesti&oacute;n de colas";
 choices[5][2] = "Estudios sobre planificaci&oacute;n estrat&eacute;gica";
 choices[5][3] = "Un m&eacute;todo de planificaci&oacute;n de procesos";
 answers[5] = choices[5][2];
 units[5] = "23";
 comments[5] = "Id Pregunta: 571. ";


//  Id pregunta: 715 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Una base de datos relacional est&aacute; en tercera forma normal, si adem&aacute;s de estar en segunda forma normal";
 choices[6]= new Array();
 choices[6][0] = "Todos sus atributos no primos dependen no transitivamente de la llave primaria";
 choices[6][1] = "Los atributos no primos dependen funcionalmente de la llave primaria";
 choices[6][2] = "Por cada rengl&oacute;n columna contiene valores at&oacute;micos.";
 choices[6][3] = "No contiene ning&uacute;n grupo repetitivo";
 answers[6] = choices[6][0];
 units[6] = "58";
 comments[6] = "Id Pregunta: 715. Similar a examen TIC SS A 2003";


//  Id pregunta: 773 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con un sistema de workflow?";
 choices[7]= new Array();
 choices[7][0] = "Facilidad de enrutamiento";
 choices[7][1] = "Monitorizaci&oacute;n y control";
 choices[7][2] = "Gesti&oacute;n de procedimintos";
 choices[7][3] = "Control de responsabilidades";
 answers[7] = choices[7][3];
 units[7] = "72";
 comments[7] = "Id Pregunta: 773. ";


//  Id pregunta: 844 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre un proyecto GIS es cierta?:";
 choices[8]= new Array();
 choices[8][0] = "La digitalizaci&oacute;n de una cartograf&iacute;a existente es cara por lo laborioso del proceso de digitalizaci&oacute;n ya que requiere mucho trabajo manual de depuraci&oacute;n y correcci&oacute;n.";
 choices[8][1] = "Mientras el coste del uso de los sat&eacute;lites de posici&oacute;n no baje, la obtenci&oacute;n de datos mediante itinerarios con GPS siempre presenta una relaci&oacute;n coste/calidad inaceptable.";
 choices[8][2] = "El procesado de im&aacute;genes de sat&eacute;lite es complicado puesto que la informaci&oacute;n r&aacute;ster no puede ser vectorizada.";
 choices[8][3] = "La fotogrametr&iacute;a es una opci&oacute;n viable s&oacute;lo cuando no existan otros m&eacute;todos (trazado por GPS, procesado de im&aacute;genes de sat&eacute;lite, digitalizaci&oacute;n de cartograf&iacute;as existentes) por lo elevado de su coste.";
 answers[8] = choices[8][0];
 units[8] = "67";
 comments[8] = "Id Pregunta: 844. NULL";


//  Id pregunta: 864 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes es un lenguaje espec&iacute;fico de la ingenier&iacute;a del conocimiento?:";
 choices[9]= new Array();
 choices[9][0] = "C++";
 choices[9][1] = "Java";
 choices[9][2] = "PROLOG";
 choices[9][3] = "PASCAL";
 answers[9] = choices[9][2];
 units[9] = "64";
 comments[9] = "Id Pregunta: 864. ";


//  Id pregunta: 947 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  CICS";
 choices[10]= new Array();
 choices[10][0] = "Es un ordenador con un conjunto de instrucciones complejo";
 choices[10][1] = "Es un servidor de directorio x500";
 choices[10][2] = "Es un monitor transaccional";
 choices[10][3] = "Es un servidor de directorio LDAP";
 answers[10] = choices[10][2];
 units[10] = "50";
 comments[10] = "Id Pregunta: 947. ";


//  Id pregunta: 1002 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El cifrado DES - EDE (Encrypt-Decrypt-Encrypt) es:";
 choices[11]= new Array();
 choices[11][0] = "Un cifrado doble con 2 claves que aumentan el tama&ntilde;o de la clave DES a 112 bits";
 choices[11][1] = "Un cifrado triple con 2 claves que aumenta el tama&ntilde;o de la clave DES a 112 bits";
 choices[11][2] = "Un cifrado triple con una clave de 56 bits";
 choices[11][3] = "No existe";
 answers[11] = choices[11][2];
 units[11] = "72";
 comments[11] = "Id Pregunta: 1002. Pregunta capciosa";


//  Id pregunta: 1170 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  GNU:";
 choices[12]= new Array();
 choices[12][0] = "Es un acr&oacute;nimo de 'GNU is Not Unix'";
 choices[12][1] = "Fue fundado en 1984 por Richard M. Stallman para crear un sistema operativo Unix completo, basado en software libre.";
 choices[12][2] = "Es el autor de las licencias de software libre GPL y LGPL";
 choices[12][3] = "Todas son ciertas";
 answers[12] = choices[12][3];
 units[12] = "53";
 comments[12] = "Id Pregunta: 1170. ";


//  Id pregunta: 1287 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Marcar la correcta respecto de los algoritmos criptogr&aacute;ficos:";
 choices[13]= new Array();
 choices[13][0] = "El algoritmo de cifra de Merkle-Hellman es de clave dispersa";
 choices[13][1] = "El algoritmo de cifra de Merkle-Hellman es de clave &uacute;nica";
 choices[13][2] = "El algoritmo DES es de clave p&uacute;blica";
 choices[13][3] = "El algoritmo DES es de clave sim&eacute;trica";
 answers[13] = choices[13][3];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1287. ";


//  Id pregunta: 1433 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  XQL es:";
 choices[14]= new Array();
 choices[14][0] = "Extended Query Language";
 choices[14][1] = "XML Query Language";
 choices[14][2] = "No se corresponde con ningun acr&oacute;nimo usado en inform&aacute;tica o telecomunicaciones";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[14] = choices[14][1];
 units[14] = "69";
 comments[14] = "Id Pregunta: 1433. NULL";


//  Id pregunta: 1448 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes denominaciones no corresponde a un formato comercial de DVD?:";
 choices[15]= new Array();
 choices[15][0] = "DVD+RW";
 choices[15][1] = "DVD-R";
 choices[15][2] = "DVD-RE";
 choices[15][3] = "DVD RAM";
 answers[15] = choices[15][2];
 units[15] = "48";
 comments[15] = "Id Pregunta: 1448. ";


//  Id pregunta: 1508 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  RAID significa:";
 choices[16]= new Array();
 choices[16][0] = "Random Access Internet Devices, dispositivos de acceso aleatorio a internet, un tipo de m&oacute;dem que optimiza la velocidad de acceso";
 choices[16][1] = "RAdio Identification and Detection, Identificaci&oacute;n y Detecci&oacute;n por Radio, tecnolog&iacute;a basada en las propiedades de las ondas de radio para detectar cuerpos y objetos quietos o en movimiento";
 choices[16][2] = "Redundant Array of Inexpensive Disks, matriz redundante de discos baratos, tecnolog&iacute;a para tener redundancia en el almacenamiento de datos evitando as&iacute; p&eacute;rdida accidental o intencionada de informaci&oacute;n";
 choices[16][3] = "Redes de Acceso Inal&aacute;mbrico por Diversidad, tecnolog&iacute;a que usa la diversidad (dispersi&oacute;n de la onda en varios rayos) de la transmisi&oacute;n de ondas de radio para aumentar la potencia de transmisi&oacute;n de datos en comunicaciones inal&aacute;mbricas de datos";
 answers[16] = choices[16][2];
 units[16] = "48";
 comments[16] = "Id Pregunta: 1508. ";


//  Id pregunta: 1829 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Con cu&aacute;l de las siguientes categor&iacute;as de software est&aacute; m&aacute;s relacionado el Business Intelligence?";
 choices[17]= new Array();
 choices[17][0] = "ERP.";
 choices[17][1] = "Datawarehouse y OLAP.";
 choices[17][2] = "Document Management y Content Management.";
 choices[17][3] = "SCM.";
 answers[17] = choices[17][1];
 units[17] = "68";
 comments[17] = "Id Pregunta: 1829. ";


//  Id pregunta: 2139 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica com&uacute;n de las metodolog&iacute;as de desarrollo de equipos l&oacute;gicos?:";
 choices[18]= new Array();
 choices[18][0] = "Uso de las t&eacute;cnicas gr&aacute;ficas";
 choices[18][1] = "Orden y coherencia";
 choices[18][2] = "Pruebas de aceptaci&oacute;n";
 choices[18][3] = "Diccionario de datos";
 answers[18] = choices[18][2];
 units[18] = "79";
 comments[18] = "Id Pregunta: 2139. ";


//  Id pregunta: 2277 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El Lenguaje de Definici&oacute;n de Datos (LDD) describe:";
 choices[19]= new Array();
 choices[19][0] = "Las propiedades din&aacute;micas de las entidades";
 choices[19][1] = "Las propiedades est&aacute;ticas de las entidades";
 choices[19][2] = "Los dos tipos de propiedades, es indiferente";
 choices[19][3] = "No define propiedades, define comportamientos";
 answers[19] = choices[19][1];
 units[19] = "57";
 comments[19] = "Id Pregunta: 2277. ";


//  Id pregunta: 2361 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Entre las t&eacute;cnicas utilizadas para la especificaci&oacute;n de m&oacute;dulos figura el pseudoc&oacute;digo. Identifique entre los siguientes tipos de lenguaje cu&aacute;l se corresponde exactamente con el pseudoc&oacute;digo:";
 choices[20]= new Array();
 choices[20][0] = "Es un lenguaje natural.";
 choices[20][1] = "Es un lenguaje estructurado.";
 choices[20][2] = "Es un lenguaje de programaci&oacute;n.";
 choices[20][3] = "Ninguna es cierta.";
 answers[20] = choices[20][1];
 units[20] = "84";
 comments[20] = "Id Pregunta: 2361. ";


//  Id pregunta: 2480 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Relativo al software, &iquest;qu&eacute; es una m&eacute;trica?:";
 choices[21]= new Array();
 choices[21][0] = "Aquellos elementos externos al usuario, relativos al comportamiento actual del software y a su facilidad de cambio";
 choices[21][1] = "Medidas cuantitativas del grado que se da al software desde el punto de vista de un atributo";
 choices[21][2] = "Son aquellos elementos relativos a la forma y estructura de programas, datos y documentos";
 choices[21][3] = "Los criterios para calificar al software";
 answers[21] = choices[21][1];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2480. ";


//  Id pregunta: 2484 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Respecto al an&aacute;lisis y gesti&oacute;n en un proyecto inform&aacute;tico, indique cual de las siguientes afirmaciones es correcta:";
 choices[22]= new Array();
 choices[22][0] = "Las medidas preventivas est&aacute;n encaminadas a reducir los da&ntilde;os que puedan causar determinados incidentes";
 choices[22][1] = "El plan de contingencia contendr&aacute; las medidas preventivas adoptadas";
 choices[22][2] = "El plan de emergencia recoge las normas de actuaci&oacute;n durante o inmediatamente despu&eacute;s de cada fallo o da&ntilde;o";
 choices[22][3] = "Las medidas de correci&oacute;n van encaminadas a reducir la probabilidad de ocurrencia de incidentes";
 answers[22] = choices[22][2];
 units[22] = "32";
 comments[22] = "Id Pregunta: 2484. ";


//  Id pregunta: 2615 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes no es un resultado de la fase de an&aacute;lisis de Metrica v 3?";
 choices[23]= new Array();
 choices[23][0] = "Cat&aacute;logo de normas";
 choices[23][1] = "Cat&aacute;logo de requisitos";
 choices[23][2] = "Glosario";
 choices[23][3] = "Descripci&oacute;n de subsistemas";
 answers[23] = choices[23][0];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2615. NULL";


//  Id pregunta: 2638 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  El UML ( Unified modeling Language) es un lenguaje que permite modelar construir y documentar los elementos que forman un sistema SW orientado a objetos. Indicar cu&aacute;l entre los siguientes no corresponde a un modelo usado en UML ";
 choices[24]= new Array();
 choices[24][0] = "Diagrama de estructura din&aacute;mica";
 choices[24][1] = "Diagrama de Casos de Uso";
 choices[24][2] = "Diagrama de Secuencia";
 choices[24][3] = "Diagrama de colaboraci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2638. NULL";


//  Id pregunta: 2736 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[25]= new Array();
 choices[25][0] = "Pueden  ser permanentes o temporales";
 choices[25][1] = "No crean informaci&oacute;n";
 choices[25][2] = "Son  accesibles desde entidades externas.";
 choices[25][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[25] = choices[25][2];
 units[25] = "79,81";
 comments[25] = "Id Pregunta: 2736. ";


//  Id pregunta: 2764 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre el acoplamiento normal.";
 choices[26]= new Array();
 choices[26][0] = "Provoca dependencia de ejecuci&oacute;n.";
 choices[26][1] = "Los m&oacute;dulos se refieren a la misma estructura de datos local.";
 choices[26][2] = "No se produce traspaso de par&aacute;metros.";
 choices[26][3] = "Los m&oacute;dulos se refieren a la misma &aacute;rea global de datos.";
 answers[26] = choices[26][2];
 units[26] = "84";
 comments[26] = "Id Pregunta: 2764. ";


//  Id pregunta: 2877 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Indique cu&aacute;l de los siguientes componentes no es considerado por el m&eacute;todo de los puntos de funci&oacute;n de Albrecht, para la estimaci&oacute;n del tama&ntilde;o y del esfuerzo necesarios para desarrollar un sistema software";
 choices[27]= new Array();
 choices[27][0] = "Entradas externas";
 choices[27][1] = "Ficheros l&oacute;gicos internos";
 choices[27][2] = "Atributos del producto";
 choices[27][3] = "Consultas";
 answers[27] = choices[27][2];
 units[27] = "89";
 comments[27] = "Id Pregunta: 2877. NULL";


//  Id pregunta: 2938 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  En telefon&iacute;a m&oacute;vil GSM, &iquest;qu&eacute; bases de datos se utilizan para almacenar datos de cliente?";
 choices[28]= new Array();
 choices[28][0] = "VLR y HLR";
 choices[28][1] = "EIR y HLR";
 choices[28][2] = "MSC y VLR";
 choices[28][3] = "EIR y MSC";
 answers[28] = choices[28][0];
 units[28] = "108";
 comments[28] = "Id Pregunta: 2938. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3069 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Indique la afirmaci&oacute;n incorrecta respecto al correo electr&oacute;nico:";
 choices[29]= new Array();
 choices[29][0] = "Los mensajes se pueden recibir aunque el equipo est&eacute; desconectado";
 choices[29][1] = "No es necesaria la conexi&oacute;n directa emisor-receptor";
 choices[29][2] = "No permite enviar fax";
 choices[29][3] = "Todos los sistemas de correo electr&oacute;nico que cumplan las recomendaciones X.400 de la ITU-T pueden interconectarse a trav&eacute;s de la mensajer&iacute;a p&uacute;blica";
 answers[29] = choices[29][2];
 units[29] = "106";
 comments[29] = "Id Pregunta: 3069. ";


//  Id pregunta: 3072 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La arquitectura 'fault tolerant' se caracteriza por :";
 choices[30]= new Array();
 choices[30][0] = "La ejecuci&oacute;n de una instrucci&oacute;n se divide en fases";
 choices[30][1] = "Las diferentes funciones del sistema se encuentran distribuidas en procesadores especializados";
 choices[30][2] = "Existe suficiente redundancia para asegurar un funcionamiento correcto en caso de fallo";
 choices[30][3] = "Todos los componentes del ordenador intercambian datos compartiendo los buses";
 answers[30] = choices[30][2];
 units[30] = "45";
 comments[30] = "Id Pregunta: 3072. NULL";


//  Id pregunta: 3074 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La degradaci&oacute;n de la calidad de un sistema de transmisi&oacute;n se debe a las perturbaciones, se pueden distinguir varios tipos:";
 choices[31]= new Array();
 choices[31][0] = "La distorsi&oacute;n, se produce siempre en presencia de la se&ntilde;al y puede existir de dos tipos: directa e indirecta";
 choices[31][1] = "La intermodulaci&oacute;n consiste en la aparici&oacute;n en el receptor de nuevas componentes espectrales de primer orden debido a la mezcla de las componentes espectrales de la se&ntilde;al de informaci&oacute;n";
 choices[31][2] = "El ruido es un tipo de perturbaci&oacute;n de origen electromagn&eacute;tico, se consideran tres tipos : t&eacute;rmico, impulsivo y de cuantificaci&oacute;n";
 choices[31][3] = "La diafon&iacute;a produce en la funci&oacute;n de transferencia de extremo a extremo la aparici&oacute;n de frecuencias nuevas que no exist&iacute;an en la se&ntilde;al original";
 answers[31] = choices[31][2];
 units[31] = "99";
 comments[31] = "Id Pregunta: 3074. ";


//  Id pregunta: 3086 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Podemos definir protocolo como:";
 choices[32]= new Array();
 choices[32][0] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n entre entidades heterog&eacute;neas, tanto en la transmisi&oacute;n como en el control y recuperaci&oacute;n de errores";
 choices[32][1] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n  entre entidades homog&eacute;neas";
 choices[32][2] = "Conjunto de reglas responsables de la comunicaci&oacute;n directa entre 2 sistemas a trav&eacute;s del medio f&iacute;sico que los mantiene conectados";
 choices[32][3] = "Conjunto de reglas que permiten identificar de forma &uacute;nica e inequ&iacute;voca a un nodo o host";
 answers[32] = choices[32][1];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3086. Seg&uacute;n el modelo OSI un protocolo establece reglas organizadas y convenidas entre entidades pares (horizontal)";


//  Id pregunta: 3145 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta para un sistema intermedio o encaminador (router) de una red IP?:";
 choices[33]= new Array();
 choices[33][0] = "Un encaminador o router no puede fragmentar un datagrama";
 choices[33][1] = "Puede fragmentar un datagrama si es necesario pero no puede reensamblar los fragmentos";
 choices[33][2] = "Puede tanto fragmentar un datagrama como reensamblar los fragmentos";
 choices[33][3] = "Solo puede reensamblar los paquetes TCP orientados a conexi&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3145. ";


//  Id pregunta: 3253 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Cu&aacute;les son los servicios que proporciona el nivel de transporte (4 de OSI) al nivel de sesi&oacute;n (5 de OSI)?:";
 choices[34]= new Array();
 choices[34][0] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos e indicaci&oacute;n de calidad del servicio";
 choices[34][1] = "Transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[34][2] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[34][3] = "Control de calidad del servicio, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3253. NULL";


//  Id pregunta: 3293 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Qu&eacute; funci&oacute;n principal realiza una PABX?:";
 choices[35]= new Array();
 choices[35][0] = "Conmutaci&oacute;n";
 choices[35][1] = "Recogida de informaci&oacute;n de gesti&oacute;n de red";
 choices[35][2] = "Visualizaci&oacute;n de informaci&oacute;n de gesti&oacute;n de red";
 choices[35][3] = "Consulta bajo demanda de la informaci&oacute;n de gesti&oacute;n de red";
 answers[35] = choices[35][0];
 units[35] = "103";
 comments[35] = "Id Pregunta: 3293. ";


//  Id pregunta: 3347 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es una debilidad de las redes inal&aacute;mbricas frente a otro tipo de redes?:";
 choices[36]= new Array();
 choices[36][0] = "Poca seguridad";
 choices[36][1] = "Escasa protecci&oacute;n frente a interferencias";
 choices[36][2] = "Precio elevado";
 choices[36][3] = "Cobertura limitada";
 answers[36] = choices[36][2];
 units[36] = "107";
 comments[36] = "Id Pregunta: 3347. NULL";


//  Id pregunta: 3631 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  La prestaci&oacute;n de consentimiento expreso por parte del cliente o afectado  exige:";
 choices[37]= new Array();
 choices[37][0] = "Es valido el silencio por parte del destinatario";
 choices[37][1] = "La manifestaci&oacute;n de una voluntad libre, informada, espec&iacute;fica e inequ&iacute;voca (que no deje lugar a duda)";
 choices[37][2] = "Es v&aacute;lido el consentimiento oral";
 choices[37][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[37] = choices[37][1];
 units[37] = "110";
 comments[37] = "Id Pregunta: 3631. ";


//  Id pregunta: 3861 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  Cu&aacute;l no es una caracter&iacute;stica de IPv6";
 choices[38]= new Array();
 choices[38][0] = "Tama&ntilde;o de paquete m&aacute;ximo de 64 Kb";
 choices[38][1] = "Soporte para autenticaci&oacute;n y privacidad";
 choices[38][2] = "Aumenta el tama&ntilde;o de las tablas de enrutado";
 choices[38][3] = "Elimina el checksum del paquete";
 answers[38] = choices[38][2];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3861. Tanenbaum";


//  Id pregunta: 3948 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[39]= new Array();
 choices[39][0] = "MAN (Metropolitan Area Network";
 choices[39][1] = "LAN (Local Area Network)";
 choices[39][2] = "SAN (State Areal Network)";
 choices[39][3] = "WAN (Wide Area Network)";
 answers[39] = choices[39][2];
 units[39] = "113,101";
 comments[39] = "Id Pregunta: 3948. ";


//  Id pregunta: 4092 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Que es LAMP";
 choices[40]= new Array();
 choices[40][0] = "Una arquitectura web basada en software libre";
 choices[40][1] = "Una arquitectura web basada en j2ee";
 choices[40][2] = "Una arquitectura web basada en .Net";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][0];
 units[40] = "62";
 comments[40] = "Id Pregunta: 4092. ";


//  Id pregunta: 4222 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[41]= new Array();
 choices[41][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX &oacute; SOH al comienzo de la trama y un car&aacute;cter ETX &oacute; ETB al final de la trama";
 choices[41][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control";
 choices[41][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack";
 choices[41][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras";
 answers[41] = choices[41][2];
 units[41] = "100";
 comments[41] = "Id Pregunta: 4222. Control WACK :Wait After ACK";


//  Id pregunta: 4274 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta respecto a las caracter&iacute;sticas de los puertos USB (Universal Serial Bus)?:";
 choices[42]= new Array();
 choices[42][0] = "Su rendimiento es superior al del puerto de serie, pero inferior al del puerto paralelo";
 choices[42][1] = "Pueden transferir datos a una velocidad de hasta 480 Mbps.";
 choices[42][2] = "S&oacute;lo permiten conectar 2^6=16 dispositivos a un mismo ordenador.";
 choices[42][3] = "Necesitan que el sistema operativo disponga de una utilidad USBMS (USB Management System).";
 answers[42] = choices[42][1];
 units[42] = "46";
 comments[42] = "Id Pregunta: 4274. ";


//  Id pregunta: 4359 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[43]= new Array();
 choices[43][0] = "Homogeneidad de datos almacenados.";
 choices[43][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[43][2] = "Total organizaci&oacute;n.";
 choices[43][3] = "Facilidad para responder a consultas complejas.";
 answers[43] = choices[43][1];
 units[43] = "68";
 comments[43] = "Id Pregunta: 4359. ";


//  Id pregunta: 4496 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Metacity";
 choices[44]= new Array();
 choices[44][0] = "Es el gestor de eventos de GNOME 2";
 choices[44][1] = "Es el gestor de ventanas de GNOME 2";
 choices[44][2] = "Es el gestor de eventos de KDE";
 choices[44][3] = "Es el gestor de eventos de MOLINUX";
 answers[44] = choices[44][1];
 units[44] = "54";
 comments[44] = "Id Pregunta: 4496. ";


//  Id pregunta: 4529 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cual de los siguientes no es un perfil contemplado en Ia metodolog&iacute;a M&eacute;trica 3?";
 choices[45]= new Array();
 choices[45][0] = "Perfil Directivo.";
 choices[45][1] = "Perfil Jefe de Proyecto.";
 choices[45][2] = "Perfil Consultor.";
 choices[45][3] = "Perfil Usuario.";
 answers[45] = choices[45][3];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4529. NULL";


//  Id pregunta: 4540 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  El protocolo utilizado para gestionar un dispositivo en una red TCP/IP es:";
 choices[46]= new Array();
 choices[46][0] = "RCP";
 choices[46][1] = "SNMP";
 choices[46][2] = "SMTP";
 choices[46][3] = "ICMP";
 answers[46] = choices[46][1];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4540. ";


//  Id pregunta: 4565 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cual de las siguientes no es una distribuci&oacute;n comercial de Linux?:";
 choices[47]= new Array();
 choices[47][0] = "Debian";
 choices[47][1] = "Red Hat";
 choices[47][2] = "SuSE";
 choices[47][3] = "Caldera";
 answers[47] = choices[47][0];
 units[47] = "53";
 comments[47] = "Id Pregunta: 4565. ";


//  Id pregunta: 4635 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Dentro de la prueba de integraci&oacute;n de los sistemas 00, las pruebas basadas en el uso:";
 choices[48]= new Array();
 choices[48][0] = "se componen de pruebas basadas en errores, pruebas al azar y prueba por partici&oacute;n.";
 choices[48][1] = "construyen el sistema en capas, comenzando con las clases que no usan clases servidoras";
 choices[48][2] = "las pruebas basadas en el uso se engoblan en las pruebas de validaci&oacute;n";
 choices[48][3] = "est&aacute;n basadas en las pruebas unitarias del software convencional";
 answers[48] = choices[48][1];
 units[48] = "";
 comments[48] = "Id Pregunta: 4635. ";


//  Id pregunta: 4712 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[49]= new Array();
 choices[49][0] = "Cookies.";
 choices[49][1] = "Spam.";
 choices[49][2] = "Netnannies.";
 choices[49][3] = "Brownies.";
 answers[49] = choices[49][3];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4712. Examen 2006 JCYL";


//  Id pregunta: 5055 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con laduraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la personatitular del derecho, es cierta?";
 choices[50]= new Array();
 choices[50][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n delprograma.";
 choices[50][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 deenero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa";
 choices[50][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa";
 choices[50][3] = "Cuando el autor sea una persona natural, durar&aacute;n toda la vida del autor y setenta a&ntilde;os despu&eacute;s de sumuerte o declaraci&oacute;n de fallecimiento";
 answers[50] = choices[50][3];
 units[50] = "36";
 comments[50] = "Id Pregunta: 5055. Examen TIC A 2007";


//  Id pregunta: 5091 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  La informaci&oacute;n en el chip del DNI est&aacute; distribuida en tres zonas, con diferentes niveles y condiciones de acceso. &iquest;Cu&aacute;l no es una de ellas?";
 choices[51]= new Array();
 choices[51][0] = "Zona privada";
 choices[51][1] = "Zona de control";
 choices[51][2] = "Zona de seguridad";
 choices[51][3] = "Zona p&uacute;blica";
 answers[51] = choices[51][1];
 units[51] = "74";
 comments[51] = "Id Pregunta: 5091. NULL";


//  Id pregunta: 5146 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Seg&uacute;n M&eacute;trica V3, &iquest;Cu&aacute;l de los siguientes procesos NO est&aacute; incluido en el proceso de Desarrollo de Sistemas de Informaci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[52][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[52][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[52][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[52] = choices[52][2];
 units[52] = "86";
 comments[52] = "Id Pregunta: 5146. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5242 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Si una vez determinadas las fortalezas y debilidades, as&iacute; como las amenazas y oportunidades, se define una estrategia defensiva:";
 choices[53]= new Array();
 choices[53][0] = "Significa que la empresa est&aacute; preparada para enfrentarse a las amenazas";
 choices[53][1] = "Significa que la empresa se enfrenta a las amenazas externas sin las fortalezas internas necesarias";
 choices[53][2] = "Significa que la empresa cuenta con las fortalezas internas y adem&aacute;s se le presentan oportunidades externas";
 choices[53][3] = "Significa que a la empresa se le presentan oportunidades pero carece de preparaci&oacute;n para afrontarlas";
 answers[53] = choices[53][0];
 units[53] = "77";
 comments[53] = "Id Pregunta: 5242. ";


//  Id pregunta: 5637 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa en una soluci&oacute;n RAID.";
 choices[54]= new Array();
 choices[54][0] = "En RAID 0 un fallo en un disco provoca la p&eacute;rdida de todos los datos";
 choices[54][1] = "RAID 4 es como RAID 0 m&aacute;s un disco de paridad dedicado";
 choices[54][2] = "El RAID 1 no mejora el rendimiento en escritura respecto a RAID 0 ";
 choices[54][3] = "RAID 5 es uno de los niveles RAID m&aacute;s comunes, y hace uso de un disco de paridad dedicado";
 answers[54] = choices[54][3];
 units[54] = "48";
 comments[54] = "Id Pregunta: 5637. ";


//  Id pregunta: 5656 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel medio, las de nivel alto, a los siguientes ficheros:";
 choices[55]= new Array();
 choices[55][0] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[55][1] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[55][2] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[55][3] = "La a) y la b) son correctas";
 answers[55] = choices[55][1];
 units[55] = "29";
 comments[55] = "Id Pregunta: 5656. ";


//  Id pregunta: 5668 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cual de las siguientes empresas no est&aacute; entre las que desarrollaron originalmente el protocolo WS-Security?";
 choices[56]= new Array();
 choices[56][0] = "IBM";
 choices[56][1] = "Microsoft";
 choices[56][2] = "VeriSign";
 choices[56][3] = "SUN";
 answers[56] = choices[56][3];
 units[56] = "113";
 comments[56] = "Id Pregunta: 5668. ";


//  Id pregunta: 5961 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[57]= new Array();
 choices[57][0] = "Eficiencia";
 choices[57][1] = "Eficacia";
 choices[57][2] = "Proceso";
 choices[57][3] = "Requisito";
 answers[57] = choices[57][0];
 units[57] = "87";
 comments[57] = "Id Pregunta: 5961. Castilla La Mancha 2009";


//  Id pregunta: 6107 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Entre las t&eacute;cnicas y pr&aacute;cticas de educci&oacute;n de requisitos utilizadas en la ingenier&iacute;a de requisitos NO se encuentra la siguiente:";
 choices[58]= new Array();
 choices[58][0] = "Brainstorming.";
 choices[58][1] = "Casos de uso.";
 choices[58][2] = "M&eacute;todo Albrecht.";
 choices[58][3] = "Prototipado.";
 answers[58] = choices[58][2];
 units[58] = "78";
 comments[58] = "Id Pregunta: 6107. TIC A 2009";


//  Id pregunta: 6167 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes sistemas de informaci&oacute;n esta asociado con el nivel operacional?";
 choices[59]= new Array();
 choices[59][0] = "Executive Information System (E.I.S.)";
 choices[59][1] = "Management Information System (M.I.S.)";
 choices[59][2] = "Transaction Processing System (T.P.S.)";
 choices[59][3] = "Enterprise Resource Planning Solution (E.R.P.)";
 answers[59] = choices[59][2];
 units[59] = "21";
 comments[59] = "Id Pregunta: 6167. ";


//  Id pregunta: 6175 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cual es la &uacute;ltima versi&oacute;n del protocolo SCORM?";
 choices[60]= new Array();
 choices[60][0] = "SCORM 1.0";
 choices[60][1] = "SCORM 1.1";
 choices[60][2] = "SCORM 1.2";
 choices[60][3] = "SCORM 2004";
 answers[60] = choices[60][3];
 units[60] = "66";
 comments[60] = "Id Pregunta: 6175. ";


//  Id pregunta: 6239 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  A qu&eacute; proceso principal de M&eacute;trica pertenece la tarea &quot;Determinaci&oacute;n del Acuerdo de Nivel de Servicio&quot;";
 choices[61]= new Array();
 choices[61][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[61][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[61][2] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[61][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[61] = choices[61][3];
 units[61] = "86";
 comments[61] = "Id Pregunta: 6239. TICB-2009, bloque desarrollo";


//  Id pregunta: 6324 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  La cl&aacute;usula INSERT para inserci&oacute;n de datos";
 choices[62]= new Array();
 choices[62][0] = "Tan s&oacute;lo permite la inserci&oacute;n de una tupla cada vez.";
 choices[62][1] = "Puede permitir la inserci&oacute;n de m&aacute;s de una tupla al mismo tiempo.";
 choices[62][2] = "No permite insertar valores nulos.";
 choices[62][3] = "Obliga a que la inserci&oacute;n de los valores sea en el orden en que se cre&oacute; la tabla.";
 answers[62] = choices[62][1];
 units[62] = "58";
 comments[62] = "Id Pregunta: 6324. ";


//  Id pregunta: 7161 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de las siguientes distribuciones no se basa en Debian:";
 choices[63]= new Array();
 choices[63][0] = "Ubuntu";
 choices[63][1] = "Knoppix";
 choices[63][2] = "Fedora";
 choices[63][3] = "Guadalinex";
 answers[63] = choices[63][2];
 units[63] = "53";
 comments[63] = "Id Pregunta: 7161. Examen TIC B 2009";


//  Id pregunta: 7356 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El m&eacute;todo Pay-Back de an&aacute;lisis de una inversi&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Prima las inversiones con menor tiempo de recuperaci&oacute;n";
 choices[64][1] = "Es un m&eacute;todo din&aacute;mico";
 choices[64][2] = "Tiene en cuenta el momento en el que se producen los flujos de caja";
 choices[64][3] = "Todas son INCORRECTAS";
 answers[64] = choices[64][0];
 units[64] = "38";
 comments[64] = "Id Pregunta: 7356. NULL";


//  Id pregunta: 7776 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   La palabra clave de Visual Basic.NET &laquo;overrides&raquo; se utiliza para:";
 choices[65]= new Array();
 choices[65][0] = " Heredar todos los miembros no privados de la clase espec&iacute;fica.";
 choices[65][1] = " Especificar qu&eacute; clase no se puede utilizar como clase b&aacute;sica.";
 choices[65][2] = " Indicar que el procedimiento anula un procedimiento de la clase b&aacute;sica.";
 choices[65][3] = " Invocar c&oacute;digo escrito en una clase desde la propia clase.";
 answers[65] = choices[65][2];
 units[65] = "115";
 comments[65] = "Id Pregunta: 7776. Map 2005";


//  Id pregunta: 7804 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   En el dise&ntilde;o estructurado se utiliza el concepto de acoplamiento entre m&oacute;dulos de software. Indique de entre los siguientes tipos de acoplamiento el que corresponde al caso en que la informaci&oacute;n se transmite entre m&oacute;dulos como estructura de datos:";
 choices[66]= new Array();
 choices[66][0] = " Acoplamiento de datos simple.";
 choices[66][1] = " Acoplamiento por estampado.";
 choices[66][2] = " Acoplamiento de control.";
 choices[66][3] = " Acoplamiento externo.";
 answers[66] = choices[66][1];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7804. Map 2005";


//  Id pregunta: 8012 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   &iquest;Cu&aacute;l de los siguientes es un componente de la versi&oacute;n 2 del &laquo;framework&raquo; .NET de Microsoft?";
 choices[67]= new Array();
 choices[67][0] = " Visual Studio.";
 choices[67][1] = " CLR (Common Language Runtime).";
 choices[67][2] = " BizTalk.";
 choices[67][3] = " SQL Server.";
 answers[67] = choices[67][1];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 8012. Map 2007";


//  Id pregunta: 8098 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   En referencia a WiMAX, seleccione cu&aacute;l de las siguientes opciones se corresponde con WiMAX m&oacute;vil:";
 choices[68]= new Array();
 choices[68][0] = " 802.16i.";
 choices[68][1] = " 802.16e.";
 choices[68][2] = " 802.16f.";
 choices[68][3] = " 802.16n.";
 answers[68] = choices[68][1];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 8098. Map 2008";


//  Id pregunta: 8134 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)   &iquest;Cu&aacute;l de los siguientes apartados NO es un grupo clave de la biblioteca de clases base en .NET?";
 choices[69]= new Array();
 choices[69][0] = " Windows Forms.";
 choices[69][1] = " ASP.NET.";
 choices[69][2] = " ADO.NET.";
 choices[69][3] = " ACY.NET.";
 answers[69] = choices[69][3];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 8134. Map 2008";


//  Id pregunta: 8262 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; m&eacute;todo NO existe en la clase java HttpServlet?:";
 choices[70]= new Array();
 choices[70][0] = "doPut";
 choices[70][1] = "doTrace.";
 choices[70][2] = "doErrorC";
 choices[70][3] = "doOptions.";
 answers[70] = choices[70][2];
 units[70] = "116";
 comments[70] = "Id Pregunta: 8262. Examen TIC A1 2010";


//  Id pregunta: 8263 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Seg&uacute;n Lientz y Swanson y a diferencia de M&Eacute;TRICA versi&oacute;n 3, entre los 4 tipos de mantenimiento de sistemas de informaci&oacute;n, se encuentra:";
 choices[71]= new Array();
 choices[71][0] = "Mantenimiento preventivo.";
 choices[71][1] = "Mantenimiento perfectivo.";
 choices[71][2] = "Mantenimiento adaptativo.";
 choices[71][3] = "Mantenimiento correctivo.";
 answers[71] = choices[71][0];
 units[71] = "86";
 comments[71] = "Id Pregunta: 8263. Examen TIC A1 2010";


//  Id pregunta: 8505 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;C&oacute;mo se comenta una l&iacute;nea en XML (eXtensible Markup Language)? ";
 choices[72]= new Array();
 choices[72][0] = "/* Esto es un comentario */";
 choices[72][1] = "// Esto es un comentario ";
 choices[72][2] = "# Esto es un comentario";
 choices[72][3] = "&lt;!-- Esto es un comentario --&gt;";
 answers[72] = choices[72][3];
 units[72] = "69";
 comments[72] = "Id Pregunta: 8505. Examen TIC A2 2010";


//  Id pregunta: 8787 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; protocolo puede encontrar la direcci&oacute;n MAC de un computador, dada su direcci&oacute;n IP?";
 choices[73]= new Array();
 choices[73][0] = "RARP";
 choices[73][1] = "DHCP";
 choices[73][2] = "ARP";
 choices[73][3] = "Proxy RARP";
 answers[73] = choices[73][2];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8787. Examen UPM A2 2011";


//  Id pregunta: 8831 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)   Se&ntilde;ale la respuesta correcta con relaci&oacute;n a lTIL (IT Infrastructure Library):";
 choices[74]= new Array();
 choices[74][0] = " La gesti&oacute;n de problemas busca solucionar lo m&aacute;s r&aacute;pido posible las incidencias y restablecer el servicio lo antes posible ";
 choices[74][1] = " La gesti&oacute;n de la configuraci&oacute;n tiene como &uacute;nico objetivo el control del hardware inform&aacute;tico existente en la organizaci&oacute;n ";
 choices[74][2] = " La gesti&oacute;n de versiones se encarga de controlar todas las versiones, tanto hardware como software, involucrados en el sistema de explotaci&oacute;n ";
 choices[74][3] = " No es necesario analizar el impacto de la introducci&oacute;n de cambios en los sistemas inform&aacute;ticos, sino que se deben realizar lo m&aacute;s r&aacute;pido posible para evitar incidencias en los sistemas (gesti&oacute;n de cambios).";
 answers[74] = choices[74][2];
 units[74] = "98";
 comments[74] = "Id Pregunta: 8831. Examen UC3M 2010";


//  Id pregunta: 9014 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; t&eacute;cnica pueden emplearse para corregir la interferencia entre s&iacute;mbolos en un demodulador digital?";
 choices[75]= new Array();
 choices[75][0] = "el filtrado de coseno alzado de la moduladora";
 choices[75][1] = "el filtrado de pre&eacute;nfasis de la moduladora";
 choices[75][2] = "el filtrado de de retardo de grupo constante";
 choices[75][3] = "Ninguna de las anteriores";
 answers[75] = choices[75][0];
 units[75] = "99";
 comments[75] = "Id Pregunta: 9014. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9094 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[76]= new Array();
 choices[76][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[76][1] = "Si, como obra literaria.";
 choices[76][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[76][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[76] = choices[76][3];
 units[76] = "36";
 comments[76] = "Id Pregunta: 9094. ";


//  Id pregunta: 9159 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  No es una forma de presentar contenidos en un LMS:";
 choices[77]= new Array();
 choices[77][0] = "Estructura lineal";
 choices[77][1] = "Estructura matricial";
 choices[77][2] = "Estructura jer&aacute;rquica";
 choices[77][3] = "Estructura en red";
 answers[77] = choices[77][1];
 units[77] = "66";
 comments[77] = "Id Pregunta: 9159. ";


//  Id pregunta: 9163 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Respecto a la Directiva INSPIRE, indique la respuesta FALSA:";
 choices[78]= new Array();
 choices[78][0] = "Se refiere a la Directiva 2007/2/CE";
 choices[78][1] = "Contiene 34 temas espaciales";
 choices[78][2] = "El Comit&eacute; INSPIRE publica sus Implementing Rules en forma de Reglamentos";
 choices[78][3] = "Dirigida a que las IDEs de los Estados Miembros sean compatibles e interoperables";
 answers[78] = choices[78][2];
 units[78] = "67";
 comments[78] = "Id Pregunta: 9163. NULL";


//  Id pregunta: 9180 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  No es un espacio de color:";
 choices[79]= new Array();
 choices[79][0] = "RGB";
 choices[79][1] = "CMYK";
 choices[79][2] = "HSM";
 choices[79][3] = "HSV";
 answers[79] = choices[79][2];
 units[79] = "93";
 comments[79] = "Id Pregunta: 9180. NULL";


//  Id pregunta: 9236 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[80]= new Array();
 choices[80][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[80][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[80][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[80][3] = "Todas son correctas.";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9236. ";


//  Id pregunta: 9246 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es ntoskrnl.exe?";
 choices[81]= new Array();
 choices[81][0] = "Un virus que tuvo mucha incidencia en equipos en el 2012.";
 choices[81][1] = "El n&uacute;cleo del sistema operativo Windows 7.";
 choices[81][2] = "Es el programa en modo Kernel NTOS";
 choices[81][3] = "Proporciona los nuevos interfaces de llamadas al sistema de Windows.";
 answers[81] = choices[81][2];
 units[81] = "56";
 comments[81] = "Id Pregunta: 9246. ";


//  Id pregunta: 9513 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[82]= new Array();
 choices[82][0] = "Se alojan en un contenedor web";
 choices[82][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[82][2] = "Se pueden invocar desde una URL";
 choices[82][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[82] = choices[82][3];
 units[82] = "116";
 comments[82] = "Id Pregunta: 9513. NULL";


//  Id pregunta: 9638 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; se conoce como CPU Throttling en IIS 8.0?";
 choices[83]= new Array();
 choices[83][0] = "A reducir autom&aacute;ticamente la frecuencia de trabajo de la CPU para evitar el calentamiento de la m&aacute;quina";
 choices[83][1] = "A la asignaci&oacute;n de CPU a cada proceso en un entorno multiprocesador  ";
 choices[83][2] = "A los fallos de CPU ante una sobrecarga de trabajo";
 choices[83][3] = "A la limitaci&oacute;n autom&aacute;tica de los recursos de CPU entre los tenants del sistema";
 answers[83] = choices[83][3];
 units[83] = "56";
 comments[83] = "Id Pregunta: 9638. La respuesta A es el concepto original de CPU throttling, la D es lo que se entiende en un entorno de hosting";


//  Id pregunta: 9717 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En referencia a la tecnolog&iacute;a CORBA (Common Object Request Broker Architecture) es INCORRECTO que";
 choices[84]= new Array();
 choices[84][0] = "El protocolo de comunicaciones en el que se basa se denomina GIOP (General InterORB Protocol)";
 choices[84][1] = "El lenguaje para especificaciones de interfaces se denomina IPOL (Independent Platform Object Language).";
 choices[84][2] = "Se basa en un modelo de arquitectura distribuida para entornos heterog&eacute;neos";
 choices[84][3] = "Es una propuesta del Object Management Group.";
 answers[84] = choices[84][1];
 units[84] = "51";
 comments[84] = "Id Pregunta: 9717. Examen TIC-A1 2013";


//  Id pregunta: 9843 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[85]= new Array();
 choices[85][0] = "Utilizar el cifrado.";
 choices[85][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[85][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[85][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[85] = choices[85][0];
 units[85] = "111";
 comments[85] = "Id Pregunta: 9843. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9993 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[86]= new Array();
 choices[86][0] = "Ley 11/2007";
 choices[86][1] = "Real Decreto 1619/2012";
 choices[86][2] = "Ley 25/2013";
 choices[86][3] = "Real Decreto Legislativo 3/2011";
 answers[86] = choices[86][0];
 units[86] = "70";
 comments[86] = "Id Pregunta: 9993. NULL";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[87]= new Array();
 choices[87][0] = "GEANT";
 choices[87][1] = "IRIS";
 choices[87][2] = "TESTA";
 choices[87][3] = "SARA";
 answers[87] = choices[87][1];
 units[87] = "103";
 comments[87] = "Id Pregunta: 10126. ";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[88]= new Array();
 choices[88][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[88][1] = "la no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[88][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[88][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[88] = choices[88][1];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10151. ";


//  Id pregunta: 10172 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Respecto los distintos tipos de drivers JDBC, se verifica que:";
 choices[89]= new Array();
 choices[89][0] = "Los drivers JDBC de tipo III son recomendables si la aplicaci&oacute;n Java ha de acceder a diferentes bases de datos o se desconoce el SGBD destino";
 choices[89][1] = "El uso de drivers JDBC de tipo IV evita problemas de dependencia tecnol&oacute;gica del fabricante";
 choices[89][2] = "Al permitir que la aplicaci&oacute;n Java interact&uacute;e con diferentes SGBD, un driver de tipo III no es 100% Java, ya que incluye c&oacute;digo espec&iacute;fico o nativo de cada SGBD";
 choices[89][3] = "Todas las anteriores";
 answers[89] = choices[89][0];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10172. ";


//  Id pregunta: 10358 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interopeabilidad?";
 choices[90]= new Array();
 choices[90][0] = "Multiling&uuml;ismo";
 choices[90][1] = "Accesibilidad";
 choices[90][2] = "Empleo de soluciones de software libre";
 choices[90][3] = "Uso de est&aacute;ndares abiertos";
 answers[90] = choices[90][2];
 units[90] = "40";
 comments[90] = "Id Pregunta: 10358. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";


//  Id pregunta: 10426 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta. ";
 choices[91]= new Array();
 choices[91][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[91][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[91][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[91][3] = "Las anteriores a) b) y c) son correctas.";
 answers[91] = choices[91][3];
 units[91] = "76";
 comments[91] = "Id Pregunta: 10426. Examen TIC A1 2013";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[92]= new Array();
 choices[92][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[92][1] = "en MPLS el camino establecido es bidireccional";
 choices[92][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[92][3] = "el campo de etiqueta en MPLS es de 20 bits";
 answers[92] = choices[92][1];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10539. NULL";


//  Id pregunta: 10698 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  La Norma T&eacute;cnica de Interoperabilidad de documento electr&oacute;nico es aplicable a:";
 choices[93]= new Array();
 choices[93][0] = "Documentos administrativos electr&oacute;nicos.";
 choices[93][1] = "Cualquier otro documento electr&oacute;nico susceptible de formar parte de un expediente electr&oacute;nico.";
 choices[93][2] = "Ambos (los dos anteriores).";
 choices[93][3] = "Todo documento en poder de la administraci&oacute;n.";
 answers[93] = choices[93][2];
 units[93] = "43";
 comments[93] = "Id Pregunta: 10698. ";


//  Id pregunta: 10876 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[94]= new Array();
 choices[94][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[94][1] = "RAID 0.";
 choices[94][2] = "RAID 1.";
 choices[94][3] = "RAID 5.";
 answers[94] = choices[94][1];
 units[94] = "48";
 comments[94] = "Id Pregunta: 10876. Examen GSI 2014";


//  Id pregunta: 10890 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[95]= new Array();
 choices[95][0] = "95.25.30.128/27";
 choices[95][1] = "95.25.30.128/25";
 choices[95][2] = "95.25.46.128/27";
 choices[95][3] = "95.25.46.128/25";
 answers[95] = choices[95][2];
 units[95] = "100";
 comments[95] = "Id Pregunta: 10890. Examen GSI 2014";


//  Id pregunta: 10937 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; nombre recibe, en el paradigma de orientaci&oacute;n a objetos, el principio de dise&ntilde;o que establece que las interfaces definidas deben tener una finalidad espec&iacute;fica?";
 choices[96]= new Array();
 choices[96][0] = "Principio abierto-cerrado.";
 choices[96][1] = "Principio de segregaci&oacute;n de interfaces.";
 choices[96][2] = "Principio de responsabilidad simple.";
 choices[96][3] = "Principio de sustituci&oacute;n.";
 answers[96] = choices[96][1];
 units[96] = "84";
 comments[96] = "Id Pregunta: 10937. TIC A1 AGE 2014";


//  Id pregunta: 11188 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes es un protocolo de autenticaci&oacute;n PPP (Point to Point)?";
 choices[97]= new Array();
 choices[97][0] = "RADIUS &ndash; Remote Authentication Dial In User Service";
 choices[97][1] = "Kerberos";
 choices[97][2] = "CHAP Challenge Handshake Authentication Protocol";
 choices[97][3] = "Todos los anteriores";
 answers[97] = choices[97][2];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11188. ";


//  Id pregunta: 11576 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique la respuesta FALSA sobre la tecnolog&iacute;a HSDPA.";
 choices[98]= new Array();
 choices[98][0] = "Utiliza t&eacute;cnicas de redundancia incremental durante la transmisi&oacute;n de tramas.";
 choices[98][1] = "Incorpora una mejora del enlace ascendente de UMTS de manera que permite disponer de una nueva portadora a 384 Kbps.";
 choices[98][2] = "Utiliza FAST PACKET SCHEDULING, con el cual las estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datso en el siguiente marco de 4 ms.";
 choices[98][3] = "Mantiene la compatibilidad en sentido inverso con W-CDMA.";
 answers[98] = choices[98][2];
 units[98] = "108";
 comments[98] = "Id Pregunta: 11576. NULL";


//  Id pregunta: 11688 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El OUI de una direcci&oacute;n MAC posee";
 choices[99]= new Array();
 choices[99][0] = "6 digitos Hexadecimales";
 choices[99][1] = "32bits";
 choices[99][2] = "48bits";
 choices[99][3] = "24bytes";
 answers[99] = choices[99][0];
 units[99] = "100";
 comments[99] = "Id Pregunta: 11688. NULL";


