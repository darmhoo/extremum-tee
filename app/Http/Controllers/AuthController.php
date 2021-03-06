<?php

namespace App\Http\Controllers;

use App\Events\SendPasswordResetLinkEvent;
use App\PasswordResets;
use App\Repositories\AuthRepository;
use App\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Validator;

class AuthController extends Controller
{
    /**
     * @var AuthRepository
     */
    private $authRepository;

    /**
     * AuthController constructor.
     * @param AuthRepository $authRepository
     */
    public function __construct(AuthRepository $authRepository)
    {

        $this->authRepository = $authRepository;
    }

    public function login(Request $request)
    {
        $message = 'Check your login details and try again!';
        $user = User::where('email', $request->email)->first();

        if (!$user) return response()->json([
            'email' => ['The combination does not exist in our record!'],
            'message' => $message
        ], 404);

        if ($user->portal_access === 1) {
            if ($user && Hash::check($request->password, $user->password)) {
                $user->api_token = str_random(60);
                $user->save();
                return response()->json([
                    'user_id' => $user->id,
                    'auth' => true,
                    'role' => $user->role_id,
                    'api_token' => $user->api_token,
                    'user_name' => $user->name,
                    'portal_access' => $user->portal_access,


                    'message' => 'You have successfully logged in'
                ]);
            }
            return response()->json([
                'email' => ['Provided email and password does not match'],
                'message' => $message
            ], 401);
        } else {
            return response()->json([
                'authenticated' => false,
                'message' => 'You are not authorized to access this portal!'
            ], 403);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->api_token = null;
        $user->save();
        return response()->json(['logged_out' => true]);
    }

    public function sendResetLinkEmail()
    {
        $data = $this->validate(request(), PasswordResets::$rules);
        $this->authRepository->sendResetLinkEmail($data);
        return response()->json(['data' => [], 'message' => 'Reset Email Successfully Sent'], 201);
    }

    public function reset()
    {
        $data = $this->validate(request(), PasswordResets::$resetRules);
        $this->authRepository->resetPassword($data);
        return response()->json(['data' => [], 'message' => 'Password reset Successful'], 200);
    }

    public function resetPassword($id)
    {
        $user = User::where('id', $id)->first();
        $gen_password = str_random(8);
        $user->password = bcrypt($gen_password);
        $user->api_token = null;
        $user->save();
        return response()->json([
            'reset' => true,
            'password' => $gen_password
        ]);
    }
}
