/* function likeCardio(){
    let usersChoice = prompt("do you like cardio?");
    
    if (usersChoice.toLowerCase() == "yes"){
        document.write("so you like cardio? perfect, let's train");
    } else{
        document.write("not a fan of cardio? that's alright, feel free to look around and maybe check out strength");
    }
}
 */
function likeCardio(){
    let usersChoice = prompt("do you like cardio?");

    while (usersChoice !== "yes"){
        alert("that's not very heart healthy, you should reconsider your last answer");
        usersChoice = prompt("do you like cardio?")
        if (usersChoice.toLowerCase() == "yes"){
            document.write("so you like cardio? perfect, let's train");
    }
}
}

function numberOfHearts(){
    let output = '';
    let rating = prompt('from 1-5 how healthy is your heart?');
    for(let i = 0; i < rating; i++){
        output += "<img class='heart' src='assets/images/strongHeart.png'/>";

    }
    return document.write(output);
}

function changePic(){
    let img = document.querySelector('img');
    let btn1 = document.querySelector('#btn1');
    let btn2 = document.querySelector('#btn2');
    let btn3 = document.querySelector('#btn3');

    btn1.addEventListener('click', () =>{
    img.src ='assets/images/swimPicture.jpg';
})
    btn2.addEventListener('click', () =>{
    img.src ='assets/images/bikePicture.jpg';
})
    btn3.addEventListener('click', () =>{
    img.src ='assets/images/runPicture.jpg';
})
}



/* //function askTime(){
    let time = prompt('What time is it');
    let message;

    if(time <=11){
        message = 'good morning';
    } else if(time <= 18){
        message = 'good afternoon';
    } else if(time <=24){
        message = 'good evening';
    } else {
        message = 'time does not exist';
    }
    return message;
}
 */