<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You would use PHP's mail() function or a library like PHPMailer to send the email here.
    // Replace the placeholders below with your email sending code.
    
    $to = "email@mu-point.com";
    $subject = "Contact Form Submission";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);

    // Redirect back to the page after sending the email or display a thank you message.
    header("Location: index.html");
}
?>

