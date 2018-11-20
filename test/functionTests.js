const assert = require('assert');
const {map} = require('../src/lib.js');

const square = function(number){
  return number*number;
}

const increment = function(number){
  return number+1;
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
