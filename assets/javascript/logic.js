// ready the doc
$(document).ready(function() {
    //console.log("CHECK");

    // array of original buttons
    var natureArr = ["beach", "jungle", "mountain", "ocean", "volcano", "waves", "desert", "river", "woodlands"];

    function buttonPush() {
        for (var i = 0; i < natureArr.length; i++) {
            //console.log(natureArr[i]);
            //makes it so var button is recognized as an actualy button
            var button = $("<button>");
            //makes it so the button produced has the class arrayButton
            button.addClass('arrayButton');
            //adda the attribute data-type to the button for each array item
            button.attr("data-type", natureArr[i]);
            //adds text to every button created for each item in the array
            button.text(natureArr[i]);
            //appends each button to the html page
            $("#natureButtons").append(button);
        }
    };
  
    //iD for submit:addNature
    //ID for gifs to fall in:Natures
    //How do i make the ratings pop up under the gifs? 
    //why cant you call a function in a for loop? ans? cause you cant call a function in the process of defining it?
});