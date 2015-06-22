<?php

error_reporting(0);

$data = array(array('username' => 'test',
        'password' => 'test123')
);
if (isset($_POST['username'])) {
    $flag = 0;
    foreach ($data as $data) {
        if ($_POST['username'] == $data['username'] && $_POST['password'] == $data['password']) {
            $flag = 1;
        }
    }
    if ($flag == 1) {
        session_start();
        $_SESSION['username'] = $_POST['username'];

        header("Location: reference.php");
    } else {
        $msg = '1';

        header("Location: login.php?msg=" . $msg);
    }
}
?>