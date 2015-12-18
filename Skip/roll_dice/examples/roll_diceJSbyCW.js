window.onload = function() {
 document.getElementById("submit").onclick = randomnumber;
};


//function that takes in number of dice requested upon submittal and spits out random numbers 1-6
function randomnumber () {
 var dicenumber = document.getElementById("dicenumber").value;
 var dicelist = []

for (var i=0; i < dicenumber; i++) {
 var rando = Math.random();
 rando = Math.floor(rando * 6);
 rando = rando + 1;
 dicelist.push(rando);
}
updateList()
addrow(dicelist)
};

function updateList() {
 document.getElementById("Dice").innerHTML = "";
}


function addrow(dicelist) {
 var table = document.getElementById("Dice");
 var row = table.insertRow();
 var cell1 = row.insertCell();
 var cell2 = row.insertCell();
 var cell3 = row.insertCell();
 var cell4 = row.insertCell();
 var cell5 = row.insertCell();
 var cell6 = row.insertCell();

 cell1.innerHTML = "<img  src=" + dicelist[0] +  '.png>';
 cell2.innerHTML = "<img  src=" + dicelist[1] +  '.png>';
 cell3.innerHTML = "<img  src=" + dicelist[2] +  '.png>';
 cell4.innerHTML = "<img  src=" + dicelist[3] +  '.png>';
 cell5.innerHTML = "<img  src=" + dicelist[4] +  '.png>';
 cell6.innerHTML = "<img  src=" + dicelist[5] +  '.png>';
}
