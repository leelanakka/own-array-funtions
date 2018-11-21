const assert = require('assert');
const {map,filter} = require('../src/lib.js');

const square = function(number){
  return number*number;
}

const increment = function(number){
  return number+1;
}

const isEven = function(number){
  return number%2==0;
}

const isOdd = function(number){
  return !(isEven(number));
}

describe('map',function(){
  it('should map the squares of the numbers',function(){
    assert.deepEqual(map([1,2,3,],square),[1,4,9]);
    assert.deepEqual(map([],square),[]);
    assert.deepEqual(map([1],square),[1]);
    assert.deepEqual(map([0],square),[0]);
    assert.deepEqual(map([-1],square),[1]);
  });
  it('should map the increment of numbers',function(){
    assert.deepEqual(map([1],increment),[2]);
    assert.deepEqual(map([0],increment),[1]);
  });
});

describe('filter',function(){
  it('should filter the even numbers',function(){
    assert.deepEqual(filter([1,2],isEven),[2]);
    assert.deepEqual(filter([1,2,3,4,5],isEven),[2,4]);
    assert.deepEqual(filter([2,4,6],isEven),[2,4,6]);
    assert.deepEqual(filter([],isEven),[]);
  });
  it('should filter the odd numbers',function(){
    assert.deepEqual(filter([1,2],isOdd),[1]);
  });
});
