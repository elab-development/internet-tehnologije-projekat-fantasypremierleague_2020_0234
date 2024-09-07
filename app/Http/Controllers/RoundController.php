<?php

namespace App\Http\Controllers;

use App\Models\Fixture;
use App\Models\League;
use App\Models\Round;
use Illuminate\Http\Request;

class RoundController extends Controller
{
    public function store(Request $request)
    {
        $leagueID = $request->get('league_id');
        $round = new Round(['league_id' => $leagueID]);
        $round->save();
        $league = League::find($leagueID);
        $teams = $league->teams->shuffle();
        $chunks = $teams->split(2);
        $firstPart = $chunks->get(0);
        $secondPart = $chunks->get(1);

        for ($i = 0; $i < count($chunks); $i++) {
            $firstTeam = $firstPart->get($i);
            $secondTeam = $secondPart->get($i);

            $data['round_id'] = $round->id;
            $data['first_team'] = $firstTeam->id;
            $data['second_team'] = $secondTeam->id;

            $fixture = new Fixture($data);
            $fixture->save();
        }

        return response()->json(['Message' => 'Success'], 200);
    }
}
