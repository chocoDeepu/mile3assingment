// 1 Feet To Mile Convert
function feetTomile (feet){
     var mile = feet * 0.000189;
     return mile;
 }
 
//  2 Wood Calculation
function woodCalculator(chair, table, bed){
    var chairWood = chair * 3;
    var tableWood = table * 7;
    var bedWood = bed * 10;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

// 3 Brick Calculation
function brickCalculator(floor){
    if(floor<=10){
        var feet=floor * 15;
        var numberOfbricks = feet * 1000;
    }
    else if( floor>10 && floor<= 20){
        var feet = floor * 12;
        var numberOfbricks = (feet * 1000)+30000 ;
    }
    else{
        var feet = floor * 10;
        var numberOfbricks = (feet * 1000)+30000+20000;
    }
    return numberOfbricks;
}

// // 4 Tiny Friend
function tinyFriend(names){
    var tinyName=names[0];
    for(var i=0; i < names.length; i++ ){
        var currentName = names[i];
        if(currentName < tinyName){
            tinyName = currentName;
        }
    }
    return tinyName;
}

