<?php

namespace App\Http\Controllers;

use Hash;
use App\Role;
use App\User;
use App\Branch;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only('logout' );
    }

    public function create()
    {
        $form = User::form();

        $roles = Role::select('name', 'id')->get();

        $branches = Branch::select('name', 'id')->get();

        return response()->json([

            'form' => $form,

            'roles' => $roles,

            'branches' => $branches,

        ]);
    }

    public function register(Request $request)
    {
        /***validating the field below in the
         **backend because vue validation
         *
         * cant handle the validation**/

        $this->validate($request, [

            'email' => 'unique:users',

            'staff_id' => 'unique:users',

            'phone_number' => 'unique:users',

        ]);

        $user = new User($request->all());

        $gen_password = str_random(10);

        $user->password = bcrypt($gen_password);

        $user->hr_id = auth('api')->user()->id;

        $user->save();

        $form = User::form();

        return response()
            ->json([

                'registered' => true,

                'password' => $gen_password,

                'form' => $form,
            ]);
    }

    public function login(Request $request)
    {
        $this->validate($request, [

            'staff_id' => 'required',

            'password' => 'required|between:6,25'

        ]);

        $user = User::where('staff_id', $request->staff_id)
            ->first();

        if ($user->portal_access === 1) {

            if ($user && Hash::check($request->password, $user->password)) {

                $user->api_token = str_random(60);

                $user->save();

                return response()
                    ->json([

                        'authenticated' => true,

                        'api_token' => $user->api_token,

                        'user_id' => $user->id,

                        'user_name' => $user->full_name,

                        'role' => $user->role_id,

                        'portal_access' => $user->portal_access,

                    ]);
            }

            return response()
                ->json([

                    'email' => ['Provided staff id and password does not match']

                ], 422);

        } else {

            return response()
                ->json([

                    'authenticated' => false,

                    'message' => 'You are not authorized to access this portal. Please meet the authority to verify your portal access status!'

                ]);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        $user->api_token = null;

        $user->save();

        return response()->json(['logged_out' => true]);
    }

    public function search(Request $request)
    {
        $qry = $request->qry;

        $roles = User::select('id', 'phone_number', 'staff_id', 'full_name')->where('full_name', 'like', '%' . $qry . '%')->get();

        return response()->json([

            'result' => $roles,

        ]);

    }

    public function edit($id)
    {
        $roles = Role::select('name', 'id')->get();

        $branches = Branch::select('name', 'id')->get();

        $user = User::where('id', $id)->get();

        return response()->json([

            'roles' => $roles,

            'branches' => $branches,

            'user' => $user[0],

        ]);

    }

    public function editAccess($id)
    {
        $user = User::where('id', $id)->select('id', 'portal_access')->get();

        return response()->json([

            'user' => $user[0],

        ]);
    }

    public function update(Request $request, $id)
    {
        User::whereId($id)->update($request->all());

        return response()->json([

            'updated' => true,

        ]);

    }
}