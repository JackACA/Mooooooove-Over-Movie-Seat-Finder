var movieReview = [
        "The best movie this year!",
        "I laughed, I cried, then I laughed again!",
        "I could not sleep after seeing this movie!"
    ];
    
$(".reviews").click(function() {
    movieReview.forEach(function(movieReviews) {
        $("#movieReviews").text(movieReview);
});
});

    $("#calculateTotal").click(function() {
        var adult= parseInt($("#numberAdult").val());    
        var child= parseInt($("#numberChild").val());
        var total= (adult*12) + (child*8);
        $("#totalCost").text(total);
        if (total<0){
            $("#totalCost").text("You cannot select a negative number.");
        }   else if (total===0){
            $("#totalCost").text("You did not select any tickets.");
        }   else if (total>0){
            $("#totalCost").text("Your total cost is $" + total);
        }
        
        $("#totalCost").text(total);
        if (adult<0){
            $("#totalCost").text("I'm not paying for you!!");
        }   else if (child<0){
            $("#totalCost").text("I'm not paying for you!!");
        }
});


