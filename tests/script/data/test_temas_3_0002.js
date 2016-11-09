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

//  Id pregunta: 1042 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El objetivo principal de las t&eacute;cnicas de benchmark es:";
 choices[0]= new Array();
 choices[0][0] = "Comparar diferentes sistemas frente a una carga particularizada de trabajo";
 choices[0][1] = "Analizar el tiempo de respuesta de un sistema frente a distintas cargas reales de trabajo";
 choices[0][2] = "Simular el comportamiento del sistema frente a distintas cargas de trabajo";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][0];
 units[0] = "98";
 comments[0] = "Id Pregunta: 1042. NULL";


//  Id pregunta: 2832 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  Seg&uacute;n el m&eacute;todo COCOMO aplicado al mantenimiento, el esfuerzo de mantenimiento es proporcional a";
 choices[1]= new Array();
 choices[1][0] = "la Tasa de Crecimiento Anual";
 choices[1][1] = "la Tasa de C&oacute;mputo Anual";
 choices[1][2] = "la Tasa de Cambio Anual";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][2];
 units[1] = "98";
 comments[1] = "Id Pregunta: 2832. NULL";


//  Id pregunta: 4609 AÃ±o de creación de pregunta: 2007-01-01
 questions[2]= "3)  Indicar en cual de los siguientes niveles CMM se define como &aacute;rea clave de proceso Ia gesti&oacute;n de configuraci&oacute;n de software";
 choices[2]= new Array();
 choices[2][0] = "repetible";
 choices[2][1] = "definido";
 choices[2][2] = "gestionado";
 choices[2][3] = "optimizado";
 answers[2] = choices[2][0];
 units[2] = "98";
 comments[2] = "Id Pregunta: 4609. NULL";


//  Id pregunta: 4754 AÃ±o de creación de pregunta: 2007-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el est&aacute;ndar en gesti&oacute;n de servicios de TI compatible con ITIL (IT Infrastructure Library)?";
 choices[3]= new Array();
 choices[3][0] = "ISO/IEC 20000";
 choices[3][1] = "ISO/IEC 6592";
 choices[3][2] = "ETSI TS 125 308";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][0];
 units[3] = "98";
 comments[3] = "Id Pregunta: 4754. NULL";


//  Id pregunta: 4760 AÃ±o de creación de pregunta: 2007-01-01
 questions[4]= "5)  COBIT se divide en tres niveles. Indicar cual no es uno de ellos:";
 choices[4]= new Array();
 choices[4][0] = "Dominios";
 choices[4][1] = "Procesos";
 choices[4][2] = "Elementos";
 choices[4][3] = "Actividades";
 answers[4] = choices[4][2];
 units[4] = "98";
 comments[4] = "Id Pregunta: 4760. NULL";


