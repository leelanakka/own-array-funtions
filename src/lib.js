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

const reduce = function(array,func){
  let result = 0;
  for(let index = 0; index < array.length ; index++){
    if(array[index+1]){
      result = func(array[index],array[index+1]);
      array[index+1] = result;
    }
  }
  return result;
}

module.exports = { map,filter,reduce};
