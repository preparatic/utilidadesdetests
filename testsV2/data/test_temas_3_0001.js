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

//  Id pregunta: 891 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;les son las tecnolog&iacute;as b&aacute;sicas usadas en la gesti&oacute;n de entornos distribuidos?:";
 choices[0]= new Array();
 choices[0][0] = "Agentes inteligentes";
 choices[0][1] = "Agentes propietarios, est&aacute;ndar y proxys";
 choices[0][2] = "Protocolos SNMP y CMIP";
 choices[0][3] = "Las tres respuestas anteriores son correctas";
 answers[0] = choices[0][2];
 units[0] = "62,98";
 comments[0] = "Id Pregunta: 891. ";


//  Id pregunta: 4403 AÃ±o de creación de pregunta: 2007-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes es una de las cinco categor&iacute;as identificadas como recursos TIC por COBIT?";
 choices[1]= new Array();
 choices[1][0] = "La calidad.";
 choices[1][1] = "La planificaci&oacute;n.";
 choices[1][2] = "La tecnolog&iacute;a.";
 choices[1][3] = "Los est&aacute;ndares.";
 answers[1] = choices[1][2];
 units[1] = "98";
 comments[1] = "Id Pregunta: 4403. NULL";


//  Id pregunta: 4404 AÃ±o de creación de pregunta: 2007-01-01
 questions[2]= "3)  La metodolog&iacute;a COBIT (Control Objetives for Information and related Technologies)...";
 choices[2]= new Array();
 choices[2][0] = "Sigue los principios de reingenier&iacute;a de negocios (BPR).";
 choices[2][1] = "Depende de la plataforma tecnol&oacute;gica.";
 choices[2][2] = "Presenta 4 dominios: planificaci&oacute;n, organizaci&oacute;n, adquisici&oacute;n e implementaci&oacute;n.";
 choices[2][3] = "Plantea como principal requisito de negocio de la informaci&oacute;n la modularidad.";
 answers[2] = choices[2][0];
 units[2] = "98";
 comments[2] = "Id Pregunta: 4404. NULL";


//  Id pregunta: 4610 AÃ±o de creación de pregunta: 2007-01-01
 questions[3]= "4)  El nivel de madurez que se caracteriza como est&aacute;ndar y consistente es el";
 choices[3]= new Array();
 choices[3][0] = "nivel 3";
 choices[3][1] = "nivel4";
 choices[3][2] = "nivel 5";
 choices[3][3] = "nivel 6";
 answers[3] = choices[3][0];
 units[3] = "98";
 comments[3] = "Id Pregunta: 4610. NULL";


//  Id pregunta: 4669 AÃ±o de creación de pregunta: 2007-01-01
 questions[4]= "5)  &iquest;Qui&eacute;n est&aacute; detr&aacute;s del conjunto de mejores pr&aacute;cticas COBIT?";
 choices[4]= new Array();
 choices[4][0] = "Information Systems Audit and Control Association (ISACA)";
 choices[4][1] = "IT Governance Institute (ITGI)";
 choices[4][2] = "La respuestas A) y B) son ambas correctas";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "98";
 comments[4] = "Id Pregunta: 4669. NULL";


//  Id pregunta: 4758 AÃ±o de creación de pregunta: 2007-01-01
 questions[5]= "6)  En relaci&oacute;n con la certificaci&oacute;n de ITIL:";
 choices[5]= new Array();
 choices[5][0] = "No es posible certificar una organizaci&oacute;n o sistema de gesti&oacute;n como &laquo;conforme a ITIL&raquo;";
 choices[5][1] = "Una organizaci&oacute;n que haya implementado las gu&iacute;as de ITIL sobre Gesti&oacute;n de los Servicios de TI puede lograr certificarse bajo la ISO/IEC 20000";
 choices[5][2] = "Los particulares pueden conseguir varias certificaciones oficiales ITIL";
 choices[5][3] = "Todas son ciertas";
 answers[5] = choices[5][3];
 units[5] = "98";
 comments[5] = "Id Pregunta: 4758. NULL";


//  Id pregunta: 4761 AÃ±o de creación de pregunta: 2007-01-01
 questions[6]= "7)  Indicar la afirmaci&oacute;n incorrecta relativa a COBIT:";
 choices[6]= new Array();
 choices[6][0] = "Un dominio es una agrupaci&oacute;n natural de procesos";
 choices[6][1] = "Un proceso es una agrupaci&oacute;n natural de dominios";
 choices[6][2] = "Un proceso es un conjunto o serie de actividades unidas con delimitaci&oacute;n o cortes de control";
 choices[6][3] = "Las actividades son acciones requeridas para lograr un resultado";
 answers[6] = choices[6][1];
 units[6] = "98";
 comments[6] = "Id Pregunta: 4761. NULL";


//  Id pregunta: 4762 AÃ±o de creación de pregunta: 2007-01-01
 questions[7]= "8)  Indicar la afirmaci&oacute;n incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "COBIT fue desarrollado por la Information Systems Audit and Control Association (ISACA) y el IT Governance Institute (ITGI)";
 choices[7][1] = "COBIT fue lanzado en 1991";
 choices[7][2] = "COBIT se aplica a los sistemas de informaci&oacute;n de toda la empresa, incluyendo las computadoras personales, mini computadoras y ambientes distribuidos";
 choices[7][3] = "COBIT esta alineado con est&aacute;ndares y regulaciones &quot;de facto&quot;";
 answers[7] = choices[7][1];
 units[7] = "98";
 comments[7] = "Id Pregunta: 4762. NULL";


//  Id pregunta: 4763 AÃ±o de creación de pregunta: 2007-01-01
 questions[8]= "9)  Relativo a la estructura de COBIT 5:";
 choices[8]= new Array();
 choices[8][0] = "Se definen 37 objetivos de control generales";
 choices[8][1] = "Se define un objetivo para cada uno de los procesos de las TI";
 choices[8][2] = "Especifica un total de 17 Metas de Negocio";
 choices[8][3] = "Todas son ciertas";
 answers[8] = choices[8][3];
 units[8] = "98";
 comments[8] = "Id Pregunta: 4763. NULL";


