const map = function(mapper,array) {
  let resultArray = [];
  for(let index = 0; index < array.length; index++){
    let result = mapper(array[index]);
    resultArray.push(result);
  }
  return resultArray;
}

const filter = function(predicate,array) {
  let resultArray = [];
  for(let index = 0; index < array.length ; index++){
    if(predicate(array[index])){
      resultArray.push(array[index]);
    }
  }
  return resultArray;
}

const reduce = function(array,reducer,accumulator){
  let result = 0;
  for(let index = 0; index < array.length ; index++){
    if(array[index+1]){
      result = reducer(array[index],array[index+1]);
      array[index+1] = result;
    }
  }
  return result;
}

module.exports = { map,filter,reduce};
