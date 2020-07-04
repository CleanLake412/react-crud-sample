-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2020 at 06:14 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `image` varchar(1024) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `birthday` varchar(64) DEFAULT NULL,
  `gender` varchar(64) DEFAULT NULL,
  `job` varchar(64) DEFAULT NULL,
  `is_deleted` int(2) NOT NULL DEFAULT 0 COMMENT '削除フラグ',
  `created_at` datetime NOT NULL COMMENT '登録日時',
  `updated_at` datetime NOT NULL COMMENT '変更日時'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `image`, `name`, `birthday`, `gender`, `job`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 'https://placeimg.com/64/64/1', '山本太郎', '960508', '男性', '大学生', 0, '2020-07-04 23:41:57', '2020-07-04 23:41:57'),
(2, 'https://placeimg.com/64/64/2', '花島三郎', '961222', '男性', '開発者', 0, '2020-07-04 23:41:57', '2020-07-04 23:41:57'),
(3, 'https://placeimg.com/64/64/3', '久保田', '961127', '男性', 'デザイナー', 0, '2020-07-04 23:41:57', '2020-07-04 23:41:57'),
(4, '/image/0fead0956f0d0ea129d1e307e4b9e995', '豊臣秀吉', '19900219', '男性', 'Military', 1, '2020-07-04 23:41:57', '2020-07-05 00:38:15'),
(5, '/image/5d0a2ca4b89ad694d533b1b1e06595c4', '豊臣秀吉', '19900219', '男性', 'Military', 0, '2020-07-04 23:41:57', '2020-07-04 23:41:57'),
(6, '/image/5d0a2ca4b89ad694d533b1b1e06595c4', '中村純一', '19900329', '男性', '政治家', 1, '2020-07-04 23:41:57', '2020-07-04 23:51:11'),
(7, '/image/1676c31654d4292fdf04e4ebe2b48c28', '海さん', '2000-10-10', '女性', '不明', 0, '2020-07-04 23:41:57', '2020-07-04 23:41:57'),
(8, '/image/4f0f46456ba97525a808513514b6a76a', '犬', '2019-03-05', '', '愛玩動物', 0, '2020-07-05 00:15:03', '2020-07-05 00:15:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
