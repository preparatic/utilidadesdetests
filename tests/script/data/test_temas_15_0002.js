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

//  Id pregunta: 937 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; paradigma de programaci&oacute;n reproduce mas fielmente el funcionamiento de un computador con arquitectura Von Neuman?:";
 choices[0]= new Array();
 choices[0][0] = "El l&oacute;gico";
 choices[0][1] = "El funcional";
 choices[0][2] = " El imperativo";
 choices[0][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[0] = choices[0][2];
 units[0] = "86";
 comments[0] = "Id Pregunta: 937. NULL";


//  Id pregunta: 2010 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El tipo de mantenimiento consistente en a&ntilde;adir nueva funcionalidad y adaptar el sistema a nuevos requerimientos del usuario se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Correctivo";
 choices[1][1] = "Adaptativo";
 choices[1][2] = "Evolutivo";
 choices[1][3] = "Perfectivo";
 answers[1] = choices[1][2];
 units[1] = "86";
 comments[1] = "Id Pregunta: 2010. Similar a examen TIC SS A 2004";


//  Id pregunta: 2014 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La responsabilidad de los analistas, de acuerdo con M&Eacute;TRICA, es:";
 choices[2]= new Array();
 choices[2][0] = "Realizar las entrevistas al usuario";
 choices[2][1] = "Elaborar un cat&aacute;logo detallado de requisitos que permita describir con precisi&oacute;n el sistema de informaci&oacute;n";
 choices[2][2] = "Establecer la plataforma id&oacute;nea hardware/software que debe dar satisfacci&oacute;n a las necesidades";
 choices[2][3] = "Dirigir a los programadores";
 answers[2] = choices[2][1];
 units[2] = "86";
 comments[2] = "Id Pregunta: 2014. Examen TIC MAP B 2004";


//  Id pregunta: 2032 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  La prueba que recorre la secuencia t&iacute;pica de acciones del usuario es de:";
 choices[3]= new Array();
 choices[3][0] = "caja negra";
 choices[3][1] = "caja blanca";
 choices[3][2] = "caja roja";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][0];
 units[3] = "86,88";
 comments[3] = "Id Pregunta: 2032. Similar a examen TIC SS A 2003";


