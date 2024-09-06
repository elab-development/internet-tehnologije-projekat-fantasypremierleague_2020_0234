<?php

namespace App\Http\Controllers;

use App\Models\Statistic;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $stat = new Statistic($data);
        $stat->save();

        return response()->json(['Message' => 'Success'], 200);
    }
}
