<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GP Patient Monitoring System</title>
    <link rel="stylesheet" href="<?php echo e(asset('css/style.css')); ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <img src="<?php echo e(asset('images/gp_logo.png')); ?>" alt="Left Image" class="header-image mr-2">
            <a class="navbar-brand mx-auto" href="#">GP Virtual Monitoring System</a>
            <img src="<?php echo e(asset('images/gp_logo.png')); ?>" alt="Right Image" class="header-image ml-2">
        </div>
    </nav>
</header>

<div class="container_main text-center mt-5">
    <h2>Are you a Patient or a GP/Doctor?</h2>
    <div class="mt-4">
        <!-- Buttons to go to login pages -->
        <a href="<?php echo e(route('patient.index')); ?>" class="btn btn-primary btn-lg mx-2">Patient</a>
        <a href="<?php echo e(route('doctors.index')); ?>" class="btn btn-success btn-lg mx-2">GP/Doctor</a>
    </div>
</div>

<footer class="footer bg-dark text-white mt-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <p class="font-weight-bold">&copy; 2024 GP Virtual Monitoring System. All Rights Reserved.</p>
            </div>
            <div class="col-lg-6">
                <form class="form-inline float-right">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search this site">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>
</footer>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>
<?php /**PATH C:\laragon\www\MyLaravelProject\resources\views/index.blade.php ENDPATH**/ ?>