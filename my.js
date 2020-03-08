function myName(){
    var stringName = "changes made in naresh branch";
    var stringlength = stringName.length;
    var reversedString ="";

    for (let index = stringlength-1; index >= 0; index--) 
    {
       reversedString += stringName[index];

       console.log (reversedString);
        
    }
}

myName();
