<?php

use App\Http\Controllers\PostsContoroller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [PostsContoroller::class, 'index']);

Route::get('/about', function () {
    // return('このブログについて');
    return view('about');
});

Route::get('/posts/{id}', [PostsContoroller::class, 'show']
);