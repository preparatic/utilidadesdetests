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

//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[0]= "1)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[0]= new Array();
 choices[0][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[0][1] = "Static &amp; Active process for REsolution Bank.";
 choices[0][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[0][3] = "Super Active REsponse for Banks";
 answers[0] = choices[0][0];
 units[0] = "12";
 comments[0] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[1]= "2)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[1]= new Array();
 choices[1][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[1][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[1][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[1][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[1] = choices[1][1];
 units[1] = "19";
 comments[1] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[2]= "3)  En qu&eacute; consiste el principio BASE:";
 choices[2]= new Array();
 choices[2][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[2][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[2][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[2][3] = "Todas las anteriores son falsas";
 answers[2] = choices[2][3];
 units[2] = "73";
 comments[2] = "Id Pregunta: 103. ";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[3]= "4)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[3]= new Array();
 choices[3][0] = "Un recurso de incumplimiento.";
 choices[3][1] = "Recurso de carencia.";
 choices[3][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[3][3] = "Ninguna es correcta.";
 answers[3] = choices[3][2];
 units[3] = "5";
 comments[3] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[4]= "5)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[4]= new Array();
 choices[4][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[4][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[4][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[4][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[4] = choices[4][3];
 units[4] = "1";
 comments[4] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[5]= "6)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[5]= new Array();
 choices[5][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[5][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[5][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[5][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[5] = choices[5][2];
 units[5] = "14";
 comments[5] = "Id Pregunta: 683. Pensiones";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[6]= new Array();
 choices[6][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[6][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[6][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[6][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[6] = choices[6][1];
 units[6] = "34, 84";
 comments[6] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[7]= "8)  WS-Security contiene especificaciones sobre:";
 choices[7]= new Array();
 choices[7][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[7][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[7][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[7][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[7] = choices[7][1];
 units[7] = "119";
 comments[7] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[8]= new Array();
 choices[8][0] = "Art&iacute;culo 9.1 CE.";
 choices[8][1] = "Art&iacute;culo 53 CE.";
 choices[8][2] = "Art&iacute;culo 14 CE.";
 choices[8][3] = "Art&iacute;culo 16 CE.";
 answers[8] = choices[8][2];
 units[8] = "14";
 comments[8] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[9]= new Array();
 choices[9][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[9][1] = "Autorizar indultos generales.";
 choices[9][2] = "Sancionar las leyes.";
 choices[9][3] = "Promulgar las leyes.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[10]= new Array();
 choices[10][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[10][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[10][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[10][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[11]= new Array();
 choices[11][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[11][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[11][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[11][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[11] = choices[11][0];
 units[11] = "19";
 comments[11] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[12]= "13)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[12]= new Array();
 choices[12][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[12][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[12][2] = "A partir del 1 de enero de 2015";
 choices[12][3] = "A partir del 1 de julio de 2016";
 answers[12] = choices[12][1];
 units[12] = "77";
 comments[12] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[13]= "14)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[13]= new Array();
 choices[13][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[13][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[13][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[13][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[13] = choices[13][1];
 units[13] = "19";
 comments[13] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[14]= "15)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[14]= new Array();
 choices[14][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[14][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[14][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[14][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[14] = choices[14][0];
 units[14] = "60";
 comments[14] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[15]= new Array();
 choices[15][0] = "El Consejo Nacional de la Mujer.";
 choices[15][1] = "El Consejo de la Mujer.";
 choices[15][2] = "El Instituto de la Mujer.";
 choices[15][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[15] = choices[15][3];
 units[15] = "14";
 comments[15] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[16]= new Array();
 choices[16][0] = "Transferencias de cr&eacute;dito.";
 choices[16][1] = "Incorporaciones de cr&eacute;dito.";
 choices[16][2] = "Imputaciones de cr&eacute;dito.";
 choices[16][3] = "Ampliaciones de cr&eacute;dito.";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[17]= "18)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[17]= new Array();
 choices[17][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[17][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[17][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[17][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[17] = choices[17][3];
 units[17] = "109";
 comments[17] = "Id Pregunta: 652. Junta de Extremadura A1 2015";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique la afirmaci&oacute;n falsa:";
 choices[18]= new Array();
 choices[18][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[18][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[18][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[18][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[18] = choices[18][1];
 units[18] = "22";
 comments[18] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[19]= "20)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[19]= new Array();
 choices[19][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[19][1] = "El Congreso de los Diputados.";
 choices[19][2] = "Las Cortes Generales.";
 choices[19][3] = "El Consejo de Ministros";
 answers[19] = choices[19][3];
 units[19] = "1";
 comments[19] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[20]= "21)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[20]= new Array();
 choices[20][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[20][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[20][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[20][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[20] = choices[20][2];
 units[20] = "19";
 comments[20] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[21]= "22)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[21]= new Array();
 choices[21][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[21][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[21][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[21][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[21] = choices[21][1];
 units[21] = "19";
 comments[21] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[22]= new Array();
 choices[22][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[22][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[22][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[22][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[23]= "24)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[23]= new Array();
 choices[23][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[23][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[23][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[23][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[23] = choices[23][2];
 units[23] = "50";
 comments[23] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[24]= "25)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[24]= new Array();
 choices[24][0] = "Rey.";
 choices[24][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[24][2] = "Constituci&oacute;n.";
 choices[24][3] = "Pueblo.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[25]= "26)  El sector p&uacute;blico institucional se integra por:";
 choices[25]= new Array();
 choices[25][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[25][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[25][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[25][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[25] = choices[25][1];
 units[25] = "7";
 comments[25] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[26]= "27)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[26]= new Array();
 choices[26][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[26][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[26][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[26][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[26] = choices[26][0];
 units[26] = "43";
 comments[26] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[27]= "28)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[27]= new Array();
 choices[27][0] = "El acoso sexual.";
 choices[27][1] = "El acoso por raz&oacute;n del sexo.";
 choices[27][2] = "Ambas son correctas.";
 choices[27][3] = "A y B son incorrectas.";
 answers[27] = choices[27][2];
 units[27] = "14";
 comments[27] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[28]= new Array();
 choices[28][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[28][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[28][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[28][3] = "Todos los anteriores";
 answers[28] = choices[28][3];
 units[28] = "19";
 comments[28] = "Id Pregunta: 592. Estrategia TIC";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[29]= "30)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[29]= new Array();
 choices[29][0] = "apud acta";
 choices[29][1] = "presencialmente";
 choices[29][2] = "electr&oacute;nicamente";
 choices[29][3] = "todas son correctas";
 answers[29] = choices[29][3];
 units[29] = "7";
 comments[29] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[30]= new Array();
 choices[30][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[30][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[30][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[30][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[30] = choices[30][2];
 units[30] = "15";
 comments[30] = "Id Pregunta: 118. ";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[31]= "32)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[31]= new Array();
 choices[31][0] = "un &oacute;rgano superior";
 choices[31][1] = "un &oacute;rgano directivo";
 choices[31][2] = "un &oacute;rgano superior o directivo";
 choices[31][3] = "ninguna es correcta";
 answers[31] = choices[31][2];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[32]= new Array();
 choices[32][0] = "De oficio.";
 choices[32][1] = "A solicitud del interesado.";
 choices[32][2] = "De oficio o a solicitud del interesado.";
 choices[32][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[33]= "34)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[33]= new Array();
 choices[33][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[33][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[33][2] = "Funcionarios e interinos.";
 choices[33][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[33] = choices[33][3];
 units[33] = "20";
 comments[33] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; facilita un ORM?";
 choices[34]= new Array();
 choices[34][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[34][1] = "Conversi&oacute;n de objetos a documentos";
 choices[34][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[34][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[34] = choices[34][0];
 units[34] = "62";
 comments[34] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[35]= "36)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[35]= new Array();
 choices[35][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[35][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[35][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[35][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[35] = choices[35][1];
 units[35] = "58";
 comments[35] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[36][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[36][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[36][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[36] = choices[36][0];
 units[36] = "45";
 comments[36] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[37]= "38)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[37]= new Array();
 choices[37][0] = "El derecho a un permiso.";
 choices[37][1] = "Una prestaci&oacute;n por paternidad.";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "18 d&iacute;as de permiso.";
 answers[37] = choices[37][2];
 units[37] = "14";
 comments[37] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[38]= new Array();
 choices[38][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[38][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[38][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[38][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[38] = choices[38][0];
 units[38] = "26";
 comments[38] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[39]= "40)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[39]= new Array();
 choices[39][0] = "180 art&iacute;culos.";
 choices[39][1] = "182 art&iacute;culos.";
 choices[39][2] = "185 art&iacute;culos.";
 choices[39][3] = "190 art&iacute;culos.";
 answers[39] = choices[39][1];
 units[39] = "10";
 comments[39] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[40]= "41)  El recurso de alzada puede interponerse:";
 choices[40]= new Array();
 choices[40][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[40][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[40][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[40][3] = "Ante el Defensor del Pueblo";
 answers[40] = choices[40][1];
 units[40] = "8";
 comments[40] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[41]= "42)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[41]= new Array();
 choices[41][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[41][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[41][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[41][3] = "Todas las respuestas son correctas.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[42]= "43)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[42]= new Array();
 choices[42][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[42][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[42][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[42][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[43][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[43][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[43][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[43] = choices[43][1];
 units[43] = "76";
 comments[43] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[44]= new Array();
 choices[44][0] = "Indirecta.";
 choices[44][1] = "Directa.";
 choices[44][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[44][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[44] = choices[44][1];
 units[44] = "14";
 comments[44] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[45]= "46)  La soberan&iacute;a nacional reside en:";
 choices[45]= new Array();
 choices[45][0] = "el Parlamento nacional.";
 choices[45][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[45][2] = "el pueblo espa&ntilde;ol.";
 choices[45][3] = "el Congreso y el Senado.";
 answers[45] = choices[45][3];
 units[45] = "1";
 comments[45] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[46]= "47)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[46]= new Array();
 choices[46][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[46][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[46][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[46][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[46] = choices[46][1];
 units[46] = "7";
 comments[46] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[47]= "48)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[47]= new Array();
 choices[47][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[47][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[47][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[47][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[48]= "49)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[48]= new Array();
 choices[48][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[48][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[48][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[48][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[48] = choices[48][2];
 units[48] = "7";
 comments[48] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[49]= "50)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[49]= new Array();
 choices[49][0] = "2.400 euros";
 choices[49][1] = "4.000 euros";
 choices[49][2] = "3.200 euros";
 choices[49][3] = "1.600 euros";
 answers[49] = choices[49][1];
 units[49] = "37";
 comments[49] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[50]= "51)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[50]= new Array();
 choices[50][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[50][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[50][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[50][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[50] = choices[50][2];
 units[50] = "26";
 comments[50] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[51]= "52)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[51]= new Array();
 choices[51][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[51][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[51][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[51][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[51] = choices[51][0];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[52]= new Array();
 choices[52][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[52][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[52][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[52][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[52] = choices[52][0];
 units[52] = "76";
 comments[52] = "Id Pregunta: 855. Xunta de Galicia 2015";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[53]= new Array();
 choices[53][0] = "Un diputado y un senador, cada una de ellas";
 choices[53][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[53][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[53][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[54]= "55)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[54]= new Array();
 choices[54][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[54][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[54][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[54][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[55][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[55][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[55][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[55] = choices[55][2];
 units[55] = "1";
 comments[55] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[56]= new Array();
 choices[56][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[56][1] = "De nivel alto.";
 choices[56][2] = "De nivel medio y nivel alto.";
 choices[56][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[56] = choices[56][3];
 units[56] = "35";
 comments[56] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[57]= new Array();
 choices[57][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[57][1] = "Las CMADs";
 choices[57][2] = "Ambas son correctas.";
 choices[57][3] = "Ninguna es correcta";
 answers[57] = choices[57][2];
 units[57] = "19";
 comments[57] = "Id Pregunta: 598. Estrategia TIC";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[58]= "59)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[58]= new Array();
 choices[58][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[58][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[58][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[58][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[59]= "60)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[59]= new Array();
 choices[59][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[59][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[59][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[59][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[59] = choices[59][2];
 units[59] = "8";
 comments[59] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[60]= "61)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[60]= new Array();
 choices[60][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[60][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[60][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[60][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[60] = choices[60][0];
 units[60] = "12";
 comments[60] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[61]= "62)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[61]= new Array();
 choices[61][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[61][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[61][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[61][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[61] = choices[61][1];
 units[61] = "35";
 comments[61] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[62]= "63)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[62]= new Array();
 choices[62][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[62][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[62][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[62][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[62] = choices[62][2];
 units[62] = "47";
 comments[62] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[63]= new Array();
 choices[63][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[63][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[63][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[63][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[63] = choices[63][3];
 units[63] = "26";
 comments[63] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[64]= "65)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "Almacenamiento orientado a columnas";
 choices[64][1] = "Framework MapReduce";
 choices[64][2] = "OLTP";
 choices[64][3] = "Bases de datos clave-valor";
 answers[64] = choices[64][2];
 units[64] = "73";
 comments[64] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[65]= "66)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[65]= new Array();
 choices[65][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[65][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[65][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[65][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[65] = choices[65][2];
 units[65] = "57";
 comments[65] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[66]= "67)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[66]= new Array();
 choices[66][0] = "por Real Decreto";
 choices[66][1] = "reglamentariamente";
 choices[66][2] = "mediante Ley";
 choices[66][3] = "ninguna es correcta";
 answers[66] = choices[66][1];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[67]= "68)  El plan nacional de ciudades inteligentes...";
 choices[67]= new Array();
 choices[67][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[67][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[67][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[67][3] = "No existe";
 answers[67] = choices[67][1];
 units[67] = "19";
 comments[67] = "Id Pregunta: 563. Ciudades Inteligentes";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[68]= "69)  El sector Servicios NO incluye:";
 choices[68]= new Array();
 choices[68][0] = "El Comercio";
 choices[68][1] = "Los Transportes";
 choices[68][2] = "La Energ&iacute;a";
 choices[68][3] = "Las Comunicaciones";
 answers[68] = choices[68][2];
 units[68] = "12";
 comments[68] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[69]= "70)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "Con el a&ntilde;o anterior.";
 choices[69][1] = "Con los tres a&ntilde;os anteriores.";
 choices[69][2] = "Con el a&ntilde;o natural.";
 choices[69][3] = "Con los dos a&ntilde;os anteriores.";
 answers[69] = choices[69][2];
 units[69] = "10";
 comments[69] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[70]= "71)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[70]= new Array();
 choices[70][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[70][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[70][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = choices[70][0];
 units[70] = "28";
 comments[70] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[71]= new Array();
 choices[71][0] = "DoS";
 choices[71][1] = "Phishing";
 choices[71][2] = "Sniffing";
 choices[71][3] = "Spoofing";
 answers[71] = choices[71][3];
 units[71] = "119";
 comments[71] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[72]= "73)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[72][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[72][2] = "b) y d) son verdaderas";
 choices[72][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[72] = choices[72][1];
 units[72] = "18, 20";
 comments[72] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[73]= "74)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[73]= new Array();
 choices[73][0] = "18 miembros.";
 choices[73][1] = "Ninguna es correcta.";
 choices[73][2] = "22 miembros.";
 choices[73][3] = "21 miembros.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[74]= new Array();
 choices[74][0] = "Cifrado de las comunicaciones";
 choices[74][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[74][2] = "Registro de los accesos";
 choices[74][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[74] = choices[74][1];
 units[74] = "35";
 comments[74] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


