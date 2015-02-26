/**
 * Created by s0c5 on 26/02/15.
 */


var Typer = require('../');

var OnlyForObject = function(object){

  if(Typer.get(object) !== Typer.TYPES.object)
  {
      throw  'only run with objects :)'
  }

};

var OnlyArrayObject = function(array){

    if(Typer.is(array, Typer.TYPES.array))
    {
        throw  'only run with arrays :)'
    }

};

var convertAllToString = function(anyType){
    return Typer.cast(anyType, Typer.TYPES.string)
};


// anything is possible with your imagination :) 



