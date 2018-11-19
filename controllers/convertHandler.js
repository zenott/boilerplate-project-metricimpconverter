/*
*
*
*       Complete the handler logic below
*       
*       
*/
const units=['km','mi','lbs','kg','gal','l'];
const unitConv={
  mi: 'km',
  gal: 'l',
  lbs: 'kg',
  km: 'mi',
  l: 'gal',
  kg: 'lbs'
}
const unitSpell = {
  gal: 'gallons ',
  l: 'liters',
  mi: 'miles ',
  km: 'kilometers',
  lbs: 'pounds ',
  kg: 'kilograms'
};

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let unitRes;
    for(let unit of units){
      if(input.indexOf(unit)!==-1){
        unitRes=input.slice(input.indexOf(unit));
        result=input.slice(0,input.indexOf(unit));
        break;
      }
    }
    if(!unitRes){
      return 'invalid unit';
    }
    if(result===''){
      return '1';
    }
    if(!isNaN(result)){
      return result;
    } else{
      return 'invalid number';
    }
  };
  
  this.getUnit = function(input) {
    let result;
    for(let unit of units){
      if(input.indexOf(unit)!==-1){
        result=input.slice(input.indexOf(unit));
        break;
      }
    }
    if(units.indexOf(result)!==-1){
      return result;
    } else{
      return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let result=unitConv[initUnit];
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result=unitSpell[unit];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit){
      case 'kg':
        result=initNum/lbsToKg;
        break;
      case 'lbs':
        result=initNum*lbsToKg;
        break;
      case 'gal':
        result=initNum*galToL;
        break;
      case 'l':
        result=initNum/galToL;
        break;
      case 'mi':
        result=initNum*miToKm;
        break;
      case 'km':
        result=initNum/miToKm;
        break;
      default:
        result=-1;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result=`${initNum} ${this.spellOutUnit(initUnit)} converts to ${Math.round(returnNum*100000)/100000} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
