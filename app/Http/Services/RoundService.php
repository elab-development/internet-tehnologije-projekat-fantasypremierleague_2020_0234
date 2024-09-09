<?php

namespace App\Http\Services;

use App\Models\Fixture;
use App\Models\League;
use App\Models\Round;

class RoundService
{

    public function startRound($leagueID)
    {
        $round = new Round(['league_id' => $leagueID]);
        $round->save();
        $league = League::find($leagueID);
        $teams = $league->teams->shuffle();
        $chunks = $teams->split(2);
        $firstPart = $chunks->get(0);
        $secondPart = $chunks->get(1);

        for ($i = 0; $i < $teams->count()/2; $i++) {
            $firstTeam = $firstPart->get($i);
            $secondTeam = $secondPart->get($i);

            $data['round_id'] = $round->id;
            $data['first_team'] = $firstTeam->id;
            $data['second_team'] = $secondTeam->id;

            $fixture = new Fixture($data);
            $fixture->save();
        }
    }
}
