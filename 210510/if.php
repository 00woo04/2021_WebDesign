<?php

$score = 85;

if($score >= 90)
{
    echo "당신의 학점은 A입니다.<br/>";
} elseif($score >= 80)
{
    echo "당신의 학점은 B입니다.<br/>";
}
 elseif($score >= 70)
{
    echo "당신의 학점은 C입니다.<br/>";
}
 elseif($score >= 60)
{
    echo "당신의 학점은 D입니다.<br/>";
}
 else {
    echo "당신의 학점은 F입니다.<br/>";
}

?>