/*
		Author: 			Xiaohong Deng
		Program: 		  template.js		
		Date:	
		Updated:
		Version: 			1.0
		Purpose: 			short description what the page is all about
		Citations:    [1] {url}, Course Material, SYST10199, Spring 2019
									[2] url('https://fonts.googleapis.com/css?family=Akronim|Asap+Condensed|Luckiest+Guy');
		Description:	describe the solution in detail-focus on the "why"
									Home page of the whole web project
*/

window.addEventListener( 'DOMContentLoaded', function () {
	
		const buttonRoolDice = document.querySelector( '.dice-roll' );

    function rollDice () {

        const diceSide1 = document.getElementById( 'dice-side-1' );
        const diceSide2 = document.getElementById( 'dice-side-2' );
        const status = document.getElementById( 'status' );

        const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
        const diceTotal = side1 + side2;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;

        status.innerHTML = 'You rolled ' + diceTotal + '.';

        if ( side1 === side2 ) {
            status.innerHTML += ' Doubles! You get a free turn!';
        }
    }

    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);