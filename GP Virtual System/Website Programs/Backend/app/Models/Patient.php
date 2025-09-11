<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable; // <- extend this
use Illuminate\Notifications\Notifiable;

class Patient extends Authenticatable
{
    use Notifiable;

    protected $table = 'patients';

    protected $primaryKey = 'id'; // optional if default 'id'

   protected $fillable = [
        'PatientName',
        'PatientID',
        'Password',
    ];

    protected $hidden = [
        'Password',
    ];

    public $timestamps = false; // if your table has no created_at/updated_at
}


