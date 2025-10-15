<?php

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/jobs', function () {
    $jobs = Job::with('employer')->paginate(3);

    return view('jobs.index', [
        'jobs' => $jobs
    ]);
});

Route::get('/jobs/create', function () {
    return view('jobs.create');
});

Route::get('/jobs/{id}', function ($id) {
    $job = Job::find($id);
    
    return view('jobs.show', ['job' => $job]);
});

Route::post('/jobs', function () {
    dd('hello there');
});

Route::get('/contact', function () {
    return view('contact');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
