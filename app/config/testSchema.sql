CREATE TABLE IF NOT EXISTS `playlists` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  image varchar(255)
  ) 
 ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
