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

//  Id pregunta: 9052 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[0]= new Array();
 choices[0][0] = "En el perfil del contratante y en el BOE.";
 choices[0][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[0][2] = "En el BOE y en el DOUE";
 choices[0][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[0] = choices[0][1];
 units[0] = "41";
 comments[0] = "Id Pregunta: 9052. ";


//  Id pregunta: 10597 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  La ISO publica:";
 choices[1]= new Array();
 choices[1][0] = "Informes T&eacute;cnicos y Gu&iacute;as ISO.";
 choices[1][1] = "Especificaciones Internacionales y Memor&aacute;ndum de errores.";
 choices[1][2] = "A y B son correctas.";
 choices[1][3] = "La ISO no publica ning&uacute;n documento, s&oacute;lo certifica est&aacute;ndares de otras organizaciones.";
 answers[1] = choices[1][0];
 units[1] = "42";
 comments[1] = "Id Pregunta: 10597. S&iacute; publica Technical Reports e ISO Guides. Pero no publica Especificaciones Internacionales sino Technical Specifications o Publicly Available Specifications. Tampoco publica Memor&aacute;ndums de Errores sino Correcciones T&eacute;cnicas (Technical Corrigendum).";


//  Id pregunta: 10612 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  El DNIe 3.0:";
 choices[2]= new Array();
 choices[2][0] = "Permite la lectura sin PIN del certificado de firma.";
 choices[2][1] = "Incorpora tecnolog&iacute;a de lectura sin contacto.";
 choices[2][2] = "Reduce la vigencia de los certificados de identificaci&oacute;n y firma a 5 a&ntilde;os.";
 choices[2][3] = "Todas las anteriores.";
 answers[2] = choices[2][1];
 units[2] = "74";
 comments[2] = "Id Pregunta: 10612. A. Permite la lectura sin PIN del certificado de identificaci&oacute;n, no de firma.C. Amplia la vigencia de los certificados (antes 30 meses).";


//  Id pregunta: 10616 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  El algoritmo Rijndael:";
 choices[3]= new Array();
 choices[3][0] = "Tiene un tama&ntilde;o de clave fijo de 128 bits.";
 choices[3][1] = "Tiene un tama&ntilde;o de bloque fijo de 256 bits.";
 choices[3][2] = "Tiene un tama&ntilde;o de clave de 128, 192 o 256 bits.";
 choices[3][3] = "Tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits.";
 answers[3] = choices[3][3];
 units[3] = "72";
 comments[3] = "Id Pregunta: 10616. AES tiene un tama&ntilde;o de clave de 128, 192 o 256 bits. Rijndael, en el que est&aacute; basado, tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits (m&iacute;nimo 128 bits y m&aacute;ximo 256 bits).";


//  Id pregunta: 10617 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  Se&ntilde;ale aquel que se corresponde con un protocolo de establecimiento de claves entre partes:";
 choices[4]= new Array();
 choices[4][0] = "Diffie Hellman";
 choices[4][1] = "RIPEMD";
 choices[4][2] = "Rabbit";
 choices[4][3] = "Blowfish";
 answers[4] = choices[4][0];
 units[4] = "72";
 comments[4] = "Id Pregunta: 10617. ";


//  Id pregunta: 10633 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  Indique cu&aacute;l de los siguientes procesos de M&eacute;trica v3 no incluye actividades de la interfaz para Gestion de la Configuraci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "ASI";
 choices[5][1] = "PSI";
 choices[5][2] = "MSI";
 choices[5][3] = "EVS";
 answers[5] = choices[5][1];
 units[5] = "86";
 comments[5] = "Id Pregunta: 10633. ";


//  Id pregunta: 10648 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  La construcci&oacute;n de los diagramas de flujo de datos se basa en el principio de:";
 choices[6]= new Array();
 choices[6][0] = "Partici&oacute;n.";
 choices[6][1] = "Descomposici&oacute;n.";
 choices[6][2] = "Inconsistencia.";
 choices[6][3] = "Todos los anteriores.";
 answers[6] = choices[6][1];
 units[6] = "81";
 comments[6] = "Id Pregunta: 10648. ";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[7]= new Array();
 choices[7][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[7][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[7][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[7][3] = "Ninguna de las anteriores.";
 answers[7] = choices[7][3];
 units[7] = "30";
 comments[7] = "Id Pregunta: 10674. ";


//  Id pregunta: 10680 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los &quot;Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.&quot;";
 choices[8]= new Array();
 choices[8][0] = "T&iacute;tulo I";
 choices[8][1] = "T&iacute;tulo II";
 choices[8][2] = "T&iacute;tulo III";
 choices[8][3] = "T&iacute;tulo IV";
 answers[8] = choices[8][1];
 units[8] = "30";
 comments[8] = "Id Pregunta: 10680. ";


//  Id pregunta: 10703 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[9]= new Array();
 choices[9][0] = "No se pueden incluir metadatos complementarios.";
 choices[9][1] = "Se pueden incluir metadatos complementarios.";
 choices[9][2] = "Se pueden incluir metadatos complementarios &uacute;nicamente en caso de intercambio de dichos expedientes.";
 choices[9][3] = "Se pueden incluir metadatos complementarios &uacute;nicamente para facilitar el almacenamiento de los expedientes.";
 answers[9] = choices[9][1];
 units[9] = "43";
 comments[9] = "Id Pregunta: 10703. ";


//  Id pregunta: 10706 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l no es un componente del expediente electr&oacute;nico?";
 choices[10]= new Array();
 choices[10][0] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[10][1] = "&Iacute;ndice electr&oacute;nico.";
 choices[10][2] = "Firma del &Iacute;ndice electr&oacute;nico.";
 choices[10][3] = "Metadatos del expediente electr&oacute;nico.";
 answers[10] = choices[10][0];
 units[10] = "43";
 comments[10] = "Id Pregunta: 10706. ";


//  Id pregunta: 10754 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  &iquest;Qui&eacute;n dirige a los tres componentes de la Estructura de Ciberseguridad Nacional (el Consejo de Seguridad Nacional; el Comit&eacute; Especializado de Ciberseguridad; el Comit&eacute; Especializado de Situaci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "El Presidente del Gobierno.";
 choices[11][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[11][2] = "El Ministro de Defensa.";
 choices[11][3] = "El CIO de la AGE.";
 answers[11] = choices[11][0];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10754. ";


//  Id pregunta: 10763 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  Seg&uacute;n la gu&iacute;a de comunicaci&oacute;n digital. Si un sitio ofrece p&aacute;ginas espec&iacute;ficamente a dispositivos m&oacute;viles. &iquest;A qu&eacute; resoluci&oacute;n es aconsejable optimizar la resoluci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "200 x 250 p&iacute;xeles";
 choices[12][1] = "400 x 450 p&iacute;xeles";
 choices[12][2] = "700 x 950 p&iacute;xeles";
 choices[12][3] = "700 x 1150 p&iacute;xeles";
 answers[12] = choices[12][0];
 units[12] = "120";
 comments[12] = "Id Pregunta: 10763. ";


//  Id pregunta: 10771 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  &iquest;En qu&eacute; a&ntilde;o se aprueba la Norma T&eacute;cnica de Interoperabilidad de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas?";
 choices[13]= new Array();
 choices[13][0] = "2009";
 choices[13][1] = "2011";
 choices[13][2] = "2013";
 choices[13][3] = "2015";
 answers[13] = choices[13][1];
 units[13] = "43";
 comments[13] = "Id Pregunta: 10771. ";


//  Id pregunta: 10779 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  La direcci&oacute;n electr&oacute;nica habilitada para la pr&aacute;ctica de notificaciones regulada en el Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, tendr&aacute; vigencia indefinida excepto cuando no se utilice para la pr&aacute;ctica de notificaciones por el transcurso de:";
 choices[14]= new Array();
 choices[14][0] = "36 meses.";
 choices[14][1] = "60 meses.";
 choices[14][2] = "30 meses.";
 choices[14][3] = "24 meses.";
 answers[14] = choices[14][0];
 units[14] = "43";
 comments[14] = "Id Pregunta: 10779. Examen GSI 2014";


//  Id pregunta: 10782 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[15]= new Array();
 choices[15][0] = "Garantiza la confidencialidad de un documento.";
 choices[15][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[15][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[15][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[15] = choices[15][3];
 units[15] = "43";
 comments[15] = "Id Pregunta: 10782. Examen GSI 2014";


//  Id pregunta: 10786 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  Globus Toolkit es:";
 choices[16]= new Array();
 choices[16][0] = "Un framework de IBM que proporciona caracter&iacute;sticas para desarrollar, hacer debug y testear aplicaciones AJAX.";
 choices[16][1] = "Un conjunto de herramientas open source para construir grids computacionales.";
 choices[16][2] = "Un framework que contiene APIs y widgets para facilitar el desarrollo de aplicaciones Web que utilicen tecnolog&iacute;a AJAX y programaci&oacute;n paralela.";
 choices[16][3] = "Una librer&iacute;a Python, modular y extensible, que ofrece una API para desarrollar aplicaciones distribuidas.";
 answers[16] = choices[16][1];
 units[16] = "45";
 comments[16] = "Id Pregunta: 10786. Examen GSI 2014";


//  Id pregunta: 10793 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  En Android, las aplicaciones se distribuyen en paquetes:";
 choices[17]= new Array();
 choices[17][0] = "yum";
 choices[17][1] = "apk";
 choices[17][2] = "ipa";
 choices[17][3] = "gpm";
 answers[17] = choices[17][1];
 units[17] = "52";
 comments[17] = "Id Pregunta: 10793. Examen GSI 2014";


//  Id pregunta: 10795 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[18]= new Array();
 choices[18][0] = "192.168.30.0";
 choices[18][1] = "192.168.30.128";
 choices[18][2] = "192.168.30.255";
 choices[18][3] = "192.168.30.200";
 answers[18] = choices[18][1];
 units[18] = "100";
 comments[18] = "Id Pregunta: 10795. Examen GSI 2014";


//  Id pregunta: 10809 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  Indique la afirmaci&oacute;n FALSA respecto a VoiceXML:";
 choices[19]= new Array();
 choices[19][0] = "Es un lenguaje basado en XML.";
 choices[19][1] = "VoiceXML tiene como origen el Phone Markup Language (PML) de AT&amp;T.";
 choices[19][2] = "Es una recomendaci&oacute;n de la W3C.";
 choices[19][3] = "La &uacute;ltima versi&oacute;n es la VoiceXML 2.0.";
 answers[19] = choices[19][3];
 units[19] = "69";
 comments[19] = "Id Pregunta: 10809. Examen GSI 2014";


//  Id pregunta: 10820 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[20]= new Array();
 choices[20][0] = "Es siempre cero.";
 choices[20][1] = "Es igual a su tiempo early.";
 choices[20][2] = "Es mayor que su tiempo early.";
 choices[20][3] = "Es menor que su tiempo early.";
 answers[20] = choices[20][1];
 units[20] = "28";
 comments[20] = "Id Pregunta: 10820. Examen GSI 2014";


//  Id pregunta: 10847 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[21]= new Array();
 choices[21][0] = "JSR 342.";
 choices[21][1] = "JSR 366.";
 choices[21][2] = "JSR 324.";
 choices[21][3] = "JSR 224.";
 answers[21] = choices[21][0];
 units[21] = "60, 116";
 comments[21] = "Id Pregunta: 10847. Examen GSI 2014";


//  Id pregunta: 10854 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el m&eacute;todo PROPPATCH que sirve para:";
 choices[22]= new Array();
 choices[22][0] = "Crear colecciones.";
 choices[22][1] = "Recuperar propiedades, almacenadas como XML, desde un recurso.";
 choices[22][2] = "Cambiar y borrar m&uacute;ltiples propiedades de un recurso en una simple operaci&oacute;n at&oacute;mica.";
 choices[22][3] = "Desbloquear un recurso.";
 answers[22] = choices[22][2];
 units[22] = "112";
 comments[22] = "Id Pregunta: 10854. Examen GSI 2014";


//  Id pregunta: 10879 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[23]= new Array();
 choices[23][0] = "IEEE 802.3ab";
 choices[23][1] = "IEEE 802.3at";
 choices[23][2] = "IEEE 802.3ap";
 choices[23][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[23] = choices[23][1];
 units[23] = "107";
 comments[23] = "Id Pregunta: 10879. Examen GSI 2014";


//  Id pregunta: 10880 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  La direcci&oacute;n can&oacute;nica de un puente o bridge es la direcci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "MAC del interface principal del puente.";
 choices[24][1] = "IP del interface principal del puente.";
 choices[24][2] = "MAC del puente.";
 choices[24][3] = "Del interface de rango num&eacute;rico m&aacute;s alto del puente.";
 answers[24] = choices[24][2];
 units[24] = "102";
 comments[24] = "Id Pregunta: 10880. Examen GSI 2014";


//  Id pregunta: 10891 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  Seg&uacute;n RFC 2460, se&ntilde;ale de las siguientes cabeceras IPv6 cu&aacute;l es una cabecera de extensi&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Cabecera Siguiente.";
 choices[25][1] = "Fragmento.";
 choices[25][2] = "L&iacute;mite de Saltos.";
 choices[25][3] = "Longitud de la Carga &Uacute;til.";
 answers[25] = choices[25][1];
 units[25] = "100";
 comments[25] = "Id Pregunta: 10891. Examen GSI 2014";


//  Id pregunta: 10908 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[26]= new Array();
 choices[26][0] = "16, 24, 32 &oacute; 40";
 choices[26][1] = "6, 12, 24 &oacute; 48";
 choices[26][2] = "4, 8, 16 &oacute; 40";
 choices[26][3] = "8, 16, 32 &oacute; 64";
 answers[26] = choices[26][0];
 units[26] = "117";
 comments[26] = "Id Pregunta: 10908. Examen GSI 2014";


//  Id pregunta: 10918 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  &iquest;Qu&eacute; caracter&iacute;sticas de seguridad presenta SNMPv3, tal y como se mencionan en la RFC 3418 (MIB for the SNMP Protocol)?";
 choices[27]= new Array();
 choices[27][0] = "Se recomienda que los implementadores usen el modelo de seguridad basado en usuario y el control de acceso basado en vistas.";
 choices[27][1] = "Se obliga a que los implementadores usen el modelo basado en usuario y el control de acceso basado en vistas.";
 choices[27][2] = "En dicha RFC no se menciona ning&uacute;n elemento de seguridad.";
 choices[27][3] = "En temas de seguridad, s&oacute;lo hace menci&oacute;n al uso obligatorio del algoritmo de encriptaci&oacute;n CBC (Cipher Block Chaining) de DES, conocido tambi&eacute;n por DES-56.";
 answers[27] = choices[27][0];
 units[27] = "104";
 comments[27] = "Id Pregunta: 10918. Examen GSI 2014";


//  Id pregunta: 10955 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  En ITIL V3, &iquest;qu&eacute; es un OLA?";
 choices[28]= new Array();
 choices[28][0] = "Es un contrato entre un proveedor de servicios de TI con un &uacute;nico cliente externo a la organizaci&oacute;n.";
 choices[28][1] = "Es un contrato entre departamentos de una misma organizaci&oacute;n.";
 choices[28][2] = "Es un contrato entre un proveedor de servicios de TI que describe los servicios ofertados a varios clientes externos a la organizaci&oacute;n.";
 choices[28][3] = "Es un contrato entre la administraci&oacute;n y la empresa privada.";
 answers[28] = choices[28][1];
 units[28] = "98";
 comments[28] = "Id Pregunta: 10955. TIC A1 AGE 2014";


//  Id pregunta: 10958 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  Para la direcci&oacute;n de loopback, es correcto que:";
 choices[29]= new Array();
 choices[29][0] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::127.0.0.1)";
 choices[29][1] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::1)";
 choices[29][2] = "Se han reservado 256 direcciones en IPv4 (127.0.0.0/24) y 256 direcciones en IPv6 (::127.0.0.1-255)";
 choices[29][3] = "Se han reservado 16.777.214 direcciones en IPv4 (127.0.0.0/8) y una direcci&oacute;n en IPv6 (::1)";
 answers[29] = choices[29][3];
 units[29] = "100";
 comments[29] = "Id Pregunta: 10958. TIC A1 AGE 2014";


//  Id pregunta: 10979 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  Dentro del modelo de referencia COBIT 5 para la gesti&oacute;n de las TI de una organizaci&oacute;n, se definen:";
 choices[30]= new Array();
 choices[30][0] = "5 procesos de gobierno, que incluyen pr&aacute;cticas de Evaluaci&oacute;n, Orientaci&oacute;n y Supervisi&oacute;n.";
 choices[30][1] = "5 procesos de gobierno con cuatro &aacute;reas de dominio para la planificaci&oacute;n, construcci&oacute;n, ejecuci&oacute;n y supervisi&oacute;n.";
 choices[30][2] = "5 procesos de gobierno donde se gestiona la estrategia, la arquitectura empresarial, el portfolio, el presupuesto y los recursos humanos.";
 choices[30][3] = "4 procesos de gobierno con 5 &aacute;reas de dominio para la planificaci&oacute;n, dise&ntilde;o, construcci&oacute;n, ejecuci&oacute;n y supervisi&oacute;n.";
 answers[30] = choices[30][0];
 units[30] = "98";
 comments[30] = "Id Pregunta: 10979. TIC A1 AGE 2014";


//  Id pregunta: 10983 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  Respecto a los ficheros de firma electr&oacute;nica y los documentos firmados electr&oacute;nicamente, se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "El documento firmado siempre va inclu&iacute;do en el fichero de firma, tanto en XAdES como en CAdES.";
 choices[31][1] = "En CAdES, el documento puede no incluirse en el fichero de firma. Estas firmas se llaman expl&iacute;citas.";
 choices[31][2] = "El documento firmado se incluye en el fichero de firma en XAdES, y no se puede incluir en CAdES.";
 choices[31][3] = "En XAdES, s&oacute;lo se puede firmar de forma impl&iacute;cita, en la que el documento no se incluye en el resultado de firma y solamente se incluye una referencia al lugar en el que se encuentra.";
 answers[31] = choices[31][1];
 units[31] = "72";
 comments[31] = "Id Pregunta: 10983. TIC A1 AGE 2014";


//  Id pregunta: 11000 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  En el &aacute;mbito de la ciberseguridad, respecto de las APT (Advanced Persistent Threats), se&ntilde;ale la respuesta correcta:";
 choices[32]= new Array();
 choices[32][0] = "Una APT comprende distintas fases entre las que se encuentra la extracci&oacute;n de datos.";
 choices[32][1] = "Una APT no utiliza t&eacute;cnicas de ingenier&iacute;a social para lograr el acceso al sistema objetivo.";
 choices[32][2] = "Una APT es un conjunto de software malicioso con poca repercusi&oacute;n en el sistema objetivo y de f&aacute;cil detecci&oacute;n por las herramientas antivirus.";
 choices[32][3] = "Una APT consiste en ataques avanzados pr&oacute;ximos en el tiempo hacia objetivos generales e impersonales.";
 answers[32] = choices[32][0];
 units[32] = "111";
 comments[32] = "Id Pregunta: 11000. TIC A1 AGE 2014";


//  Id pregunta: 11001 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  &iquest;En qu&eacute; circunstancias los prestadores de servicios de la sociedad de la informaci&oacute;n no son responsables por la informaci&oacute;n que proporcionen a los destinatarios de sus servicios?";
 choices[33]= new Array();
 choices[33][0] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite actu&eacute; bajo la direcci&oacute;n, autoridad o control del prestador que facilite la localizaci&oacute;n de esos contenidos.";
 choices[33][1] = "Siempre que tengan conocimiento de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n y aleguen la imposibilidad de suprimir o inutilizar el enlace.";
 choices[33][2] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite desconozca el contenido il&iacute;cito de dicha informaci&oacute;n.";
 choices[33][3] = "Siempre que no tengan conocimiento efectivo de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n o si lo tienen, act&uacute;en de forma diligente para suprimir o inutilizar el enlace.";
 answers[33] = choices[33][3];
 units[33] = "30";
 comments[33] = "Id Pregunta: 11001. TIC A1 AGE 2014";


//  Id pregunta: 11006 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  En el desarrollo orientado a objetos, dos casos de uso pueden estar relacionados mediante una relaci&oacute;n include, y reciben los nombres de caso base y caso de inclusi&oacute;n. Se&ntilde;ale la respuesta correcta:";
 choices[34]= new Array();
 choices[34][0] = "La ubicaci&oacute;n de la inclusi&oacute;n en el caso base es impl&iacute;cita. Es decir, es una sentencia expl&iacute;cita dentro de la secuencia de comportamiento del caso de uso base.";
 choices[34][1] = "El caso de uso de inclusi&oacute;n indica una secuencia adicional de comportamiento cuya ejecuci&oacute;n depende de una condici&oacute;n.";
 choices[34][2] = "El caso de uso de inclusi&oacute;n no puede acceder a atributos u operaciones del caso de uso base.";
 choices[34][3] = "Solo puede haber una relaci&oacute;n de inclusi&oacute;n para un caso de uso base.";
 answers[34] = choices[34][0];
 units[34] = "86";
 comments[34] = "Id Pregunta: 11006. TIC A1 AGE 2014";


//  Id pregunta: 11023 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes no es una pauta del principio de Comprensibilidad de las WCAG 2.0?";
 choices[35]= new Array();
 choices[35][0] = "Navegable";
 choices[35][1] = "Legible y entendible";
 choices[35][2] = "Predecible";
 choices[35][3] = "Ayuda a la entrada de datos";
 answers[35] = choices[35][0];
 units[35] = "39";
 comments[35] = "Id Pregunta: 11023. La pauta 'Navegable' pertenece al principio de Operabilidad";


//  Id pregunta: 11051 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  &iquest;Qu&eacute; algoritmo genera un Hash de mayor longitud?";
 choices[36]= new Array();
 choices[36][0] = "MD5";
 choices[36][1] = "SHA-1";
 choices[36][2] = "SHA-384";
 choices[36][3] = "WHIRLPOOL";
 answers[36] = choices[36][3];
 units[36] = "72";
 comments[36] = "Id Pregunta: 11051. WHIRLPOOL produce un Hash de 512 bits";


//  Id pregunta: 11058 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  &iquest;Qu&eacute; rol de la metodolog&iacute;a FDD es responsable del dise&ntilde;o global del sistema y de la ejecuci&oacute;n de todas las etapas del dise&ntilde;o?";
 choices[37]= new Array();
 choices[37][0] = "Product Manager";
 choices[37][1] = "Chief architect";
 choices[37][2] = "Chief programmer";
 choices[37][3] = "System administrator";
 answers[37] = choices[37][1];
 units[37] = "79";
 comments[37] = "Id Pregunta: 11058. ";


//  Id pregunta: 11063 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es la definici&oacute;n de servicio seg&uacute;n ITIL?";
 choices[38]= new Array();
 choices[38][0] = "Medio para entregar valor a los clientes, facilitando los resultados que estos quieren conseguir sin asumir costes o riesgos espec&iacute;ficos";
 choices[38][1] = "Subdivisi&oacute;n de una organizaci&oacute;n, que est&aacute; especializada en realizar un tipo concreto de trabajo y tiene la responsabilidad de obtener resultados concretos";
 choices[38][2] = "Conjunto estructurado de actividades dise&ntilde;ado para cumplir objetivo concreto.";
 choices[38][3] = "Conjunto de responsabilidades, actividades y autorizaciones concedidas a una persona o equipo.";
 answers[38] = choices[38][0];
 units[38] = "98";
 comments[38] = "Id Pregunta: 11063. ";


//  Id pregunta: 11067 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  Establecer pol&iacute;ticas y objetivos es la principal preocupaci&oacute;n de cu&aacute;l de los elementos del Ciclo de Vida del Servicio?";
 choices[39]= new Array();
 choices[39][0] = "Estrategia del Servicio";
 choices[39][1] = "Estrategia y Mejora Continua del Servicio";
 choices[39][2] = "Estrategia, Dise&ntilde;o y Transici&oacute;n del Servicio";
 choices[39][3] = "Estrategia, Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora Continua del Servicio";
 answers[39] = choices[39][0];
 units[39] = "98";
 comments[39] = "Id Pregunta: 11067. ";


//  Id pregunta: 11069 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes NO es una de las 4 Ps de la Estrategia seg&uacute;n ITIL?";
 choices[40]= new Array();
 choices[40][0] = "Perspectiva";
 choices[40][1] = "Posici&oacute;n";
 choices[40][2] = "Patr&oacute;n";
 choices[40][3] = "Todas son correctas";
 answers[40] = choices[40][3];
 units[40] = "98";
 comments[40] = "Id Pregunta: 11069. ";


//  Id pregunta: 11070 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  El principal objetivo de la Gesti&oacute;n de la Disponibilidad es &hellip;";
 choices[41]= new Array();
 choices[41][0] = "Monitorizar e informar sobre la disponibilidad de los servicios y componentes";
 choices[41][1] = "Asegurar que los objetivos de los SLA&rsquo;s se consiguen";
 choices[41][2] = "Garantizar niveles de disponibilidad para servicios y componentes";
 choices[41][3] = "Asegurarse que la disponibilidad de los servicios, se consigue o excede seg&uacute;n las necesidades acordadas con el negocio";
 answers[41] = choices[41][3];
 units[41] = "98";
 comments[41] = "Id Pregunta: 11070. ";


//  Id pregunta: 11076 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l las siguientes afirmaciones acerca del proceso de Gesti&oacute;n Proveedores es INCORRECTA?";
 choices[42]= new Array();
 choices[42][0] = "Gesti&oacute;n de Proveedores negocia los acuerdos internos y externos para dar soporte en la entrega de los servicios";
 choices[42][1] = "Gesti&oacute;n de Proveedores asegura que los proveedores satisfacen las expectativas del negocio";
 choices[42][2] = "Gesti&oacute;n de Proveedores mantiene la informaci&oacute;n de la Base de Datos de Proveedores y Contratos";
 choices[42][3] = "Gesti&oacute;n de Proveedores debe involucrarse en todas las etapas del Ciclo de Vida del Servicio, desde la Estrategia, pasando por Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora";
 answers[42] = choices[42][0];
 units[42] = "98";
 comments[42] = "Id Pregunta: 11076. ";


//  Id pregunta: 11081 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  La MEJOR descripci&oacute;n de la prioridad de una Incidencia es&hellip;";
 choices[43]= new Array();
 choices[43][0] = "La importancia relativa de una Incidencia basada en su impacto y urgencia";
 choices[43][1] = "La velocidad con la que necesita ser resuelta la Incidencia";
 choices[43][2] = "El n&uacute;mero de personas que ser&aacute;n asignadas para trabajar en la Incidencia con el fin de que se resuelva dentro del plazo";
 choices[43][3] = "El camino de escalado que debe seguir para asegurar la resoluci&oacute;n de la Incidencia";
 answers[43] = choices[43][0];
 units[43] = "98";
 comments[43] = "Id Pregunta: 11081. ";


//  Id pregunta: 11085 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes pasos NO corresponde al modelo de Mejora Continua del Servicio (CSI)?";
 choices[44]= new Array();
 choices[44][0] = "&iquest;Cual es la visi&oacute;n?";
 choices[44][1] = "&iquest;C&oacute;mo llegamos?";
 choices[44][2] = "&iquest;Hay presupuesto?";
 choices[44][3] = "&iquest; D&oacute;nde estamos ahora?";
 answers[44] = choices[44][2];
 units[44] = "98";
 comments[44] = "Id Pregunta: 11085. ";


//  Id pregunta: 11098 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  De acuerdo con la LOPD, seleccione la respuesta verdadera";
 choices[45]= new Array();
 choices[45][0] = "Iniciar la recogida de datos de car&aacute;cter personal sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente es una infracci&oacute;n GRAVE.";
 choices[45][1] = "No atender, por motivos formales, la solicitud del interesado de rectificaci&oacute;n o cancelaci&oacute;n de los datos personales objeto de tratamiento cuando legalmente proceda es una infracci&oacute;n MUY GRAVE";
 choices[45][2] = "Las respuestas a) y b) son falsas";
 choices[45][3] = "Las respuestas a) y b) son verdaderas";
 answers[45] = choices[45][0];
 units[45] = "29";
 comments[45] = "Id Pregunta: 11098. ";


//  Id pregunta: 11115 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  El &oacute;rgano competente para la resoluci&oacute;n de un recurso especial en materia de contrataci&oacute;n en la AGE es:";
 choices[46]= new Array();
 choices[46][0] = "El Tribunal Administrativo Central de Recursos Contractuales";
 choices[46][1] = "El Tribunal Contencioso Administrativo";
 choices[46][2] = "El Tribunal de Cuentas";
 choices[46][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 answers[46] = choices[46][0];
 units[46] = "41";
 comments[46] = "Id Pregunta: 11115. ";


//  Id pregunta: 11123 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?";
 choices[47]= new Array();
 choices[47][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[47][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[47][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[47][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[47] = choices[47][1];
 units[47] = "43";
 comments[47] = "Id Pregunta: 11123. ";


//  Id pregunta: 11146 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes cifrados sim&eacute;tricos es de flujo?";
 choices[48]= new Array();
 choices[48][0] = "RC-4";
 choices[48][1] = "IDEA";
 choices[48][2] = "RC-5";
 choices[48][3] = "AES";
 answers[48] = choices[48][0];
 units[48] = "72";
 comments[48] = "Id Pregunta: 11146. ";


//  Id pregunta: 11150 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de lo siguientes sistemas de firma electr&oacute;nica utilizan las Administraciones P&uacute;blicas para la actuaci&oacute;n administrativa automatizada, con objeto de su identificaci&oacute;n electr&oacute;nica y para la autenticaci&oacute;n de los documentos electr&oacute;nicos que produzcan?";
 choices[49]= new Array();
 choices[49][0] = "Sello electr&oacute;nico";
 choices[49][1] = "C&oacute;digo seguro de verificaci&oacute;n";
 choices[49][2] = "Todos los anteriores";
 choices[49][3] = "Ninguno de los anteriores";
 answers[49] = choices[49][2];
 units[49] = "73";
 comments[49] = "Id Pregunta: 11150. ";


//  Id pregunta: 11154 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  En un an&aacute;lisis DAFO previo a la definici&oacute;n de la estrategia de una organizaci&oacute;n, &iquest;qu&eacute; son las debilidades?";
 choices[50]= new Array();
 choices[50][0] = "Aspectos que limitan o reducen la capacidad de desarrollo efectivo de la estrategia de la organizaci&oacute;n  y deben, por tanto, ser controladas y superadas.";
 choices[50][1] = "Todo aquello que pueda representar una posibilidad para mejorar la rentabilidad de la misma o aumentar la cifra de sus negocios.";
 choices[50][2] = "Toda fuerza del entorno que puede impedir la implantaci&oacute;n de una estrategia, o bien reducir su efectividad, o incrementar los riesgos de la misma,";
 choices[50][3] = "Todos aquellos aspectos de la organizaci&oacute;n que no son ventajas competitivas respecto a los competidores en un mismo mercado";
 answers[50] = choices[50][0];
 units[50] = "77";
 comments[50] = "Id Pregunta: 11154. ";


//  Id pregunta: 11168 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Qui&eacute;n es el creador de la l&oacute;gica borrosa?";
 choices[51]= new Array();
 choices[51][0] = "Lofti Zadeh";
 choices[51][1] = "Lempel-Ziv-Welch";
 choices[51][2] = "Donald Hebb&nbsp;";
 choices[51][3] = "Augustin Louis Cauchy";
 answers[51] = choices[51][0];
 units[51] = "94";
 comments[51] = "Id Pregunta: 11168. ";


//  Id pregunta: 11207 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[52]= new Array();
 choices[52][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[52][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[52][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][1];
 units[52] = "30";
 comments[52] = "Id Pregunta: 11207. ";


//  Id pregunta: 11217 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  En relaci&oacute;n con las interfaces de programaci&oacute;n para crear GUI en Java:";
 choices[53]= new Array();
 choices[53][0] = "La&nbsp;Java Foundation Classes&nbsp;(JFC) es un framework gr&aacute;fico para construir interfaces gr&aacute;ficas de usuario (GUIs)  basadas en&nbsp;Java y est&aacute; compuesto por AWT,Swing&nbsp;y&nbsp;Java 2D.";
 choices[53][1] = "Aunque Swing est&aacute; basado en AWT, se trata de una implementaci&oacute;n de controles gr&aacute;ficos en Java puro.";
 choices[53][2] = "JavaFX, aunque est&aacute; incluido en el JDK/JRE, no est&aacute; basado en ninguna especificaci&oacute;n est&aacute;ndar JSR sino que es un producto de Oracle.";
 choices[53][3] = "Todas las respuestas son verdaderas.";
 answers[53] = choices[53][3];
 units[53] = "60";
 comments[53] = "Id Pregunta: 11217. ";


//  Id pregunta: 11230 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes no es un API de la especificaci&oacute;n J2EE?";
 choices[54]= new Array();
 choices[54][0] = "JNDI.";
 choices[54][1] = "API Java IDL.";
 choices[54][2] = "JTA (Java Transaction API).";
 choices[54][3] = "JMS (Java Mobile Service).";
 answers[54] = choices[54][3];
 units[54] = "116";
 comments[54] = "Id Pregunta: 11230. ";


//  Id pregunta: 11234 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un framework de desarrollo de aplicaciones web Java?";
 choices[55]= new Array();
 choices[55][0] = "Apache Struts.";
 choices[55][1] = "Spring Framework.";
 choices[55][2] = "Cibernate ORM.";
 choices[55][3] = "Tapestry.";
 answers[55] = choices[55][2];
 units[55] = "116";
 comments[55] = "Id Pregunta: 11234. ";


//  Id pregunta: 11246 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  En un contrato tramitado por urgencia por su necesidad inaplazable o cuya adjudicaci&oacute;n se deba acelerar por inter&eacute;s p&uacute;blico:";
 choices[56]= new Array();
 choices[56][0] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as h&aacute;biles.";
 choices[56][1] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as h&aacute;biles.";
 choices[56][2] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as naturales.";
 choices[56][3] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as naturales.";
 answers[56] = choices[56][0];
 units[56] = "41";
 comments[56] = "Id Pregunta: 11246. ";


//  Id pregunta: 11262 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  Para los niveles de seguridad de los sistemas de autenticaci&oacute;n definidos en el Reglamento 910/2014 relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior, NO es cierto:";
 choices[57]= new Array();
 choices[57][0] = "Se tienen en cuenta tanto el proyecto europeo STORK como la norma ISO 29115.";
 choices[57][1] = "El nivel sustancial de STORK requiere un registro presencial al menos una vez, y la credencial electr&oacute;nica se entrega como certificado hardware.";
 choices[57][2] = "El modelo QAA (Quality, Authentication, Assurance) diferencia los factores asociados al proceso de registro y entrega de la credencial, y factores asociados al proceso de autenticaci&oacute;n electr&oacute;nica con dicha credencial.";
 choices[57][3] = "El DNIe se corresponde con un nivel 4 de QAA.";
 answers[57] = choices[57][1];
 units[57] = "73";
 comments[57] = "Id Pregunta: 11262. ";


//  Id pregunta: 11271 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  El 5&ordm; principio de marco de trabajo CobiT v5 establece:";
 choices[58]= new Array();
 choices[58][0] = "Este principio se centra en el Gobierno TI dejando la gesti&oacute;n a otras metodolog&iacute;as como ITIL.";
 choices[58][1] = "Establece una clara distinci&oacute;n entre Gobierno y Gesti&oacute;n.";
 choices[58][2] = "No existe interacci&oacute;n alguna entre Gobierno y Gesti&oacute;n.";
 choices[58][3] = "El Gobierno contiene cuatro dominios, seg&uacute;n las &aacute;reas de responsabilidad de Planificar, Construir, Ejecutar y Supervisar (Plan, Build, Run and Monitor, PBRM).";
 answers[58] = choices[58][1];
 units[58] = "98";
 comments[58] = "Id Pregunta: 11271. ";


//  Id pregunta: 11285 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  &iquest;Qu&eacute; se entiende por un SIG dual?";
 choices[59]= new Array();
 choices[59][0] = "El que  mantiene  la  informaci&oacute;n  gr&aacute;fica con una clave identificadora &uacute;nica que sirve  para  realizar  b&uacute;squedas  en  el  SGBD  que  contiene la informaci&oacute;n  alfanum&eacute;rica";
 choices[59][1] = "El que contiene  un  modelo  de  comportamiento  a  lo  largo  del tiempo  para  alg&uacute;n  aspecto  de  la  realidad. ";
 choices[59][2] = "El que aplica una concepci&oacute;n orientada  al objeto, en la  que los elementos contengan informaci&oacute;n sobre  sus propiedades, comportamiento etc..";
 choices[59][3] = "El que contempla al mismo tiempo un modelo r&aacute;ster y uno vectorial";
 answers[59] = choices[59][0];
 units[59] = "67";
 comments[59] = "Id Pregunta: 11285. ";


//  Id pregunta: 11291 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares corresponde a la especificaci&oacute;n de portlets m&aacute;s reciente?";
 choices[60]= new Array();
 choices[60][0] = "JSR 286";
 choices[60][1] = "JSR 168";
 choices[60][2] = "JSR 283";
 choices[60][3] = "a y c son ciertas";
 answers[60] = choices[60][0];
 units[60] = "95";
 comments[60] = "Id Pregunta: 11291. ";


//  Id pregunta: 11300 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  En relaci&oacute;n con un Prestador de Servicios de Certificaci&oacute;n (PSC) es cierto que";
 choices[61]= new Array();
 choices[61][0] = "Es una persona jur&iacute;dica que expide certificados";
 choices[61][1] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados";
 choices[61][2] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 choices[61][3] = "Es una persona jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 answers[61] = choices[61][2];
 units[61] = "74";
 comments[61] = "Id Pregunta: 11300. ";


//  Id pregunta: 11322 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Las directivas JSP nos permiten configurar alguna informaci&oacute;n que pueda ser usada en nuestra p&aacute;gina JSP. Cu&aacute;l de las siguientes no es una directiva jsp";
 choices[62]= new Array();
 choices[62][0] = "DocRel";
 choices[62][1] = "Page";
 choices[62][2] = "Include";
 choices[62][3] = "Taglib";
 answers[62] = choices[62][0];
 units[62] = "115";
 comments[62] = "Id Pregunta: 11322. ";


//  Id pregunta: 11323 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Qu&eacute; tipo de registro se corresponde DNS, se corresponde con esta definici&oacute;n: &quot;Este registro se usa en IPv6 para traducirnombres de hosts a direcciones IPv6.&quot;";
 choices[63]= new Array();
 choices[63][0] = "Tipo A";
 choices[63][1] = "Tipo AAAA";
 choices[63][2] = "Tipo CNAME";
 choices[63][3] = "Tipo NS";
 answers[63] = choices[63][1];
 units[63] = "113";
 comments[63] = "Id Pregunta: 11323. ";


//  Id pregunta: 11341 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  En cuanto a los derechos de autor&iacute;a de los programas de ordenador, se&ntilde;ale cu&aacute;l no se encuentra entre los derechos morales";
 choices[64]= new Array();
 choices[64][0] = "Derecho de Transformaci&oacute;n  ";
 choices[64][1] = "Derecho a decidir sobre la divulgaci&oacute;n";
 choices[64][2] = "Derecho a que se reconozca su autor&iacute;a";
 choices[64][3] = "Derecho a mantener la integridad de la obra";
 answers[64] = choices[64][0];
 units[64] = "36";
 comments[64] = "Id Pregunta: 11341. ";


//  Id pregunta: 11345 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  De los perfiles creados por WS-I indique cu&aacute;l no existe";
 choices[65]= new Array();
 choices[65][0] = "WS-I Basic security profile";
 choices[65][1] = "WS-I Reliable secure profile";
 choices[65][2] = "WS-I Extended Reliable profile";
 choices[65][3] = "WS-I Basic profile";
 answers[65] = choices[65][2];
 units[65] = "51";
 comments[65] = "Id Pregunta: 11345. ";


//  Id pregunta: 11349 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[66]= new Array();
 choices[66][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[66][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[66][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[66][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[66] = choices[66][0];
 units[66] = "29";
 comments[66] = "Id Pregunta: 11349. ";


//  Id pregunta: 11368 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito principal de la Gesti&oacute;n de Disponibilidad?";
 choices[67]= new Array();
 choices[67][0] = "Monitorizar e informar la disponibilidad de los componentes";
 choices[67][1] = "Asegurar que se cumplen todas las metas del acuerdo de nivel de servicios (SLA)";
 choices[67][2] = "Garantizar los niveles de disponibilidad de los servicios y de los componentes";
 choices[67][3] = "Asegurar que la disponibilidad del servicio satisface las necesidades acordadas con el negocio";
 answers[67] = choices[67][3];
 units[67] = "98";
 comments[67] = "Id Pregunta: 11368. ";


//  Id pregunta: 11373 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de revisar regularmente los acuerdos de nivel operativo (OLA)?";
 choices[68]= new Array();
 choices[68][0] = "Gesti&oacute;n de suministradores";
 choices[68][1] = "Gesti&oacute;n de niveles de servicio";
 choices[68][2] = "Gesti&oacute;n del porfolio de servicios";
 choices[68][3] = "Gesti&oacute;n de demanda";
 answers[68] = choices[68][1];
 units[68] = "98";
 comments[68] = "Id Pregunta: 11373. ";


//  Id pregunta: 11378 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones resume mejor el prop&oacute;sito de la Gesti&oacute;n de Eventos?";
 choices[69]= new Array();
 choices[69][0] = "La habilidad de detectar eventos, darles sentido y determinar las acciones de control apropiadas";
 choices[69][1] = "La habilidad de detectar eventos, restablecer el servicio a la normalidad tan pronto como sea posible y minimizar el impacto adverso en las operaciones del negocio";
 choices[69][2] = "La habilidad de monitorizar y controlar las actividades del personal t&eacute;cnico";
 choices[69][3] = "La habilidad de informar sobre la entrega exitosa de los servicios al comprobar el tiempo de funcionamiento de los dispositivos de la infraestructura";
 answers[69] = choices[69][0];
 units[69] = "98";
 comments[69] = "Id Pregunta: 11378. ";


//  Id pregunta: 11380 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; etapa del ciclo de vida del servicio asegura que los m&eacute;todos de medici&oacute;n proporcionar&aacute;n las m&eacute;tricas necesarias para los servicios nuevos o modificados?";
 choices[70]= new Array();
 choices[70][0] = "Dise&ntilde;o del servicio";
 choices[70][1] = "Operaci&oacute;n del servicio";
 choices[70][2] = "Estrategia del servicio";
 choices[70][3] = "Entrega del servicio";
 answers[70] = choices[70][0];
 units[70] = "98";
 comments[70] = "Id Pregunta: 11380. ";


//  Id pregunta: 11398 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones deber&iacute;a ser tratada como una incidencia?: 1. Un usuario es incapaz de acceder a un servicio durante el horario de servicio; 2. Un miembro autorizado del personal TI no puede acceder a un servicio durante el horario de servicio; 3. Un componente de red falla pero el usuario no percibe ninguna alteraci&oacute;n del servicio; 4. Un usuario contacta con el centro de servicio para informar que una aplicaci&oacute;n presenta un rendimiento lento";
 choices[71]= new Array();
 choices[71][0] = "Todas las anteriores";
 choices[71][1] = "Solo 1 y 4";
 choices[71][2] = "Solo 2 y 3";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][0];
 units[71] = "98";
 comments[71] = "Id Pregunta: 11398. ";


//  Id pregunta: 11400 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio provee un marco de referencia para evaluar las capacidades del servicio y los perfiles de riesgo antes que un nuevo servicio o un cambio sea desplegado?";
 choices[72]= new Array();
 choices[72][0] = "Estrategia del servicio";
 choices[72][1] = "Mejora continua del servicio";
 choices[72][2] = "Transici&oacute;n del servicio";
 choices[72][3] = "Operaci&oacute;n del servicio";
 answers[72] = choices[72][2];
 units[72] = "98";
 comments[72] = "Id Pregunta: 11400. ";


//  Id pregunta: 11422 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta correcta:";
 choices[73]= new Array();
 choices[73][0] = "El MINETUR fijar&aacute; las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de n&uacute;meros";
 choices[73][1] = "Los planes nacionales designar&aacute;n los servicios de uso de los n&uacute;meros.";
 choices[73][2] = "La CNMC establece el uso de los recursos num&eacute;ricos.";
 choices[73][3] = "El MINETUR fijar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n y direccionamiento.";
 answers[73] = choices[73][1];
 units[73] = "110";
 comments[73] = "Id Pregunta: 11422. ";


//  Id pregunta: 11431 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes no es una facultad del Gobierno?:";
 choices[74]= new Array();
 choices[74][0] = "La elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[74][1] = "La aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[74][2] = "La elaboraci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 choices[74][3] = "La aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "110";
 comments[74] = "Id Pregunta: 11431. ";


//  Id pregunta: 11445 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la Ley 9/2014, marque la respuesta correcta respecto a la protecci&oacute;n de datos personales y la privacidad en relaci&oacute;n con las gu&iacute;as de abonados:";
 choices[75]= new Array();
 choices[75][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[75][1] = "A ser informado de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 choices[75][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[75][3] = "Todas las anteriores.";
 answers[75] = choices[75][3];
 units[75] = "110";
 comments[75] = "Id Pregunta: 11445. ";


//  Id pregunta: 11469 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Indique la respuesta correcta sobre la Ley 9/2014:";
 choices[76]= new Array();
 choices[76][0] = "La CNMC puede modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[76][1] = "El MINETUR puede modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[76][2] = "ORECE puede modificar cualquier punto de la Ley 9/2014.";
 choices[76][3] = "El MINETUR y ORECE siempre trabajan conjuntamente.";
 answers[76] = choices[76][1];
 units[76] = "110";
 comments[76] = "Id Pregunta: 11469. ";


//  Id pregunta: 11500 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes aspectos NO est&aacute; recogido como una Instrucci&oacute;n T&eacute;cnica de Seguridad seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[77]= new Array();
 choices[77][0] = "Informe de Estado de Seguridad";
 choices[77][1] = "Auditor&iacute;a de Seguridad";
 choices[77][2] = "Interconexi&oacute;n en el Esquema Nacional de Seguridad";
 choices[77][3] = "Protocolo de Comunicaciones Seguras";
 answers[77] = choices[77][3];
 units[77] = "43";
 comments[77] = "Id Pregunta: 11500. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11504 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes es un rol descrito en la Arquitectura de Referencia del Cloud Compunting versi&oacute;n 4.0 de IBM (CCRA)?";
 choices[78]= new Array();
 choices[78][0] = "Consumer.";
 choices[78][1] = "Provider.";
 choices[78][2] = "Creator.";
 choices[78][3] = "Todos los anteriores.";
 answers[78] = choices[78][3];
 units[78] = "47";
 comments[78] = "Id Pregunta: 11504. NULL";


//  Id pregunta: 11509 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes NO hace referencia a un proyecto de Big Data?";
 choices[79]= new Array();
 choices[79][0] = "Flume";
 choices[79][1] = "Cassandra";
 choices[79][2] = "Galenicum";
 choices[79][3] = "Hbase";
 answers[79] = choices[79][2];
 units[79] = "68";
 comments[79] = "Id Pregunta: 11509. NULL";


//  Id pregunta: 11539 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seg&uacute;n la metodolog&iacute;a m&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes funciones NO le correspondel al Jefe de Proyecto?";
 choices[80]= new Array();
 choices[80][0] = "Seleccionar la estrategia de desarrollo (modelo de ciclo de vida) y determinar los procesos, actividades y tareas que integran el proyecto (mapa de actividades).";
 choices[80][1] = "Ofrecer una opini&oacute;n experta relativa a los requisitos del negocio, t&eacute;cnicos y de usuario que han de tenerse en cuenta en el desarrollo del sistema de informaci&oacute;n.";
 choices[80][2] = "Estimar el esfuerzo necesario para llevar a cabo el proyecto.";
 choices[80][3] = "Le corresponden todas las funciones anteriores.";
 answers[80] = choices[80][1];
 units[80] = "86";
 comments[80] = "Id Pregunta: 11539. La B, son funciones propias del perfil consultor.";


//  Id pregunta: 11555 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  El model COCOMO contempla tres modos distintos de desarrollo del software. El m&aacute;s adecuado para un proyecto de unas 300.000 instrucciones de c&oacute;digo fuente, con unos requisitos extremadamente r&iacute;gidos, es:";
 choices[81]= new Array();
 choices[81][0] = "Modo semilibre.";
 choices[81][1] = "Modo empotrado.";
 choices[81][2] = "Modo org&aacute;nico.";
 choices[81][3] = "Modo avanzado.";
 answers[81] = choices[81][1];
 units[81] = "89";
 comments[81] = "Id Pregunta: 11555. NULL";


//  Id pregunta: 11557 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, el documento de alto nivel con todos los requerimientos del proyectos priorizados seg&uacute;n retorno de inversi&oacute;n (ROI), se denomina:";
 choices[82]= new Array();
 choices[82][0] = "Sprint Backlog";
 choices[82][1] = "Sprint Chart";
 choices[82][2] = "Product Backlog";
 choices[82][3] = "Burn Down Chart";
 answers[82] = choices[82][2];
 units[82] = "79";
 comments[82] = "Id Pregunta: 11557. NULL";


//  Id pregunta: 11569 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;De qu&eacute; tama&ntilde;o es el campo de comprobaci&oacute;n de erorres en la tecnolog&iacute;a Ethernet?";
 choices[83]= new Array();
 choices[83][0] = "16";
 choices[83][1] = "32";
 choices[83][2] = "64";
 choices[83][3] = "48";
 answers[83] = choices[83][1];
 units[83] = "100";
 comments[83] = "Id Pregunta: 11569. NULL";


//  Id pregunta: 11572 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l no es una modulaci&oacute;n para DSL?";
 choices[84]= new Array();
 choices[84][0] = "CAP";
 choices[84][1] = "FSK";
 choices[84][2] = "DMT";
 choices[84][3] = "WDMT";
 answers[84] = choices[84][1];
 units[84] = "107";
 comments[84] = "Id Pregunta: 11572. NULL";


//  Id pregunta: 11574 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qu&eacute; tecnolog&iacute;a se caracteriza por dimensionar un sistema de colas sin p&eacute;rdidas con multiplexaci&oacute;n de frecuencias, alta velocidad en el establecimiento de conexiones, estructura celular, transmisi&oacute;n digital y para grupos cerrados de usuarios?";
 choices[85]= new Array();
 choices[85][0] = "DECT";
 choices[85][1] = "TETRA";
 choices[85][2] = "PMR";
 choices[85][3] = "CDCS";
 answers[85] = choices[85][1];
 units[85] = "108";
 comments[85] = "Id Pregunta: 11574. NULL";


//  Id pregunta: 11578 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es la velocidad, el ancho de banda y la banda de frecuencias en las que operan las especificaciones 80211.ac?";
 choices[86]= new Array();
 choices[86][0] = "11 Mbps, 22 Mhz, 2.4 Ghz";
 choices[86][1] = "54 Mbps, 20 Mhz, 2.4 Ghz";
 choices[86][2] = "160 Mbps, 80Mhz o 60 Mhz, 5Ghz";
 choices[86][3] = "108Mbps, 40Mhz, 2.4Ghz y 5Ghz";
 answers[86] = choices[86][2];
 units[86] = "107";
 comments[86] = "Id Pregunta: 11578. NULL";


//  Id pregunta: 11629 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Con respecto al DNIe 3.0, se&ntilde;ale la falsa:";
 choices[87]= new Array();
 choices[87][0] = "Hace uso de la tecnolog&iacute;a NFC.";
 choices[87][1] = "Se basa en comandos ISO 7816.";
 choices[87][2] = "No es posible utilizarlo con lectores de tarjetas inteligentes.";
 choices[87][3] = "Incorpora un chip m&aacute;s r&aacute;pido.";
 answers[87] = choices[87][2];
 units[87] = "74";
 comments[87] = "Id Pregunta: 11629. ";


//  Id pregunta: 11633 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El nivel 2 de un DFD se conoce como:";
 choices[88]= new Array();
 choices[88][0] = "Diagrama de expansi&oacute;n";
 choices[88][1] = "Diagrama de paquetes";
 choices[88][2] = "Diagrama de nivel superior";
 choices[88][3] = "Diagrama de contexto";
 answers[88] = choices[88][0];
 units[88] = "81";
 comments[88] = "Id Pregunta: 11633. ";


//  Id pregunta: 11635 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  De los siguientes, se&ntilde;ale el peor acoplamiento entre m&oacute;dulos:";
 choices[89]= new Array();
 choices[89][0] = "De contenido";
 choices[89][1] = "Externo";
 choices[89][2] = "De control";
 choices[89][3] = "Normal";
 answers[89] = choices[89][0];
 units[89] = "84";
 comments[89] = "Id Pregunta: 11635. ";


//  Id pregunta: 11667 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  XACML es:";
 choices[90]= new Array();
 choices[90][0] = "Un est&aacute;ndar de firma de documentos.";
 choices[90][1] = "Un est&aacute;ndar que define un esquema XML para el intercambio de autorizaci&oacute;n y autenticaci&oacute;n.";
 choices[90][2] = "Un est&aacute;ndar basado en la especificaci&oacute;n XML para definir pol&iacute;ticas de control de acceso.";
 choices[90][3] = "Especifica un proceso para cifrar datos y representar esa informaci&oacute;n cifrada en XML.";
 answers[90] = choices[90][2];
 units[90] = "111";
 comments[90] = "Id Pregunta: 11667. ";


//  Id pregunta: 11676 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale el c&oacute;dec que no aplica compresi&oacute;n de entre los siguientes:";
 choices[91]= new Array();
 choices[91][0] = "G.711";
 choices[91][1] = "G.726";
 choices[91][2] = "G.729";
 choices[91][3] = "iLBC";
 answers[91] = choices[91][0];
 units[91] = "109, 117";
 comments[91] = "Id Pregunta: 11676. ";


//  Id pregunta: 11703 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;cu&aacute;l no es un mecanismo de transici&oacute;n a ipv6?";
 choices[92]= new Array();
 choices[92][0] = "Tunel 6a4";
 choices[92][1] = "Tunel GRE";
 choices[92][2] = "tunel ISATAP";
 choices[92][3] = "tune PPP";
 answers[92] = choices[92][3];
 units[92] = "100";
 comments[92] = "Id Pregunta: 11703. NULL";


//  Id pregunta: 11715 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es la forma en que un administrador puede configurar VLAN?";
 choices[93]= new Array();
 choices[93][0] = "Est&aacute;ticamente o Dinamicamente";
 choices[93][1] = "Din&aacute;micamente o a trav&eacute;s de una base de datos de VLAN";
 choices[93][2] = "A trav&eacute;s de un servidor DHCP";
 choices[93][3] = "A trav&eacute;s de  una base de datos";
 answers[93] = choices[93][0];
 units[93] = "102";
 comments[93] = "Id Pregunta: 11715. NULL";


//  Id pregunta: 11731 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l es el perfil de metrica v3 al que pertenece el Responsable de Seguridad?  ";
 choices[94]= new Array();
 choices[94][0] = "Analista";
 choices[94][1] = "Jefe de proyecto";
 choices[94][2] = "Consultor";
 choices[94][3] = "Analista-programador";
 answers[94] = choices[94][1];
 units[94] = "29";
 comments[94] = "Id Pregunta: 11731. ";


//  Id pregunta: 11738 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[95]= new Array();
 choices[95][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[95][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[95][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[95][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[95] = choices[95][0];
 units[95] = "118";
 comments[95] = "Id Pregunta: 11738. ";


//  Id pregunta: 11747 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[96]= new Array();
 choices[96][0] = "representante del Tribunal de Cuentas";
 choices[96][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[96][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[96][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[96] = choices[96][2];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11747. ";


//  Id pregunta: 11749 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[97]= new Array();
 choices[97][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello&nbsp; electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[97][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[97][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[97][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello&nbsp; electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11749. ";


//  Id pregunta: 11767 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Mediante qu&eacute; procedimiento su pueden adjudicar los acuerdos marco?";
 choices[98]= new Array();
 choices[98][0] = "Solo por procedimiento negociado";
 choices[98][1] = "Solo por procedimiento restringido";
 choices[98][2] = "Solo por procedimiento abierto";
 choices[98][3] = "Por procedimiento abierto, restringido o negociado&nbsp;";
 answers[98] = choices[98][3];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11767. ";


//  Id pregunta: 11768 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es la duraci&oacute;n m&aacute;xima que la ley permite a los acuerdos marco?";
 choices[99]= new Array();
 choices[99][0] = "2 a&ntilde;os";
 choices[99][1] = "1 a&ntilde;o";
 choices[99][2] = "4 a&ntilde;os";
 choices[99][3] = "3 a&ntilde;os";
 answers[99] = choices[99][2];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11768. ";


