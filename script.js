console.log("hello");
let element = document.createElement("p");
element.textContent = "hello";
document.body.appendChild(element);
//alert("stay"
//prompt("what is your name?");
//confirm("are you sure?");
let canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 let c = canvas.getContext("2d");
 
 c.fillStyle = "blue";
 c.beginPath();
 c.fillRect(100,100,100,100);
 c.fillRect(300,400,100,100);
 c.fillStyle = "black";
 c.fillRect(200,300,100,100);
 
 document.body.appendChild(canvas);
 /*c.beginPath();
 c.moveTo(50,300);
 c.lineTo(300,100);
 c.strokeStyle = 
 "rgba(0,0,255,0.1)";
 c.stroke();*/
 /*for(let z = 0;z<5;z++){
    let x = Math.random()* window.innerWidth;
    let y = Math.random()* window.innerHeight; */
    let x = 200;
    function animate(){
        requestAnimationFrame(animate);
       // c.clearRect(0,0,innerWidth,innerHeight);
        c.beginPath();
 c.arc(x,300,50,0,Math.PI*2,false);
 c.strokeStyle = "blue";
 c.stroke();
 x+=1;
    }

 
