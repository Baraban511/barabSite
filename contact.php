<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Contact | Barab</title>
  <link rel="stylesheet" href="css/index.css">
  <script src="js/index.js"></script>
  <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen">
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
    <p class="title is-2">Contact</p>
  </div>
  <div class="columns">
    <div class="column">
      <div class="box">
        <form action="https://send.pageclip.co/LJrhyuRm4uspAOFFVk0EabSpaX6JKBoA" class="pageclip-form field" method="post">
          <div class="field">
            <label class="label">Nom</label>
            <p class="control has-icons-left">
              <input type="text" name="Nom" placeholder="Nom" class="input is-info" />
              <span class="icon is-small is-left">
                <i class="bi bi-person-square"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Mail</label>
            <p class="control has-icons-left">
              <input type="email" name="email" placeholder="exemple@exemple.fr" class="input is-info" />
              <span class="icon is-small is-left">
                <i class="bi bi-envelope-fill"></i>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">Sujet</label>
          </div>

          <div class="select is-primary">

            <select name="Sujet">
              <option>Signaler un problème</option>
              <option>Faire une suggestion</option>
              <option>Autre</option>
            </select>

          </div>

          <div class="field">
            <label class="label">Message</label>
            <textarea class="textarea is-info" placeholder="Message" name="Message"></textarea>
          </div>
          <!-- This button will have a loading spinner. Keep the inner span for best results. -->
          <button type="submit" class="button is-info pageclip-form__submit">
            <i class="bi bi-send"></i> Envoyer
          </button>
          <input class="button is-outlined" type="reset" value="Réinitialiser"></input>
        </form>
      </div>
    </div>
  </div>



  <footer><button class="button is-info is-small" onclick="window.location.href = './barabot/index.html'"><i class="bi bi-discord"></i>Inviter BaraBot</button><br>
    <a href='mailto:contact@barab.ovh?subject=Contact'>Envoyer des commentaires</a>
  </footer>
  <script src="./js/pageclip.js" charset="utf-8"></script>
</body>

</html>