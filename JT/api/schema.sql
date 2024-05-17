DROP TABLE IF EXISTS `butterfly`;
CREATE TABLE `butterfly` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
  `series` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `poids` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `cardio` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
  `duree` int(11) NOT NULL,
  `distance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `curl` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
  `series` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `poids` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `curl_marteau` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
  `series` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `poids` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `dc` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
  `series` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `poids` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `dips` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
  `series` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `poids` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `fente` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
  `series` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `poids` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `squat` (
  `series` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `poids` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `tirage_pouli` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
  `series` int(11) NOT NULL,
  `rep` int(11) NOT NULL,
  `poids` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `exo` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `butterfly_id` INT,
    `cardio_id` INT,
    `curl_id` INT,
    `curl_marteau_id` INT,
    `dc_id` INT,
    `dips_id` INT,
    `fente_id` INT,
    `squat_id` INT,
    `tirage_pouli_id` INT,
    FOREIGN KEY (butterfly_id) REFERENCES butterfly(id), 
    FOREIGN KEY (cardio_id) REFERENCES cardio(id), 
    FOREIGN KEY (curl_id) REFERENCES curl(id), 
    FOREIGN KEY (curl_marteau_id) REFERENCES curl_marteau(id), 
    FOREIGN KEY (dc_id) REFERENCES dc(id), 
    FOREIGN KEY (dips_id) REFERENCES dips(id), 
    FOREIGN KEY (fente_id) REFERENCES fente(id), 
    FOREIGN KEY (squat_id) REFERENCES squat(id), 
    FOREIGN KEY (tirage_pouli_id) REFERENCES tirage_pouli(id), 
)

CREATE TABLE ``
