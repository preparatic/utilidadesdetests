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

//  Id pregunta: 693 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El R.D. 209/2003 regula:";
 choices[0]= new Array();
 choices[0][0] = "Los registros telem&aacute;ticos";
 choices[0][1] = "Las notificaciones telem&aacute;ticas";
 choices[0][2] = "La utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[0][3] = "Todas las anteriores son correctas";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 693. ";


//  Id pregunta: 737 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Si le notifican una multa de tr&aacute;fico mediante el Servicio de Notificaciones Telem&aacute;ticas Seguras (Direcci&oacute;n Electr&oacute;nica Unica):";
 choices[1]= new Array();
 choices[1][0] = "Puede rechazar recibir la notificaci&oacute;n";
 choices[1][1] = "No puede rechazar recibir la notificaci&oacute;n";
 choices[1][2] = "Le sirve de preaviso, pero debe esperar la notificaci&oacute;n oficial por correo ordinario, o la publicaci&oacute;n de la sanci&oacute;n en el Bolet&iacute;n Oficial de la Provincia";
 choices[1][3] = "Puede reenviarla a otro buz&oacute;n electr&oacute;nico de su elecci&oacute;n";
 answers[1] = choices[1][0];
 units[1] = "30";
 comments[1] = "Id Pregunta: 737. Examen TIC MAP B 2004";


//  Id pregunta: 1509 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Respecto a la LSSICE:";
 choices[2]= new Array();
 choices[2][0] = "Son prestadores de servicios de la sociedad de la informaci&oacute;n aquellas empresas, organismos o instituciones que presten o promocionen un bien o servicio a t&iacute;tulo oneroso";
 choices[2][1] = "La ley prohibe enviar comunicaciones publicitarias por correo electr&oacute;nico que previamente no hubieran sido solicitadas o autorizadas expresamente por el destinatario";
 choices[2][2] = "El texto legal da plena validez y eficacia a los contratos celebrados por v&iacute;a electr&oacute;nica, a&uacute;n en el caso de que ninguna de las partes tenga la condici&oacute;n de prestador o destinatario de servicios de la sociedad de la informaci&oacute;n";
 choices[2][3] = "Todas las afirmaciones anteriores son correctas";
 answers[2] = choices[2][3];
 units[2] = "30";
 comments[2] = "Id Pregunta: 1509. NULL";


