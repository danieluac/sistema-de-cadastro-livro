-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 03-Mar-2020 às 18:31
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `__biblioteca`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `autores`
--

CREATE TABLE `autores` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `autores`
--

INSERT INTO `autores` (`id`, `nome`, `created_at`, `updated_at`) VALUES
(2, 'Antonio Cordeiro', '2020-03-03 14:30:43', '2020-03-03 14:30:43'),
(3, 'Daniel AC', '2020-03-03 14:30:50', '2020-03-03 14:30:50'),
(4, 'Filipe Cardoso', '2020-03-03 16:06:36', '2020-03-03 16:06:36'),
(5, 'sANTOS TEST', '2020-03-03 16:26:15', '2020-03-03 16:26:15');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE `categorias` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`id`, `nome`, `created_at`, `updated_at`) VALUES
(3, 'Cultura geral', '2020-03-03 15:02:52', '2020-03-03 15:02:52'),
(4, 'Tecnologias', '2020-03-03 15:04:22', '2020-03-03 15:04:22'),
(5, 'Linguas', '2020-03-03 15:05:23', '2020-03-03 15:05:23'),
(6, 'pensamento', '2020-03-03 15:22:55', '2020-03-03 15:22:55'),
(8, 'curso', '2020-03-03 15:35:10', '2020-03-03 15:35:10'),
(9, 'Planetas', '2020-03-03 15:37:19', '2020-03-03 15:37:19');

-- --------------------------------------------------------

--
-- Estrutura da tabela `editoras`
--

CREATE TABLE `editoras` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `editoras`
--

INSERT INTO `editoras` (`id`, `nome`, `created_at`, `updated_at`) VALUES
(2, 'BBC African', '2020-03-03 15:01:44', '2020-03-03 15:01:44'),
(3, 'ATL MArtins', '2020-03-03 15:01:50', '2020-03-03 15:01:50'),
(4, 'ATL - Luanda', '2020-03-03 15:01:54', '2020-03-03 15:01:54'),
(5, 'Delete, ltda', '2020-03-03 15:04:51', '2020-03-03 15:04:51'),
(6, 'IRMÃS CRISTINA', '2020-03-03 16:26:38', '2020-03-03 16:26:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `livros`
--

CREATE TABLE `livros` (
  `id` int(10) UNSIGNED NOT NULL,
  `titulo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isbn` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `edicao` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `anolancamento` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `foto` text COLLATE utf8mb4_unicode_ci,
  `categoria` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `editora` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `autor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `livros`
--

INSERT INTO `livros` (`id`, `titulo`, `isbn`, `edicao`, `anolancamento`, `quantidade`, `foto`, `categoria`, `editora`, `autor`, `created_at`, `updated_at`) VALUES
(1, 'Redes Domesticas', '12121212', '2020', 12, 2, NULL, 'Tecnologias', '2020', 'Antonio Cordeiro', '2020-03-03 14:31:41', '2020-03-03 16:10:44'),
(2, 'Portugues Estruturado', '0923093209', 'II', 2019, 12, NULL, 'Tecnologias', 'II', 'Antonio Cordeiro', '2020-03-03 15:08:48', '2020-03-03 16:11:23'),
(4, 'A Cabra da minha mae', 'bdbn1212', '12', 2018, 23, NULL, 'Cultura geral', 'BBC African', 'Filipe Cardoso', '2020-03-03 16:09:55', '2020-03-03 16:09:55');

-- --------------------------------------------------------

--
-- Estrutura da tabela `livro_autores`
--

CREATE TABLE `livro_autores` (
  `livro_id` int(10) UNSIGNED NOT NULL,
  `autor_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_03_01_065451_create_categorias_table', 1),
(5, '2020_03_01_065610_create_editoras_table', 1),
(6, '2020_03_01_065639_create_autores_table', 1),
(7, '2020_03_01_065713_create_livros_table', 1),
(8, '2020_03_01_065849_create_livro_autores_table', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', 'admin@app.com', NULL, '$2y$10$Unw9ljgYNEmVHWU6JWU7GuAXX2g8.4If1VBnRIma1kkml7w/DRKce', NULL, NULL, NULL),
(2, 'normal', 'normal@app.com', NULL, '$2y$10$KwVQAcqqWUrikr5dqfo9/.b4B2ckAXQA8.OFcewQZCVpLDqoyXSrC', NULL, NULL, NULL),
(3, 'papel', 'papel@app.com', NULL, '$2y$10$zvVgAdMGcJcDqUvA..LxSOVoxfUdBxBiMysAHwrpQZDWaga.Q42sC', NULL, NULL, NULL),
(5, 'Garcia Manuel', 'ogeg@app.com', NULL, '$2y$10$HG1Td2fPlhMcmiLgVO9eue7ZjvfrnbCrl.7Z6UnaAbuR9IS7Dptxy', NULL, '2020-02-28 21:49:52', '2020-02-28 21:49:52'),
(6, 'ITEL NET', 'itelnet@app.com', NULL, '$2y$10$ipRG72C3uxfZ4t2Od0ANJ.7doxPvuA5xEg2qvqauESAm3Ro1EGc3a', NULL, '2020-02-29 09:38:03', '2020-02-29 09:38:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editoras`
--
ALTER TABLE `editoras`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `livro_autores`
--
ALTER TABLE `livro_autores`
  ADD KEY `livro_autores_livro_id_foreign` (`livro_id`),
  ADD KEY `livro_autores_autor_id_foreign` (`autor_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autores`
--
ALTER TABLE `autores`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `editoras`
--
ALTER TABLE `editoras`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `livros`
--
ALTER TABLE `livros`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `livro_autores`
--
ALTER TABLE `livro_autores`
  ADD CONSTRAINT `livro_autores_autor_id_foreign` FOREIGN KEY (`autor_id`) REFERENCES `autores` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `livro_autores_livro_id_foreign` FOREIGN KEY (`livro_id`) REFERENCES `livros` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
