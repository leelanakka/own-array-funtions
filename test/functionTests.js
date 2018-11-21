const assert = require('assert');
const {map,filter,reduce} = require('../src/lib.js');

const square = function(number){
  return number*number;
}

const increment = function(number){
  return number+1;
}

const sum = function(num1,num2){
  return num1+num2;
}

const multiplication = function(num1,num2){
  return num1*num2;
}

const isEven = function(number){
  return number%2==0;
}

const isOdd = function(number){
  return !(isEven(number));
}

const isNumberPositive = function(number){
  return number >= 0;
}
describe('map',function(){
  it('should take empty array and return the empty array',function(){
    assert.deepEqual(map(square,[]),[]);
  });
  it('should map the increment of numbers',function(){
    assert.deepEqual(map(increment,[1]),[2]);
    assert.deepEqual(map(increment,[0]),[1]);
  });
});

describe('filter',function(){
  it('should filter the even numbers',function(){
    assert.deepEqual(filter(isEven,[1,2]),[2]);
    assert.deepEqual(filter(isEven,[1,2,3,4,5]),[2,4]);
    assert.deepEqual(filter(isEven,[2,4,6]),[2,4,6]);
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(isEven,[2]),[2]);
    assert.deepEqual(filter(isEven,[1,3,5,7]),[]);
  });
  it('should filter the odd numbers',function(){
    assert.deepEqual(filter(isOdd,[1,2]),[1]);
    assert.deepEqual(filter(isOdd,[1,2,3,5]),[1,3,5]);
    assert.deepEqual(filter(isOdd,[2,4,6,8]),[]);
  });
  it('should filter positive integers',function(){
    assert.deepEqual(filter(isNumberPositive,[1,2,3]),[1,2,3]);
  });
});

describe('reduce',function(){
  it('should sum the all numbers',function(){
    assert.equal(reduce([1,2],sum,1),3);
    assert.equal(reduce([1,2,3],sum,1),6);
    assert.equal(reduce([2,4,6,8],sum,1),20);
  });
  it('should multiply the numbers',function(){
    assert.equal(reduce([1,2],multiplication,1),2);
    assert.equal(reduce([3,2],multiplication,1),6);
    assert.equal(reduce([3,2,2],multiplication,1),12);
    assert.equal(reduce([3,2,2,10],multiplication,1),120);
  });
});
