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

//  Id pregunta: 10517 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[0]= new Array();
 choices[0][0] = "la Administraci&oacute;n General del Estado";
 choices[0][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[0][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[0][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[0] = choices[0][3];
 units[0] = "7";
 comments[0] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[1]= new Array();
 choices[1][0] = "Son vinculantes solamente.";
 choices[1][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[1][2] = "Son preceptivos y vinculantes.";
 choices[1][3] = "Son preceptivos y no vinculantes.";
 answers[1] = choices[1][1];
 units[1] = "5";
 comments[1] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[2]= new Array();
 choices[2][0] = "Consejos y Servicios.";
 choices[2][1] = "Servicios permanentes y no permanentes.";
 choices[2][2] = "Direcciones Generales.";
 choices[2][3] = "Direcciones ministeriales.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10318. UNION EUROPEA";


//  Id pregunta: 10177 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[3]= new Array();
 choices[3][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[3][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[3][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[3][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[4]= new Array();
 choices[4][0] = "Dos Cap&iacute;tulos.";
 choices[4][1] = "Tres Cap&iacute;tulos.";
 choices[4][2] = "Un Cap&iacute;tulo.";
 choices[4][3] = "Cuatro Cap&iacute;tulos.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10538 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[5]= new Array();
 choices[5][0] = "los registros mercantiles";
 choices[5][1] = "los registros de la propiedad";
 choices[5][2] = "los protocolos notariales";
 choices[5][3] = "todas son correctas";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10657 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; es el machine learning?";
 choices[6]= new Array();
 choices[6][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[6][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[6][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[6][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[6] = choices[6][0];
 units[6] = "73";
 comments[6] = "Id Pregunta: 10657. ";


//  Id pregunta: 10300 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[7]= new Array();
 choices[7][0] = "La Comisi&oacute;n.";
 choices[7][1] = "El Consejo de Europa.";
 choices[7][2] = "El Consejo Europeo.";
 choices[7][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10106 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[8]= new Array();
 choices[8][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[8][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[8][2] = "A) y B) son verdaderas";
 choices[8][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[8] = choices[8][2];
 units[8] = "73";
 comments[8] = "Id Pregunta: 10106. ";


//  Id pregunta: 10331 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[9]= new Array();
 choices[9][0] = "90";
 choices[9][1] = "50";
 choices[9][2] = "64";
 choices[9][3] = "60";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10124 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[10]= new Array();
 choices[10][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[10][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[10][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[10][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[10] = choices[10][0];
 units[10] = "22";
 comments[10] = "Id Pregunta: 10124. ";


//  Id pregunta: 10229 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[11]= new Array();
 choices[11][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[11][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[11][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[11][3] = "A las Diputaciones y a las Comarcas.";
 answers[11] = choices[11][3];
 units[11] = "1";
 comments[11] = "Id Pregunta: 10229. CONSTITUCION1978";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[12]= new Array();
 choices[12][0] = "absoluta de las Cortes Generales.";
 choices[12][1] = "absoluta del Congreso de los Diputados.";
 choices[12][2] = "simple de las Cortes Generales.";
 choices[12][3] = "simple del Congreso de los Diputados.";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[13]= new Array();
 choices[13][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[13][1] = "La delimitaci&oacute;n de su territorio.";
 choices[13][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[13][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 10228. CONSTITUCION1978";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[14]= new Array();
 choices[14][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[14][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[14][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[14] = choices[14][1];
 units[14] = "89";
 comments[14] = "Id Pregunta: 10619. Junta de Extremadura A1 2015";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[15]= new Array();
 choices[15][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[15][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[15][2] = "a y b son correctas";
 choices[15][3] = "a y b son incorrectas";
 answers[15] = choices[15][0];
 units[15] = "7";
 comments[15] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10011 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[16]= new Array();
 choices[16][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[16][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[16][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[16][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[16] = choices[16][1];
 units[16] = "64";
 comments[16] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10025 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[17]= new Array();
 choices[17][0] = "SessionBean";
 choices[17][1] = "JavaBean";
 choices[17][2] = "MBeans";
 choices[17][3] = "MessageDrivenBean";
 answers[17] = choices[17][2];
 units[17] = "64";
 comments[17] = "Id Pregunta: 10025. AGE A1 2015";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[18]= new Array();
 choices[18][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[18][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[18][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[18][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[18] = choices[18][1];
 units[18] = "43";
 comments[18] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10488 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[19]= new Array();
 choices[19][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[19][1] = "El Gobierno.";
 choices[19][2] = "El Presidente del Gobierno.";
 choices[19][3] = "El Consejo de Ministros.";
 answers[19] = choices[19][1];
 units[19] = "10";
 comments[19] = "Id Pregunta: 10488. PRESUPUESTOS GENERALES";


//  Id pregunta: 10232 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[20]= new Array();
 choices[20][0] = "El Presidente del Senado.";
 choices[20][1] = "El Defensor del Pueblo.";
 choices[20][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[20][3] = "El Presidente del Gobierno.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10232. CONSTITUCION1978";


//  Id pregunta: 10623 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[21]= new Array();
 choices[21][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[21][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[21][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[21][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[21] = choices[21][0];
 units[21] = "65";
 comments[21] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10093 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[22]= new Array();
 choices[22][0] = "Almacenamiento orientado a columnas";
 choices[22][1] = "Framework MapReduce";
 choices[22][2] = "OLTP";
 choices[22][3] = "Bases de datos clave-valor";
 answers[22] = choices[22][2];
 units[22] = "73";
 comments[22] = "Id Pregunta: 10093. AGE A1 2015";


//  Id pregunta: 10405 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[23]= new Array();
 choices[23][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[23][1] = "Directiva 2004/113/CE del Consejo.";
 choices[23][2] = "Todas son correctas.";
 choices[23][3] = "Todas son falsas.";
 answers[23] = choices[23][2];
 units[23] = "14";
 comments[23] = "Id Pregunta: 10405. POLITICAS DE IGUALDAD";


//  Id pregunta: 10046 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[24]= new Array();
 choices[24][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[24][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[24][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[24][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[24] = choices[24][1];
 units[24] = "76";
 comments[24] = "Id Pregunta: 10046. AGE A1 2015";


//  Id pregunta: 10337 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[25]= new Array();
 choices[25][0] = "732";
 choices[25][1] = "626";
 choices[25][2] = "786";
 choices[25][3] = "360";
 answers[25] = choices[25][2];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10337. UNION EUROPEA";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[26]= new Array();
 choices[26][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[26][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[26][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[26][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[26] = choices[26][2];
 units[26] = "17";
 comments[26] = "Id Pregunta: 10556. Mercado &Uacute;nico Digital";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[27]= new Array();
 choices[27][0] = "El Parlamento Europeo.";
 choices[27][1] = "Todas las respuestas son correctas.";
 choices[27][2] = "La Comisi&oacute;n Europea.";
 choices[27][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 10353. UNION EUROPEA";


//  Id pregunta: 10565 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[28]= new Array();
 choices[28][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[28][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[28][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[28][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[28] = choices[28][3];
 units[28] = "12";
 comments[28] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[29]= new Array();
 choices[29][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[29][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[29][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[29][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[29] = choices[29][2];
 units[29] = "26";
 comments[29] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10634 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[30]= new Array();
 choices[30][0] = "El nombre y el tipo de correspondencia.";
 choices[30][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[30][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[30][3] = "El nombre y el grado.";
 answers[30] = choices[30][1];
 units[30] = "85";
 comments[30] = "Id Pregunta: 10634. Junta de Extremadura A1 2015";


//  Id pregunta: 10391 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[31]= new Array();
 choices[31][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[31][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[31][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[31][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10391. POLITICAS DE IGUALDAD";


//  Id pregunta: 10260 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[32]= new Array();
 choices[32][0] = "117.5";
 choices[32][1] = "117.1";
 choices[32][2] = "116";
 choices[32][3] = "15";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10260. CONSTITUCION1978";


//  Id pregunta: 10015 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[33]= new Array();
 choices[33][0] = "0";
 choices[33][1] = "1";
 choices[33][2] = "Tantos como peticiones concurrentes tenga.";
 choices[33][3] = "Tantos como le permita la memoria de la JVM.";
 answers[33] = choices[33][1];
 units[33] = "64";
 comments[33] = "Id Pregunta: 10015. AGE A1 2015";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[34]= new Array();
 choices[34][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[34][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[34][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[34][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 10253. CONSTITUCION1978";


//  Id pregunta: 10618 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[35][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[35][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[35][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[35] = choices[35][2];
 units[35] = "85";
 comments[35] = "Id Pregunta: 10618. Junta de Extremadura A1 2015";


//  Id pregunta: 10387 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[36][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[36][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[36][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[36] = choices[36][3];
 units[36] = "14";
 comments[36] = "Id Pregunta: 10387. POLITICAS DE IGUALDAD";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[37]= new Array();
 choices[37][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[37][1] = "Pasivos financieros y transferencias de capital.";
 choices[37][2] = "Activos financieros y pasivos financieros.";
 choices[37][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10568 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[38]= new Array();
 choices[38][0] = "Alrededor de un 26% del PIB";
 choices[38][1] = "Alrededor de un 11% del PIB";
 choices[38][2] = "Alrededor de un 34% del PIB";
 choices[38][3] = "Alrededor de un 7% del PIB";
 answers[38] = choices[38][1];
 units[38] = "12";
 comments[38] = "Id Pregunta: 10568. Modelo econ&oacute;mico";


//  Id pregunta: 10074 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[39]= new Array();
 choices[39][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[39][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[39][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[39][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[39] = choices[39][3];
 units[39] = "106";
 comments[39] = "Id Pregunta: 10074. AGE A1 2015";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[40]= new Array();
 choices[40][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[40][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[40][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[40][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10237 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[41][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[41][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[41][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10237. CONSTITUCION1978";


//  Id pregunta: 10343 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[42]= new Array();
 choices[42][0] = "23";
 choices[42][1] = "20";
 choices[42][2] = "14";
 choices[42][3] = "18";
 answers[42] = choices[42][1];
 units[42] = "5";
 comments[42] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10039 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[43]= new Array();
 choices[43][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[43][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[43][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[43][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[43] = choices[43][2];
 units[43] = "71";
 comments[43] = "Id Pregunta: 10039. AGE A1 2015";


//  Id pregunta: 10357 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[44]= new Array();
 choices[44][0] = "El Parlamento y el Consejo.";
 choices[44][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[44][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[44][3] = "La Comisi&oacute;n y el Consejo.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10411 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[45]= new Array();
 choices[45][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[45][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[45][2] = "Ninguna es correcta.";
 choices[45][3] = "A y B son correctas.";
 answers[45] = choices[45][1];
 units[45] = "14";
 comments[45] = "Id Pregunta: 10411. POLITICAS DE IGUALDAD";


//  Id pregunta: 10606 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[46]= new Array();
 choices[46][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[46][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[46][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[46][3] = "Todas las respuestas son correctas.";
 answers[46] = choices[46][1];
 units[46] = "101";
 comments[46] = "Id Pregunta: 10606. Junta de Extremadura A1 2015";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[47]= new Array();
 choices[47][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[47][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[47][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[47][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[47] = choices[47][2];
 units[47] = "53";
 comments[47] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10206 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[48]= new Array();
 choices[48][0] = "El Gobierno.";
 choices[48][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[48][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[48][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 10206. CONSTITUCION1978";


//  Id pregunta: 10644 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[49]= new Array();
 choices[49][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[49][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[49][2] = "Funcionarios e interinos.";
 choices[49][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[49] = choices[49][3];
 units[49] = "20";
 comments[49] = "Id Pregunta: 10644. Junta de Extremadura A1 2015";


//  Id pregunta: 10180 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[50]= new Array();
 choices[50][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[50][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[50][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[50][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 10180. CONSTITUCION1978";


//  Id pregunta: 10427 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[51]= new Array();
 choices[51][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[51][1] = "En el extranjero.";
 choices[51][2] = "Ninguna es correcta.";
 choices[51][3] = "Ambas son correctas.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 10427. POLITICAS DE IGUALDAD";


//  Id pregunta: 10584 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[52]= new Array();
 choices[52][0] = "Bienalmente";
 choices[52][1] = "Anualmente";
 choices[52][2] = "Semestralmente";
 choices[52][3] = "Cada cuatro a&ntilde;os";
 answers[52] = choices[52][1];
 units[52] = "19";
 comments[52] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10347 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[53]= new Array();
 choices[53][0] = "18 miembros.";
 choices[53][1] = "Ninguna es correcta.";
 choices[53][2] = "22 miembros.";
 choices[53][3] = "21 miembros.";
 answers[53] = choices[53][1];
 units[53] = "5";
 comments[53] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10648 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[54]= new Array();
 choices[54][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[54][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[54][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[54][3] = "Estos sistemas es imposible clasificarlos.";
 answers[54] = choices[54][1];
 units[54] = "119";
 comments[54] = "Id Pregunta: 10648. Junta de Extremadura A1 2015";


//  Id pregunta: 10304 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[55]= new Array();
 choices[55][0] = "Cinco a&ntilde;os.";
 choices[55][1] = "Seis a&ntilde;os.";
 choices[55][2] = "Cuatro a&ntilde;os.";
 choices[55][3] = "Tres a&ntilde;os.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10304. UNION EUROPEA";


//  Id pregunta: 10418 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[56]= new Array();
 choices[56][0] = "P&uacute;blica.";
 choices[56][1] = "Privada.";
 choices[56][2] = "A y B son correctas.";
 choices[56][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10418. POLITICAS DE IGUALDAD";


//  Id pregunta: 10552 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[57]= new Array();
 choices[57][0] = "Establecer redes de telecomunicaciones continentales";
 choices[57][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[57][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[57][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[57] = choices[57][0];
 units[57] = "17";
 comments[57] = "Id Pregunta: 10552. Mercado &Uacute;nico Digital";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[58]= new Array();
 choices[58][0] = "El servicio de teleasistencia.";
 choices[58][1] = "El servicio de ayuda a domicilio.";
 choices[58][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[58][3] = "Todas las anteriores son correctas.";
 answers[58] = choices[58][3];
 units[58] = "14";
 comments[58] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10460 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[59]= new Array();
 choices[59][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[59][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[59][2] = "La normativa reguladora de cada derecho.";
 choices[59][3] = "Ley 50/1997, del Gobierno.";
 answers[59] = choices[59][2];
 units[59] = "10";
 comments[59] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10436 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[60]= new Array();
 choices[60][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[60][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[60][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[60][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[60] = choices[60][2];
 units[60] = "43";
 comments[60] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[61][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[61][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[61][3] = "Todas las anteriores son ciertas";
 answers[61] = choices[61][3];
 units[61] = "8";
 comments[61] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10656 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[62]= new Array();
 choices[62][0] = "Cassandra";
 choices[62][1] = "Riak";
 choices[62][2] = "Avro";
 choices[62][3] = "Zookeeper";
 answers[62] = choices[62][3];
 units[62] = "73";
 comments[62] = "Id Pregunta: 10656. ";


//  Id pregunta: 10600 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[63]= new Array();
 choices[63][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[63][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[63][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[63][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[63] = choices[63][2];
 units[63] = "108";
 comments[63] = "Id Pregunta: 10600. Junta de Extremadura A1 2015";


//  Id pregunta: 10028 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[64]= new Array();
 choices[64][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[64][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[64][2] = "Crea una copia del proceso que hace la llamada.";
 choices[64][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[64] = choices[64][2];
 units[64] = "57";
 comments[64] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10384 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[65]= new Array();
 choices[65][0] = "Sean dirigidas por mujeres";
 choices[65][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[65][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[65][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[65] = choices[65][2];
 units[65] = "14";
 comments[65] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10609 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[66]= new Array();
 choices[66][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[66][1] = "Clasificaci&oacute;n por cuenta.";
 choices[66][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[66][3] = "Clasificaci&oacute;n por intercambio.";
 answers[66] = choices[66][3];
 units[66] = "56";
 comments[66] = "Id Pregunta: 10609. Junta de Extremadura A1 2015";


//  Id pregunta: 10422 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[67]= new Array();
 choices[67][0] = "El Ministerio de Igualdad.";
 choices[67][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 10422. POLITICAS DE IGUALDAD";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[68]= new Array();
 choices[68][0] = "Estrasburgo.";
 choices[68][1] = "Bruselas.";
 choices[68][2] = "Luxemburgo.";
 choices[68][3] = "Par&iacute;s.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10630 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[69]= new Array();
 choices[69][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[69][1] = "De nivel alto.";
 choices[69][2] = "De nivel medio y nivel alto.";
 choices[69][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[69] = choices[69][3];
 units[69] = "35";
 comments[69] = "Id Pregunta: 10630. Junta de Extremadura A1 2015";


//  Id pregunta: 10016 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[70][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[70][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[70][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[70] = choices[70][3];
 units[70] = "19";
 comments[70] = "Id Pregunta: 10016. AGE A1 2015";


//  Id pregunta: 10383 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[71]= new Array();
 choices[71][0] = "El Consejo Nacional de la Mujer";
 choices[71][1] = "El Consejo de la Mujer";
 choices[71][2] = "El Instituto de la Mujer";
 choices[71][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[71] = choices[71][3];
 units[71] = "14";
 comments[71] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10184 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[72]= new Array();
 choices[72][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[72][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[72][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[72][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10184. CONSTITUCION1978";


//  Id pregunta: 10321 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[73]= new Array();
 choices[73][0] = "Cincuenta y cuatro.";
 choices[73][1] = "Cincuenta.";
 choices[73][2] = "Cincuenta y cinco.";
 choices[73][3] = "Cincuenta y dos.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10321. UNION EUROPEA";


//  Id pregunta: 10250 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[74]= new Array();
 choices[74][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[74][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[74][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[74][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10250. CONSTITUCION1978";


//  Id pregunta: 10216 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[75]= new Array();
 choices[75][0] = "El Presidente del Gobierno.";
 choices[75][1] = "El Consejo de Ministros.";
 choices[75][2] = "40 Diputados.";
 choices[75][3] = "El Ministerio Fiscal.";
 answers[75] = choices[75][0];
 units[75] = "1";
 comments[75] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10258 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[76]= new Array();
 choices[76][0] = "Municipios, provincias y CCAA.";
 choices[76][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[76][2] = "En CCAA, 50 provincias y municipios.";
 choices[76][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[76] = choices[76][2];
 units[76] = "1";
 comments[76] = "Id Pregunta: 10258. CONSTITUCION1978";


//  Id pregunta: 10279 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Se&ntilde;ale la respuesta correcta:";
 choices[77]= new Array();
 choices[77][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[77][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[77][2] = "Las respuestas A y B son correctas.";
 choices[77][3] = "Las respuestas A y B son falsas.";
 answers[77] = choices[77][2];
 units[77] = "5";
 comments[77] = "Id Pregunta: 10279. UNION EUROPEA";


//  Id pregunta: 10134 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[78]= new Array();
 choices[78][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[78][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[78][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[78][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[78] = choices[78][2];
 units[78] = "12";
 comments[78] = "Id Pregunta: 10134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10415 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[79]= new Array();
 choices[79][0] = "Un informe de g&eacute;nero.";
 choices[79][1] = "La variable de sexo.";
 choices[79][2] = "La variable de edad.";
 choices[79][3] = "La variable de comportamiento.";
 answers[79] = choices[79][1];
 units[79] = "14";
 comments[79] = "Id Pregunta: 10415. POLITICAS DE IGUALDAD";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[80]= new Array();
 choices[80][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[80][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[80][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[80][3] = "Todas las anteriores son correctas.";
 answers[80] = choices[80][3];
 units[80] = "47";
 comments[80] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10562 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[81]= new Array();
 choices[81][0] = "Entre 1973 y 1978";
 choices[81][1] = "Entre 1992 y 1996";
 choices[81][2] = "Entre 1978 y 1985";
 choices[81][3] = "Entre 2008 y 2013";
 answers[81] = choices[81][2];
 units[81] = "12";
 comments[81] = "Id Pregunta: 10562. Modelo econ&oacute;mico";


//  Id pregunta: 10155 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[82]= new Array();
 choices[82][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[82][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[82][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[82][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[82] = choices[82][2];
 units[82] = "7";
 comments[82] = "Id Pregunta: 10155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 10477 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[83]= new Array();
 choices[83][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[83][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[83][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[83][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[83] = choices[83][2];
 units[83] = "10";
 comments[83] = "Id Pregunta: 10477. PRESUPUESTOS GENERALES";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Son servicios declarados compartidos:";
 choices[84]= new Array();
 choices[84][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[84][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[84][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[84][3] = "Todos los anteriores";
 answers[84] = choices[84][3];
 units[84] = "19";
 comments[84] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10120 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[85]= new Array();
 choices[85][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[85][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[85][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[85][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[85] = choices[85][3];
 units[85] = "22";
 comments[85] = "Id Pregunta: 10120. ";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[86]= new Array();
 choices[86][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[86][1] = "Solamente el Congreso.";
 choices[86][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[86][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[86] = choices[86][0];
 units[86] = "1";
 comments[86] = "Id Pregunta: 10176. CONSTITUCION1978";


//  Id pregunta: 10233 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[87]= new Array();
 choices[87][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[87][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[87][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[87][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[87] = choices[87][2];
 units[87] = "1";
 comments[87] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10024 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[88]= new Array();
 choices[88][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[88][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[88][2] = "Gestionar el Registro de Operadores.";
 choices[88][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[88] = choices[88][3];
 units[88] = "121";
 comments[88] = "Id Pregunta: 10024. AGE A1 2015";


//  Id pregunta: 10019 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[89]= new Array();
 choices[89][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[89][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[89][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[89][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[89] = choices[89][2];
 units[89] = "47";
 comments[89] = "Id Pregunta: 10019. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[90]= new Array();
 choices[90][0] = "El Presidente del Senado";
 choices[90][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[90][2] = "El Presidente del Gobierno";
 choices[90][3] = "El Presidente de las Cortes Generales";
 answers[90] = choices[90][2];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10265. CONSTITUCION1978";


//  Id pregunta: 10518 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[91]= new Array();
 choices[91][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[91][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[91][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[91][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[91] = choices[91][0];
 units[91] = "7";
 comments[91] = "Id Pregunta: 10518. LEY 39/2015";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  El plan nacional de ciudades inteligentes...";
 choices[92]= new Array();
 choices[92][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[92][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[92][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[92][3] = "No existe";
 answers[92] = choices[92][1];
 units[92] = "19";
 comments[92] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10659 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[93]= new Array();
 choices[93][0] = "Orientaci&oacute;n a objetos";
 choices[93][1] = "MapReduce";
 choices[93][2] = "Pipeline filtering";
 choices[93][3] = "Programaci&oacute;n funcional";
 answers[93] = choices[93][1];
 units[93] = "73";
 comments[93] = "Id Pregunta: 10659. ";


//  Id pregunta: 10506 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[94]= new Array();
 choices[94][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[94][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[94][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[94][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[94] = choices[94][3];
 units[94] = "10";
 comments[94] = "Id Pregunta: 10506. PRESUPUESTOS GENERALES";


//  Id pregunta: 10525 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[95]= new Array();
 choices[95][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[95][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[95][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[95][3] = "cualquiera que sea el estado del procedimiento";
 answers[95] = choices[95][3];
 units[95] = "7";
 comments[95] = "Id Pregunta: 10525. LEY 39/2015";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[96]= new Array();
 choices[96][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[96][1] = "Protecci&oacute;n de su salud.";
 choices[96][2] = "Ninguna es correcta.";
 choices[96][3] = "A y B son correctas.";
 answers[96] = choices[96][1];
 units[96] = "14";
 comments[96] = "Id Pregunta: 10430. POLITICAS DE IGUALDAD";


//  Id pregunta: 10497 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[97]= new Array();
 choices[97][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[97][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[97][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[97][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[97] = choices[97][3];
 units[97] = "10";
 comments[97] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10077 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[98]= new Array();
 choices[98][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[98][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[98][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[98][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[98] = choices[98][2];
 units[98] = "47";
 comments[98] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[99]= new Array();
 choices[99][0] = "El Presidente y su gabinete.";
 choices[99][1] = "El Presidente y sus Ministros.";
 choices[99][2] = "El Rey y el Presidente.";
 choices[99][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[99] = choices[99][2];
 units[99] = "1";
 comments[99] = "Id Pregunta: 10257. CONSTITUCION1978";


