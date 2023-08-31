<?php

class Task 
{
  public $name;
  public $priority;
  public $progress;

  //コンストラクタ定義
  public function __construct
  (
    //デフォルト引数の設定
    string $name,
    int $priority = 1,
    int $progress = 0
  )
  {
    $this->name = $name;
    $this->priority = $priority;
    $this->progress = $progress;
  }

}

$task = new Task('プログラミング学習', 2, 1);
//コンストラクタの引数$nameに値を渡す

echo $task->name.PHP_EOL;
echo $task->priority.PHP_EOL;
echo $task->progress.PHP_EOL;