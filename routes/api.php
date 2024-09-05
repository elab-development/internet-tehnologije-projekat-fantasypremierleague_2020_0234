<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
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

    Route::middleware('auth:sanctum', 'role:admin')->apiResource('/users', UserController::class);
});
