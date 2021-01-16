-- MEALS
DROP TABLE `meals`;
CREATE TABLE `meal-sharing`.`meals` (
  `id_meals` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `title` varchar(255)  NOT NULL,
  `description` TEXT  NOT NULL,
  `max_reservations` int(11)  NOT NULL,
  `created_date` DATE  NOT NULL,
  `when` DATETIME  NOT NULL,
  `location` varchar(255)  NOT NULL,
  `price` decimal(18, 2) NOT NULL,
  PRIMARY KEY (`id_meals`)
);

INSERT INTO `meal-sharing`.`meals` (`id_meals`, `title`, `description`, `max_reservations`, `created_date`, `when`, `location`, `price`) VALUES ('1', 'Rooftop dinner', 'Enjoy a cozy dinner at our terrace with an italian inspired menu', '7', '2021-01-03', '2021-04-01 18:00:00', 'Skjalm Hvides Gade 7, 1728 København', '60');
INSERT INTO `meal-sharing`.`meals` (`id_meals`, `title`, `description`, `max_reservations`, `created_date`, `when`, `location`, `price`) VALUES ('2', 'Afternoon tea', 'An afternoon for the tea lovers, join us for an authentic afternoon tea full of small snacks and a wide selection of teas', '4', '2021-01-04', '2021-02-15 17:00:00', 'Hans Tavsens Gade 20, 2200 København', '40');
INSERT INTO `meal-sharing`.`meals` (`id_meals`, `title`, `description`, `max_reservations`, `created_date`, `when`, `location`, `price`) VALUES ('3', 'Flødeboller party', 'Join for a homemade and very tasty selection of flødeboller, with some unexpected and creative flavors', '6', '2021-01-02', '2021-02-20 17:00:00', 'Nordre Frihavnsgade 30, 2100 København', '45');
INSERT INTO `meal-sharing`.`meals` (`id_meals`, `title`, `description`, `max_reservations`, `created_date`, `when`, `location`, `price`) VALUES ('4', 'A weirdough day', 'Come to a social day of sourdough pizza, it is all about the fun', '8', '2021-01-05', '2021-03-01 18:00:00', 'Møllegade 3 2th, 2200 København', '30');
INSERT INTO `meal-sharing`.`meals` (`id_meals`, `title`, `description`, `max_reservations`, `created_date`, `when`, `location`, `price`) VALUES ('5', 'Potato party', 'Lets get creative cooking with potatoes, join us for a very starchy and fun day', '5', '2021-01-05', '2021-02-07 17:30:00', 'Niels Ebbesens Vej 16, 1911 Frederiksberg', '25');

-- RESERVATIONS
CREATE TABLE `meal-sharing`.`reservations` (
  `id_reservations` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `number_of_guests` int(11) NOT NULL,
  `meal_id` int(11) NOT NULL,
  `created_date` DATE NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `notes` varchar(255) NULL,
  PRIMARY KEY (`id_reservations`)
);
INSERT INTO `meal-sharing`.`reservations` (
    `id_reservations`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES (
    '1',
    '2',
    '1',
    '2021-01-16',
    '61366748',
    'Chawannat Inta',
    'chawannat_inta@gmail.com'
  );
INSERT INTO `meal-sharing`.`reservations` (
    `id_reservations`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES (
    '2',
    '3',
    '2',
    '2021-01-19',
    '86338782',
    'Juan José Domínguez',
    'jjdominguez@gmail.com'
  );
INSERT INTO `meal-sharing`.`reservations` (
    `id_reservations`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES (
    '3',
    '2',
    '3',
    '2021-10-16',
    '93782999',
    'Pablo Capozzi',
    'capozzizzi@gmail.com'
  );
INSERT INTO `meal-sharing`.`reservations` (
    `id_reservations`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES (
    '4',
    '2',
    '1',
    '2021-10-06',
    '84288447',
    'Hao Ming',
    'pwinthery@gmail.com'
  );
INSERT INTO `meal-sharing`.`reservations` (
    `id_reservations`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES (
    '5',
    '4',
    '1',
    '2021-10-12',
    '77462573',
    'Maha Kitiyakara',
    'm_kitiyakara@gmail.com'
  );
INSERT INTO `meal-sharing`.`reservations` (
    `id_reservations`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
VALUES (
    '6',
    '2',
    '1',
    '2021-10-20',
    '66583778',
    'Sarali Vajiralongkorn',
    'vajiralongkornkorn@gmail.com'
  );
-- REVIEWS
CREATE TABLE `meal-sharing`.`reviews` (
  `id_reviews` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `title` varchar(255) NULL,
  `description` TEXT NOT NULL,
  `meal_id` int(11) NOT NULL,
  `stars` int(11) NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id_reviews`)
);
INSERT INTO `meal-sharing`.`reviews` (
    `id_reviews`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
VALUES (
    '1',
    'Always great food',
    'I have been in multiple events of the same hosts and the food was delicious',
    '1',
    '5',
    '2020-12-10'
  );
INSERT INTO `meal-sharing`.`reviews` (
    `id_reviews`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
VALUES (
    '2',
    'Great vibes',
    'Surrounded by friendly people',
    '2',
    '5',
    '2020-11-20'
  );
INSERT INTO `meal-sharing`.`reviews` (
    `id_reviews`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
VALUES (
    '3',
    'Tasty but late',
    'The food was delicious but sadly the event delayed and started 30min late',
    '3',
    '4',
    '2020-10-21'
  );