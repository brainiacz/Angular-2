/*
    Author : Ajinkya
    Description : Declaration of variables and its scope.

*/

function doSomething() {
    /*  
        if you declare a variable in javascript using let keyword then its scope is available upto the current block.
    */
    for (let i = 1; i <= 10; i++) {
        console.log('Value of i : ' + i);
    }

   // console.log('Final Value of i : ' + i);
}


doSomething();


// You can see error while compiling the code, so for successfull execution comment the line number 15.


