//let yellow ="Yellow";
//let otherYellow ="yellow";

//let favColor = yellow;

//console.log(yellow);
//console.log(otherYellow);

//console.log(yellow == otherYellow);

let usersChoice = prompt("do you like cardio?");
//console.log(usersColor);

// if users fav color is yellow say mine too
//otherwise say thats a good color

//if (usersColor.toLowerCase() == "yes"){
    // console.log("perfect, let's train");
//} else{
    //console.log("take a look around and see if this is for you");
//}

if (usersChoice.toLowerCase() == "yes"){
    document.write("perfect, let's train");
} else{
    document.write("not a fan of cardio? that's alright, maybe check out strength");
}