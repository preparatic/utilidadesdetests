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

//  Id pregunta: 695 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  A la hora de evaluar el comportamiento de un sistema inform&aacute;tico, el &quot;throughput&quot; se puede definir como:";
 choices[0]= new Array();
 choices[0][0] = "El n&uacute;mero de CPUs necesarias para asegurar una velocidad de procesamiento determinada";
 choices[0][1] = "El n&uacute;mero de recursos inform&aacute;ticos disponibles en el sistema";
 choices[0][2] = "El cociente entre la velocidad de transmisi&oacute;n de la red y la velocidad media de las CPUs del sistema";
 choices[0][3] = "La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 answers[0] = choices[0][3];
 units[0] = "48";
 comments[0] = "Id Pregunta: 695. ";


//  Id pregunta: 706 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  DTD se emplea para:";
 choices[1]= new Array();
 choices[1][0] = "Crear documentos XML bien formados";
 choices[1][1] = "Formatear documentos XML";
 choices[1][2] = "Transformar documentos HTML en XML";
 choices[1][3] = "Validar documentos XML";
 answers[1] = choices[1][3];
 units[1] = "69";
 comments[1] = "Id Pregunta: 706. Similar a examen TIC SS A 2004";


//  Id pregunta: 854 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes opciones no es una estructura de representaci&oacute;n del conocimiento?:";
 choices[2]= new Array();
 choices[2][0] = "Redes sem&aacute;nticas";
 choices[2][1] = "Diagramas";
 choices[2][2] = "Marcos";
 choices[2][3] = "Guiones";
 answers[2] = choices[2][1];
 units[2] = "63";
 comments[2] = "Id Pregunta: 854. ";


//  Id pregunta: 865 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes es un modelo de inteligencia artificial distribuida?:";
 choices[3]= new Array();
 choices[3][0] = "Modelo de actores";
 choices[3][1] = "Modelo de puntos de funci&oacute;n";
 choices[3][2] = "Modelo de regresi&oacute;n m&uacute;ltiple";
 choices[3][3] = "Modelo de Nashville";
 answers[3] = choices[3][0];
 units[3] = "63";
 comments[3] = "Id Pregunta: 865. ";


//  Id pregunta: 869 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje declarativo?:";
 choices[4]= new Array();
 choices[4][0] = "Prolog";
 choices[4][1] = "LISP";
 choices[4][2] = "Clos";
 choices[4][3] = "Todos los lenguajes anteriores son declarativos";
 answers[4] = choices[4][3];
 units[4] = "64";
 comments[4] = "Id Pregunta: 869. ";


//  Id pregunta: 894 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;En qu&eacute; base num&eacute;rica el n&uacute;mero 6B7 se corresponde con el n&uacute;mero 1003 en decimal?";
 choices[5]= new Array();
 choices[5][0] = "en base 13.";
 choices[5][1] = "en base 7.";
 choices[5][2] = "en base 11.";
 choices[5][3] = "en base 12.";
 answers[5] = choices[5][3];
 units[5] = "";
 comments[5] = "Id Pregunta: 894. ";


//  Id pregunta: 896 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;En qu&eacute; consiste el an&aacute;lisis multidimensional de OLAP?";
 choices[6]= new Array();
 choices[6][0] = "En analizar los mismos datos desde distintas perspectivas.";
 choices[6][1] = "En consolidar los datos por distintas trayectorias.";
 choices[6][2] = "En encontrar nuevas relaciones entre variables.";
 choices[6][3] = "Todas las respuestas anteriores son correctas.";
 answers[6] = choices[6][3];
 units[6] = "68";
 comments[6] = "Id Pregunta: 896. ";


//  Id pregunta: 909 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  &iquest;Puede ejecutarse una aplicaci&oacute;n Windows al mismo tiempo por muchos usuarios, en una misma m&aacute;quina, pero con pantallas diferentes?:";
 choices[7]= new Array();
 choices[7][0] = "No, dado que un sistema de este tipo solo puede tener una consola, esa prestaci&oacute;n est&aacute; accesible en sistemas empresariales tipo Unix";
 choices[7][1] = "Si, dado que en un servidor windows empresarial pueden conectarse varias consolas diferentes";
 choices[7][2] = "Si, utilizando X-Windows";
 choices[7][3] = "Si, utilizando servicios de Remote Desktop";
 answers[7] = choices[7][3];
 units[7] = "56";
 comments[7] = "Id Pregunta: 909. ";


//  Id pregunta: 919 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es el pseudoc&oacute;digo?";
 choices[8]= new Array();
 choices[8][0] = "Un c&oacute;digo que tiene fallos.";
 choices[8][1] = "El c&oacute;digo antes de ser depurado.";
 choices[8][2] = "El c&oacute;digo de un programa que no se ha ejecutado nunca.";
 choices[8][3] = "Un m&eacute;todo de especificaci&oacute;n para comunicaciones.";
 answers[8] = choices[8][3];
 units[8] = "";
 comments[8] = "Id Pregunta: 919. ";


//  Id pregunta: 1004 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El comando 'kill' en Linux:";
 choices[9]= new Array();
 choices[9][0] = "Se utiliza para eliminar un proceso, siempre que se est&eacute; autorizado";
 choices[9][1] = "Se utiliza para comunicarse con los procesos y enviarles se&ntilde;ales";
 choices[9][2] = "Desconecta a un usuario";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[9] = choices[9][1];
 units[9] = "53";
 comments[9] = "Id Pregunta: 1004. ";


//  Id pregunta: 1118 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En las tarjetas inteligentes sin contacto, la comunicaci&oacute;n se realiza mediante tecnolog&iacute;a de radio frecuencia, incorporando las tarjetas una antena de RF. En funci&oacute;n de la distancia que permita la comunicaci&oacute;n, &iquest;qu&eacute; descripci&oacute;n corresponde a las tarjetas?";
 choices[10]= new Array();
 choices[10][0] = "Requiere el contacto f&iacute;sico (&lt;2mm) con  el dispositivo de interfaz, aunque no su inserci&oacute;n, ni usa contactos el&eacute;ctricos";
 choices[10][1] = "Permite una distancia de 10 cm con el dispositivo de interfaz";
 choices[10][2] = "No permite una distancia mayor de 5 cm con dispositivo de interfaz";
 choices[10][3] = "Todas las tarjetas inteligentes sin contacto son de proximidad";
 answers[10] = choices[10][1];
 units[10] = "74";
 comments[10] = "Id Pregunta: 1118. NULL";


