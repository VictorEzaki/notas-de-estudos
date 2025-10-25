<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessionUserController extends Controller
{
    public function create() {
        return view('auth.login');
    }

    public function store() {
        // Validar
        $attributes = request()->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        // Tente fazer o login
        if (! Auth::attempt($attributes)) {
            throw ValidationException::withMessages([
                'email' => 'Sorry, those credentials do not match'
            ]);
        } 

        // Regenerar o token
        request()->session()->regenerate();

        // Redirecionar o usuário
        return redirect('/jobs');
    }

    public function destroy() {
        Auth::logout();

        return redirect('/');
    }
}
