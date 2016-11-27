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

//  Id pregunta: 10572 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[0]= new Array();
 choices[0][0] = "Dar respuesta al art&iacute;culo 6 de la Ley 11/2007, por el que se reconoce el derecho a no aportar los datos y documentos que ya obren en poder de la Administraci&oacute;n.";
 choices[0][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[0][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[0][3] = "Dar cumplimiento a los derechos recogidos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y Procedimiento Administrativo Com&uacute;n.";
 answers[0] = choices[0][2];
 units[0] = "44";
 comments[0] = "Id Pregunta: 10572. ";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  &iquest;Qu&eacute; especificaciones permiten eliminar los certificados administrativos en papel mediante el intercambio electr&oacute;nico de datos entre Administraciones?";
 choices[1]= new Array();
 choices[1][0] = "SCSP";
 choices[1][1] = "SIGP";
 choices[1][2] = "SAML";
 choices[1][3] = "SIR";
 answers[1] = choices[1][0];
 units[1] = "44";
 comments[1] = "Id Pregunta: 10574. Sustituci&oacute;n de Certificados en Soporte Papel ";


//  Id pregunta: 10577 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  El Esquema Nacional de Interoperabilidad:";
 choices[2]= new Array();
 choices[2][0] = "Incluye criterios y recomendaciones de seguridad.";
 choices[2][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[2][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[2][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[2] = choices[2][0];
 units[2] = "44";
 comments[2] = "Id Pregunta: 10577. Art&iacute;culo 42, Ley 11/2007.";


//  Id pregunta: 10585 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, las URIs:";
 choices[3]= new Array();
 choices[3][0] = "Deben cumplir el principio de persistencia.";
 choices[3][1] = "Deben utilizar el protocolo FTP.";
 choices[3][2] = "Deben exponer informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de sus recursos.";
 choices[3][3] = "Deben usar una estructura consistente y fija.";
 answers[3] = choices[3][0];
 units[3] = "43";
 comments[3] = "Id Pregunta: 10585. Anexo II (Esquema de URI)";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  Son europeos:";
 choices[4]= new Array();
 choices[4][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[4][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[4][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[4][3] = "La red SARA";
 answers[4] = choices[4][0];
 units[4] = "30";
 comments[4] = "Id Pregunta: 10591. ";


//  Id pregunta: 10595 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  La revisi&oacute;n de la solvencia t&eacute;cnica del empresario para la conservaci&oacute;n de la clasificaci&oacute;n debe realizarse:";
 choices[5]= new Array();
 choices[5][0] = "Anualmente";
 choices[5][1] = "Cada tres a&ntilde;os";
 choices[5][2] = "No es necesario revisarla mientras se mantengan las condiciones y circunstancias en que se bas&oacute; la concesi&oacute;n de la clasificaci&oacute;n.";
 choices[5][3] = "S&oacute;lo se revisa a petici&oacute;n de los interesados.";
 answers[5] = choices[5][0];
 units[5] = "41";
 comments[5] = "Id Pregunta: 10595. ";


//  Id pregunta: 10599 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  datos.gob.es...";
 choices[6]= new Array();
 choices[6][0] = "&hellip; es una iniciativa con el fin de promocionar la protecci&oacute;n de datos de car&aacute;cter personal en Espa&ntilde;a.";
 choices[6][1] = "&hellip; es una sede electr&oacute;nica para la reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.";
 choices[6][2] = "&hellip; aloja el Portal de la Transparencia.";
 choices[6][3] = "&hellip; aloja el Cat&aacute;logo Nacional de datos abiertos.";
 answers[6] = choices[6][3];
 units[6] = "22";
 comments[6] = "Id Pregunta: 10599. ";


//  Id pregunta: 10613 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  Indique cu&aacute;l es el orden correcto de las siguientes tecnolog&iacute;as de disco, de mayor a menor tiempo de latencia:";
 choices[7]= new Array();
 choices[7][0] = "SCSI, IDE y SATA.";
 choices[7][1] = "SATA, SSD y FC.";
 choices[7][2] = "SSD, SCSI e IDE.";
 choices[7][3] = "IDE, SSD y SAS.";
 answers[7] = choices[7][2];
 units[7] = "48";
 comments[7] = "Id Pregunta: 10613. ";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  Son proyectos SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica) en Espa&ntilde;a:";
 choices[8]= new Array();
 choices[8][0] = "SIC y SILG.";
 choices[8][1] = "SIGNA y SIANE.";
 choices[8][2] = "SIGMA y SIGPAC.";
 choices[8][3] = "SIGMAPA y SEGRO.";
 answers[8] = choices[8][1];
 units[8] = "67";
 comments[8] = "Id Pregunta: 10622. ";


//  Id pregunta: 10627 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[9]= new Array();
 choices[9][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[9][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[9][2] = "Externo, interno y conceptual.";
 choices[9][3] = "Externo, interno y l&oacute;gico.";
 answers[9] = choices[9][2];
 units[9] = "57";
 comments[9] = "Id Pregunta: 10627. ";


//  Id pregunta: 10652 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  Indique cu&aacute;l de &eacute;stos no es un m&eacute;todo EAP:";
 choices[10]= new Array();
 choices[10][0] = "PEAP";
 choices[10][1] = "EAP-PSK";
 choices[10][2] = "EAP-PAP";
 choices[10][3] = "EAP-TTLS";
 answers[10] = choices[10][2];
 units[10] = "111";
 comments[10] = "Id Pregunta: 10652. ";


//  Id pregunta: 10658 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de estas tecnolog&iacute;as inal&aacute;mbricas puede alcanzar una cobertura de hasta 80 kil&oacute;metros?";
 choices[11]= new Array();
 choices[11][0] = "Zigbee";
 choices[11][1] = "WiMAX";
 choices[11][2] = "Ethernet";
 choices[11][3] = "Wibree";
 answers[11] = choices[11][1];
 units[11] = "107";
 comments[11] = "Id Pregunta: 10658. ";


//  Id pregunta: 10660 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  Indique la afirmaci&oacute;n incorrecta:";
 choices[12]= new Array();
 choices[12][0] = "JavaScript es orientado a objetos.";
 choices[12][1] = "JavaScript no puede ejecutarse en el lado del servidor.";
 choices[12][2] = "Para interactuar con una p&aacute;gina web, JavaScript utiliza una implementaci&oacute;n de DOM (Document Object Model).";
 choices[12][3] = "La tecnolog&iacute;a AJAX utiliza JavaScript de forma as&iacute;ncrona.";
 answers[12] = choices[12][1];
 units[12] = "114";
 comments[12] = "Id Pregunta: 10660. ";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[13]= new Array();
 choices[13][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[13][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[13][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[13][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[13] = choices[13][1];
 units[13] = "30";
 comments[13] = "Id Pregunta: 10676. ";


//  Id pregunta: 10684 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:";
 choices[14]= new Array();
 choices[14][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[14][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[14][2] = "Ambas";
 choices[14][3] = "Ninguna de las anteriores.";
 answers[14] = choices[14][2];
 units[14] = "30";
 comments[14] = "Id Pregunta: 10684. ";


//  Id pregunta: 10688 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[15]= new Array();
 choices[15][0] = "Enero de 2013.";
 choices[15][1] = "Junio de 2013.";
 choices[15][2] = "Diciembre de 2013.";
 choices[15][3] = "Enero de 2014.";
 answers[15] = choices[15][1];
 units[15] = "30";
 comments[15] = "Id Pregunta: 10688. ";


//  Id pregunta: 10710 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l es un contenido clave de la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[16]= new Array();
 choices[16][0] = "SICRES";
 choices[16][1] = "Los metadatos";
 choices[16][2] = "ACCEDA";
 choices[16][3] = "HABILITA";
 answers[16] = choices[16][0];
 units[16] = "43";
 comments[16] = "Id Pregunta: 10710. ";


//  Id pregunta: 10711 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  &iquest;Qu&eacute; especificaci&oacute;n de SICRES se incluye en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[17]= new Array();
 choices[17][0] = "1";
 choices[17][1] = "2";
 choices[17][2] = "3";
 choices[17][3] = "4";
 answers[17] = choices[17][1];
 units[17] = "43";
 comments[17] = "Id Pregunta: 10711. ";


//  Id pregunta: 10714 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[18]= new Array();
 choices[18][0] = "HTML";
 choices[18][1] = "PDF";
 choices[18][2] = "XML";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][2];
 units[18] = "43";
 comments[18] = "Id Pregunta: 10714. ";


//  Id pregunta: 10716 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  &iquest;Qu&eacute; aspecto no se define en una pol&iacute;tica de firma seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[19]= new Array();
 choices[19][0] = "Los procesos de creaci&oacute;n de firmas electr&oacute;nicas.";
 choices[19][1] = "Los procesos de modificaci&oacute;n de firmas electr&oacute;nicas.";
 choices[19][2] = "Los procesos de validaci&oacute;n de firmas electr&oacute;nicas.";
 choices[19][3] = "Los procesos de conservaci&oacute;n de firmas electr&oacute;nicas.";
 answers[19] = choices[19][1];
 units[19] = "43";
 comments[19] = "Id Pregunta: 10716. ";


//  Id pregunta: 10720 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l es el perfil m&iacute;nimo de formato permitido por la NTI de firma electr&oacute;nica?";
 choices[20]= new Array();
 choices[20][0] = "#NAME?";
 choices[20][1] = "#NAME?";
 choices[20][2] = "#NAME?";
 choices[20][3] = "B&aacute;sico de primer nivel";
 answers[20] = choices[20][0];
 units[20] = "43";
 comments[20] = "Id Pregunta: 10720. ";


//  Id pregunta: 10723 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  Seg&uacute;n la NTI de Protocolos de intermediaci&oacute;n de datos, dentro del Rol de la Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas no se contempla:";
 choices[21]= new Array();
 choices[21][0] = "Gestionar los Cesionarios y Requirentes seg&uacute;n las condiciones establecidas por cada Cedente.";
 choices[21][1] = "Almacenar la informaci&oacute;n personal de cualquier transacci&oacute;n de intercambio de datos.";
 choices[21][2] = "Asegurar la confidencialidad e integridad de la informaci&oacute;n intercambiada a trav&eacute;s de los mecanismos correspondientes.";
 choices[21][3] = "Mantener un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 answers[21] = choices[21][1];
 units[21] = "43";
 comments[21] = "Id Pregunta: 10723. ";


//  Id pregunta: 10727 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  &iquest;D&oacute;nde se puede encontrar la especificaci&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) seg&uacute;n se&ntilde;ala la NTI de protocolos de intermedicaci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "En el Portal de Administraci&oacute;n electr&oacute;nica PAE/CTT";
 choices[22][1] = "En la Intranet del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[22][2] = "En la Intranet del Ministerio de la Presidencia";
 choices[22][3] = "Se debe solicitar dicha informaci&oacute;n a la Direcci&oacute;n TIC";
 answers[22] = choices[22][0];
 units[22] = "43";
 comments[22] = "Id Pregunta: 10727. ";


//  Id pregunta: 10735 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, &iquest;qu&eacute; usar&aacute;n los identificadores de recursos uniformes?";
 choices[23]= new Array();
 choices[23][0] = "HTTP o HTTPS";
 choices[23][1] = "XML";
 choices[23][2] = "Formatos libres";
 choices[23][3] = "Licencias Europeas de Libre utilizaci&oacute;n";
 answers[23] = choices[23][0];
 units[23] = "43";
 comments[23] = "Id Pregunta: 10735. ";


//  Id pregunta: 10742 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  &iquest;Con qu&eacute; frecuencia m&iacute;nima se reunir&aacute; el Pleno de la comisi&oacute;n de estrategia TIC?";
 choices[24]= new Array();
 choices[24][0] = "Mensual";
 choices[24][1] = "Semestral";
 choices[24][2] = "Trimestral";
 choices[24][3] = "Anual";
 answers[24] = choices[24][1];
 units[24] = "24";
 comments[24] = "Id Pregunta: 10742. ";


//  Id pregunta: 10756 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  &iquest;C&oacute;mo se denomina la Comisi&oacute;n Delegada del Gobierno para la Seguridad Nacional que asiste al Presidente del Gobierno en la direcci&oacute;n de la Pol&iacute;tica de Seguridad Nacional?";
 choices[25]= new Array();
 choices[25][0] = "El Consejo de Seguridad Nacional.";
 choices[25][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[25][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[25][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[25] = choices[25][0];
 units[25] = "43";
 comments[25] = "Id Pregunta: 10756. ";


//  Id pregunta: 10790 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  El algoritmo de Peterson corresponde a:";
 choices[26]= new Array();
 choices[26][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[26][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[26][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[26][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[26] = choices[26][3];
 units[26] = "52";
 comments[26] = "Id Pregunta: 10790. Examen GSI 2014";


//  Id pregunta: 10810 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[27]= new Array();
 choices[27][0] = "Denegaci&oacute;n de servicio.";
 choices[27][1] = "Hombre intermedio.";
 choices[27][2] = "Fuerza Bruta.";
 choices[27][3] = "Ingenier&iacute;a social.";
 answers[27] = choices[27][0];
 units[27] = "111";
 comments[27] = "Id Pregunta: 10810. Examen GSI 2014";


//  Id pregunta: 10811 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera una de las libertades esenciales que cumple el software libre:";
 choices[28]= new Array();
 choices[28][0] = "Libertad para ejecutar y usar el software con la &uacute;nica restricci&oacute;n que se debe especificar y aprobar su prop&oacute;sito.";
 choices[28][1] = "Libertad para estudiar el programa y modificarlo, adapt&aacute;ndolo a sus necesidades.";
 choices[28][2] = "Libertad de distribuir copias.";
 choices[28][3] = "Libertad de modificar el programa y liberar las modificaciones al p&uacute;blico.";
 answers[28] = choices[28][0];
 units[28] = "61";
 comments[28] = "Id Pregunta: 10811. Examen GSI 2014";


//  Id pregunta: 10832 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el proceso de normalizaci&oacute;n del Modelo Relacional es cierta?";
 choices[29]= new Array();
 choices[29][0] = "Existen s&oacute;lo un total de 3 Formas Normales: 1FN, 2FN y 3FN.";
 choices[29][1] = "Una tabla est&aacute; en 2FN cuando se demuestra que existe dependencia funcional del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[29][2] = "Una tabla est&aacute; en 1FN cuando se demuestra que existe dependencia funcional completa del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[29][3] = "Una tabla que est&aacute; en 1FN tiene el m&aacute;ximo grado de normalizaci&oacute;n y, por tanto, cumple tambi&eacute;n la Segunda y Tercera Forma Normal.";
 answers[29] = choices[29][1];
 units[29] = "80";
 comments[29] = "Id Pregunta: 10832. Examen GSI 2014";


//  Id pregunta: 10844 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  El tipo de prueba BigBang es de tipo:";
 choices[30]= new Array();
 choices[30][0] = "Prueba de sistema.";
 choices[30][1] = "Prueba de aceptaci&oacute;n.";
 choices[30][2] = "Prueba de rendimiento.";
 choices[30][3] = "Prueba de integraci&oacute;n.";
 answers[30] = choices[30][3];
 units[30] = "0";
 comments[30] = "Id Pregunta: 10844. Examen GSI 2014";


//  Id pregunta: 10862 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  Seg&uacute;n la definici&oacute;n de DataWarehouse de William Inmon, se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una caracter&iacute;stica de este tipo de sistemas:";
 choices[31]= new Array();
 choices[31][0] = "Integrado: los datos deben integrarse en una estructura consistente.";
 choices[31][1] = "Tem&aacute;tico: los datos se organizan por temas.";
 choices[31][2] = "Hist&oacute;rico: una variable puede tomar distintos valores en el tiempo.";
 choices[31][3] = "Vol&aacute;til: los datos no son permanentes en el sistema.";
 answers[31] = choices[31][3];
 units[31] = "68, 71";
 comments[31] = "Id Pregunta: 10862. Examen GSI 2014";


//  Id pregunta: 10869 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[32]= new Array();
 choices[32][0] = "grep error log.txt | wc &ndash;l";
 choices[32][1] = "grep wc &ndash;l |error log.txt";
 choices[32][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[32][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[32] = choices[32][0];
 units[32] = "53, 54";
 comments[32] = "Id Pregunta: 10869. Examen GSI 2014";


//  Id pregunta: 10873 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  Respecto a la tecnolog&iacute;a de almacenamiento InnoDB se&ntilde;ale la respuesta afirmativa:";
 choices[33]= new Array();
 choices[33][0] = "InnoDB es una tecnolog&iacute;a de almacenamiento de datos de c&oacute;digo abierto para la base de datos Oracle.";
 choices[33][1] = "Es la tecnolog&iacute;a de almacenamiento de datos por defecto por el sistema administrador de bases de datos relacionales MySQL.";
 choices[33][2] = "Se basa en el c&oacute;digo ISAM.";
 choices[33][3] = "No permite las b&uacute;squedas denominadas full-text, que para conjuntos de datos grandes son mucho m&aacute;s eficientes.";
 answers[33] = choices[33][1];
 units[33] = "57";
 comments[33] = "Id Pregunta: 10873. Examen GSI 2014";


//  Id pregunta: 10925 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as es considerada como una metodolog&iacute;a &aacute;gil?";
 choices[34]= new Array();
 choices[34][0] = "RAD.";
 choices[34][1] = "OpenUP.";
 choices[34][2] = "SSADM.";
 choices[34][3] = "UP.";
 answers[34] = choices[34][1];
 units[34] = "79";
 comments[34] = "Id Pregunta: 10925. TIC A1 AGE 2014";


//  Id pregunta: 10931 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  En materia de protecci&oacute;n de datos, el ejercicio del derecho de cancelaci&oacute;n dar&aacute; lugar:";
 choices[35]= new Array();
 choices[35][0] = "A que se modifiquen los datos que resulten ser falsos o inexactos.";
 choices[35][1] = "A que se modifiquen los datos que resulten ser inadecuados o inexactos.";
 choices[35][2] = "A que se supriman los datos que resulten ser inadecuados o excesivos.";
 choices[35][3] = "A que se supriman los datos que resulten ser inexactos o excesivos.";
 answers[35] = choices[35][2];
 units[35] = "29";
 comments[35] = "Id Pregunta: 10931. TIC A1 AGE 2014";


//  Id pregunta: 10936 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  Seg&uacute;n lo dispuesto en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales (SICRES 3.0) es correcto que:";
 choices[36]= new Array();
 choices[36][0] = "El segmento &quot;de internos y control&quot; contiene informaci&oacute;n sobre si el asiento registral incluye documentaci&oacute;n f&iacute;sica requerida para el tr&aacute;mite del procedimiento.";
 choices[36][1] = "El c&oacute;digo de la Entidad Registral de Destino debe incluir un prefijo que identifique al Ministerio (MXX-YYYY), seg&uacute;n se establece en la codificaci&oacute;n de organismos del Directorio Com&uacute;n.";
 choices[36][2] = "El segmento &quot;de anexo&quot; es obligatorio y puede declararse de forma m&uacute;ltiple.";
 choices[36][3] = "En el segmento &quot;de internos y de control&quot; se incluye la firma del documento anexo, como un campo obligatorio.";
 answers[36] = choices[36][0];
 units[36] = "43";
 comments[36] = "Id Pregunta: 10936. TIC A1 AGE 2014";


//  Id pregunta: 10942 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  En relaci&oacute;n con las soluciones MDM (Mobile Device Management), se&ntilde;ale la respuesta correcta:";
 choices[37]= new Array();
 choices[37][0] = "En ning&uacute;n caso contemplan la tendencia BYOD (Bring Your Own Device) que permite a los usuarios de una organizaci&oacute;n hacer uso de sus dispositivos m&oacute;viles personales para el acceso al entorno, servicios y datos corporativos.";
 choices[37][1] = "Sirven para gestionar la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n no siendo adecuados para el inventario de dispositivos m&oacute;viles.";
 choices[37][2] = "Los fabricantes de las principales plataformas m&oacute;viles no proporcionan soluciones MDM por lo que hay que recurrir siempre a soluciones de terceros.";
 choices[37][3] = "Permiten la monitorizaci&oacute;n autom&aacute;tica de los dispositivos m&oacute;viles y la generaci&oacute;n de alertas al incumplirse la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n.";
 answers[37] = choices[37][3];
 units[37] = "108";
 comments[37] = "Id Pregunta: 10942. TIC A1 AGE 2014";


//  Id pregunta: 10948 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  Para una red wifi, &iquest;c&uacute;al de los siguientes NO es un protocolo de seguridad que le sea aplicable?";
 choices[38]= new Array();
 choices[38][0] = "WPA2.";
 choices[38][1] = "WPA.";
 choices[38][2] = "WAP.";
 choices[38][3] = "WEP.";
 answers[38] = choices[38][2];
 units[38] = "107";
 comments[38] = "Id Pregunta: 10948. TIC A1 AGE 2014";


//  Id pregunta: 10950 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  &iquest;C&uacute;al de las siguientes opciones es un sistema de gesti&oacute;n de contenidos?";
 choices[39]= new Array();
 choices[39][0] = "MongoDB";
 choices[39][1] = "Redis";
 choices[39][2] = "Cassandra";
 choices[39][3] = "Drupal";
 answers[39] = choices[39][3];
 units[39] = "95";
 comments[39] = "Id Pregunta: 10950. TIC A1 AGE 2014";


//  Id pregunta: 10984 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  En M&eacute;trica 3, la utilizaci&oacute;n del modelo entidad relaci&oacute;n extendido se recomienda en los procesos de:";
 choices[40]= new Array();
 choices[40][0] = "An&aacute;lisis y Dise&ntilde;o.";
 choices[40][1] = "Solo en el An&aacute;lisis.";
 choices[40][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de Viabilidad y An&aacute;lisis.";
 choices[40][3] = "Solo en Planificaci&oacute;n de Sistemas de Informaci&oacute;n y Estudio de Viabilidad.";
 answers[40] = choices[40][2];
 units[40] = "86";
 comments[40] = "Id Pregunta: 10984. TIC A1 AGE 2014";


//  Id pregunta: 10991 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  El tipo de infraestructura de cloud computing que permite mantener las aplicaciones cr&iacute;ticas dentro de una infraestructura controlada y hacer uso de otros servicios y aplicaciones compartidos por varios clientes se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Nube privada";
 choices[41][1] = "Nube h&iacute;brida";
 choices[41][2] = "Nube p&uacute;blica";
 choices[41][3] = "Infraestructura como Servicio (IaaS)";
 answers[41] = choices[41][1];
 units[41] = "47";
 comments[41] = "Id Pregunta: 10991. TIC A1 AGE 2014";


//  Id pregunta: 10995 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  Para prevenir un ataque de SQL Injection:";
 choices[42]= new Array();
 choices[42][0] = "Debe detenerse la base de datos para evitar su infecci&oacute;n por el c&oacute;digo malicioso.";
 choices[42][1] = "Debe evitarse el uso de procedimientos almacenados en la base de datos.";
 choices[42][2] = "Debe eliminarse del equipo del usuario el c&oacute;digo SQL descargado, para evitar su propagaci&oacute;n.";
 choices[42][3] = "Debe utilizarse instrucciones SQL parametrizadas.";
 answers[42] = choices[42][3];
 units[42] = "111";
 comments[42] = "Id Pregunta: 10995. TIC A1 AGE 2014";


//  Id pregunta: 11012 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza el secreto de las comunicaciones?";
 choices[43]= new Array();
 choices[43][0] = "Art&iacute;culo 15";
 choices[43][1] = "17";
 choices[43][2] = "Art&iacute;culo 18";
 choices[43][3] = "Art&iacute;culo 19";
 answers[43] = choices[43][2];
 units[43] = "29";
 comments[43] = "Id Pregunta: 11012. ";


//  Id pregunta: 11022 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l es la &uacute;nica pauta definida dentro del principio de robustez de las WCAG 2.0? ";
 choices[44]= new Array();
 choices[44][0] = "Alternativas textuales";
 choices[44][1] = "Accesible a trav&eacute;s de teclado";
 choices[44][2] = "Compatible";
 choices[44][3] = "Ayuda a la entrada de datos";
 answers[44] = choices[44][2];
 units[44] = "39";
 comments[44] = "Id Pregunta: 11022. ";


//  Id pregunta: 11029 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l es una plataforma pionera de software abierto que permite el desarrollo de clouds privados de infraestructuras como servicio (IaaS)?";
 choices[45]= new Array();
 choices[45][0] = "VMWARE";
 choices[45][1] = "EUCALYPTUS";
 choices[45][2] = "LYRIUS";
 choices[45][3] = "AMAPOLUS";
 answers[45] = choices[45][1];
 units[45] = "47";
 comments[45] = "Id Pregunta: 11029. ";


//  Id pregunta: 11037 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Qu&eacute; versi&oacute;n de SQL incorpor&oacute; las reglas de integridad referencial?";
 choices[46]= new Array();
 choices[46][0] = "SQL-86";
 choices[46][1] = "SQL-89";
 choices[46][2] = "SQL-92";
 choices[46][3] = "SQL-1999";
 answers[46] = choices[46][1];
 units[46] = "58";
 comments[46] = "Id Pregunta: 11037. ";


//  Id pregunta: 11041 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[47]= new Array();
 choices[47][0] = "5";
 choices[47][1] = "6";
 choices[47][2] = "7";
 choices[47][3] = "8";
 answers[47] = choices[47][3];
 units[47] = "60";
 comments[47] = "Id Pregunta: 11041. Viiene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";


//  Id pregunta: 11046 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Qu&eacute; Directiva establece las reglas generales para el establecimiento de una Infraestructura de Informaci&oacute;n Espacial en la Comunidad Europea basada en las Infraestructuras de los Estados miembros?";
 choices[48]= new Array();
 choices[48][0] = "INSPIRE";
 choices[48][1] = "SIGPAC";
 choices[48][2] = "SIC";
 choices[48][3] = "SIGMAPA";
 answers[48] = choices[48][0];
 units[48] = "67";
 comments[48] = "Id Pregunta: 11046. ";


//  Id pregunta: 11068 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  &iquest;Cual de la siguientes afirmaciones es CORRECTA para TODOS los procesos?";
 choices[49]= new Array();
 choices[49][0] = "Definen actividades, roles, responsabilidades, funciones y m&eacute;tricas";
 choices[49][1] = "Crean valor para las partes interesadas (stakeholders)";
 choices[49][2] = "Se entrega por un Proveedor de Servicios como soporte a un Cliente";
 choices[49][3] = "Son unidades de las Organizaciones, responsables de resultados espec&iacute;ficos";
 answers[49] = choices[49][1];
 units[49] = "98";
 comments[49] = "Id Pregunta: 11068. ";


//  Id pregunta: 11106 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  Seleccione la respuesta correcta sobre las estrategias de recuperaci&oacute;n.";
 choices[50]= new Array();
 choices[50][0] = "Los Cold Sites son instalaciones parcialmente configurados, que permiten la recuperaci&oacute;n en menos de una semana.";
 choices[50][1] = "Las instalaciones redundantes permiten una recuperaci&oacute;n inmediata ante una interrupci&oacute;n";
 choices[50][2] = "Los Hot Sites tienen un coste menor que los Cold Sites";
 choices[50][3] = "La configuraci&oacute;n m&aacute;s adecuada para un Warm Site es de mirroring.";
 answers[50] = choices[50][1];
 units[50] = "32";
 comments[50] = "Id Pregunta: 11106. ";


//  Id pregunta: 11116 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  Seleccione la opci&oacute;n verdadera respecto a la clasificaci&oacute;n de las empresas en contratos";
 choices[51]= new Array();
 choices[51][0] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y contratos de servicios de valor estimado mayor que 500.000&euro;";
 choices[51][1] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 500.000&euro; y contratos de servicios de valor estimado mayor que 200.000&euro;";
 choices[51][2] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y en todo caso para contratos de servicios";
 choices[51][3] = "S&oacute;lo es exigible en contratos de obras en todo caso y contratos de servicios de valor estimado mayor que 200.000&euro;";
 answers[51] = choices[51][1];
 units[51] = "41";
 comments[51] = "Id Pregunta: 11116. ";


//  Id pregunta: 11125 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "CEN";
 choices[52][1] = "UNE";
 choices[52][2] = "CENELEC";
 choices[52][3] = "ETSI";
 answers[52] = choices[52][1];
 units[52] = "42";
 comments[52] = "Id Pregunta: 11125. ";


//  Id pregunta: 11134 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes no es una Shell de Linux?";
 choices[53]= new Array();
 choices[53][0] = "Shell X";
 choices[53][1] = "Shell de Korn";
 choices[53][2] = "Shell de Bourne";
 choices[53][3] = "Shell C";
 answers[53] = choices[53][0];
 units[53] = "54";
 comments[53] = "Id Pregunta: 11134. ";


//  Id pregunta: 11149 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;Qu&eacute; versi&oacute;n del PKCS define una interfaz para el acceso a dispositivos que contienen informaci&oacute;n criptogr&aacute;fica como Tokens o Tarjetas?";
 choices[54]= new Array();
 choices[54][0] = "PKCS 1";
 choices[54][1] = "PKCS 7";
 choices[54][2] = "PCKCS 9";
 choices[54][3] = "PKCS 11";
 answers[54] = choices[54][3];
 units[54] = "73";
 comments[54] = "Id Pregunta: 11149. ";


//  Id pregunta: 11171 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un modelo cl&aacute;sico de recuperaci&oacute;n de informaci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "Probabil&iacute;stico";
 choices[55][1] = "Estructurado";
 choices[55][2] = "Vectorial";
 choices[55][3] = "Booleano";
 answers[55] = choices[55][1];
 units[55] = "96";
 comments[55] = "Id Pregunta: 11171. ";


//  Id pregunta: 11191 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  &iquest;A partir de cuanto tiempo de retardo hace que la calidad de una videoconferencia sea cr&iacute;tica?";
 choices[56]= new Array();
 choices[56][0] = "50 ms";
 choices[56][1] = "150 ms";
 choices[56][2] = "300 ms";
 choices[56][3] = "600 ms";
 answers[56] = choices[56][2];
 units[56] = "117";
 comments[56] = "Id Pregunta: 11191. ";


//  Id pregunta: 11221 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es el nombre de la biblioteca de clases del Framework de .NET?";
 choices[57]= new Array();
 choices[57][0] = "FCL";
 choices[57][1] = "CLR";
 choices[57][2] = "CLS";
 choices[57][3] = "JIT";
 answers[57] = choices[57][0];
 units[57] = "59";
 comments[57] = "Id Pregunta: 11221. ";


//  Id pregunta: 11223 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  En el Framework de .NET, los servicios web:";
 choices[58]= new Array();
 choices[58][0] = "Se definen en ficheros de extensi&oacute;n .asmx incluyendo la directiva WebService.";
 choices[58][1] = "ASP.NET no se puede integrar f&aacute;cilmente con tecnolog&iacute;as como AJAX para construir aplicaciones RIA.";
 choices[58][2] = "Los servicios Web WCF pueden ser SOAP o REST, aunque no soportan un formato no XML como JSON.";
 choices[58][3] = "Los servicios WCF (Windows Communication Foundation) siempre se ejecutan directamente sobre TCP.";
 answers[58] = choices[58][0];
 units[58] = "59";
 comments[58] = "Id Pregunta: 11223. ";


//  Id pregunta: 11250 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  Las garant&iacute;as en los contratos NO se:";
 choices[59]= new Array();
 choices[59][0] = "Reponen para responder ante penalizaciones o indemnizaciones.";
 choices[59][1] = "Reutilizan para cubrir necesidades de otro contrato.";
 choices[59][2] = "Reajustan ante variaciones en el precio del contrato, debido a una modificaci&oacute;n de &eacute;ste.";
 choices[59][3] = "Devuelven o cancelan cuando vence el per&iacute;odo de garant&iacute;a del contrato y &eacute;ste se ha cumplido de forma satisfactoria, o cuando se resuelve el contrato, sin que exista culpa por parte del contratista.";
 answers[59] = choices[59][1];
 units[59] = "41";
 comments[59] = "Id Pregunta: 11250. ";


//  Id pregunta: 11257 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Sobre la criptograf&iacute;a h&iacute;brida:";
 choices[60]= new Array();
 choices[60][0] = "El transmisor cifra el mensaje con una clave sim&eacute;trica o de sesi&oacute;n, y a su vez cifra esa clave sim&eacute;trica con la clave privada del destinatario.";
 choices[60][1] = "Es utilizada por Pretty Good Privacy.";
 choices[60][2] = "Tambi&eacute;n se conocen como &ldquo;sobre digital&rdquo;.";
 choices[60][3] = "B) y C) son correctas.";
 answers[60] = choices[60][3];
 units[60] = "72";
 comments[60] = "Id Pregunta: 11257. ";


//  Id pregunta: 11308 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Cu&aacute;l de los siguientes &oacute;rganos no es un &oacute;rgano de contrataci&oacute;n en el &aacute;mbito de un ministerio.";
 choices[61]= new Array();
 choices[61][0] = "Ministro";
 choices[61][1] = "Secretario de Estado.";
 choices[61][2] = "Junta de Contrataci&oacute;n.";
 choices[61][3] = "Mesa de Contrataci&oacute;n.";
 answers[61] = choices[61][3];
 units[61] = "41";
 comments[61] = "Id Pregunta: 11308. La Mesa de Contrataci&oacute;n es un &oacute;rgano de asistencia.";


//  Id pregunta: 11343 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n falsa de entre las siguientes:";
 choices[62]= new Array();
 choices[62][0] = "Las relaciones regulares son entre dos entidades fuertes";
 choices[62][1] = "La existencia de las entidades fuertes, depende de otra entidad";
 choices[62][2] = "Las entidades pueden ser fuertes o d&eacute;biles";
 choices[62][3] = "Las relaciones d&eacute;biles se producen entre una entidad fuerte y otra d&eacute;bil";
 answers[62] = choices[62][1];
 units[62] = "80";
 comments[62] = "Id Pregunta: 11343. ";


//  Id pregunta: 11389 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes actividades asegura y desempe&ntilde;a la Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio?: 1. Identificar los elementos de configuraci&oacute;n (CI); 2. Que los CIs tengan una l&iacute;nea base; 3. Controlar los cambios en los CIs";
 choices[63]= new Array();
 choices[63][0] = "Todos";
 choices[63][1] = "Solo 1 y 2";
 choices[63][2] = "Solo 3";
 choices[63][3] = "Solo 2 y 3";
 answers[63] = choices[63][0];
 units[63] = "98";
 comments[63] = "Id Pregunta: 11389. ";


//  Id pregunta: 11435 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Seg&uacute;n la Ley 9/2014, las decisiones relativas a los otorgamientos de derechos de uso (de numeraci&oacute;n, direccionamiento y denominaci&oacute;n) se adoptar&aacute;n en el plazo de:";
 choices[64]= new Array();
 choices[64][0] = "10 d&iacute;as.";
 choices[64][1] = "15 d&iacute;as.";
 choices[64][2] = "3 semanas.";
 choices[64][3] = "6 semanas.";
 answers[64] = choices[64][3];
 units[64] = "110";
 comments[64] = "Id Pregunta: 11435. ";


//  Id pregunta: 11458 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley General de Telecomunicaciones 9/2014 es correcta?:";
 choices[65]= new Array();
 choices[65][0] = "La Comisi&oacute;n Nacional de los Mercados y de la Competencia suministrar&aacute; a las empresas que hagan gu&iacute;as de abonados los datos que faciliten los operadores.";
 choices[65][1] = "Los usuarios finales tienen derecho a cambiar de operador en el plazo de 1 d&iacute;a laborable.";
 choices[65][2] = "La llamada a los servicios de emergencias tienen un coste definido por el operador.";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = choices[65][1];
 units[65] = "110";
 comments[65] = "Id Pregunta: 11458. ";


//  Id pregunta: 11463 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Seg&uacute;n la Ley 9/2014, los costes derivados de la actualizaci&oacute;n de los elementos de la red y de los sistemas necesarios para hacer posible la conservaci&oacute;n de los n&uacute;meros que deber&aacute;n ser sufragados por:";
 choices[66]= new Array();
 choices[66][0] = "El Gobierno.";
 choices[66][1] = "El usuario a trav&eacute;s de la cuota de l&iacute;nea.";
 choices[66][2] = "Cada operador.";
 choices[66][3] = "Entre cada operador y los usuarios.";
 answers[66] = choices[66][2];
 units[66] = "110";
 comments[66] = "Id Pregunta: 11463. ";


//  Id pregunta: 11467 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Indique la opci&oacute;n FALSA entre las siguientes sobre la Ley General de Telecomunicaciones 9/2014:";
 choices[67]= new Array();
 choices[67][0] = "Los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n se aprueban por real decreto.";
 choices[67][1] = "El MINETUR podr&aacute;, mediante orden ministerial y previo informe de la CNMC, modificar la estructura y organizaci&oacute;n de los planes nacionales.";
 choices[67][2] = "La CNMC podr&aacute; fijar mediante circular la conservaci&oacute;n de los n&uacute;meros.";
 choices[67][3] = "La CNMC podr&aacute; fijar mediante resoluci&oacute;n las condiciones de conservaci&oacute;n de los n&uacute;meros.";
 answers[67] = choices[67][3];
 units[67] = "110";
 comments[67] = "Id Pregunta: 11467. ";


//  Id pregunta: 11484 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[68]= new Array();
 choices[68][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[68][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[68][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[68][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[68] = choices[68][0];
 units[68] = "43";
 comments[68] = "Id Pregunta: 11484. NULL";


//  Id pregunta: 11485 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  De entre los siguientes sujetos, &iquest;qui&eacute;n est&aacute; obligado a relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo seg&uacute;n el art&iacute;culo 14 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015?";
 choices[69]= new Array();
 choices[69][0] = "Personas jur&iacute;dicas.";
 choices[69][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[69][2] = "Notarios y registradores de la propiedad y mercantiles.";
 choices[69][3] = "Todos los anteriores.";
 answers[69] = choices[69][3];
 units[69] = "43";
 comments[69] = "Id Pregunta: 11485. NULL";


//  Id pregunta: 11496 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  La tasa de rentabilidad que se emplea para calcular el Valor Actual Neto (VAN) de una inversi&oacute;n es:";
 choices[70]= new Array();
 choices[70][0] = "La tasa de rentabilidad esperada para esa inversi&oacute;n.";
 choices[70][1] = "La tasa de rentabilidad exigida para esa inversi&oacute;n.";
 choices[70][2] = "La tasa de inflaci&oacute;n.";
 choices[70][3] = "Ninguna de las anteriores.";
 answers[70] = choices[70][1];
 units[70] = "38";
 comments[70] = "Id Pregunta: 11496. NULL";


//  Id pregunta: 11513 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[71]= new Array();
 choices[71][0] = "MD5";
 choices[71][1] = "TDEA";
 choices[71][2] = "AES";
 choices[71][3] = "RSA";
 answers[71] = choices[71][0];
 units[71] = "72";
 comments[71] = "Id Pregunta: 11513. NULL";


//  Id pregunta: 11516 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  La RFC del IETF que hace referencia al modelo de directorio LDAP es:";
 choices[72]= new Array();
 choices[72][0] = "RFC 3161";
 choices[72][1] = "RFC 4510";
 choices[72][2] = "RFC 4120";
 choices[72][3] = "RFC 6101";
 answers[72] = choices[72][1];
 units[72] = "73";
 comments[72] = "Id Pregunta: 11516. NULL";


//  Id pregunta: 11526 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seleccione el fichero de Linux que contiene las direcciones de los servidores DNS necesarios para la navegaci&oacute;n por Internet.";
 choices[73]= new Array();
 choices[73][0] = "crontab";
 choices[73][1] = "interfaces";
 choices[73][2] = "resolv.conf";
 choices[73][3] = "dns.conf";
 answers[73] = choices[73][2];
 units[73] = "53";
 comments[73] = "Id Pregunta: 11526. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11533 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Se&ntilde;ale la respuesta correcta relativa a la seguridad en la parte de interfaz de usuario.";
 choices[74]= new Array();
 choices[74][0] = "Con Windows forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en roles.";
 choices[74][1] = "Con Web forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en c&oacute;digo";
 choices[74][2] = "Con Web forms se tiene en cuenta la seguridad basada en roles y en c&oacute;digo.";
 choices[74][3] = "Todas las anteriores son falsas.";
 answers[74] = choices[74][3];
 units[74] = "59";
 comments[74] = "Id Pregunta: 11533. NULL";


//  Id pregunta: 11577 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  En una red H.323, &iquest;Qu&iacute;en tiene las funciones de DNS?";
 choices[75]= new Array();
 choices[75][0] = "MCU";
 choices[75][1] = "LMU";
 choices[75][2] = "GateKeeper";
 choices[75][3] = "GateControler";
 answers[75] = choices[75][2];
 units[75] = "117";
 comments[75] = "Id Pregunta: 11577. NULL";


//  Id pregunta: 11579 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  La velocidad y el ancho de banda en las celdas LTE es:";
 choices[76]= new Array();
 choices[76][0] = "Subida hasta 326Mbps y ancho de canal de 5Mhz";
 choices[76][1] = "Subida hasta 2Mbps y ancho de canal de 5Mhz";
 choices[76][2] = "Subida hasta 256Mbps y ancho de canal de 200Khz";
 choices[76][3] = "Subida hasta 1Gpbs y ancho de canal de 160Mhz";
 answers[76] = choices[76][0];
 units[76] = "107";
 comments[76] = "Id Pregunta: 11579. NULL";


//  Id pregunta: 11594 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  El metadato m&iacute;nimo obligatorio 'Origen' de un documento electr&oacute;nico indica:";
 choices[77]= new Array();
 choices[77][0] = "El &oacute;rgano generador del documento o que realiza la captura del mismo.";
 choices[77][1] = "La naturaleza del documento; esto es, si se trata de un original o una copia electr&oacute;nica.";
 choices[77][2] = "Si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n";
 choices[77][3] = "El lugar de procedencia del documento.";
 answers[77] = choices[77][2];
 units[77] = "43";
 comments[77] = "Id Pregunta: 11594. ";


//  Id pregunta: 11597 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[78]= new Array();
 choices[78][0] = "Ley 39/2015";
 choices[78][1] = "Ley 40/2015";
 choices[78][2] = "Ley 29/2015";
 choices[78][3] = "Ley 30/2015";
 answers[78] = choices[78][0];
 units[78] = "43";
 comments[78] = "Id Pregunta: 11597. ";


//  Id pregunta: 11602 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La Orden HAP/7/2014 regula:";
 choices[79]= new Array();
 choices[79][0] = "El sistema cl@ve";
 choices[79][1] = "El Registro electr&oacute;nico de apoderamientos";
 choices[79][2] = "El Registro de funcionarios habilitados";
 choices[79][3] = "El sistema AutenticA";
 answers[79] = choices[79][2];
 units[79] = "44";
 comments[79] = "Id Pregunta: 11602. ";


//  Id pregunta: 11605 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La tecnolog&iacute;a NFC opera a una frecuencia de:";
 choices[80]= new Array();
 choices[80][0] = "1,63 MHz";
 choices[80][1] = "13,56 MHz";
 choices[80][2] = "2,45 GHz";
 choices[80][3] = "5,4 GHz";
 answers[80] = choices[80][1];
 units[80] = "46";
 comments[80] = "Id Pregunta: 11605. ";


//  Id pregunta: 11606 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  La tasa de transferencia de USB 3.0 es de:";
 choices[81]= new Array();
 choices[81][0] = "60 MB/s";
 choices[81][1] = "100 MB/s";
 choices[81][2] = "600 MB/s";
 choices[81][3] = "1GB/s";
 answers[81] = choices[81][2];
 units[81] = "46";
 comments[81] = "Id Pregunta: 11606. ";


//  Id pregunta: 11610 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  BPEL est&aacute; estandarizado por:";
 choices[82]= new Array();
 choices[82][0] = "BMPI";
 choices[82][1] = "OASIS";
 choices[82][2] = "WfMC";
 choices[82][3] = "W3C";
 answers[82] = choices[82][1];
 units[82] = "51";
 comments[82] = "Id Pregunta: 11610. ";


//  Id pregunta: 11612 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Con respecto al sistema operativo Windows 10, se&ntilde;ale la falsa:";
 choices[83]= new Array();
 choices[83][0] = "Se mantiene y mejora el Men&uacute; de Inicio.";
 choices[83][1] = "Desaparece el entorno Modern UI.";
 choices[83][2] = "Permite crear y administrar escritorios virtuales.";
 choices[83][3] = "Incluye el asistente personal Cortana.";
 answers[83] = choices[83][1];
 units[83] = "56";
 comments[83] = "Id Pregunta: 11612. ";


//  Id pregunta: 11614 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Se&ntilde;ale cu&aacute;l de los siguientes no es un operador b&aacute;sico en SQL:";
 choices[84]= new Array();
 choices[84][0] = "Proyecci&oacute;n";
 choices[84][1] = "Intersecci&oacute;n";
 choices[84][2] = "Producto cartesiano";
 choices[84][3] = "Uni&oacute;n";
 answers[84] = choices[84][1];
 units[84] = "58";
 comments[84] = "Id Pregunta: 11614. ";


//  Id pregunta: 11616 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La libertad de distribuci&oacute;n, seg&uacute;n la definici&oacute;n de SW libre de Richard Stallman se identifica como la libertad n&uacute;mero:";
 choices[85]= new Array();
 choices[85][0] = "0";
 choices[85][1] = "1";
 choices[85][2] = "2";
 choices[85][3] = "3";
 answers[85] = choices[85][2];
 units[85] = "61";
 comments[85] = "Id Pregunta: 11616. ";


//  Id pregunta: 11618 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Un ejemplo de cliente de correo electr&oacute;nico de SW libre es:";
 choices[86]= new Array();
 choices[86][0] = "Amarok";
 choices[86][1] = "Firefox";
 choices[86][2] = "KeePass";
 choices[86][3] = "Thunderbird";
 answers[86] = choices[86][3];
 units[86] = "62";
 comments[86] = "Id Pregunta: 11618. ";


//  Id pregunta: 11624 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Se&ntilde;ale la respuesta incorrecta con respecto al procesado de documentos XML:";
 choices[87]= new Array();
 choices[87][0] = "Los parsers DOM consumen mucha memoria.";
 choices[87][1] = "Los parsers DOM facilitan el acceso a toda la informaci&oacute;n del documento XML.";
 choices[87][2] = "Los parsers SAX permiten la modificaci&oacute;n de datos en memoria.";
 choices[87][3] = "Para los parsers SAX el tama&ntilde;o del documento XML es irrelevante.";
 answers[87] = choices[87][2];
 units[87] = "69";
 comments[87] = "Id Pregunta: 11624. ";


//  Id pregunta: 11631 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La metodolog&iacute;a OOSE fue desarrollada por:";
 choices[88]= new Array();
 choices[88][0] = "Booch";
 choices[88][1] = "Rumbaugh";
 choices[88][2] = "Jacobson";
 choices[88][3] = "Codd";
 answers[88] = choices[88][2];
 units[88] = "79";
 comments[88] = "Id Pregunta: 11631. ";


//  Id pregunta: 11642 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En el modelo EFQM, de los siguientes criterios, el que tiene un mayor peso en la puntuaci&oacute;n es:";
 choices[89]= new Array();
 choices[89][0] = "Resultados en los clientes";
 choices[89][1] = "Resultados en la sociedad";
 choices[89][2] = "Resultados en las personas";
 choices[89][3] = "Todos tienen el mismo peso";
 answers[89] = choices[89][0];
 units[89] = "92";
 comments[89] = "Id Pregunta: 11642. ";


//  Id pregunta: 11650 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El protocolo TCP se encuentra especificado en:";
 choices[90]= new Array();
 choices[90][0] = "RFC 793";
 choices[90][1] = "RFC 739";
 choices[90][2] = "RFC 791";
 choices[90][3] = "RFC 719";
 answers[90] = choices[90][0];
 units[90] = "100";
 comments[90] = "Id Pregunta: 11650. ";


//  Id pregunta: 11672 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En Java, para redirigir la petici&oacute;n a otra p&aacute;gina JSP se utiliza la etiqueta:";
 choices[91]= new Array();
 choices[91][0] = "page";
 choices[91][1] = "forward";
 choices[91][2] = "request";
 choices[91][3] = "pageContext";
 answers[91] = choices[91][1];
 units[91] = "116";
 comments[91] = "Id Pregunta: 11672. ";


//  Id pregunta: 11681 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En el modelo COCOMO, los CDA (Cost Driven Attributes) se utilizan en el modelo:";
 choices[92]= new Array();
 choices[92][0] = "B&aacute;sico";
 choices[92][1] = "Intermedio";
 choices[92][2] = "Avanzado";
 choices[92][3] = "b) y c) son correctos";
 answers[92] = choices[92][3];
 units[92] = "88, 89";
 comments[92] = "Id Pregunta: 11681. ";


//  Id pregunta: 11684 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Cuando un switch recibe una trama y no posee la direcci&oacute;n de destino, el switch:";
 choices[93]= new Array();
 choices[93][0] = "env&iacute;a la trama por todos los puertos";
 choices[93][1] = "env&iacute;a un ARP para obtener la direcci&oacute;n de destino de la trama";
 choices[93][2] = "reenv&iacute;a la trama por todos los puertos, excepto por el que fue recibido";
 choices[93][3] = "descarta la trama";
 answers[93] = choices[93][2];
 units[93] = "100";
 comments[93] = "Id Pregunta: 11684. NULL";


//  Id pregunta: 11725 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)   &iquest;Qu&eacute; protocolo soporta la transmisi&oacute;n de informaci&oacute;n en tiempo real?";
 choices[94]= new Array();
 choices[94][0] = "UDP";
 choices[94][1] = "RTP";
 choices[94][2] = "SMTP";
 choices[94][3] = "NTP";
 answers[94] = choices[94][1];
 units[94] = "100";
 comments[94] = "Id Pregunta: 11725. NULL";


//  Id pregunta: 11729 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Qu&eacute; dos algoritmos de cifrado se utilizan en IPsec VPN?";
 choices[95]= new Array();
 choices[95][0] = "3DES y AES";
 choices[95][1] = "AES y DH";
 choices[95][2] = "3DES y PSK";
 choices[95][3] = "IKE y PSK";
 answers[95] = choices[95][0];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11729. NULL";


//  Id pregunta: 11733 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[96]= new Array();
 choices[96][0] = "MTBF";
 choices[96][1] = "MTBR";
 choices[96][2] = "MTTR";
 choices[96][3] = "MTTF";
 answers[96] = choices[96][2];
 units[96] = "32";
 comments[96] = "Id Pregunta: 11733. ";


//  Id pregunta: 11763 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Por qui&eacute;n est&aacute; presidida la Comisi&oacute;n Estrat&eacute;gica TIC?";
 choices[97]= new Array();
 choices[97][0] = "Ministro de Industria, Energ&iacute;a y Turismo";
 choices[97][1] = "Ministro de Fomento";
 choices[97][2] = "Ministro de Econom&iacute;a";
 choices[97][3] = "Ministro de Hacienda";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11763. ";


//  Id pregunta: 11770 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones no podr&aacute; informar un expediente de contrataci&oacute;n si la documentaci&oacute;n del mismo no incluye: ";
 choices[98]= new Array();
 choices[98][0] = "Presupuesto, objeto y justificaci&oacute;n de la necesidad&nbsp;";
 choices[98][1] = "Presupuesto, objeto y certificado de exclusividad";
 choices[98][2] = "Pliego de cl&aacute;usulas administrativas y memoria econ&oacute;mica";
 choices[98][3] = "Objeto, justificaci&oacute;n temporal y ratio perfiles/horas";
 answers[98] = choices[98][0];
 units[98] = "24, 41";
 comments[98] = "Id Pregunta: 11770. ";


//  Id pregunta: 11775 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Implementaci&oacute;n de servicios compartidos: Los Organismos que van a utilizar un servicio compartido";
 choices[99]= new Array();
 choices[99][0] = "Deben firmar un convenio con la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de la Comunicaci&oacute;n&nbsp;";
 choices[99][1] = "Pueden solicitar prestaciones &quot;ad hoc&quot;";
 choices[99][2] = "Deben usar el presupuesto de la secci&oacute;n 31 para Gastos de&nbsp;Diversos Ministerios";
 choices[99][3] = "Generalmente tienen que contribuir econ&oacute;micamente al servicio";
 answers[99] = choices[99][3];
 units[99] = "44";
 comments[99] = "Id Pregunta: 11775. ";


