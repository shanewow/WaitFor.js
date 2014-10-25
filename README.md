WaitFor.js
==========

#### Purpose ####

The aim of the project is to create a simple dependency manager that works regardless of how you orgaize your code files.


### Usage ###

```html
<script src="js/WaitFor.js"></script>
```

### FruitBowl.js ###

This code creates a FruitBowl class that depends on an Apple and a Banana object.

```js
$(document).ready(function(){
  WaitFor.these("Apple,Banana", function(){
    
    
    //FruitBowl constructor
    var FruitBowl = function(){
      this.apple = new Apple();
      this.banana = new Banana();
    };
    
    
    //Declare other class methods, properties, etc. here
    FruitBowl.prototype.fruityMethodA = function(){
      //....
    }
    
    FruitBowl.prototype.fruityMethodB = function(){
      //....
    }
    
    //Then
    
    //Call ready method to allow dependent code to initialize AFTER you have 
    //fully declared class methods and properties
    WaitFor.ready("FruitBowl");
    
  });
});
```

### Apple.js ###

This code creates a Apple class that the FruitBowl is dependent on.

```js
$(document).ready(function(){
  //Apple constructor
  var Apple = function(){
    this.seeds = 0;
  };
  
  //Declare other class methods, properties, etc. here
  Apple.prototype.setSeeds = function(seeds){
    this.seeds = seeds;
  };
  
  Apple.prototype.getSeeds = function(){
    return this.seeds;
  };
  
  //Then
  
  //Call ready method to allow dependent code to initialize AFTER you have fully declared class methods and properties
  WaitFor.ready("Apple");
});
```
