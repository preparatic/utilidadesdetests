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

//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[0]= "1)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[0]= new Array();
 choices[0][0] = "Decretos Legislativos.";
 choices[0][1] = "Decretos-leyes.";
 choices[0][2] = "Leyes de bases.";
 choices[0][3] = "Reales Decretos del Consejo de Ministros.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[1]= new Array();
 choices[1][0] = "Art. 25 LO, 3/2007.";
 choices[1][1] = "Art. 23 LO, 3/2007.";
 choices[1][2] = "Art. 14 LO, 3/2007.";
 choices[1][3] = "Ninguna es correcta, es el art. 13.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[2]= new Array();
 choices[2][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[2][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[2][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[2][3] = "El Senado se compone de 350 senadores.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[3]= "4)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[3]= new Array();
 choices[3][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[3][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[3][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[3][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[3] = choices[3][2];
 units[3] = "19";
 comments[3] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[4]= new Array();
 choices[4][0] = "De 1a  4 ";
 choices[4][1] = "De 3 a  7 ";
 choices[4][2] = "De 5 a  9";
 choices[4][3] = "De 7 a 11";
 answers[4] = choices[4][2];
 units[4] = "34, 84";
 comments[4] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[5]= new Array();
 choices[5][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[5][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[5][2] = "Apertura al exterior";
 choices[5][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[5] = choices[5][0];
 units[5] = "17";
 comments[5] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[6]= "7)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[6]= new Array();
 choices[6][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[6][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[6][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[6][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[7]= "8)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[7]= new Array();
 choices[7][0] = "ISO/IEC 25000";
 choices[7][1] = "ISO/IEC 27000";
 choices[7][2] = "ISO 9000";
 choices[7][3] = "ISO 9001";
 answers[7] = choices[7][0];
 units[7] = "93";
 comments[7] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[8]= "9)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[8]= new Array();
 choices[8][0] = "Un informe de g&eacute;nero.";
 choices[8][1] = "La variable de sexo.";
 choices[8][2] = "La variable de edad.";
 choices[8][3] = "La variable de comportamiento.";
 answers[8] = choices[8][1];
 units[8] = "14";
 comments[8] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la respuesta correcta:";
 choices[9]= new Array();
 choices[9][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[9][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[9][2] = "A y B son correctas.";
 choices[9][3] = "A y B son falsas.";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[10]= "11)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[10]= new Array();
 choices[10][0] = "El Segundo.";
 choices[10][1] = "El Primero.";
 choices[10][2] = "El Preliminar.";
 choices[10][3] = "El Tercero.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[11]= "12)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[11]= new Array();
 choices[11][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[11][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[11][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[11][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[12]= "13)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[12]= new Array();
 choices[12][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[12][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[12][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[12][3] = "Todas las respuestas son correctas.";
 answers[12] = choices[12][0];
 units[12] = "101";
 comments[12] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[13]= "14)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[13]= new Array();
 choices[13][0] = "Estrasburgo.";
 choices[13][1] = "Bruselas.";
 choices[13][2] = "Luxemburgo.";
 choices[13][3] = "Holanda.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[14]= "15)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[14]= new Array();
 choices[14][0] = "la capital del pa&iacute;s";
 choices[14][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[14][2] = "cada una de las provincias";
 choices[14][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[14] = choices[14][1];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[15][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[15][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[15][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[15] = choices[15][2];
 units[15] = "1";
 comments[15] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[16][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[16][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[16][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[16] = choices[16][3];
 units[16] = "44";
 comments[16] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[17]= "18)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[17]= new Array();
 choices[17][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[17][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[17][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[17][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[17] = choices[17][1];
 units[17] = "74";
 comments[17] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[18]= new Array();
 choices[18][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[18][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[18][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[18][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[18] = choices[18][2];
 units[18] = "26";
 comments[18] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[19]= "20)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[19]= new Array();
 choices[19][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[19][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[19][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[19][3] = "Todos las anteriores son ciertas.";
 answers[19] = choices[19][3];
 units[19] = "12";
 comments[19] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[20][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[20][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[20][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[21]= "22)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[21]= new Array();
 choices[21][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[21][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[21][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[21][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[21] = choices[21][1];
 units[21] = "106";
 comments[21] = "Id Pregunta: 575. Tema 106. TAI 2016.";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[22]= new Array();
 choices[22][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[22][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[22][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[22][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[22] = choices[22][3];
 units[22] = "106";
 comments[22] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[23]= "24)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[23]= new Array();
 choices[23][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[23][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[23][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[23][3] = "ninguna es correcta";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[24]= new Array();
 choices[24][0] = "Establecer redes de telecomunicaciones continentales";
 choices[24][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[24][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[24][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[24] = choices[24][0];
 units[24] = "17";
 comments[24] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[25]= "26)  Es falso que:";
 choices[25]= new Array();
 choices[25][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[25][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[25][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[25][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[25] = choices[25][1];
 units[25] = "18, 20";
 comments[25] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[26]= "27)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[26]= new Array();
 choices[26][0] = "Presencia equilibrada.";
 choices[26][1] = "Presencia paritaria.";
 choices[26][2] = "Presencia consensuada.";
 choices[26][3] = "presencia horizontal.";
 answers[26] = choices[26][0];
 units[26] = "14";
 comments[26] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[27]= new Array();
 choices[27][0] = "NoSQL";
 choices[27][1] = "Sistemas de baja latencia";
 choices[27][2] = "MapReduce";
 choices[27][3] = "Business Intelligence";
 answers[27] = choices[27][1];
 units[27] = "73";
 comments[27] = "Id Pregunta: 660. ";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[28]= new Array();
 choices[28][0] = "Flexibilidad para variar el servicio o producto";
 choices[28][1] = "Eliminar desperdicios";
 choices[28][2] = "Decidir lo m&aacute;s tarde posible";
 choices[28][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[28] = choices[28][0];
 units[28] = "34";
 comments[28] = "Id Pregunta: 721. Metodologias Lean";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[29]= new Array();
 choices[29][0] = "Programa de Educaci&oacute;n Digital";
 choices[29][1] = "Programa de Salud y Bienestar Social";
 choices[29][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[29][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[29] = choices[29][3];
 units[29] = "19";
 comments[29] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[30]= new Array();
 choices[30][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[30][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[30][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[30][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[30] = choices[30][1];
 units[30] = "22";
 comments[30] = "Id Pregunta: 122. ";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[31]= new Array();
 choices[31][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[31][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[31][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[31][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[31] = choices[31][0];
 units[31] = "15";
 comments[31] = "Id Pregunta: 117. ";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[32]= new Array();
 choices[32][0] = "Perceptible";
 choices[32][1] = "Operable";
 choices[32][2] = "Comprensible";
 choices[32][3] = "Robusto";
 answers[32] = choices[32][2];
 units[32] = "42";
 comments[32] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[33]= new Array();
 choices[33][0] = "10 d&iacute;as.";
 choices[33][1] = "15 d&iacute;as.";
 choices[33][2] = "1 mes.";
 choices[33][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[33] = choices[33][0];
 units[33] = "7";
 comments[33] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[34]= new Array();
 choices[34][0] = "Al Consejo Europeo.";
 choices[34][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[34][2] = "A la Comisi&oacute;n Europea.";
 choices[34][3] = "Al Parlamento Europeo.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[35]= "36)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[35]= new Array();
 choices[35][0] = "Tres a&ntilde;os.";
 choices[35][1] = "Dos a&ntilde;os y medio.";
 choices[35][2] = "Cinco a&ntilde;os.";
 choices[35][3] = "Seis a&ntilde;os.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[36]= "37)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[36]= new Array();
 choices[36][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[36][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[36][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[36][3] = "Todos los anteriores";
 answers[36] = choices[36][3];
 units[36] = "19";
 comments[36] = "Id Pregunta: 561. Agenda Digital";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[37]= "38)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[37]= new Array();
 choices[37][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[37][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[37][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[37][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[37] = choices[37][2];
 units[37] = "7";
 comments[37] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[38]= "39)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[38]= new Array();
 choices[38][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[38][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[38][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[38][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[38] = choices[38][1];
 units[38] = "19";
 comments[38] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[39]= new Array();
 choices[39][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[39][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[39][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[39][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[39] = choices[39][1];
 units[39] = "19";
 comments[39] = "Id Pregunta: 562. Agenda Digital";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[40]= "41)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[40]= new Array();
 choices[40][0] = "ASF-AL (Apache License 2.0)";
 choices[40][1] = "EUPL (European Union Public License)";
 choices[40][2] = "LGPL (Lesser General Public License)";
 choices[40][3] = "MIT(MIT License)";
 answers[40] = choices[40][1];
 units[40] = "43";
 comments[40] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[41]= "42)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[41]= new Array();
 choices[41][0] = "el Secretario General";
 choices[41][1] = "el Subdirector General";
 choices[41][2] = "el Secretario de Estado";
 choices[41][3] = "ninguna es correcta";
 answers[41] = choices[41][0];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[42]= "43)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[42]= new Array();
 choices[42][0] = "El Presidente del Congreso de los Diputados.";
 choices[42][1] = "El Presidente del Gobierno.";
 choices[42][2] = "El Rey.";
 choices[42][3] = "El Consejo de Ministros.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[43]= "44)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[43]= new Array();
 choices[43][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[43][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[43][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[43][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[43] = choices[43][2];
 units[43] = "22";
 comments[43] = "Id Pregunta: 128. ";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[44]= "45)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[44]= new Array();
 choices[44][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[44][1] = "1 de enero de 2015";
 choices[44][2] = "1 de enero de 2016";
 choices[44][3] = "1 de julio de 2016";
 answers[44] = choices[44][3];
 units[44] = "77";
 comments[44] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la respuesta falsa:";
 choices[45]= new Array();
 choices[45][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[45][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[45][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[45][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[46]= new Array();
 choices[46][0] = "Constitucional.";
 choices[46][1] = "Penal.";
 choices[46][2] = "Militar.";
 choices[46][3] = "Tribunales consuetudinarios.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[47]= "48)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[47]= new Array();
 choices[47][0] = "la Administraci&oacute;n General del Estado";
 choices[47][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[47][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[47][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[48]= "49)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[48]= new Array();
 choices[48][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[48][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[48][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[48][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[48] = choices[48][0];
 units[48] = "12";
 comments[48] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[49]= "50)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[49]= new Array();
 choices[49][0] = "Los cr&eacute;ditos";
 choices[49][1] = "Las partidas presupuestarias";
 choices[49][2] = "Los derechos";
 choices[49][3] = "Las obligaciones";
 answers[49] = choices[49][3];
 units[49] = "10";
 comments[49] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[50]= "51)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[50]= new Array();
 choices[50][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[50][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[50][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[50][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[50] = choices[50][1];
 units[50] = "19";
 comments[50] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[51]= new Array();
 choices[51][0] = "El rey, a propuesta del Gobierno.";
 choices[51][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[51][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[51][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[52]= new Array();
 choices[52][0] = "Cifrado de las comunicaciones";
 choices[52][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[52][2] = "Registro de los accesos";
 choices[52][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[52] = choices[52][1];
 units[52] = "35";
 comments[52] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[53]= "54)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[53]= new Array();
 choices[53][0] = "Estrat&eacute;gico";
 choices[53][1] = "Operativo";
 choices[53][2] = "T&aacute;ctico";
 choices[53][3] = "Tecnol&oacute;gico";
 answers[53] = choices[53][0];
 units[53] = "36";
 comments[53] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[54]= "55)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[54]= new Array();
 choices[54][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[54][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[54][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][0];
 units[54] = "28";
 comments[54] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[55]= new Array();
 choices[55][0] = "al menos por 50 Diputados.";
 choices[55][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[55][2] = "por la Mesa del Congreso de los Diputados.";
 choices[55][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "Diagrama de clases";
 choices[56][1] = "Diagrama de componentes";
 choices[56][2] = "Diagrama de estructura";
 choices[56][3] = "Diagrama de paquetes";
 answers[56] = choices[56][0];
 units[56] = "91";
 comments[56] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[57]= "58)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[57]= new Array();
 choices[57][0] = "El Rey.";
 choices[57][1] = "El Jefe del Estado.";
 choices[57][2] = "El Gobierno.";
 choices[57][3] = "El Presidente del Gobierno.";
 answers[57] = choices[57][2];
 units[57] = "1";
 comments[57] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[58]= "59)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[58]= new Array();
 choices[58][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[58][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[58][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[58][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[58] = choices[58][1];
 units[58] = "35";
 comments[58] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[59]= "60)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[59]= new Array();
 choices[59][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[59][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[59][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[59][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[60]= "61)  La recusaci&oacute;n se plantea...";
 choices[60]= new Array();
 choices[60][0] = "Antes de iniciado el procedimiento";
 choices[60][1] = "Una vez iniciado el procedimiento";
 choices[60][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[60][3] = "En cualquier momento del procedimiento";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[61]= "62)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[61]= new Array();
 choices[61][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[61][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[61][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[61][3] = "Todas las anteriores son correctas.";
 answers[61] = choices[61][3];
 units[61] = "47";
 comments[61] = "Id Pregunta: 676. Receta electr&oacute;nica";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[62]= new Array();
 choices[62][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[62][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[62][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[62][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[62] = choices[62][2];
 units[62] = "22";
 comments[62] = "Id Pregunta: 129. ";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[63]= new Array();
 choices[63][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[63][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[63][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[63][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[63] = choices[63][3];
 units[63] = "34, 84";
 comments[63] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[64]= "65)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[64]= new Array();
 choices[64][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[64][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[64][2] = "Los interesados en el procedimiento";
 choices[64][3] = "Las alternativas b) y c) son correctas";
 answers[64] = choices[64][1];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[65]= "66)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[65]= new Array();
 choices[65][0] = "Subsecretario";
 choices[65][1] = "Subdirector general";
 choices[65][2] = "Secretario de Estado";
 choices[65][3] = "ninguna es correcta";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[66]= "67)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[66]= new Array();
 choices[66][0] = "apud acta";
 choices[66][1] = "presencialmente";
 choices[66][2] = "electr&oacute;nicamente";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "7";
 comments[66] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[67]= "68)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[67]= new Array();
 choices[67][0] = "Interchange of Data between Administrations (IDA)";
 choices[67][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[67][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[67][3] = "Interoperability Electronic European Solution (IEES)";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[68]= "69)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[68]= new Array();
 choices[68][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[68][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[68][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[68][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[69]= new Array();
 choices[69][0] = "Cuatro.";
 choices[69][1] = "Una.";
 choices[69][2] = "Cinco.";
 choices[69][3] = "Nueve.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[70]= "71)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[70]= new Array();
 choices[70][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[70][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[70][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[70][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[70] = choices[70][1];
 units[70] = "1";
 comments[70] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[71]= "72)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[71]= new Array();
 choices[71][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[71][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[71][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[71][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[71] = choices[71][1];
 units[71] = "26";
 comments[71] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[72]= "73)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[72]= new Array();
 choices[72][0] = "En qu&eacute; nos gastamos el dinero";
 choices[72][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[72][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[72][3] = "Qui&eacute;n se gasta el dinero.";
 answers[72] = choices[72][0];
 units[72] = "10";
 comments[72] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[73]= new Array();
 choices[73][0] = "Art. 13, L.O.3/2007.";
 choices[73][1] = "Art. 14, L.O.3/2007.";
 choices[73][2] = "Art. 11, L.O.3/2007.";
 choices[73][3] = "Ninguna es correcta.";
 answers[73] = choices[73][2];
 units[73] = "14";
 comments[73] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[74]= new Array();
 choices[74][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[74][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[74][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[74][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[74] = choices[74][1];
 units[74] = "44";
 comments[74] = "Id Pregunta: 73. AGE A1 2015";


