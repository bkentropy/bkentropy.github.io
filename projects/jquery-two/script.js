var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

// 
var addAvengers = function(arr) {
    // arr.sort();
    $('body').append('<ul id="avengers"></ul>');
    for (var i = 0; i < arr.length; i++ ) {
        $('#avengers').append('<li class=' + arr[i].replace(/\s+/g, '-').toLowerCase() + '>' + arr[i] + '</li>');
    }
    // var avengArr = $('#avengers').children()
    // for (var i = 0; i < avengArr.length; i++ ) {
    //     avengArr[i].text()
    // }
    
}

addAvengers(avengers);

var theAssembler = function(classRemove, classRemove2, classAdd) {
    // both takes strings
    $(classRemove2).remove();
    $(classRemove).remove();
    $('#avengers').append('<li class=' + classAdd.replace(/\s+/g, '-').toLowerCase() + '>' + classAdd + '</li>');
}

// var list = document.getElementById('avengers');

// var items = list.childNodes;
// var itemsArr = [];
// for (var i in items) {
//     if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
//         itemsArr.push(items[i]);
//     }
// }
// console.log(itemsArr)
// http://stackoverflow.com/questions/282670/easiest-way-to-sort-dom-nodes
var listSorter = function() {
var list = $('#avengers').children();
list.sort(function (a, b) {
  if (a.innerHTML > b.innerHTML) {
    return 1;
  }
  if (a.innerHTML < b.innerHTML) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
$('#avengers').hide();
$('body').append('<ul id="avengers2"></ul>')
for (var i = 0; i < list.length; i++) {
    $('#avengers2').append(list[i]);
}
}
listSorter();
// Create a button that can be clicked
// $('body').append('<button id=f2l; type="button">Click Me!</button>');

// $('#f2l').click(function() {
//     $('#avengers2 li').first().attr('id', 'detached')
//     var detached = $('#detached').detach();
//     detached.appendTo('#avengers2');
// });

// I'm trying this onClick method.
// It worked!
$('body').append('<button onclick="myFunction()">Click me</button>');
function myFunction(){
    $('#avengers2 li').first().attr('id', 'detached')
    var detached = $('#detached').detach();
    detached.appendTo('#avengers2');
}

// setTimeout(func, time)
// var timeoutID;
// function oneAtATime() {
//     timeoutID = window.setTimeout(hello, 2000)
// }
// setTimeout(hello, 200)
// window.setTimeout(hello, 200)
// function hello() {
//     console.log("Hello")
// }