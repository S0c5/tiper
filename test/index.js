'use strict';
/**
 * Created by s0c5 on 26/02/15.
 */


var Tiper   = require('../');

var should  = require('should');

describe('Get types and compare', function(){
    it('get all types', function(){
        var array = [0,2,3];
        var number = 0;
        var date = new Date();
        var regex = /w/;
        var string = "string";
        var fun = function(){};
        
        
        Tiper.get(array).should.be.equal(Tiper.ARRAY);
        Tiper.get(number).should.be.equal(Tiper.NUMBER);
        Tiper.get(regex).should.be.equal(Tiper.REGEX);
        Tiper.get(date).should.be.equal(Tiper.DATE);
        Tiper.get(string).should.be.equal(Tiper.STRING);
        Tiper.get(fun).should.be.equal(Tiper.FUNCTION);
    });
    it('Compare simplify', function(){
               
        var someObject = {name: 'foo'};
        
        Tiper.is(someObject, Tiper.OBJECT).should.be.equal(true);
        Tiper.is(someObject, {}).should.be.equal(true);

        Tiper.is(someObject, Tiper.ARRAY).should.be.equal(false);
        Tiper.is(someObject, []).should.be.equal(false);
        
    });
});

describe('Cast' , function(){
    it('cast array ', function(){
        
        var array = [1,2,3];
        
        var arrayCast = Tiper.cast(array, Tiper.STRING);
        
        for (var index in arrayCast)
        {
            var value = array[index];
            Tiper.get(value).should.be.equal(Tiper.STRING);
        }
        
    });
    it('Cast Object ', function(){

        var years = {
            david: '19',
            jeimy: '17'
        };

        var yearsCast = Tiper.cast(years, Tiper.NUMBER);
        Tiper.get(yearsCast.david).should.be.equal(Tiper.NUMBER);
        Tiper.get(yearsCast.jeimy).should.be.equal(Tiper.NUMBER);
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

        var multipleCast = Tiper.cast(multiple, Tiper.STRING);
        
        
        for (var index in multipleCast.array)
        {
            var value = array[index];
            Tiper.get(value).should.be.equal(Tiper.STRING);
        }
        
        Tiper.get(multipleCast.object.lorena).should.be.equal(Tiper.STRING);
        Tiper.get(multipleCast.object.david).should.be.equal(Tiper.STRING);
        Tiper.get(multipleCast.regex).should.be.equal(Tiper.STRING);
    });
});