/*
		Author: 			Xiaohong Deng
		Program: 		  tic cat toe.js		
		Date:	
		Updated:
		Version: 			1.0
		Purpose: 			short description what the page is all about
		Citations:    [1] {url}, Course Material, SYST10199, Spring 2019
									[2] url('https://fonts.googleapis.com/css?family=Akronim|Asap+Condensed|Luckiest+Guy');
		Description:	describe the solution in detail-focus on the "why"
									Home page of the whole web project
*/

var gameWinningCombo = [[1, 2, 3],
												[4, 5, 6],
												[7, 8, 9],
												[1, 4, 7],
												[2, 5, 8],
												[3, 6, 9],
												[1, 5, 9],
												[3, 5, 7]];
var gameover;

function casinocraps() {
	
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
				if (point==0)
					switch (number) {
							case 7: 
							case 11: win++; count++; document.getElementById("wins").innerHTML= win; break;
							case 2: 
							case 3: 
							case 12: lose++; count++; document.getElementById("losses").innerHTML=lose; break;
							default: point=number;break;
					}
				else {
					if(number==point) {
						win++;
						document.getElementById("wins").innerHTML= win;
						point=0;
					}
					else {
						lose++;
						document.getElementById("losses").innerHTML=lose;
						point=0;
					}
					count++;					
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

		
function tictactoe() {
	var playground=document.getElementById("playground");


	var player;
	var count;
														
	greset.onclick = function() {
		for(i=0; i<3; i++) 
      for(j=0; j<3; j++) {
				playground.rows[i].cells[j].innerText = " ";
				playground.rows[i].cells[j].style.backgroundColor = "White";
				playground.rows[i].cells[j].addEventListener("click", cellClicked);
			}				
		player="X";
		gameover=false;
		message.innerHTML="Player "+player+" Go!";
		count=0;
	}
	
	function cellClicked() {
		var content=document.getElementById(this.id).innerText;
		if (!gameover && content=="") {
			document.getElementById(this.id).innerText=player;
			if (isWon()) finish(1);
			else {
				count++;
				if (count<9) {
					if (player=="X") player="O";
					else player="X";
					message.innerHTML="Player "+player+" Go!";
				} else finish(0);
			}
		}
		
	}
	
	function isWon() {
		for(combination of gameWinningCombo) {
			let streak=true;
			for (let i=0;i<3;i++){ 
				if(document.getElementById("cell"+combination[i]).innerText!=player) streak=false;
			}
			if (streak==true) {
				for (let i=0; i<3; i++)
					document.getElementById("cell"+combination[i]).style.backgroundColor = "yellow";
				return true;
			}
		}
		return false;
	}
	
	function finish(result) {
		gameover=true;
		if (result==1) 
			message.innerHTML="Player "+player+" Win!";
		else
			message.innerHTML="Tie";
	}
}

function rockpaper() {
	var allImages=document.getElementsByClassName("image-paper");
	
	greset.onclick = function() {
		console.log("start");
		for (let i=0; i<allImages.length; i++) allImages[i].addEventListener("click", imageClicked);
		document.getElementById("aimove").style.visibility="hidden";
	}
	
	function imageClicked(){
		var machine, human;
		var rule = [[0,1,-1,-1,1],
								[-1,0,1,1,-1],
								[1,-1,0,1,-1],
								[1,-1,-1,0,1],
								[-1,1,1,-1,0]]; /*1 means row wins column, -1 means column wins row, 0 means tie*/

		switch(this.id) {
			case "paper": human=0;break;
			case "rock": human=1; break;
			case "scissors": human=2; break;
			case "lizard": human=3; break;
			case "spock": human=4; break;
		}
		document.getElementById("aimove").style.visibility="visible";
		
		document.getElementById("human-choice").innerHTML="YOU CHOSE "+this.id +"<img src='../images/"+this.id+".png'>";
		machine=Math.floor(Math.random()*5);
		document.getElementById("machine-choice").innerHTML="MACHINE CHOSE "+allImages[machine].id+"<img src='../images/"+allImages[machine].id+".png'>";
		switch (rule[human][machine]) {			
			case 1: result.innerText="YOU WIN!"; break;
			case -1: result.innerText="YOU LOSE!"; break;
			case 0: result.innerText="TIE"; break;
		}
		
		for (let i=0; i<allImages.length; i++) allImages[i].removeEventListener("click", imageClicked);

	}
}

function scrabble(){
	var board = [0,0,0,0,0,0,0,0,0];
	var cells = document.getElementsByTagName("td");
	var count=0;

	for (var i = 0; i < 9; i++) {
    cells[i].boardIndex = i;
    //console.log(cells[i].boardIndex);
    cells[i].ondrop = function() {drop(this, event)};
    cells[i].ondragenter = function() {return false};
    cells[i].ondragover = function() {return false};
	}

	var items = document.getElementsByTagName("img");
	for (var i = 0; i < items.length; i++)
    items[i].ondragstart = function() {drag(this, event)};

	gameReset.onclick=function(){
		document.location.reload()
		gameover=false;
		out2.innerText="";
	}

	function drag(target, ev) {
		ev.dataTransfer.setData('Text', target.id);
	}

	function drop(target, ev) {
		// allow drop only if the cell is empty
		if (target.children.length == 0) {
			 var id = ev.dataTransfer.getData('Text');
			 target.innerText="";
			 target.appendChild(document.getElementById(id));
			 document.getElementById(id).setAttribute("draggable","false");
			 document.getElementById(id).style.cursor = 'no-drop';
			 target.style.border = (count % 2 === 0)
																	? "3px solid orange" 
																	: "3px solid teal";
			 board[target.boardIndex] = document.getElementById(id).alt;
			 ev.preventDefault();
			 count++;
			 checkStatusOfBoard(target.boardIndex);
			 if(!gameover) machineMove();
			 
		}
	}
	
	function checkStatusOfBoard(index) {
		console.log(board);
		for(combination of gameWinningCombo) {
			let streak=true;
			let sum=0;
			for (let i=0;i<3;i++){ 
				if (cells[combination[i]-1].style.border!="3px solid orange") streak=false;
				sum+=parseInt(board[cells[combination[i]-1].boardIndex]);
			}
			console.log(streak,sum);

			if (streak==true && sum==15) finish();
		}
		if (count==9) {
			out2.innerText="YOU LOSE!";
			gameover=true;
		}
	}
	
	function machineMove(){
		var order,selectedItem,selectedCell;
		let index;
		order=Math.floor(Math.random()*(9-count));
		index=0;
		while (order>=0) 
			if (items[index++].draggable==true) order--;
		selectedItem=items[index-1];
		order=Math.floor(Math.random()*(9-count));
		index=0;
		while (order>=0) 
			if (cells[index++].children.length == 0) order--;
		selectedCell=cells[index-1];
		console.log(selectedCell);
		console.log(selectedItem);
		selectedCell.innerText="";
		selectedCell.appendChild(selectedItem);
		selectedItem.setAttribute("draggable","false");
		selectedItem.style.cursor = 'no-drop';
		selectedCell.style.border = (count % 2 === 0)
																? "3px solid orange" 
																: "3px solid teal";
		board[selectedCell.boardIndex] = selectedItem.alt;
		count++;
		
	}
	
	function finish(){
		out2.innerText="YOU WIN!";
		gameover=true;
	}

}


