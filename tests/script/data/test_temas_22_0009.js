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

//  Id pregunta: 723 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes denominaciones no se corresponde con ninguno de los tipos de Shell est&aacute;ndar en los sistemas operativos UNIX?";
 choices[0]= new Array();
 choices[0][0] = "Bourne Shell";
 choices[0][1] = "C Shell";
 choices[0][2] = "Xenix Shell";
 choices[0][3] = "Korn Shell";
 answers[0] = choices[0][2];
 units[0] = "53";
 comments[0] = "Id Pregunta: 723. Examen TIC MAP B 2004";


//  Id pregunta: 750 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  De las estructuras de archivos propuestas a continuaci&oacute;n, indique cu&aacute;l implica que un Sistema Operativo tenga la m&aacute;xima flexibilidad: &quot;Aquella estructura en la que el archivo es un/una: &quot;";
 choices[1]= new Array();
 choices[1][0] = "Secuencia de registros de longitud fija";
 choices[1][1] = "Secuencia de bytes de tama&ntilde;o variable";
 choices[1][2] = "&Aacute;rbol de registros, todos ellos de igual longitud";
 choices[1][3] = "&Aacute;rbol de registros, que pueden ser de distinta longitud";
 answers[1] = choices[1][1];
 units[1] = "52";
 comments[1] = "Id Pregunta: 750. Examen TIC MAP B 2004";


//  Id pregunta: 836 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el lenguaje SQL?:";
 choices[2]= new Array();
 choices[2][0] = "El SQL es un lenguaje de definici&oacute;n y manipulaci&oacute;n de datos";
 choices[2][1] = "Si una transacci&oacute;n finaliza con una sentencia COMMIT, los cambios son cancelados";
 choices[2][2] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9085 de 1987";
 choices[2][3] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9075 de 1987";
 answers[2] = choices[2][3];
 units[2] = "58";
 comments[2] = "Id Pregunta: 836. NULL";


//  Id pregunta: 853 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no representan una caracter&iacute;stica de Unix?:";
 choices[3]= new Array();
 choices[3][0] = "Multiusuario y multitarea";
 choices[3][1] = "Sistema jer&aacute;rquico de ficheros";
 choices[3][2] = "Comando de int&eacute;rpretes flexible";
 choices[3][3] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 answers[3] = choices[3][3];
 units[3] = "52, 53";
 comments[3] = "Id Pregunta: 853. ";


//  Id pregunta: 872 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes programas en Linux no es un editor de textos?:";
 choices[4]= new Array();
 choices[4][0] = "vi";
 choices[4][1] = "emacs";
 choices[4][2] = "pine";
 choices[4][3] = "joe";
 answers[4] = choices[4][2];
 units[4] = "53";
 comments[4] = "Id Pregunta: 872. ";


//  Id pregunta: 904 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Podr&iacute;a decir cu&aacute;l de los siguientes no es un sistema Unix?:";
 choices[5]= new Array();
 choices[5][0] = "AIX";
 choices[5][1] = "OpenVMS";
 choices[5][2] = "HP-UX";
 choices[5][3] = "Solaris";
 answers[5] = choices[5][1];
 units[5] = "53";
 comments[5] = "Id Pregunta: 904. ";


//  Id pregunta: 1022 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El Kernel del sistema objetivo del proyecto GNU es:";
 choices[6]= new Array();
 choices[6][0] = "El kernel 'Linux', mantenido por Linus Torvalds";
 choices[6][1] = "El kernel de Minix, de Andrew S. Tanembaum";
 choices[6][2] = "El kernel Hurd";
 choices[6][3] = "Todas son falsas";
 answers[6] = choices[6][2];
 units[6] = "53";
 comments[6] = "Id Pregunta: 1022. ";


