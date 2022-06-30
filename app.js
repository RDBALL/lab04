function likeCardio(){
    let usersChoice = prompt("do you like cardio?");
    
    if (usersChoice.toLowerCase() == "yes"){
        document.write("so you like cardio? perfect, let's train");
    } else{
        document.write("not a fan of cardio? that's alright, feel free to look around and maybe check out strength");
    }
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
// }
 */
