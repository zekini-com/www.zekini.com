<?php
    

     if (isset($_POST['submit'])) {
        $name = $_REQUEST['name'];
        $phonenumber = $_REQUEST['phonenumber'];
        $surname = $_REQUEST['surname'];
        $service = $_REQUEST['service'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];

        $captcha = $_POST["captcha"];
        $captchaUser = filter_var($_POST["captcha"], FILTER_SANITIZE_STRING);
        if(empty($captcha)) {
          $captchaError = array(
            "status" => "alert-danger",
            "message" => "Please enter the captcha."
          );
        }
        else if($_SESSION['CAPTCHA_CODE'] == $captchaUser){
          $captchaError = array(
            "status" => "alert-success",
            "message" => "Your form has been submitted successfuly."
          );
        } else {
          $captchaError = array(
            "status" => "alert-danger",
            "message" => "Captcha is invalid."
          );
        }

      // Set your email address where you want to receive emails. 
       $to = 'marvin@zekini.com';
       $subject = 'Contact Request From Website';
       $headers = "From: ".$name." ".$surname."\nEmail:".$email."\nService: ".$service."\nPhone number:".$phonenumber. "\n\n".$message;
       
       $send_email = mail($to,$subject,$headers);

      // echo ($send_email) ? 'success' : 'error';

  }
  
  ?> 
