<?php
    $serveur = "localhost";
    $utilisateur = "u621842480_ctf";
    $motDePasse = "Brunault1990";
    $baseDeDonnees = "u621842480_ctf";

    $connexion = mysqli_connect($serveur, $utilisateur, $motDePasse, $baseDeDonnees);

    if ($connexion->connect_error) {
        die("La connexion a échoué : " . $connexion->connect_error);
    }
    
    $sql = "SELECT email FROM staff";
    $result = $connexion->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $to = $row["email"];
            $subject = "Ouverture d'un nouveau ticket";
            $message = "
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Ouverture d'un nouveau ticket</title>
                </head>
                <body>
                    <div style='background-color: #f2f2f2; padding: 20px;'>
                        <h2 style='color: #333333;'>Un nouveau ticket a été ouvert</h2>
                        <p style='color: #555555;'>Cher Staff,</p>
                        <p style='color: #555555;'>Nous tenons à vous informer qu'un nouveau ticket a été ouvert dans notre système.</p>
                        <p style='color: #555555;'>Veuillez vous connecter à votre compte pour plus de détails.</p>
                        <p style='color: #555555;'>Cordialement,<br>L'équipe de support</p>
                        <a href='panel.ozanam-cyberquest.fr'>Cliquez ici</a>
                    </div>
                </body>
                </html>
            ";
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $headers .= "From: information@ozanam-cyberquest.fr";
    
            // Envoyer l'e-mail
            if (mail($to, $subject, $message, $headers)) {
            } else {
            }
        }
    } else {
        echo "Aucun résultat trouvé dans la base de données.";
    }
    
    $connexion->close();
?>
