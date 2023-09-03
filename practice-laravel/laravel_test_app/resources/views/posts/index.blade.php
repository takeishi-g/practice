<x-layout>
  <x-slot name="title">
    My blog
  </x-slot>

  <x-header/>
  
  <ul>
    @foreach($posts as $post)
    <li><a href="/posts/{{ $post->id }}">{{ $post->subject }}</a></li>
    @endforeach
  </ul>
</x-layout>