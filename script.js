function volume_sphere(event) {
  event.preventDefault(); // This prevents the form submission from reloading the page

  let r = document.getElementById("radius").value;
  let ans = (4 / 3) * Math.PI * Math.pow(r, 3);

  let vol = document.getElementById("volume");
  vol.value = ans.toFixed(2);
}


window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;
