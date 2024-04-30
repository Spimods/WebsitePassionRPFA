<?php
    session_start();
    $serveur = "localhost";
    $utilisateur = "u621842480_ctf";
    $motDePasse = "Brunault1990";
    $baseDeDonnees = "u621842480_ctf";

    $connexion = mysqli_connect($serveur, $utilisateur, $motDePasse, $baseDeDonnees);
    
    if (!$connexion) {
        die("La connexion a échoué: " . mysqli_connect_error());
    }
    if(isset($_SESSION['ctfId'])){
        $nom = mysqli_real_escape_string($conn, $_SESSION['ctfId']);
    } else {
        $nom = 'no name';
    }
    
    $email = mysqli_real_escape_string($connexion, $_GET['email']);
    $message = mysqli_real_escape_string($connexion, $_GET['message']);
    $subject = mysqli_real_escape_string($connexion, $_GET['sujet']);
    $random_number = str_pad(mt_rand(0, 999999999999), 12, '0', STR_PAD_LEFT);


    $sql = "INSERT INTO contact (nom, email, message, subject, valeur) VALUES ('$nom', '$email', '$message', '$subject', '$random_number')";
    mysqli_query($connexion, $sql) or die(mysqli_error($connexion));
    
    
    $sql2 = "INSERT INTO chatroom (chat_name, userid, value_encrypt) VALUES ('$subject',1,'$random_number')";
    mysqli_query($connexion, $sql2) or die(mysqli_error($connexion));

    $sql3 = "INSERT INTO chat_member (chatroomid, userid) VALUES ('$random_number',1)";
    mysqli_query($connexion, $sql3) or die(mysqli_error($connexion));

    $sql4 = "INSERT INTO chat (userid, chatroomid, message) VALUES (1,'$random_number','$message')";
    mysqli_query($connexion, $sql4) or die(mysqli_error($connexion));

    mysqli_close($connexion);
    
    $to = $_GET['email'];
    $subject = 'Ozanam CyberQuest : ' . $subject;
    $from = "Contact@ozanam-cyberquest.fr";
    $headers = "From : " . $from . "\r\n";
    $headers .= 'Mime-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $msg = <<<EOT
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
        
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        
            <!-- Your title goes here -->
            <title>Newsletter | Ozanam CyberQuest</title>
            <!-- End title -->
        
            <!-- Start stylesheet -->
            <style type="text/css">
              a,a[href],a:hover, a:link, a:visited {
                /* This is the link colour */
                text-decoration: none!important;
                color: #0000EE;
              }
              .link {
                text-decoration: underline!important;
              }
              p, p:visited {
                /* Fallback paragraph style */
                font-size:15px;
                line-height:24px;
                font-family:'Helvetica', Arial, sans-serif;
                font-weight:300;
                text-decoration:none;
                color: #000000;
              }
              h1 {
                /* Fallback heading style */
                font-size:22px;
                line-height:24px;
                font-family:'Helvetica', Arial, sans-serif;
                font-weight:normal;
                text-decoration:none;
                color: #000000;
              }
              .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
              .ExternalClass {width: 100%;}
            </style>
            <!-- End stylesheet -->
        
        </head>
        
          <!-- You can change background colour here -->
          <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
          
          <!-- Fallback force center content -->
          <div style="text-align: center;">
        
            <!-- Email not displaying correctly -->
            <table align="center" style="text-align: center; vertical-align: middle; width: 600px; max-width: 600px;" width="600">
              <tbody>
                <tr>
                  <td style="width: 596px; vertical-align: middle;" width="596">
        
                    <p style="font-size: 11px; line-height: 20px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #000000;">Est-ce que cet e-mail ne s'affiche pas correctement ? <a class="link" style="text-decoration: underline;" target="_blank" href="https://contact.ozanam-cyberquest.fr/newsletter.html"><u>Afficher dans le navigateur</u></a> </p>
        
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Email not displaying correctly -->
            
            <!-- Start container for logo -->
            <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
              <tbody>
                <tr>
                  <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">
        
                    <!-- Your logo is here -->
                    <h3 style="font-weight: bold;  font-family: 'Roboto', sans-serif; font-weight: 500;line-height: 1.2;font-size: 1.75rem; letter-spacing: 0.125em;"><span style="color: #ef121b;">Ozanam</span><span style="color: rgb(0, 0, 0);">CyberQuest</span></h3>
        
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- End container for logo -->
        
            <!-- Hero image -->
            <img style="width: 600px; max-width: 600px; height: 350px; max-height: 350px; text-align: center;" alt="top image" src="https://ozanam-cyberquest.fr/images/top.png" align="center" width="600" height="350">
            <!-- Hero image -->
        
            <!-- Start single column section -->
            <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
                <tbody>
                  <tr>
                    <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">
        
                      <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">Merci de votre intérêt pour l'Ozanam Cyberquest.</h1>
        
                      <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">Je suis Grégoire, représentant de l'équipe d'organisation de l'Ozanam CyberQuest. Notre événement se déroulera sous peu et nous sommes ravis d'accueillir des participants passionnés comme vous.</p>
                      
        
                          <!--[if mso]>
                          <i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i>
                        <![endif]-->
        
                          <!--[if mso]>
                          <i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i>
                        <![endif]-->
                      </a>
                      <!-- End button here -->
        
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- End single column section -->
              
              <!-- Start image -->
              <img style="width: 600px; max-width: 600px; height: 240px; max-height: 240px; text-align: center;" alt="Image présentation" src="https://ozanam-cyberquest.fr/images/center.png" align="center" width="600" height="240">
              <!-- End image -->
        
              <!-- Start heading for double column section -->
              <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
                <tbody>
                  <tr>
                    <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 0;" width="596">
        
                      <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000; margin-bottom: 0;">L'équipe d'assistance technique.</h1>
        
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- End heading for double column section -->
        
              <!-- Start double column section -->
              <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
                <tbody> 
                    <tr>      
                      <td style="width: 252px; vertical-align: top; padding-left: 30px; padding-right: 15px; padding-top: 0; padding-bottom: 30px; text-align: center;" width="252">
        
                        <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">Si vous rencontrez des problèmes techniques ou avez besoin d'une assistance pendant le déroulement d'Ozanam Cyberquest, nous sommes là pour vous aider.</p>
                      
                      </td>
        
                      <td style="width: 252px; vertical-align: top; padding-left: 15px; padding-right: 30px; padding-top: 0; padding-bottom: 30px; text-align: center;" width="252">              
                        <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">Nous avons pris note de votre bug et notre équipe travaille dessus. Nous reviendrons vers vous dès que nous aurons des nouvelles.</p>
        
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- End double column section -->
        
              <!-- Start image 
            -->
              <img style="width: 600px; max-width: 600px; height: 240px; max-height: 240px; text-align: center;" alt="Image Grégoire Aubin" src="https://ozanam-cyberquest.fr/images/bottom.png" align="center" width="600" height="240">
              <!-- End image -->
        
              <!-- Start footer -->
              <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;" width="600">
                <tbody>
                  <tr>
                    <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
        
                      <!-- Your inverted logo is here -->
                      <h3 style="font-weight: bold;  font-family: 'Roboto', sans-serif; font-weight: 500;line-height: 1.2;font-size: 1.75rem; letter-spacing: 0.125em;"><span style="color: #ef121b;">Ozanam</span><span style="color: white;">CyberQuest</span></h3>
        
                      <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                        Ozanam CyberQuest
                      </p>
        
                      <p style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                        <a target="_blank" style="text-decoration: underline; color: #ffffff;" href="https://ozanam-cyberquest.fr/">
                            https://ozanam-cyberquest.fr/
                        </a>
                      </p>
        
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px;" width="600">
                <tbody>
                  <tr>
                    <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
                      <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #000000;">
                        Vous ne souhaitez pas recevoir ces emails ?
                      </p>
                      <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #000000;">
                        Vous pouvez vous <a style="text-decoration: underline; color: #000000;" href="#"><u>désinscrire ici</u></a>
                      </p>
                      <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #919293; margin-top: 30px;">
                        Email by <a style="text-decoration: none; color: #919293;" href="https://github.com/Spimods"><u>Grégoire</u></a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- End unsubscribe section -->
          </div>
          </body>
        </html>
