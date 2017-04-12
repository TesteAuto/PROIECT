<?php
require_once("CurlPostDao.php");
require_once("CurlGetDao.php");
require_once("CurlPutDao.php");
require_once("CurlDeleteDao.php");

class Teste
{
  public function testePOST() {
    $dao = new CurlPostDao("http://localhost/PROIECT/BackEnd","/email", array(
      "email" => 'cebanstela@yahoo.com',
      "subiect" => 'Lista studenti',
      "mesaj" => 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
      )
    );
    return $dao->getResponse();
}

public function runTests()
{
    try {
     print_r($this->testePOST());
 } catch (Exception $e) {
    var_dump("Eroare in test.php");
}
}

}
//http://localhost/PROIECT/BackEnd/fisiere/test.php
$test = new Teste();
$test->runTests();