//  Id pregunta: 4764 AÃ±o de creación de pregunta: 2007-01-01
 questions[9]= "10)  Indicar cual no es un Dominio de COBIT:";
 choices[9]= new Array();
 choices[9][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[9][1] = "Control y calidad";
 choices[9][2] = "Entrega y soporte";
 choices[9][3] = "Adquisici&oacute;n e implementaci&oacute;n";
 answers[9] = choices[9][1];
 units[9] = "98";
 comments[9] = "Id Pregunta: 4764. NULL";


//  Id pregunta: 4765 AÃ±o de creación de pregunta: 2007-01-01
 questions[10]= "11)  El paquete de programas COBIT completo es un juego que consiste 6 publicaciones entre las cuales no se encuentra:";
 choices[10]= new Array();
 choices[10][0] = "Resumen Ejecutivo";
 choices[10][1] = "Directrices de auditoria";
 choices[10][2] = "Instrumento de puesta en pr&aacute;ctica ";
 choices[10][3] = "Directrices de Calidad ";
 answers[10] = choices[10][3];
 units[10] = "98";
 comments[10] = "Id Pregunta: 4765. NULL";


//  Id pregunta: 4959 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con COBIT:";
 choices[11]= new Array();
 choices[11][0] = "Establece los siguientes dominios de control: Estudio de Viabilidad, An&aacute;lisis del Sistema, Dise&ntilde;o y Construcci&oacute;n,Implantaci&oacute;n y Aceptaci&oacute;n.";
 choices[11][1] = "Fue creada por INTOSAI (International Organization of Supreme audit. Institutions) en 1994.";
 choices[11][2] = "Establece un marco de objetivos de control a trav&eacute;s de 4 dominios y 34 objetivos de control de alto nivel.";
 choices[11][3] = "Establece que los recursos financieros son un tipo de recursos TIC.";
 answers[11] = choices[11][2];
 units[11] = "98";
 comments[11] = "Id Pregunta: 4959. Examen TIC B 2007";


//  Id pregunta: 5006 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  Seg&uacute;n Cobit, en un proceso de auditor&iacute;a un objetivo de control en TI se define como:";
 choices[12]= new Array();
 choices[12][0] = "Los soportes inform&aacute;ticos y sus sistemas de backup";
 choices[12][1] = "El resultado deseado implementando procedimientos de control en una actividad de TI particular";
 choices[12][2] = "La compatibilidad del software";
 choices[12][3] = "El tiempo medio entre fallos de los sistemas de TI";
 answers[12] = choices[12][1];
 units[12] = "98";
 comments[12] = "Id Pregunta: 5006. Examen TIC A 2007";


//  Id pregunta: 5023 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ITIL (Information Technology Infrastructure Library) es cierta?";
 choices[13]= new Array();
 choices[13][0] = "ITIL es una Biblioteca de Infraestructura de Tecnolog&iacute;as de la Informaci&oacute;n que se ha convertido en elest&aacute;ndar mundial de facto en la Gesti&oacute;n de Servicios Inform&aacute;ticos.";
 choices[13][1] = "ITIL es una iniciativa de la Comisi&oacute;n Europea cuyo objetivo es la elaboraci&oacute;n de una definici&oacute;n de laestructura organizacional de una organizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n";
 choices[13][2] = "La fundaci&oacute;n holandesa &quot;Exameninstituut voor Informatica&quot; (EXIN) y la inglesa &quot;Information SystemsExamination Board&quot; (ISEB) han desarrollado juntas la &uacute;ltima versi&oacute;n de ITIL";
 choices[13][3] = "ITIL es una metodolog&iacute;a para la Gesti&oacute;n de Servicios Inform&aacute;ticos que no tiene aplicaci&oacute;n en laAdministraci&oacute;n P&uacute;blica";
 answers[13] = choices[13][0];
 units[13] = "98";
 comments[13] = "Id Pregunta: 5023. Examen TIC A 2007";


//  Id pregunta: 5025 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  El CMM-CMMI es:";
 choices[14]= new Array();
 choices[14][0] = "Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;nen centros de proceso de datos";
 choices[14][1] = "Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos";
 choices[14][2] = "Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[14][3] = "Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[14] = choices[14][2];
 units[14] = "98";
 comments[14] = "Id Pregunta: 5025. Examen TIC A 2007";


//  Id pregunta: 5574 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo es la mejora continua de la eficiencia de los servicios y operaciones y la calidad del servicio al cliente?";
 choices[15]= new Array();
 choices[15][0] = "ITIL";
 choices[15][1] = "CMMI";
 choices[15][2] = "COBIT";
 choices[15][3] = "M&Eacute;TRICA";
 answers[15] = choices[15][0];
 units[15] = "98";
 comments[15] = "Id Pregunta: 5574. NULL";


//  Id pregunta: 5575 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo se centra en la mejora de los procesos de desarrollo de aplicaciones?";
 choices[16]= new Array();
 choices[16][0] = "ITIL";
 choices[16][1] = "CMMI";
 choices[16][2] = "COBIT";
 choices[16][3] = "M&Eacute;TRICA";
 answers[16] = choices[16][1];
 units[16] = "98";
 comments[16] = "Id Pregunta: 5575. NULL";


//  Id pregunta: 5576 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n que utiliza el marco de referencia COBIT?";
 choices[17]= new Array();
 choices[17][0] = "Requisitos de negocio o criterios de informaci&oacute;n";
 choices[17][1] = "Personal de TI";
 choices[17][2] = "Procesos de TI";
 choices[17][3] = "Recursos de TI";
 answers[17] = choices[17][1];
 units[17] = "98";
 comments[17] = "Id Pregunta: 5576. NULL";


//  Id pregunta: 5918 AÃ±o de creación de pregunta: 2009-01-01
 questions[18]= "19)  CobiT identific&oacute; los siguientes elementos clave, con respecto a los aspectos de seguridad:";
 choices[18]= new Array();
 choices[18][0] = "Idoneidad, continuidad de negocio y certificaci&oacute;n internacional";
 choices[18][1] = "Confidencialidad, integridad y disponibilidad";
 choices[18][2] = "Criticidad, autenticaci&oacute;n y consistencia";
 choices[18][3] = "Convergencia, coherencia y salvaguarda";
 answers[18] = choices[18][1];
 units[18] = "98";
 comments[18] = "Id Pregunta: 5918. MAP 2008 A1";


//  Id pregunta: 5996 AÃ±o de creación de pregunta: 2010-01-01
 questions[19]= "20)  En relaci&oacute;n con ITIL, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[19]= new Array();
 choices[19][0] = "Los m&oacute;dulos principales y m&aacute;s ampliamente implantados de ITIL versi&oacute;n 3 son Entrega del Servicio (Software Delivery) y Soporte del Servicio (Service Support).";
 choices[19][1] = "ITIL versi&oacute;n 3 es un est&aacute;ndar &quot;de iure&quot; similar a BS15000 o ISO/IEC 20000, de modo que una organizaci&oacute;n puede obtener un certificado ITIL.";
 choices[19][2] = "Seg&uacute;n ITIL versi&oacute;n 3, el ciclo de vida de un servicio consta de 5 fases: estrategia, dise&ntilde;o, transici&oacute;n, operaci&oacute;n y mejora continua del servicio.";
 choices[19][3] = "El proceso de Gesti&oacute;n del Cambio (Change Management) forma parte del m&oacute;dulo de Entrega del Servicio (Service Delivery).";
 answers[19] = choices[19][2];
 units[19] = "98";
 comments[19] = "Id Pregunta: 5996. TIC A 2009";


//  Id pregunta: 6230 AÃ±o de creación de pregunta: 2010-01-01
 questions[20]= "21)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[20]= new Array();
 choices[20][0] = "Gesti&oacute;n de la Infraestructura";
 choices[20][1] = "Gesti&oacute;n de Soporte";
 choices[20][2] = "Gesti&oacute;n de Entrega";
 choices[20][3] = "Gesti&oacute;n de Aplicaciones";
 answers[20] = choices[20][0];
 units[20] = "98";
 comments[20] = "Id Pregunta: 6230. TICB-2009, bloque desarrollo";


//  Id pregunta: 6524 AÃ±o de creación de pregunta: 2010-01-01
 questions[21]= "22)  &iquest;Cu&aacute;les son los objetivos de la gesti&oacute;n de Servicios TI?";
 choices[21]= new Array();
 choices[21][0] = "Alinear las necesidades de las tecnolog&iacute;as de la informaci&oacute;n a las del negocio, y los clientes, tanto actuales como futuras";
 choices[21][1] = "Mejorar la calidad de los servicios de las tecnolog&iacute;as de la informaci&oacute;n";
 choices[21][2] = "Reducci&oacute;n del coste de los servicios de las tecnolog&iacute;as de la informaci&oacute;n prestados, a largo plazo";
 choices[21][3] = "Todas las respuestas anteriores son correctas";
 answers[21] = choices[21][3];
 units[21] = "98";
 comments[21] = "Id Pregunta: 6524. NULL";


//  Id pregunta: 6527 AÃ±o de creación de pregunta: 2010-01-01
 questions[22]= "23)  Una actividad propia de la gesti&oacute;n de problemas es";
 choices[22]= new Array();
 choices[22][0] = "La prevenci&oacute;n proactiva de los problemas";
 choices[22][1] = "Generaci&oacute;n de informaci&oacute;n ejecutiva";
 choices[22][2] = "Identificaci&oacute;n de tendencias";
 choices[22][3] = "Todas las respuestas anteriores son correctas";
 answers[22] = choices[22][3];
 units[22] = "98";
 comments[22] = "Id Pregunta: 6527. NULL";


//  Id pregunta: 6528 AÃ±o de creación de pregunta: 2010-01-01
 questions[23]= "24)  Un elemento de configuraci&oacute;n";
 choices[23]= new Array();
 choices[23][0] = "Es un componente de una infraestructura que est&aacute; o estar&aacute; bajo el control de la Gesti&oacute;n de la Configuraci&oacute;n";
 choices[23][1] = "Un sistema completo";
 choices[23][2] = "Un componente software menor";
 choices[23][3] = "Todas las respuestas anteriores son correctas";
 answers[23] = choices[23][3];
 units[23] = "98";
 comments[23] = "Id Pregunta: 6528. NULL";


//  Id pregunta: 6529 AÃ±o de creación de pregunta: 2010-01-01
 questions[24]= "25)  Qu&eacute; afirmaci&oacute;n es FALSA en relaci&oacute;n al concepto Configuraci&oacute;n de referencia?";
 choices[24]= new Array();
 choices[24][0] = "Es la configuraci&oacute;n de un producto o un sistema en un momento espec&iacute;fico en el tiempo";
 choices[24][1] = "Es la configuraci&oacute;n de un producto o un sistema en un momento espec&iacute;fico en el tiempo, donde no se capturan ni la estructura ni los detalles";
 choices[24][2] = "Es la base estable para un futuro desarrollo";
 choices[24][3] = "Registro de elementos de configuraci&oacute;n afectados por una RFC";
 answers[24] = choices[24][1];
 units[24] = "98";
 comments[24] = "Id Pregunta: 6529. NULL";


//  Id pregunta: 6530 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  &iquest;Qu&eacute; actividad es propia del BCM?";
 choices[25]= new Array();
 choices[25][0] = "An&aacute;lisis de impacto de negocio ";
 choices[25][1] = "An&aacute;lisis de riesgos";
 choices[25][2] = "Producci&oacute;n del plan de continuidad";
 choices[25][3] = "Todas";
 answers[25] = choices[25][3];
 units[25] = "98";
 comments[25] = "Id Pregunta: 6530. NULL";


//  Id pregunta: 8198 AÃ±o de creación de pregunta: 2011-01-01
 questions[26]= "27)  En ITIL v.3, &iquest;cu&aacute;l de los siguientes procesos y actividades NO corresponde a la estrategia de servicios?:";
 choices[26]= new Array();
 choices[26][0] = "Gesti&oacute;n financiera. ";
 choices[26][1] = "Gesti&oacute;n del portfolio de servicios. ";
 choices[26][2] = "Gesti&oacute;n de la demanda. ";
 choices[26][3] = "Gesti&oacute;n del cat&aacute;logo de servicios. ";
 answers[26] = choices[26][3];
 units[26] = "98";
 comments[26] = "Id Pregunta: 8198. Examen TIC A1 2010";


//  Id pregunta: 8831 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)   Se&ntilde;ale la respuesta correcta con relaci&oacute;n a lTIL (IT Infrastructure Library):";
 choices[27]= new Array();
 choices[27][0] = " La gesti&oacute;n de problemas busca solucionar lo m&aacute;s r&aacute;pido posible las incidencias y restablecer el servicio lo antes posible ";
 choices[27][1] = " La gesti&oacute;n de la configuraci&oacute;n tiene como &uacute;nico objetivo el control del hardware inform&aacute;tico existente en la organizaci&oacute;n ";
 choices[27][2] = " La gesti&oacute;n de versiones se encarga de controlar todas las versiones, tanto hardware como software, involucrados en el sistema de explotaci&oacute;n ";
 choices[27][3] = " No es necesario analizar el impacto de la introducci&oacute;n de cambios en los sistemas inform&aacute;ticos, sino que se deben realizar lo m&aacute;s r&aacute;pido posible para evitar incidencias en los sistemas (gesti&oacute;n de cambios).";
 answers[27] = choices[27][2];
 units[27] = "98";
 comments[27] = "Id Pregunta: 8831. Examen UC3M 2010";


//  Id pregunta: 9725 AÃ±o de creación de pregunta: 2014-01-01
 questions[28]= "29)  Indique cu&aacute;l de los siguientes procesos se encuadra dentro del libro del ITIL denominado Service Support.";
 choices[28]= new Array();
 choices[28][0] = "Gesti&oacute;n de Problemas.";
 choices[28][1] = "Gesti&oacute;n de la Capacidad.";
 choices[28][2] = "Gesti&oacute;n de la Disponibilidad.";
 choices[28][3] = "Gesti&oacute;n Financiera.";
 answers[28] = choices[28][0];
 units[28] = "98";
 comments[28] = "Id Pregunta: 9725. Examen TIC-A1 2013";


//  Id pregunta: 9766 AÃ±o de creación de pregunta: 2014-01-01
 questions[29]= "30)  &iquest;Qu&eacute; tipos de tratamiento del riesgo contempla MAGERIT v3?";
 choices[29]= new Array();
 choices[29][0] = "Eliminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[29][1] = "Eliminaci&oacute;n, Reducci&oacute;n, Compartic&oacute;n, Financiaci&oacute;n.";
 choices[29][2] = "Exterminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[29][3] = "Compartici&oacute;n, Reducci&oacute;n, Traspaso, Compartici&oacute;n.";
 answers[29] = choices[29][0];
 units[29] = "98";
 comments[29] = "Id Pregunta: 9766. NULL";


//  Id pregunta: 9785 AÃ±o de creación de pregunta: 2014-01-01
 questions[30]= "31)  Seg&uacute;n Magerit v2, quien NO es un participante en un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[30]= new Array();
 choices[30][0] = "Comit&eacute; de Gesti&oacute;n.";
 choices[30][1] = "Grupos de Interlocutores.";
 choices[30][2] = "Comit&eacute; de Seguimiento.";
 choices[30][3] = "Equipo de Proyecto";
 answers[30] = choices[30][0];
 units[30] = "98";
 comments[30] = "Id Pregunta: 9785. Examen TIC A2 2013";


//  Id pregunta: 9786 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  Seg&uacute;n Magerit v2 cu&aacute;l de las siguientes tareas NO forma parte de la actividad de caracterizaci&oacute;n de los activos en el An&aacute;lisis de Riesgos:";
 choices[31]= new Array();
 choices[31][0] = "Identificaci&oacute;n de los activos.";
 choices[31][1] = "Dependencias entre activos.";
 choices[31][2] = "Auditor&iacute;a de los activos.";
 choices[31][3] = "Valoraci&oacute;n de los activos. ";
 answers[31] = choices[31][2];
 units[31] = "98";
 comments[31] = "Id Pregunta: 9786. Examen TIC A2 2013";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  En el &aacute;mbito de COBIT 5, el proceso de Gestionar la Calidad se encuentra encuadrado en el dominio de ";
 choices[32]= new Array();
 choices[32][0] = "Alinear, Planificar y Organizar";
 choices[32][1] = "Monitorizar y Evaluar.";
 choices[32][2] = "Construir, Adquirir e Implementar";
 choices[32][3] = "Monitorizar y Evaluar.";
 answers[32] = choices[32][0];
 units[32] = "98";
 comments[32] = "Id Pregunta: 10441. Examen TIC A1 2013";


//  Id pregunta: 10485 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  &iquest;Con qu&eacute; &aacute;mbito se relaciona COSO?";
 choices[33]= new Array();
 choices[33][0] = "Con control de la calidad, es similar al EFQM ";
 choices[33][1] = "Con el marco de Seguridad de las Tecnolog&iacute;as de la Informaci&oacute;n, similar a la ISO 27000";
 choices[33][2] = "Con Gobierno Corporativo de las Tecnologias de la Informaci&oacute;n";
 choices[33][3] = "Con el control de los servicios de Tecnolog&iacute;as de la Informaci&oacute;n, similar a ITIL";
 answers[33] = choices[33][2];
 units[33] = "98";
 comments[33] = "Id Pregunta: 10485. NULL";


//  Id pregunta: 10487 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  El ciclo de mejora continua: Plan-Do-Check-Act se conoce tambi&eacute;n por el nombre de";
 choices[34]= new Array();
 choices[34][0] = "Ciclo de Calidad";
 choices[34][1] = "The endless loop";
 choices[34][2] = "Ciclo de Deming";
 choices[34][3] = "Ciclo de ITIL";
 answers[34] = choices[34][2];
 units[34] = "98";
 comments[34] = "Id Pregunta: 10487. NULL";


//  Id pregunta: 10635 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de estas publicaciones no pertenece a ITILv3?";
 choices[35]= new Array();
 choices[35][0] = "Mejora continua del servicio";
 choices[35][1] = "Evoluci&oacute;n del Servicio";
 choices[35][2] = "Dise&ntilde;o del Servicio";
 choices[35][3] = "Operaci&oacute;n del Servicio";
 answers[35] = choices[35][1];
 units[35] = "98";
 comments[35] = "Id Pregunta: 10635. ";


//  Id pregunta: 10636 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes es un framework de mejores pr&aacute;cticas dirigida al control y supervisi&oacute;n de tecnolog&iacute;a de la informaci&oacute;n?";
 choices[36]= new Array();
 choices[36][0] = "ISACA";
 choices[36][1] = "CMMI";
 choices[36][2] = "COVIT";
 choices[36][3] = "Ninguna de las anteriores.";
 answers[36] = choices[36][3];
 units[36] = "98";
 comments[36] = "Id Pregunta: 10636. ";


//  Id pregunta: 10955 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  En ITIL V3, &iquest;qu&eacute; es un OLA?";
 choices[37]= new Array();
 choices[37][0] = "Es un contrato entre un proveedor de servicios de TI con un &uacute;nico cliente externo a la organizaci&oacute;n.";
 choices[37][1] = "Es un contrato entre departamentos de una misma organizaci&oacute;n.";
 choices[37][2] = "Es un contrato entre un proveedor de servicios de TI que describe los servicios ofertados a varios clientes externos a la organizaci&oacute;n.";
 choices[37][3] = "Es un contrato entre la administraci&oacute;n y la empresa privada.";
 answers[37] = choices[37][1];
 units[37] = "98";
 comments[37] = "Id Pregunta: 10955. TIC A1 AGE 2014";


//  Id pregunta: 10979 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  Dentro del modelo de referencia COBIT 5 para la gesti&oacute;n de las TI de una organizaci&oacute;n, se definen:";
 choices[38]= new Array();
 choices[38][0] = "5 procesos de gobierno, que incluyen pr&aacute;cticas de Evaluaci&oacute;n, Orientaci&oacute;n y Supervisi&oacute;n.";
 choices[38][1] = "5 procesos de gobierno con cuatro &aacute;reas de dominio para la planificaci&oacute;n, construcci&oacute;n, ejecuci&oacute;n y supervisi&oacute;n.";
 choices[38][2] = "5 procesos de gobierno donde se gestiona la estrategia, la arquitectura empresarial, el portfolio, el presupuesto y los recursos humanos.";
 choices[38][3] = "4 procesos de gobierno con 5 &aacute;reas de dominio para la planificaci&oacute;n, dise&ntilde;o, construcci&oacute;n, ejecuci&oacute;n y supervisi&oacute;n.";
 answers[38] = choices[38][0];
 units[38] = "98";
 comments[38] = "Id Pregunta: 10979. TIC A1 AGE 2014";


//  Id pregunta: 11063 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l es la definici&oacute;n de servicio seg&uacute;n ITIL?";
 choices[39]= new Array();
 choices[39][0] = "Medio para entregar valor a los clientes, facilitando los resultados que estos quieren conseguir sin asumir costes o riesgos espec&iacute;ficos";
 choices[39][1] = "Subdivisi&oacute;n de una organizaci&oacute;n, que est&aacute; especializada en realizar un tipo concreto de trabajo y tiene la responsabilidad de obtener resultados concretos";
 choices[39][2] = "Conjunto estructurado de actividades dise&ntilde;ado para cumplir objetivo concreto.";
 choices[39][3] = "Conjunto de responsabilidades, actividades y autorizaciones concedidas a una persona o equipo.";
 answers[39] = choices[39][0];
 units[39] = "98";
 comments[39] = "Id Pregunta: 11063. ";


//  Id pregunta: 11064 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  De los siguientes t&iacute;tulos, &iquest;cual NO es uno libro del core de publicaciones de ITIL?";
 choices[40]= new Array();
 choices[40][0] = "Servicio de Optimizaci&oacute;n";
 choices[40][1] = "Transici&oacute;n del Servicio";
 choices[40][2] = "Dise&ntilde;o del Servicio";
 choices[40][3] = "Estrategia del Servicio";
 answers[40] = choices[40][0];
 units[40] = "98";
 comments[40] = "Id Pregunta: 11064. ";


//  Id pregunta: 11066 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  &iquest;Cuales de las siguientes afirmaciones, son caracter&iacute;sticas para cada proceso?";
 choices[41]= new Array();
 choices[41][0] = "Medible, puntual, entrega un resultado y responde a un evento espec&iacute;fico";
 choices[41][1] = "Medible, puntual, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[41][2] = "Medible, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[41][3] = "Medible, puntual, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 answers[41] = choices[41][2];
 units[41] = "98";
 comments[41] = "Id Pregunta: 11066. ";


//  Id pregunta: 11069 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes NO es una de las 4 Ps de la Estrategia seg&uacute;n ITIL?";
 choices[42]= new Array();
 choices[42][0] = "Perspectiva";
 choices[42][1] = "Posici&oacute;n";
 choices[42][2] = "Patr&oacute;n";
 choices[42][3] = "Todas son correctas";
 answers[42] = choices[42][3];
 units[42] = "98";
 comments[42] = "Id Pregunta: 11069. ";


//  Id pregunta: 11070 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  El principal objetivo de la Gesti&oacute;n de la Disponibilidad es &hellip;";
 choices[43]= new Array();
 choices[43][0] = "Monitorizar e informar sobre la disponibilidad de los servicios y componentes";
 choices[43][1] = "Asegurar que los objetivos de los SLA&rsquo;s se consiguen";
 choices[43][2] = "Garantizar niveles de disponibilidad para servicios y componentes";
 choices[43][3] = "Asegurarse que la disponibilidad de los servicios, se consigue o excede seg&uacute;n las necesidades acordadas con el negocio";
 answers[43] = choices[43][3];
 units[43] = "98";
 comments[43] = "Id Pregunta: 11070. ";


//  Id pregunta: 11071 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  La definici&oacute;n de requerimientos funcionales para un nuevo servicio es parte de:";
 choices[44]= new Array();
 choices[44][0] = "Operaci&oacute;n del Servicio: Gesti&oacute;n de Aplicaciones";
 choices[44][1] = "Estrategia del Servicio: Gesti&oacute;n de la Cartera de Servicios";
 choices[44][2] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de la Arquitectura Tecnol&oacute;gica";
 choices[44][3] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de Soluciones del Servicio";
 answers[44] = choices[44][3];
 units[44] = "98";
 comments[44] = "Id Pregunta: 11071. ";


//  Id pregunta: 11072 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  Hay 7 diferentes estrategias de externalizaci&oacute;n que una compa&ntilde;&iacute;a puede emplear, &iquest;cu&aacute;l es la forma m&aacute;s reciente de outsourcing?";
 choices[45]= new Array();
 choices[45][0] = "Outsourcing del Proceso de Conocimiento";
 choices[45][1] = "Asociaci&oacute;n o multi-sourcing";
 choices[45][2] = "Outsourcing de Procesos de Negocio (Business Process Outsourcing BPO)";
 choices[45][3] = "Provisi&oacute;n de Servicios de Aplicaci&oacute;n";
 answers[45] = choices[45][0];
 units[45] = "98";
 comments[45] = "Id Pregunta: 11072. ";


//  Id pregunta: 11073 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l es la secuencia de eventos CORRECTA para elegir una herramienta tecnol&oacute;gica?";
 choices[46]= new Array();
 choices[46][0] = "Seleccionar; Requerimientos; Criterios de Selecci&oacute;n, Evaluaci&oacute;n";
 choices[46][1] = "Criterios de Selecci&oacute;n; Requerimientos; Evaluaci&oacute;n; Seleccionar";
 choices[46][2] = "Requerimientos; Selecci&oacute;n de Criterios, Seleccionar, Evaluar";
 choices[46][3] = "Requerimientos; Selecci&oacute;n de Criterios; Evaluar; Seleccionar";
 answers[46] = choices[46][3];
 units[46] = "98";
 comments[46] = "Id Pregunta: 11073. ";


//  Id pregunta: 11075 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  El Gestor del Nivel de Servicio tiene la responsabilidad de asegurarse 1que los objetivos del Proceso de Gesti&oacute;n del Nivel de Servicio sean cumplidos. El Gestor del Nivel de Servicio NO es responsable de &hellip;";
 choices[47]= new Array();
 choices[47][0] = "Negociar y cerrar los Acuerdos de Nivel Operacionales. (OLA -Operation Level Agreement)";
 choices[47][1] = "Asegurar que todos los servicios no operacionales sean registrados dentro del Cat&aacute;logo de Servicios";
 choices[47][2] = "Negociar y acordar los Acuerdos de Nivel de Servicio (SLA - Service Level Agreement)";
 choices[47][3] = "Ayudar a la creaci&oacute;n del Cat&aacute;logo de Servicios y a mantenerlo actualizado";
 answers[47] = choices[47][1];
 units[47] = "98";
 comments[47] = "Id Pregunta: 11075. ";


//  Id pregunta: 11077 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Qu&eacute; representa el Modelo de Servicio en V?";
 choices[48]= new Array();
 choices[48][0] = "Una estrategia para la realizaci&oacute;n con &eacute;xito de todos los proyectos de gesti&oacute;n de servicios";
 choices[48][1] = "La ruta de acceso para la Entrega y Soporte del Servicio para una eficiente y eficaz utilizaci&oacute;n de los recursos";
 choices[48][2] = "Los niveles de pruebas requeridos para la entrega del servicio";
 choices[48][3] = "La perspectiva empresarial que tienen los Clientes y Usuarios de los servicios";
 answers[48] = choices[48][2];
 units[48] = "98";
 comments[48] = "Id Pregunta: 11077. ";


//  Id pregunta: 11078 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  Seg&uacute;n ITIL, &iquest;Cu&aacute;l de estos NO es un tipo de cambio?";
 choices[49]= new Array();
 choices[49][0] = "Cambio est&aacute;ndar";
 choices[49][1] = "Cambio normal";
 choices[49][2] = "Cambio urgente";
 choices[49][3] = "Cambio de emergencia";
 answers[49] = choices[49][2];
 units[49] = "98";
 comments[49] = "Id Pregunta: 11078. ";


//  Id pregunta: 11081 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  La MEJOR descripci&oacute;n de la prioridad de una Incidencia es&hellip;";
 choices[50]= new Array();
 choices[50][0] = "La importancia relativa de una Incidencia basada en su impacto y urgencia";
 choices[50][1] = "La velocidad con la que necesita ser resuelta la Incidencia";
 choices[50][2] = "El n&uacute;mero de personas que ser&aacute;n asignadas para trabajar en la Incidencia con el fin de que se resuelva dentro del plazo";
 choices[50][3] = "El camino de escalado que debe seguir para asegurar la resoluci&oacute;n de la Incidencia";
 answers[50] = choices[50][0];
 units[50] = "98";
 comments[50] = "Id Pregunta: 11081. ";


//  Id pregunta: 11083 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es la principal raz&oacute;n para establecer una L&iacute;nea Base (Baseline)?";
 choices[51]= new Array();
 choices[51][0] = "Estandarizar la operaci&oacute;n";
 choices[51][1] = "Conocer el coste de los servicios proporcionados";
 choices[51][2] = "Para que los roles y responsabilidades sean claras";
 choices[51][3] = "Para comparaciones posteriores";
 answers[51] = choices[51][3];
 units[51] = "98";
 comments[51] = "Id Pregunta: 11083. ";


//  Id pregunta: 11084 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest; Para que es usado el modelo RACI?";
 choices[52]= new Array();
 choices[52][0] = "Documentar los roles y las relaciones de las partes interesadas (stakeholders) en un proceso o actividad";
 choices[52][1] = "Definir requerimientos para un nuevo servicio o proceso";
 choices[52][2] = "Analizar el impacto en el negocio de una incidencia";
 choices[52][3] = "Crear un Cuadro de Mando que muestre el estado general de los servicios gestionados";
 answers[52] = choices[52][0];
 units[52] = "98";
 comments[52] = "Id Pregunta: 11084. ";


//  Id pregunta: 11085 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes pasos NO corresponde al modelo de Mejora Continua del Servicio (CSI)?";
 choices[53]= new Array();
 choices[53][0] = "&iquest;Cual es la visi&oacute;n?";
 choices[53][1] = "&iquest;C&oacute;mo llegamos?";
 choices[53][2] = "&iquest;Hay presupuesto?";
 choices[53][3] = "&iquest; D&oacute;nde estamos ahora?";
 answers[53] = choices[53][2];
 units[53] = "98";
 comments[53] = "Id Pregunta: 11085. ";


//  Id pregunta: 11172 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes procesos no forma parte del Soporte de Servicio seg&uacute;n la biblioteca ITIL v3?";
 choices[54]= new Array();
 choices[54][0] = "Gesti&oacute;n de Incidencias";
 choices[54][1] = "Gesti&oacute;n de Problemas";
 choices[54][2] = "Gesti&oacute;n de Eventos";
 choices[54][3] = "Gesti&oacute;n del Cambio";
 answers[54] = choices[54][2];
 units[54] = "98";
 comments[54] = "Id Pregunta: 11172. ";


//  Id pregunta: 11266 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  Indique los nuevos procesos que a&ntilde;ade la versi&oacute;n 3 de ITIL sobre la anterior en la fase de operaci&oacute;n del servicio:";
 choices[55]= new Array();
 choices[55][0] = "Gesti&oacute;n de incidencias, gesti&oacute;n de peticiones y gesti&oacute;n de alertas.";
 choices[55][1] = "Gesti&oacute;n de eventos, gesti&oacute;n de peticiones y gesti&oacute;n de acceso a los servicios TI.";
 choices[55][2] = "Gesti&oacute;n de los proveedores y gesti&oacute;n de la seguridad TI.";
 choices[55][3] = "No existe tal fase de operaci&oacute;n dentro de la versi&oacute;n 3 de ITIL.";
 answers[55] = choices[55][1];
 units[55] = "98";
 comments[55] = "Id Pregunta: 11266. ";


//  Id pregunta: 11267 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  &iquest;Cu&aacute;les NO es uno de los cuatro conceptos (conocidos como las cuatro Ps de Mintzberg) en base  a los cuales debe estar definida la estrategia de una organizaci&oacute;n seg&uacute;n ITIL versi&oacute;n 3?";
 choices[56]= new Array();
 choices[56][0] = "Perspectiva: disponer de metas y valores bien definidos y asumibles.";
 choices[56][1] = "Partici&oacute;n: definir y dividir los servicios en procesos.";
 choices[56][2] = "Planificaci&oacute;n: establecer criterios claros de desarrollo futuro.";
 choices[56][3] = "Patr&oacute;n: mantener una coherencia en la toma de decisiones y acciones adoptadas.";
 answers[56] = choices[56][1];
 units[56] = "98";
 comments[56] = "Id Pregunta: 11267. ";


//  Id pregunta: 11268 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  &iquest;Cu&aacute;les son las tres opciones principales en los modelos de dise&ntilde;o de ITIL v3?";
 choices[57]= new Array();
 choices[57][0] = "Modelo tradicional: presupone una mayor estabilidad del servicio.";
 choices[57][1] = "Modelo &Aacute;gil o RAD: principalmente incremental e iterativo que se basa en la creaci&oacute;n de prototipos.";
 choices[57][2] = "Modelo basado en soluciones software est&aacute;ndar ya empaquetadas.";
 choices[57][3] = "Todos son modelos de ITIL versi&oacute;n 3.";
 answers[57] = choices[57][3];
 units[57] = "98";
 comments[57] = "Id Pregunta: 11268. ";


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


//  Id pregunta: 11313 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[59]= new Array();
 choices[59][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[59][1] = "En cada tarea debe haber un unico R y A";
 choices[59][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[59][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[59] = choices[59][1];
 units[59] = "98";
 comments[59] = "Id Pregunta: 11313. Cuidado con esto. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";


//  Id pregunta: 11358 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el objetivo principal del contenido del Cat&aacute;logo de Servicios?";
 choices[60]= new Array();
 choices[60][0] = "Ofrecer informaci&oacute;n sobre todos los servicios";
 choices[60][1] = "Ofrecer informaci&oacute;n confiable de los servicios operativos y en desarrollo";
 choices[60][2] = "Tener informaci&oacute;n sobre la infraestructura";
 choices[60][3] = "Analizar inversiones en servicios";
 answers[60] = choices[60][1];
 units[60] = "98";
 comments[60] = "Id Pregunta: 11358. ";


//  Id pregunta: 11359 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[61]= new Array();
 choices[61][0] = "Entregar servicios acordados";
 choices[61][1] = "Contratar proveedores TI";
 choices[61][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[61][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[61] = choices[61][2];
 units[61] = "98";
 comments[61] = "Id Pregunta: 11359. ";


//  Id pregunta: 11360 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[62]= new Array();
 choices[62][0] = "Controlar todos los proveedores externos de TI";
 choices[62][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[62][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[62][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[62] = choices[62][1];
 units[62] = "98";
 comments[62] = "Id Pregunta: 11360. ";


//  Id pregunta: 11364 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes enunciados no es un prop&oacute;sito de Operaci&oacute;n del Servicio?";
 choices[63]= new Array();
 choices[63][0] = "Llevar a cabo pruebas para asegurar que los servicios est&aacute;n dise&ntilde;ados para satisfacer las necesidades del negocio";
 choices[63][1] = "Entregar y gestionar servicios de TI";
 choices[63][2] = "Gestionar la tecnolog&iacute;a utilizada para entregar servicios";
 choices[63][3] = "Monitorizar el desempe&ntilde;o de la tecnolog&iacute;a y los procesos";
 answers[63] = choices[63][0];
 units[63] = "98";
 comments[63] = "Id Pregunta: 11364. ";


//  Id pregunta: 11365 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de registrar las relaciones entre los componentes del servicio?";
 choices[64]= new Array();
 choices[64][0] = "Gesti&oacute;n de niveles del servicio";
 choices[64][1] = "Gesti&oacute;n de porfolio de servicios";
 choices[64][2] = "Gesti&oacute;n de activos y configuraci&oacute;n del servicio (SACM)";
 choices[64][3] = "Gesti&oacute;n de incidencias";
 answers[64] = choices[64][2];
 units[64] = "98";
 comments[64] = "Id Pregunta: 11365. ";


//  Id pregunta: 11366 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Seg&uacute;n ITIL v3, &iquest;para qu&eacute; se utiliza el modelo RACI?";
 choices[65]= new Array();
 choices[65][0] = "Documentar los roles y las responsabilidades de los interesados en un proceso o actividad";
 choices[65][1] = "Definir los requisitos para un nuevo servicio o un proceso";
 choices[65][2] = "Analizar el impacto de una incidencia en el negocio";
 choices[65][3] = "Crear un cuadro de mando que muestra el estado global de la gesti&oacute;n de servicios";
 answers[65] = choices[65][0];
 units[65] = "98";
 comments[65] = "Id Pregunta: 11366. ";


//  Id pregunta: 11367 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es la MEJOR descripci&oacute;n de un acuerdo de nivel operativo (OLA)?";
 choices[66]= new Array();
 choices[66][0] = "Un acuerdo entre un proveedor de servicios de TI y otra parte de la misma organizaci&oacute;n que colabora en la prestaci&oacute;n de servicios";
 choices[66][1] = "Un acuerdo escrito entre el proveedor de servicios de TI y sus clientes, el cual define las metas clave y responsabilidades de ambas partes";
 choices[66][2] = "Un acuerdo entre dos proveedores de servicios sobre los niveles de servicio requeridos por el cliente";
 choices[66][3] = "Un acuerdo entre un Centro de Servicios externo y el cliente de TI acerca de los tiempos de respuesta y de reparaci&oacute;n";
 answers[66] = choices[66][0];
 units[66] = "98";
 comments[66] = "Id Pregunta: 11367. ";


//  Id pregunta: 11369 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de las siguientes actividades est&aacute;n incluidas como parte de la Transici&oacute;n del Servicio?: 1. Introducir nuevos servicios; 2. Retirar servicios; 3. Transferir servicios entre proveedores de servicios";
 choices[67]= new Array();
 choices[67][0] = "Solo 1 y 2";
 choices[67][1] = "Solo 2";
 choices[67][2] = "Todas las anteriores";
 choices[67][3] = "1 y 3";
 answers[67] = choices[67][2];
 units[67] = "98";
 comments[67] = "Id Pregunta: 11369. ";


//  Id pregunta: 11370 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos NO es una etapa del ciclo de vida del servicio?";
 choices[68]= new Array();
 choices[68][0] = "Optimizaci&oacute;n del servicio";
 choices[68][1] = "Transici&oacute;n del servicio";
 choices[68][2] = "Dise&ntilde;o del servicio";
 choices[68][3] = "Estrategia del servicio";
 answers[68] = choices[68][0];
 units[68] = "98";
 comments[68] = "Id Pregunta: 11370. ";


//  Id pregunta: 11371 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre un sistema de gesti&oacute;n de configuraci&oacute;n (CMS) es la correcta?";
 choices[69]= new Array();
 choices[69][0] = "El CMS no debe contener datos corporativos acerca de los clientes y usuarios";
 choices[69][1] = "Puede haber m&aacute;s de un CMS";
 choices[69][2] = "No debe haber m&aacute;s de una base de datos de gesti&oacute;n de la configuraci&oacute;n (CMDB)";
 choices[69][3] = "Aunque una organizaci&oacute;n externalice sus servicios de TI tiene la necesidad de un CMS";
 answers[69] = choices[69][3];
 units[69] = "98";
 comments[69] = "Id Pregunta: 11371. ";


//  Id pregunta: 11373 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de revisar regularmente los acuerdos de nivel operativo (OLA)?";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de suministradores";
 choices[70][1] = "Gesti&oacute;n de niveles de servicio";
 choices[70][2] = "Gesti&oacute;n del porfolio de servicios";
 choices[70][3] = "Gesti&oacute;n de demanda";
 answers[70] = choices[70][1];
 units[70] = "98";
 comments[70] = "Id Pregunta: 11373. ";


//  Id pregunta: 11374 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes conceptos son caracter&iacute;sticas de todo proceso?: 1. Es medible; 2. Entrega un resultado especifico; 3. Entrega sus resultados principales a un cliente o a otros interesados";
 choices[71]= new Array();
 choices[71][0] = "Solo 1 y 3";
 choices[71][1] = "Solo 1 y 2";
 choices[71][2] = "Solo 2 y 3";
 choices[71][3] = "Todos los anteriores";
 answers[71] = choices[71][3];
 units[71] = "98";
 comments[71] = "Id Pregunta: 11374. ";


//  Id pregunta: 11376 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito del proceso de peticiones de servicio?";
 choices[72]= new Array();
 choices[72][0] = "Tramitar las peticiones de servicio de los usuarios";
 choices[72][1] = "Asegurar que todas las peticiones dentro de una organizaci&oacute;n de TI se satisfagan";
 choices[72][2] = "Asegurar el cumplimiento de una solicitud de cambio";
 choices[72][3] = "Asegurar que los acuerdos de nivel de servicio (SLA) son cumplidos";
 answers[72] = choices[72][0];
 units[72] = "98";
 comments[72] = "Id Pregunta: 11376. ";


//  Id pregunta: 11377 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes atributos debe entregar un servicio de TI a los clientes?";
 choices[73]= new Array();
 choices[73][0] = "Capacidades";
 choices[73][1] = "Coste";
 choices[73][2] = "Riesgo";
 choices[73][3] = "Valor";
 answers[73] = choices[73][3];
 units[73] = "98";
 comments[73] = "Id Pregunta: 11377. ";


//  Id pregunta: 11378 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones resume mejor el prop&oacute;sito de la Gesti&oacute;n de Eventos?";
 choices[74]= new Array();
 choices[74][0] = "La habilidad de detectar eventos, darles sentido y determinar las acciones de control apropiadas";
 choices[74][1] = "La habilidad de detectar eventos, restablecer el servicio a la normalidad tan pronto como sea posible y minimizar el impacto adverso en las operaciones del negocio";
 choices[74][2] = "La habilidad de monitorizar y controlar las actividades del personal t&eacute;cnico";
 choices[74][3] = "La habilidad de informar sobre la entrega exitosa de los servicios al comprobar el tiempo de funcionamiento de los dispositivos de la infraestructura";
 answers[74] = choices[74][0];
 units[74] = "98";
 comments[74] = "Id Pregunta: 11378. ";


//  Id pregunta: 11379 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; significa &ldquo;Garant&iacute;a de un servicio&rdquo;?";
 choices[75]= new Array();
 choices[75][0] = "El servicio se ajusta al prop&oacute;sito";
 choices[75][1] = "No habr&aacute; fallas en las aplicaciones ni en la infraestructura asociada al servicio";
 choices[75][2] = "Todos los problemas relacionados con el servicio se solucionan gratuitamente durante un per&iacute;odo determinado de tiempo";
 choices[75][3] = "A los clientes se les aseguran ciertos niveles de disponibilidad, capacidad, continuidad y seguridad";
 answers[75] = choices[75][3];
 units[75] = "98";
 comments[75] = "Id Pregunta: 11379. ";


//  Id pregunta: 11380 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; etapa del ciclo de vida del servicio asegura que los m&eacute;todos de medici&oacute;n proporcionar&aacute;n las m&eacute;tricas necesarias para los servicios nuevos o modificados?";
 choices[76]= new Array();
 choices[76][0] = "Dise&ntilde;o del servicio";
 choices[76][1] = "Operaci&oacute;n del servicio";
 choices[76][2] = "Estrategia del servicio";
 choices[76][3] = "Entrega del servicio";
 answers[76] = choices[76][0];
 units[76] = "98";
 comments[76] = "Id Pregunta: 11380. ";


//  Id pregunta: 11381 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas NO es un tipo de m&eacute;trica que se describe en la Mejora Continua del Servicio (CSI)?";
 choices[77]= new Array();
 choices[77][0] = "M&eacute;tricas del proceso";
 choices[77][1] = "M&eacute;tricas del servicio";
 choices[77][2] = "M&eacute;tricas de personal";
 choices[77][3] = "M&eacute;tricas tecnol&oacute;gicas";
 answers[77] = choices[77][2];
 units[77] = "98";
 comments[77] = "Id Pregunta: 11381. ";


//  Id pregunta: 11382 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; afirmaci&oacute;n sobre la relaci&oacute;n entre el sistema de gesti&oacute;n de configuraci&oacute;n (CMS) y el sistema de gesti&oacute;n del conocimiento de servicios (SKMS) es la correcta?";
 choices[78]= new Array();
 choices[78][0] = "El SKMS es parte de la CMS";
 choices[78][1] = "El CMS es parte del SKMS";
 choices[78][2] = "El CMS y el SKMS son la misma cosa";
 choices[78][3] = "No existe una relaci&oacute;n entre el CMS y el SKMS";
 answers[78] = choices[78][1];
 units[78] = "98";
 comments[78] = "Id Pregunta: 11382. ";


//  Id pregunta: 11383 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas es la lista correcta de las cuatro P's del dise&ntilde;o del servicio?";
 choices[79]= new Array();
 choices[79][0] = "Planificaci&oacute;n, productos, posici&oacute;n, procesos";
 choices[79][1] = "Planificaci&oacute;n, perspectiva, posici&oacute;n, personas";
 choices[79][2] = "Perspectiva, asociados (partners), problemas, personas";
 choices[79][3] = "Personas, asociados (partners), productos, procesos";
 answers[79] = choices[79][3];
 units[79] = "98";
 comments[79] = "Id Pregunta: 11383. ";


//  Id pregunta: 11385 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[80]= new Array();
 choices[80][0] = "Gesti&oacute;n de la capacidad";
 choices[80][1] = "Gesti&oacute;n de suministradores";
 choices[80][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[80][3] = "Gesti&oacute;n de cambios";
 answers[80] = choices[80][0];
 units[80] = "98";
 comments[80] = "Id Pregunta: 11385. ";


//  Id pregunta: 11386 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones respecto de la base de datos de errores conocidos (KEDB) es la mejor?";
 choices[81]= new Array();
 choices[81][0] = "La KEDB es la misma base de datos que el sistema de gesti&oacute;n del conocimiento del servicio (SKMS)";
 choices[81][1] = "La KEDB deber&iacute;a de usarse durante la fase de diagn&oacute;stico de incidencias para intentar acelerar el proceso de resoluci&oacute;n";
 choices[81][2] = "Debe tenerse cuidado para evitar duplicar registros en la KEDB. Esto puede ser realizado al ser posible dar acceso de creaci&oacute;n de nuevos registros a muchos t&eacute;cnicos";
 choices[81][3] = "Acceder a la KEDB deber&iacute;a estar limitado al centro de servicio a usuarios";
 answers[81] = choices[81][1];
 units[81] = "98";
 comments[81] = "Id Pregunta: 11386. ";


//  Id pregunta: 11387 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n ITIL v3, &iquest;una petici&oacute;n de un cliente deber&iacute;a ser cumplida SIEMPRE?";
 choices[82]= new Array();
 choices[82][0] = "S&iacute;, si el cliente es externo, ya que est&aacute; pagando por el servicio";
 choices[82][1] = "No si el cliente es interno, ya que no siempre paga por el servicio";
 choices[82][2] = "No, es responsabilidad del proveedor TI llevar a cabo las debidas diligencias antes de que la petici&oacute;n sea cumplida";
 choices[82][3] = "S&iacute;, el proveedor del servicio deber&iacute;a asegurarse de que todos las peticiones para nuevos servicios sean cumplidas";
 answers[82] = choices[82][2];
 units[82] = "98";
 comments[82] = "Id Pregunta: 11387. ";


//  Id pregunta: 11388 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes podr&iacute;an ser considerados parte interesada (stakeholder) en una gesti&oacute;n de proyecto de servicios?";
 choices[83]= new Array();
 choices[83][0] = "Solo usuarios y clientes";
 choices[83][1] = "Solo suministradores y funciones";
 choices[83][2] = "Solo clientes y funciones";
 choices[83][3] = "Todos los anteriores";
 answers[83] = choices[83][3];
 units[83] = "98";
 comments[83] = "Id Pregunta: 11388. ";


//  Id pregunta: 11389 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes actividades asegura y desempe&ntilde;a la Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio?: 1. Identificar los elementos de configuraci&oacute;n (CI); 2. Que los CIs tengan una l&iacute;nea base; 3. Controlar los cambios en los CIs";
 choices[84]= new Array();
 choices[84][0] = "Todos";
 choices[84][1] = "Solo 1 y 2";
 choices[84][2] = "Solo 3";
 choices[84][3] = "Solo 2 y 3";
 answers[84] = choices[84][0];
 units[84] = "98";
 comments[84] = "Id Pregunta: 11389. ";


//  Id pregunta: 11390 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta para todos los procesos?";
 choices[85]= new Array();
 choices[85][0] = "Definen funciones como parte de su dise&ntilde;o";
 choices[85][1] = "Entregan resultados al cliente o a interesados";
 choices[85][2] = "Son llevados a cabo por un proveedor de servicios externo, en apoyo a un cliente";
 choices[85][3] = "Son unidades de organizaciones responsables de resultados espec&iacute;ficos";
 answers[85] = choices[85][1];
 units[85] = "98";
 comments[85] = "Id Pregunta: 11390. ";


//  Id pregunta: 11391 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es primordialmente responsable de empaquetar, construir, probar y desplegar servicios?";
 choices[86]= new Array();
 choices[86][0] = "Planificaci&oacute;n y soporte a la transici&oacute;n";
 choices[86][1] = "Gesti&oacute;n de versiones y despliegues";
 choices[86][2] = "Gesti&oacute;n de configuraci&oacute;n y activos del servicio";
 choices[86][3] = "Gesti&oacute;n del cat&aacute;logo de servicios";
 answers[86] = choices[86][1];
 units[86] = "98";
 comments[86] = "Id Pregunta: 11391. ";


//  Id pregunta: 11394 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la MEJOR definici&oacute;n de un modelo de incidencias?";
 choices[87]= new Array();
 choices[87][0] = "La plantilla que define el formulario de registro de incidencias usado para informar las incidencias";
 choices[87][1] = "Un tipo de incidencia que acarrea un tipo est&aacute;ndar (o modelo) de elemento de configuraci&oacute;n (CI)";
 choices[87][2] = "Un conjunto predefinido de pasos a seguir al tratar con un tipo conocido de incidencia";
 choices[87][3] = "Una incidencia que es f&aacute;cil de resolver";
 answers[87] = choices[87][2];
 units[87] = "98";
 comments[87] = "Id Pregunta: 11394. ";


//  Id pregunta: 11395 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;les de los siguientes roles est&aacute;n definidos en el modelo RACI de ITIL v3?";
 choices[88]= new Array();
 choices[88][0] = "Responsable, Encargado, Consultado, Informado";
 choices[88][1] = "Responsable, Factible, Consultado, Informado";
 choices[88][2] = "Realista, Encargado, Consultado, Informado";
 choices[88][3] = "Responsable, Encargado, Correcto, Informado";
 answers[88] = choices[88][0];
 units[88] = "98";
 comments[88] = "Id Pregunta: 11395. ";


//  Id pregunta: 11397 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la mejor definici&oacute;n de un evento?";
 choices[89]= new Array();
 choices[89][0] = "Una situaci&oacute;n donde un umbral de rendimiento se ha superado y esto impacta a un nivel de servicio acordado";
 choices[89][1] = "Un cambio de estado significativo para la gesti&oacute;n de un servicio TI";
 choices[89][2] = "Un defecto conocido del sistema que genera m&uacute;ltiples incidencias";
 choices[89][3] = "Una reuni&oacute;n planificada entre los clientes y el personal TI para anunciar un servicio nuevo o un programa de mejoras";
 answers[89] = choices[89][1];
 units[89] = "98";
 comments[89] = "Id Pregunta: 11397. ";


//  Id pregunta: 11398 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones deber&iacute;a ser tratada como una incidencia?: 1. Un usuario es incapaz de acceder a un servicio durante el horario de servicio; 2. Un miembro autorizado del personal TI no puede acceder a un servicio durante el horario de servicio; 3. Un componente de red falla pero el usuario no percibe ninguna alteraci&oacute;n del servicio; 4. Un usuario contacta con el centro de servicio para informar que una aplicaci&oacute;n presenta un rendimiento lento";
 choices[90]= new Array();
 choices[90][0] = "Todas las anteriores";
 choices[90][1] = "Solo 1 y 4";
 choices[90][2] = "Solo 2 y 3";
 choices[90][3] = "Ninguna de las anteriores";
 answers[90] = choices[90][0];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11398. ";


//  Id pregunta: 11399 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n ITIL v3, los procesos de Operaci&oacute;n del Servicio son Gesti&oacute;n de Incidencias, Gesti&oacute;n de Problemas, Gesti&oacute;n de Accesos, &hellip;";
 choices[91]= new Array();
 choices[91][0] = "&hellip; Gesti&oacute;n de Eventos y Gesti&oacute;n de Peticiones.";
 choices[91][1] = "&hellip; Gesti&oacute;n de Eventos y Centro de Servicio al usuario.";
 choices[91][2] = "&hellip; Gesti&oacute;n de las Instalaciones y Gesti&oacute;n de Eventos.";
 choices[91][3] = "&hellip; Gesti&oacute;n de Cambios y Gesti&oacute;n de Niveles del Servicio.";
 answers[91] = choices[91][0];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11399. ";


//  Id pregunta: 11400 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio provee un marco de referencia para evaluar las capacidades del servicio y los perfiles de riesgo antes que un nuevo servicio o un cambio sea desplegado?";
 choices[92]= new Array();
 choices[92][0] = "Estrategia del servicio";
 choices[92][1] = "Mejora continua del servicio";
 choices[92][2] = "Transici&oacute;n del servicio";
 choices[92][3] = "Operaci&oacute;n del servicio";
 answers[92] = choices[92][2];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11400. ";


//  Id pregunta: 11401 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes no es un prop&oacute;sito u objetivo de la Gesti&oacute;n de la Disponibilidad?";
 choices[93]= new Array();
 choices[93][0] = "Monitorizar e informar sobre la disponibilidad de componentes";
 choices[93][1] = "Asegurar que la disponibilidad de los servicios se ajusta a las necesidades acordadas del negocio";
 choices[93][2] = "Evaluar el impacto de los cambios sobre el Plan de Disponibilidad";
 choices[93][3] = "Asegurar que los planes de continuidad del negocio est&aacute;n alineados con objetivos del negocio";
 answers[93] = choices[93][3];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11401. ";


//  Id pregunta: 11402 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la descripci&oacute;n correcta de las cuatro Ps del Dise&ntilde;o del Servicio?";
 choices[94]= new Array();
 choices[94][0] = "Un proceso de cuatro pasos para el dise&ntilde;o de una gesti&oacute;n del servicio efectiva";
 choices[94][1] = "Una definici&oacute;n del personal y los productos requeridos para un dise&ntilde;o exitoso";
 choices[94][2] = "Una serie de preguntas que deben hacerse cuando se revisan las especificaciones de dise&ntilde;o";
 choices[94][3] = "Cuatro &aacute;reas principales que deben ser consideradas durante el Dise&ntilde;o del Servicio";
 answers[94] = choices[94][3];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11402. ";


//  Id pregunta: 11404 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes es un prop&oacute;sito b&aacute;sico de la gesti&oacute;n de relaciones con el negocio?";
 choices[95]= new Array();
 choices[95][0] = "Llevar a cabo actividades operacionales para dar soporte de servicios";
 choices[95][1] = "Asegurar que todos los objetivos dentro del acuerdo de nivel de servicio se cumplan";
 choices[95][2] = "Maximizar el valor del contrato y la eficiencia operacional de los servicios que son entregados";
 choices[95][3] = "Entender las necesidades del cliente y asegurar que se cumplen";
 answers[95] = choices[95][3];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11404. ";


//  Id pregunta: 11405 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones es un objetivo del proceso de coordinaci&oacute;n del dise&ntilde;o?";
 choices[96]= new Array();
 choices[96][0] = "Asegurar que los objetivos de disponibilidad del servicio se cumplan";
 choices[96][1] = "Definir, documentar, acordar, monitorizar, medir y revisar los niveles de servicios";
 choices[96][2] = "Proveer y mantener una fuente &uacute;nica de informaci&oacute;n consistente sobre todos los servicios operativos";
 choices[96][3] = "Monitorizar y mejorar el desempe&ntilde;o de la etapa de dise&ntilde;o del ciclo de vida del servicio";
 answers[96] = choices[96][3];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11405. ";


//  Id pregunta: 11406 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;En qu&eacute; libro de ITIL v3 se pueden encontrar las descripciones detalladas de la Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de Suministradores?";
 choices[97]= new Array();
 choices[97][0] = "Estrategia del Servicio";
 choices[97][1] = "Dise&ntilde;o del Servicio";
 choices[97][2] = "Transici&oacute;n del Servicio";
 choices[97][3] = "Operaci&oacute;n del Servicio";
 answers[97] = choices[97][1];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11406. ";


//  Id pregunta: 11407 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes opciones es la jerarqu&iacute;a que utiliza el proceso de Gesti&oacute;n del Conocimiento?";
 choices[98]= new Array();
 choices[98][0] = "Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge)";
 choices[98][1] = "Datos (Data), Informaci&oacute;n (Information), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 choices[98][2] = "Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data)";
 choices[98][3] = "Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 answers[98] = choices[98][1];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11407. ";


//  Id pregunta: 11647 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Indique cu&aacute;l no es un habilitador de CoBIT";
 choices[99]= new Array();
 choices[99][0] = "Procesos";
 choices[99][1] = "Gobierno";
 choices[99][2] = "Informaci&oacute;n";
 choices[99][3] = "Estructuras organizacionales";
 answers[99] = choices[99][1];
 units[99] = "98";
 comments[99] = "Id Pregunta: 11647. ";


