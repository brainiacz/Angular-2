/*
    Author : Ajinkya
    Description : Declaration of variables and its scope.

*/

function doSomething() {
    /*  
        if you declare a variable in javascript using var keyword then its scope is available upto the current function.
    */
    for (var i = 1; i <= 10; i++) {
        console.log('Value of i : ' + i);
    }

    console.log('Final Value of i : ' + i);
}


doSomething();




