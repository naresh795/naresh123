function myName(){
    var stringName = "sampletest";
    var stringlength = stringName.length;
    var reversedString ="";

    for (let index = stringlength-1; index >= 0; index--) 
    {
       reversedString += stringName[index];

       console.log (reversedString);
        
    }
}

myName();
