<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctor;
use Illuminate\Support\Facades\Auth;

class DoctorController extends Controller
{
    public function index()
    {
        return view('doctor-login');
    }

public function login(Request $request)
{
    $request->validate([
        'drname' => 'required',
        'drid' => 'required',
        'password' => 'required',
    ]);

    $doctor = Doctor::where('DRNAME', $request->drname)
                    ->where('DRID', $request->drid)
                    ->where('Password', $request->password)
                    ->first();

  if ($doctor) {
    Auth::login($doctor); // make sure Doctor model extends Authenticatable
    return redirect()->route('gp.virtual.system'); // redirects to GP Virtual System
}


    return back()->withErrors(['Invalid credentials']);
}


}
