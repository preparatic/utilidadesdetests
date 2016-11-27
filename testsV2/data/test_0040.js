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

//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[0]= new Array();
 choices[0][0] = "las Cortes generales.";
 choices[0][1] = "los partidos pol&iacute;ticos.";
 choices[0][2] = "los sindicatos.";
 choices[0][3] = "las Comunidades Aut&oacute;nomas.";
 answers[0] = choices[0][1];
 units[0] = "1";
 comments[0] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[1]= "2)  Componen la Comisi&oacute;n Europea:";
 choices[1]= new Array();
 choices[1][0] = "Un Comisario por cada Estado miembro.";
 choices[1][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[1][2] = "Dos Comisarios por cada Estado miembro.";
 choices[1][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[2]= new Array();
 choices[2][0] = "Bienalmente";
 choices[2][1] = "Anualmente";
 choices[2][2] = "Semestralmente";
 choices[2][3] = "Cada cuatro a&ntilde;os";
 answers[2] = choices[2][1];
 units[2] = "19";
 comments[2] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[3]= "4)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[3]= new Array();
 choices[3][0] = "un art&iacute;culo";
 choices[3][1] = "dos art&iacute;culos";
 choices[3][2] = "tres art&iacute;culos";
 choices[3][3] = "cuatro art&iacute;culos";
 answers[3] = choices[3][1];
 units[3] = "7";
 comments[3] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[4]= "5)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[4]= new Array();
 choices[4][0] = "La Ley General Tributaria.";
 choices[4][1] = "La Ley Presupuestaria.";
 choices[4][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[4][3] = "Ninguna de las respuestas es correcta.";
 answers[4] = choices[4][0];
 units[4] = "10";
 comments[4] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[5]= "6)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[5]= new Array();
 choices[5][0] = "Cinco a&ntilde;os.";
 choices[5][1] = "Seis a&ntilde;os.";
 choices[5][2] = "Cuatro a&ntilde;os.";
 choices[5][3] = "Tres a&ntilde;os.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[6]= "7)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[6]= new Array();
 choices[6][0] = "Cifrado de las comunicaciones";
 choices[6][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[6][2] = "Registro de los accesos";
 choices[6][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[6] = choices[6][1];
 units[6] = "35";
 comments[6] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[7]= "8)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[7]= new Array();
 choices[7][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[7][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[7][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[7][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[7] = choices[7][1];
 units[7] = "26";
 comments[7] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[8]= new Array();
 choices[8][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[8][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[8][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[8][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[8] = choices[8][1];
 units[8] = "77";
 comments[8] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[9]= "10)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[9]= new Array();
 choices[9][0] = "Diciembre de 1987.";
 choices[9][1] = "Septiembre de 1989.";
 choices[9][2] = "Octubre de 1990.";
 choices[9][3] = "Noviembre de 1980.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[10]= "11)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[10]= new Array();
 choices[10][0] = "Son actos individuales no normativos.";
 choices[10][1] = "Poseen alcance general.";
 choices[10][2] = "Son actos normativos.";
 choices[10][3] = "No son obligatorias.";
 answers[10] = choices[10][0];
 units[10] = "5";
 comments[10] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[11]= new Array();
 choices[11][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[11][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[11][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[11][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[12]= "13)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[12]= new Array();
 choices[12][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[12][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[12][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[12][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[12] = choices[12][0];
 units[12] = "109";
 comments[12] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[13]= new Array();
 choices[13][0] = "Lean startup";
 choices[13][1] = "Business Model Canvas";
 choices[13][2] = "Dynamic system Development method";
 choices[13][3] = "Lean software development";
 answers[13] = choices[13][2];
 units[13] = "34";
 comments[13] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[14]= "15)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[14]= new Array();
 choices[14][0] = "6 TB.";
 choices[14][1] = "8 TB.";
 choices[14][2] = "7 TB.";
 choices[14][3] = "4 TB.";
 answers[14] = choices[14][3];
 units[14] = "53";
 comments[14] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[15]= "16)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[15]= new Array();
 choices[15][0] = "Un plan de igualdad.";
 choices[15][1] = "Un informe de impacto de g&eacute;nero.";
 choices[15][2] = "Un programa de igualdad.";
 choices[15][3] = "Todas son correctas.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[16]= "17)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[16]= new Array();
 choices[16][0] = "Fat y Ntfs.";
 choices[16][1] = "Extfat y Fat.";
 choices[16][2] = "Fat y Nfst.";
 choices[16][3] = "ext2fs y Ntfs.";
 answers[16] = choices[16][0];
 units[16] = "58";
 comments[16] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[17]= "18)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[17]= new Array();
 choices[17][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[17][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[17][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[17][3] = "Todos los anteriores";
 answers[17] = choices[17][3];
 units[17] = "19";
 comments[17] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[18]= new Array();
 choices[18][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[18][1] = "el C&oacute;digo Civil";
 choices[18][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[18][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[19]= new Array();
 choices[19][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[19][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[19][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[19][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[19] = choices[19][1];
 units[19] = "43";
 comments[19] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[20]= "21)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[20]= new Array();
 choices[20][0] = "ISO/IEC 25000";
 choices[20][1] = "ISO/IEC 27000";
 choices[20][2] = "ISO 9000";
 choices[20][3] = "ISO 9001";
 answers[20] = choices[20][0];
 units[20] = "93";
 comments[20] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[21]= "22)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[21]= new Array();
 choices[21][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[21][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[21][2] = "el sector p&uacute;blico institucional";
 choices[21][3] = "el sector privado corporativo";
 answers[21] = choices[21][3];
 units[21] = "7";
 comments[21] = "Id Pregunta: 513. LEY 39/2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[22]= "23)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[22]= new Array();
 choices[22][0] = "El Presidente del Consejo Europeo.";
 choices[22][1] = "La Comisi&oacute;n.";
 choices[22][2] = "El Consejo.";
 choices[22][3] = "El Parlamento Europeo.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[23]= new Array();
 choices[23][0] = "Neo4J ";
 choices[23][1] = "OrientDB ";
 choices[23][2] = "InfoGrid ";
 choices[23][3] = "SimpleDB";
 answers[23] = choices[23][3];
 units[23] = "73";
 comments[23] = "Id Pregunta: 653. ";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[24]= "25)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[24][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[24][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[24][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[24] = choices[24][0];
 units[24] = "19";
 comments[24] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[25]= new Array();
 choices[25][0] = "Al Consejo Europeo.";
 choices[25][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[25][2] = "A la Comisi&oacute;n Europea.";
 choices[25][3] = "Al Parlamento Europeo.";
 answers[25] = choices[25][2];
 units[25] = "5";
 comments[25] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[26]= "27)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[26]= new Array();
 choices[26][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[26][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[26][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[26][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[26] = choices[26][1];
 units[26] = "95";
 comments[26] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[27]= new Array();
 choices[27][0] = "MySQL";
 choices[27][1] = "SQLite";
 choices[27][2] = "Zope";
 choices[27][3] = "MariaDB";
 answers[27] = choices[27][2];
 units[27] = "61";
 comments[27] = "Id Pregunta: 575. Tema 61. TAI 2016.";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[28]= "29)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[28]= new Array();
 choices[28][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[28][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[28][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[28][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[28] = choices[28][2];
 units[28] = "8";
 comments[28] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[29]= "30)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[29]= new Array();
 choices[29][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[29][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[29][2] = "Un programa de igualdad.";
 choices[29][3] = "Un estatuto de igualdad.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[30]= new Array();
 choices[30][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[30][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[30][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[30][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[30] = choices[30][3];
 units[30] = "12";
 comments[30] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[31]= new Array();
 choices[31][0] = "Flexibilidad para variar el servicio o producto";
 choices[31][1] = "Eliminar desperdicios";
 choices[31][2] = "Decidir lo m&aacute;s tarde posible";
 choices[31][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[31] = choices[31][0];
 units[31] = "34";
 comments[31] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[32]= new Array();
 choices[32][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[32][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[32][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[32][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[32] = choices[32][2];
 units[32] = "71";
 comments[32] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[33]= "34)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[33]= new Array();
 choices[33][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[33][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[33][2] = "Cinco a&ntilde;os.";
 choices[33][3] = "Ninguna es correcta.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[34]= "35)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[34]= new Array();
 choices[34][0] = "Ley Org&aacute;nica.";
 choices[34][1] = "Ley de Bases.";
 choices[34][2] = "Ley ordinaria.";
 choices[34][3] = "Mandato.";
 answers[34] = choices[34][1];
 units[34] = "1";
 comments[34] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[35]= "36)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[35]= new Array();
 choices[35][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[35][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[35][2] = "Al Congreso de los Diputados.";
 choices[35][3] = "Al Gobierno.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[36]= new Array();
 choices[36][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[36][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[36][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[36][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[37]= "38)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[37]= new Array();
 choices[37][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[37][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[37][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[37][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[37] = choices[37][2];
 units[37] = "28";
 comments[37] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[38]= "39)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[38]= new Array();
 choices[38][0] = "Los propios miembros del Tribunal.";
 choices[38][1] = "El Consejo de Europa.";
 choices[38][2] = "El Consejo Europeo.";
 choices[38][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[39]= "40)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[39]= new Array();
 choices[39][0] = "Ley org&aacute;nica.";
 choices[39][1] = "Ley ordinaria.";
 choices[39][2] = "Ley de bases.";
 choices[39][3] = "Ley marco.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[40]= new Array();
 choices[40][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[40][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[40][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[40][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[40] = choices[40][3];
 units[40] = "22";
 comments[40] = "Id Pregunta: 120. ";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[41]= new Array();
 choices[41][0] = "Indirecta.";
 choices[41][1] = "Directa.";
 choices[41][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[41][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[42]= "43)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[42]= new Array();
 choices[42][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[42][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[42][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[42][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[42] = choices[42][1];
 units[42] = "5";
 comments[42] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[43]= "44)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[43]= new Array();
 choices[43][0] = "Estrasburgo.";
 choices[43][1] = "Bruselas.";
 choices[43][2] = "Luxemburgo.";
 choices[43][3] = "Holanda.";
 answers[43] = choices[43][0];
 units[43] = "5";
 comments[43] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[44]= "45)  El lenguaje SPARK es un subconjunto de:";
 choices[44]= new Array();
 choices[44][0] = "Java";
 choices[44][1] = "Fortran";
 choices[44][2] = "Ruby";
 choices[44][3] = "Ada";
 answers[44] = choices[44][3];
 units[44] = "73";
 comments[44] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[45]= new Array();
 choices[45][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[45][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[45][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[45][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[45] = choices[45][2];
 units[45] = "43";
 comments[45] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[46]= new Array();
 choices[46][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[46][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[46][2] = "c) Todas las respuestas son correctas.";
 choices[46][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[47]= "48)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[47]= new Array();
 choices[47][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[47][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[47][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[47][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[47] = choices[47][2];
 units[47] = "121";
 comments[47] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[48]= "49)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[48]= new Array();
 choices[48][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[48][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[48][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[48][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[49]= "50)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[49]= new Array();
 choices[49][0] = "los Ministros y los Secretarios de Estado";
 choices[49][1] = "los Subsecretarios y Secretarios generales";
 choices[49][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[49][3] = "los Directores generales";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[50]= "51)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[50]= new Array();
 choices[50][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[50][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[50][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[50][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[50] = choices[50][2];
 units[50] = "45";
 comments[50] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[51]= "52)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[51]= new Array();
 choices[51][0] = "la Administraci&oacute;n General del Estado";
 choices[51][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[51][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[51][3] = "el sector p&uacute;blico y privado institucional";
 answers[51] = choices[51][3];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[52]= "53)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[52]= new Array();
 choices[52][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[52][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[52][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[52][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[52] = choices[52][1];
 units[52] = "14";
 comments[52] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[53]= new Array();
 choices[53][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[53][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[53][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[53][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[53] = choices[53][0];
 units[53] = "73";
 comments[53] = "Id Pregunta: 654. ";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[54]= "55)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[54]= new Array();
 choices[54][0] = "el Secretario General";
 choices[54][1] = "el Subdirector General";
 choices[54][2] = "el Secretario de Estado";
 choices[54][3] = "ninguna es correcta";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[55]= new Array();
 choices[55][0] = "Categor&iacute;a b&aacute;sica";
 choices[55][1] = "Categor&iacute;a media";
 choices[55][2] = "Categor&iacute;a alta";
 choices[55][3] = "Categor&iacute;a media y alta";
 answers[55] = choices[55][2];
 units[55] = "46";
 comments[55] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[56]= "57)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[56]= new Array();
 choices[56][0] = "Cabr&aacute; recurso de alzada";
 choices[56][1] = "Cabr&aacute; el nuevo protesto";
 choices[56][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[56][3] = "No cabr&aacute; recurso alguno";
 answers[56] = choices[56][3];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "Principio de transparencia.";
 choices[57][1] = "Principio de cooperaci&oacute;n.";
 choices[57][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[57][3] = "Principio de lealtad institucional.";
 answers[57] = choices[57][1];
 units[57] = "10";
 comments[57] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[58]= new Array();
 choices[58][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[58][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[58][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[58][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[58] = choices[58][0];
 units[58] = "26";
 comments[58] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[59]= new Array();
 choices[59][0] = "Selenium";
 choices[59][1] = "JUnit";
 choices[59][2] = "Jenkins";
 choices[59][3] = "JMeter";
 answers[59] = choices[59][2];
 units[59] = "92";
 comments[59] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[60]= "61)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[60]= new Array();
 choices[60][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[60][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[60][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[60][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[61]= "62)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[61]= new Array();
 choices[61][0] = "Pas&oacute; de 518 a 626.";
 choices[61][1] = "Pas&oacute; de 434 a 518.";
 choices[61][2] = "Pas&oacute; de 345 a 512.";
 choices[61][3] = "Pas&oacute; de 435 a 610.";
 answers[61] = choices[61][1];
 units[61] = "5";
 comments[61] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[62]= "63)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[62]= new Array();
 choices[62][0] = "De las disposiciones favorables.";
 choices[62][1] = "De las disposiciones sancionadoras no favorables.";
 choices[62][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[62][3] = "Las respuestas b) y c) son correctas.";
 answers[62] = choices[62][3];
 units[62] = "1";
 comments[62] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[63]= "64)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[63][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[63][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[63][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[63] = choices[63][0];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[64]= new Array();
 choices[64][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[64][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[64][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[64][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[64] = choices[64][1];
 units[64] = "19";
 comments[64] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la respuesta falsa:";
 choices[65]= new Array();
 choices[65][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[65][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[65][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[65][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[65] = choices[65][2];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[66]= new Array();
 choices[66][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[66][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[66][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[66][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[67]= "68)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[67]= new Array();
 choices[67][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[67][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[67][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[67][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[68]= new Array();
 choices[68][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[68][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[68][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[68][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[68] = choices[68][2];
 units[68] = "77";
 comments[68] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[69]= new Array();
 choices[69][0] = "En t&iacute;tulos-valores.";
 choices[69][1] = "Las respuestas a) y b) son correctas.";
 choices[69][2] = "Las respuestas a) y b) no son correctas.";
 choices[69][3] = "En cuenta.";
 answers[69] = choices[69][1];
 units[69] = "10";
 comments[69] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[70]= new Array();
 choices[70][0] = "Anualmente";
 choices[70][1] = "Bienalmente";
 choices[70][2] = "Cada cuatro a&ntilde;os";
 choices[70][3] = "No se define ninguna periodicidad";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[71]= new Array();
 choices[71][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[71][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[71][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[71][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[71] = choices[71][0];
 units[71] = "45";
 comments[71] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[72]= new Array();
 choices[72][0] = "absoluta de las Cortes Generales.";
 choices[72][1] = "absoluta del Congreso de los Diputados.";
 choices[72][2] = "simple de las Cortes Generales.";
 choices[72][3] = "simple del Congreso de los Diputados.";
 answers[72] = choices[72][3];
 units[72] = "1";
 comments[72] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[73]= "74)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[73]= new Array();
 choices[73][0] = "los registros mercantiles";
 choices[73][1] = "los registros de la propiedad";
 choices[73][2] = "los protocolos notariales";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][3];
 units[73] = "7";
 comments[73] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[74]= "75)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[74]= new Array();
 choices[74][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[74][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[74][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[74][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[74] = choices[74][0];
 units[74] = "45";
 comments[74] = "Id Pregunta: 848. Xunta de Galicia 2015";


