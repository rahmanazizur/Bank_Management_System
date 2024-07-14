CREATE DATABASE  IF NOT EXISTS `abcd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `abcd`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: abcd
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (101,'111','Asik Rahman','male','asik123@gmail.com','0157895692','Gazipur'),(102,'222','Asika Akter','female','asika000@gmail.com','01536987445','Mymensingh'),(103,'333','Jahir Ahmed','male','jahir@gmail.com','01989564562','Mirpur'),(104,'444','Rojina Akter','female','rojina3@gmail.com','01478956876','Dhanmondi'),(105,'555','Kalam Mia','male','kalam45@gmail.com','01536987410','Uttara'),(106,'666','Mrs. Rose','female','ro123@gmail.com','01795789563','Kamlapur'),(107,'777','Aktara Begum','female','aktara@gmail.com','01378956962','Agargon'),(108,'888','Rifat Ahmed','male','rifat1234@gmail.com','01478956876','Dhanmondi');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applyaccount`
--

DROP TABLE IF EXISTS `applyaccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applyaccount` (
  `nid` double NOT NULL,
  `acctype` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `mar_status` varchar(45) DEFAULT NULL,
  `occupation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applyaccount`
--

LOCK TABLES `applyaccount` WRITE;
/*!40000 ALTER TABLE `applyaccount` DISABLE KEYS */;
/*!40000 ALTER TABLE `applyaccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applyforloan`
--

DROP TABLE IF EXISTS `applyforloan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applyforloan` (
  `nid` int NOT NULL,
  `loantype` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `mar_status` varchar(45) DEFAULT NULL,
  `occupation` varchar(45) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `duration` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applyforloan`
--

LOCK TABLES `applyforloan` WRITE;
/*!40000 ALTER TABLE `applyforloan` DISABLE KEYS */;
/*!40000 ALTER TABLE `applyforloan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `createaccount`
--

DROP TABLE IF EXISTS `createaccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `createaccount` (
  `a_number` double NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `nid` double DEFAULT NULL,
  `acctype` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `mar_status` varchar(45) DEFAULT NULL,
  `occupation` varchar(45) DEFAULT NULL,
  `balance` double DEFAULT NULL,
  PRIMARY KEY (`a_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `createaccount`
--

LOCK TABLES `createaccount` WRITE;
/*!40000 ALTER TABLE `createaccount` DISABLE KEYS */;
INSERT INTO `createaccount` VALUES (101501,'111',101201,'Savings Account','Md. Rifat Ahmed','Male','01795013338','ra1766579@gmail.com','Mirpur','2024-05-25','Single','Govt. employee',3750),(101502,'222',101202,'Money Marjet Account','Md. Jahir Uddin','Male','01478523690','abc@gmail.com','Dhanmondi','2024-05-08','Single','Private Job',5300);
/*!40000 ALTER TABLE `createaccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loanapproval`
--

DROP TABLE IF EXISTS `loanapproval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loanapproval` (
  `accnumber` int NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `nid` int DEFAULT NULL,
  `loantype` varchar(45) DEFAULT NULL,
  `req_amount` double DEFAULT NULL,
  `duration` varchar(45) DEFAULT NULL,
  `cash` double DEFAULT NULL,
  `interest_rate` varchar(45) DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `installment` int DEFAULT NULL,
  `paid_installment` int DEFAULT NULL,
  `monthlypaid` double DEFAULT NULL,
  `paid_amount` double DEFAULT NULL,
  `due` double DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `mar_status` varchar(45) DEFAULT NULL,
  `occupation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`accnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='				';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loanapproval`
--

LOCK TABLES `loanapproval` WRITE;
/*!40000 ALTER TABLE `loanapproval` DISABLE KEYS */;
INSERT INTO `loanapproval` VALUES (101302,'222',101202,'Car loan',300000,'1',300000,'10%',330000,12,4,27500,43336,286664,'Md. Jahir Uddin','Male','01478523690','123@gmail.com','Mirpur','2024-05-16','Single','Teacher');
/*!40000 ALTER TABLE `loanapproval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loantransaction`
--

DROP TABLE IF EXISTS `loantransaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loantransaction` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `ttype` varchar(45) DEFAULT NULL,
  `accnumber` int DEFAULT NULL,
  `loantype` varchar(45) DEFAULT NULL,
  `totalinstallment` int DEFAULT NULL,
  `payinstallment` int DEFAULT NULL,
  `paidamount` double DEFAULT NULL,
  `dueamount` double DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loantransaction`
--

LOCK TABLES `loantransaction` WRITE;
/*!40000 ALTER TABLE `loantransaction` DISABLE KEYS */;
INSERT INTO `loantransaction` VALUES (9,'Installment',102501305,'Home loan',24,1,11500,1138500,'2024-05-22 00:42:44'),(10,'Installment',101301,'Home loan',24,1,10834,249166,'2024-05-25 22:20:14'),(11,'Installment',101301,'Home loan',24,2,21668,238332,'2024-05-25 22:21:29'),(12,'Installment',101301,'Home loan',24,3,260000,0,'2024-05-25 22:23:58'),(13,'Installment',101302,'Car loan',12,1,10834,319166,'2024-05-25 22:34:32'),(14,'Installment',101302,'Car loan',12,2,21668,308332,'2024-05-25 22:36:18'),(15,'Installment',101302,'Car loan',12,3,32502,297498,'2024-05-25 22:39:46'),(16,'Installment',101302,'Car loan',12,4,43336,286664,'2024-05-25 22:41:06');
/*!40000 ALTER TABLE `loantransaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `ttype` varchar(45) DEFAULT NULL,
  `a_number` double DEFAULT NULL,
  `a_type` varchar(45) DEFAULT NULL,
  `Prebalance` double DEFAULT NULL,
  `tamount` double DEFAULT NULL,
  `curbalance` double DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `toacc_number` double DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,'withdraw',101501,'Savings Account',2800,100,2700,'2024-04-20','21:41:05',NULL),(2,'withdraw',101501,'Savings Account',2700,100,2600,'2024-04-02','21:42:21',NULL),(3,'withdraw',101501,'Savings Account',2600,100,2500,'2024-05-22','21:56:33',NULL),(4,'withdraw',101502,'Money Marjet Account',2700,700,2000,'2024-05-15','21:59:02',NULL),(5,'Transfer',101501,'Money Marjet Account',2500,500,2000,'2024-05-20','21:59:40',101502),(6,'deposit',101501,'Savings Account',3000,750,3750,'2024-05-25','22:08:42',NULL),(7,'deposit',101502,'Money Marjet Account',5000,300,5300,'2024-05-23','22:09:49',NULL);
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-25 22:44:12
