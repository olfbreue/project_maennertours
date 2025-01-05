<?php
session_start();

$code = rand(1000, 9999);
$_SESSION['captcha'] = $code;

$im = imagecreatetruecolor(100, 38);
$bg = imagecolorallocate($im, 22, 86, 165); // background color blue
$fg = imagecolorallocate($im, 255, 255, 255); // text color white
imagefill($im, 0, 0, $bg);
imagestring($im, 5, 30, 10,  $code, $fg);

header("Cache-Control: no-cache, must-revalidate");
header('Content-type: image/png');
imagepng($im);
imagedestroy($im);
?>
