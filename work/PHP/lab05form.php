<!DOCTYPE html>
<html>
    <body>
        <?php
            if (isset($_POST['submit']) == false){
                echo "Not loaded from proper page";
                return;
            }
            if (empty($_POST['voornaam']) or
                empty($_POST['achternaam']) or
                empty($_POST['email'])){
                    echo "Some required fields are empty";
            }

            $opleiding = $_POST['opleiding'];
            $opleidingVol = "PHP";

            echo "<br/>Voornaam: ", $_POST['voornaam'];
            echo "<br/>Achternaam: ", $_POST['achternaam'];
            echo "<br/>Adres: ", $_POST['adres'];
            echo "<br/>Postcode: ", $_POST['postcode'];
            echo "<br/>Woonplaats: ", $_POST['woonplaats'];
            echo "<br/>Email: ", $_POST['email'];
            echo "<br/>Geslacht: ", $_POST['geslacht'];

            echo "<p>";
            if($opleiding == $opleidingVol){
                echo "Helaas de opleiding $opleidingVol is vol";
            }
            else{
                echo "de opleiding is $opleiding";
            } 
            echo "</p>";        
        ?>
    </body>
</html>