<?php
$news = $_POST['dialog-form__input-news'];
$email = $_POST['dialog-form__input-email'];
$name = $_POST['dialog-form__input-name'];
if ($email === "") {
    $email = "none";
}
$to = 'nobody@example.com';
$subject = 'the subject';
$message = "name: " . $name . " news: " . $news . " email: " . $email;
$headers = "this is header";
mail($to, $subject, $message, $headers);
