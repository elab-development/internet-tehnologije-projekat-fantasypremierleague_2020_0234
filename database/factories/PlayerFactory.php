<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Player>
 */
class PlayerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'age' => fake()->numberBetween(18,35),
            'price' => fake()->numberBetween(1,20),
        ];
    }

    public function gkp(): static
    {
        return $this->state(fn (array $attributes) => [
            'position' => 'gkp',
        ]);
    }

    public function def(): static
    {
        return $this->state(fn (array $attributes) => [
            'position' => 'def',
        ]);
    }

    public function mid(): static
    {
        return $this->state(fn (array $attributes) => [
            'position' => 'mid',
        ]);
    }

    public function fwd(): static
    {
        return $this->state(fn (array $attributes) => [
            'position' => 'fwd',
        ]);
    }
}
