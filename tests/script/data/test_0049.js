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
var preguntaids = new Array();

//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; es el machine learning?";
 choices[0]= new Array();
 choices[0][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[0][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[0][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[0][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[0] = choices[0][0];
 units[0] = "73";
 comments[0] = "Id Pregunta: 659. ";
 preguntaids[0] = 659


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[1]= "2)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[1]= new Array();
 choices[1][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[1][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[1][2] = "Son incompatibles ambas actas de diputado.";
 choices[1][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[1] = choices[1][2];
 units[1] = "5";
 comments[1] = "Id Pregunta: 335. UNION EUROPEA";
 preguntaids[1] = 335


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[2]= "3)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[2]= new Array();
 choices[2][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[2][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[2][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[2][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[2] = choices[2][2];
 units[2] = "26";
 comments[2] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[2] = 99


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[3]= "4)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[3]= new Array();
 choices[3][0] = "18 miembros.";
 choices[3][1] = "Ninguna es correcta.";
 choices[3][2] = "22 miembros.";
 choices[3][3] = "21 miembros.";
 answers[3] = choices[3][1];
 units[3] = "5";
 comments[3] = "Id Pregunta: 347. UNION EUROPEA";
 preguntaids[3] = 347


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[4]= new Array();
 choices[4][0] = "No se aplican directamente en los Estados.";
 choices[4][1] = "No son vinculantes.";
 choices[4][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[4][3] = "Tienen alcance general.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[4] = 356


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[5]= new Array();
 choices[5][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[5][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[5][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[5][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[5] = choices[5][0];
 units[5] = "14";
 comments[5] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";
 preguntaids[5] = 382


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[6]= "7)  En las Administraciones P&uacute;blicas...";
 choices[6]= new Array();
 choices[6][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[6][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[6][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[6][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[6] = choices[6][0];
 units[6] = "10";
 comments[6] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";
 preguntaids[6] = 455


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[7]= new Array();
 choices[7][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[7][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[7][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[7][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[7] = choices[7][1];
 units[7] = "78";
 comments[7] = "Id Pregunta: 50. AGE A1 2015";
 preguntaids[7] = 50


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[8]= "9)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[8]= new Array();
 choices[8][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[8][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[8][2] = "Absoluta frente a cualquier otro gasto.";
 choices[8][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";
 preguntaids[8] = 511


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[9]= "10)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[9]= new Array();
 choices[9][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[9][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[9][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[9][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[9] = choices[9][0];
 units[9] = "28";
 comments[9] = "Id Pregunta: 741. Estrategia TIC";
 preguntaids[9] = 741


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[10]= "11)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[10]= new Array();
 choices[10][0] = "SMB3";
 choices[10][1] = "AFP";
 choices[10][2] = "NFS";
 choices[10][3] = "FTP";
 answers[10] = choices[10][0];
 units[10] = "59";
 comments[10] = "Id Pregunta: 30. AGE A1 2015";
 preguntaids[10] = 30


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[11]= "12)  La recusaci&oacute;n se plantea...";
 choices[11]= new Array();
 choices[11][0] = "Antes de iniciado el procedimiento";
 choices[11][1] = "Una vez iniciado el procedimiento";
 choices[11][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[11][3] = "En cualquier momento del procedimiento";
 answers[11] = choices[11][0];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[11] = 829


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[12]= "13)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[12]= new Array();
 choices[12][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[12][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[12][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[12][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[12] = choices[12][0];
 units[12] = "31";
 comments[12] = "Id Pregunta: 2. AGE A1 2015";
 preguntaids[12] = 2


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[13]= "14)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[13]= new Array();
 choices[13][0] = "Son vinculantes solamente.";
 choices[13][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[13][2] = "Son preceptivos y vinculantes.";
 choices[13][3] = "Son preceptivos y no vinculantes.";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 355. UNION EUROPEA";
 preguntaids[13] = 355


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[14]= "15)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[14]= new Array();
 choices[14][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[14][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[14][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[14][3] = "Todas las respuestas son correctas.";
 answers[14] = choices[14][0];
 units[14] = "101";
 comments[14] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[14] = 648


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[15]= "16)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[15]= new Array();
 choices[15][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[15][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[15][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[15][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[15] = 316


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[16]= "17)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[16]= new Array();
 choices[16][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[16][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[16][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[16][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[16] = choices[16][0];
 units[16] = "8";
 comments[16] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";
 preguntaids[16] = 146


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[17]= "18)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[17]= new Array();
 choices[17][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[17][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[17][2] = "Son refrendados por el Rey.";
 choices[17][3] = "Son convocados por el Presidente del Gobierno.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 217. CONSTITUCION1978";
 preguntaids[17] = 217


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[18]= new Array();
 choices[18][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[18][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[18][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[18][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[18] = choices[18][1];
 units[18] = "1";
 comments[18] = "Id Pregunta: 219. CONSTITUCION1978";
 preguntaids[18] = 219


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[19]= "20)  Sobre las URL de los sitios web p&uacute;blicos, se&ntilde;ale cu&aacute;l NO es verdadera:";
 choices[19]= new Array();
 choices[19][0] = "Se recomienda utilizar la URL con dominio &lt;.gob.es&gt; en todos los niveles de la Administraci&oacute;n General del Estado, para todos los sitios web.";
 choices[19][1] = "Si se trata de organismos muy conocidos por los ciudadanos y siempre que no coincida con la denominaci&oacute;n del portal, se puede utilizar la denominaci&oacute;n actual con .gob.es";
 choices[19][2] = "Para una mayor normalizaci&oacute;n siempre se podr&iacute;a redireccionar autom&aacute;ticamente desde una URL a otra, para lo cual habr&aacute; que registrar los dos dominios: organismo.gob.es y sede.organismo.gob.es.";
 choices[19][3] = "Se recomienda utilizar sede.aaaa.gob.es, donde aaaa se sustituir&aacute; por el nombre del Ministerio al que pertenece el organismo.";
 answers[19] = choices[19][3];
 units[19] = "125";
 comments[19] = "Id Pregunta: 862. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[19] = 862


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[20]= "21)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[20]= new Array();
 choices[20][0] = "Principio de transparencia.";
 choices[20][1] = "Principio de cooperaci&oacute;n.";
 choices[20][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[20][3] = "Principio de lealtad institucional.";
 answers[20] = choices[20][1];
 units[20] = "10";
 comments[20] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[20] = 504


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[21]= new Array();
 choices[21][0] = "Versi&oacute;n digital prioritaria.";
 choices[21][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[21][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[21][3] = "Apertura y transparencia.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 287. UNION EUROPEA";
 preguntaids[21] = 287


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[22]= "23)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[22]= new Array();
 choices[22][0] = "Alrededor de un 26% del PIB";
 choices[22][1] = "Alrededor de un 11% del PIB";
 choices[22][2] = "Alrededor de un 34% del PIB";
 choices[22][3] = "Alrededor de un 7% del PIB";
 answers[22] = choices[22][1];
 units[22] = "12";
 comments[22] = "Id Pregunta: 570. Modelo econ&oacute;mico";
 preguntaids[22] = 570


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[23]= "24)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[23]= new Array();
 choices[23][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[23][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[23][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[23][3] = "Todas las respuestas son correctas.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 375. UNION EUROPEA";
 preguntaids[23] = 375


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[24]= "25)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[24]= new Array();
 choices[24][0] = "Son actos individuales no normativos.";
 choices[24][1] = "Poseen alcance general.";
 choices[24][2] = "Son actos normativos.";
 choices[24][3] = "No son obligatorias.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 369. UNION EUROPEA";
 preguntaids[24] = 369


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[25]= "26)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[25]= new Array();
 choices[25][0] = "La Comisi&oacute;n Europea.";
 choices[25][1] = "El Consejo Europeo.";
 choices[25][2] = "El Consejo de Europa.";
 choices[25][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 310. UNION EUROPEA";
 preguntaids[25] = 310


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[26]= new Array();
 choices[26][0] = "Car&aacute;cter sustitutivo";
 choices[26][1] = "Car&aacute;cter obligatorio";
 choices[26][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][3];
 units[26] = "19";
 comments[26] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[26] = 583


//  Id pregunta: 857 Año de creación de pregunta: 2016
 questions[27]= "28)  Sobre el multiling&uuml;ismo en los sitios web p&uacute;blicos, se&ntilde;ale la respuesta falsa:";
 choices[27]= new Array();
 choices[27][0] = "Los responsables de contenidos y responsables t&eacute;cnicos de portales de cualquier organismo de la Administraci&oacute;n General del Estado deben tener en cuenta que Espa&ntilde;a es un pa&iacute;s multiling&uuml;e y que deben velar para que el idioma no constituya una barrera al acceso a los contenidos de las webs p&uacute;blicas.";
 choices[27][1] = "Cada Comunidad Aut&oacute;noma debe encargarse de la traducci&oacute;n de los contenidos de sus p&aacute;ginas web para facilitar y acercar los servicios prestados por la Administraci&oacute;n a los ciudadanos y empresas.";
 choices[27][2] = "Como criterio general, todos los contenidos de los portales ser&aacute;n accesibles, adem&aacute;s de en castellano, lengua espa&ntilde;ola oficial del Estado, en las siguientes lenguas idiomas cooficiales de las respectivas Comunidades Aut&oacute;nomas de Espa&ntilde;a: catal&aacute;n, euskera, gallego y valenciano.";
 choices[27][3] = "Para facilitar la traducci&oacute;n a las lenguas cooficiales y al ingl&eacute;s, se est&aacute; preparando una Plataforma de traducci&oacute;n autom&aacute;tica com&uacute;n de la AGE: PLATA que estar&aacute; disponible con gran calidad al catal&aacute;n, gallego y con necesidad de revisi&oacute;n asistida en el caso del euskera y el ingl&eacute;s.";
 answers[27] = choices[27][1];
 units[27] = "125";
 comments[27] = "Id Pregunta: 857. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[27] = 857


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[28]= "29)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[28]= new Array();
 choices[28][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[28][1] = "1 de enero de 2015";
 choices[28][2] = "1 de enero de 2016";
 choices[28][3] = "1 de julio de 2016";
 answers[28] = choices[28][3];
 units[28] = "77";
 comments[28] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[28] = 691


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[29]= new Array();
 choices[29][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[29][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[29][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[29][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[29] = 389


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[30]= "31)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[30]= new Array();
 choices[30][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[30][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[30][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[30][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[30] = choices[30][2];
 units[30] = "27";
 comments[30] = "Id Pregunta: 20. AGE A1 2015";
 preguntaids[30] = 20


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[31]= "32)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[31]= new Array();
 choices[31][0] = "150 trabajadores/as.";
 choices[31][1] = "200 trabajadores/as.";
 choices[31][2] = "250 trabajadores/as.";
 choices[31][3] = "300 trabajadores/as.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";
 preguntaids[31] = 420


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[32]= new Array();
 choices[32][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[32][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[32][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[32][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[32] = choices[32][2];
 units[32] = "10";
 comments[32] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";
 preguntaids[32] = 495


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[33]= "34)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[33]= new Array();
 choices[33][0] = "Gesti&oacute;n de la disponibilidad";
 choices[33][1] = "Gesti&oacute;n de la demanda";
 choices[33][2] = "Gesti&oacute;n de entregas";
 choices[33][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[33] = choices[33][0];
 units[33] = "101";
 comments[33] = "Id Pregunta: 21. AGE A1 2015";
 preguntaids[33] = 21


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[34]= new Array();
 choices[34][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[34][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[34][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[34][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[34] = choices[34][1];
 units[34] = "19";
 comments[34] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[34] = 581


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[35]= new Array();
 choices[35][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[35][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[35][2] = "El que hubieren designado las Cortes Generales.";
 choices[35][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 182. CONSTITUCION1978";
 preguntaids[35] = 182


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[36]= new Array();
 choices[36][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[36][1] = "Anteriormente se denominaba Sonar.";
 choices[36][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[36][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[36] = choices[36][2];
 units[36] = "92";
 comments[36] = "Id Pregunta: 717. INTEGRACION CONTINUA";
 preguntaids[36] = 717


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[37]= new Array();
 choices[37][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[37][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[37][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[37][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[37] = choices[37][0];
 units[37] = "77";
 comments[37] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[37] = 685


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[38]= "39)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[38]= new Array();
 choices[38][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[38][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[38][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[38][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[38] = choices[38][0];
 units[38] = "1";
 comments[38] = "Id Pregunta: 256. CONSTITUCION1978";
 preguntaids[38] = 256


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[39]= "40)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[39]= new Array();
 choices[39][0] = "61";
 choices[39][1] = "53";
 choices[39][2] = "65";
 choices[39][3] = "67";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[39] = 248


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[40]= new Array();
 choices[40][0] = "Estimaci&oacute;n del riesgo";
 choices[40][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[40][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[40][3] = "Mapa de riesgos";
 answers[40] = choices[40][3];
 units[40] = "45";
 comments[40] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[40] = 85


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[41]= new Array();
 choices[41][0] = "NoSQL";
 choices[41][1] = "Sistemas de baja latencia";
 choices[41][2] = "MapReduce";
 choices[41][3] = "Business Intelligence";
 answers[41] = choices[41][1];
 units[41] = "73";
 comments[41] = "Id Pregunta: 660. ";
 preguntaids[41] = 660


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[42]= "43)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[42]= new Array();
 choices[42][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[42][1] = "El Congreso de los Diputados.";
 choices[42][2] = "Las Cortes Generales.";
 choices[42][3] = "El Consejo de Ministros";
 answers[42] = choices[42][3];
 units[42] = "1";
 comments[42] = "Id Pregunta: 209. CONSTITUCION1978";
 preguntaids[42] = 209


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[43]= "44)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[43]= new Array();
 choices[43][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[43][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[43][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[43][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[43] = choices[43][3];
 units[43] = "12";
 comments[43] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[43] = 130


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[44]= "45)  El sector p&uacute;blico institucional se integra por:";
 choices[44]= new Array();
 choices[44][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[44][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[44][2] = "las Universidades p&uacute;blicas";
 choices[44][3] = "todas son correctas";
 answers[44] = choices[44][3];
 units[44] = "7";
 comments[44] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[44] = 516


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[45]= new Array();
 choices[45][0] = "Perceptible";
 choices[45][1] = "Operable";
 choices[45][2] = "Comprensible";
 choices[45][3] = "Robusto";
 answers[45] = choices[45][2];
 units[45] = "42";
 comments[45] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[45] = 83


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[46]= "47)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[46]= new Array();
 choices[46][0] = "l Consejo General del Poder Judicial";
 choices[46][1] = "El pleno de Tribunal Constitucional";
 choices[46][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[46][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[46] = 181


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[47]= "48)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[47]= new Array();
 choices[47][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[47][1] = "Personas con nacionalidad europea.";
 choices[47][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[47][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[47] = choices[47][3];
 units[47] = "5";
 comments[47] = "Id Pregunta: 376. UNION EUROPEA";
 preguntaids[47] = 376


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[48]= "49)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[48]= new Array();
 choices[48][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[48][1] = "Programa de cartas de servicios";
 choices[48][2] = "Programa para la mejora continua de las organizaciones.";
 choices[48][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[48] = choices[48][2];
 units[48] = "19";
 comments[48] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[48] = 747


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[49]= "50)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Acoso sexual.";
 choices[49][1] = "Acoso por raz&oacute;n de sexo.";
 choices[49][2] = "Acoso laboral.";
 choices[49][3] = "Acoso mental.";
 answers[49] = choices[49][1];
 units[49] = "14";
 comments[49] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";
 preguntaids[49] = 397


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[50]= "51)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[50]= new Array();
 choices[50][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[50][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[50][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[50][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[50] = choices[50][0];
 units[50] = "43";
 comments[50] = "Id Pregunta: 437. SERVICIOS COMUNES";
 preguntaids[50] = 437


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[51]= new Array();
 choices[51][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[51][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[51][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[51][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[51] = choices[51][1];
 units[51] = "77";
 comments[51] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";
 preguntaids[51] = 690


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[52]= "53)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[52]= new Array();
 choices[52][0] = "la poblaci&oacute;n del territorio";
 choices[52][1] = "el volumen de gesti&oacute;n";
 choices[52][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[52] = 816


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[53]= new Array();
 choices[53][0] = "El Parlamento y el Consejo.";
 choices[53][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[53][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[53][3] = "La Comisi&oacute;n y el Consejo.";
 answers[53] = choices[53][1];
 units[53] = "5";
 comments[53] = "Id Pregunta: 357. UNION EUROPEA";
 preguntaids[53] = 357


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[54]= "55)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[54]= new Array();
 choices[54][0] = "Ejecutivo";
 choices[54][1] = "Limitativo";
 choices[54][2] = "Estimativo";
 choices[54][3] = "Progresivo";
 answers[54] = choices[54][2];
 units[54] = "10";
 comments[54] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[54] = 448


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[55]= new Array();
 choices[55][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[55][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[55][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][2];
 units[55] = "23";
 comments[55] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";
 preguntaids[55] = 744


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[56]= new Array();
 choices[56][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[56][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[56][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[56][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[56] = 311


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[57]= "58)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[57]= new Array();
 choices[57][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[57][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[57][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[57][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[57] = choices[57][2];
 units[57] = "50";
 comments[57] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[57] = 633


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[58]= new Array();
 choices[58][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[58][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[58][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[58][3] = "Ninguna de las anteriores.";
 answers[58] = choices[58][1];
 units[58] = "92";
 comments[58] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[58] = 701


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[59]= "60)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[59]= new Array();
 choices[59][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[59][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[59][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[59][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[59] = choices[59][3];
 units[59] = "86";
 comments[59] = "Id Pregunta: 42. AGE A1 2015";
 preguntaids[59] = 42


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[60]= new Array();
 choices[60][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[60][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[60][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[60][3] = "Todos los anteriores";
 answers[60] = choices[60][3];
 units[60] = "19";
 comments[60] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[60] = 592


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[61]= "62)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[61]= new Array();
 choices[61][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[61][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[61][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[61][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[61] = choices[61][2];
 units[61] = "101";
 comments[61] = "Id Pregunta: 60. AGE A1 2015";
 preguntaids[61] = 60


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[62]= "63)  Sobre el recurso de reposici&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[62][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[62][2] = "Ha desaparecido en la Ley 39/2015";
 choices[62][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[62] = choices[62][0];
 units[62] = "8";
 comments[62] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";
 preguntaids[62] = 144


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[63]= new Array();
 choices[63][0] = "El Parlamento y el Consejo.";
 choices[63][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[63][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[63][3] = "La Comisi&oacute;n y el Consejo.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 372. UNION EUROPEA";
 preguntaids[63] = 372


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[64]= "65)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[64]= new Array();
 choices[64][0] = "Prevenir las conductas discriminatorias.";
 choices[64][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[64][2] = "Todas son correctas.";
 choices[64][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[64] = choices[64][2];
 units[64] = "14";
 comments[64] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";
 preguntaids[64] = 409


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[65]= "66)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[65]= new Array();
 choices[65][0] = "En qu&eacute; nos gastamos el dinero";
 choices[65][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[65][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[65][3] = "Qui&eacute;n se gasta el dinero.";
 answers[65] = choices[65][0];
 units[65] = "10";
 comments[65] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";
 preguntaids[65] = 457


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[66]= new Array();
 choices[66][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[66][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[66][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[66][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[66] = choices[66][1];
 units[66] = "14";
 comments[66] = "Id Pregunta: 680. Dependencia";
 preguntaids[66] = 680


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[67]= "68)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[67][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[67][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[67][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 681. Pensiones";
 preguntaids[67] = 681


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[68]= new Array();
 choices[68][0] = "Crecimiento inteligente.";
 choices[68][1] = "Crecimiento inclusivo.";
 choices[68][2] = "Crecimiento sostenible.";
 choices[68][3] = "Crecimiento integrador.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 283. UNION EUROPEA";
 preguntaids[68] = 283


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[69]= "70)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[69]= new Array();
 choices[69][0] = "la Administraci&oacute;n General del Estado";
 choices[69][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[69][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[69][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[69] = choices[69][3];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[69] = 769


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[70]= "71)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[70]= new Array();
 choices[70][0] = "Establecer tributos.";
 choices[70][1] = "Desarrollar lo establecido en una Ley.";
 choices[70][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[70][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 197. CONSTITUCION1978";
 preguntaids[70] = 197


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[71]= "72)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[71]= new Array();
 choices[71][0] = "Diez art&iacute;culos.";
 choices[71][1] = "Nueve art&iacute;culos.";
 choices[71][2] = "Once art&iacute;culos.";
 choices[71][3] = "Ocho art&iacute;culos.";
 answers[71] = choices[71][0];
 units[71] = "1";
 comments[71] = "Id Pregunta: 269. CONSTITUCION1978";
 preguntaids[71] = 269


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[72]= "73)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[72]= new Array();
 choices[72][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[72][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[72][2] = "Los interesados en el procedimiento";
 choices[72][3] = "Las alternativas b) y c) son correctas";
 answers[72] = choices[72][1];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[72] = 826


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[73]= new Array();
 choices[73][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[73][1] = "El Gobierno.";
 choices[73][2] = "El Presidente del Gobierno.";
 choices[73][3] = "El Consejo de Ministros.";
 answers[73] = choices[73][1];
 units[73] = "10";
 comments[73] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[73] = 490


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[74]= "75)  Se consideran interesados en el procedimiento administrativo:";
 choices[74]= new Array();
 choices[74][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[74][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[74][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[74][3] = "todas son correctas";
 answers[74] = choices[74][0];
 units[74] = "7";
 comments[74] = "Id Pregunta: 525. LEY 39/2015";
 preguntaids[74] = 525


