<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "laprce90@gmail.com"; // Replace with your email address
    $subject = "New contact form submission";
    
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
      echo "Message sent successfully!";
    } else {
      echo "Failed to send message. Please try again later.";
    }
  }
?>
