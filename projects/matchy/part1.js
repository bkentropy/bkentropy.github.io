// Use this file to implement Part One of your project

var animal = {
    
};
animal.species = "cat";
console.log(animal.species);
animal["tagline"] = "i'm here meow";
console.log(animal["tagline"]);
animal.noises = null;
console.log(animal);

var noiseArray = [];
noiseArray[0] = "pew pew";
noiseArray.push("*knocking something over*");
noiseArray.unshift("mew mew");
noiseArray[3] = "silent death stare";
console.log(noiseArray.length);
console.log(noiseArray);

var noises = "noises";

console.log(animal[noises]);

animal.noises = noiseArray;
console.log(animal.noises);
console.log(animal);

//You can add to objects with dot notation and bracket notation
//You can add to an array with push, unshift, or bracket
//You could set the name equal to a variable
//YOu don't have to type the quotes or strange symbols

var animals = [];
animals.push(animal);


var quackers = { 
    species: 'duck', 
    tagline: 'Afflack', 
    noises: ['quack', 'honk', 'sneeze', 'growl'] 
}
animals[1] = quackers;

var doge = { 
    species: 'dog', 
    tagline: 'Mans best friend', 
    noises: ['bark', 'ruff', 'woof', 'growl'] 
}

var slowpoke = {
    species: 'sloth',
    tagline: 'Just you wait',
    noises: ['aaaaa', 'bbbbbb', 'cccccccc', 'dddddddd']
}

animals.push(doge, slowpoke);

console.log(animals);
console.log(animals.length);

var friends = [];
friends.push(animals[0].species, animals[3].species);
// animal(cat) and slowpoke(sloth) are in the friends array

console.log(friends);

// Declare an object called relationships
var relationships = {
    
};
// Add the friends array created earlier to the relationships object, creating
// a subset in relationships called friends
relationships.friends = friends;
console.log(relationships);

// Create an array called matches, adding it as a subset of relationships
var matches = [];
relationships.matches = matches;
console.log(relationships);

// Add some matches to the array
relationships.matches.push(animals[1].species, animals[2].species);
console.log(relationships.matches);

// Loop through the animals and add the relationships array
for (var i=0; i < animals.length; i++) {
    animals[i].relationships = relationships;
}
console.log(animals);





