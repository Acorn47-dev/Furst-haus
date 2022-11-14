<?php
$news = $_POST['input-news'];
$email = $_POST['input-email'];
$name = $_POST['input-name'];
if ($email === "") {
    $email = "none";
}
$to = 'nobody@example.com';
$subject = 'the subject';
$message = "name: " . $name . " news: " . $news . " email: " . $email;
$headers = "this is header";
mail($to, $subject, $message, $headers);
