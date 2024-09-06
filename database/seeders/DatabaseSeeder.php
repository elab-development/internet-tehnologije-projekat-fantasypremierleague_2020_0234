<?php

namespace Database\Seeders;

use App\Models\Player;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);

        User::factory(100)->user()->create();

        User::factory()->admin()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin')
        ]);

        Player::factory(60)->gkp()->create();
        Player::factory(60)->def()->create();
        Player::factory(60)->mid()->create();
        Player::factory(60)->fwd()->create();

    }
}
