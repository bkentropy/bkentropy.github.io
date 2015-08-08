// //Use this file to implement Part One of your project
// var cat = {
//     species: "calico",
//     tagline: 'I will knock everything over',
//     noises: ['meow', 'hiss','prrr']
// }

// var slowpoke = {
//     species: 'sloth',
//     tagline: 'Just you wait',
//     noises: ['aaaaa', 'bbbbbb', 'cccccccc', 'dddddddd']
// }

// var quacker = { 
//     species: 'duck', 
//     tagline: 'Afflac', 
//     noises: ['quack', 'honk', 'sneeze', 'growl'] 
    
// };
// var doge = {
//     species: 'dog',
//     tagline: 'what up... dog?',
//     noises: ['bark', 'woof', 'ruff'],
//     relationships: {
//         friends: ['duck', 'calico'],
//         matches: ['sloth', 'dog']
//     }
// }
// var loggedIn = doge;
var animals = [
    { 
        "species": "dog", 
        "tagline": "Doggie style is my thang", 
        "noises": ["woof", "bark", "whine", "growl"], 
        "relationships": {
            "friends": ["horse", "cat"],
            "matches": ["bird", "rabbit","cat"]
        }
    },
    { 
        "species": "horse", 
        "tagline": "I'm your stallion", 
        "noises": ["nahhh", "snort", "neehhh", "pufffff"],
        "relationships": {
            "friends": ["dog", "cat"],
            "matches": ["bird", "rabbit"]
        }
    },
    { 
        "species": "rabbit", 
        "tagline": "I'm a jack-rabbit, baby!", 
        "noises": ["fluff", "scratchy-scratch", "thump", "sot"],
        "relationships": {
            "friends": ["dog", "cat"],
            "matches": ["bird", "horse"]
        }
    },
    { 
        "species": "cat", 
        "tagline": "Keep it cool", 
        "noises": ["Meoh", "scratchy-scratch", "screech", "sissst"],
        "relationships": {
            "friends": ["dog", "rabbit"],
            "matches": ["bird", "horse"]
        }
    }
];


// 0.i) Create a function that prints the Object Keys
var keyList = [];
function objKeyPrinter(obj) {
  for (var key in obj) {
   // console.log(key);
    keyList.push(key);
    } 
    return keyList.join(", ");
}
// console.log("'" + objKeyPrinter(animal) + "'");



// 0.ii) Create a function that prints the Object Values
var valueList = [];
function objValuePrinter(obj) {
  for (var key in obj) {
   // console.log(key);
   if(typeof obj[key] == "string") {
    valueList.push(obj[key]);
    } }
    return valueList.join(", ");
}
// console.log("'" + objValuePrinter(animal) + "'");



// 0.iii) Create a function that prints the Array
var arrList = [];
function arrValuePrinter(obj) {
  for (var key in obj) {
   // console.log(key);
   if(Array.isArray(obj[key])) {
    arrList.push(obj[key]);
    } }
    return arrList.join(", ");
}
// console.log("'" + arrValuePrinter(animal) + "'");



// Create a function that Checks certain kinds of data
function dataTypeChecker(query) {
    if (Array.isArray(query)) {
        console.log("array");
   } else if(typeof query == "object")
    {
        console.log('object');
    } else {
        console.log("Try again!");
    }
}
// var arrOne = ['quack', 'honk', 'sneeze', 'growl'];
// var objOne = {};
// dataTypeChecker(arrOne);
// dataTypeChecker(objOne);



// Write a function that Capitilizes values of an object and returns an Object
//  ~*~ Ben's Code ~*~ makes an array but we want an OBJECT, now it DOES
var capitilizeVals = function (obj) {
    var keys = Object.keys(obj);
    var values = keys.map(function(key) {
        return obj[key];
    });
    var newValues =  values.map(function(val){
        if (typeof val === "string") {
            var firstLetter = val.charAt(0);
            var restOfString = val.slice(1);
            return firstLetter.toUpperCase() + restOfString;
        } else {
            return val;
        }
    });
    var capObj = {};
    keys.forEach(function(element, index, array){
      capObj[element] = newValues[index];
    });
    // for (var i = 0; i < keys.length; i++) {
    //     keys[i] = capObj[hmm]
    // }
    
    return capObj;
};



