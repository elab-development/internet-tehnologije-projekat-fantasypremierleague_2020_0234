<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function index()
    {
        $gkp = Player::where('position', 'gkp')->take(15)->whereNull('team_id')->get();
        $def = Player::where('position', 'def')->take(15)->whereNull('team_id')->get();
        $mid = Player::where('position', 'mid')->take(15)->whereNull('team_id')->get();
        $fwd = Player::where('position', 'fwd')->take(15)->whereNull('team_id')->get();

        return response()->json(['gkp' => $gkp, 'def' => $def, 'mid' => $mid, 'fwd' => $fwd], 200);

    }
}