//  Id pregunta: 4827 AÃ±o de creación de pregunta: 2007-01-01
 questions[5]= "6)  El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de lasTIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &quot;Gesti&oacute;n de la Calidad&quot; seencuentra definido en el dominio de:";
 choices[5]= new Array();
 choices[5][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[5][1] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[5][2] = "Servicio y Soporte";
 choices[5][3] = "Monitorizaci&oacute;n";
 answers[5] = choices[5][0];
 units[5] = "98";
 comments[5] = "Id Pregunta: 4827. NULL";


//  Id pregunta: 5573 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  &iquest;Qu&eacute; modelo escoger&iacute;a si tiene como objetivo mejorar el control y la calidad del gobierno de las TI a trav&eacute;s del ciclo completo de la puesta en marcha de aplicaciones?";
 choices[6]= new Array();
 choices[6][0] = "ITIL";
 choices[6][1] = "CMMI";
 choices[6][2] = "COBIT";
 choices[6][3] = "M&Eacute;TRICA";
 answers[6] = choices[6][2];
 units[6] = "98";
 comments[6] = "Id Pregunta: 5573. NULL";


//  Id pregunta: 5577 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  &iquest;Cu&aacute;ntos dominios y procesos forman COBIT?";
 choices[7]= new Array();
 choices[7][0] = "3 dominios y 43 procesos";
 choices[7][1] = "4 dominios y 34 procesos";
 choices[7][2] = "5 dominios y 33 procesos";
 choices[7][3] = "6 dominios y 44 procesos";
 answers[7] = choices[7][1];
 units[7] = "98";
 comments[7] = "Id Pregunta: 5577. NULL";


//  Id pregunta: 5853 AÃ±o de creación de pregunta: 2009-01-01
 questions[8]= "9)  Con respecto a ITIL, el proceso &quot;Configuration Management&quot; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en qu&eacute; fase del ciclo de vida est&aacute; incluido?";
 choices[8]= new Array();
 choices[8][0] = "Dise&ntilde;o del Servicio";
 choices[8][1] = "Transici&oacute;n del Servicio";
 choices[8][2] = "Operaci&oacute;n del Servicio";
 choices[8][3] = "Mejora continua";
 answers[8] = choices[8][1];
 units[8] = "98";
 comments[8] = "Id Pregunta: 5853. Pregunta 33";


//  Id pregunta: 6525 AÃ±o de creación de pregunta: 2010-01-01
 questions[9]= "10)  Los incidentes se clasifican de acuerdo a su";
 choices[9]= new Array();
 choices[9][0] = "Impacto";
 choices[9][1] = "Urgencia";
 choices[9][2] = "Prioridad";
 choices[9][3] = "Todas las respuestas anteriores son correctas";
 answers[9] = choices[9][3];
 units[9] = "98";
 comments[9] = "Id Pregunta: 6525. NULL";


//  Id pregunta: 6526 AÃ±o de creación de pregunta: 2010-01-01
 questions[10]= "11)  Un error conocido es";
 choices[10]= new Array();
 choices[10][0] = "Un problema para el que se ha identificado una soluci&oacute;n provisional o permanente, y tambi&eacute;n se conoce la causa";
 choices[10][1] = "Un problema para el que se ha identificado una soluci&oacute;n provisional o permanente, pero no se conoce la causa";
 choices[10][2] = "Un problema para el que se no se ha identificado a&uacute;n una soluci&oacute;n pero s&iacute; se conoce la causa";
 choices[10][3] = "Todas las respuestas anteriores son falsas";
 answers[10] = choices[10][0];
 units[10] = "98";
 comments[10] = "Id Pregunta: 6526. NULL";


//  Id pregunta: 8189 AÃ±o de creación de pregunta: 2011-01-01
 questions[11]= "12)  Las certificaciones ITIL:";
 choices[11]= new Array();
 choices[11][0] = "Se pueden obtener tanto por personas como por organizaciones.";
 choices[11][1] = "S&oacute;lo se pueden obtener por organizaciones y no por personas.";
 choices[11][2] = "S&oacute;lo se pueden obtener por personas y no por organizaciones.";
 choices[11][3] = "No existen certificaciones ITIL.";
 answers[11] = choices[11][2];
 units[11] = "98";
 comments[11] = "Id Pregunta: 8189. Examen TIC A1 2010";


//  Id pregunta: 8221 AÃ±o de creación de pregunta: 2011-01-01
 questions[12]= "13)  El est&aacute;ndar internacional que m&aacute;s se asemeja a las gu&iacute;as de buenas pr&aacute;cticas ITIL es el:";
 choices[12]= new Array();
 choices[12][0] = "IS0 9000.";
 choices[12][1] = "ISO 20000.";
 choices[12][2] = "ISO 27001.";
 choices[12][3] = "ISO 27000.";
 answers[12] = choices[12][1];
 units[12] = "98";
 comments[12] = "Id Pregunta: 8221. Examen TIC A1 2010";


//  Id pregunta: 8458 AÃ±o de creación de pregunta: 2011-01-01
 questions[13]= "14)  Con el fin de garantizar que las aplicaciones comerciales y las herramientas desarrolladas a medida, se encuentren alineadas con las necesidades del negocio, el est&aacute;ndar COBIT, define 7 procesos a seguir &iquest;en cu&aacute;l de los cuatro dominios que utiliza COBIT para clasificar los procesos de negocio, se encuentran incluidos?:";
 choices[13]= new Array();
 choices[13][0] = "Planificaci&oacute;n y Organizaci&oacute;n";
 choices[13][1] = "Supervisi&oacute;n y Evaluaci&oacute;n";
 choices[13][2] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = choices[13][2];
 units[13] = "98";
 comments[13] = "Id Pregunta: 8458. Analista Ayto. Madrid 2010";


//  Id pregunta: 8830 AÃ±o de creación de pregunta: 2011-01-01
 questions[14]= "15)  &iquest;Qu&eacute; debe incluir el gobierno de las TIC?:";
 choices[14]= new Array();
 choices[14][0] = " Alineaci&oacute;n entre la estrategia de la organizaci&oacute;n y las TIC ";
 choices[14][1] = " Gesti&oacute;n del riesgo";
 choices[14][2] = " Gesti&oacute;n de los recursos TIC y la utilizaci&oacute;n &oacute;ptima de los mismos";
 choices[14][3] = " Todas las respuestas son correctas.";
 answers[14] = choices[14][3];
 units[14] = "98";
 comments[14] = "Id Pregunta: 8830. Examen UC3M 2010";


//  Id pregunta: 8894 AÃ±o de creación de pregunta: 2011-01-01
 questions[15]= "16)  &iquest;A qui&eacute;n no est&aacute; dirigido ITIL?";
 choices[15]= new Array();
 choices[15][0] = "Proveedores de servicios de TI";
 choices[15][1] = "Usuarios de servicios de TI";
 choices[15][2] = "Directores y gestores de TI";
 choices[15][3] = "Chief Information Officers";
 answers[15] = choices[15][1];
 units[15] = "98";
 comments[15] = "Id Pregunta: 8894. NULL";


//  Id pregunta: 10486 AÃ±o de creación de pregunta: 2014-01-01
 questions[16]= "17)  La diferencia que Cobit 5 supone sobre Cobit 4 se basa en que:";
 choices[16]= new Array();
 choices[16][0] = "Se usa ITIL v.3 para la Gesti&oacute;n de las TI";
 choices[16][1] = "En COBIT 5 se habla con propiedad de Gobierno de las TI, en tanto en cuanto existe un alineamiento claro de la TI con los objetivos de Negocio";
 choices[16][2] = "Hay un dominio m&aacute;s a evaluar, que es la Gesti&oacute;n de Proyectos";
 choices[16][3] = "Ahora el Negocio debe tener en cuenta las necesidades del departamento de TI e invertir m&aacute;s dinero en dicho departamento";
 answers[16] = choices[16][1];
 units[16] = "98";
 comments[16] = "Id Pregunta: 10486. NULL";


//  Id pregunta: 10488 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  Se&ntilde;ale la respuesta correcta:";
 choices[17]= new Array();
 choices[17][0] = "Las personas pueden certificarse en las diversas opciones de  ITIL (Foundation, Intermediate, etc.) pero las empresas no, deben certificarse en la ISO 20000";
 choices[17][1] = "Las personas y empresas pueden certificarse en ITIL";
 choices[17][2] = "Las personas y empresas pueden certificase en la ISO 20000";
 choices[17][3] = "Las personas s&oacute;lo pueden certificarse en ITIL Foundation, las empresas en ITIL  Intermediate";
 answers[17] = choices[17][0];
 units[17] = "98";
 comments[17] = "Id Pregunta: 10488. NULL";


//  Id pregunta: 11065 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  &iquest;Cual de las afirmaciones es CORRECTA acerca de las diferentes modalidades de demanda, generadas por los negocios de los clientes?";
 choices[18]= new Array();
 choices[18][0] = "Son impulsadas por las pautas de las actividades de los negocios";
 choices[18][1] = "Es imposible predecir como se comportan";
 choices[18][2] = "Es imposible influenciar en las pautas de la demanda";
 choices[18][3] = "Son impulsadas por el calendario de entregas generado por el proceso de Gesti&oacute;n de la Capacidad";
 answers[18] = choices[18][0];
 units[18] = "98";
 comments[18] = "Id Pregunta: 11065. ";


//  Id pregunta: 11067 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  Establecer pol&iacute;ticas y objetivos es la principal preocupaci&oacute;n de cu&aacute;l de los elementos del Ciclo de Vida del Servicio?";
 choices[19]= new Array();
 choices[19][0] = "Estrategia del Servicio";
 choices[19][1] = "Estrategia y Mejora Continua del Servicio";
 choices[19][2] = "Estrategia, Dise&ntilde;o y Transici&oacute;n del Servicio";
 choices[19][3] = "Estrategia, Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora Continua del Servicio";
 answers[19] = choices[19][0];
 units[19] = "98";
 comments[19] = "Id Pregunta: 11067. ";


//  Id pregunta: 11068 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  &iquest;Cual de la siguientes afirmaciones es CORRECTA para TODOS los procesos?";
 choices[20]= new Array();
 choices[20][0] = "Definen actividades, roles, responsabilidades, funciones y m&eacute;tricas";
 choices[20][1] = "Crean valor para las partes interesadas (stakeholders)";
 choices[20][2] = "Se entrega por un Proveedor de Servicios como soporte a un Cliente";
 choices[20][3] = "Son unidades de las Organizaciones, responsables de resultados espec&iacute;ficos";
 answers[20] = choices[20][1];
 units[20] = "98";
 comments[20] = "Id Pregunta: 11068. ";


//  Id pregunta: 11074 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  &iquest;A cual de las siguientes &aacute;reas debe la tecnolog&iacute;a ayudar a dar soporte durante la fase de Dise&ntilde;o del Servicio en el ciclo de Vida del Servicio?";
 choices[21]= new Array();
 choices[21][0] = "Dise&ntilde;o de hardware y software";
 choices[21][1] = "Dise&ntilde;o del entorno y dise&ntilde;o de los procesos";
 choices[21][2] = "Dise&ntilde;o de datos";
 choices[21][3] = "Todas ellas";
 answers[21] = choices[21][3];
 units[21] = "98";
 comments[21] = "Id Pregunta: 11074. ";


//  Id pregunta: 11076 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l las siguientes afirmaciones acerca del proceso de Gesti&oacute;n Proveedores es INCORRECTA?";
 choices[22]= new Array();
 choices[22][0] = "Gesti&oacute;n de Proveedores negocia los acuerdos internos y externos para dar soporte en la entrega de los servicios";
 choices[22][1] = "Gesti&oacute;n de Proveedores asegura que los proveedores satisfacen las expectativas del negocio";
 choices[22][2] = "Gesti&oacute;n de Proveedores mantiene la informaci&oacute;n de la Base de Datos de Proveedores y Contratos";
 choices[22][3] = "Gesti&oacute;n de Proveedores debe involucrarse en todas las etapas del Ciclo de Vida del Servicio, desde la Estrategia, pasando por Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora";
 answers[22] = choices[22][0];
 units[22] = "98";
 comments[22] = "Id Pregunta: 11076. ";


//  Id pregunta: 11079 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  El objetivo del proceso de Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio es...";
 choices[23]= new Array();
 choices[23][0] = "Contabilizar todos los activos financieros de la organizaci&oacute;n";
 choices[23][1] = "Proveer de un modelo l&oacute;gico de infraestructura de TI, correlacionando losServicios TI y diferentes componentes IT necesarios para la entrega de los servicios";
 choices[23][2] = "Construir modelos de servicios para justificar la implementaci&oacute;n de ITIL";
 choices[23][3] = "Implementar ITIL a trav&eacute;s de la organizaci&oacute;n";
 answers[23] = choices[23][1];
 units[23] = "98";
 comments[23] = "Id Pregunta: 11079. ";


//  Id pregunta: 11080 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  Gesti&oacute;n T&eacute;cnica NO es responsable de&hellip;";
 choices[24]= new Array();
 choices[24][0] = "Mantener la infraestructura t&eacute;cnica";
 choices[24][1] = "Documentar y mantener las habilidades t&eacute;cnicas requeridas para el soporte y gesti&oacute;n de la infraestructura de TI";
 choices[24][2] = "Definir los Acuerdos de (OLA - Operations Level Agreement) para los equipos t&eacute;cnicos";
 choices[24][3] = "Diagnostico y recuperaci&oacute;n de fallos t&eacute;cnicos";
 answers[24] = choices[24][2];
 units[24] = "98";
 comments[24] = "Id Pregunta: 11080. ";


//  Id pregunta: 11082 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  Cu&aacute;l es la descripci&oacute;n correcta de operaci&oacute;n normal del servicio";
 choices[25]= new Array();
 choices[25][0] = "El servicio es operado de la manera usual, sin que ocurran incidencias";
 choices[25][1] = "El servicio es facilitado con todas las funcionalidades y rendimiento que el negocio desea";
 choices[25][2] = "El servicio es operado dentro de los limites definidos en los Acuerdos de Nivel de Servicio (Servicie Level Agreement &ndash; SLA)";
 choices[25][3] = "Todos los usuarios pueden registrarse en el servicio y utilizarlo";
 answers[25] = choices[25][2];
 units[25] = "98";
 comments[25] = "Id Pregunta: 11082. ";


//  Id pregunta: 11265 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  La versi&oacute;n 3 de ITIL enfoca la gesti&oacute;n de servicios a partir del ciclo de vida de un servicio, se&ntilde;ale en concepto correcto entre los que se muestran a continuaci&oacute;n: ";
 choices[26]= new Array();
 choices[26][0] = "Funci&oacute;n: es una subdivisi&oacute;n de una organizaci&oacute;n que est&aacute; especializada en realizar un tipo de trabajo concreto y tiene la responsabilidad de obtener resultados concretos.";
 choices[26][1] = "Actividad: es un conjunto estructurado de procesos dise&ntilde;ado para cumplir uno objetivo concreto.";
 choices[26][2] = "Gesti&oacute;n de Servicio: es un conjunto de actividades y responsabilidades asignadas a una persona o un grupo.";
 choices[26][3] = "Rol: es un conjunto de capacidades organizativas especializadas, cuyo fin es generar valor para los clientes en forma de servicios.";
 answers[26] = choices[26][0];
 units[26] = "98";
 comments[26] = "Id Pregunta: 11265. ";


//  Id pregunta: 11269 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes NO es un principio de Cobit v5?";
 choices[27]= new Array();
 choices[27][0] = "Satisfacer las Necesidades de las Partes Interesadas.";
 choices[27][1] = "Cubrir el &aacute;rea TI de extremo a extremo.";
 choices[27][2] = "Aplicar un Marco de Referencia &Uacute;nico Integrado.";
 choices[27][3] = "Separar el Gobierno de la Gesti&oacute;n.";
 answers[27] = choices[27][1];
 units[27] = "98";
 comments[27] = "Id Pregunta: 11269. ";


//  Id pregunta: 11270 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  En Cobitv5:";
 choices[28]= new Array();
 choices[28][0] = "La cascada de metas es el mecanismo para traducir las necesidades de las partes interesadas en metas corporativas, metas relacionadas con las TI y metas catalizadoras.";
 choices[28][1] = "Las metas corporativas han sido desarrolladas utilizando las dimensiones del cuadro de mando integral (CMI).";
 choices[28][2] = "Los tres objetivos principales de Gobierno a considerar son: realizaci&oacute;n de beneficios, optimizaci&oacute;n de riesgos y optimizaci&oacute;n de recursos.";
 choices[28][3] = "Todas son correctas.";
 answers[28] = choices[28][3];
 units[28] = "98";
 comments[28] = "Id Pregunta: 11270. ";


//  Id pregunta: 11361 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les son los beneficios de la Biblioteca Definitiva de Medios (DML)?:  1. Protecci&oacute;n l&oacute;gica del software y control de licencias; 2. Control del despliegue de las versiones autorizadas; 3. Protecci&oacute;n f&iacute;sica del software";
 choices[29]= new Array();
 choices[29][0] = "Solo 1 y 2";
 choices[29][1] = "Solo 2 y 3";
 choices[29][2] = "Todos";
 choices[29][3] = "Ninguno";
 answers[29] = choices[29][2];
 units[29] = "98";
 comments[29] = "Id Pregunta: 11361. ";


//  Id pregunta: 11362 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  Indique qu&eacute; definiciones son correctas de acuerdo a ITIL v3 para Gesti&oacute;n de Incidencias y Gesti&oacute;n de Problemas: 1. Gesti&oacute;n de Incidencias: restaura el servicio lo antes posible, sin importar la soluci&oacute;n aplicada; 2. Gesti&oacute;n de Problemas: procura dar soluciones definitivas para evitar la recurrencia de incidencias.";
 choices[30]= new Array();
 choices[30][0] = "Solo 1";
 choices[30][1] = "Solo 2";
 choices[30][2] = "Ambas";
 choices[30][3] = "Ninguna";
 answers[30] = choices[30][2];
 units[30] = "98";
 comments[30] = "Id Pregunta: 11362. ";


//  Id pregunta: 11363 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[31]= new Array();
 choices[31][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[31][1] = "De tecnolog&iacute;a y de servicios";
 choices[31][2] = "De servicios y de personas";
 choices[31][3] = "De servicios y de procesos";
 answers[31] = choices[31][0];
 units[31] = "98";
 comments[31] = "Id Pregunta: 11363. ";


//  Id pregunta: 11368 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito principal de la Gesti&oacute;n de Disponibilidad?";
 choices[32]= new Array();
 choices[32][0] = "Monitorizar e informar la disponibilidad de los componentes";
 choices[32][1] = "Asegurar que se cumplen todas las metas del acuerdo de nivel de servicios (SLA)";
 choices[32][2] = "Garantizar los niveles de disponibilidad de los servicios y de los componentes";
 choices[32][3] = "Asegurar que la disponibilidad del servicio satisface las necesidades acordadas con el negocio";
 answers[32] = choices[32][3];
 units[32] = "98";
 comments[32] = "Id Pregunta: 11368. ";


//  Id pregunta: 11372 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes elementos estar&iacute;an almacenados en la biblioteca definitiva de medios (DML)?: 1. Copias de software comprado; 2. Copias de software desarrollado internamente; 3. Documentaci&oacute;n relevante de las licencias; 4. Calendario de cambios";
 choices[33]= new Array();
 choices[33][0] = "Todas las anteriores";
 choices[33][1] = "Solo 1 y 2";
 choices[33][2] = "Solo 3 y 4";
 choices[33][3] = "Solo 1, 2 y 3";
 answers[33] = choices[33][3];
 units[33] = "98";
 comments[33] = "Id Pregunta: 11372. ";


//  Id pregunta: 11375 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos son las caracter&iacute;sticas claves que contribuyen al &eacute;xito de ITIL?: 1. Es neutral respecto a fabricantes y vendedores; 2. No es prescriptivo; 3. Es una mejor pr&aacute;ctica; 4. Es un est&aacute;ndar";
 choices[34]= new Array();
 choices[34][0] = "Solo 3";
 choices[34][1] = "Solo 1, 2 y 3";
 choices[34][2] = "Todos los anteriores";
 choices[34][3] = "Solo 2, 3 y 4";
 answers[34] = choices[34][1];
 units[34] = "98";
 comments[34] = "Id Pregunta: 11375. ";


//  Id pregunta: 11384 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones respecto a funciones es correcta?: 1. Pueden incluir herramientas; 2. Son grupos que utilizan recursos para llevar a cabo una o m&aacute;s actividades; 3. Una persona o grupo puede desarrollar m&uacute;ltiples funciones; 4. Son m&aacute;s caras de implantar comparado con los procesos";
 choices[35]= new Array();
 choices[35][0] = "Solo 1, 2 y 3";
 choices[35][1] = "Solo 1, 2 y 4";
 choices[35][2] = "Todas las anteriores";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][0];
 units[35] = "98";
 comments[35] = "Id Pregunta: 11384. ";


//  Id pregunta: 11392 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones es el mejor ejemplo de una soluci&oacute;n temporal (workaround)?";
 choices[36]= new Array();
 choices[36][0] = "Un t&eacute;cnico instala un script para redirigir la impresi&oacute;n a una impresora alternativa hasta que se pueda aplicar una soluci&oacute;n permanente";
 choices[36][1] = "Un t&eacute;cnico intenta resolver una incidencia de diferentes maneras. Una de ellas funciona aunque no sabe cu&aacute;l.";
 choices[36][2] = "Despu&eacute;s de notificar la incidencia al centro de servicio, el usuario se dedica a otras tareas mientras se identifica y resuelve el problema";
 choices[36][3] = "Un dispositivo funciona de forma intermitente, permitiendo al usuario trabajar con un rendimiento degradado mientras el t&eacute;cnico diagnostica la incidencia";
 answers[36] = choices[36][0];
 units[36] = "98";
 comments[36] = "Id Pregunta: 11392. ";


//  Id pregunta: 11393 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes listas de pasos del Ciclo de Deming empleada por ITIL v3 es la correcta?";
 choices[37]= new Array();
 choices[37][0] = "Planificar, Medir, Monitorizar, Informar";
 choices[37][1] = "Planificar, Revisar, Reaccionar, Implementar";
 choices[37][2] = "Planificar, Hacer, Actuar, Auditar";
 choices[37][3] = "Planificar, Hacer, Revisar, Actuar";
 answers[37] = choices[37][3];
 units[37] = "98";
 comments[37] = "Id Pregunta: 11393. ";


//  Id pregunta: 11396 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio decide qu&eacute; servicios deber&iacute;an ser ofrecidos y a qui&eacute;nes se les va a ofrecer?";
 choices[38]= new Array();
 choices[38][0] = "Mejora continua del servicio";
 choices[38][1] = "Operaci&oacute;n del servicio";
 choices[38][2] = "Dise&ntilde;o del servicio";
 choices[38][3] = "Estrategia del servicio";
 answers[38] = choices[38][3];
 units[38] = "98";
 comments[38] = "Id Pregunta: 11396. ";


//  Id pregunta: 11403 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre gesti&oacute;n de suministradores es incorrecta?";
 choices[39]= new Array();
 choices[39][0] = "La gesti&oacute;n de suministradores negocia acuerdos de nivel operacional (OLA)";
 choices[39][1] = "La gesti&oacute;n de suministradores asegura que los suministradores cumplan con las expectativas del negocio";
 choices[39][2] = "La gesti&oacute;n de suministradores mantiene informaci&oacute;n en un sistema de gesti&oacute;n de suministradores y contratos";
 choices[39][3] = "La gesti&oacute;n de suministradores negocia acuerdos externos para ayudar en la provisi&oacute;n de servicios";
 answers[39] = choices[39][0];
 units[39] = "98";
 comments[39] = "Id Pregunta: 11403. ";


