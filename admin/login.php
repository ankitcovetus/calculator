<?php
session_start();
session_destroy();

if ($_REQUEST['msg'] == '1')
    echo '<script language="javascript">alert("Username or password is incorrect.")</script>';
?>
<div align="center">
    <form method="post" action="<?php echo $base_url; ?>loginCheck.php">
        Username: <input type="text" name="username"  /><br /><br />
        Password: <input type="password" name="password"  /><br /><br />
        <input type="submit" name="submit" value="Submit"  /><br /><br />
    </form>
</div>

