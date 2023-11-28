-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: node_db
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `UserID` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test2ID','test2','$2b$10$DbfLCVr19sLxYL4z8Si03uX0SY0pKFYgVX8w7rKL1hHqtkJii27Aa','test2@example.com','010-1234-5678'),(2,'test3ID','test3','$2b$10$SJqA9FjxHMQj6uJhfpBgiOlKQ/jkMIem65P8RQwJmvODlVRkKeWQK','test3@example.com','010-1234-5678'),(3,'testID','test','$2b$10$YXvHtN6Ec1KDZdyYVN1vQe6ZxYuXv0TSAMHQXUMcTfIuWCtCGDb.2','test@example.com','010-1234-5678'),(4,'test4ID','test4','$2b$10$IYfAs4ISi0UgxFTOe3sTreNQO7yeW55eXaQT67SkNfNccFNHeeSS.','test4@example.com','010-1234-5678'),(5,'test5ID','test5','$2b$10$po9y67i0HZtZNoVmzlh2.ey1t2gCB5BgPGbGnVc43O9QNU84zQI8m','test5@example.com','010-1234-5678'),(6,'test6ID','test6','$2b$10$k7VCWf5EM5b3YqO84y9NVuRl86lgUj9MCyj5LGJ.AI.wBEmA6PVGi','test6@example.com','010-1234-5678'),(7,'test7ID','test7','$2b$10$3tEAg9B94q.YWpgjN/Lt7uYLJdPuYGNYUY6zQe1DDf9EOXNcMXik.','test6@example.com','010-1234-5678'),(8,'test8ID','test8','$2b$10$KddZ3./ejohpKvjEL06tlODLVSWUhOEIbQLdLH58CFIJDYkf0eDfO','test6@example.com','010-1234-5678'),(9,'test9ID','test9','$2b$10$ZwE7o9d1mmkTOTS.MsWB..t/Y65XXmRQdr..rtWd0fQofcybStt7G','test6@example.com','010-1234-5678'),(10,'test10ID','test10','$2b$10$nUrORVqywxo46L/kW3/9LuOB3sl5uGekY2wHJQwkm5Mlz3Eg2mFp.','test6@example.com','010-1234-5678'),(11,'test11ID','test11','$2b$10$m4TJ.U0xFnRNdpC.MfwzguvMAuRfsywedDmeaiTCmgy/AjKQxZ0ua','test6@example.com','010-1234-5678'),(12,'test12ID','test12','$2b$10$hxnLfqKH7wqetuj3CMtAlOIOoBX3sfHF6v/GU06qn50VznMzmKDs2','test6@example.com','010-1234-5678'),(13,'test13ID','test13','$2b$10$VOVsCfZDl3vt3EvF8005G.2odL.1fBCovFRIR319NS4JjK1JdIVkC','test6@example.com','010-1234-5678'),(14,'test14','test14','$2b$10$neYctZWMnxpxqf3TTKVykei9u.P480is/qwA4D8exZfn7BuvUCG/K','test1@email.com','010-1111-2222'),(15,'test15','김철순','$2b$10$SDzUfjuHkot55hge4hkUfelOQoXzOaCwPofsn.6ULfJCYzwLIBsPy','test1@email.com','010-1111-2222');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-28 14:39:46
