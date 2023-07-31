function volume_sphere() {
    //Write your code here
	onsubmit.preventDefault();
	let r =document.getElementById("radius").value;
	let ans =r;

	let vol=document.getElementById("volume");
	vol.value=ans;
	
  
} 


window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;
