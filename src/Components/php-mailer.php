<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // if using Composer

$mail = new PHPMailer(true);

try {
    $mail->isSMTP(); // or use isMail() for simple PHP mail()
    $mail->Host = 'theclickfunnel.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@theclickfunnel.com';
    $mail->Password = 'Pn[kqXH}Ca;b';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 465;

    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('dc9958211@gmail.com'); // Your receiving email

    $mail->isHTML(true);
    $mail->Subject = 'Contact Form Submission';
    $mail->Body = nl2br($_POST['comments']);

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
