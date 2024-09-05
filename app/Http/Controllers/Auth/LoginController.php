<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request): JsonResponse
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->plainTextToken;
            $success['name'] =  $user->name;

            return response()->json($success, 200);
        }

        return response()->json(['error'=>'Unauthorised'], 401);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logged out successfully.'
        ]);
    }
}
