use projeto_individual;

create table usuario(
id_usuario int primary key auto_increment,
nome varchar (50),
email varchar(45),
senha varchar(45)
);

create table pergunta (
id_pergunta int primary key auto_increment,
pergunta varchar (200)
);

create table resposta (
id_resposta int primary key auto_increment,
fk_pergunta int, 
foreign key (fk_pergunta) references pergunta (id_pergunta),
resposta varchar(45),
valor_resposta varchar(45)
);

create table resultado (
id_resultado int primary key auto_increment,
fk_usuario int,
foreign key (fk_usuario) references usuario (id_usuario),
resultado varchar(45),
dt_resultado date);


create table resposta_usuario (
id_resposta_usuario int primary key auto_increment,
fk_resultado int, 
foreign key (fk_resultado) references resultado (id_resultado),
fk_resposta int,
foreign key (fk_resposta) references resposta (id_resposta)
);







