-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Время создания: Фев 16 2022 г., 10:11
-- Версия сервера: 5.7.34
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `stage2_project`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  `hash` varchar(32) NOT NULL DEFAULT '',
  `ip` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `hash`, `ip`) VALUES
(6, 'admin', 'w4ju3233qajj900ffa', 'ccl34l5kkkk32sd', 2130706433),
(5, 'best', 'dsl55llkk009jddsk', '', 0),
(7, '2111.', 'fc1308143d0689ee2ae24f89e6e9e588', '', 0),
(8, '1111111122.', '57a502188a7007b3854189a698f35c66', '', 0),
(9, 'admin1', '8b283e8957f744ae5a1a6add05fc354f', '', 0),
(10, 'admin12', '7652168a7ce9aec7f9aa30e6c0016b3e', '', 0),
(11, 'admin18', 'd5961a2f50e5b5422fb6effaf0769fea', '', 0),
(12, 'admin19', 'd5961a2f50e5b5422fb6effaf0769fea', '', 0),
(13, 'admin122', 'd5961a2f50e5b5422fb6effaf0769fea', '', 0),
(14, 'admin22', '14e1b600b1fd579f47433b88e8d85291', 'd890c06af3965cf9b2931d6659ecd3e6', 0),
(15, 'admin33', '14e1b600b1fd579f47433b88e8d85291', 'dab9f9211b8570b492bdd15d1e230683', 0),
(16, 'admin44', '14e1b600b1fd579f47433b88e8d85291', '38fb91b6525cfc095cdbcf247fe22c37', 0),
(17, 'admin55', '14e1b600b1fd579f47433b88e8d85291', '544c68370ee995b614409403322abdca', 333),
(18, 'admin77', '14e1b600b1fd579f47433b88e8d85291', '7b218d45bc4663e2463167344b0f0b45', 333),
(19, 'admin88', '14e1b600b1fd579f47433b88e8d85291', 'c8c8a713a09ca78336d31c850c2ab8c2', 0),
(20, 'admin99', '14e1b600b1fd579f47433b88e8d85291', 'e199a9e0180c420374b0e7cc6ad67490', 0),
(21, 'admin112', '14e1b600b1fd579f47433b88e8d85291', '2788023d16c5117e8f9f2057aaffc2de', 0),
(22, 'admin777', '14e1b600b1fd579f47433b88e8d85291', '', 0),
(23, '11111111', '14e1b600b1fd579f47433b88e8d85291', '6d1c1cc455d4efba80f3e698454bed4d', 0),
(24, 'admin02', '14e1b600b1fd579f47433b88e8d85291', '5b8baafe54ab465b322f997056ce5310', 0),
(25, 'admin02&#039;&#039;', '14e1b600b1fd579f47433b88e8d85291', '35b4c13a19af24122ab8b501b178bac0', 0),
(26, 'admin03\'', '14e1b600b1fd579f47433b88e8d85291', '2ac44908fd6249ba1f1d886a9cb1808e', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
