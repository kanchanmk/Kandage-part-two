
let vacationType = "";
let destination="";
let tSuggestion="";
let groupSize = 0;

let enteredVacationType = false;
let enteredGrpSize = false;



/*
============================================
Vacation Type       Destination
Musical             New Orleans
Tropical            Beach Vacation in Mexico
Adventurous         Whitewater Rafting the Grand Canyon

============================================
Group Size          Travel Suggestion
1-2                 First Class
3-5                 Helicopter
6+                  Charter Flight

============================================

*/

do{
    vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?");
    if( vacationType.toLowerCase() === "musical")
    {
        console.log(" user entered musical !");
        destination = "New Orleans";
        enteredVacationType = true;

    }else if( vacationType.toLowerCase() === "tropical")
    {
        console.log(" user entered tropical !");
        destination = "Beach Vacation in Mexico";
        enteredVacationType = true;

    }else if( vacationType.toLowerCase() === "adventurous")
    {
        console.log(" user entered adventurous !");
        destination = "Whitewater Rafting the Grand Canyon";
        enteredVacationType = true;

    }
    else {
        console.log(" user entered ****" + vacationType);
        enteredVacationType = false;
    }
}while(enteredVacationType == false)

do{
    groupSize = prompt (" How many are in your group?");
    console.log("Group size entered " + groupSize);
    if(groupSize ==1 || groupSize ==2)
    {
        tSuggestion = "First Class";
        enteredGrpSize = true;

    }else if(groupSize >=3 && groupSize <=5)
    {
        tSuggestion = "Helicopter";
        enteredGrpSize = true;

    }else if(groupSize >=6 )
    {
        tSuggestion = "Charter Flight";
        enteredGrpSize = true;

    }else {
        enteredGrpSize = false;
    }
}while(enteredGrpSize == false)

// Build the result string and output to console
let result = " Since you’re a group of " + groupSize + "\n going on a " + vacationType + 
    " vacation,\n you should take a " + tSuggestion.toLowerCase() + "\n to " +  destination + ".";

console.log(result);