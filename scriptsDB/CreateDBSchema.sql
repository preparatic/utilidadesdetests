-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: tests_preparatic
-- ------------------------------------------------------
-- Server version	5.7.13-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bloque`
--

DROP TABLE IF EXISTS `bloque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bloque` (
  `BLOQUEID` varchar(5) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  `AREA` varchar(5) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  `TITULO` varchar(200) COLLATE latin1_spanish_ci DEFAULT NULL,
  `MIN` int(11) NOT NULL,
  `MAX` int(11) NOT NULL,
  PRIMARY KEY (`BLOQUEID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `preguntas_test`
--

DROP TABLE IF EXISTS `preguntas_test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preguntas_test` (
  `PREGUNTA` longtext COLLATE latin1_spanish_ci,
  `RESPUESTA_A` longtext COLLATE latin1_spanish_ci,
  `RESPUESTA_B` longtext COLLATE latin1_spanish_ci,
  `RESPUESTA_C` longtext COLLATE latin1_spanish_ci,
  `RESPUESTA_D` longtext COLLATE latin1_spanish_ci,
  `RESPUESTA_CORRECTA` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `LISTABLOQUES` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `AUTOR` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `PROMOCION` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `ANNO_CREACION` year(4) NOT NULL DEFAULT '2017' COMMENT 'Anno de creacion de la pregunta',
  `OBSERVACIONES` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `NUMERO_TEST` int(11) DEFAULT NULL,
  `NUMERO_PREGUNTA` int(10) DEFAULT NULL,
  `PREGUNTAID` int(10) NOT NULL AUTO_INCREMENT,
  `LISTATEMAS` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `REVISADA` int(11) DEFAULT NULL,
  `ESTADO` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `REVISOR` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `SENTENCIA` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `NOTAS` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `EXAMEN` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`PREGUNTAID`),
  KEY `Numero de Pregunta` (`NUMERO_PREGUNTA`)
) ENGINE=MyISAM AUTO_INCREMENT=11790 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tema`
--

DROP TABLE IF EXISTS `tema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tema` (
  `BLOQUEID` varchar(5) COLLATE latin1_spanish_ci NOT NULL DEFAULT '',
  `TEMAID` int(10) NOT NULL DEFAULT '0',
  `TITULOCORTO` varchar(255) COLLATE latin1_spanish_ci,
  `TITULOLARGO` longtext COLLATE latin1_spanish_ci,
  `PESO_BLOQUE` FLOAT NOT NULL DEFAULT '0', 
  `PESO_TEMA` FLOAT NOT NULL DEFAULT '0',
  `PESO_NORMALIZADO` FLOAT NOT NULL DEFAULT '0',
  `PESO_FINAL` FLOAT NOT NULL DEFAULT '0' COMMENT 'Se generan los test en funcion de la frecuencia de aparicion de preguntas.',
  PRIMARY KEY (`TEMAID`),
  KEY `Bloque` (`BLOQUEID`),
  CONSTRAINT `Fk_TemaBloque` FOREIGN KEY (`BLOQUEID`) REFERENCES `Bloque` (`BLOQUEID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tematicas`
--

DROP TABLE IF EXISTS `tematicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tematicas` (
  `ID` int(11) NOT NULL,
  `TEMATICA` varchar(256) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Conjunto de temas que se agrupan por contenido',
  `TEMA` int(10) NOT NULL COMMENT 'Un tema del temario.',
  PRIMARY KEY (`ID`,`TEMA`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-11  9:53:41
