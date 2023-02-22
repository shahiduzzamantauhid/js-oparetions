// console.log("Hello, world!");

// // printing "ajke amar mon valo nei" 39 times
// var i = 1;
// for (i = 1; i < 40; i++) {
//     console.log("ajk amar mon valo nei " + i);
// }

// // for showing all even numbers between 1 to 100

// for (i = 412; i < 456; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// for (i = 412; i < 456; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// };


// // printing from an array

// var i_learned = ["html", "css", "bootstrap", "tailwind", "js"];
// for (i = 0; i <= i_learned.length; i++) {
//     console.log(i_learned[i]);
// };
// // now using while loop
// var j = 0;
// while (j <= i_learned.length) {
//     console.log("using while loop " + i_learned[j]);
//     j++;
// };

// var r_time = 0;
// for (r_time = 30; r_time <= 86; r_time++) {

//     if (r_time < 44) {
//         console.log(r_time);
//     } else {
//         console.log("Its upper then the limit");
//         break;
//     }

// };



// // book price list

// var book_price = [100, 120, 130, 140, 150, 160, 180, 190, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// for (i = 0; i < book_price.length; i++) {
//     if (book_price[i] <= 200) {
//         console.log("This book price is " + book_price[i]);
//     }
// }

// let addEven=[1,2,3,4,5,6,7,8,9,10];
// function addedEven(){
//     let sum=0;
//     for(let i=0;i<addEven.length;i++){
//         if(addEven[i]%2!=0){
//             sum=sum+addEven[i];
//             console.log(i);
//         }
//     }
//     return sum;
// }
// console.log(addedEven());

const spacification = {
    name: "Samsung Galaxy S21",
    price: 80000,
    color: "black",
    camera: "48MP",
    storage: "128GB",
    ram: "8GB",
    display: "6.2 inch",
}
const spacification2 = [
    name2="Samsung Galaxy S21",
    price2= 92000,
    color2= "black",
    camera2= "48MP",
    storage2= "128GB",
    ram2= "8GB",
    display2= "6.2 inch",
]


const {name, price, color, camera, storage, ram, display } = spacification;
console.log(name, price, color, camera, storage, ram, display);


const [name1, price1, color1, camera1, storage1, ram1, display1] = spacification2;
console.log(name1, price1, color1, camera1, storage1, ram1, display1);
