/**
 * Created by s0c5 on 26/02/15.
 */


var Tiper = require('../');

var OnlyForObject = function(object){

  if(Tiper.get(object) !== Tiper.TYPES.object){
      throw  'only run with objects :)'
  }

};

var OnlyArrayObject = function(array){

    if(Tiper.is(array, Tiper.TYPES.array)){
        throw  'only run with arrays :)'
    }

};

var convertAllToString = function(anyType){
    return Tiper.cast(anyType, Tiper.TYPES.string)
};


// anything is possible with your imagination :) 



