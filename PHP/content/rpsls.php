<?php

/*
Update your rock-paper-scissors-lizard-spock solution (single file). Remove any html code outside <main> and <aside> elements. Note that the styles are included in the header.php file and will be applied when the file is included in the index.php file.
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
$moves = array("rock", "paper", "scissors");
$output = "<h4>Results</h4>";
$winner = array( "rock" => "paper", 
				 "paper" => "scissors", 
				 "scissors" => "rock");
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$player = $_POST['move'];
	$machine = $moves[array_rand($moves)];
	$output .= "<p>Your board:  <kbd>$player</kbd></p>";
	$output .= "<p>Computer's board:  <kbd>$machine</kbd></p>";
	if ($machine == $player) 
		$output .= "<p>IT IS A TIE!</p>";
	else 
		$output .= ($winner[$machine] == $player)
						? "<p>YOU WIN!</p>"
						: "<p>YOU LOSE!</p>";
}
?>

<div class="narrow" style="order: 4">	
<form method="POST">
	<h4>Your Move</h4>
	<select size="3" name="move" required style="height: 60px;">
		<option value="rock">rock</option>
		<option value="paper">paper</option>
		<option value="scissors">scissors</option>
	</select>
	<input type="submit" value="Select And Play" />
</form>
<div ><?= $output ?></div>
</div>