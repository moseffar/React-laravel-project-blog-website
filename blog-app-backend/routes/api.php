<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\TempImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('blogs',[BlogController::class,'index']);
Route::post('blogs',[BlogController::class,'store']);
Route::post('save-temp-image',[TempImageController::class,'store']);
Route::get('blogs/{id}',[BlogController::class,'show']);
Route::put('blogs/{id}',[BlogController::class,'update']);
Route::delete('blogs/{id}',[BlogController::class,'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});