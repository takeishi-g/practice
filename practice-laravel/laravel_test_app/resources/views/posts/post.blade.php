<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ $post->subject }}番目の記事です</title>
</head>
<body>
  <h1>{{ $post->subject }}</h1>
  <p>日付: {{ $today }}</p>

  <div class="">{{ $post->content }}</div>
</body>
</html>