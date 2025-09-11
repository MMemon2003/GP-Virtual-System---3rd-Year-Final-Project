<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use Illuminate\Support\Facades\Auth;

class PatientController extends Controller
{
    public function index()
    {
        return view('patient-login');
    }

public function login(Request $request)
{
    $request->validate([
        'PName' => 'required',
        'PID' => 'required',
        'password' => 'required',
    ]);

    $patient = Patient::where('PatientName', $request->PName)
                    ->where('PatientID', $request->PID)
                    ->where('Password', $request->password)
                    ->first();

  if ($patient) {
    Auth::login($patient); // make sure Doctor model extends Authenticatable
    return redirect()->route('gp.virtual.system'); // redirects to GP Virtual System
}


    return back()->withErrors(['Invalid credentials']);
}


}
