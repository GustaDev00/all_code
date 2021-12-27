-- BASIC FOR THE SQL
-- BASIC FOR THE SQL
-- BASIC FOR THE SQL
-- BASIC FOR THE SQL

-- Inserindo dados
insert into  usuarios(nome, email, idade) values("Gustavo", "gustavo@gmail.com", 20);
insert into  usuarios(nome, email, idade) values("Emerson", "emerson@gmail.com", 23);
insert into  usuarios(nome, email, idade) values("Kaique", "kaique@gmail.com", 24);
insert into  usuarios(nome, email, idade) values("Juliana", "juliana@gmail.com", 50);


-- Deletando Dados
delete from usuarios where idade = 20;


-- Atualizando Dados
update usuarios set nome = "Cleber Tenorio" where nome = "Juliana";
update usuarios set nome = "Juliana" where nome = "Cleber Tenorio";
