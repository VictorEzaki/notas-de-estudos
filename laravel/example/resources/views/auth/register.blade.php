<x-layout>
    <x-slot:heading>
        Create user
    </x-slot:heading>

    <form method="POST" action="/register">
        @csrf
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base/7 font-semibold text-gray-900">Register now</h2>
                <p class="mt-1 text-sm/6 text-gray-600">We just need a handful of details from you.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <x-form-field>

                        <x-form-label for="first_name">First name</x-form-label>
                        <div class="mt-2">
                            <x-form-input id="first_name" type="text" name="first_name" :value="old('first_name')" placeholder="Victor" required />

                            <x-form-error name="first_name" />
                        </div>

                    </x-form-field>

                    <x-form-field>

                        <x-form-label for="last_name">Last name</x-form-label>
                        <div class="mt-2">
                            <x-form-input id="last_name" type="text" name="last_name" :value="old('last_name')" required
                                placeholder="Ezaki" />

                            <x-form-error name="last_name" />
                        </div>

                    </x-form-field>

                    <x-form-field>

                        <x-form-label for="email">E-mail</x-form-label>
                        <div class="mt-2">
                            <x-form-input id="email" type="text" name="email" :value="old('email')" required
                                placeholder="victor@example.com" />

                            <x-form-error name="email" />
                        </div>

                    </x-form-field>

                    <x-form-field>

                        <x-form-label for="password">Password</x-form-label>
                        <div class="mt-2">
                            <x-form-input id="password" type="password" name="password" required />

                            <x-form-error name="password" />
                        </div>

                    </x-form-field>

                    <x-form-field>

                        <x-form-label for="password_confirmation">Confirm password</x-form-label>
                        <div class="mt-2">
                            <x-form-input id="password_confirmation" type="password" name="password_confirmation" required />

                            <x-form-error name="password_confirmation" />
                        </div>

                    </x-form-field>
                </div>
                {{-- @error
                    <p class="text-xs text-red-500 font-semibold mt-1">{{ $message }}</p>
                @enderror --}}
            </div>
        </div>
        {{-- @if ($errors->any())
        <ul>
            @foreach ($errors->all() as $error)
                <li class="text-red-500">{{ $error }}</li>
            @endforeach
        </ul>
    @endif --}}

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <a href="/" class="text-sm/6 font-semibold text-gray-900">Cancel</a>
            <x-form-button>Register</x-form-button>
        </div>
    </form>

</x-layout>
