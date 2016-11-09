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

//  Id pregunta: 22 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denomina al derecho o facultad que se reconoce al afectado para recabar informaci&oacute;n gratuita sobre sus datos de car&aacute;cter personal, ya est&eacute;n incluidos o vayan a ser tratados?:";
 choices[0]= new Array();
 choices[0][0] = "Derecho de informaci&oacute;n";
 choices[0][1] = "Derecho de acceso";
 choices[0][2] = "Derecho de consulta al Registro General de Protecci&oacute;n de Datos";
 choices[0][3] = "Derecho de cancelaci&oacute;n";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 22. ";


//  Id pregunta: 139 AÃ±o de creación de pregunta: 2009-01-01
 questions[1]= "2)  El derecho de informaci&oacute;n en la recogida de datos define la informaci&oacute;n que, obligatoriamente y con car&aacute;cter previo, se debe comunicar al afectado al que se le requiera para suministrar cualquier dato personal. Entre dicha informaci&oacute;n consta:";
 choices[1]= new Array();
 choices[1][0] = "El car&aacute;cter voluntario u obligatorio de las respuestas y de las consecuencias de la negativa a proporcionarlas";
 choices[1][1] = "El plazo de almacenamiento de la informaci&oacute;n";
 choices[1][2] = "El n&uacute;mero de cesiones que se van a realizar";
 choices[1][3] = "S&oacute;lo es necesario comunicar al afectado que se va a crear el fichero";
 answers[1] = choices[1][0];
 units[1] = "29";
 comments[1] = "Id Pregunta: 139. ";


//  Id pregunta: 143 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El establecimiento de un mecanismo que permita la identificaci&oacute;n de forma inequ&iacute;voca y personalizada de todo aquel usuario que intente acceder al sistema de informaci&oacute;n y la verificaci&oacute;n de que est&aacute; autorizado, es una medida de nivel:";
 choices[2]= new Array();
 choices[2][0] = "B&aacute;sico";
 choices[2][1] = "Medio";
 choices[2][2] = "Alto";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][0];
 units[2] = "29";
 comments[2] = "Id Pregunta: 143. ";


//  Id pregunta: 210 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En la Administraci&oacute;n P&uacute;blica se puede copiar un programa de ordenador para entregarlo a terceros s&oacute;lo:";
 choices[3]= new Array();
 choices[3][0] = "Cuando haya sido desarrollado a medida de las necesidades de la Administraci&oacute;n";
 choices[3][1] = "Cuando se trate de la copia de &quot;back-up&quot;";
 choices[3][2] = "Cuando los derechos de explotaci&oacute;n correspondan a la Administraci&oacute;n";
 choices[3][3] = "Cuando la Administraci&oacute;n haya adquirido una licencia de uso corporativa";
 answers[3] = choices[3][2];
 units[3] = "36";
 comments[3] = "Id Pregunta: 210. ";


//  Id pregunta: 286 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La cesi&oacute;n de los datos fuera de los casos en que est&eacute;n permitidas, seg&uacute;n la LOPD es una infracci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "No es infracci&oacute;n";
 choices[4][1] = "Leve";
 choices[4][2] = "Grave";
 choices[4][3] = "Muy grave";
 answers[4] = choices[4][3];
 units[4] = "29";
 comments[4] = "Id Pregunta: 286. ";


//  Id pregunta: 424 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n el Convenio para la Protecci&oacute;n de las personas con respecto al tratamiento automatizado de los datos de car&aacute;cter personal elaborado por el Consejo de Europa, el principio de finalidad corresponde a:";
 choices[5]= new Array();
 choices[5][0] = "Los datos se obtendr&aacute;n y tratar&aacute;n leal y leg&iacute;timamente";
 choices[5][1] = "Los datos se registrar&aacute;n para objetivos determinados y leg&iacute;timos y no se utilizar&aacute;n de forma incompatible con su finalidad";
 choices[5][2] = "Los datos ser&aacute;n adecuados y no exceder&aacute;n de las finalidades para las que se ha registrado.";
 choices[5][3] = "Se conservar&aacute;n s&oacute;lo el tiempo estrictamente necesario para su finalidad";
 answers[5] = choices[5][1];
 units[5] = "29";
 comments[5] = "Id Pregunta: 424. ";


//  Id pregunta: 436 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, s&oacute;lo una de las siguientes definiciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "Obra en colaboraci&oacute;n: aquella resultado de la colaboraci&oacute;n de varios autores, correspondiendo el derecho a todos ellos en la proporci&oacute;n que determinen";
 choices[6][1] = "Obra compuesta: aquella obra nueva que incorpore una obra existente con la colaboraci&oacute;n del autor de &eacute;sta &uacute;ltima";
 choices[6][2] = "Las 2 anteriores son definiciones correctas";
 choices[6][3] = "Las 2 primeras son definiciones incorrectas";
 answers[6] = choices[6][0];
 units[6] = "36";
 comments[6] = "Id Pregunta: 436. ";


