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

//  Id pregunta: 1996 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  La metodolog&iacute;a METRICA V3 considera que la t&eacute;cnica de estimaci&oacute;n del esfuerzo m&aacute;s adecuada en el desarrollo del software es:";
 choices[0]= new Array();
 choices[0][0] = "La t&eacute;cnica de los puntos de funci&oacute;n poligonial";
 choices[0][1] = "La t&eacute;cnica de los puntos de funci&oacute;n 3D";
 choices[0][2] = "La t&eacute;cnica de los puntos caracter&iacute;sticos";
 choices[0][3] = "La t&eacute;cnica de los puntos de funci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "86";
 comments[0] = "Id Pregunta: 1996. Pregunta TIC-B 2004";


//  Id pregunta: 2016 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre diagramas es cierta?";
 choices[1]= new Array();
 choices[1][0] = "Los flujogramas de sistema se utilizaban en aplicaciones batch, y en aplicaciones interactivas se emplean los DFDs";
 choices[1][1] = "En un flujograma de sistema los datos se representan a nivel de archivo, nunca menor";
 choices[1][2] = "Cada &quot;caja&quot; de un flujograma de sistema se descompone necesariamente en un flujograma de programa";
 choices[1][3] = "Un proceso de un DFD no puede generar m&aacute;s que un flujograma de programa";
 answers[1] = choices[1][2];
 units[1] = "86";
 comments[1] = "Id Pregunta: 2016. Examen TIC MAP B 2004";


//  Id pregunta: 2067 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;En qu&eacute; fase se hace el modelo l&oacute;gico de datos?";
 choices[2]= new Array();
 choices[2][0] = "Dise&ntilde;o";
 choices[2][1] = "Estudio de viabilidad";
 choices[2][2] = "An&aacute;lisis orientado a objetos";
 choices[2][3] = "An&aacute;lisis estructurado";
 answers[2] = choices[2][3];
 units[2] = "86";
 comments[2] = "Id Pregunta: 2067. SS-A 2004";


