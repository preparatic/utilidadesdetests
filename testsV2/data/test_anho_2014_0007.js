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

//  Id pregunta: 9601 AÃ±o de creación de pregunta: 2014-01-01
 questions[0]= "1)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[0]= new Array();
 choices[0][0] = "Las interrupciones";
 choices[0][1] = "El scheduler";
 choices[0][2] = "Los drivers de los dispositivos";
 choices[0][3] = "a) y c) son correctas";
 answers[0] = choices[0][3];
 units[0] = "53";
 comments[0] = "Id Pregunta: 9601. ";


//  Id pregunta: 9605 AÃ±o de creación de pregunta: 2014-01-01
 questions[1]= "2)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[1]= new Array();
 choices[1][0] = "Oracle";
 choices[1][1] = "MongoDB";
 choices[1][2] = "eXist";
 choices[1][3] = "Redis";
 answers[1] = choices[1][2];
 units[1] = "58";
 comments[1] = "Id Pregunta: 9605. NULL";


//  Id pregunta: 9630 AÃ±o de creación de pregunta: 2014-01-01
 questions[2]= "3)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[2]= new Array();
 choices[2][0] = "chmod u+s /directorio/fichero";
 choices[2][1] = "chmog g+s /directorio";
 choices[2][2] = "chmod 177 /directorio ";
 choices[2][3] = "chmod +t /directorio ";
 answers[2] = choices[2][3];
 units[2] = "54";
 comments[2] = "Id Pregunta: 9630. Examen TIC A2 2013";


//  Id pregunta: 9650 AÃ±o de creación de pregunta: 2014-01-01
 questions[3]= "4)  FAN-OUT es una medida de:";
 choices[3]= new Array();
 choices[3][0] = "Complejidad";
 choices[3][1] = "Reutilizaci&oacute;n";
 choices[3][2] = "Mantenibilidad";
 choices[3][3] = "Ninguna de las anteriores.";
 answers[3] = choices[3][0];
 units[3] = "89";
 comments[3] = "Id Pregunta: 9650. N&uacute;mero de clases que utiliza la clase que estamos estudiando.";


//  Id pregunta: 9657 AÃ±o de creación de pregunta: 2014-01-01
 questions[4]= "5)  &iquest;Qu&eacute; lenguaje de programaci&oacute;n tiene una mayor correspondencia entre L&iacute;neas de C&oacute;digo (LDC) y Puntos de Funci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "C";
 choices[4][1] = "Ensamblador";
 choices[4][2] = "Cobol";
 choices[4][3] = "Pascal";
 answers[4] = choices[4][1];
 units[4] = "89";
 comments[4] = "Id Pregunta: 9657. Ensamblador 320 LDC/PF, C 150 LDC/PF, Cobol 106 LDC/PF, Pascal 91 LDC/PF. Fuente: ASTIC";


//  Id pregunta: 9659 AÃ±o de creación de pregunta: 2014-01-01
 questions[5]= "6)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[5]= new Array();
 choices[5][0] = "CMM";
 choices[5][1] = "CMMI Escalonado";
 choices[5][2] = "CMMI Continuo";
 choices[5][3] = "Ninguno de los anteriores";
 answers[5] = choices[5][0];
 units[5] = "87";
 comments[5] = "Id Pregunta: 9659. NULL";


//  Id pregunta: 9672 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  En un cl&uacute;ster:";
 choices[6]= new Array();
 choices[6][0] = "Puede elegirse el porcentaje de procesamiento que cada nodo dedica al cl&uacute;ster.";
 choices[6][1] = "El algoritmo que distribuye el trabajo entre los nodos se conoce como 'Gang Scheduling'.";
 choices[6][2] = "El middleware m&aacute;s utilizado es Xware.";
 choices[6][3] = "Los nodos comparten una memoria central.";
 answers[6] = choices[6][1];
 units[6] = "45";
 comments[6] = "Id Pregunta: 9672. ";


//  Id pregunta: 9684 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes opciones representa tipolog&iacute;as de sistemas SIG?";
 choices[7]= new Array();
 choices[7][0] = "SIG empresarial, SIG de sobremesa, Visualizadores SIG y WebSIG.";
 choices[7][1] = "SIG de componentes, Gesti&oacute;n Catastral y Servicios Posicionales.";
 choices[7][2] = "Ninguna es correcta. ";
 choices[7][3] = "Son correctas a y b.";
 answers[7] = choices[7][2];
 units[7] = "67";
 comments[7] = "Id Pregunta: 9684. NULL";


//  Id pregunta: 9685 AÃ±o de creación de pregunta: 2014-01-01
 questions[8]= "9)  Las proyecciones (Georreferenciaci&oacute;n Directa):";
 choices[8]= new Array();
 choices[8][0] = "Son proyecciones cil&iacute;ndricas: Proyecci&oacute;n de Mercator, Proyecci&oacute;n de Peter, Proyecci&oacute;n ortogr&aacute;fica y la Proyecci&oacute;n conforme de Lambert.";
 choices[8][1] = "Son proyecciones azimutales: proyecci&oacute;n azimutal, proyecci&oacute;n azimutal de Lambert, proyecci&oacute;n gnom&oacute;nica y proyecci&oacute;n azimutal m&uacute;ltiple.";
 choices[8][2] = "Son proyecciones c&oacute;nicas: proyecci&oacute;n c&oacute;nica simple, proyecci&oacute;n conforme de Lambert y proyecci&oacute;n c&oacute;nica m&uacute;ltiple. ";
 choices[8][3] = "Son proyecciones estereogr&aacute;ficas: proyecci&oacute;n estereogr&aacute;fica, proyecci&oacute;n ortogr&aacute;fica, proyecciones modificadas y proyecci&oacute;n conforme gnom&oacute;nica. ";
 answers[8] = choices[8][2];
 units[8] = "67";
 comments[8] = "Id Pregunta: 9685. NULL";


