<?php

use App\Http\Controllers\JobController;
use App\Models\Job;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('home');
// }); 
// Mesma coisa que:
Route::view('/', 'home');

// Route::controller(JobController::class)->group(function () {
//     // Index
//     Route::get('/jobs', 'index');
    
//     // Create
//     Route::get('/jobs/create', 'create');
    
//     // Show
//     Route::get('/jobs/{job}', 'show');
    
//     // Store
//     Route::post('/jobs', 'store');
    
//     // Edit
//     Route::get('/jobs/{job}/edit', 'edit');
    
//     // Update
//     Route::patch('/jobs/{job}', 'update');
    
//     // Destroy
//     Route::delete('/jobs/{job}', 'destroy');
// });

// Mesma coisa que
Route::resource('jobs', JobController::class);


Route::view('/contact', 'contact');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';