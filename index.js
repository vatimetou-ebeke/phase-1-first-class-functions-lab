// Code your solution in this file!


const   returnFirstTwoDrivers = (drivers)=> drivers.slice(0,2)

const  returnLastTwoDrivers = (drivers)=> drivers.slice(-2)

let  selectingDrivers =[ returnFirstTwoDrivers,returnLastTwoDrivers];

function  createFareMultiplier(n){
    return function(y){
     return n*y
    }
}
const fareDoubler= createFareMultiplier(2)
const  fareTripler = createFareMultiplier(3)

function  selectDifferentDrivers( drivers,rutundrivers ){

    if(rutundrivers=" returnFirstTwoDrivers"){
        return drivers.slice(0,2)
    }else if (rutundrivers=" returnLastTwoDrivers"){
        return drivers.slice(-2)
    }
}

    


