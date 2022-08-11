<?php
     if (isset($_POST['submit'])) {
        $name = $_REQUEST['name'];
        $phonenumber = $_REQUEST['phonenumber'];
        $surname = $_REQUEST['surname'];
        $service = $_REQUEST['service'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];

      // Set your email address where you want to receive emails. 
       $to = 'marvwk100@gmail.com';
       $subject = 'Contact Request From Website';
       $headers = "From: ".$name."<".$email."> \r\n Service: ".$service."Phone number:".$phonenumber;
       $send_email = mail($to,$subject,$message,$headers);

       echo ($send_email) ? 'success' : 'error';

  }?> 