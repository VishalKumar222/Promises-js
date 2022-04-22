//Q.1   Write one e.g. and explain how can write a callback function 
//Q.5. 


const sayHi = (nameOfFriend) => {
    console.log("Hello Brother", nameOfFriend);
};

const greeting = (friend, callbackFunction) => {
    callbackFunction(friend);
};

greeting("VISHAL", sayHi);


//Q.2    Write callback function to print numbers from 1 to 7.
// In which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
//Q.6... Explain callback hell function.


const getNumbers = () => {
    console.log("Printing the numbers");
    setTimeout(() => {
        console.log("1")
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                        setTimeout(() => {
                            console.log("6");
                            setTimeout(() => {
                                console.log("7");
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

getNumbers();



//Q.3    Write promise function to print numbers from 1 to 7.
// In which 1 should be printed after 1 second , 2 should be printed after 2 second, 3 should be printed after 3 second and so on. 



let promise = new Promise((resolve, reject) => {
    resolve();
})

promise.then(() => {
    setTimeout(() => {
        console.log("1")
    }, 1000);
}).then(() => {
    setTimeout(() => {
        console.log("2")
    }, 2000);
}).then(() => {
    setTimeout(() => {
        console.log("3")
    }, 3000);
}).then(() => {
    setTimeout(() => {
        console.log("4")
    }, 4000);
}).then(() => {
    setTimeout(() => {
        console.log("5")
    }, 5000);
}).then(() => {
    setTimeout(() => {
        console.log("6")
    }, 6000);
}).then(() => {
    setTimeout(() => {
        console.log("7")
    }, 7000);
})

//Q.4...  Create a promise function accepting a argument.
// If yes is passed to the function then it should go to resolved state and print Promise Resolved.
// & if nothing is passed then it should go to reject state and print Promise Rejected. 



//Q.7... Explain promises function.

let promise1 = (arg) =>
    new Promise((resolve, reject) => {

        if (arg == "yes") {

            return resolve();

        } else {

            return reject();
        }
    })


promise1("y").then(() => {
    console.log("Promise resolved");

}).catch(() => {

    console.log("Promise is rejected")

})


//Q.8.. Explain async await function with example

async function tryingPromises() {

    console.log("Inside the function");

    const response = await fetch("https://api.github.com/users");

    console.log("Before response");

    const users = await response.json();

    console.log("user resolved");

    return users;

}

console.log("Before calling the function");

let data = tryingPromises();

console.log("After calling the function ");

console.log(data);
data.then((res) => {

    console.log(res);

});
console.log("Ending the code");