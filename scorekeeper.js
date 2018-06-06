function modify_qty(val) {
    
    var qty = document.getElementById('qty').value;
     var new_qty = parseInt(qty,10) + val;
    if (new_qty < 0) {
        new_qty = 0;
    }
    if (new_qty>4){
    	new_qty=4;
    }
    if(qty==new_qty){
        qty=new_qty
    }

    
    document.getElementById('qty').value = new_qty;
    
    

    if(qty==new_qty){
    	var newStyles = document.createElement('style')
		document.head.append(newStyles);
		newStyles.innerHTML = ".initialBox{ display:none}";
		

		if(qty==1){   
        var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".box1{visibility:visible}";
	    }

        if(qty==2){   
        var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".box1{visibility:visible}" + ".box2{visibility:visible}";
        }

        if(qty==3){   
        var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".box1{visibility:visible} "+ ".box2{visibility:visible}" + ".box3{visibility:visible}";
        }

        if(qty==4){   
        var newStyles = document.createElement('style')
        document.head.append(newStyles);
        newStyles.innerHTML = ".box1{visibility:visible}" + ".box2{visibility:visible}" +" .box3{visibility:visible}" +" .box4{visibility:visible}";
        }

	return new_qty;
}
}


function modify_score(val) {
            var score = document.getElementById('score').value;
            var new_score = parseInt(score,10) + val;
            document.getElementById('score').value = new_score; 
            return score;      
}

function modify_score2(val) {
            var score2 = document.getElementById('score2').value;
            var new_score2 = parseInt(score2,10) + val;
            document.getElementById('score2').value = new_score2;  
            return score2;     
}
function modify_score3(val) {
            var score3 = document.getElementById('score3').value;
            var new_score3 = parseInt(score3,10) + val;
            document.getElementById('score3').value = new_score3;       
            return score3;
}
function modify_score4(val) {
            var score4 = document.getElementById('score4').value;
            var new_score4 = parseInt(score4,10) + val;
            document.getElementById('score4').value = new_score4;    
            return score4;   
}


function endGame(){
    var team1=modify_score().valueOf();
    var team2=modify_score2().valueOf();
    var team3=modify_score3().valueOf();
    var team4=modify_score4().valueOf();
  
    var winner = [team1, team2, team3, team4];

    winner.sort(function(a,b){return b-a});

    if(winner[0] == winner[1]){
        document.getElementById("endGame").innerHTML = "There's a tie!";
    }
    
    else if(team1 == winner[0]){
    document.getElementById("endGame").innerHTML = "Congratulations to Team 1 for a great win!";
    }

    else if(team2 == winner[0]){
    document.getElementById("endGame").innerHTML = "Congratulations to Team 2 for a great win!";
    }

    else if(team3 == winner[0]){
    document.getElementById("endGame").innerHTML = "Congratulations to  Team 3 for a great win!";
    }
    
    else if(team4 == winner[0]){
    document.getElementById("endGame").innerHTML = "Congratulations to Team 4 for a great win!";
    }

    else{
        document.getElementById("endGame").innerHTML = "You Fucked UP!!!";
    }

}