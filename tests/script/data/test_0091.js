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

//  Id pregunta: 24 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denomina la posibilidad de funcionamiento en distintas plataformas sin necesidad de cambios  en el aplicativo?:";
 choices[0]= new Array();
 choices[0][0] = "Interoperatividad";
 choices[0][1] = "Compatibilidad";
 choices[0][2] = "Portabilidad";
 choices[0][3] = "Normalizaci&oacute;n";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 24. ";


//  Id pregunta: 123 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  EIA es una organizaci&oacute;n que:";
 choices[1]= new Array();
 choices[1][0] = "Elabor&oacute; el est&aacute;ndar EIA232 (o RS-232)";
 choices[1][1] = "Es una asociaci&oacute;n europea de industrias electr&oacute;nicas";
 choices[1][2] = "Significa Electronic International Association";
 choices[1][3] = "Est&aacute; dedicada al desarrollo de est&aacute;ndares en Europa que se aplican a las tecnolog&iacute;as de ordenadores y telecomunicaciones";
 answers[1] = choices[1][0];
 units[1] = "42";
 comments[1] = "Id Pregunta: 123. ";


//  Id pregunta: 200 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una fase en un proceso de auditor&iacute;a de la gesti&oacute;n de la seguridad inform&aacute;tica de una instalaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Evaluaci&oacute;n de la adecuaci&oacute;n de los controles establecidos";
 choices[2][1] = "Realizaci&oacute;n de entrevistas a usuarios";
 choices[2][2] = "Adquisici&oacute;n del conocimiento necesario mediante la identificaci&oacute;n y documentaci&oacute;n del entorno y de la gesti&oacute;n";
 choices[2][3] = "Ejecuci&oacute;n de pruebas sustantivas";
 answers[2] = choices[2][3];
 units[2] = "33";
 comments[2] = "Id Pregunta: 200. Examen TIC MAP B 2004";


//  Id pregunta: 227 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En las alternativas de decisi&oacute;n respecto al equipamiento HW y SW: ";
 choices[3]= new Array();
 choices[3][0] = "En la licencia de red, la cesi&oacute;n de uso del producto se extiende a todos o parte de los usuarios conectados a una red de &aacute;rea local";
 choices[3][1] = "La licencia flotante se refiere a la determinaci&oacute;n de la facturaci&oacute;n en funci&oacute;n del n&uacute;mero de usuarios simult&aacute;neos autorizados al uso del producto";
 choices[3][2] = "Las opciones a) y b) son correctas";
 choices[3][3] = "Las opciones a) y b) no son correctas";
 answers[3] = choices[3][2];
 units[3] = "35";
 comments[3] = "Id Pregunta: 227. NULL";


//  Id pregunta: 242 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En un sistema de informaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "En el nivel t&aacute;ctico se implementan las decisiones mediante un procedimiento automatizado";
 choices[4][1] = "En el nivel operacional se realiza el grueso del tratamiento de los datos";
 choices[4][2] = "En el nivel estrat&eacute;gico las decisiones dependen de fuentes de informaci&oacute;n externa";
 choices[4][3] = "Todas las anteriores son correctas";
 answers[4] = choices[4][3];
 units[4] = "21";
 comments[4] = "Id Pregunta: 242. ";


//  Id pregunta: 307 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La fidelidad con que un modelo representa la realidad depende fundamentalmente de:";
 choices[5]= new Array();
 choices[5][0] = "La precisi&oacute;n de los valores previstos de variables incontrolables";
 choices[5][1] = "La calidad de los datos";
 choices[5][2] = "El tratamiento de la incertidumbre";
 choices[5][3] = "Todas las respuestas anteriores son correctas";
 answers[5] = choices[5][3];
 units[5] = "34";
 comments[5] = "Id Pregunta: 307. ";


//  Id pregunta: 425 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n el modelo de Donovan sobre la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, un tipo de organizaci&oacute;n en el que se descentralizan HW y decisiones sobre inform&aacute;tica pero no as&iacute; la facultad de desarrollar aplicaciones se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Mano amiga";
 choices[6][1] = "Gran hermano";
 choices[6][2] = "Perro vigilante";
 choices[6][3] = "Semiacoplada";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 425. donovan - nolan";


//  Id pregunta: 523 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n debe estar segregada de la de administrador de sistemas?";
 choices[7]= new Array();
 choices[7][0] = "Administrador de seguridad";
 choices[7][1] = "Administrador de red";
 choices[7][2] = "Aseguramiento de calidad";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][2];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 523. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 595 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Los ficheros de titularidad p&uacute;blica se encuentran regulados en:";
 choices[8]= new Array();
 choices[8][0] = "En el cap&iacute;tulo I del T&iacute;tulo IV de la LOPD";
 choices[8][1] = "En el cap&iacute;tulo II del T&iacute;tulo IV de la LOPD";
 choices[8][2] = "En el cap&iacute;tulo I del T&iacute;tulo VI de la LOPD";
 choices[8][3] = "En el cap&iacute;tulo II del T&iacute;tulo VI de la LOPD";
 answers[8] = choices[8][0];
 units[8] = "29";
 comments[8] = "Id Pregunta: 595. ";


//  Id pregunta: 604 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  La Agencia de Protecci&oacute;n de Datos se rige:";
 choices[9]= new Array();
 choices[9][0] = "Por el T&iacute;tulo V de la LOPD y por el Real Decreto 156/1999, por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[9][1] = "Por el T&iacute;tulo VI de la LOPD y por el Real Decreto 428/1993 por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[9][2] = "Por el T&iacute;tulo V de la LOPD y por el Real Decreto 994/1999 por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[9][3] = "Por el T&iacute;tulo VI de la LOPD y por el Real Decreto 994/1999, por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 answers[9] = choices[9][1];
 units[9] = "29";
 comments[9] = "Id Pregunta: 604. ";


//  Id pregunta: 607 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  La aprobaci&oacute;n del Estatuto de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se realiz&oacute; a trav&eacute;s de:";
 choices[10]= new Array();
 choices[10][0] = "R.D. 156/1996 de 2 de Febrero .";
 choices[10][1] = "R.D. 428/1993 de 26 de Marzo .";
 choices[10][2] = "La LOFAGE.";
 choices[10][3] = "La Ley 30/1992 de 26 de Noviembre.";
 answers[10] = choices[10][1];
 units[10] = "29";
 comments[10] = "Id Pregunta: 607. ";


//  Id pregunta: 701 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[11]= new Array();
 choices[11][0] = "Firma electr&oacute;nica avanzada";
 choices[11][1] = "Firma electr&oacute;nica reconocida";
 choices[11][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][1];
 units[11] = "30";
 comments[11] = "Id Pregunta: 701. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";


