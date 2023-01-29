console.log("Hello, world!");

// printing "ajke amar mon valo nei" 39 times
var i=1;
for(i=1;i<40;i++){
    console.log("ajk amar mon valo nei "+i);
}

// for showing all even numbers between 1 to 100

for(i=412;i<456;i++){
    if(i%2==0){
        console.log(i);
    }
}
for(i=412;i<456;i++){
    if(i%2!=0){
        console.log(i);
    }
};


// printing from an array

var i_learned = ["html", "css", "bootstrap", "tailwind", "js"];
for(i=0;i<=i_learned.length;i++){
    console.log(i_learned[i]);
};
// now using while loop
var j=0;
while(j<=i_learned.length){
    console.log("using while loop "+i_learned[j]);
    j++;
};

var r_time =0;
for(r_time=30;r_time<=86; r_time++){
    
    if(r_time<44){
        console.log(r_time);
    }else{
        console.log("Its upper then the limit");
        break;
    }
    
};



// book price list

var book_price = [100,120, 130, 140, 150, 160, 180, 190, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for(i=0;i<book_price.length;i++){
    if(book_price[i]<=200){
        console.log("This book price is "+book_price[i]);
    }
}