<?php

/*dynamically customize the different content pages loaded in the <header> element 
*/
$pagetitle = (isset($_GET['pagetitle']))
    ? $_GET['pagetitle']
    : "Home Page";
?>

<!DOCTYPE html>	
<html lang="en">
  <head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Home Page</title>
		
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">		

		<link href="http://bajcar.dev.fast.sheridanc.on.ca/syst10199/checklists/css/grid_2019_6_4.css" rel="stylesheet">	

		<link rel="stylesheet" href="css/main.css">	
				
		<style>
		</style>		
		<!--
		Author: 			Xiaohong Deng
		Program: 		  header.php		
		Date:					2019 08 09
		Updated:
		Version: 			1.0
		Purpose: 			short description what the page is all about
		Citations:    [1] {url}, Course Material, SYST10199, Spring 2019
									[2] {url} or APA format...
		Description:	describe the solution in detail-focus on the "why"
									Home page of the whole web project
		-->
  </head><!-- head -->
  <body>
    <header>
			<h1><?= $pagetitle ?></h1>		
		</header><!-- header -->
		<!--NavigationBar -->
		<div class="flex-container"><!-- opening tag only -->
