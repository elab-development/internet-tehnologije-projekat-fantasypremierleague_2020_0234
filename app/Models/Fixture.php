<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Fixture extends Model
{
    use HasFactory;

    protected $fillable = ['round_id', 'first_team', 'second_team'];

    public function statistics(): HasMany
    {
        return $this->hasMany(Statistic::class);
    }

    public function first(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'first_team');
    }

    public function second(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'second_team');
    }
}
