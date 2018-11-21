const map = function(array,func) {
  let resultArray = [];
  for(let index = 0; index < array.length; index++){
    let result = func(array[index]);
    resultArray.push(result);
  }
  return resultArray;
}

const filter = function(array,func){
  let resultArray = [];
  for(let index = 0; index < array.length ; index++){
    if(func(array[index])){
      resultArray.push(array[index]);
    }
  }
  return resultArray;
}
module.exports = { map,filter};