//  Id pregunta: 2056 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En METRICA V3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?";
 choices[4]= new Array();
 choices[4][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[4][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[4][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[4][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[4] = choices[4][1];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2056. Pregunta Junta Andalucia - A";


//  Id pregunta: 2063 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n (IAS)?";
 choices[5]= new Array();
 choices[5][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[5][1] = "Elaboraci&oacute;n de los manuales de usuario";
 choices[5][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n";
 choices[5][3] = "Paso a Producci&oacute;n";
 answers[5] = choices[5][1];
 units[5] = "86";
 comments[5] = "Id Pregunta: 2063. Pregunta Junta Andalucia - A";


//  Id pregunta: 2078 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Las actividades propuestas en METRICA V3 para el proceso de Mantenimiento de sistemas de informaci&oacute;n son:";
 choices[6]= new Array();
 choices[6][0] = "Registro de la petici&oacute;n; An&aacute;lisis de la petici&oacute;n; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n; Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n.";
 choices[6][1] = "Registro de la peticici&oacute;n; Identificaci&oacute;n del tipo y origen del mantenimiento; Construcci&oacute;n, Pruebas e Implantaci&oacute;n";
 choices[6][2] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o; Construcci&oacute;n; Pruebas de regresi&oacute;n; Aceptaci&oacute;n.";
 choices[6][3] = "An&aacute;lisis de la petici&oacute;n; Dise&ntilde;o, Construcci&oacute;n, Implantaci&oacute;n; Aceptaci&oacute;n";
 answers[6] = choices[6][0];
 units[6] = "86";
 comments[6] = "Id Pregunta: 2078. Pregunta Junta Andalucia - A";


//  Id pregunta: 2140 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes pruebas se contemplan en M&eacute;trica V3?:";
 choices[7]= new Array();
 choices[7][0] = "Pruebas de regresi&oacute;n";
 choices[7][1] = "Pruebas de integraci&oacute;n ";
 choices[7][2] = "Pruebas del sistema";
 choices[7][3] = "Todas las anteriores";
 answers[7] = choices[7][3];
 units[7] = "86";
 comments[7] = "Id Pregunta: 2140. NULL";


//  Id pregunta: 2142 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes tareas no pertenece a la actividad 'Ejecuci&oacute;n de las pruebas del sistema'?:";
 choices[8]= new Array();
 choices[8][0] = "Preparaci&oacute;n del entorno de las pruebas del sistema";
 choices[8][1] = "Evaluaci&oacute;n del resultado de las pruebas del sistema";
 choices[8][2] = "Preparaci&oacute;n de pruebas de aceptaci&oacute;n del sistema";
 choices[8][3] = "Realizaci&oacute;n de las pruebas del sistema";
 answers[8] = choices[8][2];
 units[8] = "86";
 comments[8] = "Id Pregunta: 2142. NULL";


//  Id pregunta: 2155 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del plan de contingencias?";
 choices[9]= new Array();
 choices[9][0] = "Minimizar las interrupciones en la operaci&oacute;n normal";
 choices[9][1] = "Limitar la extensi&oacute;n de las interrupciones y de los da&ntilde;os que produzcan";
 choices[9][2] = "Analizar da&ntilde;os y estimar costes";
 choices[9][3] = "Posibilitar la vuelta al servicio r&aacute;pida y sencilla";
 answers[9] = choices[9][2];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2155. NULL";


//  Id pregunta: 2165 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique cu&aacute;l de las respuestas no forma parte de la documentaci&oacute;n t&eacute;cnica de un sistema de informaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Relaci&oacute;n condiciones de error-acciones";
 choices[10][1] = "Descripciones narrativas de los m&oacute;dulos de los programas";
 choices[10][2] = "Listados del c&oacute;digo objeto";
 choices[10][3] = "Procedimientos de backup-recovery";
 answers[10] = choices[10][2];
 units[10] = "86";
 comments[10] = "Id Pregunta: 2165. NULL";


//  Id pregunta: 2179 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes perfiles  no est&aacute; incluido en la Guia de Participantes de METRICA 3?:";
 choices[11]= new Array();
 choices[11][0] = "Directivo";
 choices[11][1] = "Consultor";
 choices[11][2] = "T&eacute;cnico";
 choices[11][3] = "Programador";
 answers[11] = choices[11][2];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2179. NULL";


//  Id pregunta: 2181 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes tipos de prueba es de caja blanca?:";
 choices[12]= new Array();
 choices[12][0] = "An&aacute;lisis de valores l&iacute;mite de entrada";
 choices[12][1] = "Prueba de bucles";
 choices[12][2] = "Pruebas de comparaci&oacute;n";
 choices[12][3] = "Pruebas basadas en grafos";
 answers[12] = choices[12][1];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2181. NULL";


//  Id pregunta: 2202 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?:";
 choices[13]= new Array();
 choices[13][0] = "Diagramas de despliegue";
 choices[13][1] = "Diagramas de componentes";
 choices[13][2] = "Diagramas de descomposici&oacute;n";
 choices[13][3] = "Diagramas de estructura";
 answers[13] = choices[13][0];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2202. NULL";


//  Id pregunta: 2219 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; t&eacute;cnica de las utilizadas en la metodolog&iacute;a M&Eacute;TRICA V3 tiene entre sus objetivos obtener un dise&ntilde;o que no s&oacute;lo 'funcione', sino que tambi&eacute;n sea mantenible, mejore la reutilizaci&oacute;n y se pueda probar y entender f&aacute;cilmente?:";
 choices[14]= new Array();
 choices[14][0] = "El modelo Entidad/Relaci&oacute;n";
 choices[14][1] = "Los diagramas de flujo de datos";
 choices[14][2] = "La historia de la vida de las entidades";
 choices[14][3] = "Diagrama de estructura";
 answers[14] = choices[14][3];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2219. NULL";


//  Id pregunta: 2278 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El mantenimiento de sistemas de informaci&oacute;n, tal y como lo define METRICA V3:";
 choices[15]= new Array();
 choices[15][0] = "Es de tipo perfectivo";
 choices[15][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo de mantenimiento";
 choices[15][2] = "Hace uso de la t&eacute;cnica denominada &quot;factores cr&iacute;ticos de &eacute;xito&quot;";
 choices[15][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[15] = choices[15][3];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2278. NULL";


//  Id pregunta: 2317 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En el modelo Entidad-Relaci&oacute;n utilizado en la metodolog&iacute;a M&Eacute;TRICA, las Entidades se describen mediante:";
 choices[16]= new Array();
 choices[16][0] = "Los datos";
 choices[16][1] = "Las relaciones";
 choices[16][2] = "Los atributos";
 choices[16][3] = "Otras entidades";
 answers[16] = choices[16][2];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2317. NULL";


//  Id pregunta: 2351 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En un diagrama de GANTT, un hito, por definici&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Dura lo mismo que la etapa que lo genera";
 choices[17][1] = "Dura una unidad temporal";
 choices[17][2] = "Su duraci&oacute;n se incluye en las etapas que desencadena";
 choices[17][3] = "No tiene duraci&oacute;n";
 answers[17] = choices[17][3];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2351. NULL";


//  Id pregunta: 2358 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Entre las nuevas tecnolog&iacute;as incorporadas a la Versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[18]= new Array();
 choices[18][0] = "Orientaci&oacute;n a objetos";
 choices[18][1] = "Entorno cliente/servidor";
 choices[18][2] = "Reutilizaci&oacute;n de m&oacute;dulos - componentes (tambi&eacute;n denominados productos) y bases de datos";
 choices[18][3] = "Todas las respuestas anteriores son correctas";
 answers[18] = choices[18][3];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2358. NULL";


//  Id pregunta: 2397 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La interfaz de METRICA V3 denominada &quot;Gesti&oacute;n de proyectos&quot;:";
 choices[19]= new Array();
 choices[19][0] = "Contempla tanto el desarrollo de nuevos proyectos como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[19][1] = "Consta de 4 tipos de actividades: de inicio de proyecto, de seguimiento y control, de finalizaci&oacute;n de proyecto, y de mantenimiento";
 choices[19][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[19][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[19] = choices[19][0];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2397. NULL";


//  Id pregunta: 2398 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA V3 es una iniciativa promovida por:";
 choices[20]= new Array();
 choices[20][0] = "La Subdirecci&oacute;n General de Coordinaci&oacute;n Inform&aacute;tica del MAP";
 choices[20][1] = "La Comisi&oacute;n de Estrategia TIC";
 choices[20][2] = "La Direcci&oacute;n General de Inform&aacute;tica Tributaria";
 choices[20][3] = "Todas las anteriores";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2398. NULL";


//  Id pregunta: 2427 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La metodolog&iacute;a M&eacute;trica V.3 incorpora un proceso de mantenimiento de sistemas. &iquest;Podr&iacute;a determinar qu&eacute; actividad no est&aacute; incluida en el proceso?:";
 choices[21]= new Array();
 choices[21][0] = "Registro de la petici&oacute;n";
 choices[21][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[21][2] = "Seguimiento y evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[21][3] = "Todas ellas son actividades del MSI";
 answers[21] = choices[21][3];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2427. NULL";


//  Id pregunta: 2443 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Las herramientas CASE se emplean con objeto de:";
 choices[22]= new Array();
 choices[22][0] = "Aumentar la productividad";
 choices[22][1] = "Controlar riesgos";
 choices[22][2] = "Asegurar la calidad";
 choices[22][3] = "Reutilizar c&oacute;digo";
 answers[22] = choices[22][0];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2443. NULL";


//  Id pregunta: 2444 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las herramientas que incluyen componentes para la gesti&oacute;n de proyectos y la gesti&oacute;n de configuraci&oacute;n son las:";
 choices[23]= new Array();
 choices[23][0] = "L-CASE (Lower CASE)";
 choices[23][1] = "I-CASE (Integrated CASE)";
 choices[23][2] = "IPSE (Integrated Project Support Environment)";
 choices[23][3] = "CAST (Computer Aided Software Testing)";
 answers[23] = choices[23][2];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2444. NULL";


//  Id pregunta: 2456 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los diagramas de flujos de datos son una de las t&eacute;cnicas utilizadas en la metodolog&iacute;a METRICA cuyo objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo. Indique la respuesta que incluye los elementos utilizados en esa t&eacute;cnica:";
 choices[24]= new Array();
 choices[24][0] = "Atributos, relaciones y entidades";
 choices[24][1] = "Entidades externas al sistema, procesos y almacenes de datos";
 choices[24][2] = "Entradas, funciones de transformaci&oacute;n y salidas";
 choices[24][3] = "Niveles, diagramas y objetos";
 answers[24] = choices[24][1];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2456. NULL";


//  Id pregunta: 2493 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se&ntilde;alar la respuesta correcta respecto a METRICA V3:";
 choices[25]= new Array();
 choices[25][0] = "No propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 choices[25][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos";
 choices[25][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de su propia metodolog&iacute;a";
 choices[25][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[25] = choices[25][2];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2493. NULL";


//  Id pregunta: 2565 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  El modelado de Procesos de la Organizaci&oacute;n y el Modelo entidad/relaci&oacute;n extendido se utiliza en la siguiente actividad del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n METRICA V3:";
 choices[26]= new Array();
 choices[26][0] = "Estas t&eacute;cnicas no se utilizan en el PSI.";
 choices[26][1] = "PSI6 Dise&ntilde;o de Modelos de Sistemas de Informaci&oacute;n.";
 choices[26][2] = "PSI5 Estudio de los sistemas de Informaci&oacute;n actuales.";
 choices[26][3] = "PSI4 Identificaci&oacute;n de requisitos.";
 answers[26] = choices[26][3];
 units[26] = "86";
 comments[26] = "Id Pregunta: 2565. Junta Andaluc&iacute;a";


//  Id pregunta: 2589 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  En el Mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[27]= new Array();
 choices[27][0] = "Estad&iacute;stica e Inventario de Cambios.";
 choices[27][1] = "Registro de cambios.";
 choices[27][2] = "Registro de la petici&oacute;n.";
 choices[27][3] = "Catalogo de peticiones.";
 answers[27] = choices[27][2];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2589. Junta Andaluc&iacute;a";


//  Id pregunta: 2590 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  En la planificaci&oacute;n de Sistemas de informaci&oacute;n seg&uacute;n METRICA V3 en relaci&oacute;n con la actividad Estudio de Informaci&oacute;n Relevante, PSI3, La Definici&oacute;n de Requisitos, PSI4, y el Estudio de la situaci&oacute;n actual, PSI5:";
 choices[28]= new Array();
 choices[28][0] = "Dado que los resultados de la actividad estudio de la informaci&oacute;n relevante, PSI3, debe tenerse en cuenta para la definici&oacute;n de Requisitos, PSI4, esta &uacute;ltima s&oacute;lo puede llevarse a cabo una vez finalizada la anterior.";
 choices[28][1] = "Aunque los resultados de la actividad PSI3 debe tenerse en cuenta para la PSI4, ambas pueden realizarse en paralelo junto a PSI5.";
 choices[28][2] = "La, actividades PSI3 p PSI4 deben preceder a PSI5.";
 choices[28][3] = "El orden de realizaci&oacute;n de PSI3 y PSI4 debe preceder a PSI5.";
 answers[28] = choices[28][1];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2590. Junta Andaluc&iacute;a";


//  Id pregunta: 2595 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  La eliminaci&oacute;n del efecto onda que provocan los cambios introducidos por una petici&oacute;n de mantenimiento de un sistema de informaci&oacute;n se consigne:";
 choices[29]= new Array();
 choices[29][0] = "Con la definici&oacute;n de los puntos de control adecuados en el plan de mantenimiento de sistemas de informaci&oacute;n.";
 choices[29][1] = "A trav&eacute;s de las pruebas de regresi&oacute;n.";
 choices[29][2] = "Con el seguimiento de las referencias cruzadas de los elementos afectados por los cambios.";
 choices[29][3] = "Con la planificaci&oacute;n detallada del desarrollo de los cambios.";
 answers[29] = choices[29][1];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2595. Junta Andaluc&iacute;a";


//  Id pregunta: 2602 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest; Cu&aacute;l de las siguientes actividades no puede realizarse en paralelo en las fase de ASI de Metrica v3?";
 choices[30]= new Array();
 choices[30][0] = "Identificaci&oacute;n de subsistemas de an&aacute;lisis";
 choices[30][1] = "An&aacute;lisis de consistencia";
 choices[30][2] = "Definici&oacute;n de interfaces de usuario";
 choices[30][3] = "An&aacute;lisis de casos de uso";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2602. NULL";


//  Id pregunta: 2603 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest; Cu&aacute;l de las siguientes no es una t&eacute;cnica contemplada en Metrica v3?";
 choices[31]= new Array();
 choices[31][0] = "SADT";
 choices[31][1] = "HVE (historia de la vida de las entidades)";
 choices[31][2] = "T&eacute;cnicas matriciales";
 choices[31][3] = "Diagrama de transici&oacute;n de estados";
 answers[31] = choices[31][1];
 units[31] = "86";
 comments[31] = "Id Pregunta: 2603. NULL";


//  Id pregunta: 2607 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de estas afirmaciones es falsa?";
 choices[32]= new Array();
 choices[32][0] = "Dentro del An&aacute;lisis de Requisitos, un m&eacute;todo adecuado para decidir la mejor alternativa es el retorno de la inversi&oacute;n, que permite saber en qu&eacute; a&ntilde;o se recupera el coste total inicialmente estimado.";
 choices[32][1] = "Dentro del An&aacute;lisis de Requisitos, en la selecci&oacute;n de la alternativa m&aacute;s adecuada, si se hace una estimaci&oacute;n de Costes / Beneficios no se tendr&aacute;n en cuenta los costes de mantenimiento.";
 choices[32][2] = "El An&aacute;lisis Coste / Beneficio tiene como objetivo proporcionar una medida de los costes en que se incurre en la realizaci&oacute;n de un proyecto inform&aacute;tico y compara dichos costes previstos con los beneficios esperados de la realizaci&oacute;n de dicho proyecto.";
 choices[32][3] = "Dentro de la selecci&oacute;n de alternativas en el An&aacute;lisis de Requisitos, para cada alternativa se consideran los beneficios para el usuario y los beneficios t&eacute;cnicos";
 answers[32] = choices[32][1];
 units[32] = "86,38,78";
 comments[32] = "Id Pregunta: 2607. ";


//  Id pregunta: 2608 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes actividades de Metrica v3 no se puede realizar en paralelo en Metrica v3?";
 choices[33]= new Array();
 choices[33][0] = "Elaboraci&oacute;n de manuales de usuario";
 choices[33][1] = "Preparaci&oacute;n del entorno  de construcci&oacute;n";
 choices[33][2] = "Definici&oacute;n de la formaci&oacute;n de usuarios finales";
 choices[33][3] = "Construcci&oacute;n de componentes y procedimientos de migraci&oacute;n y carga inicial de datos";
 answers[33] = choices[33][1];
 units[33] = "86";
 comments[33] = "Id Pregunta: 2608. NULL";


//  Id pregunta: 2615 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no es un resultado de la fase de an&aacute;lisis de Metrica v 3?";
 choices[34]= new Array();
 choices[34][0] = "Cat&aacute;logo de normas";
 choices[34][1] = "Cat&aacute;logo de requisitos";
 choices[34][2] = "Glosario";
 choices[34][3] = "Descripci&oacute;n de subsistemas";
 answers[34] = choices[34][0];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2615. NULL";


//  Id pregunta: 2636 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  El Mantenimiento de sistemas de Informaci&oacute;n tal como lo define M&eacute;trica V3";
 choices[35]= new Array();
 choices[35][0] = "De tipo perfectivo";
 choices[35][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo y del equipo de mantenimiento";
 choices[35][2] = "Hace uso de la t&eacute;cnica denominada &ldquo;factores cr&iacute;ticos de &eacute;xito&rdquo;";
 choices[35][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[35] = choices[35][3];
 units[35] = "86";
 comments[35] = "Id Pregunta: 2636. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2638 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  El UML ( Unified modeling Language) es un lenguaje que permite modelar construir y documentar los elementos que forman un sistema SW orientado a objetos. Indicar cu&aacute;l entre los siguientes no corresponde a un modelo usado en UML ";
 choices[36]= new Array();
 choices[36][0] = "Diagrama de estructura din&aacute;mica";
 choices[36][1] = "Diagrama de Casos de Uso";
 choices[36][2] = "Diagrama de Secuencia";
 choices[36][3] = "Diagrama de colaboraci&oacute;n";
 answers[36] = choices[36][0];
 units[36] = "86";
 comments[36] = "Id Pregunta: 2638. NULL";


//  Id pregunta: 2657 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Un diagrama de contexto, utilizado como mecanismo de an&aacute;lisis estructurado, debe contener s&oacute;lo dos tipos de componentes siguientes";
 choices[37]= new Array();
 choices[37][0] = "Entidad externa y almacenes de datos";
 choices[37][1] = "Almac&eacute;n de datos y burbujas de proceso";
 choices[37][2] = "Burbujas de proceso y entidades externas";
 choices[37][3] = "Burbuja de proceso y almacenes de datos";
 answers[37] = choices[37][2];
 units[37] = "86";
 comments[37] = "Id Pregunta: 2657. ";


//  Id pregunta: 2688 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  En METRICA v3, la actividad de &quot;Estudio de alternativas de soluci&oacute;n&quot; pertenece al proceso ...";
 choices[38]= new Array();
 choices[38][0] = "PSI (Planificaci&oacute;n de Sistemas de Informaci&oacute;n)";
 choices[38][1] = "EVS (Estudio de Viabilidad del Sistema)";
 choices[38][2] = "ASI (An&aacute;lisis del Sistema de Informaci&oacute;n)";
 choices[38][3] = "DSI (Dise&ntilde;o del Sistema de Informaci&oacute;n)";
 answers[38] = choices[38][1];
 units[38] = "86";
 comments[38] = "Id Pregunta: 2688. NULL";


//  Id pregunta: 2786 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  La Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n M&Eacute;TRICA 3, tiene por objeto:";
 choices[39]= new Array();
 choices[39][0] = "Obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que respondan a los objetivos estrat&eacute;gicos y operativos de la organizaci&oacute;n.";
 choices[39][1] = "Recoger el conjunto de reglas que aseguran una decisi&oacute;n &oacute;ptima en cada momento.";
 choices[39][2] = "La previsi&oacute;n en fechas de la realizaci&oacute;n del conjunto de actividades que comprende la construcci&oacute;n del sistema, teniendo en cuenta los recursos a emplear y el coste de los mismos.";
 choices[39][3] = "Todo lo anterior.";
 answers[39] = choices[39][0];
 units[39] = "86";
 comments[39] = "Id Pregunta: 2786. NULL";


//  Id pregunta: 2796 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Qu&eacute; tipo de actividades contempla M&eacute;trica v3 en la interfaz de seguridad";
 choices[40]= new Array();
 choices[40][0] = "Seguridad intr&iacute;nseca del sistema";
 choices[40][1] = "seguridad del proceso de desarrollo";
 choices[40][2] = "Formaci&oacute;n en materia de seguridad";
 choices[40][3] = "Todas son correctas";
 answers[40] = choices[40][3];
 units[40] = "86";
 comments[40] = "Id Pregunta: 2796. NULL";


//  Id pregunta: 2797 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La t&eacute;cnica de Coste/beneficio contemplada en M&eacute;trica v3 no tiene como objetivo";
 choices[41]= new Array();
 choices[41][0] = "Estimar el plazo de realizaci&oacute;n del proyecto";
 choices[41][1] = "Estimar recursos";
 choices[41][2] = "selecci&oacute;n de alternativa m&aacute;s beneficiosa";
 choices[41][3] = "Oportunidad de acometer el proyecto";
 answers[41] = choices[41][0];
 units[41] = "86";
 comments[41] = "Id Pregunta: 2797. NULL";


//  Id pregunta: 2878 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest; Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia principal en M&Eacute;TRICA versi&oacute;n 3?";
 choices[42]= new Array();
 choices[42][0] = "ISO/IEC TR 16.502/SPICE";
 choices[42][1] = "ISO 12.207";
 choices[42][2] = "IEEE 600.11-1990";
 choices[42][3] = "UNE-EN-ISO 9001:2000";
 answers[42] = choices[42][1];
 units[42] = "86";
 comments[42] = "Id Pregunta: 2878. NULL";


//  Id pregunta: 4297 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En M&eacute;trica Versi&oacute;n 3, el an&aacute;lisis de los hechos inesperados y an&oacute;malos que se presentan durante la realizaci&oacute;n de las actividades y tareas del proyecto:";
 choices[43]= new Array();
 choices[43][0] = "No est&aacute; contemplado";
 choices[43][1] = "Se realiza en la interfaz de Aseguramiento de la Calidad.";
 choices[43][2] = "Se realiza en la interfaz de Gesti&oacute;n de Configuraci&oacute;n.";
 choices[43][3] = "Se realiza en la interfaz de Gesti&oacute;n de Proyectos.";
 answers[43] = choices[43][3];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4297. NULL";


//  Id pregunta: 4474 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Cual de los siguientes no es un tipo de prueba contemplado en la metodolog&iacute;a Metrica V3?";
 choices[44]= new Array();
 choices[44][0] = "Pruebas unitarias.";
 choices[44][1] = "Pruebas singulares.";
 choices[44][2] = "Pruebas de integraci&oacute;n.";
 choices[44][3] = "Pruebas de regresi&oacute;n.";
 answers[44] = choices[44][1];
 units[44] = "86";
 comments[44] = "Id Pregunta: 4474. NULL";


//  Id pregunta: 4480 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el dise&ntilde;o estructurado de sistemas &iquest;Cuales son los elementos principales de un diagrama de estructura?";
 choices[45]= new Array();
 choices[45][0] = " Atributos, entidades, relaciones y flujos de caja.";
 choices[45][1] = "M&oacute;dulos, entidades y cajas operacionales.";
 choices[45][2] = "Entidades, conexiones entre entidades y flujos de m&oacute;dulos.";
 choices[45][3] = "M&oacute;dulos, conexiones entre los m&oacute;dulos y comunicaciones entre los m&oacute;dulos.";
 answers[45] = choices[45][3];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4480. NULL";


//  Id pregunta: 4582 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Quien NO es un participante en Ia actividad Elaboraci&oacute;n del Modelo de Datos del proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[46]= new Array();
 choices[46][0] = "usuarios expertos";
 choices[46][1] = "analistas";
 choices[46][2] = "jefe de proyecto";
 choices[46][3] = "equipo de soporte t&eacute;cnico";
 answers[46] = choices[46][2];
 units[46] = "86";
 comments[46] = "Id Pregunta: 4582. NULL";


//  Id pregunta: 4633 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En M&eacute;trica V3 NO participa en Ia realizaci&oacute;n de las pruebas de regresi&oacute;n";
 choices[47]= new Array();
 choices[47][0] = "el equipo de mantenimiento";
 choices[47][1] = "el responsable de mantenimiento";
 choices[47][2] = "el jefe del proyecto";
 choices[47][3] = "los usuarios expertos";
 answers[47] = choices[47][3];
 units[47] = "86";
 comments[47] = "Id Pregunta: 4633. NULL";


//  Id pregunta: 4638 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Es un interface de M&eacute;trica V3";
 choices[48]= new Array();
 choices[48][0] = "formacion";
 choices[48][1] = "auditoria";
 choices[48][2] = "mantenimiento de la calidad";
 choices[48][3] = "gestion de la configuracion";
 answers[48] = choices[48][3];
 units[48] = "86";
 comments[48] = "Id Pregunta: 4638. NULL";


//  Id pregunta: 4842 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &quot;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&quot; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;lde las siguientes afirmaciones NO es cierta?";
 choices[49]= new Array();
 choices[49][0] = "El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos";
 choices[49][1] = "Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos";
 choices[49][2] = "Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos";
 choices[49][3] = "La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos";
 answers[49] = choices[49][3];
 units[49] = "86";
 comments[49] = "Id Pregunta: 4842. NULL";


//  Id pregunta: 4852 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &quot;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&quot; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[50]= new Array();
 choices[50][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n";
 choices[50][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n";
 choices[50][2] = "Acuerdo de Nivel de Servicio";
 choices[50][3] = "Plan de Mantenimiento";
 answers[50] = choices[50][0];
 units[50] = "86";
 comments[50] = "Id Pregunta: 4852. NULL";


//  Id pregunta: 4930 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  En la metodolog&iacute;a M&eacute;trica V3, la especificaci&oacute;n del Plan de Pruebas se inicia en el proceso denominado:";
 choices[51]= new Array();
 choices[51][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[51][1] = "Estudio de Viabilidad del Sistema.";
 choices[51][2] = "Dise&ntilde;o de Sistema de Informaci&oacute;n.";
 choices[51][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "86";
 comments[51] = "Id Pregunta: 4930. Examen TIC B 2007";


//  Id pregunta: 4944 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;En cu&aacute;l de los siguientes procesos de M&eacute;trica v.3 se obtiene como producto de alguna de sus tareas los Procedimientos de Migraci&oacute;n y Carga Inicial de Datos?:";
 choices[52]= new Array();
 choices[52][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[52][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[52][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[52][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[52] = choices[52][2];
 units[52] = "86";
 comments[52] = "Id Pregunta: 4944. Examen TIC B 2007";


//  Id pregunta: 4946 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  De los siguientes tipos de pruebas relacionados a continuaci&oacute;n, indique, seg&uacute;n M&eacute;trica v.3, aquel tipo de pruebas que cronol&oacute;gicamente se realiza en &uacute;ltimo lugar:";
 choices[53]= new Array();
 choices[53][0] = "Pruebas de integraci&oacute;n.";
 choices[53][1] = "Pruebas unitarias.";
 choices[53][2] = "Pruebas de implantaci&oacute;n.";
 choices[53][3] = "Pruebas de aceptaci&oacute;n.";
 answers[53] = choices[53][3];
 units[53] = "86";
 comments[53] = "Id Pregunta: 4946. Examen TIC B 2007";


//  Id pregunta: 5022 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un proceso de interfaz de M&eacute;trica v3?:";
 choices[54]= new Array();
 choices[54][0] = "Aseguramiento de la calidad";
 choices[54][1] = "Gesti&oacute;n de proyectos";
 choices[54][2] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[54][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 answers[54] = choices[54][3];
 units[54] = "86";
 comments[54] = "Id Pregunta: 5022. Examen TIC A 2007";


//  Id pregunta: 5071 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes productos NO se obtienen del proceso de an&aacute;lisis de sistemas de informaci&oacute;n (ASI) orientado a objetos?:";
 choices[55]= new Array();
 choices[55][0] = "Dise&ntilde;o de clases";
 choices[55][1] = "Descripci&oacute;n de interfaces entre subsistemas";
 choices[55][2] = "Modelo de clases de an&aacute;lisis";
 choices[55][3] = "An&aacute;lisis de la realizaci&oacute;n de los casos de uso";
 answers[55] = choices[55][0];
 units[55] = "86";
 comments[55] = "Id Pregunta: 5071. Examen TIC A 2007";


//  Id pregunta: 5140 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n M&eacute;trica V3, &iquest;dentro de qu&eacute; perfil de participantes se encuentra recogido el Grupo de Aseguramiento de Calidad?";
 choices[56]= new Array();
 choices[56][0] = "Jefe de Proyecto.";
 choices[56][1] = "Programador.";
 choices[56][2] = "Analista.";
 choices[56][3] = "Consultor.";
 answers[56] = choices[56][2];
 units[56] = "86";
 comments[56] = "Id Pregunta: 5140. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5147 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas se utilizan en la actividad ASI 7 (Elaboraci&oacute;n del Modelo de Procesos) seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3?";
 choices[57]= new Array();
 choices[57][0] = "Diagrama de Flujo de Datos y Matricial.";
 choices[57][1] = "Casos de Uso y Catalogaci&oacute;n.";
 choices[57][2] = "Normalizaci&oacute;n y Prototipado.";
 choices[57][3] = "C&aacute;lculo de Accesos L&oacute;gicos y Diagrama de Clases.";
 answers[57] = choices[57][0];
 units[57] = "86";
 comments[57] = "Id Pregunta: 5147. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5148 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "Aseguramiento de la Calidad.";
 choices[58][1] = "Seguridad.";
 choices[58][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[58][3] = "Gesti&oacute;n de Proyectos.";
 answers[58] = choices[58][3];
 units[58] = "86";
 comments[58] = "Id Pregunta: 5148. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5215 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[59]= new Array();
 choices[59][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[59][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[59][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[59][3] = "Especificaciones de Implantaci&oacute;n";
 answers[59] = choices[59][2];
 units[59] = "86";
 comments[59] = "Id Pregunta: 5215. NULL";


//  Id pregunta: 5217 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  En qu&eacute; actividad de proceso An&aacute;lisis del Sistema de Informaci&oacute;n participan los &quot;Usuarios expertos&quot;";
 choices[60]= new Array();
 choices[60][0] = "Elaboraci&oacute;n del modelo de procesos";
 choices[60][1] = "Elaboraci&oacute;n del modelo de datos";
 choices[60][2] = "An&aacute;lisis de los casos de uso";
 choices[60][3] = "Definici&oacute;n del sistema";
 answers[60] = choices[60][1];
 units[60] = "86";
 comments[60] = "Id Pregunta: 5217. NULL";


//  Id pregunta: 5219 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  En qu&eacute; proceso se realiza la actividad de seguridad Selecci&oacute;n del Equipo de Seguridad";
 choices[61]= new Array();
 choices[61][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[61][1] = "Estudio de Viabilidad del Sistema";
 choices[61][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[61][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[61] = choices[61][1];
 units[61] = "86";
 comments[61] = "Id Pregunta: 5219. NULL";


//  Id pregunta: 5223 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  La actividad &quot;Especificaci&oacute;n detallada del plan de aseguramiento de calidad&quot; en qu&eacute; proceso se realiza";
 choices[62]= new Array();
 choices[62][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[62][1] = "Estudio de Viabilidad del Sistema";
 choices[62][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[62][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[62] = choices[62][0];
 units[62] = "86";
 comments[62] = "Id Pregunta: 5223. NULL";


//  Id pregunta: 5924 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &quot;Retorno de la Inversi&oacute;n&quot;:";
 choices[63]= new Array();
 choices[63][0] = "Beneficio Neto Anual";
 choices[63][1] = "Inversi&oacute;n Promedio";
 choices[63][2] = "Coste desarrollo anualizado";
 choices[63][3] = "Periodo de Amortizaci&oacute;n";
 answers[63] = choices[63][3];
 units[63] = "86";
 comments[63] = "Id Pregunta: 5924. MAP 2008 A1";


//  Id pregunta: 6093 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  M&eacute;trica 3 propone el uso de la t&eacute;cnica de an&aacute;lisis coste/beneficio en:";
 choices[64]= new Array();
 choices[64][0] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso ASI).";
 choices[64][1] = "Solamente en el proceso de Desarrollo (subprocesos EVS y ASI).";
 choices[64][2] = "Solamente en el proceso de Planificaci&oacute;n.";
 choices[64][3] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso EVS).";
 answers[64] = choices[64][3];
 units[64] = "86";
 comments[64] = "Id Pregunta: 6093. TIC A 2009";


//  Id pregunta: 6211 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En M&eacute;trica versi&oacute;n 3, el proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, incluye la tarea de:";
 choices[65]= new Array();
 choices[65][0] = "Definici&oacute;n de la Arquitectura Tecnol&oacute;gica";
 choices[65][1] = "Estudio de la situaci&oacute;n actual";
 choices[65][2] = "Selecci&oacute;n de la Soluci&oacute;n";
 choices[65][3] = "Definici&oacute;n del Sistema";
 answers[65] = choices[65][0];
 units[65] = "86";
 comments[65] = "Id Pregunta: 6211. TICB-2009, bloque desarrollo";


//  Id pregunta: 6465 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Seg&uacute;n el interfaz de Aseguramiento de la Calidad de M&eacute;trica v3, el establecimiento del Plan de Aseguramiento de la Calidad debe comenzar en el proceso:";
 choices[66]= new Array();
 choices[66][0] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[66][1] = "Estudio de Viabilidad del Sistema";
 choices[66][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[66][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[66] = choices[66][1];
 units[66] = "86";
 comments[66] = "Id Pregunta: 6465. Castilla La Mancha 2009";


//  Id pregunta: 6469 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  En M&eacute;trica V3, qu&eacute; producto NO se elabora en el proceso Plan de Sistemas de Informaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Modelo de procesos de la organizaci&oacute;n";
 choices[67][1] = "Plan de Migraci&oacute;n y Carga Inicial de Datos";
 choices[67][2] = "Arquitectura Tecnol&oacute;gica";
 choices[67][3] = "Plan de proyectos";
 answers[67] = choices[67][1];
 units[67] = "86";
 comments[67] = "Id Pregunta: 6469. Castilla La Mancha 2009";


//  Id pregunta: 6470 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  La metodolog&iacute;a M&eacute;trica V3 plantea la t&eacute;cnica de los casos de uso en la obtenci&oacute;n de requisitos en ASI:";
 choices[68]= new Array();
 choices[68][0] = "Como obligatoria en el desarrollo estructurado y opcional en orientaci&oacute;n a objetos";
 choices[68][1] = "Como opcional en el desarrollo estructurado y obligatoria en orientaci&oacute;n a objetos";
 choices[68][2] = "Como obligatoria, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 choices[68][3] = "Como opcional, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 answers[68] = choices[68][1];
 units[68] = "86";
 comments[68] = "Id Pregunta: 6470. Castilla La Mancha 2009";


//  Id pregunta: 6616 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Seg&uacute;n M&eacute;trica el grupo de Aseguramiento de la Calidad participa en el proyecto bajo el perfil de";
 choices[69]= new Array();
 choices[69][0] = "Consultor";
 choices[69][1] = "Analista";
 choices[69][2] = "Calidad";
 choices[69][3] = "Experto";
 answers[69] = choices[69][1];
 units[69] = "86";
 comments[69] = "Id Pregunta: 6616. NULL";


//  Id pregunta: 6620 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Seg&uacute;n M&eacute;trica, las Interfaces son:";
 choices[70]= new Array();
 choices[70][0] = "4: Gesti&oacute;n de Proyectos; Seguridad y Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad; Gesti&oacute;n de Configuraci&oacute;n";
 choices[70][1] = "3: Gesti&oacute;n de Proyectos; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 choices[70][2] = "3: Gesti&oacute;n de Proyectos; Aseguramiento de la Calidad  y Gesti&oacute;n de Riesgos; Gesti&oacute;n de Configuraci&oacute;n";
 choices[70][3] = "4: Gesti&oacute;n de Proyectos; Seguridad; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 answers[70] = choices[70][0];
 units[70] = "86";
 comments[70] = "Id Pregunta: 6620. NULL";


//  Id pregunta: 7774 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a M&Eacute;TRICA v. 3:";
 choices[71]= new Array();
 choices[71][0] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[71][1] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[71][2] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[71][3] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 answers[71] = choices[71][0];
 units[71] = "86";
 comments[71] = "Id Pregunta: 7774. Map 2005";


//  Id pregunta: 8182 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[72]= new Array();
 choices[72][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[72][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[72][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[72][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[72] = choices[72][2];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8182. Examen TIC A1 2010";


//  Id pregunta: 8334 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica 3?";
 choices[73]= new Array();
 choices[73][0] = "Perfil Jefe de Proyecto.";
 choices[73][1] = "Perfil Consultor. ";
 choices[73][2] = "Perfil Analista.";
 choices[73][3] = "Perfil Programador.";
 answers[73] = choices[73][0];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8334. Examen TIC A2 2010";


//  Id pregunta: 8341 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[74]= new Array();
 choices[74][0] = "El Diccionario de Datos.";
 choices[74][1] = "El Diagrama de Flujo de Datos.";
 choices[74][2] = "Las especificaciones de procesos.";
 choices[74][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[74] = choices[74][3];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8341. Examen TIC A2 2010";


//  Id pregunta: 8388 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes herramientas permite realizar pruebas de regresi&oacute;n en el software?";
 choices[75]= new Array();
 choices[75][0] = "Jmeter.";
 choices[75][1] = "Snort.";
 choices[75][2] = "Atrio.";
 choices[75][3] = "JBPM.";
 answers[75] = choices[75][0];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8388. Examen TIC A2 2010";


//  Id pregunta: 8633 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica v3?";
 choices[76]= new Array();
 choices[76][0] = "Perfil Jefe de Proyecto.";
 choices[76][1] = "Perfil Consultor.";
 choices[76][2] = "Perfil Analista.";
 choices[76][3] = "Perfil Programador.";
 answers[76] = choices[76][0];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8633. Examen TIC A2 2010 interna";


//  Id pregunta: 8651 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en M&eacute;trica v3. en el proceso de Construcci&oacute;n del sistema?";
 choices[77]= new Array();
 choices[77][0] = "Carga de Datos al entorno de operaci&oacute;n.";
 choices[77][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[77][2] = "Establecimiento del Acuerdo de Nivel de Servicio.";
 choices[77][3] = "Elaboraci&oacute;n del modelo de datos.";
 answers[77] = choices[77][1];
 units[77] = "86";
 comments[77] = "Id Pregunta: 8651. Examen TIC A2 2010 interna";


//  Id pregunta: 8891 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Se&ntilde;ale la respuesta correcta seg&uacute;n M&eacute;trica v3";
 choices[78]= new Array();
 choices[78][0] = "El c&aacute;lculo de accesos es una t&eacute;cnica";
 choices[78][1] = "La normalizaci&oacute;n es una t&eacute;cnica";
 choices[78][2] = "Ambas son pr&aacute;cticas";
 choices[78][3] = "Ambas son t&eacute;cnicas";
 answers[78] = choices[78][1];
 units[78] = "86";
 comments[78] = "Id Pregunta: 8891. NULL";


//  Id pregunta: 9045 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[79]= new Array();
 choices[79][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[79][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[79][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos ";
 choices[79][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[79] = choices[79][1];
 units[79] = "86";
 comments[79] = "Id Pregunta: 9045. NULL";


//  Id pregunta: 9183 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes no es interfaz de M&eacute;trica 3?";
 choices[80]= new Array();
 choices[80][0] = "Gesti&oacute;n de Configuraci&oacute;n";
 choices[80][1] = "Gesti&oacute;n de Procesos";
 choices[80][2] = "Seguridad";
 choices[80][3] = "Aseguramiento de la Calidad";
 answers[80] = choices[80][1];
 units[80] = "86";
 comments[80] = "Id Pregunta: 9183. NULL";


//  Id pregunta: 9185 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[81]= new Array();
 choices[81][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[81][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[81][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[81][3] = "Todos son Procesos Principales";
 answers[81] = choices[81][2];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9185. NULL";


//  Id pregunta: 9189 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[82]= new Array();
 choices[82][0] = "Prototipado";
 choices[82][1] = "Normalizaci&oacute;n";
 choices[82][2] = "Diagrama de paquetes";
 choices[82][3] = "Casos de uso";
 answers[82] = choices[82][0];
 units[82] = "86";
 comments[82] = "Id Pregunta: 9189. NULL";


//  Id pregunta: 9452 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Aquellas pruebas que se realizan en el entorno de desarrollo y tienen como objetivo verificar el funcionamiento global del sistema de informaci&oacute;n completo se denominan:";
 choices[83]= new Array();
 choices[83][0] = "Pruebas unitarias.";
 choices[83][1] = "Pruebas de integraci&oacute;n.";
 choices[83][2] = "Pruebas del sistema.";
 choices[83][3] = "Pruebas de implantaci&oacute;n.";
 answers[83] = choices[83][2];
 units[83] = "86";
 comments[83] = "Id Pregunta: 9452. Examen AGE TIC A1 2011";


//  Id pregunta: 9904 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[84]= new Array();
 choices[84][0] = "Control.";
 choices[84][1] = "Transacci&oacute;n.";
 choices[84][2] = "Mecanismo.";
 choices[84][3] = "Entrada.";
 answers[84] = choices[84][1];
 units[84] = "86";
 comments[84] = "Id Pregunta: 9904. TIC A2, Examen 2013";


//  Id pregunta: 9907 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  De las siguientes cuatro opciones, tres son tareas incluidas en la actividad &quot;GPI 2&quot; del interfaz de Gesti&oacute;n de Proyectos de M&eacute;trica v3, indique cu&aacute;l es la INCORRECTA:";
 choices[85]= new Array();
 choices[85][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[85][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[85][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[85][3] = "C&aacute;lculo del Esfuerzo.";
 answers[85] = choices[85][3];
 units[85] = "86";
 comments[85] = "Id Pregunta: 9907. TIC A2, Examen 2013";


//  Id pregunta: 9921 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[86]= new Array();
 choices[86][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[86][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[86][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[86][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[86] = choices[86][0];
 units[86] = "86,58";
 comments[86] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 9951 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; practicas, seg&uacute;n M&eacute;trica v3, tienen como objetivo potenciar la participaci&oacute;nactiva de la alta direcci&oacute;n como medio para obtener los mejores resultados en elmenor tiempo posible y con una mayor calidad de los productos?";
 choices[87]= new Array();
 choices[87][0] = "Sesiones JAD. ";
 choices[87][1] = "Sesiones JRP.";
 choices[87][2] = "Entrevistas";
 choices[87][3] = "Reuniones";
 answers[87] = choices[87][1];
 units[87] = "86";
 comments[87] = "Id Pregunta: 9951. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10008 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, en la actividad &ldquo;Definici&oacute;n de Requisitos del Sistema&rdquo; participan los siguientes grupos de personas:";
 choices[88]= new Array();
 choices[88][0] = "Jefe de proyecto, Analistas y Usuarios Expertos.";
 choices[88][1] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas y Usuarios Expertos.";
 choices[88][2] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones y Usuarios Expertos.";
 choices[88][3] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones, Responsables de Seguridad y Usuarios Expertos.";
 answers[88] = choices[88][0];
 units[88] = "86";
 comments[88] = "Id Pregunta: 10008. NULL";


//  Id pregunta: 10022 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Indique cu&aacute;l de los siguientes diagramas de descomposici&oacute;n NO se contempla como t&eacute;cnica en M&eacute;trica v3:";
 choices[89]= new Array();
 choices[89][0] = "Funcional.";
 choices[89][1] = "Organizativo.";
 choices[89][2] = "L&oacute;gico.";
 choices[89][3] = "En Di&aacute;logos.";
 answers[89] = choices[89][2];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10022. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10438 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Para determinar la viabilidad de un proyecto a partir de las estimaciones coste/beneficio, METRICA 3 calcula su rentabilidad a trav&eacute;s de ";
 choices[90]= new Array();
 choices[90][0] = "el m&eacute;todo de la cadena de reemplazo.";
 choices[90][1] = "el m&eacute;todo de la anualidad equivalente.";
 choices[90][2] = "m&eacute;todos de coste total de propiedad (TCO).";
 choices[90][3] = "m&eacute;todos de Retorno de la Inversi&oacute;n o del Valor Actual Neto";
 answers[90] = choices[90][3];
 units[90] = "86";
 comments[90] = "Id Pregunta: 10438. Examen TIC A1 2013";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 indicar en cu&aacute;l de las siguientes tareas de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n NO participa el Comit&eacute; de Direcci&oacute;n. ";
 choices[91]= new Array();
 choices[91][0] = "Identificaci&oacute;n del Alcance del Plan de Sistemas de Informaci&oacute;n.";
 choices[91][1] = "Comunicaci&oacute;n del Plan de Trabajo.";
 choices[91][2] = "Selecci&oacute;n de la Arquitectura Tecnol&oacute;gica. ";
 choices[91][3] = "Evaluaci&oacute;n y Mejora de la Propuesta.";
 answers[91] = choices[91][2];
 units[91] = "86";
 comments[91] = "Id Pregunta: 10443. Examen TIC A1 2013";


//  Id pregunta: 10632 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La actividad &ldquo;Elaboraci&oacute;n del Modelo de Datos&rdquo; forma parte del proceso de M&eacute;trica v3:";
 choices[92]= new Array();
 choices[92][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[92][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[92][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[92][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 answers[92] = choices[92][2];
 units[92] = "86";
 comments[92] = "Id Pregunta: 10632. ";


//  Id pregunta: 10634 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Indique cu&aacute;l de &eacute;stas no es una t&eacute;cnica propuesta por M&eacute;trica v3:";
 choices[93]= new Array();
 choices[93][0] = "Factores Cr&iacute;ticos de &Eacute;xito (FCE).";
 choices[93][1] = "Modelo Entidad/Relaci&oacute;n";
 choices[93][2] = "Diagrama de componentes";
 choices[93][3] = "An&aacute;lisis de Puntos Funci&oacute;n.";
 answers[93] = choices[93][0];
 units[93] = "86";
 comments[93] = "Id Pregunta: 10634. ";


//  Id pregunta: 10824 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[94]= new Array();
 choices[94][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[94][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[94][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[94][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[94] = choices[94][0];
 units[94] = "86";
 comments[94] = "Id Pregunta: 10824. Examen GSI 2014";


//  Id pregunta: 10825 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[95]= new Array();
 choices[95][0] = "Diagrama de secuencia.";
 choices[95][1] = "Diagrama de colaboraci&oacute;n.";
 choices[95][2] = "Diagrama de clases.";
 choices[95][3] = "Diagrama de Casos de Uso.";
 answers[95] = choices[95][3];
 units[95] = "86, 82, 84";
 comments[95] = "Id Pregunta: 10825. Examen GSI 2014";


//  Id pregunta: 10828 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[96]= new Array();
 choices[96][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[96][1] = "Cat&aacute;logo de productos a generar.";
 choices[96][2] = "Cat&aacute;logo de clases.";
 choices[96][3] = "Cat&aacute;logo de entidades.";
 answers[96] = choices[96][3];
 units[96] = "86";
 comments[96] = "Id Pregunta: 10828. Examen GSI 2014";


//  Id pregunta: 10975 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica 3, el Plan de Sistemas de Informaci&oacute;n:";
 choices[97]= new Array();
 choices[97][0] = "Incluye la evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos.";
 choices[97][1] = "La perspectiva del plan debe ser estrat&eacute;gica, operativa y tecnol&oacute;gica.";
 choices[97][2] = "El nivel de detalle con el que se har&aacute; el estudio de la situaci&oacute;n actual no depende de la existencia de documentaci&oacute;n.";
 choices[97][3] = "Para su elaboraci&oacute;n se estudian las necesidades de informaci&oacute;n de los procesos afectados con el fin de definir requisitos generales y obtener modelos conceptuales de informaci&oacute;n.";
 answers[97] = choices[97][3];
 units[97] = "86";
 comments[97] = "Id Pregunta: 10975. TIC A1 AGE 2014";


//  Id pregunta: 11161 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; roles deben participar en la Tarea de Evaluaci&oacute;n de Alternativas y Selecci&oacute;n, seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[98]= new Array();
 choices[98][0] = "Jefe de Proyecto";
 choices[98][1] = "Jefe de Proyecto y Comit&eacute; de Direcci&oacute;n";
 choices[98][2] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n y Analistas";
 choices[98][3] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n, Analistas y Usuarios Expertos";
 answers[98] = choices[98][2];
 units[98] = "86";
 comments[98] = "Id Pregunta: 11161. ";


//  Id pregunta: 11340 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En relaci&oacute;n con los diagramas de casos de uso, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[99]= new Array();
 choices[99][0] = "Las relaciones entre casos de uso y actores pueden ser de tipo usa o extiende";
 choices[99][1] = "Las relaciones s&oacute;lo pueden ser entre actores y casos de uso";
 choices[99][2] = "Los elementos principales son: casos de uso, relaciones, actores y extensiones";
 choices[99][3] = "M&eacute;trica no contempla su uso";
 answers[99] = choices[99][2];
 units[99] = "86";
 comments[99] = "Id Pregunta: 11340. ";


