document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let service = document.getElementById("service").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

document.getElementById("result").innerHTML = `
<h3>Booking Confirmed ✅</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Date:</strong> ${date}</p>
<p><strong>Time:</strong> ${time}</p>
<p><strong>Phone:</strong> ${phone}</p>
`;

});
