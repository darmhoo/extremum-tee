<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', 'UserController@store');
Route::post('/login', 'AuthController@login');
Route::post('/password/reset', 'AuthController@sendResetLinkEmail');
Route::put('/password/reset', 'AuthController@reset');
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/user/getBranchUsers', 'UserController@getBranchUsers');
    Route::Resources([
        'user' => 'UserController',
    ]);
    /*------*/
    Route::get('/users/list_type/{type}', 'UserController@getListForTypeahead');
    Route::post('/user/{id}/cv', 'UserController@uploadCV');
    Route::post('/logout', 'AuthController@logout');
    Route::get('/create', 'AuthController@create');
    Route::get('/employee/{id}/edit', 'AuthController@edit');
    Route::post('/employee/{id}/update', 'AuthController@update');
    Route::get('/reset-password/{id}', 'AuthController@resetPassword');

});


