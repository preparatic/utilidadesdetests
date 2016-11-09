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

//  Id pregunta: 1361 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Si comparamos SSL y SET:";
 choices[0]= new Array();
 choices[0][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[0][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[0][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[0][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[0] = choices[0][0];
 units[0] = "70";
 comments[0] = "Id Pregunta: 1361. NULL";


//  Id pregunta: 3280 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.400 de OSI?:";
 choices[1]= new Array();
 choices[1][0] = "Agente de usuario (UA)";
 choices[1][1] = "Sistema de almacenamiento de mensajes (MS)";
 choices[1][2] = "Sistema de enrutamiento de mensajes (MRS)";
 choices[1][3] = "Sistema de mensajes interpersonales (IPMS)";
 answers[1] = choices[1][2];
 units[1] = "106";
 comments[1] = "Id Pregunta: 3280. ";


//  Id pregunta: 3319 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qui&eacute;nes son considerados los padres de internet?";
 choices[2]= new Array();
 choices[2][0] = "William H. Gates y Paul Allen";
 choices[2][1] = "Steve Jobs y Steve Wozniak";
 choices[2][2] = "Vinton Cerf y Robert Kahn";
 choices[2][3] = "Brian Kernighan y Dennis Ritchie";
 answers[2] = choices[2][2];
 units[2] = "112";
 comments[2] = "Id Pregunta: 3319. ";


//  Id pregunta: 3806 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Se pueden se&ntilde;alar como ventajas del EDI:";
 choices[3]= new Array();
 choices[3][0] = "Reduce los gastos de tratamiento de una transacci&oacute;n, as&iacute; como los de transmisi&oacute;n de la misma";
 choices[3][1] = "Se puede aplicar  a todo tipo de sectores de la industria, pero dentro de un pa&iacute;s";
 choices[3][2] = "No existen condicionantes legales para su implantaci&oacute;n";
 choices[3][3] = "Se trata de un sistema de futuro";
 answers[3] = choices[3][0];
 units[3] = "112";
 comments[3] = "Id Pregunta: 3806. ";


//  Id pregunta: 4109 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Webmail es:";
 choices[4]= new Array();
 choices[4][0] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un programa de correo electr&oacute;nico especializado que accede a trav&eacute;s del protocolo POP3.";
 choices[4][1] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un Navegador.";
 choices[4][2] = "a) y b) son ciertas";
 choices[4][3] = "a) y b) son falsas";
 answers[4] = choices[4][1];
 units[4] = "112";
 comments[4] = "Id Pregunta: 4109. ";


//  Id pregunta: 5609 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  Los mensajes MPDU en X.400 puedes ser:";
 choices[5]= new Array();
 choices[5][0] = "Sondas, Informes y los propios mensajes";
 choices[5][1] = "Sondas, Notificaciones, mensajes de control y el propio mensaje";
 choices[5][2] = "Notificaciones, Informes de entrega y los propios mensajes";
 choices[5][3] = "Solo los propios mensajes denominados IPM";
 answers[5] = choices[5][0];
 units[5] = "106";
 comments[5] = "Id Pregunta: 5609. ";


//  Id pregunta: 6044 AÃ±o de creación de pregunta: 2010-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de estas herramientas NO est&aacute; relacionada con la gesti&oacute;n de identidades?";
 choices[6]= new Array();
 choices[6][0] = "Oracle Identity Management";
 choices[6][1] = "BMC Remedy Action Request System";
 choices[6][2] = "IBM Tivoli Identity Manager";
 choices[6][3] = "Novell Nsure";
 answers[6] = choices[6][1];
 units[6] = "118";
 comments[6] = "Id Pregunta: 6044. ";


//  Id pregunta: 6157 AÃ±o de creación de pregunta: 2010-01-01
 questions[7]= "8)  &iquest;Qu&eacute; protocolo de la capa de transporte utiliza TFTP?";
 choices[7]= new Array();
 choices[7][0] = "TCP, al igual que FTP";
 choices[7][1] = "TCP";
 choices[7][2] = "UDP";
 choices[7][3] = "UDP, al igual que FTP.";
 answers[7] = choices[7][2];
 units[7] = "112";
 comments[7] = "Id Pregunta: 6157. ";


//  Id pregunta: 6343 AÃ±o de creación de pregunta: 2010-01-01
 questions[8]= "9)  Uno de los objetivos perseguidos por la Web 2.0 es:";
 choices[8]= new Array();
 choices[8][0] = "Que las aplicaciones no est&eacute;n disponibles en un solo dispositivo.";
 choices[8][1] = "Que sea el proveedor del servicio el que cree todos los contenidos.";
 choices[8][2] = "Que la comunicaci&oacute;n entre los usuarios este centralizada.";
 choices[8][3] = "Que los sistemas sean fuertemente acoplados.";
 answers[8] = choices[8][0];
 units[8] = "120";
 comments[8] = "Id Pregunta: 6343. NULL";


//  Id pregunta: 8676 AÃ±o de creación de pregunta: 2011-01-01
 questions[9]= "10)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[9]= new Array();
 choices[9][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[9][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[9][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[9][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[9] = choices[9][2];
 units[9] = "118";
 comments[9] = "Id Pregunta: 8676. Examen UPM A2 2011";


//  Id pregunta: 9795 AÃ±o de creación de pregunta: 2014-01-01
 questions[10]= "11)  Se&ntilde;ale de los siguientes el que NO es un lector de feeds RSS:";
 choices[10]= new Array();
 choices[10][0] = "Digg";
 choices[10][1] = "Feedly";
 choices[10][2] = "Mephisto";
 choices[10][3] = "Netvibes ";
 answers[10] = choices[10][2];
 units[10] = "120";
 comments[10] = "Id Pregunta: 9795. Examen TIC A2 2013";


//  Id pregunta: 9862 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  Indique la respuesta falsa:";
 choices[11]= new Array();
 choices[11][0] = "El estandar de autenticaci&oacute;n OAuth fue crado por la OATH (Initiative for Open Authentication).";
 choices[11][1] = "OAuth 2.0 no es compatible con OAuth 1.0. ";
 choices[11][2] = "Graph API de Facebook solo soporta OAuth 2.0. ";
 choices[11][3] = "Google soporta Oauth 2.0. como m&eacute;todo recomendado de autenticaci&oacute;n para todas sus APIs.";
 answers[11] = choices[11][0];
 units[11] = "118";
 comments[11] = "Id Pregunta: 9862. Oauth y OATH son conceptos diferentes. ";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[12]= new Array();
 choices[12][0] = "eDirectory";
 choices[12][1] = "iPlanet";
 choices[12][2] = "Active Directory";
 choices[12][3] = "Todos lo son";
 answers[12] = choices[12][3];
 units[12] = "74, 106";
 comments[12] = "Id Pregunta: 10496. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";


//  Id pregunta: 10867 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  El comando ping es el acr&oacute;nimo de:";
 choices[13]= new Array();
 choices[13][0] = "Packet Internet Group.";
 choices[13][1] = "Packet Internet Gangway.";
 choices[13][2] = "Packet Internet Gate.";
 choices[13][3] = "Packet Internet Groper.";
 answers[13] = choices[13][3];
 units[13] = "112";
 comments[13] = "Id Pregunta: 10867. Examen GSI 2014";


