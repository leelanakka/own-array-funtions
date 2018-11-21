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
    assert.deepEqual(filter([1,3,5,7],isEven),[]);
  });
  it('should filter the odd numbers',function(){
    assert.deepEqual(filter([1,2],isOdd),[1]);
    assert.deepEqual(filter([1,2,3,5],isOdd),[1,3,5]);
    assert.deepEqual(filter([2,4,6,8],isOdd),[]);
  });
  it('should filter positive integers',function(){
    assert.deepEqual(filter([1,2,3],isNumberPositive),[1,2,3]);
  });
});

describe('reduce',function(){
  it('should sum the all numbers',function(){
    assert.equal(reduce([1,2],sum),3);
    assert.equal(reduce([1,2,3],sum),6);
    assert.equal(reduce([2,4,6,8],sum),20);
  });
  it('should multiply the numbers',function(){
    assert.equal(reduce([1,2],multiplication),2);
    assert.equal(reduce([3,2],multiplication),6);
    assert.equal(reduce([3,2,2],multiplication),12);
    assert.equal(reduce([3,2,2,10],multiplication),120);
  });
});
