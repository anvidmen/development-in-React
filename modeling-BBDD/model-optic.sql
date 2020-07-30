-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `idAddress` int NOT NULL AUTO_INCREMENT,
  `street` varchar(45) NOT NULL,
  `number` int NOT NULL,
  `floor` int NOT NULL,
  `door` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `postalCode` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  PRIMARY KEY (`idAddress`),
  UNIQUE KEY `idAdress_UNIQUE` (`idAddress`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'spelt',6,4,'A','Barcelona','08700','España'),(2,'llacuna',23,1,'b-2','Barcelona','08700','España'),(3,'aurora',13,8,'b-8','Barcelona','08400','España');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `idBrand` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `idProvider` int NOT NULL,
  PRIMARY KEY (`idBrand`),
  UNIQUE KEY `idBrand_UNIQUE` (`idBrand`),
  KEY `fk_Brand_Provider1_idx` (`idProvider`),
  CONSTRAINT `fk_Brand_Provider1` FOREIGN KEY (`idProvider`) REFERENCES `provider` (`idProvider`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'nike',1),(2,'tim',2),(3,'omen',3);
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `idClient` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `postalCode` varchar(45) NOT NULL,
  `phone` int NOT NULL,
  `email` varchar(45) NOT NULL,
  `registrationDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idClient`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `idClient_UNIQUE` (`idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'Sophia','Freiheitsstraße','768329',4467128,'sophiabo@mail.de','2020-07-17 20:33:37'),(2,'liale','Freundschaftsstraße','32146128',44212312,'liale.pe@mail.co','2020-07-17 20:36:08'),(3,'David','Prager str','89008',32157711,'david.om@mail.com','2020-07-17 20:39:39');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_has_client`
--

DROP TABLE IF EXISTS `client_has_client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_has_client` (
  `idClient1` int NOT NULL,
  `idClient2` int NOT NULL,
  `recommendation` varchar(45) NOT NULL,
  PRIMARY KEY (`idClient1`,`idClient2`),
  KEY `fk_Client_has_Client_Client2_idx` (`idClient2`),
  KEY `fk_Client_has_Client_Client1_idx` (`idClient1`),
  CONSTRAINT `fk_Client_has_Client_Client1` FOREIGN KEY (`idClient1`) REFERENCES `client` (`idClient`),
  CONSTRAINT `fk_Client_has_Client_Client2` FOREIGN KEY (`idClient2`) REFERENCES `client` (`idClient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_has_client`
--

LOCK TABLES `client_has_client` WRITE;
/*!40000 ALTER TABLE `client_has_client` DISABLE KEYS */;
INSERT INTO `client_has_client` VALUES (1,2,'excellent attention, and good price'),(2,3,'highly qualified staff'),(3,1,'the best optic');
/*!40000 ALTER TABLE `client_has_client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `idEmployee` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idEmployee`),
  UNIQUE KEY `idEmployee_UNIQUE` (`idEmployee`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'pepito'),(2,'grillo'),(3,'grillito');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `glasses`
--

DROP TABLE IF EXISTS `glasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `glasses` (
  `idGlasses` int NOT NULL AUTO_INCREMENT,
  `lensesGraduation` decimal(10,0) NOT NULL,
  `templeType` varchar(45) NOT NULL,
  `templeColor` varchar(45) NOT NULL,
  `lensColor` varchar(45) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `idBrand` int NOT NULL,
  `idEmployee` int DEFAULT NULL,
  PRIMARY KEY (`idGlasses`),
  UNIQUE KEY `brand_copy1_UNIQUE` (`idGlasses`),
  KEY `fk_Glasses_Brand1_idx` (`idBrand`),
  KEY `fk_Glasses_Employee1_idx` (`idEmployee`),
  CONSTRAINT `fk_Glasses_Brand1` FOREIGN KEY (`idBrand`) REFERENCES `brand` (`idBrand`),
  CONSTRAINT `fk_Glasses_Employee1` FOREIGN KEY (`idEmployee`) REFERENCES `employee` (`idEmployee`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `glasses`
--

LOCK TABLES `glasses` WRITE;
/*!40000 ALTER TABLE `glasses` DISABLE KEYS */;
INSERT INTO `glasses` VALUES (1,2,'floating','blue','transparent',35,3,2),(2,4,'paste','black','transparent',13,1,3),(3,1,'metallic','white','black',56,2,1),(4,2,'floating','blue','transparent',35,3,2);
/*!40000 ALTER TABLE `glasses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provider`
--

DROP TABLE IF EXISTS `provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provider` (
  `idProvider` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `phone` int NOT NULL,
  `fax` int NOT NULL,
  `NIF` varchar(45) NOT NULL,
  `idAddress` int NOT NULL,
  PRIMARY KEY (`idProvider`),
  UNIQUE KEY `idProvider_UNIQUE` (`idProvider`),
  UNIQUE KEY `NIF_UNIQUE` (`NIF`),
  KEY `fk_Provider_Adress1_idx` (`idAddress`),
  CONSTRAINT `fk_Provider_Adress1` FOREIGN KEY (`idAddress`) REFERENCES `address` (`idAddress`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider`
--

LOCK TABLES `provider` WRITE;
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
INSERT INTO `provider` VALUES (1,'jhoan.sas',6634561,89123912,'67213819r',1),(2,'omenGlasses',6604326,8913912,'y333423t',2),(3,'timcorp',76523811,1237211,'u762823p',3);
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-17 22:37:04
