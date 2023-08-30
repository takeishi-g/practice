<?php

// クラスを定義
class TestScore 
{ 
  public $name = '';
  public $math = 0;
  public $english = 0;
  public $japanese = 0;

  function printScore(string $name, int $math, int $english, int $japanese) :void 
    {
      $sum = $math + $english + $japanese;
      $ave = $sum / 3;
      print($name."さんの合計: ".$sum."平均: ".$ave."<br>");
    }
}

// インスタンスを作成
$taro = new TestScore();
$taro->name = "たろう";
$taro->math = 87;
$taro->english = 92;
$taro->japanese = 74;

// TestScoreのメソッド使用して出力する
$taro->printScore($taro->name, $taro->math, $taro->english, $taro->japanese);

?>
