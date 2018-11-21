/*
*
*
*       Complete the handler logic below
*       
*       
*/
const units=[/(^|(?<=\d))km$/,/(^|(?<=\d))mi$/,/(^|(?<=\d))lbs$/,/(^|(?<=\d))kg$/,/(^|(?<=\d))gal$/,/(^|(?<=\d))l$/];
const unitConv={
  mi: 'km',
  gal: 'l',
  lbs: 'kg',
  km: 'mi',
  l: 'gal',
  kg: 'lbs'
}
const unitSpell = {
  gal: 'gallons',
  l: 'liters',
  mi: 'miles',
  km: 'kilometers',
  lbs: 'pounds',
  kg: 'kilograms'
};

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let unitRes;
    input=input.toLowerCase();
    result=input.match(/^[0-9\.\/]*($|(?=\w+))/)[0];
    
    if(result===''){
      return '1';
    }
    if(result.indexOf('/')!==0 && result.split('/').length===2){
      result=result.split('/')[0] / result.split('/')[1];
    }
    if(!isNaN(result)){
      return result;
    } else{
      return 'invalid number';
    }
  };
  
  this.getUnit = function(input) {
    let result;
    input=input.toLowerCase();
    for(let unit of units){
      if(input.search(unit)!==-1){
        result=input.slice(input.search(unit));
        break;
      }
    }
    if(result){
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
    initUnit=initUnit.toLowerCase();
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
