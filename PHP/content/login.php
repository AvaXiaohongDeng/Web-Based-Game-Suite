<?php
/*
 The login form is rendered and processed as content of the
element on the index.php page. It provides the user with the ability to enter their username and password, then submit the request or reset the form (clears the entered data). 
Use the method authenticate to decide whether the login is successful or not; if yes, allow access to members-only pages; if no, provide opportunity to try again, reset password, or become a member.
*/

 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    session_start();
    $_SESSION['formAttemp'] = true;
    $_SESSION['id'] = session_id();
    $_SESSION['isLoggedIn'] = false;
 
    if (isset($_POST['password']))
        if (!empty($_POST['password']))
            $_SESSION['password'] = $_POST['password'];
 
    // TODO: can be used to record last time the user logged in successfully
    $_SESSION['startDate'] = $_POST['curdate'];
 
    if (isset($_POST['username']))
        if (!empty($_POST['username'])) {
            $safeuser = $_POST['username'];
            $_SESSION['firstName'] = $_POST['username'];
        } else
            echo "handle the bad name";
   
   
    require_once("includes/Member.class");
    $visitor = new Member;
    if ($visitor->authenticate($_POST['username'],$_POST['password'])) {
        // proceed to member site
    echo <<<_LOG_
		<dialog open class="dialog">
    <h3>Authentication successful.</h3>
    <button><a href='index.php?page=content/login_success.php&members=true&pagetitle=Members-only%20Home%20Page'>
        Proceed
    </a></button>
		</dialog>
_LOG_;
    } else {
        // return to login
    echo <<<_NOLOG_
		<dialog open class="dialog">
    <h3>Authentication was unsuccessful.</h3>
    <button><a href='index.php?page=content/login.php&pagetitle=Member%20Login'>
        Try Again
    </a></button>
		</dialog>
_NOLOG_;
    }
}
?>

<!--construct login form-->
	
<div class="narrow" style="order: 3; flex-grow: 6">
	<form method="POST">
					<label>Enter Username</label>
					<input type="text" name="username" placeholder="Enter your username (required)" required><br>
					<label>Enter Password</label>
					<input type="password" name="password" placeholder="Enter your password (required)" required><br>
					<input type="hidden" name="curdate" value="<?php $date = date("Y-m-d"); echo $date;?>"><br>
					<input class="button" type="submit" value="Login">
					<input class="button" type="reset" value="Reset">
	</form>    
</div> 
		