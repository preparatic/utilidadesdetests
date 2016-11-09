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

//  Id pregunta: 571 AÃ±o de creación de pregunta: 2006-01-01
 questions[0]= "1)   Stephen P. Robbins aport&oacute; a los sistemas de informaci&oacute;n";
 choices[0]= new Array();
 choices[0][0] = "Algoritmos de ordenaci&oacute;n num&eacute;rica";
 choices[0][1] = "Una m&eacute;todo de  de gesti&oacute;n de colas";
 choices[0][2] = "Estudios sobre planificaci&oacute;n estrat&eacute;gica";
 choices[0][3] = "Un m&eacute;todo de planificaci&oacute;n de procesos";
 answers[0] = choices[0][2];
 units[0] = "23";
 comments[0] = "Id Pregunta: 571. ";


//  Id pregunta: 648 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  Cu&aacute;l de las siguientes relaciones entre Organismos internacionales y europeos es incorrecta:";
 choices[1]= new Array();
 choices[1][0] = "ITU-T - ETSI";
 choices[1][1] = "IEC - CENELEC";
 choices[1][2] = "Comit&eacute; conjunto JTC-1 (ISO - CEN/CENELEC)";
 choices[1][3] = "ISO -CEN";
 answers[1] = choices[1][2];
 units[1] = "42";
 comments[1] = "Id Pregunta: 648. ";


