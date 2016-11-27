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

//  Id pregunta: 10582 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[0]= new Array();
 choices[0][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[0][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[0][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[0][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[0] = choices[0][3];
 units[0] = "43";
 comments[0] = "Id Pregunta: 10582. Art&iacute;culo 18, RD 1671/2009.";


//  Id pregunta: 10588 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  No es un objetivo de Europa 2020:";
 choices[1]= new Array();
 choices[1][0] = "Invertir un 3% en I+D y desarrollar un indicador para su impacto.";
 choices[1][1] = "Reducir el abandono escolar del 20% al 15%.";
 choices[1][2] = "Reducir en 25% el n&uacute;mero de europeos que viven por debajo de umbrales de la pobreza.";
 choices[1][3] = "Reducir las emisiones de gases de efecto invernadero en un 20% desde 1999.";
 answers[1] = choices[1][1];
 units[1] = "30";
 comments[1] = "Id Pregunta: 10588. ";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  Los programas de ordenador...";
 choices[2]= new Array();
 choices[2][0] = "&hellip; nunca pueden ser objeto de una patente.";
 choices[2][1] = "&hellip; son patentables en la medida en que forman parte de una invenci&oacute;n.";
 choices[2][2] = "&hellip; pueden ser siempre patentables.";
 choices[2][3] = "&hellip; son patentables siempre y cuando est&eacute;n escritos en lenguaje de alto nivel.";
 answers[2] = choices[2][1];
 units[2] = "36";
 comments[2] = "Id Pregunta: 10594. ";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[3]= new Array();
 choices[3][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[3][1] = "Debe implementar una interfaz REST.";
 choices[3][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[3][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[3] = choices[3][2];
 units[3] = "70";
 comments[3] = "Id Pregunta: 10605. ";


//  Id pregunta: 10640 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  Indique cu&aacute;l de &eacute;stas no es una herramienta BPM:";
 choices[4]= new Array();
 choices[4][0] = "Intalio";
 choices[4][1] = "Scrum";
 choices[4][2] = "Tibco";
 choices[4][3] = "Adonis";
 answers[4] = choices[4][1];
 units[4] = "79";
 comments[4] = "Id Pregunta: 10640. ";


//  Id pregunta: 10645 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  Indique la que no es una caracter&iacute;stica com&uacute;n de las &aacute;reas clave del proceso seg&uacute;n CMM:";
 choices[5]= new Array();
 choices[5][0] = "Verificaci&oacute;n de la implementaci&oacute;n.";
 choices[5][1] = "Actividades realizadas.";
 choices[5][2] = "Imposibilidad de realizaci&oacute;n.";
 choices[5][3] = "Medici&oacute;n y an&aacute;lisis.";
 answers[5] = choices[5][2];
 units[5] = "87";
 comments[5] = "Id Pregunta: 10645. ";


//  Id pregunta: 10697 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  La Ley 39/2015:";
 choices[6]= new Array();
 choices[6][0] = "Estipula la creaci&oacute;n del Esquema Nacional de Seguridad y el Esquema Nacional de Interoperabilidad.";
 choices[6][1] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad y Esquema Nacional de Interoperabilidad.";
 choices[6][2] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad.";
 choices[6][3] = "No menciona ni el Esquema Nacional de Seguridad ni el Esquema Nacional de Interoperabilidad.";
 answers[6] = choices[6][1];
 units[6] = "30";
 comments[6] = "Id Pregunta: 10697. ";


//  Id pregunta: 10702 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[7]= new Array();
 choices[7][0] = "&Uacute;nicamente podr&aacute;n ser modificados durante la tramitaci&oacute;n de dicho expediente y en ning&uacute;n caso con posterioridad a su finalizaci&oacute;n.";
 choices[7][1] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo.";
 choices[7][2] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo, a excepci&oacute;n de modificaciones necesarias para la correcci&oacute;n de errores u omisiones en el valor inicialmente asignado.";
 choices[7][3] = "La normativa no establece ning&uacute;n condicionante sobre su posible modificaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "43";
 comments[7] = "Id Pregunta: 10702. ";


//  Id pregunta: 10704 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  En el intercambio de expedientes electr&oacute;nicos seg&uacute;n lo establecido en la NTI de documento electr&oacute;nico.";
 choices[8]= new Array();
 choices[8][0] = "Primero se env&iacute;a el esquemas XML para intercambio de expedientes electr&oacute;nicos y posteriormente los documentos.";
 choices[8][1] = "Primero se env&iacute;an los documentos y despu&eacute;s los esquemas XML para intercambio de expedientes electr&oacute;nicos.";
 choices[8][2] = "Es indiferente el orden de env&iacute;o.";
 choices[8][3] = "Se env&iacute;an &uacute;nicamente los documentos ya que los esquemas XML est&aacute;n contenidos en dichos documentos.";
 answers[8] = choices[8][0];
 units[8] = "43";
 comments[8] = "Id Pregunta: 10704. ";


//  Id pregunta: 10709 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  La Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales se public&oacute; en:";
 choices[9]= new Array();
 choices[9][0] = "2010";
 choices[9][1] = "2011";
 choices[9][2] = "2013";
 choices[9][3] = "2014";
 answers[9] = choices[9][1];
 units[9] = "43";
 comments[9] = "Id Pregunta: 10709. ";


//  Id pregunta: 10713 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales un componente de la plataforma de intercambio?";
 choices[10]= new Array();
 choices[10][0] = "Origen";
 choices[10][1] = "Destino";
 choices[10][2] = "Gestor de intercambio";
 choices[10][3] = "Sistema de intercambio";
 answers[10] = choices[10][3];
 units[10] = "43";
 comments[10] = "Id Pregunta: 10713. ";


//  Id pregunta: 10719 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar de firma contemplado en la NTI de firma electr&oacute;nica?";
 choices[11]= new Array();
 choices[11][0] = "XAdES";
 choices[11][1] = "CAdES";
 choices[11][2] = "PAdES";
 choices[11][3] = "MAdES";
 answers[11] = choices[11][3];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10719. ";


//  Id pregunta: 10731 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  La conexi&oacute;n directa a la Red SARA se proporcionar&aacute; a trav&eacute;s de:";
 choices[12]= new Array();
 choices[12][0] = "Una VPN establecida con cualquiera de los Ministerios.";
 choices[12][1] = "Un &Aacute;rea de Conexi&oacute;n (AC).";
 choices[12][2] = "Un Punto de Presencia situado en el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[12][3] = "Un punto neutro.";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 10731. ";


//  Id pregunta: 10733 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  &iquest;Qu&eacute; Ley menciona en su pre&aacute;mbulo la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Ley 14/2007";
 choices[13][1] = "Ley 37/2007";
 choices[13][2] = "Ley 30/1992";
 choices[13][3] = "Ley 53/1999";
 answers[13] = choices[13][1];
 units[13] = "43";
 comments[13] = "Id Pregunta: 10733. ";


//  Id pregunta: 10760 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  &iquest;Qu&eacute; serie CCN-STIC establece las pol&iacute;ticas y procedimientos adecuados para la implementaci&oacute;n de las medidas contempladas en el Esquema Nacional de Seguridad?";
 choices[14]= new Array();
 choices[14][0] = "500";
 choices[14][1] = "600";
 choices[14][2] = "700";
 choices[14][3] = "800";
 answers[14] = choices[14][3];
 units[14] = "43";
 comments[14] = "Id Pregunta: 10760. ";


//  Id pregunta: 10788 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  En un sistema de memoria paginada, la tabla donde se almacena la correspondencia entre direcciones l&oacute;gicas y f&iacute;sicas, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "TLB: Translation Lookaside Buffer.";
 choices[15][1] = "TTL: Translation Table Location.";
 choices[15][2] = "ATL: Address Translation Lookup.";
 choices[15][3] = "ATB: Address Table Buffer.";
 answers[15] = choices[15][0];
 units[15] = "52";
 comments[15] = "Id Pregunta: 10788. Examen GSI 2014";


//  Id pregunta: 10814 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[16]= new Array();
 choices[16][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[16][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[16][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[16][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[16] = choices[16][1];
 units[16] = "76, 79";
 comments[16] = "Id Pregunta: 10814. Examen GSI 2014";


//  Id pregunta: 10845 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[17]= new Array();
 choices[17][0] = "Diagrama de clases.";
 choices[17][1] = "Diagrama de objetos.";
 choices[17][2] = "Diagrama de despliegue.";
 choices[17][3] = "Diagrama de actividades.";
 answers[17] = choices[17][3];
 units[17] = "82, 84";
 comments[17] = "Id Pregunta: 10845. Examen GSI 2014";


//  Id pregunta: 10849 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Java BluePrints.";
 choices[18][1] = "Java Specification Request.";
 choices[18][2] = "Java Community Process.";
 choices[18][3] = "Java Pattern Spec.";
 answers[18] = choices[18][0];
 units[18] = "60, 116";
 comments[18] = "Id Pregunta: 10849. Examen GSI 2014";


//  Id pregunta: 10895 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  El PUE (Power Usage effectiveness) es una m&eacute;trica que trata de determinar la eficiencia energ&eacute;tica de un Centro de Proceso de Datos, y se define como el resultado de dividir:";
 choices[19]= new Array();
 choices[19][0] = "La potencia total consumida por el CPD por la potencia consumida en el equipamiento TI (servidores, equipos de comunicaciones, almacenamiento y otros).";
 choices[19][1] = "La potencia total consumida por el CPD por la potencia usada en el equipamiento no TI (climatizaci&oacute;n, distribuci&oacute;n el&eacute;ctrica, iluminaci&oacute;n, etc).";
 choices[19][2] = "La potencia consumida por el equipamiento TI entre la consumida por el equipamiento no TI.";
 choices[19][3] = "La potencia total consumida por el CPD por la potencia consumida en el equipamiento de c&oacute;mputo (servidores), excluyendo equipos de comunicaciones y almacenamiento.";
 answers[19] = choices[19][0];
 units[19] = "0";
 comments[19] = "Id Pregunta: 10895. Examen GSI 2014";


//  Id pregunta: 10896 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  Diferencia entre el protocolo RIP v1 y RIP v2:";
 choices[20]= new Array();
 choices[20][0] = "RIP v1 es un protocolo de estado del enlace mientras que el RIP v2 es de vector de distancia.";
 choices[20][1] = "RIP v1 encapsula los mensajes en paquetes UDP y RIP v2 en paquetes TCP.";
 choices[20][2] = "RIP v1 no admite subredes y RIP v2 si las admite.";
 choices[20][3] = "RIP v1 es un protocolo de encaminamiento din&aacute;mico de tipo IGP Y RIP v2 es un protocolo de encaminamiento din&aacute;mico de tipo BGP.";
 answers[20] = choices[20][2];
 units[20] = "102";
 comments[20] = "Id Pregunta: 10896. Examen GSI 2014";


//  Id pregunta: 10926 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  En el &aacute;mbito de los Contratos del Sector P&uacute;blico y, en particular, en los contratos de servicios &iquest;cu&aacute;l es la cuant&iacute;a m&aacute;xima, IVA excluido, del presupuesto de licitaci&oacute;n de los contratos dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica que se declaran de contrataci&oacute;n centralizada?";
 choices[21]= new Array();
 choices[21][0] = "862.000 euros.";
 choices[21][1] = "300.000 euros.";
 choices[21][2] = "500.000 euros.";
 choices[21][3] = "1.152.000 euros.";
 answers[21] = choices[21][0];
 units[21] = "41";
 comments[21] = "Id Pregunta: 10926. TIC A1 AGE 2014";


//  Id pregunta: 10927 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  Respecto a la Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, se&ntilde;ale la respuesta correcta:";
 choices[22]= new Array();
 choices[22][0] = "Las personas jur&iacute;dicas son las &uacute;nicas que pueden hacer uso de los datos generados y custodiados por los organismos del sector p&uacute;blico.";
 choices[22][1] = "La reutilizaci&oacute;n supone actividades como la copia, difusi&oacute;n, reordenaci&oacute;n y combinaci&oacute;n de la informaci&oacute;n siempre que sea con fines no comerciales.";
 choices[22][2] = "El sitio web datos.gob.es es el portal de car&aacute;cter nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica del Sector P&uacute;blico.";
 choices[22][3] = "Los documentos y recursos de informaci&oacute;n reutilizables puestos a disposici&oacute;n p&uacute;blica utilizar&aacute;n est&aacute;ndares abiertos y est&aacute;ndares propietarios indistintamente.";
 answers[22] = choices[22][2];
 units[22] = "22";
 comments[22] = "Id Pregunta: 10927. TIC A1 AGE 2014";


//  Id pregunta: 10961 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  &iquest;C&uacute;al de las siguientes opciones NO es un plan incluido en la Agenda Digital para Espa&ntilde;a?";
 choices[23]= new Array();
 choices[23][0] = "Contenidos y econom&iacute;a digital.";
 choices[23][1] = "Inclusi&oacute;n digital y empleabilidad.";
 choices[23][2] = "Confianza en el &aacute;mbito digital.";
 choices[23][3] = "Servicios p&uacute;blicos en la nube.";
 answers[23] = choices[23][3];
 units[23] = "30";
 comments[23] = "Id Pregunta: 10961. TIC A1 AGE 2014";


//  Id pregunta: 10964 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  Respecto a RTMP (Real Time Messaging Protocol), se&ntilde;ale la respuesta correcta:";
 choices[24]= new Array();
 choices[24][0] = "Junto con ICMP proporciona las funciones de monitorizaci&oacute;n y control de TCP/IP.";
 choices[24][1] = "Permite la gesti&oacute;n conjunta de mensajer&iacute;a instant&aacute;nea y mensajes cortos GSM.";
 choices[24][2] = "Se emplea para la emisi&oacute;n en tiempo real de streaming de v&iacute;deo.";
 choices[24][3] = "Define el est&aacute;ndar de comunicaciones para los procesadores de sistemas de tiempo real cr&iacute;tico.";
 answers[24] = choices[24][2];
 units[24] = "117";
 comments[24] = "Id Pregunta: 10964. TIC A1 AGE 2014";


//  Id pregunta: 10978 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  Respecto al algoritmo de cifrado RC5, se&ntilde;ale la respuesta correcta:";
 choices[25]= new Array();
 choices[25][0] = "Se trata de un algoritmo de cifrado asim&eacute;trico.";
 choices[25][1] = "No utiliza rotaciones dependientes de los datos para su proceso.";
 choices[25][2] = "Posee un n&uacute;mero fijo de rotaciones para su proceso.";
 choices[25][3] = "Posee tama&ntilde;o variable de clave.";
 answers[25] = choices[25][3];
 units[25] = "72";
 comments[25] = "Id Pregunta: 10978. TIC A1 AGE 2014";


//  Id pregunta: 11003 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  Indique la respuesta FALSA respecto a las autoridades de validaci&oacute;n del DNI electr&oacute;nico:";
 choices[26]= new Array();
 choices[26][0] = "La prestaci&oacute;n de estos servicios de validaci&oacute;n se realiza en base a Online Certificate Status Protocol (OCSP).";
 choices[26][1] = "Para la validaci&oacute;n del DNI electr&oacute;nico se dispone de dos prestadores de Servicios de Validaci&oacute;n.";
 choices[26][2] = "La informaci&oacute;n sobre los certificados electr&oacute;nicos revocados se almacena en las denominadas listas de revocaci&oacute;n de certificados (CRL).";
 choices[26][3] = "En la Infraestructura de Clave P&uacute;blica adoptada para el DNI electr&oacute;nico, se ha optado por asignar a una misma entidad las funciones de Autoridad de Validaci&oacute;n y Certificaci&oacute;n.";
 answers[26] = choices[26][3];
 units[26] = "74";
 comments[26] = "Id Pregunta: 11003. TIC A1 AGE 2014";


//  Id pregunta: 11007 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  Se&ntilde;ale la respuesta correcta respecto al modelo de Desarrollo R&aacute;pido de Aplicaciones (DRA) para el desarrollo de nuevas aplicaciones:";
 choices[27]= new Array();
 choices[27][0] = "El DRA no es un modelo adecuado si la nueva aplicaci&oacute;n hace uso de tecnolog&iacute;as nuevas.";
 choices[27][1] = "Aunque un sistema no se pueda modularizar adecuadamente, la construcci&oacute;n de los componentes necesarios para DRA no ser&aacute; problem&aacute;tico.";
 choices[27][2] = "El DRA no es adecuado cuando el software nuevo no requiere un alto grado de interoperatividad con aplicaciones ya existentes.";
 choices[27][3] = "Es un modelo de proceso del desarrollo del software en espiral que enfatiza un ciclo de desarrollo extremadamente corto.";
 answers[27] = choices[27][0];
 units[27] = "76";
 comments[27] = "Id Pregunta: 11007. TIC A1 AGE 2014";


//  Id pregunta: 11026 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes se corresponde con el Comit&eacute; T&eacute;cnico en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n dentro de ISO?";
 choices[28]= new Array();
 choices[28][0] = "ISO/TC 1";
 choices[28][1] = "ISO/TC 2";
 choices[28][2] = "ISO/IEC JTC 1";
 choices[28][3] = "ISO/IEC JPC 2";
 answers[28] = choices[28][2];
 units[28] = "42";
 comments[28] = "Id Pregunta: 11026. ";


//  Id pregunta: 11031 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l se corresponde con el nivel alto de planificaci&oacute;n del procesador?";
 choices[29]= new Array();
 choices[29][0] = "Scheduler";
 choices[29][1] = "Planificator";
 choices[29][2] = "High Planificator";
 choices[29][3] = "Dispatcher";
 answers[29] = choices[29][0];
 units[29] = "52";
 comments[29] = "Id Pregunta: 11031. ";


//  Id pregunta: 11032 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l es una biblioteca de render avanzado de controles de aplicaci&oacute;n en GNOME?";
 choices[30]= new Array();
 choices[30][0] = "Metacity";
 choices[30][1] = "Pango";
 choices[30][2] = "Cairo";
 choices[30][3] = "Gconf";
 answers[30] = choices[30][2];
 units[30] = "54";
 comments[30] = "Id Pregunta: 11032. ";


//  Id pregunta: 11034 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "a)&nbsp;&nbsp;&nbsp;&nbsp; Modelo de Datos &agrave; Modelo est&aacute;tico";
 choices[31][1] = "Modelo de Objetos &agrave; Modelo funcional";
 choices[31][2] = "Modelo de Procesos &agrave; Modelo din&aacute;mico";
 choices[31][3] = "Modelo de Estados &agrave; Modelo funcional";
 answers[31] = choices[31][0];
 units[31] = "57";
 comments[31] = "Id Pregunta: 11034. ";


//  Id pregunta: 11038 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  &iquest;Qu&eacute; Base de Datos NO est&aacute; disponible para Linux?";
 choices[32]= new Array();
 choices[32][0] = "Oracle";
 choices[32][1] = "SQL Server";
 choices[32][2] = "PostgreSQL";
 choices[32][3] = "MySQL";
 answers[32] = choices[32][1];
 units[32] = "58";
 comments[32] = "Id Pregunta: 11038. ";


//  Id pregunta: 11043 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  &iquest;En qu&eacute; patr&oacute;n de dise&ntilde;o est&aacute; basada la arquitectura de Swing?";
 choices[33]= new Array();
 choices[33][0] = "Modelo-Vista-Controlador (MVC)";
 choices[33][1] = "Singleton";
 choices[33][2] = "Observer";
 choices[33][3] = "Facade";
 answers[33] = choices[33][0];
 units[33] = "60";
 comments[33] = "Id Pregunta: 11043. ";


//  Id pregunta: 11072 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  Hay 7 diferentes estrategias de externalizaci&oacute;n que una compa&ntilde;&iacute;a puede emplear, &iquest;cu&aacute;l es la forma m&aacute;s reciente de outsourcing?";
 choices[34]= new Array();
 choices[34][0] = "Outsourcing del Proceso de Conocimiento";
 choices[34][1] = "Asociaci&oacute;n o multi-sourcing";
 choices[34][2] = "Outsourcing de Procesos de Negocio (Business Process Outsourcing BPO)";
 choices[34][3] = "Provisi&oacute;n de Servicios de Aplicaci&oacute;n";
 answers[34] = choices[34][0];
 units[34] = "98";
 comments[34] = "Id Pregunta: 11072. ";


//  Id pregunta: 11107 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  Seleccione la respuesta correcta sobre los derechos morales irrenunciables de un autor de una obra:";
 choices[35]= new Array();
 choices[35][0] = "Derecho a decidir sobre la divulgaci&oacute;n o no de la obra";
 choices[35][1] = "Respeto a la integridad de la obra";
 choices[35][2] = "Derecho a exigir el reconocimiento de su condici&oacute;n de autor";
 choices[35][3] = "Todas las anteriores";
 answers[35] = choices[35][3];
 units[35] = "36";
 comments[35] = "Id Pregunta: 11107. ";


//  Id pregunta: 11110 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  Seleccione la opci&oacute;n que no indica un principio o pauta de las WCAG 2.0";
 choices[36]= new Array();
 choices[36][0] = "Comprensibilidad";
 choices[36][1] = "Sencillez";
 choices[36][2] = "Operabilidad";
 choices[36][3] = "Robustez";
 answers[36] = choices[36][1];
 units[36] = "39";
 comments[36] = "Id Pregunta: 11110. ";


//  Id pregunta: 11119 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  &iquest;Por qu&eacute; acuerdo marco comprar&iacute;a usted un ordenador personal?";
 choices[37]= new Array();
 choices[37][0] = "AM 2/2013";
 choices[37][1] = "AM 10/2013";
 choices[37][2] = "AM 13/2013";
 choices[37][3] = "AM 5/2013";
 answers[37] = choices[37][0];
 units[37] = "41";
 comments[37] = "Id Pregunta: 11119. ";


//  Id pregunta: 11121 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  &iquest;En qu&eacute; situaci&oacute;n pueden las AAPP establecer la obligatoriedad de comunicarse con ellas utilizando s&oacute;lo medios electr&oacute;nicos?";
 choices[38]= new Array();
 choices[38][0] = "Nunca";
 choices[38][1] = "&Uacute;nicamente cuando los interesados sean personas jur&iacute;dicas";
 choices[38][2] = "Cuando los interesados sean personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[38][3] = "En todo caso";
 answers[38] = choices[38][2];
 units[38] = "43";
 comments[38] = "Id Pregunta: 11121. ";


//  Id pregunta: 11135 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  &iquest;Qu&eacute; comando de UNIX muestra la ruta al directorio de trabajo?";
 choices[39]= new Array();
 choices[39][0] = "Ls";
 choices[39][1] = "Pwd";
 choices[39][2] = "Tree";
 choices[39][3] = "Cd /home";
 answers[39] = choices[39][1];
 units[39] = "54";
 comments[39] = "Id Pregunta: 11135. ";


//  Id pregunta: 11169 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  &iquest;Cu&aacute;les es el orden correcto de los bloques b&aacute;sicos de procesamiento de un sistema biom&eacute;trico de reconocimiento de voz?";
 choices[40]= new Array();
 choices[40][0] = "Preprocesamiento, Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[40][1] = "Obtenci&oacute;n de datos del sensor, Preprocesamiento, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[40][2] = "Extracci&oacute;n de caracter&iacute;sticas, Obtenci&oacute;n de datos del sensor, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[40][3] = "Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 answers[40] = choices[40][2];
 units[40] = "94";
 comments[40] = "Id Pregunta: 11169. ";


//  Id pregunta: 11174 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes es una herramienta utilizada para el cifrado de correos electr&oacute;nicos";
 choices[41]= new Array();
 choices[41][0] = "PGP";
 choices[41][1] = "S/MME";
 choices[41][2] = "Todos los anteriores";
 choices[41][3] = "Ninguno de los anteriores";
 answers[41] = choices[41][2];
 units[41] = "106";
 comments[41] = "Id Pregunta: 11174. ";


//  Id pregunta: 11178 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes componentes es de nivel 2?";
 choices[42]= new Array();
 choices[42][0] = "Repetidores";
 choices[42][1] = "Puentes";
 choices[42][2] = "Enrutadores";
 choices[42][3] = "Concentradores";
 answers[42] = choices[42][1];
 units[42] = "102";
 comments[42] = "Id Pregunta: 11178. ";


//  Id pregunta: 11189 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo TCP WhoIS?";
 choices[43]= new Array();
 choices[43][0] = "43";
 choices[43][1] = "21";
 choices[43][2] = "23";
 choices[43][3] = "69";
 answers[43] = choices[43][0];
 units[43] = "112";
 comments[43] = "Id Pregunta: 11189. ";


//  Id pregunta: 11190 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes protocolos se utiliza para videoconferencia sobre IP?";
 choices[44]= new Array();
 choices[44][0] = "ITU H.320";
 choices[44][1] = "ITU H.243";
 choices[44][2] = "ITU H.249";
 choices[44][3] = "ITU H.323";
 answers[44] = choices[44][3];
 units[44] = "117";
 comments[44] = "Id Pregunta: 11190. ";


//  Id pregunta: 11212 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[45]= new Array();
 choices[45][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[45][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[45][2] = "Los dos anteriores son verdaderos";
 choices[45][3] = "Todas las respuestas son falsas";
 answers[45] = choices[45][2];
 units[45] = "30";
 comments[45] = "Id Pregunta: 11212. ";


//  Id pregunta: 11229 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  Cu&aacute;l de las siguientes respuestas es cierta sobre la tecnolog&iacute;a Java Server Faces (JSF)?";
 choices[46]= new Array();
 choices[46][0] = "JSF 2.0 est&aacute; definido especificaci&oacute;n Java EE JSR-314.";
 choices[46][1] = "La implementaci&oacute;n de referencia de la especificaci&oacute;n JSF es el proyecto Oracle Mojarra.";
 choices[46][2] = "JSF 2 utiliza Facelets como su sistema de plantillas por defecto.";
 choices[46][3] = "Todas las respuestas son ciertas.";
 answers[46] = choices[46][3];
 units[46] = "116";
 comments[46] = "Id Pregunta: 11229. ";


//  Id pregunta: 11237 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  El framework Hibernate";
 choices[47]= new Array();
 choices[47][0] = "Est&aacute; disponible tambi&eacute;n para&nbsp;.Net&nbsp;con el nombre de&nbsp;NHibernate.";
 choices[47][1] = "Hibernate se distribuye bajo los t&eacute;rminos de la licencia&nbsp;GNU LGPL.";
 choices[47][2] = "Se apoya en Java Reflection API y en la librer&iacute;a de generaci&oacute;n de c&oacute;digo Javassist.";
 choices[47][3] = "Todas las respuestas son correctas.";
 answers[47] = choices[47][3];
 units[47] = "116";
 comments[47] = "Id Pregunta: 11237. ";


//  Id pregunta: 11258 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  En relaci&oacute;n con los efectos jur&iacute;dicos de las firmas electr&oacute;nicas, indique la respuesta correcta:";
 choices[48]= new Array();
 choices[48][0] = "No se denegar&aacute;n efectos jur&iacute;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electr&oacute;nica por el mero hecho de ser una firma electr&oacute;nica o porque no cumpla los requisitos de la firma electr&oacute;nica cualificada.";
 choices[48][1] = "Una firma electr&oacute;nica cualificada tendr&aacute; un efecto jur&iacute;dico equivalente al de una firma manuscrita.";
 choices[48][2] = "Una firma electr&oacute;nica b&aacute;sica, como usuario y contrase&ntilde;a, puede ser prueba en juicio.";
 choices[48][3] = "Todas son verdaderas.";
 answers[48] = choices[48][3];
 units[48] = "73";
 comments[48] = "Id Pregunta: 11258. ";


//  Id pregunta: 11261 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  &iquest;Cu&aacute;les son los niveles de seguridad de los sistemas de autenticaci&oacute;n que define el Reglamento 910/2014?";
 choices[49]= new Array();
 choices[49][0] = "Bajo, medio y alto.";
 choices[49][1] = "B&aacute;sico, medio y alto.";
 choices[49][2] = "B&aacute;sico, sustancial y alto.";
 choices[49][3] = "Bajo, sustancial y alto.";
 answers[49] = choices[49][3];
 units[49] = "73";
 comments[49] = "Id Pregunta: 11261. ";


//  Id pregunta: 11265 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  La versi&oacute;n 3 de ITIL enfoca la gesti&oacute;n de servicios a partir del ciclo de vida de un servicio, se&ntilde;ale en concepto correcto entre los que se muestran a continuaci&oacute;n: ";
 choices[50]= new Array();
 choices[50][0] = "Funci&oacute;n: es una subdivisi&oacute;n de una organizaci&oacute;n que est&aacute; especializada en realizar un tipo de trabajo concreto y tiene la responsabilidad de obtener resultados concretos.";
 choices[50][1] = "Actividad: es un conjunto estructurado de procesos dise&ntilde;ado para cumplir uno objetivo concreto.";
 choices[50][2] = "Gesti&oacute;n de Servicio: es un conjunto de actividades y responsabilidades asignadas a una persona o un grupo.";
 choices[50][3] = "Rol: es un conjunto de capacidades organizativas especializadas, cuyo fin es generar valor para los clientes en forma de servicios.";
 answers[50] = choices[50][0];
 units[50] = "98";
 comments[50] = "Id Pregunta: 11265. ";


//  Id pregunta: 11287 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes NO es un sistema de indexaci&oacute;n y b&uacute;squeda de texto?";
 choices[51]= new Array();
 choices[51][0] = "Lucene";
 choices[51][1] = "Solr";
 choices[51][2] = "Xapian";
 choices[51][3] = "Todos los anteriores lo son";
 answers[51] = choices[51][3];
 units[51] = "95";
 comments[51] = "Id Pregunta: 11287. ";


//  Id pregunta: 11299 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  De entre las siguientes, escoge la falsa en relaci&oacute;n con SQL:";
 choices[52]= new Array();
 choices[52][0] = "Las relaciones participantes en un producto cartesiano, deben tener el mismo grado.";
 choices[52][1] = "Para todas las operaciones de &aacute;lgebra relacional, las 2 relaciones deben tener el mismo grado, excepto en el producto cartesiano.";
 choices[52][2] = "El SQL es estandarizado por ISO/IEC JTC1 Subcomit&eacute; 21.";
 choices[52][3] = "En SQL embebido los c&oacute;digos de retorno con signo negativo son errores.";
 answers[52] = choices[52][0];
 units[52] = "58";
 comments[52] = "Id Pregunta: 11299. El producto cartesiano es la &uacute;nica operaci&oacute;n del &aacute;lgebra relacional, que no necesita que las relaciones tengan el mismo grado, es decir el mismo n&uacute;mero de columnas.";


//  Id pregunta: 11330 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  &iquest;Qu&eacute; planes nacionales se derivan de la Ley General de Telecomunicaciones?";
 choices[53]= new Array();
 choices[53][0] = "Numeraci&oacute;n y direccionamiento";
 choices[53][1] = "Denominaci&oacute;n";
 choices[53][2] = "Las dos anteriores";
 choices[53][3] = "Ninguna";
 answers[53] = choices[53][2];
 units[53] = "110";
 comments[53] = "Id Pregunta: 11330. ";


//  Id pregunta: 11338 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  Se&ntilde;ale el tipo de proyecto que no est&aacute; entre los contemplados por COCOMO";
 choices[54]= new Array();
 choices[54][0] = "Empotrado";
 choices[54][1] = "Org&aacute;nico";
 choices[54][2] = "Semiacoplado";
 choices[54][3] = "Semiempotrado";
 answers[54] = choices[54][3];
 units[54] = "89";
 comments[54] = "Id Pregunta: 11338. ";


//  Id pregunta: 11340 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  En relaci&oacute;n con los diagramas de casos de uso, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[55]= new Array();
 choices[55][0] = "Las relaciones entre casos de uso y actores pueden ser de tipo usa o extiende";
 choices[55][1] = "Las relaciones s&oacute;lo pueden ser entre actores y casos de uso";
 choices[55][2] = "Los elementos principales son: casos de uso, relaciones, actores y extensiones";
 choices[55][3] = "M&eacute;trica no contempla su uso";
 answers[55] = choices[55][2];
 units[55] = "86";
 comments[55] = "Id Pregunta: 11340. ";


//  Id pregunta: 11351 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  En cuanto al formato de la cabecera IPv6, se&ntilde;ale la opci&oacute;n verdadera";
 choices[56]= new Array();
 choices[56][0] = "4 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[56][1] = "4 bits de versi&oacute;n, 20 bits de clase de tr&aacute;fico, 8 etiqueta de flujo";
 choices[56][2] = "8 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[56][3] = "4 bits de versi&oacute;n, 4 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 answers[56] = choices[56][0];
 units[56] = "100";
 comments[56] = "Id Pregunta: 11351. ";


//  Id pregunta: 11361 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les son los beneficios de la Biblioteca Definitiva de Medios (DML)?:  1. Protecci&oacute;n l&oacute;gica del software y control de licencias; 2. Control del despliegue de las versiones autorizadas; 3. Protecci&oacute;n f&iacute;sica del software";
 choices[57]= new Array();
 choices[57][0] = "Solo 1 y 2";
 choices[57][1] = "Solo 2 y 3";
 choices[57][2] = "Todos";
 choices[57][3] = "Ninguno";
 answers[57] = choices[57][2];
 units[57] = "98";
 comments[57] = "Id Pregunta: 11361. ";


//  Id pregunta: 11362 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  Indique qu&eacute; definiciones son correctas de acuerdo a ITIL v3 para Gesti&oacute;n de Incidencias y Gesti&oacute;n de Problemas: 1. Gesti&oacute;n de Incidencias: restaura el servicio lo antes posible, sin importar la soluci&oacute;n aplicada; 2. Gesti&oacute;n de Problemas: procura dar soluciones definitivas para evitar la recurrencia de incidencias.";
 choices[58]= new Array();
 choices[58][0] = "Solo 1";
 choices[58][1] = "Solo 2";
 choices[58][2] = "Ambas";
 choices[58][3] = "Ninguna";
 answers[58] = choices[58][2];
 units[58] = "98";
 comments[58] = "Id Pregunta: 11362. ";


//  Id pregunta: 11366 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  Seg&uacute;n ITIL v3, &iquest;para qu&eacute; se utiliza el modelo RACI?";
 choices[59]= new Array();
 choices[59][0] = "Documentar los roles y las responsabilidades de los interesados en un proceso o actividad";
 choices[59][1] = "Definir los requisitos para un nuevo servicio o un proceso";
 choices[59][2] = "Analizar el impacto de una incidencia en el negocio";
 choices[59][3] = "Crear un cuadro de mando que muestra el estado global de la gesti&oacute;n de servicios";
 answers[59] = choices[59][0];
 units[59] = "98";
 comments[59] = "Id Pregunta: 11366. ";


//  Id pregunta: 11379 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; significa &ldquo;Garant&iacute;a de un servicio&rdquo;?";
 choices[60]= new Array();
 choices[60][0] = "El servicio se ajusta al prop&oacute;sito";
 choices[60][1] = "No habr&aacute; fallas en las aplicaciones ni en la infraestructura asociada al servicio";
 choices[60][2] = "Todos los problemas relacionados con el servicio se solucionan gratuitamente durante un per&iacute;odo determinado de tiempo";
 choices[60][3] = "A los clientes se les aseguran ciertos niveles de disponibilidad, capacidad, continuidad y seguridad";
 answers[60] = choices[60][3];
 units[60] = "98";
 comments[60] = "Id Pregunta: 11379. ";


//  Id pregunta: 11391 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es primordialmente responsable de empaquetar, construir, probar y desplegar servicios?";
 choices[61]= new Array();
 choices[61][0] = "Planificaci&oacute;n y soporte a la transici&oacute;n";
 choices[61][1] = "Gesti&oacute;n de versiones y despliegues";
 choices[61][2] = "Gesti&oacute;n de configuraci&oacute;n y activos del servicio";
 choices[61][3] = "Gesti&oacute;n del cat&aacute;logo de servicios";
 answers[61] = choices[61][1];
 units[61] = "98";
 comments[61] = "Id Pregunta: 11391. ";


//  Id pregunta: 11394 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la MEJOR definici&oacute;n de un modelo de incidencias?";
 choices[62]= new Array();
 choices[62][0] = "La plantilla que define el formulario de registro de incidencias usado para informar las incidencias";
 choices[62][1] = "Un tipo de incidencia que acarrea un tipo est&aacute;ndar (o modelo) de elemento de configuraci&oacute;n (CI)";
 choices[62][2] = "Un conjunto predefinido de pasos a seguir al tratar con un tipo conocido de incidencia";
 choices[62][3] = "Una incidencia que es f&aacute;cil de resolver";
 answers[62] = choices[62][2];
 units[62] = "98";
 comments[62] = "Id Pregunta: 11394. ";


//  Id pregunta: 11395 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  &iquest;Cu&aacute;les de los siguientes roles est&aacute;n definidos en el modelo RACI de ITIL v3?";
 choices[63]= new Array();
 choices[63][0] = "Responsable, Encargado, Consultado, Informado";
 choices[63][1] = "Responsable, Factible, Consultado, Informado";
 choices[63][2] = "Realista, Encargado, Consultado, Informado";
 choices[63][3] = "Responsable, Encargado, Correcto, Informado";
 answers[63] = choices[63][0];
 units[63] = "98";
 comments[63] = "Id Pregunta: 11395. ";


//  Id pregunta: 11411 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Seg&uacute;n la Ley 9/2014, cu&aacute;l de los siguientes NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicos dispuestos al p&uacute;blico:";
 choices[64]= new Array();
 choices[64][0] = "Derecho a la continuidad de servicio y a obtener compensaci&oacute;n por su interrupci&oacute;n.";
 choices[64][1] = "Derecho de acceso a servicio de emergencias de forma gratuita.";
 choices[64][2] = "Derecho a informaci&oacute;n veraz, eficaz, suficiente y transparente.";
 choices[64][3] = "Derecho a autorizar el desv&iacute;o automatizado de llamadas.";
 answers[64] = choices[64][3];
 units[64] = "110";
 comments[64] = "Id Pregunta: 11411. ";


//  Id pregunta: 11428 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Seg&uacute;n la Ley 9/2014, mediante Real Decreto se regular&aacute;n derechos:";
 choices[65]= new Array();
 choices[65][0] = "Continuidad servicio.";
 choices[65][1] = "Continuidad servicio y obtener compensaci&oacute;n autom&aacute;tica sin interrupci&oacute;n.";
 choices[65][2] = "Continuidad servicio y obtener compensaci&oacute;n proporcional al tiempo de interrupci&oacute;n.";
 choices[65][3] = "Continuidad servicio, sin compensaci&oacute;n.";
 answers[65] = choices[65][1];
 units[65] = "110";
 comments[65] = "Id Pregunta: 11428. ";


//  Id pregunta: 11430 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Seg&uacute;n la Ley 9/2014, &iquest;a qui&eacute;n corresponde la elaboraci&oacute;n y aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro?";
 choices[66]= new Array();
 choices[66][0] = "CNMC.";
 choices[66][1] = "MINETUR.";
 choices[66][2] = "Gobierno.";
 choices[66][3] = "SETSI.";
 answers[66] = choices[66][2];
 units[66] = "110";
 comments[66] = "Id Pregunta: 11430. ";


//  Id pregunta: 11449 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n la Ley 9/2014, las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico no incluyen:";
 choices[67]= new Array();
 choices[67][0] = "Proporcionadas.";
 choices[67][1] = "No discriminatorias.";
 choices[67][2] = "Transparentes.";
 choices[67][3] = "Neutrales.";
 answers[67] = choices[67][3];
 units[67] = "110";
 comments[67] = "Id Pregunta: 11449. ";


//  Id pregunta: 11451 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n la Ley 9/2014, el Gobierno, al administrar el espectro radioel&eacute;ctrico, debe:";
 choices[68]= new Array();
 choices[68][0] = "Determinar los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[68][1] = "Establecer el procedimiento para reasignar el uso de las bandas para un uso m&aacute;s eficiente del espectro.";
 choices[68][2] = "Utilizar el espectro de forma adecuada.";
 choices[68][3] = "Todas son atribuciones del Gobierno.";
 answers[68] = choices[68][3];
 units[68] = "110";
 comments[68] = "Id Pregunta: 11451. ";


//  Id pregunta: 11459 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n la Ley 9/2014, el Gobierno, en relaci&oacute;n a la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, establecer&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos p&uacute;blicos.";
 choices[69][1] = "La correcta utilizaci&oacute;n de frecuencias por parte de los operadores.";
 choices[69][2] = "La inspecci&oacute;n por un ente privado del nivel radioel&eacute;ctrico tolerable.";
 choices[69][3] = "Ninguna de las anteriores.";
 answers[69] = choices[69][3];
 units[69] = "110";
 comments[69] = "Id Pregunta: 11459. ";


//  Id pregunta: 11462 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Cu&aacute;l de los siguientes no es un derecho de los usuarios recogido en la Ley 9/2014:";
 choices[70]= new Array();
 choices[70][0] = "Derecho a figurar en las gu&iacute;as de abonados.";
 choices[70][1] = "A recibir facturas no desglosadas a petici&oacute;n del usuario.";
 choices[70][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[70][3] = "A recibir llamadas autom&aacute;ticas sin intervenci&oacute;n humana o mensajes de fax, con fines de comunicaci&oacute;n comercial sin haber prestado su consentimiento previo e informado para ello.";
 answers[70] = choices[70][3];
 units[70] = "110";
 comments[70] = "Id Pregunta: 11462. ";


//  Id pregunta: 11491 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  &iquest;Qu&eacute; norma del CCN hace referencia a la criptograf&iacute;a de empleo en el Esquema Nacional de Seguridad?";
 choices[71]= new Array();
 choices[71][0] = "CCN-STIC-802";
 choices[71][1] = "CCN-STIC-403";
 choices[71][2] = "CCN-STIC-807";
 choices[71][3] = "CCN-STIC-823";
 answers[71] = choices[71][2];
 units[71] = "43";
 comments[71] = "Id Pregunta: 11491. NULL";


//  Id pregunta: 11508 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  El tipo de control de acceso a usuarios que establece que todo recurso del sistema tiene una etiqueta de seguridad compuesta por el nivel de seguridad y el recurso al que se quiere acceder, se denomina.";
 choices[72]= new Array();
 choices[72][0] = "DAC";
 choices[72][1] = "RBAC";
 choices[72][2] = "MAC";
 choices[72][3] = "Ninguno de los anteriores.";
 answers[72] = choices[72][2];
 units[72] = "72";
 comments[72] = "Id Pregunta: 11508. NULL";


//  Id pregunta: 11518 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  &iquest;Qu&eacute; afirmaci&oacute;n respecto al protocolo SSL NO es cierta?";
 choices[73]= new Array();
 choices[73][0] = "Responde por Secure Socket Layer.";
 choices[73][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web.";
 choices[73][2] = "En su funcionamiento se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal. (confidencialidad)";
 choices[73][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes.";
 answers[73] = choices[73][3];
 units[73] = "111";
 comments[73] = "Id Pregunta: 11518. NULL";


//  Id pregunta: 11520 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Al instalar un cortafuegos en un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[74]= new Array();
 choices[74][0] = "Confidencialidad.";
 choices[74][1] = "Disponibilidad.";
 choices[74][2] = "Integridad.";
 choices[74][3] = "Todas las anteriores.";
 answers[74] = choices[74][3];
 units[74] = "72";
 comments[74] = "Id Pregunta: 11520. NULL";


//  Id pregunta: 11525 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  En un entorno de computaci&oacute;n Grid, &iquest;qu&eacute; nombre reciben las agrupaciones din&aacute;micas de diferentes organizaciones f&iacute;sicas o individuos que comparten recursos y colaboran con el fin de lograr un objetivo com&uacute;n?";
 choices[75]= new Array();
 choices[75][0] = "Virtual Organizations (VO).";
 choices[75][1] = "Grid Domain Resources (GDR)";
 choices[75][2] = "Domain Group Policy (DGP).";
 choices[75][3] = "Organization Resource Group (ORG)";
 answers[75] = choices[75][0];
 units[75] = "45";
 comments[75] = "Id Pregunta: 11525. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11536 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  La licencia de la GNU utilizada espec&iacute;ficamente para licenciar Software en la redes de computadores es:";
 choices[76]= new Array();
 choices[76][0] = "GFDL";
 choices[76][1] = "GPL";
 choices[76][2] = "Affero GPL";
 choices[76][3] = "EUPL";
 answers[76] = choices[76][2];
 units[76] = "62";
 comments[76] = "Id Pregunta: 11536. NULL";


//  Id pregunta: 11540 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Dada la actividad A(4,7,16) de un proyecto, se puede afirmar.";
 choices[77]= new Array();
 choices[77][0] = "Su duraci&oacute;n es de 8 d&iacute;as.";
 choices[77][1] = "Su holgura total es de 12.";
 choices[77][2] = "Su varianza es 2.";
 choices[77][3] = "Son correctas la a) y la c)";
 answers[77] = choices[77][0];
 units[77] = "89";
 comments[77] = "Id Pregunta: 11540. Conceptos PERT";


//  Id pregunta: 11556 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, aquella reuni&oacute;n que se lleva a cabo todos los d&iacute;as y en la que &uacute;nicamente un miembro de cada equipo participa, se denomina:";
 choices[78]= new Array();
 choices[78][0] = "Daily Scrum";
 choices[78][1] = "Srum de Scrum";
 choices[78][2] = "Sprint Review Meeting";
 choices[78][3] = "Sprint Retrospective";
 answers[78] = choices[78][1];
 units[78] = "79";
 comments[78] = "Id Pregunta: 11556. NULL";


//  Id pregunta: 11570 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  El nivel de enlace para la se&ntilde;alizaci&oacute;n por canal D de un enlace RDSI es:";
 choices[79]= new Array();
 choices[79][0] = "V.120";
 choices[79][1] = "LAPB";
 choices[79][2] = "Q.921";
 choices[79][3] = "Q.931";
 answers[79] = choices[79][2];
 units[79] = "109";
 comments[79] = "Id Pregunta: 11570. NULL";


//  Id pregunta: 11573 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Se&ntilde;ale la respuesta incorrecta sobre ADSL 2";
 choices[80]= new Array();
 choices[80][0] = "Emplea un ancho de banda mayor que el ADSL original";
 choices[80][1] = "Puede emplear varias l&iacute;neas telef&oacute;nicas para un &uacute;nica comunicaci&oacute;n";
 choices[80][2] = "Est&aacute; basado en la tecnolog&iacute;a STTH";
 choices[80][3] = "Puede emplear el ancho de banda para telefon&iacute;a obteniendo un amayor velocidad de transmisi&oacute;n de datos.";
 answers[80] = choices[80][2];
 units[80] = "107";
 comments[80] = "Id Pregunta: 11573. NULL";


//  Id pregunta: 11580 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n el RD 806/2014 sobre organizaci&oacute;n e instrumentos operativos de las TIC en la AGE y sus organismos p&uacute;blicos, corresponde la declaraci&oacute;n de medios y servicios compartidos a:";
 choices[81]= new Array();
 choices[81][0] = "DTIC, Direcci&oacute;n de Tecnolog&iacute;s de la Informaci&oacute;n y Comunicaciones.";
 choices[81][1] = "CETIC, Comisi&oacute;n de Estrategia TIC, a propuesta de los Ministros de Hacienda y AAPP y de la Presidencia.";
 choices[81][2] = "A la DTIC, a propuesta de las CMADs, Comisiones Ministeriales de Administraci&oacute;n Digital.";
 choices[81][3] = "La CETIC, a propuesta de la DTIC.";
 answers[81] = choices[81][3];
 units[81] = "24";
 comments[81] = "Id Pregunta: 11580. NULL";


//  Id pregunta: 11617 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Se&ntilde;ale en qu&eacute; tipo de licencia Creative Commons se permite el uso comercial de la obra pero no la generaci&oacute;n de obras derivadas:";
 choices[82]= new Array();
 choices[82][0] = "by-nc";
 choices[82][1] = "by-nd";
 choices[82][2] = "by-sa";
 choices[82][3] = "by-nc-nd";
 answers[82] = choices[82][1];
 units[82] = "61";
 comments[82] = "Id Pregunta: 11617. ";


//  Id pregunta: 11620 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  En los sistemas de representaci&oacute;n del conocimiento basados en marcos, el procedimiento de validaci&oacute;n que se ejecuta cuando se a&ntilde;ade un valor a un slot se denomina:";
 choices[83]= new Array();
 choices[83][0] = "If-added";
 choices[83][1] = "If-needed";
 choices[83][2] = "If-required";
 choices[83][3] = "Todos los anteriores son incorrectos";
 answers[83] = choices[83][2];
 units[83] = "64";
 comments[83] = "Id Pregunta: 11620. ";


//  Id pregunta: 11626 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 25/2013:";
 choices[84]= new Array();
 choices[84][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[84][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[84][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[84][3] = "Todas las anteriores son correctas";
 answers[84] = choices[84][3];
 units[84] = "70";
 comments[84] = "Id Pregunta: 11626. ";


//  Id pregunta: 11628 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Las tarjetas de proximidad se encuentran recogidas en el est&aacute;ndar:";
 choices[85]= new Array();
 choices[85][0] = "ISO 10536";
 choices[85][1] = "ISO 14443";
 choices[85][2] = "ISO 15693";
 choices[85][3] = "ISO 16949";
 answers[85] = choices[85][1];
 units[85] = "74";
 comments[85] = "Id Pregunta: 11628. ";


//  Id pregunta: 11636 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n M&eacute;trica v3, el an&aacute;lisis coste/beneficio es una:";
 choices[86]= new Array();
 choices[86][0] = "Pr&aacute;ctica";
 choices[86][1] = "T&eacute;cnica de desarrollo";
 choices[86][2] = "T&eacute;cnica de gesti&oacute;n de proyectos";
 choices[86][3] = "Ninguna de las anteriores es correcta";
 answers[86] = choices[86][1];
 units[86] = "86";
 comments[86] = "Id Pregunta: 11636. ";


//  Id pregunta: 11648 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La Gesti&oacute;n de la disponibilidad se encuentra en ITILv2 e ITIL v3, respectivamente en:";
 choices[87]= new Array();
 choices[87][0] = "Entrega del servicio y Dise&ntilde;o del servicio";
 choices[87][1] = "Soporte del servicio y Estrategia del servicio";
 choices[87][2] = "Soporte del servicio y Transici&oacute;n del servicio";
 choices[87][3] = "Entrega del servicio y Estrategia del servicio";
 answers[87] = choices[87][0];
 units[87] = "98";
 comments[87] = "Id Pregunta: 11648. ";


//  Id pregunta: 11649 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale cu&aacute;l de los siguientes no es un conector de fibra &oacute;ptica:";
 choices[88]= new Array();
 choices[88][0] = "FC";
 choices[88][1] = "LC";
 choices[88][2] = "SC";
 choices[88][3] = "NC";
 answers[88] = choices[88][3];
 units[88] = "99";
 comments[88] = "Id Pregunta: 11649. ";


//  Id pregunta: 11677 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  SATA III ofrece una transferencia de datos de:";
 choices[89]= new Array();
 choices[89][0] = "100 MB/s";
 choices[89][1] = "200 MB/s";
 choices[89][2] = "300 MB/s";
 choices[89][3] = "600 MB/s";
 answers[89] = choices[89][3];
 units[89] = "47, 48";
 comments[89] = "Id Pregunta: 11677. ";


//  Id pregunta: 11688 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El OUI de una direcci&oacute;n MAC posee";
 choices[90]= new Array();
 choices[90][0] = "6 digitos Hexadecimales";
 choices[90][1] = "32bits";
 choices[90][2] = "48bits";
 choices[90][3] = "24bytes";
 answers[90] = choices[90][0];
 units[90] = "100";
 comments[90] = "Id Pregunta: 11688. NULL";


//  Id pregunta: 11709 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En el &aacute;mbito de la seguridad,&iquest;a qu&eacute; atienden las siglas AAA?";
 choices[91]= new Array();
 choices[91][0] = "Authentication, Authorization and Accounting";
 choices[91][1] = "Acknowledge, Authorization and Accounting";
 choices[91][2] = "Authentication, Authorization and Access";
 choices[91][3] = "Authentication, Approval and Accounting";
 answers[91] = choices[91][0];
 units[91] = "111";
 comments[91] = "Id Pregunta: 11709. NULL";


//  Id pregunta: 11740 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Cuando aumenta el n&uacute;mero de colisiones en una red LAN porque se ha aumentado el tr&aacute;fico en la misma, &iquest;qu&eacute; es necesario aplicar?:";
 choices[92]= new Array();
 choices[92][0] = "Segmentaci&oacute;n de la LAN";
 choices[92][1] = "Cambio de forma de conexi&oacute;n";
 choices[92][2] = "Cambio de troncal";
 choices[92][3] = "Cambio de Sistema de cableado estructurado";
 answers[92] = choices[92][0];
 units[92] = "99";
 comments[92] = "Id Pregunta: 11740. ";


//  Id pregunta: 11741 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En UNIX, un archivo se compone de:";
 choices[93]= new Array();
 choices[93][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos.";
 choices[93][1] = "Una secuencia de bytes.";
 choices[93][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos.";
 choices[93][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento.";
 answers[93] = choices[93][2];
 units[93] = "53.54";
 comments[93] = "Id Pregunta: 11741. ";


//  Id pregunta: 11742 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; nivel se tiene que establecer en un registro cuando un ciudadano registra datos de salud no siendo competencia del propio organismo ?";
 choices[94]= new Array();
 choices[94][0] = "nivel basico";
 choices[94][1] = "nivel medio";
 choices[94][2] = "nivel alto";
 choices[94][3] = "nivel bajo";
 answers[94] = choices[94][0];
 units[94] = "29";
 comments[94] = "Id Pregunta: 11742. ";


//  Id pregunta: 11743 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; algoritmo utiliza el cifrado por bloques?";
 choices[95]= new Array();
 choices[95][0] = "ElGamal";
 choices[95][1] = "DSA";
 choices[95][2] = "RSA";
 choices[95][3] = "DES";
 answers[95] = choices[95][3];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11743. ";


//  Id pregunta: 11748 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?:";
 choices[96]= new Array();
 choices[96][0] = "transparencia";
 choices[96][1] = "responsabilidad";
 choices[96][2] = "universalidad";
 choices[96][3] = "publicidad del procedimiento";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11748. ";


//  Id pregunta: 11761 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Directiva 2014/24/UE, de 26 de febrero de 2014, sobre contrataci&oacute;n, &iquest;cuando indica que ser&aacute; obligatorio la contrataci&oacute;n electr&oacute;nica para las centrales de compra p&uacute;blica?";
 choices[97]= new Array();
 choices[97][0] = "En 2 a&ntilde;os, la transmisi&oacute;n de anuncios y puesta a disposici&oacute;n de los pliegos, se realizar&aacute;obligatoriamente a trav&eacute;s de medios TIC.";
 choices[97][1] = "En 3 a&ntilde;os desde su publicaci&oacute;n.";
 choices[97][2] = "Antes de la publicaci&oacute;n de la directiva ya era totalmente electr&oacute;nico.";
 choices[97][3] = "En 4 a&ntilde;os y medio, las comunicaciones ser&aacute;n totalmente electr&oacute;nicas en todas las fases delproceso y para el resto de &oacute;rganos contratantes. Esto obligar&aacute; a que las ofertas se presenten enformato electr&oacute;nico.";
 answers[97] = choices[97][1];
 units[97] = "41";
 comments[97] = "Id Pregunta: 11761. ";


//  Id pregunta: 11778 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El informe t&eacute;cnico de la Direcci&oacute;n de Tecnolog&iacute;a de la Informaci&oacute;n y de las Comunicaciones para los expedientes de contrataci&oacute;n TIC:";
 choices[98]= new Array();
 choices[98][0] = "Debe emitirse antes de 10 d&iacute;as&nbsp;";
 choices[98][1] = "Es preceptivo en todo caso";
 choices[98][2] = "Puede emitirse despu&eacute;s de 10 d&iacute;as laborables";
 choices[98][3] = "Es necesario junto con el informe de la CMAD";
 answers[98] = choices[98][2];
 units[98] = "41, 24";
 comments[98] = "Id Pregunta: 11778. ";


//  Id pregunta: 11782 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[99]= new Array();
 choices[99][0] = "El Portal de la Transparencia depende del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[99][1] = "La solicitud de acceso a la informaci&oacute;n no requerir&aacute; la identificaci&oacute;n del solicitante.";
 choices[99][2] = "No se admitir&aacute;n solicitudes de informaci&oacute;n para cuya divulgaci&oacute;n sea necesaria una acci&oacute;n previa de reelaboraci&oacute;n.";
 choices[99][3] = "La resoluci&oacute;n de la petici&oacute;n de acceso deber&aacute; notificarse al solicitante en el plazo m&aacute;ximo de 15 d&iacute;as h&aacute;biles.";
 answers[99] = choices[99][2];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11782. ";


