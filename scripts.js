
// Smooth scroll.
$(document).ready(function() {

    var scrollLink = $('.scroll');

    // Smooth scrolling.
    scrollLink.click(function(e){

        var navbarHeight = $('.navbar').height();
        var target = this.hash

        e.preventDefault();
        var scrollToPosition = $(target).offset().top - 2*navbarHeight;
        $('body,html').animate({scrollTop: scrollToPosition}, 600, function(){
            window.location.hash = "" + target;
            $('html').animate({scrollTop: scrollToPosition},0)
        });
        
    })

});

// Show the BCR pathway map.
function showPathway(){
    var Image_ID = document.getElementById("BCR_pathway");
    if(Image_ID.style.display == "none" || Image_ID.style.display == ""){
        Image_ID.style.display = "block";
    } else {
        Image_ID.style.display = "none"
    }
}