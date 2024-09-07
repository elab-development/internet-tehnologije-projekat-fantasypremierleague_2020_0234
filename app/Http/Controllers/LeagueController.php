<?php

namespace App\Http\Controllers;

use App\Models\League;
use Illuminate\Http\Request;

class LeagueController extends Controller
{
    public function index()
    {
        $leagues = League::all();

        return response()->json($leagues, 200);
    }
}
