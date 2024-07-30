// Create a new promise
let promise = new Promise((resolve, reject) => {
    let success = true; // Change to false to see the reject case

    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

// Using the promise
promise
    .then((message) => {
        console.log("Success: " + message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
