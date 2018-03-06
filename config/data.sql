create table if not exists `user`(
    `id` int(11) auto_increment,
    `name` varchar(100) not null,
    `age` tinyint(4) not null,
    primary key (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8