<?php

use App\Http\Controllers\PatientController;

use App\Http\Controllers\DoctorController;

use Illuminate\Support\Facades\Route;


// Patient pages
Route::get('/patient', [PatientController::class, 'index'])->name('patient.index');
Route::post('/patient/login', [PatientController::class, 'login'])->name('patient.login');


// Doctor pages
Route::get('/doctor', [DoctorController::class, 'index'])->name('doctors.index');
Route::post('/doctor/login', [DoctorController::class, 'login'])->name('doctor.login');
Route::get('/doctor/dashboard', [DoctorController::class, 'dashboard'])->name('doctor.dashboard');

// GP Virtual System page
Route::get('/GP-Virtual-System', function () {
    return view('GPVirtualSystem'); // Blade file: resources/views/GPVirtualSystem.blade.php
})->name('gp.virtual.system');

// Home page
Route::get('/', function () {
    return view('index');
});

//Patient Medical Report Page
Route::get('/Patients-Medical-Reports', function () {
    return view('PatientsMedicalReports');
})->name('patients.medical.reports');


