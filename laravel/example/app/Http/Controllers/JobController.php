<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\User;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Support\Facades\Auth as SupportFacadesAuth;
use Illuminate\Support\Facades\Gate;

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::with('employer')->latest()->simplePaginate(10);

        return view('jobs.index', [
            'jobs' => $jobs,
        ]);
    }

    public function create()
    {
        return view('jobs.create');
    }

    public function show(Job $job)
    {
        return view('jobs.show', ['job' => $job]);
    }

    public function store()
    {
        request()->validate([
            'title' => ['required', 'min:3'],
            'salary' => ['required'],
        ]);

        Job::create([
            'employer_id' => 1,
            'title' => request('title'),
            'salary' => request('salary'),
        ]);

        return redirect('/jobs');
    }

    public function edit(Job $job)
    {
        Gate::define('edit-job', function (User $user, Job $job){
            $job->employer->user->is($user);
        });

        if (FacadesAuth::guest()) {
            redirect('/login');
        }

        Gate::authorize('edit-job', $job);
        
        return view('jobs.edit', ['job' => $job]);
    }

    public function update(Job $job)
    {
        // validate
        request()->validate([
            'title' => ['required', 'min:3'],
            'salary' => ['required'],
        ]);

        // authorize (On hold...)

        // update the job
        // and persist

        $job->update([
            'title' => request('title'),
            'salary' => request('salary'),
        ]);

        // redirect to the job page
        return redirect('/jobs/'.$job->id);
    }

    public function destroy(Job $job)
    {
        // authorize (On hold...)
        // delete the job
        $job->delete();

        // redirect
        return redirect('/jobs');
    }
}