//  Id pregunta: 914 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[12]= new Array();
 choices[12][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[12][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[12][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[12][3] = "No hay diferencia; son la misma arquitectura";
 answers[12] = choices[12][0];
 units[12] = "50";
 comments[12] = "Id Pregunta: 914. ";


//  Id pregunta: 918 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es el abandonware?:";
 choices[13]= new Array();
 choices[13][0] = "Consiste en retomar proyectos software interesantes, que fueron abandonados en su momento por falta de rentabilidad";
 choices[13][1] = "Consiste en recopilar SW ya anticuado, cuyo soporte ha sido abandonado por la empresa/persona creadora, y que normalmente podr&aacute; obtenerse gratuitamente al estar descatalogado";
 choices[13][2] = "Consiste en estudiar el SW que circula por la red &quot;sin due&ntilde;o&quot; y que carece de las correspondientes licencias de distribuci&oacute;n";
 choices[13][3] = "Nada de lo anterior es cierto";
 answers[13] = choices[13][1];
 units[13] = "61";
 comments[13] = "Id Pregunta: 918. ";


//  Id pregunta: 1035 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[14]= new Array();
 choices[14][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[14][1] = "Interfaz lenguaje de datos de usuario";
 choices[14][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[14][3] = "Interfaz lenguaje de datos interno";
 answers[14] = choices[14][2];
 units[14] = "57";
 comments[14] = "Id Pregunta: 1035. ";


//  Id pregunta: 1041 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El objetivo principal de la miner&iacute;a de datos es:";
 choices[15]= new Array();
 choices[15][0] = "Descubrir el conocimiento oculto en grandes vol&uacute;menes de datos y expresarlo de forma inteligible.";
 choices[15][1] = "Reorganizar adecuadamente los grandes vol&uacute;menes de datos.";
 choices[15][2] = "Tener copias de seguridad fiables y r&aacute;pidas de todos y cada uno de los datos de que se dispone.";
 choices[15][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[15] = choices[15][0];
 units[15] = "68";
 comments[15] = "Id Pregunta: 1041. ";


//  Id pregunta: 1056 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El sistema Windows 2003, en su versi&oacute;n cliente:";
 choices[16]= new Array();
 choices[16][0] = "Es el primer sistema cliente de Microsoft en incluir de serie la estrategia.net";
 choices[16][1] = "Incluye facilidades avanzadas para discapacitados";
 choices[16][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[16][3] = "No existe";
 answers[16] = choices[16][3];
 units[16] = "56";
 comments[16] = "Id Pregunta: 1056. ";


//  Id pregunta: 1218 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La especificaci&oacute;n XSLT define:";
 choices[17]= new Array();
 choices[17][0] = "El formato de visualizaci&oacute;n de los documentos XML";
 choices[17][1] = "El formato de ordenaci&oacute;n de etiquetas o tags de documentos XML";
 choices[17][2] = "La definici&oacute;n de datos en los documentos XML";
 choices[17][3] = "La estructura de enlace en los documentos XML";
 answers[17] = choices[17][0];
 units[17] = "69";
 comments[17] = "Id Pregunta: 1218. NULL";


//  Id pregunta: 1375 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Symbian es:";
 choices[18]= new Array();
 choices[18][0] = "Un procesador de AMD";
 choices[18][1] = "Unas especificaciones a modo de sistema operativo o soporte para el desarrollo de aplicaciones software sobre dispositivos m&oacute;viles";
 choices[18][2] = "Un est&aacute;ndar de facto para el cableado de edificios";
 choices[18][3] = "Un m&eacute;todo de procesamiento sim&eacute;trico en paralelo";
 answers[18] = choices[18][1];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1375. ";


//  Id pregunta: 1542 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest; Qu&eacute; es SAS ?";
 choices[19]= new Array();
 choices[19][0] = "Serial Attached SCSI";
 choices[19][1] = "Serial ATA";
 choices[19][2] = "Small Computer Systems Interface";
 choices[19][3] = "Un paquete estad&iacute;stico";
 answers[19] = choices[19][0];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1542. ";


//  Id pregunta: 1885 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Se&ntilde;ale la falsa:";
 choices[20]= new Array();
 choices[20][0] = "La Ley  General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[20][1] = "La ley de firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[20][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[20][3] = "Son falsas las tres anteriores";
 answers[20] = choices[20][3];
 units[20] = "30";
 comments[20] = "Id Pregunta: 1885. Las tres restantes son correctas";


//  Id pregunta: 2021 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que se entiende por un &quot;objeto&quot; en programaci&oacute;n orientada a objetos?";
 choices[21]= new Array();
 choices[21][0] = "Un objeto es parte de la herencia de una clase";
 choices[21][1] = "Un objeto es una instancia de una clase";
 choices[21][2] = "Un objeto es una instancia de una metaclase";
 choices[21][3] = "Una clase es una instancia de un objeto generada por &quot;upcasting&quot;";
 answers[21] = choices[21][1];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2021. Examen TIC MAP B 2004";


//  Id pregunta: 2092 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  De las siguientes bases de datos se&ntilde;alar la que no tiene car&aacute;cter documental:";
 choices[22]= new Array();
 choices[22][0] = "KNOSYS";
 choices[22][1] = "STAIRS";
 choices[22][2] = "ADABAS";
 choices[22][3] = "MISTRAL";
 answers[22] = choices[22][2];
 units[22] = "95";
 comments[22] = "Id Pregunta: 2092. NULL";


//  Id pregunta: 2101 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[23][1] = "Cuando acaba la rutina que los actualiza.";
 choices[23][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[23][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[23] = choices[23][3];
 units[23] = "57,58,83";
 comments[23] = "Id Pregunta: 2101. ";


//  Id pregunta: 2343 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En programaci&oacute;n orientada a objetos, el mecanismo por el cual una clase de objeto puede ser definido como un caso particular de una clase m&aacute;s general se denomina:";
 choices[24]= new Array();
 choices[24][0] = "Herencia";
 choices[24][1] = "Subclase";
 choices[24][2] = "Polimorfismo";
 choices[24][3] = "Encapsulaci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "82";
 comments[24] = "Id Pregunta: 2343. ";


//  Id pregunta: 2384 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar cu&aacute;l es una regla de construcci&oacute;n de un proceso dentro de un Diagrama de Flujo de Datos:";
 choices[25]= new Array();
 choices[25][0] = "Los procesos transforman los flujos de datos de entrada en flujos de salida de datos";
 choices[25][1] = "Se puede transformar un dato en varios mediante un proceso";
 choices[25][2] = "Se necesita siempre un proceso entre una entidad externa y un almac&eacute;n de datos";
 choices[25][3] = "Todas las anteriores son reglas de construcci&oacute;n de un proceso";
 answers[25] = choices[25][3];
 units[25] = "81";
 comments[25] = "Id Pregunta: 2384. ";


//  Id pregunta: 2404 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; es EMACS?:";
 choices[26]= new Array();
 choices[26][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[26][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[26][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[26][3] = "Nada de lo anterior es correcto";
 answers[26] = choices[26][1];
 units[26] = "62";
 comments[26] = "Id Pregunta: 2404. ";


//  Id pregunta: 2421 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El proceso de reconocimiento de la palabra presenta cuatro fases. &iquest;Cu&aacute;l de las siguientes no es una de ellas?:";
 choices[27]= new Array();
 choices[27][0] = "Comparaci&oacute;n";
 choices[27][1] = "Detecci&oacute;n de bordes";
 choices[27][2] = "Reconstrucci&oacute;n";
 choices[27][3] = "Normalizaci&oacute;n en el tiempo";
 answers[27] = choices[27][2];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2421. ";


//  Id pregunta: 2426 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El tipo de indizaci&oacute;n por descriptores consistente en utilizar t&eacute;cnicas de an&aacute;lisis morfol&oacute;gico y sem&aacute;ntico para captar la estructura del texto, se denomina:";
 choices[28]= new Array();
 choices[28][0] = "M&eacute;todo estad&iacute;stico";
 choices[28][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[28][2] = "M&eacute;todo sint&aacute;ctico";
 choices[28][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[28] = choices[28][2];
 units[28] = "96";
 comments[28] = "Id Pregunta: 2426. NULL";


//  Id pregunta: 2536 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La denominada comparaci&oacute;n matricial como m&eacute;todo de reconocimiento de caracteres en OCR se utiliza para:";
 choices[29]= new Array();
 choices[29][0] = "Reconocer caracteres monoespaciados, comparando los datos escaneados contra una plantilla de caracteres est&aacute;ndar";
 choices[29][1] = "Escanea la forma de los caracteres, compar&aacute;ndolos con tablas de formas, examinando la organizaci&oacute;n de los bits y componiendo la letra o car&aacute;cter";
 choices[29][2] = "No son correctas ni &lsquo;a&rsquo; ni &lsquo;b&rsquo;";
 choices[29][3] = "Son correctas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[29] = choices[29][0];
 units[29] = "94";
 comments[29] = "Id Pregunta: 2536. ";


//  Id pregunta: 2758 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  En el an&aacute;lisis orientado a objetos, la herencia es:";
 choices[30]= new Array();
 choices[30][0] = "Es el t&eacute;rmino formal que se utiliza para expresar que los datos de un objeto solamente pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos";
 choices[30][1] = "Es el mecanismo mediante el cual una clase adquiere las propiedades de otra clase jer&aacute;rquicamente superior";
 choices[30][2] = "La propiedad que permite definir tantas versiones de un m&eacute;todo como tipos de argumentos pueda tener";
 choices[30][3] = "No existe";
 answers[30] = choices[30][1];
 units[30] = "82";
 comments[30] = "Id Pregunta: 2758. ";


//  Id pregunta: 2760 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Un sistema operativo de tiempo real se caracteriza por:";
 choices[31]= new Array();
 choices[31][0] = "Manejo eficaz de interrupciones.";
 choices[31][1] = "Gesti&oacute;n de memoria real y no virtual.";
 choices[31][2] = "Bloqueo de los procesos cuando est&aacute;n en espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 choices[31][3] = "Todas las anteriores.";
 answers[31] = choices[31][3];
 units[31] = "83";
 comments[31] = "Id Pregunta: 2760. ";


//  Id pregunta: 3021 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Qu&eacute; diferencia, entre otras, hay entre S-HTTP y SSL?";
 choices[32]= new Array();
 choices[32][0] = "El protocolo SSL fue desarrollado por Enterprise Integration Technologies (EIT) y el S-HTTP por Netscape";
 choices[32][1] = "S-HTTP permite el cifrado pero no la autenticaci&oacute;n digital, SSL permite tanto el cifrado como la autenticaci&oacute;n digital";
 choices[32][2] = "S-HTTP funciona entre la capa TCP y la capa de aplicaci&oacute;n, SSL funciona en la de aplicaci&oacute;n";
 choices[32][3] = "S-HTTP solamente sirve para la navegaci&oacute;n web, mientras que SSL sirve para cualquier comunicaci&oacute;n";
 answers[32] = choices[32][3];
 units[32] = "111";
 comments[32] = "Id Pregunta: 3021. TAI 2004";


//  Id pregunta: 3027 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[33]= new Array();
 choices[33][0] = "Bluetooth";
 choices[33][1] = "HomeRF";
 choices[33][2] = "HiperLAN/2";
 choices[33][3] = "IrLMP";
 answers[33] = choices[33][1];
 units[33] = "107";
 comments[33] = "Id Pregunta: 3027. TAI 2004";


//  Id pregunta: 3117 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN en bus con paso de testigo?:";
 choices[34]= new Array();
 choices[34][0] = "802.4";
 choices[34][1] = "802.5";
 choices[34][2] = "802.6";
 choices[34][3] = "802.7";
 answers[34] = choices[34][0];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3117. NULL";


//  Id pregunta: 3127 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;C&oacute;mo se llaman los paquetes de longitud fija en ATM?:";
 choices[35]= new Array();
 choices[35][0] = "Pulsos";
 choices[35][1] = "Tramas";
 choices[35][2] = "Celdas";
 choices[35][3] = "R&aacute;fagas";
 answers[35] = choices[35][2];
 units[35] = "109";
 comments[35] = "Id Pregunta: 3127. ";


//  Id pregunta: 3130 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para un red de conmutaci&oacute;n de paquetes en modo datagrama?:";
 choices[36]= new Array();
 choices[36][0] = "Un paquete enviado posteriormente no puede llegar antes que otro enviado con anterioridad";
 choices[36][1] = "La red reordena los paquetes y los entrega en el destino en el orden de llegada ";
 choices[36][2] = "Cada paquete lleva en la cabecera informaci&oacute;n acerca del origen y el destino del paquete";
 choices[36][3] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 answers[36] = choices[36][2];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3130. NULL";


//  Id pregunta: 3171 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes funciones corresponder&iacute;an al nivel de red en el Modelo de referencia OSI?:";
 choices[37]= new Array();
 choices[37][0] = "Compartici&oacute;n de circuito f&iacute;sico";
 choices[37][1] = "Establecimiento de varias comunicaciones simult&aacute;neas";
 choices[37][2] = "Cifrado de datos";
 choices[37][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[37] = choices[37][3];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3171. NULL";


//  Id pregunta: 3479 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  El tipo de formato de clase C de direcci&oacute;n IP se emplea mayoritariamente para:";
 choices[38]= new Array();
 choices[38][0] = "Las redes de &aacute;rea local";
 choices[38][1] = "Grandes organizaciones p&uacute;blicas y multinacionales que poseen gran n&uacute;mero de subredes";
 choices[38][2] = "Mensajes de difusi&oacute;n m&uacute;ltiple (multicast)";
 choices[38][3] = "Fines experimentales";
 answers[38] = choices[38][0];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3479. NULL";


//  Id pregunta: 3536 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  En las topolog&iacute;as de red de &aacute;rea local (LAN) se puede decir:";
 choices[39]= new Array();
 choices[39][0] = "En un bus el control es siempre distribuido";
 choices[39][1] = "El doble anillo permite seguir funcionando aunque se produzcan fallos en los puntos de la red";
 choices[39][2] = "La malla se obtiene cuando se conectan nodos pertenecientes a redes distintas de la misma topolog&iacute;a";
 choices[39][3] = "En la red en estrella todo el tr&aacute;fico pasa por el nodo central";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3536. ";


//  Id pregunta: 3577 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  En una red local en la que se tienen problemas de capacidad de la misma se ha decidido dividirla en dos segmentos. Indique cual de las opciones siguientes es la soluci&oacute;n t&eacute;cnica y econ&oacute;micamente m&aacute;s adecuada:";
 choices[40]= new Array();
 choices[40][0] = "Utilizaci&oacute;n de un gateway entre los segmentos";
 choices[40][1] = "Utilizaci&oacute;n de un repetidor entre los segmentos";
 choices[40][2] = "Utilizaci&oacute;n de un switch entre los segmentos";
 choices[40][3] = "Todas las opciones son igualmente adecuadas";
 answers[40] = choices[40][2];
 units[40] = "102";
 comments[40] = "Id Pregunta: 3577. ";


//  Id pregunta: 3609 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  La funci&oacute;n de una MIB es:";
 choices[41]= new Array();
 choices[41][0] = "Representar un dispositivo dado en la jerarqu&iacute;a de una red gestionada";
 choices[41][1] = "Identificar las caracter&iacute;sticas espec&iacute;ficas de un dispositivo gestionado y asociar uno o m&aacute;s valores a sus caracter&iacute;sticas";
 choices[41][2] = "Mapear agentes SNMP a  NMSs (Network Management Systems) SNMP y mantener una tablas con estas relaciones";
 choices[41][3] = "Permitir representar a los datos de forma independiente de las t&eacute;cnicas de representaci&oacute;n y de las estructuras de sistemas en particular";
 answers[41] = choices[41][1];
 units[41] = "104";
 comments[41] = "Id Pregunta: 3609. ";


//  Id pregunta: 3685 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  La velocidad del est&aacute;ndar Gigabit Ethernet es:";
 choices[42]= new Array();
 choices[42][0] = "100 Mbps";
 choices[42][1] = "1000 Mbps";
 choices[42][2] = "10000 Mbps";
 choices[42][3] = "100000 Mbps";
 answers[42] = choices[42][1];
 units[42] = "101";
 comments[42] = "Id Pregunta: 3685. ";


//  Id pregunta: 3744 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Los sistemas m&oacute;viles celulares:";
 choices[43]= new Array();
 choices[43][0] = "Son de car&aacute;cter unidireccional";
 choices[43][1] = "No permiten la conexi&oacute;n a la red p&uacute;blica";
 choices[43][2] = "Permiten la reutilizaci&oacute;n de frecuencias";
 choices[43][3] = "No requieren separaci&oacute;n m&iacute;nima entre c&eacute;lulas";
 answers[43] = choices[43][2];
 units[43] = "108";
 comments[43] = "Id Pregunta: 3744. ";


//  Id pregunta: 3769 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Para usar DNS en una LAN que utiliza Traducciones de Direcciones (NAT) en el firewall:";
 choices[44]= new Array();
 choices[44][0] = "Es recomendable un DNS interno";
 choices[44][1] = "Es recomendable ofrecer el servicio DNS en el firewall";
 choices[44][2] = "Es necesario utilizar un DNS externo al existir NAT";
 choices[44][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[44] = choices[44][0];
 units[44] = "112";
 comments[44] = "Id Pregunta: 3769. ";


//  Id pregunta: 3795 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  Respecto a las interfaces en RDSI:";
 choices[45]= new Array();
 choices[45][0] = "La interfaz R es la definida para poder conectar los equipos no RDSI (X21, RS232&hellip;) a la especificaci&oacute;n RDSI";
 choices[45][1] = "La interfaz R es la utilizada por los equipos remotos";
 choices[45][2] = "La Interfaz R est&aacute; todav&iacute;a indefinida pues depende de las compa&ntilde;&iacute;as proveedoras de servicio";
 choices[45][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[45] = choices[45][0];
 units[45] = "103";
 comments[45] = "Id Pregunta: 3795. ";


//  Id pregunta: 3849 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  Usaremos fibra &oacute;ptica, frente a cable coaxial o par trenzado, cuando:";
 choices[46]= new Array();
 choices[46][0] = "La red se instala en un entorno que exige inmunidad al ruido";
 choices[46][1] = "Es un factor determinante la facilidad de instalaci&oacute;n";
 choices[46][2] = "Se necesita construir el backbone en una WAN";
 choices[46][3] = "Se pondera muy alto el abaratamiento de costes";
 answers[46] = choices[46][2];
 units[46] = "99";
 comments[46] = "Id Pregunta: 3849. ";


//  Id pregunta: 3873 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?:";
 choices[47]= new Array();
 choices[47][0] = "Modelo Entidad / relaci&oacute;n.";
 choices[47][1] = "Diagrama de Despliegue.";
 choices[47][2] = "Diagrama de Flujo de Datos (DFD).";
 choices[47][3] = "Diagrama de Interacci&oacute;n.";
 answers[47] = choices[47][2];
 units[47] = "86";
 comments[47] = "Id Pregunta: 3873. Junta Andaluc&iacute;a";


//  Id pregunta: 3963 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[48]= new Array();
 choices[48][0] = "d a c b ";
 choices[48][1] = "a b c d";
 choices[48][2] = "b c d a";
 choices[48][3] = "b a d c ";
 answers[48] = choices[48][0];
 units[48] = "113";
 comments[48] = "Id Pregunta: 3963. ";


//  Id pregunta: 4127 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Protocolo ligero que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos, incluso detr&aacute;s de un cortafuegos";
 choices[49]= new Array();
 choices[49][0] = "CORBA";
 choices[49][1] = "SOAP";
 choices[49][2] = "RMI";
 choices[49][3] = "DCOM";
 answers[49] = choices[49][1];
 units[49] = "50";
 comments[49] = "Id Pregunta: 4127. ";


//  Id pregunta: 4431 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;C&oacute;mo se denomina en telefon&iacute;a IP el elemento encargado de registrar los dispositivos que realizan llamadas usando la red IP?";
 choices[50]= new Array();
 choices[50][0] = "Gateway.";
 choices[50][1] = "Terminal.";
 choices[50][2] = "IVR";
 choices[50][3] = "Gatekeeper.";
 answers[50] = choices[50][3];
 units[50] = "109";
 comments[50] = "Id Pregunta: 4431. ";


//  Id pregunta: 4649 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  La tecnolog&iacute;a de radio LMDS (Local Multipoint Distribution System) se caracteriza entre otras cosas por ser:";
 choices[51]= new Array();
 choices[51][0] = "una tecnolog&iacute;a punto a punto";
 choices[51][1] = "no requiere de visibilidad directa entre enlaces";
 choices[51][2] = "tiene radios de cobertura t&iacute;picos mayores a 25 Km (kilometros)";
 choices[51][3] = "utilizada para entornos de alta concentraci&oacute;n de usuarios";
 answers[51] = choices[51][3];
 units[51] = "108";
 comments[51] = "Id Pregunta: 4649. ";


//  Id pregunta: 4764 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Indicar cual no es un Dominio de COBIT:";
 choices[52]= new Array();
 choices[52][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[52][1] = "Control y calidad";
 choices[52][2] = "Entrega y soporte";
 choices[52][3] = "Adquisici&oacute;n e implementaci&oacute;n";
 answers[52] = choices[52][1];
 units[52] = "98";
 comments[52] = "Id Pregunta: 4764. NULL";


//  Id pregunta: 4767 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  La diferencia esencial entre TCP y UDP es";
 choices[53]= new Array();
 choices[53][0] = "A diferencia de UDP, TCP dispone de mecanismos para el control de flujo y la transmisi&oacute;n fiable de paquetes";
 choices[53][1] = "A diferencia de UDP, TCP ofrece a la capa superior el servicio de multiplexaci&oacute;n por puerto";
 choices[53][2] = "A dferencia de UDP, TCP dispone de mecanismos para detectar errores de transmisi&oacute;n";
 choices[53][3] = "Todas las anteriores son ciertas";
 answers[53] = choices[53][0];
 units[53] = "100";
 comments[53] = "Id Pregunta: 4767. ";


//  Id pregunta: 5043 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l es la naturaleza j&uacute;ridica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[54]= new Array();
 choices[54][0] = "Organismo aut&oacute;nomo";
 choices[54][1] = "Entidad P&uacute;blica Empresarial";
 choices[54][2] = "Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica";
 choices[54][3] = "Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;nadicional d&eacute;cima de la LOFAGE)";
 answers[54] = choices[54][2];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5043. Examen TIC A 2007";


//  Id pregunta: 5160 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Un HUB es un dispositivo de interconexi&oacute;n utilizado para:";
 choices[55]= new Array();
 choices[55][0] = "Enlazar LANs separadas y proporcionar filtrado de paquetes entre ellas.";
 choices[55][1] = "Interconectar redes con protocolos y arquitecturas completamente diferentes, a todos los niveles de comunicaci&oacute;n.";
 choices[55][2] = "Concentrar y organizar el cableado en una red de &aacute;rea local.";
 choices[55][3] = "Controlar las comunicaciones, permit&eacute;ndolas o prohibi&eacute;ndolas seg&uacute;n las pol&iacute;ticas de red que haya definido la organizaci&oacute;n responsable de la red.";
 answers[55] = choices[55][2];
 units[55] = "102";
 comments[55] = "Id Pregunta: 5160. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5480 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  El modelo de desarrollo conocido como el bazar";
 choices[56]= new Array();
 choices[56][0] = "Fue promulgado por Linus Torvald";
 choices[56][1] = "No se aplica a desarrollos comerciales";
 choices[56][2] = "Se basa en la metodolog&iacute;a Extreme Programming";
 choices[56][3] = "Todas las respuestas anteriores son incorrectas";
 answers[56] = choices[56][3];
 units[56] = "61";
 comments[56] = "Id Pregunta: 5480. Castilla y Le&oacute;n";


//  Id pregunta: 5995 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El Defensor del usuario de la administraci&oacute;n electr&oacute;nica a que hace referencia el art&iacute;culo 7 de la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos es nombrado por:";
 choices[57]= new Array();
 choices[57][0] = "El Defensor del Pueblo.";
 choices[57][1] = "El Congreso de los Diputados, por mayor&iacute;a simple.";
 choices[57][2] = "El Consejo de Ministros.";
 choices[57][3] = "El Ministro de Industria.";
 answers[57] = choices[57][2];
 units[57] = "43";
 comments[57] = "Id Pregunta: 5995. TIC A 2009";


//  Id pregunta: 6118 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Con respecto a BPEL (Business Process Execution Language):";
 choices[58]= new Array();
 choices[58][0] = "Es un lenguaje de coreogr&aacute;fico, no de orquestaci&oacute;n.";
 choices[58][1] = "Es un lenguaje de orquestaci&oacute;n, no un lenguaje coreogr&aacute;fico.";
 choices[58][2] = "Fue creado por WfMC.";
 choices[58][3] = "Es un lenguaje de orquestaci&oacute;n y coreogr&aacute;fico creado por OASIS.";
 answers[58] = choices[58][1];
 units[58] = "51";
 comments[58] = "Id Pregunta: 6118. NULL";


//  Id pregunta: 6402 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Las Administraciones podr&aacute;n poner a disposici&oacute;n de todos los organismos las aplicaciones que decidan declarar de c&oacute;digo abierto, a trav&eacute;s de el&hellip;";
 choices[59]= new Array();
 choices[59][0] = "Centro de Transferencia de Tecnolog&iacute;a";
 choices[59][1] = "Centro de Compartici&oacute;n de Tecnolog&iacute;a";
 choices[59][2] = "Proyecto Aporta";
 choices[59][3] = "Proyecto Comparte";
 answers[59] = choices[59][0];
 units[59] = "30";
 comments[59] = "Id Pregunta: 6402. NULL";


//  Id pregunta: 6552 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Dentro de los Est&aacute;ndares de Criptograf&iacute;a de Clave P&uacute;blica (PKCS)";
 choices[60]= new Array();
 choices[60][0] = "PKCS#1: Corresponde al algoritmo RSA";
 choices[60][1] = "PKCS#3: Corresponde al algoritmo Diffie-Hellman";
 choices[60][2] = "PKCS#5: Cifrado con clave privada";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][3];
 units[60] = "74";
 comments[60] = "Id Pregunta: 6552. NULL";


//  Id pregunta: 6581 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l es el Reglamento de desarrollo de la LOPD actualmente vigente?";
 choices[61]= new Array();
 choices[61][0] = "RD 994/1999";
 choices[61][1] = "RD 1720/2007";
 choices[61][2] = "A y B son correctas";
 choices[61][3] = "A y B son incorrectas";
 answers[61] = choices[61][1];
 units[61] = "29";
 comments[61] = "Id Pregunta: 6581. NULL";


//  Id pregunta: 6643 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En el m&eacute;todo de los Puntos de Funci&oacute;n se valoran:";
 choices[62]= new Array();
 choices[62][0] = "15 caracter&iacute;sticas generales";
 choices[62][1] = "5 caracter&iacute;sticas generales";
 choices[62][2] = "6 caracter&iacute;sticas generales";
 choices[62][3] = "14 caracter&iacute;sticas generales";
 answers[62] = choices[62][3];
 units[62] = "89";
 comments[62] = "Id Pregunta: 6643. NULL";


//  Id pregunta: 7168 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes NO es uno de los libros que componente MAGERIT v2?";
 choices[63]= new Array();
 choices[63][0] = "M&eacute;todo";
 choices[63][1] = "Cat&aacute;logo de Elementos";
 choices[63][2] = "Cat&aacute;logo de Riesgos";
 choices[63][3] = "Gu&iacute;a de T&eacute;cnicas";
 answers[63] = choices[63][2];
 units[63] = "33";
 comments[63] = "Id Pregunta: 7168. Examen TIC B 2009";


//  Id pregunta: 7274 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Entre las ventajas de la virtualizaci&oacute;n de hardware no se encuentra";
 choices[64]= new Array();
 choices[64][0] = "La reducci&oacute;n de costes de administraci&oacute;n";
 choices[64][1] = "La eficiencia energ&eacute;tica";
 choices[64][2] = "El incremento de rendimiento de las aplicaciones";
 choices[64][3] = "Mayor aprovechamiento de los servidores";
 answers[64] = choices[64][2];
 units[64] = "119";
 comments[64] = "Id Pregunta: 7274. NULL";


//  Id pregunta: 7863 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos:";
 choices[65]= new Array();
 choices[65][0] = " De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n.";
 choices[65][1] = " De 5 bytes.";
 choices[65][2] = " De 48 bytes.";
 choices[65][3] = " De 53 bytes. MAP 2006";
 answers[65] = choices[65][3];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 7863. Map 2005";


//  Id pregunta: 7941 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[66]= new Array();
 choices[66][0] = " Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red.";
 choices[66][1] = " La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n de subred complementaria en cada paquete.";
 choices[66][2] = " La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores).";
 choices[66][3] = " Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red.";
 answers[66] = choices[66][2];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7941. Map 2006";


//  Id pregunta: 8021 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   &iquest;Cu&aacute;l es la naturaleza jur&iacute;dica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[67]= new Array();
 choices[67][0] = " Organismo aut&oacute;nomo.";
 choices[67][1] = " Entidad P&uacute;blica Empresarial.";
 choices[67][2] = " Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica.";
 choices[67][3] = " Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;n adicional d&eacute;cima de la LOFAGE).";
 answers[67] = choices[67][2];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 8021. Map 2007";


//  Id pregunta: 8123 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   CobiT identific&oacute; los siguientes elementos clave, con respecto a los aspectos de seguridad:";
 choices[68]= new Array();
 choices[68][0] = " Idoneidad, continuidad de negocio y certificaci&oacute;n internacional.";
 choices[68][1] = " Confidencialidad, integridad y disponibilidad.";
 choices[68][2] = " Criticidad, autenticaci&oacute;n y consistencia.";
 choices[68][3] = " Convergencia, coherencia y salvaguarda.";
 answers[68] = choices[68][1];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 8123. Map 2008";


//  Id pregunta: 8198 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En ITIL v.3, &iquest;cu&aacute;l de los siguientes procesos y actividades NO corresponde a la estrategia de servicios?:";
 choices[69]= new Array();
 choices[69][0] = "Gesti&oacute;n financiera. ";
 choices[69][1] = "Gesti&oacute;n del portfolio de servicios. ";
 choices[69][2] = "Gesti&oacute;n de la demanda. ";
 choices[69][3] = "Gesti&oacute;n del cat&aacute;logo de servicios. ";
 answers[69] = choices[69][3];
 units[69] = "98";
 comments[69] = "Id Pregunta: 8198. Examen TIC A1 2010";


//  Id pregunta: 8217 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En relaci&oacute;n a la facturaci&oacute;n electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[70]= new Array();
 choices[70][0] = "La AEAT pone a disposici&oacute;n de los usuarios software distribuible para generar PDF417.";
 choices[70][1] = "El formato &quot;Facturae&quot; permite la inclusi&oacute;n de extensiones a nivel de l&iacute;nea, de factura o de lote de facturas.";
 choices[70][2] = "El certificado a usar para firmar la factura electr&oacute;nica y que &eacute;sta tenga validez ha de ser en todo caso el del obligado tributario.";
 choices[70][3] = "La Orden EHA/962/2007 dice que la obligaci&oacute;n de remisi&oacute;n y conservaci&oacute;n de facturas o documentos sustitutivos se cumplir&aacute; para la facturaci&oacute;n electr&oacute;nica mediante el uso de firma electr&oacute;nica reconocida.";
 answers[70] = choices[70][1];
 units[70] = "70";
 comments[70] = "Id Pregunta: 8217. Examen TIC A1 2010";


//  Id pregunta: 8276 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica es nombrado por:";
 choices[71]= new Array();
 choices[71][0] = "El Consejo de Ministros.";
 choices[71][1] = "El Ministro de la Presidencia.";
 choices[71][2] = "El Ministro de Industria, Energ&iacute;a y Turismo.";
 choices[71][3] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[71] = choices[71][0];
 units[71] = "43";
 comments[71] = "Id Pregunta: 8276. Examen TIC A1 2010. Actualizado a MINETUR en lugar de MITYC.";


//  Id pregunta: 8280 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Si ejecutamos el comando telnet para acceder a un servidor que tenga configurado lo necesario, &iquest;Cu&aacute;l de las afirmaciones es correcta?:";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo podemos conectarnos al &quot;well-known port&quot; 23 (telnet).";
 choices[72][1] = "Accediendo al puerto 25 (smtp) ser&iacute;a posible enviar e-mails.";
 choices[72][2] = "Accediendo al puerto 22 (ssh) es posible securizar la comunicaci&oacute;n.";
 choices[72][3] = "Accediendo a cualquier puerto diferente del 23 el servidor reconoce el protocolo y redirige la comunicaci&oacute;n al puerto 23(telnet).";
 answers[72] = choices[72][1];
 units[72] = "112";
 comments[72] = "Id Pregunta: 8280. Examen TIC A1 2010";


//  Id pregunta: 8286 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Un prestador de servicios de certificaci&oacute;n, &iquest;durante qu&eacute; per&iacute;odo de tiempo tiene que conservar la informaci&oacute;n relativa a los certificados reconocidos expedidos, de manera que puedan verificarse las firmas efectuadas con los mismos, de acuerdo a lo dispuesto en la Ley 59/2003, de 19 de diciembre, de Firma electr&oacute;nica? ";
 choices[73]= new Array();
 choices[73][0] = "Al menos durante 15 a&ntilde;os contados desde la fecha de fin de validez del certificado,";
 choices[73][1] = "Al menos durante 15 a&ntilde;os contados desde el momento de su expedici&oacute;n";
 choices[73][2] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde la fecha de fin de validez del certificado.";
 choices[73][3] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde el momento de su expedici&oacute;n. ";
 answers[73] = choices[73][1];
 units[73] = "74";
 comments[73] = "Id Pregunta: 8286. Examen TIC A2 2010";


//  Id pregunta: 8598 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Indique cual de las siguientes definiciones se corresponde con Biztalk:";
 choices[74]= new Array();
 choices[74][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software";
 choices[74][1] = "Es una librer&iacute;a de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[74][2] = "Es un servidor web de NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[74][3] = "Es un componente que pertenece a! CLR de NET que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "115";
 comments[74] = "Id Pregunta: 8598. Examen TIC A2 2010 interna";


//  Id pregunta: 8667 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[75]= new Array();
 choices[75][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[75][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[75][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[75][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[75] = choices[75][1];
 units[75] = "112";
 comments[75] = "Id Pregunta: 8667. Examen UPM A2 2011";


//  Id pregunta: 8677 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[76]= new Array();
 choices[76][0] = "Home Agent.";
 choices[76][1] = "Agent Advertisement.";
 choices[76][2] = "Mobility Agent.";
 choices[76][3] = "Agent Discovery.";
 answers[76] = choices[76][0];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8677. Examen UPM A2 2011";


//  Id pregunta: 8784 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  MAGERIT es";
 choices[77]= new Array();
 choices[77][0] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de riesgos de sistemas de informaci&oacute;n.";
 choices[77][1] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de centros de recuperaci&oacute;n de desastres de sistemas de informaci&oacute;n.";
 choices[77][2] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de sistemas de archivo de sistemas de informaci&oacute;n.";
 choices[77][3] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de evaluaci&oacute;n de rendimiento de sistemas de informaci&oacute;n.";
 answers[77] = choices[77][0];
 units[77] = "33";
 comments[77] = "Id Pregunta: 8784. Examen UPM A2 2011";


//  Id pregunta: 8919 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[78]= new Array();
 choices[78][0] = "ROUTE";
 choices[78][1] = "NETSTAT";
 choices[78][2] = "NBTSTAT";
 choices[78][3] = "TRACERT";
 answers[78] = choices[78][1];
 units[78] = "104";
 comments[78] = "Id Pregunta: 8919. Operador Ayto. Madrid 2010";


//  Id pregunta: 8953 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  KDE puede arrancar un n&uacute;mero m&aacute;ximo de escritorios virtuales &iquest;cu&aacute;l es ese n&uacute;mero?:";
 choices[79]= new Array();
 choices[79][0] = "16";
 choices[79][1] = "8";
 choices[79][2] = "4";
 choices[79][3] = "6";
 answers[79] = choices[79][1];
 units[79] = "53,54";
 comments[79] = "Id Pregunta: 8953. ";


//  Id pregunta: 8954 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Para qu&eacute; se utiliza el comando fdisk?:";
 choices[80]= new Array();
 choices[80][0] = "Para formatear una partici&oacute;n";
 choices[80][1] = "Para formatear un disco completo";
 choices[80][2] = "Para crear una partici&oacute;n";
 choices[80][3] = "Para crear i-nodos";
 answers[80] = choices[80][2];
 units[80] = "53,54";
 comments[80] = "Id Pregunta: 8954. ";


//  Id pregunta: 8997 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[81]= new Array();
 choices[81][0] = "1 maestro y 7 esclavos";
 choices[81][1] = "1 maestro y 15 esclavos";
 choices[81][2] = "1 maestro y 16 esclavos";
 choices[81][3] = "1 maestro y 32 esclavos";
 answers[81] = choices[81][0];
 units[81] = "107";
 comments[81] = "Id Pregunta: 8997. Examen UPM A2 2011";


//  Id pregunta: 9046 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  C&uacute;al no es un interfaz en M&eacute;trica v3";
 choices[82]= new Array();
 choices[82][0] = "Gesti&oacute;n de la Configuraci&oacute;n";
 choices[82][1] = "Seguridad Integral";
 choices[82][2] = "Gesti&oacute;n del Cambio";
 choices[82][3] = "Aseguramiento de la Calidad";
 answers[82] = choices[82][2];
 units[82] = "86";
 comments[82] = "Id Pregunta: 9046. NULL";


//  Id pregunta: 9240 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[83]= new Array();
 choices[83][0] = "Se orienta al usuario novel y promedio.";
 choices[83][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[83][2] = "Su patrocinador es Canonical.";
 choices[83][3] = "Todas son correctas.";
 answers[83] = choices[83][3];
 units[83] = "53";
 comments[83] = "Id Pregunta: 9240. ";


//  Id pregunta: 9282 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  NO es un principio general del Texto Refundido de la Ley de Contratos del Sector P&uacute;blico:";
 choices[84]= new Array();
 choices[84][0] = "Libertad de acceso a las licitaciones.";
 choices[84][1] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos. ";
 choices[84][2] = "Utilizaci&oacute;n eficiente de los fondos destinados a contratos p&uacute;blicos. ";
 choices[84][3] = "Riesgo y ventura del contratante en la ejecuci&oacute;n de las obras.";
 answers[84] = choices[84][3];
 units[84] = "41";
 comments[84] = "Id Pregunta: 9282. ";


//  Id pregunta: 9324 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Los informes de auditor&iacute;a";
 choices[85]= new Array();
 choices[85][0] = "Deben ser enviados al &oacute;rgano auditado para que establezca observaciones o alegaciones";
 choices[85][1] = "No ser&aacute; sometido a las observaciones o alegaciones del &oacute;rgano auditado porque esto pondr&iacute;a en peligro la independencia del procedimiento";
 choices[85][2] = "Incluir&aacute; los hechos, hallazgos, conclusiones y recomendaciones que se consideren m&aacute;s relevantes por parte de los auditores";
 choices[85][3] = "Ninguna de las anteriores es correcta";
 answers[85] = choices[85][0];
 units[85] = "31";
 comments[85] = "Id Pregunta: 9324. ";


//  Id pregunta: 9326 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[86]= new Array();
 choices[86][0] = "clase D";
 choices[86][1] = "clase F ";
 choices[86][2] = "clase E";
 choices[86][3] = "b) y c) son correctas.";
 answers[86] = choices[86][3];
 units[86] = "99";
 comments[86] = "Id Pregunta: 9326. NULL";


//  Id pregunta: 9608 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[87]= new Array();
 choices[87][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[87][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[87][2] = "Utilizan estructuras flexibles";
 choices[87][3] = "Todas las anteriores lo son";
 answers[87] = choices[87][3];
 units[87] = "58";
 comments[87] = "Id Pregunta: 9608. NULL";


//  Id pregunta: 9995 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En relaci&oacute;n a im&aacute;genes est&aacute;ticas en portales web,";
 choices[88]= new Array();
 choices[88][0] = "El formato PNG, si bien est&aacute; libre de patentes, tiene mayor p&eacute;rdida de informaci&oacute;n que el formato JPEG.";
 choices[88][1] = "El formato GIF utiliza el algoritmo LZW de compresi&oacute;n patentado por CompuServe.";
 choices[88][2] = "JPEG tiene m&aacute;s p&eacute;rdida de informaci&oacute;n que GIF y PNG.";
 choices[88][3] = "El soporte de animaciones no es posible en PNG, utiliz&aacute;ndose NMG en su lugar.";
 answers[88] = choices[88][2];
 units[88] = "93";
 comments[88] = "Id Pregunta: 9995. NULL";


//  Id pregunta: 10001 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  EuroDOCSIS";
 choices[89]= new Array();
 choices[89][0] = "Significa, en el &aacute;mbito de la Uni&oacute;n Europea, DOCument System Interface Service, y hace referencia a un est&aacute;ndar de gesti&oacute;n documental.";
 choices[89][1] = "es una extensi&oacute;n de DOCSIS especificada por ETSI para el &aacute;mbito Europeo.";
 choices[89][2] = "significa, en el &aacute;mbito de la zona Euro, Digital Open Currency System Interface Standard.";
 choices[89][3] = "es un est&aacute;ndar propietario de gesti&oacute;n documental de amplia implantaci&oacute;n enEuropa.";
 answers[89] = choices[89][1];
 units[89] = "105";
 comments[89] = "Id Pregunta: 10001. ";


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


//  Id pregunta: 10272 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[91]= new Array();
 choices[91][0] = "B&uacute;squeda de profundida limitada";
 choices[91][1] = "B&uacute;squeda primero el mejor";
 choices[91][2] = "B&uacute;squeda de coste uniforme";
 choices[91][3] = "B&uacute;squeda bidireccional";
 answers[91] = choices[91][1];
 units[91] = "63";
 comments[91] = "Id Pregunta: 10272. NULL";


//  Id pregunta: 10530 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Seleccione la afirmaci&oacute;n correcta:";
 choices[92]= new Array();
 choices[92][0] = "los buses paralelos permiten enviar mayor cantidad de informaci&oacute;n por unidad de tiempo que los buses serie";
 choices[92][1] = "el bus MCA (Micro Channel Architecture) empleado en los IBM PS/2 ten&iacute;a un ancho de palabra m&aacute;ximo de 16 bits";
 choices[92][2] = "los buses paralelos presentan una limitaci&oacute;n de velocidad relacionada con la variaci&oacute;n de retardo o jitter entre los diferentes bits de su ancho de palabra";
 choices[92][3] = "el bus PCI es un bus paralelo pero sus evoluciones posteriores, PCI-X y PCIe son buses serie";
 answers[92] = choices[92][2];
 units[92] = "46";
 comments[92] = "Id Pregunta: 10530. NULL";


//  Id pregunta: 10944 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Respecto a los diagramas de flujos de datos, se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "Proporcionan un mecanismo para el modelado funcional, no siendo necesario considerar el flujo de informaci&oacute;n.";
 choices[93][1] = "Por s&iacute; solos, son una herramienta suficiente para describir los requisitos del software.";
 choices[93][2] = "En los sucesivos niveles de detalle es necesario mantener la continuidad del flujo de informaci&oacute;n.";
 choices[93][3] = "No son una herramienta v&aacute;lida para sistemas de tiempo real.";
 answers[93] = choices[93][2];
 units[93] = "81";
 comments[93] = "Id Pregunta: 10944. TIC A1 AGE 2014";


//  Id pregunta: 10949 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La cuarta generaci&oacute;n de telefon&iacute;a m&oacute;vil (4G) incluye:";
 choices[94]= new Array();
 choices[94][0] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[94][1] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 choices[94][2] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[94][3] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 answers[94] = choices[94][0];
 units[94] = "108";
 comments[94] = "Id Pregunta: 10949. TIC A1 AGE 2014";


//  Id pregunta: 11002 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la que incluye extensiones que son todas admitidas de acuerdo con lo establecido en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:";
 choices[95]= new Array();
 choices[95][0] = ".xls, .xlsx, .doc, .docx";
 choices[95][1] = ".rar, .zip, .gz";
 choices[95][2] = ".jpg, .gif, .png, .tiff";
 choices[95][3] = ".mp3, .ogg, .mp4";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11002. TIC A1 AGE 2014";


//  Id pregunta: 11283 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; se entiende por TileMatrixSet en el contexto de la informaci&oacute;n geogr&aacute;fica?";
 choices[96]= new Array();
 choices[96][0] = "Una matriz de puntos de control para registrar una im&aacute;gen r&aacute;ster respecto a otra";
 choices[96][1] = "Un conjunto de rasterizaciones y fragmentaciones de la capa a diferentes escalas predeterminadas para un sistema de referencia y &aacute;mbito concreto";
 choices[96][2] = "Un conjunto de datos de tipo r&aacute;ster en el que el atributo respresentado es la elevaci&oacute;n de los puntos situados en una malla regular";
 choices[96][3] = "Ninguna de las anteriores";
 answers[96] = choices[96][1];
 units[96] = "67";
 comments[96] = "Id Pregunta: 11283. ";


//  Id pregunta: 11438 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es incorrecta respecto a los derechos de los usuarios?";
 choices[97]= new Array();
 choices[97][0] = "Derecho a acceder a los servicios de emergencias de forma gratuita.";
 choices[97][1] = "Derecho a la continuidad de servicio.";
 choices[97][2] = "Derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 choices[97][3] = "Derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros en el plazo de dos d&iacute;as laborables.";
 answers[97] = choices[97][3];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11438. ";


//  Id pregunta: 11489 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La transmisi&oacute;n de los derechos morales de autor a favor de los herederos puede realizarse";
 choices[98]= new Array();
 choices[98][0] = "Mediante un contrato de cesi&oacute;n, donaci&oacute;n o compraventa.";
 choices[98][1] = "Incluyendo la transmisi&oacute;n de los derechos en la herencia.";
 choices[98][2] = "De cualquiera de las formas mencionadas en los apartados anteriores.";
 choices[98][3] = "Todas las anteriores son falsas.";
 answers[98] = choices[98][3];
 units[98] = "36";
 comments[98] = "Id Pregunta: 11489. NULL";


//  Id pregunta: 11743 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; algoritmo utiliza el cifrado por bloques?";
 choices[99]= new Array();
 choices[99][0] = "ElGamal";
 choices[99][1] = "DSA";
 choices[99][2] = "RSA";
 choices[99][3] = "DES";
 answers[99] = choices[99][3];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11743. ";