EOT;
    mail($to, $subject, $msg, $headers);

    $to = $_GET['email'];
    $subject = 'Ozanam CyberQuest : Lien du ticket'.$random_number ;
    $from = "Contact@ozanam-cyberquest.fr";
    $headers = "From: " . $from . "\r\n";
    $headers .= 'Mime-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $adresse_ticket = "https://chat.ozanam-cyberquest.fr/user/chatroom.php?id=".$random_number;
$msg = <<<EOT
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

    <!-- Your title goes here -->
    <title>Newsletter | Ozanam CyberQuest</title>
    <!-- End title -->

    <!-- Start stylesheet -->
    <style type="text/css">
      a,a[href],a:hover, a:link, a:visited {
        /* This is the link colour */
        text-decoration: none!important;
        color: #0000EE;
      }
      .link {
        text-decoration: underline!important;
      }
      p, p:visited {
        /* Fallback paragraph style */
        font-size:15px;
        line-height:24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:300;
        text-decoration:none;
        color: #000000;
      }
      h1 {
        /* Fallback heading style */
        font-size:22px;
        line-height:24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:normal;
        text-decoration:none;
        color: #000000;
      }
      .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
      .ExternalClass {width: 100%;}
    </style>
    <!-- End stylesheet -->

</head>

  <!-- You can change background colour here -->
  <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
  
  <!-- Fallback force center content -->
  <div style="text-align: center;">

    <!-- Email not displaying correctly -->
    <table align="center" style="text-align: center; vertical-align: middle; width: 600px; max-width: 600px;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: middle;" width="596">


          </td>
        </tr>
      </tbody>
    </table>
    <!-- Email not displaying correctly -->
    
    <!-- Start container for logo -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">

            <!-- Your logo is here -->
            <h3 style="font-weight: bold;  font-family: 'Roboto', sans-serif; font-weight: 500;line-height: 1.2;font-size: 1.75rem; letter-spacing: 0.125em;"><span style="color: #ef121b;">Ozanam</span><span style="color: rgb(0, 0, 0);">CyberQuest</span></h3>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Hero image -->
    <!-- Hero image -->

    <!-- Start single column section -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">

              <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">Ouverture de ticket et accès.</h1>

              <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">Nous souhaitons vous informer que nous avons ouvert un ticket pour traiter votre demande. Vous pouvez accéder au ticket en question en utilisant le lien suivant : <a href="$adresse_ticket">$adresse_ticket</a>.</p>
              

                  <!--[if mso]>
                  <i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i>
                <![endif]-->

                  <!--[if mso]>
                  <i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i>
                <![endif]-->
              </a>
              <!-- End button here -->

            </td>
          </tr>
        </tbody>
      </table>
      <!-- End single column section -->
      

      <!-- Start heading for double column section -->
      <img style="width: 600px; max-width: 600px; height: 240px; max-height: 240px; text-align: center;" alt="Image Grégoire Aubin" src="https://ozanam-cyberquest.fr/images/bottom.png" align="center" width="600" height="240">
      <!-- End image -->

      <!-- Start footer -->
      <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">

              <!-- Your inverted logo is here -->
              <h3 style="font-weight: bold;  font-family: 'Roboto', sans-serif; font-weight: 500;line-height: 1.2;font-size: 1.75rem; letter-spacing: 0.125em;"><span style="color: #ef121b;">Ozanam</span><span style="color: white;">CyberQuest</span></h3>

              <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                Ozanam CyberQuest
              </p>

              <p style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                <a target="_blank" style="text-decoration: underline; color: #ffffff;" href="https://ozanam-cyberquest.fr/">
                    https://ozanam-cyberquest.fr/
                </a>
              </p>

            </td>
          </tr>
        </tbody>
      </table>
      <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
              <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #000000;">
                Vous ne souhaitez pas recevoir ces emails ?
              </p>
              <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #000000;">
                Vous pouvez vous <a style="text-decoration: underline; color: #000000;" href="#"><u>désinscrire ici</u></a>
              </p>
              <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #919293; margin-top: 30px;">
                Email by <a style="text-decoration: none; color: #919293;" href="https://github.com/Spimods"><u>Grégoire</u></a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  </body>
</html>
EOT;
    mail($to, $subject, $msg, $headers);
    require 'emailsend.php';
    header('Location: index.html?valider');
    exit();
?>