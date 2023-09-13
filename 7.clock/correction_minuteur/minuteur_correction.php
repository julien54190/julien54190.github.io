<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>minuteur</title>
</head>
<body>
    <p id="minuteur">00:00:00</p>
    <form action="" method="post">
        <label for="heure">Heure(s)</label>
        <input type="number" name="heure" id="heure" value="0" min="0" lenght="2">

        <label for="minute">Minute(s)</label>
        <input type="number" name="minute" id="minute" value="0" min="0" max="59" lenght="2">

        <label for="seconde">Seconde(s)</label>
        <input type="number" name="seconde" id="seconde" value="15" min="0" max="59" lenght="2">

        <input type="submit" value="Régler">
    </form>

    <?php
        echo '    <script>
        var heure = ' . (!empty($_POST["heure"]) ? $_POST["heure"] : '0').'
        var minute = ' . (!empty($_POST["minute"]) ? $_POST["minute"] : '0').'
        var seconde = ' . (!empty($_POST["seconde"]) ? $_POST["seconde"] : '15').'
        setInterval (function() {
            document.getElementById("minuteur").innerHTML = `${(heure < 10 ? "0" : "") + heure}:${(minute < 10 ? "0" : "") + minute}:${(seconde < 10 ? "0" : "") + seconde}`
            if (seconde <= 0) return
            seconde--
            if (seconde == 0){
                if (minute > 0) {
                    seconde = 59
                    minute--
                } else {
                    if (heure > 0){
                        heure-- 
                        minute = 59
                        seconde = 59
                    }
                }
            }
            
        }, 1000)
    </script>'
    ?>

</body>
</html>