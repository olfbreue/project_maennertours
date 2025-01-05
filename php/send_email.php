<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $comment = htmlspecialchars($_POST['comment']);
    $captcha = htmlspecialchars($_POST['captcha']);

    if ($captcha == $_SESSION['captcha']) {
        $to = "info@maennertours.com";
        $subject = "Contact Form Submission from $firstname $lastname";
        $message = "Name: $firstname $lastname\nEmail: $email\n\nComment:\n$comment";
        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid CAPTCHA.";
    }
} else {
    echo "Invalid request.";
}
?>