//  Id pregunta: 1175 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indicar cu&aacute;l de las siguientes es una arquitectura cl&aacute;sica de la resoluci&oacute;n distribuida de problemas:";
 choices[11]= new Array();
 choices[11][0] = "Red de contratos";
 choices[11][1] = "Arquitectura de pizarra";
 choices[11][2] = "Las dos primeras son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 choices[11][3] = "Ninguna de las anteriores son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 answers[11] = choices[11][2];
 units[11] = "63";
 comments[11] = "Id Pregunta: 1175. ";


//  Id pregunta: 1244 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La t&eacute;cnica o tecnolog&iacute;a consistente en dise&ntilde;ar dispositivos microelectr&oacute;nicos de peque&ntilde;&iacute;simo tama&ntilde;o para, por ejemplo, introducirlos en el cuerpo humano e imitar el comportamiento de sus c&eacute;lulas, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Tecnolog&iacute;a milim&eacute;trica";
 choices[12][1] = "Microtecnolog&iacute;a";
 choices[12][2] = "Microb&oacute;tica";
 choices[12][3] = "Nanotecnolog&iacute;a";
 answers[12] = choices[12][3];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1244. ";


//  Id pregunta: 1385 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Un microprocesador, cuya frecuencia de reloj es de 300 Mhz y ejecuta 4 instrucciones/ciclo, puede ejecutar:";
 choices[13]= new Array();
 choices[13][0] = "1,2 Mips";
 choices[13][1] = "300 Mips";
 choices[13][2] = "300.000 instrucciones/segundo";
 choices[13][3] = "1200 Mips";
 answers[13] = choices[13][3];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1385. ";


//  Id pregunta: 1427 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Unix implementa la protecci&oacute;n de ficheros (permisos) a nivel de:";
 choices[14]= new Array();
 choices[14][0] = "Librer&iacute;as del sistema";
 choices[14][1] = "Microkernel";
 choices[14][2] = "Directorios";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[14] = choices[14][2];
 units[14] = "53";
 comments[14] = "Id Pregunta: 1427. ";


//  Id pregunta: 1455 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;ntas im&aacute;genes por segundo se emiten utilizando el est&aacute;ndar PAL?:";
 choices[15]= new Array();
 choices[15][0] = "30";
 choices[15][1] = "26";
 choices[15][2] = "15";
 choices[15][3] = "25";
 answers[15] = choices[15][3];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1455. ";


//  Id pregunta: 1459 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En las interfaces orientadas a objetos (OOUI) es falso que:";
 choices[16]= new Array();
 choices[16][0] = "los iconos representan objetos que se pueden manipular directamente";
 choices[16][1] = "los objetos son de 3 tipos: datos, contenedores y dispositivos";
 choices[16][2] = "un ejemplo de interfaz orientada a objeto lo representan los accesos directos de Windows, donde cada objeto tiene su propia tarea asociada";
 choices[16][3] = "el estilo de interacci&oacute;n es el de acci&oacute;n-objeto y no el de objeto-acci&oacute;n";
 answers[16] = choices[16][3];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1459. ";


