<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{
    //
    public function index() {
        return view('posts.index');
    }

    public function create() {
        return view('posts.create');
    }

    public function store(Request $request) {
        $post = new Post();
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        return redirect()->route('posts.index')->with('flash_message', '投稿が完了しました。');
    }
}
