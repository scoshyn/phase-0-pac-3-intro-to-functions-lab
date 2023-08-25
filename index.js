function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

//logShout("hello");

function logWhisper(string) {
    console.log(whisper(string));
}

//logWhisper("hi there");


function sayHiToHeadphonedRoommate(string) {
    let cantHear = 'I can\'t hear you!'
    let canHear = 'YES INDEED!'
    let dinnerPlans = 'I would love to!'
    if (string === string.toLowerCase()) {
        return cantHear;
       
    } else if (string === string.toUpperCase()) {
        return canHear;
    } else if (string === 'Let\'s have dinner together!') {
        return dinnerPlans
    }
    }

sayHiToHeadphonedRoommate("Let's have dinner together!");