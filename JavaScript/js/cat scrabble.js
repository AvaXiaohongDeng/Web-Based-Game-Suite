/*
		Author: 			Xiaohong Deng
		Program: 		  cat scrabble.js		
		Date:					2019 06 21
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
		var myArray = [];
		var numberArray=[[],[],[]];

		
		
		
		
		

		startButton=document.getElementById("gameReset");
		startButton.onclick=function() {
			for (let i=1; i<=9;i++) myArray[i]=false;
			var count=1;
			for (let i=1; i<=3; i++) 
				for (let j=1; j<=3; j++) {
					let number=getNumber(count++);
				  document.getElementById("a"+i+j).innerHTML='<img src="../images/'+number+'.png" id="one" width="60" draggable="true" alt="1">';
/* 					console.log(numberArray[i][j]); */
					numberArray[i-1][j-1]=number;
				}
			display();
		}
		
		function getNumber(x){

				var order=Math.floor((Math.random()*(10-x)+1));
				var index=1;
				
				while (order>0) {
					if (myArray[index++]==false) order--;
				} 
				myArray[index-1] = true;
				return index-1;
			
		}
		
		function display() {
			console.log("finish");
			var result;
			var boardState="";
			for (let i=1; i<=3; i++) {
				result=0;
				for (let j=1; j<=3; j++) result+=parseInt(numberArray[i-1][j-1],10);
				boardState+="row"+i+" total is "+result+"<br>";
			}
			for (let j=1; j<=3; j++) {
				result=0;
				for (let i=1; i<=3; i++) result+=parseInt(numberArray[i-1][j-1],10);
				boardState+="col"+j+" total is "+result+"<br>";
			}
			result=0;
			for (let i=1; i<=3; i++) result+=parseInt(numberArray[i-1][i-1],10);
			boardState+="diag1 total is "+result+"<br>";
			result=0;
			for (let i=1; i<=3; i++) result+=parseInt(numberArray[i-1][2-(i-1)],10);
			boardState+="diag2 total is "+result+"<br>";
			document.getElementById("out2").innerHTML=boardState;
			
		}
}   




