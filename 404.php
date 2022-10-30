<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Erreur | Barab</title>
  <link rel="stylesheet" href="css/index.css">
  <script src="js/index.js"></script>
  <!--icones-->
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
      echo '<p>"', $BANIERE[$CHOIX][1], '"</p>';
      echo '<img class="image" src="', $BANIERE[$CHOIX][0], '" alt="Erreur 404">';
      ?>
    </div>
    <div class="column is-one-fifth">
    </div>
  </div>

  <p class="block is-unselectable">
    Une erreur <a href="https://fr.wikipedia.org/wiki/Erreur_HTTP_404">404</a> ne devrait pas se produire. <a href="/contact">Nous contacter</a> pour nous en parler.
  </p>


  <footer><button class="button is-info is-small" onclick="window.location.href = './barabot/index.html'"><i class="bi bi-discord"></i>Inviter BaraBot</button><br>
    <a href='mailto:contact@barab.ovh?subject=Contact'>Envoyer des commentaires</a>
  </footer>
</body>

</html>