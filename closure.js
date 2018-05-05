var myRef
var myObj = {
    callMeMaybe: function () {
        myRef = this;
        var val = setTimeout(function () { 
            console.log('Time is running out!'); 
            myRef.callMeMaybe();
        }, 1000);
    }
};

myObj.callMeMaybe();

setTimeout(function () { 
            console.log('try clear!'); 
            myRef = null;
        }, 5000);