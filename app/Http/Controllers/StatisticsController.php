<?php

namespace App\Http\Controllers;

use App\Models\League;
use App\Models\Statistic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class StatisticsController extends Controller
{
    public function index()
    {
        $leagues = League::where('id', '!=', 1)->has('teams')->with('rounds')->get();
        $fixtures = collect();
        foreach ($leagues as $league) {
            $fixtures->push($league->rounds->last()->fixtures->load('first.players', 'second.players'));
        }
        return response()->json([$leagues, $fixtures]);
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $points = 0;
        $points += ($data['goals']*2);
        $points += ($data['yellow_cards']* -1);
        $points += ($data['red_cards']*-2);
        $points += ($data['assists']*1.5);
        $data['points'] = $points;
        $stat = new Statistic($data);
        $stat->save();

        return response()->json(['Message' => 'Success'], 200);
    }
}
