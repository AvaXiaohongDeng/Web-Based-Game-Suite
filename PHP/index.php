<?php
/* 
construct the entire page using include or reqiure to attach header page, navigation page, main page(welcome page or different game page) and footer page.
*/
if (session_id() === "") {
	session_start();
}

include ('includes/header.php'); 
$members = (isset($_GET['members'])) 
    ? $_GET['members'] 
    : "false";

/*
switch between public and members navigation by replacing the statement require 
*/
if ($members === "true"	)
    require 'includes/nav_members.php';  //members' navigation 
else
    require 'includes/nav_public.php';  //non-members' navigation


if(isset($_GET['page'])) {  
    $includepage=$_GET['page'];
    include ( $includepage );
    // will be replaced by include_once ( 'content/whateverfileyouspecify.php' );
} else {
    //home page content
    require_once ( 'content/welcome.php' );
}

include ('includes/footer.php');
?> 