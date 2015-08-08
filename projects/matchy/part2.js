//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.
// Use this file to implement Part One of your project

// *** Section One ***
// Declared profileAnimal
var profileAnimal = slowpoke;
//console.log(profileAnimal)
var key;
var i;
// 1.a,1,2,3) This loop is meant to log slowpoke data in a certain way
for (key in slowpoke) {
      var value = slowpoke[key];
      if (typeof value == "string") {
          console.log(key + ": " + value);
      } else if (Array.isArray(value) == true) {
          console.log(key + ": " + value.join(" "));
          } else {
          console.log(key + ": " + "Click here for more data."); 
      }
}
/* The way Along did it
var profileAnimal = animal[0];
for (var key in profileAnimal) {
    console.log("key: " + key)
    if (typeof profile[)
}

*/

// 1.b.1) Access the relationships data
console.log(profileAnimal.relationships);

// 1.b.2) Log the friends 
console.log(profileAnimal.relationships.friends);

// 1.b.3) Log the matches 
console.log(profileAnimal.relationships.matches);

// 1.b.4) Implement a way to remove friends
//var removed = relationships.friends.splice(1, 1);
//console.log(relationships.friends);
/* Alon's path ****
function deleteFriend(friend, friends) {
    var index = friend.indexOf(friend);
    if (index > -1) {
        return friends.splice(index, 1)[0];
    }
}
ALTERNATE
function deleteThem(friend, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === friend {
        return arr.splice(i,1)
        }
    }
}
*/


// *** Section 2 ***
// 2a:1, 2 Loop through animals collection and print out species and tagline
// 2a:2, also include the index counter 
for (i=0; i < animals.length; i++) {
    var index = i + 1;
    console.log(index + ". " + animals[i].species + ": " + animals[i].tagline);
    }

// *** Extra Credit ***
// 1) Act like animals[0] is logged in
var signedInUser = animals[0].species;
// 2) Print out only animals that are NOT part of the users friends 
// Declare variable that assist in for loop
var catsFriends = animals[0].relationships.friends;
//console.log(catsFriends + "BOOOO");
// Print out animals that are not friends with signed HMM animals[j].species
//  STILL NEED TO FIGURE OUT WHY SLOTH IS BEING PRINTED *************
for (var j=0; j < animals.length; j++) {
if (signedInUser.friends !== catsFriends[j]) {
    console.log("NOT " + animals[j].species);
    } 
}
/*
filter the loop you created above to only show other animals that are 
not friends with the signed-in user
1) write a loop
2) write an if statement
    a) (me=animal[0]) (animals[0].friends)
    b) (their friends = animals[i].species)
    c) (if animal[i].species !== animals[0].friends[i] console.log(animals[i]
    .species))
3) 
Alon's way
*/



// *** Section 3 *** 
// 3.1) Write a loop that goes through the animals collection 
//      and selects a particular species and logs its information.
// 3.2) Change the value of search animal to alter your search.
var searchAnimal = animals[2]; //[0] => cat, [3] => sloth
for (var i = 0; i < animals.length; i++) {
    var elem = animals[i]
    if (animals[i] == searchAnimal) {
    console.log("Searched for " + elem.species);
    }
}
/* The Alon Path
function search(animals, species) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].species === species) {
            return animals[i];
        }
    }
}
var found = search(animals,"dog");
found.relationships.friends.push(animals[0].species);
console.log(found)
*/
// FROM CODECADEMY but I think could be useful
// function search(keyName) {
//     var length = array.length;
//     for (var i = 0; i < length; i++) {
//         if (array[i].keyName === keyName) {
//             printPerson(contacts[i]); **
//         }
//     }
// }

// 3.3) Add a new friend to the searched for animal
var newFriend = friends.push(searchAnimal.species);
console.log(friends); //prints out cat, sloth, dog

// 3.4) Add a new match to the same animal
var newMatch = matches.push(searchAnimal.species);
console.log(matches);

// *** Section ***
// 4.1) Declare a user to be the Logged In User
loggedIn = animals[2].species; //doge 
// console.log(loggedIn.species); //dog

// 4.2) Change their species to another
loggedIn.species = "wolf";
// console.log(loggedIn.species); //wolf

// 4.3) Change the noises for this guy
loggedIn.noises = ["howl"," growl"," bite ",];
console.log("New noises " + loggedIn.noises);

// 4.4) Add a new match to all animals in the animals array
relationships.matches.push(animals[3].species);

// 4.5) Implement some other change meh 
animal.changeTagline = function(newTagline) {
    animal.tagline = newTagline;
};
animal.changeTagline("I will not be defeated!!")
console.log(animal.tagline);

// *** Section 5 *** 

// 5.1 Change all the species properties to be called name instead
for (i = 0; i < animals.length; i++) {
    
}
animals.species = animals.name;
console.log(animals.species);

/*console.log(animal[0].species + "THIS");*/
// for (i = 0; i < animals.length; i++) {
//     for (key in animals[i]) {
//         key.name = name;
//         if (animals[key].species == "species") {
//         key.species = name;
//         console.log("!" + name);
//         } else {
//             console.log(animals[key]);
//         }
//     }
// }

// 5.2 What if we wants to reset all the friendslist on all the animals?

// 5.3 What else might you want to change? Implement it!







