<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('');
    }

    public function getData()
    {
        $model = User::select('id', 'full_name','staff_id', 'phone_number','portal_access','email', 'date_of_appointment')->searchPaginateAndOrder();
        $columns = User::$columns;
        return response()->json([
            'model' => $model,
            'columns' => $columns,
        ]);
    }
}