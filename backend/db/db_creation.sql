--
-- Database: `calendar`
--
CREATE DATABASE IF NOT EXISTS `calendar` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `calendar`;
-- --------------------------------------------------------

--
-- Table structure for table `presentations`
--

CREATE TABLE `presentations` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `faculty_number` varchar(20) NOT NULL,
  `topic` varchar(150) NOT NULL,
  `date` varchar(20) NOT NULL,
  `hour` varchar(30) NOT NULL,
  `field` varchar(30) NOT NULL,
  `technology` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Indexes for table `presentations`
--
ALTER TABLE `presentations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `faculty_number` (`faculty_number`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for table `presentations`
--
ALTER TABLE `presentations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `faculty_number` varchar(20) NOT NULL,
  `topic` varchar(150) NOT NULL,
  `field` varchar(30) NOT NULL,
  `technology` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `faculty_number`, `topic`, `field`, `technology`) VALUES
(1, 'Петър Петров', '66666', 'CSS Grid', 'Front-End', 'CSS'),
(2, 'Георги Георгиев', '55555', 'WebSocket с PHP', 'Back-End', 'PHP'),
(3, 'Мария Маркова', '44444', 'CSS Object Model', 'Front-End', 'CSS'),
(4, 'Ивана Иванова', '33333', 'Редки тагове в HTML', 'Front-End', 'HTML'),
(5, 'Минка Минкова', '77777', 'Нещо за PHP', 'Back-End', 'PHP');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;


