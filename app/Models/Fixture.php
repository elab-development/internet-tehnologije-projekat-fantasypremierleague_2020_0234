<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Fixture extends Model
{
    use HasFactory;

    protected $fillable = ['round_id', 'first_team', 'second_team'];

    public function statistics(): HasMany
    {
        return $this->hasMany(Statistic::class);
    }
}
