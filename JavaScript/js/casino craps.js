/*
		Author: 			Xiaohong Deng
		Program: 		  casino craps.js		
		Date:	
		Updated:
		Version: 			1.0
		Purpose: 			short description what the page is all about
		Citations:    [1] {url}, Course Material, SYST10199, Spring 2019
									[2] url('https://fonts.googleapis.com/css?family=Akronim|Asap+Condensed|Luckiest+Guy');
		Description:	describe the solution in detail-focus on the "why"
									Home page of the whole web project
*/

		

window.onload=function() {
	
		console.log("start");
		var buttonRollDice = document.getElementById( 'roll' );
		var win=0;
		var lose=0;
		var count=0;
		var number=0;
		var point=0;
		buttonRollDice.addEventListener( "click", countResult);		
		
		function countResult() {
			console.log(count);
			console.log(number);
			console.log(point);			
			
			if (count<5) {
				number=rollDice();
				switch (number) {
						case 7: 
						case 11: win++; count++; document.getElementById("wins").innerHTML= win; break;
						case 2: 
						case 3: 
						case 12: lose++; count++; document.getElementById("losses").innerHTML=lose; break;
						default:
								if (point==0) point=number;
								else if(number==point) {
									win++;
									document.getElementById("wins").innerHTML= win;
									count++;
									point=0;
								}
								else {
									lose++;
									document.getElementById("losses").innerHTML=lose;
									count++;
									point=0;
								}
								break;
					
				}
			}
			
			if(count!=5) {
				document.getElementById("reset").innerHTML = '';
			}
			
			if(count==5) {
				if(win>lose) {
					document.getElementById("reset").innerHTML = '<i>You Win!</i> <br> <br>' + 'Game Over! Press "Reset game" if you want to resart.';
				}
				else {
					document.getElementById("reset").innerHTML = '<i>You Lose!</i> <br> <br>' + 'Game Over! Press "Reset game" if you want to resart.';
				}
			}
		}
		
		
		
		

    function rollDice () {

        var dice1 = document.getElementById( 'alpha' );
        var dice2 = document.getElementById( 'bravo' );
        var result= document.getElementById( 'total' );

        var d1 = Math.floor( Math.random() * 6 ) + 1;
        var d2 = Math.floor( Math.random() * 6 ) + 1;
        var total = d1 + d2;

        dice1.innerHTML = d1;
        dice2.innerHTML = d2;
        result.innerHTML = total;
				return total;
    }
		
		var buttonResetGame = document.getElementById("clear");
		
		buttonResetGame.addEventListener( "click", clear);
		
		function clear() {
			document.getElementById("wins").innerHTML = 0;
			document.getElementById("losses").innerHTML = 0;
			document.getElementById("alpha").innerHTML = 0;
			document.getElementById("bravo").innerHTML = 0;	
			document.getElementById("total").innerHTML = 0;
			document.getElementById("reset").innerHTML = "Start the game by pressing 'Roll the dice'!";
			count = 0;
			win=0;
			lose=0;
			count=0;
			number=0;
			point=0;
		}			

}   




