$(document).ready(function(){
    
    
    $.getJSON('data/product.json', function(products){
        
    //  This function can only accept the EXACT value from the product list
    //  And right now can only put ONE thing in an array to return.
         $('#submit').on('click', function(){
            var searchValue = $('#num-one').val(); 
            // products is an array of object AOO
            // console.log(products); // confirms the AOO
            var filterTheItems = function() {
            var foundProducts = [];
                for(var i = 0; i<products.length; i++) {
                    for(var key in products[i]) {
                        // check for the searchValue
                        if(products[i][key] === searchValue) {
                            // console.log(searchValue);
                            foundProducts.push(products[i]);
                        }
                    }
                }
            console.log(foundProducts);
            return foundProducts;
            };
        filterTheItems(searchValue);
      // $('main').html(createSearchItems());
        });
        
        
        // Invoking this function puts the list of products on the page
        printItems(products);
    });  
    
    
    var printItems = function(arr) {
            var $divs = arr.map(function(item) {
                var $item = $('<div id="item">');
            
                var $img = $('<img>').attr('src', 'img/product/thumbs/' + item.image);
                var imgLink = $('<a href="http://www.google.com">').html($img);
                var $itemProp = $('<ul>');
                var $desc = $('<li id="desc">').text(item.desc);
                var $price = $('<li id="price">').text("Cost: " + item.price);
                var $color = $('<li id="color">').text("Default color: " + item.color);
                var $availableColors = $('<li id="availableColors">').text("Color options: " + item.availableColors);
                var $specs = $('<li id="specs">').text(item.specs);
                var $stock = $('<li id="stock">').text("Hurry, only " + item.stock + " left in stock!");
            
                $item.append(imgLink);
                $item.append($itemProp);
                $itemProp.after($desc);
                $itemProp.after($price);
                $itemProp.after($color);
                $itemProp.after($availableColors);
                $itemProp.after($specs);
                $itemProp.after($stock);
                $item.css('padding', '25px');
                return $item;  
            });
            $('main').append($divs);
            
    };
        
        
        // useful
       // $('#submit').on('click', function(){
        //    var searchValue = $('#num-one').val();
       
    //   THOUGHTS: I want to make an input field and a button. ***
    //   Make a click handler for submit, google how to get value from an input ***
    //   I want to get the value the from the field and use that as input. ***
    //      =>searchValue
    //   This input will be used for a filter 
    //   Then write filter function
    /*
            The Filtering Function
                It should take an array of objects ***
                Search through the properties of the objects for the searchValue
                return a new array of objects
                replace the old AOO with the new AOO on the page
    */
     //    This function takes the value from the input field and can print
    //    on to the console, OR TRY to make an array
    
        
    
  
        // var searchValue = $('#num-one').val();
        
        
    // $('#submit').on('click', function(){
    //         // console.log($('#num-one').val());
    //     $.getJSON('data/product.json', function(products){
    //         var searchValue = $('#num-one').val();
    //     // products is an array of object AOO
    //     // console.log(products); // confirms the AOO
    //         // debugger;
    //         var filterTheItems = function() {
    //         var foundProducts = [];
    //             for(var i = 0; i<products.length; i++) {
    //                 for(var key in products[i]) {
    //                     // check for the searchValue
    //                     console.log(searchValue);
    //                     if(products[i][key] === searchValue) {
    //                         foundProducts.push(products[i]);
    //                     }
    //                 }
    //             }
    //         console.log(foundProducts);
    //         };
    //     filterTheItems();
            
    //     });
    // });
 
    
});




// Ben's way but mine works
    /*
    var printProducts = function(products) {
        var $products = products.map(function(product) {
            console.log(product);
            return $('<div>').addClass('product').append(
                $('<h3>').text(product.desc),
                $('<div>').text("$" + product.price),
                $('<div').text('Stock: ' + product.stock),
                $('<img>').attr("src", "img/product/" + product.image)
                    .addClass("img img-responsive")
                );
        });
        $('main').html($products);
    }
    */

