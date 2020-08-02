var division=document.querySelectorAll(".division");
var btn=document.querySelector(".btn");
btn.addEventListener("click",function(){
	var numlist=[];
	for (var i = 0; i< 6;i++) {
		numlist[i]=randomnumbergene();
		}
 		 division.style.background="linear-gradient(to right,rgb("+numlist[0]+","+numlist[1]+","
 		+numlist[2]+"),rgb("+numlist[3]+","+numlist[4]+","+numlist[5]+"))";
});
function randomnumbergene(){
	var num=Math.floor(Math.random()*256);
	return num;
}