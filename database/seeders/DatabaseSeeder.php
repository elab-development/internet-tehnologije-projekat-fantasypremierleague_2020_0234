<?php

namespace Database\Seeders;

use App\Models\League;
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

        League::factory(100)->create();

        User::factory(100)->user()->create();

        User::factory()->admin()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'league_id' => 1,
            'password' => Hash::make('admin')
        ]);

        Player::factory(150)->gkp()->create();
        Player::factory(150)->def()->create();
        Player::factory(150)->mid()->create();
        Player::factory(150)->fwd()->create();

    }
}
