/*let elem = new Image();
elem.src = "C:\Users\Admin\Pictures\Pictures\lovepik-geometric-gradual-change-background-image_400149295.jpg";
document.body.appendChild(elem);
let arr = ["abebe", "ha", "ght"];
let x = 0;
for( x in arr){
    console.log(arr);
};
myo ={};
john = {
fname :"john", lname :"ghy"
};
billt = {
    fname:"billy"
};
console.log([1, 2, 3] * 2
);
let mystr = String("hello");
console.log(mystr);
let mys = (77).toString();
console.log(mys);
let my =  new String('hoe');
console.log(my);
typeof my.valueOf();
console.log(typeof my.valueOf());
let s1 = 'hello', s2 = 'world';
//console.log(s1+" "+ s2);
console.log(s1.concat(" ", s2));
let var1 = `hello ${s2}`; 
String.raw`a\\b`;
function reverseString(str){
return str.split('').reverse().join('');}
console.log(reverseString('hello'));
let d = 'hello';
let g = d.split('');
console.log(g.join());
function comp(a,b){
    if(a>b){
        return 1;
    }
    else if( a<b){
        return -1;
    }else{
        return 0;
    }
}
let f = document.getElementById('para'). textContent = 
comp('hello','world');
let arr = ['zbb', 'be'];
let tre = 'dest';
console.log(arr.sort());
console.log(tre.charAt(0));
console.log(tre[1]);
console.log("reddit has the y\' howe");
let stre = "helloweyrjvc";
console.log(stre.slice(3));
console.log("h".charCodeAt());
let num  = 3;
console.log(num.toString());
console.log(typeof num);

let rarr = Array.from(alike);
rarr.forEach(element => {
    
});
let a = [];
for(let val in alike){
    a.push(alike[val]);
   
}
for(let i = 0;i<a.length;i++){
    console.log(a[i]);
}

let alike = { 
    name: "abb",
    age: 45
};

let a = []; // Initialize an empty array

for (let val in alike) {
    a.push(alike[val]); // Push each value of 'alike' into 'a'
}

for (let i = 0; i < a.length; i++) {
    console.log(a[i]); // Print each element of 'a'
}
let element;
const myarr = [1,2,3,4];

let d = document.getElementsByClassName('class');
Array.from(d).forEach(function(element,index,myarr){
d.innerHTML = element;
});
const num5 = [1,2,3];
 let r = num5.find(l=> l>0);
 console.log(r);*/
 let arre = new Array(10,7);
 let a2  = [1,3];
 console.log(arre.length);
 console.log(arre[0]);
 a2.push(4);
 console.log(a2[2]);
 arre.pop();
 arre.shift();
 console.log(arre);
 arre.unshift(5);
 console.log(arre);
 console.log(arre.includes(3));
 console.log(arre.indexOf(5));
 let ma = [1,2,34,5,7];
 ma.splice(1,0,3,5);
 console.log(ma);
 ma.splice(1,2);
 console.log(ma);
 ma.splice(1,1,7);
 console.log(ma);
 
 let tot=0;

 ma.forEach(ele=>tot+=ele);
 console.log(tot);
 ma.forEach(function (e,i){
    ma[i]=2 * e;
 });
 console.log(ma);
 ma.forEach(function (e,i){
 console.log(`${e}`);
    
 });
 let mat =[[1,2],[3,4]];
 console.log(mat);
 for (let t of ma){
    console.log(t);
 }
 console.log(Array.isArray(ma));
 console.log(ma.every(num=>num>0));
 ma.fill(0);
 console.log(ma);
 console.log(ma.filter(num=>num>2));
 console.log(ma.find(num=>num<2));
 
 console.log(ma.findIndex(num=>num<2));
 let d  =[1,2];
 let b= [3,4];
 let c= [...d,...b];
 console.log(c);
 function v(a,b){
    return a+b;
 }
 
 console.log(v(...d));
 console.log(d.reduce(function(a,b){
    return a+b;
    
 }));
let a = [2,3,4];
let r= [5,7];
console.log(a.concat(r));
console.log(a.sort(function (b,c){
return c-b;
}));
["zebras", "dogs", "elephants", "penguins"].sort(function(g, b) {
    return b.length - g.length;
   });
   let myArray = [1, 2, 3, 4];
for (let value of myArray) {
 let twoValue = value * 2;
 console.log("2 * value is: %d", twoValue);
}
let my2 = [1,2,3];
for(let m of my2.keys()){
    
    console.log( m+=2);
}
console.log(my2);
my2.every(function(v,i){
 let h =v*2;
 console.log(h);
 return v>2;
});
   












 
