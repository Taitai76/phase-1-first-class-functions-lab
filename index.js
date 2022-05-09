const returnFirstTwoDrivers = (x)=>{
    return x.slice(0,2);
}
const returnLastTwoDrivers = (x)=>{
    return x.slice(-2);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    function multiplier(y){
        return y*x;
    }
    return multiplier;
}
const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

function selectDifferentDrivers(x, y){
    let a = []
    if (x[0]===y(x)[0]){
        a=[x[0],x[1]];
        return a;
    } else {
        a=[x[2],x[3]];
        return a;
    }
}