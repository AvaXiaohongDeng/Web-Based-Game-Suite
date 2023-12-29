<?php
/*
The register form is rendered and processed as content of the
element on the index.php page. It provides the user with the ability to enter their more information.

*/
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    initProcess();
    global $safeuser, $password;
 
    require_once('includes/Member.class');
    $visitor = new Member;

    if (testUsername() && testPassword()) {

        if ($visitor->registerMember($safeuser, $password)) {
            displayYes();
        } else {
            session_destroy();
            displayNo();
        }           
    }else {
        displayNo();
    }               
}

function testUsername() {   
    global $errMsg, $safeuser;
    if (isset($_POST['username']))
        if (!empty($_POST['username'])) {
            $safeuser = clean($_POST["username"]);
            $_SESSION['firstName'] = $_POST['username'];
        } else {
            $errMsg = "username field is empty. ";
            $errMsg .= "<br>You must choose a username.";
            return false;
        }

    return true;            
}

function testPassword() {   
  global $password, $errMsg, $safeuser;
  if (isset($_POST["password"])) {
    $password=clean($_POST["password"]);
    if (strlen($password) < 6 || strlen($password) > 40) {
      $errMsg = "Password parameter must be" .
        "<br>between 6 and 40 characters long" . 
        "<br>The length of your password '$password' is " . 
        strlen($password);
      error_log("$errMsg \n", 3, "myErrors.log");          
    return false;
    }
  } else {
    $errMsg = "Password parameter missing."; 
    error_log("$errMsg \n", 3, "myErrors.log");
    return false;
  }

  return true;          
}

/*
Initialize all session variables, save all POST variables in the session. The "formAttemp" and "isLoggedIn" can be used to restrict the number of times a user makes an attempt.
*/
function initProcess() {
    $_SESSION['formAttemp'] = true;
    $_SESSION['id'] = session_id();
    $_SESSION['isLoggedIn'] = false;
    $_SESSION['password'] = $_POST['password'];

     
}

/*
Use the $errMsg variable to concatenate messages advising the user what may have gone wrong, such as, they chose a password that is too short. Prompt the user to try again.
*/
function displayNo(){
    global $errMsg;
    echo <<< _TRYAGAIN_
<dialog open class="dialog">
    <h3>Registration was unsuccessful.</h3>
    <p>$errMsg</p>
    <a href='index.php?page=content/register.php&pagetitle=Become%20A%20Member'>
        TRY AGAIN
    </a>  
</dialog>
_TRYAGAIN_;
}

/*
After successful registration, send the user back to login form so that they can log on using their new credentials. Note that there are additional processes you will later implement, such as sending confirmation email with a link that will allow them to log on and access the members-only pages.
*/

function displayYes() {
    echo <<<_PROCEED_
<dialog  class="dialog" open>
    <h3>Registration was successful.</h3>
    <a href='index.php?page=content/login.php&pagetitle=Member%20Login&members=true'>LOGIN</a>
_PROCEED_;
}

function clean($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;           
}
?>

<!-- construct register form-->
<div >
	<main>
		<form class="register-form" method="POST">
			<input type="text" style="width:49.5%" placeholder="First Name(required)" required >
			<input type="text" style="width:49.5%" placeholder="Last Name(required)" required >
			<br>
			Gender: <input type="radio" name="gender" value="Male" checked> Male  <input type="radio" name="gender" value="Female"> Female 
			<br>
			<input type="text" style="width:49.5%" placeholder="Email(required)" required >
			<input type="text" style="width:49.5%" placeholder="Phone(required)" required >
			<br>
			<input type="text" placeholder="Enter your address">
			<br>
			<fieldset>
				<legend>Choose a username and a password</legend>
				<br>
				<input type="text" name="username" placeholder="Enter your user name">
				<br>
				<input type="password" name="password" placeholder="Enter your password">
				<br>
				<input type="password" placeholder="Confirm your password">
				<br>
			</fieldset>
			<br>			
			<input class="button" type="submit" value="Submit"> 			
		</form>
	</main><!-- main content -->
	<aside>
	</aside>
	<script src=""></script>	
</div>


<!--class="narrow row" style="order: 3; flex-grow: 6"-->