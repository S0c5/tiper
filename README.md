# tiper
  Tiper Tool for Nodejs

if you need get a type from a any object for validate or if you need cast easy tiper is for You.

## typeof why not? 

if you wanna compare array with object the result is the same.

```JavaScript 
    typeof [] === typeof {} // is true
```



### Examples

##### Get type and compare 

```JavaScript 
    var tiper = require('tiper');
    
    var someObject = {name: 'david'}
    
    tiper.get(someObject) === tiper.OBJECT // is true
    tiper.get(someObject) === Tiper.ARRAY // is false
    
    // simplify
    
    tiper.is(someObject, tiper.OBJECT) // is true
    
    // or 
    tiper.is(someObject, {}) // is true
    
    
```
####  Dynamic Cast


```JavaScript
  var tiper = require('tiper');
  // Simple 
  
  var string = tiper.cast(12313, tiper.STRING); // String: '12313'
  var date = tiper.cast('12/01/30', tiper.DATE); // Date: Mon Jan 30 2012 00:00:00 GMT-0500 (COT)
  var number = tiper.cast('123', tiper.NUMBER); // Number: 123
  ...
  
  // Extended
  
  var yearsPersons = {
      david: '19',
      lorena: '18'
  };
    
  var yearsPersonsNumber = tiper.cast(yearsPersons, tiper.NUMBER); // Object: {david: 19, lorena: 18}
  
  
  var arrayMultiType = ['1','2', '3', 1, 3, new Date()];

  var arrayOnlyNumber = tiper.cast(arrayMultiType, tiper.NUMBER); // Array: [ 1,  2,  3,  1,  3,  1424974791446 ]
  
  
  var exagerated = { 
    array: [1,3,4,5,6],
    names: [{david: 19}, {lorena: 18}],
    object: {
      names: [1,2,3,/w+/],
      lastName: [12,'123',new Date()]
    }
  };
  
  var onlyStrings = tiper.cast(exagerated, tiper.STRING); 
  /*
  Object: 
    { array: 
      [ '1',
         '3',
         '4',
         '5',
         '6' ],
      names: [ { david: '19' }, { lorena: '18' } ],
      object: 
       { names: [ '1', '2', '3', '/w+/' ],
         lastName: 
          [ '12',
            '123',
            'Thu Feb 26 2015 13:22:41 GMT-0500 (COT)' ] } 
    }
  */
  
  
  
  
  
  
  
  
```


