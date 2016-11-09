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

//  Id pregunta: 0 AÃ±o de creación de pregunta: 2011-01-01
 questions[0]= "1)  Identifique la infracci&oacute;n considerada como grave por la Ley de Protecci&oacute;n de Datos:";
 choices[0]= new Array();
 choices[0][0] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos. ";
 choices[0][1] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[0][2] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 choices[0][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director en la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello. ";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 0. ";


//  Id pregunta: 148 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El m&eacute;todo Delphi para la toma de decisiones es un procedimiento basado en:";
 choices[1]= new Array();
 choices[1][0] = "Series hist&oacute;ricas conocidas que permiten predecir el comportamiento futuro";
 choices[1][1] = "C&aacute;lculo de probabilidades de ocurrencia de cada suceso sobre el que se quiere tomar la decisi&oacute;n";
 choices[1][2] = "Consultar la opini&oacute;n de expertos";
 choices[1][3] = "S&oacute;lo se aplica para la realizaci&oacute;n de proyectos y permite identificar las actividades que forman el camino cr&iacute;tico";
 answers[1] = choices[1][2];
 units[1] = "23";
 comments[1] = "Id Pregunta: 148. NULL";


//  Id pregunta: 561 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Los modelos de optimizaci&oacute;n tratan de problemas";
 choices[2]= new Array();
 choices[2][0] = "bien comprendidos con sus caracter&iacute;sticas  cualitativas bien determinadas";
 choices[2][1] = "Debe definirse un objetivo impl&iacute;cto &uacute;nico";
 choices[2][2] = "Puede existir un procedimiento (algoritmo) viable de c&aacute;lculo, para encontrar el valor &oacute;ptimo de la funci&oacute;n objetivo";
 choices[2][3] = "En general, nunca es posibleencontrar el verdadero &oacute;ptimo global optando por encontrar una soluci&oacute;n sub&oacute;ptima que determine los valores de s&oacute;lounas pocas variables de decisi&oacute;n, al tiempo que trata a las dem&aacute;s como restricciones fijas.";
 answers[2] = choices[2][3];
 units[2] = "21";
 comments[2] = "Id Pregunta: 561. ";


//  Id pregunta: 621 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Los criterios comunes (criterios de evaluaci&oacute;n unificados para la seguridad de los productos IT) se corresponden con la norma:";
 choices[3]= new Array();
 choices[3][0] = "ISO 15408";
 choices[3][1] = "ANSI 14508";
 choices[3][2] = "CEN 15408";
 choices[3][3] = "IEEE 14508";
 answers[3] = choices[3][0];
 units[3] = "33";
 comments[3] = "Id Pregunta: 621. ";


//  Id pregunta: 639 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cu&aacute;l de las siguientes frases es cierta sobre las pautas de accesibilidad WAI en la versi&oacute;n WCAG 2.0:";
 choices[4]= new Array();
 choices[4][0] = "La Prioridad 1 es para los puntos de verificaci&oacute;n que el desarrollador debe satisfacer.";
 choices[4][1] = "Las pautas WAI son una especificaci&oacute;n de W3C, al igual que HTML, CSS, XML y SGML";
 choices[4][2] = "La Prioridad 3 el desarrollador puede satisfacerla; de lo contrario, algunas personas hallar&aacute;n dificultades para acceder a la informaci&oacute;n.";
 choices[4][3] = "El nivel de adecuaci&oacute;n &quot;Doble A&quot; (AA) incluye los puntos de verificaci&oacute;n de prioridad 1 y al menos uno de prioridad 2.";
 answers[4] = choices[4][2];
 units[4] = "39";
 comments[4] = "Id Pregunta: 639. ";


//  Id pregunta: 650 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Para que la certificaci&oacute;n ofrezca garant&iacute;as de imparcialidad resulta esencial:";
 choices[5]= new Array();
 choices[5][0] = "Que est&eacute; homologada";
 choices[5][1] = "Que la expida o la controle un organismo independiente";
 choices[5][2] = "Que la controle un organismo administrativo";
 choices[5][3] = "Que la expida AENOR";
 answers[5] = choices[5][1];
 units[5] = "42";
 comments[5] = "Id Pregunta: 650. ";


//  Id pregunta: 1025 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[6]= new Array();
 choices[6][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[6][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[6][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[6][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[6] = choices[6][2];
 units[6] = "69";
 comments[6] = "Id Pregunta: 1025. NULL";


//  Id pregunta: 1545 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  &iquest; Qu&eacute; escritorio de software libre utiliza CORBA como mecanismo de IPC ?";
 choices[7]= new Array();
 choices[7][0] = "KDE";
 choices[7][1] = "GNOME";
 choices[7][2] = "ambos ";
 choices[7][3] = "Ninguno de los 2";
 answers[7] = choices[7][1];
 units[7] = "53,61";
 comments[7] = "Id Pregunta: 1545. ";


//  Id pregunta: 1759 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  En el entorno Microsoft.NET:";
 choices[8]= new Array();
 choices[8][0] = "MS SQL Server CompactEs una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[8][1] = "MS Web Deploy 3.0Es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[8][2] = "BizTalk ServerEs un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[8][3] = "Todas son correctas";
 answers[8] = choices[8][3];
 units[8] = "59";
 comments[8] = "Id Pregunta: 1759. ";


//  Id pregunta: 2177 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La diferencia entre el an&aacute;lisis y el dise&ntilde;o en la orientaci&oacute;n a objetos es:";
 choices[9]= new Array();
 choices[9][0] = "La transici&oacute;n es tan natural que realmente no hay transici&oacute;n.";
 choices[9][1] = "La transici&oacute;n la marca el momento en que se empiezan a construir objetos.";
 choices[9][2] = "El dise&ntilde;o empieza cuando comienzan a conectarse las clases.";
 choices[9][3] = "El an&aacute;lisis debe definir los objetos en el dominio del problema y el dise&ntilde;o define los objetos en el dominio de la soluci&oacute;n.";
 answers[9] = choices[9][3];
 units[9] = "82,84";
 comments[9] = "Id Pregunta: 2177. ";


//  Id pregunta: 2620 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l no es un factor de calidad seg&uacute;n Mc Call?";
 choices[10]= new Array();
 choices[10][0] = "Fiabilidad";
 choices[10][1] = "Coste ";
 choices[10][2] = "Facilidad de mantenimiento";
 choices[10][3] = "Seguridad";
 answers[10] = choices[10][1];
 units[10] = "87,88,92";
 comments[10] = "Id Pregunta: 2620. ";


//  Id pregunta: 2758 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  En el an&aacute;lisis orientado a objetos, la herencia es:";
 choices[11]= new Array();
 choices[11][0] = "Es el t&eacute;rmino formal que se utiliza para expresar que los datos de un objeto solamente pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos";
 choices[11][1] = "Es el mecanismo mediante el cual una clase adquiere las propiedades de otra clase jer&aacute;rquicamente superior";
 choices[11][2] = "La propiedad que permite definir tantas versiones de un m&eacute;todo como tipos de argumentos pueda tener";
 choices[11][3] = "No existe";
 answers[11] = choices[11][1];
 units[11] = "82";
 comments[11] = "Id Pregunta: 2758. ";


//  Id pregunta: 3162 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[12]= new Array();
 choices[12][0] = "SMTP-X.400";
 choices[12][1] = "TELNET-VT";
 choices[12][2] = "FTAM-FTP";
 choices[12][3] = "X.500-SNMP";
 answers[12] = choices[12][3];
 units[12] = "100, 104, 106";
 comments[12] = "Id Pregunta: 3162. ";


//  Id pregunta: 3549 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, y dependiendo de la velocidad las posibilidades tecnologicas son:";
 choices[13]= new Array();
 choices[13][0] = "Para 155 Mbps las interfaces son el&eacute;ctricas y &oacute;pticas";
 choices[13][1] = "Para 622 Mbps las interfaces son el&eacute;ctricas";
 choices[13][2] = "Para 155 Mbps las interfaces son &oacute;pticas solamente.";
 choices[13][3] = "Para ambas velocidades exclusivamente interfaces &oacute;pticas";
 answers[13] = choices[13][0];
 units[13] = "103";
 comments[13] = "Id Pregunta: 3549. ";


//  Id pregunta: 3987 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n verdadera acerca de la Multiplexaci&oacute;n CWDM:";
 choices[14]= new Array();
 choices[14][0] = "El plan de longitudes de onda define 18, pero s&oacute;lo son &uacute;tiles 16.";
 choices[14][1] = "La separaci&oacute;n entre longitudes de onda es de 50 nm y la m&aacute;xima distancia alcanza los 100 km si se emplean todos los canales.";
 choices[14][2] = "Las conexiones simult&aacute;neas que pueden transmitirse en una fibra &oacute;ptica tienen que cumplir el mismo protocolo a fin de impedir la interferencia entre canales.";
 choices[14][3] = "Puede transportar ATM, pero es incompatible con Gigabit Ethernet";
 answers[14] = choices[14][0];
 units[14] = "101";
 comments[14] = "Id Pregunta: 3987. ";


//  Id pregunta: 4064 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[15]= new Array();
 choices[15][0] = "La defensa de los productos de las multinacionales";
 choices[15][1] = "Evitar que se pueda difundir el software libre";
 choices[15][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[15][3] = "La defensa de los derechos de los autores";
 answers[15] = choices[15][3];
 units[15] = "36";
 comments[15] = "Id Pregunta: 4064. ";


//  Id pregunta: 4486 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[16]= new Array();
 choices[16][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[16][1] = "El algoritmo de &aacute;rbol de extensi&oacute;n (spanning tree algorithm) es utilizado par los dispositivos puentes (o &quot;bridges&quot;) para construir topolog&iacute;as de interconexi&oacute;n de LAN's libres de bucles.";
 choices[16][2] = "Los encaminadores o routers deben tener implementadas las funcionalidades de los 7 niveles del modelo de referencia OSI para descubrir las rutas de encaminamiento adecuadas.";
 choices[16][3] = "Las pasarelas o gateways permiten, entre otras funcionalidades Ia implementaci&oacute;n de servicios NAT de traducci&oacute;n de direcciones IP.";
 answers[16] = choices[16][2];
 units[16] = "102";
 comments[16] = "Id Pregunta: 4486. ";


//  Id pregunta: 4521 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  En una infraestructura PKI, Ia revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[17]= new Array();
 choices[17][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[17][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[17][2] = "No hace falta, se puede hacer desde Internet.";
 choices[17][3] = "En una oficina de registro.";
 answers[17] = choices[17][3];
 units[17] = "74";
 comments[17] = "Id Pregunta: 4521. NULL";


//  Id pregunta: 4534 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite? ";
 choices[18]= new Array();
 choices[18][0] = "Forms.";
 choices[18][1] = "Reports.";
 choices[18][2] = "Designer.";
 choices[18][3] = "Fusion.";
 answers[18] = choices[18][3];
 units[18] = "57,58";
 comments[18] = "Id Pregunta: 4534. ";


//  Id pregunta: 5061 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  En Java 2 el operador &gt;&gt;:";
 choices[19]= new Array();
 choices[19][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas";
 choices[19][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo)";
 choices[19][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo)";
 choices[19][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos";
 answers[19] = choices[19][2];
 units[19] = "60";
 comments[19] = "Id Pregunta: 5061. Examen TIC A 2007";


//  Id pregunta: 5093 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Los algoritmos de autenticaci&oacute;n y firma utilizados en el DNI se basan en:";
 choices[20]= new Array();
 choices[20][0] = "Cuatro pares de claves RSA";
 choices[20][1] = "Dos pares de claves DES";
 choices[20][2] = "Dos pares de claves DSA";
 choices[20][3] = "Dos pares de claves RSA";
 answers[20] = choices[20][3];
 units[20] = "74";
 comments[20] = "Id Pregunta: 5093. NULL";


//  Id pregunta: 5720 AÃ±o de creación de pregunta: 2009-01-01
 questions[21]= "22)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[21]= new Array();
 choices[21][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria";
 choices[21][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos";
 choices[21][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol";
 choices[21][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol";
 answers[21] = choices[21][2];
 units[21] = "69";
 comments[21] = "Id Pregunta: 5720. MAP 2008 A1";


//  Id pregunta: 5763 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Seg&uacute;n Bennet, Lientz y Swanson:";
 choices[22]= new Array();
 choices[22][0] = "El mantenimiento perfectivo son las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia.";
 choices[22][1] = "El mantenimiento evolutivo son las incorporaciones, modificaciones y eliminaciones necesarias en un producto software para cubrir la expansi&oacute;n o cambio en las necesidades del usuario.";
 choices[22][2] = "El mantenimiento preventivo es la realizaci&oacute;n del mantenimiento anticip&aacute;ndose a problemas futuros.";
 choices[22][3] = "El mantenimiento adaptativo son las modificaciones que afectan a los entornos en los que el sistema opera, como por ejemplo la configuraci&oacute;n del hardware.";
 answers[22] = choices[22][2];
 units[22] = "90";
 comments[22] = "Id Pregunta: 5763. ";


//  Id pregunta: 5893 AÃ±o de creación de pregunta: 2009-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es JNI?";
 choices[23]= new Array();
 choices[23][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[23][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[23][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][1];
 units[23] = "60";
 comments[23] = "Id Pregunta: 5893. NULL";


//  Id pregunta: 6003 AÃ±o de creación de pregunta: 2010-01-01
 questions[24]= "25)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[24]= new Array();
 choices[24][0] = "Extraer la direcci&oacute;n de correo de un usuario.";
 choices[24][1] = "Relacionar sucesivas conexiones de un cliente.";
 choices[24][2] = "Enviar un objeto al cliente cuando su copia cach&eacute; est&aacute; obsoleta.";
 choices[24][3] = "Enviar c&oacute;digo embebido en la p&aacute;gina HTML que se ejecutar&aacute; en el cliente.";
 answers[24] = choices[24][1];
 units[24] = "113";
 comments[24] = "Id Pregunta: 6003. TIC A 2009";


//  Id pregunta: 6079 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes NO es una salida del proceso de Selecci&oacute;n de Vendedores dentro de la Gesti&oacute;n de las Adquisiciones del Proyecto?";
 choices[25]= new Array();
 choices[25][0] = "Contrato.";
 choices[25][1] = "Plan de gesti&oacute;n del contrato.";
 choices[25][2] = "Disponibilidad de recursos.";
 choices[25][3] = "Lista de vendedores calificados.";
 answers[25] = choices[25][3];
 units[25] = "27";
 comments[25] = "Id Pregunta: 6079. ";


//  Id pregunta: 6168 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[26]= new Array();
 choices[26][0] = "El conocimiento es informaci&oacute;n interiorizada.";
 choices[26][1] = "El conocimiento es informaci&oacute;n ordenada y estructurada.";
 choices[26][2] = "El conocimiento es informaci&oacute;n puesta dentro de un contexto.";
 choices[26][3] = "Todas las anteriores son correctas";
 answers[26] = choices[26][3];
 units[26] = "22";
 comments[26] = "Id Pregunta: 6168. ";


//  Id pregunta: 6280 AÃ±o de creación de pregunta: 2010-01-01
 questions[27]= "28)  &iquest;Cu&aacute;les de las siguientes no es una fase definida en la planificaci&oacute;n estrat&eacute;gica?";
 choices[27]= new Array();
 choices[27][0] = "Formulaci&oacute;n de objetivos organizacionales";
 choices[27][1] = "An&aacute;lisis de las fortalezas y limitaciones de la empresa";
 choices[27][2] = "Reestructuraci&oacute;n de la empresa";
 choices[27][3] = "Formulaci&oacute;n de alternativas estrat&eacute;gicas";
 answers[27] = choices[27][2];
 units[27] = "77";
 comments[27] = "Id Pregunta: 6280. ";


//  Id pregunta: 6411 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[28]= new Array();
 choices[28][0] = "150.001 hasta 600.000 euros";
 choices[28][1] = "150.001 hasta 300.000 euros";
 choices[28][2] = "300.001 hasta 600.000 euros";
 choices[28][3] = "600.001 hasta 1,000.000 euros";
 answers[28] = choices[28][0];
 units[28] = "30";
 comments[28] = "Id Pregunta: 6411. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 8208 AÃ±o de creación de pregunta: 2011-01-01
 questions[29]= "30)  En una tabla de una base de datos relacional:";
 choices[29]= new Array();
 choices[29][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[29][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[29][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[29][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder ala tabla.";
 answers[29] = choices[29][3];
 units[29] = "57, 58";
 comments[29] = "Id Pregunta: 8208. Examen TIC A1 2010";


//  Id pregunta: 8249 AÃ±o de creación de pregunta: 2011-01-01
 questions[30]= "31)  Asumiendo que el cliente y el servidor se ejecutan en diferentes m&aacute;quinas, y considerando como local aquella m&aacute;quina con acceso a la pantalla y al teclado, la combinaci&oacute;n correcta respecto a Xwindows(X11) y Microsoft Terminal Server (TS) es:";
 choices[30]= new Array();
 choices[30][0] = "El cliente X11 y el cliente TS se ejecutan de manera local y el servidor X11 y el servidor TS de manera remota.";
 choices[30][1] = "El cliente X11 y el servidor TS se ejecutan de manera local y el servidor X11 y el cliente TS de manera remota.";
 choices[30][2] = "El servidor X11 y el cliente TS se ejecutan de manera local y el cliente X11 y el servidor TS de manera remota.";
 choices[30][3] = "El servidor X11 y el servidor TS se ejecutan de manera local y el cliente X11 y el cliente TS de manera remota.";
 answers[30] = choices[30][2];
 units[30] = "119";
 comments[30] = "Id Pregunta: 8249. Examen TIC A1 2010";


//  Id pregunta: 8291 AÃ±o de creación de pregunta: 2011-01-01
 questions[31]= "32)  Dada la red 193.163.14.192/27, podemos decir que: ";
 choices[31]= new Array();
 choices[31][0] = "La direcci&oacute;n de broadcast de dicha red es la 193.168.14.255.";
 choices[31][1] = "Admite hasta 30 hosts, sin contar las direcciones de identificaci&oacute;n de red y de broadcast.";
 choices[31][2] = "La direcci&oacute;n IP 193.168.14.225 pertenece a dicha red.";
 choices[31][3] = "Es una red con direccionamiento privado.";
 answers[31] = choices[31][1];
 units[31] = "100";
 comments[31] = "Id Pregunta: 8291. Examen TIC A2 2010";


//  Id pregunta: 8386 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es una prueba de caja blanca?";
 choices[32]= new Array();
 choices[32][0] = "Prueba de la tabla ortogonal.";
 choices[32][1] = "Partici&oacute;n equivalente.";
 choices[32][2] = "M&eacute;todos de prueba basados en grafos.";
 choices[32][3] = "Prueba del camino b&aacute;sico.";
 answers[32] = choices[32][3];
 units[32] = "91";
 comments[32] = "Id Pregunta: 8386. Examen TIC A2 2010";


//  Id pregunta: 8514 AÃ±o de creación de pregunta: 2011-01-01
 questions[33]= "34)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA: ";
 choices[33]= new Array();
 choices[33][0] = "Lluirex - Valencia";
 choices[33][1] = "MAX - Madrid";
 choices[33][2] = "LinKat - Catalu&ntilde;a";
 choices[33][3] = "mEDUxa - Baleares";
 answers[33] = choices[33][3];
 units[33] = "61";
 comments[33] = "Id Pregunta: 8514. Examen TIC A2 2010";


//  Id pregunta: 8625 AÃ±o de creación de pregunta: 2011-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes problemas afecta a los medios de transmisi&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Reverberaci&oacute;n.";
 choices[34][1] = "Ruido blanco";
 choices[34][2] = "Afon&iacute;a";
 choices[34][3] = "Todos son posibles problemas de los medios de transmisi&oacute;n";
 answers[34] = choices[34][1];
 units[34] = "99";
 comments[34] = "Id Pregunta: 8625. Examen TIC A2 2010 interna";


//  Id pregunta: 8683 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[35]= new Array();
 choices[35][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[35][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[35][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar- la red por alg&uacute;n motivo.";
 choices[35][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 8683. Examen UPM A2 2011";


//  Id pregunta: 8820 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[36]= new Array();
 choices[36][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[36][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[36][2] = "a y b son correctas.";
 choices[36][3] = "Ninguna de las anteriores.";
 answers[36] = choices[36][0];
 units[36] = "27, 86";
 comments[36] = "Id Pregunta: 8820. Examen UPM A2 2011";


//  Id pregunta: 8959 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  Dentro de las soluciones propietarias de CRM no se encuentra:";
 choices[37]= new Array();
 choices[37][0] = "Compiere";
 choices[37][1] = "SPSS- Clementine";
 choices[37][2] = "Epiphany";
 choices[37][3] = "Todas son soluciones comerciales";
 answers[37] = choices[37][0];
 units[37] = "65";
 comments[37] = "Id Pregunta: 8959. ";


//  Id pregunta: 9153 AÃ±o de creación de pregunta: 2013-01-01
 questions[38]= "39)  No es un concepto relacionado con los sistemas de eLearning:";
 choices[38]= new Array();
 choices[38][0] = "VLE";
 choices[38][1] = "LSS";
 choices[38][2] = "LME";
 choices[38][3] = "ILS";
 answers[38] = choices[38][2];
 units[38] = "66";
 comments[38] = "Id Pregunta: 9153. ";


//  Id pregunta: 9180 AÃ±o de creación de pregunta: 2013-01-01
 questions[39]= "40)  No es un espacio de color:";
 choices[39]= new Array();
 choices[39][0] = "RGB";
 choices[39][1] = "CMYK";
 choices[39][2] = "HSM";
 choices[39][3] = "HSV";
 answers[39] = choices[39][2];
 units[39] = "93";
 comments[39] = "Id Pregunta: 9180. NULL";


//  Id pregunta: 9279 AÃ±o de creación de pregunta: 2013-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes es un principio del programa IDABC?";
 choices[40]= new Array();
 choices[40][0] = "Alianzas.";
 choices[40][1] = "Compartici&oacute;n de recursos.";
 choices[40][2] = "Subsidiariedad.";
 choices[40][3] = "Ninguno de los anteriores.";
 answers[40] = choices[40][2];
 units[40] = "40";
 comments[40] = "Id Pregunta: 9279. ";


//  Id pregunta: 9377 AÃ±o de creación de pregunta: 2013-01-01
 questions[41]= "42)  &iquest;Qu&eacute; m&eacute;todo de asignaci&oacute;n de pesos no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[41]= new Array();
 choices[41][0] = "Asignaci&oacute;n directa";
 choices[41][1] = "Entrop&iacute;a";
 choices[41][2] = "SAATY";
 choices[41][3] = "La herramienta SSD-AAPP soporta todos los m&eacute;todos anteriores de asignaci&oacute;n de pesos";
 answers[41] = choices[41][3];
 units[41] = "34";
 comments[41] = "Id Pregunta: 9377. ";


//  Id pregunta: 9653 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  El modelo de calidad ISO 9126 tiene:";
 choices[42]= new Array();
 choices[42][0] = "27 caracter&iacute;sticas y 6 subcaracter&iacute;sticas";
 choices[42][1] = "6 caracter&iacute;sticas y 28 subcaracter&iacute;sticas";
 choices[42][2] = "7 caracter&iacute;sticas y 26 subcaracter&iacute;sticas";
 choices[42][3] = "6 caracter&iacute;sticas y 27 subcaracter&iacute;sticas";
 answers[42] = choices[42][3];
 units[42] = "87";
 comments[42] = "Id Pregunta: 9653. NULL";


//  Id pregunta: 9733 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  Se&ntilde;ale de entre las siguientes, la norma que establece los requisitos para el dise&ntilde;o y desarrollo de la documentaci&oacute;n del software de usuario como parte de los procesos del ciclo de vida:";
 choices[43]= new Array();
 choices[43][0] = "ISO/IEC 26514";
 choices[43][1] = "ISO 7816.";
 choices[43][2] = "ISO/IEC 12207.";
 choices[43][3] = "ISO 8859.";
 answers[43] = choices[43][0];
 units[43] = "76";
 comments[43] = "Id Pregunta: 9733. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9767 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  El ataque a SSL/TLS que permite extraer informaci&oacute;n sobre los tokens de login, email, etc en 30 segundos se llama:";
 choices[44]= new Array();
 choices[44][0] = "Beast Attack";
 choices[44][1] = "Crime";
 choices[44][2] = "Breach";
 choices[44][3] = "No existe dicho ataque";
 answers[44] = choices[44][2];
 units[44] = "111";
 comments[44] = "Id Pregunta: 9767. NULL";


//  Id pregunta: 9794 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  El Lenguaje de Ontolog&iacute;as Web (OWL) proporciona tres sublenguajes, cada uno con nivel de expresividad mayor que el anterior. Se&ntilde;ale el que NO es correcto:";
 choices[45]= new Array();
 choices[45][0] = "OWL Lite.";
 choices[45][1] = "OWL DL.";
 choices[45][2] = "OWL Extension.";
 choices[45][3] = "OWL Full.";
 answers[45] = choices[45][2];
 units[45] = "120";
 comments[45] = "Id Pregunta: 9794. Examen TIC A2 2013";


//  Id pregunta: 9841 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  Infraestructura de PKI. La autoridad de certificaci&oacute;n ra&iacute;z:";
 choices[46]= new Array();
 choices[46][0] = "No utiliza certificados digitales.";
 choices[46][1] = "Utiliza un certificado digital firmado por otra autoridad de certificaci&oacute;n.";
 choices[46][2] = "Utiliza un certifica digital autofirmado por ella misma.";
 choices[46][3] = "Utiliza un certificado digital emitido por la Administraci&oacute;n P&uacute;blica.";
 answers[46] = choices[46][2];
 units[46] = "111";
 comments[46] = "Id Pregunta: 9841. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9882 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, el plazo de duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica ser&aacute; de";
 choices[47]= new Array();
 choices[47][0] = "30 a&ntilde;os a partir de la divulgaci&oacute;n y 70 desde la fecha de su creaci&oacute;n.";
 choices[47][1] = "70 a&ntilde;os computados a partir del 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n.";
 choices[47][2] = "50 a&ntilde;os computados a partir de su creaci&oacute;n.";
 choices[47][3] = "70 a&ntilde;os computados a partir de la fecha de divulgaci&oacute;n.";
 answers[47] = choices[47][1];
 units[47] = "36";
 comments[47] = "Id Pregunta: 9882. TIC A1, Examen 2013";


//  Id pregunta: 9897 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  En relaci&oacute;n al reconocimiento &oacute;ptico de caracteres, el proceso de Kerning consiste en eliminar el espacio excesivo entre";
 choices[48]= new Array();
 choices[48][0] = "bloques en los que se encuentra dividida una p&aacute;gina.";
 choices[48][1] = "l&iacute;neas de texto.";
 choices[48][2] = "palabras de una l&iacute;nea de texto.";
 choices[48][3] = "letras de una palabra.";
 answers[48] = choices[48][3];
 units[48] = "94";
 comments[48] = "Id Pregunta: 9897. TIC A1, Examen 2013";


//  Id pregunta: 9928 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[49]= new Array();
 choices[49][0] = "8192.";
 choices[49][1] = "1024.";
 choices[49][2] = "512.";
 choices[49][3] = "2048.";
 answers[49] = choices[49][0];
 units[49] = "100";
 comments[49] = "Id Pregunta: 9928. NULL";


//  Id pregunta: 9951 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  &iquest;Qu&eacute; practicas, seg&uacute;n M&eacute;trica v3, tienen como objetivo potenciar la participaci&oacute;nactiva de la alta direcci&oacute;n como medio para obtener los mejores resultados en elmenor tiempo posible y con una mayor calidad de los productos?";
 choices[50]= new Array();
 choices[50][0] = "Sesiones JAD. ";
 choices[50][1] = "Sesiones JRP.";
 choices[50][2] = "Entrevistas";
 choices[50][3] = "Reuniones";
 answers[50] = choices[50][1];
 units[50] = "86";
 comments[50] = "Id Pregunta: 9951. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9956 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes es una herramienta que ayuda a realizar seguimiento a los requisitos a lo largo del ciclo de vida del proyecto para asegurar que se est&aacute;n cumpliendo de manera eficaz?";
 choices[51]= new Array();
 choices[51][0] = "Cuestionarios";
 choices[51][1] = "Casos de uso.";
 choices[51][2] = "Matriz de trazabilidad de requisitos.";
 choices[51][3] = "Prototipos";
 answers[51] = choices[51][2];
 units[51] = "78";
 comments[51] = "Id Pregunta: 9956. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9969 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[52]= new Array();
 choices[52][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[52][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[52][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[52][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[52] = choices[52][3];
 units[52] = "71";
 comments[52] = "Id Pregunta: 9969. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10070 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  Qu&eacute; datos NO incorporar&aacute; una descripci&oacute;n de sesi&oacute;n SDP (Session Description Protocol - RFC 4566) en una iniciaci&oacute;n de sesi&oacute;n utilizada en SIP (Session Initiation Protocol):";
 choices[53]= new Array();
 choices[53][0] = "Tipo de medio.";
 choices[53][1] = "Protocolo de transporte (RTP/UDP/IP, H 320, etc.).";
 choices[53][2] = "Formato del medio (video H.261, video MPEG, etc.).";
 choices[53][3] = "Tama&ntilde;o de los datos.";
 answers[53] = choices[53][3];
 units[53] = "109";
 comments[53] = "Id Pregunta: 10070. TIC A2, libre, Examen 2013";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  &iquest;Qu&eacute; tipo de flujos de datos no existen?";
 choices[54]= new Array();
 choices[54][0] = "Flujos discretos y continuos";
 choices[54][1] = "Flujos de consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[54][2] = "Flujo de control";
 choices[54][3] = "Existen todos los tipos de flujos anteriores";
 answers[54] = choices[54][3];
 units[54] = "81";
 comments[54] = "Id Pregunta: 10103. NULL";


//  Id pregunta: 10108 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  Las siglas CSMA/CD significan:";
 choices[55]= new Array();
 choices[55][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[55][1] = "Carrier Sense Multiple Access with Common Data";
 choices[55][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[55][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[55] = choices[55][0];
 units[55] = "101";
 comments[55] = "Id Pregunta: 10108. ";


//  Id pregunta: 10124 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  Un acceso b&aacute;sico RDSI tiene:";
 choices[56]= new Array();
 choices[56][0] = "30 canales B de 64 kbps y 1 canal D de 64 kbps";
 choices[56][1] = "2 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[56][2] = "30 canales B de 16 kbps y 1 canal D de 16 kbps";
 choices[56][3] = "2 canales B de 16 kbps y 1 canal D de 16 kbps";
 answers[56] = choices[56][0];
 units[56] = "103";
 comments[56] = "Id Pregunta: 10124. ";


//  Id pregunta: 10133 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[57]= new Array();
 choices[57][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[57][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[57][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[57][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[57] = choices[57][2];
 units[57] = "104";
 comments[57] = "Id Pregunta: 10133. ";


//  Id pregunta: 10181 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con las clases abstractas y las interfaces:";
 choices[58]= new Array();
 choices[58][0] = "En una clase abstracta, todos los m&eacute;todos definidos deben carecer de implementaci&oacute;n";
 choices[58][1] = "Una clase abstracta podr&aacute; ser instanciada cuando la clase que hereda implemente los m&eacute;todos abstractos";
 choices[58][2] = "Una interfaz permite la implementaci&oacute;n de clases con comportamientos comunes, sin importar su ubicaci&oacute;n en la jerarqu&iacute;a de clases.";
 choices[58][3] = "Las interfaces pueden definir constantes y variables de instancia";
 answers[58] = choices[58][2];
 units[58] = "82";
 comments[58] = "Id Pregunta: 10181. ";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[59]= new Array();
 choices[59][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[59][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[59][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[59][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[59] = choices[59][1];
 units[59] = "61";
 comments[59] = "Id Pregunta: 10246. ";


//  Id pregunta: 10272 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[60]= new Array();
 choices[60][0] = "B&uacute;squeda de profundida limitada";
 choices[60][1] = "B&uacute;squeda primero el mejor";
 choices[60][2] = "B&uacute;squeda de coste uniforme";
 choices[60][3] = "B&uacute;squeda bidireccional";
 answers[60] = choices[60][1];
 units[60] = "63";
 comments[60] = "Id Pregunta: 10272. NULL";


//  Id pregunta: 10349 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  En relaci&oacute;n con el mecanismo de protecci&oacute;n de derechos de autor por huella digital, &iquest;c&oacute;mo se consigue que los datos del usuario que ha adquirido los derechos de uso del objeto no sean conocidos por el vendedor?";
 choices[61]= new Array();
 choices[61][0] = "Mediante el uso de https para asegurar la privacidad de la comunicaci&oacute;n";
 choices[61][1] = "Mediante el uso de un sistema de huella digital asim&eacute;trica, que emplea criptograf&iacute;a asim&eacute;trica";
 choices[61][2] = "Mediante el uso de un sistema de huella digital an&oacute;nima, utilizando un tercero de confianza que conoce tanto la identidad del comprador como del vendedor";
 choices[61][3] = "No es posible, el vendedor debe conocer los datos del comprador para poder transmitirle los derechos de uso del objeto";
 answers[61] = choices[61][2];
 units[61] = "37";
 comments[61] = "Id Pregunta: 10349. La huella digital es un mecanismo para defender los derechos de autor y combatir la copia no autorizada de contenidos que consiste en introducir una serie de bits imperceptibles sobre un producto de soporte electr&oacute;nico (CD-ROM, DVD.) de forma que se pueda";


//  Id pregunta: 10370 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[62]= new Array();
 choices[62][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[62][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[62][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[62][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[62] = choices[62][0];
 units[62] = "28";
 comments[62] = "Id Pregunta: 10370. ";


//  Id pregunta: 10434 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Los sistemas de videoconferencia";
 choices[63]= new Array();
 choices[63][0] = "pueden utilizar conmutaci&oacute;n de circuitos sobre la RDSI usando el protocolo H.326. ";
 choices[63][1] = "pueden utilizar redes IP con el protocolo H.323. ";
 choices[63][2] = "pueden utilizar redes IP s&oacute;lo si usan el protocolo SIP.";
 choices[63][3] = "pueden utilizar conmutaci&oacute;n de paquetes sobre RDSI, multiplexando las se&ntilde;ales de las distintas localizaciones si usan el protocolo H.328. ";
 answers[63] = choices[63][1];
 units[63] = "117";
 comments[63] = "Id Pregunta: 10434. Examen TIC A1 2013";


//  Id pregunta: 10445 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para ";
 choices[64]= new Array();
 choices[64][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles. ";
 choices[64][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[64][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[64][3] = "detectar errores de condiciones de carrera (race condition bugs). ";
 answers[64] = choices[64][3];
 units[64] = "88";
 comments[64] = "Id Pregunta: 10445. Examen TIC A1 2013";


//  Id pregunta: 10462 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Respecto a REST, indique qu&eacute; afirmaci&oacute;n es falsa:";
 choices[65]= new Array();
 choices[65][0] = "Permite una generalizaci&oacute;n de las interfaces entre recursos.";
 choices[65][1] = "Facilita el desarrollo de los clientes de los servicios.";
 choices[65][2] = "Su uso est&aacute; indicado para aplicaciones en las que la gesti&oacute;n del estado es compleja.";
 choices[65][3] = "La funcionalidad de las aplicaciones se representa mediante recursos.";
 answers[65] = choices[65][2];
 units[65] = "51";
 comments[65] = "Id Pregunta: 10462. ";


//  Id pregunta: 10498 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  En el &aacute;mbito de las redes e internet, &iquest;qu&eacute; significan las siglas TOR?";
 choices[66]= new Array();
 choices[66][0] = "The Outer Router";
 choices[66][1] = "The Ominous Router";
 choices[66][2] = "The Onion Router";
 choices[66][3] = "Ninguna es correcta";
 answers[66] = choices[66][2];
 units[66] = "112";
 comments[66] = "Id Pregunta: 10498. http://es.wikipedia.org/wiki/Tor";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Cual de las siguientes certificaciones profesionales NO pertenecen a ISACA";
 choices[67]= new Array();
 choices[67][0] = "CISSP";
 choices[67][1] = "CISA";
 choices[67][2] = "CRISC ";
 choices[67][3] = "CISM";
 answers[67] = choices[67][0];
 units[67] = "31, 32, 33";
 comments[67] = "Id Pregunta: 10556. CISSP pertenece a ISC2";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  El formato de redifusi&oacute;n web Atom est&aacute; estandarizado en:";
 choices[68]= new Array();
 choices[68][0] = "IETF RFC 1738";
 choices[68][1] = "IETF RFC 1392";
 choices[68][2] = "IETF RFC 2616";
 choices[68][3] = "IETF RFC 4287";
 answers[68] = choices[68][3];
 units[68] = "69";
 comments[68] = "Id Pregunta: 10608. ";


//  Id pregunta: 10633 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Indique cu&aacute;l de los siguientes procesos de M&eacute;trica v3 no incluye actividades de la interfaz para Gestion de la Configuraci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "ASI";
 choices[69][1] = "PSI";
 choices[69][2] = "MSI";
 choices[69][3] = "EVS";
 answers[69] = choices[69][1];
 units[69] = "86";
 comments[69] = "Id Pregunta: 10633. ";


//  Id pregunta: 10647 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  En un modelo Entidad / Relaci&oacute;n extendido, las relaciones pueden ser:";
 choices[70]= new Array();
 choices[70][0] = "Regular o d&eacute;bil.";
 choices[70][1] = "De dependencia en existencia o de dependencia en identificaci&oacute;n.";
 choices[70][2] = "Exclusivas o no exclusivas.";
 choices[70][3] = "Todas las anteriores.";
 answers[70] = choices[70][3];
 units[70] = "80";
 comments[70] = "Id Pregunta: 10647. ";


//  Id pregunta: 10659 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Se&ntilde;ale aquella opci&oacute;n que no es una WPAN:";
 choices[71]= new Array();
 choices[71][0] = "NFC";
 choices[71][1] = "IRDA";
 choices[71][2] = "Wibree";
 choices[71][3] = "CSMA";
 answers[71] = choices[71][3];
 units[71] = "107";
 comments[71] = "Id Pregunta: 10659. ";


//  Id pregunta: 10662 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  El teorema de Nyquist establece que:";
 choices[72]= new Array();
 choices[72][0] = "El n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal no puede ser superior al doble de su ancho de banda.";
 choices[72][1] = "La relaci&oacute;n se&ntilde;al a ruido presente en el medio de transmisi&oacute;n no puede ser superior al doble de su ancho de banda.";
 choices[72][2] = "La eficiencia espectral es la relaci&oacute;n entre la velocidad de transmisi&oacute;n y el n&uacute;mero m&aacute;ximo de baudios que pueden transmitirse.";
 choices[72][3] = "Ninguna de las anteriores.";
 answers[72] = choices[72][0];
 units[72] = "99";
 comments[72] = "Id Pregunta: 10662. ";


//  Id pregunta: 10682 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la Ley 39/2015 cual de las siguientes opciones no se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[73]= new Array();
 choices[73][0] = "A ser tratados con respeto y deferencia por las autoridades y empleados p&uacute;blicos, que habr&aacute;n de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones.";
 choices[73][1] = "A la obtenci&oacute;n y utilizaci&oacute;n de los medios de identificaci&oacute;n y firma electr&oacute;nica contemplados en esta Ley.";
 choices[73][2] = "A la protecci&oacute;n de datos de car&aacute;cter personal, y en particular a la seguridad y confidencialidad de los datos que figuren en los ficheros, sistemas y aplicaciones de las Administraciones P&uacute;blicas.";
 choices[73][3] = "Archivo y registro del expediente asociado con todo procedimiento administrativo.";
 answers[73] = choices[73][3];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10682. ";


//  Id pregunta: 10741 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Con qu&eacute; frecuencia la comisi&oacute;n de estrateg&iacute;a TIC elevar&aacute; su informe al Consejo de Ministros?";
 choices[74]= new Array();
 choices[74][0] = "Mensual";
 choices[74][1] = "Semestral";
 choices[74][2] = "Anual";
 choices[74][3] = "Cada dos a&ntilde;os";
 answers[74] = choices[74][2];
 units[74] = "24";
 comments[74] = "Id Pregunta: 10741. ";


//  Id pregunta: 10850 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[75]= new Array();
 choices[75][0] = "EntityConnection.";
 choices[75][1] = "SqlConnection.";
 choices[75][2] = "SqlCeConnection.";
 choices[75][3] = "OleOdbcConnection.";
 answers[75] = choices[75][3];
 units[75] = "59, 115";
 comments[75] = "Id Pregunta: 10850. Examen GSI 2014";


//  Id pregunta: 10868 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  En un sistema operativo (S.O) con memoria virtual, cuando un proceso en ejecuci&oacute;n genera un fallo de p&aacute;gina:";
 choices[76]= new Array();
 choices[76][0] = "Se cierran todos los procesos en ejecuci&oacute;n ya que es un error grave del sistema operativo.";
 choices[76][1] = "El S.O busca la p&aacute;gina en memoria secundaria y la carga en memoria principal.";
 choices[76][2] = "El S.O interrumpe la ejecuci&oacute;n del proceso y lo pone en la cola de errores.";
 choices[76][3] = "En un sistema con memoria virtual nunca hay fallos de p&aacute;gina.";
 answers[76] = choices[76][1];
 units[76] = "52";
 comments[76] = "Id Pregunta: 10868. Examen GSI 2014";


//  Id pregunta: 10874 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[77]= new Array();
 choices[77][0] = "JOB";
 choices[77][1] = "COMMENT";
 choices[77][2] = "EXEC";
 choices[77][3] = "DD";
 answers[77] = choices[77][1];
 units[77] = "57, 58";
 comments[77] = "Id Pregunta: 10874. Examen GSI 2014";


//  Id pregunta: 10910 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La tecnolog&iacute;a de telefon&iacute;a m&oacute;vil GSM utiliza, entre otras, la siguiente base de datos de usuarios:";
 choices[78]= new Array();
 choices[78][0] = "MSC";
 choices[78][1] = "BSC";
 choices[78][2] = "NSS";
 choices[78][3] = "VLR";
 answers[78] = choices[78][3];
 units[78] = "108";
 comments[78] = "Id Pregunta: 10910. Examen GSI 2014";


//  Id pregunta: 10958 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Para la direcci&oacute;n de loopback, es correcto que:";
 choices[79]= new Array();
 choices[79][0] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::127.0.0.1)";
 choices[79][1] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::1)";
 choices[79][2] = "Se han reservado 256 direcciones en IPv4 (127.0.0.0/24) y 256 direcciones en IPv6 (::127.0.0.1-255)";
 choices[79][3] = "Se han reservado 16.777.214 direcciones en IPv4 (127.0.0.0/8) y una direcci&oacute;n en IPv6 (::1)";
 answers[79] = choices[79][3];
 units[79] = "100";
 comments[79] = "Id Pregunta: 10958. TIC A1 AGE 2014";


//  Id pregunta: 10959 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  El Centro de Informaci&oacute;n y Red de Creaci&oacute;n de Empresas (CIRCE), gestionado por el Ministerio de Industria, Energ&iacute;a y Turismo:";
 choices[80]= new Array();
 choices[80][0] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de todas las empresas que vayan a ejercer su actividad en el territorio nacional.";
 choices[80][1] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de apoderamiento y gestiones notariales necesarias para la puesta en marcha de las empresas.";
 choices[80][2] = "Permite realizar de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de Sociedades Limitada Nueva Empresa (SLNE), Sociedades de Responsabilidad Limitada (SRL o SL), o Empresarios Individuales (Aut&oacute;nomos).";
 choices[80][3] = "Es una plataforma para la informaci&oacute;n del emprendedor que se utiliza en los Puntos de Atenci&oacute;n al Emprendedor (PAEs), no permitiendo la realizaci&oacute;n de tr&aacute;mites online.";
 answers[80] = choices[80][2];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10959. TIC A1 AGE 2014";


//  Id pregunta: 10963 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[81]= new Array();
 choices[81][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[81][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[81][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[81][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[81] = choices[81][1];
 units[81] = "115";
 comments[81] = "Id Pregunta: 10963. TIC A1 AGE 2014";


//  Id pregunta: 10988 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  La Comisi&oacute;n Nacional de los Mercados y la Competencia (CNMC), en relaci&oacute;n con las telecomunicaciones:";
 choices[82]= new Array();
 choices[82][0] = "Autoriza operadores de telecomunicaciones.";
 choices[82][1] = "Autoriza distribuidores de equipamiento de redes y servicios de la sociedad de la informaci&oacute;n.";
 choices[82][2] = "Define los mercados de referencia relativos a redes y servicios electr&oacute;nicos.";
 choices[82][3] = "Define las actuaciones de los operadores, en relaci&oacute;n con los posibles conflictos de los anchos de banda en el espacio radioel&eacute;ctrico.";
 answers[82] = choices[82][2];
 units[82] = "110";
 comments[82] = "Id Pregunta: 10988. TIC A1 AGE 2014";


//  Id pregunta: 10996 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  En el caso de un fichero de datos relativo a la comisi&oacute;n de infracciones administrativas o penales, indique los niveles de seguridad que deber&aacute;n implantarse:";
 choices[83]= new Array();
 choices[83][0] = "S&oacute;lo las medidas de seguridad de nivel b&aacute;sico.";
 choices[83][1] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio y alto.";
 choices[83][2] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio.";
 choices[83][3] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel alto.";
 answers[83] = choices[83][2];
 units[83] = "29";
 comments[83] = "Id Pregunta: 10996. TIC A1 AGE 2014";


//  Id pregunta: 11022 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la &uacute;nica pauta definida dentro del principio de robustez de las WCAG 2.0? ";
 choices[84]= new Array();
 choices[84][0] = "Alternativas textuales";
 choices[84][1] = "Accesible a trav&eacute;s de teclado";
 choices[84][2] = "Compatible";
 choices[84][3] = "Ayuda a la entrada de datos";
 answers[84] = choices[84][2];
 units[84] = "39";
 comments[84] = "Id Pregunta: 11022. ";


//  Id pregunta: 11056 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica general de Scrum?";
 choices[85]= new Array();
 choices[85][0] = "Durante cada sprint el equipo crea un incremento de software potencialmente entregable";
 choices[85][1] = "Cada sprint dura de media entre 6 y 12 meses";
 choices[85][2] = "Los elementos del Product Backlog que forman parte del sprint se determinan durante la reuni&oacute;n de Sprint Planning";
 choices[85][3] = "Todas son caracter&iacute;sticas generales de Scrum";
 answers[85] = choices[85][1];
 units[85] = "79";
 comments[85] = "Id Pregunta: 11056. Cada sprint suele durar de 15 a 30 d&iacute;as";


//  Id pregunta: 11145 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes es el formato oficial de facturaci&oacute;n electr&oacute;nica de la Administraci&oacute;n General del Estado?";
 choices[86]= new Array();
 choices[86][0] = "GS2-XML";
 choices[86][1] = "UBL";
 choices[86][2] = "Facturae";
 choices[86][3] = "Eb-XML";
 answers[86] = choices[86][2];
 units[86] = "70";
 comments[86] = "Id Pregunta: 11145. ";


//  Id pregunta: 11217 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En relaci&oacute;n con las interfaces de programaci&oacute;n para crear GUI en Java:";
 choices[87]= new Array();
 choices[87][0] = "La&nbsp;Java Foundation Classes&nbsp;(JFC) es un framework gr&aacute;fico para construir interfaces gr&aacute;ficas de usuario (GUIs)  basadas en&nbsp;Java y est&aacute; compuesto por AWT,Swing&nbsp;y&nbsp;Java 2D.";
 choices[87][1] = "Aunque Swing est&aacute; basado en AWT, se trata de una implementaci&oacute;n de controles gr&aacute;ficos en Java puro.";
 choices[87][2] = "JavaFX, aunque est&aacute; incluido en el JDK/JRE, no est&aacute; basado en ninguna especificaci&oacute;n est&aacute;ndar JSR sino que es un producto de Oracle.";
 choices[87][3] = "Todas las respuestas son verdaderas.";
 answers[87] = choices[87][3];
 units[87] = "60";
 comments[87] = "Id Pregunta: 11217. ";


//  Id pregunta: 11237 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El framework Hibernate";
 choices[88]= new Array();
 choices[88][0] = "Est&aacute; disponible tambi&eacute;n para&nbsp;.Net&nbsp;con el nombre de&nbsp;NHibernate.";
 choices[88][1] = "Hibernate se distribuye bajo los t&eacute;rminos de la licencia&nbsp;GNU LGPL.";
 choices[88][2] = "Se apoya en Java Reflection API y en la librer&iacute;a de generaci&oacute;n de c&oacute;digo Javassist.";
 choices[88][3] = "Todas las respuestas son correctas.";
 answers[88] = choices[88][3];
 units[88] = "116";
 comments[88] = "Id Pregunta: 11237. ";


//  Id pregunta: 11245 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El informe t&eacute;cnico de la DTIC:";
 choices[89]= new Array();
 choices[89][0] = "Se emitir&aacute; en un plazo m&aacute;ximo de 15 d&iacute;as.";
 choices[89][1] = "El informe ser&aacute; preceptivo para convenios, encomiendas de gesti&oacute;n, entre otros.";
 choices[89][2] = "La tramitaci&oacute;n de los informes se har&aacute; procurando el empleo de medios telem&aacute;ticos en todas las fases del procedimiento. Atendiendo especialmente a la confidencialidad e integridad en los contratos sobre defensa y seguridad comprendidos en el &aacute;mbito de la ley 24/2011.";
 choices[89][3] = "Ninguna respuesta es correcta.";
 answers[89] = choices[89][1];
 units[89] = "41";
 comments[89] = "Id Pregunta: 11245. ";


//  Id pregunta: 11269 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes NO es un principio de Cobit v5?";
 choices[90]= new Array();
 choices[90][0] = "Satisfacer las Necesidades de las Partes Interesadas.";
 choices[90][1] = "Cubrir el &aacute;rea TI de extremo a extremo.";
 choices[90][2] = "Aplicar un Marco de Referencia &Uacute;nico Integrado.";
 choices[90][3] = "Separar el Gobierno de la Gesti&oacute;n.";
 answers[90] = choices[90][1];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11269. ";


//  Id pregunta: 11339 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[91]= new Array();
 choices[91][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[91][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[91][2] = "ISO 9001 consta de ocho secciones";
 choices[91][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[91] = choices[91][0];
 units[91] = "92";
 comments[91] = "Id Pregunta: 11339. ";


//  Id pregunta: 11371 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre un sistema de gesti&oacute;n de configuraci&oacute;n (CMS) es la correcta?";
 choices[92]= new Array();
 choices[92][0] = "El CMS no debe contener datos corporativos acerca de los clientes y usuarios";
 choices[92][1] = "Puede haber m&aacute;s de un CMS";
 choices[92][2] = "No debe haber m&aacute;s de una base de datos de gesti&oacute;n de la configuraci&oacute;n (CMDB)";
 choices[92][3] = "Aunque una organizaci&oacute;n externalice sus servicios de TI tiene la necesidad de un CMS";
 answers[92] = choices[92][3];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11371. ";


//  Id pregunta: 11502 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;les de los siguientes NO es un documento emitido por el European Telecomunication Standard Institute (ETSI)?";
 choices[93]= new Array();
 choices[93][0] = "ENV, normas experimentales";
 choices[93][1] = "ES, Normas ETSTI";
 choices[93][2] = "IT, Industrial Agreement";
 choices[93][3] = "HS, Normas armonizadas";
 answers[93] = choices[93][2];
 units[93] = "42";
 comments[93] = "Id Pregunta: 11502. NULL";


//  Id pregunta: 11524 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La arquitectura de un sistema de Grid Computing est&aacute; formada por las siguientes capas o niveles.";
 choices[94]= new Array();
 choices[94][0] = "Persistence Layer, Data Layer, Logic Layer (Business Layer), Service Layer y Presentation Layer";
 choices[94][1] = "Fabric Layer, Connectivity Layer, Resource Layer, Collective Layer y Applications Layer.";
 choices[94][2] = "Provider Layer, Communicator Layer, Mediator Layer, Coordinator Layer y Presenter Layer.";
 choices[94][3] = "Transport Layer, Security Layer, Transaction Layer, Session Layer y Application Layer.";
 answers[94] = choices[94][1];
 units[94] = "45";
 comments[94] = "Id Pregunta: 11524. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11628 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Las tarjetas de proximidad se encuentran recogidas en el est&aacute;ndar:";
 choices[95]= new Array();
 choices[95][0] = "ISO 10536";
 choices[95][1] = "ISO 14443";
 choices[95][2] = "ISO 15693";
 choices[95][3] = "ISO 16949";
 answers[95] = choices[95][1];
 units[95] = "74";
 comments[95] = "Id Pregunta: 11628. ";


//  Id pregunta: 11677 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  SATA III ofrece una transferencia de datos de:";
 choices[96]= new Array();
 choices[96][0] = "100 MB/s";
 choices[96][1] = "200 MB/s";
 choices[96][2] = "300 MB/s";
 choices[96][3] = "600 MB/s";
 answers[96] = choices[96][3];
 units[96] = "47, 48";
 comments[96] = "Id Pregunta: 11677. ";


//  Id pregunta: 11679 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El comando top de Linux permite:";
 choices[97]= new Array();
 choices[97][0] = "Moverse por una b&uacute;squeda";
 choices[97][1] = "Acceder al directorio inmediatamente inferior";
 choices[97][2] = "Conocer el consumo de CPU de todos los procesos";
 choices[97][3] = "Todas las anteriores son falsas";
 answers[97] = choices[97][2];
 units[97] = "53, 54";
 comments[97] = "Id Pregunta: 11679. ";


//  Id pregunta: 11697 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l no es una caracteristica de PPP?";
 choices[98]= new Array();
 choices[98][0] = "Se puede usar en circuitos anal&oacute;gicos";
 choices[98][1] = "solo soporta IP";
 choices[98][2] = "es capaz de encapsular varios protocolos";
 choices[98][3] = "Proporciona correcci&oacute;n de errores";
 answers[98] = choices[98][1];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11697. NULL";


//  Id pregunta: 11735 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Diferencia entre un virus y un &ldquo;Caballo de Troya&rdquo;:";
 choices[99]= new Array();
 choices[99][0] = "El virus suele utilizar canales encubiertos.";
 choices[99][1] = "El virus presenta un mecaniso de replicaci&oacute;n.";
 choices[99][2] = "El &ldquo;Caballo de Troya&rdquo; advierte de su presencia.";
 choices[99][3] = "El &ldquo;Caballo de Troya&rdquo; no esconde funciones potencialmente maliciosas.";
 answers[99] = choices[99][1];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11735. ";


