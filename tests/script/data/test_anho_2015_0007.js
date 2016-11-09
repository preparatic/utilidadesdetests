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

//  Id pregunta: 10581 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  Son principios generales de la Ley 11/2007:";
 choices[0]= new Array();
 choices[0][0] = "Neutralidad tecnol&oacute;gica, accesibilidad y disponibilidad.";
 choices[0][1] = "Informaci&oacute;n, igualdad y legalidad.";
 choices[0][2] = "Calidad, conectividad y seguridad.";
 choices[0][3] = "Cooperaci&oacute;n, responsabilidad y transparencia.";
 answers[0] = choices[0][3];
 units[0] = "43";
 comments[0] = "Id Pregunta: 10581. Art&iacute;culo 4, Ley 11/2007.";


//  Id pregunta: 10592 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  La LOPD:";
 choices[1]= new Array();
 choices[1][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[1][1] = "A y C son correctas";
 choices[1][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[1][3] = "A y C son incorrectas.";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 10592. ";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[2]= new Array();
 choices[2][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[2][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[2][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[2][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[2] = choices[2][2];
 units[2] = "29";
 comments[2] = "Id Pregunta: 10593. ";


//  Id pregunta: 10596 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  Un plan de emergencia es un plan por el que...";
 choices[3]= new Array();
 choices[3][0] = "&hellip; se realiza una nueva puesta en marcha del negocio tras un incidente.";
 choices[3][1] = "&hellip; disminuye el riesgo de aparici&oacute;n de incidentes menores.";
 choices[3][2] = "&hellip; se fuerza la indisponibilidad de los recursos cr&iacute;ticos de informaci&oacute;n.";
 choices[3][3] = "&hellip; se prepara el entorno de continuidad en condiciones precarias.";
 answers[3] = choices[3][3];
 units[3] = "32";
 comments[3] = "Id Pregunta: 10596. ";


//  Id pregunta: 10602 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  Indique cu&aacute;l de &eacute;stos es un problema asociado al cloud computing:";
 choices[4]= new Array();
 choices[4][0] = "Necesita de una mayor inversi&oacute;n inicial que una infraestructura in-house.";
 choices[4][1] = "Lock-in (cliente cautivo)";
 choices[4][2] = "Generalmente la implantaci&oacute;n es m&aacute;s lenta que con una infraestructura in-house.";
 choices[4][3] = "Ninguno de los anteriores.";
 answers[4] = choices[4][1];
 units[4] = "47";
 comments[4] = "Id Pregunta: 10602. ";


//  Id pregunta: 10618 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  El planificador de Windows:";
 choices[5]= new Array();
 choices[5][0] = "Se ejecuta en el hilo de planificaci&oacute;n central del kernel.";
 choices[5][1] = "Su c&oacute;digo se ejecuta cuando se completa una operaci&oacute;n de E/S.";
 choices[5][2] = "Windows no tiene planificador.";
 choices[5][3] = "Est&aacute; escrito en Python.";
 answers[5] = choices[5][1];
 units[5] = "56";
 comments[5] = "Id Pregunta: 10618. ";


//  Id pregunta: 10626 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  El sistema operativo Android:";
 choices[6]= new Array();
 choices[6][0] = "Est&aacute; basado en el kernel de Linux.";
 choices[6][1] = "Est&aacute; basado en la distribuci&oacute;n &ldquo;Ubuntu Touch&rdquo;.";
 choices[6][2] = "Es una distribuci&oacute;n de Linux.";
 choices[6][3] = "Es el resultado de la combinaci&oacute;n de Linux y Firefox OS.";
 answers[6] = choices[6][0];
 units[6] = "52.54";
 comments[6] = "Id Pregunta: 10626. ";


//  Id pregunta: 10631 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  El proceso de M&eacute;trica v3 &ldquo;Planificaci&oacute;n de los Sistemas de Informaci&oacute;n&rdquo; (PSI) tiene como objetivo:";
 choices[7]= new Array();
 choices[7][0] = "Obtener una especificaci&oacute;n detallada del sistema de informaci&oacute;n.";
 choices[7][1] = "Proponer una arquitectura de la informaci&oacute;n a alto nivel.";
 choices[7][2] = "Analizar las necesidades del sistema y proponer una soluci&oacute;n a corto plazo.";
 choices[7][3] = "Obtener una nueva versi&oacute;n de un sistema de informaci&oacute;n preexistente.";
 answers[7] = choices[7][1];
 units[7] = "86";
 comments[7] = "Id Pregunta: 10631. ";


//  Id pregunta: 10639 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  En Scrum, el prop&oacute;sito de la retrospectiva del Sprint es:";
 choices[8]= new Array();
 choices[8][0] = "Revisar el estado del producto que se ha desarrollado durante el Sprint.";
 choices[8][1] = "Realizar una mejora continua del proceso.";
 choices[8][2] = "Que el Scrum Master comunique al equipo lo que deben mejorar para el siguiente Sprint.";
 choices[8][3] = "Asignar las tareas del siguiente Sprint a los diferentes miembros del equipo.";
 answers[8] = choices[8][1];
 units[8] = "79";
 comments[8] = "Id Pregunta: 10639. ";


//  Id pregunta: 10651 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[9]= new Array();
 choices[9][0] = "La tarjeta SIM contiene la clave del algoritmo de autenticaci&oacute;n con la red GSM.";
 choices[9][1] = "En GSM se utilizan circuitos conmutados extremo a extremo.";
 choices[9][2] = "En la arquitectura de GSM, la interfaz Um se encuentra entre el Subsistema de Estaci&oacute;n Base (BSS) y el Subsistema de Red y  Conmutaci&oacute;n (NSS).";
 choices[9][3] = "En GSM, la separaci&oacute;n entre portadoras ascendente y descendente es de 45 Mhz.";
 answers[9] = choices[9][2];
 units[9] = "108";
 comments[9] = "Id Pregunta: 10651. ";


//  Id pregunta: 10655 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  Indique cu&aacute;l de estos est&aacute;ndares especifica las normas de funcionamiento de la capa f&iacute;sica y de enlace en una WLAN:";
 choices[10]= new Array();
 choices[10][0] = "802.11b";
 choices[10][1] = "802.11g";
 choices[10][2] = "802.11ac";
 choices[10][3] = "Todos los anteriores.";
 answers[10] = choices[10][3];
 units[10] = "107.111";
 comments[10] = "Id Pregunta: 10655. ";


//  Id pregunta: 10659 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  Se&ntilde;ale aquella opci&oacute;n que no es una WPAN:";
 choices[11]= new Array();
 choices[11][0] = "NFC";
 choices[11][1] = "IRDA";
 choices[11][2] = "Wibree";
 choices[11][3] = "CSMA";
 answers[11] = choices[11][3];
 units[11] = "107";
 comments[11] = "Id Pregunta: 10659. ";


//  Id pregunta: 10670 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  En una granja de servidores:";
 choices[12]= new Array();
 choices[12][0] = "Los servidores suelen estar en localizaciones distintas.";
 choices[12][1] = "Los servidores se reparten las tareas que podr&iacute;a ejecutar un solo servidor.";
 choices[12][2] = "Suelen haber equipos de respaldo (backup)";
 choices[12][3] = "Ninguna de las anteriores.";
 answers[12] = choices[12][2];
 units[12] = "113";
 comments[12] = "Id Pregunta: 10670. ";


//  Id pregunta: 10686 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[13]= new Array();
 choices[13][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[13][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[13][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y  desistir de acciones.";
 choices[13][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[13] = choices[13][1];
 units[13] = "30";
 comments[13] = "Id Pregunta: 10686. ";


//  Id pregunta: 10695 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[14]= new Array();
 choices[14][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[14][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[14][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[14][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[14] = choices[14][1];
 units[14] = "30";
 comments[14] = "Id Pregunta: 10695. ";


//  Id pregunta: 10736 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, &iquest;qu&eacute; se utilizar&aacute; para facilitar la reutilizaci&oacute;n de vocabularios?";
 choices[15]= new Array();
 choices[15][0] = "El Centro de Interoperabilidad Sem&aacute;ntica de la Administraci&oacute;n";
 choices[15][1] = "El formato SCSP";
 choices[15][2] = "El Intercambio a trav&eacute;s de la Red SARA";
 choices[15][3] = "El Centro de Promoci&oacute;n de la Reutilizaci&oacute;n de la AGE";
 answers[15] = choices[15][0];
 units[15] = "43";
 comments[15] = "Id Pregunta: 10736. ";


//  Id pregunta: 10773 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  Se&ntilde;ale la respuesta correcta. Seg&uacute;n se establece en la Ley de Firma Electr&oacute;nica 59/2003 en su art&iacute;culo 32, las multas establecidas al infractor ser&aacute;n de:";
 choices[16]= new Array();
 choices[16][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros.";
 choices[16][1] = "Por la comisi&oacute;n de infracciones muy graves, multa de 60.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 6.001 a 60.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 6.000 euros.";
 choices[16][2] = "Por la comisi&oacute;n de infracciones muy graves, multa de 120.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 12.001 a 120.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 12.000 euros.";
 choices[16][3] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 15.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 15.000 euros.";
 answers[16] = choices[16][0];
 units[16] = "30";
 comments[16] = "Id Pregunta: 10773. Examen GSI 2014";


//  Id pregunta: 10798 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  Apache Cassandra es:";
 choices[17]= new Array();
 choices[17][0] = "Un servidor de comunicaciones.";
 choices[17][1] = "Una base de datos NoSQL distribuida.";
 choices[17][2] = "Un sistema de claves privadas.";
 choices[17][3] = "Un protocolo de comunicaciones.";
 answers[17] = choices[17][1];
 units[17] = "57";
 comments[17] = "Id Pregunta: 10798. Examen GSI 2014";


//  Id pregunta: 10802 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[18]= new Array();
 choices[18][0] = "Request.";
 choices[18][1] = "Invoke.";
 choices[18][2] = "Response.";
 choices[18][3] = "Confirmation.";
 answers[18] = choices[18][1];
 units[18] = "100";
 comments[18] = "Id Pregunta: 10802. Examen GSI 2014";


//  Id pregunta: 10803 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  Se&ntilde;ale qu&eacute; n&uacute;mero de puerto deber&iacute;a usarse si se quiere configurar un servicio para la autenticaci&oacute;n de redes Kerberos:";
 choices[19]= new Array();
 choices[19][0] = "88";
 choices[19][1] = "42";
 choices[19][2] = "74";
 choices[19][3] = "105";
 answers[19] = choices[19][0];
 units[19] = "111";
 comments[19] = "Id Pregunta: 10803. Examen GSI 2014";


//  Id pregunta: 10808 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[20]= new Array();
 choices[20][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[20][1] = "Estructura de respuesta a incidentes.";
 choices[20][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[20][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[20] = choices[20][1];
 units[20] = "31, 32, 33";
 comments[20] = "Id Pregunta: 10808. Examen GSI 2014";


//  Id pregunta: 10819 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes NO es una metodolog&iacute;a de desarrollo?";
 choices[21]= new Array();
 choices[21][0] = "MERISE.";
 choices[21][1] = "SDM (Structured Development Method).";
 choices[21][2] = "RUP (Rational Unified Process).";
 choices[21][3] = "SCRUM.";
 answers[21] = choices[21][1];
 units[21] = "79";
 comments[21] = "Id Pregunta: 10819. Examen GSI 2014";


//  Id pregunta: 10824 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[22]= new Array();
 choices[22][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[22][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[22][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[22][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[22] = choices[22][0];
 units[22] = "86";
 comments[22] = "Id Pregunta: 10824. Examen GSI 2014";


//  Id pregunta: 10834 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Tipos Abstractos de Datos (TAD) es correcta?";
 choices[23]= new Array();
 choices[23][0] = "Los TAD describen datos simples abstractos en funci&oacute;n de las operaciones que pueden efectuar, dejando a un lado su implementaci&oacute;n.";
 choices[23][1] = "Las listas son TAD caracterizados por incluir elementos homog&eacute;neos relacionados linealmente, con un antecesor y un sucesor, a excepci&oacute;n del primer y &uacute;ltimo elemento, salvo en el caso de listas circulares.";
 choices[23][2] = "Los &aacute;rboles son TAD en los que cada nodo se caracteriza por su grado de entrada (n&uacute;mero de arcos que llegan al nodo) y su grado de salida (n&uacute;mero de arcos que salen del nodo). Existen &aacute;rboles dirigidos y no dirigidos.";
 choices[23][3] = "Dado un grafo, el orden del mismo es el n&uacute;mero mayor de arcos o aristas de sus nodos.";
 answers[23] = choices[23][1];
 units[23] = "0";
 comments[23] = "Id Pregunta: 10834. Examen GSI 2014";


//  Id pregunta: 10853 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  Se&ntilde;ale la respuesta INCORRECTA respecto a la tecnolog&iacute;a de Servicios Web REST:";
 choices[24]= new Array();
 choices[24][0] = "JAX-RS es una API Java que proporciona soporte en la creaci&oacute;n de servicios web de acuerdo con REST.";
 choices[24][1] = "Jersey es una implementaci&oacute;n de referencia de servicios web REST.";
 choices[24][2] = "REST publica recursos que son accesibles a trav&eacute;s de m&eacute;todos http, por ejemplo POST y GET.";
 choices[24][3] = "Los recursos REST permiten s&oacute;lo 3 operaciones: CREATE, UPDATE y DELETE.";
 answers[24] = choices[24][3];
 units[24] = "51";
 comments[24] = "Id Pregunta: 10853. Examen GSI 2014";


//  Id pregunta: 10867 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  El comando ping es el acr&oacute;nimo de:";
 choices[25]= new Array();
 choices[25][0] = "Packet Internet Group.";
 choices[25][1] = "Packet Internet Gangway.";
 choices[25][2] = "Packet Internet Gate.";
 choices[25][3] = "Packet Internet Groper.";
 answers[25] = choices[25][3];
 units[25] = "112";
 comments[25] = "Id Pregunta: 10867. Examen GSI 2014";


//  Id pregunta: 10883 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:";
 choices[26]= new Array();
 choices[26][0] = "SetRequest PDU";
 choices[26][1] = "InformRequest PDU";
 choices[26][2] = "Report PDU";
 choices[26][3] = "GetBackRequest PDU";
 answers[26] = choices[26][3];
 units[26] = "112";
 comments[26] = "Id Pregunta: 10883. Examen GSI 2014";


//  Id pregunta: 10887 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[27]= new Array();
 choices[27][0] = "OCSP";
 choices[27][1] = "CRL";
 choices[27][2] = "PKCS#10";
 choices[27][3] = "HTTPS";
 answers[27] = choices[27][0];
 units[27] = "73, 74";
 comments[27] = "Id Pregunta: 10887. Examen GSI 2014";


//  Id pregunta: 10892 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[28]= new Array();
 choices[28][0] = "Loopback.";
 choices[28][1] = "Indefinida (Unspecified).";
 choices[28][2] = "Multicast.";
 choices[28][3] = "No es v&aacute;lida.";
 answers[28] = choices[28][0];
 units[28] = "100";
 comments[28] = "Id Pregunta: 10892. Examen GSI 2014";


//  Id pregunta: 10900 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[29]= new Array();
 choices[29][0] = "Mediante claves sim&eacute;tricas.";
 choices[29][1] = "Mediante claves asim&eacute;tricas.";
 choices[29][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[29][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[29] = choices[29][0];
 units[29] = "73, 74";
 comments[29] = "Id Pregunta: 10900. Examen GSI 2014";


//  Id pregunta: 10907 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[30]= new Array();
 choices[30][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[30][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[30][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[30][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[30] = choices[30][1];
 units[30] = "107";
 comments[30] = "Id Pregunta: 10907. Examen GSI 2014";


//  Id pregunta: 10941 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  Respecto al protocolo Oauth, se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "Es propietario de Twitter, y permite gestionar el acceso a su API por parte de otras aplicaciones.";
 choices[31][1] = "Permite su uso en aplicaciones web y m&oacute;viles, pero no de escritorio.";
 choices[31][2] = "Permite el acceso a la identidad completa del usuario por parte del servidor de aplicaciones.";
 choices[31][3] = "Permite utilizar la cuenta de Facebook para acceder a otras aplicaciones.";
 answers[31] = choices[31][3];
 units[31] = "118";
 comments[31] = "Id Pregunta: 10941. TIC A1 AGE 2014";


//  Id pregunta: 10945 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  Respecto a Bluetooth es correcto que:";
 choices[32]= new Array();
 choices[32][0] = "No utiliza la misma banda de frecuencia que Wi-Fi (802.11), por lo que no se interfieren mutuamente.";
 choices[32][1] = "Con 802.11 AMP puede llegar a 24 Mbps.";
 choices[32][2] = "Debe evitarse en entornos escolares debido a que emite radiaci&oacute;n ionizante.";
 choices[32][3] = "Debe emitirse con un m&iacute;nimo de 10 watios.";
 answers[32] = choices[32][1];
 units[32] = "107";
 comments[32] = "Id Pregunta: 10945. TIC A1 AGE 2014";


//  Id pregunta: 10977 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  En referencia al software &ldquo;Windows Mobile Device Center&rdquo;, se&ntilde;ale la respuesta correcta:";
 choices[33]= new Array();
 choices[33][0] = "Es un software de sincronizaci&oacute;n precursor del ActiveSync.";
 choices[33][1] = "Ofrece un controlador de base incorporado a la interfaz de dispositivos en el explorador de Windows.";
 choices[33][2] = "Permite que un dispositivo m&oacute;vil se sincronice con un pc o un servidor que ejecute Microsoft Exchange Server.";
 choices[33][3] = "Es un programa de sincronizaci&oacute;n desarrollado para su uso con sistemas operativos Linux.";
 answers[33] = choices[33][2];
 units[33] = "56";
 comments[33] = "Id Pregunta: 10977. TIC A1 AGE 2014";


//  Id pregunta: 11010 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  &iquest;C&oacute;mo se llaman los &oacute;rganos colegiados de &aacute;mbito departamental responsables del impulso y de la coordinaci&oacute;n interna en cada departamento en materia de Administraci&oacute;n digital?";
 choices[34]= new Array();
 choices[34][0] = "Comisiones Ministeriales de Administraci&oacute;n Electr&oacute;nica";
 choices[34][1] = "Comisiones Ministeriales de Administraci&oacute;n Digital";
 choices[34][2] = "Subdirecciones TIC";
 choices[34][3] = "Direcci&oacute;n TIC";
 answers[34] = choices[34][1];
 units[34] = "24";
 comments[34] = "Id Pregunta: 11010. ";


//  Id pregunta: 11011 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  &iquest;Qu&eacute; niveles de Complemento de Destino engloban los puestos del grupo A1?";
 choices[35]= new Array();
 choices[35][0] = "18 a 28";
 choices[35][1] = "18 a 30";
 choices[35][2] = "20 a 30";
 choices[35][3] = "26 a 30";
 answers[35] = choices[35][2];
 units[35] = "24";
 comments[35] = "Id Pregunta: 11011. ";


//  Id pregunta: 11027 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es la Asociaci&oacute;n Europea de Fabricantes de Ordenadores?";
 choices[36]= new Array();
 choices[36][0] = "ETSI";
 choices[36][1] = "CECUA";
 choices[36][2] = "ECMA";
 choices[36][3] = "ECTA";
 answers[36] = choices[36][2];
 units[36] = "42";
 comments[36] = "Id Pregunta: 11027. ";


//  Id pregunta: 11047 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l es la &uacute;ltima versi&oacute;n de HTTP a fecha Octubre 2015?";
 choices[37]= new Array();
 choices[37][0] = "1.1";
 choices[37][1] = "2";
 choices[37][2] = "1.3";
 choices[37][3] = "3";
 answers[37] = choices[37][1];
 units[37] = "69";
 comments[37] = "Id Pregunta: 11047. ";


//  Id pregunta: 11059 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  &iquest;Qu&eacute; tipo de restricciones en el modelo de Entidad-Relaci&oacute;n hacen referencia al formato de escritura del atributo?";
 choices[38]= new Array();
 choices[38][0] = "Restricciones sem&aacute;nticas";
 choices[38][1] = "Restricciones sint&aacute;cticas";
 choices[38][2] = "Restricciones estructurales";
 choices[38][3] = "Restricciones de usuario";
 answers[38] = choices[38][1];
 units[38] = "80";
 comments[38] = "Id Pregunta: 11059. ";


//  Id pregunta: 11071 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  La definici&oacute;n de requerimientos funcionales para un nuevo servicio es parte de:";
 choices[39]= new Array();
 choices[39][0] = "Operaci&oacute;n del Servicio: Gesti&oacute;n de Aplicaciones";
 choices[39][1] = "Estrategia del Servicio: Gesti&oacute;n de la Cartera de Servicios";
 choices[39][2] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de la Arquitectura Tecnol&oacute;gica";
 choices[39][3] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de Soluciones del Servicio";
 answers[39] = choices[39][3];
 units[39] = "98";
 comments[39] = "Id Pregunta: 11071. ";


//  Id pregunta: 11082 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  Cu&aacute;l es la descripci&oacute;n correcta de operaci&oacute;n normal del servicio";
 choices[40]= new Array();
 choices[40][0] = "El servicio es operado de la manera usual, sin que ocurran incidencias";
 choices[40][1] = "El servicio es facilitado con todas las funcionalidades y rendimiento que el negocio desea";
 choices[40][2] = "El servicio es operado dentro de los limites definidos en los Acuerdos de Nivel de Servicio (Servicie Level Agreement &ndash; SLA)";
 choices[40][3] = "Todos los usuarios pueden registrarse en el servicio y utilizarlo";
 answers[40] = choices[40][2];
 units[40] = "98";
 comments[40] = "Id Pregunta: 11082. ";


//  Id pregunta: 11083 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l es la principal raz&oacute;n para establecer una L&iacute;nea Base (Baseline)?";
 choices[41]= new Array();
 choices[41][0] = "Estandarizar la operaci&oacute;n";
 choices[41][1] = "Conocer el coste de los servicios proporcionados";
 choices[41][2] = "Para que los roles y responsabilidades sean claras";
 choices[41][3] = "Para comparaciones posteriores";
 answers[41] = choices[41][3];
 units[41] = "98";
 comments[41] = "Id Pregunta: 11083. ";


//  Id pregunta: 11096 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  Las dependencias entre actividades en gesti&oacute;n de proyectos pueden ser (Seleccione la verdadera):";
 choices[42]= new Array();
 choices[42][0] = "Obligatorias y discrecionales";
 choices[42][1] = "Obligatorias, discrecionales y externas";
 choices[42][2] = "Obligatorias, discrecionales, externas e internas";
 choices[42][3] = "Obligatorias, discrecionales, externas, internas y sincronizadas.";
 answers[42] = choices[42][1];
 units[42] = "28";
 comments[42] = "Id Pregunta: 11096. ";


//  Id pregunta: 11102 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[43]= new Array();
 choices[43][0] = "200 p&iacute;xeles por pulgada";
 choices[43][1] = "125 p&iacute;xeles por pulgada";
 choices[43][2] = "256 p&iacute;xeles por pulgada";
 choices[43][3] = "80 p&iacute;xeles por pulgada";
 answers[43] = choices[43][0];
 units[43] = "30";
 comments[43] = "Id Pregunta: 11102. ";


//  Id pregunta: 11103 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[44]= new Array();
 choices[44][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[44][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[44][2] = "Las respuestas a) y b) son falsas";
 choices[44][3] = "Las respuestas a) y b) son verdaderas";
 answers[44] = choices[44][3];
 units[44] = "30";
 comments[44] = "Id Pregunta: 11103. ";


//  Id pregunta: 11109 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  Seleccione la respuesta verdadera:";
 choices[45]= new Array();
 choices[45][0] = "Un Valor Actual Neto mayor que 0 indica que la inversi&oacute;n es rentable";
 choices[45][1] = "Un Valor Actual Neto mayor que 0 indica que la TIR es inferior al coste del capital";
 choices[45][2] = "Las respuestas a) y b) son falsas";
 choices[45][3] = "Las respuestas a) y b) son verdaderas";
 answers[45] = choices[45][0];
 units[45] = "38";
 comments[45] = "Id Pregunta: 11109. ";


//  Id pregunta: 11113 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[46]= new Array();
 choices[46][0] = "Organismo p&uacute;blicos";
 choices[46][1] = "Ministerios";
 choices[46][2] = "Comunidades Aut&oacute;nomas";
 choices[46][3] = "Todas las anteriores";
 answers[46] = choices[46][3];
 units[46] = "30";
 comments[46] = "Id Pregunta: 11113. ";


//  Id pregunta: 11114 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = "Estar conectado a Red SARA.";
 choices[47][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[47][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[47][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[47] = choices[47][1];
 units[47] = "30";
 comments[47] = "Id Pregunta: 11114. ";


//  Id pregunta: 11127 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un servicio de Amazon de Cloud Computing?";
 choices[48]= new Array();
 choices[48][0] = "Amazon CloudWatch";
 choices[48][1] = "Amazon Elastic Compute Cloud";
 choices[48][2] = "Amazon AppFabric";
 choices[48][3] = "Amazon Simple Storage Service";
 answers[48] = choices[48][2];
 units[48] = "47";
 comments[48] = "Id Pregunta: 11127. ";


//  Id pregunta: 11156 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  Seleccione la respuesta err&oacute;nea de los diagramas E/R:";
 choices[49]= new Array();
 choices[49][0] = "Los atributos multivalorados son aquellos que pueden contener m&aacute;s de un valor simult&aacute;neamente, y monovalorados los que s&oacute;lo pueden contener un valor";
 choices[49][1] = "Los atributos monovalorados se representan por un nombre dentro de una elipse, mientras que los multivalorados por un nombre dentro de una doble elipse.";
 choices[49][2] = "Se dice que un atributo es compuesto cuando puede descomponerse en otros componentes o atributos m&aacute;s peque&ntilde;os, y simple en otro caso.";
 choices[49][3] = "Se dice que un atributo es cardinal si obligatoriamente tiene que tener al menos un valor";
 answers[49] = choices[49][3];
 units[49] = "80";
 comments[49] = "Id Pregunta: 11156. ";


//  Id pregunta: 11170 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de contenidos opensource?";
 choices[50]= new Array();
 choices[50][0] = "Drupal";
 choices[50][1] = "Joomla";
 choices[50][2] = "Alfresco";
 choices[50][3] = "Sharepoint";
 answers[50] = choices[50][3];
 units[50] = "95";
 comments[50] = "Id Pregunta: 11170. ";


//  Id pregunta: 11175 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Qu&eacute; organismo es el responsable del est&aacute;ndar X.500?";
 choices[51]= new Array();
 choices[51][0] = "ITU-T";
 choices[51][1] = "ISO";
 choices[51][2] = "IETF";
 choices[51][3] = "IEEE";
 answers[51] = choices[51][2];
 units[51] = "106";
 comments[51] = "Id Pregunta: 11175. ";


//  Id pregunta: 11180 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas se a&ntilde;ade en la Versi&oacute;n 3 del protocolo SNMP?";
 choices[52]= new Array();
 choices[52][0] = "Permite a los agentes informar de forma espontanea al gestor de un evento";
 choices[52][1] = "Enviar mensajes no solicitados al gestor";
 choices[52][2] = "Mecanismos de autentificaci&oacute;n, privacidad y control de accesos verdaderamente s&oacute;lidos.";
 choices[52][3] = "Permite que el agente informe espont&aacute;neamente de excepciones y errores en el protocolo";
 answers[52] = choices[52][2];
 units[52] = "104";
 comments[52] = "Id Pregunta: 11180. ";


//  Id pregunta: 11182 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  &iquest;C&oacute;mo se denominan los sistemas de comunicaciones m&oacute;viles que realizan la transmisi&oacute;n y recepci&oacute;n de forma secuencial en un sentido cada vez?";
 choices[53]= new Array();
 choices[53][0] = "Paralelos";
 choices[53][1] = "D&uacute;plex";
 choices[53][2] = "Semi-duplex";
 choices[53][3] = "Ninguno de los anteriores";
 answers[53] = choices[53][2];
 units[53] = "108";
 comments[53] = "Id Pregunta: 11182. ";


//  Id pregunta: 11205 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[54]= new Array();
 choices[54][0] = "Confianza Digital";
 choices[54][1] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[54][2] = "Impulsar i+d TIC";
 choices[54][3] = "Impulso de los servicios p&uacute;blicos digitales";
 answers[54] = choices[54][3];
 units[54] = "30";
 comments[54] = "Id Pregunta: 11205. ";


//  Id pregunta: 11213 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;De qu&eacute; plan de la Agenda Digital Espa&ntilde;ola es fruto la Estrategia de Ciberseguridad?";
 choices[55]= new Array();
 choices[55][0] = "Plan de Desarrollo e Innovaci&oacute;n TIC";
 choices[55][1] = "Plan de Confianza en el &aacute;mbito Digital";
 choices[55][2] = "Plan de Seguridad Integral en las Comunicaciones TIC";
 choices[55][3] = "Plan de Aseguramiento de la Econom&iacute;a Digital y los Contenidos Digitales";
 answers[55] = choices[55][1];
 units[55] = "30";
 comments[55] = "Id Pregunta: 11213. ";


//  Id pregunta: 11215 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  Sobre la  tecnolog&iacute;a Java WebStart es cierto que:";
 choices[56]= new Array();
 choices[56][0] = "Permite la  instalaci&oacute;n de la aplicaci&oacute;n pero no su actualizaci&oacute;n.";
 choices[56][1] = "Permite la distribuci&oacute;n de aplicaciones Java sin instalaci&oacute;n adicional y desde cualquier navegador web.";
 choices[56][2] = "Utiliza JNLP (Java LaunchingProtocol) definido en la JSR-56 y basado en XML.";
 choices[56][3] = "Las dos anteriores son ciertas.";
 answers[56] = choices[56][3];
 units[56] = "60";
 comments[56] = "Id Pregunta: 11215. ";


//  Id pregunta: 11224 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  En ADO.NET:";
 choices[57]= new Array();
 choices[57][0] = "Cualquier fuente de datos debe ser convertida a XML para ser accesible por Dataset";
 choices[57][1] = "DataReader proporciona un puente entre el objeto DataSet y el origen de datos.";
 choices[57][2] = "El DataSet contiene una colecci&oacute;n de uno o m&aacute;s objetos DataTable, formados por filas y columnas de datos pero sin incluir informaci&oacute;n de restricciones ni claves externas.";
 choices[57][3] = "ADO.NET Entity es un tipo de framework ORM.";
 answers[57] = choices[57][3];
 units[57] = "59";
 comments[57] = "Id Pregunta: 11224. ";


//  Id pregunta: 11228 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes pasos es incorrecto para desplegar un servlet en un servidor web?";
 choices[58]= new Array();
 choices[58][0] = "Indicando en el web.xml la URL a la que responder&aacute; y la clase que lo implementar&aacute;.";
 choices[58][1] = "Implementado la clase del servlet, que implementar&aacute; la interfaz de IhttpServlet.";
 choices[58][2] = "Implementado la clase del servlet, que heredar&aacute; de la clase abstracta HttpServlet.";
 choices[58][3] = "Copiar la clase compilada en el directorio del servidor WEB-INF\classes\.";
 answers[58] = choices[58][1];
 units[58] = "116";
 comments[58] = "Id Pregunta: 11228. ";


//  Id pregunta: 11264 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  Seleccione la opci&oacute;n correcta m&aacute;s precisa sobre las obligaciones previas a la expedici&oacute;n de certificados reconocidos incluida en la ley de firma electr&oacute;nica:";
 choices[59]= new Array();
 choices[59][0] = "Asegurarse de que el firmante est&aacute; en posesi&oacute;n de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[59][1] = "Asegurarse de que el firmante tiene el control exclusivo sobre el uso de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[59][2] = "La respuesta B) es correcta, la cual fue a&ntilde;adida por la ley 25/2015 de reducci&oacute;n de la carga financiera y otras medidas de orden social, que introduc&iacute;a cambios en la Ley 59/2003 de firma electr&oacute;nica para dar soporte jur&iacute;dico a la denominada firma en la nube.";
 choices[59][3] = "La respuesta A) es correcta, ya que la &uacute;ltima modificaci&oacute;n a la ley de firma electr&oacute;nica fue realizada por  la ley 9/2014 General de Telecomunicaciones, que ampliaba el periodo de validez de los certificados reconocidos a 5 a&ntilde;os.";
 answers[59] = choices[59][2];
 units[59] = "73";
 comments[59] = "Id Pregunta: 11264. ";


//  Id pregunta: 11275 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Entre las opciones que posee una organizaci&oacute;n para obtener servicios en la nube:";
 choices[60]= new Array();
 choices[60][0] = "La nube comunitaria implica menor complejidad en la integraci&oacute;n de la soluci&oacute;n cloud.";
 choices[60][1] = "El retorno de la inversi&oacute;n es m&aacute;s lento en la nube p&uacute;blica que en la nube privada.";
 choices[60][2] = "La nube h&iacute;brida permite compaginar la auto-provisi&oacute;n de procesos cr&iacute;ticos y ganar flexibilidad en aquellos que tienen menor criticidad.";
 choices[60][3] = "La nube p&uacute;blica nos da la posibilidad de aprovechar las infraestructuras ya existentes en la organizaci&oacute;n.";
 answers[60] = choices[60][2];
 units[60] = "47";
 comments[60] = "Id Pregunta: 11275. ";


//  Id pregunta: 11279 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Los servicios WMS de OGC se consideran servicios de:";
 choices[61]= new Array();
 choices[61][0] = "Localizaci&oacute;n";
 choices[61][1] = "Descarga";
 choices[61][2] = "Transformaci&oacute;n";
 choices[61][3] = "Visualizaci&oacute;n";
 answers[61] = choices[61][3];
 units[61] = "67";
 comments[61] = "Id Pregunta: 11279. ";


//  Id pregunta: 11292 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de un gestor documental?";
 choices[62]= new Array();
 choices[62][0] = "Creaci&oacute;n";
 choices[62][1] = "Redifusi&oacute;n";
 choices[62][2] = "Expurgo";
 choices[62][3] = "Todas lo son";
 answers[62] = choices[62][1];
 units[62] = "95";
 comments[62] = "Id Pregunta: 11292. ";


//  Id pregunta: 11339 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[63]= new Array();
 choices[63][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[63][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[63][2] = "ISO 9001 consta de ocho secciones";
 choices[63][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[63] = choices[63][0];
 units[63] = "92";
 comments[63] = "Id Pregunta: 11339. ";


//  Id pregunta: 11354 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  En cuanto a la segmentaci&oacute;n de dominios en una red se&ntilde;ale la verdadera";
 choices[64]= new Array();
 choices[64][0] = "Un switch segmenta dominios de colisi&oacute;n y de broadcast";
 choices[64][1] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n de manera f&iacute;sica y de broadcast de manera l&oacute;gica";
 choices[64][2] = "Un router segmenta dominios de broadcast de manera f&iacute;sica";
 choices[64][3] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n y de broadcast de manera f&iacute;sica";
 answers[64] = choices[64][2];
 units[64] = "102";
 comments[64] = "Id Pregunta: 11354. ";


//  Id pregunta: 11375 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos son las caracter&iacute;sticas claves que contribuyen al &eacute;xito de ITIL?: 1. Es neutral respecto a fabricantes y vendedores; 2. No es prescriptivo; 3. Es una mejor pr&aacute;ctica; 4. Es un est&aacute;ndar";
 choices[65]= new Array();
 choices[65][0] = "Solo 3";
 choices[65][1] = "Solo 1, 2 y 3";
 choices[65][2] = "Todos los anteriores";
 choices[65][3] = "Solo 2, 3 y 4";
 answers[65] = choices[65][1];
 units[65] = "98";
 comments[65] = "Id Pregunta: 11375. ";


//  Id pregunta: 11385 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[66]= new Array();
 choices[66][0] = "Gesti&oacute;n de la capacidad";
 choices[66][1] = "Gesti&oacute;n de suministradores";
 choices[66][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[66][3] = "Gesti&oacute;n de cambios";
 answers[66] = choices[66][0];
 units[66] = "98";
 comments[66] = "Id Pregunta: 11385. ";


//  Id pregunta: 11418 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n la Ley 9/2014, las decisiones de otorgamiento de uso de numeraci&oacute;n, direccionamiento y denominaci&oacute;n se adoptar&aacute;n y comunicar&aacute;n en un plazo m&aacute;ximo de:";
 choices[67]= new Array();
 choices[67][0] = "15 d&iacute;as.";
 choices[67][1] = "10 d&iacute;as.";
 choices[67][2] = "3 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 choices[67][3] = "6 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 answers[67] = choices[67][3];
 units[67] = "110";
 comments[67] = "Id Pregunta: 11418. ";


//  Id pregunta: 11419 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n la Ley 9/2014, respecto a la protecci&oacute;n de los datos personales es falso que:";
 choices[68]= new Array();
 choices[68][0] = "S&oacute;lo se tratar&aacute;n los datos de localizaci&oacute;n cuando sean an&oacute;nimos o previo consentimiento.";
 choices[68][1] = "Los datos se har&aacute;n siempre an&oacute;nimos o se cancelar&aacute;n cuando no sean necesarios.";
 choices[68][2] = "Los datos ser&aacute;n usados para promoci&oacute;n comercial cuando se haya prestado consentimiento.";
 choices[68][3] = "Se pueden tratar datos de localizaci&oacute;n de forma an&oacute;nima hasta que expire el plazo de impugnaci&oacute;n de factura.";
 answers[68] = choices[68][1];
 units[68] = "110";
 comments[68] = "Id Pregunta: 11419. ";


//  Id pregunta: 11421 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n la Ley 9/2014, la reasignaci&oacute;n del uso de bandas de frecuencias con el objetivo de alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico es facultad de:";
 choices[69]= new Array();
 choices[69][0] = "El gobierno.";
 choices[69][1] = "La CNMC.";
 choices[69][2] = "El Ayuntamiento de la localidad.";
 choices[69][3] = "Los organismos internacionales.";
 answers[69] = choices[69][0];
 units[69] = "110";
 comments[69] = "Id Pregunta: 11421. ";


//  Id pregunta: 11447 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n la Ley 9/2014, el retraso en la conservaci&oacute;n de los n&uacute;meros por parte del operador, da derecho a los abonados a:";
 choices[70]= new Array();
 choices[70][0] = "Una compensaci&oacute;n.";
 choices[70][1] = "Nada.";
 choices[70][2] = "Alegar a recibir una segunda l&iacute;nea.";
 choices[70][3] = "Servicio gratuito durante los 3 primeros a&ntilde;os.";
 answers[70] = choices[70][0];
 units[70] = "110";
 comments[70] = "Id Pregunta: 11447. ";


//  Id pregunta: 11450 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de estos no es un derecho del usuario final?";
 choices[71]= new Array();
 choices[71][0] = "Cambio de operador.";
 choices[71][1] = "Acceder a servicios de emergencia gratuitamente.";
 choices[71][2] = "Desconexi&oacute;n de ciertos servicios.";
 choices[71][3] = "Impedir, bajo pago de tasa, la identificaci&oacute;n de su l&iacute;nea.";
 answers[71] = choices[71][3];
 units[71] = "110";
 comments[71] = "Id Pregunta: 11450. ";


//  Id pregunta: 11460 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es INCORRECTA, en referencia a los derechos de los usuarios finales contenidos en la Ley 9/2014:";
 choices[72]= new Array();
 choices[72][0] = "Los usuarios finales tienen derecho a resolver el contrato con un operador en cualquier momento.";
 choices[72][1] = "Los usuarios finales tienen derecho a la continuidad del servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[72][2] = "El plazo de cambio de operador debe ser como m&aacute;ximo de un d&iacute;a.";
 choices[72][3] = "Los usuarios finales tienen derecho a la desconexi&oacute;n de determinados servicios.";
 answers[72] = choices[72][2];
 units[72] = "110";
 comments[72] = "Id Pregunta: 11460. ";


//  Id pregunta: 11479 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, respecto a los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Podr&aacute;n ser modificados por el Gobierno.";
 choices[73][1] = "No podr&aacute;n sufrir ninguna modificaci&oacute;n tras ser aprobados.";
 choices[73][2] = "El MINETUR podr&aacute; modificarlo, previo informe de la CNMC.";
 choices[73][3] = "Podr&aacute;n ser modificados por la CNMC.";
 answers[73] = choices[73][2];
 units[73] = "110";
 comments[73] = "Id Pregunta: 11479. ";


//  Id pregunta: 11488 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes formas de distribuci&oacute;n p&uacute;blica de un programa de ordenador no puede utilizarse legalmente como forma de explotaci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "La compraventa del programa.";
 choices[74][1] = "La donaci&oacute;n del programa.";
 choices[74][2] = "El alquiler del programa.";
 choices[74][3] = "Todas las anteriores.";
 answers[74] = choices[74][3];
 units[74] = "36";
 comments[74] = "Id Pregunta: 11488. NULL";


//  Id pregunta: 11490 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Cada cu&aacute;nto tiempo debe de revisarse el cat&aacute;logo de est&aacute;ndares?";
 choices[75]= new Array();
 choices[75][0] = "2 veces al a&ntilde;o";
 choices[75][1] = "Cada a&ntilde;o";
 choices[75][2] = "Cada 2 a&ntilde;os";
 choices[75][3] = "Cada 3 a&ntilde;os";
 answers[75] = choices[75][1];
 units[75] = "43";
 comments[75] = "Id Pregunta: 11490. NULL";


//  Id pregunta: 11502 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;les de los siguientes NO es un documento emitido por el European Telecomunication Standard Institute (ETSI)?";
 choices[76]= new Array();
 choices[76][0] = "ENV, normas experimentales";
 choices[76][1] = "ES, Normas ETSTI";
 choices[76][2] = "IT, Industrial Agreement";
 choices[76][3] = "HS, Normas armonizadas";
 answers[76] = choices[76][2];
 units[76] = "42";
 comments[76] = "Id Pregunta: 11502. NULL";


//  Id pregunta: 11512 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Indique la FALSA respecto al concepto MapReduce.";
 choices[77]= new Array();
 choices[77][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[77][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[77][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[77][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[77] = choices[77][2];
 units[77] = "68";
 comments[77] = "Id Pregunta: 11512. NULL";


//  Id pregunta: 11515 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  En el est&aacute;ndar XADES de firma electr&oacute;nica, el perfil que incluye un TimeStamp a las referencias de las CRLs, es:";
 choices[78]= new Array();
 choices[78][0] = "XADES-X";
 choices[78][1] = "XADES-T";
 choices[78][2] = "XADES-XL";
 choices[78][3] = "XADES-C";
 answers[78] = choices[78][0];
 units[78] = "72";
 comments[78] = "Id Pregunta: 11515. NULL";


//  Id pregunta: 11551 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n M&eacute;trica v3, las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos, se denomina:";
 choices[79]= new Array();
 choices[79][0] = "Reingenier&iacute;a de sistemas.";
 choices[79][1] = "Mantenimiento Perfectivo.";
 choices[79][2] = "Reestructuraci&oacute;n del Software.";
 choices[79][3] = "Mantenimiento Preventivo.";
 answers[79] = choices[79][1];
 units[79] = "86";
 comments[79] = "Id Pregunta: 11551. NULL";


//  Id pregunta: 11553 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  El modelo de estimaci&oacute;n que establece que el esfuerzo de desarrollo de un proyecto Software sigue una distribuci&oacute;n de Rayleigh-Norden es el de:";
 choices[80]= new Array();
 choices[80][0] = "PUTNAM";
 choices[80][1] = "COCOMO";
 choices[80][2] = "WALTSON-FELIX";
 choices[80][3] = "ESTERLING";
 answers[80] = choices[80][0];
 units[80] = "89";
 comments[80] = "Id Pregunta: 11553. NULL";


//  Id pregunta: 11588 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Los contratos de servicios de los organismos aut&oacute;nomos se encuentran sujetos a regulaci&oacute;n armonizada cuando su importe es igual o superior a:";
 choices[81]= new Array();
 choices[81][0] = "50000";
 choices[81][1] = "134000";
 choices[81][2] = "207000";
 choices[81][3] = "862000";
 answers[81] = choices[81][1];
 units[81] = "41";
 comments[81] = "Id Pregunta: 11588. ";


//  Id pregunta: 11590 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Las RFCs son publicadas por:";
 choices[82]= new Array();
 choices[82][0] = "ITU";
 choices[82][1] = "W3C";
 choices[82][2] = "IAB";
 choices[82][3] = "IETF";
 answers[82] = choices[82][3];
 units[82] = "42";
 comments[82] = "Id Pregunta: 11590. ";


//  Id pregunta: 11599 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  La entrada en vigor de la Ley 39/2015 es:";
 choices[83]= new Array();
 choices[83][0] = "A los seis meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[83][1] = "Al a&ntilde;o de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[83][2] = "A los dieciocho meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[83][3] = "A los dos a&ntilde;os de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[83] = choices[83][1];
 units[83] = "43";
 comments[83] = "Id Pregunta: 11599. ";


//  Id pregunta: 11601 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Para un sistema calificado con nivel sustancial de aseguramiento de la calidad, cl@ve admite como mecanismo v&aacute;lido de registro e identificaci&oacute;n:";
 choices[84]= new Array();
 choices[84][0] = "Cl@ve PIN de varios usos";
 choices[84][1] = "Cl@ve Permanente sin SMS";
 choices[84][2] = "Cl@ve PIN de un solo uso";
 choices[84][3] = "b) y c) son correctos";
 answers[84] = choices[84][2];
 units[84] = "44";
 comments[84] = "Id Pregunta: 11601. ";


//  Id pregunta: 11608 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La privacidad de la informaci&oacute;n en el uso de cloud computing supone un tipo de riesgo:";
 choices[85]= new Array();
 choices[85][0] = "Contractual";
 choices[85][1] = "Legal";
 choices[85][2] = "Organizativo";
 choices[85][3] = "T&eacute;cnico";
 answers[85] = choices[85][1];
 units[85] = "47";
 comments[85] = "Id Pregunta: 11608. ";


//  Id pregunta: 11634 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Entre los diagramas de comportamiento de UML se encuentran:";
 choices[86]= new Array();
 choices[86][0] = "Diagrama de clases, diagrama de secuencia y diagrama de componentes.";
 choices[86][1] = "Diagrama de tiempos, diagrama de secuencia y diagrama de componentes.";
 choices[86][2] = "Diagrama de paquetes, diagrama de actividad y diagrama de perfil.";
 choices[86][3] = "Todas las anteriores son falsas";
 answers[86] = choices[86][3];
 units[86] = "84";
 comments[86] = "Id Pregunta: 11634. ";


//  Id pregunta: 11660 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En una trama de Frame Relay, la m&iacute;nima longitud posible del campo DLCI es:";
 choices[87]= new Array();
 choices[87][0] = "8 bits";
 choices[87][1] = "10 bits";
 choices[87][2] = "17 bits";
 choices[87][3] = "24 bits";
 answers[87] = choices[87][1];
 units[87] = "109";
 comments[87] = "Id Pregunta: 11660. ";


//  Id pregunta: 11664 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El mandato del Presidente de la CNMC tiene una duraci&oacute;n de:";
 choices[88]= new Array();
 choices[88][0] = "4 a&ntilde;os no renovables";
 choices[88][1] = "4 a&ntilde;os renovables";
 choices[88][2] = "6 a&ntilde;os no renovables";
 choices[88][3] = "6 a&ntilde;os renovables";
 answers[88] = choices[88][2];
 units[88] = "110";
 comments[88] = "Id Pregunta: 11664. ";


//  Id pregunta: 11669 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Con respecto a WCF, se&ntilde;ale la incorrecta:";
 choices[89]= new Array();
 choices[89][0] = "Los servicios WCF pueden ejecutarse sobre TCP.";
 choices[89][1] = "WCF son las siglas de Windows Communication Foundation.";
 choices[89][2] = "WCF usa siempre SOAP.";
 choices[89][3] = "Las tres anteriores son ciertas.";
 answers[89] = choices[89][2];
 units[89] = "115";
 comments[89] = "Id Pregunta: 11669. ";


//  Id pregunta: 11699 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Una WAN ATM est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[90]= new Array();
 choices[90][0] = "Punto a punto";
 choices[90][1] = "Broadcast multi-acceso";
 choices[90][2] = "No broadcast multi-acceso";
 choices[90][3] = "Broadcast punto a multipunto";
 answers[90] = choices[90][2];
 units[90] = "102";
 comments[90] = "Id Pregunta: 11699. NULL";


//  Id pregunta: 11701 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[91]= new Array();
 choices[91][0] = "MIB";
 choices[91][1] = "SNMP manager";
 choices[91][2] = "SNMP agent";
 choices[91][3] = "Servidor Syslog";
 answers[91] = choices[91][3];
 units[91] = "104";
 comments[91] = "Id Pregunta: 11701. NULL";


//  Id pregunta: 11702 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; caracter&iacute;stica no se a&ntilde;ade en SNMPv3 respecto a SNMPv2?";
 choices[92]= new Array();
 choices[92][0] = "Autenticaci&oacute;n";
 choices[92][1] = "Cifrado";
 choices[92][2] = "Deteccion de errores";
 choices[92][3] = "Integridad del mensaje";
 answers[92] = choices[92][2];
 units[92] = "104";
 comments[92] = "Id Pregunta: 11702. NULL";


//  Id pregunta: 11732 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; rango tiene el CIO de la AGE?";
 choices[93]= new Array();
 choices[93][0] = "director general";
 choices[93][1] = "secretario general";
 choices[93][2] = "subsecretario";
 choices[93][3] = "se ha creado una nueva figura para referirse al director.";
 answers[93] = choices[93][2];
 units[93] = "43";
 comments[93] = "Id Pregunta: 11732. ";


//  Id pregunta: 11737 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; es una topolog&iacute;a  de red Ad-Hoc?";
 choices[94]= new Array();
 choices[94][0] = "Aquella en la que todos los elementos de una red se comunican con el resto de igual a igual";
 choices[94][1] = "Aquella en la que todos los elementos de una red se comunican a trav&eacute;s de un elemento com&uacute;n llamado control de accesos.";
 choices[94][2] = "Aquella en la que todos los elementos de una red se comunican siguiendo unas prioridades.";
 choices[94][3] = "Aquella que a nivel l&oacute;gico integra redes localizadas en diferentes redes externas.";
 answers[94] = choices[94][0];
 units[94] = "107";
 comments[94] = "Id Pregunta: 11737. ";


//  Id pregunta: 11754 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes tipos de cables no presenta apantallamiento?";
 choices[95]= new Array();
 choices[95][0] = "STP";
 choices[95][1] = "S/STP";
 choices[95][2] = "FTP";
 choices[95][3] = "UTP";
 answers[95] = choices[95][3];
 units[95] = "99";
 comments[95] = "Id Pregunta: 11754. ";


//  Id pregunta: 11769 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El contrato &quot;servicios consolidados de telecomunicaciones de la Administraci&oacute;n General del Estado, fase 1&quot;&hellip; Seleccione la verdadera:";
 choices[96]= new Array();
 choices[96][0] = "participan todos los Ministerios";
 choices[96][1] = "incluye tarifa plana para todos los servicios demandados&nbsp;";
 choices[96][2] = "supone un ahorro superior a los 124 millones de euros en 4 a&ntilde;os";
 choices[96][3] = "incluye todos los servicios de los anteriores contratos de sus participantes";
 answers[96] = choices[96][2];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11769. ";


//  Id pregunta: 11776 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; consecuencias tiene la declaraci&oacute;n judicial de existencia de cesi&oacute;n ilegal de trabajadores, en caso de que un trabajador de una empresa externa demande judicialmente y obtenga un pronunciamiento en tal sentido?";
 choices[97]= new Array();
 choices[97][0] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores produce autom&aacute;ticamente la incorporaci&oacute;n del trabajador demandante a la plantilla de la Administraci&oacute;n, como trabajador fijo,&nbsp; manteniendo las condiciones laborales que ten&iacute;a reconocida con la empresa contratista";
 choices[97][1] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores no produce efectos sobre la relaci&oacute;n laboral entre el trabajador que demande y la empresa contratista, sin perjuicio de las responsabilidades disciplinarias y en su caso penales del funcionario responsable de la irregularidad";
 choices[97][2] = "El trabajador podr&aacute; optar por incorporarse a la plantilla de la Administraci&oacute;n, como trabajador indefinido no fijo, y podr&aacute;n derivarse responsabilidades disciplinarias y penales contra el funcionario responsable de la irregularidad, entre otras posibles consecuencias&nbsp;";
 choices[97][3] = "El trabajador continuar&aacute; prestando servicios en la empresa contratista, si bien tendr&aacute; las mismas condiciones, econ&oacute;micas y de horario, mientras dure la contrata con la Administraci&oacute;n, que el funcionario responsable del servicio externalizado";
 answers[97] = choices[97][2];
 units[97] = "41";
 comments[97] = "Id Pregunta: 11776. ";


//  Id pregunta: 11780 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la correcta en lo relativo a discos RAID:";
 choices[98]= new Array();
 choices[98][0] = "Un RAID 2 divide los datos a nivel de bloques y usa un c&oacute;digo de Hamming para la correcci&oacute;n de errores.";
 choices[98][1] = "Un RAID 4 usa divisi&oacute;n a nivel de byte con un disco de paridad dedicado.";
 choices[98][2] = "Un RAID 3 usa divisi&oacute;n a nivel de bytes con un disco de paridad dedicado.";
 choices[98][3] = "Un RAID 5 requiere al menos 4 unidades de disco para ser implementado.";
 answers[98] = choices[98][1];
 units[98] = "48";
 comments[98] = "Id Pregunta: 11780. ";


//  Id pregunta: 11788 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la gu&iacute;a CCN-STIC-827 Gesti&oacute;n y uso de dispositivos m&oacute;viles:";
 choices[99]= new Array();
 choices[99][0] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse mediante el env&iacute;o de mensajes SMS reconocibles por el software propietario de la marca instalado en el dispositivo o el Sistema Operativo.";
 choices[99][1] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse aplicando Mobile Device Management (MDM) con un producto de terceros.";
 choices[99][2] = "Mobile Application Management (MAM) se dirige a gestionar una o varias aplicaciones espec&iacute;ficas dentro de cada dispositivo m&oacute;vil, en vez de gestionar la totalidad del dispositivo.";
 choices[99][3] = "Todas las anteriores son correctas.";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11788. ";


