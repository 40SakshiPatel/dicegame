function rolldice(){
var p1 = Math.floor(Math.random() * 6) + 1;
console.log(p1);
var p2 = Math.floor(Math.random() * 6) + 1;
console.log(p2);
var imgscource1 = "images/dice"+p1+".png";

var img1 = document.images[0];
img1.setAttribute("src", imgscource1);
var imgscource2 = "images/dice"+p2+".png";

var img2 = document.images[1];
img2.setAttribute("src", imgscource2);

    if (p1 > p2)
    {
      document.getElementById("situation").innerHTML = "Palyer 1 Win!";
    }
    else if (p1 < p2)
    {
        document.getElementById("situation").innerHTML = "Palyer 2 Win!";
    }
    else
    {
      document.getElementById("situation").innerHTML = "Draw Match!";
    }
}
