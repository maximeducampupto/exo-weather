<?php

$key = '1b539d55f0e473c08c39fee984bceb67';
$city = filter_var($_GET['city'], FILTER_SANITIZE_STRING);
$url = "api.openweathermap.org/data/2.5/weather?q={$city}&APPID={$key}&units=metric";

$request = curl_init();
curl_setopt($request, CURLOPT_URL, $url);
curl_setopt($request, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($request, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($request, CURLOPT_TIMEOUT, 5);
$data = curl_exec($request);
curl_close($request);

echo ($data);

