<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $input = $request->validated();
        $input['password'] = bcrypt($input['password']);
        $input['role_id'] = 1;
        $user = User::create($input);
        $success['token'] =  $user->createToken('AuthToken')->plainTextToken;
        $success['name'] =  $user->name;

        return response()->json(['success' => $success], 200);
    }
}
