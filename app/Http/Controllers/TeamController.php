<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeamRequest;
use App\Models\Player;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teams = Team::all();
        return response()->json(['data' => $teams], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TeamRequest $request)
    {
        $user = auth()->user();
        $data = $request->validated();
        $data['league_id'] = $user->league->id;
        $team = new Team($data);
        $team->save();

        foreach ($data['players'] as $player) {
            $player = Player::find($player);
            $player->update(['team_id' => 1]);
        }
        $teams = Team::factory(5)->create(['league_id' => $user->league->id ]);

        foreach ($teams as $team) {

            $allPlayers = Player::factory(1)->gkp()->create();

            $def = Player::factory(4)->def()->create();
            $allPlayers = $allPlayers->merge($def);

            $mid = Player::factory(4)->mid()->create();
            $allPlayers = $allPlayers->merge($mid);


            $fwd = Player::factory(2)->fwd()->create();
            $allPlayers = $allPlayers->merge($fwd);

            foreach ($allPlayers as $player) {
                $player->update([ 'team_id' => $team->id ]);
            }
        }

        return response()->json(['message' => 'Success'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $team = Team::find($id);
        return response()->json($team, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $team = Team::find($id);
        $team->fill($request->all())->update();
        return response()->json(['Message' => 'Successfully updated'], 204);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Team::destroy($id);
        return response()->json(['Message' => 'Successfully deleted'], 204);

    }
}
