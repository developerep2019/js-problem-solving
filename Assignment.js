// Conversion of Feet to Mile
function feetToMile(num) {
    var mile = num / 5280;
    var fixedMile = mile.toFixed(3);
    var final = parseFloat(fixedMile);
    return 'There are ' + final + ' Mile in ' + num + ' Feet'
}

var mileResult = feetToMile(5280); 
console.log(mileResult);
// Conversion of Feet to mile Done;

// Wood Calculator Function Work Below
function woodCalculator(chair, table, bed){
    var chairNeeded = chair * 1;
    var tableNeeded = table * 3;
    var bedNeeded = bed * 5;
    var totalWood = chairNeeded + tableNeeded + bedNeeded;
    return 'The needing of your Wood is : ' + totalWood + ' Cubic Feet' ;
}
var woodResult = woodCalculator(3, 5, 10);
console.log(woodResult);
//Wood Calculator Function done;

// Brick Calculator Function Work Below
