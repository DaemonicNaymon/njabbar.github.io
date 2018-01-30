<!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Noman Jabbar">
        <link rel="stylesheet" type="text/css" href="styles.css">
        <script src="tablescript.js"></script>
        <title>js09-3</title>
    </head>
    <body>
        <h2>Thank you!<br>For getting to know me.</h2>
        <input type="text" id="input" placeholder="voer begin waarde"><br>
        <input type="text" id="maxInput" placeholder="voer maximale waarde"><br>
        <button onclick="table()">maken die tabel!</button><br>
        <p id="tabel"></p>
                
        <?php
            if(isset($_POST["submit"]) == true){
                //variables
                $to = "nomanjabbar1999@gmail.com";
                $subject = $_POST['name'];
                $txt = $_POST['comment'];
                $headers = "From " . $_POST['sendfrom'];
                // mail function
                mail($to, $subject, $txt, $headers);
            }
        ?>
    </body>
</html>