//  Id pregunta: 453 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Se&ntilde;ale la opci&oacute;n incorrecta entre las siguientes: la Agencia de Protecci&oacute;n de Datos es:";
 choices[7]= new Array();
 choices[7][0] = "Un Ente de Derecho P&uacute;blico con personalidad jur&iacute;dica propia";
 choices[7][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Administraciones P&uacute;blicas";
 choices[7][2] = "Ejerce sus funciones a trav&eacute;s del Director, cuyos actos ponen fin a la v&iacute;a administrativa";
 choices[7][3] = "Act&uacute;a con plena independencia de las AA.PP.";
 answers[7] = choices[7][1];
 units[7] = "29";
 comments[7] = "Id Pregunta: 453. ";


//  Id pregunta: 515 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  Seg&uacute;n la Ley de propiedad intelectual, cuando el propietario de un programa de ordenador es una persona jur&iacute;dica, puede ejercer derechos de explotaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "de setenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o, si no, al de su creaci&oacute;n";
 choices[8][1] = "de sesenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita o il&iacute;cita del programa o, si no, al de su creaci&oacute;n. En caso de divulgaci&oacute;n il&iacute;cita se considerar&aacute; el de creaci&oacute;n ";
 choices[8][2] = "de 5 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa, si no al de su creaci&oacute;n";
 choices[8][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[8] = choices[8][0];
 units[8] = "36";
 comments[8] = "Id Pregunta: 515. ";


//  Id pregunta: 598 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  Uno de estos datos personales no es de los denominados &ldquo;especialmente protegidos&rdquo;";
 choices[9]= new Array();
 choices[9][0] = "Origen racial o &eacute;tnico.";
 choices[9][1] = "Afiliaci&oacute;n sindical";
 choices[9][2] = "Infracciones penales .";
 choices[9][3] = "Vida sexual.";
 answers[9] = choices[9][2];
 units[9] = "29";
 comments[9] = "Id Pregunta: 598. ";


//  Id pregunta: 601 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  &iquest;Se pueden tratar datos de fuentes accesibles al p&uacute;blico?";
 choices[10]= new Array();
 choices[10][0] = "Si, ya que as&iacute; lo establece la LOPD";
 choices[10][1] = "No, no est&aacute; permitido por la LOPD";
 choices[10][2] = "Si, cuando se publique el reglamento que lo desarrolle ";
 choices[10][3] = "No, ya que no es una fuente de recogida de datos";
 answers[10] = choices[10][0];
 units[10] = "29";
 comments[10] = "Id Pregunta: 601. ";


//  Id pregunta: 604 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  La Agencia de Protecci&oacute;n de Datos se rige:";
 choices[11]= new Array();
 choices[11][0] = "Por el T&iacute;tulo V de la LOPD y por el Real Decreto 156/1999, por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[11][1] = "Por el T&iacute;tulo VI de la LOPD y por el Real Decreto 428/1993 por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[11][2] = "Por el T&iacute;tulo V de la LOPD y por el Real Decreto 994/1999 por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[11][3] = "Por el T&iacute;tulo VI de la LOPD y por el Real Decreto 994/1999, por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 answers[11] = choices[11][1];
 units[11] = "29";
 comments[11] = "Id Pregunta: 604. ";


//  Id pregunta: 607 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  La aprobaci&oacute;n del Estatuto de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se realiz&oacute; a trav&eacute;s de:";
 choices[12]= new Array();
 choices[12][0] = "R.D. 156/1996 de 2 de Febrero .";
 choices[12][1] = "R.D. 428/1993 de 26 de Marzo .";
 choices[12][2] = "La LOFAGE.";
 choices[12][3] = "La Ley 30/1992 de 26 de Noviembre.";
 answers[12] = choices[12][1];
 units[12] = "29";
 comments[12] = "Id Pregunta: 607. ";


//  Id pregunta: 611 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  Cual de los siguientes ficheros debe inscribirse como de nivel de seguridad alto";
 choices[13]= new Array();
 choices[13][0] = "Los ficheros que contengan datos para fines policiales, sin consentimiento del afectado.";
 choices[13][1] = "Los ficheros que contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo.";
 choices[13][2] = "Los ficheros que contengan datos relativos a la comisi&oacute;n de infracciones administrativas o penales.";
 choices[13][3] = "No es correcta ninguna de las anteriores.";
 answers[13] = choices[13][0];
 units[13] = "29";
 comments[13] = "Id Pregunta: 611. ";


//  Id pregunta: 629 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Qu&eacute; derecho de explotaci&oacute;n no reconoce expl&iacute;citamente la ley espa&ntilde;ola de propiedad intelectual:";
 choices[14]= new Array();
 choices[14][0] = "Derecho de integridad";
 choices[14][1] = "Derecho de distribuci&oacute;n.";
 choices[14][2] = "Derecho de reproducci&oacute;n.";
 choices[14][3] = "Derecho de comunicaci&oacute;n p&uacute;blica.";
 answers[14] = choices[14][0];
 units[14] = "36";
 comments[14] = "Id Pregunta: 629. ";


//  Id pregunta: 631 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Cu&aacute;l de las siguientes afirmaciones permite la legislaci&oacute;n espa&ntilde;ola actual respecto a los programas de ordenador:";
 choices[15]= new Array();
 choices[15][0] = "Los principios que rigen los programas de ordenador pueden ser patentables.";
 choices[15][1] = "Los derechos sobre los programas de ordenador pueden ser inscritos en el Registro de la Propiedad Intelectual.";
 choices[15][2] = "Los programas de ordenador pueden ser patentables.";
 choices[15][3] = "Los programas de ordenador pueden ser inscritos en el Registro de la Propiedad ";
 answers[15] = choices[15][1];
 units[15] = "36";
 comments[15] = "Id Pregunta: 631. ";


//  Id pregunta: 665 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute; como m&aacute;ximo";
 choices[16]= new Array();
 choices[16][0] = "70 a&ntilde;os";
 choices[16][1] = "60 a&ntilde;os";
 choices[16][2] = "100 a&ntilde;os";
 choices[16][3] = "50 a&ntilde;os";
 answers[16] = choices[16][0];
 units[16] = "36";
 comments[16] = "Id Pregunta: 665. ";


//  Id pregunta: 690 AÃ±o de creación de pregunta: 2009-01-01
 questions[17]= "18)  De acuerdo con la Ley 25/2007 Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[17]= new Array();
 choices[17][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[17][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[17][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, Los proveedores de Acceso a redes de telecomunicaciones, Los prestadores de servicios de alojamiento de datos";
 choices[17][3] = "las respuestas 'a' y 'b' son correctas";
 answers[17] = choices[17][0];
 units[17] = "30";
 comments[17] = "Id Pregunta: 690. Art&iacute;culo 2 de la ley";


//  Id pregunta: 1531 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  El Real Decreto 209/2003:";
 choices[18]= new Array();
 choices[18][0] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[18][1] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[18][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[18][3] = "Todas las anteriores son ciertas";
 answers[18] = choices[18][1];
 units[18] = "30";
 comments[18] = "Id Pregunta: 1531. ";


//  Id pregunta: 1641 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[19]= new Array();
 choices[19][0] = "Leve";
 choices[19][1] = "Grave";
 choices[19][2] = "Muy grave";
 choices[19][3] = "No constituye infracci&oacute;n";
 answers[19] = choices[19][0];
 units[19] = "30";
 comments[19] = "Id Pregunta: 1641. ";


//  Id pregunta: 2860 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  La incicativa europea i2010 se transpone en Espa&ntilde;a en ";
 choices[20]= new Array();
 choices[20][0] = "Plan Avanza 2010";
 choices[20][1] = "Ingenio 2010";
 choices[20][2] = "Plan Avanza";
 choices[20][3] = "Avanza.es";
 answers[20] = choices[20][1];
 units[20] = "30";
 comments[20] = "Id Pregunta: 2860. ";


//  Id pregunta: 4238 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  La Agencia de Protecci&oacute;n de Datos se adscribe al Ministerio de";
 choices[21]= new Array();
 choices[21][0] = " Administraciones P&uacute;blicas";
 choices[21][1] = " Industria, Turismo y Comercio";
 choices[21][2] = " Justicia";
 choices[21][3] = "Ninguna es correcta";
 answers[21] = choices[21][3];
 units[21] = "29";
 comments[21] = "Id Pregunta: 4238. ";


//  Id pregunta: 4249 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Una de las novedades m&aacute;s importantes de la Ley para el acceso electr&oacute;nico de los ciudadanos a las Administraciones P&uacute;blicas consiste en:";
 choices[22]= new Array();
 choices[22][0] = "Se garantiza al ciudadano el acceso a los servicios p&uacute;blicos a trav&eacute;s de Internet y por v&iacute;a telef&oacute;nica, pero no se contemplan en ning&uacute;n caso canales como tel&eacute;fono m&oacute;vil o televisi&oacute;n digital dada su baja madure";
 choices[22][1] = "Aunque existen multitud de antecedentes legislativos de impulso a la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a, por primera vez se reconoce el acceso a las AAPP por medios electr&oacute;nicos como un derecho del ciudadano.";
 choices[22][2] = "No aspira a conceder la misma validez jur&iacute;dica a las comunicaciones electr&oacute;nicas que a las que se realizan en papel.";
 choices[22][3] = "Los servicios electr&oacute;nicos que pongan en marcha las AAPP funcionar&aacute;n en horario de 8 de la ma&ntilde;ana a 8 de la tarde";
 answers[22] = choices[22][1];
 units[22] = "30";
 comments[22] = "Id Pregunta: 4249. Sobre Proyecto LAECAP";


//  Id pregunta: 4678 AÃ±o de creación de pregunta: 2009-01-01
 questions[23]= "24)  Tenemos un fichero de tratamiento automatizado que contiene datos sobre ideolog&iacute;a y afiliaci&oacute;n sindical.";
 choices[23]= new Array();
 choices[23][0] = "La LOPD obliga a informar a la Agencia Estatal de Protecci&oacute;n de Datos de su existencia y establece un nivel de seguridad clasificado como medio";
 choices[23][1] = "Solo podemos tener estos datos si existe consentimiento expreso de los afectados.";
 choices[23][2] = "Al no ser un partido pol&iacute;tico o sindicato no podemos tener este tipo de datos";
 choices[23][3] = "Solo podemos tener estos datos si existe consentimiento expreso y por escrito de los afectados o somos un partido pol&iacute;tico o sindicato";
 answers[23] = choices[23][3];
 units[23] = "29";
 comments[23] = "Id Pregunta: 4678. NULL";


//  Id pregunta: 5037 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[24]= new Array();
 choices[24][0] = "RD 153/2005, de 14 de enero";
 choices[24][1] = "RD 1553/2005, de 23 de diciembre";
 choices[24][2] = "RD 1555/2003, de 29 de mayo";
 choices[24][3] = "RD 155/2003, de 15 de septiembre";
 answers[24] = choices[24][1];
 units[24] = "30";
 comments[24] = "Id Pregunta: 5037. Examen TIC A 2007";


//  Id pregunta: 5047 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[25]= new Array();
 choices[25][0] = "24 meses";
 choices[25][1] = "5 a&ntilde;os";
 choices[25][2] = "30 meses";
 choices[25][3] = "4 a&ntilde;os";
 answers[25] = choices[25][2];
 units[25] = "30";
 comments[25] = "Id Pregunta: 5047. Examen TIC A 2007 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 5099 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Qu&eacute; actividades econ&oacute;micas NO caen dentro del &aacute;mbito de la directiva 2000/31/CE? ";
 choices[26]= new Array();
 choices[26][0] = "La radiodifusi&oacute;n de televisi&oacute;n o de radio";
 choices[26][1] = "Los servicios de transmisi&oacute;n de informaci&oacute;n a trav&eacute;s de una red de comunicaci&oacute;n";
 choices[26][2] = "La venta de mercanc&iacute;as en l&iacute;nea";
 choices[26][3] = "El env&iacute;o de comunicaciones comerciales por correo electr&oacute;nico";
 answers[26] = choices[26][0];
 units[26] = "30";
 comments[26] = "Id Pregunta: 5099. Directiva 200/31/CE, consideraci&oacute;n 18)";


//  Id pregunta: 5547 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Entre los derechos reconocidos por la Ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos NO se encuentra:";
 choices[27]= new Array();
 choices[27][0] = "El Derecho a la Igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[27][1] = "El Derecho a la Conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas, de los documentos electr&oacute;nicos que formen parte de un expediente.";
 choices[27][2] = "El Derecho a obtener los medios de identificaci&oacute;n electr&oacute;nica necesarios.";
 choices[27][3] = "El Derecho a la libre utilizaci&oacute;n de cualquier sistema de firma electr&oacute;nica.";
 answers[27] = choices[27][3];
 units[27] = "43";
 comments[27] = "Id Pregunta: 5547. NULL";


//  Id pregunta: 5556 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Respecto a la Ley 56/2007 de Medidas de Impulso de la Sociendad de la Informaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "Se enmarca dentro del Plan 2006-2010 para el desarrollo de la Sociedad de la Informaci&oacute;n y de convergencia con Europa y entre Comunidades Aut&oacute;nomas y Ciudades Aut&oacute;nomas, Plan Avanza.";
 choices[28][1] = "Modifica la Ley 34/2002 de SSI, la ley 59/2003 de FE, la ley 32/2003 General de Telecomunicaciones y la Ley  de Propiedad Intelectual, entre otras";
 choices[28][2] = "Esta Ley habilita a los Ministerios de Industria, Turismo y Comercio, y de Administraciones P&uacute;blicas, a aprobar formatos estructurados est&aacute;ndar de facturas electr&oacute;nicas.";
 choices[28][3] = "Obliga a las empresas de sectores de especial incidencia a facilitar un medio de interlocuci&oacute;n telem&aacute;tica a los usuarios con certificados reconocidos de firma electr&oacute;nica.";
 answers[28] = choices[28][2];
 units[28] = "30";
 comments[28] = "Id Pregunta: 5556. ";


//  Id pregunta: 5653 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad los sistemas de informaci&oacute;n e instalaciones deber&aacute;n someterse a una auditor&iacute;a, al menos cada dos a&ntilde;os";
 choices[29]= new Array();
 choices[29][0] = "nivel b&aacute;sico";
 choices[29][1] = "nivel medio";
 choices[29][2] = "nivel alto";
 choices[29][3] = "En ningun caso";
 answers[29] = choices[29][1];
 units[29] = "29";
 comments[29] = "Id Pregunta: 5653. ";


//  Id pregunta: 5662 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  Seg&uacute;n el Real Decreto 1720/2007, que se entiende por &quot;Fichero no automatizado&quot;";
 choices[30]= new Array();
 choices[30][0] = "Todo conjunto organizado de datos de car&aacute;cter personal, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso. ";
 choices[30][1] = "Todo conjunto de datos de car&aacute;cter personal organizado de forma no automatizada y estructurado conforme a criterios espec&iacute;ficos relativos a personas f&iacute;sicas, que permitan acceder sin esfuerzos desproporcionados a sus datos personales, ya sea aqu&eacute;l centralizado, descentralizado o repartido de forma funcional o geogr&aacute;fica";
 choices[30][2] = "Todo conjunto organizado de datos, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso. ";
 choices[30][3] = "No existe tal definici&oacute;n en el nombrado Real Decreto";
 answers[30] = choices[30][1];
 units[30] = "29";
 comments[30] = "Id Pregunta: 5662. ";


//  Id pregunta: 5664 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado";
 choices[31][1] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado o un familiar directo";
 choices[31][2] = " son universales y ser&aacute;n ejercidos por cualquier ciudadano";
 choices[31][3] = "no existen como tales derechos";
 answers[31] = choices[31][0];
 units[31] = "29";
 comments[31] = "Id Pregunta: 5664. ";


//  Id pregunta: 5714 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  La Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, determin&oacute; que el Esquema Nacional de Interoperabilidad ser&iacute;a aprobado por Real Decreto del Gobierno a propuesta de:";
 choices[32]= new Array();
 choices[32][0] = "Consejo Superior de Administraci&oacute;n Electr&oacute;nica (actual Comisi&oacute;n Estrategia TIC)";
 choices[32][1] = "Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[32][2] = "Secretar&iacute;a de Estado de Inform&aacute;tica P&uacute;blica";
 choices[32][3] = "Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 answers[32] = choices[32][3];
 units[32] = "43";
 comments[32] = "Id Pregunta: 5714. ENI ya aprobado por RD 4/2010.";


//  Id pregunta: 5773 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  De acuerdo con la LOPD, se&ntilde;ale el tipo de fichero que se incluye en el alcance de la Ley";
 choices[33]= new Array();
 choices[33][0] = "Ficheros realizados o mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 choices[33][1] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[33][2] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada. No obstante el responsable del fichero comunicar&aacute; previamente la existencia del mismo, sus caracter&iacute;sticas generales y su finalidad a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[33][3] = "Ficheros de titularidad p&uacute;blica, con la publicaci&oacute;n de la disposici&oacute;n de regulaci&oacute;n correspondiente";
 answers[33] = choices[33][3];
 units[33] = "29";
 comments[33] = "Id Pregunta: 5773. MAP 2008 A2";


//  Id pregunta: 5822 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Rel Decreto 1720/2007 de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[34]= new Array();
 choices[34][0] = "Un mes";
 choices[34][1] = "Dos meses";
 choices[34][2] = "Tres meses";
 choices[34][3] = "Seis meses";
 answers[34] = choices[34][0];
 units[34] = "29";
 comments[34] = "Id Pregunta: 5822. MAP 2008 A1";


//  Id pregunta: 6119 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  De acuerdo con la Ley 11/2007, &iquest;es posible la destrucci&oacute;n de documentos emitidos originalmente en soporte papel y de los que se haya hecho copia electr&oacute;nica?";
 choices[35]= new Array();
 choices[35][0] = "S&iacute;, la Ley lo permite, pero antes cada Administraci&oacute;n debe regular los t&eacute;rminos y condiciones de este proceso.";
 choices[35][1] = "S&iacute;, la Ley lo permite, y no hace falta regular o establecer ninguna condici&oacute;n.";
 choices[35][2] = "No, la Ley no lo permite, porque los documentos en soporte papel est&aacute;n protegidos por ser Patrimonio Hist&oacute;rico Administrativo.";
 choices[35][3] = "S&iacute;, la Ley lo permite, pero s&oacute;lo los documentos no firmados y que no reconozcan derechos subjetivos.";
 answers[35] = choices[35][0];
 units[35] = "43";
 comments[35] = "Id Pregunta: 6119. TIC A 2009";


//  Id pregunta: 6189 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[36]= new Array();
 choices[36][0] = "Cada 6 meses";
 choices[36][1] = "Cada a&ntilde;o";
 choices[36][2] = "Cada 2 a&ntilde;os";
 choices[36][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[36] = choices[36][3];
 units[36] = "43";
 comments[36] = "Id Pregunta: 6189. NULL";


//  Id pregunta: 6191 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas no est&aacute;n contempladas en el Esquema Nacional de Interoperabilidad?";
 choices[37]= new Array();
 choices[37][0] = "Digitalizaci&oacute;n de documentos";
 choices[37][1] = "Pol&iacute;tica de gesti&oacute;n de documentos";
 choices[37][2] = "Copiado aut&eacute;ntico y conversi&oacute;n de documentos";
 choices[37][3] = "Destrucci&oacute;n de documentos en soporte papel";
 answers[37] = choices[37][3];
 units[37] = "43";
 comments[37] = "Id Pregunta: 6191. Disposici&oacute;n adicional primera";


//  Id pregunta: 6194 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[38]= new Array();
 choices[38][0] = "La Administraci&oacute;n General del Estado";
 choices[38][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[38][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[38][3] = "Todas las Administraciones P&uacute;blicas";
 answers[38] = choices[38][1];
 units[38] = "43";
 comments[38] = "Id Pregunta: 6194. Articulo 1";


//  Id pregunta: 6363 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes es un principio del Esquema Nacional de Seguridad?";
 choices[39]= new Array();
 choices[39][0] = "Enfoque de soluciones de seguridad multilaterales";
 choices[39][1] = "Car&aacute;cter multidimensional de la seguridad";
 choices[39][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[39][3] = "Todos los anteriores";
 answers[39] = choices[39][2];
 units[39] = "43";
 comments[39] = "Id Pregunta: 6363. Art&iacute;culo 4 ENS";


//  Id pregunta: 6365 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  El Esquema Nacional de Seguridad establece que las l&iacute;neas de defensa han de estar constituidas por medidas de distinto tipo, &iquest;Cu&aacute;l de las siguientes no es una de ellos?";
 choices[40]= new Array();
 choices[40][0] = "Organizativa";
 choices[40][1] = "Sem&aacute;ntica";
 choices[40][2] = "L&oacute;gica";
 choices[40][3] = "F&iacute;sica";
 answers[40] = choices[40][1];
 units[40] = "43";
 comments[40] = "Id Pregunta: 6365. Art&iacute;culo 8 ENS";


//  Id pregunta: 6387 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[41]= new Array();
 choices[41][0] = "No";
 choices[41][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[41][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[41][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 6387. Art&iacute;culo 3.3 RD 1671/2009";


//  Id pregunta: 6391 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;C&oacute;mo se regula el funcionamiento del registro de funcionarios habilitados? ";
 choices[42]= new Array();
 choices[42][0] = "Mediante Orden HAP/7/2014";
 choices[42][1] = "Mediante RD 7/2014";
 choices[42][2] = "Mediante Ley Org&aacute;nica 7/2014";
 choices[42][3] = "Mediante resoluci&oacute;n de la Secretaria de Estado de Funci&oacute;n P&uacute;blica.";
 answers[42] = choices[42][0];
 units[42] = "43";
 comments[42] = "Id Pregunta: 6391. Art&iacute;culo 16 RD 1671/2009";


//  Id pregunta: 6392 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[43]= new Array();
 choices[43][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[43][1] = "Unidad administrativa suscriptora del certificado.";
 choices[43][2] = "Fechas de validez del certificado.";
 choices[43][3] = "Ninguna de las anteriores.";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6392. Art&iacute;culo 18 RD 1671/2009";


//  Id pregunta: 6397 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[44]= new Array();
 choices[44][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[44][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[44][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[44][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6397. Art&iacute;culo 53 RD 1671/2009";


//  Id pregunta: 6399 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  De acuerdo a lo dispuesto en la ley 59/2003, se&ntilde;ale la respuesta correcta";
 choices[45]= new Array();
 choices[45][0] = "Firma electr&oacute;nica, es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[45][1] = "La firma electr&oacute;nica avanzada tendr&aacute; respecto de los datos consignados en forma electr&oacute;nica el mismo valor que la firma manuscrita en relaci&oacute;n con los consignados en papel.";
 choices[45][2] = "La firma electronica avanzada es la firma electr&oacute;nica reconocida basada en un certificado reconocido y generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[45][3] = "La firma electr&oacute;nica reconocida es la firma electr&oacute;nica avanzada que permite identificar al firmante, as&iacute; como el momento de creaci&oacute;n y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede mantener bajo su exclusivo control.";
 answers[45] = choices[45][0];
 units[45] = "30";
 comments[45] = "Id Pregunta: 6399. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 6586 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Los ficheros de los operadores de comunicaciones electr&oacute;nicas, respecto de los datos de tr&aacute;fico y localizaci&oacute;n, de acuerdo a la normativa vigente de protecci&oacute;n de datos deben aplicar:";
 choices[46]= new Array();
 choices[46][0] = "S&oacute;lo medidas de seguridad de nivel medio";
 choices[46][1] = "S&oacute;lo medidas de seguridad de nivel medio y b&aacute;sico";
 choices[46][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y deben disponer de un registro de accesos";
 choices[46][3] = "Todas las respuestas anteriores son incorrectas";
 answers[46] = choices[46][2];
 units[46] = "29";
 comments[46] = "Id Pregunta: 6586. NULL";


//  Id pregunta: 7313 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Se&ntilde;ala cual de las siguientes afirmaciones sobre la Red SARA es incorrecta:";
 choices[47]= new Array();
 choices[47][0] = "Es una red privada de comunicaciones que permite transferencias seguras entre las Administraciones P&uacute;blicas";
 choices[47][1] = "La Red permite la interconexi&oacute;n de los Departamentos ministeriales, las Comunidades Aut&oacute;nomas, los Entes Locales y otros organismos p&uacute;blicos espa&ntilde;oles";
 choices[47][2] = "Contiene un enlace con la red transeuropea sTESTA";
 choices[47][3] = "Est&aacute; definida en el art&iacute;culo 31 de la Ley General de Telecomunicaciones";
 answers[47] = choices[47][3];
 units[47] = "44";
 comments[47] = "Id Pregunta: 7313. NULL";


//  Id pregunta: 8260 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[48]= new Array();
 choices[48][0] = "Funci&oacute;n diferenciada.";
 choices[48][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[48][2] = "L&iacute;neas de defensa.";
 choices[48][3] = "Continuidad de la actividad.";
 answers[48] = choices[48][3];
 units[48] = "43";
 comments[48] = "Id Pregunta: 8260. Examen TIC A1 2010";


//  Id pregunta: 8424 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[49]= new Array();
 choices[49][0] = "Medidas de protecci&oacute;n";
 choices[49][1] = "Marco organizativo";
 choices[49][2] = "Marco operacional";
 choices[49][3] = "Marco tecnol&oacute;gico";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 8424. NULL";


//  Id pregunta: 8431 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[50]= new Array();
 choices[50][0] = "AIF";
 choices[50][1] = "IDA";
 choices[50][2] = "ISA";
 choices[50][3] = "IMA";
 answers[50] = choices[50][2];
 units[50] = "30";
 comments[50] = "Id Pregunta: 8431. ";


//  Id pregunta: 8749 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[51]= new Array();
 choices[51][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[51][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[51][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[51][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[51] = choices[51][1];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8749. Examen TIC A2 2010 interna";


//  Id pregunta: 8902 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;les de los siguientes tipos de ficheros est&aacute;n amparados por la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?:";
 choices[52]= new Array();
 choices[52][0] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[52][1] = "El fichero de clientes de una empresa de telecomunicaciones que da servicio de telefon&iacute;a y acceso a Internet.";
 choices[52][2] = "Los ficheros mantenidos por personas f&iacute;sicas a t&iacute;tulo exclusivamente personal o dom&eacute;stico.";
 choices[52][3] = "Ninguno de los anteriores";
 answers[52] = choices[52][1];
 units[52] = "29";
 comments[52] = "Id Pregunta: 8902. Operador Ayto. Madrid 2010";


//  Id pregunta: 8936 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[53]= new Array();
 choices[53][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[53][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[53][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[53][3] = "En uno de los dos";
 answers[53] = choices[53][3];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8936. ";


//  Id pregunta: 8946 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes medidas se debe aplicar en un sistema de informaci&oacute;n de categor&iacute;a alta seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[54]= new Array();
 choices[54][0] = "Previsi&oacute;n de la provisi&oacute;n del servicio por medios alternativos en caso de indisponibilidad del servicio contratado";
 choices[54][1] = "Asignar un identificador singular para cada entidad que accede al sistema";
 choices[54][2] = "Cifrado de la  informaci&oacute;n tanto durante su almacenamiento como durante su transmisi&oacute;n";
 choices[54][3] = "Todas las anteriores";
 answers[54] = choices[54][1];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8946. ";


//  Id pregunta: 8949 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;A qui&eacute;n corresponde aprobar la relaci&oacute;n de prestadores de servicios de certificaci&oacute;n admitidos?";
 choices[55]= new Array();
 choices[55][0] = "Al Ministerio de Industria Turismo y Comercio";
 choices[55][1] = "Al Ministerio de la Presidencia";
 choices[55][2] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[55][3] = "Ninguna de las anteriores es cierta";
 answers[55] = choices[55][3];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8949. ";


//  Id pregunta: 8975 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[56]= new Array();
 choices[56][0] = "...gasto alguno para el afectado&rdquo;";
 choices[56][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[56][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[56][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[56] = choices[56][2];
 units[56] = "29";
 comments[56] = "Id Pregunta: 8975. ";


//  Id pregunta: 9061 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no es una infracci&oacute;n grave seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[57]= new Array();
 choices[57][0] = "No remitir a la Agencia de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo";
 choices[57][1] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal por parte del responsable del fichero";
 choices[57][2] = "La obstrucci&oacute;n al ejercicio de la funci&oacute;n inspectora";
 choices[57][3] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos no hayan sido recabados del propio interesado";
 answers[57] = choices[57][0];
 units[57] = "29";
 comments[57] = "Id Pregunta: 9061. NULL";


//  Id pregunta: 9088 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[58]= new Array();
 choices[58][0] = "Estar documentado correctamente";
 choices[58][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[58][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[58][3] = "Ser original";
 answers[58] = choices[58][3];
 units[58] = "36";
 comments[58] = "Id Pregunta: 9088. ";


//  Id pregunta: 9541 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[59]= new Array();
 choices[59][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[59][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[59][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[59][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[59] = choices[59][3];
 units[59] = "30";
 comments[59] = "Id Pregunta: 9541. Examen TIC A1 2011	";


//  Id pregunta: 9548 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[60]= new Array();
 choices[60][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[60][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[60][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[60][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[60] = choices[60][3];
 units[60] = "30";
 comments[60] = "Id Pregunta: 9548. Ley 59/2003, art&iacute;culo 23";


//  Id pregunta: 9582 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[61]= new Array();
 choices[61][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[61][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[61][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[61][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[61] = choices[61][1];
 units[61] = "43, 74";
 comments[61] = "Id Pregunta: 9582. Examen TIC A1 2011";


//  Id pregunta: 9585 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  El Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica define la interoperabilidad sem&aacute;ntica como:";
 choices[62]= new Array();
 choices[62][0] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[62][1] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[62][2] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[62][3] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[62] = choices[62][1];
 units[62] = "43";
 comments[62] = "Id Pregunta: 9585. Examen TIC A1 2011";


//  Id pregunta: 9589 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  El Real Decreto 1671/2009 obliga a incluir unos contenidos m&iacute;nimos en los certificados de sello electr&oacute;nico, entre los que NO se incluye:";
 choices[63]= new Array();
 choices[63][0] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n sello electr&oacute;nico.";
 choices[63][1] = "Actuaciones y procedimientos en los que podr&aacute; ser utilizado. ";
 choices[63][2] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor. ";
 choices[63][3] = "Nombre del suscriptor.";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 9589. Examen TIC A2 2011";


//  Id pregunta: 9806 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  De las siguientes opciones se&ntilde;alar cu&aacute;l forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:";
 choices[64]= new Array();
 choices[64][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[64][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas. ";
 choices[64][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica. ";
 choices[64][3] = "Carta de servicios electr&oacute;nicos.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9806. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[65]= new Array();
 choices[65][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[65][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[65][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[65][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 10153. ";


//  Id pregunta: 10157 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[66]= new Array();
 choices[66][0] = "Los recursos reutilizables estar&aacute;n identificados mediante referencias &uacute;nicas y un&iacute;vocas, basadas en identificadores de recursos uniformes (URI).";
 choices[66][1] = "Se usar&aacute;n est&aacute;ndares abiertos o de uso generalizado por la ciudadan&iacute;a, ci&ntilde;&eacute;ndose a lo establecido en la NTI de Cat&aacute;logo de Est&aacute;ndares. ";
 choices[66][2] = "Los datos se encontrar&aacute;n agregados para facilitar la reutilizaci&oacute;n.";
 choices[66][3] = "Para facilitar la reutilizaci&oacute;n de vocabularios se utilizar&aacute; el Centro de Interoperabilidad Sem&aacute;ntica";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 10157. ";


//  Id pregunta: 10158 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  El servicio que da respuesta a la implementaci&oacute;n de la medida CORA 3.00.002.8, &quot;Concentraci&oacute;n de la gesti&oacute;n, producci&oacute;n, impresi&oacute;n y distribuci&oacute;n de las notificaciones y comunicaciones postales en centros de impresi&oacute;n y ensobrado con dimensi&oacute;n &oacute;ptima&quot; se denomina:";
 choices[67]= new Array();
 choices[67][0] = "SNE";
 choices[67][1] = "NoTe";
 choices[67][2] = "Notific@";
 choices[67][3] = "GESNOTE";
 answers[67] = choices[67][2];
 units[67] = "44";
 comments[67] = "Id Pregunta: 10158. ";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Cuando sea preciso recabar el consentimiento del interesado para tratar sus datos personales:";
 choices[68]= new Array();
 choices[68][0] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, s&oacute;lo en el caso de los datos especialmente protegidos";
 choices[68][1] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y durante un periodo m&aacute;ximo de 12 meses";
 choices[68][2] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y mientras dure dicho tratamiento";
 choices[68][3] = "No ser&aacute; necesario que el responsable del tratamiento pruebe la existencia del consentimiento para el mismo";
 answers[68] = choices[68][2];
 units[68] = "29";
 comments[68] = "Id Pregunta: 10253. Art&iacute;culo 12.3 del RD 1720/2007";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  En cuanto al tratamiento de  datos personales de menores";
 choices[69]= new Array();
 choices[69][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[69][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[69][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[69][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[69] = choices[69][3];
 units[69] = "29";
 comments[69] = "Id Pregunta: 10254. Art&iacute;culo 13.1 del RD 1720/2007";


//  Id pregunta: 10255 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Seg&uacute;n el art&iacute;culo 10 de la Ley 15/1999, LOPD, el deber de secreto: ";
 choices[70]= new Array();
 choices[70][0] = "Afecta a todos los que intervengan en el tratamiento de datos, por tiempo indefinido";
 choices[70][1] = "Afecta a todos los que intervengan en el tratamiento de datos, s&oacute;lo mientras dure dicho tratamiento";
 choices[70][2] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, por tiempo indefinido";
 choices[70][3] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, s&oacute;lo mientras dure dicho tratamiento";
 answers[70] = choices[70][0];
 units[70] = "29";
 comments[70] = "Id Pregunta: 10255. Art&iacute;culo 10 de la Ley 15/1999";


//  Id pregunta: 10256 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[71]= new Array();
 choices[71][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[71][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[71][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[71][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[71] = choices[71][1];
 units[71] = "29";
 comments[71] = "Id Pregunta: 10256. Art&iacute;culo 11.2 d) de la Ley 15/1999";


//  Id pregunta: 10342 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta incorrecta:";
 choices[72]= new Array();
 choices[72][0] = "La protecci&oacute;n de un programa de ordenador comprende tambi&eacute;n su documentaci&oacute;n preparatoria, documentaci&oacute;n t&eacute;cnica y manuales de uso";
 choices[72][1] = "La protecci&oacute;n de un programa de ordenador se extiende a cualesquiera versiones sucesivas del programa, as&iacute; como a los programas derivados";
 choices[72][2] = "La protecci&oacute;n mediante los derechos de autor incluye las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador incluidos los que sirven de fundamento a sus interfaces";
 choices[72][3] = "Si un programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la Ley de Propiedad Industrial";
 answers[72] = choices[72][2];
 units[72] = "36";
 comments[72] = "Id Pregunta: 10342. Consultar Art. 96 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10575 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Son mecanismos que facilitan la interoperabilidad:";
 choices[73]= new Array();
 choices[73][0] = "SCSP, SIR, SOAP y REST.";
 choices[73][1] = "SCSP, SIR y SAML.";
 choices[73][2] = "A y B son correctas.";
 choices[73][3] = "A y B son incorrectas.";
 answers[73] = choices[73][2];
 units[73] = "44";
 comments[73] = "Id Pregunta: 10575. ";


//  Id pregunta: 10577 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  El Esquema Nacional de Interoperabilidad:";
 choices[74]= new Array();
 choices[74][0] = "Incluye criterios y recomendaciones de seguridad.";
 choices[74][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[74][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[74][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[74] = choices[74][0];
 units[74] = "44";
 comments[74] = "Id Pregunta: 10577. Art&iacute;culo 42, Ley 11/2007.";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  La red SARA:";
 choices[75]= new Array();
 choices[75][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[75][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[75][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[75][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[75] = choices[75][3];
 units[75] = "44";
 comments[75] = "Id Pregunta: 10578. ";


//  Id pregunta: 10579 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n el criterio de subsidiariedad a la hora de implantar una infraestructura com&uacute;n, es m&aacute;s conveniente:";
 choices[76]= new Array();
 choices[76][0] = "Forzar su utilizaci&oacute;n por todos los entes implicados.";
 choices[76][1] = "Establecer su uso como voluntario.";
 choices[76][2] = "Recomendar la utizaci&oacute;n parcial de la infraestructura.";
 choices[76][3] = "Ninguna de las anteriores.";
 answers[76] = choices[76][1];
 units[76] = "44";
 comments[76] = "Id Pregunta: 10579. ";


//  Id pregunta: 10684 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:";
 choices[77]= new Array();
 choices[77][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[77][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[77][2] = "Ambas";
 choices[77][3] = "Ninguna de las anteriores.";
 answers[77] = choices[77][2];
 units[77] = "30";
 comments[77] = "Id Pregunta: 10684. ";


//  Id pregunta: 10698 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La Norma T&eacute;cnica de Interoperabilidad de documento electr&oacute;nico es aplicable a:";
 choices[78]= new Array();
 choices[78][0] = "Documentos administrativos electr&oacute;nicos.";
 choices[78][1] = "Cualquier otro documento electr&oacute;nico susceptible de formar parte de un expediente electr&oacute;nico.";
 choices[78][2] = "Ambos (los dos anteriores).";
 choices[78][3] = "Todo documento en poder de la administraci&oacute;n.";
 answers[78] = choices[78][2];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10698. ";


//  Id pregunta: 10704 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  En el intercambio de expedientes electr&oacute;nicos seg&uacute;n lo establecido en la NTI de documento electr&oacute;nico.";
 choices[79]= new Array();
 choices[79][0] = "Primero se env&iacute;a el esquemas XML para intercambio de expedientes electr&oacute;nicos y posteriormente los documentos.";
 choices[79][1] = "Primero se env&iacute;an los documentos y despu&eacute;s los esquemas XML para intercambio de expedientes electr&oacute;nicos.";
 choices[79][2] = "Es indiferente el orden de env&iacute;o.";
 choices[79][3] = "Se env&iacute;an &uacute;nicamente los documentos ya que los esquemas XML est&aacute;n contenidos en dichos documentos.";
 answers[79] = choices[79][0];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10704. ";


//  Id pregunta: 10718 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Qui&eacute;n no es un actor involucrado en el proceso de creaci&oacute;n y validaci&oacute;n de una firma electr&oacute;nica seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[80]= new Array();
 choices[80][0] = "Firmante";
 choices[80][1] = "Receptor";
 choices[80][2] = "Verificador";
 choices[80][3] = "PSC";
 answers[80] = choices[80][1];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10718. ";


//  Id pregunta: 10734 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l es el &aacute;mbito de amplicaci&oacute;n de la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "Administraci&oacute;n General del Estado";
 choices[81][1] = "Administraci&oacute;n General del Estado y Comunidades Aut&oacute;nom&aacute;s";
 choices[81][2] = "Cualquier &oacute;rgano de la Administraci&oacute;n p&uacute;blica";
 choices[81][3] = "Cualquier &oacute;rgano de la Administraci&oacute;n p&uacute;blica o Entidad de Derecho P&uacute;blico vinculada o dependiente";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10734. ";


//  Id pregunta: 10753 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l no se una l&iacute;nea de acci&oacute;n de la Estrategia de Ciberseguridad Nacional?";
 choices[82]= new Array();
 choices[82][0] = "Capacidad de prevenci&oacute;n, detecci&oacute;n, respuesta y recuperaci&oacute;n ante las ciberamenazas.";
 choices[82][1] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Administraciones P&uacute;blicas.";
 choices[82][2] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Infraestructuras Cr&iacute;ticas.";
 choices[82][3] = "Colaboraci&oacute;n con las entidades privadas para establecer un marco de seguridad nacional.";
 answers[82] = choices[82][3];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10753. ";


//  Id pregunta: 10756 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;C&oacute;mo se denomina la Comisi&oacute;n Delegada del Gobierno para la Seguridad Nacional que asiste al Presidente del Gobierno en la direcci&oacute;n de la Pol&iacute;tica de Seguridad Nacional?";
 choices[83]= new Array();
 choices[83][0] = "El Consejo de Seguridad Nacional.";
 choices[83][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[83][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[83][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10756. ";


//  Id pregunta: 10760 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Qu&eacute; serie CCN-STIC establece las pol&iacute;ticas y procedimientos adecuados para la implementaci&oacute;n de las medidas contempladas en el Esquema Nacional de Seguridad?";
 choices[84]= new Array();
 choices[84][0] = "500";
 choices[84][1] = "600";
 choices[84][2] = "700";
 choices[84][3] = "800";
 answers[84] = choices[84][3];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10760. ";


//  Id pregunta: 10778 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[85]= new Array();
 choices[85][0] = "6 meses.";
 choices[85][1] = "1 a&ntilde;o.";
 choices[85][2] = "2 a&ntilde;os.";
 choices[85][3] = "5 a&ntilde;os.";
 answers[85] = choices[85][1];
 units[85] = "29";
 comments[85] = "Id Pregunta: 10778. Examen GSI 2014";


//  Id pregunta: 10784 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Se&ntilde;ale la opci&oacute;n correcta dentro de la siguiente relaci&oacute;n de infraestructura/servicio com&uacute;n de la Administraci&oacute;n y su definici&oacute;n:";
 choices[86]= new Array();
 choices[86][0] = "ORVE - Soluci&oacute;n integral de registro para organismos p&uacute;blicos, que cubre la gesti&oacute;n tanto de sus oficinas de registro como de las unidades tramitadoras destinatarias de la documentaci&oacute;n.";
 choices[86][1] = "Sistema de informaci&oacute;n REINA - proporciona un Inventario unificado y com&uacute;n a toda la Administraci&oacute;n de las unidades org&aacute;nicas / organismos p&uacute;blicos, sus oficinas asociadas y unidades de gesti&oacute;n econ&oacute;mica - presupuestaria, facilitando el mantenimiento distribuido y corresponsable de la informaci&oacute;n.";
 choices[86][2] = "GEISER - Permite a las diferentes Administraciones P&uacute;blicas consultar y gestionar los apoderamientos otorgados por un ciudadano para sus procedimientos.";
 choices[86][3] = "CIRCABC - Herramienta de trabajo en grupo basada en tecnolog&iacute;as de Internet y en software de fuentes abiertas desarrollada por el Programa ISA de la Comisi&oacute;n de la Comunidad Europea y dirigido a necesidades de las Administraciones P&uacute;blicas, Ciudadanos y Empresas.";
 answers[86] = choices[86][3];
 units[86] = "44";
 comments[86] = "Id Pregunta: 10784. Examen GSI 2014";


//  Id pregunta: 10951 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Respecto a los requisitos a cumplir en la digitalizaci&oacute;n de documentos establecidos por la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos es correcto que:";
 choices[87]= new Array();
 choices[87][0] = "El nivel de resoluci&oacute;n m&aacute;ximo para im&aacute;genes electr&oacute;nicas ser&aacute; de 200 p&iacute;xeles por pulgada, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 choices[87][1] = "La imagen electr&oacute;nica se podr&aacute; optimizar para garantizar su legibilidad, de modo que todo contenido del documento origen pueda apreciarse y sea v&aacute;lido para su gesti&oacute;n.";
 choices[87][2] = "La imagen electr&oacute;nica podr&aacute; contener caracteres o gr&aacute;ficos, siempre que sean incorporados por el funcionario responsable del expediente y adecuadamente identificados mediante sello oficial.";
 choices[87][3] = "La digitalizaci&oacute;n de un documento implicar&aacute;, en todos los casos, la asignaci&oacute;n de los metadatos m&iacute;nimos obligatorios definidos en la Norma T&eacute;cnica de Interoperabilidad de Documento Electr&oacute;nico y la firma de la imagen electr&oacute;nica.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10951. TIC A1 AGE 2014";


//  Id pregunta: 11008 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El proyecto SCSP, del Ministerio de Hacienda y Administraciones P&uacute;blicas:";
 choices[88]= new Array();
 choices[88][0] = "Es un conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel.";
 choices[88][1] = "Es un cat&aacute;logo de interfaces de interoperabilidad para el consumo de datos del Directorio Com&uacute;n de Organismos y Oficinas.";
 choices[88][2] = "Permite la conexi&oacute;n en tiempo real de m&uacute;ltiples salas de videconferencia.";
 choices[88][3] = "Es un diagramador de procedimientos administrativos, para su integraci&oacute;n en las sedes electr&oacute;nicas.";
 answers[88] = choices[88][0];
 units[88] = "44";
 comments[88] = "Id Pregunta: 11008. TIC A1 AGE 2014";


//  Id pregunta: 11016 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;En cu&aacute;ntos cap&iacute;tulos se estructura el RD 4/2010 (ENI)?";
 choices[89]= new Array();
 choices[89][0] = "8";
 choices[89][1] = "10";
 choices[89][2] = "11";
 choices[89][3] = "12";
 answers[89] = choices[89][3];
 units[89] = "30";
 comments[89] = "Id Pregunta: 11016. ";


//  Id pregunta: 11118 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes no es un derecho de los ciudadanos de acuerdo con la ley 11/2007?";
 choices[90]= new Array();
 choices[90][0] = "A relacionarse directamente con las AAPP.";
 choices[90][1] = "A no aportar datos y documentos que obren en poder de las Administraciones P&uacute;blicas";
 choices[90][2] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicos de los documentos electr&oacute;nicos que formen parte de un expediente por duplicado";
 choices[90][3] = "A elegir en cada momento el canal a trav&eacute;s del cual se relacionen con la Administraci&oacute;n";
 answers[90] = choices[90][2];
 units[90] = "43";
 comments[90] = "Id Pregunta: 11118. ";


//  Id pregunta: 11121 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;En qu&eacute; situaci&oacute;n pueden las AAPP establecer la obligatoriedad de comunicarse con ellas utilizando s&oacute;lo medios electr&oacute;nicos?";
 choices[91]= new Array();
 choices[91][0] = "Nunca";
 choices[91][1] = "&Uacute;nicamente cuando los interesados sean personas jur&iacute;dicas";
 choices[91][2] = "Cuando los interesados sean personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[91][3] = "En todo caso";
 answers[91] = choices[91][2];
 units[91] = "43";
 comments[91] = "Id Pregunta: 11121. ";


//  Id pregunta: 11195 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento inteligente?";
 choices[92]= new Array();
 choices[92][0] = "Juventud en movimiento";
 choices[92][1] = "Uni&oacute;n por la innovaci&oacute;n";
 choices[92][2] = "Agenda Digital para Europa";
 choices[92][3] = "Todas las anteriores";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11195. ";


//  Id pregunta: 11206 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Agenda digital Europea, &iquest;cu&aacute;l es el objetivo de las redes ultrarr&aacute;pidas debe alcanzarse en el conjunto de la uni&oacute;n europea en 2020?";
 choices[93]= new Array();
 choices[93][0] = "0.5";
 choices[93][1] = "0.8";
 choices[93][2] = "0.9";
 choices[93][3] = "1";
 answers[93] = choices[93][0];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11206. ";


//  Id pregunta: 11212 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[94]= new Array();
 choices[94][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[94][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[94][2] = "Los dos anteriores son verdaderos";
 choices[94][3] = "Todas las respuestas son falsas";
 answers[94] = choices[94][2];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11212. ";


//  Id pregunta: 11596 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[95]= new Array();
 choices[95][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[95][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[95][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[95][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11596. ";


//  Id pregunta: 11598 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El derecho y obligaci&oacute;n de relacionarse electr&oacute;nicamente con las Administraciones P&uacute;blicas se recoge en la Ley 39/2015 en el: ";
 choices[96]= new Array();
 choices[96][0] = "Art&iacute;culo 4";
 choices[96][1] = "Art&iacute;culo 6";
 choices[96][2] = "Art&iacute;culo 10";
 choices[96][3] = "Art&iacute;culo 14";
 answers[96] = choices[96][3];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11598. ";


//  Id pregunta: 11744 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; dimensi&oacute;n de seguridad es obligatoria de evaluar para el responsable del servicio?&nbsp;  ";
 choices[97]= new Array();
 choices[97][0] = "autenticacion";
 choices[97][1] = "trazabilidad";
 choices[97][2] = "integridad";
 choices[97][3] = "disponibilidad";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11744. ";


//  Id pregunta: 11762 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es la DTIC?";
 choices[98]= new Array();
 choices[98][0] = "Direcci&oacute;n General de las TI.";
 choices[98][1] = "Direcci&oacute;n con rango de Subsecretar&iacute;a.";
 choices[98][2] = "Subdirecci&oacute;n General de las TI";
 choices[98][3] = "Comit&eacute; t&eacute;cnico de las TI.";
 answers[98] = choices[98][1];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11762. ";


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


