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

//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[0]= "1)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[0]= new Array();
 choices[0][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[0][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[0][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[0][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[0] = choices[0][3];
 units[0] = "10";
 comments[0] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[1]= "2)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[1]= new Array();
 choices[1][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[1][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[1][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[1][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[1] = choices[1][1];
 units[1] = "7";
 comments[1] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[2]= new Array();
 choices[2][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[2][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[2][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[2][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[2] = choices[2][0];
 units[2] = "14";
 comments[2] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[3]= "4)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[3]= new Array();
 choices[3][0] = "la Administraci&oacute;n General del Estado";
 choices[3][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[3][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[3][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[3] = choices[3][3];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 757. Ley 40/2015";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[4]= new Array();
 choices[4][0] = "Al Consejo Europeo.";
 choices[4][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[4][2] = "A la Comisi&oacute;n Europea.";
 choices[4][3] = "Al Parlamento Europeo.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[5]= "6)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[5]= new Array();
 choices[5][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[5][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[5][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[5][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[6]= "7)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[6]= new Array();
 choices[6][0] = "Presentar la moci&oacute;n de censura.";
 choices[6][1] = "Presidir las sesiones del Parlamento.";
 choices[6][2] = "Organizar la Secretar&iacute;a General.";
 choices[6][3] = "Preparar las actividades de las Comisiones.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[7]= "8)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[7]= new Array();
 choices[7][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[7][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[7][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[7][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[7] = choices[7][1];
 units[7] = "56";
 comments[7] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique la afirmaci&oacute;n falsa:";
 choices[8]= new Array();
 choices[8][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[8][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[8][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[8][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[8] = choices[8][1];
 units[8] = "22";
 comments[8] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[9]= new Array();
 choices[9][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[9][1] = "Entrada en la Uni&oacute;n Europea";
 choices[9][2] = "Pactos de la Moncloa";
 choices[9][3] = "Ingreso en la ONU";
 answers[9] = choices[9][3];
 units[9] = "12";
 comments[9] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[10]= new Array();
 choices[10][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[10][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[10][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[10][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[10] = choices[10][1];
 units[10] = "43";
 comments[10] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[11]= new Array();
 choices[11][0] = "Categor&iacute;a b&aacute;sica";
 choices[11][1] = "Categor&iacute;a media";
 choices[11][2] = "Categor&iacute;a alta";
 choices[11][3] = "Categor&iacute;a media y alta";
 answers[11] = choices[11][2];
 units[11] = "46";
 comments[11] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[12]= "13)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[12]= new Array();
 choices[12][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[12][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[12][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[12][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[12] = choices[12][2];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[13]= "14)  El lenguaje SPARK es un subconjunto de:";
 choices[13]= new Array();
 choices[13][0] = "Java";
 choices[13][1] = "Fortran";
 choices[13][2] = "Ruby";
 choices[13][3] = "Ada";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[14]= "15)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[14]= new Array();
 choices[14][0] = "Municipios, provincias y CCAA.";
 choices[14][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[14][2] = "En CCAA, 50 provincias y municipios.";
 choices[14][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[15]= new Array();
 choices[15][0] = "El 1 de noviembre de 1994.";
 choices[15][1] = "El 1 de noviembre de 1992.";
 choices[15][2] = "El 1 de noviembre de 1995.";
 choices[15][3] = "El 1 de noviembre de 1993.";
 answers[15] = choices[15][3];
 units[15] = "5";
 comments[15] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[16]= "17)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[16]= new Array();
 choices[16][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[16][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[16][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[16][3] = "Todas son correctas.";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[17]= "18)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[17]= new Array();
 choices[17][0] = "Monol&iacute;tico.";
 choices[17][1] = "Estratificado.";
 choices[17][2] = "Cliente/servidor.";
 choices[17][3] = "Orientado a objetos.";
 answers[17] = choices[17][3];
 units[17] = "56";
 comments[17] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[18]= new Array();
 choices[18][0] = "Quince miembros.";
 choices[18][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[18][2] = "Los miembros que determine el Consejo.";
 choices[18][3] = "Un Presidente y quince miembros.";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[19]= "20)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[19]= new Array();
 choices[19][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[19][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[19][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[19][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[19] = choices[19][1];
 units[19] = "43";
 comments[19] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[20]= new Array();
 choices[20][0] = "verbalmente";
 choices[20][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[20][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[20][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[20] = choices[20][2];
 units[20] = "7";
 comments[20] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[21]= "22)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[21]= new Array();
 choices[21][0] = "Intersecci&oacute;n.";
 choices[21][1] = "Uni&oacute;n.";
 choices[21][2] = "Restricci&oacute;n.";
 choices[21][3] = "Diferencia.";
 answers[21] = choices[21][0];
 units[21] = "60";
 comments[21] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[22]= "23)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[22]= new Array();
 choices[22][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[22][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[22][2] = "La normativa reguladora de cada derecho.";
 choices[22][3] = "Ley 50/1997, del Gobierno.";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[23]= "24)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[23]= new Array();
 choices[23][0] = "B&aacute;sico";
 choices[23][1] = "Medio";
 choices[23][2] = "Alto";
 choices[23][3] = "A los niveles medio y alto";
 answers[23] = choices[23][2];
 units[23] = "35";
 comments[23] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[24]= new Array();
 choices[24][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[24][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[24][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[24][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[25]= "26)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[25]= new Array();
 choices[25][0] = "Cifrada";
 choices[25][1] = "Conjunta";
 choices[25][2] = "Sistem&aacute;tica";
 choices[25][3] = "Todas son correctas";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[26][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[26][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[26][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[27]= "28)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[27]= new Array();
 choices[27][0] = "Est&aacute; desarrollado en Java.";
 choices[27][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[27][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[27][3] = "Todas las afirmaciones son correctas.";
 answers[27] = choices[27][2];
 units[27] = "92";
 comments[27] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[28]= new Array();
 choices[28][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[28][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[28][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[28][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[28] = choices[28][1];
 units[28] = "77";
 comments[28] = "Id Pregunta: 687. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[29]= new Array();
 choices[29][0] = "La Comisi&oacute;n Permanente.";
 choices[29][1] = "El Presidente.";
 choices[29][2] = "El Pleno.";
 choices[29][3] = "El Vicepresidente.";
 answers[29] = choices[29][3];
 units[29] = "1";
 comments[29] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[30]= "31)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[30]= new Array();
 choices[30][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[30][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[30][2] = "a y b son correctas";
 choices[30][3] = "a y b son incorrectas";
 answers[30] = choices[30][0];
 units[30] = "7";
 comments[30] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[31]= new Array();
 choices[31][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[31][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[31][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[31][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[31] = choices[31][0];
 units[31] = "46";
 comments[31] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[32]= "33)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Unidad de igualdad.";
 choices[32][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[32][2] = "Ninguna de las anteriores.";
 choices[32][3] = "A y B son correctas.";
 answers[32] = choices[32][1];
 units[32] = "14";
 comments[32] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[33]= "34)  El recurso de alzada puede interponerse:";
 choices[33]= new Array();
 choices[33][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[33][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[33][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[33][3] = "Ante el Defensor del Pueblo";
 answers[33] = choices[33][1];
 units[33] = "8";
 comments[33] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[34]= "35)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[34]= new Array();
 choices[34][0] = "Los cr&eacute;ditos";
 choices[34][1] = "Las partidas presupuestarias";
 choices[34][2] = "Los derechos";
 choices[34][3] = "Las obligaciones";
 answers[34] = choices[34][3];
 units[34] = "10";
 comments[34] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[35]= new Array();
 choices[35][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[35][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[35][2] = "Servicio de seguridad gestionada";
 choices[35][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[35] = choices[35][1];
 units[35] = "26";
 comments[35] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[36]= "37)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[36]= new Array();
 choices[36][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[36][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[36][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[36][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[36] = choices[36][2];
 units[36] = "73";
 comments[36] = "Id Pregunta: 652. ";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[37]= "38)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[37][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[37][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[37][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[37] = choices[37][3];
 units[37] = "14";
 comments[37] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[38]= new Array();
 choices[38][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[38][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[38][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[38][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[38] = choices[38][2];
 units[38] = "7";
 comments[38] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[39]= new Array();
 choices[39][0] = "No, en ning&uacute;n caso.";
 choices[39][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[39][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[39][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[39] = choices[39][3];
 units[39] = "1";
 comments[39] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[40]= "41)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[40]= new Array();
 choices[40][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[40][1] = "Clasificaci&oacute;n por cuenta.";
 choices[40][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[40][3] = "Clasificaci&oacute;n por intercambio.";
 answers[40] = choices[40][3];
 units[40] = "56";
 comments[40] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[41]= "42)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[41]= new Array();
 choices[41][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[41][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[41][2] = "Gestionar el Registro de Operadores.";
 choices[41][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[41] = choices[41][3];
 units[41] = "121";
 comments[41] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[42]= new Array();
 choices[42][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[42][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[42][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[42][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[42] = choices[42][3];
 units[42] = "1";
 comments[42] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[43]= new Array();
 choices[43][0] = "Por Real Decreto.";
 choices[43][1] = "Por Orden del Ministerio del Interior.";
 choices[43][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[43][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[44]= "45)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[44]= new Array();
 choices[44][0] = "En qu&eacute; nos gastamos el dinero";
 choices[44][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[44][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[44][3] = "Qui&eacute;n se gasta el dinero.";
 answers[44] = choices[44][0];
 units[44] = "10";
 comments[44] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[45]= "46)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[45]= new Array();
 choices[45][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[45][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[45][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[45][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[46]= "47)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[46]= new Array();
 choices[46][0] = "Sean dirigidas por mujeres";
 choices[46][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[46][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[46][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[46] = choices[46][2];
 units[46] = "14";
 comments[46] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[47]= "48)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[47]= new Array();
 choices[47][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[47][1] = "Ninguna de las respuestas es correcta.";
 choices[47][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[47][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[47] = choices[47][0];
 units[47] = "5";
 comments[47] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[48]= "49)  La soberan&iacute;a nacional reside en:";
 choices[48]= new Array();
 choices[48][0] = "el Parlamento nacional.";
 choices[48][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[48][2] = "el pueblo espa&ntilde;ol.";
 choices[48][3] = "el Congreso y el Senado.";
 answers[48] = choices[48][3];
 units[48] = "1";
 comments[48] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[49]= new Array();
 choices[49][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[49][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[49][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[49][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[50]= "51)  ITIL v3, define:";
 choices[50]= new Array();
 choices[50][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[50][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[50][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[50][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[50] = choices[50][0];
 units[50] = "101";
 comments[50] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[51]= "52)  El pacto fiscal europeo de 2012 incluye:";
 choices[51]= new Array();
 choices[51][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[51][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[51][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[51][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[51] = choices[51][0];
 units[51] = "5";
 comments[51] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[52]= "53)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[52]= new Array();
 choices[52][0] = "Los propios miembros del Tribunal.";
 choices[52][1] = "El Consejo de Europa.";
 choices[52][2] = "El Consejo Europeo.";
 choices[52][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[53]= "54)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[53]= new Array();
 choices[53][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[53][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[53][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[53][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[54]= "55)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[54]= new Array();
 choices[54][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[54][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[54][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[54][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[55]= "56)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[55]= new Array();
 choices[55][0] = "De los interesados en el procedimiento";
 choices[55][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[55][2] = "Disposiciones generales";
 choices[55][3] = "De los actos administrativos";
 answers[55] = choices[55][2];
 units[55] = "7";
 comments[55] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[56]= "57)  La Administraci&oacute;n General del Estado se organiza:";
 choices[56]= new Array();
 choices[56][0] = "en Ministerios";
 choices[56][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[56][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[56][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[56] = choices[56][1];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[57]= "58)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[57]= new Array();
 choices[57][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[57][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[57][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[57][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[58]= new Array();
 choices[58][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[58][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[58][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[58][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[58] = choices[58][1];
 units[58] = "22";
 comments[58] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[59]= new Array();
 choices[59][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[59][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[59][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[59][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[59] = choices[59][3];
 units[59] = "56";
 comments[59] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[60]= "61)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[60]= new Array();
 choices[60][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[60][1] = "Personas con nacionalidad europea.";
 choices[60][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[60][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[61]= "62)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[61]= new Array();
 choices[61][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[61][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[61][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[61][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[62]= new Array();
 choices[62][0] = "El Presidente del Gobierno.";
 choices[62][1] = "El Consejo de Ministros.";
 choices[62][2] = "40 Diputados.";
 choices[62][3] = "El Ministerio Fiscal.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[63]= "64)  El Presupuesto por programas sirve para saber...";
 choices[63]= new Array();
 choices[63][0] = "En qu&eacute; nos gastamos el dinero";
 choices[63][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[63][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[63][3] = "Qui&eacute;n se gasta el dinero";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[64]= new Array();
 choices[64][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[64][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[64][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[64][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[65]= "66)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[65]= new Array();
 choices[65][0] = "Primario, que incluye la agricultura y la pesca";
 choices[65][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[65][2] = "Minero, junto con las exportaciones de comercio";
 choices[65][3] = "Servicios";
 answers[65] = choices[65][3];
 units[65] = "12";
 comments[65] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[66]= new Array();
 choices[66][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[66][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[66][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[66][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[66] = choices[66][1];
 units[66] = "84";
 comments[66] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[67]= "68)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[67]= new Array();
 choices[67][0] = "la Administraci&oacute;n General del Estado";
 choices[67][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[67][2] = "las Entidades Locales";
 choices[67][3] = "todas son correctas";
 answers[67] = choices[67][3];
 units[67] = "7";
 comments[67] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[68]= "69)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[68]= new Array();
 choices[68][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[68][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[68][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[68][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[68] = choices[68][1];
 units[68] = "1";
 comments[68] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[69]= new Array();
 choices[69][0] = "Bienalmente";
 choices[69][1] = "Anualmente";
 choices[69][2] = "Semestralmente";
 choices[69][3] = "Cada cuatro a&ntilde;os";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[70]= "71)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[70]= new Array();
 choices[70][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[70][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[70][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[70][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[70] = choices[70][1];
 units[70] = "14";
 comments[70] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[71]= "72)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[71]= new Array();
 choices[71][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[71][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[71][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[71][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[71] = choices[71][2];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[72]= "73)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[72]= new Array();
 choices[72][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[72][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[72][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[72][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[72] = choices[72][2];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[73]= "74)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[73]= new Array();
 choices[73][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[73][1] = "La CETIC";
 choices[73][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[73][3] = "El MHFP";
 answers[73] = choices[73][0];
 units[73] = "19";
 comments[73] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[74]= "75)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[74]= new Array();
 choices[74][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[74][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[74][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[74][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 270. CONSTITUCION1978";