//  Id pregunta: 1690 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[3]= new Array();
 choices[3][0] = "Infracci&oacute;n muy grave";
 choices[3][1] = "Infracci&oacute;n grave";
 choices[3][2] = "Infracci&oacute;n leve";
 choices[3][3] = "No se considera infracci&oacute;n";
 answers[3] = choices[3][1];
 units[3] = "30";
 comments[3] = "Id Pregunta: 1690. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 1870 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  La firma electr&oacute;nica avanzada es aquella que cumple que:";
 choices[4]= new Array();
 choices[4][0] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n y est&aacute; creada por un dispositivo de control de firma seguro.";
 choices[4][1] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, est&aacute; creada por un dispositivo de control de firma seguro, tiene control exclusivo del firmante al crearla y no est&aacute; vinculada a los datos.";
 choices[4][2] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo del firmante al crearla y est&aacute; vinculada a los datos.";
 choices[4][3] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo de firmante al crearla y est&aacute; basada en un certificado reconocido.";
 answers[4] = choices[4][2];
 units[4] = "30";
 comments[4] = "Id Pregunta: 1870. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 1877 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  El &oacute;rgano encargado de la supervisi&oacute;n y control de los servicios de la Sociedad de la Informaci&oacute;n es:";
 choices[5]= new Array();
 choices[5][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[5][1] = "El Ministerio de Industria, Turismo y Comercio";
 choices[5][2] = "El Ministerio de Justicia";
 choices[5][3] = "No hay ning&uacute;n &oacute;rgano encargado de la supervisi&oacute;n y control dado que no se requiere autorizaci&oacute;n previa.";
 answers[5] = choices[5][1];
 units[5] = "30";
 comments[5] = "Id Pregunta: 1877. Ley 34/2002, art&iacute;culo 35 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 2861 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  Entre las &aacute;reas de actuaci&oacute;n del Plan Avanza no se encuentra";
 choices[6]= new Array();
 choices[6][0] = "Servicios P&uacute;blicos Digitales";
 choices[6][1] = "Educaci&oacute;n en la Era Digital";
 choices[6][2] = "Hogar e Inclusi&oacute;n de los Ciudadanos";
 choices[6][3] = "La Sanidad en la Era Digital";
 answers[6] = choices[6][3];
 units[6] = "30";
 comments[6] = "Id Pregunta: 2861. ";


//  Id pregunta: 3805 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Se entiende por firma electr&oacute;nica avanzada:";
 choices[7]= new Array();
 choices[7][0] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste mantiene bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 choices[7][1] = "Conjunto de datos, en forma electr&oacute;nica, anejos a otros datos electr&oacute;nicos o asociados funcionalmente a ellos, como medio para identificar formalmente al autor del documento que la recoge";
 choices[7][2] = "Certificaci&oacute;n electr&oacute;nica que vincula unos datos de verificaci&oacute;n de firma a un signatario y confirma su identidad";
 choices[7][3] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste puede utilizar, con un alto nivel de confianza, bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 answers[7] = choices[7][3];
 units[7] = "30";
 comments[7] = "Id Pregunta: 3805. Ley 25/2015. Disposici&oacute;n Final Cuarta. Modificaci&oacute;n de la Ley 59/2003";


//  Id pregunta: 4249 AÃ±o de creación de pregunta: 2007-01-01
 questions[8]= "9)  Una de las novedades m&aacute;s importantes de la Ley para el acceso electr&oacute;nico de los ciudadanos a las Administraciones P&uacute;blicas consiste en:";
 choices[8]= new Array();
 choices[8][0] = "Se garantiza al ciudadano el acceso a los servicios p&uacute;blicos a trav&eacute;s de Internet y por v&iacute;a telef&oacute;nica, pero no se contemplan en ning&uacute;n caso canales como tel&eacute;fono m&oacute;vil o televisi&oacute;n digital dada su baja madure";
 choices[8][1] = "Aunque existen multitud de antecedentes legislativos de impulso a la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a, por primera vez se reconoce el acceso a las AAPP por medios electr&oacute;nicos como un derecho del ciudadano.";
 choices[8][2] = "No aspira a conceder la misma validez jur&iacute;dica a las comunicaciones electr&oacute;nicas que a las que se realizan en papel.";
 choices[8][3] = "Los servicios electr&oacute;nicos que pongan en marcha las AAPP funcionar&aacute;n en horario de 8 de la ma&ntilde;ana a 8 de la tarde";
 answers[8] = choices[8][1];
 units[8] = "30";
 comments[8] = "Id Pregunta: 4249. Sobre Proyecto LAECAP";


//  Id pregunta: 4788 AÃ±o de creación de pregunta: 2007-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[9]= new Array();
 choices[9][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministrode Industria, Turismo y Comercio";
 choices[9][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[9][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la v&iacute;a administrativa";
 choices[9][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de laAgencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[9] = choices[9][2];
 units[9] = "30";
 comments[9] = "Id Pregunta: 4788. LOPD, art&iacute;culo 48";


//  Id pregunta: 4821 AÃ±o de creación de pregunta: 2007-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes infracciones NO est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, deservicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[10]= new Array();
 choices[10][0] = "El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por las comunicacionestablecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, prevista en el art&iacute;culo 12 dedicha Ley";
 choices[10][1] = "La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de losse&ntilde;alados en &eacute;l";
 choices[10][2] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o laprestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competelo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley";
 choices[10][3] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nequivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales por los mediosaludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en elart&iacute;culo 21 de dicha Ley";
 answers[10] = choices[10][3];
 units[10] = "30";
 comments[10] = "Id Pregunta: 4821. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 5029 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros telem&aacute;ticos en d&iacute;as inh&aacute;biles, seg&uacute;n el RD209/2003, de 21 de febrero:";
 choices[11]= new Array();
 choices[11][0] = "Los registros telem&aacute;ticos no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles";
 choices[11][1] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 choices[11][2] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior";
 choices[11][3] = "No se permitir&aacute; la entrada de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente laentrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;ticono se entender&aacute; efectuada";
 answers[11] = choices[11][1];
 units[11] = "30";
 comments[11] = "Id Pregunta: 5029. Examen TIC A 2007";


//  Id pregunta: 5102 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  Seg&uacute;n la ley 34/2002, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n grave?";
 choices[12]= new Array();
 choices[12][0] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene";
 choices[12][1] = "No facilitar la informaci&oacute;n a que se refiere el art&iacute;culo 27.1 (Obligaciones previas al inicio del procedimiento de contrataci&oacute;n), cuando las partes no hayan pactado su exclusi&oacute;n o el destinatario sea un consumidor";
 choices[12][2] = "El incumplimiento de lo previsto en el art. 12 bis.";
 choices[12][3] = "El incumplimiento habitual de la obligaci&oacute;n de confirmar la recepci&oacute;n de una aceptaci&oacute;n, cuando no se haya pactado su exclusi&oacute;n o el contrato se haya celebrado con un consumidor";
 answers[12] = choices[12][3];
 units[12] = "30";
 comments[12] = "Id Pregunta: 5102. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 5213 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  El Marco Europeo de Interoperabilidad 2.0 se construye sobre la base de 12 principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[13]= new Array();
 choices[13][0] = "Multiling&uuml;ismo";
 choices[13][1] = "Seguridad y privacidad";
 choices[13][2] = "Subsidiariedad y proporcionalidad";
 choices[13][3] = "Cooperaci&oacute;n intergubernamental";
 answers[13] = choices[13][3];
 units[13] = "30";
 comments[13] = "Id Pregunta: 5213. NULL";


//  Id pregunta: 5546 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos:";
 choices[14]= new Array();
 choices[14][0] = "Establece que la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n se har&aacute; de forma que no conlleve la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[14][1] = "Permite la obtenci&oacute;n de copias electr&oacute;nicas de los documentos electr&oacute;nicos de cualquier expediente electr&oacute;nico, sin restricci&oacute;n alguna.";
 choices[14][2] = "Crea la figura del Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica, encargado de inspeccionar la actuaci&oacute;n v&iacute;a medios electr&oacute;nicos, de las Administraciones P&uacute;blicas.";
 choices[14][3] = "La publicaci&oacute;n de actos y comunicaciones, que deban publicarse en tabl&oacute;n de anuncios &oacute; edictos, se realizar&aacute; &uacute;nicamente en la sede electr&oacute;nica correspondiente.";
 answers[14] = choices[14][0];
 units[14] = "43";
 comments[14] = "Id Pregunta: 5546. NULL";


//  Id pregunta: 5714 AÃ±o de creación de pregunta: 2009-01-01
 questions[15]= "16)  La Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, determin&oacute; que el Esquema Nacional de Interoperabilidad ser&iacute;a aprobado por Real Decreto del Gobierno a propuesta de:";
 choices[15]= new Array();
 choices[15][0] = "Consejo Superior de Administraci&oacute;n Electr&oacute;nica (actual Comisi&oacute;n Estrategia TIC)";
 choices[15][1] = "Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[15][2] = "Secretar&iacute;a de Estado de Inform&aacute;tica P&uacute;blica";
 choices[15][3] = "Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 answers[15] = choices[15][3];
 units[15] = "43";
 comments[15] = "Id Pregunta: 5714. ENI ya aprobado por RD 4/2010.";


//  Id pregunta: 5740 AÃ±o de creación de pregunta: 2009-01-01
 questions[16]= "17)  &iquest;Puede haber firma electr&oacute;nica reconocida que no sea avanzada?";
 choices[16]= new Array();
 choices[16][0] = "S&iacute;, si el dispositivo de creaci&oacute;n de firma es seguro";
 choices[16][1] = "S&iacute;, si se usa un certificado reconocido";
 choices[16][2] = "No, en ning&uacute;n caso";
 choices[16][3] = "S&iacute;, si lo aceptan ambas partes";
 answers[16] = choices[16][2];
 units[16] = "30";
 comments[16] = "Id Pregunta: 5740. Ley 59/2003, art&iacute;culo 3 y resto de articulado";


//  Id pregunta: 5792 AÃ±o de creación de pregunta: 2009-01-01
 questions[17]= "18)  Indique cu&aacute;l de los siguientes derechos de los ciudadanos al relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos NO est&aacute; reconocido por la ley 11/2007";
 choices[17]= new Array();
 choices[17][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[17][1] = "A conocer por medios electr&oacute;nicos el estado de tramitaci&oacute;n de cualquier procedimiento administrativo.";
 choices[17][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[17][3] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas de los documentos electr&oacute;nicos que formen parte de un expediente.";
 answers[17] = choices[17][1];
 units[17] = "43";
 comments[17] = "Id Pregunta: 5792. MAP 2008 A2";


//  Id pregunta: 5793 AÃ±o de creación de pregunta: 2009-01-01
 questions[18]= "19)  De acuerdo con la Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, se&ntilde;ale cu&aacute;l de las siguientes definiciones es FALSA:";
 choices[18]= new Array();
 choices[18][0] = "Actuaci&oacute;n administrativa automatizada: Actuaci&oacute;n administrativa producida por un Sistema de informaci&oacute;n adecuadamente programado sin necesidad de intervenci&oacute;n de una persona f&iacute;sica en cada caso singular. Incluye la producci&oacute;n de actos de tr&aacute;mite o resolutorios de procedimientos, as&iacute; como de meros actos de comunicaci&oacute;n.";
 choices[18][1] = "Aplicaci&oacute;n: Programa o conjunto de programas cuyo objeto es la resoluci&oacute;n de un problema mediante el uso de inform&aacute;tica.";
 choices[18][2] = "Aplicaci&oacute;n de fuentes abiertas: Aquella que se distribuye con una licencia que permite la libertad de ejecutarla, de conocer el c&oacute;digo fuente, de modificarla o mejorarla y de redistribuir copias a otros";
 choices[18][3] = "Autenticaci&oacute;n: Capacidad de los sistemas de informaci&oacute;n, y por ende de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 answers[18] = choices[18][3];
 units[18] = "43";
 comments[18] = "Id Pregunta: 5793. MAP 2008 A2";


//  Id pregunta: 5843 AÃ±o de creación de pregunta: 2009-01-01
 questions[19]= "20)  La Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos:";
 choices[19]= new Array();
 choices[19][0] = "Prev&eacute; que los ciudadanos se relacionen con dichas administraciones siempre que usen para ello los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad";
 choices[19][1] = "Establece la creaci&oacute;n de registros electr&oacute;nicos por las Administraciones P&uacute;blicas, que admitir&aacute;n exclusivamente documentos electr&oacute;nicos normalizados y cumplimentados de acuerdo con formatos preestablecidos";
 choices[19][2] = "Es de aplicaci&oacute;n exclusivamente a los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas";
 choices[19][3] = "Establece que la publicaci&oacute;n del BOE en la sede electr&oacute;nica del organismo competente tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as establecidas reglamentariamente.";
 answers[19] = choices[19][3];
 units[19] = "43";
 comments[19] = "Id Pregunta: 5843. MAP 2008 A1";


//  Id pregunta: 5955 AÃ±o de creación de pregunta: 2009-01-01
 questions[20]= "21)  Se&ntilde;ale la respuesta FALSA. La Ley 11/2007 indica que la Reuni&oacute;n de &Oacute;rganos colegiados por medios electr&oacute;nicos en la Administraci&oacute;n General del Estado se efectuar&aacute; de acuerdo con las siguientes especialidades:";
 choices[20]= new Array();
 choices[20][0] = "Deber&aacute; garantizarse la realizaci&oacute;n efectiva de los principios que la legislaci&oacute;n establece respecto de la convocatoria, acceso a la informaci&oacute;n y comunicaci&oacute;n del orden del d&iacute;a, en donde se especificar&aacute;n los tiempos en los que se organizar&aacute;n los debates, la formulaci&oacute;n y conocimiento de las propuestas y la adopci&oacute;n de acuerdos.";
 choices[20][1] = "Deber&aacute; garantizarse de forma fehaciente el quorum requerido en los t&eacute;rminos establecidos por la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n por medios electr&oacute;nicos ";
 choices[20][2] = "El r&eacute;gimen de constituci&oacute;n y adopci&oacute;n de acuerdos garantizar&aacute; la participaci&oacute;n de los miembros de acuerdo con las disposiciones propias del &oacute;rgano.";
 choices[20][3] = "Las actas garantizar&aacute;n la constancia de las comunicaciones producidas as&iacute; como el acceso de los miembros al contenido de los acuerdos adoptados.";
 answers[20] = choices[20][1];
 units[20] = "43";
 comments[20] = "Id Pregunta: 5955. Disposici&oacute;n Adicional primera.";


//  Id pregunta: 6189 AÃ±o de creación de pregunta: 2010-01-01
 questions[21]= "22)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[21]= new Array();
 choices[21][0] = "Cada 6 meses";
 choices[21][1] = "Cada a&ntilde;o";
 choices[21][2] = "Cada 2 a&ntilde;os";
 choices[21][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[21] = choices[21][3];
 units[21] = "43";
 comments[21] = "Id Pregunta: 6189. NULL";


//  Id pregunta: 6194 AÃ±o de creación de pregunta: 2010-01-01
 questions[22]= "23)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[22]= new Array();
 choices[22][0] = "La Administraci&oacute;n General del Estado";
 choices[22][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[22][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[22][3] = "Todas las Administraciones P&uacute;blicas";
 answers[22] = choices[22][1];
 units[22] = "43";
 comments[22] = "Id Pregunta: 6194. Articulo 1";


//  Id pregunta: 6195 AÃ±o de creación de pregunta: 2010-01-01
 questions[23]= "24)  La habilitaci&oacute;n para la representaci&oacute;n de terceros prevista en el Real Decreto 1671/2009 permite a las personas o entidades habilitadas";
 choices[23]= new Array();
 choices[23][0] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[23][1] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 choices[23][2] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[23][3] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 answers[23] = choices[23][0];
 units[23] = "43";
 comments[23] = "Id Pregunta: 6195. Articulo 14";


//  Id pregunta: 6351 AÃ±o de creación de pregunta: 2010-01-01
 questions[24]= "25)  La ley sobre reutilizaci&oacute;n de la informaci&oacute;n  del sector p&uacute;blico es la ley";
 choices[24]= new Array();
 choices[24][0] = "Ley 37/2007";
 choices[24][1] = "Ley 32/2005";
 choices[24][2] = "Ley 25/2007";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "30";
 comments[24] = "Id Pregunta: 6351. Ley 37/2007";


//  Id pregunta: 6361 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Seguridad?";
 choices[25]= new Array();
 choices[25][0] = "RD 4/2010";
 choices[25][1] = "RD 40/2010";
 choices[25][2] = "RD 4/2009";
 choices[25][3] = "RD 3/2010";
 answers[25] = choices[25][3];
 units[25] = "43";
 comments[25] = "Id Pregunta: 6361. NULL";


//  Id pregunta: 6364 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  De acuerdo con el Esquema Nacional de Seguridad, el sistema ha de disponer de una estrategia de protecci&oacute;n constituida por m&uacute;ltiples capas de seguridad, dispuesta de forma que, cuando una de las capas falle, permita:";
 choices[26]= new Array();
 choices[26][0] = "Ganar tiempo para una reacci&oacute;n adecuada frente a los incidentes que no han podido evitarse.";
 choices[26][1] = "Reducir la probabilidad de que el sistema sea comprometido en su conjunto.";
 choices[26][2] = "Minimizar el impacto final sobre el mismo.";
 choices[26][3] = "Todas las anteriores";
 answers[26] = choices[26][3];
 units[26] = "43";
 comments[26] = "Id Pregunta: 6364. Art&iacute;culo 8 ENS";


//  Id pregunta: 6369 AÃ±o de creación de pregunta: 2010-01-01
 questions[27]= "28)  &iquest;A qui&eacute;n corresponde, de acuerdo al Esquema Nacional de Seguridad, elaborar las Gu&iacute;as de Seguridad?";
 choices[27]= new Array();
 choices[27][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n (SETSI)";
 choices[27][1] = "Al Instituto Nacional de Tecnolog&iacute;as de la Comunicaci&oacute;n (INTECO)";
 choices[27][2] = "Al Instituto Nacional de Administraci&oacute;n P&uacute;blica (INAP)";
 choices[27][3] = "Al Centro Criptol&oacute;gico Nacional (CCN)";
 answers[27] = choices[27][3];
 units[27] = "43";
 comments[27] = "Id Pregunta: 6369. Art&iacute;culo 29 ENS. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 6387 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[28]= new Array();
 choices[28][0] = "No";
 choices[28][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[28][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[28][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[28] = choices[28][2];
 units[28] = "43";
 comments[28] = "Id Pregunta: 6387. Art&iacute;culo 3.3 RD 1671/2009";


//  Id pregunta: 6397 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[29]= new Array();
 choices[29][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[29][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[29][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[29][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[29] = choices[29][2];
 units[29] = "43";
 comments[29] = "Id Pregunta: 6397. Art&iacute;culo 53 RD 1671/2009";


//  Id pregunta: 7141 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[30]= new Array();
 choices[30][0] = "Dos a&ntilde;os";
 choices[30][1] = "Cuatro a&ntilde;os";
 choices[30][2] = "30 meses";
 choices[30][3] = "18 meses";
 answers[30] = choices[30][2];
 units[30] = "30";
 comments[30] = "Id Pregunta: 7141. Examen TIC B 2009 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 7771 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)   El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[31]= new Array();
 choices[31][0] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[31][1] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada.";
 choices[31][2] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica.";
 choices[31][3] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad.";
 answers[31] = choices[31][2];
 units[31] = "44";
 comments[31] = "Id Pregunta: 7771. Map 2005";


//  Id pregunta: 8213 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  La plataforma de validaci&oacute;n de certificados VALIDE del Ministerio de la Presidencia permite validar:";
 choices[32]= new Array();
 choices[32][0] = "Las URLs de los portales de las Administraciones P&uacute;blicas.";
 choices[32][1] = "Los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[32][2] = "Los certificados de sedes electr&oacute;nicas y los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[32][3] = "Los certificados de sede electr&oacute;nica.";
 answers[32] = choices[32][3];
 units[32] = "30";
 comments[32] = "Id Pregunta: 8213. Examen TIC A1 2010";


//  Id pregunta: 8398 AÃ±o de creación de pregunta: 2011-01-01
 questions[33]= "34)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean: ";
 choices[33]= new Array();
 choices[33][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo. ";
 choices[33][1] = "Por Real Decreto del Presidente del Gobierno. ";
 choices[33][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate. ";
 choices[33][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[33] = choices[33][0];
 units[33] = "43";
 comments[33] = "Id Pregunta: 8398. Examen TIC A2 2010";


//  Id pregunta: 8404 AÃ±o de creación de pregunta: 2011-01-01
 questions[34]= "35)  Para que las im&aacute;genes electr&oacute;nicas realizadas por la Administraci&oacute;n de documentos en soporte no electr&oacute;nico tengan la naturaleza de copias electr&oacute;nicas aut&eacute;nticas, con el alcance y efectos previstos en el art. 46 de la ley 30/1992, se deben cumplir ciertos requisitos. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos? ";
 choices[34]= new Array();
 choices[34][0] = "Que la copia electr&oacute;nica incluya su car&aacute;cter de copia entre los metadatos asociados. ";
 choices[34][1] = "Que el documento copiado sea un original o una copia aut&eacute;ntica.";
 choices[34][2] = "Que las im&aacute;genes electr&oacute;nicas est&eacute;n codificadas conforme a algunos de los formatos y con los niveles de calidad y condiciones t&eacute;cnicas especificados en el Esquema Nacional de Interoperabilidad.  ";
 choices[34][3] = "Que en los metadatos se incluya el &oacute;rgano y lugar donde se custodia el original o copia autentica en soporte no electr&oacute;nico.";
 answers[34] = choices[34][3];
 units[34] = "43";
 comments[34] = "Id Pregunta: 8404. Examen TIC A2 2010";


//  Id pregunta: 8426 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas de interoperabilidad no est&aacute; contemplada en el Desarrollo del Esquema Nacional de Interoperabilidad (disposici&oacute;n adicional primera), en el Real Decreto 4/2010 del 8 de enero?";
 choices[35]= new Array();
 choices[35][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[35][1] = "Documento electr&oacute;nico";
 choices[35][2] = "Expediente electr&oacute;nico";
 choices[35][3] = "Sede electr&oacute;nica";
 answers[35] = choices[35][3];
 units[35] = "43";
 comments[35] = "Id Pregunta: 8426. ";


//  Id pregunta: 8429 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes ejes de actuaci&oacute;n no forma parte de los 5 ejes de actuaci&oacute;n definidos en el Plan Avanza 2?";
 choices[36]= new Array();
 choices[36][0] = "Eje Administraci&oacute;n Electr&oacute;nica";
 choices[36][1] = "Eje Capacitaci&oacute;n";
 choices[36][2] = "Eje Infraestructuras";
 choices[36][3] = "Eje Desarrollo del sector TIC";
 answers[36] = choices[36][0];
 units[36] = "30";
 comments[36] = "Id Pregunta: 8429. ";


//  Id pregunta: 8430 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  Seg&uacute;n la nueva estrategia para el crecimiento y el empleo Europa 2020, &iquest;Cu&aacute;les de las siguientes prioridades no se encuentra entre las 3 fundamentales definidas en la misma?";
 choices[37]= new Array();
 choices[37][0] = "Crecimiento tecnol&oacute;gico";
 choices[37][1] = "Crecimiento inteligente";
 choices[37][2] = "Crecimiento sostenible";
 choices[37][3] = "Crecimiento integrador";
 answers[37] = choices[37][0];
 units[37] = "30";
 comments[37] = "Id Pregunta: 8430. ";


//  Id pregunta: 8438 AÃ±o de creación de pregunta: 2011-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio incluir en la disposici&oacute;n de creaci&oacute;n de un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[38]= new Array();
 choices[38][0] = "&Oacute;rgano o unidad responsable de la gesti&oacute;n.";
 choices[38][1] = "Fecha y hora oficial y referencia al calendario de d&iacute;as inh&aacute;biles que sea aplicable.";
 choices[38][2] = "Medios de presentaci&oacute;n de documentaci&oacute;n complementaria a una comunicaci&oacute;n, escrito o solicitud previamente presentada en el registro electr&oacute;nico.";
 choices[38][3] = "Buzones de correo electr&oacute;nico corporativo y/o fax asignado a los empleados p&uacute;blicos o a las distintas unidades y &oacute;rganos.";
 answers[38] = choices[38][3];
 units[38] = "43";
 comments[38] = "Id Pregunta: 8438. ";


//  Id pregunta: 8731 AÃ±o de creación de pregunta: 2011-01-01
 questions[39]= "40)  Se considera documento electr&oacute;nico de acuerdo a la ley 11/2007 a:";
 choices[39]= new Array();
 choices[39][0] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[39][1] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico, o impresa en papel, siempre seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[39][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en soporte electr&oacute;nico o en formato papel, siempre que se haya firmado con un certificado electr&oacute;nico reconocido";
 choices[39][3] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 answers[39] = choices[39][3];
 units[39] = "43";
 comments[39] = "Id Pregunta: 8731. Examen TIC A2 2010 interna";


//  Id pregunta: 8746 AÃ±o de creación de pregunta: 2011-01-01
 questions[40]= "41)  En el contexto de la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, un ciudadano es:";
 choices[40]= new Array();
 choices[40][0] = "Es siempre una persona f&iacute;sica o una persona jur&iacute;dica";
 choices[40][1] = "Siempre es una persona f&iacute;sica, aunque sea representando a una persona jur&iacute;dica.";
 choices[40][2] = "Siempre son personas jur&iacute;dicas, y las personas f&iacute;sicas se entienden como entes sin personalidad.";
 choices[40][3] = "Una persona f&iacute;sica, una persona jur&iacute;dica o. incluso, un ente sin personalidad";
 answers[40] = choices[40][3];
 units[40] = "43";
 comments[40] = "Id Pregunta: 8746. Examen TIC A2 2010 interna";


//  Id pregunta: 8747 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  En el &aacute;mbito de la Administraci&oacute;n General del Estado, &iquest;es posible la notificaci&oacute;n mediante recepci&oacute;n en direcci&oacute;n de correo electr&oacute;nico que los ciudadanos elijan?";
 choices[41]= new Array();
 choices[41][0] = "No est&aacute; previsto para tal fin el uso de una direcci&oacute;n de correo electr&oacute;nico que elijan los ciudadanos, sino s&oacute;lo el uso de la denominada direcci&oacute;n electr&oacute;nica habilitada";
 choices[41][1] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario sendos acuses de salida y recibo, que dejen constancia de su emisi&oacute;n y recepci&oacute;n y que so originen, respectivamente, en el momento del envi&oacute; y de acceso al contenido de la notificaci&oacute;n";
 choices[41][2] = "Si, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuse de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido de la notificaci&oacute;n.";
 choices[41][3] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuso de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido c&iacute;e la notificaci&oacute;n Asimismo, el ciudadano podr&aacute; solicitar un acuse de salida, que deje constancia de su emisi&oacute;n y que se origine en el momento del env&iacute;o de la notificaci&oacute;n";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 8747. Examen TIC A2 2010 interna";


//  Id pregunta: 8782 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, se entiende por documento electr&oacute;nico:";
 choices[42]= new Array();
 choices[42][0] = "El conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[42][1] = "El conjunto de elementos intervinientes en la creaci&oacute;n de una firma electr&oacute;nica.";
 choices[42][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[42][3] = "El documento firmado electr&oacute;nicamente por un prestador de servicios de certificaci&oacute;n que vincula unos datos de verificaci&oacute;n de firma avanzada y confirma su identidad.";
 answers[42] = choices[42][2];
 units[42] = "43";
 comments[42] = "Id Pregunta: 8782. Examen UPM A2 2011";


//  Id pregunta: 8934 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Las Administraciones competentes en materia de justicia no deber&aacute;n asegurar el acceso de todos los ciudadanos a los servicios electr&oacute;nicos proporcionados en su &aacute;mbito a trav&eacute;s de:";
 choices[43]= new Array();
 choices[43][0] = "Servicios de atenci&oacute;n telef&oacute;nica";
 choices[43][1] = "Las principales p&aacute;ginas web de la Administraci&oacute;n de Justicia";
 choices[43][2] = "Puntos de informaci&oacute;n electr&oacute;nicos, ubicados en los edificios judiciales";
 choices[43][3] = "Las oficinas de informaci&oacute;n y atenci&oacute;n al p&uacute;blico";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 8934. ";


//  Id pregunta: 8941 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[44]= new Array();
 choices[44][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[44][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[44][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[44][3] = "Ninguno de los anteriores";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 8941. ";


//  Id pregunta: 8950 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  El Registro Electr&oacute;nico Com&uacute;n ser&aacute; gestionado por:";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de la Presidencia";
 choices[45][1] = "Por la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[45][2] = "Por la Secretar&iacute;a de Estado para la Funci&oacute;n P&uacute;blica";
 choices[45][3] = "Ninguna de las anteriores es cierta";
 answers[45] = choices[45][2];
 units[45] = "43";
 comments[45] = "Id Pregunta: 8950. ";


//  Id pregunta: 8976 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un derecho reconocido a los ciudadanos por la ley 11/2007?";
 choices[46]= new Array();
 choices[46][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[46][1] = "A la utilizaci&oacute;n de otros sistemas de firma electr&oacute;nica admitidos en el &aacute;mbito de las Administraciones P&uacute;blicas";
 choices[46][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos";
 choices[46][3] = "Todos los anteriores son derechos reconocidos a los ciudadanos por la ley 11/2007";
 answers[46] = choices[46][3];
 units[46] = "43";
 comments[46] = "Id Pregunta: 8976. ";


//  Id pregunta: 9034 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  Indique cu&aacute;l no es un principios b&aacute;sico seg&uacute;n el RD 3/2010.";
 choices[47]= new Array();
 choices[47][0] = "Prevenci&oacute;n, reactivaci&oacute;n y revisi&oacute;n";
 choices[47][1] = "Seguridad Integral";
 choices[47][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[47][3] = "L&iacute;neas de defensa";
 answers[47] = choices[47][0];
 units[47] = "43";
 comments[47] = "Id Pregunta: 9034. ";


//  Id pregunta: 9067 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos";
 choices[48]= new Array();
 choices[48][0] = "N&uacute;mero de entrada de registro";
 choices[48][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n del procedimiento";
 choices[48][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada y de los documentos adjuntos";
 choices[48][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico ";
 answers[48] = choices[48][2];
 units[48] = "43";
 comments[48] = "Id Pregunta: 9067. NULL";


//  Id pregunta: 9540 AÃ±o de creación de pregunta: 2013-01-01
 questions[49]= "50)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[49]= new Array();
 choices[49][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa.";
 choices[49][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[49][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[49][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[49] = choices[49][2];
 units[49] = "30";
 comments[49] = "Id Pregunta: 9540. Examen TIC A1 2011 (Ley 11/2007, art&iacute;culo 11.2)";


//  Id pregunta: 9588 AÃ±o de creación de pregunta: 2013-01-01
 questions[50]= "51)  De acuerdo con el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n, es la referente a la:";
 choices[50]= new Array();
 choices[50][0] = "Interoperabilidad, en general.";
 choices[50][1] = "Interoperabilidad organizativa. ";
 choices[50][2] = "Interoperabilidad t&eacute;cnica. ";
 choices[50][3] = "Interoperabilidad sem&aacute;ntica. ";
 answers[50] = choices[50][3];
 units[50] = "43";
 comments[50] = "Id Pregunta: 9588. Examen TIC A2 2011";


//  Id pregunta: 9591 AÃ±o de creación de pregunta: 2013-01-01
 questions[51]= "52)  El Real Decreto 3/2010, en su art&iacute;culo 29, dispone que las gu&iacute;as de seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones para el mejor cumplimiento de lo establecido en el Esquema Nacional de Seguridad las elaborar&aacute; y difundir&aacute;:";
 choices[51]= new Array();
 choices[51][0] = "El Centro Criptol&oacute;gico Nacional.";
 choices[51][1] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[51][2] = "Cada organismo p&uacute;blico que implante medidas de seguridad de acuerdo con el Esquema Nacional de Seguridad.";
 choices[51][3] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[51] = choices[51][0];
 units[51] = "43";
 comments[51] = "Id Pregunta: 9591. Examen TIC A2 2011 interna. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 9798 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  &iquest;Cu&aacute;les son &aacute;reas de actuaci&oacute;n dentro de la Estrategia 2011-2015 del Plan Avanza 2?";
 choices[52]= new Array();
 choices[52][0] = "Ciudadan&iacute;a Digital, Econom&iacute;a Digital, Educaci&oacute;n y Servicios P&uacute;blicos Digitales, Publicaci&oacute;n Digital. ";
 choices[52][1] = "Infraestructura, Gobernanza, Confianza y Seguridad, Espacio &uacute;nico de informaci&oacute;n.";
 choices[52][2] = "Administraci&oacute;n sin papeles, Infraestructuras, Uso y confianza en Internet, Impulso de la industria TIC espa&ntilde;ola. ";
 choices[52][3] = "Administraci&oacute;n en l&iacute;nea, Comercio electr&oacute;nico, Salud y Educaci&oacute;n en l&iacute;nea, Banda Ancha. ";
 answers[52] = choices[52][2];
 units[52] = "30";
 comments[52] = "Id Pregunta: 9798. Examen TIC-A2 2013-Libre. En la p&aacute;gina web de la estrategia viene algo distinto, dice: Infraestructuras, Confianza y Seguridad, Capacitaci&oacute;n Tecnol&oacute;gica, Contenidos y Servicios Digitales y Desarrollo del Sector TIC. Esto a veces pasa.";


//  Id pregunta: 9806 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  De las siguientes opciones se&ntilde;alar cu&aacute;l forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:";
 choices[53]= new Array();
 choices[53][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[53][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas. ";
 choices[53][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica. ";
 choices[53][3] = "Carta de servicios electr&oacute;nicos.";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 9806. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9807 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[54]= new Array();
 choices[54][0] = "Ley ordinaria.";
 choices[54][1] = "Orden Ministerial.";
 choices[54][2] = "Ley org&aacute;nica.";
 choices[54][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[54] = choices[54][1];
 units[54] = "43";
 comments[54] = "Id Pregunta: 9807. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9900 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de losciudadanos a los Servicios P&uacute;blicos, el principio de neutralidad tecnol&oacute;gica y de adaptabilidad al progreso significa que las Administraciones P&uacute;blicas";
 choices[55]= new Array();
 choices[55][0] = "utilizar&aacute;n est&aacute;ndares abiertos o de uso generalizado por los ciudadanos.";
 choices[55][1] = "utilizar&aacute;n procedimientos electr&oacute;nicos para sus tr&aacute;mites.";
 choices[55][2] = "no admitir&aacute;n el uso de esos medios m&aacute;s que de forma gratuita.";
 choices[55][3] = "utilizar&aacute;n medios que permitan la m&aacute;xima difusi&oacute;n sin coste.";
 answers[55] = choices[55][0];
 units[55] = "43";
 comments[55] = "Id Pregunta: 9900. TIC A1, Examen 2013";


//  Id pregunta: 10155 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[56]= new Array();
 choices[56][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella. ";
 choices[56][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[56][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[56][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad. ";
 answers[56] = choices[56][3];
 units[56] = "43";
 comments[56] = "Id Pregunta: 10155. ";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  Seg&uacute;n la  Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "En el acceso a la Plataforma de intermediaci&oacute;n de datos del Ministerio de Hacienda y Administraciones P&uacute;blicas se utilizar&aacute; la Red SARA";
 choices[57][1] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas garantizar&aacute; interoperabilidad, disponibilidad, fiabilidad y seguridad";
 choices[57][2] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas almacenar&aacute; el contenido del intercambio para garantizar la trazabilidad";
 choices[57][3] = "El Cedente podr&aacute; auditar la cesi&oacute;n de datos para comprobar el cumplimiento de los requisitos a que pudiera &eacute;sta estar sujeta";
 answers[57] = choices[57][2];
 units[57] = "43";
 comments[57] = "Id Pregunta: 10156. ";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  &iquest;Cual de los siguientes no es un servicio prestado por Red SARA?";
 choices[58]= new Array();
 choices[58][0] = "DNS";
 choices[58][1] = "SMTP";
 choices[58][2] = "SNMP";
 choices[58][3] = "NTP";
 answers[58] = choices[58][2];
 units[58] = "43";
 comments[58] = "Id Pregunta: 10495. Punto III.1.3 de la NTI de Requisitos de conexi&oacute;n a Red SARA";


//  Id pregunta: 10580 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  No es objetivo de la Ley 11/2007:";
 choices[59]= new Array();
 choices[59][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[59][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[59][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[59][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 10580. ";


//  Id pregunta: 10583 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  El empleo de algoritmos de firma electr&oacute;nica acreditados por el Centro Criptol&oacute;gico Nacional:";
 choices[60]= new Array();
 choices[60][0] = "Es una medida del Esquema Nacional de Seguridad para la dimensi&oacute;n de confidencialidad.";
 choices[60][1] = "Es una medida de nivel medio del Esquema Nacional de Seguridad.";
 choices[60][2] = "Es una recomendaci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[60][3] = "Ninguna de las anteriores.";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 10583. ";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Son principios del programa europeo ISA:";
 choices[61]= new Array();
 choices[61][0] = "La privacidad, la apertura y la seguridad.";
 choices[61][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[61][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[61][3] = "Todas las anteriores.";
 answers[61] = choices[61][3];
 units[61] = "30";
 comments[61] = "Id Pregunta: 10589. ";


//  Id pregunta: 10672 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[62]= new Array();
 choices[62][0] = "1 de Junio de 2015";
 choices[62][1] = "1 de Julio de 2015";
 choices[62][2] = "2 de Octubre de 2015";
 choices[62][3] = "1 de Noviembre de 2015";
 answers[62] = choices[62][2];
 units[62] = "30";
 comments[62] = "Id Pregunta: 10672. ";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas deroga expresamente:";
 choices[63]= new Array();
 choices[63][0] = "La Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[63][1] = "La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos.";
 choices[63][2] = "Ambas";
 choices[63][3] = "Ninguna de las dos Leyes se&ntilde;aladas.";
 answers[63] = choices[63][1];
 units[63] = "30";
 comments[63] = "Id Pregunta: 10673. ";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[64]= new Array();
 choices[64][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[64][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[64][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[64][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[64] = choices[64][1];
 units[64] = "30";
 comments[64] = "Id Pregunta: 10676. ";


//  Id pregunta: 10678 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[65]= new Array();
 choices[65][0] = "Personas jur&iacute;dicas.";
 choices[65][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[65][2] = "Notarios y registradores.";
 choices[65][3] = "Todas las anteriores.";
 answers[65] = choices[65][3];
 units[65] = "30";
 comments[65] = "Id Pregunta: 10678. ";


//  Id pregunta: 10679 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[66]= new Array();
 choices[66][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[66][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[66][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[66][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[66] = choices[66][1];
 units[66] = "30";
 comments[66] = "Id Pregunta: 10679. ";


//  Id pregunta: 10683 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n el Art&iacute;culo 14 de la Ley 39/2015. Para las personas f&iacute;sicas, &iquest;qui&eacute;n elige si la relaci&oacute;n se va a establecer a trav&eacute;s de medios electr&oacute;nicos?";
 choices[67]= new Array();
 choices[67][0] = "La Administraci&oacute;n.";
 choices[67][1] = "El ciudadano en todo caso.";
 choices[67][2] = "Habitualmente el ciudadano.";
 choices[67][3] = "Siempre se realiza a trav&eacute;s de medios electr&oacute;nicos.";
 answers[67] = choices[67][2];
 units[67] = "30";
 comments[67] = "Id Pregunta: 10683. ";


//  Id pregunta: 10685 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n la Ley 39/2015, para cual de estas actuaciones no es necesar&iacute;a la firma electr&oacute;nica.";
 choices[68]= new Array();
 choices[68][0] = "Iniciar un procedimiento.";
 choices[68][1] = "Interponer un recurso.";
 choices[68][2] = "Desistir de acciones.";
 choices[68][3] = "Renunciar a derechos.";
 answers[68] = choices[68][0];
 units[68] = "30";
 comments[68] = "Id Pregunta: 10685. ";


//  Id pregunta: 10686 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[69]= new Array();
 choices[69][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[69][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[69][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y  desistir de acciones.";
 choices[69][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[69] = choices[69][1];
 units[69] = "30";
 comments[69] = "Id Pregunta: 10686. ";


//  Id pregunta: 10687 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[70]= new Array();
 choices[70][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[70][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[70][2] = "Ambas.";
 choices[70][3] = "Ninguna de las anteriores.";
 answers[70] = choices[70][2];
 units[70] = "30";
 comments[70] = "Id Pregunta: 10687. ";


//  Id pregunta: 10688 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[71]= new Array();
 choices[71][0] = "Enero de 2013.";
 choices[71][1] = "Junio de 2013.";
 choices[71][2] = "Diciembre de 2013.";
 choices[71][3] = "Enero de 2014.";
 answers[71] = choices[71][1];
 units[71] = "30";
 comments[71] = "Id Pregunta: 10688. ";


//  Id pregunta: 10702 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[72]= new Array();
 choices[72][0] = "&Uacute;nicamente podr&aacute;n ser modificados durante la tramitaci&oacute;n de dicho expediente y en ning&uacute;n caso con posterioridad a su finalizaci&oacute;n.";
 choices[72][1] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo.";
 choices[72][2] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo, a excepci&oacute;n de modificaciones necesarias para la correcci&oacute;n de errores u omisiones en el valor inicialmente asignado.";
 choices[72][3] = "La normativa no establece ning&uacute;n condicionante sobre su posible modificaci&oacute;n.";
 answers[72] = choices[72][2];
 units[72] = "43";
 comments[72] = "Id Pregunta: 10702. ";


//  Id pregunta: 10703 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[73]= new Array();
 choices[73][0] = "No se pueden incluir metadatos complementarios.";
 choices[73][1] = "Se pueden incluir metadatos complementarios.";
 choices[73][2] = "Se pueden incluir metadatos complementarios &uacute;nicamente en caso de intercambio de dichos expedientes.";
 choices[73][3] = "Se pueden incluir metadatos complementarios &uacute;nicamente para facilitar el almacenamiento de los expedientes.";
 answers[73] = choices[73][1];
 units[73] = "43";
 comments[73] = "Id Pregunta: 10703. ";


//  Id pregunta: 10705 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es considerado un metadato m&iacute;nimo del expediente electr&oacute;nico?";
 choices[74]= new Array();
 choices[74][0] = "Versi&oacute;n NTI.";
 choices[74][1] = "Identificador.";
 choices[74][2] = "N&uacute;mero de documentos incluidos.";
 choices[74][3] = "Tipo de firma.";
 answers[74] = choices[74][2];
 units[74] = "43";
 comments[74] = "Id Pregunta: 10705. ";


//  Id pregunta: 10709 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  La Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales se public&oacute; en:";
 choices[75]= new Array();
 choices[75][0] = "2010";
 choices[75][1] = "2011";
 choices[75][2] = "2013";
 choices[75][3] = "2014";
 answers[75] = choices[75][1];
 units[75] = "43";
 comments[75] = "Id Pregunta: 10709. ";


//  Id pregunta: 10721 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qu&eacute; no es necesario que incluya la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[76]= new Array();
 choices[76][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[76][1] = "Actuaciones de supervisi&oacute;n y auditor&iacute;a de los procesos de gesti&oacute;n de documentos.";
 choices[76][2] = "Los medios tecnol&oacute;gicos necesarios para la gesti&oacute;n de los documentos electr&oacute;nicos.";
 choices[76][3] = "Roles de los actores involucrados.";
 answers[76] = choices[76][2];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10721. ";


//  Id pregunta: 10751 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes no es un principio rector de la Estrategia de Ciberseguridad Nacional?";
 choices[77]= new Array();
 choices[77][0] = "Liderazgo internacional y coordinaci&oacute;n de esfuerzos";
 choices[77][1] = "Responsabilidad compartida";
 choices[77][2] = "Proporcionalidad racionalidad y eficacia";
 choices[77][3] = "Cooperaci&oacute;n Internacional";
 answers[77] = choices[77][0];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10751. ";


//  Id pregunta: 10753 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l no se una l&iacute;nea de acci&oacute;n de la Estrategia de Ciberseguridad Nacional?";
 choices[78]= new Array();
 choices[78][0] = "Capacidad de prevenci&oacute;n, detecci&oacute;n, respuesta y recuperaci&oacute;n ante las ciberamenazas.";
 choices[78][1] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Administraciones P&uacute;blicas.";
 choices[78][2] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Infraestructuras Cr&iacute;ticas.";
 choices[78][3] = "Colaboraci&oacute;n con las entidades privadas para establecer un marco de seguridad nacional.";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10753. ";


//  Id pregunta: 10759 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Plan de Adecuaci&oacute;n del Esquema Nacional de Seguridad&quot;?";
 choices[79]= new Array();
 choices[79][0] = "CCN-STIC-803";
 choices[79][1] = "CCN-STIC-805";
 choices[79][2] = "CCN-STIC-806";
 choices[79][3] = "CCN-STIC-807";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10759. ";


//  Id pregunta: 10929 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La Comisi&oacute;n Europea establece una serie de prioridades y acciones para promover una administraci&oacute;n p&uacute;blica inteligente, sostenible e innovadora, enmarcadas en el Plan de Acci&oacute;n Europeo sobre Administraci&oacute;n Electr&oacute;nica 2011-2015. Entre estas prioridades y acciones se incluyen:";
 choices[80]= new Array();
 choices[80][0] = "Mejora de la transparencia, participaci&oacute;n de los ciudadanos y las empresas en los procesos de elaboraci&oacute;n de pol&iacute;ticas y sanidad en l&iacute;nea.";
 choices[80][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[80][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[80][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[80] = choices[80][3];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10929. TIC A1 AGE 2014";


//  Id pregunta: 10951 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Respecto a los requisitos a cumplir en la digitalizaci&oacute;n de documentos establecidos por la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos es correcto que:";
 choices[81]= new Array();
 choices[81][0] = "El nivel de resoluci&oacute;n m&aacute;ximo para im&aacute;genes electr&oacute;nicas ser&aacute; de 200 p&iacute;xeles por pulgada, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 choices[81][1] = "La imagen electr&oacute;nica se podr&aacute; optimizar para garantizar su legibilidad, de modo que todo contenido del documento origen pueda apreciarse y sea v&aacute;lido para su gesti&oacute;n.";
 choices[81][2] = "La imagen electr&oacute;nica podr&aacute; contener caracteres o gr&aacute;ficos, siempre que sean incorporados por el funcionario responsable del expediente y adecuadamente identificados mediante sello oficial.";
 choices[81][3] = "La digitalizaci&oacute;n de un documento implicar&aacute;, en todos los casos, la asignaci&oacute;n de los metadatos m&iacute;nimos obligatorios definidos en la Norma T&eacute;cnica de Interoperabilidad de Documento Electr&oacute;nico y la firma de la imagen electr&oacute;nica.";
 answers[81] = choices[81][1];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10951. TIC A1 AGE 2014";


//  Id pregunta: 10959 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  El Centro de Informaci&oacute;n y Red de Creaci&oacute;n de Empresas (CIRCE), gestionado por el Ministerio de Industria, Energ&iacute;a y Turismo:";
 choices[82]= new Array();
 choices[82][0] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de todas las empresas que vayan a ejercer su actividad en el territorio nacional.";
 choices[82][1] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de apoderamiento y gestiones notariales necesarias para la puesta en marcha de las empresas.";
 choices[82][2] = "Permite realizar de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de Sociedades Limitada Nueva Empresa (SLNE), Sociedades de Responsabilidad Limitada (SRL o SL), o Empresarios Individuales (Aut&oacute;nomos).";
 choices[82][3] = "Es una plataforma para la informaci&oacute;n del emprendedor que se utiliza en los Puntos de Atenci&oacute;n al Emprendedor (PAEs), no permitiendo la realizaci&oacute;n de tr&aacute;mites online.";
 answers[82] = choices[82][2];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10959. TIC A1 AGE 2014";


//  Id pregunta: 10960 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[83]= new Array();
 choices[83][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[83][1] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[83][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[83][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[83] = choices[83][1];
 units[83] = "44";
 comments[83] = "Id Pregunta: 10960. TIC A1 AGE 2014";


//  Id pregunta: 11001 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;En qu&eacute; circunstancias los prestadores de servicios de la sociedad de la informaci&oacute;n no son responsables por la informaci&oacute;n que proporcionen a los destinatarios de sus servicios?";
 choices[84]= new Array();
 choices[84][0] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite actu&eacute; bajo la direcci&oacute;n, autoridad o control del prestador que facilite la localizaci&oacute;n de esos contenidos.";
 choices[84][1] = "Siempre que tengan conocimiento de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n y aleguen la imposibilidad de suprimir o inutilizar el enlace.";
 choices[84][2] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite desconozca el contenido il&iacute;cito de dicha informaci&oacute;n.";
 choices[84][3] = "Siempre que no tengan conocimiento efectivo de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n o si lo tienen, act&uacute;en de forma diligente para suprimir o inutilizar el enlace.";
 answers[84] = choices[84][3];
 units[84] = "30";
 comments[84] = "Id Pregunta: 11001. TIC A1 AGE 2014";


//  Id pregunta: 11017 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;ntos anexos incluye el RD 3/2010 (ENS)?";
 choices[85]= new Array();
 choices[85][0] = "Ninguno";
 choices[85][1] = "1";
 choices[85][2] = "2";
 choices[85][3] = "5";
 answers[85] = choices[85][3];
 units[85] = "30";
 comments[85] = "Id Pregunta: 11017. ";


//  Id pregunta: 11028 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es una soluci&oacute;n de servicio en la nube para el registro en las administraciones?";
 choices[86]= new Array();
 choices[86][0] = "ORVE";
 choices[86][1] = "GEISER";
 choices[86][2] = "Las 2 anteriores";
 choices[86][3] = "Ambas son soluciones, pero no en la nube";
 answers[86] = choices[86][2];
 units[86] = "44";
 comments[86] = "Id Pregunta: 11028. ";


//  Id pregunta: 11102 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[87]= new Array();
 choices[87][0] = "200 p&iacute;xeles por pulgada";
 choices[87][1] = "125 p&iacute;xeles por pulgada";
 choices[87][2] = "256 p&iacute;xeles por pulgada";
 choices[87][3] = "80 p&iacute;xeles por pulgada";
 answers[87] = choices[87][0];
 units[87] = "30";
 comments[87] = "Id Pregunta: 11102. ";


//  Id pregunta: 11112 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seleccione la opci&oacute;n verdadera";
 choices[88]= new Array();
 choices[88][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[88][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[88][2] = "ACCEDA permite crear un registro en la nube";
 choices[88][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[88] = choices[88][0];
 units[88] = "30";
 comments[88] = "Id Pregunta: 11112. ";


//  Id pregunta: 11120 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes no es un contenido m&iacute;nimo que deben tener las sedes electr&oacute;nicas de acuerdo con el art&iacute;culo 6 del RD 1671/2009?";
 choices[89]= new Array();
 choices[89][0] = "Sistema de verificaci&oacute;n de los certificados de la sede, accesible de forma directa y gratuita";
 choices[89][1] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la AEPD.";
 choices[89][2] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[89][3] = "Todos los anteriores son contenidos m&iacute;nimos de las sedes electr&oacute;nicas.";
 answers[89] = choices[89][3];
 units[89] = "43";
 comments[89] = "Id Pregunta: 11120. ";


//  Id pregunta: 11122 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;A que se refiere la gu&iacute;a CCN-STIC 804?";
 choices[90]= new Array();
 choices[90][0] = "Medidas de implantaci&oacute;n del ENS";
 choices[90][1] = "Plan de Adecuaci&oacute;n del ENS";
 choices[90][2] = "Auditor&iacute;a del ENS";
 choices[90][3] = "Normas de seguridad del ENS";
 answers[90] = choices[90][0];
 units[90] = "43";
 comments[90] = "Id Pregunta: 11122. ";


//  Id pregunta: 11199 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Estrategia Europea 2020 en materia de sostenibilidad energ&eacute;tica?";
 choices[91]= new Array();
 choices[91][0] = "20% de las energ&iacute;as deben proceder de una fuente renovable";
 choices[91][1] = "20% de aumento de la eficiencia energ&eacute;tica";
 choices[91][2] = "20% de los coches deben ser el&eacute;ctricos";
 choices[91][3] = "Emisiones de gases invernadero un 20% menores a los niveles de 1990";
 answers[91] = choices[91][2];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11199. ";


//  Id pregunta: 11203 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[92]= new Array();
 choices[92][0] = "Confianza Digital";
 choices[92][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[92][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[92][3] = "Interoperabilidad y normas";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11203. ";


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


//  Id pregunta: 11484 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[94]= new Array();
 choices[94][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[94][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[94][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[94][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[94] = choices[94][0];
 units[94] = "43";
 comments[94] = "Id Pregunta: 11484. NULL";


//  Id pregunta: 11594 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El metadato m&iacute;nimo obligatorio 'Origen' de un documento electr&oacute;nico indica:";
 choices[95]= new Array();
 choices[95][0] = "El &oacute;rgano generador del documento o que realiza la captura del mismo.";
 choices[95][1] = "La naturaleza del documento; esto es, si se trata de un original o una copia electr&oacute;nica.";
 choices[95][2] = "Si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n";
 choices[95][3] = "El lugar de procedencia del documento.";
 answers[95] = choices[95][2];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11594. ";


//  Id pregunta: 11599 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La entrada en vigor de la Ley 39/2015 es:";
 choices[96]= new Array();
 choices[96][0] = "A los seis meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[96][1] = "Al a&ntilde;o de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[96][2] = "A los dieciocho meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[96][3] = "A los dos a&ntilde;os de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[96] = choices[96][1];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11599. ";


//  Id pregunta: 11603 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La soluci&oacute;n integral de registro para cualquier organismo p&uacute;blico, que cubre tanto la gesti&oacute;n de sus oficinas de registro de entrada/salida como la recepci&oacute;n y env&iacute;o de registros en las unidades tramitadoras destinatarias de la documentaci&oacute;n sellama:";
 choices[97]= new Array();
 choices[97][0] = "ORVE";
 choices[97][1] = "SIR";
 choices[97][2] = "GEISER";
 choices[97][3] = "Registro Electr&oacute;nico Com&uacute;n";
 answers[97] = choices[97][2];
 units[97] = "44";
 comments[97] = "Id Pregunta: 11603. ";


//  Id pregunta: 11775 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Implementaci&oacute;n de servicios compartidos: Los Organismos que van a utilizar un servicio compartido";
 choices[98]= new Array();
 choices[98][0] = "Deben firmar un convenio con la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de la Comunicaci&oacute;n&nbsp;";
 choices[98][1] = "Pueden solicitar prestaciones &quot;ad hoc&quot;";
 choices[98][2] = "Deben usar el presupuesto de la secci&oacute;n 31 para Gastos de&nbsp;Diversos Ministerios";
 choices[98][3] = "Generalmente tienen que contribuir econ&oacute;micamente al servicio";
 answers[98] = choices[98][3];
 units[98] = "44";
 comments[98] = "Id Pregunta: 11775. ";


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


