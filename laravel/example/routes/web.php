<?php

use App\Http\Controllers\JobController;
use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\SessionUserController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('home');
// });
// Mesma coisa que:
Route::view('/', 'home');
Route::view('/contact', 'contact');

Route::controller(JobController::class)->group(function () {
    // Index
    Route::get('/jobs', 'index');

    // Create
    Route::get('/jobs/create', 'create');

    // Show
    Route::get('/jobs/{job}', 'show');

    // Store
    Route::post('/jobs', 'store')->middleware('auth');

    // Edit
    Route::get('/jobs/{job}/edit', 'edit')
        ->middleware(['auth'])
        ->can('edit', 'job')
    ;

    // Update
    Route::patch('/jobs/{job}', 'update');

    // Destroy
    Route::delete('/jobs/{job}', 'destroy');
});

// Mesma coisa que
// Route::resource('jobs', JobController::class);

// Rotas de autenticação
Route::get('/register', [RegisteredUserController::class, 'create']);
Route::post('/register', [RegisteredUserController::class, 'store']);

Route::get('/login', [SessionUserController::class, 'create'])->name('login');
Route::post('/login', [SessionUserController::class, 'store']);
Route::post('/logout', [SessionUserController::class, 'destroy']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
