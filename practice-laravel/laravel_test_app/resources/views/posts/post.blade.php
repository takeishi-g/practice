<x-layout>
  <x-slot name="title">
    {{ $post->subject }}
  </x-slot>
  <x-header/>
  <h1>{{ $post->subject }}</h1>
  <p>日付: {{ $today }}</p>
  
  <div class="">{{ $post->content }}</div>
</x-layout>

  