<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
    <div class="container">
    <!-- Content here -->
    <br><br><br>
        <div>
            <h3>Sign in</h3>

        </div>
        <div class="gambar">
            <img src="./assets/login.png" alt="a">
        </div>
        <div class="form">
            <form action="./BE/registrator.php" method="post">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="name" class="form-control" id="floatingInput" placeholder="Budi susanto" name="name">
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password">
                    <label for="floatingPassword">Password</label>
                    <br>
               </div> <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="confirm password" name="cpassword">
                    <label for="floatingPassword">confirm password</label>
                </div> 
                <br>
                <button type="submit" class="btn btn-warning" name="daftar" id="tombol">sign up</button>
            </form>
        </div>
        <br>
        <p>have an account please? <a href="index.php">log en</a></p>
        
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>

</html>