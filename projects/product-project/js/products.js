$(document).ready(function(){
    
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
                //$itemProp.after($desc);
                $itemProp.after($price);
                $itemProp.after($color);
                $itemProp.after($availableColors);
                //$itemProp.after($specs);
                $itemProp.after($stock);
                $item.css('padding', '25px');
                return $item;  
            });
            // $('main').append($divs);
            $('main').html($divs);
            
    };
    

    function searchFunction(query, products){
            // function isComplex(value) {
            //       if (value !== null && typeof value === "object") return true;
            //       return false;
            // }
    		query = query.toLowerCase();
    		var results = products.filter(function(product){
    		    // Collect the KEYS of products
    		    var keys = Object.keys(product);
    		    
    		    // This filters the KEYS for strings, and creates a new array 
    		    // Maybe put John's COMPLEX V SIMPLE function here
    		    var stringProps = _.filter(keys, function (key) {
    		        return typeof(key) === 'string';
    		    });
    		    
    		    
    		    // Combines the keys that are strings into one long Property Text
    		    // describing the product.
    		    var propText = _.reduce(stringProps, function(total,str){
    		        if (product[str])
    		        return total + product[str];
    		    }, "");
    		    
    		    // This is an array of all of the words that are values for 
    		    // each 
    			var productKeywords = _.words(propText.toLowerCase());
    			
    			// returns true if a word in desc begins with the query
    			var searchHits = [];
    			// For each product keyword, which is an array of all the words 
    			// in all the values of the products run the function on them
    			_.forEach(productKeywords, function(word){
    			    // Push the words that START with the QUERY into searchHits
    				searchHits.push(_.startsWith(word, query));
    			});
    			return (_.some(searchHits));
    		});
    		return results;
    	}
    
    
    
    $.getJSON('data/product.json', function(products){
        
        printItems(products);
        
        $('#searchInput').on('input', function(){
			var input = $('#searchInput').val();
			printItems(searchFunction(input, products));
		});
        
        // Invoking this function puts the list of products on the page
        
    });  
    
    
    
        
        
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

