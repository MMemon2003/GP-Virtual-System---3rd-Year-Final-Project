<?php
    namespace App\Http\Controllers;
    
    use Illuminate\Http\Request;
    
    class PageController extends Controller {
        public function home() {
            return view('home'); // Loads resources/views/home.blade.php
        }
    
        public function index() {
            return view('index'); // Loads resources/views/about.blade.php
        }
    
        public function GPVirtualSystem() {
            return view('gp_virtual_system'); // Loads resources/views/gp_virtual_system.blade.php
        }
    
        public function PatientsMedicalReports() {
            return view('patients_medical_reports'); // Loads resources/views/patients_medical_reports.blade.php
        }
    }
    

