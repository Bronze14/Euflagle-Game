import {imagesf} from './flags.js';
let images = imagesf;
console.log(images)
var randomNumber =  Math.floor(Math.random() * Object.keys(images).length)
document.querySelector("img").src = `${Object.keys(images)[randomNumber]}`
console.log()
var flag = `${Object.keys(images)[randomNumber]}`
var value = `${Object.values(images)[randomNumber]}`
console.log(value)
var inputValue = ``;
console.log(images)

function randomFlag(images){
      flag = `${Object.keys(images)[randomNumber]}`
      delete images[flag];
      //console.log(flag)
      //console.log(Object.keys(images).length)
      randomNumber = Math.floor(Math.random() * Object.keys(images).length)
      document.querySelector("img").src = `${Object.keys(images)[randomNumber]}`
      value = `${Object.values(images)[randomNumber]}`
      console.log(value)
      return value

  }

document.onkeydown=function(evt){
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if(keyCode == 13)
    {
      
    
        inputValue = document.querySelector("#inputBtn").value
        if(inputValue.toUpperCase()==value.toUpperCase()){ 
          //delete images.flag;
          console.log(images)
          addElement1(value)
          randomFlag(images)
        }
        else {
          console.log("ZLE")
          addElement2(inputValue  ) 
        }
        document.querySelector("#inputBtn").value = ""
    
    
    
        
    }
}

document.querySelector('#subBtn').addEventListener('click', function(){
    
    inputValue = document.querySelector("#inputBtn").value
    if(inputValue.toUpperCase()==value.toUpperCase()){ 
      //delete images.flag;
      console.log(images)
      addElement1(value)
      randomFlag(images)
    }
    else {
      console.log("ZLE")
      addElement2(inputValue  ) 
    }
    document.querySelector("#inputBtn").value = ""


})


function addElement1(value) {
  // create a new div element
  const newDiv = document.createElement("div");
  const newMark = document.createElement("div");
  const newBigDiv = document.createElement("div");
  newDiv.classList.add("mystyle1");
  newMark.classList.add("mystyle2");
  newBigDiv.classList.add("mystyle3");
  // and give it some content
  const newContent = document.createTextNode(value);
  const newContent2 =  document.createTextNode("✔️");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  newMark.appendChild(newContent2);
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("underSub");
  newBigDiv.append(newMark,newDiv);
  currentDiv.append(newBigDiv);
  
  //currentDiv.append(newDiv);
}
function addElement2(value) {
  // create a new div element
  const newDiv = document.createElement("div");
  const newMark = document.createElement("div");
  const newBigDiv = document.createElement("div");
  newDiv.classList.add("mystyle1");
  newMark.classList.add("mystyle2");
  newBigDiv.classList.add("mystyle3");
  
  // and give it some content
  const newContent = document.createTextNode(value);
  const newContent2 =  document.createTextNode("❌");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  newMark.appendChild(newContent2);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("underSub");
  newBigDiv.append(newMark,newDiv);
  currentDiv.append(newBigDiv);
}