//  Id pregunta: 2107 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[3]= new Array();
 choices[3][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[3][1] = "El responsable de mantenimiento y el jefe de proyecto";
 choices[3][2] = "El equipo de mantenimiento y el jefe de proyecto ";
 choices[3][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios";
 answers[3] = choices[3][2];
 units[3] = "86";
 comments[3] = "Id Pregunta: 2107. Pregunta Junta Andalucia - A";


//  Id pregunta: 2436 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La versi&oacute;n 3 de la metodolog&iacute;a M&eacute;trica:";
 choices[4]= new Array();
 choices[4][0] = "Cubre tanto desarrollos estructurados como desarrollos orientados a objetos ";
 choices[4][1] = "Cubre exclusivamente desarrollos estructurados";
 choices[4][2] = "Cubre exclusivamente desarrollos orientados a objetos";
 choices[4][3] = "Cubre exclusivamente desarrollos orientados a entornos microinform&aacute;ticos";
 answers[4] = choices[4][0];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2436. NULL";


//  Id pregunta: 2439 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Las consideraciones sobre an&aacute;lisis coste/beneficio y an&aacute;lisis de riesgos, corresponden a la siguiente &aacute;rea de un proyecto inform&aacute;tico:";
 choices[5]= new Array();
 choices[5][0] = "Planificaci&oacute;n del proyecto";
 choices[5][1] = "An&aacute;lisis de viabilidad";
 choices[5][2] = "Dise&ntilde;o de la soluci&oacute;n";
 choices[5][3] = "Seguimiento del proyecto";
 answers[5] = choices[5][1];
 units[5] = "86";
 comments[5] = "Id Pregunta: 2439. NULL";


//  Id pregunta: 2466 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  M&eacute;trica V3 define m&uacute;ltiples actividades. &iquest;Puede identificar alguna?:";
 choices[6]= new Array();
 choices[6][0] = "Dise&ntilde;o de clases";
 choices[6][1] = "Dise&ntilde;o del modelo f&iacute;sico de datos";
 choices[6][2] = "Dise&ntilde;o del sistema de informaci&oacute;n";
 choices[6][3] = "Ninguna de las anteriores es una actividad de M&eacute;trica V3";
 answers[6] = choices[6][0];
 units[6] = "86";
 comments[6] = "Id Pregunta: 2466. NULL";


//  Id pregunta: 2516 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Utilizando la funcionalidad como criterio principal, las herramientas CASE pueden agruparse en: Herramientas de planificaci&oacute;n de sistemas, Herramientas de an&aacute;lisis y dise&ntilde;o, Herramientas de programaci&oacute;n, Herramientas de integraci&oacute;n y prueba, y Herramientas:";
 choices[7]= new Array();
 choices[7][0] = "Herramientas de mantenimiento";
 choices[7][1] = "Herramientas de gesti&oacute;n de prototipos";
 choices[7][2] = "Herramientas de integraci&oacute;n y prueba";
 choices[7][3] = "Herramientas de programaci&oacute;n";
 answers[7] = choices[7][0];
 units[7] = "86";
 comments[7] = "Id Pregunta: 2516. NULL";


//  Id pregunta: 2597 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[8]= new Array();
 choices[8][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n.";
 choices[8][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n.";
 choices[8][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n.";
 choices[8][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n.";
 answers[8] = choices[8][0];
 units[8] = "86";
 comments[8] = "Id Pregunta: 2597. Junta Andaluc&iacute;a";


//  Id pregunta: 2617 AÃ±o de creación de pregunta: 2003-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no pertenece al perfil de analista seg&uacute;n Metrica v3?";
 choices[9]= new Array();
 choices[9][0] = "Administrador de base de datos";
 choices[9][1] = "T&eacute;cnico de comunicaciones";
 choices[9][2] = "Equipo de proyecto";
 choices[9][3] = "Equipo de operaci&oacute;n";
 answers[9] = choices[9][1];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2617. NULL";


//  Id pregunta: 2628 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  &iquest;En q&uacute;e proceso de M&eacute;trica V3 se llevaria a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procesamientos de migraci&oacute;n y carga inicial de datos?";
 choices[10]= new Array();
 choices[10][0] = "CSI.";
 choices[10][1] = "DSI";
 choices[10][2] = "IAS.";
 choices[10][3] = "DCS.";
 answers[10] = choices[10][0];
 units[10] = "86";
 comments[10] = "Id Pregunta: 2628. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2637 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  El plan de sistemas de informaci&oacute;n de M&eacute;trica v3 ";
 choices[11]= new Array();
 choices[11][0] = "debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[11][1] = "incluye actividades tales como 'generaci&oacute;n de especificaciones de construcci&oacute;n', 'dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema',y 'especificaci&oacute;n t&eacute;cnica del plan de pruebas'";
 choices[11][2] = "tiene una perspectiva estrat&eacute;gica y opertaiva, pero no tecnol&oacute;gica";
 choices[11][3] = "no requeire la participaci&oacute;n del responasble de mantenimiento";
 answers[11] = choices[11][2];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2637. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2783 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  En M&Eacute;TRICA 3, la definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales se lleva a cabo en:";
 choices[12]= new Array();
 choices[12][0] = "La Planificaci&oacute;n de Sistemas.";
 choices[12][1] = "La Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[12][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[12][3] = "La Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 answers[12] = choices[12][1];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2783. NULL";


//  Id pregunta: 2790 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  La actividad de &quot;Verificaci&oacute;n y Aceptaci&oacute;n de la Arquitectura del Sistema &quot;";
 choices[13]= new Array();
 choices[13][0] = "Es anterior a la de &quot;Dise&ntilde;o f&iacute;sico de datos&quot;.";
 choices[13][1] = "Es posterior a la de &quot;Dise&ntilde;o de la Migraci&oacute;n y Carga Inicial de Datos&quot;.";
 choices[13][2] = "Es simult&aacute;nea a la de &quot;Dise&ntilde;o f&iacute;sico de datos&quot;.";
 choices[13][3] = "Es anterior a la de &quot;Generaci&oacute;n de Especificaciones de Construcci&oacute;n&quot;.";
 answers[13] = choices[13][3];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2790. NULL";


//  Id pregunta: 2792 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  En cuanto al proceso de desarrollo de sistemas en M&eacute;trica v3. Cu&aacute;l de los siguientes subprocesos no est&aacute; contemplado";
 choices[14]= new Array();
 choices[14][0] = "DSI";
 choices[14][1] = "PSI";
 choices[14][2] = "CSI";
 choices[14][3] = "Todos est&aacute;n contemplados";
 answers[14] = choices[14][1];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2792. NULL";


//  Id pregunta: 4294 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  M&eacute;trica versi&oacute;n 3:";
 choices[15]= new Array();
 choices[15][0] = "No establece diferencias entre los desarrollos orientados a objetos y los desarrollos estructurados.";
 choices[15][1] = "Cubre desarrollos estructurados y de orientaci&oacute;n a objetos";
 choices[15][2] = "Establece en el Proceso de Desarrollo de Sistemas de informaci&oacute;n 3 Procesos (EVS, DSI y CSI).";
 choices[15][3] = "No cubre desarrollos orientados a objeto";
 answers[15] = choices[15][1];
 units[15] = "86";
 comments[15] = "Id Pregunta: 4294. NULL";


//  Id pregunta: 4529 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  &iquest;Cual de los siguientes no es un perfil contemplado en Ia metodolog&iacute;a M&eacute;trica 3?";
 choices[16]= new Array();
 choices[16][0] = "Perfil Directivo.";
 choices[16][1] = "Perfil Jefe de Proyecto.";
 choices[16][2] = "Perfil Consultor.";
 choices[16][3] = "Perfil Usuario.";
 answers[16] = choices[16][3];
 units[16] = "86";
 comments[16] = "Id Pregunta: 4529. NULL";


//  Id pregunta: 4532 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  En el caso de un dise&ntilde;o orientado a objetos, se debe tener en cuenta la actividad DSI 6: DISE&Ntilde;O FISICO DE DATOS, seg&uacute;n m&eacute;trica V3?";
 choices[17]= new Array();
 choices[17][0] = "Si se debe tener en cuenta.";
 choices[17][1] = "No se aplica esta actividad.";
 choices[17][2] = "Se aplica esta actividad en funci&oacute;n de Ia arquitectura.";
 choices[17][3] = "Se aplica esta actividad en funci&oacute;n del gestor de base de datos.";
 answers[17] = choices[17][0];
 units[17] = "86";
 comments[17] = "Id Pregunta: 4532. NULL";


//  Id pregunta: 4580 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  Dentro del estudio de viabilidad del sistema para realizar Ia actividad de Estudio de Ia situaci&oacute;n actual, M&eacute;trica V3 propone utilizar entre otras t&eacute;cnicas:";
 choices[18]= new Array();
 choices[18][0] = "el diagrama de clases, el diagrama de descomposici&oacute;n funcional y el diagrama de flujo de datos";
 choices[18][1] = "el an&aacute;lisis de coste/beneficio, el diagrama de clases y los casos de use";
 choices[18][2] = "la catalogaci&oacute;n, el diagrama de clases y el diagrama de flujo de datos";
 choices[18][3] = "el diagrama de flujo de datos, el diagrama de representaci&oacute;n y el diagrama de descomposici&oacute;n funcional";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 4580. NULL";


//  Id pregunta: 4639 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  Quien NO es un participante en la actividad An&aacute;lisis de Consistencia y Especificaci&oacute;n de Requisitos del proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[19]= new Array();
 choices[19][0] = "usuarios expertos";
 choices[19][1] = "Analistas";
 choices[19][2] = "jefe de proyecto";
 choices[19][3] = "equipo de arquitectura";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 4639. NULL";


//  Id pregunta: 4928 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Entre los agentes participantes en la gesti&oacute;n del proceso de desarrollo de un Sistema, el &ldquo;especialista en comunicaciones&rdquo; responde al perfil de:";
 choices[20]= new Array();
 choices[20][0] = "Jefe de Proyecto.";
 choices[20][1] = "Directivo.";
 choices[20][2] = "Consultor.";
 choices[20][3] = "Ninguna de las anteriores.";
 answers[20] = choices[20][2];
 units[20] = "86";
 comments[20] = "Id Pregunta: 4928. Examen TIC B 2007";


//  Id pregunta: 5222 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[21]= new Array();
 choices[21][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[21][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[21][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[21][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 5222. NULL";


//  Id pregunta: 5470 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[22]= new Array();
 choices[22][0] = "Estudio de Viabilidad del Sistema";
 choices[22][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[22][2] = "Definici&oacute;n del Sistema";
 choices[22][3] = "Estudio del Sistema Actual";
 answers[22] = choices[22][0];
 units[22] = "86";
 comments[22] = "Id Pregunta: 5470. Castilla y Le&oacute;n";


//  Id pregunta: 6199 AÃ±o de creación de pregunta: 2010-01-01
 questions[23]= "24)  De acuerdo con M&eacute;trica v3, en la actividad &quot;Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n&quot; del Mantenimiento de Sistemas de Informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de realizar las pruebas de regresi&oacute;n";
 choices[23][1] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de comenzar el cambio en desarrollo";
 choices[23][2] = "La aprobaci&oacute;n de la petici&oacute;n se realiza al finalizar las pruebas de regresi&oacute;n y despu&eacute;s de comprobar que todo lo que ha sido modificado, o puede verse afectado por el cambio, funciona correctamente";
 choices[23][3] = "La aprobaci&oacute;n de la petici&oacute;n no es necesaria si se ha comprobado que s&oacute;lo se han modificado los elementos que se ven afectados por el cambio y que se han realizado las pruebas de integraci&oacute;n y del sistema";
 answers[23] = choices[23][2];
 units[23] = "86";
 comments[23] = "Id Pregunta: 6199. TIC-B 2009, bloque desarrollo";


//  Id pregunta: 6464 AÃ±o de creación de pregunta: 2010-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l es el proceso que recibe como entrada los resultados o productos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n?";
 choices[24]= new Array();
 choices[24][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[24][1] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[24][2] = "Estudio de Viabilidad del Sistema";
 choices[24][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "86";
 comments[24] = "Id Pregunta: 6464. Castilla La Mancha 2009";


//  Id pregunta: 6468 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  Seg&uacute;n M&eacute;trica V3 las pruebas de seguridad, rendimiento y operaci&oacute;n se encuentran englobadas dentro del conjunto de pruebas de:";
 choices[25]= new Array();
 choices[25][0] = "Aceptaci&oacute;n";
 choices[25][1] = "Regresi&oacute;n";
 choices[25][2] = "Integraci&oacute;n";
 choices[25][3] = "Implantaci&oacute;n";
 answers[25] = choices[25][3];
 units[25] = "86";
 comments[25] = "Id Pregunta: 6468. Castilla La Mancha 2009";


//  Id pregunta: 6613 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  Entre los objetivos de M&eacute;trica est&aacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Definir Sistemas de Informaci&oacute;n que ayuden a conseguir los fines de la Organizaci&oacute;n y Mejorar la productividad de los departamentos de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[26][1] = "Facilitar la comunicaci&oacute;n y entendimiento entre los distintos participantes y facilitar la operaci&oacute;n, mantenimiento y uso de los productos software obtenidos.";
 choices[26][2] = "a y b";
 choices[26][3] = "Ninguno ya que M&eacute;trica no entra en los fines de la Organizaci&oacute;n, en la productividad, en la comunicaci&oacute;n ni en la operaci&oacute;n de los productos.";
 answers[26] = choices[26][2];
 units[26] = "86";
 comments[26] = "Id Pregunta: 6613. NULL";


//  Id pregunta: 6617 AÃ±o de creación de pregunta: 2010-01-01
 questions[27]= "28)  &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[27]= new Array();
 choices[27][0] = "Las Pruebas de Aceptaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[27][1] = "Las Pruebas de Implantaci&oacute;n se definen en DSI y se ejecutan en IAS";
 choices[27][2] = "Las Pruebas de Implantaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[27][3] = "Las Pruebas de Aceptaci&oacute;n se definen en DSI y se ejecutan en IAS";
 answers[27] = choices[27][1];
 units[27] = "86";
 comments[27] = "Id Pregunta: 6617. NULL";


//  Id pregunta: 6618 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  La actividad Verificaci&oacute;n y Aceptaci&oacute;n de la Arquitectura del Sistema seg&uacute;n M&eacute;trica:";
 choices[28]= new Array();
 choices[28][0] = "Se realiza en el proceso de Planificaci&oacute;n (PSI), despu&eacute;s de la Definici&oacute;n de la Arquitectura Tecnol&oacute;gica (PSI 7)";
 choices[28][1] = "Se realiza en el Estudio de Viabilidad, despu&eacute;s del Estudio de Alternativas de la Soluci&oacute;n (EVS 4)";
 choices[28][2] = "Se realiza en el proceso de An&aacute;lisis (ASI), despu&eacute;s del An&aacute;lisis de Consistencia (ASI 9)";
 choices[28][3] = "Se realiza en el proceso de Dise&ntilde;o (DSI), despu&eacute;s del Dise&ntilde;o de la Arqitectura de Soporte (DSI 2) y el Dise&ntilde;o F&iacute;sico de Datos (DSI 6)";
 answers[28] = choices[28][3];
 units[28] = "86";
 comments[28] = "Id Pregunta: 6618. NULL";


//  Id pregunta: 6619 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  Seg&uacute;n M&eacute;trica la Definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales:";
 choices[29]= new Array();
 choices[29][0] = "Se realiza en el proceso de An&aacute;lisis (ASI), conjuntamente con el Plan de Pruebas";
 choices[29][1] = "Se realiza en el proceso de Dise&ntilde;o (DSI), cuando se establecen los Requisitos de Implantaci&oacute;n";
 choices[29][2] = "Se realiza en el proceso de Construcci&oacute;n (CSI), en paralelo a la ejecuci&oacute;n de las Pruebas del Sistema";
 choices[29][3] = "Se realiza en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n (IAS), antes de las Pruebas de Aceptaci&oacute;n";
 answers[29] = choices[29][2];
 units[29] = "86";
 comments[29] = "Id Pregunta: 6619. NULL";


//  Id pregunta: 8172 AÃ±o de creación de pregunta: 2011-01-01
 questions[30]= "31)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[30][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[30][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[30][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 8172. Examen TIC A1 2010";


//  Id pregunta: 8335 AÃ±o de creación de pregunta: 2011-01-01
 questions[31]= "32)  &iquest;Qu&eacute; t&eacute;cnica es utilizada para identificar las dependencias en un proyecto?";
 choices[31]= new Array();
 choices[31][0] = "Los diagramas de Gantt.";
 choices[31][1] = "Program Evaluation &amp; Review Technique.";
 choices[31][2] = "Estructura de Descomposici&oacute;n de Trabajo (WBS).";
 choices[31][3] = "Diagrama de Extrapolaci&oacute;n.";
 answers[31] = choices[31][1];
 units[31] = "86";
 comments[31] = "Id Pregunta: 8335. Examen TIC A2 2010";


//  Id pregunta: 8359 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[32]= new Array();
 choices[32][0] = "Define su contenido.";
 choices[32][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[32][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[32][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[32] = choices[32][2];
 units[32] = "86";
 comments[32] = "Id Pregunta: 8359. Examen TIC A2 2010";


//  Id pregunta: 8390 AÃ±o de creación de pregunta: 2011-01-01
 questions[33]= "34)  Cuando un sistema se debe modificar para que contemple un cambio en las necesidades de los usuarios, se hace referencia al:";
 choices[33]= new Array();
 choices[33][0] = "Mantenimiento Correctivo.";
 choices[33][1] = "Mantenimiento Evolutivo.";
 choices[33][2] = "Mantenimiento Adaptativo.";
 choices[33][3] = "Mantenimiento Perfectivo.";
 answers[33] = choices[33][1];
 units[33] = "86";
 comments[33] = "Id Pregunta: 8390. Examen TIC A2 2010";


//  Id pregunta: 8616 AÃ±o de creación de pregunta: 2011-01-01
 questions[34]= "35)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[34]= new Array();
 choices[34][0] = "Mantenimiento adaptativo";
 choices[34][1] = "Mantenimiento preventivo";
 choices[34][2] = "Mantenimiento correctivo";
 choices[34][3] = "Mantenimiento evolutivo";
 answers[34] = choices[34][1];
 units[34] = "86";
 comments[34] = "Id Pregunta: 8616. Examen TIC A2 2010 interna";


//  Id pregunta: 8646 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  &iquest;Seg&uacute;n M&eacute;trica v3 cu&aacute;l de los siguientes participantes estar&iacute;a encuadrado dentro del perfil &quot;Consultor&quot;?";
 choices[35]= new Array();
 choices[35][0] = "T&eacute;cnico de sistemas.";
 choices[35][1] = "Grupo de Aseguramiento da la Calidad.";
 choices[35][2] = "Equipo de Arquitectura.";
 choices[35][3] = "Administrador de Bases de Datos.";
 answers[35] = choices[35][0];
 units[35] = "86";
 comments[35] = "Id Pregunta: 8646. Examen TIC A2 2010 interna";


//  Id pregunta: 8654 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  Seg&uacute;n M&eacute;trica v3 &iquest;cu&aacute;l de las siguientes NO es un tipo de relaci&oacute;n del diagrama de clases?";
 choices[36]= new Array();
 choices[36][0] = "Inclusi&oacute;n";
 choices[36][1] = "Agregaci&oacute;n";
 choices[36][2] = "Herencia";
 choices[36][3] = "Composici&oacute;n";
 answers[36] = choices[36][0];
 units[36] = "86";
 comments[36] = "Id Pregunta: 8654. Examen TIC A2 2010 interna";


//  Id pregunta: 9186 AÃ±o de creación de pregunta: 2013-01-01
 questions[37]= "38)  Seg&uacute;n M&eacute;trica 3, &iquest; cu&aacute;ndo se elaboran los manuales de usuario ?";
 choices[37]= new Array();
 choices[37][0] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[37][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[37][2] = "Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[37][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 answers[37] = choices[37][0];
 units[37] = "86";
 comments[37] = "Id Pregunta: 9186. NULL";


//  Id pregunta: 9915 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  Se&ntilde;ale la opci&oacute;n INCORRECTA en relaci&oacute;n con los DFD (Diagrama de Flujos de Datos) y los DE (Diagramas de Estructura), seg&uacute;n M&eacute;trica v3:";
 choices[38]= new Array();
 choices[38][0] = "El objetivo del DFD es la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 choices[38][1] = "En un DFD, los flujos de control representan movimientos de datos con valores s&iacute;ncronos entre procesos de control.";
 choices[38][2] = "Existen dos estrategias para obtener el DE a partir de un DFD, an&aacute;lisis: de transacci&oacute;n y de transformaci&oacute;n. El uso de una de las dos depender&aacute; de los procesos del DFD.";
 choices[38][3] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD existe un proceso que en funci&oacute;n del flujo de llegada, determina la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 answers[38] = choices[38][1];
 units[38] = "86";
 comments[38] = "Id Pregunta: 9915. TIC A2, Examen 2013";


//  Id pregunta: 9954 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  La actividad EVS-GC 1 de la interface de Gesti&oacute;n de la Configuraci&oacute;n (GC) de M&eacute;trica v3 recibe entre sus entradas un producto resultante de la actividad:";
 choices[39]= new Array();
 choices[39][0] = "EVS 4 - Estudio de Alternativas de Soluci&oacute;n";
 choices[39][1] = "EVS 5 - Valoraci&oacute;n de las Alternativas.";
 choices[39][2] = "EVS 3 - Definici&oacute;n de Requisitos del Sistema.";
 choices[39][3] = "EVS 1 - Establecimiento del Alcance del Sistema. ";
 answers[39] = choices[39][2];
 units[39] = "86";
 comments[39] = "Id Pregunta: 9954. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10633 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  Indique cu&aacute;l de los siguientes procesos de M&eacute;trica v3 no incluye actividades de la interfaz para Gestion de la Configuraci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "ASI";
 choices[40][1] = "PSI";
 choices[40][2] = "MSI";
 choices[40][3] = "EVS";
 answers[40] = choices[40][1];
 units[40] = "86";
 comments[40] = "Id Pregunta: 10633. ";


//  Id pregunta: 10984 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  En M&eacute;trica 3, la utilizaci&oacute;n del modelo entidad relaci&oacute;n extendido se recomienda en los procesos de:";
 choices[41]= new Array();
 choices[41][0] = "An&aacute;lisis y Dise&ntilde;o.";
 choices[41][1] = "Solo en el An&aacute;lisis.";
 choices[41][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de Viabilidad y An&aacute;lisis.";
 choices[41][3] = "Solo en Planificaci&oacute;n de Sistemas de Informaci&oacute;n y Estudio de Viabilidad.";
 answers[41] = choices[41][2];
 units[41] = "86";
 comments[41] = "Id Pregunta: 10984. TIC A1 AGE 2014";


//  Id pregunta: 11546 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  Seg&uacute;n M&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes actividades de aseguramiento de la calidad NO se lleva a cabo durante el Mantenimiento del Sistema de Informaci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Aseguramiento de la calidad NO afecta al proceso MSI";
 choices[42][1] = "La revisi&oacute;n del plan de pruebas de regresi&oacute;n.";
 choices[42][2] = "La revisi&oacute;n de la realizaci&oacute;n de las pruebas de regresi&oacute;n.";
 choices[42][3] = "La revisi&oacute;n del Plan de Mantenimiento del Sistema.";
 answers[42] = choices[42][3];
 units[42] = "86";
 comments[42] = "Id Pregunta: 11546. NULL";


//  Id pregunta: 11637 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale qui&eacute;n no se encuentra entre los participantes de la actividad de Ejecuci&oacute;n de las pruebas de integraci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Equipo de seguridad";
 choices[43][1] = "Equipo de arquitectura";
 choices[43][2] = "Equipo de proyecto";
 choices[43][3] = "T&eacute;cnicos de comunicaciones";
 answers[43] = choices[43][0];
 units[43] = "86";
 comments[43] = "Id Pregunta: 11637. ";


