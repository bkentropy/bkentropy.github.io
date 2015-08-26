(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
      return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };
  
  

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    if(n===0){
      return [];
    } 
    else if (n > array.length) {
      return array;
    }
    else {
    return n === undefined ? array[array.length-1] : array.slice(n-1);
    }
  };
  
  

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    if(Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i],i,collection);
      }
    }
    else {
      for(var key in collection) {
        iterator(collection[key],key,collection);
      }
    }
  };
  
  

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  
  // I figured out how to do it with a for loop first...
  // _.filter = function(collection, test) {
  //   var filterdArray = [];
  //   for(var i=0;i<collection.length;i++) {
  //     if(test(collection[i])) {
  //       filterdArray.push(collection[i]);
  //     }
  //   }
  //   return filterdArray;  
  // };
  
  // How do I get this to work??? I GOT IT ;)
  _.filter = function(collection,test) {
    var fArray = [];
    _.each(collection,function(item, index) {
      if(test(item)) {
        fArray.push(collection[index]);
      }
    })
    return fArray;
  }

 

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it
    var fArray = [];
    _.each(collection,function(item, index) {
      if(!test(item)) {
        fArray.push(collection[index]);
      }
    });
    return fArray;
    // I shall come back to you. Why not just copy paste?
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var uArray = [];
    _.each(array, function(val){
      if(_.indexOf(uArray, val) === -1){
        uArray.push(val);
      }
    });
    return uArray;
  };
  // _.uniq = function(array) {
  //   var uArray = [];
  //   _.filter(array, function(val){
  //     return !(_.indexOf(uArray,val)>-1)
  //   })
  // }
  


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var transArray = [];
    _.each(collection, function(val){
      transArray.push(iterator(val));
    });
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    return transArray;
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item){
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as it's second argument.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, iterator, accumulator) {
    if (accumulator === undefined) {
      var current = collection[0];
      // maybe use shift() if you feel like it...
        for(var i=1;i<collection.length;i++){
         current = iterator(current, collection[i]);
        }
    }
    else {
    current = accumulator;
      for(i=0;i<collection.length;i++){
         current = iterator(current, collection[i]);
      }
    }
    return current;
  };
  

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    if(Array.isArray(collection))
    return _.reduce(collection, function(wasFound, item) {
    return wasFound ? true : item===target;
    }, false);
    else {
      for(var key in collection) {
        if (target in collection) return true;
        if (target === collection[key]) return true;
      }
    }
  };
  //  Look at your reduce function asshole, wasFound is basically current.
  //  item is basically collection[i]


  // Determine whether all of the elements match a truth test.
  // ALL off the elements of an array must be truthy or _.every 
  // will return false
  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.
    // This is better
    // iterator = iterator || _.identity 
    if(iterator===undefined) {
        return _.reduce(collection, function(isWhat, item){
        return isWhat && item ? true : false;
      }, true)
    }
    else {
      return _.reduce(collection, function(isWhat, item){
        return isWhat && iterator(item) ? true : false;
      }, true)
    }
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.
    // COPY/PASTA from https://gist.github.com/DaveDH2/a39ea5c873f9ed6f1470
    iterator = iterator || _.identity;
    return !_.every(collection, function(val) {
      // console.log('this is value: ' + val + ' , ' + iterator(val) + ": " + (!iterator(val)));
      return !iterator(val);
    });
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a helper for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
    var args = Array.prototype.slice.call(arguments,1);
    _.map(args, function(newObj){
      for(var key in newObj) {
        obj[key] = newObj[key];
      }
    });
    return obj;
  };

}());
