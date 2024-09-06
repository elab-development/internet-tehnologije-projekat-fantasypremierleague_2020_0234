<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Testing\Fluent\Concerns\Has;

class FetchPerson extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:fetch-person';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $response = Http::get('https://randomuser.me/api/');
        if ($response->successful()) {
            $data = $response->json()['results'][0];
            User::create(
                [
                    'name' => $data['name']['first'] . $data['name']['last'],
                    'email' => $data['email'],
                    'password' => Hash::make($data['login']['password']),
                    'role_id' => 1
                ]
            );

            $this->info('Successfully fetched and created');
            return 0;
        }

        $this->info('API fetching failed');
        return 0;
    }
}
