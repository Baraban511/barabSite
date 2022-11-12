<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Projets | Barab</title>
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
    <p class="title is-2">Mes projets :</p>
  </div>

  <div class="columns">

    <div class="column">
      <div class="card has-background-primary-light">
        <div class="card-image">
          <figure class="image">
            <img src="./barabot/img/barabotlogo.jpeg" alt="Logo BaraBot">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
            </div>
            <div class="media-content">
              <p class="title is-4">BaraBot</p>
              <p class="subtitle is-6">BaraBot#0928</p>
            </div>
          </div>

          <div class="content">
            BaraBot, un petit bot discord.
            <a>inviter barabot</a> <a>#responsive</a>
            <br>
            <time>21 nov 2021</time>
          </div>
        </div>
        <footer class="card-footer is-size-4">

          <button class="button is-info is-outlined is-large card-footer-item js-modal-trigger" data-target="modal-barabot">Découvrir</button>
        </footer>
      </div>
    </div>

    <div class="column">
      <div class="card has-background-primary-light">
        <div class="card-image">
          <figure class="image">
            <img src="./img/logo_barab_couleur.png" alt="Logo Barab">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="is-rounded" src="./img/logo_barab_rond.png" alt="Logo rond Barab">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">BarabSite</p>
              <p class="subtitle is-6">https://barab.ovh</p>
            </div>
          </div>

          <div class="content">
            Le site actuel divise en deux partie.<a href="https://bulma.io">@bulmaio</a>.
            <a>#css</a> <a>#responsive</a>
            <br>
            <time datetime="2016-1-1">01:30 AM - 05 nov 2008</time>
          </div>
        </div>
        <footer class="card-footer">
          <button class="button is-info is-outlined is-large card-footer-item js-modal-trigger" data-target="modal-barabsite">Découvrir</button>
        </footer>
      </div>
    </div>

    <div class="column">
      <div class="card has-background-primary-light">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/480x480.png" alt="Logo BarabCraft">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">BarabCraft</p>
              <p class="subtitle is-6">https://play.barab.ovh</p>
            </div>
          </div>

          <div class="content">
            Un incroyable serveur minecraft.

          </div>
        </div>
        <p>Arrive bientôt</p>
        <footer class="card-footer">
          <button class="button is-info is-outlined is-large card-footer-item js-modal-trigger" data-target="modal-barabcraft" disabled>Découvrir</button>
        </footer>
      </div>
    </div>
  </div>



  <footer><button class="button is-info is-small" onclick="window.location.href = './barabot/index.html'"><i class="bi bi-discord"></i>Inviter BaraBot</button><br>
    <a href='mailto:contact@barab.ovh?subject=Contact'>Envoyer des commentaires</a>
  </footer>

  <!--Modals-->

  <div id="modal-barabsite" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Mes réseaux</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>
          BarabSite
        </p>
      </section>
      <footer class="modal-card-foot">
        <!--Ajouter description lors du survol des boutons-->
        <p>Cette section va bientot changer !</p>
      </footer>
    </div>
  </div>

  <div id="modal-baracraft" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Mes réseaux</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>
          BarabCraft
        </p>
      </section>
      <footer class="modal-card-foot">
        <!--Ajouter description lors du survol des boutons-->
        <p>Cette section va bientot changer !</p>
      </footer>
    </div>
  </div>

  <div id="modal-barabot" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Mes réseaux</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>
          BaraBot
        </p>
      </section>
      <footer class="modal-card-foot">
        <!--Ajouter description lors du survol des boutons-->
        <p>Cette section va bientot changer !</p>
      </footer>
    </div>
  </div>

</body>

</html>