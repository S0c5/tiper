/**
 * Created by s0c5 on 26/02/15.
 */


var Tiper = require('../');

var OnlyForObject = function(object){

  if(Tiper.get(object) !== Tiper.OBJECT){
      throw  'only run with objects :)'
  }

};

var OnlyArrayObject = function(array){

    if(Tiper.is(array, Tiper.OBJECT)){
        throw  'only run with arrays :)'
    }

};

var convertAllToString = function(anyType){
    return Tiper.cast(anyType, Tiper.STRING)
};


// anything is possible with your imagination :) 



