'use strict';
/**
 * Created by s0c5 on 26/02/15.
 */



var Tiper   = function (){
    var self = this;
    
    this.getName = function (obj) {
        return Object.prototype.toString.call(obj).split(' ')[1].replace(']','');
    };
    this.get = function (obj) {
        var type =  '_TIPER_' +Object.prototype.toString.call(obj).split(' ')[1].replace(']','')

        
        return type;
    };
    
    this.TYPES = {
        number      : self.get(0),
        string      : self.get(""),
        object      : self.get({}),
        date        : self.get(new Date()),
        regex       : self.get(/w/),
        boolean     : self.get(true),
        undefined   : self.get(undefined),
        array       : self.get([]),
        'function'  : self.get(function(){})
    };

    
    // Extend TYPES TO main object
    
    for(var key in this.TYPES)
    {
        var value  = this.TYPES[key];
        this[key.toUpperCase()] = value;
    }
    
    
    this.is = function (obj, type){

        
        if(this.get(type) !== this.TYPES.string)
        {
            type = this.get(type)
        }
        if(this.get(type) === this.TYPES.string)
        {
            if(!type.match(/^_TIPER_\w+$/))
            {
                throw 'Error the type for compare';
            }
        }
        return this.get(obj) === type;
    };
    
    this.cast = function (inObj, typeOut) {

        if(this.get(typeOut) !== this.TYPES.string)
        {
            typeOut = this.get(typeOut)
        }
        
        if(this.get(typeOut) === this.TYPES.string)
        {
            if(!typeOut.match(/^_TIPER_\w+$/))
            {
                throw 'Error the type for cast';
            }
        }

        var isTypeArray = this.is(inObj, this.TYPES.array);
        
        if (isTypeArray)
        {
            for(var i in inObj)
            {
                var item = inObj[i];
                inObj[i] = this.cast(item, typeOut);
            }
            return inObj;
        }

        var isTypeObject = this.is(inObj, this.TYPES.object);
        
        if(isTypeObject)
        {
            var objOut = {};
            
            for( var key in inObj)
            {
                var value = inObj[key];
                objOut[key] = this.cast(value, typeOut);
            }
            
            return objOut;
        }
        
        switch(typeOut)
        {
            case this.TYPES.string:
                return String(inObj);
            case this.TYPES.number:
                var number = Number(inObj);
                if(isNaN(number))
                    throw 'the input is not a number';
                return number;
            case this.TYPES.regex: 
                return RegExp(inObj);
            case this.TYPES.date:
                var date  = new Date(inObj);
                if (date.toString() === 'Invalid Date')
                    throw  'the input is not an valid date';
                return date;
            default :
                throw "The " + typeOut + " is not a valid type for cast for " + this.get(inObj)
        }
    };
    this.getPrimitive = function(obj){
        if(self.get(obj) != self.TYPES.function)
        {
            return null;
        }
        
        return obj.toString().match(/function ([\w\_]+)()/);
    };
    
};

module.exports = new Tiper();