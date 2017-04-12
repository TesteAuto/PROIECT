<?php

require_once("constante.php");
require_once(VENDOR."autoload.php");
require_once(BazeDate."creareBD.php");
require_once(BazeDate."autentificareBD.php");
require_once(BazeDate."emailBD.php");
require_once(BazeDate."profilBD.php");
require_once(ServiciiREST."creareREST.php");
require_once(ServiciiREST."emailREST.php");
require_once(ServiciiREST."autentificareREST.php");
require_once(ServiciiREST."profilREST.php");

$app = new \Slim\Slim();

// Creare Cont Nou
$app->post('/crearecontnou', 'crearecontnou');
// Autentificare cont
$app->post('/autentificare', 'autentificare');
// Trimite-ne un mesaj!
$app->post('/email', 'email');
// Profilul Meu!
$app->put('/modificareUtilizator/:id', 'modificareUtilizator');

$app->run();
?>