//  Capitilize the first letter of each word of a string AND return a STRING
function capitilize(string) {
    var firstLetter = string.charAt(0).toUpperCase();
    var restOfString = "";
    for (var i = 1; i < string.length; i++) {
        restOfString += string.charAt(i);
        
    }
    return firstLetter + restOfString;
}
function capEachFirstLet(string) {
 var newString = string.split(" ");
 var wholeSentence = []; 
 for (var i = 0; i < newString.length; i++) {
   wholeSentence.push(capitilize(newString[i]));
 }
  return wholeSentence.join(" ");
}
// This is the more elegant version
function strCapitilizer(string) {
    var newString = string.split(" ");
    var bob = newString.map(function(val){
        if (typeof val === "string") {
            var firstLetter = val.charAt(0);
            var restOfString = val.slice(1);
            return firstLetter.toUpperCase() + restOfString;
        } 
    });
    return bob.join(" ");
}



// Write a function that takes an Array and removes any non unique entries
var unique = function(arr) {
    var seen = {};
    return arr.filter(function(val) {
        if (seen[val]) {
            return false;
        } else {
            seen[val] = true;
            return true;
        }
    });
};



// Write a function that copies the contents of one obj into another
// resource: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
// function merge_options(obj1,obj2){
//     var obj3 = {};
//     for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
//     debugger;
//     for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
//     return obj3;
// }
function merge_options(obj1,obj2){
    for (var attrname in obj1) { obj2[attrname] = obj1[attrname]; }
    debugger;
    return obj2;
}
// This is a SHALLOW COPY
var obOne = {
    name: "Brian",
    age: 25
};
var obTwo = {
};
// console.log(merge_options(obOne, obTwo))



// 1a.i) Write a function named welcomeMessage that takes an animal object like this one
// and returns a string that says "Welcome, \ !".
var quacker = { 
    species: 'duck', 
    tagline: 'Afflac', 
    noises: ['quack', 'honk', 'sneeze', 'growl'] 
};
function welcomeMessage(obj) {
    return capEachFirstLet("Welcome, " + obj.species);
}



// 1a.ii) Write a function named profileData that takes an animal object like the duck 
// example in the previous exercise. It returns a string that includes both the 
// species and tagline with their corresponding values.
// function profileData(obj) {
//     // debugger;
//     var data = [];
//     for(var key in obj) {
//         if(typeof obj[key] === "string"){
//             var keyCap = strCapitilizer(key);
//             var valueCap = strCapitilizer(obj[key]);
//             data.push(keyCap + ": " + valueCap);
//         } 
        
//     }
//     return data;
// }



// 1a.iii) Edit your profileData function to include the noises array with its values
function profileData(obj) {
    // debugger;
    var data = [];
    for(var key in obj) {
        if(typeof obj[key] === "string"){
            var keyCap = strCapitilizer(key);
            var valueCap = strCapitilizer(obj[key]);
            data.push(keyCap + ": " + valueCap);
        } else if (Array.isArray(obj[key])) {
            var keyCap = strCapitilizer(key);
            var value = obj[key];
            data.push(keyCap + ": " + value)
        }
        
    }
    return data.join(", ");
}



// 1b.i) Create a function called relationshipLogger that takes an animal object and 
// returns the relationship object if it contains one. Otherwise, have your 
// function log "You have no relationships :("
function relationshipLogger(obj) {
   var relationships = obj.relationships
   if ((relationships && relationships.friends.length > 0) ||  (relationships && relationships.matches.length > 0)) {
       console.log(obj.relationships);    
   }
       else{
       console.log("You have no relationships :(");
   }

};



// 1b.ii) Write a function that takes two parameters, the species name and an animal 
// object. The function returns the relationship between the species and animal.
function areFriends(species, obj) {
    var friends = obj.relationships.friends;
    var matches = obj.relationships.matches;
    //is species a member of the obj.relationships.friends arry?
    // debugger;
    
}



