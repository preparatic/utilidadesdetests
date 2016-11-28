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

//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[0]= new Array();
 choices[0][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[0][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[0][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[0][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[1]= "2)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[1]= new Array();
 choices[1][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[1][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[1][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[1][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[1] = choices[1][2];
 units[1] = "27";
 comments[1] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[2]= "3)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[2]= new Array();
 choices[2][0] = "Medidas de igualdad.";
 choices[2][1] = "Objetivos de igualdad.";
 choices[2][2] = "Ambas son correctas.";
 choices[2][3] = "A y B son incorrectas.";
 answers[2] = choices[2][2];
 units[2] = "14";
 comments[2] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "14";
 choices[3][1] = "11";
 choices[3][2] = "12";
 choices[3][3] = "15";
 answers[3] = choices[3][0];
 units[3] = "19";
 comments[3] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[4]= "5)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[4]= new Array();
 choices[4][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[4][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[4][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[4][3] = "Todas son correctas.";
 answers[4] = choices[4][3];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[5]= "6)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[5]= new Array();
 choices[5][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[5][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[5][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[5][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[5] = choices[5][3];
 units[5] = "86";
 comments[5] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[6]= "7)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[6]= new Array();
 choices[6][0] = "6 TB.";
 choices[6][1] = "8 TB.";
 choices[6][2] = "7 TB.";
 choices[6][3] = "4 TB.";
 answers[6] = choices[6][3];
 units[6] = "53";
 comments[6] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[7]= "8)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[7][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[7][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[7][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[7] = choices[7][3];
 units[7] = "22";
 comments[7] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[8]= "9)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[8]= new Array();
 choices[8][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[8][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[8][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[8][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[8] = choices[8][2];
 units[8] = "22";
 comments[8] = "Id Pregunta: 128. ";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Lollipop";
 choices[9][1] = "Jelly Bean";
 choices[9][2] = "Marshmallow";
 choices[9][3] = "KitKat";
 answers[9] = choices[9][2];
 units[9] = "59";
 comments[9] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[10]= new Array();
 choices[10][0] = "Varios namenodes y varios datanodes por cluster";
 choices[10][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[10][2] = "1 namenode y varios datanodes por cluster";
 choices[10][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 663. ";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[11]= new Array();
 choices[11][0] = "En 2015";
 choices[11][1] = "En 2013";
 choices[11][2] = "En 2016";
 choices[11][3] = "En 2007";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[12]= "13)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[12]= new Array();
 choices[12][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[12][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[12][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[12][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[12] = choices[12][2];
 units[12] = "1";
 comments[12] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[13]= "14)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[13]= new Array();
 choices[13][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[13][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[13][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[13][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[13] = choices[13][1];
 units[13] = "14";
 comments[13] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[14]= new Array();
 choices[14][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[14][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[14][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[14][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[14] = choices[14][1];
 units[14] = "7";
 comments[14] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[15]= "16)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[15]= new Array();
 choices[15][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[15][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[15][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[15][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[16]= "17)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[16]= new Array();
 choices[16][0] = "Conformidad";
 choices[16][1] = "Responsabilidad";
 choices[16][2] = "Adquisici&oacute;n";
 choices[16][3] = "Desempe&ntilde;o";
 answers[16] = choices[16][0];
 units[16] = "26";
 comments[16] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[17]= new Array();
 choices[17][0] = "Establecer redes de telecomunicaciones continentales";
 choices[17][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[17][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[17][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[17] = choices[17][0];
 units[17] = "17";
 comments[17] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[18]= "19)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[18]= new Array();
 choices[18][0] = "por Real Decreto";
 choices[18][1] = "reglamentariamente";
 choices[18][2] = "mediante Ley";
 choices[18][3] = "ninguna es correcta";
 answers[18] = choices[18][1];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[19]= new Array();
 choices[19][0] = "Indirecta.";
 choices[19][1] = "Directa.";
 choices[19][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[19][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[20]= new Array();
 choices[20][0] = "Cifrado de las comunicaciones";
 choices[20][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[20][2] = "Registro de los accesos";
 choices[20][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[20] = choices[20][1];
 units[20] = "35";
 comments[20] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[21]= "22)  Big Data:";
 choices[21]= new Array();
 choices[21][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[21][1] = "No puede emplearse para tratar datos no estructurados";
 choices[21][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][3];
 units[21] = "73";
 comments[21] = "Id Pregunta: 109. ";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[22]= new Array();
 choices[22][0] = "SPARQL";
 choices[22][1] = "UnQL";
 choices[22][2] = "XQUERY";
 choices[22][3] = "RQL";
 answers[22] = choices[22][0];
 units[22] = "74";
 comments[22] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[23]= new Array();
 choices[23][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[23][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[23][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[23][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[23] = choices[23][0];
 units[23] = "75";
 comments[23] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[24]= new Array();
 choices[24][0] = "Art&iacute;culo 9.1 CE.";
 choices[24][1] = "Art&iacute;culo 53 CE.";
 choices[24][2] = "Art&iacute;culo 14 CE.";
 choices[24][3] = "Art&iacute;culo 16 CE.";
 answers[24] = choices[24][2];
 units[24] = "14";
 comments[24] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[25]= "26)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[25]= new Array();
 choices[25][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[25][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[25][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[25][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[25] = choices[25][3];
 units[25] = "7";
 comments[25] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[26]= new Array();
 choices[26][0] = "Cuatro.";
 choices[26][1] = "Una.";
 choices[26][2] = "Cinco.";
 choices[26][3] = "Nueve.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[27]= "28)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[27]= new Array();
 choices[27][0] = "Sello electr&oacute;nico";
 choices[27][1] = "Sede electr&oacute;nica";
 choices[27][2] = "Servidor seguro (SSL/TLS)";
 choices[27][3] = "Empleado p&uacute;blico";
 answers[27] = choices[27][2];
 units[27] = "7";
 comments[27] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[28]= new Array();
 choices[28][0] = "Indirecta.";
 choices[28][1] = "Directa.";
 choices[28][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[28][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[28] = choices[28][1];
 units[28] = "14";
 comments[28] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[29]= "30)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[29]= new Array();
 choices[29][0] = "El derecho a un permiso.";
 choices[29][1] = "Una prestaci&oacute;n por paternidad.";
 choices[29][2] = "Ambas son correctas.";
 choices[29][3] = "18 d&iacute;as de permiso.";
 answers[29] = choices[29][2];
 units[29] = "14";
 comments[29] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[30]= "31)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[30]= new Array();
 choices[30][0] = "Municipios, provincias y CCAA.";
 choices[30][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[30][2] = "En CCAA, 50 provincias y municipios.";
 choices[30][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[31]= "32)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[31]= new Array();
 choices[31][0] = "Al Gobierno.";
 choices[31][1] = "A las Cortes Generales.";
 choices[31][2] = "Al Poder Judicial.";
 choices[31][3] = "Al Congreso de los Diputados.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[32]= new Array();
 choices[32][0] = "Crecimiento inteligente.";
 choices[32][1] = "Crecimiento inclusivo.";
 choices[32][2] = "Crecimiento sostenible.";
 choices[32][3] = "Crecimiento integrador.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[33]= "34)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[33]= new Array();
 choices[33][0] = "786 Diputados como m&aacute;ximo.";
 choices[33][1] = "600 Diputados como m&aacute;ximo.";
 choices[33][2] = "650 Diputados como m&aacute;ximo.";
 choices[33][3] = "732 Diputados como m&aacute;ximo.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[34]= "35)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[34]= new Array();
 choices[34][0] = "un &oacute;rgano superior";
 choices[34][1] = "un &oacute;rgano directivo";
 choices[34][2] = "un &oacute;rgano superior o directivo";
 choices[34][3] = "ninguna es correcta";
 answers[34] = choices[34][2];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[35]= new Array();
 choices[35][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[35][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[35][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[35][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[35] = choices[35][1];
 units[35] = "7";
 comments[35] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[36]= "37)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[36]= new Array();
 choices[36][0] = "Ejecutivo";
 choices[36][1] = "Limitativo";
 choices[36][2] = "Estimativo";
 choices[36][3] = "Progresivo";
 answers[36] = choices[36][2];
 units[36] = "10";
 comments[36] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[37]= "38)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[37]= new Array();
 choices[37][0] = "De las disposiciones favorables.";
 choices[37][1] = "De las disposiciones sancionadoras no favorables.";
 choices[37][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[37][3] = "Las respuestas b) y c) son correctas.";
 answers[37] = choices[37][3];
 units[37] = "1";
 comments[37] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[38]= new Array();
 choices[38][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[38][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[38][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[38][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[38] = choices[38][2];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[39]= "40)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[39]= new Array();
 choices[39][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[39][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[39][2] = "A y B son correctas.";
 choices[39][3] = "A y B son incorrectas.";
 answers[39] = choices[39][2];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[40]= new Array();
 choices[40][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[40][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[40][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[40][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[40] = choices[40][1];
 units[40] = "1";
 comments[40] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[41]= "42)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[41]= new Array();
 choices[41][0] = "El Presidente del Congreso de los Diputados.";
 choices[41][1] = "El Presidente del Gobierno.";
 choices[41][2] = "El Rey.";
 choices[41][3] = "El Consejo de Ministros.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[42]= "43)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[42]= new Array();
 choices[42][0] = "Tener una estructura institucional.";
 choices[42][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[42][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[42][3] = "Todas las respuestas son correctas.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[43]= "44)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[43]= new Array();
 choices[43][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[43][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[43][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[43][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[44]= new Array();
 choices[44][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[44][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[44][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][2];
 units[44] = "18, 20";
 comments[44] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[45]= "46)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[45]= new Array();
 choices[45][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[45][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[45][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[45][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[46]= "47)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[46]= new Array();
 choices[46][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[46][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[46][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[46][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[46] = choices[46][2];
 units[46] = "22";
 comments[46] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[47]= new Array();
 choices[47][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[47][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[47][2] = "Fecha de otorgamiento.";
 choices[47][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[47] = choices[47][1];
 units[47] = "43";
 comments[47] = "Id Pregunta: 447. SERVICIOS COMUNES";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[48]= "49)  ITIL v3, define:";
 choices[48]= new Array();
 choices[48][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[48][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[48][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[48][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "101";
 comments[48] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[49]= "50)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[49]= new Array();
 choices[49][0] = "la Administraci&oacute;n General del Estado";
 choices[49][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[49][2] = "las Entidades Locales";
 choices[49][3] = "todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[50]= "51)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[50]= new Array();
 choices[50][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[50][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[50][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[50][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[51]= "52)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[51]= new Array();
 choices[51][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[51][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[51][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[51][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[51] = choices[51][3];
 units[51] = "28";
 comments[51] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[52]= new Array();
 choices[52][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[52][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[52][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[52][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "92";
 comments[52] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[53]= new Array();
 choices[53][0] = "El Presidente del Gobierno.";
 choices[53][1] = "El Consejo de Ministros.";
 choices[53][2] = "40 Diputados.";
 choices[53][3] = "El Ministerio Fiscal.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[54]= new Array();
 choices[54][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[54][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[54][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[54][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[55]= "56)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[55]= new Array();
 choices[55][0] = "P&uacute;blica.";
 choices[55][1] = "Privada.";
 choices[55][2] = "A y B son correctas.";
 choices[55][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[55] = choices[55][2];
 units[55] = "14";
 comments[55] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[56]= "57)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[56]= new Array();
 choices[56][0] = "Peters";
 choices[56][1] = "Hollingsworth";
 choices[56][2] = "Manuel Castells";
 choices[56][3] = "Gaebler";
 answers[56] = choices[56][1];
 units[56] = "18, 20";
 comments[56] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[57]= new Array();
 choices[57][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[57][1] = "Directiva 2004/113/CE del Consejo.";
 choices[57][2] = "Todas son correctas.";
 choices[57][3] = "Todas son falsas.";
 answers[57] = choices[57][2];
 units[57] = "14";
 comments[57] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; es Java Web Start?";
 choices[58]= new Array();
 choices[58][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[58][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[58][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[58][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[58] = choices[58][3];
 units[58] = "64";
 comments[58] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[59]= new Array();
 choices[59][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[59][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[59][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[59][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[59] = choices[59][1];
 units[59] = "28";
 comments[59] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[60]= new Array();
 choices[60][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[60][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[60][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[60][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[60] = choices[60][2];
 units[60] = "26";
 comments[60] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[61]= "62)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[61]= new Array();
 choices[61][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[61][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[61][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[61][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[61] = choices[61][1];
 units[61] = "26";
 comments[61] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[62]= new Array();
 choices[62][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[62][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[62][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[62][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[62] = choices[62][2];
 units[62] = "19";
 comments[62] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[63][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[63][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[63][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[64]= new Array();
 choices[64][0] = "los Subsecretarios y los Secretarios generales";
 choices[64][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[64][2] = "los Secretarios de Estado y los Directores generales";
 choices[64][3] = "los Ministros y los Secretarios de Estado";
 answers[64] = choices[64][3];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[65]= "66)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[65]= new Array();
 choices[65][0] = "6 TB.";
 choices[65][1] = "5 TB.";
 choices[65][2] = "7 TB.";
 choices[65][3] = "3 TB.";
 answers[65] = choices[65][1];
 units[65] = "53";
 comments[65] = "Id Pregunta: 854. Xunta de Galicia 2015";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[66]= new Array();
 choices[66][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[66][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[66][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[66][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[67]= new Array();
 choices[67][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[67][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[67][2] = "el Ministerio del Interior";
 choices[67][3] = "la Administraci&oacute;n General del Estado";
 answers[67] = choices[67][0];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[68]= "69)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[68]= new Array();
 choices[68][0] = "Diciembre de 1987.";
 choices[68][1] = "Septiembre de 1989.";
 choices[68][2] = "Octubre de 1990.";
 choices[68][3] = "Noviembre de 1980.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[69]= "70)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[69]= new Array();
 choices[69][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[69][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[69][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[69][3] = "Estos sistemas es imposible clasificarlos.";
 answers[69] = choices[69][1];
 units[69] = "119";
 comments[69] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[70]= "71)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[70]= new Array();
 choices[70][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[70][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[70][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[70][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[71]= "72)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[71]= new Array();
 choices[71][0] = "61";
 choices[71][1] = "53";
 choices[71][2] = "65";
 choices[71][3] = "67";
 answers[71] = choices[71][1];
 units[71] = "1";
 comments[71] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; es MongoDB?";
 choices[72]= new Array();
 choices[72][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[72][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[72][2] = "Un sistema gestor de base de datos relacional.";
 choices[72][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[72] = choices[72][1];
 units[72] = "73";
 comments[72] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[73]= "74)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[73]= new Array();
 choices[73][0] = "Windows Phone";
 choices[73][1] = "Blackberry";
 choices[73][2] = "iOS";
 choices[73][3] = "Android";
 answers[73] = choices[73][3];
 units[73] = "59";
 comments[73] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[74]= "75)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Incremental, diferencial, completa";
 choices[74][1] = "Completa, incremental, diferencial";
 choices[74][2] = "Completa, diferencial, incremental";
 choices[74][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[74] = choices[74][0];
 units[74] = "53";
 comments[74] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


