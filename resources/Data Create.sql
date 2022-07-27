DROP DATABASE IF EXISTS amigaapp02;

CREATE DATABASE amigaapp02;

USE amigaapp02;

CREATE TABLE roles
  (
     idrol               TINYINT PRIMARY KEY auto_increment,
     nombre              VARCHAR(30) NOT NULL,
     nivel               TINYINT,
     fecha_creacion      DATETIME DEFAULT Now(),
     fecha_actualizacion DATETIME,
     fecha_eliminacion   DATETIME
  );

CREATE TABLE rutas
  (
     idruta              INT PRIMARY KEY auto_increment,
     numeroruta          VARCHAR(10) NOT NULL,
     descripcion         VARCHAR(250) NOT NULL,
     sentido             ENUM('NS', 'SN'),
     fecha_creacion      DATETIME DEFAULT Now(),
     fecha_actualizacion DATETIME,
     fecha_eliminacion   DATETIME
  );

CREATE TABLE rutausuario
  (
     idrutausuario       INT PRIMARY KEY auto_increment,
     estado              BOOLEAN DEFAULT 0,
     latitud             INT NOT NULL,
     longitud            INT NOT NULL,
     idruta_fk           INT,
     fecha_creacion      DATETIME DEFAULT Now(),
     fecha_actualizacion DATETIME,
     fecha_eliminacion   DATETIME
  );

CREATE TABLE usuarios
  (
     idusuario           INT PRIMARY KEY auto_increment,
     nombre_usuario      VARCHAR(45) NOT NULL,
     apellido_usuario    VARCHAR(45) NOT NULL,
     correo_usuario      VARCHAR(45) NOT NULL UNIQUE,
     password_usuario    VARCHAR(45) NOT NULL,
     estado_usuario      BOOLEAN DEFAULT 1,
     fecha_creacion      DATETIME DEFAULT Now(),
     fecha_actualizacion DATETIME,
     fecha_eliminacion   DATETIME,
     rolusuario_fk       TINYINT NOT NULL DEFAULT 1,
     rutausuario_fk      INT
  );

CREATE TABLE rutasfavoritas
  (
     idusuario_fk INT NOT NULL,
     idruta_fk    INT NOT NULL
  );

CREATE TABLE posts
  (
     idpost              INT PRIMARY KEY auto_increment,
     titulo              VARCHAR(100) NOT NULL,
     descripcion         VARCHAR(250) NOT NULL,
     fecha_creacion      DATETIME DEFAULT Now(),
     fecha_actualizacion DATETIME,
     fecha_eliminacion   DATETIME,
     idusuario_fk        INT NOT NULL
  );

CREATE TABLE comentarios
  (
     idcomentario        INT PRIMARY KEY auto_increment,
     comentario          VARCHAR(200) NOT NULL,
     fecha_creacion      DATETIME DEFAULT Now(),
     fecha_actualizacion DATETIME,
     fecha_eliminacion   DATETIME,
     idusuario_fk        INT NOT NULL,
     idpost_fk           INT NOT NULL
  );
  
ALTER TABLE usuarios ADD FOREIGN KEY (rolusuario_fk) REFERENCES roles(idrol);
ALTER TABLE usuarios ADD FOREIGN KEY (rutausuario_fk) REFERENCES rutausuario(idrutausuario);
ALTER TABLE rutasfavoritas ADD FOREIGN KEY (idusuario_fk) REFERENCES usuarios(idusuario);
ALTER TABLE rutasfavoritas ADD FOREIGN KEY (idruta_fk) REFERENCES rutas(idruta);
ALTER TABLE posts ADD FOREIGN KEY (idusuario_fk) REFERENCES usuarios(idusuario);
ALTER TABLE comentarios ADD FOREIGN KEY (idusuario_fk) REFERENCES usuarios(idusuario);
ALTER TABLE comentarios ADD FOREIGN KEY (idpost_fk) REFERENCES posts(idpost);
