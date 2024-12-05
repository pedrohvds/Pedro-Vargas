-- TABLE
CREATE TABLE demo (ID integer primary key, Name varchar(20), Hint text );
CREATE TABLE Pedidos (
  idPedido INT AUTO_INCREMENT PRIMARY KEY,
  idCliente INT, 
  numeroPedido varchar(50),
  valorTotal decimal (10, 2),
  dataPedido date,
  FOREIGN KEY (idCliente) REFERENCES Clientes(idCliente)
);
CREATE TABLE tbclientes (
  idClientes INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(255)
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
