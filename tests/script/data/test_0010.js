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

//  Id pregunta: 200 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una fase en un proceso de auditor&iacute;a de la gesti&oacute;n de la seguridad inform&aacute;tica de una instalaci&oacute;n?";
 choices[0]= new Array();
 choices[0][0] = "Evaluaci&oacute;n de la adecuaci&oacute;n de los controles establecidos";
 choices[0][1] = "Realizaci&oacute;n de entrevistas a usuarios";
 choices[0][2] = "Adquisici&oacute;n del conocimiento necesario mediante la identificaci&oacute;n y documentaci&oacute;n del entorno y de la gesti&oacute;n";
 choices[0][3] = "Ejecuci&oacute;n de pruebas sustantivas";
 answers[0] = choices[0][3];
 units[0] = "33";
 comments[0] = "Id Pregunta: 200. Examen TIC MAP B 2004";


//  Id pregunta: 203 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Organismos de normalizaci&oacute;n europeos son";
 choices[1]= new Array();
 choices[1][0] = "CEN";
 choices[1][1] = "OSI";
 choices[1][2] = "IEEE";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][0];
 units[1] = "42";
 comments[1] = "Id Pregunta: 203. ";


//  Id pregunta: 305 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La evoluci&oacute;n de la inform&aacute;tica desde la perspectiva estrat&eacute;gica:";
 choices[2]= new Array();
 choices[2][0] = "Proporciona un marco conceptual que permita a los directores entender el fen&oacute;meno inform&aacute;tico y tomar decisiones de planificaci&oacute;n";
 choices[2][1] = "Permite conocer cu&aacute;les han de ser las caracter&iacute;sticas del directivo que deba dirigir la organizaci&oacute;n y la estructura organizativa adecuada";
 choices[2][2] = "Permite analizar la situaci&oacute;n de un momento concreto";
 choices[2][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[2] = choices[2][0];
 units[2] = "23";
 comments[2] = "Id Pregunta: 305. ";


//  Id pregunta: 541 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Respecto a las pautas de accesibilidad de la  iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[3]= new Array();
 choices[3][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[3][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[3][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[3][3] = "Todas las anteriores afirmaciones son falsas";
 answers[3] = choices[3][1];
 units[3] = "39";
 comments[3] = "Id Pregunta: 541. ";


//  Id pregunta: 559 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Si analizamos un Sistema de Informaci&oacute;n desde una estructuraci&oacute;n vertical, el grueso del proceso de datos se hace a nivel";
 choices[4]= new Array();
 choices[4][0] = "Nivel estrat&eacute;gico.";
 choices[4][1] = "Nivel Operacional";
 choices[4][2] = "Nivel T&aacute;ctico";
 choices[4][3] = "Se realiza dentro de los programas y aplicaciones ";
 answers[4] = choices[4][1];
 units[4] = "21";
 comments[4] = "Id Pregunta: 559. ";


//  Id pregunta: 569 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Qu&eacute; se entiende como conocimiento t&aacute;cito";
 choices[5]= new Array();
 choices[5][0] = "Es un tipo de conocimiento formalizado, necesario para realizar una correcta &quot;gesti&oacute;n del conocimiento&quot; en las organizaciones";
 choices[5][1] = "Es el conocimiento objetivo y racional que puede ser expresado en palabras, oraciones, n&uacute;meros o f&oacute;rmulas, en general independiente de contexto alguno";
 choices[5][2] = "Es conocimiento altamente personal y f&iacute;cilmente transferible o comunicable. ";
 choices[5][3] = "Es aquel que se encuentra en la mente de las personas producto de la experiencia, la sabidur&iacute;a, la creatividad";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 569. ";


//  Id pregunta: 659 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[6]= new Array();
 choices[6][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos";
 choices[6][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte";
 choices[6][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte";
 choices[6][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos";
 answers[6] = choices[6][2];
 units[6] = "36";
 comments[6] = "Id Pregunta: 659. ";


//  Id pregunta: 706 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  DTD se emplea para:";
 choices[7]= new Array();
 choices[7][0] = "Crear documentos XML bien formados";
 choices[7][1] = "Formatear documentos XML";
 choices[7][2] = "Transformar documentos HTML en XML";
 choices[7][3] = "Validar documentos XML";
 answers[7] = choices[7][3];
 units[7] = "69";
 comments[7] = "Id Pregunta: 706. Similar a examen TIC SS A 2004";


//  Id pregunta: 779 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Indique una caracter&iacute;stica del software libre:";
 choices[8]= new Array();
 choices[8][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[8][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[8][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[8][3] = "Todas las respuestas son correctas";
 answers[8] = choices[8][3];
 units[8] = "61";
 comments[8] = "Id Pregunta: 779. ";


//  Id pregunta: 1238 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La principal diferencia entre HTML y XML es que:";
 choices[9]= new Array();
 choices[9][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[9][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[9][2] = "XML es un subconjunto de HTML";
 choices[9][3] = "B y C son ciertas";
 answers[9] = choices[9][1];
 units[9] = "69";
 comments[9] = "Id Pregunta: 1238. NULL";


//  Id pregunta: 1917 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  La palabra clave de Visual Basic.NET &quot;overrides&quot; se utiliza para:";
 choices[10]= new Array();
 choices[10][0] = "Heredar todos los miembros no privados de la clase base";
 choices[10][1] = "Especificar qu&eacute; clase no se puede utilizar como clase base";
 choices[10][2] = "Indicar que el procedimiento reemplaza un procedimiento de la clase base";
 choices[10][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase";
 answers[10] = choices[10][2];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1917. ";


//  Id pregunta: 2111 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  De los siguientes, &iquest;cu&aacute;l es un SGBD orientado a objetos puro?:";
 choices[11]= new Array();
 choices[11][0] = "GEMSTONE";
 choices[11][1] = "ONTOS";
 choices[11][2] = "OBJECT-DB";
 choices[11][3] = "DOMINIQUE";
 answers[11] = choices[11][0];
 units[11] = "82";
 comments[11] = "Id Pregunta: 2111. Ser&aacute; puro OO si el lenguage que usa es puramente OO. Y eso solo lo cumple Smalltalk, de entre esas opciones.";


//  Id pregunta: 2124 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Downsizing&quot;?";
 choices[12]= new Array();
 choices[12][0] = "El downsizing centraliza los procesos en sistemas tipo main-frame.";
 choices[12][1] = "Pretende acercar el proceso all&iacute; donde se va a realizar.";
 choices[12][2] = "Acerca los servidores a los Centros de Proceso de Datos m&aacute;s proximos a la gerencia de la empresa.";
 choices[12][3] = "Siempre que se hace downsizing se pide autorizaci&oacute;n al usuario afectado.";
 answers[12] = choices[12][1];
 units[12] = "90";
 comments[12] = "Id Pregunta: 2124. ";


//  Id pregunta: 2652 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  La actividad DSI-CAL2 se denomina";
 choices[13]= new Array();
 choices[13][0] = "Revisi&oacute;n de la especificaci&oacute;n t&eacute;cnica del plan de prueba";
 choices[13][1] = "Revisi&oacute;n de la verificaci&oacute;n de la arquitectura del sistema";
 choices[13][2] = "Revisi&oacute;n de los requisitos de implantaci&oacute;n";
 choices[13][3] = "ninguna es cirrecta";
 answers[13] = choices[13][0];
 units[13] = "87,88,92";
 comments[13] = "Id Pregunta: 2652. ";


//  Id pregunta: 2750 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Indique de las siguientes cual no es una metodologia de desarrollo orientada a objetos";
 choices[14]= new Array();
 choices[14][0] = "SA/SD";
 choices[14][1] = "OMT";
 choices[14][2] = "Proceso Unificado de modelado";
 choices[14][3] = "Tarjetas de clase";
 answers[14] = choices[14][0];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2750. ";


//  Id pregunta: 3202 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[15]= new Array();
 choices[15][0] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad";
 choices[15][1] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red";
 choices[15][2] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad";
 choices[15][3] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad";
 answers[15] = choices[15][0];
 units[15] = "104";
 comments[15] = "Id Pregunta: 3202. ";


//  Id pregunta: 3293 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; funci&oacute;n principal realiza una PABX?:";
 choices[16]= new Array();
 choices[16][0] = "Conmutaci&oacute;n";
 choices[16][1] = "Recogida de informaci&oacute;n de gesti&oacute;n de red";
 choices[16][2] = "Visualizaci&oacute;n de informaci&oacute;n de gesti&oacute;n de red";
 choices[16][3] = "Consulta bajo demanda de la informaci&oacute;n de gesti&oacute;n de red";
 answers[16] = choices[16][0];
 units[16] = "103";
 comments[16] = "Id Pregunta: 3293. ";


//  Id pregunta: 3520 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En Ethernet, se usa un transceptor (transceiver) para:";
 choices[17]= new Array();
 choices[17][0] = "Para hacer una conexi&oacute;n de red de un dispositivo a un servidor";
 choices[17][1] = "Establecer conexiones entre tarjetas de interfaz de red";
 choices[17][2] = "Convertir se&ntilde;ales recibidas por una puerta para transmitirlas por otra";
 choices[17][3] = "Unir un cable desde una estaci&oacute;n al medio f&iacute;sico que constituye la red";
 answers[17] = choices[17][3];
 units[17] = "102";
 comments[17] = "Id Pregunta: 3520. ";


//  Id pregunta: 3984 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  En relaci&oacute;n con las redes de comunicaciones, &iquest;a qu&eacute; hace referencia el t&eacute;rmino &quot;VLAN trunking&quot;?";
 choices[18]= new Array();
 choices[18][0] = "Es el est&aacute;ndar 802.1Q";
 choices[18][1] = "Se refiere a etiquetar tramas ethernet";
 choices[18][2] = "Al proceso de transmitir m&uacute;ltiples VLAN por un &uacute;nico enlace";
 choices[18][3] = "A la se&ntilde;alizaci&oacute;n de VLAN";
 answers[18] = choices[18][2];
 units[18] = "101, 102";
 comments[18] = "Id Pregunta: 3984. ";


//  Id pregunta: 4138 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[19]= new Array();
 choices[19][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[19][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[19][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[19][3] = "Barrido ICMP (ICMP Scanning)";
 answers[19] = choices[19][2];
 units[19] = "113";
 comments[19] = "Id Pregunta: 4138. ";


//  Id pregunta: 4279 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[20]= new Array();
 choices[20][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[20][1] = "Mediante un trigger.";
 choices[20][2] = "Mediante una constraint de tipo CHECK.";
 choices[20][3] = "No se pueden definir restricciones de ese tipo.";
 answers[20] = choices[20][1];
 units[20] = "58";
 comments[20] = "Id Pregunta: 4279. ";


//  Id pregunta: 4792 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidospueden tener un periodo m&aacute;ximo de validez de:";
 choices[21]= new Array();
 choices[21][0] = "Dos a&ntilde;os";
 choices[21][1] = "Tres a&ntilde;os";
 choices[21][2] = "Cuatro a&ntilde;os";
 choices[21][3] = "Cinco a&ntilde;os";
 answers[21] = choices[21][3];
 units[21] = "74";
 comments[21] = "Id Pregunta: 4792. NULL";


//  Id pregunta: 4874 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[22]= new Array();
 choices[22][0] = "La preferencia local";
 choices[22][1] = "El agregado at&oacute;mico";
 choices[22][2] = "El pr&oacute;ximo salto";
 choices[22][3] = "El agregador";
 answers[22] = choices[22][2];
 units[22] = "102";
 comments[22] = "Id Pregunta: 4874. ";


//  Id pregunta: 4998 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[23]= new Array();
 choices[23][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute";
 choices[23][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentesplataformas";
 choices[23][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware";
 choices[23][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &quot;Java Bytecode&quot;";
 answers[23] = choices[23][0];
 units[23] = "60";
 comments[23] = "Id Pregunta: 4998. Examen TIC A 2007";


//  Id pregunta: 5092 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[24]= new Array();
 choices[24][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[24][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[24][2] = "60 mm de ancho X 58 mm de alto";
 choices[24][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[24] = choices[24][0];
 units[24] = "74";
 comments[24] = "Id Pregunta: 5092. NULL";


//  Id pregunta: 5721 AÃ±o de creación de pregunta: 2009-01-01
 questions[25]= "26)  El XSLT transforma:";
 choices[25]= new Array();
 choices[25][0] = "S&oacute;lo de XML a XML";
 choices[25][1] = "De XML a otro documento";
 choices[25][2] = "S&oacute;lo de XML a HTML";
 choices[25][3] = "De un documento a XML";
 answers[25] = choices[25][1];
 units[25] = "69";
 comments[25] = "Id Pregunta: 5721. MAP 2008 A1";


//  Id pregunta: 5894 AÃ±o de creación de pregunta: 2009-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[26]= new Array();
 choices[26][0] = "JSTL";
 choices[26][1] = "JavaScript";
 choices[26][2] = "JNDI";
 choices[26][3] = "JavaCard";
 answers[26] = choices[26][1];
 units[26] = "60";
 comments[26] = "Id Pregunta: 5894. NULL";


//  Id pregunta: 6076 AÃ±o de creación de pregunta: 2010-01-01
 questions[27]= "28)  &iquest;En cu&aacute;ntos 'niveles de madurez' se agrupan las &aacute;reas de Proceso del modelo de capacidad y madurez CMM?";
 choices[27]= new Array();
 choices[27][0] = "4.";
 choices[27][1] = "5.";
 choices[27][2] = "3.";
 choices[27][3] = "No existe tal concepto.";
 answers[27] = choices[27][1];
 units[27] = "27";
 comments[27] = "Id Pregunta: 6076. ";


//  Id pregunta: 6229 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  El diagrama de Gantt es una herramienta para:";
 choices[28]= new Array();
 choices[28][0] = "Gesti&oacute;n de los recursos";
 choices[28][1] = "Gesti&oacute;n de la calidad";
 choices[28][2] = "Gesti&oacute;n de los riesgos";
 choices[28][3] = "Generaci&oacute;n de gr&aacute;ficas e informes";
 answers[28] = choices[28][0];
 units[28] = "77";
 comments[28] = "Id Pregunta: 6229. TICB-2009, bloque desarrollo";


//  Id pregunta: 6400 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[29]= new Array();
 choices[29][0] = "Ministerio de Defensa";
 choices[29][1] = "Ministerio del Interior";
 choices[29][2] = "Ministerio de Presidencia";
 choices[29][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[29] = choices[29][1];
 units[29] = "30";
 comments[29] = "Id Pregunta: 6400. RD 1553/2005, art&iacute;culo 3";


//  Id pregunta: 6466 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  Indique la respuesta incorrecta sobre la gesti&oacute;n de configuraci&oacute;n.";
 choices[30]= new Array();
 choices[30][0] = "Una l&iacute;nea base es un conjunto de actividades para gestionar el cambio a lo largo del ciclo de vida del software.";
 choices[30][1] = "El impacto de los cambios puede evaluarse a trav&eacute;s de las relaciones entre los objetos de configuraci&oacute;n.";
 choices[30][2] = "La gesti&oacute;n de configuraci&oacute;n del software es una actividad protectiva.";
 choices[30][3] = "Las herramientas de desarrollo pueden formar parte de una l&iacute;nea base.";
 answers[30] = choices[30][0];
 units[30] = "91";
 comments[30] = "Id Pregunta: 6466. Castilla La Mancha 2009";


//  Id pregunta: 8030 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)   La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[31]= new Array();
 choices[31][0] = " La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n.";
 choices[31][1] = " La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n.";
 choices[31][2] = " La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realiza en tiempo de ejecuci&oacute;n.";
 choices[31][3] = " La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realiza en tiempo de compilaci&oacute;n.";
 answers[31] = choices[31][2];
 units[31] = "NULL";
 comments[31] = "Id Pregunta: 8030. Map 2007";


//  Id pregunta: 8195 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  La normativa vigente sobre Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) establece que:";
 choices[32]= new Array();
 choices[32][0] = "Las dimensiones m&iacute;nimas de una ICT incluyen los elementos necesarios para la captaci&oacute;n y adaptaci&oacute;n de las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales y por sat&eacute;lite.";
 choices[32][1] = "Su &aacute;mbito de aplicaci&oacute;n son todos los inmuebles de nueva construcci&oacute;n a partir de su entrada en vigor. ";
 choices[32][2] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Bolet&iacute;n de Instalaci&oacute;n. ";
 choices[32][3] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Certificado de Fin de Obra. ";
 answers[32] = choices[32][2];
 units[32] = "99";
 comments[32] = "Id Pregunta: 8195. Examen TIC A1 2010";


//  Id pregunta: 8229 AÃ±o de creación de pregunta: 2011-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; definido en el Marco Europeo de Interoperabilidad?:";
 choices[33]= new Array();
 choices[33][0] = "Seguridad.";
 choices[33][1] = "Subsidiariedad.";
 choices[33][2] = "Compatibilidad del hardware.";
 choices[33][3] = "Protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[33] = choices[33][2];
 units[33] = "40";
 comments[33] = "Id Pregunta: 8229. Examen TIC A1 2010";


//  Id pregunta: 8308 AÃ±o de creación de pregunta: 2011-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet? ";
 choices[34]= new Array();
 choices[34][0] = "IETF. ";
 choices[34][1] = "ICANN. ";
 choices[34][2] = "IAB. ";
 choices[34][3] = "IRTF.";
 answers[34] = choices[34][2];
 units[34] = "112,42";
 comments[34] = "Id Pregunta: 8308. Examen TIC A2 2010";


//  Id pregunta: 8315 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  La recomendaci&oacute;n para VoIP, definida en 1996 por la UIT es el:";
 choices[35]= new Array();
 choices[35][0] = "H.261. ";
 choices[35][1] = "H.320. ";
 choices[35][2] = "H.221. ";
 choices[35][3] = "H.323.";
 answers[35] = choices[35][3];
 units[35] = "100";
 comments[35] = "Id Pregunta: 8315. Examen TIC A2 2010";


//  Id pregunta: 8334 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[36]= new Array();
 choices[36][0] = "Perfil Jefe de Proyecto.";
 choices[36][1] = "Perfil Consultor. ";
 choices[36][2] = "Perfil Analista.";
 choices[36][3] = "Perfil Programador.";
 answers[36] = choices[36][0];
 units[36] = "86";
 comments[36] = "Id Pregunta: 8334. Examen TIC A2 2010";


//  Id pregunta: 8397 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  Seg&uacute;n el Real Decreto 1720/2007, la conservaci&oacute;n de una copia de respaldo de los datos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, es una medida de protecci&oacute;n de nivel";
 choices[37]= new Array();
 choices[37][0] = "B&aacute;sico";
 choices[37][1] = "Medio";
 choices[37][2] = "Alto";
 choices[37][3] = "No se contempla esta medida de protecci&oacute;n";
 answers[37] = choices[37][2];
 units[37] = "29";
 comments[37] = "Id Pregunta: 8397. Examen TIC A2 2010";


//  Id pregunta: 8549 AÃ±o de creación de pregunta: 2011-01-01
 questions[38]= "39)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[38]= new Array();
 choices[38][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursosdel mismo.";
 choices[38][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permitecompartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes.";
 choices[38][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemasoperativos en una m&aacute;quina.";
 choices[38][3] = "Un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de recursosdel mismo.";
 answers[38] = choices[38][2];
 units[38] = "119";
 comments[38] = "Id Pregunta: 8549. Analista Ayto. Madrid 2010";


//  Id pregunta: 8637 AÃ±o de creación de pregunta: 2011-01-01
 questions[39]= "40)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[39]= new Array();
 choices[39][0] = "No tiene claves.";
 choices[39][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[39][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[39][3] = "Conserva la clave de la entidad fuerte.";
 answers[39] = choices[39][1];
 units[39] = "57, 58";
 comments[39] = "Id Pregunta: 8637. Examen TIC A2 2010 interna";


//  Id pregunta: 8901 AÃ±o de creación de pregunta: 2011-01-01
 questions[40]= "41)  &iquest;cu&aacute;l de los siguientes no es un ERP?";
 choices[40]= new Array();
 choices[40][0] = "SAP";
 choices[40][1] = "Tango";
 choices[40][2] = "Calipso";
 choices[40][3] = "Twister";
 answers[40] = choices[40][3];
 units[40] = "65";
 comments[40] = "Id Pregunta: 8901. ";


//  Id pregunta: 9059 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  Indica cu&aacute;l de los siguientes par&aacute;metros tiene en cuenta el algoritmo de adjudicaci&oacute;n de HSUPA.";
 choices[41]= new Array();
 choices[41][0] = "Ancho de banda disponible en cada estaci&oacute;n";
 choices[41][1] = "Consumo el&eacute;ctrico del Hardware";
 choices[41][2] = "Interferencia en el canal UPLOAD";
 choices[41][3] = "Todos los anteriores.";
 answers[41] = choices[41][3];
 units[41] = "108";
 comments[41] = "Id Pregunta: 9059. NULL";


//  Id pregunta: 9155 AÃ±o de creación de pregunta: 2013-01-01
 questions[42]= "43)  En relaci&oacute;n a las gu&iacute;as AGR de la AICC sobre eLearning, se&ntilde;ale la FALSA:";
 choices[42]= new Array();
 choices[42][0] = "La gu&iacute;a AGR007 se refiere al intercambio de cursos entre plataformas";
 choices[42][1] = "La gu&iacute;a AGR010 est&aacute; dedicada a la interoperabilidad entre plataformas web de formaci&oacute;n y sus cursos";
 choices[42][2] = "La gu&iacute;a AGR008 ofrece recomendaciones acerca de los videos digitales";
 choices[42][3] = "La gu&iacute;a AGR009 contiene las recomendaciones referentes a los archivos de audio digital";
 answers[42] = choices[42][3];
 units[42] = "66";
 comments[42] = "Id Pregunta: 9155. ";


//  Id pregunta: 9182 AÃ±o de creación de pregunta: 2013-01-01
 questions[43]= "44)  La transformaci&oacute;n hit or miss (o a&ntilde;adir o eliminar) aplicada al procesamiento de im&aacute;genes se utiliza para:";
 choices[43]= new Array();
 choices[43][0] = "Dividir una imagen en regiones a partir de diferencias crom&aacute;ticas";
 choices[43][1] = "Detectar regiones con una forma espec&iacute;fica";
 choices[43][2] = "Calcular la apertura y clausura del contorno de un objeto";
 choices[43][3] = "No es posible aplicar hit or miss al procesamiento de im&aacute;genes";
 answers[43] = choices[43][1];
 units[43] = "93";
 comments[43] = "Id Pregunta: 9182. NULL";


//  Id pregunta: 9206 AÃ±o de creación de pregunta: 2013-01-01
 questions[44]= "45)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[44]= new Array();
 choices[44][0] = "XcML";
 choices[44][1] = "XrML";
 choices[44][2] = "XMCL";
 choices[44][3] = "XsML";
 answers[44] = choices[44][1];
 units[44] = "37";
 comments[44] = "Id Pregunta: 9206. ";


//  Id pregunta: 9339 AÃ±o de creación de pregunta: 2013-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[45]= new Array();
 choices[45][0] = "Dise&ntilde;o Arquitectura";
 choices[45][1] = "Dise&ntilde;o Preliminar";
 choices[45][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[45][3] = "Post-Arquitectura";
 answers[45] = choices[45][0];
 units[45] = "88";
 comments[45] = "Id Pregunta: 9339. NULL";


//  Id pregunta: 9347 AÃ±o de creación de pregunta: 2013-01-01
 questions[46]= "47)  La red S-TESTA ";
 choices[46]= new Array();
 choices[46][0] = "Es accesible directamente desde cada Ministerio.";
 choices[46][1] = "El EuroDomain es un Dominio Local de servicios centralizados.";
 choices[46][2] = "Algunas aplicaciones que usan sus servicios son OLAF, DG TREN o DG FISH.";
 choices[46][3] = "Da acceso y opera a trav&eacute;s de Internet.";
 answers[46] = choices[46][2];
 units[46] = "103";
 comments[46] = "Id Pregunta: 9347. http://ec.europa.eu/isa/";


//  Id pregunta: 9376 AÃ±o de creación de pregunta: 2013-01-01
 questions[47]= "48)  En la Teor&iacute;a Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo obtiene como resultado un subconjunto de alternativas aceptables";
 choices[47]= new Array();
 choices[47][0] = "M&eacute;todos de concordancia";
 choices[47][1] = "M&eacute;todos basados en permutaciones";
 choices[47][2] = "M&eacute;todos basados en la ponderaci&oacute;n lineal";
 choices[47][3] = "M&eacute;todo T.O.P.S.I.S.";
 answers[47] = choices[47][0];
 units[47] = "34";
 comments[47] = "Id Pregunta: 9376. ";


//  Id pregunta: 9600 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  Marcar la respuesta correcta:";
 choices[48]= new Array();
 choices[48][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[48][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[48][2] = " El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[48][3] = "Todas las anteriores son incorrectas";
 answers[48] = choices[48][1];
 units[48] = "53";
 comments[48] = "Id Pregunta: 9600. ";


//  Id pregunta: 9718 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[49]= new Array();
 choices[49][0] = "CORBA es un tipo de middleware.";
 choices[49][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[49][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[49][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[49] = choices[49][0];
 units[49] = "51";
 comments[49] = "Id Pregunta: 9718. Examen TIC-A1 2013";


//  Id pregunta: 9795 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  Se&ntilde;ale de los siguientes el que NO es un lector de feeds RSS:";
 choices[50]= new Array();
 choices[50][0] = "Digg";
 choices[50][1] = "Feedly";
 choices[50][2] = "Mephisto";
 choices[50][3] = "Netvibes ";
 answers[50] = choices[50][2];
 units[50] = "120";
 comments[50] = "Id Pregunta: 9795. Examen TIC A2 2013";


//  Id pregunta: 9845 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  El algoritmo RSA es un algoritmo:";
 choices[51]= new Array();
 choices[51][0] = "De triple clave.";
 choices[51][1] = "Asim&eacute;trico.";
 choices[51][2] = "De clave privada.";
 choices[51][3] = "Sim&eacute;trico.";
 answers[51] = choices[51][1];
 units[51] = "111";
 comments[51] = "Id Pregunta: 9845. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9890 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  De entre los siguientes procedimientos de b&uacute;squeda, &iquest;cu&aacute;l utiliza un m&eacute;todo heur&iacute;stico?";
 choices[52]= new Array();
 choices[52][0] = "B&uacute;squeda primero el mejor.";
 choices[52][1] = "B&uacute;squeda bidireccional";
 choices[52][2] = "B&uacute;squeda primero en anchura";
 choices[52][3] = "B&uacute;squeda primero en profundidad";
 answers[52] = choices[52][0];
 units[52] = "63";
 comments[52] = "Id Pregunta: 9890. TIC A1, Examen 2013";


//  Id pregunta: 9927 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  Entre los conceptos fundamentales del modelo OSI no est&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "Interfaz: normas de comunicaci&oacute;n entre capas.";
 choices[53][1] = "Primitivas de servicio: llamadas entrantes o salientes en cada una de las capas.";
 choices[53][2] = "Protocolo: conjunto de reglas organizadas y convenidas entre los participantes en una comunicaci&oacute;n.";
 choices[53][3] = "Servicio: cada capa recibe servicios de las entidades que se encuentran sobre ella y presta servicios a las entidades que se encuentran debajo.";
 answers[53] = choices[53][3];
 units[53] = "100";
 comments[53] = "Id Pregunta: 9927. NULL";


//  Id pregunta: 9940 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  La taxonom&iacute;a de Flynn:";
 choices[54]= new Array();
 choices[54][0] = "se ha revisado recientemente para incluir los sistemas Big Data.";
 choices[54][1] = "es una clasificaci&oacute;n de computadores en funci&oacute;n de su arquitectura.";
 choices[54][2] = "es la base de la taxonom&iacute;a de Bloom.";
 choices[54][3] = "se propuso con motivo de los primeros PC de IBM.";
 answers[54] = choices[54][1];
 units[54] = "45";
 comments[54] = "Id Pregunta: 9940. TIC A1, Examen 2013";


//  Id pregunta: 9941 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  El formato MP3:";
 choices[55]= new Array();
 choices[55][0] = "fue dise&ntilde;ado en 1984 en el Instituto Karlsruher.";
 choices[55][1] = "utiliza el algoritmo de compresi&oacute;n Lempel-Ziv-Welch (LZW).";
 choices[55][2] = "fue aprobado por el &ldquo;Motion Picture Experts Group&rdquo; en 1992.";
 choices[55][3] = "permite compresiones del orden de 10 a 1 respecto al formato CD, conp&eacute;rdida de informaci&oacute;n.";
 answers[55] = choices[55][3];
 units[55] = "117";
 comments[55] = "Id Pregunta: 9941. TIC A1, Examen 2013";


//  Id pregunta: 9944 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[56]= new Array();
 choices[56][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta. ";
 choices[56][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[56][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public. ";
 choices[56][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto. ";
 answers[56] = choices[56][0];
 units[56] = "82, 60";
 comments[56] = "Id Pregunta: 9944. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9946 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)   El &quot;nivel de definici&oacute;n&quot; del modelo CMM (Capability Maturity Model) se caracteriza por:";
 choices[57]= new Array();
 choices[57][0] = "Proceso poco documentado. ";
 choices[57][1] = "Proceso de desarrollo por definir.";
 choices[57][2] = "Proceso de desarrollo integrado en la organizaci&oacute;n.";
 choices[57][3] = "Control cuantitativo de productos";
 answers[57] = choices[57][2];
 units[57] = "87";
 comments[57] = "Id Pregunta: 9946. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9954 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  La actividad EVS-GC 1 de la interface de Gesti&oacute;n de la Configuraci&oacute;n (GC) de M&eacute;trica v3 recibe entre sus entradas un producto resultante de la actividad:";
 choices[58]= new Array();
 choices[58][0] = "EVS 4 - Estudio de Alternativas de Soluci&oacute;n";
 choices[58][1] = "EVS 5 - Valoraci&oacute;n de las Alternativas.";
 choices[58][2] = "EVS 3 - Definici&oacute;n de Requisitos del Sistema.";
 choices[58][3] = "EVS 1 - Establecimiento del Alcance del Sistema. ";
 answers[58] = choices[58][2];
 units[58] = "86";
 comments[58] = "Id Pregunta: 9954. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9958 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[59]= new Array();
 choices[59][0] = "La persistencia";
 choices[59][1] = "Los procesos de transformaci&oacute;n.";
 choices[59][2] = "El flujo de la informaci&oacute;n.";
 choices[59][3] = "La herencia";
 answers[59] = choices[59][3];
 units[59] = "81";
 comments[59] = "Id Pregunta: 9958. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9960 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[60]= new Array();
 choices[60][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[60][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[60][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[60][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[60] = choices[60][2];
 units[60] = "68,71";
 comments[60] = "Id Pregunta: 9960. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9983 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[61]= new Array();
 choices[61][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[61][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[61][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[61][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[61] = choices[61][1];
 units[61] = "59,115";
 comments[61] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10085 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado si se conocen bien todos los requisitos de partida?";
 choices[62]= new Array();
 choices[62][0] = "R&aacute;pido";
 choices[62][1] = "Evolutivo";
 choices[62][2] = "Incremental";
 choices[62][3] = "Cualquiera de los anteriores";
 answers[62] = choices[62][2];
 units[62] = "76";
 comments[62] = "Id Pregunta: 10085. NULL";


//  Id pregunta: 10094 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l NO se considera una t&eacute;cnica general del an&aacute;lisis de requisitos?";
 choices[63]= new Array();
 choices[63][0] = "Abstracci&oacute;n";
 choices[63][1] = "Proyecci&oacute;n";
 choices[63][2] = "Partici&oacute;n";
 choices[63][3] = "Todas se consideran t&eacute;cnicas generales";
 answers[63] = choices[63][3];
 units[63] = "78";
 comments[63] = "Id Pregunta: 10094. NULL";


//  Id pregunta: 10131 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  La operaci&oacute;n de SNMP GetBulk est&aacute; disponible desde:";
 choices[64]= new Array();
 choices[64][0] = "SNMPv1";
 choices[64][1] = "SNMPv2";
 choices[64][2] = "SNMPv3";
 choices[64][3] = "SNMPv4";
 answers[64] = choices[64][1];
 units[64] = "104";
 comments[64] = "Id Pregunta: 10131. ";


//  Id pregunta: 10194 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Para el reconocimiento de las vocales se calculan";
 choices[65]= new Array();
 choices[65][0] = "los al&oacute;fonos";
 choices[65][1] = "el pitch";
 choices[65][2] = "los formantes";
 choices[65][3] = "el cepstrum";
 answers[65] = choices[65][2];
 units[65] = "94";
 comments[65] = "Id Pregunta: 10194. ";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[66]= new Array();
 choices[66][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[66][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[66][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[66][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[66] = choices[66][0];
 units[66] = "61";
 comments[66] = "Id Pregunta: 10244. ";


//  Id pregunta: 10316 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[67]= new Array();
 choices[67][0] = "4 bytes.";
 choices[67][1] = "6 bytes.";
 choices[67][2] = "12 bytes.";
 choices[67][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[67] = choices[67][0];
 units[67] = "101";
 comments[67] = "Id Pregunta: 10316. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10340 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual, el canon por copia privada se encuentra actualmente regulado por:";
 choices[68]= new Array();
 choices[68][0] = "Ley 23/2006";
 choices[68][1] = "Real Decreto Legislativo 1/1996";
 choices[68][2] = "Ley 2/2011";
 choices[68][3] = "Real Decreto 1657/2012";
 answers[68] = choices[68][3];
 units[68] = "36";
 comments[68] = "Id Pregunta: 10340. Actualmente, el procedimiento de pago de la compensaci&oacute;n equitativa por copia privada se realiza con cargo a los Presupuestos Generales del Estado";


//  Id pregunta: 10360 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[69]= new Array();
 choices[69][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la SETSI.";
 choices[69][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[69][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[69][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la SETSI y AENOR";
 answers[69] = choices[69][1];
 units[69] = "42";
 comments[69] = "Id Pregunta: 10360. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo";


//  Id pregunta: 10368 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a demorar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[70]= new Array();
 choices[70][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[70][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[70][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[70][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[70] = choices[70][3];
 units[70] = "28";
 comments[70] = "Id Pregunta: 10368. ";


//  Id pregunta: 10511 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[71]= new Array();
 choices[71][0] = "I.413";
 choices[71][1] = "I.411";
 choices[71][2] = "I.431";
 choices[71][3] = "I.314";
 answers[71] = choices[71][0];
 units[71] = "109";
 comments[71] = "Id Pregunta: 10511. NULL";


//  Id pregunta: 10569 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  La probabilidad de explosi&oacute;n por escape de gas en una f&aacute;brica es de 0'0001. Si llega a producirse se sabe que morir&aacute;n al menos diez empleados y se producir&aacute;n p&eacute;rdidas materiales por al menos de 100 millones de euros. &iquest;Cu&aacute;l es riesgo cuantitativo asociado a la amenaza de explosi&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "10000 euros";
 choices[72][1] = "100 millones de euros";
 choices[72][2] = "No se puede valorar porque la p&eacute;rdida de vidas humanas no es cuantificable (salvo para las compa&ntilde;&iacute;as de seguros)";
 choices[72][3] = "Muy alto";
 answers[72] = choices[72][2];
 units[72] = "33";
 comments[72] = "Id Pregunta: 10569. ";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[73]= new Array();
 choices[73][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[73][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[73][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[73][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[73] = choices[73][2];
 units[73] = "29";
 comments[73] = "Id Pregunta: 10593. ";


//  Id pregunta: 10601 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  En materia de accesibilidad, las Administraciones P&uacute;blicas deben cumplir:";
 choices[74]= new Array();
 choices[74][0] = "El Real Decreto 1494/2007";
 choices[74][1] = "Los niveles A y AA de la norma UNE 139803:2012";
 choices[74][2] = "Los niveles A y AA de las WCAG 2.0";
 choices[74][3] = "Todas las anteriores.";
 answers[74] = choices[74][3];
 units[74] = "39";
 comments[74] = "Id Pregunta: 10601. ";


//  Id pregunta: 10631 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  El proceso de M&eacute;trica v3 &ldquo;Planificaci&oacute;n de los Sistemas de Informaci&oacute;n&rdquo; (PSI) tiene como objetivo:";
 choices[75]= new Array();
 choices[75][0] = "Obtener una especificaci&oacute;n detallada del sistema de informaci&oacute;n.";
 choices[75][1] = "Proponer una arquitectura de la informaci&oacute;n a alto nivel.";
 choices[75][2] = "Analizar las necesidades del sistema y proponer una soluci&oacute;n a corto plazo.";
 choices[75][3] = "Obtener una nueva versi&oacute;n de un sistema de informaci&oacute;n preexistente.";
 answers[75] = choices[75][1];
 units[75] = "86";
 comments[75] = "Id Pregunta: 10631. ";


//  Id pregunta: 10639 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  En Scrum, el prop&oacute;sito de la retrospectiva del Sprint es:";
 choices[76]= new Array();
 choices[76][0] = "Revisar el estado del producto que se ha desarrollado durante el Sprint.";
 choices[76][1] = "Realizar una mejora continua del proceso.";
 choices[76][2] = "Que el Scrum Master comunique al equipo lo que deben mejorar para el siguiente Sprint.";
 choices[76][3] = "Asignar las tareas del siguiente Sprint a los diferentes miembros del equipo.";
 answers[76] = choices[76][1];
 units[76] = "79";
 comments[76] = "Id Pregunta: 10639. ";


//  Id pregunta: 10679 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[77]= new Array();
 choices[77][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[77][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[77][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[77][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[77] = choices[77][1];
 units[77] = "30";
 comments[77] = "Id Pregunta: 10679. ";


//  Id pregunta: 10686 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[78]= new Array();
 choices[78][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[78][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[78][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y  desistir de acciones.";
 choices[78][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[78] = choices[78][1];
 units[78] = "30";
 comments[78] = "Id Pregunta: 10686. ";


//  Id pregunta: 10787 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[79]= new Array();
 choices[79][0] = "ART.";
 choices[79][1] = "Dalvik.";
 choices[79][2] = "Java VM. ";
 choices[79][3] = "APK.";
 answers[79] = choices[79][1];
 units[79] = "52";
 comments[79] = "Id Pregunta: 10787. Examen GSI 2014";


//  Id pregunta: 10803 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Se&ntilde;ale qu&eacute; n&uacute;mero de puerto deber&iacute;a usarse si se quiere configurar un servicio para la autenticaci&oacute;n de redes Kerberos:";
 choices[80]= new Array();
 choices[80][0] = "88";
 choices[80][1] = "42";
 choices[80][2] = "74";
 choices[80][3] = "105";
 answers[80] = choices[80][0];
 units[80] = "111";
 comments[80] = "Id Pregunta: 10803. Examen GSI 2014";


//  Id pregunta: 10832 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el proceso de normalizaci&oacute;n del Modelo Relacional es cierta?";
 choices[81]= new Array();
 choices[81][0] = "Existen s&oacute;lo un total de 3 Formas Normales: 1FN, 2FN y 3FN.";
 choices[81][1] = "Una tabla est&aacute; en 2FN cuando se demuestra que existe dependencia funcional del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[81][2] = "Una tabla est&aacute; en 1FN cuando se demuestra que existe dependencia funcional completa del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[81][3] = "Una tabla que est&aacute; en 1FN tiene el m&aacute;ximo grado de normalizaci&oacute;n y, por tanto, cumple tambi&eacute;n la Segunda y Tercera Forma Normal.";
 answers[81] = choices[81][1];
 units[81] = "80";
 comments[81] = "Id Pregunta: 10832. Examen GSI 2014";


//  Id pregunta: 10887 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[82]= new Array();
 choices[82][0] = "OCSP";
 choices[82][1] = "CRL";
 choices[82][2] = "PKCS#10";
 choices[82][3] = "HTTPS";
 answers[82] = choices[82][0];
 units[82] = "73, 74";
 comments[82] = "Id Pregunta: 10887. Examen GSI 2014";


//  Id pregunta: 10919 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[83]= new Array();
 choices[83][0] = "OM2";
 choices[83][1] = "OM3";
 choices[83][2] = "OM4";
 choices[83][3] = "OM5";
 answers[83] = choices[83][2];
 units[83] = "103, 107";
 comments[83] = "Id Pregunta: 10919. Examen GSI 2014";


//  Id pregunta: 11036 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l no es un operador b&aacute;sico del &Aacute;lgebra Relacional?";
 choices[84]= new Array();
 choices[84][0] = "Intersecci&oacute;n";
 choices[84][1] = "Uni&oacute;n";
 choices[84][2] = "Proyecci&oacute;n";
 choices[84][3] = "Diferencia";
 answers[84] = choices[84][0];
 units[84] = "58";
 comments[84] = "Id Pregunta: 11036. ";


//  Id pregunta: 11218 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[85]= new Array();
 choices[85][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[85][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[85][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[85][3] = "Todas son verdaderas.";
 answers[85] = choices[85][3];
 units[85] = "60";
 comments[85] = "Id Pregunta: 11218. ";


//  Id pregunta: 11270 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  En Cobitv5:";
 choices[86]= new Array();
 choices[86][0] = "La cascada de metas es el mecanismo para traducir las necesidades de las partes interesadas en metas corporativas, metas relacionadas con las TI y metas catalizadoras.";
 choices[86][1] = "Las metas corporativas han sido desarrolladas utilizando las dimensiones del cuadro de mando integral (CMI).";
 choices[86][2] = "Los tres objetivos principales de Gobierno a considerar son: realizaci&oacute;n de beneficios, optimizaci&oacute;n de riesgos y optimizaci&oacute;n de recursos.";
 choices[86][3] = "Todas son correctas.";
 answers[86] = choices[86][3];
 units[86] = "98";
 comments[86] = "Id Pregunta: 11270. ";


//  Id pregunta: 11354 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En cuanto a la segmentaci&oacute;n de dominios en una red se&ntilde;ale la verdadera";
 choices[87]= new Array();
 choices[87][0] = "Un switch segmenta dominios de colisi&oacute;n y de broadcast";
 choices[87][1] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n de manera f&iacute;sica y de broadcast de manera l&oacute;gica";
 choices[87][2] = "Un router segmenta dominios de broadcast de manera f&iacute;sica";
 choices[87][3] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n y de broadcast de manera f&iacute;sica";
 answers[87] = choices[87][2];
 units[87] = "102";
 comments[87] = "Id Pregunta: 11354. ";


//  Id pregunta: 11358 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el objetivo principal del contenido del Cat&aacute;logo de Servicios?";
 choices[88]= new Array();
 choices[88][0] = "Ofrecer informaci&oacute;n sobre todos los servicios";
 choices[88][1] = "Ofrecer informaci&oacute;n confiable de los servicios operativos y en desarrollo";
 choices[88][2] = "Tener informaci&oacute;n sobre la infraestructura";
 choices[88][3] = "Analizar inversiones en servicios";
 answers[88] = choices[88][1];
 units[88] = "98";
 comments[88] = "Id Pregunta: 11358. ";


//  Id pregunta: 11532 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En .NET, la biblioteca de clases ";
 choices[89]= new Array();
 choices[89][0] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio.";
 choices[89][1] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio y acceso a datos.";
 choices[89][2] = "Es &uacute;nica para todos los lenguajes de la plataforma.";
 choices[89][3] = "Todas las anteriores son falsas.";
 answers[89] = choices[89][2];
 units[89] = "59";
 comments[89] = "Id Pregunta: 11532. NULL";


//  Id pregunta: 11609 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El n&uacute;mero m&iacute;nimo de discos necesarios en RAID 6 es:";
 choices[90]= new Array();
 choices[90][0] = "2";
 choices[90][1] = "3";
 choices[90][2] = "4";
 choices[90][3] = "5";
 answers[90] = choices[90][2];
 units[90] = "48";
 comments[90] = "Id Pregunta: 11609. ";


//  Id pregunta: 11625 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  RSS son las siglas de:";
 choices[91]= new Array();
 choices[91][0] = "Really Simple Sindication";
 choices[91][1] = "Rich Simple Summary";
 choices[91][2] = "RDF Simple Summary";
 choices[91][3] = "Todas las anteriores son correctas";
 answers[91] = choices[91][0];
 units[91] = "69";
 comments[91] = "Id Pregunta: 11625. ";


//  Id pregunta: 11626 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 25/2013:";
 choices[92]= new Array();
 choices[92][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[92][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[92][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[92][3] = "Todas las anteriores son correctas";
 answers[92] = choices[92][3];
 units[92] = "70";
 comments[92] = "Id Pregunta: 11626. ";


//  Id pregunta: 11642 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En el modelo EFQM, de los siguientes criterios, el que tiene un mayor peso en la puntuaci&oacute;n es:";
 choices[93]= new Array();
 choices[93][0] = "Resultados en los clientes";
 choices[93][1] = "Resultados en la sociedad";
 choices[93][2] = "Resultados en las personas";
 choices[93][3] = "Todos tienen el mismo peso";
 answers[93] = choices[93][0];
 units[93] = "92";
 comments[93] = "Id Pregunta: 11642. ";


//  Id pregunta: 11659 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En UMTS, la banda ascendente FDD usa el rango de frecuencias:";
 choices[94]= new Array();
 choices[94][0] = "1920 MHz a 1980 MHz";
 choices[94][1] = "1980 MHz a 2010 MHz";
 choices[94][2] = "2110 MHz a 2170 MHz";
 choices[94][3] = "2170 MHz a 2200 MHz";
 answers[94] = choices[94][0];
 units[94] = "108";
 comments[94] = "Id Pregunta: 11659. ";


//  Id pregunta: 11664 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El mandato del Presidente de la CNMC tiene una duraci&oacute;n de:";
 choices[95]= new Array();
 choices[95][0] = "4 a&ntilde;os no renovables";
 choices[95][1] = "4 a&ntilde;os renovables";
 choices[95][2] = "6 a&ntilde;os no renovables";
 choices[95][3] = "6 a&ntilde;os renovables";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11664. ";


//  Id pregunta: 11671 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las gu&iacute;as de mejores pr&aacute;ticas de Java se denominan:";
 choices[96]= new Array();
 choices[96][0] = "Hibernate";
 choices[96][1] = "Spring";
 choices[96][2] = "BluePrints";
 choices[96][3] = "Struts";
 answers[96] = choices[96][2];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11671. ";


//  Id pregunta: 11714 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;les de los siguientes protocolos no incluye la suite PPP?";
 choices[97]= new Array();
 choices[97][0] = "LAPB";
 choices[97][1] = "HDLC";
 choices[97][2] = "LCP";
 choices[97][3] = "SDLC";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11714. NULL";


//  Id pregunta: 11740 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cuando aumenta el n&uacute;mero de colisiones en una red LAN porque se ha aumentado el tr&aacute;fico en la misma, &iquest;qu&eacute; es necesario aplicar?:";
 choices[98]= new Array();
 choices[98][0] = "Segmentaci&oacute;n de la LAN";
 choices[98][1] = "Cambio de forma de conexi&oacute;n";
 choices[98][2] = "Cambio de troncal";
 choices[98][3] = "Cambio de Sistema de cableado estructurado";
 answers[98] = choices[98][0];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11740. ";


//  Id pregunta: 11770 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones no podr&aacute; informar un expediente de contrataci&oacute;n si la documentaci&oacute;n del mismo no incluye: ";
 choices[99]= new Array();
 choices[99][0] = "Presupuesto, objeto y justificaci&oacute;n de la necesidad&nbsp;";
 choices[99][1] = "Presupuesto, objeto y certificado de exclusividad";
 choices[99][2] = "Pliego de cl&aacute;usulas administrativas y memoria econ&oacute;mica";
 choices[99][3] = "Objeto, justificaci&oacute;n temporal y ratio perfiles/horas";
 answers[99] = choices[99][0];
 units[99] = "24, 41";
 comments[99] = "Id Pregunta: 11770. ";