//  Id pregunta: 9718 AÃ±o de creación de pregunta: 2014-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[9]= new Array();
 choices[9][0] = "CORBA es un tipo de middleware.";
 choices[9][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[9][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[9][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[9] = choices[9][0];
 units[9] = "51";
 comments[9] = "Id Pregunta: 9718. Examen TIC-A1 2013";


//  Id pregunta: 9721 AÃ±o de creación de pregunta: 2014-01-01
 questions[10]= "11)  La t&eacute;cnica de protecci&oacute;n de software conocida como marca de agua digital consiste en";
 choices[10]= new Array();
 choices[10][0] = "la inserci&oacute;n de un mensaje en el interior de un objeto digital que contiene informaci&oacute;n sobre el autor o propietario digital de dicho objeto.";
 choices[10][1] = "la generaci&oacute;n de un c&oacute;digo de activaci&oacute;n sin el cual no se puede utilizar una aplicaci&oacute;n.";
 choices[10][2] = "una etiqueta hologr&aacute;fica que ayuda a identificar que el software es original.";
 choices[10][3] = "la gesti&oacute;n de derechos de uso de contenido en formato digital que comprende medidas t&eacute;cnicas y organizativas.";
 answers[10] = choices[10][0];
 units[10] = "37";
 comments[10] = "Id Pregunta: 9721. Examen TIC-A1 2013";


//  Id pregunta: 9732 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[11]= new Array();
 choices[11][0] = "En dise&ntilde;o de programas, GRASP significa &quot;patrones generales de software para asignar responsabilidades&quot;, y describen los principios fundamentales de la asignaci&oacute;n de responsabilidades a objetos.";
 choices[11][1] = "La cohesi&oacute;n se define como el grado de interdependencia existente entre los m&oacute;dulos de un sistema.";
 choices[11][2] = "En la programaci&oacute;n modular lo m&aacute;s conveniente es que un m&oacute;dulo sea altamente cohesivo y con bajo acoplamiento.";
 choices[11][3] = "AOSD (Desarrollo Software Orientado a Aspectos) es una aproximaci&oacute;n al dise&ntilde;o de la arquitectura del sistema. Se caracteriza porque ofrece mecanismos para resolver problemas de c&oacute;digo disperso o enmara&ntilde;ado gracias a los aspectos.";
 answers[11] = choices[11][1];
 units[11] = "84";
 comments[11] = "Id Pregunta: 9732. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9742 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[12]= new Array();
 choices[12][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[12][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[12][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[12][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[12] = choices[12][3];
 units[12] = "59";
 comments[12] = "Id Pregunta: 9742. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9750 AÃ±o de creación de pregunta: 2014-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[13]= new Array();
 choices[13][0] = "Citrix";
 choices[13][1] = "Oracle";
 choices[13][2] = "MySql Extend";
 choices[13][3] = "Cassandra";
 answers[13] = choices[13][3];
 units[13] = "58";
 comments[13] = "Id Pregunta: 9750. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9756 AÃ±o de creación de pregunta: 2014-01-01
 questions[14]= "15)  &iquest;En qu&eacute; actividad de M&eacute;trica v3 se formaliza el Plan de Mantenimiento?";
 choices[14]= new Array();
 choices[14][0] = "IAS.3 Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n";
 choices[14][1] = "IAS.7 Preparaci&oacute;n del Mantenimiento del sistema";
 choices[14][2] = "IAS.8 Establecimiento del acuerdo de nivel de servicio";
 choices[14][3] = "DSI.11 Establecimiento de requisitos de implantaci&oacute;n";
 answers[14] = choices[14][1];
 units[14] = "86";
 comments[14] = "Id Pregunta: 9756. IAS.7.2 Formalizaci&oacute;n del Plan de Mantenimiento";


//  Id pregunta: 9763 AÃ±o de creación de pregunta: 2014-01-01
 questions[15]= "16)  Seg&uacute;n la orden EHA/1049/2008, se declaran de contrataci&oacute;n centralizada los contratos de servicios:";
 choices[15]= new Array();
 choices[15][0] = "Los contratos de servicios dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica cuyo presupuesto de licitaci&oacute;n no supere 862.000 euros, I.V.A. excluido.";
 choices[15][1] = "Los contratos de servicios de telecomunicaciones.";
 choices[15][2] = "A y B son correctas.";
 choices[15][3] = "A y B son incorrectas.";
 answers[15] = choices[15][2];
 units[15] = "41";
 comments[15] = "Id Pregunta: 9763. NULL";


//  Id pregunta: 9789 AÃ±o de creación de pregunta: 2014-01-01
 questions[16]= "17)  La norma ISO/IEC 27002 es un conjunto de controles de seguridad para sistemas de informaci&oacute;n gen&eacute;ricos. Esta norma est&aacute; relacionada con el Esquema Nacional de Seguridad (ENS). Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[16]= new Array();
 choices[16][0] = "Numerosas medidas de seguridad del ENS coinciden con controles de ISO/IEC 27002.";
 choices[16][1] = "El ENS es m&aacute;s preciso que la norma ISO/IEC 27002 y establece un sistema de protecci&oacute;n proporcionado a la informaci&oacute;n y servicios a proteger para racionalizar la implantaci&oacute;n de medidas de seguridad y reducir la discrecionalidad.";
 choices[16][2] = "La norma ISO/IEC 27002 carece de la proporcionalidad del ENS, quedando a la mejor opini&oacute;n del auditor que certifica la conformidad con ISO/IEC 27001. La certificaci&oacute;n de la conformidad con ISO/IEC 27001 no es obligatoria en el ENS.";
 choices[16][3] = "Tanto la norma ISO/IEC 27002 como el ENS contemplan diversos aspectos relativos a la firma o la autenticaci&oacute;n electr&oacute;nica. ";
 answers[16] = choices[16][3];
 units[16] = "75";
 comments[16] = "Id Pregunta: 9789. Examen TIC A2 2013";


//  Id pregunta: 9803 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes medidas de seguridad NO pertenece al grupo &quot;Medidas de protecci&oacute;n [mp]&quot; seg&uacute;n el RD 3/2010 (Esquema Nacional de Seguridad)?";
 choices[17]= new Array();
 choices[17][0] = "Detecci&oacute;n de intrusi&oacute;n.";
 choices[17][1] = "Formaci&oacute;n.";
 choices[17][2] = "Desarrollo.";
 choices[17][3] = "Energ&iacute;a el&eacute;ctrica.";
 answers[17] = choices[17][0];
 units[17] = "43";
 comments[17] = "Id Pregunta: 9803. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9804 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  Indique la opci&oacute;n INCORRECTA en relaci&oacute;n con el Esquema Nacional de Seguridad (ENS):";
 choices[18]= new Array();
 choices[18][0] = "Los sistemas de informaci&oacute;n a los que se refiere el ENS ser&aacute;n objeto de una auditor&iacute;a regular ordinaria, al menos cada dos a&ntilde;os, que verifique el cumplimiento de los requerimientos expuestos en el ENS. ";
 choices[18][1] = "Gesti&oacute;n de riesgos, funci&oacute;n diferenciada y reevaluaci&oacute;n peri&oacute;dica son 3 de los principios b&aacute;sicos que deber&aacute;n tenerse en cuenta en las decisiones en materia de seguridad";
 choices[18][2] = "El Instituto Nacional de las Tecnolog&iacute;as de la Informaci&oacute;n (INTECO), en el ejercicio de sus competencias, elaborar&aacute; y difundir&aacute; las correspondientes gu&iacute;as de la seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones. ";
 choices[18][3] = "Si a los 12 meses de la entrada en vigor del ENS hubiera circunstancias que impidan la plena aplicaci&oacute;n de lo exigido en el mismo, se dispondr&aacute; de un plan de adecuaci&oacute;n que marque los plazos de ejecuci&oacute;n, los cuales, en ning&uacute;n caso, ser&aacute;nsuperiores a 48 meses desde la entrada en vigor. ";
 answers[18] = choices[18][2];
 units[18] = "44";
 comments[18] = "Id Pregunta: 9804. NULL";


//  Id pregunta: 9813 AÃ±o de creación de pregunta: 2014-01-01
 questions[19]= "20)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Parametrizaci&oacute;n.";
 choices[19][1] = "Segmentaci&oacute;n.";
 choices[19][2] = "Multiplexaci&oacute;n.";
 choices[19][3] = "Paginaci&oacute;n.";
 answers[19] = choices[19][1];
 units[19] = "52";
 comments[19] = "Id Pregunta: 9813. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9842 AÃ±o de creación de pregunta: 2014-01-01
 questions[20]= "21)  En la gesti&oacute;n unificada de usuarios, &iquest;a qu&eacute; se denomina Single Sign-On (SSO)?";
 choices[20]= new Array();
 choices[20][0] = "Procedimiento de cifrado para autenticar a un usuario.";
 choices[20][1] = "Procedimiento asociado al cifrado en Secure Socket Layer (SSL).";
 choices[20][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de autenticaci&oacute;n. ";
 choices[20][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS.";
 answers[20] = choices[20][2];
 units[20] = "118";
 comments[20] = "Id Pregunta: 9842. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9843 AÃ±o de creación de pregunta: 2014-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[21]= new Array();
 choices[21][0] = "Utilizar el cifrado.";
 choices[21][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[21][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[21][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[21] = choices[21][0];
 units[21] = "111";
 comments[21] = "Id Pregunta: 9843. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9844 AÃ±o de creación de pregunta: 2014-01-01
 questions[22]= "23)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[22]= new Array();
 choices[22][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[22][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[22][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[22][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[22] = choices[22][3];
 units[22] = "111";
 comments[22] = "Id Pregunta: 9844. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9847 AÃ±o de creación de pregunta: 2014-01-01
 questions[23]= "24)  &iquest;C&oacute;mo se denomina el m&oacute;dulo criptogr&aacute;fico necesario para poder operar con el DNI electr&oacute;nico en un entorno UNIX?";
 choices[23]= new Array();
 choices[23][0] = "Cryptographic Service Provider (CSP).";
 choices[23][1] = "PKCS#11.";
 choices[23][2] = "PGP.";
 choices[23][3] = "Smart Card Mini-Driver.";
 answers[23] = choices[23][1];
 units[23] = "111";
 comments[23] = "Id Pregunta: 9847. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9867 AÃ±o de creación de pregunta: 2014-01-01
 questions[24]= "25)  &iquest;A qui&eacute;n corresponde la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n de acuerdo a la Ley 9/2014, General de Telecomunicaciones?";
 choices[24]= new Array();
 choices[24][0] = "Al Gobierno.";
 choices[24][1] = "A la Comisi&oacute;n del Mercado de las Telecomunicaciones";
 choices[24][2] = "Al Ministerio de Ciencia y Tecnolog&iacute;a (hoy, Ministerio de Industria, Energ&iacute;a y Turismo).";
 choices[24][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[24] = choices[24][0];
 units[24] = "110";
 comments[24] = "Id Pregunta: 9867. TIC A1, Examen 2013";


//  Id pregunta: 9883 AÃ±o de creación de pregunta: 2014-01-01
 questions[25]= "26)  El protocolo SET (Secure Electronic Transaction)";
 choices[25]= new Array();
 choices[25][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[25][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[25][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[25][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[25] = choices[25][1];
 units[25] = "70";
 comments[25] = "Id Pregunta: 9883. TIC A1, Examen 2013";


//  Id pregunta: 9903 AÃ±o de creación de pregunta: 2014-01-01
 questions[26]= "27)  Se&ntilde;ale la respuesta correcta relativa al modelo de ciclo de vida en espiral:";
 choices[26]= new Array();
 choices[26][0] = "La dimensi&oacute;n radial mide el grado de avance del proyecto en cada fase y la dimensi&oacute;n angular el coste.";
 choices[26][1] = "Cada ciclo consta de 5 actividades: Determinar objetivos, an&aacute;lisis del riesgo, estimar, planificar y desarrollo-pruebas.";
 choices[26][2] = "Fue propuesto inicialmente por Rutherford.";
 choices[26][3] = "En sistemas peque&ntilde;os es un modelo poco operativo y se desaconseja su uso. Exige de gran experiencia en an&aacute;lisis y resoluci&oacute;n de riesgos.";
 answers[26] = choices[26][3];
 units[26] = "76";
 comments[26] = "Id Pregunta: 9903. TIC A2, Examen 2013";


//  Id pregunta: 9906 AÃ±o de creación de pregunta: 2014-01-01
 questions[27]= "28)  En el modelo CMM (Capability Maturity Model) un grado mayor de madurez al nivel Repetible es:";
 choices[27]= new Array();
 choices[27][0] = "Optimizado";
 choices[27][1] = "Definido";
 choices[27][2] = "Gestionado";
 choices[27][3] = "Inicial";
 answers[27] = choices[27][1];
 units[27] = "87";
 comments[27] = "Id Pregunta: 9906. TIC A2, Examen 2013";


//  Id pregunta: 9919 AÃ±o de creación de pregunta: 2014-01-01
 questions[28]= "29)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[28]= new Array();
 choices[28][0] = "Total y exclusiva.";
 choices[28][1] = "Parcial y superpuesta.";
 choices[28][2] = "Parcial y exclusiva.";
 choices[28][3] = "Total y superpuesta.";
 answers[28] = choices[28][2];
 units[28] = "58";
 comments[28] = "Id Pregunta: 9919. TIC A2, Examen 2013";


//  Id pregunta: 9920 AÃ±o de creación de pregunta: 2014-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes es un Sistema Gestor de Bases de Datos Orientado a Objetos?";
 choices[29]= new Array();
 choices[29][0] = "Microsoft SQL Server.";
 choices[29][1] = "Versant.";
 choices[29][2] = "MariaDB.";
 choices[29][3] = "MySQL.";
 answers[29] = choices[29][1];
 units[29] = "57";
 comments[29] = "Id Pregunta: 9920. TIC A2, Examen 2013";


//  Id pregunta: 9922 AÃ±o de creación de pregunta: 2014-01-01
 questions[30]= "31)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[30]= new Array();
 choices[30][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[30][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[30][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[30][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[30] = choices[30][1];
 units[30] = "57";
 comments[30] = "Id Pregunta: 9922. TIC A2, Examen 2013";


//  Id pregunta: 9927 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  Entre los conceptos fundamentales del modelo OSI no est&aacute;:";
 choices[31]= new Array();
 choices[31][0] = "Interfaz: normas de comunicaci&oacute;n entre capas.";
 choices[31][1] = "Primitivas de servicio: llamadas entrantes o salientes en cada una de las capas.";
 choices[31][2] = "Protocolo: conjunto de reglas organizadas y convenidas entre los participantes en una comunicaci&oacute;n.";
 choices[31][3] = "Servicio: cada capa recibe servicios de las entidades que se encuentran sobre ella y presta servicios a las entidades que se encuentran debajo.";
 answers[31] = choices[31][3];
 units[31] = "100";
 comments[31] = "Id Pregunta: 9927. NULL";


//  Id pregunta: 9938 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[32]= new Array();
 choices[32][0] = "Para mejorar la resistencia a las interferencias.";
 choices[32][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[32][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[32][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[32] = choices[32][0];
 units[32] = "107, 108";
 comments[32] = "Id Pregunta: 9938. TIC A1, Examen 2013";


//  Id pregunta: 9939 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  De acuerdo con el programa IDABC, entre los principios que define el Marco Europeo de Interoperabilidad NO se encuentra:";
 choices[33]= new Array();
 choices[33][0] = "el multiling&uuml;ismo.";
 choices[33][1] = "la accesibilidad.";
 choices[33][2] = "el procedimiento compartido.";
 choices[33][3] = "la subsidiaridad.";
 answers[33] = choices[33][2];
 units[33] = "40";
 comments[33] = "Id Pregunta: 9939. TIC A1, Examen 2013";


//  Id pregunta: 9956 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes es una herramienta que ayuda a realizar seguimiento a los requisitos a lo largo del ciclo de vida del proyecto para asegurar que se est&aacute;n cumpliendo de manera eficaz?";
 choices[34]= new Array();
 choices[34][0] = "Cuestionarios";
 choices[34][1] = "Casos de uso.";
 choices[34][2] = "Matriz de trazabilidad de requisitos.";
 choices[34][3] = "Prototipos";
 answers[34] = choices[34][2];
 units[34] = "78";
 comments[34] = "Id Pregunta: 9956. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9959 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[35]= new Array();
 choices[35][0] = "InProc";
 choices[35][1] = "StateServer";
 choices[35][2] = "ClusterServer";
 choices[35][3] = "SqlServer";
 answers[35] = choices[35][2];
 units[35] = "59,115";
 comments[35] = "Id Pregunta: 9959. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9967 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[36]= new Array();
 choices[36][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[36][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[36][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[36][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[36] = choices[36][3];
 units[36] = "71";
 comments[36] = "Id Pregunta: 9967. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9980 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  &iquest;Para qu&eacute; se usa el framework ASP.NET?";
 choices[37]= new Array();
 choices[37][0] = "Para construir aplicaciones y servicios Web";
 choices[37][1] = "Para conectar las aplicaciones a la base de datos";
 choices[37][2] = "Para construir la interface de usuario";
 choices[37][3] = "Para conectar los programas";
 answers[37] = choices[37][0];
 units[37] = "59.115";
 comments[37] = "Id Pregunta: 9980. TIC A2, UPM, Examen 2010";


//  Id pregunta: 9981 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[38]= new Array();
 choices[38][0] = "CLRUN";
 choices[38][1] = "CLRNET";
 choices[38][2] = "COLR";
 choices[38][3] = "CLR";
 answers[38] = choices[38][3];
 units[38] = "59,115";
 comments[38] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 9982 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[39]= new Array();
 choices[39][0] = "&lt;% y %&gt;";
 choices[39][1] = "&lt;SCRIPT LANGUAGE=ASPScript&gt;&lt;/SCRIPT&gt;";
 choices[39][2] = "&lt;!-- --&gt;";
 choices[39][3] = "Los comandos ASP no se mezclan en el mismo archivo que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[39] = choices[39][0];
 units[39] = "59.115";
 comments[39] = "Id Pregunta: 9982. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10009 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  Los RFC de la IETF son";
 choices[40]= new Array();
 choices[40][0] = "peticiones de cambio (Request for Change) que proponen mejoras sobre protocolos en funcionamiento en Internet.";
 choices[40][1] = "notas t&eacute;cnicas que describen los protocolos utilizados en Internet.";
 choices[40][2] = "peticiones de comentarios a la comunidad de internautas sobre temas relacionados con Internet.";
 choices[40][3] = "las especificaciones formales de los protocolos para comunicaci&oacute;n remota (Remote Function Call).";
 answers[40] = choices[40][1];
 units[40] = "42";
 comments[40] = "Id Pregunta: 10009. ";


//  Id pregunta: 10020 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  En M&eacute;trica v3, &iquest;qui&eacute;n lleva a cabo las pruebas en la tarea IAS 6.2 &quot;realizaci&oacute;n de las pruebas de aceptaci&oacute;n&quot;?";
 choices[41]= new Array();
 choices[41][0] = "Usuarios expertos.";
 choices[41][1] = "Directores de los usuarios.";
 choices[41][2] = "Equipo de calidad.";
 choices[41][3] = "Equipo de implantaci&oacute;n.";
 answers[41] = choices[41][0];
 units[41] = "86";
 comments[41] = "Id Pregunta: 10020. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  Throwable es la superclase de todos los errores y excepciones de Java SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[42]= new Array();
 choices[42][0] = "java.lang";
 choices[42][1] = "java.error";
 choices[42][2] = "java.util";
 choices[42][3] = "Throwable no es una clase, es un interface, y &eacute;ste pertenece al paquete java.io.";
 answers[42] = choices[42][0];
 units[42] = "60";
 comments[42] = "Id Pregunta: 10023. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10024 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[43]= new Array();
 choices[43][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[43][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[43][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[43][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 10024. TIC A2, Promoci&oacute;n Interna, 2013. Un stateless puede servirle a varios clientes. Stateful suele servir solo a 1 cliente.";


//  Id pregunta: 10040 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;en qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[44]= new Array();
 choices[44][0] = "Red A.";
 choices[44][1] = "Red B.";
 choices[44][2] = "Red C.";
 choices[44][3] = "Indistintamente en la red B o en la red C.";
 answers[44] = choices[44][2];
 units[44] = "100";
 comments[44] = "Id Pregunta: 10040. TIC A2, promoci&oacute;n interna, examen 3013";


//  Id pregunta: 10051 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[45]= new Array();
 choices[45][0] = "Contiene la clave privada.";
 choices[45][1] = "Cumple la sintaxis PKCS #21.";
 choices[45][2] = "Est&aacute; codificado en un formato no binario.";
 choices[45][3] = "No se puede convertir a formato .PEM.";
 answers[45] = choices[45][0];
 units[45] = "72";
 comments[45] = "Id Pregunta: 10051. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10053 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[46]= new Array();
 choices[46][0] = "Contiene la clave privada.";
 choices[46][1] = "Cumple la sintaxis PKCS #21.";
 choices[46][2] = "Est&aacute; codificado en un formato no binario.";
 choices[46][3] = "No se puede convertir a formato .PEM.";
 answers[46] = choices[46][0];
 units[46] = "72";
 comments[46] = "Id Pregunta: 10053. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10055 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[47]= new Array();
 choices[47][0] = "32 ";
 choices[47][1] = "24";
 choices[47][2] = "20 ";
 choices[47][3] = "16";
 answers[47] = choices[47][2];
 units[47] = "100";
 comments[47] = "Id Pregunta: 10055. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10063 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[48]= new Array();
 choices[48][0] = "B ";
 choices[48][1] = "D";
 choices[48][2] = "H ";
 choices[48][3] = "I";
 answers[48] = choices[48][3];
 units[48] = "103, 109";
 comments[48] = "Id Pregunta: 10063. TIC A2, libre, Examen 2013";


//  Id pregunta: 10071 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[49]= new Array();
 choices[49][0] = "GPRS ";
 choices[49][1] = "HSDPA";
 choices[49][2] = "HSUPA ";
 choices[49][3] = "UMTS";
 answers[49] = choices[49][1];
 units[49] = "108";
 comments[49] = "Id Pregunta: 10071. TIC A2, libre, Examen 2013";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil se basa en principios como &ldquo;decidir lo m&aacute;s tarde posible&rdquo; y &ldquo;reaccionar tan r&aacute;pido como sea posible?";
 choices[50]= new Array();
 choices[50][0] = "FDD";
 choices[50][1] = "LSD";
 choices[50][2] = "ASD";
 choices[50][3] = "Kanban";
 answers[50] = choices[50][1];
 units[50] = "79";
 comments[50] = "Id Pregunta: 10087. NULL";


//  Id pregunta: 10096 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  En el an&aacute;lisis de requisitos, el dominio de la informaci&oacute;n debe analizarse desde 3 puntos de vista. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[51]= new Array();
 choices[51][0] = "Flujo de la informaci&oacute;n";
 choices[51][1] = "Contenido de la informaci&oacute;n";
 choices[51][2] = "Modelo de la informaci&oacute;n";
 choices[51][3] = "Estructura de la informaci&oacute;n";
 answers[51] = choices[51][2];
 units[51] = "78";
 comments[51] = "Id Pregunta: 10096. NULL";


//  Id pregunta: 10098 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l es la diferencia entre una maqueta y un prototipo seg&uacute;n M&eacute;trica v3?";
 choices[52]= new Array();
 choices[52][0] = "Ninguna, son lo mismo seg&uacute;n M&eacute;trica v3.";
 choices[52][1] = "Un prototipo describe parte de la funcionalidad del sistema, una maqueta simula el aspecto visual.";
 choices[52][2] = "Una maqueta describe parte de la funcionalidad del sistema, un prototipo simula el aspecto visual.";
 choices[52][3] = "Una maqueta es un tipo de prototipo evolutivo.";
 answers[52] = choices[52][0];
 units[52] = "78";
 comments[52] = "Id Pregunta: 10098. NULL";


//  Id pregunta: 10102 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[53]= new Array();
 choices[53][0] = "salida-mecanismo";
 choices[53][1] = "salida-realimentaci&oacute;n";
 choices[53][2] = "control-relaimentaci&oacute;n";
 choices[53][3] = "entrada-realimentaci&oacute;n";
 answers[53] = choices[53][1];
 units[53] = "81";
 comments[53] = "Id Pregunta: 10102. NULL";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  Las siglas CMOT significan:";
 choices[54]= new Array();
 choices[54][0] = "Complex Management Over TCP";
 choices[54][1] = "Common Management Over TCP/IP";
 choices[54][2] = "Complex Management Over TCP/IP";
 choices[54][3] = "Complex Management Of Telecomucation";
 answers[54] = choices[54][1];
 units[54] = "104";
 comments[54] = "Id Pregunta: 10129. ";


//  Id pregunta: 10132 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  La principal mejora de SNMPv3 es:";
 choices[55]= new Array();
 choices[55][0] = "Mayor seguridad";
 choices[55][1] = "Mayor rendimiento";
 choices[55][2] = "Mayor eficacia";
 choices[55][3] = "Mayor simplicidad";
 answers[55] = choices[55][0];
 units[55] = "104";
 comments[55] = "Id Pregunta: 10132. ";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[56]= new Array();
 choices[56][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[56][1] = "la no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[56][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[56][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[56] = choices[56][1];
 units[56] = "30";
 comments[56] = "Id Pregunta: 10151. ";


//  Id pregunta: 10152 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[57]= new Array();
 choices[57][0] = "se crea en el RD 1671/2009 (art. 15) ";
 choices[57][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[57][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[57][3] = "Todas las anteriores son ciertas";
 answers[57] = choices[57][3];
 units[57] = "43";
 comments[57] = "Id Pregunta: 10152. ";


//  Id pregunta: 10155 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[58]= new Array();
 choices[58][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella. ";
 choices[58][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[58][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[58][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad. ";
 answers[58] = choices[58][3];
 units[58] = "43";
 comments[58] = "Id Pregunta: 10155. ";


//  Id pregunta: 10164 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[59]= new Array();
 choices[59][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[59][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[59][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[59][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[59] = choices[59][1];
 units[59] = "58";
 comments[59] = "Id Pregunta: 10164. ";


//  Id pregunta: 10175 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  Booch, Jacobson y Rumbaugh propusieron de forma conjunta PUDS como marco de trabajo gen&eacute;rico para el desarrollo de software.";
 choices[60]= new Array();
 choices[60][0] = "PUDS propone un proceso iterativo e incremental para el desarrollo de sw. La distribuci&oacute;n de la funcionalidad a implementar en distintos incrementos implica un mayor esfuerzo y dificultad en relaci&oacute;n con la gesti&oacute;n del riesgo. ";
 choices[60][1] = "Cada ciclo de desarrollo comprende varias iteraciones. Cada iteraci&oacute;n se subdivide en 4 fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n y Transici&oacute;n";
 choices[60][2] = "Cada ciclo de desarrollo se subdivide en varias fases o flujos de trabajo fundamentales: planificaci&oacute;n, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n y pruebas y finalmente, evaluaci&oacute;n del ciclo.";
 choices[60][3] = "Los casos de uso gu&iacute;an el proceso de desarrollo, centrando la atenci&oacute;n en lo que el usuario quiere / espera del sistema";
 answers[60] = choices[60][3];
 units[60] = "82";
 comments[60] = "Id Pregunta: 10175. ";


//  Id pregunta: 10187 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[61]= new Array();
 choices[61][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[61][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[61][2] = "a) y b) son verdaderas";
 choices[61][3] = "a) y b) son falsas";
 answers[61] = choices[61][3];
 units[61] = "57";
 comments[61] = "Id Pregunta: 10187. ";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[62]= new Array();
 choices[62][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[62][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[62][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[62][3] = "Todas las anteriores";
 answers[62] = choices[62][3];
 units[62] = "57";
 comments[62] = "Id Pregunta: 10188. ";


//  Id pregunta: 10192 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es PDF-417?";
 choices[63]= new Array();
 choices[63][0] = "Una especificaci&oacute;n de c&oacute;digo de barras de dos dimensiones";
 choices[63][1] = "Un formato de archivo para el archivo a largo plazo de documentos electr&oacute;nicos";
 choices[63][2] = "Una t&eacute;cnica de compresi&oacute;n sin p&eacute;rdidas basada en codificaci&oacute;n de trellis";
 choices[63][3] = "Una tecnolog&iacute;a repogr&aacute;fica de impresi&oacute;n de alta calidad";
 answers[63] = choices[63][0];
 units[63] = "94";
 comments[63] = "Id Pregunta: 10192. ";


//  Id pregunta: 10193 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  En relaci&oacute;n a las t&eacute;cnicas para el reconocimiento &oacute;ptico de caracteres, indique la frase incorrecta:";
 choices[64]= new Array();
 choices[64][0] = "El histograma horizontal permite dividir un p&aacute;rrafo en l&iacute;neas";
 choices[64][1] = "El proceso de kerning aplicado por un procesador de textos dificulta el segmentado de palabras";
 choices[64][2] = "Los m&eacute;todos de Zadeh usan mecanismos basados en l&oacute;gica borrosa";
 choices[64][3] = "Los m&eacute;todos de comparaci&oacute;n de plantillas usan matrices bidimensionales";
 answers[64] = choices[64][1];
 units[64] = "94";
 comments[64] = "Id Pregunta: 10193. ";


//  Id pregunta: 10195 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[65]= new Array();
 choices[65][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[65][1] = "No permite la modalidad sim&eacute;trica";
 choices[65][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central ";
 choices[65][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[65] = choices[65][1];
 units[65] = "107";
 comments[65] = "Id Pregunta: 10195. NULL";


//  Id pregunta: 10204 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[66]= new Array();
 choices[66][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[66][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[66][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[66][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[66] = choices[66][3];
 units[66] = "108";
 comments[66] = "Id Pregunta: 10204. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[67]= new Array();
 choices[67][0] = "sleep(long msec);";
 choices[67][1] = "start();";
 choices[67][2] = "wait();";
 choices[67][3] = "A y B son correctas.";
 answers[67] = choices[67][3];
 units[67] = "60";
 comments[67] = "Id Pregunta: 10227. start() es un m&eacute;todo de Thread. Se cambia la opci&oacute;n D, notifyAll, por la actual.";


//  Id pregunta: 10229 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Cuales de los siguientes objetos son interfaces:";
 choices[68]= new Array();
 choices[68][0] = "java.util.List";
 choices[68][1] = "java.util.TreeMap";
 choices[68][2] = "java.util.AbstractList";
 choices[68][3] = "java.util.Collections";
 answers[68] = choices[68][0];
 units[68] = "60";
 comments[68] = "Id Pregunta: 10229. NULL";


//  Id pregunta: 10241 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:int [] x = new int[25];";
 choices[69]= new Array();
 choices[69][0] = "x[24] es 0";
 choices[69][1] = "x[24] es indefinido";
 choices[69][2] = "x[25] es 0";
 choices[69][3] = "x[0] es igual a null";
 answers[69] = choices[69][0];
 units[69] = "60";
 comments[69] = "Id Pregunta: 10241. NULL";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En una aplicaci&oacute;n basada en Struts las solicitudes del cliente son interceptadas en primer lugar por:";
 choices[70]= new Array();
 choices[70][0] = "Un servlet que actua como controlador denominado ActionServlet";
 choices[70][1] = "Un JavaBean encargado de procesar la informaci&oacute;n denominado ActionForm";
 choices[70][2] = "Los objetos ActionMapping que analizan la direcci&oacute;n url y procesar la solicitud";
 choices[70][3] = "Un objeto ActionForward que renderiza una p&aacute;gina JSP";
 answers[70] = choices[70][0];
 units[70] = "116";
 comments[70] = "Id Pregunta: 10242. NULL";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  En cuanto al tratamiento de  datos personales de menores";
 choices[71]= new Array();
 choices[71][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[71][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[71][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[71][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[71] = choices[71][3];
 units[71] = "29";
 comments[71] = "Id Pregunta: 10254. Art&iacute;culo 13.1 del RD 1720/2007";


//  Id pregunta: 10269 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  En el contexto de la protecci&oacute;n de datos de car&aacute;cter personal, la figura del responsable de seguridad";
 choices[72]= new Array();
 choices[72][0] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[72][1] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 choices[72][2] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[72][3] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 answers[72] = choices[72][2];
 units[72] = "29";
 comments[72] = "Id Pregunta: 10269. Art&iacute;culo 95 del RD 1720/2007";


//  Id pregunta: 10284 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Indique qu&eacute; soluci&oacute;n de las siguientes NO est&aacute; relacionada con los Sistemas Gestores de Base de Datos (SGBD):";
 choices[73]= new Array();
 choices[73][0] = "MongoDB";
 choices[73][1] = "MariaDB";
 choices[73][2] = "HeidiSQL";
 choices[73][3] = "MarcoDB";
 answers[73] = choices[73][3];
 units[73] = "57";
 comments[73] = "Id Pregunta: 10284. TIC A2, libre, examen 2013";


//  Id pregunta: 10288 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[74]= new Array();
 choices[74][0] = "Tape Management System.";
 choices[74][1] = "Transaction Multiplexing System.";
 choices[74][2] = "Tape Mapping System.";
 choices[74][3] = "Transaction Management System.";
 answers[74] = choices[74][0];
 units[74] = "48";
 comments[74] = "Id Pregunta: 10288. TIC A2, libre, examen 2013";


//  Id pregunta: 10298 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[75]= new Array();
 choices[75][0] = "GETREQUEST PDU";
 choices[75][1] = "SETRESPONSE PDU";
 choices[75][2] = "RESPONSE PDU";
 choices[75][3] = "INFORMREQUEST PDU";
 answers[75] = choices[75][1];
 units[75] = "104";
 comments[75] = "Id Pregunta: 10298. TIC A2, libre, examen 2013";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[76]= new Array();
 choices[76][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[76][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[76][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[76][3] = "Al gateway para conectar una NAS a una red SAN.";
 answers[76] = choices[76][2];
 units[76] = "48";
 comments[76] = "Id Pregunta: 10312. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10347 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En relaci&oacute;n con las tecnolog&iacute;as de gesti&oacute;n de derechos digitales, se&ntilde;ale la respuesta incorrecta:";
 choices[77]= new Array();
 choices[77][0] = "El sistema DRM creado por Apple recibe el nombre de FairPlay";
 choices[77][1] = "El sistema DRM creado por Microsoft recibe el nombre de Windows Media DRM";
 choices[77][2] = "El sistema DRM creado por Sony recibe el nombre de OpenMG";
 choices[77][3] = "El sistema DRM creado por RealNetworks es PlayReady";
 answers[77] = choices[77][3];
 units[77] = "37";
 comments[77] = "Id Pregunta: 10347. El esquema DRM desarrollado por RealNetworks es Helix DRM";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En relaci&oacute;n con el programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas), se&ntilde;ale la respuesta err&oacute;nea:";
 choices[78]= new Array();
 choices[78][0] = "Abarca el per&iacute;odo 2010-2020";
 choices[78][1] = "Actuaciones destacadas dentro del marco del programa ISA son la red transeuropea sTESTA o el apoyo al proyecto STORK";
 choices[78][2] = "Tiene como &aacute;mbito las administraciones p&uacute;blicas europeas, incluidas las administraciones regionales y locales y las instituciones y &oacute;rganos comunitarios";
 choices[78][3] = "Su base legal se recoge en la Decisi&oacute;n 922/2009/CE";
 answers[78] = choices[78][0];
 units[78] = "40";
 comments[78] = "Id Pregunta: 10355. El programa ISA abarca el per&iacute;odo 2010-2015";


//  Id pregunta: 10360 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[79]= new Array();
 choices[79][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la SETSI.";
 choices[79][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[79][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[79][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la SETSI y AENOR";
 answers[79] = choices[79][1];
 units[79] = "42";
 comments[79] = "Id Pregunta: 10360. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo";


//  Id pregunta: 10368 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a demorar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[80]= new Array();
 choices[80][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[80][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[80][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[80][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[80] = choices[80][3];
 units[80] = "28";
 comments[80] = "Id Pregunta: 10368. ";


//  Id pregunta: 10372 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es Kleopatra?";
 choices[81]= new Array();
 choices[81][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[81][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[81][2] = "Un navegador del entorno KDE";
 choices[81][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[81] = choices[81][1];
 units[81] = "72";
 comments[81] = "Id Pregunta: 10372. ";


//  Id pregunta: 10373 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[82]= new Array();
 choices[82][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[82][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[82][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[82][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[82] = choices[82][0];
 units[82] = "72";
 comments[82] = "Id Pregunta: 10373. ";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el &aacute;mbito de COBIT 5, el proceso de Gestionar la Calidad se encuentra encuadrado en el dominio de ";
 choices[83]= new Array();
 choices[83][0] = "Alinear, Planificar y Organizar";
 choices[83][1] = "Monitorizar y Evaluar.";
 choices[83][2] = "Construir, Adquirir e Implementar";
 choices[83][3] = "Monitorizar y Evaluar.";
 answers[83] = choices[83][0];
 units[83] = "98";
 comments[83] = "Id Pregunta: 10441. Examen TIC A1 2013";


//  Id pregunta: 10452 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[84]= new Array();
 choices[84][0] = "Cuantifica la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n.";
 choices[84][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[84][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[84][3] = "A y B.";
 answers[84] = choices[84][3];
 units[84] = "97";
 comments[84] = "Id Pregunta: 10452. NULL";


//  Id pregunta: 10457 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[85]= new Array();
 choices[85][0] = "&lt;canvas&gt;";
 choices[85][1] = "&lt;applet&gt;";
 choices[85][2] = "&lt;keygen&gt;";
 choices[85][3] = "&lt;audio&gt;";
 answers[85] = choices[85][1];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10457. NULL";


//  Id pregunta: 10461 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[86]= new Array();
 choices[86][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[86][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[86][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[86][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[86] = choices[86][0];
 units[86] = "51";
 comments[86] = "Id Pregunta: 10461. ";


//  Id pregunta: 10468 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;les son los nuevos elementos de HTML5?";
 choices[87]= new Array();
 choices[87][0] = "header y footer.";
 choices[87][1] = "nav.";
 choices[87][2] = "sections y articles.";
 choices[87][3] = "Todas las anteriores.";
 answers[87] = choices[87][3];
 units[87] = "69";
 comments[87] = "Id Pregunta: 10468. NULL";


//  Id pregunta: 10473 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Una CRL completa:";
 choices[88]= new Array();
 choices[88][0] = "Lista todos los certificados no expirados emitidos por la CA revocados por cualquier raz&oacute;n.";
 choices[88][1] = "Lista los certificados cuyo estado de revocaci&oacute;n ha cambiado desde la anterior CRL completa.";
 choices[88][2] = "Se emite con la periodicidad definida en la politica de actualizaciones, pero siempre que hayan transcurrido menos de 24 horas desde la &uacute;ltima emisi&oacute;n.";
 choices[88][3] = "Lista todos los certificados no expirados revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[88] = choices[88][3];
 units[88] = "73";
 comments[88] = "Id Pregunta: 10473. ";


//  Id pregunta: 10476 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Completa la frase: A diferencia de NIS, LDAP &hellip;";
 choices[89]= new Array();
 choices[89][0] = "No est&aacute; restringido a redes unix";
 choices[89][1] = "Usa notaci&oacute;n ASN.1";
 choices[89][2] = "No soporta implementaciones de software libre";
 choices[89][3] = "Se usa sobre TCP/IP";
 answers[89] = choices[89][0];
 units[89] = "73";
 comments[89] = "Id Pregunta: 10476. ";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  El certificado de firma del DNI electr&oacute;nico es un certificado (seg&uacute;n la ley de Firma Electr&oacute;nica):";
 choices[90]= new Array();
 choices[90][0] = "Avanzado";
 choices[90][1] = "Reconocido";
 choices[90][2] = "Seguro";
 choices[90][3] = "Exportable";
 answers[90] = choices[90][1];
 units[90] = "74";
 comments[90] = "Id Pregunta: 10481. NULL";


//  Id pregunta: 10507 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cual es la RFC original del protocolo SMTP?";
 choices[91]= new Array();
 choices[91][0] = "821";
 choices[91][1] = "822";
 choices[91][2] = "823";
 choices[91][3] = "Ninguna de las anteriores";
 answers[91] = choices[91][0];
 units[91] = "106";
 comments[91] = "Id Pregunta: 10507. NULL";


//  Id pregunta: 10511 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[92]= new Array();
 choices[92][0] = "I.413";
 choices[92][1] = "I.411";
 choices[92][2] = "I.431";
 choices[92][3] = "I.314";
 answers[92] = choices[92][0];
 units[92] = "109";
 comments[92] = "Id Pregunta: 10511. NULL";


//  Id pregunta: 10522 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Cu&aacute;l de los siguientes organismos no forma parte de la Comisi&oacute;n Interministerial sobre radiofrecuencias y salud";
 choices[93]= new Array();
 choices[93][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[93][1] = "El Ministerio de Sanidad, Servicios Sociales e Igualdad ";
 choices[93][2] = "El Instituto de Salud Carlos III por parte del Ministerio de Econom&iacute;a y Competitividad.";
 choices[93][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 answers[93] = choices[93][3];
 units[93] = "110";
 comments[93] = "Id Pregunta: 10522. ";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[94]= new Array();
 choices[94][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[94][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[94][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[94][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[94] = choices[94][1];
 units[94] = "48";
 comments[94] = "Id Pregunta: 10536. NULL";


//  Id pregunta: 10540 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Se&ntilde;ale la respuesta correcta en lo referente a la detecci&oacute;n y correcci&oacute;n de errores en telecomunicaciones";
 choices[95]= new Array();
 choices[95][0] = "CRC (C&oacute;digo de Redundancia C&iacute;clico) permite detectar y corregir errores en recepci&oacute;n";
 choices[95][1] = "un c&oacute;digo Hamming de distancia 3 permite detectar 2 errores y corregir 1";
 choices[95][2] = "Reed-Solomon solamente permite detectar errores, no corregirlos";
 choices[95][3] = "todas las anteriores son incorrectas";
 answers[95] = choices[95][1];
 units[95] = "100";
 comments[95] = "Id Pregunta: 10540. NULL";


//  Id pregunta: 10545 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  Europa 2020...";
 choices[96]= new Array();
 choices[96][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[96][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[96][2] = "A y B son correctas";
 choices[96][3] = "Todas son incorrectas";
 answers[96] = choices[96][2];
 units[96] = "30";
 comments[96] = "Id Pregunta: 10545. ";


//  Id pregunta: 10565 AÃ±o de creación de pregunta: 2014-01-01
 questions[97]= "98)  El volumen de datos en riesgo de p&eacute;rdida que la organizaci&oacute;n considera tolerable es:";
 choices[97]= new Array();
 choices[97][0] = "RPO (Recovery Point Objective)";
 choices[97][1] = "RTO (Recovery Time Objective) ";
 choices[97][2] = "DRP (Disater Recovery Plan)";
 choices[97][3] = "Business Impact Analysis (BIA)";
 answers[97] = choices[97][0];
 units[97] = "31, 32, 33";
 comments[97] = "Id Pregunta: 10565. ";


//  Id pregunta: 10568 AÃ±o de creación de pregunta: 2014-01-01
 questions[98]= "99)  Una de las diferencias entre un Plan de Recuperaci&oacute;n ante desastres (PRD o DRP en ingl&eacute;s) y un Plan de Contingencia es que:";
 choices[98]= new Array();
 choices[98][0] = "El PRD debe ser realizado antes que el Plan de Contingencia";
 choices[98][1] = "El Plan de Contingencia debe ser realizado antes que el PRD";
 choices[98][2] = "El Plan de Contingencia realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el PRD, en paralelo al Plan de Contingencia, trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 choices[98][3] = "El PRD realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el Plan de Contingencia trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 answers[98] = choices[98][2];
 units[98] = "32";
 comments[98] = "Id Pregunta: 10568. ";


//  Id pregunta: 10569 AÃ±o de creación de pregunta: 2014-01-01
 questions[99]= "100)  La probabilidad de explosi&oacute;n por escape de gas en una f&aacute;brica es de 0'0001. Si llega a producirse se sabe que morir&aacute;n al menos diez empleados y se producir&aacute;n p&eacute;rdidas materiales por al menos de 100 millones de euros. &iquest;Cu&aacute;l es riesgo cuantitativo asociado a la amenaza de explosi&oacute;n?";
 choices[99]= new Array();
 choices[99][0] = "10000 euros";
 choices[99][1] = "100 millones de euros";
 choices[99][2] = "No se puede valorar porque la p&eacute;rdida de vidas humanas no es cuantificable (salvo para las compa&ntilde;&iacute;as de seguros)";
 choices[99][3] = "Muy alto";
 answers[99] = choices[99][2];
 units[99] = "33";
 comments[99] = "Id Pregunta: 10569. ";


