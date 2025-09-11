<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Login - GP Virtual Monitoring System</title>
    <link rel="stylesheet" href="<?php echo e(asset('css/style.css')); ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <img src="<?php echo e(asset('images/gp_logo.png')); ?>" alt="Logo" class="header-logo mr-2">
            <a class="navbar-brand mx-auto" href="#">GP Virtual Monitoring System</a>
            <img src="<?php echo e(asset('images/gp_logo.png')); ?>" alt="Logo" class="header-logo ml-2">
        </div>
    </nav>
</header>

<main class="container mt-5">
    <h2 class="text-center mb-4">Doctor Login</h2>

    <?php if($errors->any()): ?>
        <div class="alert alert-danger text-center"><?php echo e($errors->first()); ?></div>
    <?php endif; ?>

 <form action="<?php echo e(route('doctor.login')); ?>" method="POST" class="mx-auto" style="max-width: 400px;">
    <?php echo csrf_field(); ?>
    <div class="form-group">
        <label for="drname">Doctor Name:</label>
        <input type="text" id="drname" name="drname" class="form-control" required>
    </div>

    <div class="form-group">
        <label for="drid">Doctor ID:</label>
        <input type="text" id="drid" name="drid" class="form-control" required>
    </div>

    <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" class="form-control" required>
    </div>

    <button type="submit" class="btn btn-success btn-block mt-3">Login</button>
</form>

</main>

<footer class="footer bg-dark text-white mt-5">
    <div class="container text-center py-3">
        <p class="mb-0">&copy; 2024 GP Virtual Monitoring System. All Rights Reserved.</p>
    </div>
</footer>

</body>
</html>
<?php /**PATH C:\laragon\www\MyLaravelProject\resources\views/doctor-login.blade.php ENDPATH**/ ?>