// 1b.iii) addFriend is a function that allows your animal object to add a friend. It 
// takes a species (this could be just the name or the entire object depending
// on how you want to architect your app) and an animal object and adds that 
// species on to the animal object
function addFriend(species, obj) { 
    var friends = obj.relationships.friends;
    friends.push(species);
    return friends;
}
// ~*~ This only works if the OBJECT already has friends... is this why 
// facebook included Tom? ~*~

// function addFriend(addThisFriend, toThisFriend) { 
//     var friends = toThisFriend.relationships.friends;
//     friends.push(addThisFriend);
//     return friends;
// }
// This adds the object addThisFriend to the friends list of the toThisFriend object



// 1b.iv) Similar to addFriend, addMatch should add a match to your animal object.
function addMatch(species, obj) {
    var matches = obj.relationships.matches;
    matches.push(species);
    return matches;
}






// Sceneario 2a) nonFriends is a function that shows which animals in your 
// collection are not in your friendlist. You don't want current friends to 
// show up while you are browsing for new friends.
/*
we will need to 'compare' the animals array with the friendList array. and print
the animals Not in friendList
    shows animals in collection, must take a species to check his friends
        list, for in loop
        returns animals that are NOT friends
    else nothing basically
 */
; // this will be my collection
// helper function
function modifiedRelationshipLogger(obj) {
        if ("relationships" in obj) {
            return true;
        } else {
            return false;
        }
    }
// may need a COMPARER function

// set an array that can hold the members of nonFriends results
// if modifiedRelationLogger returns true 
    // compare animals with friendList and log the things in both list
// function nonFriends(obj, collection) {
//     var relationships = obj.relationships;
//     if (modifiedRelationshipLogger(obj)){
        
//     } else {
//         console.log()
//     }
// }
// var animals = [cat, doge, slowpoke, quacker];
function nonFriends(obj, collection) {
    var nonFriendList = [];
    //debugger;
    var friends = obj.relationships.friends
    for(var i = 0; i<collection.length; i++) {
        if (friends.indexOf(collection[i].species) === -1) {
            nonFriendList.push(collection[i].species);
        }
    } 
    return nonFriendList;
}
// ~*~ Ben's Code, it looks pretty cool ~*~
// var nonFriends = function(animals, animal) {
//  var allSpecies = animals.map(function(an) {
//     return an.species; 
//  });
//  return allSpecies.filter(function(species) {
//     return animal.relationships.friends.indexOf(species)=== -1; 
//  });
// };



// Sceneario 3: Search and Add Friends
function searchHelper(obj,query) {
   var searchResults = [];
   for (var i = 0; i < animals.length; i++) {
       for(var key in obj) {
           if (key === query || obj[key] === query){
               return searchResults.push(query);
           }
       }
   }
   console.log(searchResults);
};





// Scenerio 5: Edit Animal Collection Data


// 5.2) Write a function that will clean up the data.
var testArray = [{'a': 'b', 'c': 'd'},{'a': 'q'}];
function cleansData(arr, argu) {
  for(var i = 0; i < arr.length; i++) {
    for(var key in arr[i]) {
      if (argu !== key) { // !== to keep, === to delete
        delete arr[i][key];
      }
    } 
  }
  return arr;
}

// This function should check if the "argu" is a proptery|key of the obj.
var testObj = {'a': 'b', 'c': 'd'};
function checksObjectForA(obj, strArgu) {
    for (var key in obj) {
        if( strArgu === key) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

// console.log(cleansData([{'a': 'b', 'c': 'd'},{'a': 'q'}], 'a'));

// TRY THIS FUNCTION IF ^^^ DOESNT WORK
// var unique = function(arr) {
//     var seen = {};
//     return arr.filter(function(val) {
//         if (seen[val]) {
//             return false;
//         } else {
//             seen[val] = true;
//             return true;
//         }
//     });
// };


