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

//  Id pregunta: 10583 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  El empleo de algoritmos de firma electr&oacute;nica acreditados por el Centro Criptol&oacute;gico Nacional:";
 choices[0]= new Array();
 choices[0][0] = "Es una medida del Esquema Nacional de Seguridad para la dimensi&oacute;n de confidencialidad.";
 choices[0][1] = "Es una medida de nivel medio del Esquema Nacional de Seguridad.";
 choices[0][2] = "Es una recomendaci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = choices[0][1];
 units[0] = "43";
 comments[0] = "Id Pregunta: 10583. ";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  Son principios del programa europeo ISA:";
 choices[1]= new Array();
 choices[1][0] = "La privacidad, la apertura y la seguridad.";
 choices[1][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[1][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[1][3] = "Todas las anteriores.";
 answers[1] = choices[1][3];
 units[1] = "30";
 comments[1] = "Id Pregunta: 10589. ";


//  Id pregunta: 10620 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  Indique la respuesta incorrecta:";
 choices[2]= new Array();
 choices[2][0] = "Java es independiente de la plataforma.";
 choices[2][1] = "El entorno de ejecuci&oacute;n de Java es el responsable de gestionar el ciclo de vida de los objetos.";
 choices[2][2] = "El Global Interpreter Lock (GIL) permite la concurrencia del lenguaje Java.";
 choices[2][3] = "Un programa desarrollado en Java requiere una m&aacute;quina virtual para ejecutarse.";
 answers[2] = choices[2][2];
 units[2] = "60";
 comments[2] = "Id Pregunta: 10620. El GIL es un mecanismo de Python. Java s&iacute; es concurrente.";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  Se&ntilde;ale cu&aacute;l de estas caracter&iacute;sticas no se corresponde con un agente inteligente:";
 choices[3]= new Array();
 choices[3][0] = "Pueden dar soluciones a diferentes problemas.";
 choices[3][1] = "Poseen capacidad de an&aacute;lisis.";
 choices[3][2] = "Tienen capacidad de aprender y mejorar a trav&eacute;s de la interacci&oacute;n.";
 choices[3][3] = "Ejecutan la misma acci&oacute;n de forma peri&oacute;dica.";
 answers[3] = choices[3][3];
 units[3] = "63";
 comments[3] = "Id Pregunta: 10628. ";


//  Id pregunta: 10649 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  Alfresco, OpenKM y Nuxeo son:";
 choices[4]= new Array();
 choices[4][0] = "Gestores de portales.";
 choices[4][1] = "Gestores documentales.";
 choices[4][2] = "Gestores de contenidos web.";
 choices[4][3] = "Todos los anteriores.";
 answers[4] = choices[4][1];
 units[4] = "95";
 comments[4] = "Id Pregunta: 10649. ";


//  Id pregunta: 10653 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  La cabecera de autenticaci&oacute;n (AH) de IPSec:";
 choices[5]= new Array();
 choices[5][0] = "Proporciona integridad, no repudio en origen y protecci&oacute;n contra replay.";
 choices[5][1] = "Proporciona confidencialidad, autenticidad de origen e integridad.";
 choices[5][2] = "Crea la asociaci&oacute;n de seguridad.";
 choices[5][3] = "Ninguna de las anteriores.";
 answers[5] = choices[5][0];
 units[5] = "111";
 comments[5] = "Id Pregunta: 10653. ";


//  Id pregunta: 10667 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[6]= new Array();
 choices[6][0] = "Con telnet toda la informaci&oacute;n entre cliente y servidor viaja cifrada.";
 choices[6][1] = "X11 dota de una interfaz gr&aacute;fica a los sistemas Microsoft.";
 choices[6][2] = "La infraestructura de escritorio virtual crea un entorno de sistema operativo independiente en el propio escritorio.";
 choices[6][3] = "Citrix es un software comercial para virtualizaci&oacute;n de escritorio.";
 answers[6] = choices[6][3];
 units[6] = "119";
 comments[6] = "Id Pregunta: 10667. ";


//  Id pregunta: 10669 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  El t&eacute;rmino Web 2.0 se refiere a:";
 choices[7]= new Array();
 choices[7][0] = "Una generaci&oacute;n de Web basada en comunidades de usuarios que fomenta la colaboraci&oacute;n y el intercambio &aacute;gil de informaci&oacute;n entre los usuarios.";
 choices[7][1] = "Una asociaci&oacute;n de redes sociales.";
 choices[7][2] = "Un concepto original de la web basado en p&aacute;ginas HTML din&aacute;micas.";
 choices[7][3] = "Un conjunto de aplicaciones online del campo de la dom&oacute;tica.";
 answers[7] = choices[7][0];
 units[7] = "120";
 comments[7] = "Id Pregunta: 10669. ";


//  Id pregunta: 10671 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  Elija la afirmaci&oacute;n correcta sobre el est&aacute;ndar DOCSIS:";
 choices[8]= new Array();
 choices[8][0] = "Se puede emplear para proporcionar acceso a Internet sobre una infraestructura de red HFC.";
 choices[8][1] = "Permite a&ntilde;adir transferencias de datos de alta velocidad a un sistema de televisi&oacute;n por cable (CATV)";
 choices[8][2] = "La versi&oacute;n europea se denomina EuroDOCSIS.";
 choices[8][3] = "Todas las anteriores son correctas.";
 answers[8] = choices[8][3];
 units[8] = "105";
 comments[8] = "Id Pregunta: 10671. ";


//  Id pregunta: 10687 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[9]= new Array();
 choices[9][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[9][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[9][2] = "Ambas.";
 choices[9][3] = "Ninguna de las anteriores.";
 answers[9] = choices[9][2];
 units[9] = "30";
 comments[9] = "Id Pregunta: 10687. ";


//  Id pregunta: 10691 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  La Ley 39/2015 impone:";
 choices[10]= new Array();
 choices[10][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[10][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[10][2] = "Ambas";
 choices[10][3] = "Ninguna de las anteriores.";
 answers[10] = choices[10][0];
 units[10] = "30";
 comments[10] = "Id Pregunta: 10691. ";


//  Id pregunta: 10715 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  Seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre entidades registrales &iquest;En qu&eacute; segmento se situa el &quot;idenficador de fichero&quot;?";
 choices[11]= new Array();
 choices[11][0] = "De asunto";
 choices[11][1] = "De origen";
 choices[11][2] = "De destino";
 choices[11][3] = "De anexo";
 answers[11] = choices[11][3];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10715. ";


//  Id pregunta: 10718 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  &iquest;Qui&eacute;n no es un actor involucrado en el proceso de creaci&oacute;n y validaci&oacute;n de una firma electr&oacute;nica seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[12]= new Array();
 choices[12][0] = "Firmante";
 choices[12][1] = "Receptor";
 choices[12][2] = "Verificador";
 choices[12][3] = "PSC";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 10718. ";


//  Id pregunta: 10732 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "2010";
 choices[13][1] = "2011";
 choices[13][2] = "2013";
 choices[13][3] = "2015";
 answers[13] = choices[13][2];
 units[13] = "43";
 comments[13] = "Id Pregunta: 10732. ";


//  Id pregunta: 10743 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  &iquest;Qui&eacute;n Preside el Pleno de la Comisi&oacute;n de Estrategia TIC?";
 choices[14]= new Array();
 choices[14][0] = "El Presidente del Gobierno.";
 choices[14][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[14][2] = "El Director de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[14][3] = "Aquel componente de la misma elegido en mayor&iacute;a por el pleno con un mandato de 2 a&ntilde;os.";
 answers[14] = choices[14][1];
 units[14] = "24";
 comments[14] = "Id Pregunta: 10743. ";


//  Id pregunta: 10744 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  &iquest;Qui&eacute;n Preside el Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC?";
 choices[15]= new Array();
 choices[15][0] = "El Presidente del Gobierno.";
 choices[15][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[15][2] = "El Director de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[15][3] = "Aquel componente de la misma elegido en mayor&iacute;a por el pleno con un mandato de 2 a&ntilde;os.";
 answers[15] = choices[15][2];
 units[15] = "24";
 comments[15] = "Id Pregunta: 10744. ";


//  Id pregunta: 10752 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l es el objetivo global de la Estrategia de Ciberseguridad Nacional?";
 choices[16]= new Array();
 choices[16][0] = "Lograr que Espa&ntilde;a haga un uso seguro de los Sistemas de Informaci&oacute;n y Telecomunicaciones, fortaleciendo las capacidades de prevenci&oacute;n, defensa, detecci&oacute;n, y respuesta a los ciberataques.";
 choices[16][1] = "Garantizar que los Sistemas de Informaci&oacute;n y Telecomunicaciones que utilizan las Administraciones P&uacute;blicas poseen el adecuado nivel de ciberseguridad y resiliencia.";
 choices[16][2] = "Potenciar las capacidades de prevenci&oacute;n, detecci&oacute;n, reacci&oacute;n, an&aacute;lisis, recuperaci&oacute;n, respuesta, investigaci&oacute;n y coordinaci&oacute;n frente a las actividades del terrorismo y la delincuencia en el ciberespacio.";
 choices[16][3] = "Alcanzar y mantener los conocimientos, habilidades, experiencia y capacidades tecnol&oacute;gicas que necesita Espa&ntilde;a para sustentar todos los objetivos de ciberseguridad.";
 answers[16] = choices[16][0];
 units[16] = "43";
 comments[16] = "Id Pregunta: 10752. ";


//  Id pregunta: 10778 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[17]= new Array();
 choices[17][0] = "6 meses.";
 choices[17][1] = "1 a&ntilde;o.";
 choices[17][2] = "2 a&ntilde;os.";
 choices[17][3] = "5 a&ntilde;os.";
 answers[17] = choices[17][1];
 units[17] = "29";
 comments[17] = "Id Pregunta: 10778. Examen GSI 2014";


//  Id pregunta: 10781 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[18]= new Array();
 choices[18][0] = "Confidencialidad.";
 choices[18][1] = "Integridad.";
 choices[18][2] = "Autenticidad.";
 choices[18][3] = "Trazabilidad.";
 answers[18] = choices[18][3];
 units[18] = "43";
 comments[18] = "Id Pregunta: 10781. Examen GSI 2014";


//  Id pregunta: 10797 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n utiliza las instrucciones begin/rescue/ensure/end para tratar las excepciones?";
 choices[19]= new Array();
 choices[19][0] = "Perl.";
 choices[19][1] = "Python.";
 choices[19][2] = "Ruby.";
 choices[19][3] = "PHP.";
 answers[19] = choices[19][2];
 units[19] = "0";
 comments[19] = "Id Pregunta: 10797. Examen GSI 2014";


//  Id pregunta: 10801 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[20]= new Array();
 choices[20][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[20][1] = "Cuando haya recibido al menos dos ACK.";
 choices[20][2] = "Cuando reciba cualquier ACK.";
 choices[20][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[20] = choices[20][2];
 units[20] = "100";
 comments[20] = "Id Pregunta: 10801. Examen GSI 2014";


//  Id pregunta: 10806 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[21]= new Array();
 choices[21][0] = "Auditor&iacute;a.";
 choices[21][1] = "Acreditaci&oacute;n.";
 choices[21][2] = "Certificaci&oacute;n.";
 choices[21][3] = "Evaluaci&oacute;n.";
 answers[21] = choices[21][1];
 units[21] = "33";
 comments[21] = "Id Pregunta: 10806. Examen GSI 2014";


//  Id pregunta: 10807 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  Se&ntilde;ale de las siguientes cu&aacute;l es una t&eacute;cnica espec&iacute;fica dentro de un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos, seg&uacute;n la gu&iacute;a de T&eacute;cnicas de MAGERIT v3:";
 choices[22]= new Array();
 choices[22][0] = "Sesiones de trabajo.";
 choices[22][1] = "Valoraciones Delphi.";
 choices[22][2] = "Histogramas.";
 choices[22][3] = "&Aacute;rboles de ataque.";
 answers[22] = choices[22][3];
 units[22] = "32, 33";
 comments[22] = "Id Pregunta: 10807. Examen GSI 2014";


//  Id pregunta: 10815 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[23]= new Array();
 choices[23][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[23][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[23][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[23][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[23] = choices[23][2];
 units[23] = "76, 79";
 comments[23] = "Id Pregunta: 10815. Examen GSI 2014";


//  Id pregunta: 10823 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[24]= new Array();
 choices[24][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[24][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[24][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[24][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[24] = choices[24][2];
 units[24] = "86";
 comments[24] = "Id Pregunta: 10823. Examen GSI 2014";


//  Id pregunta: 10833 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[25]= new Array();
 choices[25][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[25][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[25][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[25][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[25] = choices[25][2];
 units[25] = "80";
 comments[25] = "Id Pregunta: 10833. Examen GSI 2014";


//  Id pregunta: 10843 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  Para poder realizar pruebas de caja blanca que realicen cobertura de c&oacute;digo, la herramienta que NO se deber&iacute;a usar es:";
 choices[26]= new Array();
 choices[26][0] = "EclEMMA.";
 choices[26][1] = "eCobertura.";
 choices[26][2] = "Jmeter.";
 choices[26][3] = "Java Code Coverage.";
 answers[26] = choices[26][2];
 units[26] = "0";
 comments[26] = "Id Pregunta: 10843. Examen GSI 2014";


//  Id pregunta: 10868 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  En un sistema operativo (S.O) con memoria virtual, cuando un proceso en ejecuci&oacute;n genera un fallo de p&aacute;gina:";
 choices[27]= new Array();
 choices[27][0] = "Se cierran todos los procesos en ejecuci&oacute;n ya que es un error grave del sistema operativo.";
 choices[27][1] = "El S.O busca la p&aacute;gina en memoria secundaria y la carga en memoria principal.";
 choices[27][2] = "El S.O interrumpe la ejecuci&oacute;n del proceso y lo pone en la cola de errores.";
 choices[27][3] = "En un sistema con memoria virtual nunca hay fallos de p&aacute;gina.";
 answers[27] = choices[27][1];
 units[27] = "52";
 comments[27] = "Id Pregunta: 10868. Examen GSI 2014";


//  Id pregunta: 10885 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  El protocolo DHCP (Dynamic Host Configuration Protocol) y DHCPv6 (DHCP for IPv6) est&aacute;n definidos en los documentos:";
 choices[28]= new Array();
 choices[28][0] = "RFC 792 y RFC 4361, respectivamente.";
 choices[28][1] = "RFC 826 y RFC 3315, respectivamente.";
 choices[28][2] = "RFC 1034 y RFC 4361, respectivamente.";
 choices[28][3] = "RFC 2131 y RFC 3315, respectivamente.";
 answers[28] = choices[28][3];
 units[28] = "100";
 comments[28] = "Id Pregunta: 10885. Examen GSI 2014";


//  Id pregunta: 10890 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[29]= new Array();
 choices[29][0] = "95.25.30.128/27";
 choices[29][1] = "95.25.30.128/25";
 choices[29][2] = "95.25.46.128/27";
 choices[29][3] = "95.25.46.128/25";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 10890. Examen GSI 2014";


//  Id pregunta: 10899 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[30]= new Array();
 choices[30][0] = "Modo ECB (Electronic CodeBook).";
 choices[30][1] = "Modo CBC (Cipher Block Chaining).";
 choices[30][2] = "Modo OFB (Output FeedBack).";
 choices[30][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[30] = choices[30][3];
 units[30] = "73, 74";
 comments[30] = "Id Pregunta: 10899. Examen GSI 2014";


//  Id pregunta: 10911 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  Se&ntilde;alar de las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles cu&aacute;l utiliza W-CDMA:";
 choices[31]= new Array();
 choices[31][0] = "GSM";
 choices[31][1] = "EDGE";
 choices[31][2] = "UMTS";
 choices[31][3] = "LTE";
 answers[31] = choices[31][2];
 units[31] = "108";
 comments[31] = "Id Pregunta: 10911. Examen GSI 2014";


//  Id pregunta: 10914 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  En un escenario de movilidad IP &iquest;de qu&eacute; se encarga el Agente Base (Home Agent)?";
 choices[32]= new Array();
 choices[32][0] = "Es el nodo que cambia su punto de conexi&oacute;n a la red sin cambiar su direcci&oacute;n IP o perder las conexiones establecidas.";
 choices[32][1] = "Es el router situado en la red origen del nodo m&oacute;vil que intercepta el tr&aacute;fico destinado al nodo m&oacute;vil y se lo reenv&iacute;a mediante t&uacute;neles IP, realizando adem&aacute;s tareas de localizaci&oacute;n de los nodos m&oacute;viles.";
 choices[32][2] = "Es el router situado en la red visitada que proporciona servicios de encaminamiento a los nodos m&oacute;viles registrados.";
 choices[32][3] = "Es el router situado en la red visitada que facilita una nueva direcci&oacute;n IP al nodo m&oacute;vil.";
 answers[32] = choices[32][1];
 units[32] = "100";
 comments[32] = "Id Pregunta: 10914. Examen GSI 2014";


//  Id pregunta: 10919 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[33]= new Array();
 choices[33][0] = "OM2";
 choices[33][1] = "OM3";
 choices[33][2] = "OM4";
 choices[33][3] = "OM5";
 answers[33] = choices[33][2];
 units[33] = "103, 107";
 comments[33] = "Id Pregunta: 10919. Examen GSI 2014";


//  Id pregunta: 10946 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  La Entidad AENOR:";
 choices[34]= new Array();
 choices[34][0] = "Es una entidad p&uacute;blica que elabora normas t&eacute;cnicas espa&ntilde;olas, impulsando la aportaci&oacute;n nacional en la elaboraci&oacute;n de normas europeas e internacionales.";
 choices[34][1] = "Desarrolla actividades de normalizaci&oacute;n y certificaci&oacute;n (N+C) exclusivamente en el &aacute;mbito del sector p&uacute;blico.";
 choices[34][2] = "Es una entidad espa&ntilde;ola, privada, independiente, sin &aacute;nimo de lucro, que certifica productos, servicios y empresas (sistemas).";
 choices[34][3] = "Es la entidad p&uacute;blica internacional responsable de la elaboraci&oacute;n de los est&aacute;ndares ISO/IEC.";
 answers[34] = choices[34][2];
 units[34] = "42";
 comments[34] = "Id Pregunta: 10946. TIC A1 AGE 2014";


//  Id pregunta: 10954 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  &iquest;C&uacute;al de las siguientes opciones NO es un sistema de control de versiones?";
 choices[35]= new Array();
 choices[35][0] = "Subversion.";
 choices[35][1] = "Git";
 choices[35][2] = "Ruby.";
 choices[35][3] = "SourceSafe.";
 answers[35] = choices[35][2];
 units[35] = "28";
 comments[35] = "Id Pregunta: 10954. TIC A1 AGE 2014";


//  Id pregunta: 10970 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  Respecto a las tarjetas de identificaci&oacute;n con circuitos integrados, la norma ISO/IEC 7816-4:2013 NO especifica:";
 choices[36]= new Array();
 choices[36][0] = "Las dimensiones y tolerancias de la tarjeta de identificaci&oacute;n.";
 choices[36][1] = "M&eacute;todos de acceso a los ficheros e informaci&oacute;n.";
 choices[36][2] = "M&eacute;todos para la securizaci&oacute;n de los mensajes.";
 choices[36][3] = "M&eacute;todos para la recuperaci&oacute;n de informaci&oacute;n.";
 answers[36] = choices[36][0];
 units[36] = "74";
 comments[36] = "Id Pregunta: 10970. TIC A1 AGE 2014";


//  Id pregunta: 10973 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  &iquest;En virtud de qu&eacute; instrumento jur&iacute;dico se aprueban y publican las Normas T&eacute;cnicas de Interoperabilidad?";
 choices[37]= new Array();
 choices[37][0] = "Orden Ministerial del Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[37][1] = "Resoluci&oacute;n del Secretario de Estado de Presidencia.";
 choices[37][2] = "Resoluci&oacute;n del Secretario de Estado de Administraciones P&uacute;blicas.";
 choices[37][3] = "Reglamento del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 answers[37] = choices[37][2];
 units[37] = "43";
 comments[37] = "Id Pregunta: 10973. TIC A1 AGE 2014";


//  Id pregunta: 10980 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  LINQ (Language-Integrated Query) es:";
 choices[38]= new Array();
 choices[38][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[38][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[38][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[38][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[38] = choices[38][2];
 units[38] = "59";
 comments[38] = "Id Pregunta: 10980. TIC A1 AGE 2014";


//  Id pregunta: 11017 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  &iquest;Cu&aacute;ntos anexos incluye el RD 3/2010 (ENS)?";
 choices[39]= new Array();
 choices[39][0] = "Ninguno";
 choices[39][1] = "1";
 choices[39][2] = "2";
 choices[39][3] = "5";
 answers[39] = choices[39][3];
 units[39] = "30";
 comments[39] = "Id Pregunta: 11017. ";


//  Id pregunta: 11025 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  &iquest;Es AENOR un miembro de ISO?";
 choices[40]= new Array();
 choices[40][0] = "No";
 choices[40][1] = "S&iacute;, es miembro nato";
 choices[40][2] = "Si, es miembro suscrito";
 choices[40][3] = "No, pero tiene previsto incorporarse en 2016";
 answers[40] = choices[40][1];
 units[40] = "42";
 comments[40] = "Id Pregunta: 11025. ";


//  Id pregunta: 11064 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  De los siguientes t&iacute;tulos, &iquest;cual NO es uno libro del core de publicaciones de ITIL?";
 choices[41]= new Array();
 choices[41][0] = "Servicio de Optimizaci&oacute;n";
 choices[41][1] = "Transici&oacute;n del Servicio";
 choices[41][2] = "Dise&ntilde;o del Servicio";
 choices[41][3] = "Estrategia del Servicio";
 answers[41] = choices[41][0];
 units[41] = "98";
 comments[41] = "Id Pregunta: 11064. ";


//  Id pregunta: 11079 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  El objetivo del proceso de Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio es...";
 choices[42]= new Array();
 choices[42][0] = "Contabilizar todos los activos financieros de la organizaci&oacute;n";
 choices[42][1] = "Proveer de un modelo l&oacute;gico de infraestructura de TI, correlacionando losServicios TI y diferentes componentes IT necesarios para la entrega de los servicios";
 choices[42][2] = "Construir modelos de servicios para justificar la implementaci&oacute;n de ITIL";
 choices[42][3] = "Implementar ITIL a trav&eacute;s de la organizaci&oacute;n";
 answers[42] = choices[42][1];
 units[42] = "98";
 comments[42] = "Id Pregunta: 11079. ";


//  Id pregunta: 11086 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  Dado un mensaje, m, y su cifrado mediante OTP (one time pad), c. &iquest;se puede obtener la clave utilizada en el cifrado?";
 choices[43]= new Array();
 choices[43][0] = "No, no se puede";
 choices[43][1] = "S&iacute;, la clave es k = m XOR c";
 choices[43][2] = "S&oacute;lo pueden calcularse la mitad de los bits de la clave";
 choices[43][3] = "S&iacute;, la clave es k = m XOR m";
 answers[43] = choices[43][1];
 units[43] = "72";
 comments[43] = "Id Pregunta: 11086. ";


//  Id pregunta: 11132 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;A qu&eacute; se refiere un problema de fragmentaci&oacute;n interna de la memoria de un sistema operativo?";
 choices[44]= new Array();
 choices[44][0] = "Cuando el programa es m&aacute;s peque&ntilde;o que el marco de p&aacute;gina asignado";
 choices[44][1] = "Cuando quedan zonas de memoria libres peque&ntilde;as que no se pueden utilizar";
 choices[44][2] = "Cuando un programa utiliza zonas de memoria diferentes en cada sesi&oacute;n para escribir sus datos.";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][0];
 units[44] = "52";
 comments[44] = "Id Pregunta: 11132. ";


//  Id pregunta: 11173 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l es el ciclo de vida correcto de la informaci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "Generaci&oacute;n, Almacenamiento, Acceso, Disposici&oacute;n, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[45][1] = "Generaci&oacute;n, Acceso, Almacenamiento, Uso, Disposici&oacute;n y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[45][2] = "Generaci&oacute;n, Acceso, Disposici&oacute;n, Almacenamiento, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[45][3] = "Generaci&oacute;n, Almacenamiento, Acceso, Uso, Disposici&oacute;n, y Conservaci&oacute;n o Destrucci&oacute;n";
 answers[45] = choices[45][0];
 units[45] = "97";
 comments[45] = "Id Pregunta: 11173. ";


//  Id pregunta: 11184 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares Wifi incluye WPA2?";
 choices[46]= new Array();
 choices[46][0] = "802.e";
 choices[46][1] = "802.f";
 choices[46][2] = "802.h";
 choices[46][3] = "802.i";
 answers[46] = choices[46][3];
 units[46] = "107";
 comments[46] = "Id Pregunta: 11184. ";


//  Id pregunta: 11186 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes supuestos permite al Minetur revocar los t&iacute;tulos habilitantes, de acuerdo con la LGT 9/2014?";
 choices[47]= new Array();
 choices[47][0] = "No se efect&uacute;a un uso eficaz y eficiente";
 choices[47][1] = "Utiliza frecuencias con fines distintos a los que motivaron su asignaci&oacute;n";
 choices[47][2] = "No pagar el Impuesto de Transmisiones Patrimoniales y Actos Jur&iacute;dicos";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "110";
 comments[47] = "Id Pregunta: 11186. ";


//  Id pregunta: 11187 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes ataques se basa en la suplantaci&oacute;n de identidad mediante t&eacute;cnicas de ingenier&iacute;a social?";
 choices[48]= new Array();
 choices[48][0] = "Phishing";
 choices[48][1] = "Man in the middle";
 choices[48][2] = "Eavesdropping";
 choices[48][3] = "Sniffing";
 answers[48] = choices[48][0];
 units[48] = "111";
 comments[48] = "Id Pregunta: 11187. ";


//  Id pregunta: 11204 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  &iquest;Cu&aacute;ntos objetivos tiene la Agenda Digital Espa&ntilde;ola?";
 choices[49]= new Array();
 choices[49][0] = "6";
 choices[49][1] = "7";
 choices[49][2] = "8";
 choices[49][3] = "9";
 answers[49] = choices[49][0];
 units[49] = "30";
 comments[49] = "Id Pregunta: 11204. ";


//  Id pregunta: 11222 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  La tecnolog&iacute;a LINQ en el Framework .NET:";
 choices[50]= new Array();
 choices[50][0] = "Es el acr&oacute;nimo&nbsp;de Language Integrated Query.";
 choices[50][1] = "Permite realizar consultas a distintas fuentes de datos.";
 choices[50][2] = "No es compatible con ADO.NET Entity Framework.";
 choices[50][3] = "A) y B) son correctas.";
 answers[50] = choices[50][0];
 units[50] = "59";
 comments[50] = "Id Pregunta: 11222. ";


//  Id pregunta: 11225 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  En que capa del patr&oacute;n MVC es com&uacute;n el uso del patr&oacute;n DAO";
 choices[51]= new Array();
 choices[51][0] = "En el modelo.";
 choices[51][1] = "En el vista.";
 choices[51][2] = "En el controlador.";
 choices[51][3] = "No se usan simult&aacute;neamente.";
 answers[51] = choices[51][2];
 units[51] = "116";
 comments[51] = "Id Pregunta: 11225. ";


//  Id pregunta: 11240 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  Las pr&oacute;rrogas de los contratos.";
 choices[52]= new Array();
 choices[52][0] = "Se puede incluir en todos los contratos";
 choices[52][1] = "Todos los contratos son prorrogables una vez finalizados.";
 choices[52][2] = "Su duraci&oacute;n no puede ser superior al periodo de licitaci&oacute;n.";
 choices[52][3] = "La pr&oacute;rroga se acordar&aacute; por el &oacute;rgano de contrataci&oacute;n y ser&aacute; confirmada posteriormente por el licitador.";
 answers[52] = choices[52][2];
 units[52] = "41";
 comments[52] = "Id Pregunta: 11240. ";


//  Id pregunta: 11245 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  El informe t&eacute;cnico de la DTIC:";
 choices[53]= new Array();
 choices[53][0] = "Se emitir&aacute; en un plazo m&aacute;ximo de 15 d&iacute;as.";
 choices[53][1] = "El informe ser&aacute; preceptivo para convenios, encomiendas de gesti&oacute;n, entre otros.";
 choices[53][2] = "La tramitaci&oacute;n de los informes se har&aacute; procurando el empleo de medios telem&aacute;ticos en todas las fases del procedimiento. Atendiendo especialmente a la confidencialidad e integridad en los contratos sobre defensa y seguridad comprendidos en el &aacute;mbito de la ley 24/2011.";
 choices[53][3] = "Ninguna respuesta es correcta.";
 answers[53] = choices[53][1];
 units[53] = "41";
 comments[53] = "Id Pregunta: 11245. ";


//  Id pregunta: 11252 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  Seg&uacute;n el Principio de Reconocimiento Mutuo que establece el Reglamento 910/2014, se reconocer&aacute; en un Estado miembro, a efectos de la autenticaci&oacute;n transfronteriza para un servicio en l&iacute;nea, el medio de identificaci&oacute;n electr&oacute;nica expedido en otro Estado miembro, siempre que:";
 choices[54]= new Array();
 choices[54][0] = "El nivel de seguridad de este medio de identificaci&oacute;n electr&oacute;nica corresponda a un nivel igual o superior al requerido por el organismo del sector p&uacute;blico para acceder a dicho servicio en l&iacute;nea, independientemente del nivel de seguridad del medio de identificaci&oacute;n.";
 choices[54][1] = "El medio de identificaci&oacute;n est&eacute; expedido seg&uacute;n los incluidos en la lista publicada por la Comisi&oacute;n.";
 choices[54][2] = "Las respuestas A) y B) son correctas.";
 choices[54][3] = "Este reconocimiento se producir&aacute; a m&aacute;s tardar 6 meses despu&eacute;s de que la Comisi&oacute;n publique la lista.";
 answers[54] = choices[54][1];
 units[54] = "73";
 comments[54] = "Id Pregunta: 11252. ";


//  Id pregunta: 11254 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  El algoritmo de encriptaci&oacute;n Camellia:";
 choices[55]= new Array();
 choices[55][0] = "Fue desarrollado en EEUU.";
 choices[55][1] = "La longitud de clave es variable entre 128, 192 y 256 bits.";
 choices[55][2] = "Tiene un tama&ntilde;o de bloque de 64 bits.";
 choices[55][3] = "No est&aacute; soportado en TLS/SSL.";
 answers[55] = choices[55][1];
 units[55] = "72";
 comments[55] = "Id Pregunta: 11254. ";


//  Id pregunta: 11259 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  Los certificados cualificados de firma electr&oacute;nica contendr&aacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Al menos el nombre del firmante o un seud&oacute;nimo; si se usara un seud&oacute;nimo, se indicar&aacute; claramente.";
 choices[56][1] = "Los datos relativos al inicio y final del per&iacute;odo de validez del certificado.";
 choices[56][2] = "La localizaci&oacute;n de los servicios que pueden utilizarse para consultar el estado de validez del certificado cualificado.";
 choices[56][3] = "Todas son verdaderas.";
 answers[56] = choices[56][3];
 units[56] = "73";
 comments[56] = "Id Pregunta: 11259. ";


//  Id pregunta: 11280 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de informaci&oacute;n geogr&aacute;fica NO corresponde a un servicio de visualizaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "WFS";
 choices[57][1] = "WMS";
 choices[57][2] = "WMTS";
 choices[57][3] = "WCS";
 answers[57] = choices[57][0];
 units[57] = "67";
 comments[57] = "Id Pregunta: 11280. ";


//  Id pregunta: 11281 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  &iquest;Qu&eacute; es un servicio WPS?";
 choices[58]= new Array();
 choices[58][0] = "Un servicio de descarga de datos vectoriales";
 choices[58][1] = "Un servicio de visualizaci&oacute;n de coberturas r&aacute;ster";
 choices[58][2] = "Un servicio de transformaci&oacute;n";
 choices[58][3] = "No es un tipo de servicio";
 answers[58] = choices[58][2];
 units[58] = "67";
 comments[58] = "Id Pregunta: 11281. ";


//  Id pregunta: 11288 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  &iquest;Qu&eacute; es Activiti?";
 choices[59]= new Array();
 choices[59][0] = "Una alternativa a JBPM";
 choices[59][1] = "El motor BPM de Alfresco";
 choices[59][2] = "a y b son ciertas";
 choices[59][3] = "El motor BPM de Liferay";
 answers[59] = choices[59][2];
 units[59] = "95";
 comments[59] = "Id Pregunta: 11288. ";


//  Id pregunta: 11290 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares NO est&aacute; relacionado directamente con la gesti&oacute;n de contenidos?";
 choices[60]= new Array();
 choices[60][0] = "CIFS";
 choices[60][1] = "CMIS";
 choices[60][2] = "JCR 170";
 choices[60][3] = "Todos lo est&aacute;n";
 answers[60] = choices[60][3];
 units[60] = "95";
 comments[60] = "Id Pregunta: 11290. ";


//  Id pregunta: 11293 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de plugin de Liferay?";
 choices[61]= new Array();
 choices[61][0] = "Tema";
 choices[61][1] = "Portlet";
 choices[61][2] = "Ruta";
 choices[61][3] = "Hook";
 answers[61] = choices[61][2];
 units[61] = "95";
 comments[61] = "Id Pregunta: 11293. ";


//  Id pregunta: 11298 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  En relaci&oacute;n con la contrataci&oacute;n administrativa se&ntilde;ale la opci&oacute;n verdadera.";
 choices[62]= new Array();
 choices[62][0] = "Est&aacute; prohibido la realizaci&oacute;n de pactos en cualquier caso.";
 choices[62][1] = "Obliga a entes locales.";
 choices[62][2] = "La perfecci&oacute;n de un contrato, se produce en su adjudicaci&oacute;n provisional.";
 choices[62][3] = "La garant&iacute;a global, responde solamente ante un &oacute;rgano de contrataci&oacute;n.";
 answers[62] = choices[62][1];
 units[62] = "41";
 comments[62] = "Id Pregunta: 11298. Obliga a todas las AAPP";


//  Id pregunta: 11301 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  De las siguientes opciones se&ntilde;ale la que no corresponde a una caracter&iacute;stica de las redes de banda ancha";
 choices[63]= new Array();
 choices[63][0] = "Se cambia la informaci&oacute;n de impulsos digitales por ondas moduladas.";
 choices[63][1] = "Conexion permanente, permitiendo a su vez la utilizacion de otra banda diferente del medio para otros fines";
 choices[63][2] = "Las se&ntilde;ales digitales pueden ser transmitidas directamente sin actuar sobre ellas";
 choices[63][3] = "Se utilizan dos o m&aacute;s canales de datos simult&aacute;neos en una &uacute;nica conexi&oacute;n";
 answers[63] = choices[63][2];
 units[63] = "99";
 comments[63] = "Id Pregunta: 11301. Es una caracter&iacute;stica de la banda base";


//  Id pregunta: 11328 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  En cuanto a la normativa sobre reutilizaci&oacute;n de la informaci&oacute;n, indique cu&aacute;l de las siguientes opciones no es constitutiva de una infracci&oacute;n grave";
 choices[64]= new Array();
 choices[64][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida;";
 choices[64][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;;";
 choices[64][2] = "La alteraci&oacute;n grave del contenido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 choices[64][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 answers[64] = choices[64][3];
 units[64] = "44";
 comments[64] = "Id Pregunta: 11328. ";


//  Id pregunta: 11332 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  La Ley General de Telecomunicaciones establece los conceptos por los que se puede aplicar tasa. Seleccione cu&aacute;l se corresponde con esta definici&oacute;n: &quot;para cubrir gastos por certificaciones registrales, la recepci&oacute;n de proyectos t&eacute;cnicos, cumplimiento de especificaciones t&eacute;cnicas de aparatos y equipos, etc.&quot;";
 choices[65]= new Array();
 choices[65][0] = "Tasa General de Operadores.";
 choices[65][1] = "Tasas por numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[65][2] = "Tasa por reserva del espacio radioel&eacute;ctrico";
 choices[65][3] = "Tasa de telecomunicaciones";
 answers[65] = choices[65][3];
 units[65] = "110";
 comments[65] = "Id Pregunta: 11332. ";


//  Id pregunta: 11336 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Cu&aacute;l de los siguientes es un algoritmo de encaminamiento de estado del enlace";
 choices[66]= new Array();
 choices[66][0] = "IS-IS";
 choices[66][1] = "IGRP";
 choices[66][2] = "BGP";
 choices[66][3] = "RIP";
 answers[66] = choices[66][0];
 units[66] = "102";
 comments[66] = "Id Pregunta: 11336. ";


//  Id pregunta: 11358 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el objetivo principal del contenido del Cat&aacute;logo de Servicios?";
 choices[67]= new Array();
 choices[67][0] = "Ofrecer informaci&oacute;n sobre todos los servicios";
 choices[67][1] = "Ofrecer informaci&oacute;n confiable de los servicios operativos y en desarrollo";
 choices[67][2] = "Tener informaci&oacute;n sobre la infraestructura";
 choices[67][3] = "Analizar inversiones en servicios";
 answers[67] = choices[67][1];
 units[67] = "98";
 comments[67] = "Id Pregunta: 11358. ";


//  Id pregunta: 11382 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; afirmaci&oacute;n sobre la relaci&oacute;n entre el sistema de gesti&oacute;n de configuraci&oacute;n (CMS) y el sistema de gesti&oacute;n del conocimiento de servicios (SKMS) es la correcta?";
 choices[68]= new Array();
 choices[68][0] = "El SKMS es parte de la CMS";
 choices[68][1] = "El CMS es parte del SKMS";
 choices[68][2] = "El CMS y el SKMS son la misma cosa";
 choices[68][3] = "No existe una relaci&oacute;n entre el CMS y el SKMS";
 answers[68] = choices[68][1];
 units[68] = "98";
 comments[68] = "Id Pregunta: 11382. ";


//  Id pregunta: 11406 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  &iquest;En qu&eacute; libro de ITIL v3 se pueden encontrar las descripciones detalladas de la Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de Suministradores?";
 choices[69]= new Array();
 choices[69][0] = "Estrategia del Servicio";
 choices[69][1] = "Dise&ntilde;o del Servicio";
 choices[69][2] = "Transici&oacute;n del Servicio";
 choices[69][3] = "Operaci&oacute;n del Servicio";
 answers[69] = choices[69][1];
 units[69] = "98";
 comments[69] = "Id Pregunta: 11406. ";


//  Id pregunta: 11409 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Indique la afirmaci&oacute;n INCORRECTA seg&uacute;n la Ley 9/2014:";
 choices[70]= new Array();
 choices[70][0] = "Se regular&aacute; el derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[70][1] = "Se regular&aacute; el derecho a la continuidad del servicio.";
 choices[70][2] = "Se regular&aacute; el derecho a la utilizaci&oacute;n del servicio de contestador autom&aacute;tico de llamadas.";
 choices[70][3] = "Se regular&aacute; el derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 answers[70] = choices[70][2];
 units[70] = "110";
 comments[70] = "Id Pregunta: 11409. ";


//  Id pregunta: 11454 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n la Ley 9/2014, cu&aacute;les de las siguientes son facultades del Gobierno para la administraci&oacute;n del espectro:";
 choices[71]= new Array();
 choices[71][0] = "El procedimiento para la determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[71][1] = "El procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencias para alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico.";
 choices[71][2] = "El uso del espectro radioel&eacute;ctrico para controlar el uso de los operadores.";
 choices[71][3] = "a y b son correctas.";
 answers[71] = choices[71][3];
 units[71] = "110";
 comments[71] = "Id Pregunta: 11454. ";


//  Id pregunta: 11457 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley 9/2014 General de Telecomunicaciones es correcta?:";
 choices[72]= new Array();
 choices[72][0] = "Mediante real decreto el Gobierno otorgar&aacute; los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[72][1] = "El Ministerio de Industria, Energ&iacute;a y Turismo  podr&aacute; fijar, mediante orden ministerial, las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros.";
 choices[72][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia, previo informe del Ministerio de Industria, Energ&iacute;a y Turismo, podr&aacute; modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[72][3] = "Los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n tomar&aacute;n en consideraci&oacute;n los n&uacute;meros, direcciones y nombres necesarios para permitir la efectiva prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 answers[72] = choices[72][3];
 units[72] = "110";
 comments[72] = "Id Pregunta: 11457. ";


//  Id pregunta: 11476 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, el cambio de operador con conservaci&oacute;n del n&uacute;mero:";
 choices[73]= new Array();
 choices[73][0] = "Es un derecho del abonado, pero adem&aacute;s el operador puede transferirle a otro operador sin su consentimiento.";
 choices[73][1] = "Es un derecho del abonado, aunque el operador podr&aacute; rechazar dicho cambio.";
 choices[73][2] = "Es un derecho del abonado que el operador debe realizar en el plazo m&iacute;nimo de un d&iacute;a laborable.";
 choices[73][3] = "EL retraso por parte del operador no da derecho al abonado a obtener compensaci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "110";
 comments[73] = "Id Pregunta: 11476. ";


//  Id pregunta: 11494 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes aspectos NO debe figurar en un Pliego de Cl&aacute;usulas Administrativas particulares que se establezca para un contrato de Tecnolog&iacute;as de la Informaci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "El Plazo para la ejecuci&oacute;n del contrato.";
 choices[74][1] = "Los criterios para la adjudicaci&oacute;n del contrato.";
 choices[74][2] = "El modelo de referencia para las funciones inform&aacute;ticas.";
 choices[74][3] = "Deben figurar todos los aspectos anteriores.";
 answers[74] = choices[74][2];
 units[74] = "41";
 comments[74] = "Id Pregunta: 11494. NULL";


//  Id pregunta: 11498 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes NO es un requisito m&iacute;nimo de seguridad seg&uacute;n el art&iacute;culo 11 del Esquema Nacional de Seguridad?";
 choices[75]= new Array();
 choices[75][0] = "L&iacute;neas de defensa.";
 choices[75][1] = "Profesionalidad.";
 choices[75][2] = "An&aacute;lisis y Gesti&oacute;n de Riesgos.";
 choices[75][3] = "Seguridad por defecto.";
 answers[75] = choices[75][0];
 units[75] = "38";
 comments[75] = "Id Pregunta: 11498. L&iacute;neas de Defensa es un Principio B&aacute;sico de la Seguridad. Profesionalidad es un Requisito m&iacute;nimo introducido por el RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11499 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n el Esquema Nacional de Seguridad, las Instrucciones T&eacute;cnicas de Seguridad ";
 choices[76]= new Array();
 choices[76][0] = "Son aspectos que pueden ser aplicados por parte de las Administraciones p&uacute;blicas";
 choices[76][1] = "Son aspectos que obligatoriamente deben ser aplicados por parte de las Administraciones P&uacute;blicas ";
 choices[76][2] = "Algunas Instrucciones de Seguridad son de aplicaci&oacute;n preceptiva y otras de aplicaci&oacute;n facultativa.";
 choices[76][3] = "Ninguna de las anteriores.";
 answers[76] = choices[76][1];
 units[76] = "43";
 comments[76] = "Id Pregunta: 11499. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11511 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Facebook?";
 choices[77]= new Array();
 choices[77][0] = "Hive";
 choices[77][1] = "Cassandra";
 choices[77][2] = "Hbase";
 choices[77][3] = "ZoneKeeper";
 answers[77] = choices[77][2];
 units[77] = "68";
 comments[77] = "Id Pregunta: 11511. NULL";


//  Id pregunta: 11519 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Qu&eacute; es FALSO si hablamos de SET?";
 choices[78]= new Array();
 choices[78][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de cr&eacute;dito.";
 choices[78][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft, Mastercard-Netscape.";
 choices[78][2] = "Es m&aacute;s sencillo de implementar que SSL, lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado.";
 choices[78][3] = "Es el acr&oacute;nimo de Secure Electronic Transactions, Transacciones Electr&oacute;nicas Seguras";
 answers[78] = choices[78][2];
 units[78] = "72";
 comments[78] = "Id Pregunta: 11519. NULL";


//  Id pregunta: 11558 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n el Modelo Oculto de Markov (HMM), se&ntilde;ale la respuesta CORRECTA:";
 choices[79]= new Array();
 choices[79][0] = "No est&aacute; basada en una m&aacute;quina de estados finito.";
 choices[79][1] = "Las transiciones entre estados constituyen el proceso oculto.";
 choices[79][2] = "Los vectores de par&aacute;metros que se producen en cada estado es el proceso observable.";
 choices[79][3] = "Las respuestas b y c son correctas.";
 answers[79] = choices[79][3];
 units[79] = "94";
 comments[79] = "Id Pregunta: 11558. NULL";


//  Id pregunta: 11563 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Campos de la cabecera Atm que tienen un uso similar con campos de la cabecera Frame Relay.";
 choices[80]= new Array();
 choices[80][0] = "Command and Response y Cell Loss";
 choices[80][1] = "DLCI y PT";
 choices[80][2] = "VPI y VCI";
 choices[80][3] = "DE y CLP";
 answers[80] = choices[80][3];
 units[80] = "109";
 comments[80] = "Id Pregunta: 11563. NULL";


//  Id pregunta: 11583 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Se&ntilde;ale la opci&oacute;n incorrecta. Es posible la cesi&oacute;n de los datos de car&aacute;cter personal sin contar con el consentimiento del interesado cuando:";
 choices[81]= new Array();
 choices[81][0] = "La comunicaci&oacute;n que debe efectuarse tiene por destinatario el Tribunal de Cuentas y se realiza en el &aacute;mbito de las funciones que la ley le atribuya expresamente.";
 choices[81][1] = "Lo autoriza una norma de derecho comunitario.";
 choices[81][2] = "Es una cesi&oacute;n entre Administraciones p&uacute;blicas y tiene por objeto el tratamiento de los datos con fines cient&iacute;ficos.";
 choices[81][3] = "Todas las anteriores son correctas";
 answers[81] = choices[81][3];
 units[81] = "29";
 comments[81] = "Id Pregunta: 11583. ";


//  Id pregunta: 11592 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Indique cu&aacute;l no es un principio general de la Ley 11/2007:";
 choices[82]= new Array();
 choices[82][0] = "Accesibilidad";
 choices[82][1] = "Proporcionalidad";
 choices[82][2] = "Coordinaci&oacute;n";
 choices[82][3] = "Todos los anteriores son correctos";
 answers[82] = choices[82][2];
 units[82] = "43";
 comments[82] = "Id Pregunta: 11592. ";


//  Id pregunta: 11593 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Se&ntilde;ale el contenido opcional de un &iacute;ndice de expediente electr&oacute;nico:";
 choices[83]= new Array();
 choices[83][0] = "Huella digital de cada documento electr&oacute;nico";
 choices[83][1] = "Fecha de generaci&oacute;n del &iacute;ndice";
 choices[83][2] = "Fecha de incorporaci&oacute;n al expediente de cada documento electr&oacute;nico";
 choices[83][3] = "Identificador de cada documento electr&oacute;nico";
 answers[83] = choices[83][2];
 units[83] = "43";
 comments[83] = "Id Pregunta: 11593. ";


//  Id pregunta: 11623 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  En HTML5, para representar la leyenda de una figura se hace uso de la etiqueta:";
 choices[84]= new Array();
 choices[84][0] = "&lt;figure&gt;";
 choices[84][1] = "&lt;figcaption&gt;";
 choices[84][2] = "&lt;footer&gt;";
 choices[84][3] = "&lt;figlegend&gt;";
 answers[84] = choices[84][1];
 units[84] = "69";
 comments[84] = "Id Pregunta: 11623. ";


//  Id pregunta: 11639 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En el modelo CMMI por etapas, el nivel 4 se corresponde con:";
 choices[85]= new Array();
 choices[85][0] = "Gestionado";
 choices[85][1] = "Gestionado cuantitativamente";
 choices[85][2] = "Definido";
 choices[85][3] = "Realizado";
 answers[85] = choices[85][1];
 units[85] = "87";
 comments[85] = "Id Pregunta: 11639. ";


//  Id pregunta: 11643 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  En la versi&oacute;n de 2013 del modelo EFQM se introduce como nuevo concepto fundamental:";
 choices[86]= new Array();
 choices[86][0] = "Alcanzar el &eacute;xito mediante el talento de las personas";
 choices[86][1] = "Crear un futuro sostenible";
 choices[86][2] = "Gestionar con agilidad";
 choices[86][3] = "Aprovechar la creatividad y la innovaci&oacute;n";
 answers[86] = choices[86][2];
 units[86] = "92";
 comments[86] = "Id Pregunta: 11643. ";


//  Id pregunta: 11663 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  De acuerdo a la Ley 9/2014, General de Telecomunicaciones, por la comisi&oacute;n de infracciones graves tipificadas en las que la Comisi&oacute;n Nacional de los Mercados y la Competencia tenga competencias sancionadoras se impondr&aacute; al infractor multa por importe de:";
 choices[87]= new Array();
 choices[87][0] = "Hasta el duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, un l&iacute;mite m&aacute;ximo de dos millones de euros.";
 choices[87][1] = "Hasta el duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, dos millones de euros.";
 choices[87][2] = "El duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, un l&iacute;mite m&aacute;ximo de dos millones de euros.";
 choices[87][3] = "Dos millones de euros.";
 answers[87] = choices[87][0];
 units[87] = "110";
 comments[87] = "Id Pregunta: 11663. ";


//  Id pregunta: 11665 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Las dimensiones can&oacute;nicas de la seguridad son:";
 choices[88]= new Array();
 choices[88][0] = "Disponibilidad, confidencialidad y trazabilidad";
 choices[88][1] = "Confidencialidad, autenticidad y disponibilidad";
 choices[88][2] = "Integridad, trazabilidad y autenticidad";
 choices[88][3] = "Confidencialidad, integridad y disponibilidad";
 answers[88] = choices[88][3];
 units[88] = "111";
 comments[88] = "Id Pregunta: 11665. ";


//  Id pregunta: 11691 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En el contexto de NAT IP,&iquest; qu&eacute; direcci&oacute;n se usa para representar equipos internos en el exterior?";
 choices[89]= new Array();
 choices[89][0] = "Local interna";
 choices[89][1] = "Global interna";
 choices[89][2] = "Local externa";
 choices[89][3] = "Global interna";
 answers[89] = choices[89][1];
 units[89] = "111";
 comments[89] = "Id Pregunta: 11691. NULL";


//  Id pregunta: 11692 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En qu&eacute; consiste el mecanismo de Sobrecarga NAT";
 choices[90]= new Array();
 choices[90][0] = "En la utilizaci&oacute;n de puertos para traducir una direccion interna local en una direccion interna global.";
 choices[90][1] = "En la utilizaci&oacute;n de puertos para traducir direcciones internas locales en una o m&aacute;s direcciones globales internas.";
 choices[90][2] = "Traduce una direccion local interna en una global interna";
 choices[90][3] = "Traduce una direccion local interna en otra direccion local interna";
 answers[90] = choices[90][1];
 units[90] = "111";
 comments[90] = "Id Pregunta: 11692. NULL";


//  Id pregunta: 11719 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Qu&eacute; campo de la cabecera TCP se utiliza, entre otros, para confirmar la recepci&oacute;n de los datos? ";
 choices[91]= new Array();
 choices[91][0] = "numero de secuencia";
 choices[91][1] = "checksum";
 choices[91][2] = "flag FIN";
 choices[91][3] = "flag SYN";
 answers[91] = choices[91][0];
 units[91] = "102";
 comments[91] = "Id Pregunta: 11719. NULL";


//  Id pregunta: 11724 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[92]= new Array();
 choices[92][0] = "WEP";
 choices[92][1] = "PSK";
 choices[92][2] = "EAP";
 choices[92][3] = "WPA";
 answers[92] = choices[92][3];
 units[92] = "107";
 comments[92] = "Id Pregunta: 11724. NULL";


//  Id pregunta: 11734 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; especificaci&oacute;n permite los enlaces bidireccionales como mecanismo hipertextual en un documento XML?";
 choices[93]= new Array();
 choices[93][0] = "DTD";
 choices[93][1] = "XUA";
 choices[93][2] = "XLL";
 choices[93][3] = "XSL";
 answers[93] = choices[93][2];
 units[93] = "69";
 comments[93] = "Id Pregunta: 11734. ";


//  Id pregunta: 11739 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indicar el gestor de contenidos que no es software libre";
 choices[94]= new Array();
 choices[94][0] = "Open CMS";
 choices[94][1] = "Vignette";
 choices[94][2] = "Zope";
 choices[94][3] = "Alfresco";
 answers[94] = choices[94][1];
 units[94] = "95";
 comments[94] = "Id Pregunta: 11739. ";


//  Id pregunta: 11753 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes sistemas no permite una lectura del texto de una p&aacute;gina web?";
 choices[95]= new Array();
 choices[95][0] = "ReadMe";
 choices[95][1] = "ReadSpeaker";
 choices[95][2] = "JAWS";
 choices[95][3] = "WebAnywhere";
 answers[95] = choices[95][0];
 units[95] = "39";
 comments[95] = "Id Pregunta: 11753. ";


//  Id pregunta: 11772 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes circunstancias da lugar necesariamente a la resoluci&oacute;n de un&nbsp;contrato?";
 choices[96]= new Array();
 choices[96][0] = "Ninguna de las anteriores es correcta";
 choices[96][1] = "La apertura de la fase de liquidaci&oacute;n en caso de concurso de acreedores&nbsp;";
 choices[96][2] = "la declaraci&oacute;n de concurso";
 choices[96][3] = "la demora de la Administraci&oacute;n en el pago superior a 6 meses";
 answers[96] = choices[96][1];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11772. ";


//  Id pregunta: 11777 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Es siempre necesario acudir a una nueva licitaci&oacute;n para adjudicar los contratos basados en un acuerdo marco?";
 choices[97]= new Array();
 choices[97][0] = "No, solo cuando no todos los t&eacute;rminos del acuerdo est&aacute;n definidos&nbsp;";
 choices[97][1] = "S&iacute;, siempre se debe acudir a una nueva licitaci&oacute;n";
 choices[97][2] = "La ley proh&iacute;be expresamente acudir a una nueva licitaci&oacute;n";
 choices[97][3] = "Depende de lo que establezca el pliego del acuerdo marco";
 answers[97] = choices[97][0];
 units[97] = "41";
 comments[97] = "Id Pregunta: 11777. ";


//  Id pregunta: 11779 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Orden PRE/2971/2007 sobre la expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la AGE y sus OO.PP dependientes, se&ntilde;ale la verdadera:";
 choices[98]= new Array();
 choices[98][0] = "La factura electr&oacute;nica solo podr&aacute; estar en formato XAdES, ETSI TS 101 903. ";
 choices[98][1] = "La factura deber&aacute; estar en formato XAdES (ETSI TS 101 903) o PAdES (ETSI TS 102 778).";
 choices[98][2] = "Se atribuye al Subsecretario del Ministerio de Hacienda y Administraciones P&uacute;blicas, la facultad de modificar el formato de factura y de firma electr&oacute;nica.";
 choices[98][3] = "Ninguna de las anteriores es correcta";
 answers[98] = choices[98][0];
 units[98] = "44";
 comments[98] = "Id Pregunta: 11779. ";


//  Id pregunta: 11786 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[99]= new Array();
 choices[99][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado por un per&iacute;odo renovable de cinco a&ntilde;os mediante Real Decreto.";
 choices[99][1] = "El Consejo de Transparencia y Buen Gobierno deber&aacute; elevar anualmente al Congreso de los Diputados una memoria sobre el desarrollo de sus actividades.";
 choices[99][2] = "La condici&oacute;n de miembro de la Comisi&oacute;n del Consejo de Transparencia y Buen Gobierno no exigir&aacute; dedicaci&oacute;n exclusiva ni dar&aacute; derecho a remuneraci&oacute;n.";
 choices[99][3] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n leve a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 answers[99] = choices[99][2];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11786. ";


