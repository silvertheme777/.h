let canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

// Draw rectangles
c.fillStyle = "blue"; // Set the fill color
c.beginPath(); // Start a new path for rectangles
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 400, 100, 100);

c.fillStyle = "black"; // Change fill color
c.beginPath(); // Start a new path for this rectangle
c.fillRect(200, 300, 100, 100);

// Draw a line
c.beginPath(); // Start a new path for the line
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "rgba(0,0,255,0.1)";
c.stroke();

// Draw an arc
c.beginPath(); // Start a new path for the arc
c.arc(300, 300, 50, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

// Add the canvas to the document
document.body.appendChild(canvas);