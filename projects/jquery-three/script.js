$(document).ready(function(){
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  // ALL YOUR CODE BELOW HERE //
        // 1) MERGE the oldGuardians and the newGuardians.
  var guardians = $.merge(oldGuardians, newGuardians);
  console.log(guardians);
  
        // 2) MAP the names properties of the objects.
  var guardianNames = $.map(guardians, function(val){
    return ('val.name: ', val.name);
  });
  console.log(guardianNames);
  
        // 2) MAP just the first names and not the full name.
  var firstName = $.map(guardianNames, function(str) {
    return str.split(" ")[0];
  })
  console.log(firstName)
  
        // 3) FILTER out the name Groot
  var filterOut = guardianNames.filter(function(index){
    return index !== "Groot";
    // OR return index.toLowerCase !== "groot";
  });
  console.log(filterOut);
  // Write a function that can take an array and make a table out of the data.
  // Ben walking us through
  var createTable = function(heroes) {
      var createRow = function(hero) {
        var $row = $('<tr>');
        
        var $name = $('<td>').text(hero.name);
        var $notes = $('<td>').text(hero.notes || "No Data Available.");
        $row.append($name);
        $row.append($notes);
        
        $notes.css('padding', '15px');
        $name.css("padding", "15px");
        $row.css('border', "1px solid black");
        $row.css('color', 'white');
        return $row;
      };
       var $table = $('<table>');
       var $rows = heroes.map(createRow);
       $table.append($rows);
       $table.appendTo('#tablediv');
       $table.css('border', "1px solid black");
       $table.css('margin', '60px');
       
    var $head = $('<thead>');
    var $headName = $('<th>').text('Name'); 
    var $headNotes = $('<th>').text('Notes');
    $head.prepend($headName);
    $head.prepend($headNotes);
    $head.appendTo($('#tablediv table'));
  };
 
  createTable(guardians);
  
  // How far I got 
  // function makeTable(arr) {
  //   arr.forEach(function(val){
  //     var $row = $('<tr></tr>');
  //     var $c1 = $row.append($('<td>' + arr + '</td>'));
  //     var $c2 = $row.append($('<td>' + val + '</td>'));
  //   })
    
  // }
  
  
  
  // ALL YOUR CODE ABOVE HERE //
});