//  Id pregunta: 1479 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se&ntilde;ale cu&aacute;l de los siguientes es un principio de dise&ntilde;o RISC:";
 choices[17]= new Array();
 choices[17][0] = "Un amplio juego de instrucciones facilita el dise&ntilde;o de compiladores";
 choices[17][1] = "El modelo de ejecuci&oacute;n de pila es superior al de registros";
 choices[17][2] = "Los juegos de instrucciones amplios reducen el tama&ntilde;o de los programas";
 choices[17][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[17] = choices[17][3];
 units[17] = "46";
 comments[17] = "Id Pregunta: 1479. ";


//  Id pregunta: 1509 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Respecto a la LSSICE:";
 choices[18]= new Array();
 choices[18][0] = "Son prestadores de servicios de la sociedad de la informaci&oacute;n aquellas empresas, organismos o instituciones que presten o promocionen un bien o servicio a t&iacute;tulo oneroso";
 choices[18][1] = "La ley prohibe enviar comunicaciones publicitarias por correo electr&oacute;nico que previamente no hubieran sido solicitadas o autorizadas expresamente por el destinatario";
 choices[18][2] = "El texto legal da plena validez y eficacia a los contratos celebrados por v&iacute;a electr&oacute;nica, a&uacute;n en el caso de que ninguna de las partes tenga la condici&oacute;n de prestador o destinatario de servicios de la sociedad de la informaci&oacute;n";
 choices[18][3] = "Todas las afirmaciones anteriores son correctas";
 answers[18] = choices[18][3];
 units[18] = "30";
 comments[18] = "Id Pregunta: 1509. NULL";


//  Id pregunta: 1516 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[19]= new Array();
 choices[19][0] = "Formato de certificado digital";
 choices[19][1] = "Formato de sobre digital";
 choices[19][2] = "Cifrado con clave privada";
 choices[19][3] = "Sintaxis de la clave privada";
 answers[19] = choices[19][1];
 units[19] = "74";
 comments[19] = "Id Pregunta: 1516. NULL";


//  Id pregunta: 1517 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Procedimiento";
 choices[20][1] = "Producto.";
 choices[20][2] = "Secuencia.";
 choices[20][3] = "Segmento.";
 answers[20] = choices[20][0];
 units[20] = "58";
 comments[20] = "Id Pregunta: 1517. Junta Andaluc&iacute;a";


//  Id pregunta: 1527 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  El comando de SQL ' DELETE', &iquest;qu&eacute; hace?";
 choices[21]= new Array();
 choices[21][0] = "Borra una tabla determinada.";
 choices[21][1] = "Borra un &iacute;ndice de una tabla.";
 choices[21][2] = "Borra valores de una tabla.";
 choices[21][3] = "Borra tanto valores de una tabla, la tabla entera como &iacute;ndices de una tabla seg&uacute;n sea la sintaxis de la sentencia SQL.";
 answers[21] = choices[21][2];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1527. ";


//  Id pregunta: 1539 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest; Cu&aacute;l se utiliza para compartir recursos desde un sistema tipo Unix a equipos Windows utilizando el protocolo SMB ?";
 choices[22]= new Array();
 choices[22][0] = "NFS";
 choices[22][1] = "Samba";
 choices[22][2] = "Cualquiera de los 2 indistintamente";
 choices[22][3] = "Ninguno de los 2";
 answers[22] = choices[22][1];
 units[22] = "54";
 comments[22] = "Id Pregunta: 1539. NULL";


//  Id pregunta: 1550 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de estos procesadores de 64 bits usa la t&eacute;cnica EPIC (&quot;Explicity Parallel Instruction Computing&quot;)?:";
 choices[23]= new Array();
 choices[23][0] = "PowerPC.";
 choices[23][1] = "Alpha.";
 choices[23][2] = "Ultrasparc.";
 choices[23][3] = "Itanium.";
 answers[23] = choices[23][3];
 units[23] = "47";
 comments[23] = "Id Pregunta: 1550. Junta Andaluc&iacute;a";


//  Id pregunta: 1558 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;C&uacute;al de los modelos de datos de Sistemas de Informaci&oacute;n Geogr&aacute;fica es m&aacute;s adecuado para representar l&iacute;neas con precisi&oacute;n y superficies rellenas?";
 choices[24]= new Array();
 choices[24][0] = "Modelo R&aacute;ster.";
 choices[24][1] = "Modelo Vectorial.";
 choices[24][2] = "Modelo R&aacute;ster y Modelo Vectorial.";
 choices[24][3] = "El modelo R&aacute;ster para l&iacute;neas y el modelo Vectorial para superficies.";
 answers[24] = choices[24][2];
 units[24] = "67";
 comments[24] = "Id Pregunta: 1558. NULL";


//  Id pregunta: 1606 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Indicar la afirmaci&oacute;n que no es cierta sobre Marcos";
 choices[25]= new Array();
 choices[25][0] = "Representan conceptos estereotipados o patronespredefinidos sobre ideas y situaciones, aunando las caracter&iacute;sticas que cualifican el concepto";
 choices[25][1] = "Se caracteriza por representar conceptos gr&aacute;ficamente mediante nodos y sus relaciones entre ellos mediante arcos";
 choices[25][2] = "el marco es una entidad din&aacute;mica, conprocedimientos incluidos en los slots, que se ejecutan durante un proceso de razonamiento m&aacute;s general";
 choices[25][3] = "Los procedimientos de inferencia asociados a los marcos son: deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 answers[25] = choices[25][1];
 units[25] = "64";
 comments[25] = "Id Pregunta: 1606. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Marcos)";


//  Id pregunta: 1621 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[26]= new Array();
 choices[26][0] = "Leve";
 choices[26][1] = "Grave";
 choices[26][2] = "Muy grave";
 choices[26][3] = "No constituye infracci&oacute;n";
 answers[26] = choices[26][0];
 units[26] = "30";
 comments[26] = "Id Pregunta: 1621. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 1663 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Indique la afirmaci&oacute;n incorrecta, respecto a SMP";
 choices[27]= new Array();
 choices[27][0] = "Es una arquitectura de ordenador con performances muy r&aacute;pidas";
 choices[27][1] = "Tiene multiples CPU disponibles para efectuar procesos individuales completos simult&aacute;neamente";
 choices[27][2] = "Todas las CPU comparten la misma memoria";
 choices[27][3] = "Sus siglas son Symetric Massively Processing";
 answers[27] = choices[27][3];
 units[27] = "45";
 comments[27] = "Id Pregunta: 1663. ";


//  Id pregunta: 1667 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes libros sobre el DVD, hace referencia a Sistemas de escritura &uacute;nica, DVD-R?";
 choices[28]= new Array();
 choices[28][0] = "Libro A";
 choices[28][1] = "Libro B";
 choices[28][2] = "Libro C";
 choices[28][3] = "Libro D";
 answers[28] = choices[28][3];
 units[28] = "48";
 comments[28] = "Id Pregunta: 1667. ";


//  Id pregunta: 1677 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;Qu&eacute; hace el comando SQL update?";
 choices[29]= new Array();
 choices[29][0] = "Modifica la estructura de una tabla agregando o eliminando campos";
 choices[29][1] = "Modifica la estructura de una vista";
 choices[29][2] = "Modifica los valores de los campos de una tabla";
 choices[29][3] = "Modifica la estructura de una tabla cambiando la definici&oacute;n de sus campos";
 answers[29] = choices[29][2];
 units[29] = "58";
 comments[29] = "Id Pregunta: 1677. ";


//  Id pregunta: 1759 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  En el entorno Microsoft.NET:";
 choices[30]= new Array();
 choices[30][0] = "MS SQL Server CompactEs una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[30][1] = "MS Web Deploy 3.0Es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[30][2] = "BizTalk ServerEs un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[30][3] = "Todas son correctas";
 answers[30] = choices[30][3];
 units[30] = "59";
 comments[30] = "Id Pregunta: 1759. ";


//  Id pregunta: 1763 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  El AWT de Java es";
 choices[31]= new Array();
 choices[31][0] = "Una interfaz gr&aacute;fica de usuario (GUI) plenamente independiente del SO";
 choices[31][1] = "Driver para conectarse a una base de datos";
 choices[31][2] = "Interfaz gr&aacute;fica pesada y dependiente del SO";
 choices[31][3] = "Paquete de desarrollo Java";
 answers[31] = choices[31][2];
 units[31] = "60";
 comments[31] = "Id Pregunta: 1763. NULL";


//  Id pregunta: 1777 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Se&ntilde;ale aqu&eacute;l tipo de software que se aleja m&aacute;s del concepto de software libre:";
 choices[32]= new Array();
 choices[32][0] = "Software de dominio p&uacute;blico";
 choices[32][1] = "Software bajo licencia GPL";
 choices[32][2] = "Shareware";
 choices[32][3] = "Software de descarga gratuita";
 answers[32] = choices[32][2];
 units[32] = "si";
 comments[32] = "Id Pregunta: 1777. ";


//  Id pregunta: 1817 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de Data Mining?";
 choices[33]= new Array();
 choices[33][0] = "Enterprise Miner";
 choices[33][1] = "Clementine";
 choices[33][2] = "Erwin";
 choices[33][3] = "SAP Miner";
 answers[33] = choices[33][2];
 units[33] = "64";
 comments[33] = "Id Pregunta: 1817. ";


//  Id pregunta: 1843 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Con que categoria de software esta m&aacute;s relacionado el BPM?";
 choices[34]= new Array();
 choices[34][0] = "Workflow";
 choices[34][1] = "B2B";
 choices[34][2] = "B2C";
 choices[34][3] = "SCM";
 answers[34] = choices[34][0];
 units[34] = "71";
 comments[34] = "Id Pregunta: 1843. ";


//  Id pregunta: 1901 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Grupo de microchips dise&ntilde;ados para trabajar como una unidad para desarrollar una o varias funciones relacionadas";
 choices[35]= new Array();
 choices[35][0] = "BIOS";
 choices[35][1] = "chip cluster";
 choices[35][2] = "chipset";
 choices[35][3] = "estado s&oacute;lido";
 answers[35] = choices[35][2];
 units[35] = "47";
 comments[35] = "Id Pregunta: 1901. ";


//  Id pregunta: 1935 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En un sistema de ficheros Unix con un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, con direcciones de bloque de 4 bytes, para representar un fichero de 2 MB";
 choices[36]= new Array();
 choices[36][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[36][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[36][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[36][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[36] = choices[36][2];
 units[36] = "53";
 comments[36] = "Id Pregunta: 1935. ";


//  Id pregunta: 4518 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  En relaci&oacute;n con los entornos OLAP, indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[37]= new Array();
 choices[37][0] = "Los sistemas MOLAP son capaces de almacenar mas informaci&oacute;n que los ROLAP.";
 choices[37][1] = "Los sistemas ROLAP son multidimensionales.";
 choices[37][2] = "Los sistemas ROLAP son capaces de almacenar m&aacute;s informaci&oacute;n que los MOLAP.";
 choices[37][3] = "Los sistemas MOLAP son relacionales.";
 answers[37] = choices[37][2];
 units[37] = "68";
 comments[37] = "Id Pregunta: 4518. ";


//  Id pregunta: 4564 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cual de las siguientes afirmaciones sobre dispositivos NAS es falsa?:";
 choices[38]= new Array();
 choices[38][0] = "Ia capacidad m&aacute;xima de almacenamiento de los dispositivos NAS es inferior al de las redes SAN";
 choices[38][1] = "los dispositivos NAS utilizan un protocolo SCSI para suministrar los archivos a los clientes";
 choices[38][2] = "la conexi&oacute;n entre los dispositivos NAS y la red se realiza a trav&eacute;s de TCP/IP";
 choices[38][3] = "los dispositivos NAS son unidades de almacenamiento, grandes servidores dedicados exclusivamente a tal fin que se conectan a la red";
 answers[38] = choices[38][1];
 units[38] = "48";
 comments[38] = "Id Pregunta: 4564. ";


//  Id pregunta: 4619 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Cual de las siguientes opciones es correcta";
 choices[39]= new Array();
 choices[39][0] = "en el modelo jer&aacute;rquico no se exige que el usuario conozca las vinculaciones entre entidades";
 choices[39][1] = "los lenguajes del modelo en red son relacionales";
 choices[39][2] = "el modelo en red responde a una estructura arborescente a varios niveles";
 choices[39][3] = "en el modelo relacional no existen vinculaciones explicitas entre entidades";
 answers[39] = choices[39][3];
 units[39] = "";
 comments[39] = "Id Pregunta: 4619. ";


//  Id pregunta: 4631 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  OCSP es:";
 choices[40]= new Array();
 choices[40][0] = "un protocolo de comprobaci&oacute;n de estado de un certificado";
 choices[40][1] = "un algoritmo de hash";
 choices[40][2] = "un algoritmo de cifrado sim&eacute;trico";
 choices[40][3] = "un algoritmo de cifrado asim&eacute;trico";
 answers[40] = choices[40][0];
 units[40] = "";
 comments[40] = "Id Pregunta: 4631. ";


//  Id pregunta: 4790 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema aotro usuario?";
 choices[41]= new Array();
 choices[41][0] = "CONNECT y RESOURCE";
 choices[41][1] = "DBA";
 choices[41][2] = "GRANT ANY ROLE";
 choices[41][3] = "SELECT ANY TABLE";
 answers[41] = choices[41][2];
 units[41] = "57";
 comments[41] = "Id Pregunta: 4790. ";


//  Id pregunta: 4837 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos,&iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint)";
 choices[42][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones";
 choices[42][2] = "Rollback de la transacci&oacute;n";
 choices[42][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones";
 answers[42] = choices[42][1];
 units[42] = "58";
 comments[42] = "Id Pregunta: 4837. ";


//  Id pregunta: 5037 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[43]= new Array();
 choices[43][0] = "RD 153/2005, de 14 de enero";
 choices[43][1] = "RD 1553/2005, de 23 de diciembre";
 choices[43][2] = "RD 1555/2003, de 29 de mayo";
 choices[43][3] = "RD 155/2003, de 15 de septiembre";
 answers[43] = choices[43][1];
 units[43] = "30";
 comments[43] = "Id Pregunta: 5037. Examen TIC A 2007";


//  Id pregunta: 5040 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;En cu&aacute;l de los siguientes modelos para el desarrollo de aplicaciones distribuidas o en red seg&uacute;n el modelo cliente/servidor,esta encuadrado COM+ (Common Object Model Plus)?:";
 choices[44]= new Array();
 choices[44][0] = "Modelos basados en llamadas a funciones (sockets)";
 choices[44][1] = "Modelos basados en llamadas a procedimientos remotos (RPC)";
 choices[44][2] = "Modelos basados en llamadas a objetos distribuidos";
 choices[44][3] = "Modelos basados en agentes m&oacute;viles";
 answers[44] = choices[44][2];
 units[44] = "50";
 comments[44] = "Id Pregunta: 5040. Examen TIC A 2007";


//  Id pregunta: 5066 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  GNOME es un entorno de escritorio libre para sistemas operativos libres. Seleccione la afirmaci&oacute;n correcta sobre &eacute;l:";
 choices[45]= new Array();
 choices[45][0] = "Ha sido la base sobre la cual se ha desarrollado el c&oacute;digo de la interfaz gr&aacute;fica de Windows VISTA";
 choices[45][1] = "Desde sus or&iacute;genes ha utilizado la biblioteca de controles gr&aacute;ficos GTK";
 choices[45][2] = "Cada vez que se a&ntilde;ade un icono al escritorio requiere que se recompile el Kernel";
 choices[45][3] = "Solamente admite una profundidad de color de 8 bits";
 answers[45] = choices[45][1];
 units[45] = "54";
 comments[45] = "Id Pregunta: 5066. Examen TIC A 2007";


//  Id pregunta: 5096 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, los servicios de certificaci&oacute;n pueden ser prestados:";
 choices[46]= new Array();
 choices[46][0] = "Solamente por personas f&iacute;sicas o jur&iacute;dicas privadas ";
 choices[46][1] = "Tanto por entidades p&uacute;blicas como por personas f&iacute;sicas o jur&iacute;dicas cuando as&iacute; se establezca de acuerdo con el Derecho nacional";
 choices[46][2] = "Solamente por entidades p&uacute;blicas";
 choices[46][3] = "Por entidades p&uacute;blicas, que expedir&aacute;n los certificados reconocidos, y por personas f&iacute;sicas, que expediran los certificados no reconocidos";
 answers[46] = choices[46][1];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5096. NULL";


//  Id pregunta: 5126 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes formatos gr&aacute;ficos soporta internamente datos de georeferenciaci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = ".jpeg.";
 choices[47][1] = ".tiff.";
 choices[47][2] = ".png.";
 choices[47][3] = ".bmp.";
 answers[47] = choices[47][1];
 units[47] = "67";
 comments[47] = "Id Pregunta: 5126. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5443 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes es la declaraci&oacute;n correcta de la versi&oacute;n de XML?";
 choices[48]= new Array();
 choices[48][0] = "&lt;xml version=&quot;1.0&quot; /&gt;";
 choices[48][1] = "&lt;?xml version=&quot;1.0&quot; /&gt;";
 choices[48][2] = "&lt;?xml version=&quot;1.0&quot;?&gt;";
 choices[48][3] = "&lt;?xml version=&quot;1.0&quot;?/&gt;";
 answers[48] = choices[48][2];
 units[48] = "69";
 comments[48] = "Id Pregunta: 5443. Castilla y Le&oacute;n";


//  Id pregunta: 5461 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son";
 choices[49]= new Array();
 choices[49][0] = "Eficiencia y fiabilidad";
 choices[49][1] = "Fiabilidad y modularidad";
 choices[49][2] = "Fiabilidad y extensibilidad";
 choices[49][3] = "Correcci&oacute;n y verificabilidad";
 answers[49] = choices[49][1];
 units[49] = "88";
 comments[49] = "Id Pregunta: 5461. Castilla y Le&oacute;n";


//  Id pregunta: 5601 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes es un lenguaje orientado al trabajo con la inteligencia artificial?";
 choices[50]= new Array();
 choices[50][0] = "C++";
 choices[50][1] = "Fortran";
 choices[50][2] = "PROLOG";
 choices[50][3] = "Pascal";
 answers[50] = choices[50][2];
 units[50] = "64";
 comments[50] = "Id Pregunta: 5601. ";


//  Id pregunta: 5629 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Dentro de la clasificaci&oacute;n de Flynn, un ordenador con Multiprocesador Masivamente Paralelo (MPP), se clasificar&iacute;a en la siguiente categor&iacute;a:";
 choices[51]= new Array();
 choices[51][0] = "SISD";
 choices[51][1] = "SIMD";
 choices[51][2] = "MISD";
 choices[51][3] = "MIMD";
 answers[51] = choices[51][3];
 units[51] = "45";
 comments[51] = "Id Pregunta: 5629. ";


//  Id pregunta: 5725 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Lenguaje de Consulta de datos.";
 choices[52][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[52][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[52][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[52] = choices[52][3];
 units[52] = "58";
 comments[52] = "Id Pregunta: 5725. MAP 2008 A2";


//  Id pregunta: 5759 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[53]= new Array();
 choices[53][0] = "SecureBSD";
 choices[53][1] = "NetBSD";
 choices[53][2] = "DesktopBSD";
 choices[53][3] = "DragonflyBSD";
 answers[53] = choices[53][0];
 units[53] = "61";
 comments[53] = "Id Pregunta: 5759. ";


//  Id pregunta: 5760 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Acerca de OpenOffice, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[54]= new Array();
 choices[54][0] = "Gracias a la ingenier&iacute;a inversa, puede manejar archivos .doc de Microsoft Office.";
 choices[54][1] = "Se puede utilizar en la mayor&iacute;a de sistemas de tipo UNIX salvo en Mac OS X.";
 choices[54][2] = "Sun Microsystems financia su desarrollo.";
 choices[54][3] = "Su antecesor fue StarOffice.";
 answers[54] = choices[54][1];
 units[54] = "62";
 comments[54] = "Id Pregunta: 5760. ";


//  Id pregunta: 5827 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Suponga que recibe una firma electr&oacute;nica avanzada de tipo XAdES-T sin una asociaci&oacute;n espec&iacute;fica a ninguna pol&iacute;tica de firma concreta y que ha verificado con &eacute;xito el formato de la firma y su integridad. En esta situaci&oacute;n, la evaluaci&oacute;n de la validez de dicha firma electr&oacute;nica seg&uacute;n la norma ETSI TS 101 903 v1.3.2 da como resultado:";
 choices[55]= new Array();
 choices[55][0] = "Firma inv&aacute;lida";
 choices[55][1] = "Validaci&oacute;n incompleta de la firma";
 choices[55][2] = "Firma v&aacute;lida";
 choices[55][3] = "Firma suspendida";
 answers[55] = choices[55][1];
 units[55] = "30";
 comments[55] = "Id Pregunta: 5827. MAP 2008 A1";


//  Id pregunta: 5857 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[56]= new Array();
 choices[56][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas";
 choices[56][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos";
 choices[56][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos";
 choices[56][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web";
 answers[56] = choices[56][2];
 units[56] = "69";
 comments[56] = "Id Pregunta: 5857. Pregunta 37";


//  Id pregunta: 5875 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  En el protocolo Secure Socket Layer (SSL) el subprotocolo de negociaci&oacute;n (handsake) negocia las claves de sesi&oacute;n mediante el esquema de Diffie-Hellman (D-H) o RSA. Indique la respuesta correcta:";
 choices[57]= new Array();
 choices[57][0] = "D-H an&oacute;nimo es susceptible de ataques por hombre interpuesto";
 choices[57][1] = "D-H ef&iacute;mero no requiere certificado del servidor ni del cliente";
 choices[57][2] = "D-H constante no precisa certificado del cliente";
 choices[57][3] = "RSA necesita la generaci&oacute;n de un n&uacute;mero aleatorio por el servidor que es enviado al cliente cifrado con la clave p&uacute;blica de &eacute;ste";
 answers[57] = choices[57][0];
 units[57] = "72";
 comments[57] = "Id Pregunta: 5875. MAP 2008 A1";


//  Id pregunta: 5892 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Qu&eacute; es JNDI?";
 choices[58]= new Array();
 choices[58][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[58][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[58][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][0];
 units[58] = "60";
 comments[58] = "Id Pregunta: 5892. NULL";


//  Id pregunta: 6067 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Dentro del &aacute;mbito del reconocimiento de patrones, &iquest;para que se usa el algoritmo 'FCM'?";
 choices[59]= new Array();
 choices[59][0] = "El &lsquo;Forward Chaining Method&rsquo; es uno de la procedimientos de inferencia b&aacute;sico de un sistema de reglas";
 choices[59][1] = "El &lsquo;Fuzzy C-Means&rsquo; es un algoritmo de agrupamiento (an&aacute;lisis cluster) que utiliza l&oacute;gica borrosa";
 choices[59][2] = "El algoritmo &lsquo;Final Cognitive Map&rsquo; captura los patrones mediante mapas cognitivos";
 choices[59][3] = "Ninguna de las anteriores es correcta";
 answers[59] = choices[59][1];
 units[59] = "63";
 comments[59] = "Id Pregunta: 6067. ";


//  Id pregunta: 6118 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Con respecto a BPEL (Business Process Execution Language):";
 choices[60]= new Array();
 choices[60][0] = "Es un lenguaje de coreogr&aacute;fico, no de orquestaci&oacute;n.";
 choices[60][1] = "Es un lenguaje de orquestaci&oacute;n, no un lenguaje coreogr&aacute;fico.";
 choices[60][2] = "Fue creado por WfMC.";
 choices[60][3] = "Es un lenguaje de orquestaci&oacute;n y coreogr&aacute;fico creado por OASIS.";
 answers[60] = choices[60][1];
 units[60] = "51";
 comments[60] = "Id Pregunta: 6118. NULL";


//  Id pregunta: 6121 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Con respecto a la orquestaci&oacute;n y coreograf&iacute;a de servicios, se&ntilde;ale la respuesta correcta:";
 choices[61]= new Array();
 choices[61][0] = "Un proceso se puede considerar una orquestaci&oacute;n de servicios cuando es controlado totalmente por una &uacute;nica entidad.";
 choices[61][1] = "Un proceso es una coreograf&iacute;a de servicios cuando define las colaboraciones entre cualquier tipo de aplicaciones componentes, independientemente del lenguaje o plataforma en el que est&eacute;n definidas las mismas.";
 choices[61][2] = "A y B son correctas.";
 choices[61][3] = "A y B son incorrectas.";
 answers[61] = choices[61][2];
 units[61] = "51";
 comments[61] = "Id Pregunta: 6121. NULL";


//  Id pregunta: 6183 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  XPDL, XML Process Definition Language, dentro de los 5 interfaces que defini&oacute; la WfMC, podr&iacute;a encuadrarse dentro del interfaz n&uacute;mero:";
 choices[62]= new Array();
 choices[62][0] = "1";
 choices[62][1] = "2";
 choices[62][2] = "3";
 choices[62][3] = "4";
 answers[62] = choices[62][0];
 units[62] = "71";
 comments[62] = "Id Pregunta: 6183. NULL";


//  Id pregunta: 6319 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En un modelo relacional, la regla de integridad de las entidades dice :";
 choices[63]= new Array();
 choices[63][0] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n base puede aceptar       nulos.";
 choices[63][1] = "La base de datos no debe contener valores de clave ajena sin concordancia.";
 choices[63][2] = "En una clave primaria compuesta, cada valor individual de la clave primaria puede ser nulo aunque no en su totalidad.";
 choices[63][3] = "Ning&uacute;n componente de una clave ajena de una relaci&oacute;n puede aceptar nulos.";
 answers[63] = choices[63][0];
 units[63] = "58";
 comments[63] = "Id Pregunta: 6319. ";


//  Id pregunta: 6458 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Una infraestructura de clave p&uacute;blica (PKI) es ";
 choices[64]= new Array();
 choices[64][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[64][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[64][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[64][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[64] = choices[64][3];
 units[64] = "74";
 comments[64] = "Id Pregunta: 6458. Castilla La Mancha 2009";


//  Id pregunta: 6510 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El superusuario administrador de un sistema UNIX se conoce como:";
 choices[65]= new Array();
 choices[65][0] = "admin";
 choices[65][1] = "root";
 choices[65][2] = "superadmin";
 choices[65][3] = "Ninguno de los anteriores";
 answers[65] = choices[65][1];
 units[65] = "54";
 comments[65] = "Id Pregunta: 6510. NULL";


//  Id pregunta: 7155 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia, y los marca individualmente como copiados, es una copia de seguridad:";
 choices[66]= new Array();
 choices[66][0] = "Diaria";
 choices[66][1] = "Intermedia";
 choices[66][2] = "Incremental";
 choices[66][3] = "Diferencial";
 answers[66] = choices[66][2];
 units[66] = "48";
 comments[66] = "Id Pregunta: 7155. Examen TIC B 2009";


//  Id pregunta: 7171 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[67]= new Array();
 choices[67][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[67][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[67][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[67][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "68";
 comments[67] = "Id Pregunta: 7171. Examen TIC B 2009";


//  Id pregunta: 7319 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[68]= new Array();
 choices[68][0] = "Active Server Pages";
 choices[68][1] = "Active Side Pages";
 choices[68][2] = "Archive Server Pages";
 choices[68][3] = "Archive Side Pages";
 answers[68] = choices[68][0];
 units[68] = "59";
 comments[68] = "Id Pregunta: 7319. NULL";


//  Id pregunta: 8603 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[69]= new Array();
 choices[69][0] = "SOLAP.";
 choices[69][1] = "DOLAP.";
 choices[69][2] = "WOLAP.";
 choices[69][3] = "RTOLAP.";
 answers[69] = choices[69][2];
 units[69] = "68";
 comments[69] = "Id Pregunta: 8603. Examen TIC A2 2010 interna";


//  Id pregunta: 8638 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[70]= new Array();
 choices[70][0] = "CREATE";
 choices[70][1] = "ALTER";
 choices[70][2] = "DELETE";
 choices[70][3] = "DROP";
 answers[70] = choices[70][2];
 units[70] = "57, 58";
 comments[70] = "Id Pregunta: 8638. Examen TIC A2 2010 interna";


//  Id pregunta: 8867 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[71]= new Array();
 choices[71][0] = "Metadata.";
 choices[71][1] = "Data Marts.";
 choices[71][2] = "Data Ware.";
 choices[71][3] = "Data Store.";
 answers[71] = choices[71][1];
 units[71] = "68";
 comments[71] = "Id Pregunta: 8867. Analista Ayto. Madrid 2010";


//  Id pregunta: 8964 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Como algoritmos de cifrado sim&eacute;trico de bloque no figura:";
 choices[72]= new Array();
 choices[72][0] = "Lucifer";
 choices[72][1] = "Serpent";
 choices[72][2] = "Seal";
 choices[72][3] = "Shark";
 answers[72] = choices[72][2];
 units[72] = "72";
 comments[72] = "Id Pregunta: 8964. ";


//  Id pregunta: 8978 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Respecto al sistema operativo Android:";
 choices[73]= new Array();
 choices[73][0] = "Muchas de sus aplicaciones est&aacute;n escritas en Java";
 choices[73][1] = "No dispone de una m&aacute;quina virtual java";
 choices[73][2] = "Las respuestas a) y b) son ciertas";
 choices[73][3] = "Las respuestas a) y b) son falsas";
 answers[73] = choices[73][2];
 units[73] = "47";
 comments[73] = "Id Pregunta: 8978. ";


//  Id pregunta: 9116 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es la segmentaci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "T&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas o segmentos.";
 choices[74][1] = "Los segmentos est&aacute;n conectados entre s&iacute; y cada uno al siguiente.";
 choices[74][2] = "Todos los segmentos proceden y progresan a la vez";
 choices[74][3] = "Todas las respuestas son correctas";
 answers[74] = choices[74][3];
 units[74] = "45";
 comments[74] = "Id Pregunta: 9116. ";


//  Id pregunta: 9132 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es un bus de expansion (I/O)?";
 choices[75]= new Array();
 choices[75][0] = "Conjunto de l&iacute;neas de comunicaci&oacute;n encargado de llevar el bus de datos, el bus de direcci&oacute;n y el de control a la tarjeta de interfaz (Entrada/Salida) que se agrega a la tarjeta principal.";
 choices[75][1] = "Vincula a todos los componentes de la CPU";
 choices[75][2] = "Son l&iacute;neas de comunicaci&oacute;n por donde circulan los datos externos e internos del microprocesador.";
 choices[75][3] = "l&iacute;neas de comunicaci&oacute;n por donde viaja la informaci&oacute;n espec&iacute;fica sobre la localizaci&oacute;n de la direcci&oacute;n de memoria de datos o dispositivo al que se hace referencia";
 answers[75] = choices[75][0];
 units[75] = "47";
 comments[75] = "Id Pregunta: 9132. ";


//  Id pregunta: 9198 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[76]= new Array();
 choices[76][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[76][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[76][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[76][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[76] = choices[76][1];
 units[76] = "36";
 comments[76] = "Id Pregunta: 9198. ";


//  Id pregunta: 9202 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;De los siguientes cual no forma parte del ciclo de vida de los derechos digitales?";
 choices[77]= new Array();
 choices[77][0] = "Empaquetado.";
 choices[77][1] = "Envio.";
 choices[77][2] = "Protecci&oacute;n y venta.";
 choices[77][3] = "Consumo.";
 answers[77] = choices[77][1];
 units[77] = "37";
 comments[77] = "Id Pregunta: 9202. ";


//  Id pregunta: 9230 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Desde el punto de vista interno el sistema operativo puede concebirse como:";
 choices[78]= new Array();
 choices[78][0] = "un interfaz entre los programas de aplicaci&oacute;n y la m&aacute;quina pura.";
 choices[78][1] = "gestor de recursos.";
 choices[78][2] = "coordinador del funcionamiento de los recursos de c&oacute;mputo y de entrada y salida.";
 choices[78][3] = "B) y C) son correctas.";
 answers[78] = choices[78][3];
 units[78] = "52";
 comments[78] = "Id Pregunta: 9230. ";


//  Id pregunta: 9266 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Si queremos programar la ejecuci&oacute;n del script &quot;/home/user/script.sh&quot; todos los mi&eacute;rcoles y domingos cada 4 horas, la entrada a a&ntilde;adir en el fichero cron ser&iacute;a:";
 choices[79]= new Array();
 choices[79][0] = "0 */4 * * 3,7 /home/user/script.sh";
 choices[79][1] = "* 4 * * 0,3 /home/user/script.sh ";
 choices[79][2] = "0 */4 wed,sun * * /home/user/script.sh ";
 choices[79][3] = "* */4 * * 3-7 /home/user/script.sh ";
 answers[79] = choices[79][0];
 units[79] = "53";
 comments[79] = "Id Pregunta: 9266. Examen TICA2-2011";


//  Id pregunta: 9274 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[80]= new Array();
 choices[80][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos";
 choices[80][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[80][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[80][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9274. Examen TIC-A1 2011";


//  Id pregunta: 9610 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[81]= new Array();
 choices[81][0] = "SQL 2000";
 choices[81][1] = "SQL-2003";
 choices[81][2] = "SQL-2006";
 choices[81][3] = "SQL-2008";
 answers[81] = choices[81][2];
 units[81] = "58";
 comments[81] = "Id Pregunta: 9610. NULL";


//  Id pregunta: 9924 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[82]= new Array();
 choices[82][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[82][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[82][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[82][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[82] = choices[82][2];
 units[82] = "58";
 comments[82] = "Id Pregunta: 9924. TIC A2, Examen 2013";


//  Id pregunta: 9972 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes se corresponde con un m&oacute;dulo dentro de un ERP (Enterprise Resource Planning)?";
 choices[83]= new Array();
 choices[83][0] = "Recursos Humanos";
 choices[83][1] = "Planificaci&oacute;n Estrat&eacute;gica";
 choices[83][2] = "Seguridad de Informaci&oacute;n";
 choices[83][3] = "HelpDesk";
 answers[83] = choices[83][0];
 units[83] = "65";
 comments[83] = "Id Pregunta: 9972. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10019 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[84]= new Array();
 choices[84][0] = "xUnit";
 choices[84][1] = "xUnit.net";
 choices[84][2] = "NUnit";
 choices[84][3] = "csUnit";
 answers[84] = choices[84][0];
 units[84] = "59";
 comments[84] = "Id Pregunta: 10019. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10029 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Los ETL son herramientas utilizadas habitualmente en la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas herramientas?";
 choices[85]= new Array();
 choices[85][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[85][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[85][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de p&aacute;ginas HTML.";
 choices[85][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[85] = choices[85][3];
 units[85] = "68";
 comments[85] = "Id Pregunta: 10029. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10247 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[86]= new Array();
 choices[86][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[86][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[86][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[86][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[86] = choices[86][3];
 units[86] = "61";
 comments[86] = "Id Pregunta: 10247. ";


//  Id pregunta: 10250 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Recibe muchas modificaciones y Juan decide incorporarlas a una nueva versi&oacute;n de su software. Finalmente, Juan decide hacer una versi&oacute;n propietaria de su software, y declara:I) Como el c&oacute;digo fuente original eral GPL, todos los que han hecho mejoras autom&aacute;ticamente asignan el copyright de esas mejoras a Juan, por lo que no necesita solicitar autorizaci&oacute;n para licenciar el c&oacute;digo de otra formaII) Como Juan tiene el copyright, puede licenciar el c&oacute;digo de forma retroactiva, por lo que nadie puede distribuir versiones anteriores bajo GPL";
 choices[87]= new Array();
 choices[87][0] = "I) y II) son verdaderas";
 choices[87][1] = "I) es verdadera, II) es falsa";
 choices[87][2] = "I es falsa, II) es verdadera";
 choices[87][3] = "I) y II) son falsas";
 answers[87] = choices[87][3];
 units[87] = "61";
 comments[87] = "Id Pregunta: 10250. ";


//  Id pregunta: 10376 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Si un intruso intenta cotillear (eavesdropping) durante el proceso de generaci&oacute;n de las claves generadas por criptograf&iacute;a cu&aacute;ntica:";
 choices[88]= new Array();
 choices[88][0] = "El sistema lo rechaza";
 choices[88][1] = "Las claves generadas se ve alteradas y el intruso es informado de que su intento de interceptaci&oacute;n no ha tenido &eacute;xito";
 choices[88][2] = "Al intentar usar las claves interceptadas le propone el sistema un challenge o desaf&iacute;o adicional";
 choices[88][3] = "S&oacute;lo puede hacerlo si se usan cifradores de flujo";
 answers[88] = choices[88][1];
 units[88] = "72";
 comments[88] = "Id Pregunta: 10376. ";


//  Id pregunta: 10535 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[89]= new Array();
 choices[89][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[89][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[89][2] = "La latencia de acceso a los datos es menor";
 choices[89][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[89] = choices[89][3];
 units[89] = "48";
 comments[89] = "Id Pregunta: 10535. NULL";


//  Id pregunta: 10790 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El algoritmo de Peterson corresponde a:";
 choices[90]= new Array();
 choices[90][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[90][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[90][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[90][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[90] = choices[90][3];
 units[90] = "52";
 comments[90] = "Id Pregunta: 10790. Examen GSI 2014";


//  Id pregunta: 10855 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En cuanto a las especificaciones MTOM y XOP, &iquest;cu&aacute;l de las siguientes sentencias NO es correcta?";
 choices[91]= new Array();
 choices[91][0] = "XOP es un acr&oacute;nimo de XML-binary Optimized Packaging.";
 choices[91][1] = "MTOM/XOP son recomendaciones desarrolladas por la IETF.";
 choices[91][2] = "MTOM optimiza la transferencia de datos binarios sobre SOAP.";
 choices[91][3] = "MTOM normalmente usa XOP para serializar el mensaje que contiene datos binarios.";
 answers[91] = choices[91][1];
 units[91] = "69";
 comments[91] = "Id Pregunta: 10855. Examen GSI 2014";


//  Id pregunta: 10876 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[92]= new Array();
 choices[92][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[92][1] = "RAID 0.";
 choices[92][2] = "RAID 1.";
 choices[92][3] = "RAID 5.";
 answers[92] = choices[92][1];
 units[92] = "48";
 comments[92] = "Id Pregunta: 10876. Examen GSI 2014";


//  Id pregunta: 11089 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Supongamos que sustituimos un procesador utilizado como servidor web por otro 10 veces m&aacute;s r&aacute;pido. Si el procesador inicial est&aacute; ocupado con c&aacute;lculos el 40% del tiempo y esperando por E/S el 60%,  &iquest;qu&eacute; incremento global de velocidad se obtiene con la mejora?";
 choices[93]= new Array();
 choices[93][0] = "1.56";
 choices[93][1] = "10";
 choices[93][2] = "4";
 choices[93][3] = "6";
 answers[93] = choices[93][0];
 units[93] = "45";
 comments[93] = "Id Pregunta: 11089. Ley de Amdahl";


//  Id pregunta: 11152 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[94]= new Array();
 choices[94][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[94][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Industria como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[94][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[94][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[94] = choices[94][0];
 units[94] = "74";
 comments[94] = "Id Pregunta: 11152. ";


//  Id pregunta: 11259 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Los certificados cualificados de firma electr&oacute;nica contendr&aacute;n:";
 choices[95]= new Array();
 choices[95][0] = "Al menos el nombre del firmante o un seud&oacute;nimo; si se usara un seud&oacute;nimo, se indicar&aacute; claramente.";
 choices[95][1] = "Los datos relativos al inicio y final del per&iacute;odo de validez del certificado.";
 choices[95][2] = "La localizaci&oacute;n de los servicios que pueden utilizarse para consultar el estado de validez del certificado cualificado.";
 choices[95][3] = "Todas son verdaderas.";
 answers[95] = choices[95][3];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11259. ";


//  Id pregunta: 11263 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Sobre los servicios cualificados de entrega electr&oacute;nica certificada es FALSO que deban cumplir el siguiente requisito t&eacute;cnico:";
 choices[96]= new Array();
 choices[96][0] = "Ser prestados por uno o m&aacute;s prestadores cualificados de servicios de confianza.";
 choices[96][1] = "Asegurar con un alto nivel de fiabilidad la identificaci&oacute;n del remitente.";
 choices[96][2] = "Estar protegidos el env&iacute;o y recepci&oacute;n de datos por una firma electr&oacute;nica cualificada o un sello electr&oacute;nico cualificado de tal forma que se impida la posibilidad de que se modifiquen los datos sin que se detecte.";
 choices[96][3] = "Indicar claramente al emisor y al destinatario de los datos cualquier modificaci&oacute;n de los datos necesarios a efectos del env&iacute;o o recepci&oacute;n de los datos.";
 answers[96] = choices[96][2];
 units[96] = "73";
 comments[96] = "Id Pregunta: 11263. ";


//  Id pregunta: 11520 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Al instalar un cortafuegos en un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[97]= new Array();
 choices[97][0] = "Confidencialidad.";
 choices[97][1] = "Disponibilidad.";
 choices[97][2] = "Integridad.";
 choices[97][3] = "Todas las anteriores.";
 answers[97] = choices[97][3];
 units[97] = "72";
 comments[97] = "Id Pregunta: 11520. NULL";


//  Id pregunta: 11615 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Para seleccionar todos los campos de una fila con el campo Nombre con valor 'Juan'en una tabla llamada Funcionarios se utiliza la sentencia:";
 choices[98]= new Array();
 choices[98][0] = "SELECT * FROM Funcionarios WHERE Nombre='Juan'";
 choices[98][1] = "SELECT * FROM Funcionarios WHERE Nombre:'Juan'";
 choices[98][2] = "SELECT FROM Funcionarios WHERE Nombre='Juan'";
 choices[98][3] = "SELECT FROM Funcionarios WHERE Nombre:'Juan'";
 answers[98] = choices[98][0];
 units[98] = "58";
 comments[98] = "Id Pregunta: 11615. ";


//  Id pregunta: 11617 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale en qu&eacute; tipo de licencia Creative Commons se permite el uso comercial de la obra pero no la generaci&oacute;n de obras derivadas:";
 choices[99]= new Array();
 choices[99][0] = "by-nc";
 choices[99][1] = "by-nd";
 choices[99][2] = "by-sa";
 choices[99][3] = "by-nc-nd";
 answers[99] = choices[99][1];
 units[99] = "61";
 comments[99] = "Id Pregunta: 11617. ";


