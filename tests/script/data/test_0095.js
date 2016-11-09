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

//  Id pregunta: 99 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En relaci&oacute;n con la impugnaci&oacute;n de valoraciones:";
 choices[0]= new Array();
 choices[0][0] = "Los ciudadanos tienen derecho a no verse sometidos a una decisi&oacute;n con efectos jur&iacute;dicos, sobre ellos o que les afecte de manera significativa, que se base &uacute;nicamente en un tratamiento de datos destinados a evaluar determinados aspectos de su personalidad";
 choices[0][1] = "El afectado podr&aacute; impugnar actos administrativos o decisiones privadas que impliquen una valoraci&oacute;n de su comportamiento, cuyo &uacute;nico fundamento sea un tratamiento de datos de car&aacute;cter personal que ofrezca una definici&oacute;n  de sus caracter&iacute;sticas o personalidad";
 choices[0][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[0][3] = "Ninguna de las respuestas es correcta";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 99. ";


//  Id pregunta: 286 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  La cesi&oacute;n de los datos fuera de los casos en que est&eacute;n permitidas, seg&uacute;n la LOPD es una infracci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "No es infracci&oacute;n";
 choices[1][1] = "Leve";
 choices[1][2] = "Grave";
 choices[1][3] = "Muy grave";
 answers[1] = choices[1][3];
 units[1] = "29";
 comments[1] = "Id Pregunta: 286. ";


//  Id pregunta: 507 AÃ±o de creación de pregunta: 2003-01-01
 questions[2]= "3)  La directiva 91/250/CEE modificada por la 93/98/CEE, del Consejo relativa a la protecci&oacute;n jur&iacute;dica de los progarmas de ordenador";
 choices[2]= new Array();
 choices[2][0] = "excluye expl&iacute;citamente aquellos desarrollos sobre plataformas LINUX, shareware o software libre";
 choices[2][1] = "establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre proetcci&oacute;n de obras literarias y art&iacute;sticas";
 choices[2][2] = "regula aquellos aspectos del comercio elctr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[2][3] = "crea un nuevo t&iacute;tulo unitario de proiedad industrial 'patente comunitaria' para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[2] = choices[2][1];
 units[2] = "36";
 comments[2] = "Id Pregunta: 507. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 562 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Seg&uacute;n AlvinToffler las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos";
 choices[3]= new Array();
 choices[3][0] = "jararqu&iacute;as y las relaciones entre las jerarqu&iacute;as";
 choices[3][1] = "los especialistas y los gerentes";
 choices[3][2] = "Cub&iacute;culos y canales";
 choices[3][3] = "controles y procedimientos";
 answers[3] = choices[3][2];
 units[3] = "22";
 comments[3] = "Id Pregunta: 562. ";


//  Id pregunta: 702 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[4]= new Array();
 choices[4][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[4][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[4][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[4][3] = "Todas son v&aacute;lidas";
 answers[4] = choices[4][3];
 units[4] = "69";
 comments[4] = "Id Pregunta: 702. Similar a examen TIC MAP A 2004. La C no ser&iacute;a v&aacute;lida en HTML 4.0";


//  Id pregunta: 840 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[5]= new Array();
 choices[5][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[5][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[5][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[5][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[5] = choices[5][0];
 units[5] = "72";
 comments[5] = "Id Pregunta: 840. ";


//  Id pregunta: 851 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una operaci&oacute;n de la Unidad de Control?:";
 choices[6]= new Array();
 choices[6][0] = "Obtenci&oacute;n de la instrucci&oacute;n de memoria que indica el contador de secuencia e incremento del mismo";
 choices[6][1] = "Decodificaci&oacute;n de la instrucci&oacute;n obtenida e interpretaci&oacute;n de la misma";
 choices[6][2] = "Ejecuci&oacute;n de las operaciones aritm&eacute;ticas y l&oacute;gicas";
 choices[6][3] = "Control y resoluci&oacute;n de las situaciones conflictivas que se produzcan";
 answers[6] = choices[6][2];
 units[6] = "47";
 comments[6] = "Id Pregunta: 851. ";


//  Id pregunta: 894 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;En qu&eacute; base num&eacute;rica el n&uacute;mero 6B7 se corresponde con el n&uacute;mero 1003 en decimal?";
 choices[7]= new Array();
 choices[7][0] = "en base 13.";
 choices[7][1] = "en base 7.";
 choices[7][2] = "en base 11.";
 choices[7][3] = "en base 12.";
 answers[7] = choices[7][3];
 units[7] = "";
 comments[7] = "Id Pregunta: 894. ";


//  Id pregunta: 933 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es una tarjeta PCMCIA (tambi&eacute;n conocida PC Card)?:";
 choices[8]= new Array();
 choices[8][0] = "El nombre comercial que recibe la tarjeta de comunicaciones de los m&oacute;dems as&iacute;ncronos";
 choices[8][1] = "Una tarjeta de seguridad que consta de un microchip en el que se ha almacenado informaci&oacute;n referente a la identidad personal del usuario y a las autorizaciones de acceso que tiene al sistema inform&aacute;tico";
 choices[8][2] = "El nombre comercial que reciben las placas de comunicaciones Ethernet que se conectan al puerto paralelo";
 choices[8][3] = "Un conjunto de dispositivos de peque&ntilde;o tama&ntilde;o (ancho similar al de una tarjeta de cr&eacute;dito) y diferentes alturas que pueden contener desde tarjetas de comunicaciones, modems, disco duro, etc";
 answers[8] = choices[8][3];
 units[8] = "47";
 comments[8] = "Id Pregunta: 933. ";


//  Id pregunta: 1070 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Elija la respuesta falsa. Un tablet PC se caracteriza por:";
 choices[9]= new Array();
 choices[9][0] = "Reconocer la escritura humana";
 choices[9][1] = "Ser portatil";
 choices[9][2] = "Caber en la palma de la mano";
 choices[9][3] = "Utilizar un sistema operativo de Microsoft";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1070. ";


//  Id pregunta: 1107 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En la extracci&oacute;n del conocimiento en la miner&iacute;a de datos, &iquest;qu&eacute; ejemplo de los siguientes no se corresponde con aprendizaje supervisado?";
 choices[10]= new Array();
 choices[10][0] = "Sistemas de clasificaci&oacute;n.";
 choices[10][1] = "Patrones de comportamiento.";
 choices[10][2] = "Sistemas de predicci&oacute;n.";
 choices[10][3] = "Modelado y control.";
 answers[10] = choices[10][1];
 units[10] = "68";
 comments[10] = "Id Pregunta: 1107. ";


//  Id pregunta: 1238 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La principal diferencia entre HTML y XML es que:";
 choices[11]= new Array();
 choices[11][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[11][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[11][2] = "XML es un subconjunto de HTML";
 choices[11][3] = "B y C son ciertas";
 answers[11] = choices[11][1];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1238. NULL";


//  Id pregunta: 1280 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Los procesadores superescalares:";
 choices[12]= new Array();
 choices[12][0] = "Son siempre procesadores RISC";
 choices[12][1] = "Han de ser necesariamente CISC";
 choices[12][2] = "Suelen ser RISC, pero pueden ser CISC";
 choices[12][3] = "Todas son falsas";
 answers[12] = choices[12][2];
 units[12] = "45";
 comments[12] = "Id Pregunta: 1280. ";


//  Id pregunta: 1465 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La consistencia de un interfaz de usuario:";
 choices[13]= new Array();
 choices[13][0] = "Contribuye a que &eacute;ste sea menos vers&aacute;til en su utilizaci&oacute;n";
 choices[13][1] = "Se refiere a la uniformidad en su utilizaci&oacute;n a lo largo de toda su exposici&oacute;n";
 choices[13][2] = "S&oacute;lo se puede garantizar si &eacute;ste es gr&aacute;fico";
 choices[13][3] = "Garantiza su facilidad de uso";
 answers[13] = choices[13][1];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1465. ";


//  Id pregunta: 1502 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La utilidad &quot;ping&quot;:";
 choices[14]= new Array();
 choices[14][0] = "Se basa en los comandos &quot;echo request&quot; y &quot;echo reply&quot; del protocolo ICMP";
 choices[14][1] = "Se basa en el protocolo PING";
 choices[14][2] = "Se basa en el protocolo UDP";
 choices[14][3] = "Se basa en el protocolo TCP";
 answers[14] = choices[14][0];
 units[14] = "52,55";
 comments[14] = "Id Pregunta: 1502. ";


//  Id pregunta: 1554 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[15]= new Array();
 choices[15][0] = "Redistribuci&oacute;n libre.";
 choices[15][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[15][2] = "Derecho de modificaci&oacute;n.";
 choices[15][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[15] = choices[15][3];
 units[15] = "61";
 comments[15] = "Id Pregunta: 1554. Junta Andaluc&iacute;a";


//  Id pregunta: 1556 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica utilizada para el c&aacute;lculo de una funci&oacute;n de correspondencia que asigna a los bloques de la memoria principal posiciones definidas en la memoria cach&eacute;?:";
 choices[16]= new Array();
 choices[16][0] = "Directa.";
 choices[16][1] = "Totalmente asociativa.";
 choices[16][2] = "Asociativa por conjuntos.";
 choices[16][3] = "Suprayectiva.";
 answers[16] = choices[16][3];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1556. Junta Andaluc&iacute;a";


//  Id pregunta: 2059 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indicar la respuesta correcta.  El modelo orientado a los datos:";
 choices[17]= new Array();
 choices[17][0] = "Deduce el ciclo de vida de las entidades a partir del flujo de datos";
 choices[17][1] = "Deduce los procesos que debe incorporar el sistema a partir de los datos manejados";
 choices[17][2] = "Deduce los atributos de las entidades a partir de los procesos que debe realizar el sistema";
 choices[17][3] = "Todas son falsas";
 answers[17] = choices[17][3];
 units[17] = "79";
 comments[17] = "Id Pregunta: 2059. ";


//  Id pregunta: 2149 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes modelos se puede considerar como una nueva versi&oacute;n, utilizando lenguajes de m&aacute;s alto nivel, del modelo Code &amp; Fix?:";
 choices[18]= new Array();
 choices[18][0] = "Modelo de transformaci&oacute;n";
 choices[18][1] = "Modelo por etapas";
 choices[18][2] = "Modelo en espiral";
 choices[18][3] = "Modelo de desarrollo evolutivo o prototipado evolutivo";
 answers[18] = choices[18][3];
 units[18] = "76";
 comments[18] = "Id Pregunta: 2149. ";


//  Id pregunta: 2199 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;En qu&eacute; consiste la teor&iacute;a del Modelo Compuesto aplicada a la implantaci&oacute;n de la Calidad propuesto por Lawler?";
 choices[19]= new Array();
 choices[19][0] = "El coste aumenta primero linealmente y luego exponencialmente";
 choices[19][1] = "En el primer tramo, el coste aumenta con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad.";
 choices[19][2] = "Se usa aritm&eacute;tica compuesta para su c&aacute;lculo, aunque la curva sale convexa siempre que se sigue este modelo.";
 choices[19][3] = "En el primer tramo, el coste disminuye con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad. En el tercer tramo el coste se incrementa con la calidad.";
 answers[19] = choices[19][3];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2199. NULL";


//  Id pregunta: 2251 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Dentro de METRICA V3, &iquest;cu&aacute;l de los siguientes procesos no forma parte de la fase de desarrollo?:";
 choices[20]= new Array();
 choices[20][0] = "EVS";
 choices[20][1] = "IAS";
 choices[20][2] = "PSI";
 choices[20][3] = "ASI";
 answers[20] = choices[20][2];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2251. NULL";


//  Id pregunta: 2430 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La planificaci&oacute;n estrat&eacute;gica es:";
 choices[21]= new Array();
 choices[21][0] = "Un momento en el tiempo para tomar decisiones";
 choices[21][1] = "Una herramienta para anticiparse a los cambios";
 choices[21][2] = "Un proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo los objetivos a largo plazo, identificando metas y objetivos cuantitativos, desarrollando estrategias para alcanzar dichos objetivos y localizando recursos para llevar a cabo dichas estrategias";
 choices[21][3] = "Una herramienta que se limita a extrapolar el presente al futuro";
 answers[21] = choices[21][2];
 units[21] = "77";
 comments[21] = "Id Pregunta: 2430. ";


//  Id pregunta: 2507 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Un m&eacute;todo orientado a los procesos es:";
 choices[22]= new Array();
 choices[22][0] = "Modelo Entidad-Relaci&oacute;n";
 choices[22][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[22][2] = "An&aacute;lisis de flujo de datos";
 choices[22][3] = "An&aacute;lisis relacional de datos (COOD)";
 answers[22] = choices[22][2];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2507. ";


//  Id pregunta: 2627 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?";
 choices[23]= new Array();
 choices[23][0] = "Diagrama de despliegue.";
 choices[23][1] = "Diagrama de componentes.";
 choices[23][2] = "Diagrama de descomposici&oacute;n.";
 choices[23][3] = "Diagrama de estructura.";
 answers[23] = choices[23][0];
 units[23] = "82,84";
 comments[23] = "Id Pregunta: 2627. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2851 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;Qu&eacute; sistema de parametr&iacute;zaci&oacute;n no se emplea en el reconocimiento de voz?";
 choices[24]= new Array();
 choices[24][0] = "por fonemas";
 choices[24][1] = "por morfemas";
 choices[24][2] = "por difonemas";
 choices[24][3] = "por semis&iacute;labas";
 answers[24] = choices[24][1];
 units[24] = "94";
 comments[24] = "Id Pregunta: 2851. ";


//  Id pregunta: 2884 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La entidad p&uacute;blica empresarial Red.es tiene como misi&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "la gesti&oacute;n de registros de nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s &quot;.es&quot; correspondiente a Espa&ntilde;a";
 choices[25][1] = "la de observar la evoluci&oacute;n del sector de las telecomunicaciones y de la sociedad de la informaci&oacute;n";
 choices[25][2] = "el asesoramiento a la Administraci&oacute;n General del Estado en materias TIC";
 choices[25][3] = "Todas las anteriores respuestas son correctas";
 answers[25] = choices[25][3];
 units[25] = "112";
 comments[25] = "Id Pregunta: 2884. ";


//  Id pregunta: 3019 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  Entre los ataques de seguridad que se producen a trav&eacute;s de redes como internet, aparece el concepto de Phishing. &iquest;Cu&aacute;l de las siguientes definiciones se ajustan a este concepto?";
 choices[26]= new Array();
 choices[26][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[26][1] = "Suplantaci&oacute;n de identidades de organizaciones para conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[26][2] = "Escuchas en red con el fin de conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][1];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3019. NULL";


//  Id pregunta: 3273 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Por qu&eacute; motivo no debe utilizarse una red Ethernet para comunicar dispositivos que deban trabajar en tiempo real cr&iacute;tico?:";
 choices[27]= new Array();
 choices[27][0] = "Porque el tiempo medio entre fallos de este tipo de redes es bajo";
 choices[27][1] = "Porque la velocidad de este tipo de redes es demasiado baja";
 choices[27][2] = "Porque el tiempo m&aacute;ximo que tarda un nodo en acceder a la red no est&aacute; acotado";
 choices[27][3] = "Porque este tipo de redes responde al modelo cliente servidor y no permite comunicar dispositivos entre s&iacute;";
 answers[27] = choices[27][2];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3273. ";


//  Id pregunta: 3287 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qu&eacute; es SDH?";
 choices[28]= new Array();
 choices[28][0] = "una familia de protocolos para transportar se&ntilde;ales digitales multimedia";
 choices[28][1] = "un conjunto de especificaciones de tasas de transmisi&oacute;n que transportan s&iacute;ncronamente se&ntilde;ales digitales de diferentes capacidades";
 choices[28][2] = "una torre de protocolos propietaria similar a SNA";
 choices[28][3] = "un conjunto de est&aacute;ndares americanos de transporte de se&ntilde;ales digitales entre sistemas digitales";
 answers[28] = choices[28][1];
 units[28] = "109";
 comments[28] = "Id Pregunta: 3287. ";


//  Id pregunta: 3469 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El servicio Archie se utiliza para:";
 choices[29]= new Array();
 choices[29][0] = "navegar usando men&uacute;s sin conocer la direcci&oacute;n de la informaci&oacute;n";
 choices[29][1] = "recibir de un servidor las direcciones de bases de datos m&aacute;s adecuadas para responder a la pregunta";
 choices[29][2] = "realizar b&uacute;squedas por los nombres de los ficheros de los servidores FTP";
 choices[29][3] = "buscar informaci&oacute;n seg&uacute;n un esquema de enlaces hipertexto";
 answers[29] = choices[29][2];
 units[29] = "112";
 comments[29] = "Id Pregunta: 3469. ";


//  Id pregunta: 3521 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En Frame Relay FECN y BECN son:";
 choices[30]= new Array();
 choices[30][0] = "Mecanismos de control de errores";
 choices[30][1] = "Mecanismos de notificaci&oacute;n de congesti&oacute;n en la red";
 choices[30][2] = "Mecanismos de control de flujo";
 choices[30][3] = "Mecanismos de 'keepalive' (saber los nodos activos)";
 answers[30] = choices[30][1];
 units[30] = "109";
 comments[30] = "Id Pregunta: 3521. ";


//  Id pregunta: 3832 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Siguiendo la terminolog&iacute;a OSI, se&ntilde;alar qu&eacute; respuesta no se refiere a una de las categor&iacute;as en las que se puede dividir los procesos de aplicaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Procesos de gesti&oacute;n del sistema";
 choices[31][1] = "Procesos de gesti&oacute;n de las aplicaciones";
 choices[31][2] = "Procesos de gesti&oacute;n del control de flujo";
 choices[31][3] = "Procesos de usuario";
 answers[31] = choices[31][2];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3832. NULL";


//  Id pregunta: 4122 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  La red geogr&aacute;ficamente dispersa se llama";
 choices[32]= new Array();
 choices[32][0] = "WAN";
 choices[32][1] = "LAN";
 choices[32][2] = "SAN";
 choices[32][3] = "PAN";
 answers[32] = choices[32][0];
 units[32] = "101";
 comments[32] = "Id Pregunta: 4122. ";


//  Id pregunta: 4312 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Identifique cu&aacute;l de las siguientes alternativas sobre lenguajes de comandos o de control de &oacute;rdenes del Sistema UNIX es correcta:";
 choices[33]= new Array();
 choices[33][0] = "Bourne Shell (desarrollado por AT&amp;T).";
 choices[33][1] = "Korn Shell (desarrollado por Berkeley y Korn).";
 choices[33][2] = "C Shell (desarrollado por AT&amp;T)";
 choices[33][3] = "Korn Shell (desarrollado por Korn).";
 answers[33] = choices[33][0];
 units[33] = "54";
 comments[33] = "Id Pregunta: 4312. ";


//  Id pregunta: 4324 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  En una Organizaci&oacute;n, el Administrador de Bases de Datos puede ejercer todas las funciones siguientes, excepto";
 choices[34]= new Array();
 choices[34][0] = "Determinar los criterios de acceso a la base de datos.";
 choices[34][1] = "Monitorizar la base de datos mediante herramientas de an&aacute;lisis.";
 choices[34][2] = "Seleccionar las herramientas de optimizaci&oacute;n del rendimiento de la base.";
 choices[34][3] = "Definir e iniciar los procedimientos de respaldo y recuperaci&oacute;n.";
 answers[34] = choices[34][0];
 units[34] = "26";
 comments[34] = "Id Pregunta: 4324. ";


//  Id pregunta: 4453 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  La utilidad de Microsoft para sincronizar los contenidos de un Pocket PC y una estaci&oacute;n Windows XP se denomina:";
 choices[35]= new Array();
 choices[35][0] = "MS PowerSync";
 choices[35][1] = "MS Syncronizer";
 choices[35][2] = "MS ActiveSync";
 choices[35][3] = "MS PocketSync";
 answers[35] = choices[35][2];
 units[35] = "56";
 comments[35] = "Id Pregunta: 4453. ";


//  Id pregunta: 4495 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Que nivel del modelo CMMi se caracteriza porque el proceso del software de las actividades de gesti&oacute;n e ingenier&iacute;a esta documentado, estandarizado e integrado?";
 choices[36]= new Array();
 choices[36][0] = "Nivel 2 (Gestionado)";
 choices[36][1] = "Nivel 3 (Definido)";
 choices[36][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[36][3] = "Nivel 5 (Optimizado)";
 answers[36] = choices[36][1];
 units[36] = "87";
 comments[36] = "Id Pregunta: 4495. NULL";


//  Id pregunta: 4508 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Un organismo europeo de normalizaci&oacute;n, tiene como misi&oacute;n producir normas de telecomunicaciones para hoy y para el futuro. Sus siglas son:";
 choices[37]= new Array();
 choices[37][0] = "ETSI.";
 choices[37][1] = "CEN";
 choices[37][2] = "CENELEC";
 choices[37][3] = "CEPT";
 answers[37] = choices[37][0];
 units[37] = "42";
 comments[37] = "Id Pregunta: 4508. ";


//  Id pregunta: 4835 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[38]= new Array();
 choices[38][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[38][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y";
 choices[38][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[38][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[38] = choices[38][0];
 units[38] = "100, 117";
 comments[38] = "Id Pregunta: 4835. ";


//  Id pregunta: 4955 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[39]= new Array();
 choices[39][0] = "PostgreSQL.";
 choices[39][1] = "Gentoo.";
 choices[39][2] = "UbuntuBD.";
 choices[39][3] = "SQLCentos.";
 answers[39] = choices[39][0];
 units[39] = "57";
 comments[39] = "Id Pregunta: 4955. Examen TIC B 2007";


//  Id pregunta: 5007 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones &iquest;Cada cuanto tiempo, la Comisi&oacute;n del Mercado de las Telecomunicaciones llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos?:";
 choices[40]= new Array();
 choices[40][0] = "En un plazo m&aacute;ximo de tres a&ntilde;os contado desde la adopci&oacute;n de una medida anterior relativa a ese mercado";
 choices[40][1] = "En el plazo m&aacute;ximo de dos a&ntilde;os desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea";
 choices[40][2] = "Las dos anteriores son ciertas";
 choices[40][3] = "Todas las anteriores son falsas";
 answers[40] = choices[40][2];
 units[40] = "110";
 comments[40] = "Id Pregunta: 5007. Examen TIC A 2007. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 5010 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Seg&uacute;n la ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n dela vigencia de un certificado?:";
 choices[41]= new Array();
 choices[41][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado";
 choices[41][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por &eacute;ste, un terceroautorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica";
 choices[41][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene";
 choices[41][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador deservicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso";
 answers[41] = choices[41][3];
 units[41] = "30";
 comments[41] = "Id Pregunta: 5010. Examen TIC A 2007 (Ley 59/2003, art&iacute;culo 8)";


//  Id pregunta: 5140 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Seg&uacute;n M&eacute;trica V3, &iquest;dentro de qu&eacute; perfil de participantes se encuentra recogido el Grupo de Aseguramiento de Calidad?";
 choices[42]= new Array();
 choices[42][0] = "Jefe de Proyecto.";
 choices[42][1] = "Programador.";
 choices[42][2] = "Analista.";
 choices[42][3] = "Consultor.";
 answers[42] = choices[42][2];
 units[42] = "86";
 comments[42] = "Id Pregunta: 5140. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5179 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;les son los requisitos, seg&uacute;n Dorfman, que debe cumplir una Metodolog&iacute;a?";
 choices[43]= new Array();
 choices[43][0] = "Documentada, Repetitiva, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[43][1] = "Documentada, Repetible, Ense&ntilde;able, Flexible, Validada y Apropiada";
 choices[43][2] = "Documentada, Repetible, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[43][3] = "Documentada, Repetible, Extensa, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 answers[43] = choices[43][2];
 units[43] = "79";
 comments[43] = "Id Pregunta: 5179. ";


//  Id pregunta: 5185 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Un modelado de un Sistema de Informaci&oacute;n se considera completo si se realiza desde los siguientes puntos de vista:";
 choices[44]= new Array();
 choices[44][0] = "Funcional, Est&aacute;tico y Din&aacute;mico";
 choices[44][1] = "Informaci&oacute;n, Procesos e Interfaces de Usuario";
 choices[44][2] = "Est&aacute;tico, Din&aacute;mico y Relacional";
 choices[44][3] = "Funcional, Informaci&oacute;n y Procesos";
 answers[44] = choices[44][0];
 units[44] = "81";
 comments[44] = "Id Pregunta: 5185. ";


//  Id pregunta: 5220 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La tarea &quot;Diagn&oacute;stico del Sistema Actual&quot; a qu&eacute; actividad del procesos Planificaci&oacute;n de Sistemas de Informaci&oacute;n pertenece";
 choices[45]= new Array();
 choices[45][0] = "Estudio de la informaci&oacute;n relevante";
 choices[45][1] = "Estudio de los Sistemas de Informaci&oacute;n Actuales";
 choices[45][2] = "Identificaci&oacute;n de Requisitos";
 choices[45][3] = "Dise&ntilde;o del modelo de Sistemas de Informaci&oacute;n";
 answers[45] = choices[45][3];
 units[45] = "86";
 comments[45] = "Id Pregunta: 5220. NULL";


//  Id pregunta: 5542 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Qu&eacute; directiva transpone la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones?";
 choices[46]= new Array();
 choices[46][0] = "Directiva 2006/24/CE";
 choices[46][1] = "Directiva 1999/93/CE";
 choices[46][2] = "Directiva 95/46/CE";
 choices[46][3] = "Directiva 2000/31/CE";
 answers[46] = choices[46][0];
 units[46] = "97";
 comments[46] = "Id Pregunta: 5542. NULL";


//  Id pregunta: 6138 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Indique la opci&oacute;n FALSA. Dentro del servicio universal definido por la Ley 9/2014, General de Telecomunicaciones, se debe garantizar:";
 choices[47]= new Array();
 choices[47][0] = "El acceso funcional a internet a velocidad suficiente.";
 choices[47][1] = "Una gu&iacute;a general de n&uacute;meros de abonados.";
 choices[47][2] = "Una cobertura suficiente que permita el acceso a la red de telefon&iacute;a m&oacute;vil.";
 choices[47][3] = "Una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago en todo el territorio nacional.";
 answers[47] = choices[47][2];
 units[47] = "110";
 comments[47] = "Id Pregunta: 6138. TIC A 2009";


//  Id pregunta: 6192 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Qu&eacute; norma es derogada por el Real Decreto 1671/2009?";
 choices[48]= new Array();
 choices[48][0] = "Real Decreto 263/1996";
 choices[48][1] = "Real Decreto 209/2003";
 choices[48][2] = "Real Decreto 1553/2005";
 choices[48][3] = "El Real Decreto 1671/2009 no deroga ninguna norma";
 answers[48] = choices[48][0];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6192. Disposici&oacute;n derogatoria &uacute;nica";


//  Id pregunta: 6344 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes formas de presentar informaci&oacute;n se identifica mejor con la definici&oacute;n de folcsonom&iacute;a?";
 choices[49]= new Array();
 choices[49][0] = "&Aacute;rbol";
 choices[49][1] = "Directorio";
 choices[49][2] = "Nube de Tags";
 choices[49][3] = "Cubo";
 answers[49] = choices[49][2];
 units[49] = "120";
 comments[49] = "Id Pregunta: 6344. NULL";


//  Id pregunta: 6350 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  El proyecto de Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, promovido por la Secretaria de Estado de Telecomunicaciones y para la sociedad de la informaci&oacute;n se llama:";
 choices[50]= new Array();
 choices[50][0] = "Reutiliza";
 choices[50][1] = "Comparte";
 choices[50][2] = "Rhodas";
 choices[50][3] = "Aporta";
 answers[50] = choices[50][3];
 units[50] = "30";
 comments[50] = "Id Pregunta: 6350. http://datos.gob.es/content/proyecto-aporta";


//  Id pregunta: 6361 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Seguridad?";
 choices[51]= new Array();
 choices[51][0] = "RD 4/2010";
 choices[51][1] = "RD 40/2010";
 choices[51][2] = "RD 4/2009";
 choices[51][3] = "RD 3/2010";
 answers[51] = choices[51][3];
 units[51] = "43";
 comments[51] = "Id Pregunta: 6361. NULL";


//  Id pregunta: 6365 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  El Esquema Nacional de Seguridad establece que las l&iacute;neas de defensa han de estar constituidas por medidas de distinto tipo, &iquest;Cu&aacute;l de las siguientes no es una de ellos?";
 choices[52]= new Array();
 choices[52][0] = "Organizativa";
 choices[52][1] = "Sem&aacute;ntica";
 choices[52][2] = "L&oacute;gica";
 choices[52][3] = "F&iacute;sica";
 answers[52] = choices[52][1];
 units[52] = "43";
 comments[52] = "Id Pregunta: 6365. Art&iacute;culo 8 ENS";


//  Id pregunta: 6539 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[53]= new Array();
 choices[53][0] = "TACACS+";
 choices[53][1] = "Radius";
 choices[53][2] = "Un grupo de trabajo peer-to-peer";
 choices[53][3] = "Diameter";
 answers[53] = choices[53][2];
 units[53] = "111";
 comments[53] = "Id Pregunta: 6539. NULL";


//  Id pregunta: 7324 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[54]= new Array();
 choices[54][0] = "3D Secure";
 choices[54][1] = "UCAF";
 choices[54][2] = "Urbinet ";
 choices[54][3] = "SET ";
 answers[54] = choices[54][2];
 units[54] = "70";
 comments[54] = "Id Pregunta: 7324. NULL";


//  Id pregunta: 7900 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)   De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, &iquest;c&oacute;mo se punt&uacute;a el subcriterio 9b, &laquo;Indicadores Clave del Rendimiento de la Organizaci&oacute;n&raquo;, en el proceso de autoevaluaci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = " Entre 0 y 100 y se multiplica por 0,50.";
 choices[55][1] = " Entre 0 y 100 y se multiplica por 0,25.";
 choices[55][2] = " Entre 0 y 50 y se multiplica por 0,50.";
 choices[55][3] = " Entre 0 y 50 y se multiplica por 0,25.";
 answers[55] = choices[55][0];
 units[55] = "NULL";
 comments[55] = "Id Pregunta: 7900. Map 2006";


//  Id pregunta: 7945 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)   &iquest;Cu&aacute;l de las siguientes afirmaciones relativa a los sistemas de almacenamiento y m&eacute;todos de acceso NO es cierta?";
 choices[56]= new Array();
 choices[56][0] = " El &iacute;ndice basado en &aacute;rbol B presenta mayores densidades que el basado en &aacute;rbol B*.";
 choices[56][1] = " Un fichero de datos puede tener varios &iacute;ndices, pero como mucho uno puede ser denso.";
 choices[56][2] = " Una clave de b&uacute;squeda no tiene por qu&eacute; ser un&iacute;voca.";
 choices[56][3] = " Los niveles n (con n &gt; 1";
 answers[56] = choices[56][0];
 units[56] = "NULL";
 comments[56] = "Id Pregunta: 7945. Map 2006";


//  Id pregunta: 8063 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)   De acuerdo al art&iacute;culo 172 del RDL 2/2000, de 16 de junio, la adquisici&oacute;n de programas de ordenador a medida se considera un contrato de:";
 choices[57]= new Array();
 choices[57][0] = " Suministro.";
 choices[57][1] = " Servicios.";
 choices[57][2] = " Leasing.";
 choices[57][3] = " Obra. Map 2008";
 answers[57] = choices[57][1];
 units[57] = "NULL";
 comments[57] = "Id Pregunta: 8063. Map 2007";


//  Id pregunta: 8180 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  El manifiesto por un desarrollo de software &aacute;gil (Manifesto for Agile Software Development) da m&aacute;s valor a:";
 choices[58]= new Array();
 choices[58][0] = "Los individuos y sus interacciones que a los procesos y herramientas.";
 choices[58][1] = "Una documentaci&oacute;n completa que a software que funcione.";
 choices[58][2] = "La negociaci&oacute;n contractual que a la colaboraci&oacute;n con los usuarios.";
 choices[58][3] = "Seguir una planificaci&oacute;n que a adaptarse al cambio.";
 answers[58] = choices[58][0];
 units[58] = "79";
 comments[58] = "Id Pregunta: 8180. Examen TIC A1 2010";


//  Id pregunta: 8186 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Seg&uacute;n el m&eacute;todo de puntos funci&oacute;n de Albrecht, marque la respuesta correcta para el valor de PFA (Puntos de Funci&oacute;n Ajustados), si PFNA (Puntos de Funci&oacute;n No Ajustados) y SVA (Suma de los Valores de los 14 Atributos o caracter&iacute;sticasgenerales del sistema) valen respectivamente 100 y 65:";
 choices[59]= new Array();
 choices[59][0] = "165";
 choices[59][1] = "120";
 choices[59][2] = "SVA no puede tener un valor superior a 50.";
 choices[59][3] = "130";
 answers[59] = choices[59][3];
 units[59] = "89";
 comments[59] = "Id Pregunta: 8186. Examen TIC A1 2010";


//  Id pregunta: 8212 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[60]= new Array();
 choices[60][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[60][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[60][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[60][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[60] = choices[60][1];
 units[60] = "107";
 comments[60] = "Id Pregunta: 8212. Examen TIC A1 2010";


//  Id pregunta: 8295 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  El protocolo FTP es un protocolo: ";
 choices[61]= new Array();
 choices[61][0] = "Seguro.";
 choices[61][1] = "Orientado a conexi&oacute;n.";
 choices[61][2] = "De nivel de enlace.";
 choices[61][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red. ";
 answers[61] = choices[61][1];
 units[61] = "100";
 comments[61] = "Id Pregunta: 8295. Examen TIC A2 2010";


//  Id pregunta: 8305 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[62]= new Array();
 choices[62][0] = "XAdES-X.";
 choices[62][1] = "XAdES-X-L.";
 choices[62][2] = "XAdES-C. ";
 choices[62][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[62] = choices[62][1];
 units[62] = "72, 73, 74";
 comments[62] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8365 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[63]= new Array();
 choices[63][0] = "Predicci&oacute;n.";
 choices[63][1] = "Categorizaci&oacute;n.";
 choices[63][2] = "Clustering.";
 choices[63][3] = "Estad&iacute;sticas.";
 answers[63] = choices[63][2];
 units[63] = "68";
 comments[63] = "Id Pregunta: 8365. Examen TIC A2 2010";


//  Id pregunta: 8387 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes productos resultan del proceso de Construcci&oacute;n del SI seg&uacute;n M&eacute;trica v3?";
 choices[64]= new Array();
 choices[64][0] = "Cat&aacute;logo de Requisitos.";
 choices[64][1] = "Especificaciones de Construcci&oacute;n del Sistema.";
 choices[64][2] = "Modelo de Datos.";
 choices[64][3] = "Manuales de Usuario.";
 answers[64] = choices[64][3];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8387. Examen TIC A2 2010";


//  Id pregunta: 8670 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Un acceso RDSI primario consta de";
 choices[65]= new Array();
 choices[65][0] = "Dos canales B y un canal D";
 choices[65][1] = "Dos canales B y ning&uacute;n canal D";
 choices[65][2] = "Treinta canales B y un canal D";
 choices[65][3] = "Treinta canales B y dos canales D";
 answers[65] = choices[65][2];
 units[65] = "103";
 comments[65] = "Id Pregunta: 8670. Examen UPM A2 2011";


//  Id pregunta: 8740 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  De acuerdo con la definici&oacute;n establecida en el Real Decreto 1720/2007, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque NO lo realizase materialmente es:";
 choices[66]= new Array();
 choices[66][0] = "El encargado del fichero o del tratamiento.";
 choices[66][1] = "El responsable del fichero o del tratamiento.";
 choices[66][2] = "El destinatario o cesionario del fichero o del tratamiento";
 choices[66][3] = "El propietario del fichero o del tratamiento.";
 answers[66] = choices[66][1];
 units[66] = "29";
 comments[66] = "Id Pregunta: 8740. Examen TIC A2 2010 interna";


//  Id pregunta: 8759 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes NO es un lenguaje orientado a objetos?";
 choices[67]= new Array();
 choices[67][0] = "Java.";
 choices[67][1] = "C.";
 choices[67][2] = "Smalltalk.";
 choices[67][3] = "Ada.";
 answers[67] = choices[67][1];
 units[67] = "82, 84";
 comments[67] = "Id Pregunta: 8759. Examen TIC A2 2010 interna";


//  Id pregunta: 8914 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes no es una funci&oacute;n del Administrador de la Base de Datos (DBA)?:";
 choices[68]= new Array();
 choices[68][0] = "Realizar el modelo Entidad/Relaci&oacute;n que defina la estructura de los datos.";
 choices[68][1] = "Monitorizaci&oacute;n del rendimiento de la base de datos.";
 choices[68][2] = "Balance de la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento.";
 choices[68][3] = "Gestionar los usuarios y los permisos de acceso a la base da datos";
 answers[68] = choices[68][0];
 units[68] = "26";
 comments[68] = "Id Pregunta: 8914. NULL";


//  Id pregunta: 9022 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Un CSS (Cent Call Second) se emplea en telefon&iacute;a como una medida de tr&aacute;fico telef&oacute;nico (volumen de tr&aacute;fico). Un CCS es el tr&aacute;fico telef&oacute;nico causado por una llamada de 100 segundos de duraci&oacute;n. &iquest;Cuantos CSS tiene un Erlang?";
 choices[69]= new Array();
 choices[69][0] = "1 CSS.";
 choices[69][1] = "100 CSS.";
 choices[69][2] = "36 CSS.";
 choices[69][3] = "10 CSS";
 answers[69] = choices[69][2];
 units[69] = "104";
 comments[69] = "Id Pregunta: 9022. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9125 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[70]= new Array();
 choices[70][0] = "ISA";
 choices[70][1] = "HTI";
 choices[70][2] = "PCI";
 choices[70][3] = "AGP";
 answers[70] = choices[70][1];
 units[70] = "47";
 comments[70] = "Id Pregunta: 9125. Examen TIC-A1 2011";


//  Id pregunta: 9149 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;C&oacute;mo se clasifican los m&eacute;todos de grabaci&oacute;n en cinta magn&eacute;tica?";
 choices[71]= new Array();
 choices[71][0] = "Lineal, circular y transversal";
 choices[71][1] = "Circular, transversal y Helical";
 choices[71][2] = "Lineal, Transversal, Helical";
 choices[71][3] = "Trasnversal y Helical";
 answers[71] = choices[71][2];
 units[71] = "47";
 comments[71] = "Id Pregunta: 9149. ";


//  Id pregunta: 9193 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[72][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[72][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[72][3] = "Todas las anteriores son falsas";
 answers[72] = choices[72][3];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9193. ";


//  Id pregunta: 9221 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[73]= new Array();
 choices[73][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[73][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric.";
 choices[73][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[73][3] = "Todas son correctas.";
 answers[73] = choices[73][3];
 units[73] = "48";
 comments[73] = "Id Pregunta: 9221. ";


//  Id pregunta: 9253 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;C&oacute;mo es la administraci&oacute;n de memoria en Windows 7?";
 choices[74]= new Array();
 choices[74][0] = "Todos los procesos de usuario comparten un espacio de direcciones virtuales.";
 choices[74][1] = "Cada proceso de usuario tiene su propio espacio de direcciones virtuales.";
 choices[74][2] = "No se gestiona.";
 choices[74][3] = "Ninguna es correcta.";
 answers[74] = choices[74][1];
 units[74] = "56";
 comments[74] = "Id Pregunta: 9253. ";


//  Id pregunta: 9447 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objetos?:";
 choices[75]= new Array();
 choices[75][0] = "UMTS.";
 choices[75][1] = "JINI.";
 choices[75][2] = "VORBIS.";
 choices[75][3] = "CLOS.";
 answers[75] = choices[75][1];
 units[75] = "82";
 comments[75] = "Id Pregunta: 9447. Examen AGE TIC A1 2011";


//  Id pregunta: 9476 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[76]= new Array();
 choices[76][0] = "Autoridad limitada para la toma de decisiones";
 choices[76][1] = "Presupuestos plurianuales en todos los casos";
 choices[76][2] = "M&uacute;ltiples actores involucrados";
 choices[76][3] = "Coordinaci&oacute;n entre organismos";
 answers[76] = choices[76][1];
 units[76] = "38";
 comments[76] = "Id Pregunta: 9476. ";


//  Id pregunta: 9512 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En relaci&oacute;n a las APIs de Java, indique la afirmaci&oacute;n falsa:";
 choices[77]= new Array();
 choices[77][0] = "JNDI es el API est&aacute;ndar para el acceso a directorios y servicios de nombres";
 choices[77][1] = "JTA permite que los componentes EE gestionen sus propias transacciones";
 choices[77][2] = "Java IDL permite a las aplicaciones Java EE invocar a objetos CORBA";
 choices[77][3] = "JAX-RPC no soporta WSDL";
 answers[77] = choices[77][3];
 units[77] = "116";
 comments[77] = "Id Pregunta: 9512. NULL";


//  Id pregunta: 9516 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes directivas JSP no existe?";
 choices[78]= new Array();
 choices[78][0] = "page";
 choices[78][1] = "map";
 choices[78][2] = "taglib";
 choices[78][3] = "include";
 answers[78] = choices[78][1];
 units[78] = "116";
 comments[78] = "Id Pregunta: 9516. NULL";


//  Id pregunta: 9527 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[79]= new Array();
 choices[79][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[79][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[79][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[79][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[79] = choices[79][1];
 units[79] = "117";
 comments[79] = "Id Pregunta: 9527. NULL";


//  Id pregunta: 9849 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[80]= new Array();
 choices[80][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[80][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[80][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[80][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[80] = choices[80][2];
 units[80] = "111";
 comments[80] = "Id Pregunta: 9849. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10021 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Se&ntilde;ale la respuesta INCORRECTA respecto a las caracter&iacute;sticas de la metodolog&iacute;a de desarrollo software conocida como Proceso Unificado de Desarrollo Software:";
 choices[81]= new Array();
 choices[81][0] = "Es Iterativo e Incremental.";
 choices[81][1] = "Est&aacute; dirigido por los casos de uso.";
 choices[81][2] = "Est&aacute; enfocado en los riesgos.";
 choices[81][3] = "Fue creado por Dennis Ritchie y Ken Thompson.";
 answers[81] = choices[81][3];
 units[81] = "76";
 comments[81] = "Id Pregunta: 10021. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10453 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[82]= new Array();
 choices[82][0] = "Determina la frecuencia de las copias de respaldo.";
 choices[82][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[82][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[82][3] = "A y B.";
 answers[82] = choices[82][3];
 units[82] = "97";
 comments[82] = "Id Pregunta: 10453. NULL";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[83]= new Array();
 choices[83][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[83][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[83][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[83][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[83] = choices[83][2];
 units[83] = "29";
 comments[83] = "Id Pregunta: 10593. ";


//  Id pregunta: 10688 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[84]= new Array();
 choices[84][0] = "Enero de 2013.";
 choices[84][1] = "Junio de 2013.";
 choices[84][2] = "Diciembre de 2013.";
 choices[84][3] = "Enero de 2014.";
 answers[84] = choices[84][1];
 units[84] = "30";
 comments[84] = "Id Pregunta: 10688. ";


//  Id pregunta: 10749 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n el RD 806/2014 &iquest;Qu&eacute; son medios y servicios en referencia a los medios y servicios compartidos?";
 choices[85]= new Array();
 choices[85][0] = "Todas las actividades, infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[85][1] = "Todas las infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[85][2] = "Todas las infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[85][3] = "Todas las actividades, infraestructuras t&eacute;cnicas, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 answers[85] = choices[85][0];
 units[85] = "24";
 comments[85] = "Id Pregunta: 10749. ";


//  Id pregunta: 10750 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Estrategia de Ciberseguridad Nacional?";
 choices[86]= new Array();
 choices[86][0] = "2011";
 choices[86][1] = "2012";
 choices[86][2] = "2013";
 choices[86][3] = "2014";
 answers[86] = choices[86][2];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10750. ";


//  Id pregunta: 10837 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En teor&iacute;a de colas, el modelo de disciplina de cola denominado RSS se refiere a que:";
 choices[87]= new Array();
 choices[87][0] = "Se atiende primero al cliente que antes haya llegado.";
 choices[87][1] = "Selecciona a los clientes de manera aleatoria, de acuerdo a alg&uacute;n procedimiento de prioridad o a alg&uacute;n otro orden.";
 choices[87][2] = "Sirve a los clientes igualmente, se reparte un espacio de tiempo a cada cliente.";
 choices[87][3] = "Se atiende primero al cliente que ha llegado el &uacute;ltimo.";
 answers[87] = choices[87][1];
 units[87] = "0";
 comments[87] = "Id Pregunta: 10837. Examen GSI 2014";


//  Id pregunta: 10891 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n RFC 2460, se&ntilde;ale de las siguientes cabeceras IPv6 cu&aacute;l es una cabecera de extensi&oacute;n:";
 choices[88]= new Array();
 choices[88][0] = "Cabecera Siguiente.";
 choices[88][1] = "Fragmento.";
 choices[88][2] = "L&iacute;mite de Saltos.";
 choices[88][3] = "Longitud de la Carga &Uacute;til.";
 answers[88] = choices[88][1];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10891. Examen GSI 2014";


//  Id pregunta: 10982 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En relaci&oacute;n con el Registro Electr&oacute;nico de Apoderamientos (REA), se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "Un departamento ministerial puede adherirse al REA mediante la firma electr&oacute;nica de un acuerdo de adhesi&oacute;n con el Ministerio de Hacienda y Administraciones P&uacute;blicas, de forma simult&aacute;nea con el alta electr&oacute;nica de sus tr&aacute;mites en dicho Registro.";
 choices[89][1] = "Si un departamento ministerial ya est&aacute; adherido al REA y desea incorporar nuevos tr&aacute;mites al mismo, deber&aacute; hacerlo electr&oacute;nicamente en dicho Registro y publicar una Resoluci&oacute;n oficial modificando o ampliando la relaci&oacute;n inicial de tr&aacute;mites.";
 choices[89][2] = "Los departamentos ministeriales u organismos p&uacute;blicos que gestionen un Registro de apoderamientos propio, deber&aacute;n dar de alta &eacute;stos tambi&eacute;n en el REA para garantizar la interoperabilidad de ambos registros";
 choices[89][3] = "El periodo m&aacute;ximo de vigencia de los apoderamientos para los tr&aacute;mites incorporados en el REA no podr&aacute; superar los dos a&ntilde;os.";
 answers[89] = choices[89][1];
 units[89] = "44";
 comments[89] = "Id Pregunta: 10982. TIC A1 AGE 2014";


//  Id pregunta: 11285 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qu&eacute; se entiende por un SIG dual?";
 choices[90]= new Array();
 choices[90][0] = "El que  mantiene  la  informaci&oacute;n  gr&aacute;fica con una clave identificadora &uacute;nica que sirve  para  realizar  b&uacute;squedas  en  el  SGBD  que  contiene la informaci&oacute;n  alfanum&eacute;rica";
 choices[90][1] = "El que contiene  un  modelo  de  comportamiento  a  lo  largo  del tiempo  para  alg&uacute;n  aspecto  de  la  realidad. ";
 choices[90][2] = "El que aplica una concepci&oacute;n orientada  al objeto, en la  que los elementos contengan informaci&oacute;n sobre  sus propiedades, comportamiento etc..";
 choices[90][3] = "El que contempla al mismo tiempo un modelo r&aacute;ster y uno vectorial";
 answers[90] = choices[90][0];
 units[90] = "67";
 comments[90] = "Id Pregunta: 11285. ";


//  Id pregunta: 11298 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n con la contrataci&oacute;n administrativa se&ntilde;ale la opci&oacute;n verdadera.";
 choices[91]= new Array();
 choices[91][0] = "Est&aacute; prohibido la realizaci&oacute;n de pactos en cualquier caso.";
 choices[91][1] = "Obliga a entes locales.";
 choices[91][2] = "La perfecci&oacute;n de un contrato, se produce en su adjudicaci&oacute;n provisional.";
 choices[91][3] = "La garant&iacute;a global, responde solamente ante un &oacute;rgano de contrataci&oacute;n.";
 answers[91] = choices[91][1];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11298. Obliga a todas las AAPP";


//  Id pregunta: 11431 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes no es una facultad del Gobierno?:";
 choices[92]= new Array();
 choices[92][0] = "La elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[92][1] = "La aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[92][2] = "La elaboraci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 choices[92][3] = "La aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 answers[92] = choices[92][2];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11431. ";


//  Id pregunta: 11457 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley 9/2014 General de Telecomunicaciones es correcta?:";
 choices[93]= new Array();
 choices[93][0] = "Mediante real decreto el Gobierno otorgar&aacute; los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[93][1] = "El Ministerio de Industria, Energ&iacute;a y Turismo  podr&aacute; fijar, mediante orden ministerial, las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros.";
 choices[93][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia, previo informe del Ministerio de Industria, Energ&iacute;a y Turismo, podr&aacute; modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[93][3] = "Los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n tomar&aacute;n en consideraci&oacute;n los n&uacute;meros, direcciones y nombres necesarios para permitir la efectiva prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 answers[93] = choices[93][3];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11457. ";


//  Id pregunta: 11503 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes NO es un Comit&eacute; creado en el seno de la International Standards Organization (ISO)?";
 choices[94]= new Array();
 choices[94][0] = "DEVCO, Comit&eacute; de Desarrollo";
 choices[94][1] = "COPOLCO, Comit&eacute; de pol&iacute;ticas en materia de consumo";
 choices[94][2] = "QUALCO, Comit&eacute; de calidad";
 choices[94][3] = "CASCO, Comit&eacute; de evaluaci&oacute;n de la conformidad";
 answers[94] = choices[94][2];
 units[94] = "42";
 comments[94] = "Id Pregunta: 11503. NULL";


//  Id pregunta: 11513 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[95]= new Array();
 choices[95][0] = "MD5";
 choices[95][1] = "TDEA";
 choices[95][2] = "AES";
 choices[95][3] = "RSA";
 answers[95] = choices[95][0];
 units[95] = "72";
 comments[95] = "Id Pregunta: 11513. NULL";


//  Id pregunta: 11569 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;De qu&eacute; tama&ntilde;o es el campo de comprobaci&oacute;n de erorres en la tecnolog&iacute;a Ethernet?";
 choices[96]= new Array();
 choices[96][0] = "16";
 choices[96][1] = "32";
 choices[96][2] = "64";
 choices[96][3] = "48";
 answers[96] = choices[96][1];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11569. NULL";


//  Id pregunta: 11630 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Entre las caracter&iacute;sticas que debe tener un requisito no se encuentra:";
 choices[97]= new Array();
 choices[97][0] = "Ambig&uuml;edad";
 choices[97][1] = "Consistencia";
 choices[97][2] = "Verificabilidad";
 choices[97][3] = "Completitud";
 answers[97] = choices[97][0];
 units[97] = "78";
 comments[97] = "Id Pregunta: 11630. ";


//  Id pregunta: 11633 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El nivel 2 de un DFD se conoce como:";
 choices[98]= new Array();
 choices[98][0] = "Diagrama de expansi&oacute;n";
 choices[98][1] = "Diagrama de paquetes";
 choices[98][2] = "Diagrama de nivel superior";
 choices[98][3] = "Diagrama de contexto";
 answers[98] = choices[98][0];
 units[98] = "81";
 comments[98] = "Id Pregunta: 11633. ";


//  Id pregunta: 11644 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Entre las siguientes afirmaciones sobre el formato JPEG, se&ntilde;ale la incorrecta:";
 choices[99]= new Array();
 choices[99][0] = "Sus siglas vienen de Joint Photography Experts Group";
 choices[99][1] = "Soporta animaciones";
 choices[99][2] = "Es un formato de compresi&oacute;n con p&eacute;rdidas";
 choices[99][3] = "Usa la transformada discreta del coseno (DCT)";
 answers[99] = choices[99][1];
 units[99] = "93";
 comments[99] = "Id Pregunta: 11644. ";


