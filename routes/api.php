<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\LeagueController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\UserPlayerController;
use App\Http\Controllers\RoundController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum', 'role:admin,moderator,user');

Route::post('/register', [RegisterController::class, 'register'])->name('register');
Route::post('/login', [LoginController::class, 'login'])->name('login');

Route::prefix('dashboard')
    ->middleware('auth:sanctum', 'role:admin,moderator,user')
    ->group(function () {

    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

    Route::get('/players', [UserPlayerController::class, 'index'])->name('player.index');

    Route::get('/available/players', [PlayerController::class, 'index'])->name('available.player.index');

    Route::post('/teams', [TeamController::class, 'store'])->name('team.store');
    Route::get('/teams', [TeamController::class, 'index'])->name('team.index');
    Route::patch('/teams', [TeamController::class, 'update'])->name('team.update');
    Route::delete('/teams', [TeamController::class, 'delete'])->name('team.delete');

    Route::get('/leagues', [LeagueController::class, 'index'])->name('league.index');

    Route::middleware('role:admin,moderator')->post('/statistic', [StatisticsController::class, 'store'])->name('statistic.index');
    Route::middleware('role:admin,moderator')->post('/rounds', [RoundController::class, 'store'])->name('round.index');

    Route::middleware('role:admin')->apiResource('/users', UserController::class);
});
