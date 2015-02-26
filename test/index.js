'use strict';
/**
 * Created by s0c5 on 26/02/15.
 */


var Typer   = require('../');
var should  = require('should');

describe('Get types', function(){
    it('get all types', function(){
        var array = [0,2,3];
        var number = 0;
        var date = new Date();
        var regex = /w/;
        var string = "string";
        var fun = function(){};
        
        
        Typer.get(array).should.be.equal(Typer.TYPES.array);
        Typer.get(number).should.be.equal(Typer.TYPES.number);
        Typer.get(regex).should.be.equal(Typer.TYPES.regex);
        Typer.get(date).should.be.equal(Typer.TYPES.date);
        Typer.get(string).should.be.equal(Typer.TYPES.string);
        Typer.get(fun).should.be.equal(Typer.TYPES.function);
    });
});

describe('Cast' , function(){
    it('cast array ', function(){
        
        var array = [1,2,3];
        
        var arrayCast = Typer.cast(array, Typer.TYPES.string);
        
        for (var index in arrayCast)
        {
            var value = array[index];
            Typer.get(value).should.be.equal(Typer.TYPES.string);
        }
        
    });
    it('Cast Object ', function(){

        var years = {
            david: '19',
            jeimy: '17'
        };

        var yearsCast = Typer.cast(years, Typer.TYPES.number);
        Typer.get(yearsCast.david).should.be.equal(Typer.TYPES.number);
        Typer.get(yearsCast.jeimy).should.be.equal(Typer.TYPES.number);
    });
    it('Cast Object with array and regex ', function(){
        
        var multiple = {
            numbers : [1,2,3,4,5],
            object: {
                david : 12,
                lorena: 12
            },
            regex: /w+/
        };

        var multipleCast = Typer.cast(multiple, Typer.TYPES.string);
        
        
        for (var index in multipleCast.array)
        {
            var value = array[index];
            Typer.get(value).should.be.equal(Typer.TYPES.string);
        }
        
        Typer.get(multipleCast.object.lorena).should.be.equal(Typer.TYPES.string);
        Typer.get(multipleCast.object.david).should.be.equal(Typer.TYPES.string);
        Typer.get(multipleCast.regex).should.be.equal(Typer.TYPES.string);
    });
});