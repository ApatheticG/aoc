<?php
/**
 * http://adventofcode.com/day/4
 * PHP because it has native md5 function
 */
/**
 * http://adventofcode.com/day/4
 * @param  string $key input
 * @return string answer
 */
function mineCoin($key, $needle) {
    $l = strlen($needle);
    for ($i = 0;; $i++) {
        $temp = $key . $i;
        $hash = md5($temp);
        if (substr($hash, 0, $l) === $needle) {
            return $i;
        }
        if ($i > 1e9) {
            return 'Not found';
        }
    }

}

echo mineCoin($_GET['key'], '000000');
