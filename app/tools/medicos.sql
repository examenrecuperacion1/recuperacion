-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2024 a las 02:04:48
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `medicos`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_CITAS` (IN `_PACIENTES` VARCHAR(100))   BEGIN

INSERT INTO citas(PACIENTES) VALUES (_PACIENTES); 

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR` (IN `_ID` INT(10))   BEGIN

DELETE FROM citas WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR` ()   BEGIN

SELECT * FROM citas;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR` (IN `_ID` INT(10), IN `_PACIENTES` VARCHAR(100))   BEGIN

UPDATE citas SET PACIENTES = _PACIENTES WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_CITAS` (IN `_ID` INT)   BEGIN

SELECT * FROM citas WHERE _ID = ID;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `ID` int(10) NOT NULL,
  `PACIENTES` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`ID`, `PACIENTES`) VALUES
(1, 'freddy'),
(2, 'angie'),
(5, 'MASA5'),
(6, 'mosa6'),
(7, 'nohava mosa'),
(8, 'undefined'),
(9, 'undefined'),
(10, 'undefined'),
(11, 'undefined'),
(12, 'undefined'),
(13, 'mosa'),
(14, 'undefined'),
(15, 'mosa4'),
(16, 'NULL');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