//  Id pregunta: 855 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[2]= new Array();
 choices[2][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[2][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[2][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[2][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[2] = choices[2][0];
 units[2] = "69";
 comments[2] = "Id Pregunta: 855. NULL";


//  Id pregunta: 1459 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En las interfaces orientadas a objetos (OOUI) es falso que:";
 choices[3]= new Array();
 choices[3][0] = "los iconos representan objetos que se pueden manipular directamente";
 choices[3][1] = "los objetos son de 3 tipos: datos, contenedores y dispositivos";
 choices[3][2] = "un ejemplo de interfaz orientada a objeto lo representan los accesos directos de Windows, donde cada objeto tiene su propia tarea asociada";
 choices[3][3] = "el estilo de interacci&oacute;n es el de acci&oacute;n-objeto y no el de objeto-acci&oacute;n";
 answers[3] = choices[3][3];
 units[3] = "52";
 comments[3] = "Id Pregunta: 1459. ";


//  Id pregunta: 1463 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  ISA, PCI, AGP, IDE, PCMCIA&hellip;, son:";
 choices[4]= new Array();
 choices[4][0] = "buses internos";
 choices[4][1] = "buses externos";
 choices[4][2] = "organismos de estandarizaci&oacute;n  ";
 choices[4][3] = "est&aacute;ndares de almacenamiento";
 answers[4] = choices[4][0];
 units[4] = "47";
 comments[4] = "Id Pregunta: 1463. ";


//  Id pregunta: 1514 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  &iquest;Se pueden ejecutar programas MS Windows bajo un entorno Linux?";
 choices[5]= new Array();
 choices[5][0] = "Nunca";
 choices[5][1] = "De forma nativa, linux es compatible binario con MS Windows";
 choices[5][2] = "S&iacute;, a trav&eacute;s de programas espec&iacute;fico para ello";
 choices[5][3] = "S&iacute;, a trav&eacute;s del comando SMB";
 answers[5] = choices[5][2];
 units[5] = "53,61";
 comments[5] = "Id Pregunta: 1514. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1921 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  &iquest; Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programamci&oacute;n orientado a objetos?";
 choices[6]= new Array();
 choices[6][0] = "Encapsulaci&oacute;n";
 choices[6][1] = "Herencia";
 choices[6][2] = "Polimorfismo";
 choices[6][3] = "Historicismo";
 answers[6] = choices[6][3];
 units[6] = "82";
 comments[6] = "Id Pregunta: 1921. ";


//  Id pregunta: 2514 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Uno de los m&eacute;todos utilizados para la identificaci&oacute;n de objetos es:";
 choices[7]= new Array();
 choices[7][0] = "Tarjetas CRC";
 choices[7][1] = "An&aacute;lisis l&eacute;xico";
 choices[7][2] = "Contraste de modelos";
 choices[7][3] = "Todas las anteriores son ciertas";
 answers[7] = choices[7][3];
 units[7] = "82";
 comments[7] = "Id Pregunta: 2514. ";


//  Id pregunta: 2573 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[8]= new Array();
 choices[8][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[8][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[8][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[8][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[8] = choices[8][2];
 units[8] = "87,88,92";
 comments[8] = "Id Pregunta: 2573. ";


//  Id pregunta: 2825 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  Sobre el M&Eacute;TODO DE JONES se puede decir...";
 choices[9]= new Array();
 choices[9][0] = "Jones utiliza el Rect&aacute;ngulo de Probabilidades para calcular el coste m&aacute;ximo y m&iacute;nimo del mantenimiento (en el caso menos favorable y en el m&aacute;s favorable), e indica que el coste estimado cae dentro del Rect&aacute;ngulo de Probabilidades.";
 choices[9][1] = "Una desventaja de las unidades de costo es que todos los gastos asociados al mantenimiento no se pueden expresar en la misma unidad. ";
 choices[9][2] = "Se estima el n&uacute;mero de unidades programables que hay que mantener y se calcula el n&uacute;mero de personas requeridas para gestionar el mismo bas&aacute;ndose en datos hist&oacute;ricos de proyectos anteriores y en la experiencia.";
 choices[9][3] = "Se basa en el Tr&aacute;fico de Cambio Anual&quot; de Boehm.";
 answers[9] = choices[9][0];
 units[9] = "90";
 comments[9] = "Id Pregunta: 2825. ";


//  Id pregunta: 3795 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Respecto a las interfaces en RDSI:";
 choices[10]= new Array();
 choices[10][0] = "La interfaz R es la definida para poder conectar los equipos no RDSI (X21, RS232&hellip;) a la especificaci&oacute;n RDSI";
 choices[10][1] = "La interfaz R es la utilizada por los equipos remotos";
 choices[10][2] = "La Interfaz R est&aacute; todav&iacute;a indefinida pues depende de las compa&ntilde;&iacute;as proveedoras de servicio";
 choices[10][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[10] = choices[10][0];
 units[10] = "103";
 comments[10] = "Id Pregunta: 3795. ";


//  Id pregunta: 3985 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  En las tramas 802.3 el pre&aacute;mbulo est&aacute; formado por:";
 choices[11]= new Array();
 choices[11][0] = "Un patr&oacute;n alternativo de unos y ceros";
 choices[11][1] = "El flag de sincronizaci&oacute;n 01111110";
 choices[11][2] = "El tipo de protocolo de nivel superior";
 choices[11][3] = "El c&oacute;digo de redundancia c&iacute;clica";
 answers[11] = choices[11][0];
 units[11] = "101";
 comments[11] = "Id Pregunta: 3985. ";


//  Id pregunta: 4386 AÃ±o de creación de pregunta: 2007-01-01
 questions[12]= "13)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[12]= new Array();
 choices[12][0] = "Java";
 choices[12][1] = "C#";
 choices[12][2] = "Visual Basic";
 choices[12][3] = "C++";
 answers[12] = choices[12][0];
 units[12] = "59";
 comments[12] = "Id Pregunta: 4386. ";


//  Id pregunta: 4398 AÃ±o de creación de pregunta: 2007-01-01
 questions[13]= "14)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[13]= new Array();
 choices[13][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica.";
 choices[13][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[13][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[13][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[13] = choices[13][1];
 units[13] = "58";
 comments[13] = "Id Pregunta: 4398. ";


//  Id pregunta: 4402 AÃ±o de creación de pregunta: 2007-01-01
 questions[14]= "15)  Seg&uacute;n Magerit v.2 los elementos del an&aacute;lisis de riesgos son:";
 choices[14]= new Array();
 choices[14][0] = "Impacto, riesgos calculados y riesgos intr&iacute;nsecos.";
 choices[14][1] = "Activos, amenazas y salvaguardas.";
 choices[14][2] = "Vulnerabilidades, riesgos e impacto.";
 choices[14][3] = "Entorno, sistema de informaci&oacute;n, informaci&oacute;n, funciones y otros.";
 answers[14] = choices[14][1];
 units[14] = "33";
 comments[14] = "Id Pregunta: 4402. ";


//  Id pregunta: 4755 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  La definici&oacute;n de usabilidad seg&uacute;n el est&aacute;ndar ISO 9241-11:1998 es la siguiente:";
 choices[15]= new Array();
 choices[15][0] = "Grado en que un producto puede ser usado por una persona con alg&uacute;n tipo de discapacidad (f&iacute;sica, cognitiva o tecnol&oacute;gica) respecto a c&oacute;mo lo usar&iacute;a una persona sin discapacidad";
 choices[15][1] = "Capacidad de uso, es decir, caracter&iacute;stica que distingue a los objetos dise&ntilde;ados para su utilizaci&oacute;n de los que no.";
 choices[15][2] = "Grado en que un producto puede ser usado por los usuarios especificados para obtener los resultados especificados con efectividad, eficiencia, y satisfacci&oacute;n en un contexto de uso especificado";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][2];
 units[15] = "39";
 comments[15] = "Id Pregunta: 4755. ";


//  Id pregunta: 4857 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real DecretoLegislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, enlo referente al software, establece que son objeto de protecci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Exclusivamente los programas de ordenador, entendidos como secuencias de instrucciones o indicacionesdestinadas a ser utilizadas en un sistema inform&aacute;tico para realizar una determinada funci&oacute;n o tarea";
 choices[16][1] = "Los programas de ordenador y su documentaci&oacute;n preparatoria, comprendi&eacute;ndose en dicho concepto ladocumentaci&oacute;n t&eacute;cnica y los manuales de uso del programa";
 choices[16][2] = "Los programas de ordenador y todas las definiciones documentadas de sus interfaces que posibilitan el usocolaborativo del software";
 choices[16][3] = "&Uacute;nicamente los algoritmos y conceptos inventivos documentados en los que se basan cualquiera de loselementos de los programas de ordenador";
 answers[16] = choices[16][1];
 units[16] = "36";
 comments[16] = "Id Pregunta: 4857. ";


//  Id pregunta: 5091 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  La informaci&oacute;n en el chip del DNI est&aacute; distribuida en tres zonas, con diferentes niveles y condiciones de acceso. &iquest;Cu&aacute;l no es una de ellas?";
 choices[17]= new Array();
 choices[17][0] = "Zona privada";
 choices[17][1] = "Zona de control";
 choices[17][2] = "Zona de seguridad";
 choices[17][3] = "Zona p&uacute;blica";
 answers[17] = choices[17][1];
 units[17] = "74";
 comments[17] = "Id Pregunta: 5091. NULL";


//  Id pregunta: 5123 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Qu&eacute; tipo de driver JDBC es aquel que convierte las llamadas JDBC a llamadas nativas de la base de datos?";
 choices[18]= new Array();
 choices[18][0] = "Tipo 1";
 choices[18][1] = "Tipo 2";
 choices[18][2] = "Tipo 3";
 choices[18][3] = "Tipo 4";
 answers[18] = choices[18][1];
 units[18] = "60";
 comments[18] = "Id Pregunta: 5123. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5608 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Ventajas de la versi&oacute;n SNMPv3 sobre SNMPv2";
 choices[19]= new Array();
 choices[19][0] = "SNMPv2 presentaba debilidades en la recuperaci&oacute;n de grandes cantidades de informaci&oacute;n.";
 choices[19][1] = "Introduce mecanismos de autentificaci&oacute;n, privacidad y control de accesos m&aacute;s solidos";
 choices[19][2] = "SNMPv3 introdujo nuevas operaciones: GetBulk, Inform, Report";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][1];
 units[19] = "104";
 comments[19] = "Id Pregunta: 5608. ";


//  Id pregunta: 5748 AÃ±o de creación de pregunta: 2009-01-01
 questions[20]= "21)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[20]= new Array();
 choices[20][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[20][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[20][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[20][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[20] = choices[20][1];
 units[20] = "74";
 comments[20] = "Id Pregunta: 5748. NULL";


//  Id pregunta: 5844 AÃ±o de creación de pregunta: 2009-01-01
 questions[21]= "22)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l era clasificado por CISCO como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace";
 choices[21]= new Array();
 choices[21][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol)";
 choices[21][1] = "IGRP (Interior Gateway Routing Protocol)";
 choices[21][2] = "OSPF (Open Shortest Path First)";
 choices[21][3] = "RIPv2 (Routing Information Protocol ver. 2)";
 answers[21] = choices[21][0];
 units[21] = "102";
 comments[21] = "Id Pregunta: 5844. MAP 2008 A1";


//  Id pregunta: 5899 AÃ±o de creación de pregunta: 2009-01-01
 questions[22]= "23)  &iquest;Qu&eacute; es JPA?";
 choices[22]= new Array();
 choices[22][0] = "Una tecnolog&iacute;a Java de acceso a bases de datos alternativa a JDBC y con la cu&aacute;l no tiene nada que ver";
 choices[22][1] = "Una tecnolog&iacute;a Java de acceso a bases de datos de mayor nivel que JDBC, en la cu&aacute;l se apoya";
 choices[22][2] = "Es la capa que soporta la portabilidad entre gestores de bases de datos en JDBC";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][1];
 units[22] = "60";
 comments[22] = "Id Pregunta: 5899. NULL";


//  Id pregunta: 6166 AÃ±o de creación de pregunta: 2010-01-01
 questions[23]= "24)  Se&ntilde;ale cual es el flujo general de informaci&oacute;n dentro de la organizaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Entrada, procesado, almacenamiento, difusi&oacute;n y utilizaci&oacute;n.";
 choices[23][1] = "Entrada, almacenamiento, utilizaci&oacute;n, procesado y difusi&oacute;n.";
 choices[23][2] = "Entrada, procesado, almacenamiento, utilizaci&oacute;n y difusi&oacute;n.";
 choices[23][3] = "Entrada, almacenamiento, procesado, difusi&oacute;n y utilizaci&oacute;n.";
 answers[23] = choices[23][3];
 units[23] = "21";
 comments[23] = "Id Pregunta: 6166. ";


//  Id pregunta: 6180 AÃ±o de creación de pregunta: 2010-01-01
 questions[24]= "25)  RMI, DCOM, CORBA y RPC se consideran:";
 choices[24]= new Array();
 choices[24][0] = "Precursores de los Servicios Web.";
 choices[24][1] = "Formas de comunicar aplicaciones distribuidas.";
 choices[24][2] = "Formas de comunicar aplicaciones heterog&eacute;neas.";
 choices[24][3] = "Todas las anteriores son respuestas correctas.";
 answers[24] = choices[24][3];
 units[24] = "69";
 comments[24] = "Id Pregunta: 6180. NULL";


//  Id pregunta: 8431 AÃ±o de creación de pregunta: 2011-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[25]= new Array();
 choices[25][0] = "AIF";
 choices[25][1] = "IDA";
 choices[25][2] = "ISA";
 choices[25][3] = "IMA";
 answers[25] = choices[25][2];
 units[25] = "30";
 comments[25] = "Id Pregunta: 8431. ";


//  Id pregunta: 8468 AÃ±o de creación de pregunta: 2011-01-01
 questions[26]= "27)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[26]= new Array();
 choices[26][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[26][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[26][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][1];
 units[26] = "108";
 comments[26] = "Id Pregunta: 8468. Analista Ayto. Madrid 2010";


//  Id pregunta: 8524 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[27]= new Array();
 choices[27][0] = "4 bits.";
 choices[27][1] = "5 bits.";
 choices[27][2] = "32 bits.";
 choices[27][3] = "258 bits.";
 answers[27] = choices[27][2];
 units[27] = "100";
 comments[27] = "Id Pregunta: 8524. Examen TIC A2 2010 interna";


//  Id pregunta: 8785 AÃ±o de creación de pregunta: 2011-01-01
 questions[28]= "29)  OLAP proporciona mayor velocidad de procesamiento en la sentencia SQL";
 choices[28]= new Array();
 choices[28][0] = "INSERT";
 choices[28][1] = "UPDATE";
 choices[28][2] = "DELETE";
 choices[28][3] = "SELECT";
 answers[28] = choices[28][3];
 units[28] = "57, 58";
 comments[28] = "Id Pregunta: 8785. Examen UPM A2 2011";


//  Id pregunta: 9021 AÃ±o de creación de pregunta: 2011-01-01
 questions[29]= "30)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[29]= new Array();
 choices[29][0] = "De baja capacidad y elevado alcance.";
 choices[29][1] = "De alta capacidad y reducido alcance.";
 choices[29][2] = "De alta capacidad y elevado alcance.";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][2];
 units[29] = "99";
 comments[29] = "Id Pregunta: 9021. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9045 AÃ±o de creación de pregunta: 2011-01-01
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[30]= new Array();
 choices[30][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[30][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[30][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos ";
 choices[30][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 9045. NULL";


//  Id pregunta: 9047 AÃ±o de creación de pregunta: 2011-01-01
 questions[31]= "32)  Cu&aacute;l no es un derecho de las personas seg&uacute;n la LOPD";
 choices[31]= new Array();
 choices[31][0] = "Impugnaci&oacute;n de valoraciones";
 choices[31][1] = "Derecho de acceso";
 choices[31][2] = "Derecho a cobrar dinero por el tratamiento de sus datos";
 choices[31][3] = "Derecho de rectificaci&oacute;n";
 answers[31] = choices[31][2];
 units[31] = "29";
 comments[31] = "Id Pregunta: 9047. ";


//  Id pregunta: 9083 AÃ±o de creación de pregunta: 2013-01-01
 questions[32]= "33)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[32]= new Array();
 choices[32][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[32][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[32][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[32][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[32] = choices[32][3];
 units[32] = "77";
 comments[32] = "Id Pregunta: 9083. ";


//  Id pregunta: 9754 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  La tarea de especificaci&oacute;n de necesidades de Migraci&oacute;n en M&eacute;trica v3 se tiene en cuenta en la actividad:";
 choices[33]= new Array();
 choices[33][0] = "Elaboraci&oacute;n del modelo de datos en ASI";
 choices[33][1] = "Dise&ntilde;o de clases en DSI";
 choices[33][2] = "Dise&ntilde;o de la Migraci&oacute;n y carga inicial de datos en DSI";
 choices[33][3] = "A y B son correctas";
 answers[33] = choices[33][3];
 units[33] = "86";
 comments[33] = "Id Pregunta: 9754. Ambas actividades tienen una tarea llamada &quot;Especificaci&oacute;n de necesidades de Migraci&oacute;n y Carga inicial de datos&quot;";


//  Id pregunta: 9771 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, la funci&oacute;n sancionadora es competencia de:";
 choices[34]= new Array();
 choices[34][0] = "MITyC";
 choices[34][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[34][2] = "Ministro del ministerio que ofrezca los datos si las infracciones son muy graves y un rango m&iacute;nimo de Direcci&oacute;n General para infracciones graves y leves";
 choices[34][3] = "Direcci&oacute;n General que haya publicado los datos.";
 answers[34] = choices[34][2];
 units[34] = "22";
 comments[34] = "Id Pregunta: 9771. ";


//  Id pregunta: 9934 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[35]= new Array();
 choices[35][0] = "2, uno mayor y otro menor.";
 choices[35][1] = "3, mayor, mediano y menor.";
 choices[35][2] = "Ninguno.";
 choices[35][3] = "Depende del protocolo implementado.";
 answers[35] = choices[35][0];
 units[35] = "100";
 comments[35] = "Id Pregunta: 9934. NULL";


//  Id pregunta: 9972 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes se corresponde con un m&oacute;dulo dentro de un ERP (Enterprise Resource Planning)?";
 choices[36]= new Array();
 choices[36][0] = "Recursos Humanos";
 choices[36][1] = "Planificaci&oacute;n Estrat&eacute;gica";
 choices[36][2] = "Seguridad de Informaci&oacute;n";
 choices[36][3] = "HelpDesk";
 answers[36] = choices[36][0];
 units[36] = "65";
 comments[36] = "Id Pregunta: 9972. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9990 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[37]= new Array();
 choices[37][0] = "Blackboard";
 choices[37][1] = "WebCT";
 choices[37][2] = "Dokeos";
 choices[37][3] = "Desire2Learn";
 answers[37] = choices[37][2];
 units[37] = "66";
 comments[37] = "Id Pregunta: 9990. ";


//  Id pregunta: 10007 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  En la direcci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n, es fundamental la gesti&oacute;n del alcance del proyecto. Ello supone";
 choices[38]= new Array();
 choices[38][0] = "estimar la duraci&oacute;n de las actividades.";
 choices[38][1] = "definir la secuencia entre las actividades.";
 choices[38][2] = "asegurar que el proyecto incluya todo el trabajo requerido, y s&oacute;lo el trabajo requerido.";
 choices[38][3] = "preparar el presupuesto de costes.";
 answers[38] = choices[38][2];
 units[38] = "27";
 comments[38] = "Id Pregunta: 10007. ";


//  Id pregunta: 10125 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  La red TESTA tiene el rango de direcciones:";
 choices[39]= new Array();
 choices[39][0] = "10.0.0.0";
 choices[39][1] = "192.0.0.0";
 choices[39][2] = "62.0.0.0";
 choices[39][3] = "62.62.0.0";
 answers[39] = choices[39][3];
 units[39] = "103";
 comments[39] = "Id Pregunta: 10125. ";


//  Id pregunta: 10214 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  Tres alternativas A, B y C han obtenido respectivamente las puntuaciones directas 300, 450 y 250 respecto de un criterio. Seg&uacute;n el m&eacute;todo de fracci&oacute;n del ideal, &iquest;qu&eacute; puntuaci&oacute;n normalizada corresponde a la alternativa A?";
 choices[40]= new Array();
 choices[40][0] = "0,25 puntos";
 choices[40][1] = "0,75 puntos";
 choices[40][2] = "0,33 puntos";
 choices[40][3] = "0,66 puntos";
 answers[40] = choices[40][0];
 units[40] = "34";
 comments[40] = "Id Pregunta: 10214. Puntuaci&oacute;n normalizada por factor del ideal = (puntuacion - puntuacion_min) / (puntuacion_max - puntuacion_min) = (300 - 250) / (450 - 250) = 0,25";


//  Id pregunta: 10286 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  &iquest;Qu&eacute; tipo de mantenimiento debe realizarse como consecuencia de los cambios en el entorno de operaci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "Operativo";
 choices[41][1] = "Correctivo";
 choices[41][2] = "Perfectivo";
 choices[41][3] = "Adaptativo";
 answers[41] = choices[41][3];
 units[41] = "91";
 comments[41] = "Id Pregunta: 10286. TIC A2, libre, examen 2013";


//  Id pregunta: 10348 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  &iquest;C&oacute;mo se llama la organizaci&oacute;n que desarrolla est&aacute;ndares abiertos para la industria de la telefon&iacute;a m&oacute;vil?";
 choices[42]= new Array();
 choices[42][0] = "BSA (Business  Software Alliance)";
 choices[42][1] = "OpenMG (Open Mobile Group)";
 choices[42][2] = "OMA (Open Mobile Alliance)";
 choices[42][3] = "The Open Group";
 answers[42] = choices[42][2];
 units[42] = "37";
 comments[42] = "Id Pregunta: 10348. La OMA est&aacute; integrada, entre otros, por operadores de telefon&iacute;a m&oacute;vil, y provedores de aplicaciones y contenidos para m&oacute;viles";


//  Id pregunta: 10359 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  En relaci&oacute;n con los sistemas abiertos, se&ntilde;ale la respuesta err&oacute;nea:";
 choices[43]= new Array();
 choices[43][0] = "Un sistema abierto es aquel cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 choices[43][1] = "Un sistema abierto es aquel capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[43][2] = "Los sistemas abiertos se caracterizan por su interopeabilidad, portabilidad y escalabilidad";
 choices[43][3] = "Los sistemas abiertos deben hacer uso de est&aacute;ndares abiertos";
 answers[43] = choices[43][3];
 units[43] = "40";
 comments[43] = "Id Pregunta: 10359. Un sistema puede ser abierto pero no hacer uso de est&aacute;ndares abiertos";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure) ";
 choices[44]= new Array();
 choices[44][0] = "permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales. ";
 choices[44][1] = "est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[44][2] = "aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[44][3] = "no est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.  ";
 answers[44] = choices[44][2];
 units[44] = "119";
 comments[44] = "Id Pregunta: 10429. Examen TIC A1 2013";


//  Id pregunta: 10448 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen ";
 choices[45]= new Array();
 choices[45][0] = "TIFF.";
 choices[45][1] = "GIF.";
 choices[45][2] = "PNG.";
 choices[45][3] = "JPEG.";
 answers[45] = choices[45][2];
 units[45] = "93";
 comments[45] = "Id Pregunta: 10448. Examen TIC A1 2013";


//  Id pregunta: 10497 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[46]= new Array();
 choices[46][0] = "Si";
 choices[46][1] = "No";
 choices[46][2] = "Depende de la configuraci&oacute;n del FW";
 choices[46][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[46] = choices[46][1];
 units[46] = "111";
 comments[46] = "Id Pregunta: 10497. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";


//  Id pregunta: 10604 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  SET es:";
 choices[47]= new Array();
 choices[47][0] = "Una tecnolog&iacute;a definida por MasterCard con el fin de verificar la identidad de los titulares que efect&uacute;an compras por Internet.";
 choices[47][1] = "Un sistema de micropagos.";
 choices[47][2] = "Un protocolo est&aacute;ndar para el pago remoto con tarjetas de cr&eacute;dito.";
 choices[47][3] = "Un negocio de comercio electr&oacute;nico que permite realizar pagos o transferencias monetarias a trav&eacute;s de Internet.";
 answers[47] = choices[47][2];
 units[47] = "70";
 comments[47] = "Id Pregunta: 10604. ";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  El formato de redifusi&oacute;n web Atom est&aacute; estandarizado en:";
 choices[48]= new Array();
 choices[48][0] = "IETF RFC 1738";
 choices[48][1] = "IETF RFC 1392";
 choices[48][2] = "IETF RFC 2616";
 choices[48][3] = "IETF RFC 4287";
 answers[48] = choices[48][3];
 units[48] = "69";
 comments[48] = "Id Pregunta: 10608. ";


//  Id pregunta: 10640 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  Indique cu&aacute;l de &eacute;stas no es una herramienta BPM:";
 choices[49]= new Array();
 choices[49][0] = "Intalio";
 choices[49][1] = "Scrum";
 choices[49][2] = "Tibco";
 choices[49][3] = "Adonis";
 answers[49] = choices[49][1];
 units[49] = "79";
 comments[49] = "Id Pregunta: 10640. ";


//  Id pregunta: 10641 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  Las fases por ciclo en el Modelo de Ciclo de Vida en espiral son:";
 choices[50]= new Array();
 choices[50][0] = "Planificaci&oacute;n, An&aacute;lisis de Riesgos, Ingenier&iacute;a y Evaluaci&oacute;n.";
 choices[50][1] = "Planificaci&oacute;n, Dise&ntilde;o, Codificaci&oacute;n e Integraci&oacute;n.";
 choices[50][2] = "Construcci&oacute;n y Transici&oacute;n.";
 choices[50][3] = "Adaptaci&oacute;n, Composici&oacute;n y Reemplazo.";
 answers[50] = choices[50][0];
 units[50] = "76";
 comments[50] = "Id Pregunta: 10641. ";


//  Id pregunta: 10648 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  La construcci&oacute;n de los diagramas de flujo de datos se basa en el principio de:";
 choices[51]= new Array();
 choices[51][0] = "Partici&oacute;n.";
 choices[51][1] = "Descomposici&oacute;n.";
 choices[51][2] = "Inconsistencia.";
 choices[51][3] = "Todos los anteriores.";
 answers[51] = choices[51][1];
 units[51] = "81";
 comments[51] = "Id Pregunta: 10648. ";


//  Id pregunta: 10808 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[52]= new Array();
 choices[52][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[52][1] = "Estructura de respuesta a incidentes.";
 choices[52][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[52][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "31, 32, 33";
 comments[52] = "Id Pregunta: 10808. Examen GSI 2014";


//  Id pregunta: 10813 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  Se&ntilde;ale cu&aacute;les de los siguientes formatos de archivo en la actualidad NO se consideran de formato abierto de texto para documentos:";
 choices[53]= new Array();
 choices[53][0] = "PDF";
 choices[53][1] = "EPUB";
 choices[53][2] = "RTF";
 choices[53][3] = "FLAC";
 answers[53] = choices[53][3];
 units[53] = "61, 62";
 comments[53] = "Id Pregunta: 10813. Examen GSI 2014";


//  Id pregunta: 10853 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  Se&ntilde;ale la respuesta INCORRECTA respecto a la tecnolog&iacute;a de Servicios Web REST:";
 choices[54]= new Array();
 choices[54][0] = "JAX-RS es una API Java que proporciona soporte en la creaci&oacute;n de servicios web de acuerdo con REST.";
 choices[54][1] = "Jersey es una implementaci&oacute;n de referencia de servicios web REST.";
 choices[54][2] = "REST publica recursos que son accesibles a trav&eacute;s de m&eacute;todos http, por ejemplo POST y GET.";
 choices[54][3] = "Los recursos REST permiten s&oacute;lo 3 operaciones: CREATE, UPDATE y DELETE.";
 answers[54] = choices[54][3];
 units[54] = "51";
 comments[54] = "Id Pregunta: 10853. Examen GSI 2014";


//  Id pregunta: 10864 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes respuestas incluye un est&aacute;ndar correcto del proceso de software?";
 choices[55]= new Array();
 choices[55][0] = "IEEE 930:1998. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 choices[55][1] = "IEEE 29148:2011. Ingenier&iacute;a de Sistemas y Software - Procesos de ciclo de vida - Ingenier&iacute;a de requisitos.";
 choices[55][2] = "IEEE 1216:1987. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n del Dise&ntilde;o del Software.";
 choices[55][3] = "IEEE 830: 2004. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 answers[55] = choices[55][1];
 units[55] = "76, 78, 79";
 comments[55] = "Id Pregunta: 10864. Examen GSI 2014";


//  Id pregunta: 10865 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[56][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[56][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[56][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[56] = choices[56][1];
 units[56] = "86, 81, 82";
 comments[56] = "Id Pregunta: 10865. Examen GSI 2014";


//  Id pregunta: 10866 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[57]= new Array();
 choices[57][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[57][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[57][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[57][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[57] = choices[57][2];
 units[57] = "60, 116";
 comments[57] = "Id Pregunta: 10866. Examen GSI 2014";


//  Id pregunta: 10876 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[58]= new Array();
 choices[58][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[58][1] = "RAID 0.";
 choices[58][2] = "RAID 1.";
 choices[58][3] = "RAID 5.";
 answers[58] = choices[58][1];
 units[58] = "48";
 comments[58] = "Id Pregunta: 10876. Examen GSI 2014";


//  Id pregunta: 10883 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:";
 choices[59]= new Array();
 choices[59][0] = "SetRequest PDU";
 choices[59][1] = "InformRequest PDU";
 choices[59][2] = "Report PDU";
 choices[59][3] = "GetBackRequest PDU";
 answers[59] = choices[59][3];
 units[59] = "112";
 comments[59] = "Id Pregunta: 10883. Examen GSI 2014";


//  Id pregunta: 10892 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[60]= new Array();
 choices[60][0] = "Loopback.";
 choices[60][1] = "Indefinida (Unspecified).";
 choices[60][2] = "Multicast.";
 choices[60][3] = "No es v&aacute;lida.";
 answers[60] = choices[60][0];
 units[60] = "100";
 comments[60] = "Id Pregunta: 10892. Examen GSI 2014";


//  Id pregunta: 10899 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[61]= new Array();
 choices[61][0] = "Modo ECB (Electronic CodeBook).";
 choices[61][1] = "Modo CBC (Cipher Block Chaining).";
 choices[61][2] = "Modo OFB (Output FeedBack).";
 choices[61][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[61] = choices[61][3];
 units[61] = "73, 74";
 comments[61] = "Id Pregunta: 10899. Examen GSI 2014";


//  Id pregunta: 10954 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  &iquest;C&uacute;al de las siguientes opciones NO es un sistema de control de versiones?";
 choices[62]= new Array();
 choices[62][0] = "Subversion.";
 choices[62][1] = "Git";
 choices[62][2] = "Ruby.";
 choices[62][3] = "SourceSafe.";
 answers[62] = choices[62][2];
 units[62] = "28";
 comments[62] = "Id Pregunta: 10954. TIC A1 AGE 2014";


//  Id pregunta: 10964 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Respecto a RTMP (Real Time Messaging Protocol), se&ntilde;ale la respuesta correcta:";
 choices[63]= new Array();
 choices[63][0] = "Junto con ICMP proporciona las funciones de monitorizaci&oacute;n y control de TCP/IP.";
 choices[63][1] = "Permite la gesti&oacute;n conjunta de mensajer&iacute;a instant&aacute;nea y mensajes cortos GSM.";
 choices[63][2] = "Se emplea para la emisi&oacute;n en tiempo real de streaming de v&iacute;deo.";
 choices[63][3] = "Define el est&aacute;ndar de comunicaciones para los procesadores de sistemas de tiempo real cr&iacute;tico.";
 answers[63] = choices[63][2];
 units[63] = "117";
 comments[63] = "Id Pregunta: 10964. TIC A1 AGE 2014";


//  Id pregunta: 10979 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Dentro del modelo de referencia COBIT 5 para la gesti&oacute;n de las TI de una organizaci&oacute;n, se definen:";
 choices[64]= new Array();
 choices[64][0] = "5 procesos de gobierno, que incluyen pr&aacute;cticas de Evaluaci&oacute;n, Orientaci&oacute;n y Supervisi&oacute;n.";
 choices[64][1] = "5 procesos de gobierno con cuatro &aacute;reas de dominio para la planificaci&oacute;n, construcci&oacute;n, ejecuci&oacute;n y supervisi&oacute;n.";
 choices[64][2] = "5 procesos de gobierno donde se gestiona la estrategia, la arquitectura empresarial, el portfolio, el presupuesto y los recursos humanos.";
 choices[64][3] = "4 procesos de gobierno con 5 &aacute;reas de dominio para la planificaci&oacute;n, dise&ntilde;o, construcci&oacute;n, ejecuci&oacute;n y supervisi&oacute;n.";
 answers[64] = choices[64][0];
 units[64] = "98";
 comments[64] = "Id Pregunta: 10979. TIC A1 AGE 2014";


//  Id pregunta: 11025 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  &iquest;Es AENOR un miembro de ISO?";
 choices[65]= new Array();
 choices[65][0] = "No";
 choices[65][1] = "S&iacute;, es miembro nato";
 choices[65][2] = "Si, es miembro suscrito";
 choices[65][3] = "No, pero tiene previsto incorporarse en 2016";
 answers[65] = choices[65][1];
 units[65] = "42";
 comments[65] = "Id Pregunta: 11025. ";


//  Id pregunta: 11031 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l se corresponde con el nivel alto de planificaci&oacute;n del procesador?";
 choices[66]= new Array();
 choices[66][0] = "Scheduler";
 choices[66][1] = "Planificator";
 choices[66][2] = "High Planificator";
 choices[66][3] = "Dispatcher";
 answers[66] = choices[66][0];
 units[66] = "52";
 comments[66] = "Id Pregunta: 11031. ";


//  Id pregunta: 11039 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[67]= new Array();
 choices[67][0] = "Fue creado por Peter Chen";
 choices[67][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[67][2] = "Las estructuras de datos son complejas";
 choices[67][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[67] = choices[67][1];
 units[67] = "58";
 comments[67] = "Id Pregunta: 11039. ";


//  Id pregunta: 11047 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l es la &uacute;ltima versi&oacute;n de HTTP a fecha Octubre 2015?";
 choices[68]= new Array();
 choices[68][0] = "1.1";
 choices[68][1] = "2";
 choices[68][2] = "1.3";
 choices[68][3] = "3";
 answers[68] = choices[68][1];
 units[68] = "69";
 comments[68] = "Id Pregunta: 11047. ";


//  Id pregunta: 11068 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  &iquest;Cual de la siguientes afirmaciones es CORRECTA para TODOS los procesos?";
 choices[69]= new Array();
 choices[69][0] = "Definen actividades, roles, responsabilidades, funciones y m&eacute;tricas";
 choices[69][1] = "Crean valor para las partes interesadas (stakeholders)";
 choices[69][2] = "Se entrega por un Proveedor de Servicios como soporte a un Cliente";
 choices[69][3] = "Son unidades de las Organizaciones, responsables de resultados espec&iacute;ficos";
 answers[69] = choices[69][1];
 units[69] = "98";
 comments[69] = "Id Pregunta: 11068. ";


//  Id pregunta: 11091 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de programaci&oacute;n paralela?";
 choices[70]= new Array();
 choices[70][0] = "CUDA";
 choices[70][1] = "OpenCL";
 choices[70][2] = "OpenStack";
 choices[70][3] = "MPI";
 answers[70] = choices[70][2];
 units[70] = "45";
 comments[70] = "Id Pregunta: 11091. ";


//  Id pregunta: 11142 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seleccione la respuesta verdadera";
 choices[71]= new Array();
 choices[71][0] = "Los m&eacute;todos de aprendizaje no supervisado se utilizan para t&eacute;cnicas de clustering o agrupaci&oacute;n";
 choices[71][1] = "Los m&eacute;todos de aprendizaje supervisado y no supervisado parten de la misma base de datos de conocimiento";
 choices[71][2] = "Los m&eacute;todos de aprendizaje no supervisado permiten clasificar una muestra en funci&oacute;n de las clases conocidas";
 choices[71][3] = "Las redes neuronales son t&eacute;cnicas de aprendizaje no supervisado";
 answers[71] = choices[71][0];
 units[71] = "63";
 comments[71] = "Id Pregunta: 11142. ";


//  Id pregunta: 11162 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no es un modo de COCOMO (Constructive Cost Model) para estimar el n&uacute;mero de instrucciones de c&oacute;digo fuente seg&uacute;n el entorno de aplicaci&oacute;n que se utiliza?";
 choices[72]= new Array();
 choices[72][0] = "Org&aacute;nico";
 choices[72][1] = "Acoplado";
 choices[72][2] = "Semiacoplado";
 choices[72][3] = "Empotrado";
 answers[72] = choices[72][1];
 units[72] = "88";
 comments[72] = "Id Pregunta: 11162. ";


//  Id pregunta: 11169 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  &iquest;Cu&aacute;les es el orden correcto de los bloques b&aacute;sicos de procesamiento de un sistema biom&eacute;trico de reconocimiento de voz?";
 choices[73]= new Array();
 choices[73][0] = "Preprocesamiento, Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[73][1] = "Obtenci&oacute;n de datos del sensor, Preprocesamiento, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[73][2] = "Extracci&oacute;n de caracter&iacute;sticas, Obtenci&oacute;n de datos del sensor, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[73][3] = "Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "94";
 comments[73] = "Id Pregunta: 11169. ";


//  Id pregunta: 11176 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes Grupos de Trabajo del Comit&eacute; de Estandarizaci&oacute;n 802 permanece Activo?";
 choices[74]= new Array();
 choices[74][0] = "802.3 CSMA/CD Ethernet";
 choices[74][1] = "802.14 Redes CATV";
 choices[74][2] = "802.10 Seguridad en Est&aacute;ndares IEEE";
 choices[74][3] = "802.4 Token Bus";
 answers[74] = choices[74][0];
 units[74] = "101";
 comments[74] = "Id Pregunta: 11176. ";


//  Id pregunta: 11182 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;C&oacute;mo se denominan los sistemas de comunicaciones m&oacute;viles que realizan la transmisi&oacute;n y recepci&oacute;n de forma secuencial en un sentido cada vez?";
 choices[75]= new Array();
 choices[75][0] = "Paralelos";
 choices[75][1] = "D&uacute;plex";
 choices[75][2] = "Semi-duplex";
 choices[75][3] = "Ninguno de los anteriores";
 answers[75] = choices[75][2];
 units[75] = "108";
 comments[75] = "Id Pregunta: 11182. ";


//  Id pregunta: 11199 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Estrategia Europea 2020 en materia de sostenibilidad energ&eacute;tica?";
 choices[76]= new Array();
 choices[76][0] = "20% de las energ&iacute;as deben proceder de una fuente renovable";
 choices[76][1] = "20% de aumento de la eficiencia energ&eacute;tica";
 choices[76][2] = "20% de los coches deben ser el&eacute;ctricos";
 choices[76][3] = "Emisiones de gases invernadero un 20% menores a los niveles de 1990";
 answers[76] = choices[76][2];
 units[76] = "30";
 comments[76] = "Id Pregunta: 11199. ";


//  Id pregunta: 11200 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[77]= new Array();
 choices[77][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[77][1] = "Investigaci&oacute;n e innovaci&oacute;n";
 choices[77][2] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[77][3] = "Beneficios TIC para la Sociedad UE";
 answers[77] = choices[77][2];
 units[77] = "30";
 comments[77] = "Id Pregunta: 11200. ";


//  Id pregunta: 11223 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  En el Framework de .NET, los servicios web:";
 choices[78]= new Array();
 choices[78][0] = "Se definen en ficheros de extensi&oacute;n .asmx incluyendo la directiva WebService.";
 choices[78][1] = "ASP.NET no se puede integrar f&aacute;cilmente con tecnolog&iacute;as como AJAX para construir aplicaciones RIA.";
 choices[78][2] = "Los servicios Web WCF pueden ser SOAP o REST, aunque no soportan un formato no XML como JSON.";
 choices[78][3] = "Los servicios WCF (Windows Communication Foundation) siempre se ejecutan directamente sobre TCP.";
 answers[78] = choices[78][0];
 units[78] = "59";
 comments[78] = "Id Pregunta: 11223. ";


//  Id pregunta: 11230 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes no es un API de la especificaci&oacute;n J2EE?";
 choices[79]= new Array();
 choices[79][0] = "JNDI.";
 choices[79][1] = "API Java IDL.";
 choices[79][2] = "JTA (Java Transaction API).";
 choices[79][3] = "JMS (Java Mobile Service).";
 answers[79] = choices[79][3];
 units[79] = "116";
 comments[79] = "Id Pregunta: 11230. ";


//  Id pregunta: 11322 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Las directivas JSP nos permiten configurar alguna informaci&oacute;n que pueda ser usada en nuestra p&aacute;gina JSP. Cu&aacute;l de las siguientes no es una directiva jsp";
 choices[80]= new Array();
 choices[80][0] = "DocRel";
 choices[80][1] = "Page";
 choices[80][2] = "Include";
 choices[80][3] = "Taglib";
 answers[80] = choices[80][0];
 units[80] = "115";
 comments[80] = "Id Pregunta: 11322. ";


//  Id pregunta: 11324 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  De las siguientes definiciones, seleccione la correcta para la definici&oacute;n de ARP";
 choices[81]= new Array();
 choices[81][0] = "Es un protocolo de nivel de enlace responsable de encontrar la direcci&oacute;n hardware (MAC)";
 choices[81][1] = "Es un protocolo de nivel de RED responsable de encontrar la direcci&oacute;n hardware (MAC)";
 choices[81][2] = "Es un protocolo de nivel de enlace responsable de encontrar la direcci&oacute;n de red (IP)";
 choices[81][3] = "Es un protocolo de nivel de red responsable de encontrar la direcci&oacute;n de red (IP)";
 answers[81] = choices[81][0];
 units[81] = "113";
 comments[81] = "Id Pregunta: 11324. ";


//  Id pregunta: 11326 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/99, el encargado del tratamiento es:";
 choices[82]= new Array();
 choices[82][0] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada previa certificaci&oacute;n por la AEPD";
 choices[82][1] = "Persona f&iacute;sica, ya sea trabajador de una entidad p&uacute;blica, en cuyo caso ser&aacute; un funcionario o privada";
 choices[82][2] = "Persona f&iacute;sica, jur&iacute;dica o  entidad sin personalidad jur&iacute;dica, p&uacute;blica o privada, servicio o cualquier otro organismo";
 choices[82][3] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada, servicio o cualquier otro organismo";
 answers[82] = choices[82][3];
 units[82] = "29";
 comments[82] = "Id Pregunta: 11326. ";


//  Id pregunta: 11340 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  En relaci&oacute;n con los diagramas de casos de uso, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[83]= new Array();
 choices[83][0] = "Las relaciones entre casos de uso y actores pueden ser de tipo usa o extiende";
 choices[83][1] = "Las relaciones s&oacute;lo pueden ser entre actores y casos de uso";
 choices[83][2] = "Los elementos principales son: casos de uso, relaciones, actores y extensiones";
 choices[83][3] = "M&eacute;trica no contempla su uso";
 answers[83] = choices[83][2];
 units[83] = "86";
 comments[83] = "Id Pregunta: 11340. ";


//  Id pregunta: 11343 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Se&ntilde;ale la afirmaci&oacute;n falsa de entre las siguientes:";
 choices[84]= new Array();
 choices[84][0] = "Las relaciones regulares son entre dos entidades fuertes";
 choices[84][1] = "La existencia de las entidades fuertes, depende de otra entidad";
 choices[84][2] = "Las entidades pueden ser fuertes o d&eacute;biles";
 choices[84][3] = "Las relaciones d&eacute;biles se producen entre una entidad fuerte y otra d&eacute;bil";
 answers[84] = choices[84][1];
 units[84] = "80";
 comments[84] = "Id Pregunta: 11343. ";


//  Id pregunta: 11440 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n la Ley 9/2014, los abonados podr&aacute;n conservar los n&uacute;meros que les hayan sido asignados:";
 choices[85]= new Array();
 choices[85][0] = "Siempre que se mantenga el mismo operador.";
 choices[85][1] = "Sin ning&uacute;n requisito previo.";
 choices[85][2] = "Previa solicitud.";
 choices[85][3] = "Seg&uacute;n fije la CNMC mediante resoluci&oacute;n.";
 answers[85] = choices[85][2];
 units[85] = "110";
 comments[85] = "Id Pregunta: 11440. ";


//  Id pregunta: 11487 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La titularidad de los derechos de los programas de ordenador desarrollados por trabajadores asalariados";
 choices[86]= new Array();
 choices[86][0] = "Pertenecen a los trabajadores que han creado el programa";
 choices[86][1] = "Pertenecen a los trabajadores que han creado el programa, salvo pacto en contrario";
 choices[86][2] = "Pertenecen al empresario que los ha contratado";
 choices[86][3] = "Pertenecen al empresario que los ha contratado, salvo pacto en contrario";
 answers[86] = choices[86][3];
 units[86] = "36";
 comments[86] = "Id Pregunta: 11487. NULL";


//  Id pregunta: 11530 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Indicar cu&aacute;l de las siguientes afirmaciones es m&aacute;s id&oacute;nea para definir un sistema de Workflow.";
 choices[87]= new Array();
 choices[87][0] = "Se trata de un sistema de invocaci&oacute;n en la ejecuci&oacute;n de operaciones de entrada salida";
 choices[87][1] = "Se trata de una herramienta para mejorar la ejecuci&oacute;n y el control de los procesos de negocio";
 choices[87][2] = "Se trata de una herramienta para el dibujo de diagramas de flujo";
 choices[87][3] = "Se trata de una herramienta que nos permite establecer prioridades en una cola de trabajo";
 answers[87] = choices[87][1];
 units[87] = "71";
 comments[87] = "Id Pregunta: 11530. NULL";


//  Id pregunta: 11548 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  De acuerdo a los 6 niveles definidos en CMMI para medir la capacidad de los procesos, &iquest;Qu&eacute; nivel corresponde a un proceso que adem&aacute;s de ser gestionado, se ajusta a la pol&iacute;tica de procesos que existe en la organizaci&oacute;n, alineada con las directivas de la empresa?";
 choices[88]= new Array();
 choices[88][0] = "Nivel 3 Definido";
 choices[88][1] = "Nivel 4 Cuantitativamente Gestionado";
 choices[88][2] = "Nivel 3 Predecible";
 choices[88][3] = "Nivel 5 Optimizado";
 answers[88] = choices[88][0];
 units[88] = "87";
 comments[88] = "Id Pregunta: 11548. NULL";


//  Id pregunta: 11570 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El nivel de enlace para la se&ntilde;alizaci&oacute;n por canal D de un enlace RDSI es:";
 choices[89]= new Array();
 choices[89][0] = "V.120";
 choices[89][1] = "LAPB";
 choices[89][2] = "Q.921";
 choices[89][3] = "Q.931";
 answers[89] = choices[89][2];
 units[89] = "109";
 comments[89] = "Id Pregunta: 11570. NULL";


//  Id pregunta: 11643 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En la versi&oacute;n de 2013 del modelo EFQM se introduce como nuevo concepto fundamental:";
 choices[90]= new Array();
 choices[90][0] = "Alcanzar el &eacute;xito mediante el talento de las personas";
 choices[90][1] = "Crear un futuro sostenible";
 choices[90][2] = "Gestionar con agilidad";
 choices[90][3] = "Aprovechar la creatividad y la innovaci&oacute;n";
 answers[90] = choices[90][2];
 units[90] = "92";
 comments[90] = "Id Pregunta: 11643. ";


//  Id pregunta: 11674 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Son plataformas para almacenar y compartir fotos:";
 choices[91]= new Array();
 choices[91][0] = "Flickr, Backpackit y Picasa";
 choices[91][1] = "Photobucket, Picasa y ThisLife";
 choices[91][2] = "ThisLife, Drupal y Flickr";
 choices[91][3] = "Photobucket, Backpackit y Feedreader";
 answers[91] = choices[91][1];
 units[91] = "120";
 comments[91] = "Id Pregunta: 11674. ";


//  Id pregunta: 11680 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale la falsa con respecto al usuario root del sistema operativo UNIX:";
 choices[92]= new Array();
 choices[92][0] = "Su UID es el 0.";
 choices[92][1] = "Recibe el nombre de superusuario.";
 choices[92][2] = "Puede eliminarse por medio del comando rmuser, con los permisos adecuados.";
 choices[92][3] = "Puede fijar prioridades a los procesos.";
 answers[92] = choices[92][2];
 units[92] = "53, 54";
 comments[92] = "Id Pregunta: 11680. ";


//  Id pregunta: 11700 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[93]= new Array();
 choices[93][0] = "Punto a punto";
 choices[93][1] = "Broadcast multi-acceso";
 choices[93][2] = "No broadcast multi-acceso";
 choices[93][3] = "Broadcast punto a multipunto";
 answers[93] = choices[93][2];
 units[93] = "104";
 comments[93] = "Id Pregunta: 11700. NULL";


//  Id pregunta: 11709 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En el &aacute;mbito de la seguridad,&iquest;a qu&eacute; atienden las siglas AAA?";
 choices[94]= new Array();
 choices[94][0] = "Authentication, Authorization and Accounting";
 choices[94][1] = "Acknowledge, Authorization and Accounting";
 choices[94][2] = "Authentication, Authorization and Access";
 choices[94][3] = "Authentication, Approval and Accounting";
 answers[94] = choices[94][0];
 units[94] = "111";
 comments[94] = "Id Pregunta: 11709. NULL";


//  Id pregunta: 11717 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; factor determina en TCP el tama&ntilde;o de ventana? ";
 choices[95]= new Array();
 choices[95][0] = "la cantidad de datos que el destino puede procesar a la vez ";
 choices[95][1] = " el n&uacute;mero de servicios incluidos en el segmento TCP ";
 choices[95][2] = " la cantidad de datos que la fuente es capaz de enviar de una sola vez ";
 choices[95][3] = "la cantidad de datos a transmitir";
 answers[95] = choices[95][0];
 units[95] = "102";
 comments[95] = "Id Pregunta: 11717. NULL";


//  Id pregunta: 11753 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes sistemas no permite una lectura del texto de una p&aacute;gina web?";
 choices[96]= new Array();
 choices[96][0] = "ReadMe";
 choices[96][1] = "ReadSpeaker";
 choices[96][2] = "JAWS";
 choices[96][3] = "WebAnywhere";
 answers[96] = choices[96][0];
 units[96] = "39";
 comments[96] = "Id Pregunta: 11753. ";


//  Id pregunta: 11756 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Para que se utiliza el sistema de multiplexaci&oacute;n CWDM?";
 choices[97]= new Array();
 choices[97][0] = "dar soporte a aplicaciones de redes de &aacute;rea metropolitana, donde se busca no tanto alcanzar largas distancias sino reducci&oacute;n de costes";
 choices[97][1] = "se utiliza para el transporte de grandes cantidades de informaci&oacute;n a larga distancia";
 choices[97][2] = "Actualmente no se utiliza";
 choices[97][3] = "El sistema CWDM es interoperable con DWDM.";
 answers[97] = choices[97][0];
 units[97] = "99";
 comments[97] = "Id Pregunta: 11756. ";


//  Id pregunta: 11757 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes dificultades no tiene que hacer frente el par telef&oacute;nico para la transmisi&oacute;n de alta velocidad de datos?";
 choices[98]= new Array();
 choices[98][0] = "Ruido impulsivo";
 choices[98][1] = "Ruido de fondo";
 choices[98][2] = "Diafon&iacute;a";
 choices[98][3] = "Medio costoso";
 answers[98] = choices[98][3];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11757. ";


//  Id pregunta: 11774 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;C&oacute;mo se llama la unidad encargada de la contrataci&oacute;n centralizada en el &aacute;mbito de la Administraci&oacute;n General del Estado?";
 choices[99]= new Array();
 choices[99][0] = "Subdirecci&oacute;n General de Compras";
 choices[99][1] = "Central de Compras Estatal";
 choices[99][2] = "Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n&nbsp;";
 choices[99][3] = "Direcci&oacute;n General de Patrimonio del Estado";
 answers[99] = choices[99][2];
 units[99] = "41, 24";
 comments[99] = "Id Pregunta: 11774. ";


