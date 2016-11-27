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

//  Id pregunta: 534 AÃ±o de creación de pregunta: 2003-01-01
 questions[0]= "1)  Se&ntilde;alar la respuesta correcta respecto a M&eacute;trica V3";
 choices[0]= new Array();
 choices[0][0] = "No propone la utilizaci&oacute;n de MAGERIT como la metodolog&iacute;a de an&aacute;lsis y gesti&oacute;n de riesgos";
 choices[0][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos.";
 choices[0][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de propia metodolog&iacute;a.";
 choices[0][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos.";
 answers[0] = choices[0][2];
 units[0] = "86";
 comments[0] = "Id Pregunta: 534. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1994 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El estudio de Viabilidad del Sistema:";
 choices[1]= new Array();
 choices[1][0] = "Es una parte del ciclo de vida, y como tal est&aacute; comtemplado en la metodolog&iacute;a METRICA V3";
 choices[1][1] = "No est&aacute; contemplado en la METRICA, pues esta es solo una metodolog&iacute;a de desarrollo";
 choices[1][2] = "No es necesaria si se emplean t&eacute;cnicas orientadas a objetos";
 choices[1][3] = "No es necesaria si el desarrollo del sistema viene motivado por una orden superior.";
 answers[1] = choices[1][0];
 units[1] = "86";
 comments[1] = "Id Pregunta: 1994. Pregunta TIC-B 2004";


//  Id pregunta: 1995 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En un diagrama de transici&oacute;n de estados, en la metodolog&iacute;a Metrica V3:";
 choices[2]= new Array();
 choices[2][0] = "Se puede incluir mas de un estado inicial, que iran conectados mediante una transici&oacute;n sin etiquetar al primer estado del diagrama";
 choices[2][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final";
 choices[2][2] = "Puede haber varios estados finales en un diagrama, que ser&aacute;n mutuamente excluyentes";
 choices[2][3] = "Los &uacute;nicos elementos permitidos son estaedos, transiciones y acciones.";
 answers[2] = choices[2][2];
 units[2] = "86";
 comments[2] = "Id Pregunta: 1995. Pregunta TIC-B 2004";


//  Id pregunta: 2009 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Las pruebas que se realizan con los componentes modificados con el fin de comprobar que no introducen ning&uacute;n error adicional en los componentes no modificados se denominan:";
 choices[3]= new Array();
 choices[3][0] = "Pruebas unitarias";
 choices[3][1] = "Pruebas de sistema";
 choices[3][2] = "Pruebas de regresi&oacute;n";
 choices[3][3] = "Pruebas de aceptaci&oacute;n";
 answers[3] = choices[3][2];
 units[3] = "86";
 comments[3] = "Id Pregunta: 2009. Similar a examen TIC SS A 2004";


//  Id pregunta: 2015 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos es falsa?";
 choices[4]= new Array();
 choices[4][0] = "Un proceso puede ser tanto origen como final de unos datos";
 choices[4][1] = "Una entidad externa puede aparecer varias veces en un mismo diagrama";
 choices[4][2] = "Los flujos de datos dirigidos a almacenes de datos pueden ser de consulta, de actualizaci&oacute;n y de di&aacute;logo";
 choices[4][3] = "Un almac&eacute;n de datos no puede crear, transformar ni modificar datos";
 answers[4] = choices[4][0];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2015. Examen TIC MAP B 2004";


//  Id pregunta: 2049 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En M&eacute;trica V3 no son T&eacute;cnicas de Gesti&oacute;n de Proyectos:";
 choices[5]= new Array();
 choices[5][0] = "WBS";
 choices[5][1] = "MARK II";
 choices[5][2] = "JAD";
 choices[5][3] = "PERT";
 answers[5] = choices[5][2];
 units[5] = "86";
 comments[5] = "Id Pregunta: 2049. NULL";


//  Id pregunta: 2057 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indicar la afirmaci&oacute;n falsa sobre la naturaleza del software:";
 choices[6]= new Array();
 choices[6][0] = "Es independiente del hardware y del entorno en el que se ejecuta";
 choices[6][1] = "Es f&aacute;cil de modificar pero muy dif&iacute;cil de validar";
 choices[6][2] = "Tiene un concepto de fiabilidad diferente al del material: los errores provienen de su definici&oacute;n y no de su deterioro";
 choices[6][3] = "Es invisible, se manifiesta a trav&eacute;s del hardware y tiene un proceso de desarrollo dif&iacute;cil de controlar";
 answers[6] = choices[6][0];
 units[6] = "86";
 comments[6] = "Id Pregunta: 2057. NULL";


//  Id pregunta: 2068 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de prueba no es considerada de &quot;caja negra&quot;?";
 choices[7]= new Array();
 choices[7][0] = "Las particiones de equivalencia";
 choices[7][1] = "Prueba del camino b&aacute;sico";
 choices[7][2] = "El an&aacute;lisis de los valores l&iacute;mite";
 choices[7][3] = "Los grafos causa-efecto";
 answers[7] = choices[7][1];
 units[7] = "86";
 comments[7] = "Id Pregunta: 2068. NULL";


//  Id pregunta: 2076 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Se&ntilde;ale entre los siguientes tipos de mantenimiento de sistemas de informaci&oacute;n aquel que queda fuera del &aacute;mbito de METRICA V3:";
 choices[8]= new Array();
 choices[8][0] = "Cambios precisos para corregir errores del software";
 choices[8][1] = "Incorporaciones necesarias para cubrir la expansi&oacute;n de las necesidades de los usuarios";
 choices[8][2] = "Modificaciones y eliminaciones necesarias para atender los cambios en las necesidades de los usuarios";
 choices[8][3] = "Acciones necesarias para mejorar la calidad interna de los sistemas";
 answers[8] = choices[8][3];
 units[8] = "86";
 comments[8] = "Id Pregunta: 2076. Pregunta Junta Andalucia - A";


//  Id pregunta: 2079 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  En el mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[9]= new Array();
 choices[9][0] = "Estad&iacute;stica e Inventario de Cambios";
 choices[9][1] = "Registro de cambios";
 choices[9][2] = "Registro de petici&oacute;n";
 choices[9][3] = "Cat&aacute;logo de peticiones";
 answers[9] = choices[9][2];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2079. Pregunta Junta Andalucia - A";


//  Id pregunta: 2081 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Seg&uacute;n la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3, en el an&aacute;lisis coste-beneficio de un sistema de informaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Deben considerarse s&oacute;lo los aspectos tangibles";
 choices[10][1] = "Deben considerarse tanto los aspectos tangibles como los intangibles";
 choices[10][2] = "El an&aacute;lisis coste-beneficio no figura en la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3";
 choices[10][3] = "No se incluyen los gastos de comunicaciones";
 answers[10] = choices[10][1];
 units[10] = "86";
 comments[10] = "Id Pregunta: 2081. NULL";


//  Id pregunta: 2105 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[11]= new Array();
 choices[11][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[11][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[11][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[11][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[11] = choices[11][0];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2105. Pregunta Junta Andalucia - A";


//  Id pregunta: 2108 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas/pr&aacute;cticas se utilizar&aacute;n en todas las actividades del proceso de Mantenimiento de sistemas de informaci&oacute;n siguiendo METRICA V3?";
 choices[12]= new Array();
 choices[12][0] = "An&aacute;lisis de impacto";
 choices[12][1] = "Catalogaci&oacute;n";
 choices[12][2] = "Planificaci&oacute;n ";
 choices[12][3] = "Pruebas de regresi&oacute;n";
 answers[12] = choices[12][1];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2108. Pregunta Junta Andalucia - A";


//  Id pregunta: 2123 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso implantaci&oacute;n y aceptaci&oacute;n del sistema de informaci&oacute;n?:";
 choices[13]= new Array();
 choices[13][0] = "Preparaci&oacute;n del mantenimiento";
 choices[13][1] = "Carga de datos al entorno de operaci&oacute;n";
 choices[13][2] = "Pruebas de aceptaci&oacute;n del sistema";
 choices[13][3] = "Todas las anteriores";
 answers[13] = choices[13][3];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2123. NULL";


//  Id pregunta: 2126 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[14]= new Array();
 choices[14][0] = "M&Eacute;TRICA Versi&oacute;n 3 contempla s&oacute;lo desarrollos orientados a objetos";
 choices[14][1] = "El grupo encargado del Aseguramiento de la calidad debe ser independiente del equipo de desarrollo";
 choices[14][2] = "En M&Eacute;TRICA Versi&oacute;n 3 el mantenimiento es s&oacute;lo correctivo y adaptativo";
 choices[14][3] = "El particionamiento f&iacute;sico del sistema de informaci&oacute;n se lleva a cabo en el An&aacute;lisis del sistema de informaci&oacute;n";
 answers[14] = choices[14][1];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2126. NULL";


//  Id pregunta: 2167 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indique la afirmaci&oacute;n falsa, relativa al mantenimiento de las aplicaciones:";
 choices[15]= new Array();
 choices[15][0] = "Comienza cuando el sistema es entregado al usuario y contin&uacute;a mientras permanece activa su vida &uacute;til";
 choices[15][1] = "Las modificaciones que implican mejoras o ampliaciones de la funcionalidad no necesitan ser aprobados por el usuario";
 choices[15][2] = "Los cambios reflejados en la fase de mantenimiento deben quedar reflejados en la documentaci&oacute;n de todas las fases anteriores";
 choices[15][3] = "El mantenimiento puede ser correctivo, perfectivo o adaptativo";
 answers[15] = choices[15][1];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2167. NULL";


//  Id pregunta: 2184 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l es la versi&oacute;n actual de la m&eacute;todolog&iacute;a M&eacute;trica?:";
 choices[16]= new Array();
 choices[16][0] = "v1";
 choices[16][1] = "v2";
 choices[16][2] = "v2.1";
 choices[16][3] = "v3";
 answers[16] = choices[16][3];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2184. NULL";


//  Id pregunta: 2204 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;En qu&eacute; procesos de M&eacute;trica V3 se contemplan la migraci&oacute;n y carga inicial de datos?:  ";
 choices[17]= new Array();
 choices[17][0] = "DSI, CSI, IAS";
 choices[17][1] = "EVS, DSI, CSI";
 choices[17][2] = "ASI, DTS, CSI";
 choices[17][3] = "EVS, CSI, MSI";
 answers[17] = choices[17][0];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2204. NULL";


//  Id pregunta: 2205 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Qu&eacute; actividad del an&aacute;lisis del sistema de informaci&oacute;n solo se realiza en el caso de an&aacute;lisis orientado a objetos?:";
 choices[18]= new Array();
 choices[18][0] = "ASI 6 (Elaboraci&oacute;n del modelo de datos)";
 choices[18][1] = "ASI 8 (Definici&oacute;n de interfaces de usuario)";
 choices[18][2] = "ASI 4 (An&aacute;lisis de los casos de uso)";
 choices[18][3] = "ASI 3 (Identificaci&oacute;n de subsistemas de an&aacute;lisis)";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2205. NULL";


//  Id pregunta: 2208 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; debe contener de forma general un Plan de Contingencia (tambi&eacute;n denominado Plan de Desastre)?:";
 choices[19]= new Array();
 choices[19][0] = "Plan de viabilidad, procedimientos de emergencia ante fallos, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[19][1] = "Procedimientos de actuaci&oacute;n en caso de desastre, plan de copias de seguridad o de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[19][2] = "An&aacute;lisis de riesgos inform&aacute;ticos, plan de viabilidad, procedimientos de activaci&oacute;n en caso de desastre, plan de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[19][3] = "Plan de activaci&oacute;n de emergencia, procedimientos de emergencia ante fallos y procedimientos de traslado a instalaci&oacute;n alternativa";
 answers[19] = choices[19][1];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2208. NULL";


//  Id pregunta: 2227 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  A la hora de poner en explotaci&oacute;n un servicio:";
 choices[20]= new Array();
 choices[20][0] = "Conviene realizar las pruebas una vez est&eacute; el servicio en el entorno de explotaci&oacute;n, ya que es el mejor medio para detectar los errores.";
 choices[20][1] = "Conviene realizar las pruebas en el entorno de preexplotaci&oacute;n.";
 choices[20][2] = "Conviene realizar las pruebas en el entorno de desarrollo, ya que el de preexplotaci&oacute;n es s&oacute;lo para las pruebas de rendimiento.";
 choices[20][3] = "Conviene realizar algunas pruebas en el entorno de preexplotaci&oacute;n, y las restantes en el entorno de explotaci&oacute;n, junto a los usuarios.";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2227. NULL";


//  Id pregunta: 2271 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El diagrama que representa el despliegue de los componentes sobre los dispositivos materiales o nodos es el de:";
 choices[21]= new Array();
 choices[21][0] = "componentes";
 choices[21][1] = "despliegue";
 choices[21][2] = "actividades";
 choices[21][3] = "ninguno de los anteriores";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2271. NULL";


//  Id pregunta: 2491 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;alar cual es la informaci&oacute;n correcta respecto a las pruebas:";
 choices[22]= new Array();
 choices[22][0] = "Los casos de prueba bien elegidos son los que tienen gran probabilidad de demostrar que el software funciona bien";
 choices[22][1] = "Las pruebas no tienen que documentarse porque jam&aacute;s tienen que repetirse o revisarse";
 choices[22][2] = "Debe contemplar &uacute;nicamente casos imprevistos o entradas no v&aacute;lidas";
 choices[22][3] = "Ninguna de las anteriores respuetas es correcta";
 answers[22] = choices[22][3];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2491. NULL";


//  Id pregunta: 2498 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se&ntilde;ale el tipo de prueba que es de caja negra:";
 choices[23]= new Array();
 choices[23][0] = "Prueba de bucles";
 choices[23][1] = "Prueba basada en grafos";
 choices[23][2] = "Prueba del camino b&aacute;sico";
 choices[23][3] = "Prueba de condici&oacute;n";
 answers[23] = choices[23][1];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2498. NULL";


//  Id pregunta: 2553 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  El modelado de Procesos de la Organizaci&oacute;n y el Modelo entidad/relaci&oacute;n extendido se utiliza en la siguiente actividad del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n METRICA V3:";
 choices[24]= new Array();
 choices[24][0] = "Estas t&eacute;cnicas no se utilizan en el PSI";
 choices[24][1] = "PSI6 Dise&ntilde;o de Modelos de Sistemas de Informaci&oacute;n";
 choices[24][2] = "PSI5 Estudio de los sistemas de informaci&oacute;n actuales";
 choices[24][3] = "PSI4 Identificaci&oacute;n de requisitos";
 answers[24] = choices[24][3];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2553. Pregunta Junta Andalucia - A";


//  Id pregunta: 2612 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a de desarrollo de sistemas de informaci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Merise";
 choices[25][1] = "Method I";
 choices[25][2] = "Eurom&eacute;todo";
 choices[25][3] = "Metrica v3";
 answers[25] = choices[25][2];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2612. ";


//  Id pregunta: 2616 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no es un resultado de la fase de DSI en Metrica v3?";
 choices[26]= new Array();
 choices[26][0] = "Glosario";
 choices[26][1] = "Cat&aacute;logo excepciones";
 choices[26][2] = "procedimientos de seguridad y control de acceso";
 choices[26][3] = "Cat&aacute;logo de normas para dise&ntilde;o y construcci&oacute;n";
 answers[26] = choices[26][0];
 units[26] = "86";
 comments[26] = "Id Pregunta: 2616. ";


//  Id pregunta: 2618 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes objetivos no lo es de Metrica v3?";
 choices[27]= new Array();
 choices[27][0] = "Conseguir los fines de la organizaci&oacute;n mediante la definici&oacute;n de un marco estrat&eacute;gico";
 choices[27][1] = "Dotar a la organizaci&oacute;n de productos SW que satisfagan las necesidades de los usuarios";
 choices[27][2] = "Mejorar la productividad de las tecnolog&iacute;as de la informaci&oacute;n y comunicaciones de la organizaci&oacute;n";
 choices[27][3] = "Tener una visi&oacute;n estrat&eacute;gica de la organizaci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2618. NULL";


//  Id pregunta: 2634 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  El  prototipado de sistemas de informaci&oacute;n, seg&uacute;n M&eacute;trica V3.";
 choices[28]= new Array();
 choices[28][0] = "Tiene como objetivo elaborar un modelo o maqueta de las interfaces entre el sistema y el usuario para evaluar el rendimiento y funcionalidad del sistema.";
 choices[28][1] = "Es la t&eacute;cnica principal para obtener un cat&aacute;logo de requisitos del usuario de forma alternativa a la obtenida en la fase del an&aacute;sis del sistema.";
 choices[28][2] = "Es una pr&aacute;ctica cuyo aspecto clave es la identificaci&oacute;n de los usuarios a los que va a dirigir, teniendo en cuenta que debe responder a diferentes individualidades, con distintos conocimientos y habilidades.";
 choices[28][3] = "Se debe centrar en las funciones fundamentales, ignorando aquellos atributos relacionados con el aspecto est&eacute;tico como son el color y el sonido y en general todo aspecto vidual del sistema";
 answers[28] = choices[28][2];
 units[28] = "85,86";
 comments[28] = "Id Pregunta: 2634. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2647 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En la fase de an&aacute;lisis de Metrica v3 se puede afirmar";
 choices[29]= new Array();
 choices[29][0] = "Las fases de de an&aacute;lisis de consistencia y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[29][1] = "Las fases de de an&aacute;lisis de casos de uso y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[29][2] = "Las fases de de an&aacute;lisis de casos de uso y an&aacute;lisis de consistenacia se pueden hacer de forma paralela";
 choices[29][3] = "Las fases de definici&oacute;n del sistema y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 answers[29] = choices[29][1];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2647. NULL";


//  Id pregunta: 2648 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En la fase de an&aacute;lisis de Metrica v3 se puede afirmar";
 choices[30]= new Array();
 choices[30][0] = "Las fases de de an&aacute;lisis de consistencia y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[30][1] = "Las fases de de an&aacute;lisis de casos de uso y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[30][2] = "Las fases de de an&aacute;lisis de casos de uso y an&aacute;lisis de consistenacia se pueden hacer de forma paralela";
 choices[30][3] = "Las fases de definici&oacute;n del sistema y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2648. NULL";


//  Id pregunta: 2649 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Indicar la afirmaci&oacute;n falsa sobre Diagramas de Flujo de Datos";
 choices[31]= new Array();
 choices[31][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[31][1] = "Se pueden representar relaciones entre entidades externas ";
 choices[31][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[31][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[31] = choices[31][1];
 units[31] = "86";
 comments[31] = "Id Pregunta: 2649. NULL";


//  Id pregunta: 2782 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  En M&Eacute;TRICA 3, la definici&oacute;n de la Arquitectura del Sistema, se lleva a cabo en:";
 choices[32]= new Array();
 choices[32][0] = "El An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[32][1] = "La Planificaci&oacute;n de Sistemas.";
 choices[32][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[32][3] = "La Especificaci&oacute;n Funcional del Sistema.";
 answers[32] = choices[32][2];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2782. NULL";


//  Id pregunta: 2784 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  En M&Eacute;TRICA v.3 la seguridad del sistema de informaci&oacute;n se contempla en:";
 choices[33]= new Array();
 choices[33][0] = "La interface de Seguridad y en el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[33][1] = "S&oacute;lo en la interface de Seguridad.";
 choices[33][2] = "En la Planificaci&oacute;n de Sistemas de Informaci&oacute;n y en el Estudio de Viabilidad del Sistema.";
 choices[33][3] = "No est&aacute; contemplada. A este respecto, M&eacute;trica v.3 remite a la metodolog&iacute;a MAGERIT.";
 answers[33] = choices[33][0];
 units[33] = "86";
 comments[33] = "Id Pregunta: 2784. ";


//  Id pregunta: 2788 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  La Normalizaci&oacute;n del modelo de datos...";
 choices[34]= new Array();
 choices[34][0] = "Se lleva a cabo en la fase de PSI.";
 choices[34][1] = "Se lleva a cabo en la fase de DSI.";
 choices[34][2] = "Se lleva a cabo en la fase de ASI.";
 choices[34][3] = "Se lleva  a cabo en la fase de CSI.";
 answers[34] = choices[34][2];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2788. NULL";


//  Id pregunta: 2794 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Seg&uacute;n m&eacute;trica v3, cu&aacute;l de los siguientes productos, resultantes de la fase de An&aacute;lisis del sistema, es propio s&oacute;lo del an&aacute;lisis estructurado";
 choices[35]= new Array();
 choices[35][0] = "Descripci&oacute;n general del entorno tecnol&oacute;gico";
 choices[35][1] = "Especificaci&oacute;n de interfaz de usuario";
 choices[35][2] = "Plan de migraci&oacute;n y carga inicial de datos";
 choices[35][3] = "Descripci&oacute;n de subsistemas de an&aacute;lisis.";
 answers[35] = choices[35][2];
 units[35] = "86";
 comments[35] = "Id Pregunta: 2794. NULL";


//  Id pregunta: 2799 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Qu&eacute; tipos de mantenimiento se definen en M&eacute;trica v3 (considerados o no)?";
 choices[36]= new Array();
 choices[36][0] = "Correctivo, adaptativo, preventivo y perfectivo";
 choices[36][1] = "Correctivo, adaptativo, evolutivo y perfectivo";
 choices[36][2] = "Correctivo, Adaptativo y evolutivo";
 choices[36][3] = "Correctivo, adaptativo y perfectivo";
 answers[36] = choices[36][1];
 units[36] = "86";
 comments[36] = "Id Pregunta: 2799. NULL";


//  Id pregunta: 4263 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Cual de las siguientes afirmaciones es falsa en relacion con las t&eacute;cnicas y pr&aacute;cticas recogidas en Metrica V3?";
 choices[37]= new Array();
 choices[37][0] = "El m&eacute;todo Albretch para el an&aacute;lisis de los puntos de funcion identifica 14 atributos de ajustes al que se le asignan valores de 0 a 5";
 choices[37][1] = "Se  recoge la t&eacute;cnica de gestion de proyectos de diagrama de extrapolaci&oacute;n";
 choices[37][2] = "La t&eacute;cnica Staffing Size se basa en el n&uacute;mero de clases clave y de clases secundarias";
 choices[37][3] = "Se consideran t&eacute;cnicas de sesiones de trabajo el JRP (Joint Requirements Planning) y JAD (Joint Application Design)";
 answers[37] = choices[37][3];
 units[37] = "86";
 comments[37] = "Id Pregunta: 4263. NULL";


//  Id pregunta: 4301 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Un diagrama de transici&oacute;n de estados, utilizando como t&eacute;cnica en M&eacute;trica Versi&oacute;n 3:";
 choices[38]= new Array();
 choices[38][0] = "Puede tener varios estados iniciales y varios estados finales.";
 choices[38][1] = "S&oacute;lo puede tener un estado inicial y un estado final";
 choices[38][2] = "Puede tener varios estados iniciales y s&oacute;lo un estado final.";
 choices[38][3] = "S&oacute;lo puede tener un estado inicial y puede tener varios estados finales.";
 answers[38] = choices[38][3];
 units[38] = "86";
 comments[38] = "Id Pregunta: 4301. NULL";


//  Id pregunta: 4471 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Seg&uacute;n indica m&eacute;trica V3, a la hora de planificar el desarrollo de un sistema de informaci&oacute;n, &iquest;que acci&oacute;n no tendr&iacute;a sentido?";
 choices[39]= new Array();
 choices[39][0] = "Dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 choices[39][1] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 choices[39][2] = "Dise&ntilde;o de los procedimientos de migraci&oacute;n.";
 choices[39][3] = "Identificaci&oacute;n de requisitos.";
 answers[39] = choices[39][2];
 units[39] = "86";
 comments[39] = "Id Pregunta: 4471. NULL";


//  Id pregunta: 4479 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En Ia tarea EVS 4.1: Preselecci&oacute;n de Alternativas de soluci&oacute;n, correspondiente al Estudio de Viabilidad del Sistema (Proceso EVS), definido en m&eacute;trica V3 &iquest;cual de las siguientes t&eacute;cnicas y practicas es la que se recomienda?";
 choices[40]= new Array();
 choices[40][0] = "Casos de uso";
 choices[40][1] = "Diagrama de Flujo de Datos";
 choices[40][2] = "Diagrama de Clases";
 choices[40][3] = "Diagrama de Representaci&oacute;n";
 answers[40] = choices[40][3];
 units[40] = "86";
 comments[40] = "Id Pregunta: 4479. NULL";


//  Id pregunta: 4530 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;CuaI de las siguientes interfaces no corresponde a m&eacute;trica V.3?";
 choices[41]= new Array();
 choices[41][0] = "Gesti&oacute;n de Proyectos (GP)";
 choices[41][1] = "Seguridad (SEG)";
 choices[41][2] = "Control de la planificaci&oacute;n (CP)";
 choices[41][3] = "Gesti&oacute;n de Ia configuraci&oacute;n (GC)";
 answers[41] = choices[41][2];
 units[41] = "86";
 comments[41] = "Id Pregunta: 4530. NULL";


//  Id pregunta: 4728 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[42]= new Array();
 choices[42][0] = "Estudio de Viabilidad del Sistema";
 choices[42][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[42][2] = "Concepci&oacute;n del Sistema";
 choices[42][3] = "Estudio del Sistema Actual";
 answers[42] = choices[42][0];
 units[42] = "86";
 comments[42] = "Id Pregunta: 4728. Examen 2006 JCYL";


//  Id pregunta: 4734 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  A la hora de poner en producci&oacute;n un servicio";
 choices[43]= new Array();
 choices[43][0] = "Conviene realizar las pruebas una vez est&eacute; el servicio en el entorno de producci&oacute;n";
 choices[43][1] = "Conviene realizar las pruebas en el entorno de preexplotaci&oacute;n";
 choices[43][2] = "Conviene realizar las pruebas en el entorno de desarrollo, ya que el entorno de preexplotaci&oacute;n son pruebas de integraci&oacute;n y rendimiento";
 choices[43][3] = "Conviene realizar pruebas modulares en el entorno de preexplotaci&oacute;n, y las restantes en el entorno de producci&oacute;n, junto a los usuarios";
 answers[43] = choices[43][1];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4734. Examen 2006 JCYL";


//  Id pregunta: 4925 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  En M&eacute;trica 3, entre los productos finales obtenidos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n (PSI) NO se incluye:";
 choices[44]= new Array();
 choices[44][0] = "La arquitectura de informaci&oacute;n.";
 choices[44][1] = "La arquitectura tecnol&oacute;gica.";
 choices[44][2] = "El modelo de sistemas de informaci&oacute;n.";
 choices[44][3] = "El an&aacute;lisis del sistema de informaci&oacute;n.";
 answers[44] = choices[44][3];
 units[44] = "86";
 comments[44] = "Id Pregunta: 4925. Examen TIC B 2007";


//  Id pregunta: 4927 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, &iquest;en cu&aacute;l de las siguientes actividades del proceso de Planificaci&oacute;n del Sistema de Informaci&oacute;n participa el jefe del proyecto?:";
 choices[45]= new Array();
 choices[45][0] = "Definici&oacute;n y organizaci&oacute;n del plan de sistemas de informaci&oacute;n.";
 choices[45][1] = "Identificaci&oacute;n de requisitos.";
 choices[45][2] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 choices[45][3] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 answers[45] = choices[45][0];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4927. Examen TIC B 2007";


//  Id pregunta: 4940 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[46]= new Array();
 choices[46][0] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones a&uacute;n sacrificando la velocidad de las lecturas sobre la base de datos.";
 choices[46][1] = "Proporcionar flexibilidad al modelo.";
 choices[46][2] = "Simplificar la implementaci&oacute;n del modelo.";
 choices[46][3] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos.";
 answers[46] = choices[46][3];
 units[46] = "86";
 comments[46] = "Id Pregunta: 4940. Examen TIC B 2007";


//  Id pregunta: 5142 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Indique la secuencia correcta de actividades en que se divide el proceso de Mantenimiento del Sistema de Informaci&oacute;n de M&eacute;trica V3:";
 choices[47]= new Array();
 choices[47][0] = "An&aacute;lisis de la Petici&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[47][1] = "An&aacute;lisis de la Petici&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n.";
 choices[47][2] = "Registro de la Petici&oacute;n -&gt; An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n &gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[47][3] = "An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n.";
 answers[47] = choices[47][2];
 units[47] = "86";
 comments[47] = "Id Pregunta: 5142. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5177 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En lo referente a las t&eacute;cnicas de sesiones JAD y JRP. Es cierto que:";
 choices[48]= new Array();
 choices[48][0] = "Son t&eacute;cnicas que promueven la cooperaci&oacute;n entre los usuarios y los desarrolladores para lograr que ambas partes compartan una visi&oacute;n com&uacute;n";
 choices[48][1] = "JRP se usa para el dise&ntilde;o conjunto de aplicaciones";
 choices[48][2] = "JAD se usa para la planificaci&oacute;n de requisitos";
 choices[48][3] = "Todas son ciertas";
 answers[48] = choices[48][0];
 units[48] = "78,86";
 comments[48] = "Id Pregunta: 5177. ";


//  Id pregunta: 5218 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En qu&eacute; proceso no se utiliza la t&eacute;cnica de Diagrama de Clases";
 choices[49]= new Array();
 choices[49][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[49][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[49][2] = "Estudio de Viabilidad del Sistema";
 choices[49][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 answers[49] = choices[49][3];
 units[49] = "86";
 comments[49] = "Id Pregunta: 5218. NULL";


//  Id pregunta: 5221 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de los siguientes elementos es una pr&aacute;ctica utilizada en m&eacute;trica 3";
 choices[50]= new Array();
 choices[50][0] = "Diagrama de Clases";
 choices[50][1] = "Diagrama de Componentes";
 choices[50][2] = "Revisi&oacute;n T&eacute;cnica";
 choices[50][3] = "Normalizaci&oacute;n";
 answers[50] = choices[50][2];
 units[50] = "86";
 comments[50] = "Id Pregunta: 5221. NULL";


//  Id pregunta: 6053 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[51]= new Array();
 choices[51][0] = "Planificaci&oacute;n del alcance.";
 choices[51][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[51][2] = "Definici&oacute;n del alcance.";
 choices[51][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 6053. TIC A 2009";


//  Id pregunta: 6094 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, pueden identificarse 4 tipos de mantenimiento de sistemas de informaci&oacute;n, entre los que NO se encuentra:";
 choices[52]= new Array();
 choices[52][0] = "Mantenimiento adaptativo.";
 choices[52][1] = "Mantenimiento preventivo.";
 choices[52][2] = "Mantenimiento evolutivo.";
 choices[52][3] = "Mantenimiento correctivo.";
 answers[52] = choices[52][1];
 units[52] = "86";
 comments[52] = "Id Pregunta: 6094. TIC A 2009";


//  Id pregunta: 6124 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[53]= new Array();
 choices[53][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[53][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[53][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[53][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros";
 answers[53] = choices[53][3];
 units[53] = "86";
 comments[53] = "Id Pregunta: 6124. TIC A 2009";


//  Id pregunta: 6200 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Seg&uacute;n M&eacute;trica 3, el diagrama de estructura define posibles estructuras que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos; &iquest;cu&aacute;l de las siguientes es una de ellas?";
 choices[54]= new Array();
 choices[54][0] = "Continua";
 choices[54][1] = "Dispersa";
 choices[54][2] = "en &Aacute;rbol";
 choices[54][3] = "Alternativa";
 answers[54] = choices[54][3];
 units[54] = "86";
 comments[54] = "Id Pregunta: 6200. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6249 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta, de acuerdo con M&eacute;trica 3?";
 choices[55]= new Array();
 choices[55][0] = "El objetivo de la gesti&oacute;n de la configuraci&oacute;n es mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realicen cambios";
 choices[55][1] = "Ejecutables y c&oacute;digo fuente son elementos de configuraci&oacute;n software pero no lo son las especificaciones de requisitos";
 choices[55][2] = "La gesti&oacute;n de configuraci&oacute;n se realiza durante todas las actividades asociadas al desarrollo del sistema, y contin&uacute;a registrando los cambios hasta que &eacute;ste deja de utilizarse";
 choices[55][3] = "La gesti&oacute;n de configuraci&oacute;n aporta informaci&oacute;n precisa para valorar el impacto de los cambios en el mantenimiento correctivo. La gesti&oacute;n de configuraci&oacute;n no contempla el mantenimiento evolutivo";
 answers[55] = choices[55][2];
 units[55] = "86";
 comments[55] = "Id Pregunta: 6249. TICB-2009, bloque desarrollo";


//  Id pregunta: 8206 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[56]= new Array();
 choices[56][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[56][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas yOperaciones.";
 choices[56][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad,Sistemas y Operaciones.";
 choices[56][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[56] = choices[56][0];
 units[56] = "86";
 comments[56] = "Id Pregunta: 8206. Examen TIC A1 2010";


//  Id pregunta: 8337 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes tareas NO se engloba, en M&eacute;trica v3, en la actividad de Planificaci&oacute;n de la Interfaz de Gesti&oacute;n de Proyectos?";
 choices[57]= new Array();
 choices[57][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[57][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[57][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios. ";
 choices[57][3] = "Planificaci&oacute;n Detallada de las pruebas del Sistema. ";
 answers[57] = choices[57][3];
 units[57] = "86";
 comments[57] = "Id Pregunta: 8337. Examen TIC A2 2010";


//  Id pregunta: 8338 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[58]= new Array();
 choices[58][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[58][1] = "PERT.";
 choices[58][2] = "CPM.";
 choices[58][3] = "El histograma de recursos.";
 answers[58] = choices[58][0];
 units[58] = "86";
 comments[58] = "Id Pregunta: 8338. Examen TIC A2 2010";


//  Id pregunta: 8339 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[59]= new Array();
 choices[59][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[59][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[59][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[59][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[59] = choices[59][3];
 units[59] = "86";
 comments[59] = "Id Pregunta: 8339. Examen TIC A2 2010";


//  Id pregunta: 8346 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Qu&eacute; pruebas tienen como objetivo comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados?";
 choices[60]= new Array();
 choices[60][0] = "Pruebas unitarias.";
 choices[60][1] = "Pruebas del Sistema.";
 choices[60][2] = "Pruebas de Implantaci&oacute;n.";
 choices[60][3] = "Pruebas de Regresi&oacute;n.";
 answers[60] = choices[60][3];
 units[60] = "86";
 comments[60] = "Id Pregunta: 8346. Examen TIC A2 2010";


//  Id pregunta: 8347 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA 3, en la tarea &quot;Preparaci&oacute;n del Entorno de Construcci&oacute;n&quot; participan:";
 choices[61]= new Array();
 choices[61][0] = "Programadores, T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[61][1] = "T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[61][2] = "Equipo del Proyecto, T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[61][3] = "Programadores, Equipo de Arquitectura, Administradores de Bases de Datos.";
 answers[61] = choices[61][2];
 units[61] = "86";
 comments[61] = "Id Pregunta: 8347. Examen TIC A2 2010";


//  Id pregunta: 8358 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l de &eacute;stas es una de las funciones del Grupo de Aseguramiento de la Calidad (seg&uacute;n M&eacute;trica v3): ";
 choices[62]= new Array();
 choices[62][0] = "Definir los recursos que se necesitan para instalar el sistema.";
 choices[62][1] = "Identificar las posibles desviac&iacute;ones en los est&aacute;ndares aplicados, as&iacute; como en los requisitos y procedimientos especificados.";
 choices[62][2] = "Notificar a los desarrolladores de las anomal&iacute;as encontradas en el proceso de desarrollo.";
 choices[62][3] = "Documentar las pruebas seg&uacute;n el est&aacute;ndar ISO 9000:2000.";
 answers[62] = choices[62][1];
 units[62] = "86";
 comments[62] = "Id Pregunta: 8358. Examen TIC A2 2010";


//  Id pregunta: 8389 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;En cual de las siguientes pruebas interviene el usuario final?";
 choices[63]= new Array();
 choices[63][0] = "Pruebas de Caja Blanca.";
 choices[63][1] = "Pruebas de Aceptaci&oacute;n.";
 choices[63][2] = "Pruebas de Implantaci&oacute;n.";
 choices[63][3] = "Pruebas de Regresi&oacute;n.";
 answers[63] = choices[63][1];
 units[63] = "86";
 comments[63] = "Id Pregunta: 8389. Examen TIC A2 2010";


//  Id pregunta: 8517 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[64]= new Array();
 choices[64][0] = "El Diccionario de Datos.";
 choices[64][1] = "El Diagrama de Flujo de Datos.";
 choices[64][2] = "Las especificaciones de procesos.";
 choices[64][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[64] = choices[64][3];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8517. Examen TIC A2 2010 interna";


//  Id pregunta: 8518 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Indicar la respuesta correcta respecto al diagrama de flujo de datos:";
 choices[65]= new Array();
 choices[65][0] = "Un proceso de control puede ser el origen de los datos pero nunca el final de los datos.";
 choices[65][1] = "El flujo de di&aacute;logo se representa por una flecha discontinua que indica la direcci&oacute;n de los datos, y que se etiqueta con un nombre representativo.";
 choices[65][2] = "Un flujo de di&aacute;logo es un flujo entre un proceso y un almac&eacute;n que representa una consulta y una actualizaci&oacute;n.";
 choices[65][3] = "Un proceso de control se encarga de coordinar y sincronizar los accesos a los almacenes de datos.";
 answers[65] = choices[65][2];
 units[65] = "86";
 comments[65] = "Id Pregunta: 8518. Examen TIC A2 2010 interna";


//  Id pregunta: 8632 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes actividades NO pertenece a la Gesti&oacute;n del Proyecto seg&uacute;n M&eacute;trica v3?";
 choices[66]= new Array();
 choices[66][0] = "Identificaci&oacute;n de las Propiedades de Calidad.";
 choices[66][1] = "Planificaci&oacute;n.";
 choices[66][2] = "Cierre del Proyecto.";
 choices[66][3] = "Estimaci&oacute;n de Esfuerzo.";
 answers[66] = choices[66][0];
 units[66] = "86";
 comments[66] = "Id Pregunta: 8632. Examen TIC A2 2010 interna";


//  Id pregunta: 8649 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Seg&uacute;n M&eacute;trica v3. &iquest;cu&aacute;l de las siguientes listas esta correctamente ordenada de mayor a menor acoplamiento?";
 choices[67]= new Array();
 choices[67][0] = "De contenido, com&uacute;n, de control, externo, de datos.";
 choices[67][1] = "De datos, de marca, externo, de control, com&uacute;n, de contenido";
 choices[67][2] = "De datos, de marca, de control, externo, com&uacute;n, de contenido";
 choices[67][3] = "De contenido, com&uacute;n, externo, de marca, de datos";
 answers[67] = choices[67][3];
 units[67] = "86";
 comments[67] = "Id Pregunta: 8649. Examen TIC A2 2010 interna";


//  Id pregunta: 8650 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; perfil es el encargado de la tarea de M&eacute;trica v3 &quot;Definici&oacute;n del Esquema de Formaci&oacute;n&quot;?";
 choices[68]= new Array();
 choices[68][0] = "Analista.";
 choices[68][1] = "Consultor.";
 choices[68][2] = "Analista-programador.";
 choices[68][3] = "Programador.";
 answers[68] = choices[68][0];
 units[68] = "86";
 comments[68] = "Id Pregunta: 8650. Examen TIC A2 2010 interna";


//  Id pregunta: 8814 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de estos procesos de M&eacute;trica 3 contiene actividades diferentes dependiendo de si se trata de un desarrollo estructurado u orientado a objetos?";
 choices[69]= new Array();
 choices[69][0] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 choices[69][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[69][2] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[69][3] = "Ninguno de los anteriores";
 answers[69] = choices[69][1];
 units[69] = "86";
 comments[69] = "Id Pregunta: 8814. Examen UPM A2 2011";


//  Id pregunta: 8863 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[70]= new Array();
 choices[70][0] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos";
 choices[70][1] = "Proporcionar flexibilidad al modelo";
 choices[70][2] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones";
 choices[70][3] = "Proporcionar independencia del sistema gestor de base de datos";
 answers[70] = choices[70][0];
 units[70] = "86";
 comments[70] = "Id Pregunta: 8863. Analista Ayto. Madrid 2010";


//  Id pregunta: 9046 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  C&uacute;al no es un interfaz en M&eacute;trica v3";
 choices[71]= new Array();
 choices[71][0] = "Gesti&oacute;n de la Configuraci&oacute;n";
 choices[71][1] = "Seguridad Integral";
 choices[71][2] = "Gesti&oacute;n del Cambio";
 choices[71][3] = "Aseguramiento de la Calidad";
 answers[71] = choices[71][2];
 units[71] = "86";
 comments[71] = "Id Pregunta: 9046. NULL";


//  Id pregunta: 9184 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes es un Proceso Principal de M&eacute;trica 3?";
 choices[72]= new Array();
 choices[72][0] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[72][1] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[72][2] = "Estudio de Viabilidad del Sistema";
 choices[72][3] = "Ninguno";
 answers[72] = choices[72][0];
 units[72] = "86";
 comments[72] = "Id Pregunta: 9184. NULL";


//  Id pregunta: 9444 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  En relaci&oacute;n al proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n (ASI) de M&eacute;trica v.3, un producto de la actividad Establecimiento de Requisitos es:";
 choices[73]= new Array();
 choices[73][0] = "Modelo conceptual de datos.";
 choices[73][1] = "Modelo de casos de uso.";
 choices[73][2] = "Cat&aacute;logo de usuarios.";
 choices[73][3] = "Cat&aacute;logo de excepciones.";
 answers[73] = choices[73][1];
 units[73] = "86";
 comments[73] = "Id Pregunta: 9444. Examen AGE TIC A1 2011";


//  Id pregunta: 9734 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Top-down.";
 choices[74][1] = "Sandwich.";
 choices[74][2] = "Big-Bang";
 choices[74][3] = "Bottom-up.";
 answers[74] = choices[74][2];
 units[74] = "86";
 comments[74] = "Id Pregunta: 9734. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9754 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  La tarea de especificaci&oacute;n de necesidades de Migraci&oacute;n en M&eacute;trica v3 se tiene en cuenta en la actividad:";
 choices[75]= new Array();
 choices[75][0] = "Elaboraci&oacute;n del modelo de datos en ASI";
 choices[75][1] = "Dise&ntilde;o de clases en DSI";
 choices[75][2] = "Dise&ntilde;o de la Migraci&oacute;n y carga inicial de datos en DSI";
 choices[75][3] = "A y B son correctas";
 answers[75] = choices[75][3];
 units[75] = "86";
 comments[75] = "Id Pregunta: 9754. Ambas actividades tienen una tarea llamada &quot;Especificaci&oacute;n de necesidades de Migraci&oacute;n y Carga inicial de datos&quot;";


//  Id pregunta: 9755 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En M&eacute;trica v3, la actividad &quot;Establecimiento de requisitos de implantaci&oacute;n&quot; se lleva a cabo en:";
 choices[76]= new Array();
 choices[76][0] = "ASI";
 choices[76][1] = "DSI";
 choices[76][2] = "IAS";
 choices[76][3] = "ASI y DSI";
 answers[76] = choices[76][1];
 units[76] = "86";
 comments[76] = "Id Pregunta: 9755. Actividad DSI.11. El resto de actividades referentes a implantaci&oacute;n se llevan a cabo en IAS";


//  Id pregunta: 9757 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En M&eacute;trica v3, la Especificaci&oacute;n del Plan de pruebas de Regresi&oacute;n se realiza en:";
 choices[77]= new Array();
 choices[77][0] = "ASI";
 choices[77][1] = "DSI";
 choices[77][2] = "CSI";
 choices[77][3] = "MSI";
 answers[77] = choices[77][3];
 units[77] = "86";
 comments[77] = "Id Pregunta: 9757. MSI.3 &quot;Preparaci&oacute;n de la implementaci&oacute;n de la modificaci&oacute;n&quot; incluye una tarea &quot;Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n&quot;";


//  Id pregunta: 9873 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  De acuerdo con Metrica v3, en el Diagrama de Transici&oacute;n de Estados,";
 choices[78]= new Array();
 choices[78][0] = "no puede haber ninguna transici&oacute;n dirigida al estado inicial.";
 choices[78][1] = "solo puede haber un estado final.";
 choices[78][2] = "una acci&oacute;n no se puede ejecutar dentro de un estado.";
 choices[78][3] = "un diagrama puede tener varios estados in&iacute;ciales.";
 answers[78] = choices[78][0];
 units[78] = "86";
 comments[78] = "Id Pregunta: 9873. TIC A1, Examen 2013";


//  Id pregunta: 9901 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En relaci&oacute;n a los participantes de la metodolog&iacute;a M&eacute;trica v3, aquellos cuya funci&oacute;n es asesorar en las cuestiones en las que tienen un conocimiento especializado se denominan";
 choices[79]= new Array();
 choices[79][0] = "Consultores.";
 choices[79][1] = "Expertos.";
 choices[79][2] = "Analistas.";
 choices[79][3] = "Jefes de Proyecto.";
 answers[79] = choices[79][0];
 units[79] = "86";
 comments[79] = "Id Pregunta: 9901. TIC A2, Examen 2013";


//  Id pregunta: 9908 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En M&eacute;trica v3 existe una interfaz de &quot;Aseguramiento de la Calidad&quot;. Indique la afirmaci&oacute;n correcta sobre dicho interfaz:";
 choices[80]= new Array();
 choices[80][0] = "Para cada uno de los procesos que se definen en el interfaz se establecen un conjunto de tareas que se desarrollan mediante la ejecuci&oacute;n de diversas actividades.";
 choices[80][1] = "El Grupo de Aseguramiento de la Calidad no participa en todos los procesos que se describen en el interfaz.";
 choices[80][2] = "La &quot;Constituci&oacute;n del equipo de aseguramiento de la calidad&quot; se realiza dentro del proceso de Estudio de Viabilidad del Sistema del interfaz.";
 choices[80][3] = "La aplicaci&oacute;n de dicho interfaz es de obligado cumplimiento para los organismos dependientes de la AGE, seg&uacute;n la Ley 28/2006, de 18 de julio, por la que se crea la Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de losServicios.";
 answers[80] = choices[80][2];
 units[80] = "86";
 comments[80] = "Id Pregunta: 9908. TIC A2, Examen 2013";


//  Id pregunta: 9910 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Se&ntilde;ale cu&aacute;l de las siguientes es una t&eacute;cnica de desarrollo seg&uacute;n M&eacute;trica v3:";
 choices[81]= new Array();
 choices[81][0] = "T&eacute;cnicas Matriciales.";
 choices[81][1] = "M&eacute;todo Albrecht.";
 choices[81][2] = "An&aacute;lisis de Impacto.";
 choices[81][3] = "Caminos de Acceso.";
 answers[81] = choices[81][0];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9910. TIC A2, Examen 2013";


//  Id pregunta: 9916 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Se&ntilde;ale cu&aacute;l de las siguientes NO es un tipo de conexi&oacute;n v&aacute;lida entre un proceso y un almac&eacute;n de datos de un DFD (diagrama de flujo de datos), seg&uacute;n M&eacute;trica v3:";
 choices[82]= new Array();
 choices[82][0] = "Flujo de consulta.";
 choices[82][1] = "Flujo de actualizaci&oacute;n.";
 choices[82][2] = "Flujo de di&aacute;logo.";
 choices[82][3] = "Flujo de sincronizaci&oacute;n.";
 answers[82] = choices[82][3];
 units[82] = "86";
 comments[82] = "Id Pregunta: 9916. TIC A2, Examen 2013";


//  Id pregunta: 9917 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[83]= new Array();
 choices[83][0] = "S&iacute;, mediante un flujo de datos.";
 choices[83][1] = "S&iacute;, mediante un flujo de control.";
 choices[83][2] = "Si, mediante un proceso iterativo.";
 choices[83][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[83] = choices[83][1];
 units[83] = "86";
 comments[83] = "Id Pregunta: 9917. TIC A2, Examen 2013";


//  Id pregunta: 9918 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[84]= new Array();
 choices[84][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[84][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[84][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[84][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[84] = choices[84][1];
 units[84] = "86, 58";
 comments[84] = "Id Pregunta: 9918. TIC A2, Examen 2013";


//  Id pregunta: 9947 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[85]= new Array();
 choices[85][0] = "Jefe de Proyecto";
 choices[85][1] = "Consultor";
 choices[85][2] = "Analista";
 choices[85][3] = "Programador";
 answers[85] = choices[85][0];
 units[85] = "86";
 comments[85] = "Id Pregunta: 9947. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9948 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En M&eacute;trica v3, para la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot;, el producto de salida espec&iacute;fico en orientaci&oacute;n a objeto es:";
 choices[86]= new Array();
 choices[86][0] = "Cat&aacute;logo de clases. ";
 choices[86][1] = "Cat&aacute;logo de entidades";
 choices[86][2] = "Cat&aacute;logo de miembros. ";
 choices[86][3] = "Cat&aacute;logo de interfaces.";
 answers[86] = choices[86][0];
 units[86] = "86";
 comments[86] = "Id Pregunta: 9948. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9950 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes actividades forma parte de la Planificaci&oacute;n de los Sistemas de Informaci&oacute;n seg&uacute;n M&eacute;trica 3?";
 choices[87]= new Array();
 choices[87][0] = "Estudio de los Sistemas de Informaci&oacute;n Actuales. ";
 choices[87][1] = "Definici&oacute;n de los Requisitos del Sistema.";
 choices[87][2] = "Valoraci&oacute;n de Alternativas.";
 choices[87][3] = "Definici&oacute;n del sistema. ";
 answers[87] = choices[87][0];
 units[87] = "86";
 comments[87] = "Id Pregunta: 9950. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9953 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Dentro del perfil analista de M&eacute;trica v3 se agrupa uno de los siguientes participantes:";
 choices[88]= new Array();
 choices[88][0] = "Especialista en Comunicaciones";
 choices[88][1] = "Usuarios expertos";
 choices[88][2] = "T&eacute;cnicos de Comunicaciones. ";
 choices[88][3] = "Grupo de Aseguramiento de la Calidad";
 answers[88] = choices[88][3];
 units[88] = "86";
 comments[88] = "Id Pregunta: 9953. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10020 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En M&eacute;trica v3, &iquest;qui&eacute;n lleva a cabo las pruebas en la tarea IAS 6.2 &quot;realizaci&oacute;n de las pruebas de aceptaci&oacute;n&quot;?";
 choices[89]= new Array();
 choices[89][0] = "Usuarios expertos.";
 choices[89][1] = "Directores de los usuarios.";
 choices[89][2] = "Equipo de calidad.";
 choices[89][3] = "Equipo de implantaci&oacute;n.";
 answers[89] = choices[89][0];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10020. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10821 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En M&eacute;trica 3, el &quot;t&eacute;cnico de sistemas&quot; est&aacute; incluido en el perfil:";
 choices[90]= new Array();
 choices[90][0] = "Consultor.";
 choices[90][1] = "Analista.";
 choices[90][2] = "Programador.";
 choices[90][3] = "Jefe de Proyecto.";
 answers[90] = choices[90][0];
 units[90] = "86";
 comments[90] = "Id Pregunta: 10821. Examen GSI 2014";


//  Id pregunta: 10823 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[91]= new Array();
 choices[91][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[91][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[91][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[91][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[91] = choices[91][2];
 units[91] = "86";
 comments[91] = "Id Pregunta: 10823. Examen GSI 2014";


//  Id pregunta: 10865 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[92][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[92][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[92][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[92] = choices[92][1];
 units[92] = "86, 81, 82";
 comments[92] = "Id Pregunta: 10865. Examen GSI 2014";


//  Id pregunta: 10989 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;A qu&eacute; perfil corresponde en M&eacute;trica 3 la persona que asesora en los aspectos de seguridad y calidad relativos al producto y al proceso seguido para su obtenci&oacute;n, identifica y analiza los riesgos y determina las medidas de control oportunas?";
 choices[93]= new Array();
 choices[93][0] = "Perfil Consultor.";
 choices[93][1] = "Perfil Directivo.";
 choices[93][2] = "Perfil Analista.";
 choices[93][3] = "Perfil Jefe de Proyecto.";
 answers[93] = choices[93][3];
 units[93] = "86";
 comments[93] = "Id Pregunta: 10989. TIC A1 AGE 2014";


//  Id pregunta: 11160 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;A qu&eacute; fase corresponde la Tarea &ldquo;Presentaci&oacute;n y aprobaci&oacute;n del Sistema de Informaci&oacute;n&rdquo; seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[94]= new Array();
 choices[94][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[94][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[94][2] = "Aseguramiento de la Calidad";
 choices[94][3] = "Gesti&oacute;n de Proyectos";
 answers[94] = choices[94][1];
 units[94] = "86";
 comments[94] = "Id Pregunta: 11160. ";


//  Id pregunta: 11304 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n se define en M&eacute;trica, la t&eacute;cnica de reglas de transformaci&oacute;n, permite transformar cada elemento del modelo de clases en un elemento del modelo f&iacute;sico. Se&ntilde;ale de los indicados a continuaci&oacute;n cu&aacute;l no es una regla de transformaci&oacute;n contemplada";
 choices[95]= new Array();
 choices[95][0] = "Transformaci&oacute;n de clases";
 choices[95][1] = "Transformaci&oacute;n de atributos de clases";
 choices[95][2] = "Transformaci&oacute;n de relaciones inclusivas";
 choices[95][3] = "Transformaci&oacute;n de la herencia";
 answers[95] = choices[95][2];
 units[95] = "86";
 comments[95] = "Id Pregunta: 11304. No existe. S&iacute; existe la transformaci&oacute;n de relaciones exclusivas. ";


//  Id pregunta: 11539 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la metodolog&iacute;a m&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes funciones NO le correspondel al Jefe de Proyecto?";
 choices[96]= new Array();
 choices[96][0] = "Seleccionar la estrategia de desarrollo (modelo de ciclo de vida) y determinar los procesos, actividades y tareas que integran el proyecto (mapa de actividades).";
 choices[96][1] = "Ofrecer una opini&oacute;n experta relativa a los requisitos del negocio, t&eacute;cnicos y de usuario que han de tenerse en cuenta en el desarrollo del sistema de informaci&oacute;n.";
 choices[96][2] = "Estimar el esfuerzo necesario para llevar a cabo el proyecto.";
 choices[96][3] = "Le corresponden todas las funciones anteriores.";
 answers[96] = choices[96][1];
 units[96] = "86";
 comments[96] = "Id Pregunta: 11539. La B, son funciones propias del perfil consultor.";


//  Id pregunta: 11543 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la FALSA respecto al Diagrama de Extrapolaci&oacute;n:";
 choices[97]= new Array();
 choices[97][0] = "Se basa en la hip&oacute;tesis de que si existe una desviaci&oacute;n, su tendencia es a permanecer o empeorar a no ser que se tomen las medidas oportunas.";
 choices[97][1] = "Trata de estimar la nueva fecha de fin del proyecto extrapolando la tendencia constatada en un momento determinado del desarrollo.";
 choices[97][2] = "Se utiliza para obtener previsiones de las desviaciones en el esfuerzo de desarrollo de un proyecto y para realizar el seguimiento del proyecto.";
 choices[97][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[97] = choices[97][2];
 units[97] = "86";
 comments[97] = "Id Pregunta: 11543. NULL";


//  Id pregunta: 11551 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n M&eacute;trica v3, las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos, se denomina:";
 choices[98]= new Array();
 choices[98][0] = "Reingenier&iacute;a de sistemas.";
 choices[98][1] = "Mantenimiento Perfectivo.";
 choices[98][2] = "Reestructuraci&oacute;n del Software.";
 choices[98][3] = "Mantenimiento Preventivo.";
 answers[98] = choices[98][1];
 units[98] = "86";
 comments[98] = "Id Pregunta: 11551. NULL";


//  Id pregunta: 11636 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n M&eacute;trica v3, el an&aacute;lisis coste/beneficio es una:";
 choices[99]= new Array();
 choices[99][0] = "Pr&aacute;ctica";
 choices[99][1] = "T&eacute;cnica de desarrollo";
 choices[99][2] = "T&eacute;cnica de gesti&oacute;n de proyectos";
 choices[99][3] = "Ninguna de las anteriores es correcta";
 answers[99] = choices[99][1];
 units[99] = "86";
 comments[99] = "Id Pregunta: 11636. ";


