-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 23 2020 г., 14:26
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `url`, `title`, `description`) VALUES
(1, 'garry-potter', 'Гарри Поттер', 'Все шутки о сабже'),
(2, 'angry', 'Бесят', 'Шутки о том, что все бесят');

-- --------------------------------------------------------

--
-- Структура таблицы `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `cid` int(4) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `descr_min` varchar(1024) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `info`
--

INSERT INTO `info` (`id`, `cid`, `title`, `url`, `descr_min`, `description`, `image`) VALUES
(2, 1, 'Маркетинг уровень', 'marketing', 'Мантия неведимка из Гарри Поттера. Стоимость 25.000$', '1111', 'cartoon-pictures-of-teachers-3.png'),
(3, 1, 'ГП и ко', 'gp-ko', 'Никакой смысловой нагрузки. Просто фото моих работ\r\n', NULL, '1599597586181144142.webp'),
(4, 2, 'Это бесит', 'angry-1', 'В аптеке', NULL, '159930306711734667.jpg'),
(5, 2, 'Если кто-то бесит', 'angry-2', 'План действий', NULL, '1594813802136529252.jpg'),
(21, 1, 'Классика фантастики', 'fantast', 'Станислав Лем, «Возвращение со звёзд», 1961 год.', 'Раньше был такой анекдот:\r\n\r\n— Что будем ему на день рожденья дарить?\r\n— Может быть, книгу подарим?\r\n\r\n— Не, книга у него уже есть.\r\n\r\nТеперь это не смешно.', '1600509527166447328.webp'),
(24, 2, 'Tecтовая статья', 'test456', 'sfdsdfs', '22222', 'Без названия.jfif');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  `hash` varchar(32) NOT NULL DEFAULT '',
  `ip` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `hash`, `ip`) VALUES
(7, 'admin1', '14e1b600b1fd579f47433b88e8d85291', '', 0),
(6, 'admin', '0b04beb06f3e0bdc6f99e91070fb987a', '292456f61ced331a7d3b4346ae5e420a', 2130706433),
(5, 'best', '76dccdbc8855c4efa678474ce5c896d8', '', 0),
(8, 'admin3', '1f32aa4c9a1d2ea010adcf2348166a04', 'f50ca479b62c33964657a02413f18881', 2130706433),
(12, 'test50', '14e1b600b1fd579f47433b88e8d85291', '15c649ab627083da48c6663ac4e3f2a6', 2130706433),
(11, 'test60', '14e1b600b1fd579f47433b88e8d85291', '07d87f1c4a9cdb120efef0faacea09cf', 2130706433),
(13, 'test70', '14e1b600b1fd579f47433b88e8d85291', '56a5e49dd0d14f4fa58cfd8c8118a9a3', 2130706433),
(14, 'test80', '14e1b600b1fd579f47433b88e8d85291', '34f4c62baf29be7e098719987874d95b', 2130706433),
(15, 'test90', '14e1b600b1fd579f47433b88e8d85291', '3619bc94ab1bf03d0ffd390fd54de305', 2130706433);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
