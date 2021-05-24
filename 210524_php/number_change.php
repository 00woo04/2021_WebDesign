<?php

$i = 255;
echo decbin($i)."<br/>";
echo decoct($i)."<br/>";
echo dechex($i)."<br/>";
echo "<br/>";
echo base_convert("255", 10, 16)."<br/>";
echo base_convert("ff", 16, 10)."<br/>";

?>