//  Id pregunta: 1125 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En referencia a simplificaci&oacute;n de expresiones booleanas: ";
 choices[7]= new Array();
 choices[7][0] = "Se usa el M&eacute;todo de Karnaugh.";
 choices[7][1] = "Se usa el M&eacute;todo de Shannon.";
 choices[7][2] = "Para funciones de m&aacute;s de 6 estados se usa el M&eacute;todo de Quine-McCluskey.";
 choices[7][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[7] = choices[7][2];
 units[7] = "58";
 comments[7] = "Id Pregunta: 1125. ";


//  Id pregunta: 1333 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Se puede acceder directamente a la memoria principal del ordenador por varios m&eacute;todos. Entre ellos se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Bus multiplexado";
 choices[8][1] = "Robo de ciclo";
 choices[8][2] = "Memoria segmentada";
 choices[8][3] = "Accesos aleatorios";
 answers[8] = choices[8][1];
 units[8] = "52";
 comments[8] = "Id Pregunta: 1333. ";


//  Id pregunta: 1346 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Se&ntilde;ale la alternativa que contiene los operadores que, juntos, componen el operador &lsquo;join&rsquo; del &aacute;lgebra relacional:";
 choices[9]= new Array();
 choices[9][0] = "Selecci&oacute;n, proyecci&oacute;n y diferencia";
 choices[9][1] = "Selecci&oacute;n, proyecci&oacute;n y producto cartesiano";
 choices[9][2] = "Proyecci&oacute;n, producto cartesiano y diferencia";
 choices[9][3] = "Proyecci&oacute;n, producto cartesiano y uni&oacute;n";
 answers[9] = choices[9][1];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1346. ";


//  Id pregunta: 1362 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Si construimos un fichero, donde la direcci&oacute;n real de almacenamiento de cada registro se deduce directamente de su indicativo o clave a trav&eacute;s de un algoritmo, estamos hablando de un fichero con organizaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Indexada";
 choices[10][1] = "Encadenada";
 choices[10][2] = "Aleatoria";
 choices[10][3] = "Invertida";
 answers[10] = choices[10][2];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1362. ";


//  Id pregunta: 1371 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Si una relaci&oacute;n no posee grupos repetitivos y cada atributo que no pertenezca a la clave es identificado &uacute;nicamente y de forma total por la clave se dice que est&aacute; en:";
 choices[11]= new Array();
 choices[11][0] = "Primera forma normal";
 choices[11][1] = "Segunda forma normal";
 choices[11][2] = "Tercera forma normal";
 choices[11][3] = "Forma normal de Boyce-Codd";
 answers[11] = choices[11][1];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1371. ";


//  Id pregunta: 1426 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Una transacci&oacute;n es un conjunto de acciones impregnadas de propiedades ACID, lo que significa:";
 choices[12]= new Array();
 choices[12][0] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[12][1] = "Acci&oacute;n, correcci&oacute;n, integridad y dependencia";
 choices[12][2] = "Atomicidad, coexistencia, integridad y permanencia";
 choices[12][3] = "Actividad, convergencia, aislamiento y dependencia";
 answers[12] = choices[12][0];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1426. ";


//  Id pregunta: 1465 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La consistencia de un interfaz de usuario:";
 choices[13]= new Array();
 choices[13][0] = "Contribuye a que &eacute;ste sea menos vers&aacute;til en su utilizaci&oacute;n";
 choices[13][1] = "Se refiere a la uniformidad en su utilizaci&oacute;n a lo largo de toda su exposici&oacute;n";
 choices[13][2] = "S&oacute;lo se puede garantizar si &eacute;ste es gr&aacute;fico";
 choices[13][3] = "Garantiza su facilidad de uso";
 answers[13] = choices[13][1];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1465. ";


//  Id pregunta: 1598 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  En sistema operativo UNIX indicar, entre las siguientes caracter&iacute;sticas cu&aacute;l no corresponde a cualquier sistema de archivo usado: VFS, NFS, etc&hellip;";
 choices[14]= new Array();
 choices[14][0] = "Capacidad de crear y destruir archivos";
 choices[14][1] = "Crecimiento din&aacute;mico de archivos";
 choices[14][2] = "Tratamiento de cualquier dispositivo perof&eacute;rico como archivo";
 choices[14][3] = "Estructura matricial";
 answers[14] = choices[14][3];
 units[14] = "53,54";
 comments[14] = "Id Pregunta: 1598. ";


//  Id pregunta: 1611 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  La tercera forma normal enunciada por Codd dice:";
 choices[15]= new Array();
 choices[15][0] = "Un relaci&oacute;n est&aacute; en tercera forma normal, si est&aacute; en 2FN y adem&aacute;s ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[15][1] = "Una relaci&oacute;n R est&aacute; en 3FN si todos los atributos que no forman parte de la clave son mutuamente independientes y dependen funcionalmente de forma completa de la clave primaria";
 choices[15][2] = "Ambos enunciados son correctos";
 choices[15][3] = "Ninguno es correcto";
 answers[15] = choices[15][2];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1611. NULL";


//  Id pregunta: 1720 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  A qu&eacute; corresponde el est&aacute;ndar POSIX 1003.7";
 choices[16]= new Array();
 choices[16][0] = "Int&eacute;rprete y comandos";
 choices[16][1] = "Lenguaje Ada";
 choices[16][2] = "Administraci&oacute;n del sistema";
 choices[16][3] = "Procedimientos de biblioteca";
 answers[16] = choices[16][2];
 units[16] = "53";
 comments[16] = "Id Pregunta: 1720. ";


//  Id pregunta: 1740 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  En un Active Directory el conjunto de atributos de un objeto dado se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Container.";
 choices[17][1] = "Scheme.";
 choices[17][2] = "&Aacute;rbol.";
 choices[17][3] = "Site.";
 answers[17] = choices[17][1];
 units[17] = "56";
 comments[17] = "Id Pregunta: 1740. ";


//  Id pregunta: 1743 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  En el entorno Microsoft WebDAV se utiliza para";
 choices[18]= new Array();
 choices[18][0] = "Recuperaci&oacute;n automatizada del sistema";
 choices[18][1] = "Para sincronizaci&oacute;n de copias de DFS.";
 choices[18][2] = "Compartici&oacute;n remota de documentos";
 choices[18][3] = "Encriptaci&oacute;n del sistema de archivos.";
 answers[18] = choices[18][2];
 units[18] = "56";
 comments[18] = "Id Pregunta: 1743. ";


//  Id pregunta: 4455 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  &iquest;Que es el shell de UNIX?";
 choices[19]= new Array();
 choices[19][0] = "Es el equivalente al escritorio en Windows 2003.";
 choices[19][1] = "Es la unidad m&iacute;nima de informaci&oacute;n que se puede almacenar en un sistema de ficheros UNIX.";
 choices[19][2] = "Es un int&eacute;rprete de comandos.";
 choices[19][3] = "Es un protocolo de comunicaci&oacute;n en red propio de UNIX.";
 answers[19] = choices[19][2];
 units[19] = "53";
 comments[19] = "Id Pregunta: 4455. ";


//  Id pregunta: 4456 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  &iquest;Que tipo de informaci&oacute;n contienen los inodos?";
 choices[20]= new Array();
 choices[20][0] = "Contienen los contenidos de los archivos.";
 choices[20][1] = "Contienen informaci&oacute;n acerca del procesos de arranque";
 choices[20][2] = "Contienen informaci&oacute;n referente a cada archivo del sistema de archivos";
 choices[20][3] = "Contienen Ia tabla de caracteres ASCII";
 answers[20] = choices[20][2];
 units[20] = "54";
 comments[20] = "Id Pregunta: 4456. ";


//  Id pregunta: 5618 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Indicar cual de las siguientes no es una caracter&iacute;stica de UNIX:";
 choices[21]= new Array();
 choices[21][0] = " Multitarea y multiusuario";
 choices[21][1] = "Int&eacute;rprete de comandos flexible";
 choices[21][2] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 choices[21][3] = "Sistema jer&aacute;rquico de ficheros";
 answers[21] = choices[21][2];
 units[21] = "53";
 comments[21] = "Id Pregunta: 5618. ";


//  Id pregunta: 5621 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de sistemas UNIX con las aplicaciones son:";
 choices[22]= new Array();
 choices[22][0] = "OSI";
 choices[22][1] = "ISO";
 choices[22][2] = "POSIX";
 choices[22][3] = "XENIX";
 answers[22] = choices[22][2];
 units[22] = "53";
 comments[22] = "Id Pregunta: 5621. ";


//  Id pregunta: 5622 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  En un sistema operativo UNIX queremos que un fichero pueda ser actualizado &uacute;nicamente por su propietario y por los usuarios que pertenecen al mismo grupo que el propietario. Indicar cuales ser&iacute;an los permisos adecuados:";
 choices[23]= new Array();
 choices[23][0] = "755";
 choices[23][1] = "740";
 choices[23][2] = "760";
 choices[23][3] = "777";
 answers[23] = choices[23][2];
 units[23] = "53";
 comments[23] = "Id Pregunta: 5622. ";


//  Id pregunta: 8410 AÃ±o de creación de pregunta: 2011-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes pol&iacute;ticas de planificaci&oacute;n es de tipo preemptive? ";
 choices[24]= new Array();
 choices[24][0] = "Shortest Job First (SJF)";
 choices[24][1] = "Shortest Remaining Time First (SRTF). ";
 choices[24][2] = "First-come, first-served (FCFS)";
 choices[24][3] = "Shortest Process Next (SPN). ";
 answers[24] = choices[24][1];
 units[24] = "52";
 comments[24] = "Id Pregunta: 8410. Examen TIC A2 2010";


//  Id pregunta: 8785 AÃ±o de creación de pregunta: 2011-01-01
 questions[25]= "26)  OLAP proporciona mayor velocidad de procesamiento en la sentencia SQL";
 choices[25]= new Array();
 choices[25][0] = "INSERT";
 choices[25][1] = "UPDATE";
 choices[25][2] = "DELETE";
 choices[25][3] = "SELECT";
 answers[25] = choices[25][3];
 units[25] = "57, 58";
 comments[25] = "Id Pregunta: 8785. Examen UPM A2 2011";


//  Id pregunta: 8792 AÃ±o de creación de pregunta: 2011-01-01
 questions[26]= "27)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[26]= new Array();
 choices[26][0] = "Nombre de usuario y shell";
 choices[26][1] = "Contrase&ntilde;a de usuario y home";
 choices[26][2] = "uid y shell";
 choices[26][3] = "gid y home";
 answers[26] = choices[26][2];
 units[26] = "53, 54";
 comments[26] = "Id Pregunta: 8792. Examen UPM A2 2011";


//  Id pregunta: 8853 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)  En el marco de trabajo Windows Communication Foundation (WCF) para la creaci&oacute;n de Aplicaciones Orientadas a Servicios cu&aacute;l de las siguientes afirmaciones es correcta respecto al modelo de intercambio soportado:";
 choices[27]= new Array();
 choices[27][0] = "El modelo es el de solicitud/respuesta, en que un extremo ha de solicitar datos de otro extremo y el otro extremo enviar siempre una respuesta";
 choices[27][1] = "Permite un modelo d&uacute;plex, en donde dos extremos establecen una conexi&oacute;n y se env&iacute;an datos entre s&iacute;, como ocurre con un programa de mensajer&iacute;a instant&aacute;nea";
 choices[27][2] = "El modelo establece que el env&iacute;o de datos de un extremo de servicio a otro no puede ser asincr&oacute;nico";
 choices[27][3] = "Ninguna de las anteriores es correcta";
 answers[27] = choices[27][2];
 units[27] = "56";
 comments[27] = "Id Pregunta: 8853. Analista Ayto. Madrid 2010";


//  Id pregunta: 9232 AÃ±o de creación de pregunta: 2013-01-01
 questions[28]= "29)  &iquest;Qu&eacute; es Jelly Bean?";
 choices[28]= new Array();
 choices[28][0] = "Sistema operativo de Apple para dispositivos m&oacute;viles";
 choices[28][1] = "Sistema operativo de Apple para ordenadores de sobremesa.";
 choices[28][2] = "Una versi&oacute;n de Android.";
 choices[28][3] = "No existe.";
 answers[28] = choices[28][2];
 units[28] = "52";
 comments[28] = "Id Pregunta: 9232. ";


//  Id pregunta: 9240 AÃ±o de creación de pregunta: 2013-01-01
 questions[29]= "30)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[29]= new Array();
 choices[29][0] = "Se orienta al usuario novel y promedio.";
 choices[29][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[29][2] = "Su patrocinador es Canonical.";
 choices[29][3] = "Todas son correctas.";
 answers[29] = choices[29][3];
 units[29] = "53";
 comments[29] = "Id Pregunta: 9240. ";


//  Id pregunta: 9253 AÃ±o de creación de pregunta: 2013-01-01
 questions[30]= "31)  &iquest;C&oacute;mo es la administraci&oacute;n de memoria en Windows 7?";
 choices[30]= new Array();
 choices[30][0] = "Todos los procesos de usuario comparten un espacio de direcciones virtuales.";
 choices[30][1] = "Cada proceso de usuario tiene su propio espacio de direcciones virtuales.";
 choices[30][2] = "No se gestiona.";
 choices[30][3] = "Ninguna es correcta.";
 answers[30] = choices[30][1];
 units[30] = "56";
 comments[30] = "Id Pregunta: 9253. ";


//  Id pregunta: 9601 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[31]= new Array();
 choices[31][0] = "Las interrupciones";
 choices[31][1] = "El scheduler";
 choices[31][2] = "Los drivers de los dispositivos";
 choices[31][3] = "a) y c) son correctas";
 answers[31] = choices[31][3];
 units[31] = "53";
 comments[31] = "Id Pregunta: 9601. ";


//  Id pregunta: 9924 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[32]= new Array();
 choices[32][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[32][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[32][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[32][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[32] = choices[32][2];
 units[32] = "58";
 comments[32] = "Id Pregunta: 9924. TIC A2, Examen 2013";


//  Id pregunta: 10873 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  Respecto a la tecnolog&iacute;a de almacenamiento InnoDB se&ntilde;ale la respuesta afirmativa:";
 choices[33]= new Array();
 choices[33][0] = "InnoDB es una tecnolog&iacute;a de almacenamiento de datos de c&oacute;digo abierto para la base de datos Oracle.";
 choices[33][1] = "Es la tecnolog&iacute;a de almacenamiento de datos por defecto por el sistema administrador de bases de datos relacionales MySQL.";
 choices[33][2] = "Se basa en el c&oacute;digo ISAM.";
 choices[33][3] = "No permite las b&uacute;squedas denominadas full-text, que para conjuntos de datos grandes son mucho m&aacute;s eficientes.";
 answers[33] = choices[33][1];
 units[33] = "57";
 comments[33] = "Id Pregunta: 10873. Examen GSI 2014";


//  Id pregunta: 11522 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes corresponde al Framework multimedia de KDE?";
 choices[34]= new Array();
 choices[34][0] = "Phonon";
 choices[34][1] = "Decibel";
 choices[34][2] = "Plasma";
 choices[34][3] = "Ninguna de las afirmaciones restantes.";
 answers[34] = choices[34][0];
 units[34] = "54";
 comments[34] = "Id Pregunta: 11522. NULL";


