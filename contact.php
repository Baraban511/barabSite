<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Accueil | Barab</title>
  <link rel="stylesheet" href="css/index.css">
  <script src="js/index.js"></script>
  <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen">
  <!--icones-->
  <!--Icones end-->
  <meta name="author" content="Jérémie">
</head>

<body>
  <article class="message is-primary" id="message">
    <div class="message-header">
      <p>Primary</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </div>
  </article>
<!--Navbar -->
<?php include("navbar"); ?>

<!--Navabar End-->
  <div class="columns">
    <div class="column">
      <div class="box">
        <form action="https://send.pageclip.co/LJrhyuRm4uspAOFFVk0EabSpaX6JKBoA" class="pageclip-form field"
          method="post">
          <!-- Replace these inputs with your own. Make sure they have a "name" attribute! -->
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

  

  <footer><button class="button is-info is-small" onclick="window.location.href = './barabot/index.html'"><i
        class="bi bi-discord"></i>Inviter BaraBot</button><br>
    <a href='mailto:contact@barab.ovh?subject=Contact'>Envoyer des commentaires</a>
  </footer>
  <script src="./js/pageclip.js" charset="utf-8"></script>
</body>

</html>