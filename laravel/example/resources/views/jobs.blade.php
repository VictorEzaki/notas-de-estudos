<x-layout>
    <x-slot:heading>
        Jobs
    </x-slot:heading>

    <div class= "space-y-4">
        {{-- <form method="GET" action="/jobs">
            Registro por páginas: <input name="number-paginate" id="number-paginate" type="number">
            <button type="submit">Salvar</button>
        </form> --}}

        @foreach ($jobs as $job)
            <a href="/jobs/{{ $job['id'] }}" class="block px-4 py-6 border border-gray-200">
                <div class="font-bold text-blue-500">
                    {{ $job->employer->name }}
                </div>

                <div>
                    <strong>{{ $job['title'] }}: Pays {{ $job['salary'] }} per year.</strong>
                </div>
            </a>
        @endforeach

        <div>
            {{ $jobs->links() }}
        </div>
    </div>
</x-layout>
