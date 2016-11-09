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

//  Id pregunta: 755 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En Java, respecto a la herencia de clases ...";
 choices[0]= new Array();
 choices[0][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[0][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[0][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[0][3] = "Todas las anteriores son falsas";
 answers[0] = choices[0][3];
 units[0] = "60";
 comments[0] = "Id Pregunta: 755. NULL";


//  Id pregunta: 1083 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Private o privadas";
 choices[1][1] = "Static o est&aacute;ticas";
 choices[1][2] = "Final o final";
 choices[1][3] = "System o sistema";
 answers[1] = choices[1][1];
 units[1] = "60";
 comments[1] = "Id Pregunta: 1083. NULL";


//  Id pregunta: 1200 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Javascript:";
 choices[2]= new Array();
 choices[2][0] = "Es una evoluci&oacute;n de Java, dise&ntilde;ada por Sun Microsystems, como lenguaje de script para el cliente";
 choices[2][1] = "Permite el acceso a bases de datos en el lado del cliente";
 choices[2][2] = "Es una evoluci&oacute;n de LiveScript";
 choices[2][3] = "Se utiliza para programar Applets en el cliente";
 answers[2] = choices[2][2];
 units[2] = "114,116";
 comments[2] = "Id Pregunta: 1200. ";


//  Id pregunta: 1389 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Un proveedor de servicios OLE DB es:";
 choices[3]= new Array();
 choices[3][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[3][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[3][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[3][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[3] = choices[3][0];
 units[3] = "59";
 comments[3] = "Id Pregunta: 1389. ";


//  Id pregunta: 1642 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[4]= new Array();
 choices[4][0] = "Leer ficheros locales";
 choices[4][1] = "Cargar librer&iacute;as nativas";
 choices[4][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[4][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[4] = choices[4][2];
 units[4] = "60";
 comments[4] = "Id Pregunta: 1642. NULL";


//  Id pregunta: 1758 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  En la arquitectura de la plataforma .NET ";
 choices[5]= new Array();
 choices[5][0] = "CLR es el entorno de ejecuci&oacute;n para .NET";
 choices[5][1] = "CLS  define las reglas que debe cumplir todo lenguaje que quiera trabajar con .NET.";
 choices[5][2] = "WebForms se utiliza para el desarrollo de aplicaciones dirigidas a Internet";
 choices[5][3] = "Todas son correctas";
 answers[5] = choices[5][3];
 units[5] = "59";
 comments[5] = "Id Pregunta: 1758. ";


//  Id pregunta: 1764 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre los ficheros .jar de Java";
 choices[6]= new Array();
 choices[6][0] = "Est&aacute;ndar de empaquetado de ficheros compilados, para facilitar su distribuci&oacute;n y reutilizaci&oacute;n";
 choices[6][1] = "Utiliza para la compresi&oacute;n el algoritmo LZW";
 choices[6][2] = "Son ficheros independientes de la plataforma y cualquier JVM (Java Virtual Machine) ser&aacute; capaz de interpretarlos";
 choices[6][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[6] = choices[6][3];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1764. A es falsa. Tambi&eacute;n puede incluir im&aacute;genes y otro tipo de archivos. Los .class no son compilados en el sentido estricto.";


//  Id pregunta: 1772 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es un fichero JAR?";
 choices[7]= new Array();
 choices[7][0] = "Es el fichero que proporciona el entorno de ejecuci&oacute;n de java,  as&iacute; como una API gr&aacute;fica para el desarrollo de aplicaciones y applets.";
 choices[7][1] = "Es el fichero que empaqueta el entorno de ejecuci&oacute;n de java.";
 choices[7][2] = "Es el fichero que contiene el c&oacute;digo intermedio de java.";
 choices[7][3] = "Es un fichero en el que se re&uacute;nen las clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n de un applet o una aplicaci&oacute;n Java.";
 answers[7] = choices[7][3];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1772. NULL";


//  Id pregunta: 1779 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[8]= new Array();
 choices[8][0] = "Tomcat";
 choices[8][1] = "Geronimo";
 choices[8][2] = "JBoss";
 choices[8][3] = "Los 3 lo son";
 answers[8] = choices[8][0];
 units[8] = "60";
 comments[8] = "Id Pregunta: 1779. De la especificaci&oacute;n JEE, Tomcat no cumple la especificaci&oacute;n EJB, solo servlets.";


//  Id pregunta: 1915 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[9]= new Array();
 choices[9][0] = "Una extensi&oacute;n de Swing";
 choices[9][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[9][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[9][3] = "Una familia de fuentes de caracteres";
 answers[9] = choices[9][1];
 units[9] = "60";
 comments[9] = "Id Pregunta: 1915. NULL";


//  Id pregunta: 1939 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[10]= new Array();
 choices[10][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios";
 choices[10][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n";
 choices[10][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows";
 choices[10][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0";
 answers[10] = choices[10][1];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1939. ";


//  Id pregunta: 2714 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;C&oacute;mo se puede mantener la sesi&oacute;n en CGIs?";
 choices[11]= new Array();
 choices[11][0] = "Mediante campos ocultos en los formularios";
 choices[11][1] = "Mediantes cookies";
 choices[11][2] = "Mediante formularios o cookies indistintamente";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][2];
 units[11] = "114";
 comments[11] = "Id Pregunta: 2714. ";


//  Id pregunta: 2933 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  ECMAscript, con cu&aacute;l de los siguientes lenguajes de script se relaciona:";
 choices[12]= new Array();
 choices[12][0] = "JavaScript";
 choices[12][1] = "VBScript";
 choices[12][2] = "Jscript";
 choices[12][3] = "Perlscript";
 answers[12] = choices[12][0];
 units[12] = "114";
 comments[12] = "Id Pregunta: 2933. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3037 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes componentes de software no forma parte del servidor de aplicaciones en una arquitectura a tres capas?:";
 choices[13]= new Array();
 choices[13][0] = "P&aacute;ginas din&aacute;micas";
 choices[13][1] = "Java Virtual Machine";
 choices[13][2] = "Navegador Web";
 choices[13][3] = "Int&eacute;rprete de Scripting";
 answers[13] = choices[13][2];
 units[13] = "114";
 comments[13] = "Id Pregunta: 3037. ";


//  Id pregunta: 3056 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Dentro del modelo de objetos de ASP 3.0 como se define el objeto ra&iacute;z:";
 choices[14]= new Array();
 choices[14][0] = "ObjectRoot";
 choices[14][1] = "ObjectContext";
 choices[14][2] = "Object1";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][1];
 units[14] = "115";
 comments[14] = "Id Pregunta: 3056. ";


//  Id pregunta: 3057 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Dentro del objeto APPLICATION no pueden almacenarse:";
 choices[15]= new Array();
 choices[15][0] = "Variables simples de car&aacute;cter global";
 choices[15][1] = "Variables espec&iacute;ficas para cada usuario que accede al Web";
 choices[15][2] = "Arrays accesibles a todos los usuarios que est&eacute;n ejecutando la aplicaci&oacute;n de una o m&aacute;s dimensiones ";
 choices[15][3] = "Referencias de variables globales que apuntan a instancias de un objeto COM";
 answers[15] = choices[15][1];
 units[15] = "115";
 comments[15] = "Id Pregunta: 3057. ";


//  Id pregunta: 3062 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En las Active Server Pages de Microsoft IIS:";
 choices[16]= new Array();
 choices[16][0] = "Las p&aacute;ginas ASP son ficheros de texto, con c&oacute;digo VBScript o JScript, que es Interpretado";
 choices[16][1] = "Las p&aacute;ginas ASPX son ficheros compilados con c&oacute;digo de lenguajes Microsoft.NET";
 choices[16][2] = "Las p&aacute;ginas CFM son p&aacute;ginas con c&oacute;digo C, interpretado";
 choices[16][3] = "A y B son ciertas";
 answers[16] = choices[16][3];
 units[16] = "115";
 comments[16] = "Id Pregunta: 3062. NULL";


//  Id pregunta: 3093 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Un CGI:";
 choices[17]= new Array();
 choices[17][0] = "Es una aplicaci&oacute;n dise&ntilde;ada para ejecutarse en el servidor web, devolviendo los resultados al usuario mediante el navegador";
 choices[17][1] = "Puede estar escrito en Pascal";
 choices[17][2] = "Puede ejecutarse en sistemas Windows";
 choices[17][3] = "Todas son ciertas";
 answers[17] = choices[17][3];
 units[17] = "114,115,116";
 comments[17] = "Id Pregunta: 3093. ";


//  Id pregunta: 3867 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el servidor";
 choices[18]= new Array();
 choices[18][0] = "JavaScript";
 choices[18][1] = "CGI";
 choices[18][2] = "JSP";
 choices[18][3] = "ASP ";
 answers[18] = choices[18][0];
 units[18] = "114";
 comments[18] = "Id Pregunta: 3867. Tanenbaum";


//  Id pregunta: 3889 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  En cuanto a los Servicios Web, no se puede decir que:";
 choices[19]= new Array();
 choices[19][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[19][1] = "Es independiente de la plataforma";
 choices[19][2] = "Es independiente del lenguaje de programaci&oacute;n y de la plataforma";
 choices[19][3] = "Sus est&aacute;ndares son m&aacute;s complejos que los usados en CORBA";
 answers[19] = choices[19][3];
 units[19] = "51";
 comments[19] = "Id Pregunta: 3889. Nuevo tema. Arquitectura SOA";


//  Id pregunta: 3955 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Indicar la afirmaci&oacute;n falsa";
 choices[20]= new Array();
 choices[20][0] = "Los Servicios Web son m&aacute;s simples que la arquitectura CORBA";
 choices[20][1] = "Es muy dif&iacute;cil hacer interactuar una plataforma en COMcon otra en CORBA";
 choices[20][2] = "No es posible  que un  objeto CORBA  se  comunique  con un  objeto  JavaRMI,";
 choices[20][3] = "CORBA tiene m&uacute;ltiples implementaciones";
 answers[20] = choices[20][2];
 units[20] = "116";
 comments[20] = "Id Pregunta: 3955. Hubo una pregunta sobre CORBA en el ex&aacute;men de SS del 2003, diferente de &eacute;sta";


//  Id pregunta: 4086 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  El formato para im&aacute;genes GIF";
 choices[21]= new Array();
 choices[21][0] = "Se basa en un algoritmo de compresi&oacute;n patentado, lo que te&oacute;ricamente limita su uso";
 choices[21][1] = "Significa Graphic Interleaved Format (Formato Gr&aacute;fico Entrelazado)";
 choices[21][2] = "Fue creado por Microsoft";
 choices[21][3] = "Ninguna de las anteriores es correcta";
 answers[21] = choices[21][0];
 units[21] = "114";
 comments[21] = "Id Pregunta: 4086. ";


//  Id pregunta: 4093 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Que es TRAM";
 choices[22]= new Array();
 choices[22][0] = "Una arquitectura web basada en software libre";
 choices[22][1] = "Una arquitectura web basada en j2ee";
 choices[22][2] = "Una arquitectura web basada en .Net";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][3];
 units[22] = "114,115, 116";
 comments[22] = "Id Pregunta: 4093. NULL";


//  Id pregunta: 4210 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  El t&eacute;rmino JigSaw se refiere a:";
 choices[23]= new Array();
 choices[23][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor";
 choices[23][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos";
 choices[23][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse";
 choices[23][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos";
 answers[23] = choices[23][0];
 units[23] = "116";
 comments[23] = "Id Pregunta: 4210. ";


//  Id pregunta: 4216 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  El entorno Microsoft, WebDAV";
 choices[24]= new Array();
 choices[24][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[24][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[24][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[24][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[24] = choices[24][1];
 units[24] = "115";
 comments[24] = "Id Pregunta: 4216. ";


//  Id pregunta: 4233 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Cuando un navegador se conecta por primera vez a un servidor Web que usa cookies permanentes para identificaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "El navegador env&iacute;a al servidor, junto a la primera petici&oacute;n, una cookie con un n&uacute;mero identificativo generado por el navegador";
 choices[25][1] = "El servidor cuando entrega la primera p&aacute;gina html al navegador, escribe tambi&eacute;n una cookie en el disco del equipo del navegador";
 choices[25][2] = "El navegador, cuando recibe por primera vez una  p&aacute;gina del servidor, escribe en el disco de su equipo una cookie con el n&uacute;mero de identificaci&oacute;n enviado por el servidor";
 choices[25][3] = "La almacena en la cach&eacute; del navegador por ser una cookie permanente";
 answers[25] = choices[25][2];
 units[25] = "114";
 comments[25] = "Id Pregunta: 4233. ";


//  Id pregunta: 4585 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  &iquest;Que tipos de directivas pueden utilizarse en las p&aacute;ginas JSP?";
 choices[26]= new Array();
 choices[26][0] = "impl&iacute;citas y explicitas";
 choices[26][1] = "page, include y taglib, entre otras";
 choices[26][2] = "request, response, pageContext y session";
 choices[26][3] = "declarativas, scriptlets y de expresi&oacute;n.";
 answers[26] = choices[26][1];
 units[26] = "116";
 comments[26] = "Id Pregunta: 4585. JCED - Preparatic XVII";


//  Id pregunta: 4703 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque &hellip;";
 choices[27]= new Array();
 choices[27][0] = "el lenguaje Java se deriva de C++.";
 choices[27][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[27][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[27][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[27] = choices[27][1];
 units[27] = "60";
 comments[27] = "Id Pregunta: 4703. Examen 2006 JCYL";


//  Id pregunta: 4723 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[28]= new Array();
 choices[28][0] = "Schema Naming Context";
 choices[28][1] = " Active Directory Schema MMC";
 choices[28][2] = "Configuration Naming Context";
 choices[28][3] = "Domain Naming Context";
 answers[28] = choices[28][0];
 units[28] = "59,115";
 comments[28] = "Id Pregunta: 4723. Examen 2006 JCYL";


//  Id pregunta: 4949 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Indique el API (Application Programming Interface) de JAVA que facilita el acceso a registros UDDI(Universal Description, Discovery and Integration):";
 choices[29]= new Array();
 choices[29][0] = "SAAJ";
 choices[29][1] = "JAXR";
 choices[29][2] = "SOAP";
 choices[29][3] = "STAX";
 answers[29] = choices[29][1];
 units[29] = "116";
 comments[29] = "Id Pregunta: 4949. Examen TIC B 2007";


//  Id pregunta: 5046 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Indique cu&aacute;l de los siguientes NO es un tipo de EJB (&quot;Enterprise Java Beans&quot;) en J2EE 1.4:";
 choices[30]= new Array();
 choices[30][0] = "Beans de entidad";
 choices[30][1] = "Beans de aplicaci&oacute;n";
 choices[30][2] = "Beans de sesi&oacute;n";
 choices[30][3] = "Beans orientados a mensajes";
 answers[30] = choices[30][1];
 units[30] = "116";
 comments[30] = "Id Pregunta: 5046. Examen TIC A 2007";


//  Id pregunta: 5061 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En Java 2 el operador &gt;&gt;:";
 choices[31]= new Array();
 choices[31][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas";
 choices[31][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo)";
 choices[31][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo)";
 choices[31][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos";
 answers[31] = choices[31][2];
 units[31] = "60";
 comments[31] = "Id Pregunta: 5061. Examen TIC A 2007";


//  Id pregunta: 5278 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Indique cu&aacute;l de los siguientes formatos no se corresponde con un tipo de formato de imagen est&aacute;tica:";
 choices[32]= new Array();
 choices[32][0] = "PNG";
 choices[32][1] = "JPEG";
 choices[32][2] = "GIF";
 choices[32][3] = "MNG";
 answers[32] = choices[32][3];
 units[32] = "114";
 comments[32] = "Id Pregunta: 5278. ";


//  Id pregunta: 5285 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indique cu&aacute;l de los siguientes no es un objeto integrado de ASP:";
 choices[33]= new Array();
 choices[33][0] = "Client";
 choices[33][1] = "Application";
 choices[33][2] = "Server";
 choices[33][3] = "Request";
 answers[33] = choices[33][0];
 units[33] = "115";
 comments[33] = "Id Pregunta: 5285. ";


//  Id pregunta: 5286 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Indique cu&aacute;l de las siguientes opciones no se corresponde al modelo .NET de desarrollo:";
 choices[34]= new Array();
 choices[34][0] = "Interface Definition Language";
 choices[34][1] = "Common Type System";
 choices[34][2] = "Base Class Library";
 choices[34][3] = "Common Language Runtime";
 answers[34] = choices[34][0];
 units[34] = "115";
 comments[34] = "Id Pregunta: 5286. ";


//  Id pregunta: 5495 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Los archivos EAR, seg&uacute;n la tecnolog&iacute;a Java EE:";
 choices[35]= new Array();
 choices[35][0] = "C&oacute;mprime s&oacute;lo archivos .class ";
 choices[35][1] = "Son un tipo de archivo JAR";
 choices[35][2] = "No existen tales archivos. S&oacute;lo hay archivos WAR";
 choices[35][3] = "Es un empaquetado de archivos XML";
 answers[35] = choices[35][1];
 units[35] = "60";
 comments[35] = "Id Pregunta: 5495. NULL";


//  Id pregunta: 5498 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Es posible que cada programador defina sus librer&iacute;as de etiquetas JSP mediante: ";
 choices[36]= new Array();
 choices[36][0] = "La extensi&oacute;n de  la clase Servlet";
 choices[36][1] = "La especificaci&oacute;n JSTL";
 choices[36][2] = "El uso de scriptlets";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][1];
 units[36] = "116";
 comments[36] = "Id Pregunta: 5498. ";


//  Id pregunta: 5515 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Indique cu&aacute;l de los siguientes no es un servidor de aplicaciones para servicios web:";
 choices[37]= new Array();
 choices[37][0] = "JONAS";
 choices[37][1] = "XIMDEX";
 choices[37][2] = "WEBSPHERE";
 choices[37][3] = "WEBLOGIC";
 answers[37] = choices[37][1];
 units[37] = "115,116";
 comments[37] = "Id Pregunta: 5515. ";


//  Id pregunta: 5700 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Las siglas UDDI corresponden a:";
 choices[38]= new Array();
 choices[38][0] = "Universal Description and Discovery Interface";
 choices[38][1] = "Universal Description, Discovery and Integration";
 choices[38][2] = "Universal Definition, Discovery and Integration";
 choices[38][3] = "Universal Definition and Discovery Interface";
 answers[38] = choices[38][1];
 units[38] = "51";
 comments[38] = "Id Pregunta: 5700. NULL";


//  Id pregunta: 5779 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes apartados NO es un grupo clave de la biblioteca de clases base en .NET?";
 choices[39]= new Array();
 choices[39][0] = "Windows Presentation Foundation";
 choices[39][1] = "ASP.NET";
 choices[39][2] = "ADO.NET";
 choices[39][3] = "ACY.NET";
 answers[39] = choices[39][3];
 units[39] = "59";
 comments[39] = "Id Pregunta: 5779. MAP 2008 A1";


//  Id pregunta: 5784 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  En el framework .NET, &iquest;qu&eacute; c&oacute;digo se genera como salida del compilador just in time?";
 choices[40]= new Array();
 choices[40][0] = "Bytecode";
 choices[40][1] = "IL (intemediate language)";
 choices[40][2] = "C&oacute;digo m&aacute;quina";
 choices[40][3] = "C&oacute;digo ensamblador";
 answers[40] = choices[40][2];
 units[40] = "59";
 comments[40] = "Id Pregunta: 5784. MAP 2008 A2";


//  Id pregunta: 5860 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  WSDL son las siglas de:";
 choices[41]= new Array();
 choices[41][0] = "Web Services Description Language";
 choices[41][1] = "Web Services Data Language";
 choices[41][2] = "Web SOAP Definition Language";
 choices[41][3] = "Web Services Distributed Language";
 answers[41] = choices[41][0];
 units[41] = "51";
 comments[41] = "Id Pregunta: 5860. Pregunta 40";


//  Id pregunta: 5890 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  &iquest;Cu&aacute;les de los siguientes elementos no pueden ser miembros de una clase en Java SE 5?";
 choices[42]= new Array();
 choices[42][0] = "Variables de instancia y de clase";
 choices[42][1] = "M&eacute;todos";
 choices[42][2] = "Otras clases (clases internas)";
 choices[42][3] = "Todas las anteriores son ciertas";
 answers[42] = choices[42][3];
 units[42] = "60";
 comments[42] = "Id Pregunta: 5890. NULL";


//  Id pregunta: 5892 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Qu&eacute; es JNDI?";
 choices[43]= new Array();
 choices[43][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[43][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[43][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 5892. NULL";


//  Id pregunta: 5894 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[44]= new Array();
 choices[44][0] = "JSTL";
 choices[44][1] = "JavaScript";
 choices[44][2] = "JNDI";
 choices[44][3] = "JavaCard";
 answers[44] = choices[44][1];
 units[44] = "60";
 comments[44] = "Id Pregunta: 5894. NULL";


//  Id pregunta: 5895 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  &iquest;C&oacute;mo se denominan los elementos que permiten insertar c&oacute;digo Java arbitrario en una p&aacute;gina JSP?";
 choices[45]= new Array();
 choices[45][0] = "Applets";
 choices[45][1] = "Codelets";
 choices[45][2] = "Scriptlets";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = choices[45][2];
 units[45] = "116";
 comments[45] = "Id Pregunta: 5895. ";


//  Id pregunta: 5926 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &quot;applets de Java&quot;?:";
 choices[46]= new Array();
 choices[46][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente";
 choices[46][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &quot;Sandbox&quot;";
 choices[46][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnologia &quot;authenticode&quot;";
 choices[46][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas";
 answers[46] = choices[46][1];
 units[46] = "60";
 comments[46] = "Id Pregunta: 5926. MAP 2008 A1";


//  Id pregunta: 6052 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es una infraestructura de integraci&oacute;n para la construcci&oacute;n de arquitecturas SOA?";
 choices[47]= new Array();
 choices[47][0] = "SAML";
 choices[47][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[47][2] = "CASE (Computer-Aided Software Engineering)";
 choices[47][3] = "ESB (Enterprise Service Bus)";
 answers[47] = choices[47][3];
 units[47] = "51";
 comments[47] = "Id Pregunta: 6052. TIC A 2009";


//  Id pregunta: 6059 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Los servicios web son:";
 choices[48]= new Array();
 choices[48][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[48][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[48][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[48][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[48] = choices[48][3];
 units[48] = "51,69";
 comments[48] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6088 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[49]= new Array();
 choices[49][0] = "XML, SOAP y WSDL";
 choices[49][1] = "XML, SOAP y UDDI";
 choices[49][2] = "XML, WSDL y UDDI";
 choices[49][3] = "SOAP, WSDL y UDDI";
 answers[49] = choices[49][0];
 units[49] = "51";
 comments[49] = "Id Pregunta: 6088. NULL";


//  Id pregunta: 6121 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Con respecto a la orquestaci&oacute;n y coreograf&iacute;a de servicios, se&ntilde;ale la respuesta correcta:";
 choices[50]= new Array();
 choices[50][0] = "Un proceso se puede considerar una orquestaci&oacute;n de servicios cuando es controlado totalmente por una &uacute;nica entidad.";
 choices[50][1] = "Un proceso es una coreograf&iacute;a de servicios cuando define las colaboraciones entre cualquier tipo de aplicaciones componentes, independientemente del lenguaje o plataforma en el que est&eacute;n definidas las mismas.";
 choices[50][2] = "A y B son correctas.";
 choices[50][3] = "A y B son incorrectas.";
 answers[50] = choices[50][2];
 units[50] = "51";
 comments[50] = "Id Pregunta: 6121. NULL";


//  Id pregunta: 6205 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  En Java, &iquest;Qu&eacute; es JSON?";
 choices[51]= new Array();
 choices[51][0] = "Un formato ligero para el intercambio de datos";
 choices[51][1] = "Tecnolog&iacute;a con la finalidad principal de facilitar la integraci&oacute;n en la misma p&aacute;gina Web de aplicaciones y servicios a priori independientes";
 choices[51][2] = "Servicios interactivos en red dando al usuario el control de los datos";
 choices[51][3] = "Componentes modulares de interfaz de usuario gestionados y visualizados en un portal web";
 answers[51] = choices[51][0];
 units[51] = "116";
 comments[51] = "Id Pregunta: 6205. TICB-2009, bloque desarrollo";


//  Id pregunta: 6207 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[52]= new Array();
 choices[52][0] = "WebLogic";
 choices[52][1] = "WebSphere";
 choices[52][2] = "Apache Tomcat";
 choices[52][3] = "Jboss";
 answers[52] = choices[52][2];
 units[52] = "60";
 comments[52] = "Id Pregunta: 6207. TICB-2009, bloque desarrollo";


//  Id pregunta: 6225 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l se las siguientes afirmaciones es incorrecta?";
 choices[53]= new Array();
 choices[53][0] = "Polimorfismo: distintas instancias del mismo tipo interpretan un mismo mensaje de distinta forma";
 choices[53][1] = "Enlace din&aacute;mico, la llamada al m&eacute;todo se resuelve en tiempo de ejecuci&oacute;n";
 choices[53][2] = "Se pueden crear instancias de una clase abstracta";
 choices[53][3] = "Enlace est&aacute;tico se resuelve en tiempo de compilaci&oacute;n";
 answers[53] = choices[53][2];
 units[53] = "116";
 comments[53] = "Id Pregunta: 6225. TICB-2009, bloque desarrollo";


//  Id pregunta: 6227 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En relaci&oacute;n a la Java Native Interface, cu&aacute;l de las siguientes opciones es correcta:";
 choices[54]= new Array();
 choices[54][0] = "Todas las aplicaciones y applets pueden invocar la JNI";
 choices[54][1] = "Las aplicaciones pierden una de las caracter&iacute;sticas m&aacute;s importantes que Java le confiere, su portabilidad";
 choices[54][2] = "JNI mantiene la recolecci&oacute;n de basura en el c&oacute;digo incorporado";
 choices[54][3] = "JNI es una API de Java para acceder a servicios de procesos remotos";
 answers[54] = choices[54][1];
 units[54] = "116";
 comments[54] = "Id Pregunta: 6227. TICB-2009, bloque desarrollo";


//  Id pregunta: 6234 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[55]= new Array();
 choices[55][0] = "CIL";
 choices[55][1] = "CLI";
 choices[55][2] = "JIT";
 choices[55][3] = "CLR";
 answers[55] = choices[55][0];
 units[55] = "59,115";
 comments[55] = "Id Pregunta: 6234. ";


//  Id pregunta: 6250 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Uno de los siguientes es un elemento de Java EE:";
 choices[56]= new Array();
 choices[56][0] = "Contenedor HTTP";
 choices[56][1] = "Servidor JDBC";
 choices[56][2] = "Contenedor Enterprise Java Beans";
 choices[56][3] = "Contenedor JDBC";
 answers[56] = choices[56][2];
 units[56] = "60";
 comments[56] = "Id Pregunta: 6250. TICB-2009, bloque desarrollo";


//  Id pregunta: 6258 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[57]= new Array();
 choices[57][0] = "Facade, Composite, Bridge";
 choices[57][1] = "Strategy, Proxy, Iterator";
 choices[57][2] = "Builder, Abstract Factory, Prototype";
 choices[57][3] = "MVC, Session, Router";
 answers[57] = choices[57][2];
 units[57] = "60";
 comments[57] = "Id Pregunta: 6258. TICB-2009, bloque desarrollo";


//  Id pregunta: 6475 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes elementos NO est&aacute; incluido en el directorio privado WEB-INF de una aplicaci&oacute;n Web?";
 choices[58]= new Array();
 choices[58][0] = "Un archivo web.xml";
 choices[58][1] = "Un subdirectorio llamado classes";
 choices[58][2] = "Documentos de Microsoft Office";
 choices[58][3] = "Un subdirectorio lib para contener los archivos JAR utilizados por la aplicaci&oacute;n Web";
 answers[58] = choices[58][2];
 units[58] = "116";
 comments[58] = "Id Pregunta: 6475. Castilla La Mancha 2009";


//  Id pregunta: 6516 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[59]= new Array();
 choices[59][0] = "bytecode";
 choices[59][1] = "class";
 choices[59][2] = "jar";
 choices[59][3] = "applet";
 answers[59] = choices[59][0];
 units[59] = "60";
 comments[59] = "Id Pregunta: 6516. NULL";


//  Id pregunta: 6522 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En Java, se&ntilde;ale la afirmaci&oacute;n correcta con respecto a los Enterprise JavaBeans (EJB):";
 choices[60]= new Array();
 choices[60][0] = "Son componentes de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n.";
 choices[60][1] = "Existen dos tipos de Enterprise Beans: Session y entity.";
 choices[60][2] = "Est&aacute;n escritos en XML para permitir su interoperabilidad.";
 choices[60][3] = "En un contenedor EJBs solo puede residir un bean.";
 answers[60] = choices[60][0];
 units[60] = "116";
 comments[60] = "Id Pregunta: 6522. NULL";


//  Id pregunta: 7272 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;D&oacute;nde se ejecutan los applets de Java de las p&aacute;ginas web?";
 choices[61]= new Array();
 choices[61][0] = "En el proxy";
 choices[61][1] = "En el servidor de aplicaciones";
 choices[61][2] = "En el servidor web";
 choices[61][3] = "En el navegador del cliente";
 answers[61] = choices[61][3];
 units[61] = "116";
 comments[61] = "Id Pregunta: 7272. Examen TIC B 2009";


//  Id pregunta: 8262 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Qu&eacute; m&eacute;todo NO existe en la clase java HttpServlet?:";
 choices[62]= new Array();
 choices[62][0] = "doPut";
 choices[62][1] = "doTrace.";
 choices[62][2] = "doErrorC";
 choices[62][3] = "doOptions.";
 answers[62] = choices[62][2];
 units[62] = "116";
 comments[62] = "Id Pregunta: 8262. Examen TIC A1 2010";


//  Id pregunta: 8351 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[63]= new Array();
 choices[63][0] = "Unity Application Block,";
 choices[63][1] = "Logging Application Block.";
 choices[63][2] = "Ajax Control Toolkit";
 choices[63][3] = "Cached XML Data Mapper";
 answers[63] = choices[63][0];
 units[63] = "59,115";
 comments[63] = "Id Pregunta: 8351. Examen TIC A2 2010";


//  Id pregunta: 8548 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos se corresponde con la tecnolog&iacute;a que proporciona una infraestructura para la definici&oacute;n de servicios que pueden ser consumidos de manera uniforme, sin conocer los detalles e los sistemas que los proporcionan?";
 choices[64]= new Array();
 choices[64][0] = "EAI (Enterprise Application Integration)";
 choices[64][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[64][2] = "ESB (Enterprise Service Bus)";
 choices[64][3] = "ORB (Object Request Broker)";
 answers[64] = choices[64][2];
 units[64] = "51";
 comments[64] = "Id Pregunta: 8548. Analista Ayto. Madrid 2010";


//  Id pregunta: 8591 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[65]= new Array();
 choices[65][0] = "Apache Tomcat";
 choices[65][1] = "JBOSS";
 choices[65][2] = "WebSphere Application Server";
 choices[65][3] = "Glassfish";
 answers[65] = choices[65][0];
 units[65] = "115,116";
 comments[65] = "Id Pregunta: 8591. Examen TIC A2 2010 interna";


//  Id pregunta: 8597 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO usa JAVA como lenguaje?";
 choices[66]= new Array();
 choices[66][0] = "JavaScript";
 choices[66][1] = "JavaBeans";
 choices[66][2] = "Servlets";
 choices[66][3] = "JSP";
 answers[66] = choices[66][0];
 units[66] = "116";
 comments[66] = "Id Pregunta: 8597. Examen TIC A2 2010 interna";


//  Id pregunta: 8598 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Indique cual de las siguientes definiciones se corresponde con Biztalk:";
 choices[67]= new Array();
 choices[67][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software";
 choices[67][1] = "Es una librer&iacute;a de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[67][2] = "Es un servidor web de NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[67][3] = "Es un componente que pertenece a! CLR de NET que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[67] = choices[67][0];
 units[67] = "115";
 comments[67] = "Id Pregunta: 8598. Examen TIC A2 2010 interna";


//  Id pregunta: 8798 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[68]= new Array();
 choices[68][0] = "Para construir aplicaciones y servicios Web";
 choices[68][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[68][2] = "Para construir la interface del usuario";
 choices[68][3] = "Para conectar los programas";
 answers[68] = choices[68][0];
 units[68] = "59, 115";
 comments[68] = "Id Pregunta: 8798. Examen UPM A2 2011";


//  Id pregunta: 8799 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[69]= new Array();
 choices[69][0] = "CLRUN";
 choices[69][1] = "CLRNET";
 choices[69][2] = "COLR";
 choices[69][3] = "CLR";
 answers[69] = choices[69][3];
 units[69] = "59, 115";
 comments[69] = "Id Pregunta: 8799. Examen UPM A2 2011";


//  Id pregunta: 8876 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Respecto a AJAX es falso que:";
 choices[70]= new Array();
 choices[70][0] = "Reduce el volumen de informaci&oacute;n a intercambiar entre el cliente y el servidor frente al empleo del refresco de p&aacute;gina completa.";
 choices[70][1] = "No se puede emplear para desarrollar aplicaciones RIA.";
 choices[70][2] = "Existen m&uacute;ltiples liber&iacute;as para simplificar el desarrollo con AJAX.";
 choices[70][3] = "Son las siglas de Asynchronous JavaScript And XML.";
 answers[70] = choices[70][1];
 units[70] = "114";
 comments[70] = "Id Pregunta: 8876. Examen UPM A2 2011";


//  Id pregunta: 9492 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  En una arquitectura de tres niveles, &iquest;en qu&eacute; nivel se procesa la l&oacute;gica de la aplicaci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "Nivel de aplicaci&oacute;n";
 choices[71][1] = "Nivel de presentaci&oacute;n";
 choices[71][2] = "Nivel de datos";
 choices[71][3] = "Nivel de usuario";
 answers[71] = choices[71][0];
 units[71] = "114";
 comments[71] = "Id Pregunta: 9492. NULL";


//  Id pregunta: 9503 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Respecto al formato de im&aacute;genes GIF, indique la afirmaci&oacute;n falsa:";
 choices[72]= new Array();
 choices[72][0] = "Utiliza el algoritmo de compresi&oacute;n patentado LZW";
 choices[72][1] = "Fue creado en 1987 por Apple";
 choices[72][2] = "Fue creado en 1987 por Compuserve";
 choices[72][3] = "La paleta de color soporta hasta 256 colores";
 answers[72] = choices[72][1];
 units[72] = "114";
 comments[72] = "Id Pregunta: 9503. NULL";


//  Id pregunta: 9507 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  En el patr&oacute;n MVC, &iquest;d&oacute;nde situar&iacute;amos un contenedor EJB?";
 choices[73]= new Array();
 choices[73][0] = "En el modelo";
 choices[73][1] = "En la vista";
 choices[73][2] = "En el controlador";
 choices[73][3] = "En todos los anteriores";
 answers[73] = choices[73][0];
 units[73] = "116";
 comments[73] = "Id Pregunta: 9507. NULL";


//  Id pregunta: 9519 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[74]= new Array();
 choices[74][0] = "JAXR";
 choices[74][1] = "JAXB";
 choices[74][2] = "JAXP";
 choices[74][3] = "JTA";
 answers[74] = choices[74][3];
 units[74] = "116";
 comments[74] = "Id Pregunta: 9519. NULL";


//  Id pregunta: 9595 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[75]= new Array();
 choices[75][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller) ";
 choices[75][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[75][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[75][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE ";
 answers[75] = choices[75][0];
 units[75] = "60";
 comments[75] = "Id Pregunta: 9595. Xunta Libre 2011";


//  Id pregunta: 9654 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  El framework de JAVA para desarrollo web se llama:";
 choices[76]= new Array();
 choices[76][0] = "Maverick";
 choices[76][1] = "Mavericks";
 choices[76][2] = "Cocoa";
 choices[76][3] = "Kit Kat";
 answers[76] = choices[76][0];
 units[76] = "116";
 comments[76] = "Id Pregunta: 9654. Mavericks es el sistema operativo OS X de Apple";


//  Id pregunta: 9778 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[77]= new Array();
 choices[77][0] = "Master";
 choices[77][1] = "MasterPage";
 choices[77][2] = "Master.Page";
 choices[77][3] = "Page ";
 answers[77] = choices[77][0];
 units[77] = "59, 115";
 comments[77] = "Id Pregunta: 9778. Examen TIC A2 2013";


//  Id pregunta: 9959 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[78]= new Array();
 choices[78][0] = "InProc";
 choices[78][1] = "StateServer";
 choices[78][2] = "ClusterServer";
 choices[78][3] = "SqlServer";
 answers[78] = choices[78][2];
 units[78] = "59,115";
 comments[78] = "Id Pregunta: 9959. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[79]= new Array();
 choices[79][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[79][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[79][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[79][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[79] = choices[79][3];
 units[79] = "59,115";
 comments[79] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[80]= new Array();
 choices[80][0] = "permite trabajar desconectado del origen de datos.";
 choices[80][1] = "no se integra con XML.";
 choices[80][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[80][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[80] = choices[80][0];
 units[80] = "59, 114";
 comments[80] = "Id Pregunta: 10005. ";


//  Id pregunta: 10025 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Se&ntilde;ale cu&aacute;l de las siguientes opciones se ajusta a la siguiente definici&oacute;n: plataforma basada en Java que permite crear rich internet applications (RIA) que se comportan de la misma forma en distintas plataformas:";
 choices[81]= new Array();
 choices[81][0] = "Flex";
 choices[81][1] = "JavaFX";
 choices[81][2] = "AJAX";
 choices[81][3] = "Silverlight";
 answers[81] = choices[81][1];
 units[81] = "116";
 comments[81] = "Id Pregunta: 10025. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10027 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Elija la respuesta correcta:";
 choices[82]= new Array();
 choices[82][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[82][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[82][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[82][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[82] = choices[82][0];
 units[82] = "115";
 comments[82] = "Id Pregunta: 10027. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[83]= new Array();
 choices[83][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[83][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[83][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[83][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[83] = choices[83][1];
 units[83] = "60";
 comments[83] = "Id Pregunta: 10225. NULL";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[84]= new Array();
 choices[84][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[84][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[84][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[84][3] = "ninguna de las anteriores";
 answers[84] = choices[84][0];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10236. NULL";


//  Id pregunta: 10238 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[85]= new Array();
 choices[85][0] = "RMI";
 choices[85][1] = "JTS";
 choices[85][2] = "JMAPI";
 choices[85][3] = "JTA";
 answers[85] = choices[85][3];
 units[85] = "116";
 comments[85] = "Id Pregunta: 10238. NULL";


//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[86]= new Array();
 choices[86][0] = "EJB home interface";
 choices[86][1] = "Un componente EJB";
 choices[86][2] = "La API EJB";
 choices[86][3] = "Un objeto interface EJB";
 answers[86] = choices[86][0];
 units[86] = "116";
 comments[86] = "Id Pregunta: 10239. NULL";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En una aplicaci&oacute;n basada en Struts las solicitudes del cliente son interceptadas en primer lugar por:";
 choices[87]= new Array();
 choices[87][0] = "Un servlet que actua como controlador denominado ActionServlet";
 choices[87][1] = "Un JavaBean encargado de procesar la informaci&oacute;n denominado ActionForm";
 choices[87][2] = "Los objetos ActionMapping que analizan la direcci&oacute;n url y procesar la solicitud";
 choices[87][3] = "Un objeto ActionForward que renderiza una p&aacute;gina JSP";
 answers[87] = choices[87][0];
 units[87] = "116";
 comments[87] = "Id Pregunta: 10242. NULL";


//  Id pregunta: 10322 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual lenguage escoger&iacute;a para desarrollar la capa de presentaci&oacute;n?";
 choices[88]= new Array();
 choices[88][0] = "Pl/sql";
 choices[88][1] = "Queryscript";
 choices[88][2] = "Jquery";
 choices[88][3] = "PyScripter";
 answers[88] = choices[88][2];
 units[88] = "114";
 comments[88] = "Id Pregunta: 10322. PyScripter es un entorno de desarrollo, no un lenguaje";


//  Id pregunta: 10326 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cual no es una funci&oacute;n del servidor de aplicaciones?";
 choices[89]= new Array();
 choices[89][0] = "Multiplexar accesos a la base de datos mediante el gestor transaccional";
 choices[89][1] = "Aislar la l&oacute;gica de negocio de la capa de persistencia";
 choices[89][2] = "Reutilizar objetos de aplicaciones de departamentos distintos";
 choices[89][3] = "Adecuar los mapeos objeto-relacionales a las particularidades del diccionario de datos";
 answers[89] = choices[89][3];
 units[89] = "114";
 comments[89] = "Id Pregunta: 10326. ";


//  Id pregunta: 10327 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual no es un lenguaje de scripting?";
 choices[90]= new Array();
 choices[90][0] = "JScript";
 choices[90][1] = "Node.js";
 choices[90][2] = "Groovy";
 choices[90][3] = "Hack";
 answers[90] = choices[90][1];
 units[90] = "114";
 comments[90] = "Id Pregunta: 10327. Node.js es un entorno de desarrollo, no un lenguaje";


//  Id pregunta: 10606 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Son principios arquitect&oacute;nicos de dise&ntilde;o de SOA:";
 choices[91]= new Array();
 choices[91][0] = "Encapsulaci&oacute;n, autonom&iacute;a y m&aacute;xima dependencia entre servicios.";
 choices[91][1] = "Optimizaci&oacute;n, abstracci&oacute;n y fiabilidad.";
 choices[91][2] = "Composici&oacute;n, descubrimiento y reutilizaci&oacute;n.";
 choices[91][3] = "Fuerte acoplamiento, contrato y madurez.";
 answers[91] = choices[91][2];
 units[91] = "51";
 comments[91] = "Id Pregunta: 10606. ";


//  Id pregunta: 10620 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique la respuesta incorrecta:";
 choices[92]= new Array();
 choices[92][0] = "Java es independiente de la plataforma.";
 choices[92][1] = "El entorno de ejecuci&oacute;n de Java es el responsable de gestionar el ciclo de vida de los objetos.";
 choices[92][2] = "El Global Interpreter Lock (GIL) permite la concurrencia del lenguaje Java.";
 choices[92][3] = "Un programa desarrollado en Java requiere una m&aacute;quina virtual para ejecutarse.";
 answers[92] = choices[92][2];
 units[92] = "60";
 comments[92] = "Id Pregunta: 10620. El GIL es un mecanismo de Python. Java s&iacute; es concurrente.";


//  Id pregunta: 10799 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[93]= new Array();
 choices[93][0] = "WS-Security permite crear servicios web seguros.";
 choices[93][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[93][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[93][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[93] = choices[93][3];
 units[93] = "51";
 comments[93] = "Id Pregunta: 10799. Examen GSI 2014";


//  Id pregunta: 10849 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[94]= new Array();
 choices[94][0] = "Java BluePrints.";
 choices[94][1] = "Java Specification Request.";
 choices[94][2] = "Java Community Process.";
 choices[94][3] = "Java Pattern Spec.";
 answers[94] = choices[94][0];
 units[94] = "60, 116";
 comments[94] = "Id Pregunta: 10849. Examen GSI 2014";


//  Id pregunta: 10976 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Respecto a JSON (JavaScript Object Notation - Notaci&oacute;n de Objetos de JavaScript), se&ntilde;ale la respuesta correcta:";
 choices[95]= new Array();
 choices[95][0] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto solo entre aplicaciones JavaScript.";
 choices[95][1] = "Al igual que XML, permite el intercambio de datos en un formato de texto, tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[95][2] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[95][3] = "Al igual que XML, permite el intercambio de datos en un formato de texto, solo entre aplicaciones JavaScript.";
 answers[95] = choices[95][1];
 units[95] = "114";
 comments[95] = "Id Pregunta: 10976. TIC A1 AGE 2014";


//  Id pregunta: 10980 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  LINQ (Language-Integrated Query) es:";
 choices[96]= new Array();
 choices[96][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[96][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[96][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[96][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[96] = choices[96][2];
 units[96] = "59";
 comments[96] = "Id Pregunta: 10980. TIC A1 AGE 2014";


//  Id pregunta: 11221 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es el nombre de la biblioteca de clases del Framework de .NET?";
 choices[97]= new Array();
 choices[97][0] = "FCL";
 choices[97][1] = "CLR";
 choices[97][2] = "CLS";
 choices[97][3] = "JIT";
 answers[97] = choices[97][0];
 units[97] = "59";
 comments[97] = "Id Pregunta: 11221. ";


//  Id pregunta: 11234 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes no es un framework de desarrollo de aplicaciones web Java?";
 choices[98]= new Array();
 choices[98][0] = "Apache Struts.";
 choices[98][1] = "Spring Framework.";
 choices[98][2] = "Cibernate ORM.";
 choices[98][3] = "Tapestry.";
 answers[98] = choices[98][2];
 units[98] = "116";
 comments[98] = "Id Pregunta: 11234. ";


//  Id pregunta: 11236 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Indique la afirmaci&oacute;n falsa sobre el Framework Spring";
 choices[99]= new Array();
 choices[99][0] = "La versi&oacute;n para la plataforma .NET llamada Spring.net.";
 choices[99][1] = "Soporta programaci&oacute;n basada en aspectos (aspect-oriented programming, AOP).";
 choices[99][2] = "Permite la Integraci&oacute;n con frameworks de persistencia como Hibernate.";
 choices[99][3] = "Como framework MVC utiliza Struts.";
 answers[99] = choices[99][3];
 units[99] = "116";
 comments[99] = "Id Pregunta: 11236. ";


