const takeGarbageOut = (timeInHours) => {
    return new Promise((resolve, reject) => {
        if (timeInHours === 20) {
            setTimeout(() => {
                resolve("Oh, take the garbage outside the house!");
            }, 2000)
        } else if (timeInHours < 20) {
            reject("It's not time yet. Calm down fella");
        } else {
            reject("Gosh! You missed out the garbage collector's shift ;(");
        }
    });
}

takeGarbageOut(21)
    .then(result => {
        console.log('result', result);
    }).catch(error => {
        console.log('error', error);
    });

console.log('JOOOOJ');