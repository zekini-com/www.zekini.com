<?php
     if (isset($_POST['submit'])) {
        $name = $_REQUEST['name'];
        $phonenumber = $_REQUEST['phonenumber'];
        $surname = $_REQUEST['surname'];
        $service = $_REQUEST['service'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];

      // Set your email address where you want to receive emails. 
       $to = 'marvin@zekini.com';
       $subject = 'Contact Request From Website';
       $headers = "From: ".$name." ".$surname."\nEmail:".$email."\nService: ".$service."\nPhone number:".$phonenumber. "\n\n".$message;
       $send_email = mail($to,$subject,$headers);

     //   echo ($send_email) ? 'success' : 'error';

  }?> 