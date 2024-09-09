<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Http\Services\RoundService;
use App\Models\Fixture;
use App\Models\League;
use App\Models\Round;
use Illuminate\Http\Request;

class RoundController extends Controller
{
    private $roundService;

    public function __construct(RoundService $roundService)
    {
        $this->roundService = $roundService;
    }

    public function index()
    {
        $rounds = auth()->user()->league->rounds->last()->fixtures->load('first','second', 'statistics');
        foreach ($rounds as $round) {
            $points = 0;
            foreach ($round->statistics as $single) {
                $points+= $single->points;
            }
            $round->points = $points;
        }
        return response()->json($rounds);
    }

    public function store(Request $request)
    {
        $leagueID = $request->get('league_id');
        $this->roundService->startRound($leagueID);
        event(new MessageSent('Round started'));
        return response()->json(['Message' => 'Success'], 200);
    }
}
