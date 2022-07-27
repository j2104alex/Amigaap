<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Libreria bootstrap (local) -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <!-- CSS personal -->
    <link rel="stylesheet" href="../css/styles.css">
    <!-- CSS personalizado -->
    <link rel="stylesheet" href="../css/register.css">  
    <title>Ruta AmigaApp</title>
</head>

<body>
    <!-- Barra de navegación -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-orange">
        <div class="container-fluid">
            <a class="navbar-brand" href="../index.html">Ruta AmigaApp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="./register.php">Registro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="./login.php">Ingresar</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <article class="principal-container">

            <article class="form-container">
                <section class="mid-container">
                    <article class="logo-container">
                        <img src="../assets/img/logo.png" alt="logo" class="responsive">
                    </article>
                </section>
                <section class="mid-container">
                    <div class="form-content">
                    <header>
                        <h1 class="principal-title">Iniciar sesión</h1>
                    </header>
                    <form action="../php/login.php" method="POST" onsubmit="validate(event)">
                        <input class="input" type="text" id="email" name="email" placeholder="Correo" required="required" />
                        <input class="input" type="password" id="password" name="password" placeholder="Contraseña" required="required"/>
                        <button class="my-btn-primary" type="submit" id="ingresar" name="ingresar">Ingresar</button>
                        <label class="log-in">Si no tienes cuenta registrate <a href="./register.php">aquí</a> </label>
                    </form>
                </div>
                </section>


            </article>

        </article>
        </article>
    </main>
    <!-- js bootstrap's library (local) -->
    <script src="../js/bootstrap.min.js"></script>
    <!--JS Validators-->
    <!--JS Validators-->
    <script src="../js/validators.js"></script>
    <script src="../js/loginValidators.js"></script>
</body>

</html>