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

//  Id pregunta: 4360 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  JDBC es:";
 choices[0]= new Array();
 choices[0][0] = "Un estandar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&iacute;a ODBC.";
 choices[0][1] = "Un driver que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[0][2] = "Una API que permite la ejecuci&oacute;n de operaciones sobre una base de datos mediante lenguaje Java.";
 choices[0][3] = "El estandar ODBC para bases de datos relacionales.";
 answers[0] = choices[0][2];
 units[0] = "60.116";
 comments[0] = "Id Pregunta: 4360. La A no es, porque podr&iacute;a no usar ODBC intermedio.";


//  Id pregunta: 10600 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  La creaci&oacute;n de una Estructura de Desglose del Trabajo (EDT) forma parte de:";
 choices[1]= new Array();
 choices[1][0] = "La gesti&oacute;n de tiempo el proyecto.";
 choices[1][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[1][2] = "La gesti&oacute;n de riesgos del proyecto.";
 choices[1][3] = "La gesti&oacute;n de costes del proyecto.";
 answers[1] = choices[1][1];
 units[1] = "28";
 comments[1] = "Id Pregunta: 10600. ";


//  Id pregunta: 10610 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  &iquest;Seg&uacute;n el Reglamento 910/2014 del Parlamento Europeo y del Consejo, cu&aacute;l de &eacute;stos son requisitos de seguridad de los TSP (Trust Service Providers)?";
 choices[2]= new Array();
 choices[2][0] = "Notificar las violaciones al MINETUR y el organismo correspondiente en m&aacute;ximo 24 horas.";
 choices[2][1] = "Mantener una base de datos de certificados";
 choices[2][2] = "Publicar las revocaciones en un m&aacute;ximo de 24 horas tras la solicitud.";
 choices[2][3] = "Todas las anteriores.";
 answers[2] = choices[2][0];
 units[2] = "74";
 comments[2] = "Id Pregunta: 10610. B y C son exclusivamente para QTSPs";


//  Id pregunta: 10636 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes es un framework de mejores pr&aacute;cticas dirigida al control y supervisi&oacute;n de tecnolog&iacute;a de la informaci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "ISACA";
 choices[3][1] = "CMMI";
 choices[3][2] = "COVIT";
 choices[3][3] = "Ninguna de las anteriores.";
 answers[3] = choices[3][3];
 units[3] = "98";
 comments[3] = "Id Pregunta: 10636. ";


//  Id pregunta: 10643 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de estos no es un concepto fundamental de la excelencia seg&uacute;n el modelo EFQM?";
 choices[4]= new Array();
 choices[4][0] = "Orientaci&oacute;n hacia los resultados";
 choices[4][1] = "Liderazgo y coherencia en los objetivos";
 choices[4][2] = "Desarrollo de Alianzas";
 choices[4][3] = "Planificaci&oacute;n a corto plazo";
 answers[4] = choices[4][3];
 units[4] = "92";
 comments[4] = "Id Pregunta: 10643. ";


//  Id pregunta: 10647 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  En un modelo Entidad / Relaci&oacute;n extendido, las relaciones pueden ser:";
 choices[5]= new Array();
 choices[5][0] = "Regular o d&eacute;bil.";
 choices[5][1] = "De dependencia en existencia o de dependencia en identificaci&oacute;n.";
 choices[5][2] = "Exclusivas o no exclusivas.";
 choices[5][3] = "Todas las anteriores.";
 answers[5] = choices[5][3];
 units[5] = "80";
 comments[5] = "Id Pregunta: 10647. ";


//  Id pregunta: 10654 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de estas entidades no pertenece a una arquitectura SAML:";
 choices[6]= new Array();
 choices[6][0] = "AP (Authentication Provider)";
 choices[6][1] = "SP (Service Provider)";
 choices[6][2] = "IdP (Identity Provider) ";
 choices[6][3] = "Todos los anteriores son componentes de la arquitectura SAML.";
 answers[6] = choices[6][0];
 units[6] = "111";
 comments[6] = "Id Pregunta: 10654. ";


//  Id pregunta: 10664 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  La licencia del framework .NET:";
 choices[7]= new Array();
 choices[7][0] = "Propietaria";
 choices[7][1] = "Comercial";
 choices[7][2] = "Open Source";
 choices[7][3] = "Mixta";
 answers[7] = choices[7][2];
 units[7] = "115";
 comments[7] = "Id Pregunta: 10664. MIT License desde 2014";


//  Id pregunta: 10665 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  Polycom, Radvision y Lifesize son:";
 choices[8]= new Array();
 choices[8][0] = "Sistemas de videoconferencia";
 choices[8][1] = "Sistemas de telefon&iacute;a";
 choices[8][2] = "Conectores RDSI";
 choices[8][3] = "C&oacute;decs de video.";
 answers[8] = choices[8][0];
 units[8] = "117";
 comments[8] = "Id Pregunta: 10665. ";


//  Id pregunta: 10672 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[9]= new Array();
 choices[9][0] = "1 de Junio de 2015";
 choices[9][1] = "1 de Julio de 2015";
 choices[9][2] = "2 de Octubre de 2015";
 choices[9][3] = "1 de Noviembre de 2015";
 answers[9] = choices[9][2];
 units[9] = "30";
 comments[9] = "Id Pregunta: 10672. ";


//  Id pregunta: 10701 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  Seg&uacute;n la NTI de Documento Electr&oacute;nico &iquest;Se pueden utilizar formatos diferentes a los establecidos en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares?";
 choices[10]= new Array();
 choices[10][0] = "Cuando existan particularidades que lo justifiquen.";
 choices[10][1] = "Cuando sea necesario para asegurar el valor probatorio del documento electr&oacute;nico.";
 choices[10][2] = "En ambos casos.";
 choices[10][3] = "En ning&uacute;n caso.";
 answers[10] = choices[10][2];
 units[10] = "43";
 comments[10] = "Id Pregunta: 10701. ";


//  Id pregunta: 10705 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es considerado un metadato m&iacute;nimo del expediente electr&oacute;nico?";
 choices[11]= new Array();
 choices[11][0] = "Versi&oacute;n NTI.";
 choices[11][1] = "Identificador.";
 choices[11][2] = "N&uacute;mero de documentos incluidos.";
 choices[11][3] = "Tipo de firma.";
 answers[11] = choices[11][2];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10705. ";


//  Id pregunta: 10747 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  &iquest;Qui&eacute;n preside las Comisiones Ministeriales de Administraci&oacute;n Digital?";
 choices[12]= new Array();
 choices[12][0] = "El Ministro";
 choices[12][1] = "El Secretario de Estado";
 choices[12][2] = "El Subsecretario";
 choices[12][3] = "El Director General";
 answers[12] = choices[12][2];
 units[12] = "24";
 comments[12] = "Id Pregunta: 10747. ";


//  Id pregunta: 10758 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Auditor&iacute;a del Esquema Nacional de Seguridad&quot;?";
 choices[13]= new Array();
 choices[13][0] = "CCN-STIC-801";
 choices[13][1] = "CCN-STIC-802";
 choices[13][2] = "CCN-STIC-803";
 choices[13][3] = "CCN-STIC-804";
 answers[13] = choices[13][1];
 units[13] = "43";
 comments[13] = "Id Pregunta: 10758. ";


//  Id pregunta: 10774 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  Seg&uacute;n se establece en la pol&iacute;tica de certificaci&oacute;n de la DGP para el DNI electr&oacute;nico (DNIe) en lo relativo a las autoridades de certificaci&oacute;n (AC) ra&iacute;z y subordinadas, &iquest;cu&aacute;l es el tama&ntilde;o de esas claves?";
 choices[14]= new Array();
 choices[14][0] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es de 2048 bits y el de claves de las AC subordinadas ser&aacute; de 4096 bits.";
 choices[14][1] = "Las claves de la AC Ra&iacute;z y de las AC subordinadas ser&aacute;n de 2048 bits.";
 choices[14][2] = "El tama&ntilde;o de las claves es: 4096 bits para la AC Ra&iacute;z y 2048 bits para las AC Subordinadas.";
 choices[14][3] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es 8192 bits para la ra&iacute;z y 4096 bits para las AC subordinadas.";
 answers[14] = choices[14][2];
 units[14] = "74";
 comments[14] = "Id Pregunta: 10774. Examen GSI 2014";


//  Id pregunta: 10784 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  Se&ntilde;ale la opci&oacute;n correcta dentro de la siguiente relaci&oacute;n de infraestructura/servicio com&uacute;n de la Administraci&oacute;n y su definici&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "ORVE - Soluci&oacute;n integral de registro para organismos p&uacute;blicos, que cubre la gesti&oacute;n tanto de sus oficinas de registro como de las unidades tramitadoras destinatarias de la documentaci&oacute;n.";
 choices[15][1] = "Sistema de informaci&oacute;n REINA - proporciona un Inventario unificado y com&uacute;n a toda la Administraci&oacute;n de las unidades org&aacute;nicas / organismos p&uacute;blicos, sus oficinas asociadas y unidades de gesti&oacute;n econ&oacute;mica - presupuestaria, facilitando el mantenimiento distribuido y corresponsable de la informaci&oacute;n.";
 choices[15][2] = "GEISER - Permite a las diferentes Administraciones P&uacute;blicas consultar y gestionar los apoderamientos otorgados por un ciudadano para sus procedimientos.";
 choices[15][3] = "CIRCABC - Herramienta de trabajo en grupo basada en tecnolog&iacute;as de Internet y en software de fuentes abiertas desarrollada por el Programa ISA de la Comisi&oacute;n de la Comunidad Europea y dirigido a necesidades de las Administraciones P&uacute;blicas, Ciudadanos y Empresas.";
 answers[15] = choices[15][3];
 units[15] = "44";
 comments[15] = "Id Pregunta: 10784. Examen GSI 2014";


//  Id pregunta: 10785 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  La velocidad del USB 3.0 es:";
 choices[16]= new Array();
 choices[16][0] = "15 veces superior a la del USB 2.0.";
 choices[16][1] = "Similar a la del USB 2.0.";
 choices[16][2] = "10 veces superior a la del USB 2.0.";
 choices[16][3] = "480 Mbps.";
 answers[16] = choices[16][2];
 units[16] = "46";
 comments[16] = "Id Pregunta: 10785. Examen GSI 2014";


//  Id pregunta: 10791 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes comandos Unix impide que el archivo de nombre &quot;miarchivo&quot; sea modificado y ejecutado por el grupo al que pertenece dicho archivo?";
 choices[17]= new Array();
 choices[17][0] = "chmod 766 miarchivo";
 choices[17][1] = "chmod a+xw miarchivo";
 choices[17][2] = "chmod 644 miarchivo";
 choices[17][3] = "chmod u=rwx go=wx miarchivo";
 answers[17] = choices[17][2];
 units[17] = "53, 54";
 comments[17] = "Id Pregunta: 10791. Examen GSI 2014";


//  Id pregunta: 10804 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes conjuntos est&aacute; integrado en su totalidad por etiquetas que han sido incorporadas como novedad en el lenguaje HTML5?";
 choices[18]= new Array();
 choices[18][0] = "&lt;header&gt;, &lt;article&gt; y &lt;bdi&gt;";
 choices[18][1] = "&lt;head&gt;, &lt;foot&gt; y &lt;nav&gt;";
 choices[18][2] = "&lt;canvas&gt;, &lt;img&gt; y &lt;audio&gt;";
 choices[18][3] = "&lt;video&gt;, &lt;canvas&gt; y &lt;bdo&gt;";
 answers[18] = choices[18][0];
 units[18] = "69";
 comments[18] = "Id Pregunta: 10804. Examen GSI 2014";


//  Id pregunta: 10818 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  En el modelo de proceso Scrum para desarrollo &aacute;gil de sistemas software, &iquest;qu&eacute; es el backlog de producto?";
 choices[19]= new Array();
 choices[19][0] = "La lista detallada de requisitos seleccionados para implementaci&oacute;n en un Sprint.";
 choices[19][1] = "Un gr&aacute;fico que muestra el trabajo pendiente en un Sprint.";
 choices[19][2] = "La lista priorizada de requisitos de alto nivel pendientes de implementaci&oacute;n.";
 choices[19][3] = "La tabla con los requisitos ya implementados.";
 answers[19] = choices[19][2];
 units[19] = "79";
 comments[19] = "Id Pregunta: 10818. Examen GSI 2014";


//  Id pregunta: 10828 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[20]= new Array();
 choices[20][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[20][1] = "Cat&aacute;logo de productos a generar.";
 choices[20][2] = "Cat&aacute;logo de clases.";
 choices[20][3] = "Cat&aacute;logo de entidades.";
 answers[20] = choices[20][3];
 units[20] = "86";
 comments[20] = "Id Pregunta: 10828. Examen GSI 2014";


//  Id pregunta: 10835 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA en relaci&oacute;n a los &aacute;rboles de b&uacute;squeda AVL:";
 choices[21]= new Array();
 choices[21][0] = "Son un tipo de &aacute;rbol de b&uacute;squeda binario.";
 choices[21][1] = "Para cada uno de los nodos, la diferencia de altura entre sus dos sub&aacute;rboles no puede ser superior a uno.";
 choices[21][2] = "Los &aacute;rboles AVL menos profundos son los &aacute;rboles de Fibonacci.";
 choices[21][3] = "Un &aacute;rbol de Fibonacci es el &aacute;rbol AVL m&aacute;s desbalanceado permitido.";
 answers[21] = choices[21][2];
 units[21] = "0";
 comments[21] = "Id Pregunta: 10835. Examen GSI 2014";


//  Id pregunta: 10840 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  En relaci&oacute;n a las pruebas de integridad de software, si hablamos de integraci&oacute;n tipo sandwich nos referimos a que:";
 choices[22]= new Array();
 choices[22][0] = "Los m&oacute;dulos se integran en grupos que constituyen una funcionalidad identificada.";
 choices[22][1] = "Se identifica el nivel de riesgo asociado a cada m&oacute;dulo, los de riesgo alto se integran primero y los de menor riesgo se integran m&aacute;s tarde.";
 choices[22][2] = "A medida que se integran los m&oacute;dulos, se realizan pruebas para capturar y corregir nuevos errores, es decir, empezando por los componentes que llaman a otros componentes.";
 choices[22][3] = "Primero se integran los m&oacute;dulos de alto nivel y de control y, despu&eacute;s, los m&oacute;dulos de bajo nivel. Los m&oacute;dulos intermedios se integran al final.";
 answers[22] = choices[22][3];
 units[22] = "0";
 comments[22] = "Id Pregunta: 10840. Examen GSI 2014";


//  Id pregunta: 10841 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes normas define un est&aacute;ndar para pruebas de software?";
 choices[23]= new Array();
 choices[23][0] = "ISO 29781";
 choices[23][1] = "ISO 29621";
 choices[23][2] = "ISO 29382";
 choices[23][3] = "ISO 29119";
 answers[23] = choices[23][3];
 units[23] = "0";
 comments[23] = "Id Pregunta: 10841. Examen GSI 2014";


//  Id pregunta: 10846 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[24]= new Array();
 choices[24][0] = "Abstracci&oacute;n.";
 choices[24][1] = "Polimorfismo.";
 choices[24][2] = "Herencia.";
 choices[24][3] = "Encapsulamiento.";
 answers[24] = choices[24][3];
 units[24] = "84";
 comments[24] = "Id Pregunta: 10846. Examen GSI 2014";


//  Id pregunta: 10851 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[25]= new Array();
 choices[25][0] = "Bajoo.";
 choices[25][1] = "Azure.";
 choices[25][2] = "Heroku.";
 choices[25][3] = "Adrive.";
 answers[25] = choices[25][1];
 units[25] = "59, 115";
 comments[25] = "Id Pregunta: 10851. Examen GSI 2014";


//  Id pregunta: 10874 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[26]= new Array();
 choices[26][0] = "JOB";
 choices[26][1] = "COMMENT";
 choices[26][2] = "EXEC";
 choices[26][3] = "DD";
 answers[26] = choices[26][1];
 units[26] = "57, 58";
 comments[26] = "Id Pregunta: 10874. Examen GSI 2014";


//  Id pregunta: 10875 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  Se&ntilde;ale de los siguientes cu&aacute;l NO es un cliente Subversion para control de versiones:";
 choices[27]= new Array();
 choices[27][0] = "TortoiseCVS";
 choices[27][1] = "Subversive";
 choices[27][2] = "Sventon";
 choices[27][3] = "Subclipse";
 answers[27] = choices[27][0];
 units[27] = "0";
 comments[27] = "Id Pregunta: 10875. Examen GSI 2014";


//  Id pregunta: 10881 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[28]= new Array();
 choices[28][0] = "Jitter.";
 choices[28][1] = "Delay.";
 choices[28][2] = "Round Trip delay Time.";
 choices[28][3] = "Latencia.";
 answers[28] = choices[28][2];
 units[28] = "100";
 comments[28] = "Id Pregunta: 10881. Examen GSI 2014";


//  Id pregunta: 10894 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  En el protocolo RIP Version 2 (Routing Information Protocol), cuyo algoritmo est&aacute; basado en vector distancia, el l&iacute;mite m&aacute;ximo de saltos a partir del cual se considera una ruta como inalcanzable es:";
 choices[29]= new Array();
 choices[29][0] = "15 saltos.";
 choices[29][1] = "9 saltos.";
 choices[29][2] = "16 saltos.";
 choices[29][3] = "7 saltos.";
 answers[29] = choices[29][0];
 units[29] = "102";
 comments[29] = "Id Pregunta: 10894. Examen GSI 2014";


//  Id pregunta: 10913 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto al est&aacute;ndar IEEE 802.11ac-2013:";
 choices[30]= new Array();
 choices[30][0] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 2,4 GHz.";
 choices[30][1] = "Ampl&iacute;a ancho de banda de canal a 40 MHz y opera en la banda de 2,4 GHz.";
 choices[30][2] = "Ampl&iacute;a ancho de banda de canal a 80 MHz y opera en la banda de 60 GHz.";
 choices[30][3] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 5 GHz.";
 answers[30] = choices[30][3];
 units[30] = "107";
 comments[30] = "Id Pregunta: 10913. Examen GSI 2014";


//  Id pregunta: 10938 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  Los switches FC (Fibre Channel) de las redes SAN (Storage Area Network) permiten en la actualidad el uso de &oacute;pticas SFP (Small Form-factor Pluggable) de:";
 choices[31]= new Array();
 choices[31][0] = "4 Gb/s, 8Gb/s, 16 Gb/s";
 choices[31][1] = "8 Gb/s, 16 Gb/s, 32 Gb/s";
 choices[31][2] = "16Gb/s, 32 Gb/s, 64Gb/s";
 choices[31][3] = "1Gbs, 10Gbs, 100Gbs";
 answers[31] = choices[31][0];
 units[31] = "48";
 comments[31] = "Id Pregunta: 10938. TIC A1 AGE 2014";


//  Id pregunta: 10952 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  En la estructura de un certificado X.509 v3 NO es obligatorio:";
 choices[32]= new Array();
 choices[32][0] = "El n&uacute;mero de serie.";
 choices[32][1] = "La validez no antes de.";
 choices[32][2] = "El identificador &uacute;nico de emisor.";
 choices[32][3] = "El emisor.";
 answers[32] = choices[32][2];
 units[32] = "73";
 comments[32] = "Id Pregunta: 10952. TIC A1 AGE 2014";


//  Id pregunta: 10982 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  En relaci&oacute;n con el Registro Electr&oacute;nico de Apoderamientos (REA), se&ntilde;ale la respuesta correcta:";
 choices[33]= new Array();
 choices[33][0] = "Un departamento ministerial puede adherirse al REA mediante la firma electr&oacute;nica de un acuerdo de adhesi&oacute;n con el Ministerio de Hacienda y Administraciones P&uacute;blicas, de forma simult&aacute;nea con el alta electr&oacute;nica de sus tr&aacute;mites en dicho Registro.";
 choices[33][1] = "Si un departamento ministerial ya est&aacute; adherido al REA y desea incorporar nuevos tr&aacute;mites al mismo, deber&aacute; hacerlo electr&oacute;nicamente en dicho Registro y publicar una Resoluci&oacute;n oficial modificando o ampliando la relaci&oacute;n inicial de tr&aacute;mites.";
 choices[33][2] = "Los departamentos ministeriales u organismos p&uacute;blicos que gestionen un Registro de apoderamientos propio, deber&aacute;n dar de alta &eacute;stos tambi&eacute;n en el REA para garantizar la interoperabilidad de ambos registros";
 choices[33][3] = "El periodo m&aacute;ximo de vigencia de los apoderamientos para los tr&aacute;mites incorporados en el REA no podr&aacute; superar los dos a&ntilde;os.";
 answers[33] = choices[33][1];
 units[33] = "44";
 comments[33] = "Id Pregunta: 10982. TIC A1 AGE 2014";


//  Id pregunta: 11013 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l es el portal nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica de la Administraci&oacute;n General del Estado?";
 choices[34]= new Array();
 choices[34][0] = "www.datos.gob.es";
 choices[34][1] = "www.rediris.es";
 choices[34][2] = "www.pae.es";
 choices[34][3] = "administracionelectronica.gob.es";
 answers[34] = choices[34][0];
 units[34] = "30";
 comments[34] = "Id Pregunta: 11013. ";


//  Id pregunta: 11039 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[35]= new Array();
 choices[35][0] = "Fue creado por Peter Chen";
 choices[35][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[35][2] = "Las estructuras de datos son complejas";
 choices[35][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[35] = choices[35][1];
 units[35] = "58";
 comments[35] = "Id Pregunta: 11039. ";


//  Id pregunta: 11075 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  El Gestor del Nivel de Servicio tiene la responsabilidad de asegurarse 1que los objetivos del Proceso de Gesti&oacute;n del Nivel de Servicio sean cumplidos. El Gestor del Nivel de Servicio NO es responsable de &hellip;";
 choices[36]= new Array();
 choices[36][0] = "Negociar y cerrar los Acuerdos de Nivel Operacionales. (OLA -Operation Level Agreement)";
 choices[36][1] = "Asegurar que todos los servicios no operacionales sean registrados dentro del Cat&aacute;logo de Servicios";
 choices[36][2] = "Negociar y acordar los Acuerdos de Nivel de Servicio (SLA - Service Level Agreement)";
 choices[36][3] = "Ayudar a la creaci&oacute;n del Cat&aacute;logo de Servicios y a mantenerlo actualizado";
 answers[36] = choices[36][1];
 units[36] = "98";
 comments[36] = "Id Pregunta: 11075. ";


//  Id pregunta: 11090 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  El procesador intel i7 utiliza una jerarqu&iacute;a de cache de 3 niveles, L1, L2 y L3. Indicar la respuesta INCORRECTA";
 choices[37]= new Array();
 choices[37][0] = "Respecto al tama&ntilde;o de la memoria, L1&gt;L2&gt;L3";
 choices[37][1] = "Los tres niveles utilizan un tama&ntilde;o de bloque de 64 bytes";
 choices[37][2] = "El nivel 3, L3, es compartido por todos los cores del chip";
 choices[37][3] = "El nivel 1, L1, presenta la latencia m&aacute;s alta ";
 answers[37] = choices[37][3];
 units[37] = "45";
 comments[37] = "Id Pregunta: 11090. ";


//  Id pregunta: 11091 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de programaci&oacute;n paralela?";
 choices[38]= new Array();
 choices[38][0] = "CUDA";
 choices[38][1] = "OpenCL";
 choices[38][2] = "OpenStack";
 choices[38][3] = "MPI";
 answers[38] = choices[38][2];
 units[38] = "45";
 comments[38] = "Id Pregunta: 11091. ";


//  Id pregunta: 11112 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  Seleccione la opci&oacute;n verdadera";
 choices[39]= new Array();
 choices[39][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[39][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[39][2] = "ACCEDA permite crear un registro en la nube";
 choices[39][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[39] = choices[39][0];
 units[39] = "30";
 comments[39] = "Id Pregunta: 11112. ";


//  Id pregunta: 11133 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes versiones del sistema de archivos UNIX fue creada por ATT?";
 choices[40]= new Array();
 choices[40][0] = "Virtual File System";
 choices[40][1] = "Fast File System";
 choices[40][2] = "Network File System";
 choices[40][3] = "Remote File System";
 answers[40] = choices[40][2];
 units[40] = "53";
 comments[40] = "Id Pregunta: 11133. ";


//  Id pregunta: 11137 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes es un operador derivado de algebra relacional?";
 choices[41]= new Array();
 choices[41][0] = "Intersecci&oacute;n";
 choices[41][1] = "Uni&oacute;n";
 choices[41][2] = "Proyecci&oacute;n";
 choices[41][3] = "Selecci&oacute;n";
 answers[41] = choices[41][0];
 units[41] = "58";
 comments[41] = "Id Pregunta: 11137. ";


//  Id pregunta: 11138 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[42]= new Array();
 choices[42][0] = "Native-Api Driver";
 choices[42][1] = "Network Protocol Driver";
 choices[42][2] = "Native Protocol Driver";
 choices[42][3] = "JDBC-OBDC Bridge";
 answers[42] = choices[42][1];
 units[42] = "58";
 comments[42] = "Id Pregunta: 11138. ";


//  Id pregunta: 11147 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T para infraestructuras de claves p&uacute;blicas?";
 choices[43]= new Array();
 choices[43][0] = "X.500";
 choices[43][1] = "X.509v3";
 choices[43][2] = "X.CRL";
 choices[43][3] = "OCSP";
 answers[43] = choices[43][1];
 units[43] = "73";
 comments[43] = "Id Pregunta: 11147. ";


//  Id pregunta: 11155 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  A la hora de tomar requisitos para dise&ntilde;ar un sistema de informaci&oacute;n &iquest;Qu&eacute; informaci&oacute;n debe registrarse obligatoriamente de cada requisito?";
 choices[44]= new Array();
 choices[44][0] = "C&oacute;digo &uacute;nico";
 choices[44][1] = "Nombre descriptivo del requisito";
 choices[44][2] = "Descripci&oacute;n detallada del requisito";
 choices[44][3] = "Todos los anteriores";
 answers[44] = choices[44][3];
 units[44] = "78";
 comments[44] = "Id Pregunta: 11155. ";


//  Id pregunta: 11164 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  &iquest;A qu&eacute; se refieren las siglas EFQM?";
 choices[45]= new Array();
 choices[45][0] = "European Foundation of Quality Metrics";
 choices[45][1] = "European Foundation of Quality Maintenance";
 choices[45][2] = "European Foundation for Qualitiy Management";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = choices[45][2];
 units[45] = "92";
 comments[45] = "Id Pregunta: 11164. ";


//  Id pregunta: 11165 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  De acuerdo con la Norma ISO 9004 sobre la madurez del sistema de gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes descripciones se refiere al nivel de madurez 1?";
 choices[46]= new Array();
 choices[46][0] = "Proceso de mejora existente y en uso";
 choices[46][1] = "No hay una aproximaci&oacute;n sistem&aacute;tica evidente; sin resultados, resultados pobres o resultados impredecibles.";
 choices[46][2] = "Aproximaci&oacute;n sistem&aacute;tica basada en el problema o en la prevenci&oacute;n; m&iacute;nimos datos disponibles sobre los resultados de mejora.";
 choices[46][3] = "Proceso de mejora ampliamente integrado.";
 answers[46] = choices[46][1];
 units[46] = "92";
 comments[46] = "Id Pregunta: 11165. ";


//  Id pregunta: 11177 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Qu&eacute; tipo de tr&aacute;fico proporciona el nivel de servicio A del est&aacute;ndar 802.17 Resilient Packet Ring?";
 choices[47]= new Array();
 choices[47][0] = "Tr&aacute;fico con requisitos latencia y jitter predecible";
 choices[47][1] = "Tr&aacute;fico con requisitos de baja latencia y bajo jitter";
 choices[47][2] = "Tr&aacute;fico con requisitos de baja latencia y alto jitter";
 choices[47][3] = "Tr&aacute;fico de servicios Best Effort";
 answers[47] = choices[47][1];
 units[47] = "101";
 comments[47] = "Id Pregunta: 11177. ";


//  Id pregunta: 11188 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes es un protocolo de autenticaci&oacute;n PPP (Point to Point)?";
 choices[48]= new Array();
 choices[48][0] = "RADIUS &ndash; Remote Authentication Dial In User Service";
 choices[48][1] = "Kerberos";
 choices[48][2] = "CHAP Challenge Handshake Authentication Protocol";
 choices[48][3] = "Todos los anteriores";
 answers[48] = choices[48][2];
 units[48] = "111";
 comments[48] = "Id Pregunta: 11188. ";


//  Id pregunta: 11208 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[49]= new Array();
 choices[49][0] = "0.2";
 choices[49][1] = "0.33";
 choices[49][2] = "0.5";
 choices[49][3] = "0.8";
 answers[49] = choices[49][2];
 units[49] = "30";
 comments[49] = "Id Pregunta: 11208. ";


//  Id pregunta: 11210 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes planes se refiere al objetivo de Econom&iacute;a Digital e Internacionalizaci&oacute;n de la Agenda Digital Espa&ntilde;ola?";
 choices[50]= new Array();
 choices[50][0] = "Plan TIC en PYMEs y Comercio Electr&oacute;nico";
 choices[50][1] = "Plan de Impulso de Econom&iacute;a Digital y Contenidos Digitales";
 choices[50][2] = "Plan de Internacionalizaci&oacute;n de Empresas Tecnol&oacute;gicas";
 choices[50][3] = "Todos los anteriores";
 answers[50] = choices[50][3];
 units[50] = "30";
 comments[50] = "Id Pregunta: 11210. ";


//  Id pregunta: 11248 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  Cada cuanto tiempo se revisa la solvencia de las empresas clasificadas:";
 choices[51]= new Array();
 choices[51][0] = "La solvencia econ&oacute;mica y financiera se revisa cada tres a&ntilde;os.";
 choices[51][1] = "La solvencia t&eacute;cnica cada a&ntilde;o.";
 choices[51][2] = "El plazo de c&oacute;mputo de la experiencia para la solvencia t&eacute;cnica es de cinco a&ntilde;os.";
 choices[51][3] = "Todas son verdaderas.";
 answers[51] = choices[51][2];
 units[51] = "41";
 comments[51] = "Id Pregunta: 11248. ";


//  Id pregunta: 11249 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  La inscripci&oacute;n en el ROLECE acredita la aptitud del licitador frente a los &oacute;rganos de contrataci&oacute;n de:";
 choices[52]= new Array();
 choices[52][0] = "Todo el sector p&uacute;blico estatal.";
 choices[52][1] = "Todo el sector p&uacute;blico.";
 choices[52][2] = "La Administraci&oacute;n General del Estado.";
 choices[52][3] = "La Administraci&oacute;n General del Estado y su Organismos p&uacute;blicos vinculados o dependientes.";
 answers[52] = choices[52][1];
 units[52] = "41";
 comments[52] = "Id Pregunta: 11249. ";


//  Id pregunta: 11253 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  Entre los requisitos de la firma electr&oacute;nica avanzada no se encuentra:";
 choices[53]= new Array();
 choices[53][0] = "Que est&eacute; vinculada al firmante de manera &uacute;nica y permita su identificaci&oacute;n.";
 choices[53][1] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, con un alto nivel de confianza, bajo su control exclusivo.";
 choices[53][2] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, siempre bajo su control exclusivo.";
 choices[53][3] = "Que est&eacute; vinculada con los datos firmados de modo que detecte cualquier modificaci&oacute;n ulterior.";
 answers[53] = choices[53][2];
 units[53] = "73";
 comments[53] = "Id Pregunta: 11253. ";


//  Id pregunta: 11260 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[54]= new Array();
 choices[54][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[54][1] = "Notificar&aacute;n al Ministerio de Industria en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[54][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[54][3] = "Todas son verdaderas.";
 answers[54] = choices[54][2];
 units[54] = "73";
 comments[54] = "Id Pregunta: 11260. ";


//  Id pregunta: 11278 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes tipos de servicio NO corresponde a un est&aacute;ndar de OGC (Open Geospatial Consortium)?";
 choices[55]= new Array();
 choices[55][0] = "Web Map Service (WMS)";
 choices[55][1] = "Catalogue Service Web (CSW)";
 choices[55][2] = "Tile Map Service (TMS)";
 choices[55][3] = "Web Feature Service (WFS)";
 answers[55] = choices[55][2];
 units[55] = "67";
 comments[55] = "Id Pregunta: 11278. ";


//  Id pregunta: 11282 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  &iquest;Qu&eacute; es un servicio WMTS?";
 choices[56]= new Array();
 choices[56][0] = "Un tipo de recubrimiento SOAP";
 choices[56][1] = "Un servicio de cat&aacute;logo cacheado";
 choices[56][2] = "Un servicio de visualizaci&oacute;n de mapas sin teselas, pero cacheado";
 choices[56][3] = "Un servicio de visualizaci&oacute;n de mapas teselado";
 answers[56] = choices[56][3];
 units[56] = "67";
 comments[56] = "Id Pregunta: 11282. ";


//  Id pregunta: 11284 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  &iquest;Situar una posici&oacute;n en el mapa empleando una referencia catastral es un ejemplo de?";
 choices[57]= new Array();
 choices[57][0] = "Georreferenciaci&oacute;n directa";
 choices[57][1] = "Sistema de Proyecci&oacute;n (SRS)";
 choices[57][2] = "Georreferenciaci&oacute;n discreta";
 choices[57][3] = "a y c son ciertas";
 answers[57] = choices[57][2];
 units[57] = "67";
 comments[57] = "Id Pregunta: 11284. ";


//  Id pregunta: 11286 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  &iquest;Para qu&eacute; sirve un servicio SOS del Open Geospatial Consortium (OGC)?";
 choices[58]= new Array();
 choices[58][0] = "Consulta de cat&aacute;logo de metadatos";
 choices[58][1] = "Localizaci&oacute;n de datos vectoriales";
 choices[58][2] = "Presentaci&oacute;n de coberturas r&aacute;ster";
 choices[58][3] = "Consulta de observaciones de sensores";
 answers[58] = choices[58][3];
 units[58] = "67";
 comments[58] = "Id Pregunta: 11286. ";


//  Id pregunta: 11296 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  En relaci&oacute;n a la gesti&oacute;n documental, de contenidos y portales &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[59]= new Array();
 choices[59][0] = "La gesti&oacute;n de portales suele constituir la capa de presentaci&oacute;n, y la documental la de persistencia";
 choices[59][1] = "La gesti&oacute;n de contenidos suele constituir la capa de persistencia, mientras que la gesti&oacute;n documental es la capa de negocio";
 choices[59][2] = "La gesti&oacute;n de portales suele constituir la capa de negocio y la gesti&oacute;n documental la de presentaci&oacute;n";
 choices[59][3] = "La gesti&oacute;n de portales suele constituir la capa de persistencia, mientras que la de contenidos es la de presentaci&oacute;n";
 answers[59] = choices[59][0];
 units[59] = "95";
 comments[59] = "Id Pregunta: 11296. ";


//  Id pregunta: 11304 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Seg&uacute;n se define en M&eacute;trica, la t&eacute;cnica de reglas de transformaci&oacute;n, permite transformar cada elemento del modelo de clases en un elemento del modelo f&iacute;sico. Se&ntilde;ale de los indicados a continuaci&oacute;n cu&aacute;l no es una regla de transformaci&oacute;n contemplada";
 choices[60]= new Array();
 choices[60][0] = "Transformaci&oacute;n de clases";
 choices[60][1] = "Transformaci&oacute;n de atributos de clases";
 choices[60][2] = "Transformaci&oacute;n de relaciones inclusivas";
 choices[60][3] = "Transformaci&oacute;n de la herencia";
 answers[60] = choices[60][2];
 units[60] = "86";
 comments[60] = "Id Pregunta: 11304. No existe. S&iacute; existe la transformaci&oacute;n de relaciones exclusivas. ";


//  Id pregunta: 11311 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  La metodolog&iacute;a M&eacute;trica 3, contempla el uso de la t&eacute;cnica de an&aacute;lisis coste / beneficio. Se&ntilde;ale qu&eacute; caracteriza su uso.";
 choices[61]= new Array();
 choices[61][0] = "Se utiliza en etapas medias y tard&iacute;as del proyecto";
 choices[61][1] = "Sugiere utilizarla en PSI (a la hora de definir el plan de acci&oacute;n y la arquitectura tecnol&oacute;gica)";
 choices[61][2] = "Para su uso se determinan costes tangibles e intangibles y beneficios tangibles";
 choices[61][3] = "Se desaconseja su uso en EVS, cuando se valoran las alternativas";
 answers[61] = choices[61][1];
 units[61] = "86";
 comments[61] = "Id Pregunta: 11311. ";


//  Id pregunta: 11312 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Se&ntilde;ale de entre los siguientes, cu&aacute;l no es un ataque en una red";
 choices[62]= new Array();
 choices[62][0] = "Ping de la muerte";
 choices[62][1] = "ARP poisoning";
 choices[62][2] = "Smurf";
 choices[62][3] = "Snicker";
 answers[62] = choices[62][3];
 units[62] = "111";
 comments[62] = "Id Pregunta: 11312. ";


//  Id pregunta: 11315 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta en relaci&oacute;n a Magerit ";
 choices[63]= new Array();
 choices[63][0] = "En Magerit 3, vulnerabilidad de un activo es la potencialidad o posibilidad de ocurrencia de la materializaci&oacute;n de una amenaza sobre dicho activo";
 choices[63][1] = "Se permite estructurar el conjunto de activos en capas";
 choices[63][2] = "Se consideran activos esenciales, la informaci&oacute;n que se maneja y los servicios prestados";
 choices[63][3] = "Define que los activos est&aacute;n expuestos a amenazas que interesan por su valor";
 answers[63] = choices[63][0];
 units[63] = "108";
 comments[63] = "Id Pregunta: 11315. En Magerit 3, esa es la definici&oacute;n del riesgo";


//  Id pregunta: 11316 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Se&ntilde;ale de entre las siguientes, la opci&oacute;n incorrecta en cuanto a las caracter&iacute;sticas del principios del modelado orientado a objetos";
 choices[64]= new Array();
 choices[64][0] = "Polimorfismo, encapsulaci&oacute;n y herencia";
 choices[64][1] = "Reusabilidad, modulaci&oacute;n y herencia";
 choices[64][2] = "Herencia, polimorfismo";
 choices[64][3] = "Reusabilidad, abstracci&oacute;n y herencia";
 answers[64] = choices[64][1];
 units[64] = "82";
 comments[64] = "Id Pregunta: 11316. ";


//  Id pregunta: 11319 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  En cuanto a las medidas de seguridad exigidas seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, una de las siguientes medidas no es exigible en el nivel b&aacute;sico.";
 choices[65]= new Array();
 choices[65][0] = "Registro de incidencias";
 choices[65][1] = "El documento de seguridad con indicaci&oacute;n de activos, medidas y responsable del fichero.";
 choices[65][2] = "Listado de personas autorizadas con acceso.";
 choices[65][3] = "El documento de seguridad.";
 answers[65] = choices[65][1];
 units[65] = "29";
 comments[65] = "Id Pregunta: 11319. En el nivel b&aacute;sico, el documento de seguridad, debe tener los recursos y las medidas. La indicaci&oacute;n del responsable es en el nivel medio.";


//  Id pregunta: 11320 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Cu&aacute;l de las siguientes caracter&iacute;sticas responde a las que posee un disco de tipo SSD (Solid State Drive)";
 choices[66]= new Array();
 choices[66][0] = "Usan la misma interfaz que los discos duros convencionales y son por tanto f&aacute;cilmente intercambiables sin necesidades de tarjetas adicionales";
 choices[66][1] = "Usan platos giratorios magn&eacute;ticos";
 choices[66][2] = "Son m&aacute;s sensibles a los golpes que los discos convencionales";
 choices[66][3] = "";
 answers[66] = choices[66][0];
 units[66] = "47";
 comments[66] = "Id Pregunta: 11320. ";


//  Id pregunta: 11327 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  En MPLS, c&oacute;mo se llama el router que no es de frontera";
 choices[67]= new Array();
 choices[67][0] = "LSR";
 choices[67][1] = "LER";
 choices[67][2] = "LSP";
 choices[67][3] = "FEC";
 answers[67] = choices[67][0];
 units[67] = "100";
 comments[67] = "Id Pregunta: 11327. ";


//  Id pregunta: 11344 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  En relaci&oacute;n con la taxonom&iacute;a de Flynn, una de las siguientes asociaciones no es correcta";
 choices[68]= new Array();
 choices[68][0] = "SISD - Monoprocesador";
 choices[68][1] = "MISD - Arquitectura sist&oacute;lica";
 choices[68][2] = "SIMD - Multiproceso";
 choices[68][3] = "SMP - Sistemas multicomputador";
 answers[68] = choices[68][3];
 units[68] = "46";
 comments[68] = "Id Pregunta: 11344. ";


//  Id pregunta: 11348 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Cu&aacute;l es la forma correcta de crear un sello electr&oacute;nico seg&uacute;n la normativa sobre administraci&oacute;n electr&oacute;nica";
 choices[69]= new Array();
 choices[69][0] = "Resoluci&oacute;n del Ministro publicado en BOE";
 choices[69][1] = "Resoluci&oacute;n del Ministro publicado en sede";
 choices[69][2] = "Resoluci&oacute;n de la sbusecretar&iacute;a publicado en la Sede";
 choices[69][3] = "Resoluci&oacute;n del Consejo de Ministros publicado en BOE";
 answers[69] = choices[69][2];
 units[69] = "43";
 comments[69] = "Id Pregunta: 11348. ";


//  Id pregunta: 11353 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Las redes conmutadas ethernet, tienen una serie de ventajas. Se&ntilde;ale la que no se encuentra entre ellas";
 choices[70]= new Array();
 choices[70][0] = "Redes half-duplex";
 choices[70][1] = "Autonegociaci&oacute;n";
 choices[70][2] = "Trunking";
 choices[70][3] = "Uso del comando pause";
 answers[70] = choices[70][0];
 units[70] = "102";
 comments[70] = "Id Pregunta: 11353. ";


//  Id pregunta: 11377 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes atributos debe entregar un servicio de TI a los clientes?";
 choices[71]= new Array();
 choices[71][0] = "Capacidades";
 choices[71][1] = "Coste";
 choices[71][2] = "Riesgo";
 choices[71][3] = "Valor";
 answers[71] = choices[71][3];
 units[71] = "98";
 comments[71] = "Id Pregunta: 11377. ";


//  Id pregunta: 11387 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seg&uacute;n ITIL v3, &iquest;una petici&oacute;n de un cliente deber&iacute;a ser cumplida SIEMPRE?";
 choices[72]= new Array();
 choices[72][0] = "S&iacute;, si el cliente es externo, ya que est&aacute; pagando por el servicio";
 choices[72][1] = "No si el cliente es interno, ya que no siempre paga por el servicio";
 choices[72][2] = "No, es responsabilidad del proveedor TI llevar a cabo las debidas diligencias antes de que la petici&oacute;n sea cumplida";
 choices[72][3] = "S&iacute;, el proveedor del servicio deber&iacute;a asegurarse de que todos las peticiones para nuevos servicios sean cumplidas";
 answers[72] = choices[72][2];
 units[72] = "98";
 comments[72] = "Id Pregunta: 11387. ";


//  Id pregunta: 11403 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre gesti&oacute;n de suministradores es incorrecta?";
 choices[73]= new Array();
 choices[73][0] = "La gesti&oacute;n de suministradores negocia acuerdos de nivel operacional (OLA)";
 choices[73][1] = "La gesti&oacute;n de suministradores asegura que los suministradores cumplan con las expectativas del negocio";
 choices[73][2] = "La gesti&oacute;n de suministradores mantiene informaci&oacute;n en un sistema de gesti&oacute;n de suministradores y contratos";
 choices[73][3] = "La gesti&oacute;n de suministradores negocia acuerdos externos para ayudar en la provisi&oacute;n de servicios";
 answers[73] = choices[73][0];
 units[73] = "98";
 comments[73] = "Id Pregunta: 11403. ";


//  Id pregunta: 11410 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Seg&uacute;n la Ley 9/2014, &iquest;a qui&eacute;n corresponde la elaboraci&oacute;n de propuestas de planes nacionales para ser elevados al gobierno y desarrollo normativo de estos planes?";
 choices[74]= new Array();
 choices[74][0] = "CNMC.";
 choices[74][1] = "ORECE.";
 choices[74][2] = "SETSI.";
 choices[74][3] = "MINETUR.";
 answers[74] = choices[74][3];
 units[74] = "110";
 comments[74] = "Id Pregunta: 11410. ";


//  Id pregunta: 11420 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la Ley 9/2014, las propuestas para la elaboraci&oacute;n de normativa relativa a las infraestructuras comunes de comunicaciones electr&oacute;nicas en el interior de edificios es funci&oacute;n de:";
 choices[75]= new Array();
 choices[75][0] = "MINETUR.";
 choices[75][1] = "AGE.";
 choices[75][2] = "Organismos internacionales.";
 choices[75][3] = "CNMC.";
 answers[75] = choices[75][0];
 units[75] = "110";
 comments[75] = "Id Pregunta: 11420. ";


//  Id pregunta: 11439 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la Ley 9/2014, una de las facultades del Gobierno para la administraci&oacute;n del espectro es:";
 choices[76]= new Array();
 choices[76][0] = "Adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos y aparatos.";
 choices[76][1] = "Aprobar los planes de utilizaci&oacute;n del espectro elaborados por el MINETUR.";
 choices[76][2] = "Aplicar procedimientos para la reasignaci&oacute;n del uso de bandas de frecuencias.";
 choices[76][3] = "Otorgar t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico para fines experimentales o eventos de corta duraci&oacute;n.";
 answers[76] = choices[76][0];
 units[76] = "110";
 comments[76] = "Id Pregunta: 11439. ";


//  Id pregunta: 11444 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Seg&uacute;n la Ley 9/2014, el otorgamiento de los derechos de uso de los recursos de numeraci&oacute;n, direccionamiento y denominaci&oacute;n corresponden a:";
 choices[77]= new Array();
 choices[77][0] = "MINETUR.";
 choices[77][1] = "CNMC.";
 choices[77][2] = "MINECO.";
 choices[77][3] = "ORECE.";
 answers[77] = choices[77][0];
 units[77] = "110";
 comments[77] = "Id Pregunta: 11444. ";


//  Id pregunta: 11464 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta falsa acerca de los Planes Nacionales de Numeraci&oacute;n, Direccionamiento y Denominaci&oacute;n:";
 choices[78]= new Array();
 choices[78][0] = "Elabora la propuesta del Plan el MINETUR.";
 choices[78][1] = "Lo aprueba el Gobierno por Real Decreto.";
 choices[78][2] = "Lo modifica el MINETUR por Orden.";
 choices[78][3] = "La modificaci&oacute;n exige el informe previo de la ORECE.";
 answers[78] = choices[78][3];
 units[78] = "110";
 comments[78] = "Id Pregunta: 11464. ";


//  Id pregunta: 11477 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n la ley 9/2014, un abonado puede cambiar de operador, conservando su n&uacute;mero, y tiene derecho a que el cambio se haga:";
 choices[79]= new Array();
 choices[79][0] = "En un d&iacute;a laborable.";
 choices[79][1] = "Conservando su n&uacute;mero, se puede tardar m&aacute;s de un d&iacute;a laborable sin recibir compensaci&oacute;n.";
 choices[79][2] = "Un operador puede transferir el usuario a otro operador, incluso en contra de la voluntad del abonado.";
 choices[79][3] = "Ninguna es correcta.";
 answers[79] = choices[79][0];
 units[79] = "110";
 comments[79] = "Id Pregunta: 11477. ";


//  Id pregunta: 11487 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La titularidad de los derechos de los programas de ordenador desarrollados por trabajadores asalariados";
 choices[80]= new Array();
 choices[80][0] = "Pertenecen a los trabajadores que han creado el programa";
 choices[80][1] = "Pertenecen a los trabajadores que han creado el programa, salvo pacto en contrario";
 choices[80][2] = "Pertenecen al empresario que los ha contratado";
 choices[80][3] = "Pertenecen al empresario que los ha contratado, salvo pacto en contrario";
 answers[80] = choices[80][3];
 units[80] = "36";
 comments[80] = "Id Pregunta: 11487. NULL";


//  Id pregunta: 11492 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes NO es un agente recogido por la NTI de Protocolo de Intermediaci&oacute;n de Datos?";
 choices[81]= new Array();
 choices[81][0] = "Emisor";
 choices[81][1] = "Remitente";
 choices[81][2] = "Cesionario";
 choices[81][3] = "Cedente";
 answers[81] = choices[81][1];
 units[81] = "43";
 comments[81] = "Id Pregunta: 11492. NULL";


//  Id pregunta: 11497 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;En qu&eacute; casos puede sustituirse el requisito de solvencia por el de clasifiaci&oacute;n?";
 choices[82]= new Array();
 choices[82][0] = "Contratos de obras cuyo valor estimado sea igual o superior a 500.000 &euro;.";
 choices[82][1] = "Contratos de servicios cuyo valor estimado sea igual o superior a 200.000 &euro;.";
 choices[82][2] = "En los 2 casos anteriores.";
 choices[82][3] = "En ninguno de los casos anteriores.";
 answers[82] = choices[82][2];
 units[82] = "38";
 comments[82] = "Id Pregunta: 11497. NULL";


//  Id pregunta: 11506 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;ntos niveles madurez define el modelo de cloud computing SaaS (Software as a Service) de Microsoft?";
 choices[83]= new Array();
 choices[83][0] = "5";
 choices[83][1] = "4";
 choices[83][2] = "3";
 choices[83][3] = "6";
 answers[83] = choices[83][1];
 units[83] = "47";
 comments[83] = "Id Pregunta: 11506. NULL";


//  Id pregunta: 11510 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Twitter?";
 choices[84]= new Array();
 choices[84][0] = "Hive";
 choices[84][1] = "Cassandra";
 choices[84][2] = "Hbase";
 choices[84][3] = "ZoneKeeper";
 answers[84] = choices[84][1];
 units[84] = "68";
 comments[84] = "Id Pregunta: 11510. NULL";


//  Id pregunta: 11524 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La arquitectura de un sistema de Grid Computing est&aacute; formada por las siguientes capas o niveles.";
 choices[85]= new Array();
 choices[85][0] = "Persistence Layer, Data Layer, Logic Layer (Business Layer), Service Layer y Presentation Layer";
 choices[85][1] = "Fabric Layer, Connectivity Layer, Resource Layer, Collective Layer y Applications Layer.";
 choices[85][2] = "Provider Layer, Communicator Layer, Mediator Layer, Coordinator Layer y Presenter Layer.";
 choices[85][3] = "Transport Layer, Security Layer, Transaction Layer, Session Layer y Application Layer.";
 answers[85] = choices[85][1];
 units[85] = "45";
 comments[85] = "Id Pregunta: 11524. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11548 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  De acuerdo a los 6 niveles definidos en CMMI para medir la capacidad de los procesos, &iquest;Qu&eacute; nivel corresponde a un proceso que adem&aacute;s de ser gestionado, se ajusta a la pol&iacute;tica de procesos que existe en la organizaci&oacute;n, alineada con las directivas de la empresa?";
 choices[86]= new Array();
 choices[86][0] = "Nivel 3 Definido";
 choices[86][1] = "Nivel 4 Cuantitativamente Gestionado";
 choices[86][2] = "Nivel 3 Predecible";
 choices[86][3] = "Nivel 5 Optimizado";
 answers[86] = choices[86][0];
 units[86] = "87";
 comments[86] = "Id Pregunta: 11548. NULL";


//  Id pregunta: 11560 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En el dise&ntilde;o estructurado, el acoplamiento normal o simple entre dos m&oacute;dulos de software consiste en:";
 choices[87]= new Array();
 choices[87][0] = "Ambos m&oacute;dulos utilizan las mismas estructuras de datos.";
 choices[87][1] = "Un m&oacute;dulo genera informaci&oacute;n de control para el otro m&oacute;dulo.";
 choices[87][2] = "Un m&oacute;dulo se comunica con el otro mediante paso de par&aacute;metros.";
 choices[87][3] = "Son falsas todas las anteriores.";
 answers[87] = choices[87][2];
 units[87] = "84";
 comments[87] = "Id Pregunta: 11560. NULL";


//  Id pregunta: 11595 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[88]= new Array();
 choices[88][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[88][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[88][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[88][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[88] = choices[88][2];
 units[88] = "43";
 comments[88] = "Id Pregunta: 11595. ";


//  Id pregunta: 11621 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale la respuesta incorrecta con respecto a los MOOC:";
 choices[89]= new Array();
 choices[89][0] = "Son similar a cualquier curso en l&iacute;nea.";
 choices[89][1] = "El n&uacute;mero de participantes es ilimitado.";
 choices[89][2] = "MOOC son las siglas de Masive Open Online Course.";
 choices[89][3] = "Se basan en la interacci&oacute;n social.";
 answers[89] = choices[89][0];
 units[89] = "66";
 comments[89] = "Id Pregunta: 11621. ";


//  Id pregunta: 11625 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  RSS son las siglas de:";
 choices[90]= new Array();
 choices[90][0] = "Really Simple Sindication";
 choices[90][1] = "Rich Simple Summary";
 choices[90][2] = "RDF Simple Summary";
 choices[90][3] = "Todas las anteriores son correctas";
 answers[90] = choices[90][0];
 units[90] = "69";
 comments[90] = "Id Pregunta: 11625. ";


//  Id pregunta: 11647 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique cu&aacute;l no es un habilitador de CoBIT";
 choices[91]= new Array();
 choices[91][0] = "Procesos";
 choices[91][1] = "Gobierno";
 choices[91][2] = "Informaci&oacute;n";
 choices[91][3] = "Estructuras organizacionales";
 answers[91] = choices[91][1];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11647. ";


//  Id pregunta: 11670 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Los Enterprise Java Beans (EJB) con funcionamiento as&iacute;ncrono son:";
 choices[92]= new Array();
 choices[92][0] = "Message driven beans";
 choices[92][1] = "Session beans";
 choices[92][2] = "Entity beans";
 choices[92][3] = "Todos los anteriores tienen funcionamiento as&iacute;ncrono.";
 answers[92] = choices[92][0];
 units[92] = "116";
 comments[92] = "Id Pregunta: 11670. ";


//  Id pregunta: 11679 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El comando top de Linux permite:";
 choices[93]= new Array();
 choices[93][0] = "Moverse por una b&uacute;squeda";
 choices[93][1] = "Acceder al directorio inmediatamente inferior";
 choices[93][2] = "Conocer el consumo de CPU de todos los procesos";
 choices[93][3] = "Todas las anteriores son falsas";
 answers[93] = choices[93][2];
 units[93] = "53, 54";
 comments[93] = "Id Pregunta: 11679. ";


//  Id pregunta: 11708 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; amenaza de seguridad se trata de SW que se adhiere a otro SW para ejecutar funciones no deseadas?";
 choices[94]= new Array();
 choices[94][0] = "Virus";
 choices[94][1] = "Gusano";
 choices[94][2] = "Caballo de Troya Proxy";
 choices[94][3] = "Caballo de Troya de denegaci&oacute;n de servicio";
 answers[94] = choices[94][0];
 units[94] = "111";
 comments[94] = "Id Pregunta: 11708. NULL";


//  Id pregunta: 11736 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El rango de direcciones 10.0.0.0/8";
 choices[95]= new Array();
 choices[95][0] = "Es un rango de direcciones de clase C.";
 choices[95][1] = "Es un rango de direcci&oacute;n p&uacute;blicas.";
 choices[95][2] = "Es un rango de direcciones privadas.";
 choices[95][3] = "Es un rango de direcciones &ldquo;multicast&rdquo;.";
 answers[95] = choices[95][2];
 units[95] = "99";
 comments[95] = "Id Pregunta: 11736. ";


//  Id pregunta: 11745 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  como se puede asegurar la accesibilidad en los m&oacute;viles?";
 choices[96]= new Array();
 choices[96][0] = "web responsive";
 choices[96][1] = "WPA";
 choices[96][2] = "Web accesibility";
 choices[96][3] = "WSUS";
 answers[96] = choices[96][0];
 units[96] = "39";
 comments[96] = "Id Pregunta: 11745. ";


//  Id pregunta: 11755 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[97]= new Array();
 choices[97][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[97][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[97][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[97][3] = "Ninguna es correcta";
 answers[97] = choices[97][2];
 units[97] = "99";
 comments[97] = "Id Pregunta: 11755. ";


//  Id pregunta: 11764 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Se ha publicado la Estrategia TIC?";
 choices[98]= new Array();
 choices[98][0] = "No";
 choices[98][1] = "No est&aacute; previsto";
 choices[98][2] = "Si, en septiembre de 2015.";
 choices[98][3] = "Si, en septiembre de 2014.";
 answers[98] = choices[98][2];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11764. ";


//  Id pregunta: 11784 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia y en lo referente al buen gobierno considera:";
 choices[99]= new Array();
 choices[99][0] = "Infracci&oacute;n disciplinaria muy grave, el acoso laboral.";
 choices[99][1] = "Infracci&oacute;n muy grave en materia de gesti&oacute;n econ&oacute;mico-presupuestaria, el incumplimiento de la obligaci&oacute;n de rendir cuentas regulada en el art&iacute;culo 137 de la Ley 47/2003, General Presupuestaria.";
 choices[99][2] = "Infracci&oacute;n grave, la intervenci&oacute;n en un procedimiento administrativo cuando se d&eacute; alguna de las causas de abstenci&oacute;n legalmente se&ntilde;aladas.";
 choices[99][3] = "Todas son verdaderas.";
 answers[99] = choices[99][3];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11784. ";


