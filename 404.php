<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Erreur | Barab</title>
  <link rel="stylesheet" href="css/index.css">
  <script src="js/index.js"></script>
  <!--icones-->
  <link rel="apple-touch-icon" sizes="57x57" href="./img/ico/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="./img/ico/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="./img/ico/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="./img/ico/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="./img/ico/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="./img/ico/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="./img/ico/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="./img/ico/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="./img/ico/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="./img/ico/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./img/ico/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="./img/ico/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./img/ico/favicon-16x16.png">
  <link rel="manifest" href="./img/ico/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="./img/ico/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">
  <!--Icones end-->
  <meta name="author" content="Jérémie">
</head>

<body>
  <!--Navbar -->
  <?php include("navbar"); ?>
  <!--Navabar End-->
  <div class="box sticky">
    <p class="title is-1">Erreur 404</p>
  </div>
  <div class="columns">
    <div class="column is-one-fifth">
    </div>
    <div class="column">

      <?php
      $BANIERE = array(
        1 => array('./img/404_1.gif', "Oups ! Avec un ordinateur comme celui là, on n'ira pas loin."),
        2 => array('./img/404_2.png', "Windows a planté! Mais pas de panique, on revient vite !"),
        3 => array('./img/404_3.png', "Tant que l'on n'a pas retrouvé notre wombat on ne peut pas fonctionner.")
      );
      $CHOIX = array_rand($BANIERE, 1);
      echo '<p class="title is-4">', $BANIERE[$CHOIX][1], '</p>';
      echo '<img class="image" src="', $BANIERE[$CHOIX][0], '" alt="Erreur 404">';
      ?>
    </div>
    <div class="column is-one-fifth">
    </div>
  </div>

  <p class="block is-unselectable">
    Une <a href="https://fr.wikipedia.org/wiki/Erreur_HTTP_404">erreur 404</a> ne devrait pas se produire. <a href="/contact">Nous contacter</a> pour nous en parler.
  </p>


  <footer><button class="button is-info is-small" onclick="window.location.href = './barabot/index.html'"><i class="bi bi-discord"></i>Inviter BaraBot</button><br>
    <a href='mailto:contact@barab.ovh?subject=Contact'>Envoyer des commentaires</a>
  </footer>
</body>

</html>