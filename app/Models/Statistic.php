<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    use HasFactory;

    protected $fillable = ['fixture_id', 'player_id', 'goals', 'assists', 'yellow', 'red', 'points'];
}
