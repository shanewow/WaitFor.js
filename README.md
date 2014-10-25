WaitFor.js
==========

#### Purpose ####

The aim of the project is to create a simple and lightweight dependency manager that is used the same way regardless of how you organize your code files. You can setup your code with many (class) files or, you can compress it all into one and WaitFor.js will work without having to refactor any code.


### Usage ###
Download WaitFor.js file and place in your js directory. Then inlude it in you html file using the following code:

```html
<script src="js/WaitFor.js"></script>
```

### Example ###

This code creates a FruitBowl class that depends on an Apple and a Banana class to be instantiated in the DOM first. Notice the "WaitFor.these" call in the beginning and the "WaitFor.ready" call at the end. That's all you need.

```js
$(document).ready(function(){
  WaitFor.these("Apple,Banana", function(){
    
    
    //FruitBowl constructor
    var FruitBowl = function(){
      this.apple = new Apple();
      this.banana = new Banana();
    };
    
    
    //Declare other class methods, properties, etc. here ex:
    FruitBowl.prototype.fruityMethodA = function(){
      console.log("I like apples.");
    };
    
    //Then
    
    //Call ready method to allow dependent code to initialize AFTER you have 
    //fully declared class methods and properties
    WaitFor.ready("FruitBowl");
    
  });
});
```

This code creates a Apple class that the FruitBowl is dependent on. The Apple class does not depend on other classes to exist so it only needs to call the "WaitFor.ready" method at the end to tell other dependant classes that it now exists and is available to use.

```js
$(document).ready(function(){
  //Apple constructor
  var Apple = function(){
    this.seeds = 0;
  };
  
  //Declare other class methods, properties, etc. here
  //Example:
  Apple.prototype.setSeeds = function(seeds){
    this.seeds = seeds;
  };
  
  
  //Then
  
  //Call ready method to allow dependent code to initialize AFTER you have fully declared class methods and properties
  WaitFor.ready("Apple");
});
```
