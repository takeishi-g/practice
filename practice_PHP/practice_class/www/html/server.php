<?php

// [ server.php ] 

// 1. POSTされた生のデータを受け取る
$request_raw_data = file_get_contents('php://input');

// 2. JSON形式のデータをデコードする
// => データをPHP上で処理できるような形にする。
$data = json_decode($request_raw_data);

// 3. データをPHP(Server-Side)上で処理する！

// key指定でvalueのUpdate
// $data->name = 'ロボ玉';


// key & valueの追加
$data->robotama_flag = true;
$data->like_food = 'ひまわりの種';

// var_dump($data);
// $response = $data;
$response = "通信成功";

// 4. echo するとClient-Sideにデータを返却することができる！
// => JSON形式にして返す
echo json_encode($response); 