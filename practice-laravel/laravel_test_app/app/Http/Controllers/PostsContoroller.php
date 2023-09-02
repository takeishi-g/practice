<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostsContoroller extends Controller
{
    //
    public function show($id){
        $today = date('Y-m-d');

        $posts = DB::select('select * from posts where id=1');
        $post = $posts[0];
        
        return view('posts.post', ['post' => $post, 'today' => $today]);
    }
}
