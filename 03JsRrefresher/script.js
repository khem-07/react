// // let a = 34;
// // console.log(a);
// // let b = 'This is a string';
// // console.log(b);


// function hello(){
//    // console.log("Hey Harry");
    
// }

// hello();

// let a = {
//    r: 64,
//    m: 'The',
//    func: function myfun(number){
//    // console.log("The number is" + number);
//    }
// }


// document.addEventListener("click", function click(){
//     console.log("Clicked");
//     //alert("Ohh hello Don't click like this.")
//     let conf = confirm("Are you sure");
//    // console.log(conf);
// })

// let arr = [23, 43,5 ,6 ];
// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


// arr.forEach(Element => {
     
// })
"use strict"

// let arr1 = [23, 68, 8, 4, 4545];
// console.log(this);

// function myfunc(number){
//     console.log("The number is "+ this); // here this undefined
// }
// let myfunc = (number) => {
//     console.log("The number is "+ this);  // here this is object window
// }


let myobj = {
    myfunc : (number) =>{
        console.log("The numbe is "+ this);
        
    }
}

myobj.myfunc();