<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    public function create() {
        return view('auth.register');
    }

    public function store() {
        // Validar os atributos enviados
        $validatedAttributes = request()->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', Password::min(6), 'confirmed'],
        ]);

        // Criar o usuário
        $user = User::create($validatedAttributes);

        // Logar o usuário
        FacadesAuth::login($user);

        // Redirecionar o usuário
        return redirect('/jobs');
    }
}
