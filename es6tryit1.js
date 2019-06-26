let n='sri sindhu';
let message=`Hi ${n} wecome to chennai!!!`;
console.log(message);
const val = () => {
    console.log("inside the function");
}

function numbers(x, y, ...z){

    console.log(x, y, z);
}
numbers(1, 2, 3, 4, 5, 6);
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }
  
  doHomework('math', function() {
    alert('Finished my homework');
  });

const contacts={
  name:"sindhu",
  age:21,
  family_name:"reddy"
}

let {name:othername,age,family_name}=contacts;
console.log(othername);

const mypromise = () =>{
    return new Promise((resolve,reject) =>{
      resolve ("hi promise is being executed..")
    })
}
  // main.js
  //import { square, diag } from 'visualsample';
  //console.log(square(11)); // 121
 // console.log(diag(4, 3)); // 5  