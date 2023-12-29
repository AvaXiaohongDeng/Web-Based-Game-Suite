<?php
/*
model casinocraps game
*/

/*
Author: Ellen Bajcar
Date: Summer 2019
Version: 1.0
Copyright: 
	This work is the intellectual property of Sheridan College. 
	Any further copying and distribution outside of class must be within 
	the copyright law. Posting to commercial sites for profit is prohibited.
Purpose: code provided for web programming Assignment 8
*/
session_start();
// initial values
$alpha = $bravo = $sum = NULL;

$toMatch=false;
// get values from session variables if available
isset($_SESSION['toMatch']) ? $toMatch=$_SESSION['toMatch'] : $toMatch=false;
isset($_SESSION['matchDie']) ? $matchDie=$_SESSION['matchDie'] : $matchDie=0;
isset($_SESSION['point']) ? $point = $_SESSION['point'] : $point = 0;
isset($_SESSION['wins']) ? $wins = $_SESSION['wins'] : $wins = 0;
isset($_SESSION['losses']) ? $losses = $_SESSION['losses'] : $losses = 0;

//Initialize strings and phrases used throughout the game.
$output = "To start a game, roll the dice!";
$message = array(
	"natural" => "That's a natural. You win!<br>",
	"craps" => "That's craps. You lose!<br>",
	"point" => "You made your point. You win!<br>",
	"miss" => "That doesn't match. You lose!<br>"
	);
	
	// if "roll the dice" is clicked, start the game    
if(isset($_POST['roll'])) {
    rollBoth();
    updateSession();
}
// if "Reset game" is clicked, start the game    
if(isset($_POST['clear'])) {
    session_destroy();
}

//	update session variables so we can access it next time with current game roll
function updateSession() {
	global $point, $wins, $losses,$toMatch, $matchDie;
	$_SESSION['point'] = $point;
	$_SESSION['wins'] = $wins;
	$_SESSION['losses'] = $losses;
	$_SESSION['toMatch']=$toMatch;
	$_SESSION['matchDie']=$matchDie;
}

function rollBoth(){
	global $alpha, $bravo, $sum, $point, $wins, $losses, $output, $toMatch, $matchDie, $message;
	$alpha=roll();
	$bravo=roll();
	$sum=$alpha+$bravo;
	if ($toMatch==false) {
		if ($sum==7 or $sum==11) {
			$wins++;
			$output=$message["natural"]."win $wins, loss $losses, point $point";
		} else if ($sum==2 or $sum==3 or $sum==12) {
			$losses++;
			$output=$message["craps"]."win $wins, loss $losses, point $point";
		} else {
			$toMatch=true;
			$matchDie=$sum;
			$output="Another chance to match the dice you rolled this time, which is $matchDie<br>win $wins, loss $losses, point $point";
		}
	} else {
		if ($matchDie==$sum) {
			$wins++;
			$output=$message["point"]."win $wins, loss $losses, point $point";
		} else {
			$losses++;
			$output=$message["miss"]."win $wins, loss $losses, point $point";
		}
		$toMatch=false;
	}
}

function roll(){
  $random = mt_rand(1,6);
  return $random;
}
?>

	<form method="POST" action="index.php?page=content/casinocraps.php&pagetitle=Casino-Craps&members=true">
		<div class="grid-container">
			<div class="grid-item board">               
						<table>
								<tr>
										<td class="dice"><?= $alpha ?></td>
										<td class="dice"><?= $bravo ?></td>
								</tr>
						</table>                   
						<p>
								<small>You rolled&hellip;</small>            
								<samp id="total"><?= $sum ?></samp>
						</p>                  
						<input type="submit" name="roll" class="roll" value="Roll the dice!">	
			</div>
			<div class="grid-item">
						<input type="submit" name="clear" class="roll" value="Reset game">
						<h2 id="show" class="show"> Game Status<br></h2>
						<p style="width:280px"><?= $output ?></p>
				</div>
		</div>	
	</form>

